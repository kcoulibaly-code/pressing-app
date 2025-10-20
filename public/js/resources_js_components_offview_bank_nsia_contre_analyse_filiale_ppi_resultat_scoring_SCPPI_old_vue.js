"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_offview_bank_nsia_contre_analyse_filiale_ppi_resultat_scoring_SCPPI_old_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/contre_analyse_filiale/ppi_resultat_scoring/SCPPI.old.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/contre_analyse_filiale/ppi_resultat_scoring/SCPPI.old.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_credit_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../services/credit.service */ "./resources/js/services/credit.service.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return r; }; var t, r = {}, e = Object.prototype, n = e.hasOwnProperty, o = "function" == typeof Symbol ? Symbol : {}, i = o.iterator || "@@iterator", a = o.asyncIterator || "@@asyncIterator", u = o.toStringTag || "@@toStringTag"; function c(t, r, e, n) { Object.defineProperty(t, r, { value: e, enumerable: !n, configurable: !n, writable: !n }); } try { c({}, ""); } catch (t) { c = function c(t, r, e) { return t[r] = e; }; } function h(r, e, n, o) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype); return c(a, "_invoke", function (r, e, n) { var o = 1; return function (i, a) { if (3 === o) throw Error("Generator is already running"); if (4 === o) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var u = n.delegate; if (u) { var c = d(u, n); if (c) { if (c === f) continue; return c; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (1 === o) throw o = 4, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = 3; var h = s(r, e, n); if ("normal" === h.type) { if (o = n.done ? 4 : 2, h.arg === f) continue; return { value: h.arg, done: n.done }; } "throw" === h.type && (o = 4, n.method = "throw", n.arg = h.arg); } }; }(r, n, new Context(o || [])), !0), a; } function s(t, r, e) { try { return { type: "normal", arg: t.call(r, e) }; } catch (t) { return { type: "throw", arg: t }; } } r.wrap = h; var f = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var l = {}; c(l, i, function () { return this; }); var p = Object.getPrototypeOf, y = p && p(p(x([]))); y && y !== e && n.call(y, i) && (l = y); var v = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(l); function g(t) { ["next", "throw", "return"].forEach(function (r) { c(t, r, function (t) { return this._invoke(r, t); }); }); } function AsyncIterator(t, r) { function e(o, i, a, u) { var c = s(t[o], t, i); if ("throw" !== c.type) { var h = c.arg, f = h.value; return f && "object" == _typeof(f) && n.call(f, "__await") ? r.resolve(f.__await).then(function (t) { e("next", t, a, u); }, function (t) { e("throw", t, a, u); }) : r.resolve(f).then(function (t) { h.value = t, a(h); }, function (t) { return e("throw", t, a, u); }); } u(c.arg); } var o; c(this, "_invoke", function (t, n) { function i() { return new r(function (r, o) { e(t, n, r, o); }); } return o = o ? o.then(i, i) : i(); }, !0); } function d(r, e) { var n = e.method, o = r.i[n]; if (o === t) return e.delegate = null, "throw" === n && r.i["return"] && (e.method = "return", e.arg = t, d(r, e), "throw" === e.method) || "return" !== n && (e.method = "throw", e.arg = new TypeError("The iterator does not provide a '" + n + "' method")), f; var i = s(o, r.i, e.arg); if ("throw" === i.type) return e.method = "throw", e.arg = i.arg, e.delegate = null, f; var a = i.arg; return a ? a.done ? (e[r.r] = a.value, e.next = r.n, "return" !== e.method && (e.method = "next", e.arg = t), e.delegate = null, f) : a : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, f); } function w(t) { this.tryEntries.push(t); } function m(r) { var e = r[4] || {}; e.type = "normal", e.arg = t, r[4] = e; } function Context(t) { this.tryEntries = [[-1]], t.forEach(w, this), this.reset(!0); } function x(r) { if (null != r) { var e = r[i]; if (e) return e.call(r); if ("function" == typeof r.next) return r; if (!isNaN(r.length)) { var o = -1, a = function e() { for (; ++o < r.length;) if (n.call(r, o)) return e.value = r[o], e.done = !1, e; return e.value = t, e.done = !0, e; }; return a.next = a; } } throw new TypeError(_typeof(r) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, c(v, "constructor", GeneratorFunctionPrototype), c(GeneratorFunctionPrototype, "constructor", GeneratorFunction), c(GeneratorFunctionPrototype, u, GeneratorFunction.displayName = "GeneratorFunction"), r.isGeneratorFunction = function (t) { var r = "function" == typeof t && t.constructor; return !!r && (r === GeneratorFunction || "GeneratorFunction" === (r.displayName || r.name)); }, r.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, c(t, u, "GeneratorFunction")), t.prototype = Object.create(v), t; }, r.awrap = function (t) { return { __await: t }; }, g(AsyncIterator.prototype), c(AsyncIterator.prototype, a, function () { return this; }), r.AsyncIterator = AsyncIterator, r.async = function (t, e, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(h(t, e, n, o), i); return r.isGeneratorFunction(e) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, g(v), c(v, u, "Generator"), c(v, i, function () { return this; }), c(v, "toString", function () { return "[object Generator]"; }), r.keys = function (t) { var r = Object(t), e = []; for (var n in r) e.unshift(n); return function t() { for (; e.length;) if ((n = e.pop()) in r) return t.value = n, t.done = !1, t; return t.done = !0, t; }; }, r.values = x, Context.prototype = { constructor: Context, reset: function reset(r) { if (this.prev = this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(m), !r) for (var e in this) "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0][4]; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(r) { if (this.done) throw r; var e = this; function n(t) { a.type = "throw", a.arg = r, e.next = t; } for (var o = e.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i[4], u = this.prev, c = i[1], h = i[2]; if (-1 === i[0]) return n("end"), !1; if (!c && !h) throw Error("try statement without catch or finally"); if (null != i[0] && i[0] <= u) { if (u < c) return this.method = "next", this.arg = t, n(c), !0; if (u < h) return n(h), !1; } } }, abrupt: function abrupt(t, r) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var n = this.tryEntries[e]; if (n[0] > -1 && n[0] <= this.prev && this.prev < n[2]) { var o = n; break; } } o && ("break" === t || "continue" === t) && o[0] <= r && r <= o[2] && (o = null); var i = o ? o[4] : {}; return i.type = t, i.arg = r, o ? (this.method = "next", this.next = o[2], f) : this.complete(i); }, complete: function complete(t, r) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && r && (this.next = r), f; }, finish: function finish(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[2] === t) return this.complete(e[4], e[3]), m(e), f; } }, "catch": function _catch(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[0] === t) { var n = e[4]; if ("throw" === n.type) { var o = n.arg; m(e); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(r, e, n) { return this.delegate = { i: x(r), r: e, n: n }, "next" === this.method && (this.arg = t), f; } }, r; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "PPIScoring",
  props: {
    dossier_credit: Object
  },
  mounted: function mounted() {
    var _this = this;
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var _this$dossier_credit$;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _this.carcasse_type = (_this$dossier_credit$ = _this.dossier_credit['cred_pub_tb_30001']) === null || _this$dossier_credit$ === void 0 ? void 0 : _this$dossier_credit$.carcasse_type;
            _this.loadData2();
          case 2:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }))();
  },
  data: function data() {
    var _this$dossier_credit, _this$dossier_credit2;
    return {
      data_tb: (_this$dossier_credit = this.dossier_credit) === null || _this$dossier_credit === void 0 ? void 0 : _this$dossier_credit.cred_pub_tb_30008,
      caf_recorded_file: (_this$dossier_credit2 = this.dossier_credit) === null || _this$dossier_credit2 === void 0 ? void 0 : _this$dossier_credit2.caf_recorded_file,
      age: "",
      nom_prenom: "",
      indice_client: "",
      date_relation: "",
      statut_matrimonial: "",
      anciennete_relation: "",
      anciennete_emploi: "",
      type_contrat: "",
      statut_client: "",
      depart_retraite: "",
      periode_d_essai_achevee: "",
      taux: "",
      produit: "",
      echeance: "",
      echeance_total: "",
      periodicite: "",
      taux_prime: "",
      duree_differee: "",
      montant_sollicite: "",
      duree_remboursement: "",
      employeur: "",
      quotite_cessible: "",
      quotite_disponible: "",
      taux_quotite_cessible: "",
      coef_endettement: "",
      nombre_d_engagement: "",
      engagement_global_sollicite: "",
      montant_demande: "",
      montant_propose: "",
      charge_emprunt: "",
      source_remboursement: "",
      source_remboursement_2: "",
      la_qcd_couvre_la_charge_d_emprunt: "",
      niveau_de_pouvoir: "",
      info_garanties: [],
      criteres: [],
      note_info: 0,
      total_point: 0,
      total_obtenu: 0,
      sous_total_obtenu: 0,
      carcasse_type: null,
      data_anciennete_de_la_relation: [],
      data_le_financement_sera: [],
      data_le_client_a_t_il: [],
      data_date_de_depart_a_la_retraite: [],
      data_statut_du_client_selon_lemployeur: [],
      data_type_de_contrat: [],
      data_anciennete_chez_lemployeur: [],
      data_credits_anterieurs: [],
      data_credits_en_cours: [],
      data_garanties: []
    };
  },
  methods: {
    loadData: function loadData(res) {
      var _this2 = this,
        _this$dossier_credit3,
        _this$dossier_credit4;
      this.echeance = 0;
      this.echeance_total = 0;
      this.source_remboursement = 0;
      this.source_remboursement_2 = 0;
      if (this.dossier_credit["caf_recorded_file"] != undefined) {
        var _this$dossier_credit$2, _this$dossier_credit$3;
        this.indice_client = (_this$dossier_credit$2 = this.dossier_credit["caf_recorded_file"]) === null || _this$dossier_credit$2 === void 0 || (_this$dossier_credit$2 = _this$dossier_credit$2.client) === null || _this$dossier_credit$2 === void 0 ? void 0 : _this$dossier_credit$2.matcli;
        this.nom_prenom = (_this$dossier_credit$3 = this.dossier_credit["caf_recorded_file"]) === null || _this$dossier_credit$3 === void 0 || (_this$dossier_credit$3 = _this$dossier_credit$3.client) === null || _this$dossier_credit$3 === void 0 ? void 0 : _this$dossier_credit$3.nomcli;
      }
      if (this.dossier_credit["cred_pub_tb_30001"] != undefined) {
        var _data$credit, _data$r_mensualite, _data$r_mensualite2, _data$r_mensualite3;
        var data = this.dossier_credit["cred_pub_tb_30001"];
        this.nombre_d_engagement = 1;
        this.montant_sollicite = data === null || data === void 0 ? void 0 : data.montant_credit;
        this.engagement_global_sollicite = data === null || data === void 0 ? void 0 : data.montant_credit;
        this.montant_propose = data === null || data === void 0 ? void 0 : data.montant_credit;
        this.montant_demande = data === null || data === void 0 ? void 0 : data.montant_sollicite;
        this.produit = data === null || data === void 0 || (_data$credit = data.credit) === null || _data$credit === void 0 ? void 0 : _data$credit.libelle;
        this.duree_remboursement = data === null || data === void 0 ? void 0 : data.duree_credit;
        this.periodicite = "Mensuel";
        this.taux = data === null || data === void 0 ? void 0 : data.taux;
        this.echeance = Number(data === null || data === void 0 || (_data$r_mensualite = data.r_mensualite) === null || _data$r_mensualite === void 0 ? void 0 : _data$r_mensualite.toString().replace(/\s/g, ""));
        this.echeance_total = Number(data === null || data === void 0 || (_data$r_mensualite2 = data.r_mensualite) === null || _data$r_mensualite2 === void 0 ? void 0 : _data$r_mensualite2.toString().replace(/\s/g, ""));
        this.taux_prime = data === null || data === void 0 ? void 0 : data.taux_prime;
        this.duree_differee = data === null || data === void 0 ? void 0 : data.duree_differee;
        if (this.data_le_financement_sera) {
          if (this.taux_prime != '' && this.taux_prime > 0) {
            this.data_le_financement_sera.forEach(function (element) {
              if (element.libelle == 'OUI') {
                _this2.financement_sera = element;
              }
            });
          } else {
            this.data_le_financement_sera.forEach(function (element) {
              if (element.libelle == 'NON') {
                _this2.financement_sera = element;
              }
            });
          }
        }
        this.charge_emprunt = Number(data === null || data === void 0 || (_data$r_mensualite3 = data.r_mensualite) === null || _data$r_mensualite3 === void 0 ? void 0 : _data$r_mensualite3.toString().replace(/\s/g, ""));
      }
      if (this.dossier_credit["cred_pub_tb_30005"] != undefined) {
        this.info_garanties = [];
        var _data = this.dossier_credit["cred_pub_tb_30005"];
        if (_data !== null && _data !== void 0 && _data.garanties_proposees) {
          _data === null || _data === void 0 || _data.garanties_proposees.forEach(function (element) {
            if (element.checked) {
              var _element$montant, _this2$montant_sollic, _element$type, _element$type2;
              var taux = Number(element === null || element === void 0 || (_element$montant = element.montant) === null || _element$montant === void 0 ? void 0 : _element$montant.toString().replace(/\s/g, "")) / Number((_this2$montant_sollic = _this2.montant_sollicite) === null || _this2$montant_sollic === void 0 ? void 0 : _this2$montant_sollic.toString().replace(/\s/g, ""));
              if (taux > 1) {
                taux = 1;
              }
              taux = taux * 100;
              taux = taux.toFixed(2);
              if ((element === null || element === void 0 || (_element$type = element.type) === null || _element$type === void 0 ? void 0 : _element$type.libelle) != undefined && (element === null || element === void 0 || (_element$type2 = element.type) === null || _element$type2 === void 0 ? void 0 : _element$type2.libelle) != '') {
                var _element$type3, _element$type4;
                _this2.info_garanties.push({
                  code: element === null || element === void 0 || (_element$type3 = element.type) === null || _element$type3 === void 0 ? void 0 : _element$type3.code,
                  libelle: element === null || element === void 0 || (_element$type4 = element.type) === null || _element$type4 === void 0 ? void 0 : _element$type4.libelle,
                  details: element.commentaire,
                  taux: taux,
                  coefficient: element.type
                });
              }
            }
          });
        }

        // if (data?.autre_prets) {
        //     data?.autre_prets.forEach(element => {
        //         let mt = Number(element?.encours?.toString().replace(/\s/g, ""));
        //         let mt_m = Number(element?.charge_mensuelle?.toString().replace(/\s/g, ""));

        //         if (mt > 0) {

        //             if (element?.banque == "NSIA BANQUE-CI") {
        //                 this.nombre_d_engagement = Number(this.nombre_d_engagement?.toString().replace(/\s/g, "")) + 1;
        //                 this.engagement_global_sollicite = Number(this.engagement_global_sollicite?.toString().replace(/\s/g, "")) + mt;
        //                 this.echeance_total = Number(this.echeance_total?.toString().replace(/\s/g, "")) + mt_m;
        //             }

        //         }
        //     });
        // }

        // if (data?.ressources) {
        //     data?.ressources.forEach(element => {
        //         let mt = Number(element?.montant_emprunteur?.toString().replace(/\s/g, ""));
        //         if (mt > 0) {
        //             if (element.libelle == 'Salaire') {
        //                 this.source_remboursement = Number(this.source_remboursement?.toString().replace(/\s/g, "")) + mt;
        //             }
        //             this.source_remboursement_2 = Number(this.source_remboursement_2?.toString().replace(/\s/g, "")) + mt;
        //             this.ressources.push({
        //                 checked: true,
        //                 libelle: element.libelle,
        //                 montant_emprunteur: element.montant_emprunteur,
        //             })
        //         }
        //     });
        // }
      }
      if (this.dossier_credit["cred_pub_tb_30002"] != undefined) {
        var _data2$date_naissance;
        var _data2 = this.dossier_credit["cred_pub_tb_30002"];
        var annee_actuelle = new Date().getFullYear();
        var annee_naissance = Number(_data2 === null || _data2 === void 0 || (_data2$date_naissance = _data2.date_naissance) === null || _data2$date_naissance === void 0 || (_data2$date_naissance = _data2$date_naissance.toString()) === null || _data2$date_naissance === void 0 ? void 0 : _data2$date_naissance.split('-')[0]);
        if (annee_naissance > 0) this.age = annee_actuelle - annee_naissance;
        this.statut_matrimonial = _data2 === null || _data2 === void 0 ? void 0 : _data2.matrimoniale;
        this.date_relation = _data2 === null || _data2 === void 0 ? void 0 : _data2.date_entree_en_relation;
        if (this.date_relation != '') {
          var date_anciennete_relation = this.date_relation.split('-');
          date_anciennete_relation[0] = Number(date_anciennete_relation[0]);
          date_anciennete_relation[1] = Number(date_anciennete_relation[1]) - 1;
          date_anciennete_relation[2] = Number(date_anciennete_relation[2]);
          date_anciennete_relation = new Date(date_anciennete_relation[0], date_anciennete_relation[1], date_anciennete_relation[2]);
          var data_actuelle = new Date();
          var diff_month = this.dateDiffInMonths(date_anciennete_relation, data_actuelle);
          if (this.data_anciennete_de_la_relation) {
            this.data_anciennete_de_la_relation.forEach(function (element) {
              var min = Number(element.min);
              var max = Number(element.max);
              if (max != 0) {
                if (min <= diff_month && max > diff_month) {
                  _this2.anciennete_relation = element;
                }
              } else {
                if (diff_month > min) {
                  _this2.anciennete_relation = element;
                }
              }
            });
          }
        }
        if (_data2 !== null && _data2 !== void 0 && _data2.engagements_en_cours) {
          _data2 === null || _data2 === void 0 || _data2.engagements_en_cours.forEach(function (element) {
            var _element$encours, _element$mensualite;
            var mt = Number(element === null || element === void 0 || (_element$encours = element.encours) === null || _element$encours === void 0 ? void 0 : _element$encours.toString().replace(/\s/g, ""));
            var mt_m = Number(element === null || element === void 0 || (_element$mensualite = element.mensualite) === null || _element$mensualite === void 0 ? void 0 : _element$mensualite.toString().replace(/\s/g, ""));
            if (mt > 0) {
              if ((element === null || element === void 0 ? void 0 : element.banque) == "NSIA BANQUE-CI") {
                var _this2$nombre_d_engag, _this2$engagement_glo, _this2$echeance_total;
                _this2.nombre_d_engagement = Number((_this2$nombre_d_engag = _this2.nombre_d_engagement) === null || _this2$nombre_d_engag === void 0 ? void 0 : _this2$nombre_d_engag.toString().replace(/\s/g, "")) + 1;
                _this2.engagement_global_sollicite = Number((_this2$engagement_glo = _this2.engagement_global_sollicite) === null || _this2$engagement_glo === void 0 ? void 0 : _this2$engagement_glo.toString().replace(/\s/g, "")) + mt;
                _this2.echeance_total = Number((_this2$echeance_total = _this2.echeance_total) === null || _this2$echeance_total === void 0 ? void 0 : _this2$echeance_total.toString().replace(/\s/g, "")) + mt_m;
              }
            }
          });
        }
        if (_data2 !== null && _data2 !== void 0 && _data2.revenu_domicilie_nsia) {
          _data2 === null || _data2 === void 0 || _data2.revenu_domicilie_nsia.forEach(function (element) {
            var _element$montant_empr;
            var mt = Number(element === null || element === void 0 || (_element$montant_empr = element.montant_emprunteur) === null || _element$montant_empr === void 0 ? void 0 : _element$montant_empr.toString().replace(/\s/g, ""));
            if (mt > 0) {
              var _this2$source_rembour2;
              if (element.libelle == 'Salaire net') {
                var _this2$source_rembour;
                _this2.source_remboursement = Number((_this2$source_rembour = _this2.source_remboursement) === null || _this2$source_rembour === void 0 ? void 0 : _this2$source_rembour.toString().replace(/\s/g, "")) + mt;
              }
              _this2.source_remboursement_2 = Number((_this2$source_rembour2 = _this2.source_remboursement_2) === null || _this2$source_rembour2 === void 0 ? void 0 : _this2$source_rembour2.toString().replace(/\s/g, "")) + mt;
            }
          });
        }
      }
      if (this.dossier_credit["cred_pub_tb_30003"] != undefined) {
        var _data3$salaire;
        var _data3 = this.dossier_credit["cred_pub_tb_30003"];
        this.quotite_cessible = _data3 === null || _data3 === void 0 ? void 0 : _data3.quotite_cessible;
        this.taux_quotite_cessible = _data3 === null || _data3 === void 0 ? void 0 : _data3.pourcentage_quotite;
        this.quotite_disponible = _data3 === null || _data3 === void 0 ? void 0 : _data3.quotite_cessible_disponible;
        this.la_qcd_couvre_la_charge_d_emprunt = "NON";
        if (this.quotite_disponible > 0) {
          this.la_qcd_couvre_la_charge_d_emprunt = "OUI";
        }
        if (this.data_type_de_contrat) {
          this.data_type_de_contrat.forEach(function (element) {
            if (element.libelle == (_data3 === null || _data3 === void 0 ? void 0 : _data3.type_contrat)) {
              _this2.type_contrat = element;
            }
          });
        }
        if (this.data_le_client_a_t_il) {
          this.data_le_client_a_t_il.forEach(function (element) {
            if (element.libelle == (_data3 === null || _data3 === void 0 ? void 0 : _data3.periode_d_essai_achevee)) {
              _this2.periode_d_essai_achevee = element;
            }
          });
        }
        if (this.data_date_de_depart_a_la_retraite) {
          this.data_date_de_depart_a_la_retraite.forEach(function (element) {
            if (element.libelle == (_data3 === null || _data3 === void 0 ? void 0 : _data3.depart_retraite)) {
              _this2.depart_retraite = element;
            }
          });
        }
        if (this.data_statut_du_client_selon_lemployeur) {
          this.data_statut_du_client_selon_lemployeur.forEach(function (element) {
            if (element.libelle == (_data3 === null || _data3 === void 0 ? void 0 : _data3.statut_client)) {
              _this2.statut_client = element;
            }
          });
        }
        var date_act_emploi = "";
        if ((_data3 === null || _data3 === void 0 ? void 0 : _data3.type_contrat) == "CDI") {
          var _data3$annee_act_empl;
          date_act_emploi = (_data3$annee_act_empl = _data3 === null || _data3 === void 0 ? void 0 : _data3.annee_act_emploi) !== null && _data3$annee_act_empl !== void 0 ? _data3$annee_act_empl : '';
        }
        if ((_data3 === null || _data3 === void 0 ? void 0 : _data3.type_contrat) == "CDD") {
          var _data3$data_expiratio;
          date_act_emploi = (_data3$data_expiratio = _data3 === null || _data3 === void 0 ? void 0 : _data3.data_expiration_cdd_interim) !== null && _data3$data_expiratio !== void 0 ? _data3$data_expiratio : '';
        }
        if (date_act_emploi != '') {
          date_act_emploi = date_act_emploi.split('-');
          date_act_emploi[0] = Number(date_act_emploi[0]);
          date_act_emploi[1] = Number(date_act_emploi[1]) - 1;
          date_act_emploi = new Date(date_act_emploi[0], date_act_emploi[1], 1);
          var _data_actuelle = new Date();
          var _diff_month = this.dateDiffInMonths(date_act_emploi, _data_actuelle);
          if (this.data_anciennete_chez_lemployeur) {
            this.data_anciennete_chez_lemployeur.forEach(function (element) {
              var min = Number(element.min);
              var max = Number(element.max);
              if (max != 0) {
                if (min <= _diff_month && max > _diff_month) {
                  _this2.anciennete_emploi = element;
                }
              } else {
                if (_diff_month > min) {
                  _this2.anciennete_emploi = element;
                }
              }
            });
          }
        }

        // this.type_contrat = data?.type_contrat;
        // this.periode_d_essai_achevee = data?.periode_d_essai_achevee;
        // this.depart_retraite = data?.depart_retraite;
        // this.statut_client = data?.statut_client;
        this.employeur = _data3 === null || _data3 === void 0 ? void 0 : _data3.entreprise;
        this.salaire = Number(_data3 === null || _data3 === void 0 || (_data3$salaire = _data3.salaire) === null || _data3$salaire === void 0 ? void 0 : _data3$salaire.toString().replace(/\s/g, ""));
      }
      if ((_this$dossier_credit3 = this.dossier_credit) !== null && _this$dossier_credit3 !== void 0 && _this$dossier_credit3.decision_logs) {
        this.dossier_credit.decision_logs.forEach(function (element) {
          var _this2$data_tb;
          if ((element === null || element === void 0 ? void 0 : element.giver_role_sigle) == 'CC' && (_this2$data_tb = _this2.data_tb) !== null && _this2$data_tb !== void 0 && _this2$data_tb.observations) {
            if (element.outcome == 2) {
              _this2.data_tb.observations[0].decision = "Avis favorable";
            } else if (element.outcome == 3) {
              _this2.data_tb.observations[0].decision = "Avis défavorable";
            }
          }
        });
      }
      if (this.dossier_credit["cred_pub_tb_30006"] != undefined) {
        var _this$data_tb;
        if ((_this$data_tb = this.data_tb) !== null && _this$data_tb !== void 0 && _this$data_tb.observations) {
          var _this$dossier_credit$4;
          this.data_tb.observations[0].observation = (_this$dossier_credit$4 = this.dossier_credit["cred_pub_tb_30006"]) === null || _this$dossier_credit$4 === void 0 ? void 0 : _this$dossier_credit$4.avis_1;
        }
      }

      // if (this.data_tb?.observations) {
      //     this.data_tb.observations[0].observation = this.data_tb?.commentaire_score;
      // }

      if ((_this$dossier_credit4 = this.dossier_credit) !== null && _this$dossier_credit4 !== void 0 && _this$dossier_credit4.pub_workflow && this.dossier_credit.pub_workflow.length > 0) {
        var _this$dossier_credit5;
        var pub_final = (_this$dossier_credit5 = this.dossier_credit) === null || _this$dossier_credit5 === void 0 ? void 0 : _this$dossier_credit5.pub_workflow[this.dossier_credit.pub_workflow.length - 1];
        this.niveau_de_pouvoir = pub_final === null || pub_final === void 0 ? void 0 : pub_final.responsible;
      }
      if (this.salaire > 0) {
        this.coef_endettement = (this.echeance_total / this.salaire * 100).toFixed(2);
      }
      this.scoringData(res);
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
    dateDiffInMonths: function dateDiffInMonths(d1, d2) {
      var d1Y = d1.getFullYear();
      var d2Y = d2.getFullYear();
      var d1M = d1.getMonth();
      var d2M = d2.getMonth();
      return d2M + 12 * d2Y - (d1M + 12 * d1Y);
    },
    formatAmount: function formatAmount(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    },
    loadScoringData: function loadScoringData() {
      var _this3 = this;
      var cachedScoringCritere = localStorage.getItem('scoring_criteres');
      if (!cachedScoringCritere) {
        _services_credit_service__WEBPACK_IMPORTED_MODULE_0__["default"].loadScoringData().then(function (res) {
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
    loadData2: function loadData2() {
      var _this4 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var criteres, res_, cachedScoringCritere, data;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              criteres = [];
              res_ = [];
              cachedScoringCritere = localStorage.getItem('scoring_criteres');
              if (cachedScoringCritere) {
                _context2.next = 8;
                break;
              }
              _context2.next = 6;
              return _services_credit_service__WEBPACK_IMPORTED_MODULE_0__["default"].loadScoringData().then(function (res) {
                res_ = res;
                criteres = res.data.data.criteres;
                localStorage.setItem('scoring_criteres', JSON.stringify(res));
              })["catch"](function (err) {
                console.log(err);
              });
            case 6:
              _context2.next = 11;
              break;
            case 8:
              data = JSON.parse(cachedScoringCritere);
              res_ = data;
              criteres = data.data.data.criteres;
            case 11:
              criteres.forEach(function (list) {
                if (list.type == 'ppi' || list.type == null) {
                  if (list.slug == 'anciennete_de_la_relation') {
                    _this4.data_anciennete_de_la_relation = list.elements;
                  }
                  if (list.slug == 'le_financement_sera_t_il_adosse_a_une_assurance_en_couverture_de_pret') {
                    _this4.data_le_financement_sera = list.elements;
                  }
                  if (list.slug == 'le_client_a_t_il_acheve_sa_periode_dessai_professionnel') {
                    _this4.data_le_client_a_t_il = list.elements;
                  }
                  if (list.slug == 'date_de_depart_a_la_retraite_ou_06_mois_apres_lecheance_du_credit') {
                    _this4.data_date_de_depart_a_la_retraite = list.elements;
                  }
                  if (list.slug == 'statut_du_client_selon_lemployeur') {
                    _this4.data_statut_du_client_selon_lemployeur = list.elements;
                  }
                  if (list.slug == 'type_de_contrat') {
                    _this4.data_type_de_contrat = list.elements;
                  }
                  if (list.slug == 'anciennete_chez_lemployeur') {
                    _this4.data_anciennete_chez_lemployeur = list.elements;
                  }
                  if (list.slug == 'credits_anterieurs') {
                    _this4.data_credits_anterieurs = list.elements;
                  }
                  if (list.slug == 'credits_en_cours') {
                    _this4.data_credits_en_cours = list.elements;
                  }
                  if (list.slug == 'garanties') {
                    _this4.data_garanties = list.elements;
                  }
                }
              });
              _this4.loadData(res_);
            case 13:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }))();
    },
    scoringData: function scoringData(res) {
      var _this5 = this;
      var criteres = res.data.data.criteres;
      if (criteres.length > 0) {
        criteres.forEach(function (element) {
          if (element.type == null || element.type == _this5.carcasse_type.toString().toLowerCase()) {
            _this5.criteres.push(element);
          }
        });
      }
      this.criteres.forEach(function (list) {
        var max = 0;
        list.elements.forEach(function (elm) {
          elm.checked = false;
          elm.proof = "";
          if (list.slug == 'anciennete_de_la_relation') {
            var _this5$anciennete_rel;
            if (((_this5$anciennete_rel = _this5.anciennete_relation) === null || _this5$anciennete_rel === void 0 ? void 0 : _this5$anciennete_rel.libelle) == elm.libelle) {
              elm.checked = true;
              _this5.total_obtenu += Number(elm.point);
              _this5.note_info += Number(elm.point);
            }
          }
          if (list.slug == 'le_financement_sera_t_il_adosse_a_une_assurance_en_couverture_de_pret') {
            var _this5$financement_se;
            if (((_this5$financement_se = _this5.financement_sera) === null || _this5$financement_se === void 0 ? void 0 : _this5$financement_se.libelle) == elm.libelle) {
              elm.checked = true;
              _this5.total_obtenu += Number(elm.point);
              _this5.note_info += Number(elm.point);
            }
          }
          if (list.slug == 'le_client_a_t_il_acheve_sa_periode_dessai_professionnel') {
            var _this5$periode_d_essa;
            if (((_this5$periode_d_essa = _this5.periode_d_essai_achevee) === null || _this5$periode_d_essa === void 0 ? void 0 : _this5$periode_d_essa.libelle) == elm.libelle) {
              elm.checked = true;
              _this5.total_obtenu += Number(elm.point);
              _this5.note_info += Number(elm.point);
            }
          }
          if (list.slug == 'date_de_depart_a_la_retraite_ou_06_mois_apres_lecheance_du_credit') {
            var _this5$depart_retrait;
            if (((_this5$depart_retrait = _this5.depart_retraite) === null || _this5$depart_retrait === void 0 ? void 0 : _this5$depart_retrait.libelle) == elm.libelle) {
              elm.checked = true;
              _this5.total_obtenu += Number(elm.point);
              _this5.note_info += Number(elm.point);
            }
          }
          if (list.slug == 'statut_du_client_selon_lemployeur') {
            var _this5$statut_client;
            if (((_this5$statut_client = _this5.statut_client) === null || _this5$statut_client === void 0 ? void 0 : _this5$statut_client.libelle) == elm.libelle) {
              elm.checked = true;
              _this5.total_obtenu += Number(elm.point);
              _this5.note_info += Number(elm.point);
            }
          }
          if (list.slug == 'type_de_contrat') {
            var _this5$type_contrat;
            if (((_this5$type_contrat = _this5.type_contrat) === null || _this5$type_contrat === void 0 ? void 0 : _this5$type_contrat.libelle) == elm.libelle) {
              elm.checked = true;
              _this5.total_obtenu += Number(elm.point);
              _this5.note_info += Number(elm.point);
            }
          }
          if (list.slug == 'anciennete_chez_lemployeur') {
            var _this5$anciennete_emp;
            if (((_this5$anciennete_emp = _this5.anciennete_emploi) === null || _this5$anciennete_emp === void 0 ? void 0 : _this5$anciennete_emp.libelle) == elm.libelle) {
              elm.checked = true;
              _this5.total_obtenu += Number(elm.point);
              _this5.note_info += Number(elm.point);
            }
          }
          if (list.slug == 'credits_anterieurs') {
            var _this5$data_tb;
            if (((_this5$data_tb = _this5.data_tb) === null || _this5$data_tb === void 0 ? void 0 : _this5$data_tb.credit_ant_imp) == elm.libelle) {
              elm.checked = true;
              _this5.total_obtenu += Number(elm.point);
            }
          }
          if (list.slug == 'credits_en_cours') {
            var _this5$data_tb2;
            if (((_this5$data_tb2 = _this5.data_tb) === null || _this5$data_tb2 === void 0 ? void 0 : _this5$data_tb2.credit_encours) == elm.libelle) {
              elm.checked = true;
              _this5.total_obtenu += Number(elm.point);
            }
          }
          if (list.slug == 'garanties') {
            var _p_$toFixed;
            var p_ = 0;
            var pr_ = [];
            if (_this5.info_garanties != "") {
              _this5.info_garanties.forEach(function (el) {
                var _el$coefficient;
                if ((_el$coefficient = el.coefficient) !== null && _el$coefficient !== void 0 && _el$coefficient.point && el.coefficient.id == elm.id) {
                  var _el$coefficient2, _el$taux, _t$toFixed;
                  elm.checked = true;
                  var p = Number((_el$coefficient2 = el.coefficient) === null || _el$coefficient2 === void 0 || (_el$coefficient2 = _el$coefficient2.point) === null || _el$coefficient2 === void 0 ? void 0 : _el$coefficient2.toString().replace(/\s/g, ""));
                  var t = Number((_el$taux = el.taux) === null || _el$taux === void 0 ? void 0 : _el$taux.toString().replace(/\s/g, "")) / 100;
                  t = (_t$toFixed = t.toFixed(2)) === null || _t$toFixed === void 0 || (_t$toFixed = _t$toFixed.toString()) === null || _t$toFixed === void 0 ? void 0 : _t$toFixed.replace('.00', '');
                  p_ += p * 50 * t;
                  pr_.push('(' + p + ' * 50 ' + ' * ' + t + ')');
                }
              });
            }
            elm.proof = pr_.join(' + ');
            elm.point_init = elm.point;
            elm.point = (_p_$toFixed = p_.toFixed(2)) === null || _p_$toFixed === void 0 || (_p_$toFixed = _p_$toFixed.toString()) === null || _p_$toFixed === void 0 ? void 0 : _p_$toFixed.replace('.00', '');
            //this.total_obtenu += Number(p_);
            _this5.sous_total_obtenu += Number(p_);
          } else {
            if (elm.point >= max) {
              max = Number(elm.point);
            }
          }
        });
        _this5.total_point += Number(max);
        list.max = max;
      });
      this.total_point += 50;
      if (this.sous_total_obtenu > 0) {
        var _this$sous_total_obte;
        this.sous_total_obtenu = (_this$sous_total_obte = this.sous_total_obtenu.toFixed(2)) === null || _this$sous_total_obte === void 0 || (_this$sous_total_obte = _this$sous_total_obte.toString()) === null || _this$sous_total_obte === void 0 ? void 0 : _this$sous_total_obte.replace('.00', '');
      }
      if (this.sous_total_obtenu >= 50) {
        this.total_obtenu += 50;
      } else {
        this.total_obtenu += Number(this.sous_total_obtenu);
      }
      if (this.total_obtenu > 0) {
        var _this$total_obtenu$to;
        this.total_obtenu = (_this$total_obtenu$to = this.total_obtenu.toFixed(2)) === null || _this$total_obtenu$to === void 0 || (_this$total_obtenu$to = _this$total_obtenu$to.toString()) === null || _this$total_obtenu$to === void 0 ? void 0 : _this$total_obtenu$to.replace('.00', '');
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/contre_analyse_filiale/ppi_resultat_scoring/SCPPI.old.vue?vue&type=template&id=7e5af3df&scoped=true":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/contre_analyse_filiale/ppi_resultat_scoring/SCPPI.old.vue?vue&type=template&id=7e5af3df&scoped=true ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm$data_tb, _vm$data_tb2, _vm$data_tb3, _vm$anciennete_emploi, _vm$type_contrat, _vm$periode_d_essai_a, _vm$depart_retraite, _vm$statut_client, _vm$data_tb4, _vm$data_tb5, _vm$data_tb6, _vm$data_tb7, _vm$anciennete_relati, _vm$data_tb8, _vm$data_tb9, _vm$data_tb0, _vm$data_tb1;
  var _vm = this,
    _c = _vm._self._c;
  return _vm.data_tb ? _c("div", {
    staticClass: "row px-3"
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "w-100 m-0 p-0",
    staticStyle: {
      border: "none"
    }
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "row mb-3"
  }, [_c("div", {
    staticClass: "col-md-6 mt-2"
  }, [_c("label", {
    attrs: {
      "for": "use_analyste"
    }
  }, [_vm._v("Use Analyste : ")]), _vm._v(" " + _vm._s((_vm$data_tb = _vm.data_tb) === null || _vm$data_tb === void 0 ? void 0 : _vm$data_tb.use_analyste) + "\n                    ")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 mt-2"
  }, [_c("label", {
    attrs: {
      "for": "date_saisie"
    }
  }, [_vm._v("Date de saisie : ")]), _vm._v(" " + _vm._s(((_vm$data_tb2 = _vm.data_tb) === null || _vm$data_tb2 === void 0 ? void 0 : _vm$data_tb2.date_saisie) != "" ? _vm.formatDate((_vm$data_tb3 = _vm.data_tb) === null || _vm$data_tb3 === void 0 ? void 0 : _vm$data_tb3.date_saisie) : "") + "\n                    ")])])]), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("table", {
    staticClass: "table table-bordered mb-4"
  }, [_vm._m(0), _vm._v(" "), _c("tbody", [_c("tr", [_c("td", [_c("div", {
    staticClass: "pl-10-px"
  }, [_c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-borderless"
  }, [_vm._m(1), _vm._v(" "), _c("tbody", [_vm._l(_vm.info_garanties, function (element, index) {
    return [element.libelle != "" ? _c("tr", {
      key: "garantie_" + index
    }, [_c("td", {
      staticClass: "text-nowrap"
    }, [_vm._v(_vm._s(element.code))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(element.libelle))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(element.details))]), _vm._v(" "), _c("td", {
      staticClass: "text-nowrap"
    }, [_vm._v(_vm._s(element.taux) + " %")])]) : _vm._e()];
  })], 2)])])])])])])])]), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("table", {
    staticClass: "table table-bordered mb-4"
  }, [_vm._m(2), _vm._v(" "), _c("tbody", [_c("tr", [_c("td", [_c("div", {
    staticClass: "pl-10-px"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-md-6 mt-2"
  }, [_c("label", {
    attrs: {
      "for": "indice_client"
    }
  }, [_vm._v("Indice Client : ")]), _vm._v(" " + _vm._s(_vm.indice_client) + "\n                                        ")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 mt-2"
  }, [_c("label", {
    attrs: {
      "for": "nom_prenom"
    }
  }, [_vm._v("Nom & Prénoms : ")]), _vm._v(" " + _vm._s(_vm.nom_prenom) + "\n                                        ")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 mt-2"
  }, [_c("label", {
    attrs: {
      "for": "age"
    }
  }, [_vm._v("Age : ")]), _vm._v(" " + _vm._s(_vm.age) + " ans\n                                        ")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 mt-2"
  }, [_c("label", {
    attrs: {
      "for": "statut_matrimonial"
    }
  }, [_vm._v("Statut matrimonial : ")]), _vm._v(" " + _vm._s(_vm.statut_matrimonial) + "\n                                        ")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 mt-2"
  }, [_c("label", {
    attrs: {
      "for": "employeur"
    }
  }, [_vm._v("Employeur : ")]), _vm._v(" " + _vm._s(_vm.employeur) + "\n                                        ")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 mt-2"
  }, [_c("label", {
    attrs: {
      "for": "anciennete_emploi"
    }
  }, [_vm._v("Ancienneté Employeur : ")]), _vm._v(" " + _vm._s((_vm$anciennete_emploi = _vm.anciennete_emploi) === null || _vm$anciennete_emploi === void 0 ? void 0 : _vm$anciennete_emploi.libelle) + "\n                                        ")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 mt-2"
  }, [_c("label", {
    attrs: {
      "for": "type_contrat"
    }
  }, [_vm._v("Type Contrat : ")]), _vm._v(" " + _vm._s((_vm$type_contrat = _vm.type_contrat) === null || _vm$type_contrat === void 0 ? void 0 : _vm$type_contrat.libelle) + "\n                                        ")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 mt-2"
  }, [_c("label", {
    attrs: {
      "for": "periode_d_essai_achevee"
    }
  }, [_vm._v("Période d'essai Achevée : ")]), _vm._v("  " + _vm._s((_vm$periode_d_essai_a = _vm.periode_d_essai_achevee) === null || _vm$periode_d_essai_a === void 0 ? void 0 : _vm$periode_d_essai_a.libelle) + "\n                                        ")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 mt-2"
  }, [_c("label", {
    attrs: {
      "for": "depart_retraite"
    }
  }, [_vm._v("Départ Retraite : ")]), _vm._v(" " + _vm._s((_vm$depart_retraite = _vm.depart_retraite) === null || _vm$depart_retraite === void 0 ? void 0 : _vm$depart_retraite.libelle) + "\n                                        ")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 mt-2"
  }, [_c("label", {
    attrs: {
      "for": "statut_client"
    }
  }, [_vm._v("Statut client : ")]), _vm._v(" " + _vm._s((_vm$statut_client = _vm.statut_client) === null || _vm$statut_client === void 0 ? void 0 : _vm$statut_client.libelle) + "\n                                        ")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 mt-2"
  }, [_c("label", {
    attrs: {
      "for": "qualite"
    }
  }, [_vm._v("Qualité : ")]), _vm._v(" " + _vm._s((_vm$data_tb4 = _vm.data_tb) === null || _vm$data_tb4 === void 0 ? void 0 : _vm$data_tb4.qualite) + "\n                                        ")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 mt-2"
  }, [_c("label", {
    attrs: {
      "for": "date_relation"
    }
  }, [_vm._v("Date de la relation : ")]), _vm._v(" " + _vm._s(_vm.date_relation != "" ? _vm.formatDate(_vm.date_relation) : "") + "\n                                        ")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 mt-2"
  }, [_c("label", {
    attrs: {
      "for": "nombre_d_engagement"
    }
  }, [_vm._v("Nombre d'engagement : ")]), _vm._v(" " + _vm._s(_vm.nombre_d_engagement) + "\n                                        ")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 mt-2"
  }, [_c("label", {
    attrs: {
      "for": "engagement_global_sollicite"
    }
  }, [_vm._v("Engagement global sollicité : ")]), _vm._v(" " + _vm._s(_vm.formatAmount(_vm.engagement_global_sollicite)) + "\n                                        ")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 mt-2"
  }, [_c("label", {
    attrs: {
      "for": "montant_demande"
    }
  }, [_vm._v("Montant demandé : ")]), _vm._v(" " + _vm._s(_vm.formatAmount(_vm.montant_demande)) + "\n                                        ")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 mt-2"
  }, [_c("label", {
    attrs: {
      "for": "montant_propose"
    }
  }, [_vm._v("Montant proposé par le CC : ")]), _vm._v(" " + _vm._s(_vm.formatAmount(_vm.montant_propose)) + "\n                                        ")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 mt-2"
  }, [_c("label", [_vm._v("Le financement sera-t-il adossé à une assurance en couverture de prêt ? : ")]), _vm._v(" " + _vm._s((_vm$data_tb5 = _vm.data_tb) === null || _vm$data_tb5 === void 0 ? void 0 : _vm$data_tb5.financement_sera) + "\n                                        ")])])])])])])])]), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("table", {
    staticClass: "table table-bordered mb-4"
  }, [_vm._m(3), _vm._v(" "), _c("tbody", [_c("tr", [_c("td", [_c("div", {
    staticClass: "pl-10-px"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-md-12 mt-2"
  }, [_c("label", {
    attrs: {
      "for": "produit"
    }
  }, [_vm._v("Produit : ")]), _vm._v(" " + _vm._s(_vm.produit) + "\n                                        ")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-12 mt-2"
  }, [_c("label", {
    attrs: {
      "for": "montant_sollicite"
    }
  }, [_vm._v("Montant Sollicité : ")]), _vm._v(" " + _vm._s(_vm._f("formatNumber")(_vm.montant_sollicite)) + "\n                                        ")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-12 mt-2"
  }, [_c("label", {
    attrs: {
      "for": "duree_remboursement"
    }
  }, [_vm._v("Durée Remboursement (Mois) : ")]), _vm._v(" " + _vm._s(_vm.duree_remboursement) + "\n                                        ")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-12 mt-2"
  }, [_c("label", {
    attrs: {
      "for": "periodicite"
    }
  }, [_vm._v("Périodicité : ")]), _vm._v(" " + _vm._s(_vm.periodicite) + "\n                                        ")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-12 mt-2"
  }, [_c("label", {
    attrs: {
      "for": "taux"
    }
  }, [_vm._v("Taux : ")]), _vm._v(" " + _vm._s(_vm.taux) + " %\n                                        ")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-12 mt-2"
  }, [_c("label", {
    attrs: {
      "for": "taux_prime"
    }
  }, [_vm._v("Taux prime d'assurance : ")]), _vm._v(" " + _vm._s(_vm.taux_prime) + " %\n                                        ")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-12 mt-2"
  }, [_c("label", {
    attrs: {
      "for": "duree_differee"
    }
  }, [_vm._v("Durée différée : ")]), _vm._v(" " + _vm._s(_vm.duree_differee) + "\n                                        ")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-12 mt-2"
  }, [_c("label", {
    attrs: {
      "for": "echeance"
    }
  }, [_vm._v("Echéance : ")]), _vm._v(" " + _vm._s(_vm.formatAmount(_vm.echeance)) + "\n                                        ")])])])])])])])]), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("table", {
    staticClass: "table table-bordered mb-4"
  }, [_vm._m(4), _vm._v(" "), _c("tbody", [_c("tr", [_c("td", [_c("div", {
    staticClass: "pl-10-px"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-md-12 mt-2"
  }, [_c("label", {
    attrs: {
      "for": "credit_ant_imp"
    }
  }, [_vm._v("Crédit ant. Imp : ")]), _vm._v(" " + _vm._s((_vm$data_tb6 = _vm.data_tb) === null || _vm$data_tb6 === void 0 ? void 0 : _vm$data_tb6.credit_ant_imp) + " \n                                        ")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-12 mt-2"
  }, [_c("label", {
    attrs: {
      "for": "credit_encours"
    }
  }, [_vm._v("Crédit encours : ")]), _vm._v(" " + _vm._s((_vm$data_tb7 = _vm.data_tb) === null || _vm$data_tb7 === void 0 ? void 0 : _vm$data_tb7.credit_encours) + " \n                                        ")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-12 mt-2"
  }, [_c("label", {
    attrs: {
      "for": "source_remboursement"
    }
  }, [_vm._v("Source Remboursement : ")]), _vm._v(" " + _vm._s(_vm.formatAmount(_vm.source_remboursement)) + "\n                                        ")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-12 mt-2"
  }, [_c("label", {
    attrs: {
      "for": "charge_emprunt"
    }
  }, [_vm._v("Charge Emprunt : ")]), _vm._v(" " + _vm._s(_vm.formatAmount(_vm.charge_emprunt)) + "\n                                        ")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-12 mt-2"
  }, [_c("label", {
    attrs: {
      "for": "anciennete_relation"
    }
  }, [_vm._v("Ancienneté Relation : ")]), _vm._v(" " + _vm._s((_vm$anciennete_relati = _vm.anciennete_relation) === null || _vm$anciennete_relati === void 0 ? void 0 : _vm$anciennete_relati.libelle) + " \n                                        ")])])])])])])])]), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("table", {
    staticClass: "table table-bordered mb-4"
  }, [_vm._m(5), _vm._v(" "), _c("tbody", [_c("tr", [_c("td", [_c("div", {
    staticClass: "pl-10-px"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-md-12 mt-2"
  }, [_c("label", {
    attrs: {
      "for": "taux_quotite_cessible"
    }
  }, [_vm._v("Taux de quotite cessible : ")]), _vm._v(" " + _vm._s(_vm.taux_quotite_cessible) + " %\n                                        ")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-12 mt-2"
  }, [_c("label", {
    attrs: {
      "for": "coef_endettement"
    }
  }, [_vm._v("Coef d'endettement : ")]), _vm._v(" " + _vm._s(_vm.coef_endettement) + " %\n                                        ")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-12 mt-2"
  }, [_c("label", {
    attrs: {
      "for": "quotite_cessible"
    }
  }, [_vm._v("Quotité cessible : ")]), _vm._v(" " + _vm._s(_vm.formatAmount(_vm.quotite_cessible)) + "\n                                        ")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-12 mt-2"
  }, [_c("label", {
    attrs: {
      "for": "quotite_disponible"
    }
  }, [_vm._v("Quotité disponible : ")]), _vm._v(" " + _vm._s(_vm.formatAmount(_vm.quotite_disponible)) + "\n                                        ")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-12 mt-2"
  }, [_c("label", {
    attrs: {
      "for": "la_qcd_couvre_la_charge_d_emprunt"
    }
  }, [_vm._v("La QCD couvre la charge d'emprunt ? : ")]), _vm._v(" " + _vm._s(_vm.la_qcd_couvre_la_charge_d_emprunt) + "\n                                        ")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-12 mt-2"
  }, [_c("label", {
    attrs: {
      "for": "niveau_de_pouvoir"
    }
  }, [_vm._v("Niveau de pouvoir : ")]), _vm._v(" " + _vm._s(_vm.niveau_de_pouvoir) + "\n                                        ")])])])])])])])]), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("table", {
    staticClass: "table table-bordered mb-4"
  }, [_vm._m(6), _vm._v(" "), _c("tbody", [_c("tr", [_c("td", [_c("div", {
    staticClass: "pl-10-px"
  }, [_c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-borderless"
  }, [_vm._m(7), _vm._v(" "), _c("tbody", _vm._l((_vm$data_tb8 = _vm.data_tb) === null || _vm$data_tb8 === void 0 ? void 0 : _vm$data_tb8.observations, function (element, index) {
    return _c("tr", {
      key: "observation_" + index
    }, [_c("td", {
      staticClass: "text-nowrap"
    }, [_vm._v(_vm._s(element.date != "" ? _vm.formatDate(element.date) : ""))]), _vm._v(" "), _c("td", {
      staticClass: "text-nowrap"
    }, [_vm._v(_vm._s(element.nom))]), _vm._v(" "), _c("td", {
      staticClass: "text-nowrap"
    }, [_vm._v(_vm._s(element.decision))]), _vm._v(" "), _c("td", [_c("span", {
      domProps: {
        innerHTML: _vm._s(element.observation)
      }
    })])]);
  }), 0)])])])])])])])]), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("table", {
    staticClass: "table table-bordered mb-4"
  }, [_vm._m(8), _vm._v(" "), _c("tbody", [_c("tr", [_c("td", [_c("div", {
    staticClass: "pl-10-px"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-md-6 mt-2"
  }, [_c("label", {
    attrs: {
      "for": "note_info_client"
    }
  }, [_vm._v("Note Info Client : ")]), _vm._v(" " + _vm._s(_vm.note_info) + "\n                                        ")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 mt-2"
  }, [_c("label", {
    attrs: {
      "for": "score_minimal_pour_accord"
    }
  }, [_vm._v("Score minimal pour accord : ")]), _vm._v(" " + _vm._s((_vm$data_tb9 = _vm.data_tb) === null || _vm$data_tb9 === void 0 ? void 0 : _vm$data_tb9.score_minimal_pour_accord) + "\n                                        ")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 mt-2"
  }, [_c("label", {
    attrs: {
      "for": "note_qcd"
    }
  }, [_vm._v("Note QCD : ")]), _vm._v(" " + _vm._s((_vm$data_tb0 = _vm.data_tb) === null || _vm$data_tb0 === void 0 ? void 0 : _vm$data_tb0.note_qcd) + "\n                                        ")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 mt-2"
  }, [_c("label", {
    attrs: {
      "for": "score"
    }
  }, [_vm._v("Score : ")]), _vm._v(" " + _vm._s(_vm.total_obtenu + " / " + ((_vm$data_tb1 = _vm.data_tb) === null || _vm$data_tb1 === void 0 ? void 0 : _vm$data_tb1.total_score)) + "\n                                        ")])])])])])])])])]), _vm._v(" "), _c("div", {
    staticClass: "w-100 m-0 p-0",
    staticStyle: {
      border: "none"
    }
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "head-memorandum-title mb-4",
    staticStyle: {
      "text-align": "center"
    }
  }, [_vm._v("PROOF")]), _vm._v(" "), _c("div", {
    staticClass: "table table-responsive"
  }, [_c("table", {
    staticClass: "table table-bordered"
  }, [_vm._m(9), _vm._v(" "), _c("tbody", [_vm._l(_vm.criteres, function (critere, index) {
    return [critere.elements.length > 0 ? [_c("tr", {
      key: index + "_"
    }, [_c("td", {
      staticClass: "vertical-middle",
      attrs: {
        rowspan: critere.elements.length
      }
    }, [_vm._v(_vm._s(critere.libelle))]), _vm._v(" "), _c("td", {
      staticClass: "vertical-middle",
      "class": {
        "text-checked": critere.elements[0].checked
      }
    }, [_vm._v("\n                                            " + _vm._s(critere.elements.length > 0 ? critere.elements[0].libelle : "") + " " + _vm._s(critere.slug == "garanties" ? " : " + critere.elements[0].point_init : "") + "\n                                            "), critere.slug == "garanties" ? _c("div", {
      staticStyle: {
        color: "#000",
        "font-size": "0.7rem"
      }
    }, [_c("i", [_vm._v(_vm._s(critere.elements[0].proof))])]) : _vm._e()]), _vm._v(" "), _c("td", {
      staticClass: "vertical-middle text-center text-nowrap",
      "class": {
        "text-checked": critere.elements[0].checked
      }
    }, [_vm._v("\n                                            " + _vm._s(critere.elements.length > 0 ? critere.elements[0].point : "") + "\n                                        ")])]), _vm._v(" "), _vm._l(critere.elements, function (element, i) {
      return [i > 0 ? _c("tr", {
        key: i + "_" + index + "_"
      }, [_c("td", {
        staticClass: "vertical-middle",
        "class": {
          "text-checked": element.checked
        }
      }, [_vm._v("\n                                                " + _vm._s(element.libelle) + " " + _vm._s(critere.slug == "garanties" ? " : " + element.point_init : "") + "\n                                                "), critere.slug == "garanties" ? _c("div", {
        staticStyle: {
          color: "#000",
          "font-size": "0.7rem"
        }
      }, [_c("i", [_vm._v(_vm._s(element.proof))])]) : _vm._e()]), _vm._v(" "), _c("td", {
        staticClass: "vertical-middle text-center text-nowrap",
        "class": {
          "text-checked": element.checked
        }
      }, [_vm._v("\n                                                " + _vm._s(element.point) + "\n                                            ")])]) : _vm._e()];
    })] : _vm._e()];
  }), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "vertical-middle fw-bold text-right",
    attrs: {
      colspan: "2"
    }
  }, [_vm._v(" Sous-total garanties")]), _vm._v(" "), _c("td", {
    staticClass: "vertical-middle text-center fw-bold text-nowrap"
  }, [_vm._v(" " + _vm._s(_vm.sous_total_obtenu) + " / 50 ")])]), _vm._v(" "), _vm.sous_total_obtenu > 50 ? _c("tr", [_c("td", {
    staticClass: "vertical-middle fw-bold text-right text-checked",
    attrs: {
      colspan: "2"
    }
  }, [_vm._v(" Sous-total garanties considérées")]), _vm._v(" "), _c("td", {
    staticClass: "vertical-middle text-center fw-bold text-nowrap text-checked"
  }, [_vm._v(" 50 / 50 ")])]) : _vm._e(), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "vertical-middle fw-bold text-right bg-grey text-checked",
    attrs: {
      colspan: "2"
    }
  }, [_vm._v(" Total ")]), _vm._v(" "), _c("td", {
    staticClass: "vertical-middle text-center fw-bold text-nowrap bg-grey text-checked"
  }, [_vm._v(" " + _vm._s(_vm.total_obtenu) + " / " + _vm._s(_vm.total_point) + " ")])])], 2)])])])])])]) : _vm._e();
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", {
    staticClass: "bg-ed-primary"
  }, [_c("tr", [_c("th", {
    staticClass: "col-12 text-center py-2 m-0"
  }, [_c("b", {
    staticClass: "text-uppercase"
  }, [_vm._v("Information des garanties")])])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("td", {
    staticClass: "fw-bold col-2"
  }, [_vm._v("Code")]), _vm._v(" "), _c("td", {
    staticClass: "fw-bold col-5"
  }, [_vm._v("Libelle")]), _vm._v(" "), _c("td", {
    staticClass: "fw-bold col-3"
  }, [_vm._v("Details")]), _vm._v(" "), _c("td", {
    staticClass: "fw-bold col-2"
  }, [_vm._v("Taux")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", {
    staticClass: "bg-ed-primary"
  }, [_c("tr", [_c("th", {
    staticClass: "col-12 text-center py-2 m-0"
  }, [_c("b", {
    staticClass: "text-uppercase"
  }, [_vm._v("Information du client")])])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", {
    staticClass: "bg-ed-primary"
  }, [_c("tr", [_c("th", {
    staticClass: "col-12 text-center py-2 m-0"
  }, [_c("b", {
    staticClass: "text-uppercase"
  }, [_vm._v("Information concours")])])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", {
    staticClass: "bg-ed-primary"
  }, [_c("tr", [_c("th", {
    staticClass: "col-12 text-center py-2 m-0"
  }, [_c("b", {
    staticClass: "text-uppercase"
  }, [_vm._v("Informations de l'emprunt")])])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", {
    staticClass: "bg-ed-primary"
  }, [_c("tr", [_c("th", {
    staticClass: "col-12 text-center py-2 m-0"
  }, [_c("b", {
    staticClass: "text-uppercase"
  }, [_vm._v("Information QCD")])])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", {
    staticClass: "bg-ed-primary"
  }, [_c("tr", [_c("th", {
    staticClass: "col-12 text-center py-2 m-0"
  }, [_c("b", {
    staticClass: "text-uppercase"
  }, [_vm._v("Observation")])])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("td", {
    staticClass: "fw-bold"
  }, [_vm._v("Date")]), _vm._v(" "), _c("td", {
    staticClass: "fw-bold"
  }, [_vm._v("Nom")]), _vm._v(" "), _c("td", {
    staticClass: "fw-bold"
  }, [_vm._v("Décision")]), _vm._v(" "), _c("td", {
    staticClass: "fw-bold"
  }, [_vm._v("Observation")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", {
    staticClass: "bg-ed-primary"
  }, [_c("tr", [_c("th", {
    staticClass: "col-12 text-center py-2 m-0"
  }, [_c("b", {
    staticClass: "text-uppercase"
  }, [_vm._v("Score")])])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("th", {
    staticClass: "text-center vertical-middle"
  }, [_vm._v("Critères de base")]), _vm._v(" "), _c("th", {
    staticClass: "text-center vertical-middle"
  }, [_vm._v("Indicateurs")]), _vm._v(" "), _c("th", {
    staticClass: "text-center vertical-middle"
  }, [_vm._v("Points")])])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/contre_analyse_filiale/ppi_resultat_scoring/SCPPI.old.vue?vue&type=style&index=0&id=7e5af3df&lang=css&scoped=true":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/contre_analyse_filiale/ppi_resultat_scoring/SCPPI.old.vue?vue&type=style&index=0&id=7e5af3df&lang=css&scoped=true ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.bg-grey[data-v-7e5af3df] {\r\n    background-color: #f4f3f3;\n}\nth[data-v-7e5af3df] {\r\n    background: #f4f3f3 !important;\n}\n.vertical-middle[data-v-7e5af3df] {\r\n    vertical-align: middle;\n}\n.font-bold[data-v-7e5af3df] {\r\n    font-weight: bold;\n}\nlabel[data-v-7e5af3df] {\r\n    font-weight: bold;\n}\n.head-memorandum-title[data-v-7e5af3df] {\r\n    margin-top: 15px;\r\n    padding: 16px;\r\n    color: #fff;\r\n    font-weight: bold;\r\n    background-color: #34495e;\r\n    border: 2px solid #575759;\r\n    box-shadow: 1px 3px 4px #ddd;\r\n    font-size: 16px;\r\n    text-align: center;\r\n    text-transform: uppercase;\r\n    border-radius: 10px;\r\n    margin-bottom: 15px;\n}\n.text-uppercase[data-v-7e5af3df] {\r\n    text-transform: uppercase;\n}\n._border_right[data-v-7e5af3df] {\r\n    border-right: 1px solid;\n}\n._border_bottom[data-v-7e5af3df] {\r\n    border-bottom: 1px solid;\n}\n.pl-10-px[data-v-7e5af3df] {\r\n    padding-left: 10px;\n}\n.pl-30-px[data-v-7e5af3df] {\r\n    padding-left: 30px;\n}\n.pl-3[data-v-7e5af3df] {\r\n    padding-left: 10px;\n}\n.text-checked[data-v-7e5af3df] {\r\n    color: rgb(231, 76, 60);\r\n    font-weight: bold;\n}\r\n\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/contre_analyse_filiale/ppi_resultat_scoring/SCPPI.old.vue?vue&type=style&index=0&id=7e5af3df&lang=css&scoped=true":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/contre_analyse_filiale/ppi_resultat_scoring/SCPPI.old.vue?vue&type=style&index=0&id=7e5af3df&lang=css&scoped=true ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SCPPI_old_vue_vue_type_style_index_0_id_7e5af3df_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SCPPI.old.vue?vue&type=style&index=0&id=7e5af3df&lang=css&scoped=true */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/contre_analyse_filiale/ppi_resultat_scoring/SCPPI.old.vue?vue&type=style&index=0&id=7e5af3df&lang=css&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SCPPI_old_vue_vue_type_style_index_0_id_7e5af3df_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SCPPI_old_vue_vue_type_style_index_0_id_7e5af3df_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/offview/bank/nsia/contre_analyse_filiale/ppi_resultat_scoring/SCPPI.old.vue":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/components/offview/bank/nsia/contre_analyse_filiale/ppi_resultat_scoring/SCPPI.old.vue ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SCPPI_old_vue_vue_type_template_id_7e5af3df_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SCPPI.old.vue?vue&type=template&id=7e5af3df&scoped=true */ "./resources/js/components/offview/bank/nsia/contre_analyse_filiale/ppi_resultat_scoring/SCPPI.old.vue?vue&type=template&id=7e5af3df&scoped=true");
/* harmony import */ var _SCPPI_old_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SCPPI.old.vue?vue&type=script&lang=js */ "./resources/js/components/offview/bank/nsia/contre_analyse_filiale/ppi_resultat_scoring/SCPPI.old.vue?vue&type=script&lang=js");
/* harmony import */ var _SCPPI_old_vue_vue_type_style_index_0_id_7e5af3df_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SCPPI.old.vue?vue&type=style&index=0&id=7e5af3df&lang=css&scoped=true */ "./resources/js/components/offview/bank/nsia/contre_analyse_filiale/ppi_resultat_scoring/SCPPI.old.vue?vue&type=style&index=0&id=7e5af3df&lang=css&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _SCPPI_old_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _SCPPI_old_vue_vue_type_template_id_7e5af3df_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _SCPPI_old_vue_vue_type_template_id_7e5af3df_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "7e5af3df",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/offview/bank/nsia/contre_analyse_filiale/ppi_resultat_scoring/SCPPI.old.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/offview/bank/nsia/contre_analyse_filiale/ppi_resultat_scoring/SCPPI.old.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************!*\
  !*** ./resources/js/components/offview/bank/nsia/contre_analyse_filiale/ppi_resultat_scoring/SCPPI.old.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SCPPI_old_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SCPPI.old.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/contre_analyse_filiale/ppi_resultat_scoring/SCPPI.old.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SCPPI_old_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/offview/bank/nsia/contre_analyse_filiale/ppi_resultat_scoring/SCPPI.old.vue?vue&type=style&index=0&id=7e5af3df&lang=css&scoped=true":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./resources/js/components/offview/bank/nsia/contre_analyse_filiale/ppi_resultat_scoring/SCPPI.old.vue?vue&type=style&index=0&id=7e5af3df&lang=css&scoped=true ***!
  \*********************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SCPPI_old_vue_vue_type_style_index_0_id_7e5af3df_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SCPPI.old.vue?vue&type=style&index=0&id=7e5af3df&lang=css&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/contre_analyse_filiale/ppi_resultat_scoring/SCPPI.old.vue?vue&type=style&index=0&id=7e5af3df&lang=css&scoped=true");


/***/ }),

/***/ "./resources/js/components/offview/bank/nsia/contre_analyse_filiale/ppi_resultat_scoring/SCPPI.old.vue?vue&type=template&id=7e5af3df&scoped=true":
/*!*******************************************************************************************************************************************************!*\
  !*** ./resources/js/components/offview/bank/nsia/contre_analyse_filiale/ppi_resultat_scoring/SCPPI.old.vue?vue&type=template&id=7e5af3df&scoped=true ***!
  \*******************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SCPPI_old_vue_vue_type_template_id_7e5af3df_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SCPPI_old_vue_vue_type_template_id_7e5af3df_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SCPPI_old_vue_vue_type_template_id_7e5af3df_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SCPPI.old.vue?vue&type=template&id=7e5af3df&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/contre_analyse_filiale/ppi_resultat_scoring/SCPPI.old.vue?vue&type=template&id=7e5af3df&scoped=true");


/***/ })

}]);