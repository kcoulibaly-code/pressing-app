"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_offview_bank_afg_contre_analyse_groupe_NT2_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/contre_analyse_groupe/NT2.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/contre_analyse_groupe/NT2.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _shared_afg_Garantie_GarantieOffview_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/afg/Garantie/GarantieOffview.vue */ "./resources/js/components/shared/afg/Garantie/GarantieOffview.vue");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return r; }; var t, r = {}, e = Object.prototype, n = e.hasOwnProperty, o = "function" == typeof Symbol ? Symbol : {}, i = o.iterator || "@@iterator", a = o.asyncIterator || "@@asyncIterator", u = o.toStringTag || "@@toStringTag"; function c(t, r, e, n) { Object.defineProperty(t, r, { value: e, enumerable: !n, configurable: !n, writable: !n }); } try { c({}, ""); } catch (t) { c = function c(t, r, e) { return t[r] = e; }; } function h(r, e, n, o) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype); return c(a, "_invoke", function (r, e, n) { var o = 1; return function (i, a) { if (3 === o) throw Error("Generator is already running"); if (4 === o) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var u = n.delegate; if (u) { var c = d(u, n); if (c) { if (c === f) continue; return c; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (1 === o) throw o = 4, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = 3; var h = s(r, e, n); if ("normal" === h.type) { if (o = n.done ? 4 : 2, h.arg === f) continue; return { value: h.arg, done: n.done }; } "throw" === h.type && (o = 4, n.method = "throw", n.arg = h.arg); } }; }(r, n, new Context(o || [])), !0), a; } function s(t, r, e) { try { return { type: "normal", arg: t.call(r, e) }; } catch (t) { return { type: "throw", arg: t }; } } r.wrap = h; var f = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var l = {}; c(l, i, function () { return this; }); var p = Object.getPrototypeOf, y = p && p(p(x([]))); y && y !== e && n.call(y, i) && (l = y); var v = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(l); function g(t) { ["next", "throw", "return"].forEach(function (r) { c(t, r, function (t) { return this._invoke(r, t); }); }); } function AsyncIterator(t, r) { function e(o, i, a, u) { var c = s(t[o], t, i); if ("throw" !== c.type) { var h = c.arg, f = h.value; return f && "object" == _typeof(f) && n.call(f, "__await") ? r.resolve(f.__await).then(function (t) { e("next", t, a, u); }, function (t) { e("throw", t, a, u); }) : r.resolve(f).then(function (t) { h.value = t, a(h); }, function (t) { return e("throw", t, a, u); }); } u(c.arg); } var o; c(this, "_invoke", function (t, n) { function i() { return new r(function (r, o) { e(t, n, r, o); }); } return o = o ? o.then(i, i) : i(); }, !0); } function d(r, e) { var n = e.method, o = r.i[n]; if (o === t) return e.delegate = null, "throw" === n && r.i["return"] && (e.method = "return", e.arg = t, d(r, e), "throw" === e.method) || "return" !== n && (e.method = "throw", e.arg = new TypeError("The iterator does not provide a '" + n + "' method")), f; var i = s(o, r.i, e.arg); if ("throw" === i.type) return e.method = "throw", e.arg = i.arg, e.delegate = null, f; var a = i.arg; return a ? a.done ? (e[r.r] = a.value, e.next = r.n, "return" !== e.method && (e.method = "next", e.arg = t), e.delegate = null, f) : a : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, f); } function w(t) { this.tryEntries.push(t); } function m(r) { var e = r[4] || {}; e.type = "normal", e.arg = t, r[4] = e; } function Context(t) { this.tryEntries = [[-1]], t.forEach(w, this), this.reset(!0); } function x(r) { if (null != r) { var e = r[i]; if (e) return e.call(r); if ("function" == typeof r.next) return r; if (!isNaN(r.length)) { var o = -1, a = function e() { for (; ++o < r.length;) if (n.call(r, o)) return e.value = r[o], e.done = !1, e; return e.value = t, e.done = !0, e; }; return a.next = a; } } throw new TypeError(_typeof(r) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, c(v, "constructor", GeneratorFunctionPrototype), c(GeneratorFunctionPrototype, "constructor", GeneratorFunction), c(GeneratorFunctionPrototype, u, GeneratorFunction.displayName = "GeneratorFunction"), r.isGeneratorFunction = function (t) { var r = "function" == typeof t && t.constructor; return !!r && (r === GeneratorFunction || "GeneratorFunction" === (r.displayName || r.name)); }, r.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, c(t, u, "GeneratorFunction")), t.prototype = Object.create(v), t; }, r.awrap = function (t) { return { __await: t }; }, g(AsyncIterator.prototype), c(AsyncIterator.prototype, a, function () { return this; }), r.AsyncIterator = AsyncIterator, r.async = function (t, e, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(h(t, e, n, o), i); return r.isGeneratorFunction(e) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, g(v), c(v, u, "Generator"), c(v, i, function () { return this; }), c(v, "toString", function () { return "[object Generator]"; }), r.keys = function (t) { var r = Object(t), e = []; for (var n in r) e.unshift(n); return function t() { for (; e.length;) if ((n = e.pop()) in r) return t.value = n, t.done = !1, t; return t.done = !0, t; }; }, r.values = x, Context.prototype = { constructor: Context, reset: function reset(r) { if (this.prev = this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(m), !r) for (var e in this) "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0][4]; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(r) { if (this.done) throw r; var e = this; function n(t) { a.type = "throw", a.arg = r, e.next = t; } for (var o = e.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i[4], u = this.prev, c = i[1], h = i[2]; if (-1 === i[0]) return n("end"), !1; if (!c && !h) throw Error("try statement without catch or finally"); if (null != i[0] && i[0] <= u) { if (u < c) return this.method = "next", this.arg = t, n(c), !0; if (u < h) return n(h), !1; } } }, abrupt: function abrupt(t, r) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var n = this.tryEntries[e]; if (n[0] > -1 && n[0] <= this.prev && this.prev < n[2]) { var o = n; break; } } o && ("break" === t || "continue" === t) && o[0] <= r && r <= o[2] && (o = null); var i = o ? o[4] : {}; return i.type = t, i.arg = r, o ? (this.method = "next", this.next = o[2], f) : this.complete(i); }, complete: function complete(t, r) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && r && (this.next = r), f; }, finish: function finish(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[2] === t) return this.complete(e[4], e[3]), m(e), f; } }, "catch": function _catch(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[0] === t) { var n = e[4]; if ("throw" === n.type) { var o = n.arg; m(e); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(r, e, n) { return this.delegate = { i: x(r), r: e, n: n }, "next" === this.method && (this.arg = t), f; } }, r; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }

var tauxEndettementConfig = {
  salaire: {
    label: "Salaire",
    formule: "(A)",
    value: 0
  },
  autres_revenues: {
    label: "Autre revenu",
    formule: "(B)",
    value: 0
  },
  remb_nouveau_credit: {
    label: "Mensualité",
    formule: "(C)",
    value: 0
  },
  remb_autre_credit: {
    label: "Autre remboursement (Chez AFG BANK)",
    formule: "(D)",
    value: 0
  },
  remb_credit_confrere: {
    label: "Autre remboursement (Chez les confrères)",
    formule: "(E)",
    value: 0
  },
  taux_endettement: {
    label: "Taux d'endettement",
    formule: "(C + D) / (A + B)",
    value: 0,
    bold: true,
    percentage: true
  }
};
var ravConfig = {
  rav_theorique: {
    label: "RAV Théorique",
    formule: "*",
    value: 0
  },
  // rav_reel: {
  //     label: "RAV Réel",
  //     formule: "(A + B) - (C + D)",
  //     value: 0,
  // },
  rav_reel_gt_rav_theorique: {
    label: "RAV Réel > RAV Théorique",
    formule: "(O/N)",
    value: false
  }
};
function retrieveFromConfig(config, valueObj) {
  var result = JSON.parse(JSON.stringify(config));
  for (var key in result) {
    if (valueObj.hasOwnProperty(key)) {
      result[key].value = valueObj[key];
    }
  }
  return result;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    GarantieOffview: _shared_afg_Garantie_GarantieOffview_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: {
    dossier_credit: Object
  },
  data: function data() {
    var _this$dossier_credit, _this$dossier_credit2, _this$dossier_credit3, _this$dossier_credit4, _this$dossier_credit5;
    return {
      cred_pub_tb_120004: (_this$dossier_credit = this.dossier_credit) === null || _this$dossier_credit === void 0 ? void 0 : _this$dossier_credit.cred_pub_tb_120004,
      cred_pub_tb_15601: (_this$dossier_credit2 = this.dossier_credit) === null || _this$dossier_credit2 === void 0 ? void 0 : _this$dossier_credit2.cred_pub_tb_15601,
      facilites_sollicitees: ((_this$dossier_credit3 = this.dossier_credit) === null || _this$dossier_credit3 === void 0 || (_this$dossier_credit3 = _this$dossier_credit3.cred_pub_tb_15601) === null || _this$dossier_credit3 === void 0 ? void 0 : _this$dossier_credit3.facilites_sollicitees) || [],
      propositions_concours: ((_this$dossier_credit4 = this.dossier_credit) === null || _this$dossier_credit4 === void 0 || (_this$dossier_credit4 = _this$dossier_credit4.cred_pub_tb_15601) === null || _this$dossier_credit4 === void 0 ? void 0 : _this$dossier_credit4.propositions_concours) || [],
      garanties: ((_this$dossier_credit5 = this.dossier_credit) === null || _this$dossier_credit5 === void 0 || (_this$dossier_credit5 = _this$dossier_credit5.cred_pub_tb_15601) === null || _this$dossier_credit5 === void 0 ? void 0 : _this$dossier_credit5.garanties) || [],
      tb_name: "tb15601",
      defaultGarantieIds: ['avi', 'assurance', 'caution', 'hypotheque', 'gage', 'divers']
    };
  },
  computed: {
    isUrgent: function isUrgent() {
      var _this$dossier_credit6;
      return ((_this$dossier_credit6 = this.dossier_credit) === null || _this$dossier_credit6 === void 0 || (_this$dossier_credit6 = _this$dossier_credit6.cred_pub_tb_15601) === null || _this$dossier_credit6 === void 0 ? void 0 : _this$dossier_credit6.priorite) == 'Urgent';
    },
    tauxEndettement: function tauxEndettement() {
      var _this$dossier_credit7;
      var te = ((_this$dossier_credit7 = this.dossier_credit) === null || _this$dossier_credit7 === void 0 || (_this$dossier_credit7 = _this$dossier_credit7.cred_pub_tb_15601) === null || _this$dossier_credit7 === void 0 ? void 0 : _this$dossier_credit7.taux_endettement) || {};
      var result = retrieveFromConfig(tauxEndettementConfig, te);
      result.remb_credit_confrere.value = this.getAutreRembConfrere();
      return result;
    },
    rav: function rav() {
      var _this$dossier_credit8;
      var rav = ((_this$dossier_credit8 = this.dossier_credit) === null || _this$dossier_credit8 === void 0 || (_this$dossier_credit8 = _this$dossier_credit8.cred_pub_tb_15601) === null || _this$dossier_credit8 === void 0 ? void 0 : _this$dossier_credit8.rav) || {};
      return retrieveFromConfig(ravConfig, rav);
    },
    filteredGarantie: function filteredGarantie() {
      var _this$cred_pub_tb_, _this$cred_pub_tb_2;
      return (_this$cred_pub_tb_ = (_this$cred_pub_tb_2 = this.cred_pub_tb_15601) === null || _this$cred_pub_tb_2 === void 0 || (_this$cred_pub_tb_2 = _this$cred_pub_tb_2.garanties) === null || _this$cred_pub_tb_2 === void 0 ? void 0 : _this$cred_pub_tb_2.filter(function (garantie) {
        return garantie.checked;
      })) !== null && _this$cred_pub_tb_ !== void 0 ? _this$cred_pub_tb_ : [];
    }
  },
  created: function created() {
    var _this = this;
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            EventBus.$on("dossier-updated-nthd-1", function (data) {
              var item = data.data_tb1;
              _this.cred_pub_tb_15601 = item;
            });
          case 1:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }))();
  },
  methods: {
    // dossier-updated-dcpp-pcp4-0
    parseMontant: function parseMontant(montant) {
      if (typeof montant === 'number') {
        montant = montant.toString();
      } else if (typeof montant === 'string') {
        montant = montant.replace(/\s/g, "").trim();
      } else {
        return 0;
      }
      var valeur = this.localeStringToFloat(montant);
      return isNaN(valeur) ? 0 : valeur;
    },
    getAutreRembConfrere: function getAutreRembConfrere() {
      var _this$cred_pub_tb_3,
        _this2 = this;
      var facilites = (_this$cred_pub_tb_3 = this.cred_pub_tb_120004) === null || _this$cred_pub_tb_3 === void 0 ? void 0 : _this$cred_pub_tb_3.facilites_existante_confrere;
      if (!Array.isArray(facilites) || facilites.length === 0) {
        return 0;
      }
      var total = facilites.reduce(function (sum, el) {
        var montantNum = _this2.parseMontant((el === null || el === void 0 ? void 0 : el.montant_echeance) || "0");
        return sum + (isNaN(montantNum) ? 0 : montantNum);
      }, 0);
      return total;
    },
    formaTypeFacilite: function formaTypeFacilite(data) {
      var _this$cred_pub_tb_4;
      var f = (_this$cred_pub_tb_4 = this.cred_pub_tb_15601) === null || _this$cred_pub_tb_4 === void 0 || (_this$cred_pub_tb_4 = _this$cred_pub_tb_4.propositions_concours) === null || _this$cred_pub_tb_4 === void 0 ? void 0 : _this$cred_pub_tb_4.find(function (f) {
        return f.uuid == data;
      });
      if (f) {
        return f.type_facilite + '-' + f.montant_credit;
      }
      return '';
    },
    handleDoubleClickOrClick: function handleDoubleClickOrClick(_ref, garantieId) {
      var _this$cred_pub_tb_5, _garantie$infos, _this$dossier_credit9;
      var index = _ref.index;
      // console.log(`Clic sur le bouton d'upload pour la garantie ${garantieId}, index ${index}`);
      var garantie = (_this$cred_pub_tb_5 = this.cred_pub_tb_15601) === null || _this$cred_pub_tb_5 === void 0 ? void 0 : _this$cred_pub_tb_5.garanties.find(function (g) {
        return g.id === garantieId;
      });
      var info = garantie === null || garantie === void 0 || (_garantie$infos = garantie.infos) === null || _garantie$infos === void 0 ? void 0 : _garantie$infos[index];
      if (!garantie || !info) {
        console.error('Garantie ou info non trouvée');
        return;
      }

      // console.log('Garantie:', garantie);
      // console.log('Info:', info);

      // Créer un nom unique pour le template
      var identity = "".concat((_this$dossier_credit9 = this.dossier_credit) === null || _this$dossier_credit9 === void 0 ? void 0 : _this$dossier_credit9.cred_pub_key, "_").concat(garantieId, "_").concat(info.id);

      // const templateName = `Pièce(s) jointe(s) {(*)}Suretes_et_garanties_check_list_${identity}_${this.tb_name}`;
      var templateName = "Pi\xE8ce(s) jointe(s) -Suretes_et_garanties_check_list_".concat(identity);

      // const str = "Pièce(s) jointe(s) -Suretes_et_garanties_check_list_202507-0108-55062025-07-01-a7f3fafb-8c7a-468b-b33c-ac12d9b072d1_avi_203db850-2bd9-44ee-b01b-48d39a3b29d3"
      // console.log("str **> ",str);
      // console.log("str === templateName  **> ",str === templateName);

      // Ouvre l'explorateur de fichiers
      EventBus.$emit('open-extra-file-explorer');

      // Envoie les métadonnées pour le template
      setTimeout(function () {
        EventBus.$emit('data-extra-file-explorer', {
          name: templateName,
          view: true
        });
      }, 500);
    },
    handleDoubleClickOrClickCps: function handleDoubleClickOrClickCps(_ref2, garantieId) {
      var _this$cred_pub_tb_6, _garantie$infos2, _this$dossier_credit0;
      var index = _ref2.index;
      var garantie = (_this$cred_pub_tb_6 = this.cred_pub_tb_15601) === null || _this$cred_pub_tb_6 === void 0 ? void 0 : _this$cred_pub_tb_6.garanties.find(function (g) {
        return g.id === garantieId;
      });
      var info = garantie === null || garantie === void 0 || (_garantie$infos2 = garantie.infos) === null || _garantie$infos2 === void 0 ? void 0 : _garantie$infos2[index];
      if (!garantie || !info) {
        console.error('Garantie ou info non trouvée');
        return;
      }

      // Créer un nom unique pour le template
      var identity = "".concat((_this$dossier_credit0 = this.dossier_credit) === null || _this$dossier_credit0 === void 0 ? void 0 : _this$dossier_credit0.cred_pub_key, "_").concat(garantieId, "_").concat(info.id);
      // const templateName = `Pièce(s) jointe(s) {(*)}Suretes_et_garanties_check_list_${identity}_${this.tb_name}`;
      var templateName = "Pi\xE8ce(s) jointe(s) -Suretes_et_garanties_check_list_".concat(identity);
      // const str = "Pièce(s) jointe(s) -Suretes_et_garanties_check_list_202507-0108-55062025-07-01-a7f3fafb-8c7a-468b-b33c-ac12d9b072d1_avi_203db850-2bd9-44ee-b01b-48d39a3b29d3"
      // console.log("str **> ",str);
      // console.log("str === templateName  **> ",str === templateName);

      // Ouvre l'explorateur de fichiers
      EventBus.$emit('open-extra-file-explorer');

      // Envoie les métadonnées pour le template
      setTimeout(function () {
        EventBus.$emit('data-extra-file-explorer', {
          name: templateName,
          view: true
        });
      }, 500);
    },
    getAuthorLabel: function getAuthorLabel(author) {
      switch (author) {
        case 'GC':
          return 'Gestionnaire de Compte';
        case 'ARCH':
          return 'Analyste Holding';
        case 'ARC':
          return 'Analyste DE';
        default:
          return '';
      }
    }
  },
  mounted: function mounted() {
    var _this3 = this;
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _this3.getAutreRembConfrere();
          case 1:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }))();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/Garantie/GarantieOffview.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/Garantie/GarantieOffview.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_connects_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../services/connects.service */ "./resources/js/services/connects.service.js");
/* harmony import */ var _services_afg_garantie_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../services/afg/garantie.service */ "./resources/js/services/afg/garantie.service.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "GarantieOffview",
  props: {
    credPubKey: String,
    facilitesSollicitees: Array,
    garanties: Array,
    commentaire: String,
    tbName: String,
    compact: {
      type: Boolean,
      "default": false
    }
  },
  components: {
    FileCount: {
      name: "FileCount",
      props: {
        count: Number,
        garantieId: String,
        index: Number
      },
      template: "\n      <span v-if=\"count > 0\">\n        <span\n          class=\"p-1 px-2 mx-2 text-nowrap\"\n          style=\"\n            background-color: rgb(44, 62, 80);\n            color: white;\n            font-size: 13px;\n            border-radius: 5px;\n            margin-left: 0 !important;\n            width: 150px;\n          \"\n        >\n          {{ count + \" fichier(s) upload\xE9(s)\" }}\n        </span>\n        <button\n          type=\"button\"\n          class=\"btn shadow-md text-white\"\n          style=\"\n            cursor: pointer;\n            cursor: pointer;\n            background: #2c3e50;\n            width: 26px;\n            font-size: 13px;\n            padding: 1px;\n          \"\n          @click=\"$emit('view-files', { index, garantieId })\"\n          data-toggle=\"tooltip\"\n          title=\"Cliquer ici pour uploader ou voir le(s) fichier(s)\"\n        >\n          <i class=\"icofont-attachment\"></i>\n        </button>\n      </span>\n      <span v-else class=\"text-danger\">\n        Aucun fichier(s) upload\xE9(s)\n      </span>\n      "
    },
    RecueillieCheckbox: {
      name: "RecueillieCheckbox",
      props: {
        isRecueillie: {
          type: [String, null]
        }
      },
      template: "\n      <span>\n        <span class=\"badge badge-danger\" v-if=\"isRecueillie?.toLowerCase() =='non'\">\n          A Recueillir\n        </span>\n        <span class=\"badge badge-success\" v-else-if=\"isRecueillie?.toLowerCase() == 'oui'\">\n          Recueillie\n        </span>\n        <span class=\"badge badge-secondary\" v-else>\n          Non Sp\xE9cifi\xE9e\n        </span>\n      </span>\n      "
    }
  },
  data: function data() {
    return {
      connectsHost: _services_connects_service__WEBPACK_IMPORTED_MODULE_0__["default"].loadablehost(),
      dataGaranties: this.garanties,
      files: []
    };
  },
  computed: {
    computedGaranties: function computedGaranties() {
      var _this = this;
      var garanties = (this.dataGaranties || []).filter(function (g) {
        return g.checked;
      }).map(function (garantie) {
        var infos = garantie.infos.map(function (info, infoIndex) {
          var formattedInfo = _services_afg_garantie_service__WEBPACK_IMPORTED_MODULE_1__.GarantieService.getOrderedInfo(_services_afg_garantie_service__WEBPACK_IMPORTED_MODULE_1__.GarantieService.getLabeledInfo(garantie.id, info));
          if (!formattedInfo) return null;
          for (var key in formattedInfo) {
            var _formattedInfo$key;
            if (!((_formattedInfo$key = formattedInfo[key]) !== null && _formattedInfo$key !== void 0 && _formattedInfo$key.displayable)) {
              continue;
            }
            if (formattedInfo[key] === null || formattedInfo[key] === undefined) {
              formattedInfo[key] = '';
            }
            var value = formattedInfo[key].value;
            var component = null;
            switch (key) {
              case 'ligneCredit':
                value = _this.formaTypeFacilite(value);
                break;
              case 'montant':
              case 'valeurAssuree':
              case 'valeur_caution':
              case 'valeur_marchande':
              case 'valeur_considere':
                value = _this.formatAmount(value);
                break;
              case 'files':
                component = 'FileCount';
                value = {
                  count: value,
                  garantieId: garantie.id,
                  index: infoIndex
                };
                break;
              case 'is_recueillie':
                component = 'RecueillieCheckbox';
                value = {
                  isRecueillie: value
                };
                break;
              case 'annee_achat':
                value = _this.formatDate(value);
                break;
              case 'commentaire':
                value = value ? value : 'Pas de commentaire';
                break;
              default:
                break;
            }
            formattedInfo[key].value = value;
            if (component) {
              formattedInfo[key].component = component;
            }
          }
          return formattedInfo;
        }).filter(Boolean);
        return _objectSpread(_objectSpread({}, garantie), {}, {
          countInfos: infos.length,
          infos: infos
        });
      });
      if (!this.compact) return garanties;

      // actuellement garanties a cette structure:
      [{
        id: 'garantie1',
        name: 'Garantie 1',
        checked: true,
        countInfos: 2,
        infos: [{
          ligneCredit: {
            label: '...',
            value: 'credit1',
            displayable: true
          },
          montant: {
            label: 'Montant',
            value: 100000,
            displayable: true
          },
          is_recueillie: {
            label: 'Recueillie',
            value: {
              isRecueillie: 'oui'
            },
            displayable: true,
            component: 'RecueillieCheckbox'
          },
          files: {
            label: 'Fichiers',
            value: {
              count: 2
            },
            displayable: true,
            component: 'FileCount'
          }
        }, {
          ligneCredit: {
            label: '...',
            value: 'credit2',
            displayable: true
          },
          montant: {
            label: 'Montant',
            value: 100000,
            displayable: true
          },
          is_recueillie: {
            label: 'Recueillie',
            value: {
              isRecueillie: 'oui'
            },
            displayable: true,
            component: 'RecueillieCheckbox'
          },
          files: {
            label: 'Fichiers',
            value: {
              count: 2
            },
            displayable: true,
            component: 'FileCount'
          }
        }]
      }];
      // On veut les infos sous ce format:
      [{
        id: 'garantie1',
        name: 'Garantie 1',
        checked: true,
        countInfos: 2,
        infos: {
          ligneCredit: {
            label: '...',
            displayable: true,
            value: ['credit1', 'credit2']
          },
          montant: {
            label: 'Montant',
            displayable: true,
            value: [100000, 100000]
          },
          is_recueillie: {
            label: 'Recueillie',
            displayable: true,
            component: 'RecueillieCheckbox',
            value: [{
              isRecueillie: 'oui'
            }, {
              isRecueillie: 'oui'
            }]
          },
          files: {
            label: 'Fichiers',
            displayable: true,
            component: 'FileCount',
            value: [{
              count: 2
            }, {
              count: 2
            }]
          }
        }
      }];
      var compactedGaranties = garanties.map(function (garantie) {
        var infos = {};
        garantie.infos.forEach(function (info) {
          for (var key in info) {
            var _info$key = info[key],
              label = _info$key.label,
              displayable = _info$key.displayable,
              component = _info$key.component,
              value = _info$key.value;
            if (!infos[key]) {
              infos[key] = _objectSpread(_objectSpread({
                label: label,
                displayable: displayable
              }, component && {
                component: component
              }), {}, {
                value: []
              });
            }
            infos[key].value.push(value);
          }
        });
        return _objectSpread(_objectSpread({}, garantie), {}, {
          infos: infos
        });
      });
      return compactedGaranties;
    }
  },
  methods: {
    formaTypeFacilite: function formaTypeFacilite(data) {
      var _this$facilitesSollic;
      var f = (_this$facilitesSollic = this.facilitesSollicitees) === null || _this$facilitesSollic === void 0 ? void 0 : _this$facilitesSollic.find(function (f) {
        return f.uuid == data;
      });
      if (!f) return '';
      return f.type_facilite + '-' + f.montant_credit;
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
      var _num$toString;
      var num = parseFloat(String(this.localeStringToFloat(x || '0')));
      return num === null || num === void 0 || (_num$toString = num.toString()) === null || _num$toString === void 0 ? void 0 : _num$toString.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    },
    handleDoubleClickOrClick: function handleDoubleClickOrClick(_ref, garantieId) {
      var _garantie$infos;
      var index = _ref.index;
      var garantie = this.dataGaranties.find(function (g) {
        return g.id === garantieId;
      });
      var info = garantie === null || garantie === void 0 || (_garantie$infos = garantie.infos) === null || _garantie$infos === void 0 ? void 0 : _garantie$infos[index];
      if (!garantie || !info) {
        return;
      }

      // Créer un nom unique pour le template
      var identity = "".concat(this.credPubKey, "_").concat(garantieId, "_").concat(info.id);
      // const templateName = `Pièce(s) jointe(s) {(*)}Suretes_et_garanties_check_list_${identity}_${this.tbName}`;
      var templateName = "Pi\xE8ce(s) jointe(s) {(*)}Suretes_et_garanties_check_list_".concat(identity);

      // Ouvre l'explorateur de fichiers
      EventBus.$emit('open-extra-file-explorer');

      // Envoie les métadonnées pour le template
      setTimeout(function () {
        EventBus.$emit('data-extra-file-explorer', {
          name: templateName,
          view: true
        });
      }, 500);
    },
    getFiles: function getFiles() {
      var _this2 = this;
      ProxyService.proxyEbapis({
        url: this.connectsHost + 'api/get-files',
        method: 'POST',
        data: {
          file_identity: this.credPubKey
        }
      }).then(function (res) {
        var _res$data$data;
        res.data = JSON.parse(res.data);
        if (((_res$data$data = res.data.data) === null || _res$data$data === void 0 ? void 0 : _res$data$data.length) >= 0) {
          _this2.files = res.data.data;
          _this2.dataGaranties.forEach(function (garantie, garantieIndex) {
            garantie.infos.forEach(function (info, infoIndex) {
              var count = 0;
              _this2.files.forEach(function (file) {
                var _info$template;
                if (file !== null && file !== void 0 && file.extra_file_template_id && (info === null || info === void 0 || (_info$template = info.template) === null || _info$template === void 0 ? void 0 : _info$template.id) === file.extra_file_template_id) {
                  count++;
                }
              });
              _this2.dataGaranties[garantieIndex].infos[index]["files"] = count;
            });
          });
          _this2.$emit('input-change', _this2.dataGaranties);
        }
      })["catch"](function (err) {
        console.error('Erreur lors de la récupération des fichiers:', err);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/contre_analyse_groupe/NT2.vue?vue&type=template&id=72e50aa2&scoped=true":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/contre_analyse_groupe/NT2.vue?vue&type=template&id=72e50aa2&scoped=true ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm$dossier_credit, _vm$cred_pub_tb_, _vm$cred_pub_tb_2, _vm$cred_pub_tb_3, _vm$cred_pub_tb_4, _vm$cred_pub_tb_5, _vm$cred_pub_tb_6, _vm$cred_pub_tb_7, _vm$cred_pub_tb_8, _vm$cred_pub_tb_9, _vm$cred_pub_tb_0, _vm$cred_pub_tb_1, _vm$cred_pub_tb_10, _vm$cred_pub_tb_11, _vm$cred_pub_tb_12;
  var _vm = this,
    _c = _vm._self._c;
  return (_vm$dossier_credit = _vm.dossier_credit) !== null && _vm$dossier_credit !== void 0 && _vm$dossier_credit.cred_pub_tb_15601 ? _c("div", {
    staticClass: "row mt-4 mb-2"
  }, [_c("div", {
    staticClass: "justify-content-center"
  }, [_c("div", {
    staticClass: "table-responsive"
  }, [_c("div", {
    staticClass: "mt-4"
  }, [_c("div", {
    staticClass: "p-2 text-center fw-bold",
    staticStyle: {
      border: "1px solid"
    }
  }, [_vm._v("\n                    Proposition de concours / Facilité (Holding)\n                ")]), _vm._v(" "), _c("div", {
    staticClass: "col-12"
  }, [_c("div", {}, [_c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-bordered border-dark",
    staticStyle: {
      border: "none"
    }
  }, [_c("thead"), _vm._v(" "), _c("tbody", [_c("tr", [_c("td", {
    staticClass: "sticky-col"
  }, [_vm._v("Type de crédit")]), _vm._v(" "), _vm._l((_vm$cred_pub_tb_ = _vm.cred_pub_tb_15601) === null || _vm$cred_pub_tb_ === void 0 ? void 0 : _vm$cred_pub_tb_.propositions_concours, function (cp, index) {
    var _cp$type_facilite;
    return _c("td", {
      key: "type-" + index
    }, [_vm._v("\n                                " + _vm._s((_cp$type_facilite = cp === null || cp === void 0 ? void 0 : cp.type_facilite) !== null && _cp$type_facilite !== void 0 ? _cp$type_facilite : "-") + "\n                                ")]);
  })], 2), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "sticky-col"
  }, [_vm._v("Descr. produit")]), _vm._v(" "), _vm._l((_vm$cred_pub_tb_2 = _vm.cred_pub_tb_15601) === null || _vm$cred_pub_tb_2 === void 0 ? void 0 : _vm$cred_pub_tb_2.propositions_concours, function (cp, index) {
    var _cp$infos_fcub$PRODUC, _cp$infos_fcub;
    return _c("td", {
      key: "prod-desc-" + index
    }, [_vm._v("\n                                " + _vm._s((_cp$infos_fcub$PRODUC = cp === null || cp === void 0 || (_cp$infos_fcub = cp.infos_fcub) === null || _cp$infos_fcub === void 0 ? void 0 : _cp$infos_fcub.PRODUCT_DESC) !== null && _cp$infos_fcub$PRODUC !== void 0 ? _cp$infos_fcub$PRODUC : "-") + "\n                                ")]);
  })], 2), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "sticky-col"
  }, [_vm._v("Montant demandé (Client)")]), _vm._v(" "), _vm._l((_vm$cred_pub_tb_3 = _vm.cred_pub_tb_15601) === null || _vm$cred_pub_tb_3 === void 0 ? void 0 : _vm$cred_pub_tb_3.propositions_concours, function (cp, index) {
    var _cp$montant_demande;
    return _c("td", {
      key: "montant-demande-" + index
    }, [_vm._v("\n                                " + _vm._s((_cp$montant_demande = cp === null || cp === void 0 ? void 0 : cp.montant_demande) !== null && _cp$montant_demande !== void 0 ? _cp$montant_demande : "-") + "\n                                ")]);
  })], 2), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "sticky-col"
  }, [_vm._v("Montant crédit (Prop. HOLDING)")]), _vm._v(" "), _vm._l((_vm$cred_pub_tb_4 = _vm.cred_pub_tb_15601) === null || _vm$cred_pub_tb_4 === void 0 ? void 0 : _vm$cred_pub_tb_4.propositions_concours, function (cp, index) {
    var _cp$montant_credit;
    return _c("td", {
      key: "montant-credit-" + index
    }, [_vm._v("\n                                " + _vm._s((_cp$montant_credit = cp === null || cp === void 0 ? void 0 : cp.montant_credit) !== null && _cp$montant_credit !== void 0 ? _cp$montant_credit : "-") + "\n                                ")]);
  })], 2), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "sticky-col"
  }, [_vm._v("Durée (Mois)")]), _vm._v(" "), _vm._l((_vm$cred_pub_tb_5 = _vm.cred_pub_tb_15601) === null || _vm$cred_pub_tb_5 === void 0 ? void 0 : _vm$cred_pub_tb_5.propositions_concours, function (cp, index) {
    var _cp$duree;
    return _c("td", {
      key: "duree-" + index
    }, [_vm._v("\n                                " + _vm._s((_cp$duree = cp === null || cp === void 0 ? void 0 : cp.duree) !== null && _cp$duree !== void 0 ? _cp$duree : "-") + "\n                                ")]);
  })], 2), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "sticky-col"
  }, [_vm._v("Taux (%)")]), _vm._v(" "), _vm._l((_vm$cred_pub_tb_6 = _vm.cred_pub_tb_15601) === null || _vm$cred_pub_tb_6 === void 0 ? void 0 : _vm$cred_pub_tb_6.propositions_concours, function (cp, index) {
    var _cp$taux;
    return _c("td", {
      key: "taux-" + index
    }, [_vm._v("\n                                " + _vm._s((_cp$taux = cp === null || cp === void 0 ? void 0 : cp.taux) !== null && _cp$taux !== void 0 ? _cp$taux : "-") + "\n                                ")]);
  })], 2), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "sticky-col"
  }, [_vm._v("Echéancier")]), _vm._v(" "), _vm._l((_vm$cred_pub_tb_7 = _vm.cred_pub_tb_15601) === null || _vm$cred_pub_tb_7 === void 0 ? void 0 : _vm$cred_pub_tb_7.propositions_concours, function (cp, index) {
    var _cp$echeancier;
    return _c("td", {
      key: "echeancier-" + index
    }, [_vm._v("\n                                " + _vm._s((_cp$echeancier = cp === null || cp === void 0 ? void 0 : cp.echeancier) !== null && _cp$echeancier !== void 0 ? _cp$echeancier : "-") + "\n                                ")]);
  })], 2), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "sticky-col"
  }, [_vm._v("Montant de l'échéance")]), _vm._v(" "), _vm._l((_vm$cred_pub_tb_8 = _vm.cred_pub_tb_15601) === null || _vm$cred_pub_tb_8 === void 0 ? void 0 : _vm$cred_pub_tb_8.propositions_concours, function (cp, index) {
    var _cp$montant_echeance;
    return _c("td", {
      key: "montant-ech-" + index
    }, [_vm._v("\n                                " + _vm._s((_cp$montant_echeance = cp === null || cp === void 0 ? void 0 : cp.montant_echeance) !== null && _cp$montant_echeance !== void 0 ? _cp$montant_echeance : "-") + "\n                                ")]);
  })], 2), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "sticky-col"
  }, [_vm._v("Date 1ère échéance")]), _vm._v(" "), _vm._l((_vm$cred_pub_tb_9 = _vm.cred_pub_tb_15601) === null || _vm$cred_pub_tb_9 === void 0 ? void 0 : _vm$cred_pub_tb_9.propositions_concours, function (cp, index) {
    return _c("td", {
      key: "date-ech-" + index
    }, [_vm._v("\n                                " + _vm._s(cp !== null && cp !== void 0 && cp.date_echeance ? _vm.formatDate(cp.date_echeance) : "-") + "\n                                ")]);
  })], 2), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "sticky-col"
  }, [_vm._v("Rachat")]), _vm._v(" "), _vm._l((_vm$cred_pub_tb_0 = _vm.cred_pub_tb_15601) === null || _vm$cred_pub_tb_0 === void 0 ? void 0 : _vm$cred_pub_tb_0.propositions_concours, function (cp, index) {
    var _cp$is_rachat;
    return _c("td", {
      key: "rachat-" + index
    }, [_vm._v("\n                                " + _vm._s((_cp$is_rachat = cp === null || cp === void 0 ? void 0 : cp.is_rachat) !== null && _cp$is_rachat !== void 0 ? _cp$is_rachat : "-") + "\n                                ")]);
  })], 2), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "sticky-col"
  }, [_vm._v("Type de rachat")]), _vm._v(" "), _vm._l((_vm$cred_pub_tb_1 = _vm.cred_pub_tb_15601) === null || _vm$cred_pub_tb_1 === void 0 ? void 0 : _vm$cred_pub_tb_1.propositions_concours, function (cp, index) {
    var _cp$type_rachat;
    return _c("td", {
      key: "type-rachat-" + index
    }, [_vm._v("\n                                " + _vm._s((_cp$type_rachat = cp === null || cp === void 0 ? void 0 : cp.type_rachat) !== null && _cp$type_rachat !== void 0 ? _cp$type_rachat : "-") + "\n                                ")]);
  })], 2), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "sticky-col"
  }, [_vm._v("N° prêt flexcube")]), _vm._v(" "), _vm._l((_vm$cred_pub_tb_10 = _vm.cred_pub_tb_15601) === null || _vm$cred_pub_tb_10 === void 0 ? void 0 : _vm$cred_pub_tb_10.propositions_concours, function (cp, index) {
    var _cp$num_fcub_pret;
    return _c("td", {
      key: "pret-" + index
    }, [_vm._v("\n                                " + _vm._s((_cp$num_fcub_pret = cp === null || cp === void 0 ? void 0 : cp.num_fcub_pret) !== null && _cp$num_fcub_pret !== void 0 ? _cp$num_fcub_pret : "-") + "\n                                ")]);
  })], 2), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "sticky-col"
  }, [_vm._v("Montant du rachat")]), _vm._v(" "), _vm._l((_vm$cred_pub_tb_11 = _vm.cred_pub_tb_15601) === null || _vm$cred_pub_tb_11 === void 0 ? void 0 : _vm$cred_pub_tb_11.propositions_concours, function (cp, index) {
    var _cp$montant_rachat;
    return _c("td", {
      key: "montant-rachat-" + index
    }, [_vm._v("\n                                " + _vm._s((_cp$montant_rachat = cp === null || cp === void 0 ? void 0 : cp.montant_rachat) !== null && _cp$montant_rachat !== void 0 ? _cp$montant_rachat : "-") + "\n                                ")]);
  })], 2), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "sticky-col"
  }, [_vm._v("Commentaire")]), _vm._v(" "), _vm._l((_vm$cred_pub_tb_12 = _vm.cred_pub_tb_15601) === null || _vm$cred_pub_tb_12 === void 0 ? void 0 : _vm$cred_pub_tb_12.propositions_concours, function (cp, index) {
    var _cp$commentaire;
    return _c("td", {
      key: "commentaire-" + index
    }, [_vm._v("\n                                " + _vm._s((_cp$commentaire = cp === null || cp === void 0 ? void 0 : cp.commentaire) !== null && _cp$commentaire !== void 0 ? _cp$commentaire : "-") + "\n                                ")]);
  })], 2)])])])])])]), _vm._v(" "), _c("div", {
    staticClass: "mt-4"
  }, [_vm._m(0), _vm._v(" "), _vm.filteredGarantie.length > 0 ? [_c("ul", _vm._l(_vm.filteredGarantie, function (garantie, index) {
    return garantie.checked ? _c("li", {
      key: garantie.id
    }, [_vm._v("\n                            - " + _vm._s(garantie.name) + " "), _c("span", {
      staticClass: "fw-bold small-text-italic"
    }, [_vm._v("(" + _vm._s(_vm.getAuthorLabel(garantie.author)) + ")")])]) : _vm._e();
  }), 0)] : [_vm._m(1)]], 2), _vm._v(" "), _c("div", {
    staticClass: "mt-4"
  }, [_vm._m(2), _vm._v(" "), _c("div", {
    staticClass: "card-body border border-dark px-2 py-4"
  }, [_c("div", {
    staticClass: "table-responsive p-2"
  }, [_c("table", {
    staticClass: "table table-bordered border-dark"
  }, [_c("tbody", _vm._l(_vm.tauxEndettement, function (item, key) {
    return _c("tr", {
      key: key
    }, [_c("td", {
      "class": {
        "fw-bold": item.bold
      }
    }, [_vm._v("\n                                        " + _vm._s(item.label) + " "), _c("span", {
      staticClass: "fw-bold"
    }, [_vm._v(_vm._s(item.formule))])]), _vm._v(" "), _c("td", {
      "class": {
        "fw-bold": item.bold
      }
    }, [_vm._v("\n                                        " + _vm._s(_vm._f("formatNumber")(item.value)) + " "), item.percentage ? _c("span", [_vm._v("%")]) : _vm._e()])]);
  }), 0)])])])])])])]) : _vm._e();
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "justify-content-center"
  }, [_c("div", {
    staticClass: "head-memorandum-title"
  }, [_vm._v("Garanties & Documentation")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("tr", [_c("td", {
    staticClass: "text-center text-danger",
    attrs: {
      colspan: "2"
    }
  }, [_vm._v("Aucune(s) garantie(s)/sûreté(s) saisie(s)")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "text-center mb-2"
  }, [_c("span", {
    staticStyle: {
      "text-decoration": "underline",
      "font-size": "18px"
    }
  }, [_vm._v("Taux d'endettement")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/Garantie/GarantieOffview.vue?vue&type=template&id=42cb27fe&scoped=true":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/Garantie/GarantieOffview.vue?vue&type=template&id=42cb27fe&scoped=true ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12"
  }, [_c("div", {
    staticClass: "mt-3"
  }, [_c("h3", {
    staticClass: "text-center underline fw-bold text-uppercase fs-normal"
  }, [_vm._v("\n        A- RESUME DES GARANTIES\n      ")]), _vm._v(" "), _c("div", {
    staticClass: "table-responsive mt-3"
  }, [_c("table", {
    staticClass: "table table-bordered"
  }, [_vm._m(0), _vm._v(" "), _c("tbody", _vm._l(_vm.computedGaranties, function (garantie) {
    return _c("tr", {
      key: garantie.id
    }, [[_vm._m(1, true), _vm._v(" "), _c("td", [_vm._v(_vm._s(garantie.name))])]], 2);
  }), 0)])])]), _vm._v(" "), _c("div", {
    staticClass: "mt-4"
  }, [_c("h3", {
    staticClass: "text-center underline fw-bold text-uppercase fs-normal"
  }, [_vm._v("\n        B- DETAILS SUR LES GARANTIES\n      ")]), _vm._v(" "), _vm.compact ? _c("div", {
    staticClass: "mt-3"
  }, [_vm._l(_vm.computedGaranties, function (garantie) {
    return [_c("div", {
      staticClass: "table-responsive garantie-details mt-3"
    }, [_c("h4", {
      staticClass: "garantie-title"
    }, [_vm._v("\n              " + _vm._s(garantie.name) + "\n            ")]), _vm._v(" "), _c("table", {
      staticClass: "table table-bordered"
    }, [_c("tbody", [_vm._l(Object.entries(garantie.infos), function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
        key = _ref2[0],
        item = _ref2[1];
      return [item.displayable ? _c("tr", {
        key: "".concat(garantie.id, "-compact-").concat(key)
      }, [_c("td", {
        staticClass: "sticky-col fw-bold label-col"
      }, [_c("span", {
        staticClass: "fw-bold"
      }, [_vm._v(_vm._s(item === null || item === void 0 ? void 0 : item.label))])]), _vm._v(" "), _vm._l(item.value, function (value, valueIndex) {
        return _c("td", {
          key: "".concat(garantie.id, "-compact-").concat(key, "-").concat(valueIndex),
          staticClass: "data-col"
        }, [item.component ? [_c(item.component, _vm._b({
          tag: "component",
          on: {
            "view-files": function viewFiles($event) {
              return _vm.handleDoubleClickOrClick({
                index: valueIndex
              }, garantie.id);
            }
          }
        }, "component", _objectSpread({}, value), false))] : item.value && value ? _c("span", [_vm._v("\n                        " + _vm._s(value) + "\n                      ")]) : _c("span", {
          staticClass: "text-muted"
        }, [_vm._v("Non spécifié")])], 2);
      })], 2) : _vm._e()];
    })], 2)])])];
  })], 2) : _c("div", {
    staticClass: "mt-3"
  }, [_vm._l(_vm.computedGaranties, function (garantie) {
    return _vm._l(garantie.infos, function (info, infoIndex) {
      var _info$id;
      return _c("div", {
        key: "".concat(garantie.id, "-").concat((_info$id = info.id) !== null && _info$id !== void 0 ? _info$id : infoIndex),
        staticClass: "table-responsive mt-3"
      }, [_c("table", {
        staticClass: "table table-bordered"
      }, [_c("thead", [_c("tr", [_c("th", {
        staticClass: "sticky-col fw-bold text-center bg-white",
        attrs: {
          colspan: "2"
        }
      }, [_vm._v("\n                    " + _vm._s(garantie.name) + "\n                  ")])])]), _vm._v(" "), _c("tbody", [_vm._l(Object.entries(info), function (_ref3) {
        var _info$id2;
        var _ref4 = _slicedToArray(_ref3, 2),
          key = _ref4[0],
          item = _ref4[1];
        return [item.displayable ? _c("tr", {
          key: "".concat(garantie.id, "-").concat((_info$id2 = info.id) !== null && _info$id2 !== void 0 ? _info$id2 : infoIndex, "-").concat(key)
        }, [_c("td", {
          staticClass: "sticky-col fw-bold label-col"
        }, [_c("span", {
          staticClass: "fw-bold"
        }, [_vm._v(_vm._s(item === null || item === void 0 ? void 0 : item.label))])]), _vm._v(" "), _c("td", [item.component ? [_c(item.component, _vm._b({
          tag: "component",
          on: {
            "view-files": function viewFiles($event) {
              return _vm.handleDoubleClickOrClick({
                index: infoIndex
              }, garantie.id);
            }
          }
        }, "component", _objectSpread({}, item.value), false))] : item.value ? _c("span", [_vm._v("\n                        " + _vm._s(item.value) + "\n                      ")]) : _c("span", {
          staticClass: "text-muted"
        }, [_vm._v("Non spécifié")])], 2)]) : _vm._e()];
      })], 2)])]);
    });
  })], 2)]), _vm._v(" "), _c("div", {
    staticClass: "mt-4"
  }, [_c("h3", {
    staticClass: "text-center underline fw-bold text-uppercase fs-normal"
  }, [_vm._v("\n        C- COMMENTAIRE\n      ")]), _vm._v(" "), _c("div", {
    staticClass: "mt-2"
  }, [_c("span", {
    domProps: {
      innerHTML: _vm._s(_vm.commentaire || "Pas de commentaire")
    }
  })])])])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", {
    staticClass: "text-center"
  }, [_c("th"), _vm._v(" "), _c("th", {
    staticClass: "text-center"
  }, [_c("label", [_vm._v("Type garantie")])])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {
    staticClass: "text-center"
  }, [_c("input", {
    staticClass: "form-check-input",
    staticStyle: {
      width: "20px",
      height: "20px"
    },
    attrs: {
      disabled: "",
      type: "checkbox",
      checked: ""
    }
  })]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/contre_analyse_groupe/NT2.vue?vue&type=style&index=0&id=72e50aa2&scoped=true&lang=css":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/contre_analyse_groupe/NT2.vue?vue&type=style&index=0&id=72e50aa2&scoped=true&lang=css ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.head-memorandum-title[data-v-72e50aa2] {\r\n   font-weight: bold;\r\n   text-transform: uppercase;\r\n   text-align: center;border: 1px solid;\r\n   padding: 4px;\n}\n.memo[data-v-72e50aa2] {\r\n    margin-top: 10px;\r\n    padding: 10px;\r\n    border: 2px solid #fff;\r\n    font-weight: 550;\r\n    font-size: 16px;\r\n    text-align: left;\r\n    text-transform: uppercase;\r\n    background-color: #34495e;\r\n    color: #fff;\n}\nth[data-v-72e50aa2] {\r\n    background: #f4f3f3 !important;\n}\n.bg-grey[data-v-72e50aa2] {\r\n    background-color: #f4f3f3;\r\n    width: 32%;\n}\n.urgent[data-v-72e50aa2] {\r\n    background: #e74c3c;\n}\n.not-urgent[data-v-72e50aa2] {\r\n    background: #3498db;\n}\n.sticky-col[data-v-72e50aa2] {\r\n    position: sticky;\r\n    left: 0;\r\n    background: #f8f9fa;\r\n    /* z-index: 15; */\r\n    min-width: 200px;\r\n    font-weight: bold;\n}\n.table-bordered .sticky-col[data-v-72e50aa2] {\r\n    border-right: 2px solid #dee2e6;\n}\nthead th[data-v-72e50aa2] {\r\n    position: sticky;\r\n    top: 0;\r\n    background: #f8f9fa;\r\n    /* z-index: 10; */\n}\n.small-text-italic[data-v-72e50aa2]{\r\n    font-size: 0.8em;  /* ou une valeur en px, ex. 12px */\r\n  font-style: italic;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/Garantie/GarantieOffview.vue?vue&type=style&index=0&id=42cb27fe&scoped=true&lang=css":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/Garantie/GarantieOffview.vue?vue&type=style&index=0&id=42cb27fe&scoped=true&lang=css ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.sticky-col[data-v-42cb27fe] {\r\n  position: sticky;\r\n  left: 0;\r\n  background: #f8f9fa;\r\n  /* z-index: 15; */\r\n  min-width: 200px;\r\n  font-weight: bold;\n}\ntable[data-v-42cb27fe] {\r\n  border: none;\n}\n.garantie-details table td[data-v-42cb27fe]:first-child,\r\n.garantie-details table th[data-v-42cb27fe]:first-child {\r\n  border-left: 0;\n}\n.garantie-details table td[data-v-42cb27fe]:last-child,\r\n.garantie-details table th[data-v-42cb27fe]:last-child {\r\n  border-right: 0;\n}\n.garantie-details table tr[data-v-42cb27fe]:last-child {\r\n  border-bottom: 0;\n}\n.garantie-details[data-v-42cb27fe] {\r\n  border: 1px solid #000;\r\n  position: relative;\n}\n.garantie-details .garantie-title[data-v-42cb27fe] {\r\n  font-weight: bold;\r\n  font-size: 1rem;\r\n  text-align: center;\r\n  padding: 0.5rem;\r\n  /* border: 1px solid #000; */\r\n  border-bottom: none;\r\n  margin: 0;\r\n  position: sticky;\r\n  left: 0;\r\n  top: 0;\n}\nthead th[data-v-42cb27fe] {\r\n  position: sticky;\r\n  top: 0;\r\n  background: #f8f9fa;\r\n  z-index: 10;\n}\n.bg-grey[data-v-42cb27fe] {\r\n  background-color: #f4f3f3;\n}\ninput[type=checkbox][data-v-42cb27fe] {\r\n  padding: 10px;\n}\ninput[type=\"checkbox\"][data-v-42cb27fe]:disabled:checked {\r\n  -webkit-appearance: none;\r\n     -moz-appearance: none;\r\n          appearance: none;\r\n  padding: 7px;\r\n  background-color: #007bff;\r\n  border-radius: 2px;\r\n  position: relative;\r\n  cursor: not-allowed;\r\n  margin-top: 5px;\n}\ninput[type=\"checkbox\"][data-v-42cb27fe]:disabled:checked::after {\r\n  content: '✔';\r\n  color: white;\r\n  font-size: 8px;\r\n  font-weight: bold;\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\n}\nthead th[data-v-42cb27fe] {\r\n  background: initial !important;\n}\n.vertical-middle[data-v-42cb27fe] {\r\n  vertical-align: middle;\n}\ntable[data-v-42cb27fe] {\r\n  margin-bottom: 0;\n}\ntable .label-col[data-v-42cb27fe] {\r\n  min-width: 300px;\r\n  width: 300px;\r\n  max-width: 300px;\n}\ntable .data-col[data-v-42cb27fe] {\r\n  min-width: 250px;\r\n  max-width: 300px;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/contre_analyse_groupe/NT2.vue?vue&type=style&index=0&id=72e50aa2&scoped=true&lang=css":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/contre_analyse_groupe/NT2.vue?vue&type=style&index=0&id=72e50aa2&scoped=true&lang=css ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NT2_vue_vue_type_style_index_0_id_72e50aa2_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NT2.vue?vue&type=style&index=0&id=72e50aa2&scoped=true&lang=css */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/contre_analyse_groupe/NT2.vue?vue&type=style&index=0&id=72e50aa2&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NT2_vue_vue_type_style_index_0_id_72e50aa2_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NT2_vue_vue_type_style_index_0_id_72e50aa2_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/Garantie/GarantieOffview.vue?vue&type=style&index=0&id=42cb27fe&scoped=true&lang=css":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/Garantie/GarantieOffview.vue?vue&type=style&index=0&id=42cb27fe&scoped=true&lang=css ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GarantieOffview_vue_vue_type_style_index_0_id_42cb27fe_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GarantieOffview.vue?vue&type=style&index=0&id=42cb27fe&scoped=true&lang=css */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/Garantie/GarantieOffview.vue?vue&type=style&index=0&id=42cb27fe&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GarantieOffview_vue_vue_type_style_index_0_id_42cb27fe_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GarantieOffview_vue_vue_type_style_index_0_id_42cb27fe_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/offview/bank/afg/contre_analyse_groupe/NT2.vue":
/*!********************************************************************************!*\
  !*** ./resources/js/components/offview/bank/afg/contre_analyse_groupe/NT2.vue ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _NT2_vue_vue_type_template_id_72e50aa2_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NT2.vue?vue&type=template&id=72e50aa2&scoped=true */ "./resources/js/components/offview/bank/afg/contre_analyse_groupe/NT2.vue?vue&type=template&id=72e50aa2&scoped=true");
/* harmony import */ var _NT2_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NT2.vue?vue&type=script&lang=js */ "./resources/js/components/offview/bank/afg/contre_analyse_groupe/NT2.vue?vue&type=script&lang=js");
/* harmony import */ var _NT2_vue_vue_type_style_index_0_id_72e50aa2_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NT2.vue?vue&type=style&index=0&id=72e50aa2&scoped=true&lang=css */ "./resources/js/components/offview/bank/afg/contre_analyse_groupe/NT2.vue?vue&type=style&index=0&id=72e50aa2&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _NT2_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _NT2_vue_vue_type_template_id_72e50aa2_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _NT2_vue_vue_type_template_id_72e50aa2_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "72e50aa2",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/offview/bank/afg/contre_analyse_groupe/NT2.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/offview/bank/afg/contre_analyse_groupe/NT2.vue?vue&type=script&lang=js":
/*!********************************************************************************************************!*\
  !*** ./resources/js/components/offview/bank/afg/contre_analyse_groupe/NT2.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NT2_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NT2.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/contre_analyse_groupe/NT2.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NT2_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/offview/bank/afg/contre_analyse_groupe/NT2.vue?vue&type=style&index=0&id=72e50aa2&scoped=true&lang=css":
/*!****************************************************************************************************************************************!*\
  !*** ./resources/js/components/offview/bank/afg/contre_analyse_groupe/NT2.vue?vue&type=style&index=0&id=72e50aa2&scoped=true&lang=css ***!
  \****************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NT2_vue_vue_type_style_index_0_id_72e50aa2_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NT2.vue?vue&type=style&index=0&id=72e50aa2&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/contre_analyse_groupe/NT2.vue?vue&type=style&index=0&id=72e50aa2&scoped=true&lang=css");


/***/ }),

/***/ "./resources/js/components/offview/bank/afg/contre_analyse_groupe/NT2.vue?vue&type=template&id=72e50aa2&scoped=true":
/*!**************************************************************************************************************************!*\
  !*** ./resources/js/components/offview/bank/afg/contre_analyse_groupe/NT2.vue?vue&type=template&id=72e50aa2&scoped=true ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NT2_vue_vue_type_template_id_72e50aa2_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NT2_vue_vue_type_template_id_72e50aa2_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NT2_vue_vue_type_template_id_72e50aa2_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NT2.vue?vue&type=template&id=72e50aa2&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/contre_analyse_groupe/NT2.vue?vue&type=template&id=72e50aa2&scoped=true");


/***/ }),

/***/ "./resources/js/components/shared/afg/Garantie/GarantieOffview.vue":
/*!*************************************************************************!*\
  !*** ./resources/js/components/shared/afg/Garantie/GarantieOffview.vue ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _GarantieOffview_vue_vue_type_template_id_42cb27fe_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GarantieOffview.vue?vue&type=template&id=42cb27fe&scoped=true */ "./resources/js/components/shared/afg/Garantie/GarantieOffview.vue?vue&type=template&id=42cb27fe&scoped=true");
/* harmony import */ var _GarantieOffview_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GarantieOffview.vue?vue&type=script&lang=js */ "./resources/js/components/shared/afg/Garantie/GarantieOffview.vue?vue&type=script&lang=js");
/* harmony import */ var _GarantieOffview_vue_vue_type_style_index_0_id_42cb27fe_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GarantieOffview.vue?vue&type=style&index=0&id=42cb27fe&scoped=true&lang=css */ "./resources/js/components/shared/afg/Garantie/GarantieOffview.vue?vue&type=style&index=0&id=42cb27fe&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _GarantieOffview_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _GarantieOffview_vue_vue_type_template_id_42cb27fe_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _GarantieOffview_vue_vue_type_template_id_42cb27fe_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "42cb27fe",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/shared/afg/Garantie/GarantieOffview.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/shared/afg/Garantie/GarantieOffview.vue?vue&type=script&lang=js":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/shared/afg/Garantie/GarantieOffview.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GarantieOffview_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GarantieOffview.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/Garantie/GarantieOffview.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GarantieOffview_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/shared/afg/Garantie/GarantieOffview.vue?vue&type=style&index=0&id=42cb27fe&scoped=true&lang=css":
/*!*********************************************************************************************************************************!*\
  !*** ./resources/js/components/shared/afg/Garantie/GarantieOffview.vue?vue&type=style&index=0&id=42cb27fe&scoped=true&lang=css ***!
  \*********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GarantieOffview_vue_vue_type_style_index_0_id_42cb27fe_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GarantieOffview.vue?vue&type=style&index=0&id=42cb27fe&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/Garantie/GarantieOffview.vue?vue&type=style&index=0&id=42cb27fe&scoped=true&lang=css");


/***/ }),

/***/ "./resources/js/components/shared/afg/Garantie/GarantieOffview.vue?vue&type=template&id=42cb27fe&scoped=true":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/components/shared/afg/Garantie/GarantieOffview.vue?vue&type=template&id=42cb27fe&scoped=true ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GarantieOffview_vue_vue_type_template_id_42cb27fe_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GarantieOffview_vue_vue_type_template_id_42cb27fe_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GarantieOffview_vue_vue_type_template_id_42cb27fe_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GarantieOffview.vue?vue&type=template&id=42cb27fe&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/Garantie/GarantieOffview.vue?vue&type=template&id=42cb27fe&scoped=true");


/***/ })

}]);