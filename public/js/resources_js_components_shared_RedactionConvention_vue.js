"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_shared_RedactionConvention_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/nsia/conventions/DAJC-CONV1.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/nsia/conventions/DAJC-CONV1.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");
/* harmony import */ var _services_ebapis_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../services/ebapis.service */ "./resources/js/services/ebapis.service.js");
/* harmony import */ var _services_credit_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../services/credit.service */ "./resources/js/services/credit.service.js");
/* harmony import */ var _vueform_multiselect_dist_multiselect_vue2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vueform/multiselect/dist/multiselect.vue2 */ "./node_modules/@vueform/multiselect/dist/multiselect.vue2.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
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
  name: "DAJC-CONV1",
  display: "DAJC-CONV1",
  components: {
    MoreVerticalIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_3__.MoreVerticalIcon,
    ChevronUpIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_3__.ChevronUpIcon,
    ChevronDownIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_3__.ChevronDownIcon,
    PlusIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_3__.PlusIcon,
    TrashIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_3__.TrashIcon,
    AirplayIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_3__.AirplayIcon,
    Multiselect: _vueform_multiselect_dist_multiselect_vue2__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  props: {
    tb_name: String,
    meta_data: Object,
    isLoading: Boolean,
    convention_id: String,
    type_convention: String,
    tb_display_name: String,
    redaction_conventions: Array
  },
  created: function created() {
    var _this = this;
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _this.getProfessions();
          case 2:
            _context.next = 4;
            return _this.getCredits();
          case 4:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }))();
  },
  mounted: function mounted() {},
  data: function data() {
    var vm = this;
    return {
      ebapisHost: _services_ebapis_service__WEBPACK_IMPORTED_MODULE_0__["default"].host,
      authcheck: false,
      authcheckUsr: null,
      authcheckStatus: null,
      watchInPause: false,
      initLoad: true,
      seen: true,
      meta_parseable: {
        cred_pub_key: this.meta_data["cred_pub_key"],
        tb_name: this.tb_name
      },
      fonction: "",
      seen1: true,
      seen2: true,
      seen3: true,
      seen4: true,
      seen5: true,
      seen6: true,
      res: 0,
      taxe: 0,
      debounce: null,
      professions: [],
      type_credits: [],
      mask_telephone: "",
      formDataToBeWatched: {
        id: (0,uuid__WEBPACK_IMPORTED_MODULE_4__["default"])(),
        type_convention: "",
        type_credit: "",
        montant_approuve: 0,
        taux: 0,
        teg: 0,
        tps: 10,
        tbb: 10.7,
        duree_credit: 0,
        mode_paiement_demande: "",
        frequence_versement: 1,
        frequence_mois: 1,
        mode_tranche: "",
        emprunteur: "",
        profession: "",
        date_naissance: "",
        ville_naissance: "",
        pays_naissance: "",
        ville_residence: "",
        telephone: "",
        type_piece: "",
        num_piece: "",
        date_delivrance_piece: "",
        date_fin_piece: "",
        lieu_delivrance_piece: "",
        compte_numero: "",
        expose: "",
        r_mensualite: 0,
        r_interet: 0,
        r_ttcredit: 0,
        nombre_echeance: 0,
        type_echeance: "",
        frais_taux: 0,
        frais_min: 0,
        indicatif_telephone: "",
        compte_deposit: "",
        montant_souscription_profit: 0,
        montant_nantissement_compte: 0,
        montant_ordre_vir_permanent: 0,
        au_credit_du_compte: "",
        numero_de_compte_nanti: "",
        fait_a: "",
        fait_le: ""
      },
      list_tranches: [{
        libelle: "Mensuelle",
        val: "Mensuelle",
        type: "Mensualité"
      }, {
        libelle: "Trimestrielle",
        val: "Trimestrielle",
        type: "Remboursement trimestriel"
      }, {
        libelle: "Semestrielle",
        val: "Semestrielle",
        type: "Remboursement semestriel"
      }, {
        libelle: "Annuel",
        val: "Annuel",
        type: "Annuité"
      }, {
        libelle: "In fine",
        val: "In fine",
        type: "Remboursement unique"
      }, {
        libelle: "Bimensuelle",
        val: "Bimensuelle",
        type: "Remoursement bimensuel"
      }, {
        libelle: "Bimestrielle",
        val: "Bimestrielle",
        type: "Remboursement bimestriel"
      }, {
        libelle: "Plusieurs tranches",
        val: "Plusieurs tranches",
        type: "Remboursement par tranche"
      }],
      frais_credits: [],
      edit_mode: true,
      on_saving: false,
      first_time: false
    };
  },
  computed: {
    professions_: function professions_() {
      return [{
        id: 0,
        libelle: 'Autre',
        slug: 'autre'
      }].concat(_toConsumableArray(this.professions));
    }
  },
  methods: {
    tableClosedOrOpened: function tableClosedOrOpened() {
      this.seen = this.fetchClosedTables(this.tb_name + this.meta_data["cred_pub_key"]);
    },
    openNotesModal: function openNotesModal() {
      var listing = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      this.listingNote = listing;
      this.$modal.show(this.tb_name);
    },
    formDataVars: function formDataVars(event) {
      this.formDataToBeWatched[event[0]] = event[1];
      this.handleInput();
    },
    selectedOptionFonction: function selectedOptionFonction(value, obj) {
      this.formDataToBeWatched.fonction = obj === null || obj === void 0 ? void 0 : obj.libelle;
      if (this.fonction == 'Autre') {
        this.formDataToBeWatched.fonction = "";
      }
      this.handleInput();
    },
    setTbVal: function setTbVal(val) {
      this.cred_pub_key = val;
    },
    retract: function retract() {
      this.seen = !this.seen;
      var a = {
        tb_name: this.tb_name + this.meta_data["cred_pub_key"],
        status: this.seen
      };
      EventBus.$emit("savedclosed-table", a);
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
    retract1: function retract1() {
      this.seen1 = !this.seen1;
    },
    retract2: function retract2() {
      this.seen2 = !this.seen2;
    },
    retract3: function retract3() {
      this.seen3 = !this.seen3;
    },
    retract4: function retract4() {
      this.seen4 = !this.seen4;
    },
    handleInput: function handleInput() {
      this.handleSimulate();
    },
    convertInt: function convertInt(n) {
      return Number(n === null || n === void 0 ? void 0 : n.toString().replace(/\s/g, ''));
    },
    setEditMode: function setEditMode() {
      this.edit_mode = false;
      if (this.on_saving == false) {
        this.$emit("edit-mode", {
          convention_id: this.formDataToBeWatched.id
        });
        this.edit_mode = true;
      }
    },
    closeEditMode: function closeEditMode() {
      this.$emit("edit-mode", {
        close: true
      });
    },
    handleInputFreqMois: function handleInputFreqMois() {
      this.handleInput();
      // this.updateTauxCredit();
    },
    handleInputFreqVersement: function handleInputFreqVersement() {
      this.handleInput();
      // this.updateTauxCredit();
    },
    handleSimulate: function handleSimulate() {
      var _this$formDataToBeWat,
        _this$formDataToBeWat2,
        _this$formDataToBeWat3,
        _this2 = this;
      var tauxHT = ((_this$formDataToBeWat = this.formDataToBeWatched) === null || _this$formDataToBeWat === void 0 ? void 0 : _this$formDataToBeWat.taux) / 100;
      var tps_default = (_this$formDataToBeWat2 = (_this$formDataToBeWat3 = this.formDataToBeWatched) === null || _this$formDataToBeWat3 === void 0 ? void 0 : _this$formDataToBeWat3.tps) !== null && _this$formDataToBeWat2 !== void 0 ? _this$formDataToBeWat2 : 10;
      var tps = tps_default / 100;
      var tauxTTC = tauxHT * (1 + tps);
      this.formDataToBeWatched.tps = tps_default;
      if (['', null, undefined].includes(this.formDataToBeWatched.mode_tranche)) {
        this.formDataToBeWatched.mode_tranche = "Mensuelle";
      }
      if (['', null, undefined].includes(this.formDataToBeWatched.mode_paiement_demande)) {
        this.formDataToBeWatched.mode_paiement_demande = "Mensuelle";
      }
      if (['', null, undefined].includes(this.formDataToBeWatched.frequence_mois)) {
        this.formDataToBeWatched.frequence_mois = 1;
      }
      if (['', null, undefined].includes(this.formDataToBeWatched.frequence_versement)) {
        this.formDataToBeWatched.frequence_versement = 1;
      }
      var montant = this.convertInt(this.formDataToBeWatched.montant_approuve);
      var duree = parseFloat(this.formDataToBeWatched.duree_credit);
      this.formDataToBeWatched.duree_credit = duree;
      if (this.frais_credits) {
        this.frais_credits.forEach(function (el) {
          if (el.libelle == "Prime d'assurance") {
            tauxTTC += el.taux / 100;
          }
        });
      }
      var frequence_mois = parseInt(this.formDataToBeWatched.frequence_mois);
      var frequence_versement = parseInt(this.formDataToBeWatched.frequence_versement);
      var nbEcheance = duree * frequence_versement / frequence_mois;
      var nbEcheanceAnnuel = 12 * frequence_versement / frequence_mois;
      var tauxInteret = tauxTTC / nbEcheanceAnnuel;
      var montantEcheance = montant * tauxInteret / (1 - Math.pow(1 + tauxInteret, -1 * nbEcheance));
      var tauxMensuel = tauxInteret;
      var mensualite = montantEcheance;
      this.res = 0;
      var interet_ht = 0;
      if (tauxMensuel == 0) {
        mensualite = montant;
      } else {
        interet_ht = mensualite * duree - montant;
        this.res = Math.ceil(interet_ht + interet_ht * this.taxe / 100);
      }
      if (duree == 0) {
        duree = 1;
      }
      var totalCredt = this.res + parseInt(montant);
      this.formDataToBeWatched.r_mensualite = Math.ceil(mensualite);
      this.formDataToBeWatched.r_interet = this.res;
      this.formDataToBeWatched.r_ttcredit = totalCredt;
      this.formDataToBeWatched.nombre_echeance = nbEcheance;
      var found = this.list_tranches.find(function (el) {
        return el.libelle == _this2.formDataToBeWatched.mode_tranche;
      });
      if (found) {
        var _found$type;
        this.formDataToBeWatched.type_echeance = (_found$type = found === null || found === void 0 ? void 0 : found.type) !== null && _found$type !== void 0 ? _found$type : "";
      }
    },
    handleInputModetranche: function handleInputModetranche($event) {
      if ($event.target.value == 'In fine') {
        var _this$formDataToBeWat4;
        this.formDataToBeWatched.mode_paiement_demande = "In fine";
        this.formDataToBeWatched.frequence_versement = 1;
        this.formDataToBeWatched.frequence_mois = (_this$formDataToBeWat4 = this.formDataToBeWatched) === null || _this$formDataToBeWat4 === void 0 ? void 0 : _this$formDataToBeWat4.duree_credit;
      }
      if ($event.target.value == 'Mensuelle') {
        this.formDataToBeWatched.mode_paiement_demande = "Mensuelle";
        this.formDataToBeWatched.frequence_versement = 1;
        this.formDataToBeWatched.frequence_mois = 1;
      }
      if ($event.target.value == 'Trimestrielle') {
        this.formDataToBeWatched.mode_paiement_demande = "Trimestrielle";
        this.formDataToBeWatched.frequence_versement = 1;
        this.formDataToBeWatched.frequence_mois = 3;
      }
      if ($event.target.value == 'Semestrielle') {
        this.formDataToBeWatched.mode_paiement_demande = "Semestrielle";
        this.formDataToBeWatched.frequence_versement = 1;
        this.formDataToBeWatched.frequence_mois = 6;
      }
      if ($event.target.value == 'Annuel') {
        this.formDataToBeWatched.mode_paiement_demande = "Annuel";
        this.formDataToBeWatched.frequence_versement = 1;
        this.formDataToBeWatched.frequence_mois = 12;
      }
      if ($event.target.value == 'Bimensuelle') {
        this.formDataToBeWatched.mode_paiement_demande = "Bimensuelle";
        this.formDataToBeWatched.frequence_versement = 2;
        this.formDataToBeWatched.frequence_mois = 1;
      }
      if ($event.target.value == 'Bimestrielle') {
        this.formDataToBeWatched.mode_paiement_demande = "Bimestrielle";
        this.formDataToBeWatched.frequence_versement = 1;
        this.formDataToBeWatched.frequence_mois = 2;
      }
      if ($event.target.value == 'Bimestrielle') {
        this.formDataToBeWatched.mode_paiement_demande = "Bimestrielle";
        this.formDataToBeWatched.frequence_versement = 1;
        this.formDataToBeWatched.frequence_mois = 2;
      }
      if ($event.target.value == 'Plusieurs tranches') {
        this.formDataToBeWatched.mode_paiement_demande = "Plusieurs tranches";
        this.formDataToBeWatched.frequence_versement = 0;
        this.formDataToBeWatched.frequence_mois = 0;
      }
      this.handleInput();
    },
    determineMontantApprouve: function determineMontantApprouve() {
      var _this$meta_data$dossi;
      var dossier = (_this$meta_data$dossi = this.meta_data['dossier_credit']) !== null && _this$meta_data$dossi !== void 0 ? _this$meta_data$dossi : {};
      var caract_inter_pret = dossier === null || dossier === void 0 ? void 0 : dossier.caract_inter_pret;
      var latestAmount = 0;
      var latetstDuree = 0;
      if (caract_inter_pret != null) {
        var _dossier$final_outcom;
        var finalOutcomeUserRole = dossier === null || dossier === void 0 || (_dossier$final_outcom = dossier.final_outcome) === null || _dossier$final_outcom === void 0 ? void 0 : _dossier$final_outcom.giver_role_sigle;
        var latestObj = caract_inter_pret.find(function (el) {
          return el.role_sigle == finalOutcomeUserRole;
        });
        latestAmount = latestObj === null || latestObj === void 0 ? void 0 : latestObj['montant_pret_' + finalOutcomeUserRole];
        latetstDuree = latestObj === null || latestObj === void 0 ? void 0 : latestObj.duree_pret;
        if (!latestAmount) {
          var _caract_inter_pret$at, _caract_inter_pret$at2, _caract_inter_pret$at3;
          finalOutcomeUserRole = (_caract_inter_pret$at = caract_inter_pret.at(-1)) === null || _caract_inter_pret$at === void 0 ? void 0 : _caract_inter_pret$at.role_sigle;
          latestAmount = (_caract_inter_pret$at2 = caract_inter_pret.at(-1)) === null || _caract_inter_pret$at2 === void 0 ? void 0 : _caract_inter_pret$at2['montant_pret_' + finalOutcomeUserRole];
          latetstDuree = (_caract_inter_pret$at3 = caract_inter_pret.at(-1)) === null || _caract_inter_pret$at3 === void 0 ? void 0 : _caract_inter_pret$at3['duree_pret'];
        }
      }
      return {
        montantDef: latestAmount,
        dureeDef: latetstDuree
      };
    },
    getProfessions: function getProfessions() {
      var _this3 = this;
      _services_credit_service__WEBPACK_IMPORTED_MODULE_1__["default"].loadProfessions().then(function (res) {
        _this3.professions = res.data.data;
      })["catch"](function (err) {
        console.log(err);
      });
    },
    getCredits: function getCredits() {
      var _this4 = this;
      _services_credit_service__WEBPACK_IMPORTED_MODULE_1__["default"].loadCreditBanques({
        categorie_client: 'Retail'
      }).then(function (res) {
        _this4.type_credits = res.data;
      })["catch"](function (err) {
        console.log(err);
      });
    },
    send2Backend: function send2Backend(newVal) {
      var _this5 = this;
      this.on_saving = true;
      this.$emit("autosaving");
      this.$axios.post(this.ebapisHost + "creditbuilder/api/v1/redaction-convention/", {
        cred_pub_key: this.meta_parseable['cred_pub_key'],
        filledData: newVal
      }).then(function (response) {
        _this5.on_saving = false;
        _this5.$emit("autosaving");
        if (_this5.edit_mode == false) {
          _this5.$emit("edit-mode", {
            convention_id: _this5.formDataToBeWatched.id
          });
          _this5.edit_mode = true;
        }
      })["catch"](function (error) {
        _this5.$Progress.finish();
        console.log(error);
      });
    },
    loadRetrieved: function loadRetrieved() {
      var _this$meta_data$dossi2, _this$formDataToBeWat5, _this$type_convention;
      var dossier = (_this$meta_data$dossi2 = this.meta_data["dossier_credit"]) !== null && _this$meta_data$dossi2 !== void 0 ? _this$meta_data$dossi2 : {};
      if (dossier["cred_pub_tb_10009"] != undefined) {
        var cred_pub_tb_10009 = dossier["cred_pub_tb_10009"];
        if (cred_pub_tb_10009) {
          var _cred_pub_tb_10009$fr;
          this.frais_credits = (_cred_pub_tb_10009$fr = cred_pub_tb_10009 === null || cred_pub_tb_10009 === void 0 ? void 0 : cred_pub_tb_10009.frais_credits) !== null && _cred_pub_tb_10009$fr !== void 0 ? _cred_pub_tb_10009$fr : [];
        }
      }
      if (dossier["caf_recorded_file"] != undefined) {
        var caf_recorded_file = dossier["caf_recorded_file"];
        if (caf_recorded_file.indicatif != undefined) {
          this.mask_telephone = "+".concat(caf_recorded_file.indicatif, " ## ## ### ###");
          this.formDataToBeWatched.indicatif_telephone = "+".concat(caf_recorded_file.indicatif);
        }
      }
      this.fonction = (_this$formDataToBeWat5 = this.formDataToBeWatched.profession) !== null && _this$formDataToBeWat5 !== void 0 ? _this$formDataToBeWat5 : "";
      var tbArray = this.determineCredPubTablesFromDosCred(dossier);
      if (this.first_time) return;
      this.first_time = true;
      this.formDataToBeWatched.type_convention = (_this$type_convention = this.type_convention) !== null && _this$type_convention !== void 0 ? _this$type_convention : "";
      if (!['', null, undefined].includes(tbArray[0])) {
        var _dossier$cred1$objet_, _dossier$cred, _dossier$cred2$compte, _dossier$cred2, _dossier$cred1$denomi, _dossier$cred3, _dossier$cred3$foncti, _dossier$cred4, _dossier$cred3$foncti2, _dossier$cred5, _dossier$cred2$date_n, _dossier$cred6, _dossier$cred2$ville_, _dossier$cred7, _dossier$cred2$ville_2, _dossier$cred8, _dossier$cred2$teleph, _dossier$cred9, _dossier$cred2$type_p, _dossier$cred0, _dossier$cred2$num_pi, _dossier$cred1, _dossier$cred2$date_d, _dossier$cred10, _dossier$cred2$date_f, _dossier$cred11, _dossier$cred2$lieu_d, _dossier$cred12, _dossier$cred1$taux, _dossier$cred13, _dossier$cred1$type_c, _dossier$cred14, _dossier$cred1$mode_p, _dossier$cred15, _dossier$cred1$mode_p2, _dossier$cred16, _this$determineMontan, _this$determineMontan2, _this$determineMontan3, _this$determineMontan4;
        var cred1 = tbArray[1];
        var cred2 = tbArray[3];
        var cred3 = tbArray[5];
        this.formDataToBeWatched.expose = (_dossier$cred1$objet_ = dossier === null || dossier === void 0 || (_dossier$cred = dossier[cred1]) === null || _dossier$cred === void 0 ? void 0 : _dossier$cred.objet_du_pret) !== null && _dossier$cred1$objet_ !== void 0 ? _dossier$cred1$objet_ : "";
        this.formDataToBeWatched.compte_numero = (_dossier$cred2$compte = dossier === null || dossier === void 0 || (_dossier$cred2 = dossier[cred2]) === null || _dossier$cred2 === void 0 ? void 0 : _dossier$cred2.compte_numero) !== null && _dossier$cred2$compte !== void 0 ? _dossier$cred2$compte : "";
        this.formDataToBeWatched.emprunteur = (_dossier$cred1$denomi = dossier === null || dossier === void 0 || (_dossier$cred3 = dossier[cred1]) === null || _dossier$cred3 === void 0 ? void 0 : _dossier$cred3.denomination_client) !== null && _dossier$cred1$denomi !== void 0 ? _dossier$cred1$denomi : "";
        this.fonction = (_dossier$cred3$foncti = dossier === null || dossier === void 0 || (_dossier$cred4 = dossier[cred3]) === null || _dossier$cred4 === void 0 ? void 0 : _dossier$cred4.fonction) !== null && _dossier$cred3$foncti !== void 0 ? _dossier$cred3$foncti : "";
        this.formDataToBeWatched.profession = (_dossier$cred3$foncti2 = dossier === null || dossier === void 0 || (_dossier$cred5 = dossier[cred3]) === null || _dossier$cred5 === void 0 ? void 0 : _dossier$cred5.fonction) !== null && _dossier$cred3$foncti2 !== void 0 ? _dossier$cred3$foncti2 : "";
        this.formDataToBeWatched.date_naissance = (_dossier$cred2$date_n = dossier === null || dossier === void 0 || (_dossier$cred6 = dossier[cred2]) === null || _dossier$cred6 === void 0 ? void 0 : _dossier$cred6.date_naissance) !== null && _dossier$cred2$date_n !== void 0 ? _dossier$cred2$date_n : "";
        this.formDataToBeWatched.ville_naissance = (_dossier$cred2$ville_ = dossier === null || dossier === void 0 || (_dossier$cred7 = dossier[cred2]) === null || _dossier$cred7 === void 0 ? void 0 : _dossier$cred7.ville_naissance) !== null && _dossier$cred2$ville_ !== void 0 ? _dossier$cred2$ville_ : "";
        this.formDataToBeWatched.ville_residence = (_dossier$cred2$ville_2 = dossier === null || dossier === void 0 || (_dossier$cred8 = dossier[cred2]) === null || _dossier$cred8 === void 0 ? void 0 : _dossier$cred8.ville_residence) !== null && _dossier$cred2$ville_2 !== void 0 ? _dossier$cred2$ville_2 : "";
        this.formDataToBeWatched.telephone = (_dossier$cred2$teleph = dossier === null || dossier === void 0 || (_dossier$cred9 = dossier[cred2]) === null || _dossier$cred9 === void 0 ? void 0 : _dossier$cred9.telephone) !== null && _dossier$cred2$teleph !== void 0 ? _dossier$cred2$teleph : "";
        this.formDataToBeWatched.type_piece = (_dossier$cred2$type_p = dossier === null || dossier === void 0 || (_dossier$cred0 = dossier[cred2]) === null || _dossier$cred0 === void 0 ? void 0 : _dossier$cred0.type_piece) !== null && _dossier$cred2$type_p !== void 0 ? _dossier$cred2$type_p : "";
        this.formDataToBeWatched.num_piece = (_dossier$cred2$num_pi = dossier === null || dossier === void 0 || (_dossier$cred1 = dossier[cred2]) === null || _dossier$cred1 === void 0 ? void 0 : _dossier$cred1.num_piece) !== null && _dossier$cred2$num_pi !== void 0 ? _dossier$cred2$num_pi : "";
        this.formDataToBeWatched.date_delivrance_piece = (_dossier$cred2$date_d = dossier === null || dossier === void 0 || (_dossier$cred10 = dossier[cred2]) === null || _dossier$cred10 === void 0 ? void 0 : _dossier$cred10.date_delivrance_piece) !== null && _dossier$cred2$date_d !== void 0 ? _dossier$cred2$date_d : "";
        this.formDataToBeWatched.date_fin_piece = (_dossier$cred2$date_f = dossier === null || dossier === void 0 || (_dossier$cred11 = dossier[cred2]) === null || _dossier$cred11 === void 0 ? void 0 : _dossier$cred11.date_fin_piece) !== null && _dossier$cred2$date_f !== void 0 ? _dossier$cred2$date_f : "";
        this.formDataToBeWatched.lieu_delivrance_piece = (_dossier$cred2$lieu_d = dossier === null || dossier === void 0 || (_dossier$cred12 = dossier[cred2]) === null || _dossier$cred12 === void 0 ? void 0 : _dossier$cred12.lieu_delivrance_piece) !== null && _dossier$cred2$lieu_d !== void 0 ? _dossier$cred2$lieu_d : "";
        this.formDataToBeWatched.taux = (_dossier$cred1$taux = dossier === null || dossier === void 0 || (_dossier$cred13 = dossier[cred1]) === null || _dossier$cred13 === void 0 ? void 0 : _dossier$cred13.taux) !== null && _dossier$cred1$taux !== void 0 ? _dossier$cred1$taux : 0;
        this.formDataToBeWatched.type_credit = (_dossier$cred1$type_c = dossier === null || dossier === void 0 || (_dossier$cred14 = dossier[cred1]) === null || _dossier$cred14 === void 0 ? void 0 : _dossier$cred14.type_credit) !== null && _dossier$cred1$type_c !== void 0 ? _dossier$cred1$type_c : "";
        this.formDataToBeWatched.mode_tranche = (_dossier$cred1$mode_p = dossier === null || dossier === void 0 || (_dossier$cred15 = dossier[cred1]) === null || _dossier$cred15 === void 0 ? void 0 : _dossier$cred15.mode_paiement_demande) !== null && _dossier$cred1$mode_p !== void 0 ? _dossier$cred1$mode_p : "";
        this.formDataToBeWatched.mode_paiement_demande = (_dossier$cred1$mode_p2 = dossier === null || dossier === void 0 || (_dossier$cred16 = dossier[cred1]) === null || _dossier$cred16 === void 0 ? void 0 : _dossier$cred16.mode_paiement_demande) !== null && _dossier$cred1$mode_p2 !== void 0 ? _dossier$cred1$mode_p2 : "";
        this.formDataToBeWatched.montant_approuve = (_this$determineMontan = (_this$determineMontan2 = this.determineMontantApprouve()) === null || _this$determineMontan2 === void 0 ? void 0 : _this$determineMontan2.montantDef) !== null && _this$determineMontan !== void 0 ? _this$determineMontan : 0;
        this.formDataToBeWatched.duree_credit = (_this$determineMontan3 = (_this$determineMontan4 = this.determineMontantApprouve()) === null || _this$determineMontan4 === void 0 ? void 0 : _this$determineMontan4.dureeDef) !== null && _this$determineMontan3 !== void 0 ? _this$determineMontan3 : 0;
        this.handleSimulate();
      }
    }
  },
  watch: {
    formDataToBeWatched: {
      handler: function handler(newVal, oldVal) {
        var _this6 = this;
        clearTimeout(this.debounce);
        this.debounce = setTimeout(function () {
          _this6.send2Backend(newVal, oldVal);
        }, 3000);
      },
      deep: true,
      immediate: true
    },
    convention_id: {
      handler: function handler(newVal) {
        if (!['', null, undefined].includes(this.redaction_conventions)) {
          var convention = this.redaction_conventions.find(function (el) {
            return el.id == newVal;
          });
          if (convention) {
            this.formDataToBeWatched = convention;
          }
        }
      },
      deep: true,
      immediate: true
    },
    redaction_conventions: {
      handler: function handler(newVal) {
        var _this7 = this;
        if (!['', null, undefined].includes(this.convention_id)) {
          var convention = newVal.find(function (el) {
            return el.id == _this7.convention_id;
          });
          if (convention) {
            this.formDataToBeWatched = convention;
          }
        }
        this.loadRetrieved();
      },
      deep: true,
      immediate: true
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/memo/conventions/DAJC-CONV1.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/memo/conventions/DAJC-CONV1.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_ebapis_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../services/ebapis.service */ "./resources/js/services/ebapis.service.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");
/* harmony import */ var qrcode_generator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! qrcode-generator */ "./node_modules/qrcode-generator/qrcode.js");
/* harmony import */ var qrcode_generator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(qrcode_generator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! crypto-js */ "./node_modules/crypto-js/index.js");
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(crypto_js__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return r; }; var t, r = {}, e = Object.prototype, n = e.hasOwnProperty, o = "function" == typeof Symbol ? Symbol : {}, i = o.iterator || "@@iterator", a = o.asyncIterator || "@@asyncIterator", u = o.toStringTag || "@@toStringTag"; function c(t, r, e, n) { Object.defineProperty(t, r, { value: e, enumerable: !n, configurable: !n, writable: !n }); } try { c({}, ""); } catch (t) { c = function c(t, r, e) { return t[r] = e; }; } function h(r, e, n, o) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype); return c(a, "_invoke", function (r, e, n) { var o = 1; return function (i, a) { if (3 === o) throw Error("Generator is already running"); if (4 === o) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var u = n.delegate; if (u) { var c = d(u, n); if (c) { if (c === f) continue; return c; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (1 === o) throw o = 4, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = 3; var h = s(r, e, n); if ("normal" === h.type) { if (o = n.done ? 4 : 2, h.arg === f) continue; return { value: h.arg, done: n.done }; } "throw" === h.type && (o = 4, n.method = "throw", n.arg = h.arg); } }; }(r, n, new Context(o || [])), !0), a; } function s(t, r, e) { try { return { type: "normal", arg: t.call(r, e) }; } catch (t) { return { type: "throw", arg: t }; } } r.wrap = h; var f = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var l = {}; c(l, i, function () { return this; }); var p = Object.getPrototypeOf, y = p && p(p(x([]))); y && y !== e && n.call(y, i) && (l = y); var v = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(l); function g(t) { ["next", "throw", "return"].forEach(function (r) { c(t, r, function (t) { return this._invoke(r, t); }); }); } function AsyncIterator(t, r) { function e(o, i, a, u) { var c = s(t[o], t, i); if ("throw" !== c.type) { var h = c.arg, f = h.value; return f && "object" == _typeof(f) && n.call(f, "__await") ? r.resolve(f.__await).then(function (t) { e("next", t, a, u); }, function (t) { e("throw", t, a, u); }) : r.resolve(f).then(function (t) { h.value = t, a(h); }, function (t) { return e("throw", t, a, u); }); } u(c.arg); } var o; c(this, "_invoke", function (t, n) { function i() { return new r(function (r, o) { e(t, n, r, o); }); } return o = o ? o.then(i, i) : i(); }, !0); } function d(r, e) { var n = e.method, o = r.i[n]; if (o === t) return e.delegate = null, "throw" === n && r.i["return"] && (e.method = "return", e.arg = t, d(r, e), "throw" === e.method) || "return" !== n && (e.method = "throw", e.arg = new TypeError("The iterator does not provide a '" + n + "' method")), f; var i = s(o, r.i, e.arg); if ("throw" === i.type) return e.method = "throw", e.arg = i.arg, e.delegate = null, f; var a = i.arg; return a ? a.done ? (e[r.r] = a.value, e.next = r.n, "return" !== e.method && (e.method = "next", e.arg = t), e.delegate = null, f) : a : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, f); } function w(t) { this.tryEntries.push(t); } function m(r) { var e = r[4] || {}; e.type = "normal", e.arg = t, r[4] = e; } function Context(t) { this.tryEntries = [[-1]], t.forEach(w, this), this.reset(!0); } function x(r) { if (null != r) { var e = r[i]; if (e) return e.call(r); if ("function" == typeof r.next) return r; if (!isNaN(r.length)) { var o = -1, a = function e() { for (; ++o < r.length;) if (n.call(r, o)) return e.value = r[o], e.done = !1, e; return e.value = t, e.done = !0, e; }; return a.next = a; } } throw new TypeError(_typeof(r) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, c(v, "constructor", GeneratorFunctionPrototype), c(GeneratorFunctionPrototype, "constructor", GeneratorFunction), c(GeneratorFunctionPrototype, u, GeneratorFunction.displayName = "GeneratorFunction"), r.isGeneratorFunction = function (t) { var r = "function" == typeof t && t.constructor; return !!r && (r === GeneratorFunction || "GeneratorFunction" === (r.displayName || r.name)); }, r.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, c(t, u, "GeneratorFunction")), t.prototype = Object.create(v), t; }, r.awrap = function (t) { return { __await: t }; }, g(AsyncIterator.prototype), c(AsyncIterator.prototype, a, function () { return this; }), r.AsyncIterator = AsyncIterator, r.async = function (t, e, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(h(t, e, n, o), i); return r.isGeneratorFunction(e) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, g(v), c(v, u, "Generator"), c(v, i, function () { return this; }), c(v, "toString", function () { return "[object Generator]"; }), r.keys = function (t) { var r = Object(t), e = []; for (var n in r) e.unshift(n); return function t() { for (; e.length;) if ((n = e.pop()) in r) return t.value = n, t.done = !1, t; return t.done = !0, t; }; }, r.values = x, Context.prototype = { constructor: Context, reset: function reset(r) { if (this.prev = this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(m), !r) for (var e in this) "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0][4]; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(r) { if (this.done) throw r; var e = this; function n(t) { a.type = "throw", a.arg = r, e.next = t; } for (var o = e.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i[4], u = this.prev, c = i[1], h = i[2]; if (-1 === i[0]) return n("end"), !1; if (!c && !h) throw Error("try statement without catch or finally"); if (null != i[0] && i[0] <= u) { if (u < c) return this.method = "next", this.arg = t, n(c), !0; if (u < h) return n(h), !1; } } }, abrupt: function abrupt(t, r) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var n = this.tryEntries[e]; if (n[0] > -1 && n[0] <= this.prev && this.prev < n[2]) { var o = n; break; } } o && ("break" === t || "continue" === t) && o[0] <= r && r <= o[2] && (o = null); var i = o ? o[4] : {}; return i.type = t, i.arg = r, o ? (this.method = "next", this.next = o[2], f) : this.complete(i); }, complete: function complete(t, r) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && r && (this.next = r), f; }, finish: function finish(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[2] === t) return this.complete(e[4], e[3]), m(e), f; } }, "catch": function _catch(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[0] === t) { var n = e[4]; if ("throw" === n.type) { var o = n.arg; m(e); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(r, e, n) { return this.delegate = { i: x(r), r: e, n: n }, "next" === this.method && (this.arg = t), f; } }, r; }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    dossier_credit: Object,
    redaction_conventions: Array,
    convention_id: String,
    type_convention: String,
    isLoading: Boolean,
    edit_mode: Boolean
  },
  components: {
    PlusIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_3__.PlusIcon,
    TrashIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_3__.TrashIcon
  },
  mounted: function mounted() {
    var _this = this;
    EventBus.$on("generate-pdf-process", function (data) {
      // console.log("data build-off-printable", data);
      _this.pdf_process = data;
    });
    EventBus.$on("build-off-printable", function (data) {
      // console.log("data build-off-printable", data);

      _this.buildOffPrintable();
    });
    EventBus.$on("generate-pdf-process", function (data) {
      // console.log("data build-off-printable", data);
      _this.pdf_process = data;
    });
  },
  data: function data() {
    return {
      ebapisHost: _services_ebapis_service__WEBPACK_IMPORTED_MODULE_0__["default"].host,
      fonction: "",
      debounce: null,
      on_saving: false,
      first_time: false,
      frais_credits: [],
      mask_telephone: "",
      res: 0,
      taxe: 0,
      check_fields: {},
      check_fields_emprunteur: {
        civilite_emprunteur: null,
        emprunteur: null,
        profession: null,
        ville_naissance: null,
        date_naissance: null,
        ville_residence: null,
        extra_domicilie: null,
        extra_ne: null,
        pays_naissance: null,
        telephone: null,
        type_piece: null,
        num_piece: null,
        extra_etablie: null,
        date_delivrance_piece: null,
        date_fin_piece: null,
        compte_numero: null
      },
      article_3: {
        extra_article_3: null,
        montant_approuve: null
      },
      article_4: {
        duree_credit: null
      },
      article_5: {
        tbb: null,
        taux: null,
        extra_article_5: null
      },
      article_6: {
        teg: null
      },
      article_7: {
        nombre_echeance: null,
        type_echeance: null
      },
      article_10: {
        // frais_min: null,
        // frais_taux: null,
        extra_frais: null,
        extra_frais_2: null
      },
      article_13: {
        montant_souscription_profit: null,
        compte_deposit: null,
        montant_nantissement_compte: null,
        periodicite_virement: null,
        montant_ordre_vir_permanent: null
      },
      formDataToBeWatched: {
        id: (0,uuid__WEBPACK_IMPORTED_MODULE_4__["default"])(),
        type_convention: "",
        type_credit: "",
        montant_approuve: 0,
        extra_article_3: "",
        taux: 0,
        teg: 0,
        tps: 10,
        tbb: 10.7,
        extra_article_5: "",
        duree_credit: 0,
        mode_paiement_demande: "",
        frequence_versement: 1,
        frequence_mois: 1,
        mode_tranche: "",
        emprunteur: "",
        civilite_emprunteur: "",
        profession: "",
        date_naissance: "",
        ville_naissance: "",
        pays_naissance: "",
        ville_residence: "",
        extra_domicilie: "",
        extra_ne: "",
        telephone: "",
        type_piece: "",
        num_piece: "",
        extra_etablie: "",
        date_delivrance_piece: "",
        date_fin_piece: "",
        lieu_delivrance_piece: "",
        compte_numero: "",
        expose: "",
        text_signataire: "",
        r_mensualite: 0,
        r_interet: 0,
        r_ttcredit: 0,
        nombre_echeance: 0,
        type_echeance: "",
        frais_taux: 0,
        extra_frais: "",
        extra_frais_2: "",
        frais_min: 0,
        indicatif_telephone: "",
        compte_deposit: "",
        montant_souscription_profit: 0,
        montant_nantissement_compte: 0,
        montant_ordre_vir_permanent: 0,
        periodicite_virement: "",
        au_credit_du_compte: "",
        numero_de_compte_nanti: "",
        fait_a: "",
        fait_le: "",
        check_fields: {}
      },
      local_edit_mode: true,
      local_close_edit_mode: true,
      list_tranches: [{
        libelle: "Mensuelle",
        val: "Mensuelle",
        type: "Mensualité"
      }, {
        libelle: "Trimestrielle",
        val: "Trimestrielle",
        type: "Remboursement trimestriel"
      }, {
        libelle: "Semestrielle",
        val: "Semestrielle",
        type: "Remboursement semestriel"
      }, {
        libelle: "Annuel",
        val: "Annuel",
        type: "Annuité"
      }, {
        libelle: "In fine",
        val: "In fine",
        type: "Remboursement unique"
      }, {
        libelle: "Bimensuelle",
        val: "Bimensuelle",
        type: "Remoursement bimensuel"
      }, {
        libelle: "Bimestrielle",
        val: "Bimestrielle",
        type: "Remboursement bimestriel"
      }, {
        libelle: "Plusieurs tranches",
        val: "Plusieurs tranches",
        type: "Remboursement par tranche"
      }],
      banque: {
        denomination: "NSIA Banque Côte d'Ivoire",
        abrege: "NSIA Banque CI",
        forme_juridique: "société anonyme avec Conseil d’Administration",
        capital: "24734572000",
        monnaie: "FCFA",
        adresse: "C-22 Rue Goyavier, Avenue Jean Mermoz, Cocody",
        etablissement_social: "Abidjan Plateau 8-10 Avenue Joseph ANOMA",
        ville: "Abidjan",
        pays: "Côte d'Ivoire",
        adresse_postal: "01 BP 1274 Abidjan 01",
        telephone: "27 20 20 07 20",
        fax: "27 20 20 07 00",
        rccm: "CI-ABJ-01-1981-B14-52039",
        numero_inscription_banque: "A 0042 Q",
        agreement: "1648 du 30/12/1980",
        ncc: "0100388U",
        nom_prenom_dg: "Léonce YACE",
        civilite_dg: "Monsieur",
        date_deliberation_ca: "28 Octobre 2022"
      },
      suretes: [],
      telephones: [],
      visibile_default_suretes: [true, true, true],
      build_off: false,
      pdf_process: false
    };
  },
  computed: {
    check_fields_: function check_fields_() {
      var pass = true;
      for (var _i = 0, _Object$entries = Object.entries(this.check_fields); _i < _Object$entries.length; _i++) {
        var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
          key = _Object$entries$_i[0],
          value = _Object$entries$_i[1];
        if (value != true) {
          pass = false;
        }
      }
      return pass;
    }
  },
  created: function created() {},
  methods: {
    addSurete: function addSurete() {
      this.suretes.push({
        libelle: ""
      });
      var index = this.suretes.length - 1;
      var field = 'surete_' + index;
      this.$set(this.check_fields, field, null);
      this.article_13[field] = null;
      this.handleInput();
    },
    removeDefaultSurete: function removeDefaultSurete(index) {
      this.$set(this.visibile_default_suretes, index, false);
      if (index == 0) {
        delete this.article_13['montant_souscription_profit'];
        delete this.check_fields['montant_souscription_profit'];
      }
      if (index == 1) {
        delete this.article_13['compte_deposit'];
        delete this.article_13['montant_nantissement_compte'];
        delete this.article_13['periodicite_virement'];
        delete this.article_13['montant_ordre_vir_permanent'];
        delete this.check_fields['compte_deposit'];
        delete this.check_fields['montant_nantissement_compte'];
        delete this.check_fields['periodicite_virement'];
        delete this.check_fields['montant_ordre_vir_permanent'];
      }
      this.$set(this.check_fields, 'change', true);
      delete this.check_fields['change'];
      this.handleInput();
    },
    removeSurete: function removeSurete(index) {
      this.suretes.splice(index, 1);
      var field = 'surete_' + index;
      delete this.check_fields[field];
      delete this.article_13[field];
      this.handleInput();
      this.reorderIndex("surete");
    },
    addTelephone: function addTelephone() {
      this.telephones.push({
        numero: "",
        indicatif: this.formDataToBeWatched.indicatif_telephone
      });
      var index = this.telephones.length - 1;
      var field = 'telephone_' + index;
      this.$set(this.check_fields, field, null);
      this.check_fields_emprunteur[field] = null;
      this.handleInput();
    },
    removeTelephone: function removeTelephone(index) {
      this.telephones.splice(index, 1);
      var field = 'telephone_' + index;
      delete this.check_fields[field];
      delete this.check_fields_emprunteur[field];
      this.handleInput();
      this.reorderIndex("telephone");
    },
    reorderIndex: function reorderIndex(indexKey) {
      var backups = [];
      for (var _i2 = 0, _Object$entries2 = Object.entries(this.check_fields); _i2 < _Object$entries2.length; _i2++) {
        var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i2], 2),
          key = _Object$entries2$_i[0],
          value = _Object$entries2$_i[1];
        var k = key.split('_');
        if (key.indexOf('_') != -1 && k[0] == indexKey) {
          if (indexKey == "surete") {
            delete this.article_13[key];
          }
          if (indexKey == "telephone") {
            delete this.check_fields_emprunteur[key];
          }
          if (indexKey == "surete" || indexKey == "telephone") {
            backups.push(value);
            delete this.check_fields[key];
          }
        }
      }
      if (backups.length > 0) {
        for (var i = 0; i < backups.length; i++) {
          if (indexKey == "surete") {
            this.$set(this.check_fields, indexKey + '_' + i, backups[i]);
            this.article_13[indexKey + '_' + i] = backups[i];
          }
          if (indexKey == "telephone") {
            this.$set(this.check_fields, indexKey + '_' + i, backups[i]);
            this.check_fields_emprunteur[indexKey + '_' + i] = backups[i];
          }
        }
      }
      this.handleInput();
    },
    formatDate: function formatDate(date) {
      if (['', null, undefined].includes(date)) return '';
      var options = {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric'
      };
      return new Date(date).toLocaleDateString('fr', options);
    },
    formatAmount: function formatAmount(x) {
      var _x$toString;
      return x === null || x === void 0 || (_x$toString = x.toString()) === null || _x$toString === void 0 ? void 0 : _x$toString.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    },
    loadData: function loadData(redaction_conventions) {
      var _this2 = this;
      if (this.first_time) return;
      this.check_fields = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, this.check_fields_emprunteur), this.article_3), this.article_4), this.article_5), this.article_6), this.article_7), this.article_10), this.article_13);
      if (!['', null, undefined].includes(redaction_conventions)) {
        var found = redaction_conventions.find(function (el) {
          return el.id == _this2.convention_id || el.type_convention == _this2.type_convention;
        });
        if (found) {
          var _this$formDataToBeWat, _this$formDataToBeWat2, _this$formDataToBeWat3;
          this.formDataToBeWatched = found;
          if (!['', null, undefined].includes(found === null || found === void 0 ? void 0 : found.check_fields)) {
            var _found$check_fields;
            this.check_fields = (_found$check_fields = found['check_fields']) !== null && _found$check_fields !== void 0 ? _found$check_fields : {};
          }
          if (!['', null, undefined].includes(found === null || found === void 0 ? void 0 : found.telephones)) {
            var _found$telephones;
            this.telephones = (_found$telephones = found['telephones']) !== null && _found$telephones !== void 0 ? _found$telephones : [];
          }
          if (!['', null, undefined].includes(found === null || found === void 0 ? void 0 : found.suretes)) {
            var _found$suretes;
            this.suretes = (_found$suretes = found['suretes']) !== null && _found$suretes !== void 0 ? _found$suretes : [];
          }
          if (!['', null, undefined].includes(found === null || found === void 0 ? void 0 : found.visibile_default_suretes)) {
            var _found$visibile_defau;
            this.visibile_default_suretes = (_found$visibile_defau = found['visibile_default_suretes']) !== null && _found$visibile_defau !== void 0 ? _found$visibile_defau : [];
          }
          if (['', null, undefined].includes((_this$formDataToBeWat = this.formDataToBeWatched) === null || _this$formDataToBeWat === void 0 ? void 0 : _this$formDataToBeWat.extra_ne)) {
            this.$set(this.check_fields, 'extra_ne', null);
            this.$set(this.formDataToBeWatched, 'extra_ne', '');
            this.$set(this.check_fields_emprunteur, 'extra_ne', null);
          }
          if (['', null, undefined].includes((_this$formDataToBeWat2 = this.formDataToBeWatched) === null || _this$formDataToBeWat2 === void 0 ? void 0 : _this$formDataToBeWat2.extra_etablie)) {
            this.$set(this.check_fields, 'extra_etablie', null);
            this.$set(this.formDataToBeWatched, 'extra_etablie', '');
            this.$set(this.check_fields_emprunteur, 'extra_etablie', null);
          }
          if (['', null, undefined].includes((_this$formDataToBeWat3 = this.formDataToBeWatched) === null || _this$formDataToBeWat3 === void 0 ? void 0 : _this$formDataToBeWat3.extra_domicilie)) {
            this.$set(this.check_fields, 'extra_domicilie', null);
            this.$set(this.formDataToBeWatched, 'extra_domicilie', '');
            this.$set(this.check_fields_emprunteur, 'extra_domicilie', null);
          }
        } else {
          this.handleInput();
        }
        this.loadRetrieved();
      }
    },
    getLabelTypePiece: function getLabelTypePiece(type) {
      if (type == "Passport") {
        return "du Passport";
      }
      if (type == "CNI") {
        return "de la Carte Nationale d’Identité";
      }
      if (type == "PC") {
        return "du Permis de Conduire";
      }
      if (type == "Carte consulaire") {
        return "de la Carte consulaire";
      }
    },
    getMinOrMajByTbb: function getMinOrMajByTbb(tbb, taux) {
      var alpha = this.convertInt(taux) - this.convertInt(tbb);
      var decimal = 2;
      // let string = String(alpha).split('.');
      // if (string.length > 1) {
      //     if (string[1].length > 2) {
      //         decimal = string[1].length
      //     }
      // }
      alpha = alpha.toFixed(decimal);
      if (alpha > 0) {
        return "majoré de " + alpha + ',';
      } else if (alpha < 0) {
        return "minoré de " + alpha * -1 + ',';
      }
      return "";
    },
    setEditMode: function setEditMode() {
      var _this3 = this;
      this.local_edit_mode = false;
      if (this.on_saving == false) {
        this.$emit("edit-mode", {
          convention_id: this.formDataToBeWatched.id
        });
        this.local_edit_mode = true;
      }
      setTimeout(function () {
        if (_this3.edit_mode != true) {
          _this3.buildOffPrintable();
        } else {
          _this3.build_off = false;
        }
      }, 1000);
    },
    closeEditMode: function closeEditMode() {
      this.local_close_edit_mode = false;
      if (this.on_saving == false) {
        this.$emit("edit-mode", {
          close: true
        });
        this.local_close_edit_mode = true;
      }
    },
    formDataVars: function formDataVars(event) {
      this.formDataToBeWatched[event[0]] = event[1];
      this.handleInput();
    },
    handleSimulate: function handleSimulate() {
      var _this$formDataToBeWat4,
        _this$formDataToBeWat5,
        _this$formDataToBeWat6,
        _this4 = this;
      var tauxHT = ((_this$formDataToBeWat4 = this.formDataToBeWatched) === null || _this$formDataToBeWat4 === void 0 ? void 0 : _this$formDataToBeWat4.taux) / 100;
      var tps_default = (_this$formDataToBeWat5 = (_this$formDataToBeWat6 = this.formDataToBeWatched) === null || _this$formDataToBeWat6 === void 0 ? void 0 : _this$formDataToBeWat6.tps) !== null && _this$formDataToBeWat5 !== void 0 ? _this$formDataToBeWat5 : 10;
      var tps = tps_default / 100;
      var tauxTTC = tauxHT * (1 + tps);
      this.formDataToBeWatched.tps = tps_default;
      if (['', null, undefined].includes(this.formDataToBeWatched.mode_tranche)) {
        this.formDataToBeWatched.mode_tranche = "Mensuelle";
      }
      if (['', null, undefined].includes(this.formDataToBeWatched.mode_paiement_demande)) {
        this.formDataToBeWatched.mode_paiement_demande = "Mensuelle";
      }
      if (['', null, undefined].includes(this.formDataToBeWatched.frequence_mois)) {
        this.formDataToBeWatched.frequence_mois = 1;
      }
      if (['', null, undefined].includes(this.formDataToBeWatched.frequence_versement)) {
        this.formDataToBeWatched.frequence_versement = 1;
      }
      var montant = this.convertInt(this.formDataToBeWatched.montant_approuve);
      var duree = parseFloat(this.formDataToBeWatched.duree_credit);
      this.formDataToBeWatched.duree_credit = duree;
      if (this.frais_credits) {
        this.frais_credits.forEach(function (el) {
          if (el.libelle == "Prime d'assurance") {
            tauxTTC += el.taux / 100;
          }
          if (el.libelle == "Frais de dossier") {
            _this4.formDataToBeWatched.frais_taux = el.taux;
          }
        });
      }
      var frequence_mois = parseInt(this.formDataToBeWatched.frequence_mois);
      var frequence_versement = parseInt(this.formDataToBeWatched.frequence_versement);
      var nbEcheance = duree * frequence_versement / frequence_mois;
      var nbEcheanceAnnuel = 12 * frequence_versement / frequence_mois;
      var tauxInteret = tauxTTC / nbEcheanceAnnuel;
      var montantEcheance = montant * tauxInteret / (1 - Math.pow(1 + tauxInteret, -1 * nbEcheance));
      var tauxMensuel = tauxInteret;
      var mensualite = montantEcheance;
      this.res = 0;
      var interet_ht = 0;
      if (tauxMensuel == 0) {
        mensualite = montant;
      } else {
        interet_ht = mensualite * duree - montant;
        this.res = Math.ceil(interet_ht + interet_ht * this.taxe / 100);
      }
      if (duree == 0) {
        duree = 1;
      }
      var totalCredt = this.res + parseInt(montant);
      this.formDataToBeWatched.r_mensualite = Math.ceil(mensualite);
      this.formDataToBeWatched.r_interet = this.res;
      this.formDataToBeWatched.r_ttcredit = totalCredt;
      this.formDataToBeWatched.nombre_echeance = nbEcheance;
      var found = this.list_tranches.find(function (el) {
        return el.libelle == _this4.formDataToBeWatched.mode_tranche;
      });
      if (found) {
        var _found$type;
        this.formDataToBeWatched.type_echeance = (_found$type = found === null || found === void 0 ? void 0 : found.type) !== null && _found$type !== void 0 ? _found$type : "";
      }
    },
    handleInput: function handleInput() {
      this.formDataToBeWatched['suretes'] = this.suretes;
      this.formDataToBeWatched['telephones'] = this.telephones;
      this.formDataToBeWatched['check_fields'] = this.check_fields;
      this.formDataToBeWatched['visibile_default_suretes'] = this.visibile_default_suretes;
    },
    onCheckField: function onCheckField(check, field) {
      if (['article_3', 'article_4', 'article_5', 'article_6', 'article_7', 'article_10', 'article_13', 'check_fields_emprunteur'].includes(field)) {
        for (var _i3 = 0, _Object$entries3 = Object.entries(this[field]); _i3 < _Object$entries3.length; _i3++) {
          var _Object$entries3$_i = _slicedToArray(_Object$entries3[_i3], 2),
            key = _Object$entries3$_i[0],
            value = _Object$entries3$_i[1];
          this.check_fields[key] = check;
        }
      } else {
        this.check_fields[field] = check;
      }
      this.handleInput();
    },
    checkField: function checkField(field) {
      var _this$check_fields$fi;
      if (['article_3', 'article_4', 'article_5', 'article_6', 'article_7', 'article_10', 'article_13', 'check_fields_emprunteur'].includes(field)) {
        var pass = true;
        for (var _i4 = 0, _Object$entries4 = Object.entries(this[field]); _i4 < _Object$entries4.length; _i4++) {
          var _Object$entries4$_i = _slicedToArray(_Object$entries4[_i4], 2),
            key = _Object$entries4$_i[0],
            value = _Object$entries4$_i[1];
          if (!['undefined', undefined].includes(this.check_fields[key])) {
            if (this.check_fields[key] != true) {
              pass = false;
            }
          }
        }
        return pass;
      }
      return (_this$check_fields$fi = this.check_fields[field]) !== null && _this$check_fields$fi !== void 0 ? _this$check_fields$fi : false;
    },
    determineMontantApprouve: function determineMontantApprouve() {
      var _this$dossier_credit;
      var dossier = (_this$dossier_credit = this.dossier_credit) !== null && _this$dossier_credit !== void 0 ? _this$dossier_credit : {};
      var caract_inter_pret = dossier === null || dossier === void 0 ? void 0 : dossier.caract_inter_pret;
      var latestAmount = 0;
      var latetstDuree = 0;
      if (caract_inter_pret != null) {
        var _dossier$final_outcom;
        var finalOutcomeUserRole = dossier === null || dossier === void 0 || (_dossier$final_outcom = dossier.final_outcome) === null || _dossier$final_outcom === void 0 ? void 0 : _dossier$final_outcom.giver_role_sigle;
        var latestObj = caract_inter_pret.find(function (el) {
          return el.role_sigle == finalOutcomeUserRole;
        });
        latestAmount = latestObj === null || latestObj === void 0 ? void 0 : latestObj['montant_pret_' + finalOutcomeUserRole];
        latetstDuree = latestObj === null || latestObj === void 0 ? void 0 : latestObj.duree_pret;
        if (!latestAmount) {
          var _caract_inter_pret$at, _caract_inter_pret$at2, _caract_inter_pret$at3;
          finalOutcomeUserRole = (_caract_inter_pret$at = caract_inter_pret.at(-1)) === null || _caract_inter_pret$at === void 0 ? void 0 : _caract_inter_pret$at.role_sigle;
          latestAmount = (_caract_inter_pret$at2 = caract_inter_pret.at(-1)) === null || _caract_inter_pret$at2 === void 0 ? void 0 : _caract_inter_pret$at2['montant_pret_' + finalOutcomeUserRole];
          latetstDuree = (_caract_inter_pret$at3 = caract_inter_pret.at(-1)) === null || _caract_inter_pret$at3 === void 0 ? void 0 : _caract_inter_pret$at3['duree_pret'];
        }
      }
      return {
        montantDef: latestAmount,
        dureeDef: latetstDuree
      };
    },
    loadRetrieved: function loadRetrieved() {
      var _this$dossier_credit2, _this$formDataToBeWat7, _this$type_convention;
      var dossier = (_this$dossier_credit2 = this.dossier_credit) !== null && _this$dossier_credit2 !== void 0 ? _this$dossier_credit2 : {};
      if (dossier["cred_pub_tb_10009"] != undefined) {
        var cred_pub_tb_10009 = dossier["cred_pub_tb_10009"];
        if (cred_pub_tb_10009) {
          var _cred_pub_tb_10009$fr;
          this.frais_credits = (_cred_pub_tb_10009$fr = cred_pub_tb_10009 === null || cred_pub_tb_10009 === void 0 ? void 0 : cred_pub_tb_10009.frais_credits) !== null && _cred_pub_tb_10009$fr !== void 0 ? _cred_pub_tb_10009$fr : [];
        }
      }
      if (dossier["caf_recorded_file"] != undefined) {
        var caf_recorded_file = dossier["caf_recorded_file"];
        if (caf_recorded_file.indicatif != undefined) {
          this.mask_telephone = "+".concat(caf_recorded_file.indicatif, " ## ## ### ###");
          this.formDataToBeWatched.indicatif_telephone = "+".concat(caf_recorded_file.indicatif);
        }
      }
      this.fonction = (_this$formDataToBeWat7 = this.formDataToBeWatched.profession) !== null && _this$formDataToBeWat7 !== void 0 ? _this$formDataToBeWat7 : "";
      var tbArray = this.determineCredPubTablesFromDosCred(dossier);
      if (this.first_time) return;
      this.first_time = true;
      this.formDataToBeWatched.type_convention = (_this$type_convention = this.type_convention) !== null && _this$type_convention !== void 0 ? _this$type_convention : "";
      if (!['', null, undefined].includes(tbArray[0])) {
        var _dossier$cred1$objet_, _dossier$cred, _dossier$cred2$compte, _dossier$cred2, _dossier$cred1$denomi, _dossier$cred3, _dossier$cred3$foncti, _dossier$cred4, _dossier$cred3$foncti2, _dossier$cred5, _dossier$cred2$date_n, _dossier$cred6, _dossier$cred2$ville_, _dossier$cred7, _dossier$cred2$ville_2, _dossier$cred8, _dossier$cred2$teleph, _dossier$cred9, _dossier$cred2$type_p, _dossier$cred0, _dossier$cred2$num_pi, _dossier$cred1, _dossier$cred2$date_d, _dossier$cred10, _dossier$cred2$date_f, _dossier$cred11, _dossier$cred2$lieu_d, _dossier$cred12, _dossier$cred1$taux, _dossier$cred13, _dossier$cred1$type_c, _dossier$cred14, _dossier$cred1$mode_p, _dossier$cred15, _dossier$cred1$mode_p2, _dossier$cred16, _this$determineMontan, _this$determineMontan2, _this$determineMontan3, _this$determineMontan4;
        var cred1 = tbArray[1];
        var cred2 = tbArray[3];
        var cred3 = tbArray[5];
        this.formDataToBeWatched.expose = (_dossier$cred1$objet_ = dossier === null || dossier === void 0 || (_dossier$cred = dossier[cred1]) === null || _dossier$cred === void 0 ? void 0 : _dossier$cred.objet_du_pret) !== null && _dossier$cred1$objet_ !== void 0 ? _dossier$cred1$objet_ : "";
        this.formDataToBeWatched.compte_numero = (_dossier$cred2$compte = dossier === null || dossier === void 0 || (_dossier$cred2 = dossier[cred2]) === null || _dossier$cred2 === void 0 ? void 0 : _dossier$cred2.compte_numero) !== null && _dossier$cred2$compte !== void 0 ? _dossier$cred2$compte : "";
        this.formDataToBeWatched.emprunteur = (_dossier$cred1$denomi = dossier === null || dossier === void 0 || (_dossier$cred3 = dossier[cred1]) === null || _dossier$cred3 === void 0 ? void 0 : _dossier$cred3.denomination_client) !== null && _dossier$cred1$denomi !== void 0 ? _dossier$cred1$denomi : "";
        this.fonction = (_dossier$cred3$foncti = dossier === null || dossier === void 0 || (_dossier$cred4 = dossier[cred3]) === null || _dossier$cred4 === void 0 ? void 0 : _dossier$cred4.fonction) !== null && _dossier$cred3$foncti !== void 0 ? _dossier$cred3$foncti : "";
        this.formDataToBeWatched.profession = (_dossier$cred3$foncti2 = dossier === null || dossier === void 0 || (_dossier$cred5 = dossier[cred3]) === null || _dossier$cred5 === void 0 ? void 0 : _dossier$cred5.fonction) !== null && _dossier$cred3$foncti2 !== void 0 ? _dossier$cred3$foncti2 : "";
        this.formDataToBeWatched.date_naissance = (_dossier$cred2$date_n = dossier === null || dossier === void 0 || (_dossier$cred6 = dossier[cred2]) === null || _dossier$cred6 === void 0 ? void 0 : _dossier$cred6.date_naissance) !== null && _dossier$cred2$date_n !== void 0 ? _dossier$cred2$date_n : "";
        this.formDataToBeWatched.ville_naissance = (_dossier$cred2$ville_ = dossier === null || dossier === void 0 || (_dossier$cred7 = dossier[cred2]) === null || _dossier$cred7 === void 0 ? void 0 : _dossier$cred7.ville_naissance) !== null && _dossier$cred2$ville_ !== void 0 ? _dossier$cred2$ville_ : "";
        this.formDataToBeWatched.ville_residence = (_dossier$cred2$ville_2 = dossier === null || dossier === void 0 || (_dossier$cred8 = dossier[cred2]) === null || _dossier$cred8 === void 0 ? void 0 : _dossier$cred8.ville_residence) !== null && _dossier$cred2$ville_2 !== void 0 ? _dossier$cred2$ville_2 : "";
        this.formDataToBeWatched.telephone = (_dossier$cred2$teleph = dossier === null || dossier === void 0 || (_dossier$cred9 = dossier[cred2]) === null || _dossier$cred9 === void 0 ? void 0 : _dossier$cred9.telephone) !== null && _dossier$cred2$teleph !== void 0 ? _dossier$cred2$teleph : "";
        this.formDataToBeWatched.type_piece = (_dossier$cred2$type_p = dossier === null || dossier === void 0 || (_dossier$cred0 = dossier[cred2]) === null || _dossier$cred0 === void 0 ? void 0 : _dossier$cred0.type_piece) !== null && _dossier$cred2$type_p !== void 0 ? _dossier$cred2$type_p : "";
        this.formDataToBeWatched.num_piece = (_dossier$cred2$num_pi = dossier === null || dossier === void 0 || (_dossier$cred1 = dossier[cred2]) === null || _dossier$cred1 === void 0 ? void 0 : _dossier$cred1.num_piece) !== null && _dossier$cred2$num_pi !== void 0 ? _dossier$cred2$num_pi : "";
        this.formDataToBeWatched.date_delivrance_piece = (_dossier$cred2$date_d = dossier === null || dossier === void 0 || (_dossier$cred10 = dossier[cred2]) === null || _dossier$cred10 === void 0 ? void 0 : _dossier$cred10.date_delivrance_piece) !== null && _dossier$cred2$date_d !== void 0 ? _dossier$cred2$date_d : "";
        this.formDataToBeWatched.date_fin_piece = (_dossier$cred2$date_f = dossier === null || dossier === void 0 || (_dossier$cred11 = dossier[cred2]) === null || _dossier$cred11 === void 0 ? void 0 : _dossier$cred11.date_fin_piece) !== null && _dossier$cred2$date_f !== void 0 ? _dossier$cred2$date_f : "";
        this.formDataToBeWatched.lieu_delivrance_piece = (_dossier$cred2$lieu_d = dossier === null || dossier === void 0 || (_dossier$cred12 = dossier[cred2]) === null || _dossier$cred12 === void 0 ? void 0 : _dossier$cred12.lieu_delivrance_piece) !== null && _dossier$cred2$lieu_d !== void 0 ? _dossier$cred2$lieu_d : "";
        this.formDataToBeWatched.taux = (_dossier$cred1$taux = dossier === null || dossier === void 0 || (_dossier$cred13 = dossier[cred1]) === null || _dossier$cred13 === void 0 ? void 0 : _dossier$cred13.taux) !== null && _dossier$cred1$taux !== void 0 ? _dossier$cred1$taux : 0;
        this.formDataToBeWatched.type_credit = (_dossier$cred1$type_c = dossier === null || dossier === void 0 || (_dossier$cred14 = dossier[cred1]) === null || _dossier$cred14 === void 0 ? void 0 : _dossier$cred14.type_credit) !== null && _dossier$cred1$type_c !== void 0 ? _dossier$cred1$type_c : "";
        this.formDataToBeWatched.mode_tranche = (_dossier$cred1$mode_p = dossier === null || dossier === void 0 || (_dossier$cred15 = dossier[cred1]) === null || _dossier$cred15 === void 0 ? void 0 : _dossier$cred15.mode_paiement_demande) !== null && _dossier$cred1$mode_p !== void 0 ? _dossier$cred1$mode_p : "";
        this.formDataToBeWatched.mode_paiement_demande = (_dossier$cred1$mode_p2 = dossier === null || dossier === void 0 || (_dossier$cred16 = dossier[cred1]) === null || _dossier$cred16 === void 0 ? void 0 : _dossier$cred16.mode_paiement_demande) !== null && _dossier$cred1$mode_p2 !== void 0 ? _dossier$cred1$mode_p2 : "";
        this.formDataToBeWatched.montant_approuve = (_this$determineMontan = (_this$determineMontan2 = this.determineMontantApprouve()) === null || _this$determineMontan2 === void 0 ? void 0 : _this$determineMontan2.montantDef) !== null && _this$determineMontan !== void 0 ? _this$determineMontan : 0;
        this.formDataToBeWatched.duree_credit = (_this$determineMontan3 = (_this$determineMontan4 = this.determineMontantApprouve()) === null || _this$determineMontan4 === void 0 ? void 0 : _this$determineMontan4.dureeDef) !== null && _this$determineMontan3 !== void 0 ? _this$determineMontan3 : 0;
      }
      this.handleSimulate();
    },
    send2Backend: function send2Backend(newVal) {
      var _this5 = this;
      this.on_saving = true;
      this.$emit("autosaving");
      this.$axios.post(this.ebapisHost + "creditbuilder/api/v1/redaction-convention/", {
        cred_pub_key: this.dossier_credit['cred_pub_key'],
        filledData: newVal
      }).then(function (response) {
        _this5.on_saving = false;
        _this5.$emit("autosaving");
        if (_this5.local_edit_mode == false) {
          _this5.$emit("edit-mode", {
            convention_id: _this5.formDataToBeWatched.id
          });
          _this5.local_edit_mode = true;
        }
        if (_this5.local_close_edit_mode == false) {
          _this5.$emit("edit-mode", {
            close: true
          });
          _this5.local_close_edit_mode = true;
        }
      })["catch"](function (error) {
        _this5.$Progress.finish();
        console.log(error);
      });
    },
    // lancer l'upload auto de la convention
    exportToPDF: function exportToPDF(data) {
      EventBus.$emit("export-pdf", {
        ref: this.$refs.contentToPdf,
        download: data
      });
    },
    buildOffPrintable: function buildOffPrintable() {
      var _arguments = arguments,
        _this6 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var retryCount, targetElement, preloader_content, elements, printableContainer, PAGE_WIDTH, PAGE_HEIGHT, MARGIN, PADDING, AVAILABLE_HEIGHT, currentPage, currentHeight, pageCounter, applyStyleToFirstP, paginationDiv, qrCode;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              applyStyleToFirstP = function _applyStyleToFirstP(element) {
                if (!element) return;

                // Vérifie si l'élément actuel est un <p>
                if (element.tagName === 'P') {
                  element.style.margin = '0px'; // Applique le style
                  return; // Stoppe la récursion après avoir trouvé le premier <p>
                }

                // Parcours récursif des enfants
                var _iterator = _createForOfIteratorHelper(element.children),
                  _step;
                try {
                  for (_iterator.s(); !(_step = _iterator.n()).done;) {
                    var child = _step.value;
                    applyStyleToFirstP(child);
                  }
                } catch (err) {
                  _iterator.e(err);
                } finally {
                  _iterator.f();
                }
              };
              retryCount = _arguments.length > 0 && _arguments[0] !== undefined ? _arguments[0] : 0;
              _this6.build_off = false;
              targetElement = _this6.$refs.contentToCapture;
              if (targetElement) {
                _context.next = 14;
                break;
              }
              if (!(retryCount < 5)) {
                _context.next = 12;
                break;
              }
              console.warn("\u26A0\uFE0F Tentative ".concat(retryCount + 1, " : targetElement introuvable. Nouvelle tentative dans 800ms..."));
              _context.next = 9;
              return new Promise(function (resolve) {
                return setTimeout(resolve, 800);
              });
            case 9:
              return _context.abrupt("return", _this6.buildOffPrintable(retryCount + 1));
            case 12:
              console.error("❌ Échec : targetElement est toujours indisponible après plusieurs tentatives.");
              return _context.abrupt("return");
            case 14:
              targetElement.querySelectorAll("br").forEach(function (br) {
                var div = document.createElement("div");
                div.style.height = "20px";
                div.style.display = "block";
                br.replaceWith(div);
              });
              preloader_content = document.getElementById("preloader-content");
              elements = Array.from(targetElement.children);
              printableContainer = document.getElementById("printable");
              printableContainer.innerHTML = "";
              PAGE_WIDTH = 794;
              PAGE_HEIGHT = 1122;
              MARGIN = 50;
              PADDING = 40;
              AVAILABLE_HEIGHT = PAGE_HEIGHT - PADDING * 2 - 2;
              currentPage = document.createElement("div");
              currentPage.classList.add("print-page");
              currentPage.style.width = "".concat(PAGE_WIDTH, "px");
              currentPage.style.height = "".concat(PAGE_HEIGHT, "px");
              currentPage.style.margin = "".concat(MARGIN, "px auto");
              currentPage.style.padding = "".concat(PADDING, "px");
              currentPage.style.boxSizing = "border-box";
              currentPage.style.border = "1px solid #ddd";
              currentPage.style.background = "white";
              currentPage.style.position = "relative";
              currentHeight = 0;
              pageCounter = 1; // function getRandomColor() {
              //     let letters = '0123456789ABCDEF';
              //     let color = '#';
              //     for (let i = 0; i < 6; i++) {
              //         color += letters[Math.floor(Math.random() * 16)];
              //     }
              //     return color;
              // }
              // function updateSize(element) {
              //     let height = element.offsetHeight;
              //     return `${height}px`;
              // }
              elements.forEach(function (el, index) {
                var clonedElement = el.cloneNode(true);
                applyStyleToFirstP(clonedElement);

                // Vérifier la hauteur de l'élément
                preloader_content.appendChild(clonedElement);
                var elementHeight = clonedElement.offsetHeight;
                // clonedElement.style.backgroundColor = getRandomColor();

                var clone = clonedElement.cloneNode(true);
                if (currentHeight + elementHeight > AVAILABLE_HEIGHT) {
                  // Pagination
                  var paginationDiv = document.createElement("div");
                  paginationDiv.textContent = "".concat(pageCounter);
                  paginationDiv.style.position = "absolute";
                  paginationDiv.style.bottom = "30px";
                  paginationDiv.style.right = "35px";
                  paginationDiv.style.fontSize = "15px";
                  paginationDiv.style.color = "#666";
                  currentPage.appendChild(paginationDiv);
                  // Pagination

                  printableContainer.appendChild(currentPage);

                  // DEBUG //
                  // let sizeDiv = document.createElement('div');
                  // sizeDiv.style.position = 'absolute';
                  // sizeDiv.style.bottom = '1px';
                  // sizeDiv.style.right = '1px';
                  // sizeDiv.style.background = 'rgba(0, 0, 0, 0.7)';
                  // sizeDiv.style.color = 'white';
                  // sizeDiv.style.fontSize = '12px';
                  // sizeDiv.style.borderRadius = '2px';

                  // sizeDiv.textContent = currentPage.offsetHeight + ' currentHeight ('+(currentHeight)+') ' + ' elementHeight('+elementHeight+') AVAILABLE_HEIGHT('+AVAILABLE_HEIGHT+')'
                  // currentPage.appendChild(sizeDiv);
                  // DEBUG //

                  // Nouvelle page
                  currentPage = document.createElement("div");
                  currentPage.classList.add("print-page");
                  currentPage.style.width = "".concat(PAGE_WIDTH, "px");
                  currentPage.style.height = "".concat(PAGE_HEIGHT, "px");
                  currentPage.style.margin = "".concat(MARGIN, "px auto");
                  currentPage.style.padding = "".concat(PADDING, "px");
                  currentPage.style.boxSizing = "border-box";
                  currentPage.style.border = "1px solid #ddd";
                  currentPage.style.background = "white";
                  currentPage.style.position = "relative";
                  currentHeight = 0;
                  pageCounter++;
                }
                if (clone.classList.contains('to-span')) {
                  var innerHTML = clone.innerHTML;
                  clone = document.createElement('span');
                  clone.innerHTML = innerHTML;
                }
                currentPage.appendChild(clone);
                currentHeight += elementHeight;
              });

              // Ajouter le QR Code uniquement sur la dernière page
              if (currentPage.children.length > 0) {
                // Pagination
                paginationDiv = document.createElement("div");
                paginationDiv.textContent = "".concat(pageCounter);
                paginationDiv.style.position = "absolute";
                paginationDiv.style.bottom = "30px";
                paginationDiv.style.right = "35px";
                paginationDiv.style.fontSize = "15px";
                paginationDiv.style.color = "#666";
                currentPage.appendChild(paginationDiv);
                // Pagination

                currentPage.style.paddingBottom = "".concat(PADDING * 4 + 10, "px");
                qrCode = _this6.generateQRCode(150);
                qrCode.style.position = "absolute";
                qrCode.style.right = "".concat(PADDING / 2, "px");
                qrCode.style.bottom = "".concat(PADDING / 2, "px");

                // Ajouter le QR code après tous les éléments
                currentPage.appendChild(qrCode);
                printableContainer.appendChild(currentPage);
              }
              document.querySelector('#preloader-content').textContent = "";
              document.querySelector('#preloader-content').remove();
              _this6.build_off = true;
            case 41:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }))();
    },
    generateQRCode: function generateQRCode() {
      var _this$dossier_credit3, _this$dossier_credit4, _this$authenticatedUs, _this$authenticatedUs2, _this$authenticatedUs3, _this$dossier_credit5;
      var size = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 150;
      var MIX_APP_KEY = "base64:gdjlPSs3+sKaDi+/SNwOI9pjIE/c9dlYM78gSikIAjY=";
      var secretKey = MIX_APP_KEY.replace('base64:', '');
      // const secretKey = "maCléSecrète123";

      // construction de data
      var payload = {
        num_doss: (_this$dossier_credit3 = this.dossier_credit) === null || _this$dossier_credit3 === void 0 ? void 0 : _this$dossier_credit3.numero_dossier,
        cred_pub_key: (_this$dossier_credit4 = this.dossier_credit) === null || _this$dossier_credit4 === void 0 ? void 0 : _this$dossier_credit4.cred_pub_key,
        user: {
          name: (_this$authenticatedUs = this.authenticatedUser) === null || _this$authenticatedUs === void 0 ? void 0 : _this$authenticatedUs.name,
          role: (_this$authenticatedUs2 = this.authenticatedUser) === null || _this$authenticatedUs2 === void 0 ? void 0 : _this$authenticatedUs2.role[0].display_name,
          email: (_this$authenticatedUs3 = this.authenticatedUser) === null || _this$authenticatedUs3 === void 0 ? void 0 : _this$authenticatedUs3.email
        },
        client: (_this$dossier_credit5 = this.dossier_credit) === null || _this$dossier_credit5 === void 0 || (_this$dossier_credit5 = _this$dossier_credit5.client_core_banking) === null || _this$dossier_credit5 === void 0 ? void 0 : _this$dossier_credit5.name
      };

      // Chiffrer les données avec CryptoJS
      var encryptedData = this.encryptData(payload, secretKey);
      // Générer le QR code
      var qr = qrcode_generator__WEBPACK_IMPORTED_MODULE_1___default()(0, 'L');
      qr.addData(encryptedData);
      qr.make();
      var qrImg = document.createElement("img");
      qrImg.src = qr.createDataURL();
      qrImg.style.width = "".concat(size, "px");
      qrImg.style.height = "".concat(size, "px");
      qrImg.style.position = "absolute";
      // qrImg.style.top = "20px";
      // qrImg.style.right = "20px";
      // qrImg.style.top = "50%";
      qrImg.style.left = "50%";
      qrImg.style.transform = "translate(-50%, -50%)";
      return qrImg;
    },
    encryptData: function encryptData(data, secretKey) {
      return crypto_js__WEBPACK_IMPORTED_MODULE_2___default().AES.encrypt(JSON.stringify(data), secretKey).toString();
    },
    beforeDestroy: function beforeDestroy() {
      EventBus.$off('build-off-printable');
      EventBus.$off('generate-pdf-process');
    }
  },
  watch: {
    formDataToBeWatched: {
      handler: function handler(newVal, oldVal) {
        var _this7 = this;
        clearTimeout(this.debounce);
        this.debounce = setTimeout(function () {
          _this7.send2Backend(newVal, oldVal);
        }, 3000);
      },
      deep: true,
      immediate: true
    },
    redaction_conventions: {
      handler: function handler(newVal) {
        this.loadData(newVal);
      },
      deep: true,
      immediate: true
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/memo/conventions/DAJC-CONV2.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/memo/conventions/DAJC-CONV2.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_ebapis_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../services/ebapis.service */ "./resources/js/services/ebapis.service.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");
/* harmony import */ var qrcode_generator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! qrcode-generator */ "./node_modules/qrcode-generator/qrcode.js");
/* harmony import */ var qrcode_generator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(qrcode_generator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! crypto-js */ "./node_modules/crypto-js/index.js");
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(crypto_js__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return r; }; var t, r = {}, e = Object.prototype, n = e.hasOwnProperty, o = "function" == typeof Symbol ? Symbol : {}, i = o.iterator || "@@iterator", a = o.asyncIterator || "@@asyncIterator", u = o.toStringTag || "@@toStringTag"; function c(t, r, e, n) { Object.defineProperty(t, r, { value: e, enumerable: !n, configurable: !n, writable: !n }); } try { c({}, ""); } catch (t) { c = function c(t, r, e) { return t[r] = e; }; } function h(r, e, n, o) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype); return c(a, "_invoke", function (r, e, n) { var o = 1; return function (i, a) { if (3 === o) throw Error("Generator is already running"); if (4 === o) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var u = n.delegate; if (u) { var c = d(u, n); if (c) { if (c === f) continue; return c; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (1 === o) throw o = 4, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = 3; var h = s(r, e, n); if ("normal" === h.type) { if (o = n.done ? 4 : 2, h.arg === f) continue; return { value: h.arg, done: n.done }; } "throw" === h.type && (o = 4, n.method = "throw", n.arg = h.arg); } }; }(r, n, new Context(o || [])), !0), a; } function s(t, r, e) { try { return { type: "normal", arg: t.call(r, e) }; } catch (t) { return { type: "throw", arg: t }; } } r.wrap = h; var f = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var l = {}; c(l, i, function () { return this; }); var p = Object.getPrototypeOf, y = p && p(p(x([]))); y && y !== e && n.call(y, i) && (l = y); var v = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(l); function g(t) { ["next", "throw", "return"].forEach(function (r) { c(t, r, function (t) { return this._invoke(r, t); }); }); } function AsyncIterator(t, r) { function e(o, i, a, u) { var c = s(t[o], t, i); if ("throw" !== c.type) { var h = c.arg, f = h.value; return f && "object" == _typeof(f) && n.call(f, "__await") ? r.resolve(f.__await).then(function (t) { e("next", t, a, u); }, function (t) { e("throw", t, a, u); }) : r.resolve(f).then(function (t) { h.value = t, a(h); }, function (t) { return e("throw", t, a, u); }); } u(c.arg); } var o; c(this, "_invoke", function (t, n) { function i() { return new r(function (r, o) { e(t, n, r, o); }); } return o = o ? o.then(i, i) : i(); }, !0); } function d(r, e) { var n = e.method, o = r.i[n]; if (o === t) return e.delegate = null, "throw" === n && r.i["return"] && (e.method = "return", e.arg = t, d(r, e), "throw" === e.method) || "return" !== n && (e.method = "throw", e.arg = new TypeError("The iterator does not provide a '" + n + "' method")), f; var i = s(o, r.i, e.arg); if ("throw" === i.type) return e.method = "throw", e.arg = i.arg, e.delegate = null, f; var a = i.arg; return a ? a.done ? (e[r.r] = a.value, e.next = r.n, "return" !== e.method && (e.method = "next", e.arg = t), e.delegate = null, f) : a : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, f); } function w(t) { this.tryEntries.push(t); } function m(r) { var e = r[4] || {}; e.type = "normal", e.arg = t, r[4] = e; } function Context(t) { this.tryEntries = [[-1]], t.forEach(w, this), this.reset(!0); } function x(r) { if (null != r) { var e = r[i]; if (e) return e.call(r); if ("function" == typeof r.next) return r; if (!isNaN(r.length)) { var o = -1, a = function e() { for (; ++o < r.length;) if (n.call(r, o)) return e.value = r[o], e.done = !1, e; return e.value = t, e.done = !0, e; }; return a.next = a; } } throw new TypeError(_typeof(r) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, c(v, "constructor", GeneratorFunctionPrototype), c(GeneratorFunctionPrototype, "constructor", GeneratorFunction), c(GeneratorFunctionPrototype, u, GeneratorFunction.displayName = "GeneratorFunction"), r.isGeneratorFunction = function (t) { var r = "function" == typeof t && t.constructor; return !!r && (r === GeneratorFunction || "GeneratorFunction" === (r.displayName || r.name)); }, r.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, c(t, u, "GeneratorFunction")), t.prototype = Object.create(v), t; }, r.awrap = function (t) { return { __await: t }; }, g(AsyncIterator.prototype), c(AsyncIterator.prototype, a, function () { return this; }), r.AsyncIterator = AsyncIterator, r.async = function (t, e, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(h(t, e, n, o), i); return r.isGeneratorFunction(e) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, g(v), c(v, u, "Generator"), c(v, i, function () { return this; }), c(v, "toString", function () { return "[object Generator]"; }), r.keys = function (t) { var r = Object(t), e = []; for (var n in r) e.unshift(n); return function t() { for (; e.length;) if ((n = e.pop()) in r) return t.value = n, t.done = !1, t; return t.done = !0, t; }; }, r.values = x, Context.prototype = { constructor: Context, reset: function reset(r) { if (this.prev = this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(m), !r) for (var e in this) "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0][4]; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(r) { if (this.done) throw r; var e = this; function n(t) { a.type = "throw", a.arg = r, e.next = t; } for (var o = e.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i[4], u = this.prev, c = i[1], h = i[2]; if (-1 === i[0]) return n("end"), !1; if (!c && !h) throw Error("try statement without catch or finally"); if (null != i[0] && i[0] <= u) { if (u < c) return this.method = "next", this.arg = t, n(c), !0; if (u < h) return n(h), !1; } } }, abrupt: function abrupt(t, r) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var n = this.tryEntries[e]; if (n[0] > -1 && n[0] <= this.prev && this.prev < n[2]) { var o = n; break; } } o && ("break" === t || "continue" === t) && o[0] <= r && r <= o[2] && (o = null); var i = o ? o[4] : {}; return i.type = t, i.arg = r, o ? (this.method = "next", this.next = o[2], f) : this.complete(i); }, complete: function complete(t, r) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && r && (this.next = r), f; }, finish: function finish(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[2] === t) return this.complete(e[4], e[3]), m(e), f; } }, "catch": function _catch(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[0] === t) { var n = e[4]; if ("throw" === n.type) { var o = n.arg; m(e); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(r, e, n) { return this.delegate = { i: x(r), r: e, n: n }, "next" === this.method && (this.arg = t), f; } }, r; }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    dossier_credit: Object,
    redaction_conventions: Array,
    convention_id: String,
    type_convention: String,
    isLoading: Boolean,
    edit_mode: Boolean
  },
  components: {
    PlusIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_3__.PlusIcon,
    TrashIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_3__.TrashIcon
  },
  mounted: function mounted() {
    var _this = this;
    EventBus.$on("generate-pdf-process", function (data) {
      // console.log("data build-off-printable", data);
      _this.pdf_process = data;
    });
    EventBus.$on("build-off-printable", function (data) {
      // console.log("data build-off-printable", data);

      _this.buildOffPrintable();
    });
  },
  data: function data() {
    return {
      ebapisHost: _services_ebapis_service__WEBPACK_IMPORTED_MODULE_0__["default"].host,
      fonction: "",
      debounce: null,
      on_saving: false,
      first_time: false,
      frais_credits: [],
      mask_telephone: "",
      check_fields: {},
      check_fields_emprunteur: {
        civilite_emprunteur: null,
        emprunteur: null,
        profession: null,
        ville_naissance: null,
        date_naissance: null,
        ville_residence: null,
        extra_domicilie: null,
        extra_ne: null,
        pays_naissance: null,
        telephone: null,
        type_piece: null,
        num_piece: null,
        extra_etablie: null,
        date_delivrance_piece: null,
        date_fin_piece: null,
        compte_numero: null
      },
      article_1: {
        type_credit: null,
        montant_approuve: null,
        au_credit_du_compte: null,
        numero_de_compte_nanti: null
      },
      article_2: {
        montant_nantissement_compte: null,
        extra_nantissement: null
      },
      formDataToBeWatched: {
        id: (0,uuid__WEBPACK_IMPORTED_MODULE_4__["default"])(),
        type_convention: "",
        type_credit: "",
        montant_approuve: 0,
        taux: 0,
        teg: 0,
        tps: 10,
        tbb: 10.7,
        duree_credit: 0,
        mode_paiement_demande: "",
        frequence_versement: 1,
        frequence_mois: 1,
        mode_tranche: "",
        emprunteur: "",
        civilite_emprunteur: "",
        profession: "",
        date_naissance: "",
        ville_naissance: "",
        pays_naissance: "",
        ville_residence: "",
        extra_domicilie: "",
        extra_ne: "",
        telephone: "",
        type_piece: "",
        num_piece: "",
        extra_etablie: "",
        date_delivrance_piece: "",
        date_fin_piece: "",
        lieu_delivrance_piece: "",
        compte_numero: "",
        expose: "",
        text_signataire: "",
        r_mensualite: 0,
        r_interet: 0,
        r_ttcredit: 0,
        nombre_echeance: 0,
        type_echeance: "",
        frais_taux: 0,
        frais_min: 0,
        indicatif_telephone: "",
        compte_deposit: "",
        montant_souscription_profit: 0,
        montant_nantissement_compte: 0,
        montant_ordre_vir_permanent: 0,
        au_credit_du_compte: "",
        numero_de_compte_nanti: "",
        fait_a: "",
        fait_le: "",
        extra_mention_nature_compte: "",
        extra_mention_numero_compte: "",
        extra_mention_autre: "",
        check_fields: {}
      },
      local_edit_mode: true,
      local_close_edit_mode: true,
      banque: {
        denomination: "NSIA Banque Côte d'Ivoire",
        abrege: "NSIA Banque CI",
        forme_juridique: "société anonyme avec Conseil d’Administration",
        capital: "24734572000",
        monnaie: "FCFA",
        adresse: "C-22 Rue Goyavier, Avenue Jean Mermoz, Cocody",
        etablissement_social: "Abidjan Plateau 8-10 Avenue Joseph ANOMA",
        ville: "Abidjan",
        pays: "Côte d'Ivoire",
        adresse_postal: "01 BP 1274 Abidjan 01",
        telephone: "27 20 20 07 20",
        fax: "27 20 20 07 00",
        rccm: "CI-ABJ-01-1981-B14-52039",
        numero_inscription_banque: "A 0042 Q",
        agreement: "1648 du 30/12/1980",
        ncc: "0100388U",
        nom_prenom_dg: "Léonce YACE",
        civilite_dg: "Monsieur",
        date_deliberation_ca: "28 Octobre 2022"
      },
      telephones: [],
      convention_progress: 0,
      build_off: false,
      pdf_process: false
    };
  },
  computed: {
    check_fields_: function check_fields_() {
      var pass = true;
      for (var _i = 0, _Object$entries = Object.entries(this.check_fields); _i < _Object$entries.length; _i++) {
        var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
          key = _Object$entries$_i[0],
          value = _Object$entries$_i[1];
        if (value != true) {
          pass = false;
        }
      }
      return pass;
    }
  },
  created: function created() {},
  methods: {
    addTelephone: function addTelephone() {
      this.telephones.push({
        numero: "",
        indicatif: this.formDataToBeWatched.indicatif_telephone
      });
      var index = this.telephones.length - 1;
      var field = 'telephone_' + index;
      this.$set(this.check_fields, field, null);
      this.check_fields_emprunteur[field] = null;
      this.handleInput();
    },
    removeTelephone: function removeTelephone(index) {
      this.telephones.splice(index, 1);
      var field = 'telephone_' + index;
      delete this.check_fields[field];
      delete this.check_fields_emprunteur[field];
      this.handleInput();
      this.reorderIndex("telephone");
    },
    reorderIndex: function reorderIndex(indexKey) {
      var backups = [];
      for (var _i2 = 0, _Object$entries2 = Object.entries(this.check_fields); _i2 < _Object$entries2.length; _i2++) {
        var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i2], 2),
          key = _Object$entries2$_i[0],
          value = _Object$entries2$_i[1];
        var k = key.split('_');
        if (key.indexOf('_') != -1 && k[0] == indexKey) {
          if (indexKey == "telephone") {
            backups.push(value);
            delete this.check_fields[key];
            delete check_fields_emprunteur[key];
          }
        }
      }
      if (backups.length > 0) {
        for (var i = 0; i < backups.length; i++) {
          if (indexKey == "telephone") {
            this.$set(this.check_fields, indexKey + '_' + i, backups[i]);
            this.check_fields_emprunteur[indexKey + '_' + i] = backups[i];
          }
        }
      }
      this.handleInput();
    },
    formatDate: function formatDate(date) {
      if (['', null, undefined].includes(date)) return '';
      var options = {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric'
      };
      return new Date(date).toLocaleDateString('fr', options);
    },
    formatAmount: function formatAmount(x) {
      var _x$toString;
      return x === null || x === void 0 || (_x$toString = x.toString()) === null || _x$toString === void 0 ? void 0 : _x$toString.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    },
    loadData: function loadData(redaction_conventions) {
      var _this2 = this;
      if (this.first_time) return;
      this.check_fields = _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, this.check_fields_emprunteur), this.article_1), this.article_2), {}, {
        extra_mention_nature_compte: null,
        extra_mention_numero_compte: null,
        extra_mention_autre: null
      });
      if (!['', null, undefined].includes(redaction_conventions)) {
        var found = redaction_conventions.find(function (el) {
          return el.id == _this2.convention_id || el.type_convention == _this2.type_convention;
        });
        if (found) {
          var _this$formDataToBeWat, _this$formDataToBeWat2, _this$formDataToBeWat3;
          this.formDataToBeWatched = found;
          if (!['', null, undefined].includes(found === null || found === void 0 ? void 0 : found.check_fields)) {
            var _found$check_fields;
            this.check_fields = (_found$check_fields = found['check_fields']) !== null && _found$check_fields !== void 0 ? _found$check_fields : {};
          }
          if (!['', null, undefined].includes(found === null || found === void 0 ? void 0 : found.telephones)) {
            var _found$telephones;
            this.telephones = (_found$telephones = found['telephones']) !== null && _found$telephones !== void 0 ? _found$telephones : [];
          }
          if (['', null, undefined].includes((_this$formDataToBeWat = this.formDataToBeWatched) === null || _this$formDataToBeWat === void 0 ? void 0 : _this$formDataToBeWat.extra_ne)) {
            this.$set(this.check_fields, 'extra_ne', null);
            this.$set(this.formDataToBeWatched, 'extra_ne', '');
            this.$set(this.check_fields_emprunteur, 'extra_ne', null);
          }
          if (['', null, undefined].includes((_this$formDataToBeWat2 = this.formDataToBeWatched) === null || _this$formDataToBeWat2 === void 0 ? void 0 : _this$formDataToBeWat2.extra_etablie)) {
            this.$set(this.check_fields, 'extra_etablie', null);
            this.$set(this.formDataToBeWatched, 'extra_etablie', '');
            this.$set(this.check_fields_emprunteur, 'extra_etablie', null);
          }
          if (['', null, undefined].includes((_this$formDataToBeWat3 = this.formDataToBeWatched) === null || _this$formDataToBeWat3 === void 0 ? void 0 : _this$formDataToBeWat3.extra_domicilie)) {
            this.$set(this.check_fields, 'extra_domicilie', null);
            this.$set(this.formDataToBeWatched, 'extra_domicilie', '');
            this.$set(this.check_fields_emprunteur, 'extra_domicilie', null);
          }
        } else {
          this.handleInput();
        }
        this.loadRetrieved();
      }
    },
    getLabelTypePiece: function getLabelTypePiece(type) {
      if (type == "Passport") {
        return "du Passport";
      }
      if (type == "CNI") {
        return "de la Carte Nationale d’Identité";
      }
      if (type == "PC") {
        return "du Permis de Conduire";
      }
      if (type == "Carte consulaire") {
        return "de la Carte consulaire";
      }
    },
    getMinOrMajByTbb: function getMinOrMajByTbb(tbb, taux) {
      var alpha = this.convertInt(tbb) - this.convertInt(taux);
      alpha = alpha.toFixed(2);
      if (alpha > 0) {
        return "majoré de " + alpha + ',';
      } else if (alpha < 0) {
        return "minoré de " + alpha + ',';
      }
      return "";
    },
    setEditMode: function setEditMode() {
      var _this3 = this;
      this.local_edit_mode = false;
      if (this.on_saving == false) {
        this.$emit("edit-mode", {
          convention_id: this.formDataToBeWatched.id
        });
        this.local_edit_mode = true;
      }
      setTimeout(function () {
        if (_this3.edit_mode != true) {
          _this3.buildOffPrintable();
        } else {
          _this3.build_off = false;
        }
      }, 500);
    },
    closeEditMode: function closeEditMode() {
      this.local_close_edit_mode = false;
      if (this.on_saving == false) {
        this.$emit("edit-mode", {
          close: true
        });
        this.local_close_edit_mode = true;
      }
    },
    formDataVars: function formDataVars(event) {
      this.formDataToBeWatched[event[0]] = event[1];
      this.handleInput();
    },
    handleInput: function handleInput() {
      this.formDataToBeWatched['telephones'] = this.telephones;
      this.formDataToBeWatched['check_fields'] = this.check_fields;
    },
    onCheckField: function onCheckField(check, field) {
      if (['article_1', 'article_2', 'check_fields_emprunteur'].includes(field)) {
        for (var _i3 = 0, _Object$entries3 = Object.entries(this[field]); _i3 < _Object$entries3.length; _i3++) {
          var _Object$entries3$_i = _slicedToArray(_Object$entries3[_i3], 2),
            key = _Object$entries3$_i[0],
            value = _Object$entries3$_i[1];
          this.check_fields[key] = check;
        }
      } else {
        this.check_fields[field] = check;
      }
      this.handleInput();
    },
    checkField: function checkField(field) {
      var _this$check_fields$fi;
      if (['article_1', 'article_2', 'check_fields_emprunteur'].includes(field)) {
        var pass = true;
        for (var _i4 = 0, _Object$entries4 = Object.entries(this[field]); _i4 < _Object$entries4.length; _i4++) {
          var _Object$entries4$_i = _slicedToArray(_Object$entries4[_i4], 2),
            key = _Object$entries4$_i[0],
            value = _Object$entries4$_i[1];
          if (!['undefined', undefined].includes(this.check_fields[key])) {
            if (this.check_fields[key] != true) {
              pass = false;
            }
          }
        }
        return pass;
      }
      return (_this$check_fields$fi = this.check_fields[field]) !== null && _this$check_fields$fi !== void 0 ? _this$check_fields$fi : false;
    },
    determineMontantApprouve: function determineMontantApprouve() {
      var _this$dossier_credit;
      var dossier = (_this$dossier_credit = this.dossier_credit) !== null && _this$dossier_credit !== void 0 ? _this$dossier_credit : {};
      var caract_inter_pret = dossier === null || dossier === void 0 ? void 0 : dossier.caract_inter_pret;
      var latestAmount = 0;
      var latetstDuree = 0;
      if (caract_inter_pret != null) {
        var _dossier$final_outcom;
        var finalOutcomeUserRole = dossier === null || dossier === void 0 || (_dossier$final_outcom = dossier.final_outcome) === null || _dossier$final_outcom === void 0 ? void 0 : _dossier$final_outcom.giver_role_sigle;
        var latestObj = caract_inter_pret.find(function (el) {
          return el.role_sigle == finalOutcomeUserRole;
        });
        latestAmount = latestObj === null || latestObj === void 0 ? void 0 : latestObj['montant_pret_' + finalOutcomeUserRole];
        latetstDuree = latestObj === null || latestObj === void 0 ? void 0 : latestObj.duree_pret;
        if (!latestAmount) {
          var _caract_inter_pret$at, _caract_inter_pret$at2, _caract_inter_pret$at3;
          finalOutcomeUserRole = (_caract_inter_pret$at = caract_inter_pret.at(-1)) === null || _caract_inter_pret$at === void 0 ? void 0 : _caract_inter_pret$at.role_sigle;
          latestAmount = (_caract_inter_pret$at2 = caract_inter_pret.at(-1)) === null || _caract_inter_pret$at2 === void 0 ? void 0 : _caract_inter_pret$at2['montant_pret_' + finalOutcomeUserRole];
          latetstDuree = (_caract_inter_pret$at3 = caract_inter_pret.at(-1)) === null || _caract_inter_pret$at3 === void 0 ? void 0 : _caract_inter_pret$at3['duree_pret'];
        }
      }
      return {
        montantDef: latestAmount,
        dureeDef: latetstDuree
      };
    },
    loadRetrieved: function loadRetrieved() {
      var _this$dossier_credit2, _this$formDataToBeWat4, _this$type_convention;
      var dossier = (_this$dossier_credit2 = this.dossier_credit) !== null && _this$dossier_credit2 !== void 0 ? _this$dossier_credit2 : {};
      if (dossier["cred_pub_tb_10009"] != undefined) {
        var cred_pub_tb_10009 = dossier["cred_pub_tb_10009"];
        if (cred_pub_tb_10009) {
          var _cred_pub_tb_10009$fr;
          this.frais_credits = (_cred_pub_tb_10009$fr = cred_pub_tb_10009 === null || cred_pub_tb_10009 === void 0 ? void 0 : cred_pub_tb_10009.frais_credits) !== null && _cred_pub_tb_10009$fr !== void 0 ? _cred_pub_tb_10009$fr : [];
        }
      }
      if (dossier["caf_recorded_file"] != undefined) {
        var caf_recorded_file = dossier["caf_recorded_file"];
        if (caf_recorded_file.indicatif != undefined) {
          this.mask_telephone = "+".concat(caf_recorded_file.indicatif, " ## ## ### ###");
          this.formDataToBeWatched.indicatif_telephone = "+".concat(caf_recorded_file.indicatif);
        }
      }
      this.fonction = (_this$formDataToBeWat4 = this.formDataToBeWatched.profession) !== null && _this$formDataToBeWat4 !== void 0 ? _this$formDataToBeWat4 : "";
      var tbArray = this.determineCredPubTablesFromDosCred(dossier);
      if (this.first_time) return;
      this.first_time = true;
      this.formDataToBeWatched.type_convention = (_this$type_convention = this.type_convention) !== null && _this$type_convention !== void 0 ? _this$type_convention : "";
      if (!['', null, undefined].includes(tbArray[0])) {
        var _dossier$cred1$objet_, _dossier$cred, _dossier$cred2$compte, _dossier$cred2, _dossier$cred1$denomi, _dossier$cred3, _dossier$cred3$foncti, _dossier$cred4, _dossier$cred3$foncti2, _dossier$cred5, _dossier$cred2$date_n, _dossier$cred6, _dossier$cred2$ville_, _dossier$cred7, _dossier$cred2$ville_2, _dossier$cred8, _dossier$cred2$teleph, _dossier$cred9, _dossier$cred2$type_p, _dossier$cred0, _dossier$cred2$num_pi, _dossier$cred1, _dossier$cred2$date_d, _dossier$cred10, _dossier$cred2$date_f, _dossier$cred11, _dossier$cred2$lieu_d, _dossier$cred12, _dossier$cred1$taux, _dossier$cred13, _dossier$cred1$type_c, _dossier$cred14, _dossier$cred1$mode_p, _dossier$cred15, _dossier$cred1$mode_p2, _dossier$cred16, _this$determineMontan, _this$determineMontan2, _this$determineMontan3, _this$determineMontan4;
        var cred1 = tbArray[1];
        var cred2 = tbArray[3];
        var cred3 = tbArray[5];
        this.formDataToBeWatched.expose = (_dossier$cred1$objet_ = dossier === null || dossier === void 0 || (_dossier$cred = dossier[cred1]) === null || _dossier$cred === void 0 ? void 0 : _dossier$cred.objet_du_pret) !== null && _dossier$cred1$objet_ !== void 0 ? _dossier$cred1$objet_ : "";
        this.formDataToBeWatched.compte_numero = (_dossier$cred2$compte = dossier === null || dossier === void 0 || (_dossier$cred2 = dossier[cred2]) === null || _dossier$cred2 === void 0 ? void 0 : _dossier$cred2.compte_numero) !== null && _dossier$cred2$compte !== void 0 ? _dossier$cred2$compte : "";
        this.formDataToBeWatched.emprunteur = (_dossier$cred1$denomi = dossier === null || dossier === void 0 || (_dossier$cred3 = dossier[cred1]) === null || _dossier$cred3 === void 0 ? void 0 : _dossier$cred3.denomination_client) !== null && _dossier$cred1$denomi !== void 0 ? _dossier$cred1$denomi : "";
        this.fonction = (_dossier$cred3$foncti = dossier === null || dossier === void 0 || (_dossier$cred4 = dossier[cred3]) === null || _dossier$cred4 === void 0 ? void 0 : _dossier$cred4.fonction) !== null && _dossier$cred3$foncti !== void 0 ? _dossier$cred3$foncti : "";
        this.formDataToBeWatched.profession = (_dossier$cred3$foncti2 = dossier === null || dossier === void 0 || (_dossier$cred5 = dossier[cred3]) === null || _dossier$cred5 === void 0 ? void 0 : _dossier$cred5.fonction) !== null && _dossier$cred3$foncti2 !== void 0 ? _dossier$cred3$foncti2 : "";
        this.formDataToBeWatched.date_naissance = (_dossier$cred2$date_n = dossier === null || dossier === void 0 || (_dossier$cred6 = dossier[cred2]) === null || _dossier$cred6 === void 0 ? void 0 : _dossier$cred6.date_naissance) !== null && _dossier$cred2$date_n !== void 0 ? _dossier$cred2$date_n : "";
        this.formDataToBeWatched.ville_naissance = (_dossier$cred2$ville_ = dossier === null || dossier === void 0 || (_dossier$cred7 = dossier[cred2]) === null || _dossier$cred7 === void 0 ? void 0 : _dossier$cred7.ville_naissance) !== null && _dossier$cred2$ville_ !== void 0 ? _dossier$cred2$ville_ : "";
        this.formDataToBeWatched.ville_residence = (_dossier$cred2$ville_2 = dossier === null || dossier === void 0 || (_dossier$cred8 = dossier[cred2]) === null || _dossier$cred8 === void 0 ? void 0 : _dossier$cred8.ville_residence) !== null && _dossier$cred2$ville_2 !== void 0 ? _dossier$cred2$ville_2 : "";
        this.formDataToBeWatched.telephone = (_dossier$cred2$teleph = dossier === null || dossier === void 0 || (_dossier$cred9 = dossier[cred2]) === null || _dossier$cred9 === void 0 ? void 0 : _dossier$cred9.telephone) !== null && _dossier$cred2$teleph !== void 0 ? _dossier$cred2$teleph : "";
        this.formDataToBeWatched.type_piece = (_dossier$cred2$type_p = dossier === null || dossier === void 0 || (_dossier$cred0 = dossier[cred2]) === null || _dossier$cred0 === void 0 ? void 0 : _dossier$cred0.type_piece) !== null && _dossier$cred2$type_p !== void 0 ? _dossier$cred2$type_p : "";
        this.formDataToBeWatched.num_piece = (_dossier$cred2$num_pi = dossier === null || dossier === void 0 || (_dossier$cred1 = dossier[cred2]) === null || _dossier$cred1 === void 0 ? void 0 : _dossier$cred1.num_piece) !== null && _dossier$cred2$num_pi !== void 0 ? _dossier$cred2$num_pi : "";
        this.formDataToBeWatched.date_delivrance_piece = (_dossier$cred2$date_d = dossier === null || dossier === void 0 || (_dossier$cred10 = dossier[cred2]) === null || _dossier$cred10 === void 0 ? void 0 : _dossier$cred10.date_delivrance_piece) !== null && _dossier$cred2$date_d !== void 0 ? _dossier$cred2$date_d : "";
        this.formDataToBeWatched.date_fin_piece = (_dossier$cred2$date_f = dossier === null || dossier === void 0 || (_dossier$cred11 = dossier[cred2]) === null || _dossier$cred11 === void 0 ? void 0 : _dossier$cred11.date_fin_piece) !== null && _dossier$cred2$date_f !== void 0 ? _dossier$cred2$date_f : "";
        this.formDataToBeWatched.lieu_delivrance_piece = (_dossier$cred2$lieu_d = dossier === null || dossier === void 0 || (_dossier$cred12 = dossier[cred2]) === null || _dossier$cred12 === void 0 ? void 0 : _dossier$cred12.lieu_delivrance_piece) !== null && _dossier$cred2$lieu_d !== void 0 ? _dossier$cred2$lieu_d : "";
        this.formDataToBeWatched.taux = (_dossier$cred1$taux = dossier === null || dossier === void 0 || (_dossier$cred13 = dossier[cred1]) === null || _dossier$cred13 === void 0 ? void 0 : _dossier$cred13.taux) !== null && _dossier$cred1$taux !== void 0 ? _dossier$cred1$taux : 0;
        this.formDataToBeWatched.type_credit = (_dossier$cred1$type_c = dossier === null || dossier === void 0 || (_dossier$cred14 = dossier[cred1]) === null || _dossier$cred14 === void 0 ? void 0 : _dossier$cred14.type_credit) !== null && _dossier$cred1$type_c !== void 0 ? _dossier$cred1$type_c : "";
        this.formDataToBeWatched.mode_tranche = (_dossier$cred1$mode_p = dossier === null || dossier === void 0 || (_dossier$cred15 = dossier[cred1]) === null || _dossier$cred15 === void 0 ? void 0 : _dossier$cred15.mode_paiement_demande) !== null && _dossier$cred1$mode_p !== void 0 ? _dossier$cred1$mode_p : "";
        this.formDataToBeWatched.mode_paiement_demande = (_dossier$cred1$mode_p2 = dossier === null || dossier === void 0 || (_dossier$cred16 = dossier[cred1]) === null || _dossier$cred16 === void 0 ? void 0 : _dossier$cred16.mode_paiement_demande) !== null && _dossier$cred1$mode_p2 !== void 0 ? _dossier$cred1$mode_p2 : "";
        this.formDataToBeWatched.montant_approuve = (_this$determineMontan = (_this$determineMontan2 = this.determineMontantApprouve()) === null || _this$determineMontan2 === void 0 ? void 0 : _this$determineMontan2.montantDef) !== null && _this$determineMontan !== void 0 ? _this$determineMontan : 0;
        this.formDataToBeWatched.duree_credit = (_this$determineMontan3 = (_this$determineMontan4 = this.determineMontantApprouve()) === null || _this$determineMontan4 === void 0 ? void 0 : _this$determineMontan4.dureeDef) !== null && _this$determineMontan3 !== void 0 ? _this$determineMontan3 : 0;
      }
    },
    send2Backend: function send2Backend(newVal) {
      var _this4 = this;
      this.on_saving = true;
      this.$emit("autosaving");
      this.$axios.post(this.ebapisHost + "creditbuilder/api/v1/redaction-convention/", {
        cred_pub_key: this.dossier_credit['cred_pub_key'],
        filledData: newVal
      }).then(function (response) {
        _this4.on_saving = false;
        _this4.$emit("autosaving");
        if (_this4.local_edit_mode == false) {
          _this4.$emit("edit-mode", {
            convention_id: _this4.formDataToBeWatched.id
          });
          _this4.local_edit_mode = true;
        }
        if (_this4.local_close_edit_mode == false) {
          _this4.$emit("edit-mode", {
            close: true
          });
          _this4.local_close_edit_mode = true;
        }
      })["catch"](function (error) {
        _this4.$Progress.finish();
        console.log(error);
      });
    },
    // lancer l'upload auto de la convention
    exportToPDF: function exportToPDF(data) {
      EventBus.$emit("export-pdf", {
        ref: this.$refs.contentToPdf,
        download: data
      });
    },
    buildOffPrintable: function buildOffPrintable() {
      var _arguments = arguments,
        _this5 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var retryCount, targetElement, preloader_content, elements, printableContainer, PAGE_WIDTH, PAGE_HEIGHT, MARGIN, PADDING, AVAILABLE_HEIGHT, currentPage, currentHeight, pageCounter, applyStyleToFirstP, paginationDiv, qrCode;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              applyStyleToFirstP = function _applyStyleToFirstP(element) {
                if (!element) return;

                // Vérifie si l'élément actuel est un <p>
                if (element.tagName === 'P') {
                  element.style.margin = '0px'; // Applique le style
                  return; // Stoppe la récursion après avoir trouvé le premier <p>
                }

                // Parcours récursif des enfants
                var _iterator = _createForOfIteratorHelper(element.children),
                  _step;
                try {
                  for (_iterator.s(); !(_step = _iterator.n()).done;) {
                    var child = _step.value;
                    applyStyleToFirstP(child);
                  }
                } catch (err) {
                  _iterator.e(err);
                } finally {
                  _iterator.f();
                }
              };
              retryCount = _arguments.length > 0 && _arguments[0] !== undefined ? _arguments[0] : 0;
              _this5.build_off = false;
              targetElement = _this5.$refs.contentToCapture;
              if (targetElement) {
                _context.next = 14;
                break;
              }
              if (!(retryCount < 3)) {
                _context.next = 12;
                break;
              }
              console.warn("\u26A0\uFE0F Tentative ".concat(retryCount + 1, " : targetElement introuvable. Nouvelle tentative dans 500ms..."));
              _context.next = 9;
              return new Promise(function (resolve) {
                return setTimeout(resolve, 500);
              });
            case 9:
              return _context.abrupt("return", _this5.buildOffPrintable(retryCount + 1));
            case 12:
              console.error("❌ Échec : targetElement est toujours indisponible après plusieurs tentatives.");
              return _context.abrupt("return");
            case 14:
              targetElement.querySelectorAll("br").forEach(function (br) {
                var div = document.createElement("div");
                div.style.height = "20px";
                div.style.display = "block";
                br.replaceWith(div);
              });
              preloader_content = document.getElementById("preloader-content");
              elements = Array.from(targetElement.children);
              printableContainer = document.getElementById("printable");
              printableContainer.innerHTML = "";
              PAGE_WIDTH = 794;
              PAGE_HEIGHT = 1122;
              MARGIN = 50;
              PADDING = 40;
              AVAILABLE_HEIGHT = PAGE_HEIGHT - PADDING * 2 - 2;
              currentPage = document.createElement("div");
              currentPage.classList.add("print-page");
              currentPage.style.width = "".concat(PAGE_WIDTH, "px");
              currentPage.style.height = "".concat(PAGE_HEIGHT, "px");
              currentPage.style.margin = "".concat(MARGIN, "px auto");
              currentPage.style.padding = "".concat(PADDING, "px");
              currentPage.style.boxSizing = "border-box";
              currentPage.style.border = "1px solid #ddd";
              currentPage.style.background = "white";
              currentPage.style.position = "relative";
              currentHeight = 0;
              pageCounter = 1;
              elements.forEach(function (el, index) {
                var clonedElement = el.cloneNode(true);
                applyStyleToFirstP(clonedElement);

                // Vérifier la hauteur de l'élément
                preloader_content.appendChild(clonedElement);
                var elementHeight = clonedElement.offsetHeight;
                // clonedElement.style.backgroundColor = getRandomColor();

                var clone = clonedElement.cloneNode(true);
                if (currentHeight + elementHeight > AVAILABLE_HEIGHT) {
                  // Pagination
                  var paginationDiv = document.createElement("div");
                  paginationDiv.textContent = "".concat(pageCounter);
                  paginationDiv.style.position = "absolute";
                  paginationDiv.style.bottom = "30px";
                  paginationDiv.style.right = "35px";
                  paginationDiv.style.fontSize = "15px";
                  paginationDiv.style.color = "#666";
                  currentPage.appendChild(paginationDiv);
                  // Pagination

                  printableContainer.appendChild(currentPage);

                  // Nouvelle page
                  currentPage = document.createElement("div");
                  currentPage.classList.add("print-page");
                  currentPage.style.width = "".concat(PAGE_WIDTH, "px");
                  currentPage.style.height = "".concat(PAGE_HEIGHT, "px");
                  currentPage.style.margin = "".concat(MARGIN, "px auto");
                  currentPage.style.padding = "".concat(PADDING, "px");
                  currentPage.style.boxSizing = "border-box";
                  currentPage.style.border = "1px solid #ddd";
                  currentPage.style.background = "white";
                  currentPage.style.position = "relative";
                  currentHeight = 0;
                  pageCounter++;
                }
                if (clone.classList.contains('to-span')) {
                  var innerHTML = clone.innerHTML;
                  clone = document.createElement('span');
                  clone.innerHTML = innerHTML;
                }
                currentPage.appendChild(clone);
                currentHeight += elementHeight;
              });
              printableContainer.appendChild(currentPage);

              // Ajouter le QR Code uniquement sur la dernière page
              if (currentPage.children.length > 0) {
                // Pagination
                paginationDiv = document.createElement("div");
                paginationDiv.textContent = "".concat(pageCounter);
                paginationDiv.style.position = "absolute";
                paginationDiv.style.bottom = "30px";
                paginationDiv.style.right = "35px";
                paginationDiv.style.fontSize = "15px";
                paginationDiv.style.color = "#666";
                currentPage.appendChild(paginationDiv);
                // Pagination
                currentPage.style.paddingBottom = "".concat(PADDING * 4 + 10, "px");
                qrCode = _this5.generateQRCode(150);
                qrCode.style.position = "absolute";
                qrCode.style.right = "".concat(PADDING / 2, "px");
                qrCode.style.bottom = "".concat(PADDING / 2, "px");

                // Ajouter le QR code après tous les éléments
                currentPage.appendChild(qrCode);
                printableContainer.appendChild(currentPage);
              }
              document.querySelector('#preloader-content').textContent = "";
              document.querySelector('#preloader-content').remove();
              _this5.build_off = true;
            case 42:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }))();
    },
    generateQRCode: function generateQRCode() {
      var _this$dossier_credit3, _this$dossier_credit4, _this$authenticatedUs, _this$authenticatedUs2, _this$authenticatedUs3, _this$dossier_credit5;
      var size = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 150;
      var MIX_APP_KEY = "base64:gdjlPSs3+sKaDi+/SNwOI9pjIE/c9dlYM78gSikIAjY=";
      var secretKey = MIX_APP_KEY.replace('base64:', '');
      // const secretKey = "maCléSecrète123"; 

      // construction de data
      var payload = {
        num_doss: (_this$dossier_credit3 = this.dossier_credit) === null || _this$dossier_credit3 === void 0 ? void 0 : _this$dossier_credit3.numero_dossier,
        cred_pub_key: (_this$dossier_credit4 = this.dossier_credit) === null || _this$dossier_credit4 === void 0 ? void 0 : _this$dossier_credit4.cred_pub_key,
        user: {
          name: (_this$authenticatedUs = this.authenticatedUser) === null || _this$authenticatedUs === void 0 ? void 0 : _this$authenticatedUs.name,
          role: (_this$authenticatedUs2 = this.authenticatedUser) === null || _this$authenticatedUs2 === void 0 ? void 0 : _this$authenticatedUs2.role[0].display_name,
          email: (_this$authenticatedUs3 = this.authenticatedUser) === null || _this$authenticatedUs3 === void 0 ? void 0 : _this$authenticatedUs3.email
        },
        client: (_this$dossier_credit5 = this.dossier_credit) === null || _this$dossier_credit5 === void 0 || (_this$dossier_credit5 = _this$dossier_credit5.client_core_banking) === null || _this$dossier_credit5 === void 0 ? void 0 : _this$dossier_credit5.name
      };

      // Chiffrer les données avec CryptoJS
      var encryptedData = this.encryptData(payload, secretKey);
      // Générer le QR code
      var qr = qrcode_generator__WEBPACK_IMPORTED_MODULE_1___default()(0, 'L');
      qr.addData(encryptedData);
      qr.make();
      var qrImg = document.createElement("img");
      qrImg.src = qr.createDataURL();
      qrImg.style.width = "".concat(size, "px");
      qrImg.style.height = "".concat(size, "px");
      qrImg.style.position = "absolute";
      // qrImg.style.top = "20px";
      // qrImg.style.right = "20px";
      // qrImg.style.top = "50%";
      qrImg.style.left = "50%";
      qrImg.style.transform = "translate(-50%, -50%)";
      return qrImg;
    },
    encryptData: function encryptData(data, secretKey) {
      return crypto_js__WEBPACK_IMPORTED_MODULE_2___default().AES.encrypt(JSON.stringify(data), secretKey).toString();
    },
    beforeDestroy: function beforeDestroy() {
      EventBus.$off('build-off-printable');
      EventBus.$off('generate-pdf-process');
    }
  },
  watch: {
    formDataToBeWatched: {
      handler: function handler(newVal, oldVal) {
        var _this6 = this;
        clearTimeout(this.debounce);
        this.debounce = setTimeout(function () {
          _this6.send2Backend(newVal, oldVal);
        }, 3000);
      },
      deep: true,
      immediate: true
    },
    redaction_conventions: {
      handler: function handler(newVal) {
        this.loadData(newVal);
      },
      deep: true,
      immediate: true
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/RedactionConvention.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/RedactionConvention.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_ebapis_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/ebapis.service */ "./resources/js/services/ebapis.service.js");
/* harmony import */ var vueperslides__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vueperslides */ "./node_modules/vueperslides/dist/vueperslides.common.js");
/* harmony import */ var vueperslides__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vueperslides__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vueperslides_dist_vueperslides_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vueperslides/dist/vueperslides.css */ "./node_modules/vueperslides/dist/vueperslides.css");
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");
/* harmony import */ var _forms_nsia_conventions_DAJC_CONV1_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../forms/nsia/conventions/DAJC-CONV1.vue */ "./resources/js/components/forms/nsia/conventions/DAJC-CONV1.vue");
/* harmony import */ var _offview_bank_nsia_memo_conventions_DAJC_CONV1_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../offview/bank/nsia/memo/conventions/DAJC-CONV1.vue */ "./resources/js/components/offview/bank/nsia/memo/conventions/DAJC-CONV1.vue");
/* harmony import */ var _offview_bank_nsia_memo_conventions_DAJC_CONV2_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../offview/bank/nsia/memo/conventions/DAJC-CONV2.vue */ "./resources/js/components/offview/bank/nsia/memo/conventions/DAJC-CONV2.vue");
/* harmony import */ var _html2canvas__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../html2canvas */ "./resources/js/html2canvas.js");
/* harmony import */ var _html2canvas__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_html2canvas__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jspdf */ "./node_modules/jspdf/dist/jspdf.es.min.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return r; }; var t, r = {}, e = Object.prototype, n = e.hasOwnProperty, o = "function" == typeof Symbol ? Symbol : {}, i = o.iterator || "@@iterator", a = o.asyncIterator || "@@asyncIterator", u = o.toStringTag || "@@toStringTag"; function c(t, r, e, n) { Object.defineProperty(t, r, { value: e, enumerable: !n, configurable: !n, writable: !n }); } try { c({}, ""); } catch (t) { c = function c(t, r, e) { return t[r] = e; }; } function h(r, e, n, o) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype); return c(a, "_invoke", function (r, e, n) { var o = 1; return function (i, a) { if (3 === o) throw Error("Generator is already running"); if (4 === o) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var u = n.delegate; if (u) { var c = d(u, n); if (c) { if (c === f) continue; return c; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (1 === o) throw o = 4, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = 3; var h = s(r, e, n); if ("normal" === h.type) { if (o = n.done ? 4 : 2, h.arg === f) continue; return { value: h.arg, done: n.done }; } "throw" === h.type && (o = 4, n.method = "throw", n.arg = h.arg); } }; }(r, n, new Context(o || [])), !0), a; } function s(t, r, e) { try { return { type: "normal", arg: t.call(r, e) }; } catch (t) { return { type: "throw", arg: t }; } } r.wrap = h; var f = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var l = {}; c(l, i, function () { return this; }); var p = Object.getPrototypeOf, y = p && p(p(x([]))); y && y !== e && n.call(y, i) && (l = y); var v = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(l); function g(t) { ["next", "throw", "return"].forEach(function (r) { c(t, r, function (t) { return this._invoke(r, t); }); }); } function AsyncIterator(t, r) { function e(o, i, a, u) { var c = s(t[o], t, i); if ("throw" !== c.type) { var h = c.arg, f = h.value; return f && "object" == _typeof(f) && n.call(f, "__await") ? r.resolve(f.__await).then(function (t) { e("next", t, a, u); }, function (t) { e("throw", t, a, u); }) : r.resolve(f).then(function (t) { h.value = t, a(h); }, function (t) { return e("throw", t, a, u); }); } u(c.arg); } var o; c(this, "_invoke", function (t, n) { function i() { return new r(function (r, o) { e(t, n, r, o); }); } return o = o ? o.then(i, i) : i(); }, !0); } function d(r, e) { var n = e.method, o = r.i[n]; if (o === t) return e.delegate = null, "throw" === n && r.i["return"] && (e.method = "return", e.arg = t, d(r, e), "throw" === e.method) || "return" !== n && (e.method = "throw", e.arg = new TypeError("The iterator does not provide a '" + n + "' method")), f; var i = s(o, r.i, e.arg); if ("throw" === i.type) return e.method = "throw", e.arg = i.arg, e.delegate = null, f; var a = i.arg; return a ? a.done ? (e[r.r] = a.value, e.next = r.n, "return" !== e.method && (e.method = "next", e.arg = t), e.delegate = null, f) : a : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, f); } function w(t) { this.tryEntries.push(t); } function m(r) { var e = r[4] || {}; e.type = "normal", e.arg = t, r[4] = e; } function Context(t) { this.tryEntries = [[-1]], t.forEach(w, this), this.reset(!0); } function x(r) { if (null != r) { var e = r[i]; if (e) return e.call(r); if ("function" == typeof r.next) return r; if (!isNaN(r.length)) { var o = -1, a = function e() { for (; ++o < r.length;) if (n.call(r, o)) return e.value = r[o], e.done = !1, e; return e.value = t, e.done = !0, e; }; return a.next = a; } } throw new TypeError(_typeof(r) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, c(v, "constructor", GeneratorFunctionPrototype), c(GeneratorFunctionPrototype, "constructor", GeneratorFunction), c(GeneratorFunctionPrototype, u, GeneratorFunction.displayName = "GeneratorFunction"), r.isGeneratorFunction = function (t) { var r = "function" == typeof t && t.constructor; return !!r && (r === GeneratorFunction || "GeneratorFunction" === (r.displayName || r.name)); }, r.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, c(t, u, "GeneratorFunction")), t.prototype = Object.create(v), t; }, r.awrap = function (t) { return { __await: t }; }, g(AsyncIterator.prototype), c(AsyncIterator.prototype, a, function () { return this; }), r.AsyncIterator = AsyncIterator, r.async = function (t, e, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(h(t, e, n, o), i); return r.isGeneratorFunction(e) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, g(v), c(v, u, "Generator"), c(v, i, function () { return this; }), c(v, "toString", function () { return "[object Generator]"; }), r.keys = function (t) { var r = Object(t), e = []; for (var n in r) e.unshift(n); return function t() { for (; e.length;) if ((n = e.pop()) in r) return t.value = n, t.done = !1, t; return t.done = !0, t; }; }, r.values = x, Context.prototype = { constructor: Context, reset: function reset(r) { if (this.prev = this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(m), !r) for (var e in this) "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0][4]; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(r) { if (this.done) throw r; var e = this; function n(t) { a.type = "throw", a.arg = r, e.next = t; } for (var o = e.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i[4], u = this.prev, c = i[1], h = i[2]; if (-1 === i[0]) return n("end"), !1; if (!c && !h) throw Error("try statement without catch or finally"); if (null != i[0] && i[0] <= u) { if (u < c) return this.method = "next", this.arg = t, n(c), !0; if (u < h) return n(h), !1; } } }, abrupt: function abrupt(t, r) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var n = this.tryEntries[e]; if (n[0] > -1 && n[0] <= this.prev && this.prev < n[2]) { var o = n; break; } } o && ("break" === t || "continue" === t) && o[0] <= r && r <= o[2] && (o = null); var i = o ? o[4] : {}; return i.type = t, i.arg = r, o ? (this.method = "next", this.next = o[2], f) : this.complete(i); }, complete: function complete(t, r) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && r && (this.next = r), f; }, finish: function finish(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[2] === t) return this.complete(e[4], e[3]), m(e), f; } }, "catch": function _catch(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[0] === t) { var n = e[4]; if ("throw" === n.type) { var o = n.arg; m(e); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(r, e, n) { return this.delegate = { i: x(r), r: e, n: n }, "next" === this.method && (this.arg = t), f; } }, r; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }









/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "RedactionConvention",
  props: {
    dossier_credit: Object
  },
  components: {
    VueperSlides: vueperslides__WEBPACK_IMPORTED_MODULE_1__.VueperSlides,
    VueperSlide: vueperslides__WEBPACK_IMPORTED_MODULE_1__.VueperSlide,
    UploadCloudIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_8__.UploadCloudIcon,
    DAJC_CONV1: _forms_nsia_conventions_DAJC_CONV1_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    DAJC_CONV1_OFF: _offview_bank_nsia_memo_conventions_DAJC_CONV1_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    DAJC_CONV2_OFF: _offview_bank_nsia_memo_conventions_DAJC_CONV2_vue__WEBPACK_IMPORTED_MODULE_5__["default"]
  },
  created: function created() {
    var _this$dossier_credit,
      _this = this;
    this.meta_data = {
      cred_pub_key: (_this$dossier_credit = this.dossier_credit) === null || _this$dossier_credit === void 0 ? void 0 : _this$dossier_credit.cred_pub_key,
      dossier_credit: this.dossier_credit
    };
    this.getRedactionConvention();

    // Ecoute lancer l'upload auto de la convention
    EventBus.$on("export-pdf", function (data) {
      _this.generatePdf(data.download);
    });
    EventBus.$on('redaction-contrat', function (data) {
      // console.log("redaction_contrat",data);
      _this.contratIndex = data;
      // console.log("this.contratIndex",this.contratIndex);
    });
    EventBus.$on('end-auto-process', function () {
      _this.endProcess();
    });
  },
  mounted: function mounted() {
    EventBus.$on("created-extra-file-template", this.onCreatedTemplate);
    EventBus.$on("finished-extra-file-upload", this.onFinishedExtraFileUpload);
  },
  data: function data() {
    return {
      ebapisHost: _services_ebapis_service__WEBPACK_IMPORTED_MODULE_0__["default"].host,
      isFileFormVisible: true,
      parseables: [{
        title: "Convention de prêt PPO",
        image: __webpack_require__(/*! ../../../../../images/conventions/image_conv_pret.jpg */ "./public/images/conventions/image_conv_pret.jpg")
      }, {
        title: "Convention de nantissement de compte bancaire",
        image: __webpack_require__(/*! ../../../../../images/conventions/image_conv_nan.jpg */ "./public/images/conventions/image_conv_nan.jpg")
      }],
      meta_data: [],
      edit_mode: true,
      isLoading: false,
      convention_id: null,
      autosaving_mode: false,
      selectedConvention: "",
      on_write_convention: false,
      redaction_conventions: [],
      contratIndex: 0,
      pdfFile: null,
      created_template: null
    };
  },
  computed: {},
  methods: {
    onFinishedExtraFileUpload: function onFinishedExtraFileUpload(data) {
      var _this2 = this;
      if ((data === null || data === void 0 ? void 0 : data.is_auto) == true) {
        var _this$created_templat, _data$selectedTemplat;
        if (((_this$created_templat = this.created_template) === null || _this$created_templat === void 0 ? void 0 : _this$created_templat.id) == (data === null || data === void 0 || (_data$selectedTemplat = data.selectedTemplate) === null || _data$selectedTemplat === void 0 ? void 0 : _data$selectedTemplat.id)) {
          setTimeout(function () {
            _this2.created_template = null;
            _this2.$modal.hide('extra_explorer');
            _this2.$modal.hide('redaction_convention');
          }, 2500);
        }
      }
    },
    onCreatedTemplate: function onCreatedTemplate(data) {
      var _this3 = this;
      if ((data === null || data === void 0 ? void 0 : data.is_auto) == true) {
        var _data$template;
        this.created_template = (_data$template = data === null || data === void 0 ? void 0 : data.template) !== null && _data$template !== void 0 ? _data$template : null;
        setTimeout(function () {
          EventBus.$emit("file-to-download-auto", _this3.pdfFile);
        }, 1000);
      }
    },
    startRedaction: function startRedaction(item) {
      var _this4 = this;
      this.$confirm("Vous êtes sur le point de démarrer la rédaction `" + (item === null || item === void 0 ? void 0 : item.title) + "` ! Êtes vous sûr de vouloir continuer ?", "Redaction convention").then(function () {
        _this4.selectedConvention = item === null || item === void 0 ? void 0 : item.title;
        _this4.on_write_convention = true;
      });
    },
    setAutosaving: function setAutosaving() {
      this.autosaving_mode = !this.autosaving_mode;
    },
    loadShell: function loadShell() {
      // EventBus.$emit("value-updated")
    },
    editConvention: function editConvention(data) {
      var _data$id;
      this.edit_mode = false;
      this.isFileFormVisible = true;
      this.on_write_convention = true;
      this.selectedConvention = data === null || data === void 0 ? void 0 : data.type_convention;
      this.convention_id = (_data$id = data === null || data === void 0 ? void 0 : data.id) !== null && _data$id !== void 0 ? _data$id : null;
      setTimeout(function () {
        EventBus.$emit("build-off-printable", true);
      }, 50);
    },
    deleteConvention: function deleteConvention(data) {
      var _this5 = this;
      this.$confirm("Vous êtes sur le point de supprimer la convention `" + (data === null || data === void 0 ? void 0 : data.type_convention) + "` ! Êtes vous sûr de vouloir continuer ?", "Suppression convention").then(function () {
        _this5.isLoading = true;
        _this5.$axios.post(_this5.ebapisHost + "creditbuilder/api/v1/delete-redaction-convention/", {
          cred_pub_key: _this5.meta_data['cred_pub_key'],
          data: data
        }).then(function (response) {
          var _response$data$data, _response$data;
          _this5.isLoading = false;
          _this5.redaction_conventions = (_response$data$data = response === null || response === void 0 || (_response$data = response.data) === null || _response$data === void 0 ? void 0 : _response$data.data) !== null && _response$data$data !== void 0 ? _response$data$data : [];
        })["catch"](function (error) {
          console.error(error);
          _this5.isLoading = false;
        });
      });
    },
    setEditMode: function setEditMode(data) {
      var _data$convention_id;
      if ((data === null || data === void 0 ? void 0 : data.close) == true) {
        this.edit_mode = true;
        this.isLoading = false;
        this.convention_id = null;
        this.autosaving_mode = false;
        this.selectedConvention = "";
        this.isFileFormVisible = false;
        this.on_write_convention = false;
        return;
      }
      this.convention_id = (_data$convention_id = data === null || data === void 0 ? void 0 : data.convention_id) !== null && _data$convention_id !== void 0 ? _data$convention_id : null;
      this.edit_mode = !this.edit_mode;
      if (!this.isLoading) {
        this.getRedactionConvention();
      }
    },
    getRedactionConvention: function getRedactionConvention() {
      var _this6 = this;
      this.isLoading = true;
      this.$axios.post(this.ebapisHost + "creditbuilder/api/v1/get-redaction-convention/", {
        cred_pub_key: this.meta_data['cred_pub_key']
      }).then(function (response) {
        var _response$data$data2, _response$data2;
        _this6.isLoading = false;
        _this6.redaction_conventions = (_response$data$data2 = response === null || response === void 0 || (_response$data2 = response.data) === null || _response$data2 === void 0 ? void 0 : _response$data2.data) !== null && _response$data$data2 !== void 0 ? _response$data$data2 : [];
      })["catch"](function (error) {
        console.error(error);
        _this6.isLoading = false;
      });
    },
    generatePdf: function generatePdf(download) {
      var _this7 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var conventionName, filename, pages, pdf, pageWidth, pageHeight, i, page, canvas, imgWidth, imgHeight, imgData, pdfBlob;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              EventBus.$emit("generate-pdf-process", true);
              conventionName = _this7.selectedConvention.trim().replace(/\s+/g, "_").toLowerCase();
              filename = conventionName + ".pdf";
              pages = document.querySelectorAll(".print-page");
              if (pages.length) {
                _context.next = 7;
                break;
              }
              console.error("❌ Aucun élément `.print-page` trouvé.");
              return _context.abrupt("return");
            case 7:
              // console.log(`📄 ${pages.length} pages trouvées.`);
              pdf = new jspdf__WEBPACK_IMPORTED_MODULE_7__.jsPDF("p", "mm", "a4");
              pageWidth = pdf.internal.pageSize.width;
              pageHeight = pdf.internal.pageSize.height;
              i = 0;
            case 11:
              if (!(i < pages.length)) {
                _context.next = 26;
                break;
              }
              page = pages[i]; // 🔹 Supprimer les paddings gauche et droit avant la capture
              page.style.paddingLeft = "40px";
              page.style.paddingRight = "40px";

              // Capturer l'élément actuel en canvas
              _context.next = 17;
              return _html2canvas__WEBPACK_IMPORTED_MODULE_6___default()(page, {
                scale: 2,
                useCORS: true,
                logging: false
              });
            case 17:
              canvas = _context.sent;
              // Calcul des dimensions pour s'adapter au PDF
              imgWidth = pageWidth;
              imgHeight = pageHeight;
              imgData = canvas.toDataURL("image/jpeg", 0.7);
              if (i > 0) pdf.addPage(); // Ajouter une nouvelle page sauf pour la première

              pdf.addImage(imgData, "JPEG", 0, 0, imgWidth, imgHeight);
            case 23:
              i++;
              _context.next = 11;
              break;
            case 26:
              // 🔹 Générer le fichier PDF
              pdfBlob = pdf.output("blob");
              _this7.pdfFile = new File([pdfBlob], filename, {
                type: "application/pdf"
              });

              // console.log(">>end generatePdf");
              if (download) {
                EventBus.$emit("generate-pdf-process", false);
                pdf.save(filename);
              } else {
                EventBus.$emit("generate-pdf-process", false);
                _this7.handleDoubleClickOrClick(_this7.contratIndex, _this7.pdfFile);
              }
            case 29:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }))();
    },
    handleDoubleClickOrClick: function handleDoubleClickOrClick(index, pdfFile) {
      var _this8 = this;
      EventBus.$emit("open-extra-file-explorer");
      setTimeout(function () {
        EventBus.$emit("data-extra-file-explorer", {
          name: "Contrat {(*)}envoie_contrats_" + index + "_" + _this8.$route.params.templateId,
          is_auto: true
        });
      }, 1000);
    },
    endProcess: function endProcess() {
      this.pdfFile = null;
      // this.selectedConvention = "";
    }
  },
  beforeDestroy: function beforeDestroy() {
    EventBus.$off('finished-extra-file-upload', this.onFinishedExtraFileUpload);
    EventBus.$off('created-extra-file-template', this.onCreatedTemplate);
    EventBus.$off('end-auto-process');
    EventBus.$off('redaction-contrat');
    EventBus.$off('export-pdf');
  },
  watch: {
    isFileFormVisible: {
      handler: function handler(newVal) {
        if (newVal == false) {
          this.edit_mode = true;
          this.convention_id = null;
          this.autosaving_mode = false;
          this.selectedConvention = "";
          this.getRedactionConvention();
          this.on_write_convention = false;
        }
      },
      deep: true,
      immediate: true
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/nsia/conventions/DAJC-CONV1.vue?vue&type=template&id=084513ec&scoped=true":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/nsia/conventions/DAJC-CONV1.vue?vue&type=template&id=084513ec&scoped=true ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm$meta_data, _vm$meta_data2;
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("div", {
    staticClass: "row bg-light card-width-height",
    staticStyle: {
      width: "100%",
      height: "100%"
    }
  }, [_vm.seen === true ? _c("div", {
    staticClass: "card",
    staticStyle: {
      width: "100%",
      height: "100%"
    }
  }, [_c("div", {
    staticClass: "row p-0"
  }, [_c("div", {
    staticClass: "col-12 p-0 position-relative"
  }, [["", null, undefined].includes((_vm$meta_data = _vm.meta_data) === null || _vm$meta_data === void 0 || (_vm$meta_data = _vm$meta_data.dossier_credit) === null || _vm$meta_data === void 0 ? void 0 : _vm$meta_data.cred_pub_key) || !["", null, undefined].includes((_vm$meta_data2 = _vm.meta_data) === null || _vm$meta_data2 === void 0 || (_vm$meta_data2 = _vm$meta_data2.dossier_credit) === null || _vm$meta_data2 === void 0 ? void 0 : _vm$meta_data2.cred_pub_key) && !_vm.edit_mode || _vm.isLoading ? _c("div", {
    staticClass: "card-body"
  }, [_vm._m(0)]) : _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "text-right"
  }, [_c("div", [_vm.edit_mode ? _c("i", {
    staticClass: "icofont-pencil mx-2",
    staticStyle: {
      "font-size": "2rem"
    },
    attrs: {
      title: "Edit mode",
      role: "button"
    },
    on: {
      click: _vm.setEditMode
    }
  }) : _c("i", {
    staticClass: "icofont-paperclip mx-2",
    staticStyle: {
      "font-size": "2rem"
    },
    attrs: {
      title: "Edit mode",
      role: "button"
    },
    on: {
      click: _vm.setEditMode
    }
  }), _vm._v(" "), _c("i", {
    staticClass: "icofont-close mx-2",
    staticStyle: {
      "font-size": "2rem"
    },
    attrs: {
      title: "",
      role: "button"
    },
    on: {
      click: _vm.closeEditMode
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_c("label", {
    attrs: {
      "for": "type_convention"
    }
  }, [_vm._v("Convention")]), _vm._v(" "), _c("input", {
    staticClass: "form-control",
    attrs: {
      type: "text",
      readonly: ""
    },
    domProps: {
      value: _vm.formDataToBeWatched.type_convention
    }
  })])])]), _vm._v(" "), _vm.seen1 ? _c("div", {
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
      id: "Emprunteur"
    }
  }, [_vm._v("\n                                    Emprunteur\n                                    "), _c("chevron-up-icon", {
    staticClass: "custom-class",
    staticStyle: {
      "float": "right",
      cursor: "pointer"
    },
    attrs: {
      size: "21"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_c("label", {
    attrs: {
      "for": "emprunteur"
    }
  }, [_vm._v("Nom & Prénoms")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.emprunteur,
      expression: "formDataToBeWatched.emprunteur"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      id: "emprunteur"
    },
    domProps: {
      value: _vm.formDataToBeWatched.emprunteur
    },
    on: {
      input: [function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formDataToBeWatched, "emprunteur", $event.target.value);
      }, _vm.handleInput]
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_c("label", {
    attrs: {
      "for": "compte_numero"
    }
  }, [_vm._v("Compte N°")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.compte_numero,
      expression: "formDataToBeWatched.compte_numero"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      id: "compte_numero"
    },
    domProps: {
      value: _vm.formDataToBeWatched.compte_numero
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formDataToBeWatched, "compte_numero", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_c("label", {
    attrs: {
      "for": "fonction"
    }
  }, [_vm._v("Profession ")]), _vm._v(" "), _c("div", {
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
        }, [_vm._v(_vm._s(option.libelle))])];
      }
    }, {
      key: "singlelabel",
      fn: function fn(_ref2) {
        var value = _ref2.value;
        return [_c("p", {
          staticClass: "multiselect-single-label"
        }, [_vm._v(_vm._s(value.libelle))])];
      }
    }], null, false, 70791940),
    model: {
      value: _vm.fonction,
      callback: function callback($$v) {
        _vm.fonction = $$v;
      },
      expression: "fonction"
    }
  }), _vm._v(" "), _vm.professions == "" || _vm.professions.length == 0 ? _c("span", {
    staticClass: "spinner-border spinner-border spinner-custom-input",
    staticStyle: {
      "margin-right": "17px"
    }
  }) : _vm._e()], 1)]), _vm._v(" "), _vm.fonction == "Autre" ? _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_c("label", {
    attrs: {
      "for": "fonction_"
    }
  }, [_vm._v("Autre profession ")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.profession,
      expression: "formDataToBeWatched.profession"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      id: "fonction_"
    },
    domProps: {
      value: _vm.formDataToBeWatched.profession
    },
    on: {
      input: [function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formDataToBeWatched, "profession", $event.target.value);
      }, _vm.handleInput]
    }
  })]) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_c("label", {
    attrs: {
      "for": "date_naissance"
    }
  }, [_vm._v("Date de naissance")]), _vm._v(" "), _c("date-input", {
    attrs: {
      value: _vm.formDataToBeWatched.date_naissance,
      id: "date_naissance"
    },
    on: {
      input: _vm.formDataVars
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_c("label", {
    attrs: {
      "for": "ville_naissance"
    }
  }, [_vm._v("Ville de naissance ")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.ville_naissance,
      expression: "formDataToBeWatched.ville_naissance"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      id: "ville_naissance"
    },
    domProps: {
      value: _vm.formDataToBeWatched.ville_naissance
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formDataToBeWatched, "ville_naissance", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_c("label", {
    attrs: {
      "for": "pays_naissance"
    }
  }, [_vm._v("Pays de naissance ")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.pays_naissance,
      expression: "formDataToBeWatched.pays_naissance"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      id: "pays_naissance"
    },
    domProps: {
      value: _vm.formDataToBeWatched.pays_naissance
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formDataToBeWatched, "pays_naissance", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_c("label", {
    attrs: {
      "for": "ville_residence"
    }
  }, [_vm._v("Ville de résidence ")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.ville_residence,
      expression: "formDataToBeWatched.ville_residence"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      id: "ville_residence"
    },
    domProps: {
      value: _vm.formDataToBeWatched.ville_residence
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formDataToBeWatched, "ville_residence", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_c("label", {
    attrs: {
      "for": "telephone"
    }
  }, [_vm._v("Numero de téléphone ")]), _vm._v(" "), _c("the-mask", {
    staticClass: "form-control",
    attrs: {
      mask: _vm.mask_telephone,
      type: "text",
      id: "telephone"
    },
    model: {
      value: _vm.formDataToBeWatched.telephone,
      callback: function callback($$v) {
        _vm.$set(_vm.formDataToBeWatched, "telephone", $$v);
      },
      expression: "formDataToBeWatched.telephone"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_c("label", {
    attrs: {
      "for": "type_piece"
    }
  }, [_vm._v("Type de pièce d'identité ")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.type_piece,
      expression: "formDataToBeWatched.type_piece"
    }],
    staticClass: "form-control",
    attrs: {
      id: "type_piece"
    },
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.formDataToBeWatched, "type_piece", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "",
      disabled: "",
      selected: ""
    }
  }, [_vm._v("\n                                                --- Sélectionner le type de pièce d'identité ---\n                                            ")]), _vm._v(" "), _c("option", {
    attrs: {
      value: ""
    }
  }), _vm._v(" "), _c("option", {
    attrs: {
      value: "Passport"
    }
  }, [_vm._v("Passport")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "CNI"
    }
  }, [_vm._v("CNI")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "PC"
    }
  }, [_vm._v("PC")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "Carte consulaire"
    }
  }, [_vm._v("Carte consulaire")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_c("label", {
    attrs: {
      "for": "num_piece"
    }
  }, [_vm._v("Le numéro de la pièce d'identité ")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.num_piece,
      expression: "formDataToBeWatched.num_piece"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      id: "num_piece"
    },
    domProps: {
      value: _vm.formDataToBeWatched.num_piece
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formDataToBeWatched, "num_piece", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_c("label", {
    attrs: {
      "for": "lieu_delivrance_piece"
    }
  }, [_vm._v("Lieu de délivrance ")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.lieu_delivrance_piece,
      expression: "formDataToBeWatched.lieu_delivrance_piece"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      id: "lieu_delivrance_piece"
    },
    domProps: {
      value: _vm.formDataToBeWatched.lieu_delivrance_piece
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formDataToBeWatched, "lieu_delivrance_piece", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_c("label", {
    attrs: {
      "for": "date_delivrance_piece"
    }
  }, [_vm._v("Délivré le ")]), _vm._v(" "), _c("date-input", {
    attrs: {
      value: _vm.formDataToBeWatched.date_delivrance_piece,
      id: "date_delivrance_piece"
    },
    on: {
      input: _vm.formDataVars
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_c("label", {
    attrs: {
      "for": "date_fin_piece"
    }
  }, [_vm._v("Valide jusqu'au ")]), _vm._v(" "), _c("date-input", {
    attrs: {
      value: _vm.formDataToBeWatched.date_fin_piece,
      id: "date_fin_piece"
    },
    on: {
      input: _vm.formDataVars
    }
  })], 1)])])]) : _c("div", {
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
      id: "Emprunteur"
    }
  }, [_vm._v("\n                                    Emprunteur\n                                    "), _c("chevron-down-icon", {
    staticClass: "custom-class",
    staticStyle: {
      "float": "right",
      cursor: "pointer"
    },
    attrs: {
      size: "21"
    }
  })], 1)])]), _vm._v(" "), _vm.type_convention == "Convention de prêt PPO" ? [_vm.seen2 ? _c("div", {
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
      id: "Exposé"
    }
  }, [_vm._v("\n                                        Exposé\n                                        "), _c("chevron-up-icon", {
    staticClass: "custom-class",
    staticStyle: {
      "float": "right",
      cursor: "pointer"
    },
    attrs: {
      size: "21"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-md-12"
  }, [_c("vue-editor", {
    attrs: {
      id: "expose"
    },
    on: {
      "update-value": function updateValue($event) {
        _vm.formDataToBeWatched[$event[0]] = $event[1];
      }
    },
    model: {
      value: _vm.formDataToBeWatched.expose,
      callback: function callback($$v) {
        _vm.$set(_vm.formDataToBeWatched, "expose", $$v);
      },
      expression: "formDataToBeWatched.expose"
    }
  })], 1)])])]) : _c("div", {
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
      id: "Exposé"
    }
  }, [_vm._v("\n                                        Exposé\n                                        "), _c("chevron-down-icon", {
    staticClass: "custom-class",
    staticStyle: {
      "float": "right",
      cursor: "pointer"
    },
    attrs: {
      size: "21"
    }
  })], 1)])])] : _vm._e(), _vm._v(" "), _vm.seen3 ? _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "relook-header",
    on: {
      click: function click($event) {
        _vm.seen3 = !_vm.seen3;
      }
    }
  }, [_c("h6", {
    "class": " subdiv" + this.tb_name,
    attrs: {
      id: "Information-du-prêt"
    }
  }, [_vm._v("\n                                    Information du prêt\n                                    "), _c("chevron-up-icon", {
    staticClass: "custom-class",
    staticStyle: {
      "float": "right",
      cursor: "pointer"
    },
    attrs: {
      size: "21"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_c("label", {
    attrs: {
      "for": "type_credit"
    }
  }, [_vm._v("Type de crédit")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.type_credit,
      expression: "formDataToBeWatched.type_credit"
    }],
    staticClass: "form-control",
    attrs: {
      id: "type_credit"
    },
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.formDataToBeWatched, "type_credit", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_vm._l(_vm.type_credits, function (el, index) {
    return [_c("option", {
      key: index,
      domProps: {
        value: el.libelle
      }
    }, [_vm._v(_vm._s(el.libelle))])];
  })], 2)]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_c("label", {
    attrs: {
      "for": "montant_approuve"
    }
  }, [_vm._v("Montant approuvé")]), _vm._v(" "), _c("currency-input2", {
    attrs: {
      id: "montant_approuve",
      value: _vm.formDataToBeWatched.montant_approuve
    },
    on: {
      input: _vm.formDataVars
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_c("label", {
    attrs: {
      "for": "taux"
    }
  }, [_vm._v("Taux approuvé")]), _vm._v(" "), _c("input-group", {
    scopedSlots: _vm._u([{
      key: "input",
      fn: function fn() {
        return [_c("currency-input", {
          attrs: {
            value: _vm.formDataToBeWatched.taux,
            id: "taux",
            max: 100,
            "float": "",
            percentage: ""
          },
          on: {
            input: _vm.formDataVars
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
    }], null, false, 1155513253)
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(1), _vm._v(" "), _c("div", {
    staticClass: "d-flex",
    staticStyle: {
      "min-width": "150px"
    }
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.duree_credit,
      expression: "formDataToBeWatched.duree_credit"
    }],
    staticClass: "form-control",
    attrs: {
      type: "number",
      id: "duree_credit",
      min: "0"
    },
    domProps: {
      value: _vm.formDataToBeWatched.duree_credit
    },
    on: {
      input: [function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formDataToBeWatched, "duree_credit", $event.target.value);
      }, _vm.handleInput]
    }
  }), _vm._v(" "), _c("input", {
    staticClass: "form-control flex-1",
    staticStyle: {
      "min-width": "45px",
      background: "#e9ecef",
      "margin-left": "2px"
    },
    attrs: {
      type: "text",
      placeholder: "Mois"
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_c("label", {
    staticClass: "text-nowrap",
    attrs: {
      "for": "duree_credit"
    }
  }, [_vm._v("Mode de paiement")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.mode_tranche,
      expression: "formDataToBeWatched.mode_tranche"
    }],
    staticClass: "form-select single-select",
    attrs: {
      name: "mode_tranche"
    },
    on: {
      change: [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.formDataToBeWatched, "mode_tranche", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }, _vm.handleInputModetranche]
    }
  }, [_c("option", {
    attrs: {
      value: ""
    }
  }), _vm._v(" "), _vm._l(_vm.list_tranches, function (tranche, index) {
    return _c("option", {
      key: "t_" + index,
      domProps: {
        value: tranche.val
      }
    }, [_vm._v("\n                                                " + _vm._s(tranche.libelle) + "\n                                            ")]);
  })], 2)]), _vm._v(" "), !["", null, undefined, "undefined"].includes(_vm.formDataToBeWatched.mode_paiement_demande) ? [_c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(2), _vm._v(" "), _c("div", {
    staticClass: "d-flex",
    staticStyle: {
      "min-width": "150px"
    }
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.frequence_versement,
      expression: "formDataToBeWatched.frequence_versement"
    }],
    staticClass: "form-control flex-1",
    staticStyle: {
      "min-width": "45px",
      "margin-right": "2px"
    },
    attrs: {
      type: "number",
      min: "1",
      name: "frequence_versement",
      disabled: _vm.formDataToBeWatched.mode_paiement_demande != "Plusieurs tranches"
    },
    domProps: {
      value: _vm.formDataToBeWatched.frequence_versement
    },
    on: {
      input: [function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formDataToBeWatched, "frequence_versement", $event.target.value);
      }, _vm.handleInputFreqVersement]
    }
  }), _vm._v(" "), _c("input", {
    staticClass: "form-control flex-1",
    staticStyle: {
      "min-width": "45px",
      background: "#e9ecef"
    },
    attrs: {
      type: "text",
      placeholder: "Fois",
      disabled: ""
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_c("label", {
    staticClass: "text-nowrap"
  }), _vm._v(" "), _c("div", {
    staticClass: "d-flex",
    staticStyle: {
      "min-width": "150px"
    }
  }, [_c("input", {
    staticClass: "form-control flex-1",
    staticStyle: {
      "min-width": "45px",
      background: "#e9ecef",
      "margin-right": "2px"
    },
    attrs: {
      type: "text",
      placeholder: "Chaque",
      disabled: ""
    }
  }), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.frequence_mois,
      expression: "formDataToBeWatched.frequence_mois"
    }],
    staticClass: "form-control flex-1",
    staticStyle: {
      "min-width": "45px",
      "margin-right": "2px"
    },
    attrs: {
      type: "number",
      min: "1",
      name: "frequence_mois",
      disabled: _vm.formDataToBeWatched.mode_paiement_demande != "Plusieurs tranches"
    },
    domProps: {
      value: _vm.formDataToBeWatched.frequence_mois
    },
    on: {
      input: [function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formDataToBeWatched, "frequence_mois", $event.target.value);
      }, _vm.handleInputFreqMois]
    }
  }), _vm._v(" "), _c("input", {
    staticClass: "form-control flex-1",
    staticStyle: {
      "min-width": "45px",
      background: "#e9ecef"
    },
    attrs: {
      type: "text",
      placeholder: "Mois",
      disabled: ""
    }
  })])])] : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_c("label", {
    staticClass: "text-nowrap"
  }, [_vm._v("Nombre d'écheance ")]), _vm._v(" "), _c("div", {
    staticClass: "d-flex",
    staticStyle: {
      "min-width": "150px"
    }
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.nombre_echeance,
      expression: "formDataToBeWatched.nombre_echeance"
    }],
    staticClass: "form-control flex-1",
    staticStyle: {
      "min-width": "45px",
      "margin-right": "2px"
    },
    attrs: {
      type: "number",
      min: "1",
      disabled: _vm.formDataToBeWatched.mode_paiement_demande != "Plusieurs tranches"
    },
    domProps: {
      value: _vm.formDataToBeWatched.nombre_echeance
    },
    on: {
      input: [function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formDataToBeWatched, "nombre_echeance", $event.target.value);
      }, _vm.handleInputFreqVersement]
    }
  }), _vm._v(" "), _c("input", {
    staticClass: "form-control flex-1",
    staticStyle: {
      "min-width": "45px",
      background: "#e9ecef"
    },
    attrs: {
      type: "text",
      disabled: ""
    },
    domProps: {
      value: _vm.formDataToBeWatched.type_echeance
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_c("label", {
    attrs: {
      "for": "teg"
    }
  }, [_vm._v("Taux effectif global")]), _vm._v(" "), _c("input-group", {
    scopedSlots: _vm._u([{
      key: "input",
      fn: function fn() {
        return [_c("currency-input", {
          attrs: {
            value: _vm.formDataToBeWatched.teg,
            id: "teg",
            max: 100,
            "float": "",
            percentage: ""
          },
          on: {
            input: _vm.formDataVars
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
    }], null, false, 2849711493)
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_c("label", {
    attrs: {
      "for": "frais_taux"
    }
  }, [_vm._v("Frais de dossier")]), _vm._v(" "), _c("input-group", {
    scopedSlots: _vm._u([{
      key: "input",
      fn: function fn() {
        return [_c("currency-input", {
          attrs: {
            value: _vm.formDataToBeWatched.frais_taux,
            id: "frais_taux",
            max: 100,
            "float": "",
            percentage: ""
          },
          on: {
            input: _vm.formDataVars
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
    }], null, false, 1142906917)
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_c("label", {
    attrs: {
      "for": "frais_min"
    }
  }, [_vm._v("Montant minimun frais dossier")]), _vm._v(" "), _c("currency-input2", {
    attrs: {
      id: "frais_min",
      value: _vm.formDataToBeWatched.frais_min
    },
    on: {
      input: _vm.formDataVars
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_c("label", {
    attrs: {
      "for": "tbb"
    }
  }, [_vm._v("Taux de Base Bancaire (TBB)")]), _vm._v(" "), _c("input-group", {
    scopedSlots: _vm._u([{
      key: "input",
      fn: function fn() {
        return [_c("currency-input", {
          attrs: {
            value: _vm.formDataToBeWatched.tbb,
            id: "tbb",
            max: 100,
            "float": "",
            percentage: ""
          },
          on: {
            input: _vm.formDataVars
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
    }], null, false, 3097423365)
  })], 1)], 2)])]) : _c("div", {
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
      id: "Information-du-prêt"
    }
  }, [_vm._v("\n                                    Information du prêt\n                                    "), _c("chevron-down-icon", {
    staticClass: "custom-class",
    staticStyle: {
      "float": "right",
      cursor: "pointer"
    },
    attrs: {
      size: "21"
    }
  })], 1)])]), _vm._v(" "), _vm.type_convention == "Convention de prêt PPO" ? [_vm.seen4 ? _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "relook-header",
    on: {
      click: function click($event) {
        _vm.seen4 = !_vm.seen4;
      }
    }
  }, [_c("h6", {
    "class": " subdiv" + this.tb_name,
    attrs: {
      id: "Surêtés"
    }
  }, [_vm._v("\n                                        Surêtés\n                                        "), _c("chevron-up-icon", {
    staticClass: "custom-class",
    staticStyle: {
      "float": "right",
      cursor: "pointer"
    },
    attrs: {
      size: "21"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_c("label", {
    attrs: {
      "for": "montant_souscription_profit"
    }
  }, [_vm._v("Souscription au profit à hauteur de")]), _vm._v(" "), _c("currency-input2", {
    attrs: {
      id: "montant_souscription_profit",
      value: _vm.formDataToBeWatched.montant_souscription_profit
    },
    on: {
      input: _vm.formDataVars
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_c("label", {
    attrs: {
      "for": "compte_deposit"
    }
  }, [_vm._v("Numéro compte de déposit")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.compte_deposit,
      expression: "formDataToBeWatched.compte_deposit"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      id: "compte_deposit"
    },
    domProps: {
      value: _vm.formDataToBeWatched.compte_deposit
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formDataToBeWatched, "compte_deposit", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_c("label", {
    attrs: {
      "for": "montant_nantissement_compte"
    }
  }, [_vm._v("Nantissement du compte à hauteur de")]), _vm._v(" "), _c("currency-input2", {
    attrs: {
      id: "montant_nantissement_compte",
      value: _vm.formDataToBeWatched.montant_nantissement_compte
    },
    on: {
      input: _vm.formDataVars
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_c("label", {
    attrs: {
      "for": "montant_ordre_vir_permanent"
    }
  }, [_vm._v("Ordre de virement permanent mensuel")]), _vm._v(" "), _c("currency-input2", {
    attrs: {
      id: "montant_ordre_vir_permanent",
      value: _vm.formDataToBeWatched.montant_ordre_vir_permanent
    },
    on: {
      input: _vm.formDataVars
    }
  })], 1)])])]) : _c("div", {
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
      id: "Surêtés"
    }
  }, [_vm._v("\n                                        Surêtés\n                                        "), _c("chevron-down-icon", {
    staticClass: "custom-class",
    staticStyle: {
      "float": "right",
      cursor: "pointer"
    },
    attrs: {
      size: "21"
    }
  })], 1)])])] : _vm._e(), _vm._v(" "), _vm.type_convention == "Convention de nantissement de compte bancaire" ? [_vm.seen5 ? _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "relook-header",
    on: {
      click: function click($event) {
        _vm.seen5 = !_vm.seen5;
      }
    }
  }, [_c("h6", {
    "class": " subdiv" + this.tb_name,
    attrs: {
      id: "Article"
    }
  }, [_vm._v("\n                                        Article\n                                        "), _c("chevron-up-icon", {
    staticClass: "custom-class",
    staticStyle: {
      "float": "right",
      cursor: "pointer"
    },
    attrs: {
      size: "21"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_c("label", {
    attrs: {
      "for": "au_credit_du_compte"
    }
  }, [_vm._v("Au crédit du compte ")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.au_credit_du_compte,
      expression: "formDataToBeWatched.au_credit_du_compte"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      id: "au_credit_du_compte"
    },
    domProps: {
      value: _vm.formDataToBeWatched.au_credit_du_compte
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formDataToBeWatched, "au_credit_du_compte", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_c("label", {
    attrs: {
      "for": "numero_de_compte_nanti"
    }
  }, [_vm._v("Numéro de compte ")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.numero_de_compte_nanti,
      expression: "formDataToBeWatched.numero_de_compte_nanti"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      id: "numero_de_compte_nanti"
    },
    domProps: {
      value: _vm.formDataToBeWatched.numero_de_compte_nanti
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formDataToBeWatched, "numero_de_compte_nanti", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_c("label", {
    attrs: {
      "for": "montant_nantissement_compte"
    }
  }, [_vm._v("Montant du nantissement")]), _vm._v(" "), _c("currency-input2", {
    attrs: {
      id: "montant_nantissement_compte",
      value: _vm.formDataToBeWatched.montant_nantissement_compte
    },
    on: {
      input: _vm.formDataVars
    }
  })], 1)])])]) : _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "relook-header",
    on: {
      click: function click($event) {
        _vm.seen5 = !_vm.seen5;
      }
    }
  }, [_c("h6", {
    attrs: {
      id: "Article"
    }
  }, [_vm._v("\n                                        Article\n                                        "), _c("chevron-down-icon", {
    staticClass: "custom-class",
    staticStyle: {
      "float": "right",
      cursor: "pointer"
    },
    attrs: {
      size: "21"
    }
  })], 1)])])] : _vm._e(), _vm._v(" "), _vm.seen6 ? _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "relook-header",
    on: {
      click: function click($event) {
        _vm.seen6 = !_vm.seen6;
      }
    }
  }, [_c("h6", {
    "class": " subdiv" + this.tb_name,
    attrs: {
      id: "Fait-à"
    }
  }, [_vm._v("\n                                    Fait à\n                                    "), _c("chevron-up-icon", {
    staticClass: "custom-class",
    staticStyle: {
      "float": "right",
      cursor: "pointer"
    },
    attrs: {
      size: "21"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_c("label", {
    attrs: {
      "for": "fait_a"
    }
  }, [_vm._v("A ")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.fait_a,
      expression: "formDataToBeWatched.fait_a"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      id: "fait_a"
    },
    domProps: {
      value: _vm.formDataToBeWatched.fait_a
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formDataToBeWatched, "fait_a", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_c("label", {
    attrs: {
      "for": "fait_le"
    }
  }, [_vm._v("Le ")]), _vm._v(" "), _c("date-input", {
    attrs: {
      id: "fait_le",
      value: _vm.formDataToBeWatched.fait_le
    },
    on: {
      input: _vm.formDataVars
    }
  })], 1)])])]) : _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "relook-header",
    on: {
      click: function click($event) {
        _vm.seen6 = !_vm.seen6;
      }
    }
  }, [_c("h6", {
    attrs: {
      id: "Fait-à"
    }
  }, [_vm._v("\n                                    Fait à\n                                    "), _c("chevron-down-icon", {
    staticClass: "custom-class",
    staticStyle: {
      "float": "right",
      cursor: "pointer"
    },
    attrs: {
      size: "21"
    }
  })], 1)])])], 2)])])]) : _vm._e()])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "d-flex justify-content-center text-center align-items-center text-muted py-4"
  }, [_c("div", [_c("span", {
    staticClass: "spinner-border spinner-border"
  }), _vm._v(" "), _c("h5", [_vm._v("\n                                    Chargement des données en cours ... "), _c("br"), _vm._v("\n                                    Ceci peut prendre un peu de temps\n                                ")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "text-nowrap",
    attrs: {
      "for": "duree_credit"
    }
  }, [_vm._v("Durée du crédit "), _c("i", {
    staticStyle: {
      color: "#dc3545",
      "font-weight": "800"
    }
  }, [_vm._v("(différent du nombre d'échéances)")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "text-nowrap"
  }, [_vm._v("Fréquence "), _c("span", {
    staticStyle: {
      color: "red"
    }
  }, [_vm._v("*")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/memo/conventions/DAJC-CONV1.vue?vue&type=template&id=4f3d731a&scoped=true":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/memo/conventions/DAJC-CONV1.vue?vue&type=template&id=4f3d731a&scoped=true ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm$formDataToBeWatch, _vm$formDataToBeWatch2, _vm$formDataToBeWatch3, _vm$formDataToBeWatch4, _vm$formDataToBeWatch5, _vm$formDataToBeWatch6, _vm$formDataToBeWatch7, _vm$formDataToBeWatch8, _vm$formDataToBeWatch9, _vm$formDataToBeWatch0, _vm$formDataToBeWatch1, _vm$formDataToBeWatch10, _vm$formDataToBeWatch11, _vm$formDataToBeWatch12, _vm$formDataToBeWatch13, _vm$formDataToBeWatch14, _vm$formDataToBeWatch15, _vm$banque, _vm$banque2, _vm$banque3, _vm$banque4, _vm$banque5, _vm$banque6, _vm$banque7, _vm$banque8, _vm$banque9, _vm$banque0, _vm$banque1, _vm$banque10, _vm$banque11, _vm$banque12, _vm$banque13, _vm$banque14, _vm$banque15, _vm$formDataToBeWatch16, _vm$formDataToBeWatch17, _vm$formDataToBeWatch18, _vm$formDataToBeWatch19, _vm$formDataToBeWatch20, _vm$formDataToBeWatch21, _vm$formDataToBeWatch22, _vm$formDataToBeWatch23, _vm$formDataToBeWatch24, _vm$formDataToBeWatch25, _vm$formDataToBeWatch26, _vm$formDataToBeWatch27, _vm$formDataToBeWatch28, _vm$formDataToBeWatch29, _vm$formDataToBeWatch30, _vm$formDataToBeWatch31, _vm$formDataToBeWatch32, _vm$formDataToBeWatch33, _vm$formDataToBeWatch34, _vm$formDataToBeWatch35, _vm$formDataToBeWatch36, _vm$formDataToBeWatch37, _vm$formDataToBeWatch38, _vm$formDataToBeWatch39, _vm$formDataToBeWatch40, _vm$formDataToBeWatch41, _vm$formDataToBeWatch42, _vm$formDataToBeWatch43, _vm$formDataToBeWatch44;
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_vm.isLoading ? _c("div", {
    staticClass: "card-body"
  }, [_vm._m(0)]) : _c("div", [_c("div", [_c("div", {
    staticClass: "p-5 position-relative",
    staticStyle: {
      width: "845px",
      margin: "0 auto",
      border: "1px solid #c6c6c6",
      "background-color": "#ffffff",
      "text-align": "justify"
    }
  }, [_c("div", {
    staticClass: "position-absolute delete-element",
    staticStyle: {
      top: "10px",
      right: "0"
    }
  }, [_vm.edit_mode ? _c("span", {
    staticClass: "mx-2",
    staticStyle: {
      "font-size": "0.9rem"
    },
    attrs: {
      role: "button"
    },
    on: {
      click: _vm.setEditMode
    }
  }, [_c("i", {
    staticClass: "icofont-pencil",
    attrs: {
      title: "Visualiser la convention"
    }
  }), _vm._v("Visualiser la convention")]) : _c("span", {
    staticClass: "mx-2",
    staticStyle: {
      "font-size": "0.9rem"
    },
    attrs: {
      role: "button"
    },
    on: {
      click: _vm.setEditMode
    }
  }, [_c("i", {
    staticClass: "icofont-paperclip",
    attrs: {
      title: "Modifier la convention"
    }
  }), _vm._v("Modifier la convention")]), _vm._v(" "), !_vm.pdf_process ? [_vm.check_fields_ && !_vm.edit_mode ? _c("span", {
    staticClass: "mx-2",
    staticStyle: {
      "font-size": "0.9rem"
    },
    attrs: {
      role: "button"
    },
    on: {
      click: function click($event) {
        return _vm.exportToPDF(false);
      }
    }
  }, [_c("i", {
    staticClass: "icofont-upload-alt",
    attrs: {
      title: "Uploader le fichier"
    }
  }), _vm._v("Uploader le fichier")]) : _vm._e(), _vm._v(" "), _vm.check_fields_ && !_vm.edit_mode ? _c("span", {
    staticClass: "mx-2",
    staticStyle: {
      "font-size": "0.9rem"
    },
    attrs: {
      role: "button"
    },
    on: {
      click: function click($event) {
        return _vm.exportToPDF(true);
      }
    }
  }, [_c("i", {
    staticClass: "icofont-download",
    attrs: {
      title: "Télécharger le fichier"
    }
  }), _vm._v("Télécharger le fichier")]) : _vm._e()] : _c("div", {
    staticStyle: {
      display: "inline-block"
    }
  }, [_vm._m(1), _vm._v(" "), _c("span", {
    staticStyle: {
      "font-size": "0.9rem",
      "margin-left": "5px"
    }
  }, [_vm._v("Génération du PDF en cours...")])]), _vm._v(" "), _c("span", {
    staticClass: "mx-2",
    staticStyle: {
      "font-size": "0.9rem",
      "margin-right": "50px!important"
    },
    attrs: {
      role: "button"
    },
    on: {
      click: _vm.closeEditMode
    }
  }, [_c("i", {
    staticClass: "icofont-close",
    attrs: {
      title: "Fermer l'édition"
    }
  }), _vm._v("Fermer l'édition")])], 2), _vm._v(" "), _c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: !_vm.build_off,
      expression: "!build_off"
    }],
    ref: "contentToCapture"
  }, [_vm._m(2), _c("br"), _vm._v(" "), _vm._m(3), _c("br"), _vm._v(" "), _c("div", {
    staticStyle: {
      position: "relative"
    }
  }, [_vm.edit_mode ? _c("div", {
    staticStyle: {
      position: "absolute",
      top: "80px",
      right: "-253px",
      cursor: "pointer"
    }
  }, [!_vm.checkField("check_fields_emprunteur") ? _c("span", {
    staticStyle: {
      "font-size": "1.2em",
      color: "red"
    },
    on: {
      click: function click($event) {
        return _vm.onCheckField(true, "check_fields_emprunteur");
      }
    }
  }, [_c("i", {
    staticClass: "icofont-close-circled"
  }), _vm._v(" Valider la section")]) : _c("span", {
    staticStyle: {
      "font-size": "1.2em",
      color: "green"
    },
    on: {
      click: function click($event) {
        return _vm.onCheckField(false, "check_fields_emprunteur");
      }
    }
  }, [_c("i", {
    staticClass: "icofont-check-circled"
  }), _vm._v(" Valider la section")])]) : _vm._e(), _vm._v(" "), _c("div", {
    style: _vm.edit_mode ? "display: ruby; text-align: left" : ""
  }, [!_vm.edit_mode ? _c("span", [_vm._v(_vm._s((_vm$formDataToBeWatch = _vm.formDataToBeWatched) === null || _vm$formDataToBeWatch === void 0 ? void 0 : _vm$formDataToBeWatch.civilite_emprunteur))]) : _c("div", {
    staticStyle: {
      display: "flex",
      "align-items": "center"
    }
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.civilite_emprunteur,
      expression: "formDataToBeWatched.civilite_emprunteur"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      placeholder: "Civilité",
      id: "civilite_emprunteur"
    },
    domProps: {
      value: _vm.formDataToBeWatched.civilite_emprunteur
    },
    on: {
      input: [function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formDataToBeWatched, "civilite_emprunteur", $event.target.value);
      }, _vm.handleInput]
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "input-group-text input-group-text-right"
  }, [!_vm.checkField("civilite_emprunteur") ? _c("span", {
    staticStyle: {
      "font-size": "1.5em",
      color: "red"
    },
    attrs: {
      title: "Valider le champs"
    },
    on: {
      click: function click($event) {
        return _vm.onCheckField(true, "civilite_emprunteur");
      }
    }
  }, [_c("i", {
    staticClass: "icofont-close-circled"
  })]) : _c("span", {
    staticStyle: {
      "font-size": "1.5em",
      color: "green"
    },
    attrs: {
      title: "Invalider le champs"
    },
    on: {
      click: function click($event) {
        return _vm.onCheckField(false, "civilite_emprunteur");
      }
    }
  }, [_c("i", {
    staticClass: "icofont-check-circled"
  })])])]), _vm._v(" "), !_vm.edit_mode ? _c("span", [_c("b", [_vm._v(_vm._s((_vm$formDataToBeWatch2 = _vm.formDataToBeWatched) === null || _vm$formDataToBeWatch2 === void 0 ? void 0 : _vm$formDataToBeWatch2.emprunteur))]), _vm._v(",")]) : _c("div", {
    staticStyle: {
      display: "flex",
      "align-items": "center"
    }
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.emprunteur,
      expression: "formDataToBeWatched.emprunteur"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      placeholder: "Emprunteur",
      id: "emprunteur"
    },
    domProps: {
      value: _vm.formDataToBeWatched.emprunteur
    },
    on: {
      input: [function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formDataToBeWatched, "emprunteur", $event.target.value);
      }, _vm.handleInput]
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "input-group-text input-group-text-right"
  }, [!_vm.checkField("emprunteur") ? _c("span", {
    staticStyle: {
      "font-size": "1.5em",
      color: "red"
    },
    attrs: {
      title: "Valider le champs"
    },
    on: {
      click: function click($event) {
        return _vm.onCheckField(true, "emprunteur");
      }
    }
  }, [_c("i", {
    staticClass: "icofont-close-circled"
  })]) : _c("span", {
    staticStyle: {
      "font-size": "1.5em",
      color: "green"
    },
    attrs: {
      title: "Invalider le champs"
    },
    on: {
      click: function click($event) {
        return _vm.onCheckField(false, "emprunteur");
      }
    }
  }, [_c("i", {
    staticClass: "icofont-check-circled"
  })])])]), _vm._v(" "), !_vm.edit_mode ? _c("span", [_c("b", [_vm._v(_vm._s((_vm$formDataToBeWatch3 = _vm.formDataToBeWatched) === null || _vm$formDataToBeWatch3 === void 0 ? void 0 : _vm$formDataToBeWatch3.profession))]), _vm._v(",")]) : _c("div", {
    staticStyle: {
      display: "flex",
      "align-items": "center"
    }
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.profession,
      expression: "formDataToBeWatched.profession"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      placeholder: "Profession",
      id: "profession"
    },
    domProps: {
      value: _vm.formDataToBeWatched.profession
    },
    on: {
      input: [function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formDataToBeWatched, "profession", $event.target.value);
      }, _vm.handleInput]
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "input-group-text input-group-text-right"
  }, [!_vm.checkField("profession") ? _c("span", {
    staticStyle: {
      "font-size": "1.5em",
      color: "red"
    },
    attrs: {
      title: "Valider le champs"
    },
    on: {
      click: function click($event) {
        return _vm.onCheckField(true, "profession");
      }
    }
  }, [_c("i", {
    staticClass: "icofont-close-circled"
  })]) : _c("span", {
    staticStyle: {
      "font-size": "1.5em",
      color: "green"
    },
    attrs: {
      title: "Invalider le champs"
    },
    on: {
      click: function click($event) {
        return _vm.onCheckField(false, "profession");
      }
    }
  }, [_c("i", {
    staticClass: "icofont-check-circled"
  })])])]), _vm._v(" "), !_vm.edit_mode ? _c("span", [_vm._v(_vm._s((_vm$formDataToBeWatch4 = _vm.formDataToBeWatched) === null || _vm$formDataToBeWatch4 === void 0 ? void 0 : _vm$formDataToBeWatch4.extra_domicilie))]) : _c("div", {
    staticStyle: {
      display: "flex",
      "align-items": "center"
    }
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.extra_domicilie,
      expression: "formDataToBeWatched.extra_domicilie"
    }],
    staticClass: "form-control",
    staticStyle: {
      width: "110px"
    },
    attrs: {
      type: "text",
      placeholder: "domicilié(e)",
      id: "extra_domicilie"
    },
    domProps: {
      value: _vm.formDataToBeWatched.extra_domicilie
    },
    on: {
      input: [function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formDataToBeWatched, "extra_domicilie", $event.target.value);
      }, _vm.handleInput]
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "input-group-text input-group-text-right"
  }, [!_vm.checkField("extra_domicilie") ? _c("span", {
    staticStyle: {
      "font-size": "1.5em",
      color: "red"
    },
    attrs: {
      title: "Valider le champs"
    },
    on: {
      click: function click($event) {
        return _vm.onCheckField(true, "extra_domicilie");
      }
    }
  }, [_c("i", {
    staticClass: "icofont-close-circled"
  })]) : _c("span", {
    staticStyle: {
      "font-size": "1.5em",
      color: "green"
    },
    attrs: {
      title: "Invalider le champs"
    },
    on: {
      click: function click($event) {
        return _vm.onCheckField(false, "extra_domicilie");
      }
    }
  }, [_c("i", {
    staticClass: "icofont-check-circled"
  })])])]), _vm._v("\n\n                             à "), !_vm.edit_mode ? _c("span", [_c("b", [_vm._v(_vm._s((_vm$formDataToBeWatch5 = _vm.formDataToBeWatched) === null || _vm$formDataToBeWatch5 === void 0 ? void 0 : _vm$formDataToBeWatch5.ville_residence))]), _vm._v(",")]) : _c("div", {
    staticStyle: {
      display: "flex",
      "align-items": "center"
    }
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.ville_residence,
      expression: "formDataToBeWatched.ville_residence"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      placeholder: "Ville de résidence",
      id: "ville_residence"
    },
    domProps: {
      value: _vm.formDataToBeWatched.ville_residence
    },
    on: {
      input: [function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formDataToBeWatched, "ville_residence", $event.target.value);
      }, _vm.handleInput]
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "input-group-text input-group-text-right"
  }, [!_vm.checkField("ville_residence") ? _c("span", {
    staticStyle: {
      "font-size": "1.5em",
      color: "red"
    },
    attrs: {
      title: "Valider le champs"
    },
    on: {
      click: function click($event) {
        return _vm.onCheckField(true, "ville_residence");
      }
    }
  }, [_c("i", {
    staticClass: "icofont-close-circled"
  })]) : _c("span", {
    staticStyle: {
      "font-size": "1.5em",
      color: "green"
    },
    attrs: {
      title: "Invalider le champs"
    },
    on: {
      click: function click($event) {
        return _vm.onCheckField(false, "ville_residence");
      }
    }
  }, [_c("i", {
    staticClass: "icofont-check-circled"
  })])])]), _vm._v(" "), !_vm.edit_mode ? _c("span", [_vm._v(_vm._s((_vm$formDataToBeWatch6 = _vm.formDataToBeWatched) === null || _vm$formDataToBeWatch6 === void 0 ? void 0 : _vm$formDataToBeWatch6.extra_ne))]) : _c("div", {
    staticStyle: {
      display: "flex",
      "align-items": "center"
    }
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.extra_ne,
      expression: "formDataToBeWatched.extra_ne"
    }],
    staticClass: "form-control",
    staticStyle: {
      width: "110px"
    },
    attrs: {
      type: "text",
      placeholder: "né(e)",
      id: "extra_ne"
    },
    domProps: {
      value: _vm.formDataToBeWatched.extra_ne
    },
    on: {
      input: [function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formDataToBeWatched, "extra_ne", $event.target.value);
      }, _vm.handleInput]
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "input-group-text input-group-text-right"
  }, [!_vm.checkField("extra_ne") ? _c("span", {
    staticStyle: {
      "font-size": "1.5em",
      color: "red"
    },
    attrs: {
      title: "Valider le champs"
    },
    on: {
      click: function click($event) {
        return _vm.onCheckField(true, "extra_ne");
      }
    }
  }, [_c("i", {
    staticClass: "icofont-close-circled"
  })]) : _c("span", {
    staticStyle: {
      "font-size": "1.5em",
      color: "green"
    },
    attrs: {
      title: "Invalider le champs"
    },
    on: {
      click: function click($event) {
        return _vm.onCheckField(false, "extra_ne");
      }
    }
  }, [_c("i", {
    staticClass: "icofont-check-circled"
  })])])]), _vm._v("\n\n                             le "), !_vm.edit_mode ? _c("span", [_c("b", [_vm._v(_vm._s(_vm._f("formatDate")((_vm$formDataToBeWatch7 = _vm.formDataToBeWatched) === null || _vm$formDataToBeWatch7 === void 0 ? void 0 : _vm$formDataToBeWatch7.date_naissance)))])]) : _c("div", {
    staticStyle: {
      display: "flex",
      "align-items": "center"
    }
  }, [_c("div", {
    staticStyle: {
      width: "230px"
    }
  }, [_c("date-input", {
    attrs: {
      background: "background-color: #ffffad",
      color: "color: #000",
      id: "date_naissance",
      value: _vm.formDataToBeWatched.date_naissance
    },
    on: {
      input: _vm.formDataVars
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "input-group-text input-group-text-right",
    staticStyle: {
      "margin-left": "2px",
      "border-radius": ".375rem"
    }
  }, [!_vm.checkField("date_naissance") ? _c("span", {
    staticStyle: {
      "font-size": "1.5em",
      color: "red"
    },
    attrs: {
      title: "Valider le champs"
    },
    on: {
      click: function click($event) {
        return _vm.onCheckField(true, "date_naissance");
      }
    }
  }, [_c("i", {
    staticClass: "icofont-close-circled"
  })]) : _c("span", {
    staticStyle: {
      "font-size": "1.5em",
      color: "green"
    },
    attrs: {
      title: "Invalider le champs"
    },
    on: {
      click: function click($event) {
        return _vm.onCheckField(false, "date_naissance");
      }
    }
  }, [_c("i", {
    staticClass: "icofont-check-circled"
  })])])]), _vm._v("\n\n                            à "), !_vm.edit_mode ? _c("span", [_c("b", [_vm._v(_vm._s((_vm$formDataToBeWatch8 = _vm.formDataToBeWatched) === null || _vm$formDataToBeWatch8 === void 0 ? void 0 : _vm$formDataToBeWatch8.ville_naissance))]), _vm._v(",")]) : _c("div", {
    staticStyle: {
      display: "flex",
      "align-items": "center"
    }
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.ville_naissance,
      expression: "formDataToBeWatched.ville_naissance"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      placeholder: "Ville de naissance",
      id: "ville_naissance"
    },
    domProps: {
      value: _vm.formDataToBeWatched.ville_naissance
    },
    on: {
      input: [function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formDataToBeWatched, "ville_naissance", $event.target.value);
      }, _vm.handleInput]
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "input-group-text input-group-text-right"
  }, [!_vm.checkField("ville_naissance") ? _c("span", {
    staticStyle: {
      "font-size": "1.5em",
      color: "red"
    },
    attrs: {
      title: "Valider le champs"
    },
    on: {
      click: function click($event) {
        return _vm.onCheckField(true, "ville_naissance");
      }
    }
  }, [_c("i", {
    staticClass: "icofont-close-circled"
  })]) : _c("span", {
    staticStyle: {
      "font-size": "1.5em",
      color: "green"
    },
    attrs: {
      title: "Invalider le champs"
    },
    on: {
      click: function click($event) {
        return _vm.onCheckField(false, "ville_naissance");
      }
    }
  }, [_c("i", {
    staticClass: "icofont-check-circled"
  })])])]), _vm._v(" "), !_vm.edit_mode ? _c("span", [_vm._v(_vm._s((_vm$formDataToBeWatch9 = _vm.formDataToBeWatched) === null || _vm$formDataToBeWatch9 === void 0 ? void 0 : _vm$formDataToBeWatch9.pays_naissance) + ",")]) : _c("div", {
    staticStyle: {
      display: "flex",
      "align-items": "center"
    }
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.pays_naissance,
      expression: "formDataToBeWatched.pays_naissance"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      placeholder: "Pays de naissance",
      id: "pays_naissance"
    },
    domProps: {
      value: _vm.formDataToBeWatched.pays_naissance
    },
    on: {
      input: [function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formDataToBeWatched, "pays_naissance", $event.target.value);
      }, _vm.handleInput]
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "input-group-text input-group-text-right"
  }, [!_vm.checkField("pays_naissance") ? _c("span", {
    staticStyle: {
      "font-size": "1.5em",
      color: "red"
    },
    attrs: {
      title: "Valider le champs"
    },
    on: {
      click: function click($event) {
        return _vm.onCheckField(true, "pays_naissance");
      }
    }
  }, [_c("i", {
    staticClass: "icofont-close-circled"
  })]) : _c("span", {
    staticStyle: {
      "font-size": "1.5em",
      color: "green"
    },
    attrs: {
      title: "Invalider le champs"
    },
    on: {
      click: function click($event) {
        return _vm.onCheckField(false, "pays_naissance");
      }
    }
  }, [_c("i", {
    staticClass: "icofont-check-circled"
  })])])]), _vm._v(" "), _c("div", {
    style: _vm.edit_mode ? "display: flex; align-items: center;" : "display: inline"
  }, [_vm._v("Tél. : "), !_vm.edit_mode ? _c("span", [_vm._v("(" + _vm._s((_vm$formDataToBeWatch0 = _vm.formDataToBeWatched) === null || _vm$formDataToBeWatch0 === void 0 ? void 0 : _vm$formDataToBeWatch0.indicatif_telephone) + ") "), _c("b", [_vm._v(_vm._s((_vm$formDataToBeWatch1 = _vm.formDataToBeWatched) === null || _vm$formDataToBeWatch1 === void 0 ? void 0 : _vm$formDataToBeWatch1.telephone))]), _vm._v(",")]) : _c("div", {
    staticStyle: {
      display: "flex",
      "align-items": "center"
    }
  }, [_c("the-mask", {
    staticClass: "form-control",
    staticStyle: {
      width: "160px"
    },
    attrs: {
      mask: _vm.mask_telephone,
      type: "text",
      placeholder: "Téléphone",
      id: "telephone"
    },
    model: {
      value: _vm.formDataToBeWatched.telephone,
      callback: function callback($$v) {
        _vm.$set(_vm.formDataToBeWatched, "telephone", $$v);
      },
      expression: "formDataToBeWatched.telephone"
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "input-group-text input-group-text-right"
  }, [!_vm.checkField("telephone") ? _c("span", {
    staticStyle: {
      "font-size": "1.5em",
      color: "red"
    },
    attrs: {
      title: "Valider le champs"
    },
    on: {
      click: function click($event) {
        return _vm.onCheckField(true, "telephone");
      }
    }
  }, [_c("i", {
    staticClass: "icofont-close-circled"
  })]) : _c("span", {
    staticStyle: {
      "font-size": "1.5em",
      color: "green"
    },
    attrs: {
      title: "Invalider le champs"
    },
    on: {
      click: function click($event) {
        return _vm.onCheckField(false, "telephone");
      }
    }
  }, [_c("i", {
    staticClass: "icofont-check-circled"
  })])])], 1)]), _vm._v(" "), _vm.telephones.length > 0 ? _vm._l(_vm.telephones, function (telephone, indexT) {
    return _c("div", {
      key: "tel" + indexT,
      style: _vm.edit_mode ? "display: flex; align-items: center;" : "display: inline"
    }, [!_vm.edit_mode ? _c("span", [_vm._v("(" + _vm._s(telephone === null || telephone === void 0 ? void 0 : telephone.indicatif) + ") "), _c("b", [_vm._v(_vm._s(telephone.numero))]), _vm._v(", ")]) : _c("div", {
      staticStyle: {
        display: "flex",
        "align-items": "center"
      }
    }, [_c("the-mask", {
      staticClass: "form-control",
      staticStyle: {
        width: "160px"
      },
      attrs: {
        mask: _vm.mask_telephone,
        type: "text",
        placeholder: "Téléphone"
      },
      model: {
        value: telephone.numero,
        callback: function callback($$v) {
          _vm.$set(telephone, "numero", $$v);
        },
        expression: "telephone.numero"
      }
    }), _vm._v(" "), _c("div", {
      staticClass: "input-group-text input-group-text-right"
    }, [!_vm.check_fields["telephone_" + indexT] ? _c("span", {
      staticStyle: {
        "font-size": "1.5em",
        color: "red"
      },
      attrs: {
        title: "Valider le champs"
      },
      on: {
        click: function click($event) {
          return _vm.onCheckField(true, "telephone_" + indexT);
        }
      }
    }, [_c("i", {
      staticClass: "icofont-close-circled"
    })]) : _c("span", {
      staticStyle: {
        "font-size": "1.5em",
        color: "green"
      },
      attrs: {
        title: "Invalider le champs"
      },
      on: {
        click: function click($event) {
          return _vm.onCheckField(false, "telephone_" + indexT);
        }
      }
    }, [_c("i", {
      staticClass: "icofont-check-circled"
    })])]), _vm._v(" "), _c("div", [_c("button", {
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
          return _vm.removeTelephone(indexT);
        }
      }
    }, [_c("trash-icon", {
      staticClass: "custom-class",
      attrs: {
        size: "21"
      }
    })], 1)])], 1)]);
  }) : _vm._e(), _vm._v(" "), _vm.edit_mode ? _c("div", {}, [_c("button", {
    staticStyle: {
      "background-color": "#2c3e50",
      color: "#ffffff",
      "border-radius": "5px",
      border: "none",
      "font-size": "16px"
    },
    attrs: {
      type: "button",
      title: "Ajouter un numéro"
    },
    on: {
      click: function click($event) {
        return _vm.addTelephone();
      }
    }
  }, [_c("plus-icon", {
    staticClass: "custom-class",
    attrs: {
      size: "21"
    }
  }), _vm._v(" Ajouter un numéro\n                                ")], 1)]) : _vm._e(), _vm._v("\n\n                            titulaire "), !_vm.edit_mode ? _c("span", [_c("b", [_vm._v(_vm._s(_vm.getLabelTypePiece((_vm$formDataToBeWatch10 = _vm.formDataToBeWatched) === null || _vm$formDataToBeWatch10 === void 0 ? void 0 : _vm$formDataToBeWatch10.type_piece)))])]) : _c("div", {
    staticStyle: {
      display: "flex",
      "align-items": "center"
    }
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.type_piece,
      expression: "formDataToBeWatched.type_piece"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      placeholder: "Nature de la pièce",
      id: "type_piece"
    },
    domProps: {
      value: _vm.formDataToBeWatched.type_piece
    },
    on: {
      input: [function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formDataToBeWatched, "type_piece", $event.target.value);
      }, _vm.handleInput]
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "input-group-text input-group-text-right"
  }, [!_vm.checkField("type_piece") ? _c("span", {
    staticStyle: {
      "font-size": "1.5em",
      color: "red"
    },
    attrs: {
      title: "Valider le champs"
    },
    on: {
      click: function click($event) {
        return _vm.onCheckField(true, "type_piece");
      }
    }
  }, [_c("i", {
    staticClass: "icofont-close-circled"
  })]) : _c("span", {
    staticStyle: {
      "font-size": "1.5em",
      color: "green"
    },
    attrs: {
      title: "Invalider le champs"
    },
    on: {
      click: function click($event) {
        return _vm.onCheckField(false, "type_piece");
      }
    }
  }, [_c("i", {
    staticClass: "icofont-check-circled"
  })])])]), _vm._v("\n\n                            numéro "), !_vm.edit_mode ? _c("span", [_c("b", [_vm._v(_vm._s((_vm$formDataToBeWatch11 = _vm.formDataToBeWatched) === null || _vm$formDataToBeWatch11 === void 0 ? void 0 : _vm$formDataToBeWatch11.num_piece))])]) : _c("div", {
    staticStyle: {
      display: "flex",
      "align-items": "center"
    }
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.num_piece,
      expression: "formDataToBeWatched.num_piece"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      placeholder: "Numéro de la pièce",
      id: "num_piece"
    },
    domProps: {
      value: _vm.formDataToBeWatched.num_piece
    },
    on: {
      input: [function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formDataToBeWatched, "num_piece", $event.target.value);
      }, _vm.handleInput]
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "input-group-text input-group-text-right"
  }, [!_vm.checkField("num_piece") ? _c("span", {
    staticStyle: {
      "font-size": "1.5em",
      color: "red"
    },
    attrs: {
      title: "Valider le champs"
    },
    on: {
      click: function click($event) {
        return _vm.onCheckField(true, "num_piece");
      }
    }
  }, [_c("i", {
    staticClass: "icofont-close-circled"
  })]) : _c("span", {
    staticStyle: {
      "font-size": "1.5em",
      color: "green"
    },
    attrs: {
      title: "Invalider le champs"
    },
    on: {
      click: function click($event) {
        return _vm.onCheckField(false, "num_piece");
      }
    }
  }, [_c("i", {
    staticClass: "icofont-check-circled"
  })])])]), _vm._v(" "), !_vm.edit_mode ? _c("span", [_vm._v(_vm._s((_vm$formDataToBeWatch12 = _vm.formDataToBeWatched) === null || _vm$formDataToBeWatch12 === void 0 ? void 0 : _vm$formDataToBeWatch12.extra_etablie) + " ")]) : _c("div", {
    staticStyle: {
      display: "flex",
      "align-items": "center"
    }
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.extra_etablie,
      expression: "formDataToBeWatched.extra_etablie"
    }],
    staticClass: "form-control",
    staticStyle: {
      width: "110px"
    },
    attrs: {
      type: "text",
      placeholder: "établi(e)",
      id: "extra_etablie"
    },
    domProps: {
      value: _vm.formDataToBeWatched.extra_etablie
    },
    on: {
      input: [function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formDataToBeWatched, "extra_etablie", $event.target.value);
      }, _vm.handleInput]
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "input-group-text input-group-text-right"
  }, [!_vm.checkField("extra_etablie") ? _c("span", {
    staticStyle: {
      "font-size": "1.5em",
      color: "red"
    },
    attrs: {
      title: "Valider le champs"
    },
    on: {
      click: function click($event) {
        return _vm.onCheckField(true, "extra_etablie");
      }
    }
  }, [_c("i", {
    staticClass: "icofont-close-circled"
  })]) : _c("span", {
    staticStyle: {
      "font-size": "1.5em",
      color: "green"
    },
    attrs: {
      title: "Invalider le champs"
    },
    on: {
      click: function click($event) {
        return _vm.onCheckField(false, "extra_etablie");
      }
    }
  }, [_c("i", {
    staticClass: "icofont-check-circled"
  })])])]), _vm._v("\n\n                             le "), !_vm.edit_mode ? _c("span", [_c("b", [_vm._v(_vm._s(_vm._f("formatDate")((_vm$formDataToBeWatch13 = _vm.formDataToBeWatched) === null || _vm$formDataToBeWatch13 === void 0 ? void 0 : _vm$formDataToBeWatch13.date_delivrance_piece)))])]) : _c("div", {
    staticStyle: {
      display: "flex",
      "align-items": "center"
    }
  }, [_c("div", {
    staticStyle: {
      width: "230px"
    }
  }, [_c("date-input", {
    attrs: {
      background: "background-color: #ffffad",
      color: "color: #000",
      id: "date_delivrance_piece",
      value: _vm.formDataToBeWatched.date_delivrance_piece
    },
    on: {
      input: _vm.formDataVars
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "input-group-text input-group-text-right",
    staticStyle: {
      "margin-left": "2px",
      "border-radius": ".375rem"
    }
  }, [!_vm.checkField("date_delivrance_piece") ? _c("span", {
    staticStyle: {
      "font-size": "1.5em",
      color: "red"
    },
    attrs: {
      title: "Valider le champs"
    },
    on: {
      click: function click($event) {
        return _vm.onCheckField(true, "date_delivrance_piece");
      }
    }
  }, [_c("i", {
    staticClass: "icofont-close-circled"
  })]) : _c("span", {
    staticStyle: {
      "font-size": "1.5em",
      color: "green"
    },
    attrs: {
      title: "Invalider le champs"
    },
    on: {
      click: function click($event) {
        return _vm.onCheckField(false, "date_delivrance_piece");
      }
    }
  }, [_c("i", {
    staticClass: "icofont-check-circled"
  })])])]), _vm._v("\n\n                            et valable jusqu’au "), !_vm.edit_mode ? _c("span", [_c("b", [_vm._v(_vm._s(_vm._f("formatDate")((_vm$formDataToBeWatch14 = _vm.formDataToBeWatched) === null || _vm$formDataToBeWatch14 === void 0 ? void 0 : _vm$formDataToBeWatch14.date_fin_piece)))]), _vm._v(",")]) : _c("div", {
    staticStyle: {
      display: "flex",
      "align-items": "center"
    }
  }, [_c("div", {
    staticStyle: {
      width: "230px"
    }
  }, [_c("date-input", {
    attrs: {
      background: "background-color: #ffffad",
      color: "color: #000",
      id: "date_fin_piece",
      value: _vm.formDataToBeWatched.date_fin_piece
    },
    on: {
      input: _vm.formDataVars
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "input-group-text input-group-text-right",
    staticStyle: {
      "margin-left": "2px",
      "border-radius": ".375rem"
    }
  }, [!_vm.checkField("date_fin_piece") ? _c("span", {
    staticStyle: {
      "font-size": "1.5em",
      color: "red"
    },
    attrs: {
      title: "Valider le champs"
    },
    on: {
      click: function click($event) {
        return _vm.onCheckField(true, "date_fin_piece");
      }
    }
  }, [_c("i", {
    staticClass: "icofont-close-circled"
  })]) : _c("span", {
    staticStyle: {
      "font-size": "1.5em",
      color: "green"
    },
    attrs: {
      title: "Invalider le champs"
    },
    on: {
      click: function click($event) {
        return _vm.onCheckField(false, "date_fin_piece");
      }
    }
  }, [_c("i", {
    staticClass: "icofont-check-circled"
  })])])]), _vm._v("\n\n                            titulaire du compte chèque numéro "), !_vm.edit_mode ? _c("span", [_c("b", [_vm._v(_vm._s((_vm$formDataToBeWatch15 = _vm.formDataToBeWatched) === null || _vm$formDataToBeWatch15 === void 0 ? void 0 : _vm$formDataToBeWatch15.compte_numero))])]) : _c("div", {
    staticStyle: {
      display: "flex",
      "align-items": "center"
    }
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.compte_numero,
      expression: "formDataToBeWatched.compte_numero"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      placeholder: "Numéro de compte",
      id: "compte_numero"
    },
    domProps: {
      value: _vm.formDataToBeWatched.compte_numero
    },
    on: {
      input: [function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formDataToBeWatched, "compte_numero", $event.target.value);
      }, _vm.handleInput]
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "input-group-text input-group-text-right"
  }, [!_vm.checkField("compte_numero") ? _c("span", {
    staticStyle: {
      "font-size": "1.5em",
      color: "red"
    },
    attrs: {
      title: "Valider le champs"
    },
    on: {
      click: function click($event) {
        return _vm.onCheckField(true, "compte_numero");
      }
    }
  }, [_c("i", {
    staticClass: "icofont-close-circled"
  })]) : _c("span", {
    staticStyle: {
      "font-size": "1.5em",
      color: "green"
    },
    attrs: {
      title: "Invalider le champs"
    },
    on: {
      click: function click($event) {
        return _vm.onCheckField(false, "compte_numero");
      }
    }
  }, [_c("i", {
    staticClass: "icofont-check-circled"
  })])])]), _vm._v(" ;\n\n                        ")], 2), _c("br")]), _vm._v(" "), _vm._m(4), _vm._v(" "), _c("div", {
    staticClass: "text-right"
  }, [_vm._v("D’une part ;")]), _vm._v(" "), _vm._m(5), _c("br"), _vm._v(" "), _c("div", [_c("b", [_vm._v(_vm._s((_vm$banque = _vm.banque) === null || _vm$banque === void 0 ? void 0 : _vm$banque.denomination))]), _vm._v(", en abrégé "), _c("b", [_vm._v(_vm._s((_vm$banque2 = _vm.banque) === null || _vm$banque2 === void 0 ? void 0 : _vm$banque2.abrege))]), _vm._v(", " + _vm._s((_vm$banque3 = _vm.banque) === null || _vm$banque3 === void 0 ? void 0 : _vm$banque3.forme_juridique) + " au capital de " + _vm._s((_vm$banque4 = _vm.banque) === null || _vm$banque4 === void 0 ? void 0 : _vm$banque4.capital) + " " + _vm._s((_vm$banque5 = _vm.banque) === null || _vm$banque5 === void 0 ? void 0 : _vm$banque5.monnaie) + ", dont le siège social est sis à " + _vm._s((_vm$banque6 = _vm.banque) === null || _vm$banque6 === void 0 ? void 0 : _vm$banque6.adresse) + " ayant pour principal Etablissement " + _vm._s((_vm$banque7 = _vm.banque) === null || _vm$banque7 === void 0 ? void 0 : _vm$banque7.etablissement_social) + ", " + _vm._s((_vm$banque8 = _vm.banque) === null || _vm$banque8 === void 0 ? void 0 : _vm$banque8.adresse_postal) + ", Tél : " + _vm._s((_vm$banque9 = _vm.banque) === null || _vm$banque9 === void 0 ? void 0 : _vm$banque9.telephone) + " ; Fax : " + _vm._s((_vm$banque0 = _vm.banque) === null || _vm$banque0 === void 0 ? void 0 : _vm$banque0.fax) + ", immatriculée au Registre du Commerce et du Crédit Mobilier d’Abidjan sous le n° " + _vm._s((_vm$banque1 = _vm.banque) === null || _vm$banque1 === void 0 ? void 0 : _vm$banque1.rccm) + ", inscrite sur la Liste des Banques de Côte d’Ivoire (LBCI) sous le n° " + _vm._s((_vm$banque10 = _vm.banque) === null || _vm$banque10 === void 0 ? void 0 : _vm$banque10.numero_inscription_banque) + ", agréée en qualité de Banque par arrêté n° " + _vm._s((_vm$banque11 = _vm.banque) === null || _vm$banque11 === void 0 ? void 0 : _vm$banque11.agreement) + " pris par le Ministre de l’Economie et des Finances, titulaire du Compte Contribuable n° " + _vm._s((_vm$banque12 = _vm.banque) === null || _vm$banque12 === void 0 ? void 0 : _vm$banque12.ncc) + ", représentée par son "), _c("b", [_vm._v("Directeur Général, " + _vm._s((_vm$banque13 = _vm.banque) === null || _vm$banque13 === void 0 ? void 0 : _vm$banque13.civilite_dg) + " " + _vm._s((_vm$banque14 = _vm.banque) === null || _vm$banque14 === void 0 ? void 0 : _vm$banque14.nom_prenom_dg))]), _vm._v(", dûment habilité aux fins des présentes et de leurs suites en vertu des délibérations du Conseil d’Administration du " + _vm._s((_vm$banque15 = _vm.banque) === null || _vm$banque15 === void 0 ? void 0 : _vm$banque15.date_deliberation_ca) + ";\n                    ")]), _c("br"), _vm._v(" "), _c("div", [!_vm.edit_mode ? _c("span", {
    domProps: {
      innerHTML: _vm._s(_vm.formDataToBeWatched.text_signataire)
    }
  }) : _c("div", [_c("vue-editor", {
    attrs: {
      id: "text_signataire"
    },
    on: {
      "update-value": function updateValue($event) {
        _vm.formDataToBeWatched[$event[0]] = $event[1];
      }
    },
    model: {
      value: _vm.formDataToBeWatched.text_signataire,
      callback: function callback($$v) {
        _vm.$set(_vm.formDataToBeWatched, "text_signataire", $$v);
      },
      expression: "formDataToBeWatched.text_signataire"
    }
  }), _vm._v(" "), _c("small", [_vm._v("(NB : Indiquer les signataires pour le compte de la Banque suivant les différents pouvoirs)")])], 1)]), _c("br"), _vm._v(" "), _c("div", [_vm._v("Ci-après dénommée “la Banque”")]), _vm._v(" "), _c("div", {
    staticClass: "text-right"
  }, [_vm._v("D’autre part ;")]), _vm._v(" "), _vm._m(6), _c("br"), _vm._v(" "), _vm._m(7), _c("br"), _vm._v(" "), _vm._m(8), _c("br"), _vm._v(" "), _c("div", [!_vm.edit_mode ? _c("span", {
    domProps: {
      innerHTML: _vm._s(_vm.formDataToBeWatched.expose)
    }
  }) : _c("div", [_c("vue-editor", {
    attrs: {
      id: "expose"
    },
    on: {
      "update-value": function updateValue($event) {
        _vm.formDataToBeWatched[$event[0]] = $event[1];
      }
    },
    model: {
      value: _vm.formDataToBeWatched.expose,
      callback: function callback($$v) {
        _vm.$set(_vm.formDataToBeWatched, "expose", $$v);
      },
      expression: "formDataToBeWatched.expose"
    }
  })], 1)]), _c("br"), _vm._v(" "), _vm._m(9), _vm._v(" "), _c("div", [_vm._v("\n                        A cet effet, une offre a été adressée à " + _vm._s((_vm$formDataToBeWatch16 = _vm.formDataToBeWatched) === null || _vm$formDataToBeWatch16 === void 0 ? void 0 : _vm$formDataToBeWatch16.civilite_emprunteur) + " "), _c("b", [_vm._v(_vm._s((_vm$formDataToBeWatch17 = _vm.formDataToBeWatched) === null || _vm$formDataToBeWatch17 === void 0 ? void 0 : _vm$formDataToBeWatch17.emprunteur))]), _vm._v(" dans les conditions prévues aux articles 151 et 152 de la loi n°2016-412 du 15 juin2016 relative à la consommation (l’«Offre»).\n                    ")]), _c("br"), _vm._v(" "), _c("div", [_vm._v("\n                        Les Parties se sont alors rapprochées, et à l’issue de leurs discussions et négociations, elles ont arrêté, ainsi qu’il suit, les termes de leur accord.\n                    ")]), _c("br"), _vm._v(" "), _vm._m(10), _c("br"), _vm._v(" "), _vm._m(11), _c("br"), _vm._v(" "), _c("div", [_vm._v("L’exposé qui précède fait partie intégrante de la présente convention. Par conséquent, les deux ont la même valeur juridique comme constituant un seul et même acte.")]), _c("br"), _vm._v(" "), _vm._m(12), _c("br"), _vm._v(" "), _vm._m(13), _c("br"), _vm._v(" "), _vm._m(14), _c("br"), _vm._v(" "), _c("div", {
    staticStyle: {
      position: "relative"
    }
  }, [_c("div", {
    style: _vm.edit_mode ? "display: ruby; text-align: left;" : ""
  }, [_vm._v("\n                            La "), _c("b", [_vm._v("Banque")]), _vm._v(" consent à l’"), _c("b", [_vm._v("Emprunteur")]), _vm._v(", qui l’accepte, un prêt d’un montant de\n                            "), !_vm.edit_mode ? _c("span", [_c("b", [_c("span", {
    staticStyle: {
      "text-transform": "uppercase"
    }
  }, [_vm._v(_vm._s(_vm.convertirEnLettres((_vm$formDataToBeWatch18 = _vm.formDataToBeWatched) === null || _vm$formDataToBeWatch18 === void 0 ? void 0 : _vm$formDataToBeWatch18.montant_approuve)))]), _vm._v(" (" + _vm._s(_vm.formatAmount((_vm$formDataToBeWatch19 = _vm.formDataToBeWatched) === null || _vm$formDataToBeWatch19 === void 0 ? void 0 : _vm$formDataToBeWatch19.montant_approuve)) + ")")]), _vm._v(" FRANCS CFA.")]) : _c("div", {
    staticStyle: {
      display: "flex",
      "align-items": "center"
    }
  }, [_c("currency-input2", {
    attrs: {
      id: "montant_approuve",
      value: _vm.formDataToBeWatched.montant_approuve
    },
    on: {
      input: _vm.formDataVars
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "input-group-text input-group-text-right"
  }, [!_vm.checkField("montant_approuve") ? _c("span", {
    staticStyle: {
      "font-size": "1.5em",
      color: "red"
    },
    attrs: {
      title: "Valider le champs"
    },
    on: {
      click: function click($event) {
        return _vm.onCheckField(true, "montant_approuve");
      }
    }
  }, [_c("i", {
    staticClass: "icofont-close-circled"
  })]) : _c("span", {
    staticStyle: {
      "font-size": "1.5em",
      color: "green"
    },
    attrs: {
      title: "Invalider le champs"
    },
    on: {
      click: function click($event) {
        return _vm.onCheckField(false, "montant_approuve");
      }
    }
  }, [_c("i", {
    staticClass: "icofont-check-circled"
  })])]), _vm._v("\n                                Francs CFA\n                            ")], 1)]), _vm._v(" "), _c("div", {
    style: _vm.edit_mode ? "display: ruby; text-align: left;" : ""
  }, [_vm._v("\n\n                            Ce montant sera mis à la disposition de l’"), _c("b", [_vm._v("Emprunteur")]), _vm._v(" par son inscription au crédit du compte n° "), _c("b", [_vm._v(_vm._s((_vm$formDataToBeWatch20 = _vm.formDataToBeWatched) === null || _vm$formDataToBeWatch20 === void 0 ? void 0 : _vm$formDataToBeWatch20.compte_numero))]), _vm._v(" de l’"), _c("b", [_vm._v("Emprunteur")]), _vm._v(", ouvert dans les livres de la "), _c("b", [_vm._v("Banque")]), _vm._v(" "), !_vm.edit_mode ? _c("span", [_vm._v(_vm._s((_vm$formDataToBeWatch21 = _vm.formDataToBeWatched) === null || _vm$formDataToBeWatch21 === void 0 ? void 0 : _vm$formDataToBeWatch21.extra_article_3))]) : _c("div", {
    staticStyle: {
      display: "flex",
      "align-items": "center"
    }
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.extra_article_3,
      expression: "formDataToBeWatched.extra_article_3"
    }],
    staticClass: "form-control",
    staticStyle: {
      width: "300px"
    },
    attrs: {
      type: "text",
      placeholder: "pour les fonctionnaires.",
      id: "extra_article_3"
    },
    domProps: {
      value: _vm.formDataToBeWatched.extra_article_3
    },
    on: {
      input: [function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formDataToBeWatched, "extra_article_3", $event.target.value);
      }, _vm.handleInput]
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "input-group-text input-group-text-right"
  }, [!_vm.checkField("extra_article_3") ? _c("span", {
    staticStyle: {
      "font-size": "1.5em",
      color: "red"
    },
    attrs: {
      title: "Valider le champs"
    },
    on: {
      click: function click($event) {
        return _vm.onCheckField(true, "extra_article_3");
      }
    }
  }, [_c("i", {
    staticClass: "icofont-close-circled"
  })]) : _c("span", {
    staticStyle: {
      "font-size": "1.5em",
      color: "green"
    },
    attrs: {
      title: "Invalider le champs"
    },
    on: {
      click: function click($event) {
        return _vm.onCheckField(false, "extra_article_3");
      }
    }
  }, [_c("i", {
    staticClass: "icofont-check-circled"
  })])])])])]), _c("br"), _vm._v(" "), _vm._m(15), _c("br"), _vm._v(" "), _c("div", {
    style: _vm.edit_mode ? "display: ruby; text-align: left;" : ""
  }, [_vm._v("\n                        Le prêt est consenti pour une durée de\n                        "), !_vm.edit_mode ? _c("span", [_c("b", [_c("span", {
    staticStyle: {
      "text-transform": "uppercase"
    }
  }, [_vm._v(_vm._s(_vm.convertirEnLettres((_vm$formDataToBeWatch22 = _vm.formDataToBeWatched) === null || _vm$formDataToBeWatch22 === void 0 ? void 0 : _vm$formDataToBeWatch22.duree_credit)))]), _vm._v(" (" + _vm._s((_vm$formDataToBeWatch23 = _vm.formDataToBeWatched) === null || _vm$formDataToBeWatch23 === void 0 ? void 0 : _vm$formDataToBeWatch23.duree_credit) + ") MOIS")])]) : _c("div", {
    staticStyle: {
      display: "flex",
      "align-items": "center"
    }
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.duree_credit,
      expression: "formDataToBeWatched.duree_credit"
    }],
    staticClass: "form-control",
    staticStyle: {
      width: "80px"
    },
    attrs: {
      type: "number",
      placeholder: "Durée",
      id: "duree_credit",
      min: "0"
    },
    domProps: {
      value: _vm.formDataToBeWatched.duree_credit
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formDataToBeWatched, "duree_credit", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "input-group-text input-group-text-right fw-bold"
  }, [_vm._v("MOIS")]), _vm._v(" "), _c("div", {
    staticClass: "input-group-text input-group-text-right",
    staticStyle: {
      "border-radius": ".375rem"
    }
  }, [!_vm.checkField("duree_credit") ? _c("span", {
    staticStyle: {
      "font-size": "1.5em",
      color: "red"
    },
    attrs: {
      title: "Valider le champs"
    },
    on: {
      click: function click($event) {
        return _vm.onCheckField(true, "duree_credit");
      }
    }
  }, [_c("i", {
    staticClass: "icofont-close-circled"
  })]) : _c("span", {
    staticStyle: {
      "font-size": "1.5em",
      color: "green"
    },
    attrs: {
      title: "Invalider le champs"
    },
    on: {
      click: function click($event) {
        return _vm.onCheckField(false, "duree_credit");
      }
    }
  }, [_c("i", {
    staticClass: "icofont-check-circled"
  })])])]), _vm._v("\n                        à compter de la date de son inscription au crédit du compte de l’"), _c("b", [_vm._v("Emprunteur")]), _vm._v(" dans les livres de la "), _c("b", [_vm._v("Banque")]), _vm._v(".\n                    ")]), _c("br"), _c("br"), _vm._v(" "), _vm._m(16), _c("br"), _vm._v(" "), _c("div", {
    staticStyle: {
      position: "relative"
    }
  }, [_vm.edit_mode ? _c("div", {
    staticStyle: {
      position: "absolute",
      top: "80px",
      right: "-253px",
      cursor: "pointer"
    }
  }, [!_vm.checkField("article_5") ? _c("span", {
    staticStyle: {
      "font-size": "1.2em",
      color: "red"
    },
    on: {
      click: function click($event) {
        return _vm.onCheckField(true, "article_5");
      }
    }
  }, [_c("i", {
    staticClass: "icofont-close-circled"
  }), _vm._v(" Valider l'article 5")]) : _c("span", {
    staticStyle: {
      "font-size": "1.2em",
      color: "green"
    },
    on: {
      click: function click($event) {
        return _vm.onCheckField(false, "article_5");
      }
    }
  }, [_c("i", {
    staticClass: "icofont-check-circled"
  }), _vm._v(" Valider l'article 5")])]) : _vm._e(), _vm._v(" "), _c("div", {
    style: _vm.edit_mode ? "display: ruby; text-align: left;" : ""
  }, [_vm._v("\n                            Le prêt est assorti d’un taux d’intérêt correspondant au Taux de Base Bancaire (TBB) de NSIA "), _c("b", [_vm._v("Banque")]), _vm._v(" CI, soit actuellement\n                            "), !_vm.edit_mode ? _c("span", [_c("b", [_vm._v(_vm._s((_vm$formDataToBeWatch24 = _vm.formDataToBeWatched) === null || _vm$formDataToBeWatch24 === void 0 ? void 0 : _vm$formDataToBeWatch24.tbb) + "%")])]) : _c("div", {
    staticStyle: {
      display: "flex",
      "align-items": "center"
    }
  }, [_c("currency-input", {
    staticStyle: {
      width: "80px"
    },
    attrs: {
      "default-decimal": 3,
      value: _vm.formDataToBeWatched.tbb,
      id: "tbb",
      max: 100,
      "float": "",
      percentage: ""
    },
    on: {
      input: _vm.formDataVars
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "input-group-text input-group-text-right fw-bold"
  }, [_vm._v("%")]), _vm._v(" "), _c("div", {
    staticClass: "input-group-text input-group-text-right",
    staticStyle: {
      "border-radius": ".375rem"
    }
  }, [!_vm.checkField("tbb") ? _c("span", {
    staticStyle: {
      "font-size": "1.5em",
      color: "red"
    },
    attrs: {
      title: "Valider le champs"
    },
    on: {
      click: function click($event) {
        return _vm.onCheckField(true, "tbb");
      }
    }
  }, [_c("i", {
    staticClass: "icofont-close-circled"
  })]) : _c("span", {
    staticStyle: {
      "font-size": "1.5em",
      color: "green"
    },
    attrs: {
      title: "Invalider le champs"
    },
    on: {
      click: function click($event) {
        return _vm.onCheckField(false, "tbb");
      }
    }
  }, [_c("i", {
    staticClass: "icofont-check-circled"
  })])])], 1), _vm._v("\n                            l’an, " + _vm._s(_vm.getMinOrMajByTbb((_vm$formDataToBeWatch25 = _vm.formDataToBeWatched) === null || _vm$formDataToBeWatch25 === void 0 ? void 0 : _vm$formDataToBeWatch25.tbb, (_vm$formDataToBeWatch26 = _vm.formDataToBeWatched) === null || _vm$formDataToBeWatch26 === void 0 ? void 0 : _vm$formDataToBeWatch26.taux)) + " soit un taux d’intérêt de\n                            "), !_vm.edit_mode ? _c("span", [_c("b", [_vm._v(_vm._s((_vm$formDataToBeWatch27 = _vm.formDataToBeWatched) === null || _vm$formDataToBeWatch27 === void 0 ? void 0 : _vm$formDataToBeWatch27.taux) + "%")])]) : _c("div", {
    staticStyle: {
      display: "flex",
      "align-items": "center"
    }
  }, [_c("currency-input", {
    staticStyle: {
      width: "80px"
    },
    attrs: {
      "default-decimal": 3,
      value: _vm.formDataToBeWatched.taux,
      id: "taux",
      max: 100,
      "float": "",
      percentage: ""
    },
    on: {
      input: _vm.formDataVars
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "input-group-text input-group-text-right fw-bold"
  }, [_vm._v("%")]), _vm._v(" "), _c("div", {
    staticClass: "input-group-text input-group-text-right",
    staticStyle: {
      "border-radius": ".375rem"
    }
  }, [!_vm.checkField("taux") ? _c("span", {
    staticStyle: {
      "font-size": "1.5em",
      color: "red"
    },
    attrs: {
      title: "Valider le champs"
    },
    on: {
      click: function click($event) {
        return _vm.onCheckField(true, "taux");
      }
    }
  }, [_c("i", {
    staticClass: "icofont-close-circled"
  })]) : _c("span", {
    staticStyle: {
      "font-size": "1.5em",
      color: "green"
    },
    attrs: {
      title: "Invalider le champs"
    },
    on: {
      click: function click($event) {
        return _vm.onCheckField(false, "taux");
      }
    }
  }, [_c("i", {
    staticClass: "icofont-check-circled"
  })])])], 1), _vm._v("\n\n                            l’an HT, conformément à l’offre de crédit de la "), _c("b", [_vm._v("Banque")]), _vm._v(" "), !_vm.edit_mode ? _c("span", [_vm._v(_vm._s((_vm$formDataToBeWatch28 = _vm.formDataToBeWatched) === null || _vm$formDataToBeWatch28 === void 0 ? void 0 : _vm$formDataToBeWatch28.extra_article_5))]) : _c("div", {
    staticStyle: {
      display: "flex",
      "align-items": "center"
    }
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.extra_article_5,
      expression: "formDataToBeWatched.extra_article_5"
    }],
    staticClass: "form-control",
    staticStyle: {
      width: "300px"
    },
    attrs: {
      type: "text",
      placeholder: "pour les fonctionnaires.",
      id: "extra_article_5"
    },
    domProps: {
      value: _vm.formDataToBeWatched.extra_article_5
    },
    on: {
      input: [function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formDataToBeWatched, "extra_article_5", $event.target.value);
      }, _vm.handleInput]
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "input-group-text input-group-text-right"
  }, [!_vm.checkField("extra_article_5") ? _c("span", {
    staticStyle: {
      "font-size": "1.5em",
      color: "red"
    },
    attrs: {
      title: "Valider le champs"
    },
    on: {
      click: function click($event) {
        return _vm.onCheckField(true, "extra_article_5");
      }
    }
  }, [_c("i", {
    staticClass: "icofont-close-circled"
  })]) : _c("span", {
    staticStyle: {
      "font-size": "1.5em",
      color: "green"
    },
    attrs: {
      title: "Invalider le champs"
    },
    on: {
      click: function click($event) {
        return _vm.onCheckField(false, "extra_article_5");
      }
    }
  }, [_c("i", {
    staticClass: "icofont-check-circled"
  })])])]), _vm._v("\n                            A ce taux sera appliqué la taxe sur les opérations bancaires (TOB), soit actuellement 10%.\n                            Toute variation du taux de base bancaire (TBB) et/ou de la TOB sera répercutée sur le taux d’intérêt du prêt.\n                        ")])]), _c("br"), _vm._v(" "), _vm._m(17), _c("br"), _vm._v(" "), _c("div", {
    staticStyle: {
      position: "relative"
    }
  }, [_c("div", {
    style: _vm.edit_mode ? "display: ruby; text-align: left;" : ""
  }, [_vm._v("\n                            Pour toute la durée de la Convention, le Taux Effectif Global (TEG) est de\n                            "), !_vm.edit_mode ? _c("span", [_c("b", [_vm._v(_vm._s((_vm$formDataToBeWatch29 = _vm.formDataToBeWatched) === null || _vm$formDataToBeWatch29 === void 0 ? void 0 : _vm$formDataToBeWatch29.teg) + "%")])]) : _c("div", {
    staticStyle: {
      display: "flex",
      "align-items": "center"
    }
  }, [_c("currency-input", {
    staticStyle: {
      width: "80px"
    },
    attrs: {
      "default-decimal": 3,
      value: _vm.formDataToBeWatched.teg,
      placeholder: "TEG",
      id: "teg",
      max: 100,
      "float": "",
      percentage: ""
    },
    on: {
      input: _vm.formDataVars
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "input-group-text input-group-text-right fw-bold"
  }, [_vm._v("%")]), _vm._v(" "), _c("div", {
    staticClass: "input-group-text input-group-text-right",
    staticStyle: {
      "border-radius": ".375rem"
    }
  }, [!_vm.checkField("teg") ? _c("span", {
    staticStyle: {
      "font-size": "1.5em",
      color: "red"
    },
    attrs: {
      title: "Valider le champs"
    },
    on: {
      click: function click($event) {
        return _vm.onCheckField(true, "teg");
      }
    }
  }, [_c("i", {
    staticClass: "icofont-close-circled"
  })]) : _c("span", {
    staticStyle: {
      "font-size": "1.5em",
      color: "green"
    },
    attrs: {
      title: "Invalider le champs"
    },
    on: {
      click: function click($event) {
        return _vm.onCheckField(false, "teg");
      }
    }
  }, [_c("i", {
    staticClass: "icofont-check-circled"
  })])])], 1), _vm._v("\n                            l’an.\n                        ")])]), _c("br"), _vm._v(" "), _vm._m(18), _c("br"), _vm._v(" "), _vm._m(19), _vm._v(" "), _c("div", [_vm._v("\n                        Le prêt consenti sera remboursé à compter de la date de mise en place par l’"), _c("b", [_vm._v("Emprunteur")]), _vm._v(",\n                    "), _vm._v("\n                         en\n                        "), !_vm.edit_mode ? _c("span", [_c("b", [_c("span", {
    staticStyle: {
      "text-transform": "uppercase"
    }
  }, [_vm._v(_vm._s(_vm.convertirEnLettres((_vm$formDataToBeWatch30 = _vm.formDataToBeWatched) === null || _vm$formDataToBeWatch30 === void 0 ? void 0 : _vm$formDataToBeWatch30.nombre_echeance)))]), _vm._v(" (" + _vm._s((_vm$formDataToBeWatch31 = _vm.formDataToBeWatched) === null || _vm$formDataToBeWatch31 === void 0 ? void 0 : _vm$formDataToBeWatch31.nombre_echeance) + ") " + _vm._s((_vm$formDataToBeWatch32 = _vm.formDataToBeWatched) === null || _vm$formDataToBeWatch32 === void 0 ? void 0 : _vm$formDataToBeWatch32.type_echeance))])]) : _c("div", {
    staticStyle: {
      display: "flex",
      "align-items": "center"
    }
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.nombre_echeance,
      expression: "formDataToBeWatched.nombre_echeance"
    }],
    staticClass: "form-control",
    staticStyle: {
      width: "180px"
    },
    attrs: {
      type: "number",
      placeholder: "Nombre d'écheance",
      id: "nombre_echeance",
      min: "0"
    },
    domProps: {
      value: _vm.formDataToBeWatched.nombre_echeance
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formDataToBeWatched, "nombre_echeance", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "input-group-text input-group-text-right"
  }, [!_vm.checkField("nombre_echeance") ? _c("span", {
    staticStyle: {
      "font-size": "1.5em",
      color: "red"
    },
    attrs: {
      title: "Valider le champs"
    },
    on: {
      click: function click($event) {
        return _vm.onCheckField(true, "nombre_echeance");
      }
    }
  }, [_c("i", {
    staticClass: "icofont-close-circled"
  })]) : _c("span", {
    staticStyle: {
      "font-size": "1.5em",
      color: "green"
    },
    attrs: {
      title: "Invalider le champs"
    },
    on: {
      click: function click($event) {
        return _vm.onCheckField(false, "nombre_echeance");
      }
    }
  }, [_c("i", {
    staticClass: "icofont-check-circled"
  })])]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.type_echeance,
      expression: "formDataToBeWatched.type_echeance"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      placeholder: "Type d'écheance",
      id: "type_echeance"
    },
    domProps: {
      value: _vm.formDataToBeWatched.type_echeance
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formDataToBeWatched, "type_echeance", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "input-group-text input-group-text-right"
  }, [!_vm.checkField("type_echeance") ? _c("span", {
    staticStyle: {
      "font-size": "1.5em",
      color: "red"
    },
    attrs: {
      title: "Valider le champs"
    },
    on: {
      click: function click($event) {
        return _vm.onCheckField(true, "type_echeance");
      }
    }
  }, [_c("i", {
    staticClass: "icofont-close-circled"
  })]) : _c("span", {
    staticStyle: {
      "font-size": "1.5em",
      color: "green"
    },
    attrs: {
      title: "Invalider le champs"
    },
    on: {
      click: function click($event) {
        return _vm.onCheckField(false, "type_echeance");
      }
    }
  }, [_c("i", {
    staticClass: "icofont-check-circled"
  })])])]), _vm._v("\n                        constantes et consécutives, en capital et intérêts, Taxe sur les Opérations Bancaires "), _c("b", [_vm._v("(TOB)")]), _vm._v(", assurance décès-invalidité inclus, conformément à l’échéancier de remboursement annexé au présent contrat. "), _c("br")]), _vm._v(" "), _c("div", [_vm._v("\n                        Cet échéancier sera révisé en cas de variation du TBB et/ou de la TOB comme stipulé à "), _c("b", [_vm._v("l’article 5")]), _vm._v(" ci-avant.\n                        Le règlement des échéances sera automatiquement effectué par le débit du compte numéro "), _c("b", [_vm._v(_vm._s((_vm$formDataToBeWatch33 = _vm.formDataToBeWatched) === null || _vm$formDataToBeWatch33 === void 0 ? void 0 : _vm$formDataToBeWatch33.compte_numero))]), _vm._v(" de l’"), _c("b", [_vm._v("Emprunteur")]), _vm._v(" ouvert dans les livres de la "), _c("b", [_vm._v("Banque")]), _vm._v(".\n                    ")]), _vm._v(" "), _vm._m(20), _vm._v(" "), _c("br"), _vm._v(" "), _vm._m(21), _vm._v(" "), _vm._m(22), _c("br"), _vm._v(" "), _vm._m(23), _c("br"), _vm._v(" "), _c("div", [_vm._v("\n                        Les dispositions des alinéas 1 et 2 ci-dessus s’appliqueront à chaque report d’échéance successif.\n                    ")]), _c("br"), _vm._v(" "), _c("div", [_vm._v("\n                        En tout état de cause, tout report d’échéance ou modification des conditions de crédit initial n’emportera pas novation du contrat.\n                    ")]), _c("br"), _vm._v(" "), _vm._m(24), _c("br"), _vm._v(" "), _c(_vm.edit_mode ? "span" : "div", {
    tag: "component",
    "class": !_vm.edit_mode ? "to-span" : ""
  }, [_vm._v("Toute somme exigible en principal, intérêts, frais et accessoires non payée ou non ")]), _vm._v(" "), _c(_vm.edit_mode ? "span" : "div", {
    tag: "component",
    "class": !_vm.edit_mode ? "to-span" : ""
  }, [_vm._v("remboursée par l’"), _c("b", [_vm._v("Emprunteur")]), _vm._v(" à l’échéance sera productrice d’intérêt de plein droit, au taux du crédit susmentionné.")]), _c("br"), _vm._v(" "), _c("div", [_vm._v("\n                        Lesdits intérêts, échus et impayés, produiront eux-mêmes intérêts de plein droit et de façon automatique, sans formalités préalables.\n                    ")]), _c("br"), _vm._v(" "), _vm._m(25), _c("br"), _vm._v(" "), _vm._m(26), _vm._v(" "), _vm._m(27), _c("br"), _vm._v(" "), _c("br"), _vm._v(" "), _vm._m(28), _c("br"), _vm._v(" "), _c("div", {
    staticStyle: {
      position: "relative"
    }
  }, [_vm.edit_mode ? _c("div", {
    staticStyle: {
      position: "absolute",
      top: "50px",
      right: "-253px",
      cursor: "pointer"
    }
  }, [!_vm.checkField("article_10") ? _c("span", {
    staticStyle: {
      "font-size": "1.2em",
      color: "red"
    },
    on: {
      click: function click($event) {
        return _vm.onCheckField(true, "article_10");
      }
    }
  }, [_c("i", {
    staticClass: "icofont-close-circled"
  }), _vm._v(" Valider l'article 10")]) : _c("span", {
    staticStyle: {
      "font-size": "1.2em",
      color: "green"
    },
    on: {
      click: function click($event) {
        return _vm.onCheckField(false, "article_10");
      }
    }
  }, [_c("i", {
    staticClass: "icofont-check-circled"
  }), _vm._v(" Valider l'article 10")])]) : _vm._e(), _vm._v(" "), _c("div", {
    style: _vm.edit_mode ? "display: ruby; text-align: left;" : ""
  }, [_vm._v("\n                            A compter de la date de signature des présentes, une commission au titre des frais de dossier de\n                            "), _vm._v(" "), !_vm.edit_mode ? _c("span", [_vm._v(_vm._s((_vm$formDataToBeWatch34 = _vm.formDataToBeWatched) === null || _vm$formDataToBeWatch34 === void 0 ? void 0 : _vm$formDataToBeWatch34.extra_frais))]) : _c("div", {
    staticStyle: {
      display: "flex",
      "align-items": "center"
    }
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.extra_frais,
      expression: "formDataToBeWatched.extra_frais"
    }],
    staticClass: "form-control",
    staticStyle: {
      width: "600px"
    },
    attrs: {
      type: "text",
      placeholder: " , calculée sur le montant du prêt (avec un minimum de FCFA Francs CFA)",
      id: "extra_frais"
    },
    domProps: {
      value: _vm.formDataToBeWatched.extra_frais
    },
    on: {
      input: [function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formDataToBeWatched, "extra_frais", $event.target.value);
      }, _vm.handleInput]
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "input-group-text input-group-text-right"
  }, [!_vm.checkField("extra_frais") ? _c("span", {
    staticStyle: {
      "font-size": "1.5em",
      color: "red"
    },
    attrs: {
      title: "Valider le champs"
    },
    on: {
      click: function click($event) {
        return _vm.onCheckField(true, "extra_frais");
      }
    }
  }, [_c("i", {
    staticClass: "icofont-close-circled"
  })]) : _c("span", {
    staticStyle: {
      "font-size": "1.5em",
      color: "green"
    },
    attrs: {
      title: "Invalider le champs"
    },
    on: {
      click: function click($event) {
        return _vm.onCheckField(false, "extra_frais");
      }
    }
  }, [_c("i", {
    staticClass: "icofont-check-circled"
  })])])]), _vm._v(" "), _vm._v("\n                            sera payée par l’"), _c("b", [_vm._v("Emprunteur")]), _vm._v(" à la "), _c("b", [_vm._v("Banque")]), _vm._v(" conformément à l’offre de crédit de la "), _c("b", [_vm._v("Banque")]), _vm._v(" "), !_vm.edit_mode ? _c("span", [_vm._v(_vm._s((_vm$formDataToBeWatch35 = _vm.formDataToBeWatched) === null || _vm$formDataToBeWatch35 === void 0 ? void 0 : _vm$formDataToBeWatch35.extra_frais_2))]) : _c("div", {
    staticStyle: {
      display: "flex",
      "align-items": "center"
    }
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.extra_frais_2,
      expression: "formDataToBeWatched.extra_frais_2"
    }],
    staticClass: "form-control",
    staticStyle: {
      width: "300px"
    },
    attrs: {
      type: "text",
      placeholder: "pour les fonctionnaires.",
      id: "extra_frais_2"
    },
    domProps: {
      value: _vm.formDataToBeWatched.extra_frais_2
    },
    on: {
      input: [function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formDataToBeWatched, "extra_frais_2", $event.target.value);
      }, _vm.handleInput]
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "input-group-text input-group-text-right"
  }, [!_vm.checkField("extra_frais_2") ? _c("span", {
    staticStyle: {
      "font-size": "1.5em",
      color: "red"
    },
    attrs: {
      title: "Valider le champs"
    },
    on: {
      click: function click($event) {
        return _vm.onCheckField(true, "extra_frais_2");
      }
    }
  }, [_c("i", {
    staticClass: "icofont-close-circled"
  })]) : _c("span", {
    staticStyle: {
      "font-size": "1.5em",
      color: "green"
    },
    attrs: {
      title: "Invalider le champs"
    },
    on: {
      click: function click($event) {
        return _vm.onCheckField(false, "extra_frais_2");
      }
    }
  }, [_c("i", {
    staticClass: "icofont-check-circled"
  })])])])])]), _c("br"), _vm._v(" "), _vm._m(29), _c("br"), _vm._v(" "), _vm._m(30), _vm._v(" "), _vm._m(31), _vm._v(" "), _c("br"), _vm._v(" "), _vm._m(32), _vm._v(" "), _c("br"), _vm._v(" "), _vm._m(33), _vm._v(" "), _c("br"), _vm._v(" "), _vm._m(34), _vm._v(" "), _c("br"), _vm._v(" "), _c("div", [_vm._v("\n                        La présente clause est sans préjudice des cas de déclassement en créances douteuses ou litigieuses prévus par l’article 12 ci-dessous.\n                    ")]), _c("br"), _vm._v(" "), _vm._m(35), _c("br"), _vm._v(" "), _c("div", [_vm._v("\n                        Les Parties Conviennent, par la présente, qu’en application de l’Instruction n°026 - 11 - 2016 de la BCEAO relative à la comptabilisation et à l'évaluation des engagements en souffrance,\n                    ")]), _vm._v(" "), _vm._m(36), _vm._v(" "), _c("div", {
    staticStyle: {
      "margin-left": "15px"
    }
  }, [_vm._v("• débit en compte sans autorisation non régularisé au-delà de quatre-vingt-dix (90) jours ;")]), _vm._v(" "), _c("div", {
    staticStyle: {
      "margin-left": "15px"
    }
  }, [_vm._v("• dépassements d’autorisations non-régularisés au-delà de quatre-vingt-dix (90) jours ;")]), _vm._v(" "), _c("div", {
    staticStyle: {
      "margin-left": "15px"
    }
  }, [_vm._v("• débit en compte sans mouvements créditeurs significatifs non-régularisé au-delà de quatre-vingt-dix (90) jours ;")]), _vm._v(" "), _c("div", {
    staticStyle: {
      "margin-left": "15px"
    }
  }, [_vm._v("• impayés sur échéances de prêts non-régularisés au-delà de quatre-vingt-dix (90) jours, et ce quel que soit le nombre d’échéances impayés ;")]), _vm._v(" "), _c("div", {
    staticStyle: {
      "margin-left": "15px"
    }
  }, [_vm._v("• impayé de plus de trente (30) jours sur échéance de créances restructurées ;")]), _vm._v(" "), _vm._m(37), _c("br"), _vm._v(" "), _vm._m(38), _vm._v(" "), _c("br"), _vm._v(" "), _vm._m(39), _c("br"), _vm._v(" "), _c("div", {
    staticStyle: {
      position: "relative"
    }
  }, [_vm.edit_mode ? _c("div", {
    staticStyle: {
      position: "absolute",
      top: "180px",
      right: "-253px",
      cursor: "pointer"
    }
  }, [!_vm.checkField("article_13") ? _c("span", {
    staticStyle: {
      "font-size": "1.2em",
      color: "red"
    },
    on: {
      click: function click($event) {
        return _vm.onCheckField(true, "article_13");
      }
    }
  }, [_c("i", {
    staticClass: "icofont-close-circled"
  }), _vm._v(" Valider l'article 13")]) : _c("span", {
    staticStyle: {
      "font-size": "1.2em",
      color: "green"
    },
    on: {
      click: function click($event) {
        return _vm.onCheckField(false, "article_13");
      }
    }
  }, [_c("i", {
    staticClass: "icofont-check-circled"
  }), _vm._v(" Valider l'article 13")])]) : _vm._e()]), _vm._v(" "), _vm._m(40), _vm._v(" "), _vm.visibile_default_suretes[0] ? _c("div", {
    staticStyle: {
      "margin-left": "15px"
    },
    style: _vm.edit_mode ? "display: ruby; text-align: left;" : ""
  }, [_vm.edit_mode ? _c("div", [_c("button", {
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
        return _vm.removeDefaultSurete(0);
      }
    }
  }, [_c("trash-icon", {
    staticClass: "custom-class",
    attrs: {
      size: "21"
    }
  })], 1)]) : _vm._e(), _vm._v("\n                        ✓ La souscription au profit de la "), _c("b", [_vm._v("Banque")]), _vm._v(" d’une assurance décès invalidité ; A cette fin, l’"), _c("b", [_vm._v("Emprunteur")]), _vm._v(" déclare avoir usé de l’affiliation à la « convention d’assurance groupe NSIA "), _c("b", [_vm._v("Banque")]), _vm._v("/NSIA VIE Assurances » à hauteur de\n                        "), !_vm.edit_mode ? _c("span", [_c("b", [_vm._v(_vm._s(_vm.convertirEnLettres((_vm$formDataToBeWatch36 = _vm.formDataToBeWatched) === null || _vm$formDataToBeWatch36 === void 0 ? void 0 : _vm$formDataToBeWatch36.montant_souscription_profit)) + " (" + _vm._s(_vm.formatAmount((_vm$formDataToBeWatch37 = _vm.formDataToBeWatched) === null || _vm$formDataToBeWatch37 === void 0 ? void 0 : _vm$formDataToBeWatch37.montant_souscription_profit)) + ")")]), _vm._v(" DE FRANCS CFA ;")]) : _c("div", {
    staticStyle: {
      display: "flex",
      "align-items": "center"
    }
  }, [_c("currency-input2", {
    attrs: {
      id: "montant_souscription_profit",
      value: _vm.formDataToBeWatched.montant_souscription_profit
    },
    on: {
      input: _vm.formDataVars
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "input-group-text input-group-text-right"
  }, [!_vm.checkField("montant_souscription_profit") ? _c("span", {
    staticStyle: {
      "font-size": "1.5em",
      color: "red"
    },
    attrs: {
      title: "Valider le champs"
    },
    on: {
      click: function click($event) {
        return _vm.onCheckField(true, "montant_souscription_profit");
      }
    }
  }, [_c("i", {
    staticClass: "icofont-close-circled"
  })]) : _c("span", {
    staticStyle: {
      "font-size": "1.5em",
      color: "green"
    },
    attrs: {
      title: "Invalider le champs"
    },
    on: {
      click: function click($event) {
        return _vm.onCheckField(false, "montant_souscription_profit");
      }
    }
  }, [_c("i", {
    staticClass: "icofont-check-circled"
  })])]), _vm._v("\n                            Francs CFA\n                        ")], 1)]) : _vm._e(), _vm._v(" "), _c("br"), _vm._v(" "), _vm.visibile_default_suretes[1] ? _c("div", {
    staticStyle: {
      "margin-left": "15px"
    },
    style: _vm.edit_mode ? "display: ruby; text-align: left;" : ""
  }, [_vm.edit_mode ? _c("div", [_c("button", {
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
        return _vm.removeDefaultSurete(1);
      }
    }
  }, [_c("trash-icon", {
    staticClass: "custom-class",
    attrs: {
      size: "21"
    }
  })], 1)]) : _vm._e(), _vm._v("\n                        ✓ Le nantissement du compte de déposit numéro\n                        "), !_vm.edit_mode ? _c("span", [_c("b", [_vm._v(_vm._s((_vm$formDataToBeWatch38 = _vm.formDataToBeWatched) === null || _vm$formDataToBeWatch38 === void 0 ? void 0 : _vm$formDataToBeWatch38.compte_deposit))])]) : _c("div", {
    staticStyle: {
      display: "flex",
      "align-items": "center"
    }
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.compte_deposit,
      expression: "formDataToBeWatched.compte_deposit"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      placeholder: "N° Compte déposit",
      id: "compte_deposit"
    },
    domProps: {
      value: _vm.formDataToBeWatched.compte_deposit
    },
    on: {
      input: [function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formDataToBeWatched, "compte_deposit", $event.target.value);
      }, _vm.handleInput]
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "input-group-text input-group-text-right"
  }, [!_vm.checkField("compte_deposit") ? _c("span", {
    staticStyle: {
      "font-size": "1.5em",
      color: "red"
    },
    attrs: {
      title: "Valider le champs"
    },
    on: {
      click: function click($event) {
        return _vm.onCheckField(true, "compte_deposit");
      }
    }
  }, [_c("i", {
    staticClass: "icofont-close-circled"
  })]) : _c("span", {
    staticStyle: {
      "font-size": "1.5em",
      color: "green"
    },
    attrs: {
      title: "Invalider le champs"
    },
    on: {
      click: function click($event) {
        return _vm.onCheckField(false, "compte_deposit");
      }
    }
  }, [_c("i", {
    staticClass: "icofont-check-circled"
  })])])]), _vm._v("\n                        de l’"), _c("b", [_vm._v("Emprunteur")]), _vm._v(" ouvert dans les livres de la "), _c("b", [_vm._v("Banque")]), _vm._v(" à hauteur de\n                        "), !_vm.edit_mode ? _c("span", [_c("b", [_vm._v(_vm._s(_vm.convertirEnLettres((_vm$formDataToBeWatch39 = _vm.formDataToBeWatched) === null || _vm$formDataToBeWatch39 === void 0 ? void 0 : _vm$formDataToBeWatch39.montant_nantissement_compte)) + " (" + _vm._s(_vm.formatAmount((_vm$formDataToBeWatch40 = _vm.formDataToBeWatched) === null || _vm$formDataToBeWatch40 === void 0 ? void 0 : _vm$formDataToBeWatch40.montant_nantissement_compte)) + ")")]), _vm._v(" FRANCS CFA")]) : _c("div", {
    staticStyle: {
      display: "flex",
      "align-items": "center"
    }
  }, [_c("currency-input2", {
    attrs: {
      id: "montant_nantissement_compte",
      value: _vm.formDataToBeWatched.montant_nantissement_compte
    },
    on: {
      input: _vm.formDataVars
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "input-group-text input-group-text-right"
  }, [!_vm.checkField("montant_nantissement_compte") ? _c("span", {
    staticStyle: {
      "font-size": "1.5em",
      color: "red"
    },
    attrs: {
      title: "Valider le champs"
    },
    on: {
      click: function click($event) {
        return _vm.onCheckField(true, "montant_nantissement_compte");
      }
    }
  }, [_c("i", {
    staticClass: "icofont-close-circled"
  })]) : _c("span", {
    staticStyle: {
      "font-size": "1.5em",
      color: "green"
    },
    attrs: {
      title: "Invalider le champs"
    },
    on: {
      click: function click($event) {
        return _vm.onCheckField(false, "montant_nantissement_compte");
      }
    }
  }, [_c("i", {
    staticClass: "icofont-check-circled"
  })])]), _vm._v("\n                            Francs CFA\n                        ")], 1), _vm._v("\n                        qui sera constitué à la mise en place du prêt et alimenté d’un ordre de virement permanent\n                        "), !_vm.edit_mode ? _c("span", [_vm._v(_vm._s((_vm$formDataToBeWatch41 = _vm.formDataToBeWatched) === null || _vm$formDataToBeWatch41 === void 0 ? void 0 : _vm$formDataToBeWatch41.periodicite_virement))]) : _c("div", {
    staticStyle: {
      display: "flex",
      "align-items": "center"
    }
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.periodicite_virement,
      expression: "formDataToBeWatched.periodicite_virement"
    }],
    staticClass: "form-control",
    staticStyle: {
      width: "100px"
    },
    attrs: {
      type: "text",
      placeholder: "mensuel",
      id: "periodicite_virement"
    },
    domProps: {
      value: _vm.formDataToBeWatched.periodicite_virement
    },
    on: {
      input: [function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formDataToBeWatched, "periodicite_virement", $event.target.value);
      }, _vm.handleInput]
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "input-group-text input-group-text-right"
  }, [!_vm.checkField("periodicite_virement") ? _c("span", {
    staticStyle: {
      "font-size": "1.5em",
      color: "red"
    },
    attrs: {
      title: "Valider le champs"
    },
    on: {
      click: function click($event) {
        return _vm.onCheckField(true, "periodicite_virement");
      }
    }
  }, [_c("i", {
    staticClass: "icofont-close-circled"
  })]) : _c("span", {
    staticStyle: {
      "font-size": "1.5em",
      color: "green"
    },
    attrs: {
      title: "Invalider le champs"
    },
    on: {
      click: function click($event) {
        return _vm.onCheckField(false, "periodicite_virement");
      }
    }
  }, [_c("i", {
    staticClass: "icofont-check-circled"
  })])])]), _vm._v("\n                        de\n                        "), !_vm.edit_mode ? _c("span", [_c("b", [_vm._v(_vm._s(_vm.convertirEnLettres((_vm$formDataToBeWatch42 = _vm.formDataToBeWatched) === null || _vm$formDataToBeWatch42 === void 0 ? void 0 : _vm$formDataToBeWatch42.montant_ordre_vir_permanent)) + " (" + _vm._s(_vm.formatAmount((_vm$formDataToBeWatch43 = _vm.formDataToBeWatched) === null || _vm$formDataToBeWatch43 === void 0 ? void 0 : _vm$formDataToBeWatch43.montant_ordre_vir_permanent)) + ")")]), _vm._v(" FRANCS CFA")]) : _c("div", {
    staticStyle: {
      display: "flex",
      "align-items": "center"
    }
  }, [_c("currency-input2", {
    attrs: {
      id: "montant_ordre_vir_permanent",
      value: _vm.formDataToBeWatched.montant_ordre_vir_permanent
    },
    on: {
      input: _vm.formDataVars
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "input-group-text input-group-text-right"
  }, [!_vm.checkField("montant_ordre_vir_permanent") ? _c("span", {
    staticStyle: {
      "font-size": "1.5em",
      color: "red"
    },
    attrs: {
      title: "Valider le champs"
    },
    on: {
      click: function click($event) {
        return _vm.onCheckField(true, "montant_ordre_vir_permanent");
      }
    }
  }, [_c("i", {
    staticClass: "icofont-close-circled"
  })]) : _c("span", {
    staticStyle: {
      "font-size": "1.5em",
      color: "green"
    },
    attrs: {
      title: "Invalider le champs"
    },
    on: {
      click: function click($event) {
        return _vm.onCheckField(false, "montant_ordre_vir_permanent");
      }
    }
  }, [_c("i", {
    staticClass: "icofont-check-circled"
  })])]), _vm._v("\n                            Francs CFA\n                        ")], 1), _vm._v("\n                        ;\n                    ")]) : _vm._e(), _vm._v(" "), _c("br"), _vm._v(" "), _vm.visibile_default_suretes[2] ? _c("div", {
    staticStyle: {
      "margin-left": "15px"
    },
    style: _vm.edit_mode ? "display: ruby; text-align: left;" : ""
  }, [_vm.edit_mode ? _c("div", [_c("button", {
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
        return _vm.removeDefaultSurete(2);
      }
    }
  }, [_c("trash-icon", {
    staticClass: "custom-class",
    attrs: {
      size: "21"
    }
  })], 1)]) : _vm._e(), _vm._v("\n                        ✓ La domiciliation du salaire mensuel de l’"), _c("b", [_vm._v("Emprunteur")]), _vm._v(" sur son compte numéro "), _c("b", [_vm._v(_vm._s((_vm$formDataToBeWatch44 = _vm.formDataToBeWatched) === null || _vm$formDataToBeWatch44 === void 0 ? void 0 : _vm$formDataToBeWatch44.compte_numero))]), _vm._v(" ouvert dans les livres de la "), _c("b", [_vm._v("Banque")]), _vm._v(".\n                    ")]) : _vm._e(), _vm._v(" "), _c("br"), _vm._v(" "), _vm.suretes.length > 0 ? _vm._l(_vm.suretes, function (surete, indexS) {
    return _c("div", {
      key: "sur" + indexS,
      staticStyle: {
        "margin-left": "15px"
      }
    }, [!_vm.edit_mode ? _c("span", [_vm._v("✓ " + _vm._s(surete.surete))]) : _c("div", {
      staticStyle: {
        display: "flex",
        "align-items": "center"
      }
    }, [_c("div", [_c("button", {
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
          return _vm.removeSurete(indexS);
        }
      }
    }, [_c("trash-icon", {
      staticClass: "custom-class",
      attrs: {
        size: "21"
      }
    })], 1)]), _vm._v(" "), _c("span", [_vm._v("✓")]), _vm._v(" "), _c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: surete.surete,
        expression: "surete.surete"
      }],
      staticClass: "form-control",
      staticStyle: {
        width: "100%"
      },
      attrs: {
        type: "text",
        placeholder: "Veuillez renseigner la surêté"
      },
      domProps: {
        value: surete.surete
      },
      on: {
        input: [function ($event) {
          if ($event.target.composing) return;
          _vm.$set(surete, "surete", $event.target.value);
        }, _vm.handleInput]
      }
    }), _vm._v(" "), _c("div", {
      staticClass: "input-group-text input-group-text-right"
    }, [!_vm.check_fields["surete_" + indexS] ? _c("span", {
      staticStyle: {
        "font-size": "1.5em",
        color: "red"
      },
      attrs: {
        title: "Valider le champs"
      },
      on: {
        click: function click($event) {
          return _vm.onCheckField(true, "surete_" + indexS);
        }
      }
    }, [_c("i", {
      staticClass: "icofont-close-circled"
    })]) : _c("span", {
      staticStyle: {
        "font-size": "1.5em",
        color: "green"
      },
      attrs: {
        title: "Invalider le champs"
      },
      on: {
        click: function click($event) {
          return _vm.onCheckField(false, "surete_" + indexS);
        }
      }
    }, [_c("i", {
      staticClass: "icofont-check-circled"
    })])])])]);
  }) : _vm._e(), _vm._v(" "), _vm.edit_mode ? _c("div", {
    staticClass: "text-center my-3"
  }, [_c("button", {
    staticStyle: {
      "background-color": "#2c3e50",
      color: "#ffffff",
      "border-radius": "5px",
      border: "none",
      "font-size": "16px"
    },
    attrs: {
      type: "button",
      title: "Ajouter une surêté"
    },
    on: {
      click: function click($event) {
        return _vm.addSurete();
      }
    }
  }, [_c("plus-icon", {
    staticClass: "custom-class",
    attrs: {
      size: "21"
    }
  }), _vm._v(" Ajouter une surêté\n                        ")], 1)]) : _vm._e(), _vm._v(" "), _vm._m(41), _vm._v(" "), _vm._m(42), _vm._v(" "), _vm._m(43), _vm._v(" "), _vm._m(44), _vm._v(" "), _c("br"), _vm._v(" "), _vm._m(45), _vm._v(" "), _c("br"), _vm._v(" "), _vm._m(46), _vm._v(" "), _vm._m(47), _vm._v(" "), _vm._m(48), _vm._v(" "), _vm._m(49), _vm._v(" "), _vm._m(50), _c("br"), _vm._v(" "), _vm._m(51), _c("br"), _vm._v(" "), _vm._m(52), _vm._v(" "), _c("br"), _vm._v(" "), _c(_vm.edit_mode ? "span" : "div", {
    tag: "component",
    "class": !_vm.edit_mode ? "to-span" : ""
  }, [_c("b", {
    staticStyle: {
      "margin-left": "15px"
    }
  }, [_vm._v("14.2.")]), _vm._v(" La "), _c("b", [_vm._v("Banque")]), _vm._v(" aura, sans préjudice de tous ses autres droits et recours, la faculté à tout moment, sans avoir à en aviser au préalable l’"), _c("b", [_vm._v("Emprunteur")]), _vm._v(", d’opérer compensation entre ")]), _vm._v(" "), _c(_vm.edit_mode ? "span" : "div", {
    tag: "component",
    "class": !_vm.edit_mode ? "to-span" : ""
  }, [_vm._v("tout montant dû par l’"), _c("b", [_vm._v("Emprunteur")]), _vm._v(" au titre de la présente convention de prêt et tout montant que la "), _c("b", [_vm._v("Banque")]), _vm._v(" détiendrait pour le compte de l’"), _c("b", [_vm._v("Emprunteur")]), _vm._v(", en toute monnaie et ")]), _vm._v(" "), _c(_vm.edit_mode ? "span" : "div", {
    tag: "component",
    "class": !_vm.edit_mode ? "to-span" : ""
  }, [_vm._v("en tout lieu, dans ses livres, sur le ou les différents comptes de l’"), _c("b", [_vm._v("Emprunteur")]), _vm._v(", à quelque titre que ce soit. ")]), _vm._v(" "), _c(_vm.edit_mode ? "span" : "div", {
    tag: "component",
    "class": !_vm.edit_mode ? "to-span" : ""
  }, [_vm._v("S’il s’agit d’un montant en devises différentes de celles qui sont dues par l’"), _c("b", [_vm._v("Emprunteur")]), _vm._v(", la "), _c("b", [_vm._v("Banque")]), _vm._v(" pourra procéder à toutes les opérations de change nécessaires.")]), _vm._v(" "), _c("br"), _vm._v(" "), _vm._m(53), _c("br"), _vm._v(" "), _c("div", [_vm._v("\n                        Pour l’exécution des présentes, les soussignés élisent domicile en leur siège social et adresse respectifs visés entête des présentes.\n                    ")]), _c("br"), _vm._v(" "), _vm._m(54), _c("br"), _vm._v(" "), _vm._m(55), _vm._v(" "), _c("div", [_vm._v("\n                        Tout différend résultant de l’interprétation ou de l’exécution de la présente convention sera de la compétence du Tribunal de Commerce d’Abidjan.\n                    ")]), _c("br"), _vm._v(" "), _vm._m(56), _c("br"), _vm._v(" "), _c(_vm.edit_mode ? "span" : "div", {
    tag: "component",
    "class": !_vm.edit_mode ? "to-span" : ""
  }, [_vm._v("Tous les impôts, frais, droits et taxes quelconques, présents et à venir sur les intérêts et le principal, auxquels les présentes donneront lieu et ceux des formalités ou actes qui en ")]), _vm._v(" "), _c(_vm.edit_mode ? "span" : "div", {
    tag: "component",
    "class": !_vm.edit_mode ? "to-span" : ""
  }, [_vm._v(" seront la suite ou la conséquence, seront à la charge de l’"), _c("b", [_vm._v("Emprunteur")]), _vm._v(" qui s’y oblige expressément en ce compris notamment les frais et droits d’enregistrement et ")]), _vm._v(" "), _c(_vm.edit_mode ? "span" : "div", {
    tag: "component",
    "class": !_vm.edit_mode ? "to-span" : ""
  }, [_vm._v("d’inscription de toute sureté ou garantie, les frais de justification à fournir pour constater le rang des suretés ou garanties de la "), _c("b", [_vm._v("Banque")]), _vm._v(" et pour arriver à la mainlevée et à la ")]), _vm._v(" "), _c(_vm.edit_mode ? "span" : "div", {
    tag: "component",
    "class": !_vm.edit_mode ? "to-span" : ""
  }, [_vm._v("radiation de toutes inscriptions, les droits d’enregistrement du présent contrat, le timbrage des billets et autres, et le coût des grosses ou tous autres actes à délivrer à la "), _c("b", [_vm._v("Banque")]), _vm._v(".\n                    ")]), _vm._v(" "), _c(_vm.edit_mode ? "span" : "div", {
    tag: "component",
    "class": !_vm.edit_mode ? "to-span" : ""
  }, [_vm._v("Tous les frais résultants de la rédaction d’un avenant au présent contrat sont également à la charge de l’"), _c("b", [_vm._v("Emprunteur")]), _vm._v(" qui s’oblige expressément à les régler. ")]), _c("br"), _vm._v(" "), _vm._m(57), _vm._v(" "), _c("br"), _c("br"), _vm._v(" "), _vm._m(58)], 2)])]), _vm._v(" "), !_vm.edit_mode ? _c("div", {
    staticStyle: {
      "text-align": "justify"
    }
  }, [_c("div", {
    staticStyle: {
      width: "714px",
      height: "1040px",
      margin: "50px auto",
      "box-sizing": "border-box",
      border: "1px solid rgb(221, 221, 221)",
      background: "white",
      position: "relative"
    },
    attrs: {
      id: "preloader-content"
    }
  })]) : _vm._e(), _vm._v(" "), _c("div", {
    ref: "contentToPdf",
    staticStyle: {
      "text-align": "justify"
    },
    attrs: {
      id: "printable"
    }
  })])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "d-flex justify-content-center text-center align-items-center text-muted py-4"
  }, [_c("div", [_c("span", {
    staticClass: "spinner-border spinner-border"
  }), _vm._v(" "), _c("h5", [_vm._v("\n                    Chargement des données en cours ... "), _c("br"), _vm._v("\n                    Ceci peut prendre un peu de temps\n                ")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "spinner-border text-secondary",
    staticStyle: {
      height: "20px",
      width: "20px"
    },
    attrs: {
      role: "status"
    }
  }, [_c("span", {
    staticClass: "sr-only"
  }, [_vm._v("Loading...")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticStyle: {
      padding: "15px",
      border: "1px solid #2d5489",
      background: "#d0cece",
      "text-align": "center"
    }
  }, [_c("b", [_vm._v("CONVENTION DE PRET")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("u", [_c("b", [_vm._v("ENTRE LES SOUSSIGNES :")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_vm._v("Ci-après dénommé "), _c("b", [_vm._v("“l'Emprunteur”")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("b", [_vm._v("ET")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_vm._v("Ci-après ensemble dénommés les "), _c("b", [_vm._v("« Parties »")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("b", [_vm._v("Il a été préalablement exposé ce qui suit :")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "text-center"
  }, [_c("u", [_c("b", [_vm._v("EXPOSE")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_vm._v("\n                        La "), _c("b", [_vm._v("Banque")]), _vm._v(" a accepté de lui accorder ce concours aux conditions énumérées dans le présent acte. "), _c("br")]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("b", [_vm._v("Ceci exposé, les parties conviennent ci-après des termes de leurs engagements :")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "fw-bold"
  }, [_vm._v("Article 1 "), _c("span", {
    staticClass: "text-decoration-underline"
  }, [_vm._v("Valeur juridique de l’exposé")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "fw-bold"
  }, [_vm._v("Article 2 "), _c("span", {
    staticClass: "text-decoration-underline"
  }, [_vm._v("Objet")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_vm._v("La présente convention a pour objet de définir les conditions et modalités de l’octroi par la "), _c("b", [_vm._v("Banque")]), _vm._v(" d’un crédit à Prêt Personnel Ordinaire au profit de l’"), _c("b", [_vm._v("Emprunteur")]), _vm._v(".")]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "fw-bold"
  }, [_vm._v("Article 3 "), _c("span", {
    staticClass: "text-decoration-underline"
  }, [_vm._v("Montant")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "fw-bold"
  }, [_vm._v("Article 4 "), _c("span", {
    staticClass: "text-decoration-underline"
  }, [_vm._v("Durée")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "fw-bold"
  }, [_vm._v("Article 5 "), _c("span", {
    staticClass: "text-decoration-underline"
  }, [_vm._v("Intérêts")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "fw-bold"
  }, [_vm._v("Article 6 "), _c("span", {
    staticClass: "text-decoration-underline"
  }, [_vm._v("Taux Effectif Global")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "fw-bold"
  }, [_vm._v("Article 7 "), _c("span", {
    staticClass: "text-decoration-underline"
  }, [_vm._v("Remboursement - Report d’échéance")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "fw-bold"
  }, [_c("div", {
    staticStyle: {
      "margin-left": "15px"
    }
  }, [_vm._v("7.1 - "), _c("span", {
    staticClass: "text-decoration-underline"
  }, [_vm._v("Remboursement")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_vm._v("\n                        L’"), _c("b", [_vm._v("Emprunteur")]), _vm._v(" s'engage à approvisionner son compte à cette fin. A cet effet, il donne expressément, par la présente convention, mandat irrévocable à la "), _c("b", [_vm._v("Banque")]), _vm._v(" d'effectuer les prélèvements nécessaires aux échéances prévues ci-dessus.\n                    ")]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "fw-bold"
  }, [_c("div", {
    staticStyle: {
      "margin-left": "15px"
    }
  }, [_vm._v("7.2 - "), _c("span", {
    staticClass: "text-decoration-underline"
  }, [_vm._v("Report d’échéance")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_vm._v("\n                        En cas de report d’échéance consenti par la "), _c("b", [_vm._v("Banque")]), _vm._v(" à l’"), _c("b", [_vm._v("Emprunteur")]), _vm._v(", une majoration du taux de crédit déterminée par la "), _c("b", [_vm._v("Banque")]), _vm._v(", sera appliquée sur les sommes dues, outre les intérêts légaux et pénalités éventuels.\n                    ")]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_vm._v("\n                        Tout report d’échéance sera matérialisé soit par un avenant signé par les parties, soit par courrier notifié par la "), _c("b", [_vm._v("Banque")]), _vm._v(" à l’"), _c("b", [_vm._v("Emprunteur")]), _vm._v(" précisant le taux d’intérêt majoré, ainsi que les nouvelles conditions du crédit consécutives au report d’échéance.\n                    ")]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "fw-bold"
  }, [_vm._v("Article 8 "), _c("span", {
    staticClass: "text-decoration-underline"
  }, [_vm._v("Intérêts de retard")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "fw-bold"
  }, [_vm._v("Article 9 "), _c("span", {
    staticClass: "text-decoration-underline"
  }, [_vm._v("Remboursement anticipé")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_vm._v("\n                        L’"), _c("b", [_vm._v("Emprunteur")]), _vm._v(" aura la faculté de rembourser, par anticipation, en tout ou partie, les sommes dues au titre de l’avance, sous réserve d’un préavis adressé à la "), _c("b", [_vm._v("Banque")]), _vm._v(" au moins quinze (15) Jours ouvrables d’avance,\n                        une notification écrite indiquant la demande de l’"), _c("b", [_vm._v("Emprunteur")]), _vm._v("\n                        d’effectuer un remboursement anticipé du prêt et précisant le montant de ce remboursement et la date à laquelle ce dernier devra intervenir. Les remboursements anticipés sauront un caractère définitif. "), _c("br")]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_vm._v("\n                        Les remboursements anticipés ne donneront droit au profit de la "), _c("b", [_vm._v("Banque")]), _vm._v(" à la perception d’aucune indemnité, conformément aux dispositions de l’article 173 de la loi 2016-412 du 15 Juin 2016 relative à la consommation.\n                    ")]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "fw-bold"
  }, [_vm._v("Article 10 "), _c("span", {
    staticClass: "text-decoration-underline"
  }, [_vm._v("Commission")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "fw-bold"
  }, [_vm._v("Article 11 "), _c("span", {
    staticClass: "text-decoration-underline"
  }, [_vm._v("Exigibilité Anticipée")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_vm._v("\n                        Toutes les sommes dues en principal, intérêts, frais et accessoires par l’"), _c("b", [_vm._v("Emprunteur")]), _vm._v(" à la "), _c("b", [_vm._v("Banque")]), _vm._v(" deviendraient exigibles immédiatement dans l’un ou l’autre des cas suivants : "), _c("br")]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticStyle: {
      "margin-left": "15px"
    }
  }, [_vm._v("1. En cas de défaillance de l’"), _c("b", [_vm._v("Emprunteur")]), _vm._v(" caractérisée par le non-paiement de trois (03) échéances mensuelles consécutives ;")]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticStyle: {
      "margin-left": "15px"
    }
  }, [_vm._v("2. En cas d’inexécution ou de violation de l’un quelconque des engagements pris par l’"), _c("b", [_vm._v("Emprunteur")]), _vm._v(" dans le présent acte, ou de déclarations inexactes ;")]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticStyle: {
      "margin-left": "15px"
    }
  }, [_vm._v("3. En cas de démission, de licenciement ou de cessation même provisoire de l’activité de l’"), _c("b", [_vm._v("Emprunteur")]), _vm._v(" ;")]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticStyle: {
      "margin-left": "15px"
    }
  }, [_vm._v("4. Si l’"), _c("b", [_vm._v("Emprunteur")]), _vm._v(" venait à décéder.")]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "fw-bold"
  }, [_vm._v("Article 12 "), _c("span", {
    staticClass: "text-decoration-underline"
  }, [_vm._v("Déclassement des engagements en créances douteuses ou litigieuses")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_vm._v("\n                        l’ensemble des engagements du client dans les livres de la "), _c("b", [_vm._v("Banque")]), _vm._v(" seront déclassés, sans délai ni préavis, en créances douteuses ou litigieuses, et feront l’objet de recouvrement judicaire avec réalisation de toutes les garanties, dans l’un des cas suivants : "), _c("br")]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticStyle: {
      "margin-left": "15px"
    }
  }, [_vm._v("• Survenance d’évènements de toute nature, présentant des caractéristiques telles qu'indépendamment de l'existence de tout impayé, il est probable que la "), _c("b", [_vm._v("Banque")]), _vm._v(" ne perçoive pas tout ou partie des sommes dues au titre des engagements souscrits par le client.")]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_vm._v("\n                        Par l’effet de contagion, le déclassement d’un quelconque des comptes de l’"), _c("b", [_vm._v("Emprunteur")]), _vm._v(" ouverts dans les livres de la "), _c("b", [_vm._v("Banque")]), _vm._v(" en créances douteuses ou litigieuses, pour l’une des causes sus-énumérées, entrainera, de plein droit (automatiquement), le déclassement de tous les autres comptes de l’"), _c("b", [_vm._v("Emprunteur")]), _vm._v(" y compris le compte visé à l’article 3 ci-dessus, comme devant recevoir le présent concours.\n                    ")]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "fw-bold"
  }, [_vm._v("Article 13 "), _c("span", {
    staticClass: "text-decoration-underline"
  }, [_vm._v("Sûretés")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_vm._v("\n                        Le remboursement à la "), _c("b", [_vm._v("Banque")]), _vm._v(" de toutes sommes dues par l'"), _c("b", [_c("b", [_vm._v("Emprunteur")])]), _vm._v(" en exécution de la présente convention de prêt, sera garanti par : "), _c("br")]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticStyle: {
      position: "relative"
    }
  }, [_vm._v("\n                        Les sûretés présentement affectées, ou à affecter, en couverture des engagements de l’"), _c("b", [_vm._v("Emprunteur")]), _vm._v(" feront l’objet d’une réévaluation périodique. "), _c("br")]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticStyle: {
      position: "relative"
    }
  }, [_vm._v("\n                        La réévaluation visera à déterminer la valeur à date de ces sûretés, en application de la règlementation suivante :\n                        "), _c("div", {
    staticStyle: {
      "margin-left": "15px"
    }
  }, [_vm._v("• La Décision 013 du 24 Juin 2016 portant Dispositif prudentiel applicable aux établissements de crédit et aux compagnies financières de l’Union Monétaire Ouest Africaine (UMOA), en son paragraphe 239 ;")]), _vm._v(" "), _c("br"), _vm._v(" "), _c("div", {
    staticStyle: {
      "margin-left": "15px"
    }
  }, [_vm._v("• La Circulaire n°04-2017/CB/C relative à la gestion des risques dans les établissements de crédit et les compagnies financières de l’UMOA, en son article 20 ;")]), _vm._v(" "), _c("br"), _vm._v(" "), _c("div", {
    staticStyle: {
      "margin-left": "15px"
    }
  }, [_vm._v("• La Lettre-circulaire CB/DERI/n°0618/2021 du 25 Mars 2021 relative à la réévaluation périodique des garanties hypothécaires.")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticStyle: {
      position: "relative"
    }
  }, [_vm._v("\n                        La réévaluation des biens affectés en garantie se fera comme suit : "), _c("br")]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticStyle: {
      "margin-left": "15px"
    }
  }, [_vm._v("• Pour les hypothèques, toutes les DEUX (02) années à compter de la date de signature des actes de crédit par l’"), _c("b", [_vm._v("Emprunteur")]), _vm._v(" ;")]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticStyle: {
      "margin-left": "15px"
    }
  }, [_vm._v("• Pour toutes les autres sûretés, l’évaluation se fera une fois au moins annuellement à compter de la date de signature des actes de crédit par l’"), _c("b", [_vm._v("Emprunteur")]), _vm._v(".")]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticStyle: {
      position: "relative"
    }
  }, [_vm._v("\n                        Les sommes de quelque nature qu’elles soient qui seront dues en raison de l’évaluation ou de la réévaluation de toute sureté seront à la charge de l’"), _c("b", [_vm._v("Emprunteur")]), _vm._v(" qui s’oblige expressément à les régler. "), _c("br")]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_vm._v("\n                        Faute par l’"), _c("b", [_vm._v("Emprunteur")]), _vm._v(" de régler ces sommes comme dit ci-dessus, ce dernier autorise la "), _c("b", [_vm._v("Banque")]), _vm._v(", par la présente convention, à les acquitter en ses lieu et place par le débit de son compte courant ouvert dans les livres de la "), _c("b", [_vm._v("Banque")]), _vm._v(". "), _c("br")]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_vm._v("\n                        En cas de dépréciation de la garantie initialement offerte, l’"), _c("b", [_vm._v("Emprunteur")]), _vm._v(" doit en fournir une autre de même valeur. "), _c("br")]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_vm._v("\n                        La nouvelle garantie de substitution doit être offerte dans un délai de TROIS (03) mois à compter de la demande de la "), _c("b", [_vm._v("Banque")]), _vm._v(" adressée à l’"), _c("b", [_vm._v("Emprunteur")]), _vm._v(" par tout moyen laissant trace écrite. "), _c("br")]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_vm._v("\n                        Cette nouvelle garantie doit être dûment agréée par la "), _c("b", [_vm._v("Banque")]), _vm._v(". La défaillance de l’"), _c("b", [_vm._v("Emprunteur")]), _vm._v(" à fournir la garantie de substitution est une cause d’exigibilité anticipée du présent concours.\n                    ")]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "fw-bold"
  }, [_vm._v("Article 14 "), _c("span", {
    staticClass: "text-decoration-underline"
  }, [_vm._v("Absence de renonciation à un droit – Compensation")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("b", {
    staticStyle: {
      "margin-left": "15px"
    }
  }, [_vm._v("14.1.")]), _vm._v(" Le fait pour la "), _c("b", [_vm._v("Banque")]), _vm._v(" de ne pas exercer un droit ou de ne pas l’exercer en temps utile, ne constituera pas une renonciation audit droit ou recours, et n’emportera pas novation.\n                    ")]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "fw-bold"
  }, [_vm._v("Article 15 "), _c("span", {
    staticClass: "text-decoration-underline"
  }, [_vm._v("Election de domicile")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "fw-bold"
  }, [_vm._v("Article 16 "), _c("span", {
    staticClass: "text-decoration-underline"
  }, [_vm._v("Droit applicable et attribution de juridiction")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_vm._v("\n                        La présente convention est régie par le droit positif ivoirien. "), _c("br")]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "fw-bold"
  }, [_vm._v("Article 17 "), _c("span", {
    staticClass: "text-decoration-underline"
  }, [_vm._v("Frais")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_vm._v("\n                        Faute par l'"), _c("b", [_vm._v("Emprunteur")]), _vm._v(" de régler ces sommes comme ci-dessus convenu, ce dernier autorise la "), _c("b", [_vm._v("Banque")]), _vm._v(", par la présente convention, à les acquitter en ses lieu et place par le débit de son compte courant ouvert dans les livres de la "), _c("b", [_vm._v("Banque")]), _vm._v(".\n                    ")]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("div", {
    staticStyle: {
      display: "ruby",
      "text-align": "left"
    }
  }, [_vm._v("\n                            Fait à "), _c("div", {
    staticStyle: {
      width: "180px"
    }
  }), _vm._v(", le "), _c("div", {
    staticStyle: {
      width: "170px"
    }
  }), _vm._v(" en trois (3) exemplaires originaux. "), _c("br")]), _vm._v(" "), _c("br"), _vm._v(" "), _c("div", [_c("table", {
    staticStyle: {
      width: "100%"
    }
  }, [_c("tr", [_c("td", {
    staticStyle: {
      width: "30%"
    }
  }, [_c("div", {
    staticClass: "text-center",
    staticStyle: {
      padding: "10px 0 120px 0px"
    }
  }, [_c("b", [_vm._v("POUR L’EMPRUNTEUR")]), _c("br"), _vm._v("\n                                            (Signature)\n                                        ")])]), _vm._v(" "), _c("td", {
    staticStyle: {
      width: "60%"
    }
  }), _vm._v(" "), _c("td", {
    staticStyle: {
      width: "10%"
    }
  }, [_c("div", {
    staticClass: "text-center",
    staticStyle: {
      padding: "10px 0 120px 0px"
    }
  }, [_c("b", [_vm._v("POUR LA BANQUE")]), _c("br"), _vm._v("\n                                            (Signature+cachet)\n                                        ")])])])])])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/memo/conventions/DAJC-CONV2.vue?vue&type=template&id=4f214418&scoped=true":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/memo/conventions/DAJC-CONV2.vue?vue&type=template&id=4f214418&scoped=true ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm$formDataToBeWatch, _vm$formDataToBeWatch2, _vm$formDataToBeWatch3, _vm$formDataToBeWatch4, _vm$formDataToBeWatch5, _vm$formDataToBeWatch6, _vm$formDataToBeWatch7, _vm$formDataToBeWatch8, _vm$formDataToBeWatch9, _vm$formDataToBeWatch0, _vm$formDataToBeWatch1, _vm$formDataToBeWatch10, _vm$formDataToBeWatch11, _vm$formDataToBeWatch12, _vm$formDataToBeWatch13, _vm$formDataToBeWatch14, _vm$formDataToBeWatch15, _vm$banque, _vm$banque2, _vm$banque3, _vm$banque4, _vm$banque5, _vm$banque6, _vm$banque7, _vm$banque8, _vm$banque9, _vm$banque0, _vm$banque1, _vm$banque10, _vm$banque11, _vm$banque12, _vm$banque13, _vm$banque14, _vm$banque15, _vm$formDataToBeWatch16, _vm$formDataToBeWatch17, _vm$formDataToBeWatch18, _vm$formDataToBeWatch19, _vm$formDataToBeWatch20, _vm$formDataToBeWatch21, _vm$formDataToBeWatch22, _vm$formDataToBeWatch23, _vm$formDataToBeWatch24, _vm$formDataToBeWatch25, _vm$formDataToBeWatch26;
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_vm.isLoading ? _c("div", {
    staticClass: "card-body"
  }, [_vm._m(0)]) : _c("div", [_c("div", [_c("div", {
    staticClass: "p-5 position-relative",
    staticStyle: {
      width: "845px",
      margin: "0 auto",
      border: "1px solid #c6c6c6",
      "background-color": "#ffffff",
      "text-align": "justify"
    }
  }, [_c("div", {
    staticClass: "position-absolute delete-element",
    staticStyle: {
      top: "10px",
      right: "0"
    }
  }, [_vm.edit_mode ? _c("span", {
    staticClass: "mx-2",
    staticStyle: {
      "font-size": "0.9rem"
    },
    attrs: {
      role: "button"
    },
    on: {
      click: _vm.setEditMode
    }
  }, [_c("i", {
    staticClass: "icofont-pencil",
    attrs: {
      title: "Visualiser la convention"
    }
  }), _vm._v("Visualiser la convention")]) : _c("span", {
    staticClass: "mx-2",
    staticStyle: {
      "font-size": "0.9rem"
    },
    attrs: {
      role: "button"
    },
    on: {
      click: _vm.setEditMode
    }
  }, [_c("i", {
    staticClass: "icofont-paperclip",
    attrs: {
      title: "Modifier la convention"
    }
  }), _vm._v("Modifier la convention")]), _vm._v(" "), !_vm.pdf_process ? [_vm.check_fields_ && !_vm.edit_mode ? _c("span", {
    staticClass: "mx-2",
    staticStyle: {
      "font-size": "0.9rem"
    },
    attrs: {
      role: "button"
    },
    on: {
      click: function click($event) {
        return _vm.exportToPDF(false);
      }
    }
  }, [_c("i", {
    staticClass: "icofont-upload-alt",
    attrs: {
      title: "Uploader le fichier"
    }
  }), _vm._v("Uploader le fichier")]) : _vm._e(), _vm._v(" "), _vm.check_fields_ && !_vm.edit_mode ? _c("span", {
    staticClass: "mx-2",
    staticStyle: {
      "font-size": "0.9rem"
    },
    attrs: {
      role: "button"
    },
    on: {
      click: function click($event) {
        return _vm.exportToPDF(true);
      }
    }
  }, [_c("i", {
    staticClass: "icofont-download",
    attrs: {
      title: "Télécharger le fichier"
    }
  }), _vm._v("Télécharger le fichier")]) : _vm._e()] : _c("div", {
    staticStyle: {
      display: "inline-block"
    }
  }, [_vm._m(1), _vm._v(" "), _c("span", {
    staticStyle: {
      "font-size": "0.9rem",
      "margin-left": "5px"
    }
  }, [_vm._v("Génération du PDF en cours...")])]), _vm._v(" "), _c("span", {
    staticClass: "mx-2",
    staticStyle: {
      "font-size": "0.9rem",
      "margin-right": "50px!important"
    },
    attrs: {
      role: "button"
    },
    on: {
      click: _vm.closeEditMode
    }
  }, [_c("i", {
    staticClass: "icofont-close",
    attrs: {
      title: "Fermer l'édition"
    }
  }), _vm._v("Fermer l'édition")])], 2), _vm._v(" "), _c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: !_vm.build_off,
      expression: "!build_off"
    }],
    ref: "contentToCapture"
  }, [_vm._m(2), _c("br"), _vm._v(" "), _vm._m(3), _c("br"), _vm._v(" "), _c("div", {
    staticStyle: {
      position: "relative"
    }
  }, [_vm.edit_mode ? _c("div", {
    staticStyle: {
      position: "absolute",
      top: "80px",
      right: "-253px",
      cursor: "pointer"
    }
  }, [!_vm.checkField("check_fields_emprunteur") ? _c("span", {
    staticStyle: {
      "font-size": "1.2em",
      color: "red"
    },
    on: {
      click: function click($event) {
        return _vm.onCheckField(true, "check_fields_emprunteur");
      }
    }
  }, [_c("i", {
    staticClass: "icofont-close-circled"
  }), _vm._v(" Valider la section")]) : _c("span", {
    staticStyle: {
      "font-size": "1.2em",
      color: "green"
    },
    on: {
      click: function click($event) {
        return _vm.onCheckField(false, "check_fields_emprunteur");
      }
    }
  }, [_c("i", {
    staticClass: "icofont-check-circled"
  }), _vm._v(" Valider la section")])]) : _vm._e(), _vm._v(" "), _c("div", {
    style: _vm.edit_mode ? "display: ruby; text-align: left" : ""
  }, [!_vm.edit_mode ? _c("span", [_vm._v(_vm._s((_vm$formDataToBeWatch = _vm.formDataToBeWatched) === null || _vm$formDataToBeWatch === void 0 ? void 0 : _vm$formDataToBeWatch.civilite_emprunteur))]) : _c("div", {
    staticStyle: {
      display: "flex",
      "align-items": "center"
    }
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.civilite_emprunteur,
      expression: "formDataToBeWatched.civilite_emprunteur"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      placeholder: "Civilité",
      id: "civilite_emprunteur"
    },
    domProps: {
      value: _vm.formDataToBeWatched.civilite_emprunteur
    },
    on: {
      input: [function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formDataToBeWatched, "civilite_emprunteur", $event.target.value);
      }, _vm.handleInput]
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "input-group-text input-group-text-right"
  }, [!_vm.checkField("civilite_emprunteur") ? _c("span", {
    staticStyle: {
      "font-size": "1.5em",
      color: "red"
    },
    attrs: {
      title: "Valider le champs"
    },
    on: {
      click: function click($event) {
        return _vm.onCheckField(true, "civilite_emprunteur");
      }
    }
  }, [_c("i", {
    staticClass: "icofont-close-circled"
  })]) : _c("span", {
    staticStyle: {
      "font-size": "1.5em",
      color: "green"
    },
    attrs: {
      title: "Invalider le champs"
    },
    on: {
      click: function click($event) {
        return _vm.onCheckField(false, "civilite_emprunteur");
      }
    }
  }, [_c("i", {
    staticClass: "icofont-check-circled"
  })])])]), _vm._v(" "), !_vm.edit_mode ? _c("span", [_c("b", [_vm._v(_vm._s((_vm$formDataToBeWatch2 = _vm.formDataToBeWatched) === null || _vm$formDataToBeWatch2 === void 0 ? void 0 : _vm$formDataToBeWatch2.emprunteur))]), _vm._v(",")]) : _c("div", {
    staticStyle: {
      display: "flex",
      "align-items": "center"
    }
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.emprunteur,
      expression: "formDataToBeWatched.emprunteur"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      placeholder: "Emprunteur",
      id: "emprunteur"
    },
    domProps: {
      value: _vm.formDataToBeWatched.emprunteur
    },
    on: {
      input: [function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formDataToBeWatched, "emprunteur", $event.target.value);
      }, _vm.handleInput]
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "input-group-text input-group-text-right"
  }, [!_vm.checkField("emprunteur") ? _c("span", {
    staticStyle: {
      "font-size": "1.5em",
      color: "red"
    },
    attrs: {
      title: "Valider le champs"
    },
    on: {
      click: function click($event) {
        return _vm.onCheckField(true, "emprunteur");
      }
    }
  }, [_c("i", {
    staticClass: "icofont-close-circled"
  })]) : _c("span", {
    staticStyle: {
      "font-size": "1.5em",
      color: "green"
    },
    attrs: {
      title: "Invalider le champs"
    },
    on: {
      click: function click($event) {
        return _vm.onCheckField(false, "emprunteur");
      }
    }
  }, [_c("i", {
    staticClass: "icofont-check-circled"
  })])])]), _vm._v(" "), !_vm.edit_mode ? _c("span", [_c("b", [_vm._v(_vm._s((_vm$formDataToBeWatch3 = _vm.formDataToBeWatched) === null || _vm$formDataToBeWatch3 === void 0 ? void 0 : _vm$formDataToBeWatch3.profession))]), _vm._v(",")]) : _c("div", {
    staticStyle: {
      display: "flex",
      "align-items": "center"
    }
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.profession,
      expression: "formDataToBeWatched.profession"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      placeholder: "Profession",
      id: "profession"
    },
    domProps: {
      value: _vm.formDataToBeWatched.profession
    },
    on: {
      input: [function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formDataToBeWatched, "profession", $event.target.value);
      }, _vm.handleInput]
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "input-group-text input-group-text-right"
  }, [!_vm.checkField("profession") ? _c("span", {
    staticStyle: {
      "font-size": "1.5em",
      color: "red"
    },
    attrs: {
      title: "Valider le champs"
    },
    on: {
      click: function click($event) {
        return _vm.onCheckField(true, "profession");
      }
    }
  }, [_c("i", {
    staticClass: "icofont-close-circled"
  })]) : _c("span", {
    staticStyle: {
      "font-size": "1.5em",
      color: "green"
    },
    attrs: {
      title: "Invalider le champs"
    },
    on: {
      click: function click($event) {
        return _vm.onCheckField(false, "profession");
      }
    }
  }, [_c("i", {
    staticClass: "icofont-check-circled"
  })])])]), _vm._v(" "), !_vm.edit_mode ? _c("span", [_vm._v(_vm._s((_vm$formDataToBeWatch4 = _vm.formDataToBeWatched) === null || _vm$formDataToBeWatch4 === void 0 ? void 0 : _vm$formDataToBeWatch4.extra_domicilie))]) : _c("div", {
    staticStyle: {
      display: "flex",
      "align-items": "center"
    }
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.extra_domicilie,
      expression: "formDataToBeWatched.extra_domicilie"
    }],
    staticClass: "form-control",
    staticStyle: {
      width: "110px"
    },
    attrs: {
      type: "text",
      placeholder: "domicilié(e)",
      id: "extra_domicilie"
    },
    domProps: {
      value: _vm.formDataToBeWatched.extra_domicilie
    },
    on: {
      input: [function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formDataToBeWatched, "extra_domicilie", $event.target.value);
      }, _vm.handleInput]
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "input-group-text input-group-text-right"
  }, [!_vm.checkField("extra_domicilie") ? _c("span", {
    staticStyle: {
      "font-size": "1.5em",
      color: "red"
    },
    attrs: {
      title: "Valider le champs"
    },
    on: {
      click: function click($event) {
        return _vm.onCheckField(true, "extra_domicilie");
      }
    }
  }, [_c("i", {
    staticClass: "icofont-close-circled"
  })]) : _c("span", {
    staticStyle: {
      "font-size": "1.5em",
      color: "green"
    },
    attrs: {
      title: "Invalider le champs"
    },
    on: {
      click: function click($event) {
        return _vm.onCheckField(false, "extra_domicilie");
      }
    }
  }, [_c("i", {
    staticClass: "icofont-check-circled"
  })])])]), _vm._v("\n\n                             à "), !_vm.edit_mode ? _c("span", [_c("b", [_vm._v(_vm._s((_vm$formDataToBeWatch5 = _vm.formDataToBeWatched) === null || _vm$formDataToBeWatch5 === void 0 ? void 0 : _vm$formDataToBeWatch5.ville_residence))]), _vm._v(",")]) : _c("div", {
    staticStyle: {
      display: "flex",
      "align-items": "center"
    }
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.ville_residence,
      expression: "formDataToBeWatched.ville_residence"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      placeholder: "Ville de résidence",
      id: "ville_residence"
    },
    domProps: {
      value: _vm.formDataToBeWatched.ville_residence
    },
    on: {
      input: [function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formDataToBeWatched, "ville_residence", $event.target.value);
      }, _vm.handleInput]
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "input-group-text input-group-text-right"
  }, [!_vm.checkField("ville_residence") ? _c("span", {
    staticStyle: {
      "font-size": "1.5em",
      color: "red"
    },
    attrs: {
      title: "Valider le champs"
    },
    on: {
      click: function click($event) {
        return _vm.onCheckField(true, "ville_residence");
      }
    }
  }, [_c("i", {
    staticClass: "icofont-close-circled"
  })]) : _c("span", {
    staticStyle: {
      "font-size": "1.5em",
      color: "green"
    },
    attrs: {
      title: "Invalider le champs"
    },
    on: {
      click: function click($event) {
        return _vm.onCheckField(false, "ville_residence");
      }
    }
  }, [_c("i", {
    staticClass: "icofont-check-circled"
  })])])]), _vm._v(" "), !_vm.edit_mode ? _c("span", [_vm._v(_vm._s((_vm$formDataToBeWatch6 = _vm.formDataToBeWatched) === null || _vm$formDataToBeWatch6 === void 0 ? void 0 : _vm$formDataToBeWatch6.extra_ne))]) : _c("div", {
    staticStyle: {
      display: "flex",
      "align-items": "center"
    }
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.extra_ne,
      expression: "formDataToBeWatched.extra_ne"
    }],
    staticClass: "form-control",
    staticStyle: {
      width: "110px"
    },
    attrs: {
      type: "text",
      placeholder: "né(e)",
      id: "extra_ne"
    },
    domProps: {
      value: _vm.formDataToBeWatched.extra_ne
    },
    on: {
      input: [function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formDataToBeWatched, "extra_ne", $event.target.value);
      }, _vm.handleInput]
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "input-group-text input-group-text-right"
  }, [!_vm.checkField("extra_ne") ? _c("span", {
    staticStyle: {
      "font-size": "1.5em",
      color: "red"
    },
    attrs: {
      title: "Valider le champs"
    },
    on: {
      click: function click($event) {
        return _vm.onCheckField(true, "extra_ne");
      }
    }
  }, [_c("i", {
    staticClass: "icofont-close-circled"
  })]) : _c("span", {
    staticStyle: {
      "font-size": "1.5em",
      color: "green"
    },
    attrs: {
      title: "Invalider le champs"
    },
    on: {
      click: function click($event) {
        return _vm.onCheckField(false, "extra_ne");
      }
    }
  }, [_c("i", {
    staticClass: "icofont-check-circled"
  })])])]), _vm._v("\n\n                             le "), !_vm.edit_mode ? _c("span", [_c("b", [_vm._v(_vm._s(_vm._f("formatDate")((_vm$formDataToBeWatch7 = _vm.formDataToBeWatched) === null || _vm$formDataToBeWatch7 === void 0 ? void 0 : _vm$formDataToBeWatch7.date_naissance)))])]) : _c("div", {
    staticStyle: {
      display: "flex",
      "align-items": "center"
    }
  }, [_c("div", {
    staticStyle: {
      width: "230px"
    }
  }, [_c("date-input", {
    attrs: {
      background: "background-color: #ffffad",
      color: "color: #000",
      id: "date_naissance",
      value: _vm.formDataToBeWatched.date_naissance
    },
    on: {
      input: _vm.formDataVars
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "input-group-text input-group-text-right",
    staticStyle: {
      "margin-left": "2px",
      "border-radius": ".375rem"
    }
  }, [!_vm.checkField("date_naissance") ? _c("span", {
    staticStyle: {
      "font-size": "1.5em",
      color: "red"
    },
    attrs: {
      title: "Valider le champs"
    },
    on: {
      click: function click($event) {
        return _vm.onCheckField(true, "date_naissance");
      }
    }
  }, [_c("i", {
    staticClass: "icofont-close-circled"
  })]) : _c("span", {
    staticStyle: {
      "font-size": "1.5em",
      color: "green"
    },
    attrs: {
      title: "Invalider le champs"
    },
    on: {
      click: function click($event) {
        return _vm.onCheckField(false, "date_naissance");
      }
    }
  }, [_c("i", {
    staticClass: "icofont-check-circled"
  })])])]), _vm._v("\n                            \n                            à "), !_vm.edit_mode ? _c("span", [_c("b", [_vm._v(_vm._s((_vm$formDataToBeWatch8 = _vm.formDataToBeWatched) === null || _vm$formDataToBeWatch8 === void 0 ? void 0 : _vm$formDataToBeWatch8.ville_naissance))]), _vm._v(",")]) : _c("div", {
    staticStyle: {
      display: "flex",
      "align-items": "center"
    }
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.ville_naissance,
      expression: "formDataToBeWatched.ville_naissance"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      placeholder: "Ville de naissance",
      id: "ville_naissance"
    },
    domProps: {
      value: _vm.formDataToBeWatched.ville_naissance
    },
    on: {
      input: [function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formDataToBeWatched, "ville_naissance", $event.target.value);
      }, _vm.handleInput]
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "input-group-text input-group-text-right"
  }, [!_vm.checkField("ville_naissance") ? _c("span", {
    staticStyle: {
      "font-size": "1.5em",
      color: "red"
    },
    attrs: {
      title: "Valider le champs"
    },
    on: {
      click: function click($event) {
        return _vm.onCheckField(true, "ville_naissance");
      }
    }
  }, [_c("i", {
    staticClass: "icofont-close-circled"
  })]) : _c("span", {
    staticStyle: {
      "font-size": "1.5em",
      color: "green"
    },
    attrs: {
      title: "Invalider le champs"
    },
    on: {
      click: function click($event) {
        return _vm.onCheckField(false, "ville_naissance");
      }
    }
  }, [_c("i", {
    staticClass: "icofont-check-circled"
  })])])]), _vm._v(" "), !_vm.edit_mode ? _c("span", [_vm._v(_vm._s((_vm$formDataToBeWatch9 = _vm.formDataToBeWatched) === null || _vm$formDataToBeWatch9 === void 0 ? void 0 : _vm$formDataToBeWatch9.pays_naissance) + ",")]) : _c("div", {
    staticStyle: {
      display: "flex",
      "align-items": "center"
    }
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.pays_naissance,
      expression: "formDataToBeWatched.pays_naissance"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      placeholder: "Pays de naissance",
      id: "pays_naissance"
    },
    domProps: {
      value: _vm.formDataToBeWatched.pays_naissance
    },
    on: {
      input: [function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formDataToBeWatched, "pays_naissance", $event.target.value);
      }, _vm.handleInput]
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "input-group-text input-group-text-right"
  }, [!_vm.checkField("pays_naissance") ? _c("span", {
    staticStyle: {
      "font-size": "1.5em",
      color: "red"
    },
    attrs: {
      title: "Valider le champs"
    },
    on: {
      click: function click($event) {
        return _vm.onCheckField(true, "pays_naissance");
      }
    }
  }, [_c("i", {
    staticClass: "icofont-close-circled"
  })]) : _c("span", {
    staticStyle: {
      "font-size": "1.5em",
      color: "green"
    },
    attrs: {
      title: "Invalider le champs"
    },
    on: {
      click: function click($event) {
        return _vm.onCheckField(false, "pays_naissance");
      }
    }
  }, [_c("i", {
    staticClass: "icofont-check-circled"
  })])])]), _vm._v(" "), _c("div", {
    style: _vm.edit_mode ? "display: flex; align-items: center;" : "display: inline"
  }, [_vm._v("Tél. : "), !_vm.edit_mode ? _c("span", [_vm._v("(" + _vm._s((_vm$formDataToBeWatch0 = _vm.formDataToBeWatched) === null || _vm$formDataToBeWatch0 === void 0 ? void 0 : _vm$formDataToBeWatch0.indicatif_telephone) + ") "), _c("b", [_vm._v(_vm._s((_vm$formDataToBeWatch1 = _vm.formDataToBeWatched) === null || _vm$formDataToBeWatch1 === void 0 ? void 0 : _vm$formDataToBeWatch1.telephone))]), _vm._v(",")]) : _c("div", {
    staticStyle: {
      display: "flex",
      "align-items": "center"
    }
  }, [_c("the-mask", {
    staticClass: "form-control",
    staticStyle: {
      width: "160px"
    },
    attrs: {
      mask: _vm.mask_telephone,
      type: "text",
      placeholder: "Téléphone",
      id: "telephone"
    },
    model: {
      value: _vm.formDataToBeWatched.telephone,
      callback: function callback($$v) {
        _vm.$set(_vm.formDataToBeWatched, "telephone", $$v);
      },
      expression: "formDataToBeWatched.telephone"
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "input-group-text input-group-text-right"
  }, [!_vm.checkField("telephone") ? _c("span", {
    staticStyle: {
      "font-size": "1.5em",
      color: "red"
    },
    attrs: {
      title: "Valider le champs"
    },
    on: {
      click: function click($event) {
        return _vm.onCheckField(true, "telephone");
      }
    }
  }, [_c("i", {
    staticClass: "icofont-close-circled"
  })]) : _c("span", {
    staticStyle: {
      "font-size": "1.5em",
      color: "green"
    },
    attrs: {
      title: "Invalider le champs"
    },
    on: {
      click: function click($event) {
        return _vm.onCheckField(false, "telephone");
      }
    }
  }, [_c("i", {
    staticClass: "icofont-check-circled"
  })])])], 1)]), _vm._v(" "), _vm.telephones.length > 0 ? _vm._l(_vm.telephones, function (telephone, indexT) {
    return _c("div", {
      key: "tel" + indexT,
      style: _vm.edit_mode ? "display: flex; align-items: center;" : "display: inline"
    }, [!_vm.edit_mode ? _c("span", [_vm._v("(" + _vm._s(telephone === null || telephone === void 0 ? void 0 : telephone.indicatif) + ") "), _c("b", [_vm._v(_vm._s(telephone.numero))]), _vm._v(", ")]) : _c("div", {
      staticStyle: {
        display: "flex",
        "align-items": "center"
      }
    }, [_c("the-mask", {
      staticClass: "form-control",
      staticStyle: {
        width: "160px"
      },
      attrs: {
        mask: _vm.mask_telephone,
        type: "text",
        placeholder: "Téléphone"
      },
      model: {
        value: telephone.numero,
        callback: function callback($$v) {
          _vm.$set(telephone, "numero", $$v);
        },
        expression: "telephone.numero"
      }
    }), _vm._v(" "), _c("div", {
      staticClass: "input-group-text input-group-text-right"
    }, [!_vm.check_fields["telephone_" + indexT] ? _c("span", {
      staticStyle: {
        "font-size": "1.5em",
        color: "red"
      },
      attrs: {
        title: "Valider le champs"
      },
      on: {
        click: function click($event) {
          return _vm.onCheckField(true, "telephone_" + indexT);
        }
      }
    }, [_c("i", {
      staticClass: "icofont-close-circled"
    })]) : _c("span", {
      staticStyle: {
        "font-size": "1.5em",
        color: "green"
      },
      attrs: {
        title: "Invalider le champs"
      },
      on: {
        click: function click($event) {
          return _vm.onCheckField(false, "telephone_" + indexT);
        }
      }
    }, [_c("i", {
      staticClass: "icofont-check-circled"
    })])]), _vm._v(" "), _c("div", [_c("button", {
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
          return _vm.removeTelephone(indexT);
        }
      }
    }, [_c("trash-icon", {
      staticClass: "custom-class",
      attrs: {
        size: "21"
      }
    })], 1)])], 1)]);
  }) : _vm._e(), _vm._v(" "), _vm.edit_mode ? _c("div", {}, [_c("button", {
    staticStyle: {
      "background-color": "#2c3e50",
      color: "#ffffff",
      "border-radius": "5px",
      border: "none",
      "font-size": "16px"
    },
    attrs: {
      type: "button",
      title: "Ajouter un numéro"
    },
    on: {
      click: function click($event) {
        return _vm.addTelephone();
      }
    }
  }, [_c("plus-icon", {
    staticClass: "custom-class",
    attrs: {
      size: "21"
    }
  }), _vm._v(" Ajouter un numéro\n                                ")], 1)]) : _vm._e(), _vm._v("\n\n                            titulaire "), !_vm.edit_mode ? _c("span", [_c("b", [_vm._v(_vm._s(_vm.getLabelTypePiece((_vm$formDataToBeWatch10 = _vm.formDataToBeWatched) === null || _vm$formDataToBeWatch10 === void 0 ? void 0 : _vm$formDataToBeWatch10.type_piece)))])]) : _c("div", {
    staticStyle: {
      display: "flex",
      "align-items": "center"
    }
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.type_piece,
      expression: "formDataToBeWatched.type_piece"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      placeholder: "Nature de la pièce",
      id: "type_piece"
    },
    domProps: {
      value: _vm.formDataToBeWatched.type_piece
    },
    on: {
      input: [function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formDataToBeWatched, "type_piece", $event.target.value);
      }, _vm.handleInput]
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "input-group-text input-group-text-right"
  }, [!_vm.checkField("type_piece") ? _c("span", {
    staticStyle: {
      "font-size": "1.5em",
      color: "red"
    },
    attrs: {
      title: "Valider le champs"
    },
    on: {
      click: function click($event) {
        return _vm.onCheckField(true, "type_piece");
      }
    }
  }, [_c("i", {
    staticClass: "icofont-close-circled"
  })]) : _c("span", {
    staticStyle: {
      "font-size": "1.5em",
      color: "green"
    },
    attrs: {
      title: "Invalider le champs"
    },
    on: {
      click: function click($event) {
        return _vm.onCheckField(false, "type_piece");
      }
    }
  }, [_c("i", {
    staticClass: "icofont-check-circled"
  })])])]), _vm._v("\n\n                            numéro "), !_vm.edit_mode ? _c("span", [_c("b", [_vm._v(_vm._s((_vm$formDataToBeWatch11 = _vm.formDataToBeWatched) === null || _vm$formDataToBeWatch11 === void 0 ? void 0 : _vm$formDataToBeWatch11.num_piece))])]) : _c("div", {
    staticStyle: {
      display: "flex",
      "align-items": "center"
    }
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.num_piece,
      expression: "formDataToBeWatched.num_piece"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      placeholder: "Numéro de la pièce",
      id: "num_piece"
    },
    domProps: {
      value: _vm.formDataToBeWatched.num_piece
    },
    on: {
      input: [function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formDataToBeWatched, "num_piece", $event.target.value);
      }, _vm.handleInput]
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "input-group-text input-group-text-right"
  }, [!_vm.checkField("num_piece") ? _c("span", {
    staticStyle: {
      "font-size": "1.5em",
      color: "red"
    },
    attrs: {
      title: "Valider le champs"
    },
    on: {
      click: function click($event) {
        return _vm.onCheckField(true, "num_piece");
      }
    }
  }, [_c("i", {
    staticClass: "icofont-close-circled"
  })]) : _c("span", {
    staticStyle: {
      "font-size": "1.5em",
      color: "green"
    },
    attrs: {
      title: "Invalider le champs"
    },
    on: {
      click: function click($event) {
        return _vm.onCheckField(false, "num_piece");
      }
    }
  }, [_c("i", {
    staticClass: "icofont-check-circled"
  })])])]), _vm._v(" "), !_vm.edit_mode ? _c("span", [_vm._v(_vm._s((_vm$formDataToBeWatch12 = _vm.formDataToBeWatched) === null || _vm$formDataToBeWatch12 === void 0 ? void 0 : _vm$formDataToBeWatch12.extra_etablie) + " ")]) : _c("div", {
    staticStyle: {
      display: "flex",
      "align-items": "center"
    }
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.extra_etablie,
      expression: "formDataToBeWatched.extra_etablie"
    }],
    staticClass: "form-control",
    staticStyle: {
      width: "110px"
    },
    attrs: {
      type: "text",
      placeholder: "établi(e)",
      id: "extra_etablie"
    },
    domProps: {
      value: _vm.formDataToBeWatched.extra_etablie
    },
    on: {
      input: [function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formDataToBeWatched, "extra_etablie", $event.target.value);
      }, _vm.handleInput]
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "input-group-text input-group-text-right"
  }, [!_vm.checkField("extra_etablie") ? _c("span", {
    staticStyle: {
      "font-size": "1.5em",
      color: "red"
    },
    attrs: {
      title: "Valider le champs"
    },
    on: {
      click: function click($event) {
        return _vm.onCheckField(true, "extra_etablie");
      }
    }
  }, [_c("i", {
    staticClass: "icofont-close-circled"
  })]) : _c("span", {
    staticStyle: {
      "font-size": "1.5em",
      color: "green"
    },
    attrs: {
      title: "Invalider le champs"
    },
    on: {
      click: function click($event) {
        return _vm.onCheckField(false, "extra_etablie");
      }
    }
  }, [_c("i", {
    staticClass: "icofont-check-circled"
  })])])]), _vm._v("\n\n                             le "), !_vm.edit_mode ? _c("span", [_c("b", [_vm._v(_vm._s(_vm._f("formatDate")((_vm$formDataToBeWatch13 = _vm.formDataToBeWatched) === null || _vm$formDataToBeWatch13 === void 0 ? void 0 : _vm$formDataToBeWatch13.date_delivrance_piece)))])]) : _c("div", {
    staticStyle: {
      display: "flex",
      "align-items": "center"
    }
  }, [_c("div", {
    staticStyle: {
      width: "230px"
    }
  }, [_c("date-input", {
    attrs: {
      background: "background-color: #ffffad",
      color: "color: #000",
      id: "date_delivrance_piece",
      value: _vm.formDataToBeWatched.date_delivrance_piece
    },
    on: {
      input: _vm.formDataVars
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "input-group-text input-group-text-right",
    staticStyle: {
      "margin-left": "2px",
      "border-radius": ".375rem"
    }
  }, [!_vm.checkField("date_delivrance_piece") ? _c("span", {
    staticStyle: {
      "font-size": "1.5em",
      color: "red"
    },
    attrs: {
      title: "Valider le champs"
    },
    on: {
      click: function click($event) {
        return _vm.onCheckField(true, "date_delivrance_piece");
      }
    }
  }, [_c("i", {
    staticClass: "icofont-close-circled"
  })]) : _c("span", {
    staticStyle: {
      "font-size": "1.5em",
      color: "green"
    },
    attrs: {
      title: "Invalider le champs"
    },
    on: {
      click: function click($event) {
        return _vm.onCheckField(false, "date_delivrance_piece");
      }
    }
  }, [_c("i", {
    staticClass: "icofont-check-circled"
  })])])]), _vm._v("\n\n                            et valable jusqu’au "), !_vm.edit_mode ? _c("span", [_c("b", [_vm._v(_vm._s(_vm._f("formatDate")((_vm$formDataToBeWatch14 = _vm.formDataToBeWatched) === null || _vm$formDataToBeWatch14 === void 0 ? void 0 : _vm$formDataToBeWatch14.date_fin_piece)))]), _vm._v(",")]) : _c("div", {
    staticStyle: {
      display: "flex",
      "align-items": "center"
    }
  }, [_c("div", {
    staticStyle: {
      width: "230px"
    }
  }, [_c("date-input", {
    attrs: {
      background: "background-color: #ffffad",
      color: "color: #000",
      id: "date_fin_piece",
      value: _vm.formDataToBeWatched.date_fin_piece
    },
    on: {
      input: _vm.formDataVars
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "input-group-text input-group-text-right",
    staticStyle: {
      "margin-left": "2px",
      "border-radius": ".375rem"
    }
  }, [!_vm.checkField("date_fin_piece") ? _c("span", {
    staticStyle: {
      "font-size": "1.5em",
      color: "red"
    },
    attrs: {
      title: "Valider le champs"
    },
    on: {
      click: function click($event) {
        return _vm.onCheckField(true, "date_fin_piece");
      }
    }
  }, [_c("i", {
    staticClass: "icofont-close-circled"
  })]) : _c("span", {
    staticStyle: {
      "font-size": "1.5em",
      color: "green"
    },
    attrs: {
      title: "Invalider le champs"
    },
    on: {
      click: function click($event) {
        return _vm.onCheckField(false, "date_fin_piece");
      }
    }
  }, [_c("i", {
    staticClass: "icofont-check-circled"
  })])])]), _vm._v("\n\n                            titulaire du compte chèque numéro "), !_vm.edit_mode ? _c("span", [_c("b", [_vm._v(_vm._s((_vm$formDataToBeWatch15 = _vm.formDataToBeWatched) === null || _vm$formDataToBeWatch15 === void 0 ? void 0 : _vm$formDataToBeWatch15.compte_numero))])]) : _c("div", {
    staticStyle: {
      display: "flex",
      "align-items": "center"
    }
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.compte_numero,
      expression: "formDataToBeWatched.compte_numero"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      placeholder: "Numéro de compte",
      id: "compte_numero"
    },
    domProps: {
      value: _vm.formDataToBeWatched.compte_numero
    },
    on: {
      input: [function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formDataToBeWatched, "compte_numero", $event.target.value);
      }, _vm.handleInput]
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "input-group-text input-group-text-right"
  }, [!_vm.checkField("compte_numero") ? _c("span", {
    staticStyle: {
      "font-size": "1.5em",
      color: "red"
    },
    attrs: {
      title: "Valider le champs"
    },
    on: {
      click: function click($event) {
        return _vm.onCheckField(true, "compte_numero");
      }
    }
  }, [_c("i", {
    staticClass: "icofont-close-circled"
  })]) : _c("span", {
    staticStyle: {
      "font-size": "1.5em",
      color: "green"
    },
    attrs: {
      title: "Invalider le champs"
    },
    on: {
      click: function click($event) {
        return _vm.onCheckField(false, "compte_numero");
      }
    }
  }, [_c("i", {
    staticClass: "icofont-check-circled"
  })])])]), _vm._v(" ;\n\n                        ")], 2), _c("br")]), _vm._v(" "), _vm._m(4), _vm._v(" "), _c("div", {
    staticClass: "text-right"
  }, [_vm._v("D’une part ;")]), _vm._v(" "), _vm._m(5), _c("br"), _vm._v(" "), _c("div", [_c("b", [_vm._v(_vm._s((_vm$banque = _vm.banque) === null || _vm$banque === void 0 ? void 0 : _vm$banque.denomination))]), _vm._v(", en abrégé "), _c("b", [_vm._v(_vm._s((_vm$banque2 = _vm.banque) === null || _vm$banque2 === void 0 ? void 0 : _vm$banque2.abrege))]), _vm._v(", " + _vm._s((_vm$banque3 = _vm.banque) === null || _vm$banque3 === void 0 ? void 0 : _vm$banque3.forme_juridique) + " au capital de " + _vm._s((_vm$banque4 = _vm.banque) === null || _vm$banque4 === void 0 ? void 0 : _vm$banque4.capital) + " " + _vm._s((_vm$banque5 = _vm.banque) === null || _vm$banque5 === void 0 ? void 0 : _vm$banque5.monnaie) + ", dont le siège social est sis à " + _vm._s((_vm$banque6 = _vm.banque) === null || _vm$banque6 === void 0 ? void 0 : _vm$banque6.adresse) + " ayant pour principal Etablissement " + _vm._s((_vm$banque7 = _vm.banque) === null || _vm$banque7 === void 0 ? void 0 : _vm$banque7.etablissement_social) + ", " + _vm._s((_vm$banque8 = _vm.banque) === null || _vm$banque8 === void 0 ? void 0 : _vm$banque8.adresse_postal) + ", Tél : " + _vm._s((_vm$banque9 = _vm.banque) === null || _vm$banque9 === void 0 ? void 0 : _vm$banque9.telephone) + " ; Fax : " + _vm._s((_vm$banque0 = _vm.banque) === null || _vm$banque0 === void 0 ? void 0 : _vm$banque0.fax) + ", immatriculée au Registre du Commerce et du Crédit Mobilier d’Abidjan sous le n° " + _vm._s((_vm$banque1 = _vm.banque) === null || _vm$banque1 === void 0 ? void 0 : _vm$banque1.rccm) + ", inscrite sur la Liste des Banques de Côte d’Ivoire (LBCI) sous le n° " + _vm._s((_vm$banque10 = _vm.banque) === null || _vm$banque10 === void 0 ? void 0 : _vm$banque10.numero_inscription_banque) + ", agréée en qualité de Banque par arrêté n° " + _vm._s((_vm$banque11 = _vm.banque) === null || _vm$banque11 === void 0 ? void 0 : _vm$banque11.agreement) + " pris par le Ministre de l’Economie et des Finances, titulaire du Compte Contribuable n° " + _vm._s((_vm$banque12 = _vm.banque) === null || _vm$banque12 === void 0 ? void 0 : _vm$banque12.ncc) + ", représentée par son "), _c("b", [_vm._v("Directeur Général, " + _vm._s((_vm$banque13 = _vm.banque) === null || _vm$banque13 === void 0 ? void 0 : _vm$banque13.civilite_dg) + " " + _vm._s((_vm$banque14 = _vm.banque) === null || _vm$banque14 === void 0 ? void 0 : _vm$banque14.nom_prenom_dg))]), _vm._v(", dûment habilité aux fins des présentes et de leurs suites en vertu des délibérations du Conseil d’Administration du " + _vm._s((_vm$banque15 = _vm.banque) === null || _vm$banque15 === void 0 ? void 0 : _vm$banque15.date_deliberation_ca) + ";\n                    ")]), _c("br"), _vm._v(" "), _c("div", [!_vm.edit_mode ? _c("span", {
    domProps: {
      innerHTML: _vm._s(_vm.formDataToBeWatched.text_signataire)
    }
  }) : _c("div", [_c("vue-editor", {
    attrs: {
      id: "text_signataire"
    },
    on: {
      "update-value": function updateValue($event) {
        _vm.formDataToBeWatched[$event[0]] = $event[1];
      }
    },
    model: {
      value: _vm.formDataToBeWatched.text_signataire,
      callback: function callback($$v) {
        _vm.$set(_vm.formDataToBeWatched, "text_signataire", $$v);
      },
      expression: "formDataToBeWatched.text_signataire"
    }
  }), _vm._v(" "), _c("small", [_vm._v("(NB : Indiquer les signataires pour le compte de la Banque suivant les différents pouvoirs)")])], 1)]), _c("br"), _c("br"), _vm._v(" "), _vm._m(6), _vm._v(" "), _c("div", {
    staticClass: "text-right"
  }, [_vm._v("D’autre part ;")]), _vm._v(" "), _vm._m(7), _c("br"), _vm._v(" "), _vm._m(8), _c("br"), _vm._v(" "), _c("div", {
    staticClass: "fw-bold"
  }, [_vm._v("Article 1 : ")]), _vm._v(" "), _c("div", {
    staticStyle: {
      position: "relative"
    }
  }, [_vm.edit_mode ? _c("div", {
    staticStyle: {
      position: "absolute",
      top: "180px",
      right: "-253px",
      cursor: "pointer"
    }
  }, [!_vm.checkField("article_1") ? _c("span", {
    staticStyle: {
      "font-size": "1.2em",
      color: "red"
    },
    on: {
      click: function click($event) {
        return _vm.onCheckField(true, "article_1");
      }
    }
  }, [_c("i", {
    staticClass: "icofont-close-circled"
  }), _vm._v(" Valider l'article 1")]) : _c("span", {
    staticStyle: {
      "font-size": "1.2em",
      color: "green"
    },
    on: {
      click: function click($event) {
        return _vm.onCheckField(false, "article_1");
      }
    }
  }, [_c("i", {
    staticClass: "icofont-check-circled"
  }), _vm._v(" Valider l'article 1")])]) : _vm._e()]), _vm._v(" "), _c(_vm.edit_mode ? "span" : "div", {
    tag: "component",
    "class": !_vm.edit_mode ? "to-span" : ""
  }, [_vm._v("A la sûreté et garantie du remboursement de toutes sommes qu’il doit ou pourrait devoir à la "), _c("b", [_vm._v("Banque")]), _vm._v(", soit seul, soit conjointement avec un ou plusieurs tiers, en principal, intérêts, commissions, frais et accessoires à quelque titre que ce soit et pour quelle que cause que ce soit, du chef de toutes opérations de banque ou de tous services bancaires des ")]), _vm._v(" "), _c(_vm.edit_mode ? "span" : "div", {
    tag: "component",
    "class": !_vm.edit_mode ? "to-span" : ""
  }, [_vm._v("obligations qu'elle pourrait contracter en qualité de caution ou de actuels et/ou futurs quelle qu’en soit la nature, y compris ceux résultant de l'exécution par ladite "), _c("b", [_vm._v("Banque")])]), _vm._v(" "), _c(_vm.edit_mode ? "span" : "div", {
    tag: "component",
    "class": !_vm.edit_mode ? "to-span" : ""
  }, [_vm._v("garant du Client ou découlant pour elle du respect de ses engagements par signature délivrés au bénéfice du "), _c("b", [_vm._v("Client")]), _vm._v(" ou de quiconque sur ses instructions, comme de tous ")]), _vm._v(" "), _c(_vm.edit_mode ? "span" : "div", {
    tag: "component",
    "class": !_vm.edit_mode ? "to-span" : ""
  }, [_vm._v("engagements de cautionnements pris par le "), _c("b", [_vm._v("Client")]), _vm._v(" en faveur de la susdite "), _c("b", [_vm._v("Banque")]), _vm._v(", et plus particulièrement la ligne de crédits utilisable sous la forme d’un ")]), _vm._v(" "), _c(_vm.edit_mode ? "span" : "div", {
    tag: "component",
    "class": !_vm.edit_mode ? "to-span" : "",
    style: _vm.edit_mode ? "display: ruby; text-align: left;" : ""
  }, [!_vm.edit_mode ? _c("span", [_c("b", [_vm._v(_vm._s((_vm$formDataToBeWatch16 = _vm.formDataToBeWatched) === null || _vm$formDataToBeWatch16 === void 0 ? void 0 : _vm$formDataToBeWatch16.type_credit))])]) : _c("div", {
    staticStyle: {
      display: "flex",
      "align-items": "center"
    }
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.type_credit,
      expression: "formDataToBeWatched.type_credit"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      placeholder: "Type de crédit",
      id: "type_credit"
    },
    domProps: {
      value: _vm.formDataToBeWatched.type_credit
    },
    on: {
      input: [function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formDataToBeWatched, "type_credit", $event.target.value);
      }, _vm.handleInput]
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "input-group-text input-group-text-right"
  }, [!_vm.checkField("type_credit") ? _c("span", {
    staticStyle: {
      "font-size": "1.5em",
      color: "red"
    },
    attrs: {
      title: "Valider le champs"
    },
    on: {
      click: function click($event) {
        return _vm.onCheckField(true, "type_credit");
      }
    }
  }, [_c("i", {
    staticClass: "icofont-close-circled"
  })]) : _c("span", {
    staticStyle: {
      "font-size": "1.5em",
      color: "green"
    },
    attrs: {
      title: "Invalider le champs"
    },
    on: {
      click: function click($event) {
        return _vm.onCheckField(false, "type_credit");
      }
    }
  }, [_c("i", {
    staticClass: "icofont-check-circled"
  })])])]), _vm._v("\n                        d’un montant de \n                        "), !_vm.edit_mode ? _c("span", [_c("b", [_c("span", {
    staticStyle: {
      "text-transform": "uppercase"
    }
  }, [_vm._v(_vm._s(_vm.convertirEnLettres((_vm$formDataToBeWatch17 = _vm.formDataToBeWatched) === null || _vm$formDataToBeWatch17 === void 0 ? void 0 : _vm$formDataToBeWatch17.montant_approuve)))]), _vm._v(" (" + _vm._s(_vm.formatAmount((_vm$formDataToBeWatch18 = _vm.formDataToBeWatched) === null || _vm$formDataToBeWatch18 === void 0 ? void 0 : _vm$formDataToBeWatch18.montant_approuve)) + ") Francs CFA")])]) : _c("div", {
    staticStyle: {
      display: "flex",
      "align-items": "center"
    }
  }, [_c("currency-input2", {
    attrs: {
      id: "montant_approuve",
      value: _vm.formDataToBeWatched.montant_approuve
    },
    on: {
      input: _vm.formDataVars
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "input-group-text input-group-text-right"
  }, [!_vm.checkField("montant_approuve") ? _c("span", {
    staticStyle: {
      "font-size": "1.5em",
      color: "red"
    },
    attrs: {
      title: "Valider le champs"
    },
    on: {
      click: function click($event) {
        return _vm.onCheckField(true, "montant_approuve");
      }
    }
  }, [_c("i", {
    staticClass: "icofont-close-circled"
  })]) : _c("span", {
    staticStyle: {
      "font-size": "1.5em",
      color: "green"
    },
    attrs: {
      title: "Invalider le champs"
    },
    on: {
      click: function click($event) {
        return _vm.onCheckField(false, "montant_approuve");
      }
    }
  }, [_c("i", {
    staticClass: "icofont-check-circled"
  })])]), _vm._v("\n                            Francs CFA\n                        ")], 1), _vm._v("\n                        en principal, qu’elle lui a octroyé,\n                    ")]), _vm._v(" "), _c(_vm.edit_mode ? "span" : "div", {
    tag: "component",
    "class": !_vm.edit_mode ? "to-span" : "",
    style: _vm.edit_mode ? "display: ruby; text-align: left;" : ""
  }, [_vm._v("\n                        le "), _c("b", [_vm._v("Client")]), _vm._v(" affecte irrévocablement à titre de nantissement et dans les conditions prévues aux articles 127 et suivants de l'Acte Uniforme de l’OHADA portant Organisation des Sûretés (ci-après désigné « "), _c("b", [_vm._v("l’Acte Uniforme")]), _vm._v(" ») au profit de la "), _c("b", [_vm._v("Banque")]), _vm._v(" qui accepte, \n                    ")]), _vm._v(" "), _c(_vm.edit_mode ? "span" : "div", {
    tag: "component",
    "class": !_vm.edit_mode ? "to-span" : "",
    style: _vm.edit_mode ? "display: ruby; text-align: left;" : ""
  }, [_vm._v("tous les avoirs figurant ou qui figureront ultérieurement au crédit du compte "), !_vm.edit_mode ? _c("span", [_c("b", [_vm._v(_vm._s((_vm$formDataToBeWatch19 = _vm.formDataToBeWatched) === null || _vm$formDataToBeWatch19 === void 0 ? void 0 : _vm$formDataToBeWatch19.au_credit_du_compte))])]) : _c("div", {
    staticStyle: {
      display: "flex",
      "align-items": "center"
    }
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.au_credit_du_compte,
      expression: "formDataToBeWatched.au_credit_du_compte"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      placeholder: "Nature du compte",
      id: "au_credit_du_compte"
    },
    domProps: {
      value: _vm.formDataToBeWatched.au_credit_du_compte
    },
    on: {
      input: [function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formDataToBeWatched, "au_credit_du_compte", $event.target.value);
      }, _vm.handleInput]
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "input-group-text input-group-text-right"
  }, [!_vm.checkField("au_credit_du_compte") ? _c("span", {
    staticStyle: {
      "font-size": "1.5em",
      color: "red"
    },
    attrs: {
      title: "Valider le champs"
    },
    on: {
      click: function click($event) {
        return _vm.onCheckField(true, "au_credit_du_compte");
      }
    }
  }, [_c("i", {
    staticClass: "icofont-close-circled"
  })]) : _c("span", {
    staticStyle: {
      "font-size": "1.5em",
      color: "green"
    },
    attrs: {
      title: "Invalider le champs"
    },
    on: {
      click: function click($event) {
        return _vm.onCheckField(false, "au_credit_du_compte");
      }
    }
  }, [_c("i", {
    staticClass: "icofont-check-circled"
  })])])]), _vm._v("\n                        numéro "), !_vm.edit_mode ? _c("span", [_c("b", [_vm._v(_vm._s((_vm$formDataToBeWatch20 = _vm.formDataToBeWatched) === null || _vm$formDataToBeWatch20 === void 0 ? void 0 : _vm$formDataToBeWatch20.numero_de_compte_nanti))])]) : _c("div", {
    staticStyle: {
      display: "flex",
      "align-items": "center"
    }
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.numero_de_compte_nanti,
      expression: "formDataToBeWatched.numero_de_compte_nanti"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      placeholder: "Numéro de compte",
      id: "numero_de_compte_nanti"
    },
    domProps: {
      value: _vm.formDataToBeWatched.numero_de_compte_nanti
    },
    on: {
      input: [function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formDataToBeWatched, "numero_de_compte_nanti", $event.target.value);
      }, _vm.handleInput]
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "input-group-text input-group-text-right"
  }, [!_vm.checkField("numero_de_compte_nanti") ? _c("span", {
    staticStyle: {
      "font-size": "1.5em",
      color: "red"
    },
    attrs: {
      title: "Valider le champs"
    },
    on: {
      click: function click($event) {
        return _vm.onCheckField(true, "numero_de_compte_nanti");
      }
    }
  }, [_c("i", {
    staticClass: "icofont-close-circled"
  })]) : _c("span", {
    staticStyle: {
      "font-size": "1.5em",
      color: "green"
    },
    attrs: {
      title: "Invalider le champs"
    },
    on: {
      click: function click($event) {
        return _vm.onCheckField(false, "numero_de_compte_nanti");
      }
    }
  }, [_c("i", {
    staticClass: "icofont-check-circled"
  })])])]), _vm._v("\n                        ouvert en son nom dans les livres de la "), _c("b", [_vm._v("Banque")]), _vm._v(" (Ci-après, le "), _c("b", [_vm._v("« Compte Nanti »")]), _vm._v(").\n                    ")]), _c("br"), _c("br"), _vm._v(" "), _c("div", {
    staticClass: "fw-bold"
  }, [_vm._v("Article 2 : ")]), _vm._v(" "), _c("div", {
    staticStyle: {
      position: "relative"
    }
  }, [_vm.edit_mode ? _c("div", {
    staticStyle: {
      position: "absolute",
      top: "80px",
      right: "-253px",
      cursor: "pointer"
    }
  }, [!_vm.checkField("article_2") ? _c("span", {
    staticStyle: {
      "font-size": "1.2em",
      color: "red"
    },
    on: {
      click: function click($event) {
        return _vm.onCheckField(true, "article_2");
      }
    }
  }, [_c("i", {
    staticClass: "icofont-close-circled"
  }), _vm._v(" Valider l'article 2")]) : _c("span", {
    staticStyle: {
      "font-size": "1.2em",
      color: "green"
    },
    on: {
      click: function click($event) {
        return _vm.onCheckField(false, "article_2");
      }
    }
  }, [_c("i", {
    staticClass: "icofont-check-circled"
  }), _vm._v(" Valider l'article 2")])]) : _vm._e(), _vm._v(" "), _c("div", {
    style: _vm.edit_mode ? "display: ruby; text-align: left;" : ""
  }, [_vm._v("\n                            Le présent nantissement est consenti pour un montant de "), !_vm.edit_mode ? _c("span", [_c("b", [_vm._v(_vm._s(_vm.convertirEnLettres((_vm$formDataToBeWatch21 = _vm.formDataToBeWatched) === null || _vm$formDataToBeWatch21 === void 0 ? void 0 : _vm$formDataToBeWatch21.montant_nantissement_compte)) + " (" + _vm._s(_vm.formatAmount((_vm$formDataToBeWatch22 = _vm.formDataToBeWatched) === null || _vm$formDataToBeWatch22 === void 0 ? void 0 : _vm$formDataToBeWatch22.montant_nantissement_compte)) + ") de FRANCS CFA ")])]) : _c("div", {
    staticStyle: {
      display: "flex",
      "align-items": "center"
    }
  }, [_c("currency-input2", {
    attrs: {
      id: "montant_nantissement_compte",
      value: _vm.formDataToBeWatched.montant_nantissement_compte
    },
    on: {
      input: _vm.formDataVars
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "input-group-text input-group-text-right"
  }, [!_vm.checkField("montant_nantissement_compte") ? _c("span", {
    staticStyle: {
      "font-size": "1.5em",
      color: "red"
    },
    attrs: {
      title: "Valider le champs"
    },
    on: {
      click: function click($event) {
        return _vm.onCheckField(true, "montant_nantissement_compte");
      }
    }
  }, [_c("i", {
    staticClass: "icofont-close-circled"
  })]) : _c("span", {
    staticStyle: {
      "font-size": "1.5em",
      color: "green"
    },
    attrs: {
      title: "Invalider le champs"
    },
    on: {
      click: function click($event) {
        return _vm.onCheckField(false, "montant_nantissement_compte");
      }
    }
  }, [_c("i", {
    staticClass: "icofont-check-circled"
  })])]), _vm._v(" \n                                de FRANCS CFA\n                            ")], 1), _vm._v(" "), !_vm.edit_mode ? _c("span", [_vm._v(_vm._s((_vm$formDataToBeWatch23 = _vm.formDataToBeWatched) === null || _vm$formDataToBeWatch23 === void 0 ? void 0 : _vm$formDataToBeWatch23.extra_nantissement))]) : _c("div", {
    staticStyle: {
      display: "flex",
      "align-items": "center"
    }
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.extra_nantissement,
      expression: "formDataToBeWatched.extra_nantissement"
    }],
    staticClass: "form-control",
    staticStyle: {
      width: "320px"
    },
    attrs: {
      type: "text",
      placeholder: "Autres informations",
      id: "extra_nantissement"
    },
    domProps: {
      value: _vm.formDataToBeWatched.extra_nantissement
    },
    on: {
      input: [function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formDataToBeWatched, "extra_nantissement", $event.target.value);
      }, _vm.handleInput]
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "input-group-text input-group-text-right"
  }, [!_vm.checkField("extra_nantissement") ? _c("span", {
    staticStyle: {
      "font-size": "1.5em",
      color: "red"
    },
    attrs: {
      title: "Valider le champs"
    },
    on: {
      click: function click($event) {
        return _vm.onCheckField(true, "extra_nantissement");
      }
    }
  }, [_c("i", {
    staticClass: "icofont-close-circled"
  })]) : _c("span", {
    staticStyle: {
      "font-size": "1.5em",
      color: "green"
    },
    attrs: {
      title: "Invalider le champs"
    },
    on: {
      click: function click($event) {
        return _vm.onCheckField(false, "extra_nantissement");
      }
    }
  }, [_c("i", {
    staticClass: "icofont-check-circled"
  })])])]), _vm._v("\n                            à augmenter des intérêts. De convention expresse, tous les droits du Constituant sur tous montants portés au crédit et au débit du "), _c("b", [_vm._v("Compte Nanti")]), _vm._v(" seront automatiquement compris dans l'assiette du nantissement ainsi que les intérêts y afférents. Les sommes nanties sont bloquées au profit de la "), _c("b", [_vm._v("Banque")]), _vm._v(", au titre du présent nantissement. Le "), _c("b", [_vm._v("Client")]), _vm._v(" s’interdit en conséquence, aussi longtemps que les sommes nanties seront affectées à la garantie de ses engagements à l’égard de la "), _c("b", [_vm._v("Banque")]), _vm._v(", d’en disposer de quelle que manière que ce soit.\n                        ")]), _c("br"), _c("br")]), _vm._v(" "), _c("div", {
    staticClass: "fw-bold"
  }, [_vm._v("Article 3 : ")]), _vm._v(" "), _vm._m(9), _c("br"), _c("br"), _vm._v(" "), _c("div", {
    staticClass: "fw-bold"
  }, [_vm._v("Article 4 : ")]), _vm._v(" "), _c("div", [_vm._v("\n                        La présente sûreté reste valable quelle que soit la date de naissance de l'engagement, \n                    ")]), _vm._v(" "), _c("div", [_vm._v("    \n                        même s'il est postérieur au présent nantissement et ce malgré l'absence de toute stipulation contractuelle dans ce sens.\n                    ")]), _c("br"), _c("br"), _vm._v(" "), _c("div", {
    staticClass: "fw-bold"
  }, [_vm._v("Article 5 : ")]), _vm._v(" "), _c(_vm.edit_mode ? "span" : "div", {
    tag: "component",
    "class": !_vm.edit_mode ? "to-span" : ""
  }, [_vm._v("Le présent nantissement reste également valable quelle que soit la nature de l'engagement ")]), _vm._v(" "), _c(_vm.edit_mode ? "span" : "div", {
    tag: "component",
    "class": !_vm.edit_mode ? "to-span" : ""
  }, [_vm._v("et des comptes nantis, les sièges, succursales ou agences de la "), _c("b", [_vm._v("Banque")]), _vm._v(" en quelque pays où la dette ou l'engagement est inscrit, et notamment du chef de l'utilisation de tout crédit qui lui est ou lui sera accordé soit en permanence soit occasionnellement, dans la limite du montant nanti, sans qu’il ait besoin de signer une stipulation contractuelle particulière.")]), _c("br"), _c("br"), _vm._v(" "), _c("div", {
    staticClass: "fw-bold"
  }, [_vm._v("Article 6 :")]), _vm._v(" "), _vm._m(10), _vm._v(" "), _c("div", [_vm._v("\n                        survenance de son terme ou pour tous autres motifs, les sommes qui y figureront seront virées immédiatement dans un compte spécial dit de “Garantie” dont le solde constituera lui-même le nantissement de la Banque au même titre et aux mêmes fins que ci-dessus. En cas de renouvellement dudit compte à son échéance ou ultérieurement, le présent nantissement sera reporté de plein droit sur le ou les nouveaux comptes ouverts au nom du Client. Un avenant à la convention de nantissement de compte bancaire sera établi pour la constitution du nantissement du ou des nouveaux comptes.\n                    ")]), _c("br"), _c("br"), _vm._v(" "), _c("div", {
    staticClass: "fw-bold"
  }, [_vm._v("Article 7 : ")]), _vm._v(" "), _c("div", [_vm._v("\n                        Toutefois le Client pourra avec l'accord de la Banque demander l'ouverture de nouveaux comptes en remplacement du ou des comptes nantis par le présent acte. Ce ou ces nouveaux comptes ainsi que tous les intérêts et revenus quels qu'ils soient rentreront alors dans l'assiette du nantissement. Un avenant à la convention de nantissement de ce ou ces comptes sera établi pour la constitution du nantissement du ou des nouveaux comptes.\n                    ")]), _c("br"), _c("br"), _vm._v(" "), _c("div", {
    staticClass: "fw-bold"
  }, [_vm._v("Article 8 : ")]), _vm._v(" "), _vm._m(11), _c("br"), _c("br"), _vm._v(" "), _c("div", {
    staticClass: "fw-bold"
  }, [_vm._v("Article 9 : ")]), _vm._v(" "), _vm._m(12), _c("br"), _c("br"), _vm._v(" "), _c("div", {
    staticClass: "fw-bold"
  }, [_vm._v("Article 10 : ")]), _vm._v(" "), _vm._m(13), _vm._v(" "), _c("div", [_vm._v("\n                        Cette compensation conventionnelle s’opèrera nonobstant le terme ou les conditions affectant certains des comptes.\n                    ")]), _c("br"), _c("br"), _vm._v(" "), _c("div", {
    staticClass: "fw-bold"
  }, [_vm._v("Article 11 : ")]), _vm._v(" "), _vm._m(14), _c("br"), _c("br"), _vm._v(" "), _c("div", {
    staticClass: "fw-bold"
  }, [_vm._v("Article 12 : ")]), _vm._v(" "), _vm._m(15), _c("br"), _c("br"), _vm._v(" "), _c("div", {
    staticClass: "fw-bold"
  }, [_vm._v("Article 13 : ")]), _vm._v(" "), _vm._m(16), _c("br"), _c("br"), _vm._v(" "), _c("div", {
    staticClass: "fw-bold"
  }, [_vm._v("Article 14 : ")]), _vm._v(" "), _vm._m(17), _c("br"), _c("br"), _vm._v(" "), _c("div", {
    staticClass: "fw-bold"
  }, [_vm._v("Article 15 : ")]), _vm._v(" "), _vm._m(18), _vm._v(" "), _vm._m(19), _c("br"), _c("br"), _vm._v(" "), _c("div", {
    staticClass: "fw-bold"
  }, [_vm._v("Article 16 : ")]), _vm._v(" "), _vm._m(20), _vm._v(" "), _vm._m(21), _c("br"), _c("br"), _vm._v(" "), _c("div", {
    staticClass: "fw-bold"
  }, [_vm._v("Article 17 : ")]), _vm._v(" "), _c("div", [_vm._v("\n                        La présente affectation en nantissement est soumise aux Actes Uniformes de l’OHADA et aux dispositions légales en vigueur en Côte d’Ivoire mais non contraire à celles de l’OHADA, et le Tribunal de Commerce d’Abidjan est seul compétent pour connaître des différends qui pourraient surgir à l’occasion de l’interprétation ou de l’exécution des présentes.\n                    ")]), _c("br"), _c("br"), _vm._v(" "), _c("div", [_vm._m(22), _vm._v(" "), _c("div", [_c("table", {
    staticStyle: {
      width: "100%"
    }
  }, [_c("tr", [_c("td", {
    staticStyle: {
      width: "60%",
      "vertical-align": "top"
    }
  }, [_c("div", {
    staticClass: "text-center",
    staticStyle: {
      padding: "10px 0 120px 0px"
    }
  }, [_c("b", [_vm._v("Le Client")]), _c("br"), _vm._v(" "), _c("div", {
    staticStyle: {
      "font-size": "0.7em"
    },
    style: _vm.edit_mode ? "display: ruby; text-align: left;" : ""
  }, [_vm._v("\n                                                (Mention manuscrite « Bon pour affectation en nantissement du solde de mon compte \n                                                "), !_vm.edit_mode ? _c("span", [_vm._v(_vm._s((_vm$formDataToBeWatch24 = _vm.formDataToBeWatched) === null || _vm$formDataToBeWatch24 === void 0 ? void 0 : _vm$formDataToBeWatch24.extra_mention_nature_compte))]) : _c("div", {
    staticStyle: {
      display: "flex",
      "align-items": "center"
    }
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.extra_mention_nature_compte,
      expression: "formDataToBeWatched.extra_mention_nature_compte"
    }],
    staticClass: "form-control",
    staticStyle: {
      width: "150px"
    },
    attrs: {
      type: "text",
      placeholder: "Nature du compte",
      id: "extra_mention_nature_compte"
    },
    domProps: {
      value: _vm.formDataToBeWatched.extra_mention_nature_compte
    },
    on: {
      input: [function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formDataToBeWatched, "extra_mention_nature_compte", $event.target.value);
      }, _vm.handleInput]
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "input-group-text input-group-text-right"
  }, [!_vm.checkField("extra_mention_nature_compte") ? _c("span", {
    staticStyle: {
      "font-size": "1.5em",
      color: "red"
    },
    attrs: {
      title: "Valider le champs"
    },
    on: {
      click: function click($event) {
        return _vm.onCheckField(true, "extra_mention_nature_compte");
      }
    }
  }, [_c("i", {
    staticClass: "icofont-close-circled"
  })]) : _c("span", {
    staticStyle: {
      "font-size": "1.5em",
      color: "green"
    },
    attrs: {
      title: "Invalider le champs"
    },
    on: {
      click: function click($event) {
        return _vm.onCheckField(false, "extra_mention_nature_compte");
      }
    }
  }, [_c("i", {
    staticClass: "icofont-check-circled"
  })])])]), _vm._v("\n                                                N°\n                                                "), !_vm.edit_mode ? _c("span", [_vm._v(_vm._s((_vm$formDataToBeWatch25 = _vm.formDataToBeWatched) === null || _vm$formDataToBeWatch25 === void 0 ? void 0 : _vm$formDataToBeWatch25.extra_mention_numero_compte))]) : _c("div", {
    staticStyle: {
      display: "flex",
      "align-items": "center"
    }
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.extra_mention_numero_compte,
      expression: "formDataToBeWatched.extra_mention_numero_compte"
    }],
    staticClass: "form-control",
    staticStyle: {
      width: "150px"
    },
    attrs: {
      type: "text",
      placeholder: "Numéro de compte",
      id: "extra_mention_numero_compte"
    },
    domProps: {
      value: _vm.formDataToBeWatched.extra_mention_numero_compte
    },
    on: {
      input: [function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formDataToBeWatched, "extra_mention_numero_compte", $event.target.value);
      }, _vm.handleInput]
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "input-group-text input-group-text-right"
  }, [!_vm.checkField("extra_mention_numero_compte") ? _c("span", {
    staticStyle: {
      "font-size": "1.5em",
      color: "red"
    },
    attrs: {
      title: "Valider le champs"
    },
    on: {
      click: function click($event) {
        return _vm.onCheckField(true, "extra_mention_numero_compte");
      }
    }
  }, [_c("i", {
    staticClass: "icofont-close-circled"
  })]) : _c("span", {
    staticStyle: {
      "font-size": "1.5em",
      color: "green"
    },
    attrs: {
      title: "Invalider le champs"
    },
    on: {
      click: function click($event) {
        return _vm.onCheckField(false, "extra_mention_numero_compte");
      }
    }
  }, [_c("i", {
    staticClass: "icofont-check-circled"
  })])])]), _vm._v(" \n                                                comme indiqué ci-dessus à hauteur de \n                                                "), !_vm.edit_mode ? _c("span", [_vm._v(_vm._s((_vm$formDataToBeWatch26 = _vm.formDataToBeWatched) === null || _vm$formDataToBeWatch26 === void 0 ? void 0 : _vm$formDataToBeWatch26.extra_mention_autre))]) : _c("div", {
    staticStyle: {
      display: "flex",
      "align-items": "center"
    }
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.extra_mention_autre,
      expression: "formDataToBeWatched.extra_mention_autre"
    }],
    staticClass: "form-control",
    staticStyle: {
      width: "360px"
    },
    attrs: {
      type: "text",
      placeholder: "Montant F CFAXXX (en chiffres et en + lettres)",
      id: "extra_mention_autre"
    },
    domProps: {
      value: _vm.formDataToBeWatched.extra_mention_autre
    },
    on: {
      input: [function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formDataToBeWatched, "extra_mention_autre", $event.target.value);
      }, _vm.handleInput]
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "input-group-text input-group-text-right"
  }, [!_vm.checkField("extra_mention_autre") ? _c("span", {
    staticStyle: {
      "font-size": "1.5em",
      color: "red"
    },
    attrs: {
      title: "Valider le champs"
    },
    on: {
      click: function click($event) {
        return _vm.onCheckField(true, "extra_mention_autre");
      }
    }
  }, [_c("i", {
    staticClass: "icofont-close-circled"
  })]) : _c("span", {
    staticStyle: {
      "font-size": "1.5em",
      color: "green"
    },
    attrs: {
      title: "Invalider le champs"
    },
    on: {
      click: function click($event) {
        return _vm.onCheckField(false, "extra_mention_autre");
      }
    }
  }, [_c("i", {
    staticClass: "icofont-check-circled"
  })])])]), _vm._v("\n                                                augmenté de tous montants crédités, des intérêts, commissions, frais et accessoires » + Signature + Nom/Prénom(s))\n                                            ")])])]), _vm._v(" "), _c("td", {
    staticStyle: {
      width: "30%"
    }
  }), _vm._v(" "), _vm._m(23)])])])])], 1)])]), _vm._v(" "), !_vm.edit_mode ? _c("div", {
    staticStyle: {
      "text-align": "justify"
    }
  }, [_c("div", {
    staticStyle: {
      width: "714px",
      height: "1040px",
      margin: "50px auto",
      "box-sizing": "border-box",
      border: "1px solid rgb(221, 221, 221)",
      background: "white",
      position: "relative"
    },
    attrs: {
      id: "preloader-content"
    }
  })]) : _vm._e(), _vm._v(" "), _c("div", {
    ref: "contentToPdf",
    staticStyle: {
      "text-align": "justify"
    },
    attrs: {
      id: "printable"
    }
  })])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "d-flex justify-content-center text-center align-items-center text-muted py-4"
  }, [_c("div", [_c("span", {
    staticClass: "spinner-border spinner-border"
  }), _vm._v(" "), _c("h5", [_vm._v("\n                    Chargement des données en cours ... "), _c("br"), _vm._v("\n                    Ceci peut prendre un peu de temps\n                ")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "spinner-border text-secondary",
    staticStyle: {
      height: "20px",
      width: "20px"
    },
    attrs: {
      role: "status"
    }
  }, [_c("span", {
    staticClass: "sr-only"
  }, [_vm._v("Loading...")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticStyle: {
      padding: "15px",
      border: "1px solid #2d5489",
      background: "#d0cece",
      "text-align": "center"
    }
  }, [_c("b", [_vm._v("CONVENTION DE NANTISSEMENT DE COMPTE BANCAIRE")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("u", [_c("b", [_vm._v("ENTRE LES SOUSSIGNES :")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_vm._v("Ci-après dénommé(e) le "), _c("b", [_vm._v("« Client »")]), _vm._v(" ou le "), _c("b", [_vm._v("« Constituant »")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("b", [_vm._v("ET")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_vm._v("Ci-après dénommée "), _c("b", [_vm._v("« Banque »")]), _vm._v(" ou le "), _c("b", [_vm._v("« Bénéficiaire »")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_vm._v("Ci-après ensemble dénommés les "), _c("b", [_vm._v("« Parties »")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("u", [_c("b", [_vm._v("Il est convenu ce qui suit :")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_vm._v("\n                        La "), _c("b", [_vm._v("Banque")]), _vm._v(" exercera sur la Créance Nantie, tous les droits et privilièges que lui confère l’Acte Uniforme. En particulier, la "), _c("b", [_vm._v("Banque")]), _vm._v(" sera admise à affecter les fonds résultant de la Créance Nantie au remboursement de la Créance Garantie, dans les conditions prévues à l’article 134 alinéa 1er de l’Acte Uniforme. "), _c("br"), _vm._v("\n                        Si l’échéance de la Créance Garantie est antérieure à l’échéance de la Créance Nantie, le Bénéficiaire peut en cas de défaut et à son seul choix, soit affecter la Créance Nantie au remboursement de la Créance Garantie, huit (08) jours après une mise en demeure adressée au débiteur par tout moyen laissant trace écrite, restée sans effet, soit attendre l’échéance de la Créance Nantie. "), _c("br"), _vm._v("\n                        Même après l’exercice du droit d’affectation prévu à l’alinéa qui précède, le Nantissement subsistera tant que le compte n’a pas été cloturé et que la créance Garantie n’a pas été intégralement payée.\n                    ")]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_vm._v("\n                        Il est expressément convenu entre les "), _c("b", [_vm._v("Parties")]), _vm._v(" qu'en cas de clôture du compte nanti par \n                    ")]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_vm._v("\n                        Il est bien précisé que le présent nantissement n'apporte aucune novation aux droits de la "), _c("b", [_vm._v("Banque")]), _vm._v(" à l'égard du "), _c("b", [_vm._v("Client")]), _vm._v(" et qu’il s’ajoute purement et simplement à toute autre garantie dont la "), _c("b", [_vm._v("Banque")]), _vm._v(" pourrait ou pourra bénéficier contre le Client.\n                    ")]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_vm._v("\n                        La "), _c("b", [_vm._v("Banque")]), _vm._v(" aura le droit de conserver l’intégralité du présent nantissement jusqu’à extinction complète en principal, intérêts, commissions, accessoires et frais, de toutes les obligations du "), _c("b", [_vm._v("Client")]), _vm._v(" à son égard.\n                    ")]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_vm._v("\n                        A défaut de remboursement immédiat des sommes devenues exigibles, et en cas d’insuffisance des sommes nanties pour couvrir la dette, le "), _c("b", [_vm._v("Client")]), _vm._v(" donne mandat exprès à la "), _c("b", [_vm._v("Banque")]), _vm._v(" de porter le solde de tous ses comptes, y compris le ou les comptes à terme,\n                        en amortissement immédiat, à due concurrence, du montant de sa créance soit à son égard soit contre tous ses coobligés vis à vis de la "), _c("b", [_vm._v("Banque")]), _vm._v(". \n                    ")]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_vm._v("\n                        Le "), _c("b", [_vm._v("Client")]), _vm._v(" s'interdit formellement tous actes de nature à empêcher ou à restreindre les effets du présent nantissement.\n                    ")]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_vm._v("\n                        Toutes les obligations contractées par le "), _c("b", [_vm._v("Client")]), _vm._v(" aux termes des présentes seront indivisibles entre ses ayants droit.\n                    ")]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_vm._v("\n                        Le présent nantissement ne diminue en rien les autres sûretés tant réelles que personnelles que le "), _c("b", [_vm._v("Client")]), _vm._v(" aura déjà données à la "), _c("b", [_vm._v("Banque")]), _vm._v(". Au contraire, celles-ci continueront à produire intégralement leurs effets.\n                    ")]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_vm._v("\n                        Tous les frais et droits des présentes et leurs suites et notamment ceux de timbres et d'enregistrement seront acquittés et supportés par le seul "), _c("b", [_vm._v("Client")]), _vm._v(" qui s'y oblige. Tous pouvoirs sont donnés à la "), _c("b", [_vm._v("Banque")]), _vm._v(" pour entreprendre les procédures de publicités et autres prévues par la loi. "), _c("br"), _c("br"), _vm._v("\n                        Conformément à l’article 132 de l’Acte Uniforme de l’OHADA portant Organisation des Sûretés, un exemplaire original du présent acte de nantissement fera l’objet de signification au débiteur de la créance nantie, qui accepte d’en supporter les frais. \n                    ")]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_vm._v("\n                        Le "), _c("b", [_vm._v("Client")]), _vm._v(" s’engage à payer à la "), _c("b", [_vm._v("Banque")]), _vm._v(", la somme de CINQ MILLE (5.000) Francs CFA en cas de mainlevée du présent nantissement.\n                    ")]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_vm._v("\n                        Cette commission est due à la date de la demande de mainlevée et payable par tous moyens à la disposition du "), _c("b", [_vm._v("Bénéficiaire")]), _vm._v(".\n                    ")]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_vm._v("\n                        Pour l’exécution des présentes et de toutes leurs suites, les "), _c("b", [_vm._v("Parties")]), _vm._v(" déclarent faire\n                    ")]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_vm._v("\n                         élection de domicile pour :\n                        "), _c("div", {
    staticStyle: {
      "margin-left": "15px"
    }
  }, [_vm._v("-\tLa "), _c("b", [_vm._v("Banque")]), _vm._v(" à son siège social sus indiqué ; ")]), _vm._v(" "), _c("div", {
    staticStyle: {
      "margin-left": "15px"
    }
  }, [_vm._v("-\tLe "), _c("b", [_vm._v("Client")]), _vm._v(" à son domicile sus indiqué. ")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticStyle: {
      display: "ruby",
      "text-align": "left"
    }
  }, [_vm._v("\n                            Fait à "), _c("div", {
    staticStyle: {
      width: "200px"
    }
  }), _vm._v(", le "), _c("div", {
    staticStyle: {
      width: "190px"
    }
  }), _vm._v(" en trois (6) exemplaires. "), _c("br"), _c("br")]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {
    staticStyle: {
      width: "20%",
      "vertical-align": "top"
    }
  }, [_c("div", {
    staticClass: "text-center",
    staticStyle: {
      padding: "10px 0 120px 0px"
    }
  }, [_c("b", [_vm._v("La Banque")]), _c("br"), _vm._v(" "), _c("small", {
    staticStyle: {
      "font-size": "0.7em"
    }
  }, [_vm._v("(Nom+qualité+signature+cachet)")])])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/RedactionConvention.vue?vue&type=template&id=11d2ef99&scoped=true":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/RedactionConvention.vue?vue&type=template&id=11d2ef99&scoped=true ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("div", {
    staticClass: "memo",
    style: {
      "background-color": _vm.entityColor
    }
  }, [_c("div", {
    staticClass: "container-fluid"
  }, [_c("div", {
    staticClass: "d-flex justify-content-between align-items-center"
  }, [_c("div", [_vm._v("REDACTION CONVENTIONS")]), _vm._v(" "), _c("div", [_c("div", {
    staticClass: "d-flex justify-content-between align-items-center"
  }, [_vm.autosaving_mode === true ? _c("span", {
    staticClass: "mr-3",
    staticStyle: {
      "font-size": "10px"
    }
  }, [_c("upload-cloud-icon", {
    staticClass: "custom-class mr-3",
    attrs: {
      size: "16"
    }
  }), _vm._v("\n                            Sauvegarde automatique en cours ...\n                        ")], 1) : _vm._e(), _vm._v(" "), _c("i", {
    staticClass: "icofont-close",
    attrs: {
      role: "button"
    },
    on: {
      click: function click($event) {
        return _vm.$modal.hide("redaction_convention");
      }
    }
  })])])])])]), _vm._v(" "), _c("div", {
    staticStyle: {
      "max-height": "80vh",
      overflow: "auto"
    }
  }, [_c("section", {
    staticClass: "d-flex relative"
  }, [_c("div", {
    staticClass: "w-100"
  }, [_c("div", {
    staticClass: "col-12 d-flex border-bottom"
  }, [_c("div", {
    staticClass: "col cursor-pointer border-end text-center bg-deep-blue p-2",
    "class": [_vm.isFileFormVisible ? "bg-white text-orange fw-semibold" : ""],
    on: {
      click: function click($event) {
        _vm.isFileFormVisible = true;
      }
    }
  }, [_vm._v("\n                        Nouvelle\n                    ")]), _vm._v(" "), _c("div", {
    staticClass: "col cursor-pointer border-end text-center bg-deep-blue p-2",
    "class": [!_vm.isFileFormVisible ? "bg-white text-orange fw-semibold" : ""],
    on: {
      click: function click($event) {
        _vm.isFileFormVisible = false;
      }
    }
  }, [_vm._v("\n                        Conventions\n                    ")])]), _vm._v(" "), _vm.isFileFormVisible ? _c("section", {
    staticClass: "p-2",
    style: _vm.on_write_convention && !_vm.edit_mode ? "background-color: #fbfbfb" : ""
  }, [_vm.on_write_convention ? _c("div", [_c("div", {
    staticClass: "p-4"
  }, [_vm.selectedConvention == "Convention de prêt PPO" ? _c("DAJC_CONV1_OFF", {
    attrs: {
      convention_id: _vm.convention_id,
      isLoading: _vm.isLoading,
      redaction_conventions: _vm.redaction_conventions,
      dossier_credit: _vm.dossier_credit,
      type_convention: _vm.selectedConvention,
      edit_mode: _vm.edit_mode
    },
    on: {
      "edit-mode": _vm.setEditMode,
      autosaving: _vm.setAutosaving
    }
  }) : _vm._e(), _vm._v(" "), _vm.selectedConvention == "Convention de nantissement de compte bancaire" ? _c("DAJC_CONV2_OFF", {
    attrs: {
      convention_id: _vm.convention_id,
      isLoading: _vm.isLoading,
      redaction_conventions: _vm.redaction_conventions,
      dossier_credit: _vm.dossier_credit,
      type_convention: _vm.selectedConvention,
      edit_mode: _vm.edit_mode
    },
    on: {
      "edit-mode": _vm.setEditMode,
      autosaving: _vm.setAutosaving
    }
  }) : _vm._e()], 1)]) : _c("div", [_c("vueper-slides", {
    staticClass: "no-shadow",
    attrs: {
      bullets: false,
      "visible-slides": 4,
      "slide-ratio": 1 / 8,
      "dragging-distance": 70
    },
    scopedSlots: _vm._u([{
      key: "arrow-left",
      fn: function fn() {
        return [_c("i", {
          staticClass: "icofont icofont-arrow-left icofont-3x",
          staticStyle: {
            cursor: "pointer"
          }
        })];
      },
      proxy: true
    }, {
      key: "arrow-right",
      fn: function fn() {
        return [_c("i", {
          staticClass: "icofont icofont-arrow-right icofont-3x",
          staticStyle: {
            cursor: "pointer"
          }
        })];
      },
      proxy: true
    }], null, false, 2581119369)
  }, [_vm._v(" "), _vm._v(" "), _vm._l(_vm.parseables, function (parseable, index) {
    var _parseable$image;
    return _c("vueper-slide", {
      key: index,
      staticClass: "slider-vue",
      staticStyle: {
        cursor: "pointer"
      },
      attrs: {
        "dragging-distance": 70,
        title: parseable.title,
        image: (_parseable$image = parseable === null || parseable === void 0 ? void 0 : parseable.image) !== null && _parseable$image !== void 0 ? _parseable$image : "",
        content: ""
      },
      nativeOn: {
        click: function click($event) {
          return _vm.startRedaction(parseable);
        }
      }
    });
  }), _vm._v(" "), _vm.parseables.length > 4 ? _vm._l(2, function (i) {
    return _c("vueper-slide", {
      key: i + "_",
      staticClass: "slider-vue-load",
      staticStyle: {
        "box-shadow": "initial"
      },
      attrs: {
        "dragging-distance": 70,
        "slide-ratio": 1,
        "visible-slides": 1,
        title: "",
        image: ""
      }
    });
  }) : _vm._e()], 2)], 1)]) : _c("section", {
    staticClass: "p-2"
  }, [_vm.isLoading ? _c("div", {
    staticClass: "card-body"
  }, [_vm._m(0)]) : _c("div", [!["", null, undefined].includes(_vm.redaction_conventions) && _vm.redaction_conventions.length > 0 ? _c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-bordered"
  }, [_vm._m(1), _vm._v(" "), _c("tbody", _vm._l(_vm.redaction_conventions, function (conv, ind) {
    return _c("tr", {
      key: ind
    }, [_c("td", [_vm._v(_vm._s(ind + 1))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(conv === null || conv === void 0 ? void 0 : conv.type_convention))]), _vm._v(" "), _c("td", [_c("div", {
      staticClass: "d-flex"
    }, [_c("div", [_c("i", {
      staticClass: "icofont-pencil mx-2",
      staticStyle: {
        "font-size": "1.5rem"
      },
      attrs: {
        title: "Editer",
        role: "button"
      },
      on: {
        click: function click($event) {
          return _vm.editConvention(conv);
        }
      }
    })]), _vm._v(" "), _c("div", [_c("i", {
      staticClass: "icofont-trash mx-2 text-danger",
      staticStyle: {
        "font-size": "1.5rem"
      },
      attrs: {
        title: "Supprimer",
        role: "button"
      },
      on: {
        click: function click($event) {
          return _vm.deleteConvention(conv);
        }
      }
    })])])])]);
  }), 0)])]) : _c("div", [_c("p", {
    staticClass: "text-center text-danger"
  }, [_vm._v("Aucune convention.")])])])])])])]), _vm._v(" "), _c("div", {
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
      click: function click($event) {
        return _vm.$modal.hide("redaction_convention");
      }
    }
  }, [_vm._v("\n            Fermer\n        ")])])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "d-flex justify-content-center text-center align-items-center text-muted py-4"
  }, [_c("div", [_c("span", {
    staticClass: "spinner-border spinner-border"
  }), _vm._v(" "), _c("h5", [_vm._v("\n                                    Chargement des données en cours ... "), _c("br"), _vm._v("\n                                    Ceci peut prendre un peu de temps\n                                ")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("td", {
    staticClass: "th"
  }, [_vm._v("#")]), _vm._v(" "), _c("td", {
    staticClass: "th col-12"
  }, [_vm._v("Convention")]), _vm._v(" "), _c("td", {
    staticClass: "th"
  }, [_vm._v("Action")])])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/nsia/conventions/DAJC-CONV1.vue?vue&type=style&index=0&id=084513ec&lang=css&scoped=true":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/nsia/conventions/DAJC-CONV1.vue?vue&type=style&index=0&id=084513ec&lang=css&scoped=true ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n*[data-v-084513ec] {\r\n    font-family: \"Google sans\";\n}\nlabel[data-v-084513ec] {\r\n    height: 10px;\r\n    font-size: 13px;\n}\ninput[data-v-084513ec],\r\nselect[data-v-084513ec],\r\ntextarea[data-v-084513ec] {\r\n    border-color: #34495e;\r\n    color: #57606f;\r\n    font-size: 13px;\r\n    font-weight: bold;\n}\n.th[data-v-084513ec] {\r\n    padding: 4px;\r\n    padding-bottom: 0px;\n}\n.card-width-height[data-v-084513ec] {\r\n    width: 100%;\r\n    height: 100%;\n}\n.head[data-v-084513ec] {\r\n    color: #f1f2f6;\r\n    font-size: 22px;\n}\n.hdc[data-v-084513ec] {\r\n    background-color: #57606f;\n}\n.relook-header[data-v-084513ec] {\r\n    color: #000;\r\n    background-color: #f4f3f3;\r\n    padding: 5px;\r\n    border-bottom: 1px solid #b6b8bb;\n}\n.badge-sm[data-v-084513ec] {\r\n    display: inline-block;\r\n    width: 15px;\r\n    height: 15px;\r\n    background: rgba(255, 0, 0, 0.882);\r\n    color: white;\r\n    font-size: 12px;\r\n    font-weight: 500;\r\n    border-radius: 100%;\r\n    position: absolute;\r\n    top: -20%;\r\n    left: 55%;\r\n    text-align: center;\n}\ntd[data-v-084513ec],\r\np[data-v-084513ec] {\r\n    font-size: 13px;\n}\n.relook-header[data-v-084513ec] {\r\n    color: #000;\r\n    background-color: #f4f3f3;\r\n    padding: 5px;\r\n    border-bottom: 1px solid #b6b8bb;\n}\n.width-100[data-v-084513ec] {\r\n    width: 90%;\n}\n.personne input[data-v-084513ec] {\r\n    width: 135px;\n}\n._border_right[data-v-084513ec] {\r\n    border-right: 1px solid;\n}\n.text-red[data-v-084513ec] {\r\n    color: red;\n}\r\n\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/memo/conventions/DAJC-CONV1.vue?vue&type=style&index=0&id=4f3d731a&lang=css&scoped=true":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/memo/conventions/DAJC-CONV1.vue?vue&type=style&index=0&id=4f3d731a&lang=css&scoped=true ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.form-control[data-v-4f3d731a] {\r\n        display: initial;\r\n        width: initial;\n}\ninput[data-v-4f3d731a], select[data-v-4f3d731a] {\r\n        margin: 2px;\r\n        border-color: #34495e;\r\n        color: black;\r\n        font-size: 13px;\r\n        height: 34px;\r\n        font-weight: bold;\r\n        background-color: #ffffad;\r\n        margin-right: 0px;\r\n        min-width: 45px;\r\n        border-top-right-radius: 0;\r\n        border-bottom-right-radius: 0;\r\n        border-right: none;\n}\n.input-group-append[data-v-4f3d731a] {\r\n        margin: 0 2px;\n}\n.input-group-text[data-v-4f3d731a] {\r\n        font-size: 13px;\r\n        line-height: 1.5;\r\n        height: 34px;\r\n        padding: .375rem .75rem;\r\n        border: 1px solid #34495e;\r\n        min-width: 45px;\r\n        text-align: center;\r\n        justify-content: center;\r\n        margin: 2px;\r\n        background-color: #ffffad;\r\n        color: black;\n}\n.input-group-text-right[data-v-4f3d731a] {\r\n        border-radius: 0 .375rem .375rem 0;\r\n        margin-left: 0px;\r\n        cursor: pointer;\n}\n.input-group-text-left[data-v-4f3d731a] {\r\n        border-radius: .375rem 0 0 .375rem;\n}\r\n\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/memo/conventions/DAJC-CONV2.vue?vue&type=style&index=0&id=4f214418&lang=css&scoped=true":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/memo/conventions/DAJC-CONV2.vue?vue&type=style&index=0&id=4f214418&lang=css&scoped=true ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.form-control[data-v-4f214418] {\n    display: initial;\n    width: initial;\n}\ninput[data-v-4f214418], select[data-v-4f214418] {\n    margin: 2px;\n    border-color: #34495e;\n    color: black;\n    font-size: 13px;\n    height: 34px;\n    font-weight: bold;\n    background-color: #ffffad;\n    margin-right: 0px;\n    min-width: 45px;\n    border-top-right-radius: 0;\n    border-bottom-right-radius: 0;\n    border-right: none;\n}\n.input-group-text[data-v-4f214418] {\n    font-size: 13px;\n    line-height: 1.5;\n    height: 34px;\n    padding: .375rem .75rem;\n    border: 1px solid #34495e;\n    min-width: 45px;\n    text-align: center;\n    justify-content: center;\n    margin: 2px;\n    background-color: #ffffad;\n    color: black;\n}\n.input-group-text-right[data-v-4f214418] {\n    border-radius: 0 .375rem .375rem 0;\n    margin-left: 0px;\n    cursor: pointer;\n}\n.input-group-text-left[data-v-4f214418] {\n    border-radius: .375rem 0 0 .375rem;\n}\n\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/RedactionConvention.vue?vue&type=style&index=0&id=11d2ef99&lang=css&scoped=true":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/RedactionConvention.vue?vue&type=style&index=0&id=11d2ef99&lang=css&scoped=true ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.memo[data-v-11d2ef99] {\r\n    padding: 10px;\r\n    border: 2px solid #fff;\r\n    font-weight: 550;\r\n    font-size: 16px;\r\n    /* text-align: center; */\r\n    text-transform: uppercase;\r\n    background-color: #dc0030;\r\n    color: #fff;\n}\n.bg-grey[data-v-11d2ef99] {\r\n    background-color: #f4f3f3;\n}\n.container[data-v-11d2ef99] {\r\n    width: 100%;\r\n    max-width: 1000px;\r\n    margin: 0 auto;\n}\n.slider-vue[data-v-11d2ef99] {\r\n    position: relative;\r\n    /* border:1px solid; */\r\n    margin: 3vh;\r\n    width: 30vh !important;\r\n    box-shadow: inset 0vh 5vh 2vh 150vh rgba(0, 0, 0, 0.6);\r\n    /* font-weight: bold; */\r\n    font-size: 18px;\r\n    color: white;\n}\n.slider-vue-load[data-v-11d2ef99] {\r\n    position: relative;\r\n    /* border:1px solid; */\r\n    margin: 3vh;\r\n    width: 30vh !important;\r\n    box-shadow: inset 0vh 5vh 2vh 150vh rgba(0, 0, 0, 0.6);\r\n    /* font-weight: bold; */\r\n    font-size: 18px;\r\n    color: white;\n}\n.check[data-v-11d2ef99] {\r\n    position: absolute;\r\n    display: inline;\r\n    height: 50px;\n}\n.disabled_template[data-v-11d2ef99] {\r\n    cursor: not-allowed !important;\r\n    filter: grayscale(1);\n}\n.th[data-v-11d2ef99] {\r\n    background-color: #f4f3f3;\n}\r\n\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/nsia/conventions/DAJC-CONV1.vue?vue&type=style&index=0&id=084513ec&lang=css&scoped=true":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/nsia/conventions/DAJC-CONV1.vue?vue&type=style&index=0&id=084513ec&lang=css&scoped=true ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DAJC_CONV1_vue_vue_type_style_index_0_id_084513ec_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DAJC-CONV1.vue?vue&type=style&index=0&id=084513ec&lang=css&scoped=true */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/nsia/conventions/DAJC-CONV1.vue?vue&type=style&index=0&id=084513ec&lang=css&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DAJC_CONV1_vue_vue_type_style_index_0_id_084513ec_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DAJC_CONV1_vue_vue_type_style_index_0_id_084513ec_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/memo/conventions/DAJC-CONV1.vue?vue&type=style&index=0&id=4f3d731a&lang=css&scoped=true":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/memo/conventions/DAJC-CONV1.vue?vue&type=style&index=0&id=4f3d731a&lang=css&scoped=true ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DAJC_CONV1_vue_vue_type_style_index_0_id_4f3d731a_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DAJC-CONV1.vue?vue&type=style&index=0&id=4f3d731a&lang=css&scoped=true */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/memo/conventions/DAJC-CONV1.vue?vue&type=style&index=0&id=4f3d731a&lang=css&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DAJC_CONV1_vue_vue_type_style_index_0_id_4f3d731a_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DAJC_CONV1_vue_vue_type_style_index_0_id_4f3d731a_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/memo/conventions/DAJC-CONV2.vue?vue&type=style&index=0&id=4f214418&lang=css&scoped=true":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/memo/conventions/DAJC-CONV2.vue?vue&type=style&index=0&id=4f214418&lang=css&scoped=true ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DAJC_CONV2_vue_vue_type_style_index_0_id_4f214418_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DAJC-CONV2.vue?vue&type=style&index=0&id=4f214418&lang=css&scoped=true */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/memo/conventions/DAJC-CONV2.vue?vue&type=style&index=0&id=4f214418&lang=css&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DAJC_CONV2_vue_vue_type_style_index_0_id_4f214418_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DAJC_CONV2_vue_vue_type_style_index_0_id_4f214418_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/RedactionConvention.vue?vue&type=style&index=0&id=11d2ef99&lang=css&scoped=true":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/RedactionConvention.vue?vue&type=style&index=0&id=11d2ef99&lang=css&scoped=true ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RedactionConvention_vue_vue_type_style_index_0_id_11d2ef99_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RedactionConvention.vue?vue&type=style&index=0&id=11d2ef99&lang=css&scoped=true */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/RedactionConvention.vue?vue&type=style&index=0&id=11d2ef99&lang=css&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RedactionConvention_vue_vue_type_style_index_0_id_11d2ef99_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RedactionConvention_vue_vue_type_style_index_0_id_11d2ef99_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/forms/nsia/conventions/DAJC-CONV1.vue":
/*!***********************************************************************!*\
  !*** ./resources/js/components/forms/nsia/conventions/DAJC-CONV1.vue ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DAJC_CONV1_vue_vue_type_template_id_084513ec_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DAJC-CONV1.vue?vue&type=template&id=084513ec&scoped=true */ "./resources/js/components/forms/nsia/conventions/DAJC-CONV1.vue?vue&type=template&id=084513ec&scoped=true");
/* harmony import */ var _DAJC_CONV1_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DAJC-CONV1.vue?vue&type=script&lang=js */ "./resources/js/components/forms/nsia/conventions/DAJC-CONV1.vue?vue&type=script&lang=js");
/* harmony import */ var _DAJC_CONV1_vue_vue_type_style_index_0_id_084513ec_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DAJC-CONV1.vue?vue&type=style&index=0&id=084513ec&lang=css&scoped=true */ "./resources/js/components/forms/nsia/conventions/DAJC-CONV1.vue?vue&type=style&index=0&id=084513ec&lang=css&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _DAJC_CONV1_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _DAJC_CONV1_vue_vue_type_template_id_084513ec_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _DAJC_CONV1_vue_vue_type_template_id_084513ec_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "084513ec",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/forms/nsia/conventions/DAJC-CONV1.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/forms/nsia/conventions/DAJC-CONV1.vue?vue&type=script&lang=js":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/forms/nsia/conventions/DAJC-CONV1.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DAJC_CONV1_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DAJC-CONV1.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/nsia/conventions/DAJC-CONV1.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DAJC_CONV1_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/forms/nsia/conventions/DAJC-CONV1.vue?vue&type=style&index=0&id=084513ec&lang=css&scoped=true":
/*!*******************************************************************************************************************************!*\
  !*** ./resources/js/components/forms/nsia/conventions/DAJC-CONV1.vue?vue&type=style&index=0&id=084513ec&lang=css&scoped=true ***!
  \*******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DAJC_CONV1_vue_vue_type_style_index_0_id_084513ec_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DAJC-CONV1.vue?vue&type=style&index=0&id=084513ec&lang=css&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/nsia/conventions/DAJC-CONV1.vue?vue&type=style&index=0&id=084513ec&lang=css&scoped=true");


/***/ }),

/***/ "./resources/js/components/forms/nsia/conventions/DAJC-CONV1.vue?vue&type=template&id=084513ec&scoped=true":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/components/forms/nsia/conventions/DAJC-CONV1.vue?vue&type=template&id=084513ec&scoped=true ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DAJC_CONV1_vue_vue_type_template_id_084513ec_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DAJC_CONV1_vue_vue_type_template_id_084513ec_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DAJC_CONV1_vue_vue_type_template_id_084513ec_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DAJC-CONV1.vue?vue&type=template&id=084513ec&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/nsia/conventions/DAJC-CONV1.vue?vue&type=template&id=084513ec&scoped=true");


/***/ }),

/***/ "./resources/js/components/offview/bank/nsia/memo/conventions/DAJC-CONV1.vue":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/offview/bank/nsia/memo/conventions/DAJC-CONV1.vue ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DAJC_CONV1_vue_vue_type_template_id_4f3d731a_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DAJC-CONV1.vue?vue&type=template&id=4f3d731a&scoped=true */ "./resources/js/components/offview/bank/nsia/memo/conventions/DAJC-CONV1.vue?vue&type=template&id=4f3d731a&scoped=true");
/* harmony import */ var _DAJC_CONV1_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DAJC-CONV1.vue?vue&type=script&lang=js */ "./resources/js/components/offview/bank/nsia/memo/conventions/DAJC-CONV1.vue?vue&type=script&lang=js");
/* harmony import */ var _DAJC_CONV1_vue_vue_type_style_index_0_id_4f3d731a_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DAJC-CONV1.vue?vue&type=style&index=0&id=4f3d731a&lang=css&scoped=true */ "./resources/js/components/offview/bank/nsia/memo/conventions/DAJC-CONV1.vue?vue&type=style&index=0&id=4f3d731a&lang=css&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _DAJC_CONV1_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _DAJC_CONV1_vue_vue_type_template_id_4f3d731a_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _DAJC_CONV1_vue_vue_type_template_id_4f3d731a_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "4f3d731a",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/offview/bank/nsia/memo/conventions/DAJC-CONV1.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/offview/bank/nsia/memo/conventions/DAJC-CONV1.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/components/offview/bank/nsia/memo/conventions/DAJC-CONV1.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DAJC_CONV1_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DAJC-CONV1.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/memo/conventions/DAJC-CONV1.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DAJC_CONV1_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/offview/bank/nsia/memo/conventions/DAJC-CONV1.vue?vue&type=style&index=0&id=4f3d731a&lang=css&scoped=true":
/*!*******************************************************************************************************************************************!*\
  !*** ./resources/js/components/offview/bank/nsia/memo/conventions/DAJC-CONV1.vue?vue&type=style&index=0&id=4f3d731a&lang=css&scoped=true ***!
  \*******************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DAJC_CONV1_vue_vue_type_style_index_0_id_4f3d731a_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DAJC-CONV1.vue?vue&type=style&index=0&id=4f3d731a&lang=css&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/memo/conventions/DAJC-CONV1.vue?vue&type=style&index=0&id=4f3d731a&lang=css&scoped=true");


/***/ }),

/***/ "./resources/js/components/offview/bank/nsia/memo/conventions/DAJC-CONV1.vue?vue&type=template&id=4f3d731a&scoped=true":
/*!*****************************************************************************************************************************!*\
  !*** ./resources/js/components/offview/bank/nsia/memo/conventions/DAJC-CONV1.vue?vue&type=template&id=4f3d731a&scoped=true ***!
  \*****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DAJC_CONV1_vue_vue_type_template_id_4f3d731a_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DAJC_CONV1_vue_vue_type_template_id_4f3d731a_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DAJC_CONV1_vue_vue_type_template_id_4f3d731a_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DAJC-CONV1.vue?vue&type=template&id=4f3d731a&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/memo/conventions/DAJC-CONV1.vue?vue&type=template&id=4f3d731a&scoped=true");


/***/ }),

/***/ "./resources/js/components/offview/bank/nsia/memo/conventions/DAJC-CONV2.vue":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/offview/bank/nsia/memo/conventions/DAJC-CONV2.vue ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DAJC_CONV2_vue_vue_type_template_id_4f214418_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DAJC-CONV2.vue?vue&type=template&id=4f214418&scoped=true */ "./resources/js/components/offview/bank/nsia/memo/conventions/DAJC-CONV2.vue?vue&type=template&id=4f214418&scoped=true");
/* harmony import */ var _DAJC_CONV2_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DAJC-CONV2.vue?vue&type=script&lang=js */ "./resources/js/components/offview/bank/nsia/memo/conventions/DAJC-CONV2.vue?vue&type=script&lang=js");
/* harmony import */ var _DAJC_CONV2_vue_vue_type_style_index_0_id_4f214418_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DAJC-CONV2.vue?vue&type=style&index=0&id=4f214418&lang=css&scoped=true */ "./resources/js/components/offview/bank/nsia/memo/conventions/DAJC-CONV2.vue?vue&type=style&index=0&id=4f214418&lang=css&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _DAJC_CONV2_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _DAJC_CONV2_vue_vue_type_template_id_4f214418_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _DAJC_CONV2_vue_vue_type_template_id_4f214418_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "4f214418",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/offview/bank/nsia/memo/conventions/DAJC-CONV2.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/offview/bank/nsia/memo/conventions/DAJC-CONV2.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/components/offview/bank/nsia/memo/conventions/DAJC-CONV2.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DAJC_CONV2_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DAJC-CONV2.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/memo/conventions/DAJC-CONV2.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DAJC_CONV2_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/offview/bank/nsia/memo/conventions/DAJC-CONV2.vue?vue&type=style&index=0&id=4f214418&lang=css&scoped=true":
/*!*******************************************************************************************************************************************!*\
  !*** ./resources/js/components/offview/bank/nsia/memo/conventions/DAJC-CONV2.vue?vue&type=style&index=0&id=4f214418&lang=css&scoped=true ***!
  \*******************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DAJC_CONV2_vue_vue_type_style_index_0_id_4f214418_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DAJC-CONV2.vue?vue&type=style&index=0&id=4f214418&lang=css&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/memo/conventions/DAJC-CONV2.vue?vue&type=style&index=0&id=4f214418&lang=css&scoped=true");


/***/ }),

/***/ "./resources/js/components/offview/bank/nsia/memo/conventions/DAJC-CONV2.vue?vue&type=template&id=4f214418&scoped=true":
/*!*****************************************************************************************************************************!*\
  !*** ./resources/js/components/offview/bank/nsia/memo/conventions/DAJC-CONV2.vue?vue&type=template&id=4f214418&scoped=true ***!
  \*****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DAJC_CONV2_vue_vue_type_template_id_4f214418_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DAJC_CONV2_vue_vue_type_template_id_4f214418_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DAJC_CONV2_vue_vue_type_template_id_4f214418_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DAJC-CONV2.vue?vue&type=template&id=4f214418&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/memo/conventions/DAJC-CONV2.vue?vue&type=template&id=4f214418&scoped=true");


/***/ }),

/***/ "./resources/js/components/shared/RedactionConvention.vue":
/*!****************************************************************!*\
  !*** ./resources/js/components/shared/RedactionConvention.vue ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _RedactionConvention_vue_vue_type_template_id_11d2ef99_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RedactionConvention.vue?vue&type=template&id=11d2ef99&scoped=true */ "./resources/js/components/shared/RedactionConvention.vue?vue&type=template&id=11d2ef99&scoped=true");
/* harmony import */ var _RedactionConvention_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RedactionConvention.vue?vue&type=script&lang=js */ "./resources/js/components/shared/RedactionConvention.vue?vue&type=script&lang=js");
/* harmony import */ var _RedactionConvention_vue_vue_type_style_index_0_id_11d2ef99_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RedactionConvention.vue?vue&type=style&index=0&id=11d2ef99&lang=css&scoped=true */ "./resources/js/components/shared/RedactionConvention.vue?vue&type=style&index=0&id=11d2ef99&lang=css&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _RedactionConvention_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _RedactionConvention_vue_vue_type_template_id_11d2ef99_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _RedactionConvention_vue_vue_type_template_id_11d2ef99_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "11d2ef99",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/shared/RedactionConvention.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/shared/RedactionConvention.vue?vue&type=script&lang=js":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/shared/RedactionConvention.vue?vue&type=script&lang=js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RedactionConvention_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RedactionConvention.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/RedactionConvention.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RedactionConvention_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/shared/RedactionConvention.vue?vue&type=style&index=0&id=11d2ef99&lang=css&scoped=true":
/*!************************************************************************************************************************!*\
  !*** ./resources/js/components/shared/RedactionConvention.vue?vue&type=style&index=0&id=11d2ef99&lang=css&scoped=true ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RedactionConvention_vue_vue_type_style_index_0_id_11d2ef99_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RedactionConvention.vue?vue&type=style&index=0&id=11d2ef99&lang=css&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/RedactionConvention.vue?vue&type=style&index=0&id=11d2ef99&lang=css&scoped=true");


/***/ }),

/***/ "./resources/js/components/shared/RedactionConvention.vue?vue&type=template&id=11d2ef99&scoped=true":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/components/shared/RedactionConvention.vue?vue&type=template&id=11d2ef99&scoped=true ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RedactionConvention_vue_vue_type_template_id_11d2ef99_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RedactionConvention_vue_vue_type_template_id_11d2ef99_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RedactionConvention_vue_vue_type_template_id_11d2ef99_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RedactionConvention.vue?vue&type=template&id=11d2ef99&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/RedactionConvention.vue?vue&type=template&id=11d2ef99&scoped=true");


/***/ })

}]);