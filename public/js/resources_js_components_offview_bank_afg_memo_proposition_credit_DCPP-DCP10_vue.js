"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_offview_bank_afg_memo_proposition_credit_DCPP-DCP10_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/proposition_credit/DCPP-DCP10.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/proposition_credit/DCPP-DCP10.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return r; }; var t, r = {}, e = Object.prototype, n = e.hasOwnProperty, o = "function" == typeof Symbol ? Symbol : {}, i = o.iterator || "@@iterator", a = o.asyncIterator || "@@asyncIterator", u = o.toStringTag || "@@toStringTag"; function c(t, r, e, n) { Object.defineProperty(t, r, { value: e, enumerable: !n, configurable: !n, writable: !n }); } try { c({}, ""); } catch (t) { c = function c(t, r, e) { return t[r] = e; }; } function h(r, e, n, o) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype); return c(a, "_invoke", function (r, e, n) { var o = 1; return function (i, a) { if (3 === o) throw Error("Generator is already running"); if (4 === o) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var u = n.delegate; if (u) { var c = d(u, n); if (c) { if (c === f) continue; return c; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (1 === o) throw o = 4, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = 3; var h = s(r, e, n); if ("normal" === h.type) { if (o = n.done ? 4 : 2, h.arg === f) continue; return { value: h.arg, done: n.done }; } "throw" === h.type && (o = 4, n.method = "throw", n.arg = h.arg); } }; }(r, n, new Context(o || [])), !0), a; } function s(t, r, e) { try { return { type: "normal", arg: t.call(r, e) }; } catch (t) { return { type: "throw", arg: t }; } } r.wrap = h; var f = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var l = {}; c(l, i, function () { return this; }); var p = Object.getPrototypeOf, y = p && p(p(x([]))); y && y !== e && n.call(y, i) && (l = y); var v = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(l); function g(t) { ["next", "throw", "return"].forEach(function (r) { c(t, r, function (t) { return this._invoke(r, t); }); }); } function AsyncIterator(t, r) { function e(o, i, a, u) { var c = s(t[o], t, i); if ("throw" !== c.type) { var h = c.arg, f = h.value; return f && "object" == _typeof(f) && n.call(f, "__await") ? r.resolve(f.__await).then(function (t) { e("next", t, a, u); }, function (t) { e("throw", t, a, u); }) : r.resolve(f).then(function (t) { h.value = t, a(h); }, function (t) { return e("throw", t, a, u); }); } u(c.arg); } var o; c(this, "_invoke", function (t, n) { function i() { return new r(function (r, o) { e(t, n, r, o); }); } return o = o ? o.then(i, i) : i(); }, !0); } function d(r, e) { var n = e.method, o = r.i[n]; if (o === t) return e.delegate = null, "throw" === n && r.i["return"] && (e.method = "return", e.arg = t, d(r, e), "throw" === e.method) || "return" !== n && (e.method = "throw", e.arg = new TypeError("The iterator does not provide a '" + n + "' method")), f; var i = s(o, r.i, e.arg); if ("throw" === i.type) return e.method = "throw", e.arg = i.arg, e.delegate = null, f; var a = i.arg; return a ? a.done ? (e[r.r] = a.value, e.next = r.n, "return" !== e.method && (e.method = "next", e.arg = t), e.delegate = null, f) : a : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, f); } function w(t) { this.tryEntries.push(t); } function m(r) { var e = r[4] || {}; e.type = "normal", e.arg = t, r[4] = e; } function Context(t) { this.tryEntries = [[-1]], t.forEach(w, this), this.reset(!0); } function x(r) { if (null != r) { var e = r[i]; if (e) return e.call(r); if ("function" == typeof r.next) return r; if (!isNaN(r.length)) { var o = -1, a = function e() { for (; ++o < r.length;) if (n.call(r, o)) return e.value = r[o], e.done = !1, e; return e.value = t, e.done = !0, e; }; return a.next = a; } } throw new TypeError(_typeof(r) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, c(v, "constructor", GeneratorFunctionPrototype), c(GeneratorFunctionPrototype, "constructor", GeneratorFunction), c(GeneratorFunctionPrototype, u, GeneratorFunction.displayName = "GeneratorFunction"), r.isGeneratorFunction = function (t) { var r = "function" == typeof t && t.constructor; return !!r && (r === GeneratorFunction || "GeneratorFunction" === (r.displayName || r.name)); }, r.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, c(t, u, "GeneratorFunction")), t.prototype = Object.create(v), t; }, r.awrap = function (t) { return { __await: t }; }, g(AsyncIterator.prototype), c(AsyncIterator.prototype, a, function () { return this; }), r.AsyncIterator = AsyncIterator, r.async = function (t, e, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(h(t, e, n, o), i); return r.isGeneratorFunction(e) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, g(v), c(v, u, "Generator"), c(v, i, function () { return this; }), c(v, "toString", function () { return "[object Generator]"; }), r.keys = function (t) { var r = Object(t), e = []; for (var n in r) e.unshift(n); return function t() { for (; e.length;) if ((n = e.pop()) in r) return t.value = n, t.done = !1, t; return t.done = !0, t; }; }, r.values = x, Context.prototype = { constructor: Context, reset: function reset(r) { if (this.prev = this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(m), !r) for (var e in this) "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0][4]; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(r) { if (this.done) throw r; var e = this; function n(t) { a.type = "throw", a.arg = r, e.next = t; } for (var o = e.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i[4], u = this.prev, c = i[1], h = i[2]; if (-1 === i[0]) return n("end"), !1; if (!c && !h) throw Error("try statement without catch or finally"); if (null != i[0] && i[0] <= u) { if (u < c) return this.method = "next", this.arg = t, n(c), !0; if (u < h) return n(h), !1; } } }, abrupt: function abrupt(t, r) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var n = this.tryEntries[e]; if (n[0] > -1 && n[0] <= this.prev && this.prev < n[2]) { var o = n; break; } } o && ("break" === t || "continue" === t) && o[0] <= r && r <= o[2] && (o = null); var i = o ? o[4] : {}; return i.type = t, i.arg = r, o ? (this.method = "next", this.next = o[2], f) : this.complete(i); }, complete: function complete(t, r) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && r && (this.next = r), f; }, finish: function finish(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[2] === t) return this.complete(e[4], e[3]), m(e), f; } }, "catch": function _catch(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[0] === t) { var n = e[4]; if ("throw" === n.type) { var o = n.arg; m(e); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(r, e, n) { return this.delegate = { i: x(r), r: e, n: n }, "next" === this.method && (this.arg = t), f; } }, r; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    dossier_credit: Object
  },
  created: function created() {
    var _this = this;
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            EventBus.$on("dossier-updated-dcpp-pcp1-0", function (d) {
              // console.log("lauhght", d);
              if ((d === null || d === void 0 ? void 0 : d.data_tb1) != undefined) {
                var data = d.data_tb1;
                _this.cred_tb_120001 = data;
                _this.getRevenuAutre();
              }
            });
            EventBus.$on("dossier-updated-dcpp-pcp4-0-1", function (data) {
              _this.getTauxEndettement();
            });
          case 2:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }))();
  },
  computed: {
    getRevenuSalaire: function getRevenuSalaire() {
      var _this$cred_tb_, _this$cred_tb_2, _this$cred_tb_3;
      // console.log('getRevenuSalaire');
      if (((_this$cred_tb_ = this.cred_tb_120001) === null || _this$cred_tb_ === void 0 ? void 0 : _this$cred_tb_.revenu_domicilie) == undefined || ((_this$cred_tb_2 = this.cred_tb_120001) === null || _this$cred_tb_2 === void 0 ? void 0 : _this$cred_tb_2.revenu_domicilie) == "") return "";
      var node_salaire = (_this$cred_tb_3 = this.cred_tb_120001) === null || _this$cred_tb_3 === void 0 ? void 0 : _this$cred_tb_3.revenu_domicilie[0];
      if (node_salaire.libelle == "Salaire net" && node_salaire.checked == true) {
        return node_salaire.montant_salaire;
      }
      return "";
    }
  },
  mounted: function mounted() {
    this.getRavTheorique();
  },
  data: function data() {
    var _this$dossier_credit, _this$dossier_credit2, _this$dossier_credit3, _this$dossier_credit4, _this$dossier_credit5;
    return {
      cred_tb_120001: (_this$dossier_credit = this.dossier_credit) === null || _this$dossier_credit === void 0 ? void 0 : _this$dossier_credit.cred_pub_tb_120001,
      cred_tb_120005: (_this$dossier_credit2 = this.dossier_credit) === null || _this$dossier_credit2 === void 0 ? void 0 : _this$dossier_credit2.cred_pub_tb_120005,
      cred_tb_120004: (_this$dossier_credit3 = this.dossier_credit) === null || _this$dossier_credit3 === void 0 ? void 0 : _this$dossier_credit3.cred_pub_tb_120004,
      primary_owner_detail: (_this$dossier_credit4 = this.dossier_credit) === null || _this$dossier_credit4 === void 0 ? void 0 : _this$dossier_credit4.primary_owner_detail,
      cred_tb_120006: (_this$dossier_credit5 = this.dossier_credit) === null || _this$dossier_credit5 === void 0 ? void 0 : _this$dossier_credit5.cred_pub_tb_120006,
      remb_autre_credit: 0,
      remb_nouveau_credit: 0,
      ravTheorique: 0,
      montant_situation_matrimoniale: [{
        situation: "Célibataire",
        montant: 40000,
        montant_par_enfant: 10000
      }, {
        situation: "Marié(e)",
        montant: 60000,
        montant_par_enfant: 10000
      }]
    };
  },
  methods: {
    getRavTheorique: function getRavTheorique() {
      var _this2 = this;
      var ravTheorique = 0;
      this.montant_situation_matrimoniale.forEach(function (el, index) {
        var _this2$cred_tb_;
        if ((el === null || el === void 0 ? void 0 : el.situation.toUpperCase().charAt(0)) == ((_this2$cred_tb_ = _this2.cred_tb_120001) === null || _this2$cred_tb_ === void 0 || (_this2$cred_tb_ = _this2$cred_tb_.matrimoniale) === null || _this2$cred_tb_ === void 0 || (_this2$cred_tb_ = _this2$cred_tb_.toUpperCase()) === null || _this2$cred_tb_ === void 0 ? void 0 : _this2$cred_tb_.charAt(0))) {
          var _this2$cred_tb_2;
          ravTheorique = parseInt(el.montant_par_enfant) * parseInt((_this2$cred_tb_2 = _this2.cred_tb_120001) === null || _this2$cred_tb_2 === void 0 ? void 0 : _this2$cred_tb_2.nbre_enfant) + parseInt(el.montant);
        }
      });
      this.ravTheorique = ravTheorique;
    },
    formatDate: function formatDate(date) {
      if (["", null, undefined].includes(date)) return "";
      var options = {
        year: "numeric",
        month: "numeric",
        day: "numeric"
      };
      return new Date(date).toLocaleDateString("fr", options);
    },
    getRevenuAutre: function getRevenuAutre() {
      var _this$cred_tb_4, _this$cred_tb_5, _this$cred_tb_6;
      var exclusions = ["Salaire net"];
      if (((_this$cred_tb_4 = this.cred_tb_120001) === null || _this$cred_tb_4 === void 0 ? void 0 : _this$cred_tb_4.revenu_domicilie) == undefined || ((_this$cred_tb_5 = this.cred_tb_120001) === null || _this$cred_tb_5 === void 0 ? void 0 : _this$cred_tb_5.revenu_domicilie) == "") return "";
      var autre_revenu = 0;
      (_this$cred_tb_6 = this.cred_tb_120001) === null || _this$cred_tb_6 === void 0 || _this$cred_tb_6.revenu_domicilie.forEach(function (el) {
        if (!exclusions.includes(el === null || el === void 0 ? void 0 : el.libelle)) {
          autre_revenu += parseInt((el.montant_salaire || "0").toString().replace(/\s/g, ""));
        }
      });
      // this.cred_tb_120001?.revenu_domicilie.forEach((el) => {
      //     if(el?.libelle != "Salaire net" || el?.libelle != "Prime") {
      //         console.log(el);
      //         autre_revenu += parseInt(el.montant_salaire.toString().replace(/\s/g, "") || "0");
      //     }
      // })

      // this.cred_tb_120006?.budget_mensuel_ressources?.forEach((el) => {
      //     if (el?.libelle !== "Revenus/Salaires") {
      //         const montantStr =
      //             el?.montant?.toString().replace(/\s/g, "") || "0";
      //         const montantNum = parseFloat(montantStr) || 0;
      //         autre_revenu += montantNum;
      //     }
      // });

      return autre_revenu;
    },
    getAutreRembConfrere: function getAutreRembConfrere() {
      var _this$cred_tb_7, _this$cred_tb_8, _this$cred_tb_9;
      if (((_this$cred_tb_7 = this.cred_tb_120004) === null || _this$cred_tb_7 === void 0 ? void 0 : _this$cred_tb_7.facilites_existante_confrere) == undefined || ((_this$cred_tb_8 = this.cred_tb_120001) === null || _this$cred_tb_8 === void 0 ? void 0 : _this$cred_tb_8.facilites_existante_confrere) == "") return "";
      var autre_remboursement = 0;
      (_this$cred_tb_9 = this.cred_tb_120004) === null || _this$cred_tb_9 === void 0 || (_this$cred_tb_9 = _this$cred_tb_9.facilites_existante_confrere) === null || _this$cred_tb_9 === void 0 || _this$cred_tb_9.forEach(function (el) {
        var _el$montant_echeance;
        var montantStr = (el === null || el === void 0 || (_el$montant_echeance = el.montant_echeance) === null || _el$montant_echeance === void 0 ? void 0 : _el$montant_echeance.toString().replace(/\s/g, "")) || "0";
        var montantNum = parseFloat(montantStr) || 0;
        autre_remboursement += montantNum;
      });
      return autre_remboursement;
    },
    formatAmount: function formatAmount(x) {
      var _x$toString;
      return x === null || x === void 0 || (_x$toString = x.toString()) === null || _x$toString === void 0 ? void 0 : _x$toString.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    },
    getTotalBudget: function getTotalBudget() {
      var _this$cred_tb_0, _this$cred_tb_1;
      var montant_total = {
        total_depenses: 0,
        total_ressources: 0
      };
      var total_depenses = 0;
      var total_ressources = 0;
      (_this$cred_tb_0 = this.cred_tb_120006) === null || _this$cred_tb_0 === void 0 || (_this$cred_tb_0 = _this$cred_tb_0.budget_mensuel_depenses) === null || _this$cred_tb_0 === void 0 || _this$cred_tb_0.forEach(function (el) {
        var _el$montant;
        total_depenses += parseInt(el === null || el === void 0 || (_el$montant = el.montant) === null || _el$montant === void 0 || (_el$montant = _el$montant.toString()) === null || _el$montant === void 0 ? void 0 : _el$montant.replace(/\s/g, ""), 10);
      });
      montant_total.total_depenses = total_depenses;
      (_this$cred_tb_1 = this.cred_tb_120006) === null || _this$cred_tb_1 === void 0 || (_this$cred_tb_1 = _this$cred_tb_1.budget_mensuel_ressources) === null || _this$cred_tb_1 === void 0 || _this$cred_tb_1.forEach(function (el) {
        var _el$montant2;
        total_ressources += parseInt(el === null || el === void 0 || (_el$montant2 = el.montant) === null || _el$montant2 === void 0 || (_el$montant2 = _el$montant2.toString()) === null || _el$montant2 === void 0 ? void 0 : _el$montant2.replace(/\s/g, ""), 10);
      });
      montant_total.total_ressources = total_ressources;
      return montant_total;
    },
    getTauxEndettement: function getTauxEndettement() {
      var _this$getRevenuSalair, _ref, _this$cred_tb_120005$, _this$cred_tb_10, _ref2, _this$cred_tb_120005$2, _this$cred_tb_11, _this$getAutreRembCon;
      var salaire = parseInt(((_this$getRevenuSalair = this.getRevenuSalaire) !== null && _this$getRevenuSalair !== void 0 ? _this$getRevenuSalair : "").toString().replace(/\s/g, ""), 10) || 0;
      var autre_revenus = this.getRevenuAutre() || 0;
      var remb_autre_credit = (_ref = (_this$cred_tb_120005$ = (_this$cred_tb_10 = this.cred_tb_120005) === null || _this$cred_tb_10 === void 0 ? void 0 : _this$cred_tb_10.remb_autre_credit) !== null && _this$cred_tb_120005$ !== void 0 ? _this$cred_tb_120005$ : this.remb_autre_credit) !== null && _ref !== void 0 ? _ref : 0;
      var remb_nouveau_credit = (_ref2 = (_this$cred_tb_120005$2 = (_this$cred_tb_11 = this.cred_tb_120005) === null || _this$cred_tb_11 === void 0 ? void 0 : _this$cred_tb_11.remb_nouveau_credit) !== null && _this$cred_tb_120005$2 !== void 0 ? _this$cred_tb_120005$2 : this.remb_nouveau_credit) !== null && _ref2 !== void 0 ? _ref2 : 0;
      var autre_remb_confrere = ((_this$getAutreRembCon = this.getAutreRembConfrere) === null || _this$getAutreRembCon === void 0 ? void 0 : _this$getAutreRembCon.call(this)) || 0;
      var total_revenu = salaire + autre_revenus;
      var total_remb = remb_nouveau_credit + remb_autre_credit + autre_remb_confrere;
      if (total_revenu <= 0) {
        return {
          taux_endettement: "",
          reste_a_vivre: ""
        };
      }
      var taux_endettement = total_remb / total_revenu * 100;
      var reste_a_vivre = total_revenu - (remb_autre_credit + remb_nouveau_credit);
      return {
        taux_endettement: taux_endettement.toFixed(2),
        reste_a_vivre: this.formatAmount(reste_a_vivre)
      };
    },
    // getTauxEndettement() {
    //     let salaire = parseInt(
    //         this.getRevenuSalaire?.replace(/\s/g, ""),
    //         10
    //     );
    //     let autre_revenus = this.getRevenuAutre();
    //     let remb_autre_credit =
    //         this.cred_tb_120005?.remb_autre_credit ??
    //         this.remb_autre_credit;
    //     let remb_nouveau_credit =
    //         this.cred_tb_120005?.remb_nouveau_credit ??
    //         this.remb_nouveau_credit;
    //     if (!Number.isInteger(salaire)) {
    //         return {
    //             taux_endettement: "",
    //             reste_a_vivre: "",
    //         };
    //     }
    //     let taux_endettement =
    //         ((remb_nouveau_credit +
    //             remb_autre_credit +
    //             this.getAutreRembConfrere()) /
    //         (salaire + autre_revenus)) * 100 ;
    //     let reste_a_vivre =
    //         salaire +
    //         autre_revenus -
    //         (remb_autre_credit + remb_nouveau_credit);
    //     return {
    //         taux_endettement: taux_endettement.toFixed(2),
    //         reste_a_vivre: this.formatAmount(reste_a_vivre),
    //     };
    // },
    convertInt: function convertInt(n) {
      var _n$toString;
      return Number(n === null || n === void 0 || (_n$toString = n.toString()) === null || _n$toString === void 0 ? void 0 : _n$toString.replace(/\s/g, ""));
    },
    formuleQD: function formuleQD(mt, colonn) {
      mt = isNaN(mt) ? 0 : mt;
      var formulas = {
        A: "A = \u2211 RC = SN (Salaire Net) + PR (Prime) + AR (Autre revenu)",
        B: "B = \u2211 %SN + %PR + %AR",
        C: "C = TMP (Total Mt Pond\xE9r\xE9) / TMQC (Total Mt Quotit\xE9 C\xE9ssible)",
        D: "D = B - \u2211 Ms (Mensualit\xE9s des facilit\xE9s sollicit\xE9es)",
        E: "E = TMP (Total Mt Pond\xE9r\xE9) / TMQCL (Total Mt Quotit\xE9 C\xE9ssible L\xE9gal)",
        F: "F = \u2211 %SN + %PR + %AR",
        G: "G = B - \u2211 Ms (Mensualit\xE9s des facilit\xE9s sollicit\xE9es)"
      };
      return "Formule de calcul: ".concat(formulas[colonn] || "Non défini");
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/proposition_credit/DCPP-DCP10.vue?vue&type=template&id=49dee3a4&scoped=true":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/proposition_credit/DCPP-DCP10.vue?vue&type=template&id=49dee3a4&scoped=true ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm$cred_tb_120005$re, _vm$cred_tb_, _vm$cred_tb_120005$re2, _vm$cred_tb_2, _vm$authenticatedUser, _vm$authenticatedUser2, _vm$cred_tb_3, _vm$cred_tb_4, _vm$cred_tb_5, _vm$cred_tb_6, _vm$cred_tb_7, _vm$cred_tb_8, _vm$cred_tb_9, _vm$cred_tb_0, _vm$cred_tb_1, _vm$cred_tb_10, _vm$cred_tb_11, _vm$cred_tb_12, _vm$cred_tb_13, _vm$cred_tb_14, _vm$cred_tb_15, _vm$cred_tb_16, _vm$cred_tb_17, _vm$cred_tb_18, _vm$cred_tb_19, _vm$cred_tb_20;
  var _vm = this,
    _c = _vm._self._c;
  return _vm.cred_tb_120005 || _vm.cred_tb_120001 ? _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12 p-2 mt-3"
  }, [_c("div", {
    staticStyle: {
      border: "1px solid",
      padding: "22px 5px",
      margin: "0 8px"
    }
  }, [_c("div", {
    staticClass: "table-responsive p-2"
  }, [_c("table", {
    staticClass: "table table-bordered"
  }, [_c("tfoot", [_c("tr", [_c("th", [_vm._v("Taux d'endettement")]), _vm._v(" "), _c("th", [_vm._v("\n                                " + _vm._s(_vm.getTauxEndettement().taux_endettement) + "%\n                            ")])])]), _vm._v(" "), _c("tbody", [_vm.cred_tb_120001 ? _c("tr", [_c("td", [_vm._v("Salaire : (A)")]), _vm._v(" "), _c("td", [_c("span", [_vm._v(_vm._s(_vm._f("formatNumber")(_vm.getRevenuSalaire)))])])]) : _vm._e(), _vm._v(" "), _c("tr", [_c("td", [_vm._v("Autre revenu : (B)")]), _vm._v(" "), _c("td", [_c("span", [_vm._v(_vm._s(_vm._f("formatNumber")(_vm.getRevenuAutre())))])])]), _vm._v(" "), _c("tr", [_c("td", [_vm._v("Mensualité : (C)")]), _vm._v(" "), _c("td", [_c("span", [_vm._v(_vm._s(_vm._f("formatNumber")((_vm$cred_tb_120005$re = (_vm$cred_tb_ = _vm.cred_tb_120005) === null || _vm$cred_tb_ === void 0 ? void 0 : _vm$cred_tb_.remb_nouveau_credit) !== null && _vm$cred_tb_120005$re !== void 0 ? _vm$cred_tb_120005$re : _vm.remb_nouveau_credit)))])])]), _vm._v(" "), _c("tr", [_c("td", [_vm._v("\n                                Autre remboursement (Chez AFG BANK): (D)\n                            ")]), _vm._v(" "), _c("td", [_c("span", [_vm._v(_vm._s(_vm._f("formatNumber")((_vm$cred_tb_120005$re2 = (_vm$cred_tb_2 = _vm.cred_tb_120005) === null || _vm$cred_tb_2 === void 0 ? void 0 : _vm$cred_tb_2.remb_autre_credit) !== null && _vm$cred_tb_120005$re2 !== void 0 ? _vm$cred_tb_120005$re2 : _vm.remb_autre_credit)))])])]), _vm._v(" "), _c("tr", [_c("td", [_vm._v("\n                                Autre remboursement (Chez les confrères)\n                                : (E)\n                            ")]), _vm._v(" "), _c("td", [_c("span", [_vm._v(_vm._s(_vm._f("formatNumber")(_vm.getAutreRembConfrere())))])])])])])]), _vm._v(" "), ((_vm$authenticatedUser = _vm.authenticatedUser) === null || _vm$authenticatedUser === void 0 ? void 0 : _vm$authenticatedUser.filiale) === "AFGB ML" ? _c("div", {
    staticClass: "table-responsive p-2 mt-2 w-75"
  }, [_c("table", {
    staticClass: "table table-bordered",
    staticStyle: {
      "border-top": "8px solid",
      "border-bottom": "8px solid",
      "font-size": "13px"
    }
  }, [_c("tbody", [_vm.cred_tb_120001 ? _c("tr", [_c("td", [_vm._v("RAV THEORIQUE *")]), _vm._v(" "), _c("td", [_c("span", [_vm._v(_vm._s(_vm._f("formatNumber")(_vm.ravTheorique)))])])]) : _vm._e(), _vm._v(" "), _vm.cred_tb_120005 ? _c("tr", [_c("td", [_vm._v("RAV REEL (A+B-C-D)")]), _vm._v(" "), _c("td", [_c("span", [_vm._v(_vm._s(_vm._f("formatNumber")(_vm.getTauxEndettement().reste_a_vivre)))])])]) : _vm._e(), _vm._v(" "), _vm.cred_tb_120001 && _vm.cred_tb_120005 ? _c("tr", [_c("td", [_vm._v("RAV REEL > RAV THEORIQUE (O/N)")]), _vm._v(" "), _c("td", [_c("span", [_vm._v("\n                                    " + _vm._s(_vm.getTauxEndettement().reste_a_vivre > _vm.ravTheorique ? "Oui" : "Non") + "\n                                ")])])]) : _vm._e()])])]) : _vm._e()]), _vm._v(" "), ((_vm$authenticatedUser2 = _vm.authenticatedUser) === null || _vm$authenticatedUser2 === void 0 ? void 0 : _vm$authenticatedUser2.filiale) === "AFGB ML" ? _c("div", {
    staticClass: "mt-3 p-2"
  }, [_vm._m(0)]) : _vm._e()]), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-bordered table-hover"
  }, [_vm._m(1), _vm._v(" "), _c("tbody", [_c("tr", [_vm._m(2), _vm._v(" "), _vm._m(3), _vm._v(" "), _c("td", {
    attrs: {
      title: _vm.formuleQD((_vm$cred_tb_3 = _vm.cred_tb_120004) === null || _vm$cred_tb_3 === void 0 ? void 0 : _vm$cred_tb_3.revenu_total_colonne_emprunteur, "A"),
      "data-toggle": "tooltip",
      "data-placement": "top"
    }
  }, [_c("span", [_vm._v(_vm._s(_vm._f("formatNumber")((_vm$cred_tb_4 = _vm.cred_tb_120004) === null || _vm$cred_tb_4 === void 0 ? void 0 : _vm$cred_tb_4.revenu_total_colonne_emprunteur)))])])]), _vm._v(" "), _c("tr", [_vm._m(4), _vm._v(" "), _vm._m(5), _vm._v(" "), _c("td", {
    attrs: {
      title: _vm.formuleQD((_vm$cred_tb_5 = _vm.cred_tb_120004) === null || _vm$cred_tb_5 === void 0 ? void 0 : _vm$cred_tb_5.revenu_total_colonne_montant_pondere, "A"),
      "data-toggle": "tooltip",
      "data-placement": "top"
    }
  }, [_c("span", [_vm._v(_vm._s(_vm._f("formatNumber")((_vm$cred_tb_6 = _vm.cred_tb_120004) === null || _vm$cred_tb_6 === void 0 ? void 0 : _vm$cred_tb_6.revenu_total_colonne_montant_pondere)))])])]), _vm._v(" "), _c("tr", [_vm._m(6), _vm._v(" "), _vm._m(7), _vm._v(" "), _c("td", {
    attrs: {
      title: _vm.formuleQD((_vm$cred_tb_7 = _vm.cred_tb_120004) === null || _vm$cred_tb_7 === void 0 ? void 0 : _vm$cred_tb_7.quotite_cessible, "B"),
      "data-toggle": "tooltip",
      "data-placement": "top"
    }
  }, [_c("span", [_vm._v(_vm._s(_vm._f("formatNumber")((_vm$cred_tb_8 = _vm.cred_tb_120004) === null || _vm$cred_tb_8 === void 0 ? void 0 : _vm$cred_tb_8.quotite_cessible)))])])]), _vm._v(" "), _c("tr", [_vm._m(8), _vm._v(" "), _vm._m(9), _vm._v(" "), _c("td", {
    attrs: {
      title: _vm.formuleQD((_vm$cred_tb_9 = _vm.cred_tb_120004) === null || _vm$cred_tb_9 === void 0 ? void 0 : _vm$cred_tb_9.pourcentage_quotite, "C"),
      "data-toggle": "tooltip",
      "data-placement": "top"
    }
  }, [_c("span", [_vm._v(_vm._s((_vm$cred_tb_0 = _vm.cred_tb_120004) === null || _vm$cred_tb_0 === void 0 ? void 0 : _vm$cred_tb_0.pourcentage_quotite) + "%")])])]), _vm._v(" "), _c("tr", [_vm._m(10), _vm._v(" "), _vm._m(11), _vm._v(" "), _c("td", {
    attrs: {
      title: _vm.formuleQD((_vm$cred_tb_1 = _vm.cred_tb_120004) === null || _vm$cred_tb_1 === void 0 ? void 0 : _vm$cred_tb_1.quotite_cessible_disponible, "D"),
      "data-toggle": "tooltip",
      "data-placement": "top"
    }
  }, [_c("span", {
    "class": _vm.convertInt((_vm$cred_tb_10 = _vm.cred_tb_120004) === null || _vm$cred_tb_10 === void 0 ? void 0 : _vm$cred_tb_10.quotite_cessible_disponible) < 0 ? "text-danger" : ""
  }, [_vm._v(_vm._s(_vm._f("formatNumber")((_vm$cred_tb_11 = _vm.cred_tb_120004) === null || _vm$cred_tb_11 === void 0 ? void 0 : _vm$cred_tb_11.quotite_cessible_disponible)))]), _vm._v(" "), _vm.convertInt((_vm$cred_tb_12 = _vm.cred_tb_120004) === null || _vm$cred_tb_12 === void 0 ? void 0 : _vm$cred_tb_12.quotite_cessible_disponible) < 0 ? _c("div", {
    staticClass: "text-danger fw-bold",
    attrs: {
      id: "quotite_cessible_disponibleFeedback"
    }
  }, [_c("small", [_vm._v("Attention la quotité disponible est\n                                    négatif.")])]) : _vm._e()])]), _vm._v(" "), _c("tr", [_vm._m(12), _vm._v(" "), _c("td", {
    staticClass: "text-center"
  }), _vm._v(" "), _c("td", {
    attrs: {
      title: _vm.formuleQD((_vm$cred_tb_13 = _vm.cred_tb_120004) === null || _vm$cred_tb_13 === void 0 ? void 0 : _vm$cred_tb_13.pourcentage_quotite_general, "E"),
      "data-toggle": "tooltip",
      "data-placement": "top"
    }
  }, [_c("span", [_vm._v(_vm._s((_vm$cred_tb_14 = _vm.cred_tb_120004) === null || _vm$cred_tb_14 === void 0 ? void 0 : _vm$cred_tb_14.pourcentage_quotite_general) + "%")])])]), _vm._v(" "), _c("tr", [_vm._m(13), _vm._v(" "), _vm._m(14), _vm._v(" "), _c("td", {
    attrs: {
      title: _vm.formuleQD((_vm$cred_tb_15 = _vm.cred_tb_120004) === null || _vm$cred_tb_15 === void 0 ? void 0 : _vm$cred_tb_15.quotite_cessible_general, "F"),
      "data-toggle": "tooltip",
      "data-placement": "top"
    }
  }, [_c("span", [_vm._v(_vm._s(_vm._f("formatNumber")((_vm$cred_tb_16 = _vm.cred_tb_120004) === null || _vm$cred_tb_16 === void 0 ? void 0 : _vm$cred_tb_16.quotite_cessible_general)))])])]), _vm._v(" "), _c("tr", [_vm._m(15), _vm._v(" "), _vm._m(16), _vm._v(" "), _c("td", {
    attrs: {
      title: _vm.formuleQD((_vm$cred_tb_17 = _vm.cred_tb_120004) === null || _vm$cred_tb_17 === void 0 ? void 0 : _vm$cred_tb_17.quotite_cessible_disponible_general, "G"),
      "data-toggle": "tooltip",
      "data-placement": "top"
    }
  }, [_c("span", {
    "class": _vm.convertInt((_vm$cred_tb_18 = _vm.cred_tb_120004) === null || _vm$cred_tb_18 === void 0 ? void 0 : _vm$cred_tb_18.quotite_cessible_disponible_general) < 0 ? "text-danger" : ""
  }, [_vm._v(_vm._s(_vm._f("formatNumber")((_vm$cred_tb_19 = _vm.cred_tb_120004) === null || _vm$cred_tb_19 === void 0 ? void 0 : _vm$cred_tb_19.quotite_cessible_disponible_general)))]), _vm._v(" "), _vm.convertInt((_vm$cred_tb_20 = _vm.cred_tb_120004) === null || _vm$cred_tb_20 === void 0 ? void 0 : _vm$cred_tb_20.quotite_cessible_disponible_general) < 0 ? _c("div", {
    staticClass: "text-danger fw-bold",
    attrs: {
      id: "quotite_cessible_disponible_generalFeedback"
    }
  }, [_c("small", [_vm._v("Attention la quotité disponible est\n                                    négatif.")])]) : _vm._e()])])])])])])]) : _vm._e();
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("i", [_c("span", [_vm._v("Marié : ")]), _vm._v(" "), _c("span", [_vm._v("60000 ")]), _vm._v(" "), _c("span", [_vm._v(" / ")]), _vm._v(" "), _c("span", [_vm._v("Célibataire : ")]), _vm._v(" "), _c("span", [_vm._v("40000 ")]), _vm._v(" "), _c("span", [_vm._v(" / ")]), _vm._v(" "), _c("span", [_vm._v("Par enfant : ")]), _vm._v(" "), _c("span", [_vm._v("10000 ")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", {
    staticClass: "table-light"
  }, [_c("tr", [_c("th", {
    staticClass: "text-center",
    attrs: {
      scope: "col"
    }
  }, [_vm._v("\n                            Description\n                        ")]), _vm._v(" "), _c("th", {
    staticClass: "text-center",
    attrs: {
      scope: "col"
    }
  }, [_vm._v("Formule")]), _vm._v(" "), _c("th", {
    staticClass: "text-center",
    attrs: {
      scope: "col"
    }
  }, [_vm._v("Valeur")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", [_c("label", {
    attrs: {
      "for": "revenu_total_colonne_montant_pondere"
    }
  }, [_vm._v("\n                                Revenu global "), _c("b", [_vm._v("(A)")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {
    staticClass: "text-center"
  }, [_c("span", {
    staticStyle: {
      "font-size": "14px"
    }
  }, [_vm._v("\n                                ∑"), _c("sub", [_vm._v("RC")]), _vm._v(" = SN"), _c("sub", [_vm._v("(Salaire Net)")]), _vm._v("\n                                + PR"), _c("sub", [_vm._v("(Prime)")]), _vm._v("\n                                + AR"), _c("sub", [_vm._v("(Autre revenu)")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", [_c("label", {
    attrs: {
      "for": "revenu_total_colonne_montant_pondere"
    }
  }, [_vm._v("\n                                Revenu considéré "), _c("b", [_vm._v("(H)")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {
    staticClass: "text-center"
  }, [_c("span", {
    staticStyle: {
      "font-size": "11px"
    }
  }, [_vm._v("\n                                        ∑"), _c("sub", [_vm._v("RP")]), _vm._v(" = %SN  "), _c("sub", [_vm._v("(Salaire Net)")]), _vm._v(" + %PR "), _c("sub", [_vm._v("(Prime)")]), _vm._v(" + %AR "), _c("sub", [_vm._v("(Autre révenu)")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", [_c("label", {
    attrs: {
      "for": "quotite_cessible"
    }
  }, [_vm._v("Montant quotité cessible\n                                "), _c("b", [_vm._v("(B)")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {
    staticClass: "text-center"
  }, [_c("span", {
    staticStyle: {
      "font-size": "14px"
    }
  }, [_vm._v("\n                                B = ∑"), _c("sub", [_vm._v("%SN + %PR + %AR")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", [_c("label", {
    attrs: {
      "for": "pourcentage_quotite"
    }
  }, [_vm._v("% Quotité "), _c("b", [_vm._v("(C)")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {
    staticClass: "text-center"
  }, [_c("span", {
    staticStyle: {
      "font-size": "14px"
    }
  }, [_vm._v("\n                                C = B"), _c("sub", [_vm._v("( Mt Quotité Céssible)")]), _vm._v("\n                                / H"), _c("sub", [_vm._v("(Revenu considéré)")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", [_c("label", {
    attrs: {
      "for": "quotite_cessible_disponible"
    }
  }, [_vm._v("Montant quotité disponible\n                                "), _c("b", [_vm._v("(D)")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {
    staticClass: "text-center"
  }, [_c("span", {
    staticStyle: {
      "font-size": "14px"
    }
  }, [_vm._v("\n                                D = B - ∑"), _c("sub", [_vm._v("Ms"), _c("sub", [_vm._v("(Mensualités des facilités\n                                        sollicitées)")])])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", [_c("label", {
    attrs: {
      "for": "pourcentage_quotite_general"
    }
  }, [_vm._v("% Quotité légal "), _c("b", [_vm._v("(E)")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", [_c("label", {
    attrs: {
      "for": "quotite_cessible_general"
    }
  }, [_vm._v("Montant quotité cessible légal\n                                "), _c("b", [_vm._v("(F)")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {
    staticClass: "text-center"
  }, [_c("span", {
    staticStyle: {
      "font-size": "14px"
    }
  }, [_vm._v("\n                                F = ∑"), _c("sub", [_vm._v("%SN + %PR + %AR")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", [_c("label", {
    attrs: {
      "for": "quotite_cessible_disponible_general"
    }
  }, [_vm._v("Montant quotité disponible légal\n                                "), _c("b", [_vm._v("(G)")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {
    staticClass: "text-center"
  }, [_c("span", {
    staticStyle: {
      "font-size": "14px"
    }
  }, [_vm._v("\n                                G = F - ∑"), _c("sub", [_vm._v("Ms"), _c("sub", [_vm._v("(Mensualités des facilités\n                                        sollicitées)")])])])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/proposition_credit/DCPP-DCP10.vue?vue&type=style&index=0&id=49dee3a4&scoped=true&lang=css":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/proposition_credit/DCPP-DCP10.vue?vue&type=style&index=0&id=49dee3a4&scoped=true&lang=css ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\nfieldset[data-v-49dee3a4] {\r\n    border: 1px solid #ddd !important;\r\n    position: relative;\r\n    padding-left: 10px !important;\r\n    width: 100%;\r\n    background-color: #f5f5f5;\r\n    margin-top: 15px;\n}\nlegend[data-v-49dee3a4] {\r\n    font-weight: bold;\r\n    padding: 4px;\r\n    width: -moz-max-content;\r\n    width: max-content;\r\n    padding: 0 15px;\r\n    font-size: 16px;\r\n    float: none;\r\n    background-color: #ffffff;\r\n    border: 1px solid #ddd;\r\n    border-radius: 4px;\n}\n.cell[data-v-49dee3a4] {\r\n    display: flex;\r\n    gap: 1px;\r\n    flex-direction: column;\n}\n.bold[data-v-49dee3a4] {\r\n    font-weight: bold;\n}\n.memo[data-v-49dee3a4] {\r\n    margin-top: 10px;\r\n    padding: 10px;\r\n    border: 2px solid #fff;\r\n    font-weight: 550;\r\n    font-size: 16px;\r\n    text-align: left;\r\n    text-transform: uppercase;\r\n    background-color: #34495e;\r\n    color: #fff;\n}\r\n\r\n/* th {\r\n      background: #f4f3f3 !important;\r\n  } */\n.bg-grey[data-v-49dee3a4] {\r\n    background-color: #f4f3f3;\r\n    width: 32%;\n}\ninput[type=\"checkbox\"][data-v-49dee3a4] {\r\n    /* Double-sized Checkboxes */\r\n    /* IE */\r\n    /* FF */\r\n    /* Safari and Chrome */\r\n    /* Opera */\r\n    transform: scale(2);\r\n    padding: 10px;\n}\n.head-memorandum-title[data-v-49dee3a4] {\r\n    margin-top: 15px;\r\n    padding: 16px;\r\n    color: #fff;\r\n    font-weight: bold;\r\n    background-color: #34495e;\r\n    border: 2px solid #575759;\r\n    box-shadow: 1px 3px 4px #ddd;\r\n    font-size: 16px;\r\n    text-align: center;\r\n    text-transform: uppercase;\r\n    border-radius: 10px;\r\n    margin-bottom: 15px;\n}\n.checkboxtext[data-v-49dee3a4] {\r\n    /* Checkbox text */\r\n    font-size: 110%;\r\n    display: inline;\n}\n.nota-bene[data-v-49dee3a4] {\r\n    font-size: 12px !important;\n}\n.table[data-v-49dee3a4] {\r\n    border: unset;\n}\nol[data-v-49dee3a4],\r\nli[data-v-49dee3a4] {\r\n    list-style-type: revert-layer;\n}\ninput[type=\"checkbox\"][data-v-49dee3a4]:disabled:checked {\r\n    -webkit-appearance: none;\r\n       -moz-appearance: none;\r\n            appearance: none; /* Supprime le style natif */\r\n    /* width: 10px;*/\r\n    min-height: unset !important;\r\n\r\n    padding: 7px;\r\n    background-color: #007bff; /* Bleu */\r\n    /* border: 2px solid #007bff; Bordure bleue */\r\n    border-radius: 2px;\r\n    position: relative;\r\n    cursor: not-allowed;\r\n    margin-top: 5px;\n}\ninput[type=\"checkbox\"][data-v-49dee3a4]:disabled:checked::after {\r\n    content: \"✔\";\r\n    color: white;\r\n    font-size: 8px;\r\n    font-weight: bold;\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\n}\n.th[data-v-49dee3a4] {\r\n    text-wrap: nowrap;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/proposition_credit/DCPP-DCP10.vue?vue&type=style&index=0&id=49dee3a4&scoped=true&lang=css":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/proposition_credit/DCPP-DCP10.vue?vue&type=style&index=0&id=49dee3a4&scoped=true&lang=css ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DCPP_DCP10_vue_vue_type_style_index_0_id_49dee3a4_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DCPP-DCP10.vue?vue&type=style&index=0&id=49dee3a4&scoped=true&lang=css */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/proposition_credit/DCPP-DCP10.vue?vue&type=style&index=0&id=49dee3a4&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DCPP_DCP10_vue_vue_type_style_index_0_id_49dee3a4_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DCPP_DCP10_vue_vue_type_style_index_0_id_49dee3a4_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/offview/bank/afg/memo/proposition_credit/DCPP-DCP10.vue":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/offview/bank/afg/memo/proposition_credit/DCPP-DCP10.vue ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DCPP_DCP10_vue_vue_type_template_id_49dee3a4_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DCPP-DCP10.vue?vue&type=template&id=49dee3a4&scoped=true */ "./resources/js/components/offview/bank/afg/memo/proposition_credit/DCPP-DCP10.vue?vue&type=template&id=49dee3a4&scoped=true");
/* harmony import */ var _DCPP_DCP10_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DCPP-DCP10.vue?vue&type=script&lang=js */ "./resources/js/components/offview/bank/afg/memo/proposition_credit/DCPP-DCP10.vue?vue&type=script&lang=js");
/* harmony import */ var _DCPP_DCP10_vue_vue_type_style_index_0_id_49dee3a4_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DCPP-DCP10.vue?vue&type=style&index=0&id=49dee3a4&scoped=true&lang=css */ "./resources/js/components/offview/bank/afg/memo/proposition_credit/DCPP-DCP10.vue?vue&type=style&index=0&id=49dee3a4&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _DCPP_DCP10_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _DCPP_DCP10_vue_vue_type_template_id_49dee3a4_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _DCPP_DCP10_vue_vue_type_template_id_49dee3a4_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "49dee3a4",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/offview/bank/afg/memo/proposition_credit/DCPP-DCP10.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/offview/bank/afg/memo/proposition_credit/DCPP-DCP10.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/components/offview/bank/afg/memo/proposition_credit/DCPP-DCP10.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DCPP_DCP10_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DCPP-DCP10.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/proposition_credit/DCPP-DCP10.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DCPP_DCP10_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/offview/bank/afg/memo/proposition_credit/DCPP-DCP10.vue?vue&type=style&index=0&id=49dee3a4&scoped=true&lang=css":
/*!*************************************************************************************************************************************************!*\
  !*** ./resources/js/components/offview/bank/afg/memo/proposition_credit/DCPP-DCP10.vue?vue&type=style&index=0&id=49dee3a4&scoped=true&lang=css ***!
  \*************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DCPP_DCP10_vue_vue_type_style_index_0_id_49dee3a4_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DCPP-DCP10.vue?vue&type=style&index=0&id=49dee3a4&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/proposition_credit/DCPP-DCP10.vue?vue&type=style&index=0&id=49dee3a4&scoped=true&lang=css");


/***/ }),

/***/ "./resources/js/components/offview/bank/afg/memo/proposition_credit/DCPP-DCP10.vue?vue&type=template&id=49dee3a4&scoped=true":
/*!***********************************************************************************************************************************!*\
  !*** ./resources/js/components/offview/bank/afg/memo/proposition_credit/DCPP-DCP10.vue?vue&type=template&id=49dee3a4&scoped=true ***!
  \***********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DCPP_DCP10_vue_vue_type_template_id_49dee3a4_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DCPP_DCP10_vue_vue_type_template_id_49dee3a4_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DCPP_DCP10_vue_vue_type_template_id_49dee3a4_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DCPP-DCP10.vue?vue&type=template&id=49dee3a4&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/proposition_credit/DCPP-DCP10.vue?vue&type=template&id=49dee3a4&scoped=true");


/***/ })

}]);