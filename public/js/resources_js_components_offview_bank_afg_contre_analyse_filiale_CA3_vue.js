"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_offview_bank_afg_contre_analyse_filiale_CA3_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/contre_analyse_filiale/CA3.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/contre_analyse_filiale/CA3.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _forms_afg_carcasse_ppo_utils_ScoringView_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../forms/afg/carcasse_ppo/utils/ScoringView.vue */ "./resources/js/components/forms/afg/carcasse_ppo/utils/ScoringView.vue");
/* harmony import */ var _services_ebapis_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../services/ebapis.service */ "./resources/js/services/ebapis.service.js");
/* harmony import */ var _components_modals_ResultatScoringsRating_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../components/modals/ResultatScoringsRating.vue */ "./resources/js/components/modals/ResultatScoringsRating.vue");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return r; }; var t, r = {}, e = Object.prototype, n = e.hasOwnProperty, o = "function" == typeof Symbol ? Symbol : {}, i = o.iterator || "@@iterator", a = o.asyncIterator || "@@asyncIterator", u = o.toStringTag || "@@toStringTag"; function c(t, r, e, n) { Object.defineProperty(t, r, { value: e, enumerable: !n, configurable: !n, writable: !n }); } try { c({}, ""); } catch (t) { c = function c(t, r, e) { return t[r] = e; }; } function h(r, e, n, o) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype); return c(a, "_invoke", function (r, e, n) { var o = 1; return function (i, a) { if (3 === o) throw Error("Generator is already running"); if (4 === o) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var u = n.delegate; if (u) { var c = d(u, n); if (c) { if (c === f) continue; return c; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (1 === o) throw o = 4, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = 3; var h = s(r, e, n); if ("normal" === h.type) { if (o = n.done ? 4 : 2, h.arg === f) continue; return { value: h.arg, done: n.done }; } "throw" === h.type && (o = 4, n.method = "throw", n.arg = h.arg); } }; }(r, n, new Context(o || [])), !0), a; } function s(t, r, e) { try { return { type: "normal", arg: t.call(r, e) }; } catch (t) { return { type: "throw", arg: t }; } } r.wrap = h; var f = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var l = {}; c(l, i, function () { return this; }); var p = Object.getPrototypeOf, y = p && p(p(x([]))); y && y !== e && n.call(y, i) && (l = y); var v = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(l); function g(t) { ["next", "throw", "return"].forEach(function (r) { c(t, r, function (t) { return this._invoke(r, t); }); }); } function AsyncIterator(t, r) { function e(o, i, a, u) { var c = s(t[o], t, i); if ("throw" !== c.type) { var h = c.arg, f = h.value; return f && "object" == _typeof(f) && n.call(f, "__await") ? r.resolve(f.__await).then(function (t) { e("next", t, a, u); }, function (t) { e("throw", t, a, u); }) : r.resolve(f).then(function (t) { h.value = t, a(h); }, function (t) { return e("throw", t, a, u); }); } u(c.arg); } var o; c(this, "_invoke", function (t, n) { function i() { return new r(function (r, o) { e(t, n, r, o); }); } return o = o ? o.then(i, i) : i(); }, !0); } function d(r, e) { var n = e.method, o = r.i[n]; if (o === t) return e.delegate = null, "throw" === n && r.i["return"] && (e.method = "return", e.arg = t, d(r, e), "throw" === e.method) || "return" !== n && (e.method = "throw", e.arg = new TypeError("The iterator does not provide a '" + n + "' method")), f; var i = s(o, r.i, e.arg); if ("throw" === i.type) return e.method = "throw", e.arg = i.arg, e.delegate = null, f; var a = i.arg; return a ? a.done ? (e[r.r] = a.value, e.next = r.n, "return" !== e.method && (e.method = "next", e.arg = t), e.delegate = null, f) : a : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, f); } function w(t) { this.tryEntries.push(t); } function m(r) { var e = r[4] || {}; e.type = "normal", e.arg = t, r[4] = e; } function Context(t) { this.tryEntries = [[-1]], t.forEach(w, this), this.reset(!0); } function x(r) { if (null != r) { var e = r[i]; if (e) return e.call(r); if ("function" == typeof r.next) return r; if (!isNaN(r.length)) { var o = -1, a = function e() { for (; ++o < r.length;) if (n.call(r, o)) return e.value = r[o], e.done = !1, e; return e.value = t, e.done = !0, e; }; return a.next = a; } } throw new TypeError(_typeof(r) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, c(v, "constructor", GeneratorFunctionPrototype), c(GeneratorFunctionPrototype, "constructor", GeneratorFunction), c(GeneratorFunctionPrototype, u, GeneratorFunction.displayName = "GeneratorFunction"), r.isGeneratorFunction = function (t) { var r = "function" == typeof t && t.constructor; return !!r && (r === GeneratorFunction || "GeneratorFunction" === (r.displayName || r.name)); }, r.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, c(t, u, "GeneratorFunction")), t.prototype = Object.create(v), t; }, r.awrap = function (t) { return { __await: t }; }, g(AsyncIterator.prototype), c(AsyncIterator.prototype, a, function () { return this; }), r.AsyncIterator = AsyncIterator, r.async = function (t, e, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(h(t, e, n, o), i); return r.isGeneratorFunction(e) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, g(v), c(v, u, "Generator"), c(v, i, function () { return this; }), c(v, "toString", function () { return "[object Generator]"; }), r.keys = function (t) { var r = Object(t), e = []; for (var n in r) e.unshift(n); return function t() { for (; e.length;) if ((n = e.pop()) in r) return t.value = n, t.done = !1, t; return t.done = !0, t; }; }, r.values = x, Context.prototype = { constructor: Context, reset: function reset(r) { if (this.prev = this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(m), !r) for (var e in this) "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0][4]; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(r) { if (this.done) throw r; var e = this; function n(t) { a.type = "throw", a.arg = r, e.next = t; } for (var o = e.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i[4], u = this.prev, c = i[1], h = i[2]; if (-1 === i[0]) return n("end"), !1; if (!c && !h) throw Error("try statement without catch or finally"); if (null != i[0] && i[0] <= u) { if (u < c) return this.method = "next", this.arg = t, n(c), !0; if (u < h) return n(h), !1; } } }, abrupt: function abrupt(t, r) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var n = this.tryEntries[e]; if (n[0] > -1 && n[0] <= this.prev && this.prev < n[2]) { var o = n; break; } } o && ("break" === t || "continue" === t) && o[0] <= r && r <= o[2] && (o = null); var i = o ? o[4] : {}; return i.type = t, i.arg = r, o ? (this.method = "next", this.next = o[2], f) : this.complete(i); }, complete: function complete(t, r) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && r && (this.next = r), f; }, finish: function finish(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[2] === t) return this.complete(e[4], e[3]), m(e), f; } }, "catch": function _catch(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[0] === t) { var n = e[4]; if ("throw" === n.type) { var o = n.arg; m(e); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(r, e, n) { return this.delegate = { i: x(r), r: e, n: n }, "next" === this.method && (this.arg = t), f; } }, r; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  // name: 'PPOScoring',
  props: {
    dossier_credit: Object
  },
  components: {
    ScoringView: _forms_afg_carcasse_ppo_utils_ScoringView_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    ResultatScoringsRating: _components_modals_ResultatScoringsRating_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  computed: {
    getFaciliteSolicite: function getFaciliteSolicite() {
      var _this$dossier_credit;
      if ((_this$dossier_credit = this.dossier_credit) !== null && _this$dossier_credit !== void 0 && (_this$dossier_credit = _this$dossier_credit.cred_pub_tb_120004) !== null && _this$dossier_credit !== void 0 && _this$dossier_credit.facilites_sollicitees) {
        this.facilites_sollicitees = this.dossier_credit.cred_pub_tb_120004.facilites_sollicitees;
      }
      return this.facilites_sollicitees;
    },
    getNoteEtCouleurs: function getNoteEtCouleurs() {
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
    }
  },
  mounted: function mounted() {
    var _this = this;
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var _this$dossier_credit2, _this$dossier_credit3;
      var _this$dossier_credit4, personnel, professionnel, stabilite;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _this.carcasse_type = (_this$dossier_credit2 = _this.dossier_credit) === null || _this$dossier_credit2 === void 0 || (_this$dossier_credit2 = _this$dossier_credit2.cred_pub_tb_14073) === null || _this$dossier_credit2 === void 0 ? void 0 : _this$dossier_credit2.carcasse_type;
            _this.formDataToBeWatched.total_score = 15;
            _this.scores.personnel = _this.getAgeInterval() * 0.3 + _this.getMatrimonialeInterval() * 0.3 + _this.getNombreEnfantsInterval() * 0.4;
            // this.scores.professionnel = (this.getDepartRetraiteInterval()*0.25) + (this.formDataToBeWatched.scolaria_type_contrat_ponderation*0.4) + (this.formDataToBeWatched.scolaria_statut_ponderation*0.35);
            // this.scores.stabilite = (this.formDataToBeWatched.scolaria_anciennete_emploi_ponderation*0.45) + (this.formDataToBeWatched.scolaria_habitation_ponderation*0.55);
            _this.scores.professionnel = _this.formDataToBeWatched.scolaria_type_contrat_ponderation * 0.3 + _this.formDataToBeWatched.scolaria_statut_ponderation * 0.70;
            _this.scores.stabilite = _this.formDataToBeWatched.scolaria_anciennete_emploi_ponderation * 0.60 + _this.formDataToBeWatched.scolaria_habitation_ponderation * 0.40;
            _this.scores.reputation = (_this.formDataToBeWatched.scolaria_relation_ponderation || 0) * 0.1 + (_this.formDataToBeWatched.scolaria_credit_anterieur_ponderation || 0) * 0.3 + (_this.formDataToBeWatched.scolaria_credit_en_cours_ponderation * 0.2 || 0);
            if (((_this$dossier_credit3 = _this.dossier_credit) === null || _this$dossier_credit3 === void 0 ? void 0 : _this$dossier_credit3.cred_pub_tb_120004) != undefined) {
              _this.facilites_sollicitees = (_this$dossier_credit4 = _this.dossier_credit) === null || _this$dossier_credit4 === void 0 || (_this$dossier_credit4 = _this$dossier_credit4.cred_pub_tb_120004) === null || _this$dossier_credit4 === void 0 ? void 0 : _this$dossier_credit4.facilites_sollicitees;
              _this.facilites_sollicitees.forEach(function (facilite) {
                var _this$getGarantiesDet;
                var garantieScore = ((_this$getGarantiesDet = _this.getGarantiesDetailsForFacilite(facilite.uuid)) === null || _this$getGarantiesDet === void 0 ? void 0 : _this$getGarantiesDet.total) || 0;
                var reputationWithGarantie = _this.scores.reputation + garantieScore * 0.40;
                _this.scores.reputation = reputationWithGarantie; //Math.floor(reputationWithGarantie * 100) / 100;

                // this.scores.reputation = reputationWithGarantie;
                var score = _this.scores.personnel * 0.20 + _this.scores.professionnel * 0.30 + _this.scores.stabilite * 0.30 + _this.scores.reputation * 0.20;
                var note = Math.round(score * 100) / 100;
                _this.scoresParFacilite.push({
                  facilite: facilite,
                  note: note,
                  reputation: Math.floor(reputationWithGarantie * 100) / 100
                });
                // console.log('this.scoresParFacilite', this.scoresParFacilite, 'score', score, 'note', note)
              });
              personnel = _this.scores.personnel;
              professionnel = _this.scores.professionnel;
              stabilite = _this.scores.stabilite;
              _this.scores.personnel = Math.round(personnel);
              _this.scores.professionnel = Math.round(professionnel);
              _this.scores.stabilite = Math.round(stabilite);
            }
          case 7:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }))();
  },
  data: function data() {
    var _this$dossier_credit5, _this$dossier_credit6, _this$dossier_credit7;
    return {
      ebapisHost: _services_ebapis_service__WEBPACK_IMPORTED_MODULE_1__["default"].host,
      scoraliaHost: "https://ebapis.com/api/v2.1/single-predict/",
      data_tb: (_this$dossier_credit5 = this.dossier_credit) === null || _this$dossier_credit5 === void 0 ? void 0 : _this$dossier_credit5.cred_pub_tb_14073,
      caf_recorded_file: (_this$dossier_credit6 = this.dossier_credit) === null || _this$dossier_credit6 === void 0 ? void 0 : _this$dossier_credit6.caf_recorded_file,
      facilites_sollicitees: (_this$dossier_credit7 = this.dossier_credit) === null || _this$dossier_credit7 === void 0 || (_this$dossier_credit7 = _this$dossier_credit7.cred_pub_tb_120004) === null || _this$dossier_credit7 === void 0 ? void 0 : _this$dossier_credit7.facilites_sollicitees,
      scoresScoralia: [],
      age: '',
      nom_prenom: '',
      indice_client: '',
      date_relation: '',
      statut_matrimonial: '',
      anciennete_relation: '',
      anciennete_emploi: '',
      type_contrat: '',
      statut_client: '',
      depart_retraite: '',
      periode_d_essai_achevee: '',
      taux: '',
      produit: '',
      echeance: '',
      echeance_total: '',
      periodicite: '',
      taux_prime: '',
      duree_differee: '',
      montant_sollicite: '',
      duree_remboursement: '',
      employeur: '',
      quotite_cessible: '',
      quotite_disponible: '',
      taux_quotite_cessible: '',
      coef_endettement: '',
      nombre_d_engagement: '',
      engagement_global_sollicite: '',
      montant_demande: '',
      montant_propose: '',
      charge_emprunt: '',
      source_remboursement: '',
      source_remboursement_2: '',
      la_qcd_couvre_la_charge_d_emprunt: '',
      niveau_de_pouvoir: '',
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
      data_garanties: [],
      loadingScoralia: false,
      scoringFailure: false,
      msgScoringFailure: '',
      response_scoralia: null,
      salaire: 0,
      financement_sera: null,
      formDataToBeWatched: {
        note_info_client: "",
        score_minimal_pour_accord: "83",
        score: "",
        score_global_scoring: "",
        score_global_scolaria: "",
        note_qcd: "",
        accord: "",
        anciennete_emploi: "",
        anciennete_relation: "",
        financement_sera: "",
        total_score: 0,
        score_global: 0,
        scolaria_scores: [],
        scoring_facilites: [],
        scolaria_age_ponderation: "",
        scolaria_matrimonial_ponderation: "",
        scolaria_nb_enfants_ponderation: "",
        scolaria_retraite_ponderation: "",
        scolaria_statut_ponderation: "",
        scolaria_type_contrat_ponderation: "",
        scolaria_habitation_ponderation: "",
        scolaria_relation_ponderation: "",
        scolaria_credit_anterieur_ponderation: "",
        scolaria_credit_en_cours_ponderation: "",
        scolaria_garanties_ponderation: ""
      },
      scores: {
        personnel: 0,
        professionnel: 0,
        stabilite: 0,
        reputation: 0,
        total: 0
      },
      scoresParFacilite: [],
      noteGlobale: 0
    };
  },
  methods: {
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
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
    },
    getGarantiesDetailsForFacilite: function getGarantiesDetailsForFacilite(faciliteUUID) {
      var _this$_garantiesDetai, _this$dossier_credit8, _this$dossier_credit9;
      // Check cache
      if ((_this$_garantiesDetai = this._garantiesDetailsCache) !== null && _this$_garantiesDetai !== void 0 && _this$_garantiesDetai[faciliteUUID]) {
        return this._garantiesDetailsCache[faciliteUUID];
      }

      // Utility to clean number strings
      var cleanNumber = function cleanNumber(value) {
        return value ? value.toString().replace(/[\s ]/g, '') : '0';
      };

      // Access data with fallback to empty arrays
      var allGaranties = ((_this$dossier_credit8 = this.dossier_credit) === null || _this$dossier_credit8 === void 0 || (_this$dossier_credit8 = _this$dossier_credit8.cred_pub_tb_14072) === null || _this$dossier_credit8 === void 0 ? void 0 : _this$dossier_credit8.garanties) || [];
      var facilites = ((_this$dossier_credit9 = this.dossier_credit) === null || _this$dossier_credit9 === void 0 || (_this$dossier_credit9 = _this$dossier_credit9.cred_pub_tb_120004) === null || _this$dossier_credit9 === void 0 ? void 0 : _this$dossier_credit9.facilites_sollicitees) || [];

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
    getColorByNote: function getColorByNote(note, libelle, faciliteUUID) {
      var _this$dossier_credit0;
      var allGaranties = ((_this$dossier_credit0 = this.dossier_credit) === null || _this$dossier_credit0 === void 0 || (_this$dossier_credit0 = _this$dossier_credit0.cred_pub_tb_14072) === null || _this$dossier_credit0 === void 0 ? void 0 : _this$dossier_credit0.garanties) || [];
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
        var _g$infos2;
        return g.id === garantieDef.id && ((_g$infos2 = g.infos) === null || _g$infos2 === void 0 ? void 0 : _g$infos2.some(function (i) {
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
      var _this$dossier_credit1;
      var birthTimestamp = (_this$dossier_credit1 = this.dossier_credit) === null || _this$dossier_credit1 === void 0 || (_this$dossier_credit1 = _this$dossier_credit1.cred_pub_tb_14073) === null || _this$dossier_credit1 === void 0 ? void 0 : _this$dossier_credit1.date_naissance;
      if (!birthTimestamp) return null;
      return Math.floor((Date.now() - new Date(birthTimestamp).getTime()) / (1000 * 60 * 60 * 24 * 365));
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
      var _this$dossier_credit10;
      var matrimoniale = (_this$dossier_credit10 = this.dossier_credit) === null || _this$dossier_credit10 === void 0 || (_this$dossier_credit10 = _this$dossier_credit10.cred_pub_tb_14073) === null || _this$dossier_credit10 === void 0 ? void 0 : _this$dossier_credit10.matrimoniale;
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
      var _this$dossier_credit11;
      var nombreEnfants = (_this$dossier_credit11 = this.dossier_credit) === null || _this$dossier_credit11 === void 0 || (_this$dossier_credit11 = _this$dossier_credit11.cred_pub_tb_14073) === null || _this$dossier_credit11 === void 0 ? void 0 : _this$dossier_credit11.nbre_enfant;
      return nombreEnfants;
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
    getDepartRetraite: function getDepartRetraite() {
      var _this$dossier_credit12, _this$dossier_credit13;
      var dateStr = (_this$dossier_credit12 = this.dossier_credit) === null || _this$dossier_credit12 === void 0 || (_this$dossier_credit12 = _this$dossier_credit12.cred_pub_tb_14073) === null || _this$dossier_credit12 === void 0 ? void 0 : _this$dossier_credit12.date_depart_retraite;
      var facilites_solicitees = (_this$dossier_credit13 = this.dossier_credit) === null || _this$dossier_credit13 === void 0 || (_this$dossier_credit13 = _this$dossier_credit13.cred_pub_tb_120004) === null || _this$dossier_credit13 === void 0 ? void 0 : _this$dossier_credit13.facilites_sollicitees;
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
      return 6;
    },
    getDepartRetraiteColorRange: function getDepartRetraiteColorRange(value) {
      var selected = this.getDepartRetraite();
      if (!selected) return {};
      var colors = {
        'Oui': 'rgb(93, 203, 106)',
        'Non': 'rgb(175, 54, 18)'
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
      var _this$dossier_credit14;
      return ((_this$dossier_credit14 = this.dossier_credit) === null || _this$dossier_credit14 === void 0 || (_this$dossier_credit14 = _this$dossier_credit14.cred_pub_tb_14073) === null || _this$dossier_credit14 === void 0 ? void 0 : _this$dossier_credit14.statut_client) || null;
    },
    getStatutClientColorRange: function getStatutClientColorRange(value) {
      var selected = this.getStatutClient();
      if (!selected) return {};
      var colorMap = {
        0: 'rgb(175, 54, 18)',
        6: 'rgb(223, 92, 36)',
        9: 'rgb(163, 186, 120)',
        12: 'rgb(163, 186, 120)',
        15: 'rgb(93, 203, 106)'
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
        var score = (_scoreMap$value = scoreMap[value]) !== null && _scoreMap$value !== void 0 ? _scoreMap$value : 0;
        this.formDataToBeWatched.scolaria_statut_ponderation = score;
        return {
          backgroundColor: colorMap[score],
          color: '#fff'
        };
      }
      return {};
    },
    getTypeContrat: function getTypeContrat() {
      var _this$dossier_credit15;
      return ((_this$dossier_credit15 = this.dossier_credit) === null || _this$dossier_credit15 === void 0 || (_this$dossier_credit15 = _this$dossier_credit15.cred_pub_tb_14073) === null || _this$dossier_credit15 === void 0 ? void 0 : _this$dossier_credit15.type_contrat) || null;
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
        10: 'rgb(163, 186, 120)',
        5: 'rgb(223, 92, 36)'
      };
      if (value === selected) {
        var _scoreMap$value2;
        var score = (_scoreMap$value2 = scoreMap[value]) !== null && _scoreMap$value2 !== void 0 ? _scoreMap$value2 : 0;
        this.formDataToBeWatched.scolaria_type_contrat_ponderation = score;
        return {
          backgroundColor: colorMap[score] || 'rgb(175, 54, 18)',
          color: '#fff'
        };
      }
      return {};
    },
    getAncienneteEmploi: function getAncienneteEmploi() {
      var _this$dossier_credit16;
      var contratData = (_this$dossier_credit16 = this.dossier_credit) === null || _this$dossier_credit16 === void 0 ? void 0 : _this$dossier_credit16.cred_pub_tb_14073;
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
      // console.log(years);
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
        3: 'rgb(255, 153, 51)',
        9: 'rgb(163, 186, 120)',
        12: 'rgb(93, 203, 106)',
        15: 'rgb(46, 158, 85)'
      };
      this.formDataToBeWatched.scolaria_anciennete_emploi_ponderation = currentScore;
      return {
        backgroundColor: colorMap[currentScore] || '#ccc',
        color: '#fff'
      };
    },
    getHabitationScore: function getHabitationScore() {
      var _this$dossier_credit17;
      var statut = (_this$dossier_credit17 = this.dossier_credit) === null || _this$dossier_credit17 === void 0 || (_this$dossier_credit17 = _this$dossier_credit17.cred_pub_tb_14073) === null || _this$dossier_credit17 === void 0 ? void 0 : _this$dossier_credit17.habitation;
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
      if (currentScore !== score) return {};
      var colorMap = {
        6: 'rgb(223, 92, 36)',
        10: 'rgb(255, 153, 51)',
        15: 'rgb(46, 158, 85)'
      };
      this.formDataToBeWatched.scolaria_habitation_ponderation = currentScore;
      return {
        backgroundColor: colorMap[score] || '#ccc',
        color: '#fff'
      };
    },
    getDateEntreeRelationScore: function getDateEntreeRelationScore() {
      var _this$dossier_credit18;
      var dateStr = (_this$dossier_credit18 = this.dossier_credit) === null || _this$dossier_credit18 === void 0 || (_this$dossier_credit18 = _this$dossier_credit18.cred_pub_tb_14073) === null || _this$dossier_credit18 === void 0 ? void 0 : _this$dossier_credit18.date_entree_en_relation;
      if (!dateStr) return null;
      var date = new Date(dateStr);
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
        6: 'rgb(255, 153, 51)',
        9: 'rgb(255, 204, 0)',
        12: 'rgb(163, 186, 120)',
        15: 'rgb(93, 203, 106)'
      };
      this.formDataToBeWatched.scolaria_relation_ponderation = currentScore;
      return {
        backgroundColor: colorMap[score] || '#ccc',
        color: '#fff'
      };
    },
    getCreditsAnterieursScore: function getCreditsAnterieursScore() {
      var _this$dossier_credit19;
      var statut = (_this$dossier_credit19 = this.dossier_credit) === null || _this$dossier_credit19 === void 0 || (_this$dossier_credit19 = _this$dossier_credit19.cred_pub_tb_14073) === null || _this$dossier_credit19 === void 0 ? void 0 : _this$dossier_credit19.credits_anterieurs;
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
        7.5: 'rgb(255, 153, 51)',
        15: 'rgb(93, 203, 106)'
      };
      this.formDataToBeWatched.scolaria_credit_anterieur_ponderation = currentScore;
      return {
        backgroundColor: colorMap[score] || '#ccc',
        color: '#fff'
      };
    },
    getCreditEnCours: function getCreditEnCours() {
      var _this$dossier_credit20;
      return (_this$dossier_credit20 = this.dossier_credit) === null || _this$dossier_credit20 === void 0 || (_this$dossier_credit20 = _this$dossier_credit20.cred_pub_tb_14073) === null || _this$dossier_credit20 === void 0 ? void 0 : _this$dossier_credit20.credit_en_cours;
    },
    getCreditEnCoursStyle: function getCreditEnCoursStyle(value) {
      var selected = this.getCreditEnCours();
      if (selected !== value) return {};
      var colorMap = {
        0: 'rgb(223, 92, 36)',
        // rouge
        6: 'rgb(255, 165, 0)',
        // orange
        15: 'rgb(93, 203, 106)' // vert
      };
      var scoreMap = {
        "Impayé constaté sur la période allant de l'instruction à la décision de crédit": 0,
        "Pas d'impayé sur la période allant de l'instruction à la décision de crédit": 12,
        "Cas de prospect: impayé chez le confère ou BIC": 0,
        "Cas de prospect: absence d'impayé chez le confère ou BIC": 6
      };
      if (value == selected) {
        var _scoreMap$value3;
        var score = (_scoreMap$value3 = scoreMap[value]) !== null && _scoreMap$value3 !== void 0 ? _scoreMap$value3 : 0;
        // console.log(value, scoreMap[value]);
        this.formDataToBeWatched.scolaria_credit_en_cours_ponderation = score;
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
      else return '';
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/contre_analyse_filiale/CA3.vue?vue&type=template&id=544eb9f8&scoped=true":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/contre_analyse_filiale/CA3.vue?vue&type=template&id=544eb9f8&scoped=true ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm.data_tb ? _c("div", {
    staticClass: "row px-3"
  }, [_c("div", {
    staticClass: "justify-content-center"
  }, [_vm.dossier_credit.tbs_in_use.includes("tb14073") ? _c("div", {
    staticClass: "table-responsive mt-3 py-3"
  }, [_c("div", {
    staticClass: "head-memorandum-title"
  }, [_vm._v("\n                Résultat scoring\n            ")])]) : _vm._e()]), _vm._v(" "), _c("div", {
    staticClass: "card",
    staticStyle: {
      width: "100%",
      margin: "0"
    }
  }, [_c("div", {
    staticClass: "card-body"
  }, [[_c("div", [_c("div", {
    staticClass: "card-body"
  }, [_vm._m(0), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("table", {
    staticClass: "table table-bordered"
  }, [_vm._m(1), _vm._v(" "), _c("tbody", [_c("tr", [_c("td", {
    attrs: {
      colspan: "3",
      rowspan: "5"
    }
  }, [_vm._v(" Âge")]), _vm._v(" "), _c("td", {
    style: _vm.getAgeColorRange(0, 20)
  }, [_vm._v("Inf à 20 ans")]), _vm._v(" "), _c("td", {
    style: _vm.getAgeColorRange(0, 20)
  }, [_vm._v("0")]), _vm._v(" "), _c("td", {
    attrs: {
      rowspan: "5"
    }
  }, [_vm._v("30")])]), _vm._v(" "), _c("tr", [_c("td", {
    style: _vm.getAgeColorRange(20, 30)
  }, [_vm._v("[20 - 30 ans[")]), _vm._v(" "), _c("td", {
    style: _vm.getAgeColorRange(20, 30)
  }, [_vm._v("3")])]), _vm._v(" "), _c("tr", [_c("td", {
    style: _vm.getAgeColorRange(30, 50)
  }, [_vm._v("[30 - 50 ans[")]), _vm._v(" "), _c("td", {
    style: _vm.getAgeColorRange(30, 50)
  }, [_vm._v("15")])]), _vm._v(" "), _c("tr", [_c("td", {
    style: _vm.getAgeColorRange(50, 60)
  }, [_vm._v("[50 - 60 ans[")]), _vm._v(" "), _c("td", {
    style: _vm.getAgeColorRange(50, 60)
  }, [_vm._v("12")])]), _vm._v(" "), _c("tr", [_c("td", {
    style: _vm.getAgeColorRange(60, 150)
  }, [_vm._v("Sup ou égal à 60 ans")]), _vm._v(" "), _c("td", {
    style: _vm.getAgeColorRange(60, 150)
  }, [_vm._v("6")])])])]), _vm._v(" "), _c("table", {
    staticClass: "table table-bordered"
  }, [_vm._m(2), _vm._v(" "), _c("tbody", [_c("tr", [_c("td", {
    attrs: {
      colspan: "3",
      rowspan: "4"
    }
  }, [_vm._v("Situation matrimoniale")]), _vm._v(" "), _c("td", {
    style: _vm.getMatrimonialeColorRange("Divorcé(e)")
  }, [_vm._v("Divorcé")]), _vm._v(" "), _c("td", {
    style: _vm.getMatrimonialeColorRange("Divorcé(e)")
  }, [_vm._v("4")]), _vm._v(" "), _c("td", {
    attrs: {
      rowspan: "4"
    }
  }, [_vm._v("30")])]), _vm._v(" "), _c("tr", [_c("td", {
    style: _vm.getMatrimonialeColorRange("Célibataire")
  }, [_vm._v("Célibataire")]), _vm._v(" "), _c("td", {
    style: _vm.getMatrimonialeColorRange("Célibataire")
  }, [_vm._v("7,5")])]), _vm._v(" "), _c("tr", [_c("td", {
    style: _vm.getMatrimonialeColorRange("Marié(e)")
  }, [_vm._v("Marié")]), _vm._v(" "), _c("td", {
    style: _vm.getMatrimonialeColorRange("Marié(e)")
  }, [_vm._v("15")])]), _vm._v(" "), _c("tr", [_c("td", {
    style: _vm.getMatrimonialeColorRange("Veuf(ve)")
  }, [_vm._v("Veuf")]), _vm._v(" "), _c("td", {
    style: _vm.getMatrimonialeColorRange("Veuf(ve)")
  }, [_vm._v("12")])])])]), _vm._v(" "), _c("table", {
    staticClass: "table table-bordered"
  }, [_vm._m(3), _vm._v(" "), _c("tbody", [_c("tr", [_c("td", {
    attrs: {
      colspan: "3",
      rowspan: "3"
    }
  }, [_vm._v("Nombre d'enfants")]), _vm._v(" "), _c("td", {
    style: _vm.getNombreEnfantsColorRange(7, 150)
  }, [_vm._v("Sup à 6")]), _vm._v(" "), _c("td", {
    style: _vm.getNombreEnfantsColorRange(7, 150)
  }, [_vm._v("3")]), _vm._v(" "), _c("td", {
    attrs: {
      rowspan: "3"
    }
  }, [_vm._v("40")])]), _vm._v(" "), _c("tr", [_c("td", {
    style: _vm.getNombreEnfantsColorRange(4, 6)
  }, [_vm._v("De 4 à 6")]), _vm._v(" "), _c("td", {
    style: _vm.getNombreEnfantsColorRange(4, 6)
  }, [_vm._v("9")])]), _vm._v(" "), _c("tr", [_c("td", {
    style: _vm.getNombreEnfantsColorRange(0, 3)
  }, [_vm._v("De 0 à 3")]), _vm._v(" "), _c("td", {
    style: _vm.getNombreEnfantsColorRange(0, 3)
  }, [_vm._v("15")])])])])])]), _vm._v(" "), _c("div", [_vm._m(4), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("table", {
    staticClass: "table table-bordered"
  }, [_vm._m(5), _vm._v(" "), _c("tbody", [_c("tr", [_c("td", {
    attrs: {
      rowspan: "10"
    }
  }, [_vm._v("Statut du client selon l'employeur")]), _vm._v(" "), _c("td", {
    style: _vm.getStatutClientColorRange("Non salarié et autres types de revenus")
  }, [_vm._v("Non salarié et autres types de revenus")]), _vm._v(" "), _c("td", {
    style: _vm.getStatutClientColorRange("Non salarié et autres types de revenus")
  }, [_vm._v("0")]), _vm._v(" "), _c("td", {
    attrs: {
      rowspan: "10"
    }
  }, [_vm._v("70")])]), _vm._v(" "), _c("tr", [_c("td", {
    style: _vm.getStatutClientColorRange("Salarié d'entreprise privée non target")
  }, [_vm._v("Salarié d’entreprise privée non target")]), _vm._v(" "), _c("td", {
    style: _vm.getStatutClientColorRange("Salarié d'entreprise privée non target")
  }, [_vm._v("6")])]), _vm._v(" "), _c("tr", [_c("td", {
    style: _vm.getStatutClientColorRange("Salarié d'entreprise privée target Tiers 1")
  }, [_vm._v("Salarié d’entreprise privée target Tiers 1")]), _vm._v(" "), _c("td", {
    style: _vm.getStatutClientColorRange("Salarié d'entreprise privée target Tiers 1")
  }, [_vm._v("12")])]), _vm._v(" "), _c("tr", [_c("td", {
    style: _vm.getStatutClientColorRange("Salarié d'entreprise privée target Tiers 2 & 3")
  }, [_vm._v("Salarié d'entreprise privée target Tiers 2 & 3")]), _vm._v(" "), _c("td", {
    style: _vm.getStatutClientColorRange("Salarié d'entreprise privée target Tiers 2 & 3")
  }, [_vm._v("9")])]), _vm._v(" "), _c("tr", [_c("td", {
    style: _vm.getStatutClientColorRange("Agent de l'Etat (non fonctionnaire)")
  }, [_vm._v("Agent de l’Etat (non fonctionnaire)")]), _vm._v(" "), _c("td", {
    style: _vm.getStatutClientColorRange("Agent de l'Etat (non fonctionnaire)")
  }, [_vm._v("9")])]), _vm._v(" "), _c("tr", [_c("td", {
    style: _vm.getStatutClientColorRange("Retraité")
  }, [_vm._v("Retraité")]), _vm._v(" "), _c("td", {
    style: _vm.getStatutClientColorRange("Retraité")
  }, [_vm._v("9")])]), _vm._v(" "), _c("tr", [_c("td", {
    style: _vm.getStatutClientColorRange("Fonctionnaire")
  }, [_vm._v("Fonctionnaire")]), _vm._v(" "), _c("td", {
    style: _vm.getStatutClientColorRange("Fonctionnaire")
  }, [_vm._v("15")])])])]), _vm._v(" "), _c("table", {
    staticClass: "table table-bordered"
  }, [_vm._m(6), _vm._v(" "), _c("tbody", [_c("tr", [_c("td", {
    attrs: {
      colspan: "3",
      rowspan: "3"
    }
  }, [_vm._v("Type de contrat")]), _vm._v(" "), _c("td", {
    style: _vm.getTypeContratColorRange("CDI")
  }, [_vm._v("CDI")]), _vm._v(" "), _c("td", {
    style: _vm.getTypeContratColorRange("CDI")
  }, [_vm._v("15")]), _vm._v(" "), _c("td", {
    attrs: {
      rowspan: "3"
    }
  }, [_vm._v("30")])]), _vm._v(" "), _c("tr", [_c("td", {
    style: _vm.getTypeContratColorRange("CDD")
  }, [_vm._v("CDD")]), _vm._v(" "), _c("td", {
    style: _vm.getTypeContratColorRange("CDD")
  }, [_vm._v("10")])])])])])]), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_vm._m(7), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("table", {
    staticClass: "table table-bordered"
  }, [_vm._m(8), _vm._v(" "), _c("tbody", [_c("tr", [_c("td", {
    attrs: {
      colspan: "5",
      rowspan: "5"
    }
  }, [_vm._v(" Ancienneté professionnelle à l'emploi actuel")]), _vm._v(" "), _c("td", {
    style: _vm.getAncienneteEmploiColorRange(0)
  }, [_vm._v("Inf à 1 ans")]), _vm._v(" "), _c("td", {
    style: _vm.getAncienneteEmploiColorRange(0)
  }, [_vm._v("0")]), _vm._v(" "), _c("td", {
    attrs: {
      rowspan: "5"
    }
  }, [_vm._v("60")])]), _vm._v(" "), _c("tr", [_c("td", {
    style: _vm.getAncienneteEmploiColorRange(3)
  }, [_vm._v("[1 - 3 ans[")]), _vm._v(" "), _c("td", {
    style: _vm.getAncienneteEmploiColorRange(3)
  }, [_vm._v("3")])]), _vm._v(" "), _c("tr", [_c("td", {
    style: _vm.getAncienneteEmploiColorRange(9)
  }, [_vm._v("[3 - 5 ans[")]), _vm._v(" "), _c("td", {
    style: _vm.getAncienneteEmploiColorRange(9)
  }, [_vm._v("9")])]), _vm._v(" "), _c("tr", [_c("td", {
    style: _vm.getAncienneteEmploiColorRange(12)
  }, [_vm._v("[5 - 7 ans[")]), _vm._v(" "), _c("td", {
    style: _vm.getAncienneteEmploiColorRange(12)
  }, [_vm._v("12")])]), _vm._v(" "), _c("tr", [_c("td", {
    style: _vm.getAncienneteEmploiColorRange(15)
  }, [_vm._v("Sup ou égal à 7 ans")]), _vm._v(" "), _c("td", {
    style: _vm.getAncienneteEmploiColorRange(15)
  }, [_vm._v("15")])])])]), _vm._v(" "), _c("table", {
    staticClass: "table table-bordered"
  }, [_vm._m(9), _vm._v(" "), _c("tbody", [_c("tr", [_c("td", {
    attrs: {
      colspan: "4",
      rowspan: "4"
    }
  }, [_vm._v("Status de Propriétaire")]), _vm._v(" "), _c("td", {
    style: _vm.getHabitationStyle(6)
  }, [_vm._v("Locataire")]), _vm._v(" "), _c("td", {
    style: _vm.getHabitationStyle(6)
  }, [_vm._v("6")]), _vm._v(" "), _c("td", {
    attrs: {
      rowspan: "4"
    }
  }, [_vm._v("40")])]), _vm._v(" "), _c("tr", [_c("td", {
    style: _vm.getHabitationStyle(10)
  }, [_vm._v("Appartement des parents")]), _vm._v(" "), _c("td", {
    style: _vm.getHabitationStyle(10)
  }, [_vm._v("10")])]), _vm._v(" "), _c("tr", [_c("td", {
    style: _vm.getHabitationStyle(15)
  }, [_vm._v("Propriétaire")]), _vm._v(" "), _c("td", {
    style: _vm.getHabitationStyle(15)
  }, [_vm._v("15")])])])])])]), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_vm._m(10), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("table", {
    staticClass: "table table-bordered"
  }, [_vm._m(11), _vm._v(" "), _c("tbody", [_c("tr", [_c("td", {
    attrs: {
      colspan: "5",
      rowspan: "5"
    }
  }, [_vm._v("Ancienneté de la relation")]), _vm._v(" "), _c("td", {
    style: _vm.getDateEntreeRelationStyle(3)
  }, [_vm._v("]0 - 3 Mois]")]), _vm._v(" "), _c("td", {
    style: _vm.getDateEntreeRelationStyle(3)
  }, [_vm._v("3")]), _vm._v(" "), _c("td", {
    attrs: {
      rowspan: "5"
    }
  }, [_vm._v("10")])]), _vm._v(" "), _c("tr", [_c("td", {
    style: _vm.getDateEntreeRelationStyle(6)
  }, [_vm._v("]3 Mois - 1 An]")]), _vm._v(" "), _c("td", {
    style: _vm.getDateEntreeRelationStyle(6)
  }, [_vm._v("6")])]), _vm._v(" "), _c("tr", [_c("td", {
    style: _vm.getDateEntreeRelationStyle(9)
  }, [_vm._v("]1 - 3 Ans]")]), _vm._v(" "), _c("td", {
    style: _vm.getDateEntreeRelationStyle(9)
  }, [_vm._v("9")])]), _vm._v(" "), _c("tr", [_c("td", {
    style: _vm.getDateEntreeRelationStyle(12)
  }, [_vm._v("]3 - 10 Ans]")]), _vm._v(" "), _c("td", {
    style: _vm.getDateEntreeRelationStyle(12)
  }, [_vm._v("12")])]), _vm._v(" "), _c("tr", [_c("td", {
    style: _vm.getDateEntreeRelationStyle(15)
  }, [_vm._v("Sup à 10 Ans")]), _vm._v(" "), _c("td", {
    style: _vm.getDateEntreeRelationStyle(15)
  }, [_vm._v("15")])])])]), _vm._v(" "), _c("table", {
    staticClass: "table table-bordered"
  }, [_vm._m(12), _vm._v(" "), _c("tbody", [_c("tr", [_c("td", {
    staticClass: "text-center align-middle",
    attrs: {
      colspan: "8",
      rowspan: "8"
    }
  }, [_vm._v("Crédits antérieurs dans nos livres")]), _vm._v(" "), _c("td", {
    style: _vm.getCreditsAnterieursStyle(9)
  }, [_vm._v("Première demande sans incident antérieur (dépassement de plus de 90 jours, déclassement)")]), _vm._v(" "), _c("td", {
    style: _vm.getCreditsAnterieursStyle(9)
  }, [_vm._v("9")]), _vm._v(" "), _c("td", {
    staticClass: "text-center align-middle",
    attrs: {
      rowspan: "8"
    }
  }, [_vm._v("30")])]), _vm._v(" "), _c("tr", [_c("td", {
    style: _vm.getCreditsAnterieursStyle(15)
  }, [_vm._v("Nième demande (à partir de la deuxième demande) sans incident enregistré : absence d'impayé ou déclassement sur un ou des crédits antérieurs)")]), _vm._v(" "), _c("td", {
    style: _vm.getCreditsAnterieursStyle(15)
  }, [_vm._v("15")])]), _vm._v(" "), _c("tr", [_c("td", {
    style: _vm.getCreditsAnterieursStyle(0)
  }, [_vm._v("Client ayant enregistré un incident : au moins 2 impayés ou déclassement sur un ou des crédits antérieurs")]), _vm._v(" "), _c("td", {
    style: _vm.getCreditsAnterieursStyle(0)
  }, [_vm._v("0")])])])]), _vm._v(" "), _c("table", {
    staticClass: "table table-bordered"
  }, [_vm._m(13), _vm._v(" "), _c("tbody", [_c("tr", [_c("td", {
    attrs: {
      colspan: "4",
      rowspan: "4"
    }
  }, [_vm._v("Crédits en cours (chez nous et à la concurrence)")]), _vm._v(" "), _c("td", {
    style: _vm.getCreditEnCoursStyle("Impayé constaté sur la période allant de l'instruction à la décision de crédit")
  }, [_vm._v("Impayé constaté sur la période allant de l'instruction à la décision de crédit")]), _vm._v(" "), _c("td", {
    style: _vm.getCreditEnCoursStyle("Impayé constaté sur la période allant de l'instruction à la décision de crédit")
  }, [_vm._v("0")]), _vm._v(" "), _c("td", {
    attrs: {
      rowspan: "4"
    }
  }, [_vm._v("20")])]), _vm._v(" "), _c("tr", [_c("td", {
    style: _vm.getCreditEnCoursStyle("Pas d'impayé sur la période allant de l'instruction à la décision de crédit")
  }, [_vm._v("Pas d'impayé sur la période allant de l'instruction à la décision de crédit")]), _vm._v(" "), _c("td", {
    style: _vm.getCreditEnCoursStyle("Pas d'impayé sur la période allant de l'instruction à la décision de crédit")
  }, [_vm._v("12")])]), _vm._v(" "), _c("tr", [_c("td", {
    style: _vm.getCreditEnCoursStyle("Cas de prospect: impayé chez le confère ou BIC")
  }, [_vm._v("Cas de prospect: impayé chez le confère ou BIC")]), _vm._v(" "), _c("td", {
    style: _vm.getCreditEnCoursStyle("Cas de prospect: impayé chez le confère ou BIC")
  }, [_vm._v("0")])]), _vm._v(" "), _c("tr", [_c("td", {
    style: _vm.getCreditEnCoursStyle("Cas de prospect: absence d'impayé chez le confère ou BIC")
  }, [_vm._v("Cas de prospect: absence d'impayé chez le confère ou BIC")]), _vm._v(" "), _c("td", {
    style: _vm.getCreditEnCoursStyle("Cas de prospect: absence d'impayé chez le confère ou BIC")
  }, [_vm._v("6")])])])]), _vm._v(" "), _vm._l(_vm.scoresParFacilite, function (scoring, index) {
    var _scoring$facilite;
    return _c("div", {
      key: index
    }, [_c("div", {
      staticClass: "justify-content-center"
    }, [_c("div", {
      staticClass: "head-memorandum-title px-3 mb-4",
      staticStyle: {
        "text-align": "center"
      }
    }, [_vm._v("CORING GARNATIE : " + _vm._s(scoring === null || scoring === void 0 || (_scoring$facilite = scoring.facilite) === null || _scoring$facilite === void 0 ? void 0 : _scoring$facilite.type_facilite))])]), _vm._v(" "), _c("table", {
      staticClass: "table table-bordered"
    }, [_vm._m(14, true), _vm._v(" "), _c("tbody", [_vm._l(_vm.getGarantiesDetailsForFacilite(scoring.facilite.uuid).list, function (garantie, idx) {
      return _vm.getGarantiesDetailsForFacilite(scoring.facilite.uuid) ? [_c("tr", [idx === 0 ? _c("td", {
        attrs: {
          colspan: "3",
          rowspan: _vm.getGarantiesDetailsForFacilite(scoring.facilite.uuid).list.length
        }
      }, [_vm._v("Garanties")]) : _vm._e(), _vm._v(" "), _c("td", {
        style: _vm.getColorByNote(garantie.note, garantie.libelle, scoring.facilite.uuid)
      }, [_vm._v(_vm._s(garantie.libelle))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(garantie.note1))]), _vm._v(" "), idx === 0 ? _c("td", {
        attrs: {
          rowspan: _vm.getGarantiesDetailsForFacilite(scoring.facilite.uuid).list.length
        }
      }, [_vm._v("\n                                                                    40\n                                                                ")]) : _vm._e()])] : _vm._e();
    })], 2)])]);
  })], 2)]), _vm._v(" "), _vm._l(_vm.scoresParFacilite, function (scoring, index) {
    var _scoring$facilite2, _vm$scores, _vm$scores2, _vm$scores3;
    return _c("div", {
      key: index,
      staticClass: "card-body"
    }, [_c("div", {
      staticClass: "justify-content-center"
    }, [_c("div", {
      staticClass: "head-memorandum-title px-3 mb-4",
      staticStyle: {
        "text-align": "center"
      }
    }, [_vm._v("NOTE FINALE : " + _vm._s(scoring === null || scoring === void 0 || (_scoring$facilite2 = scoring.facilite) === null || _scoring$facilite2 === void 0 ? void 0 : _scoring$facilite2.type_facilite))])]), _vm._v(" "), _c("div", {
      staticClass: "card-body"
    }, [_c("table", {
      staticClass: "table table-bordered"
    }, [_vm._m(15, true), _vm._v(" "), _c("tbody", [_c("tr", [_c("td", {
      style: {
        backgroundColor: _vm.getNoteEtCouleurs.couleurs.personnel,
        color: "white"
      }
    }, [_vm._v("PROFIL PERSONNEL")]), _vm._v(" "), _c("td", {
      style: {
        backgroundColor: _vm.getNoteEtCouleurs.couleurs.personnel,
        color: "white"
      }
    }, [_vm._v(_vm._s((_vm$scores = _vm.scores) === null || _vm$scores === void 0 ? void 0 : _vm$scores.personnel) + "/15")]), _vm._v(" "), _c("td", {
      style: {
        backgroundColor: _vm.getNoteEtCouleurs.couleurs.personnel,
        color: "white"
      }
    }, [_vm._v("15")])]), _vm._v(" "), _c("tr", [_c("td", {
      style: {
        backgroundColor: _vm.getNoteEtCouleurs.couleurs.professionnel,
        color: "white"
      }
    }, [_vm._v("PROFIL PROFESSIONNEL")]), _vm._v(" "), _c("td", {
      style: {
        backgroundColor: _vm.getNoteEtCouleurs.couleurs.professionnel,
        color: "white"
      }
    }, [_vm._v(_vm._s((_vm$scores2 = _vm.scores) === null || _vm$scores2 === void 0 ? void 0 : _vm$scores2.professionnel) + "/15")]), _vm._v(" "), _c("td", {
      style: {
        backgroundColor: _vm.getNoteEtCouleurs.couleurs.professionnel,
        color: "white"
      }
    }, [_vm._v("15")])]), _vm._v(" "), _c("tr", [_c("td", {
      style: {
        backgroundColor: _vm.getNoteEtCouleurs.couleurs.stabilite,
        color: "white"
      }
    }, [_vm._v("STABILITE")]), _vm._v(" "), _c("td", {
      style: {
        backgroundColor: _vm.getNoteEtCouleurs.couleurs.stabilite,
        color: "white"
      }
    }, [_vm._v(_vm._s((_vm$scores3 = _vm.scores) === null || _vm$scores3 === void 0 ? void 0 : _vm$scores3.stabilite) + "/15")]), _vm._v(" "), _c("td", {
      style: {
        backgroundColor: _vm.getNoteEtCouleurs.couleurs.stabilite,
        color: "white"
      }
    }, [_vm._v("15")])]), _vm._v(" "), _c("tr", [_c("td", {
      style: {
        backgroundColor: _vm.getNoteEtCouleurs.couleurs.reputation,
        color: "white"
      }
    }, [_vm._v("REPUTATION & RELATION AVEC LA BANQUE")]), _vm._v(" "), _c("td", {
      style: {
        backgroundColor: _vm.getNoteEtCouleurs.couleurs.reputation,
        color: "white"
      }
    }, [_vm._v(_vm._s(scoring === null || scoring === void 0 ? void 0 : scoring.reputation) + "/15")]), _vm._v(" "), _c("td", {
      style: {
        backgroundColor: _vm.getNoteEtCouleurs.couleurs.reputation,
        color: "white"
      }
    }, [_vm._v("15")])]), _vm._v(" "), _c("tr", [_c("th", {
      attrs: {
        colspan: "2"
      }
    }, [_vm._v("TOTAL")]), _vm._v(" "), _c("td", {
      style: {
        backgroundColor: _vm.getNoteEtCouleurs.couleurFinale,
        color: "white"
      }
    }, [_vm._v("100")])])])])])]);
  }), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, _vm._l(_vm.scoresParFacilite, function (scoring, index) {
    var _scoring$facilite3;
    return _c("div", {
      key: index,
      staticClass: "card-body"
    }, [_c("div", {
      staticClass: "justify-content-center"
    }, [_c("div", {
      staticClass: "head-memorandum-title px-3 mb-4",
      staticStyle: {
        "text-align": "center"
      }
    }, [_vm._v("SCORING de Facilité : " + _vm._s(scoring === null || scoring === void 0 || (_scoring$facilite3 = scoring.facilite) === null || _scoring$facilite3 === void 0 ? void 0 : _scoring$facilite3.type_facilite))])]), _vm._v(" "), _c("div", {
      staticClass: "row"
    }, [_c("div", {
      staticClass: "col-12"
    }, [_c("ResultatScoringsRating", {
      attrs: {
        score: scoring === null || scoring === void 0 ? void 0 : scoring.note,
        total_score: _vm.formDataToBeWatched.total_score,
        score_minimal_pour_accord: _vm.formDataToBeWatched.score_minimal_pour_accord
      }
    })], 1)])]);
  }), 0)], 2)]], 2)])]) : _vm._e();
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "justify-content-center"
  }, [_c("div", {
    staticClass: "head-memorandum-title px-3 mb-4",
    staticStyle: {
      "text-align": "center"
    }
  }, [_vm._v("PROFIL PERSONNEL - SITUATION FAMILIALE")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("th", {
    staticClass: "col-question",
    attrs: {
      colspan: "3"
    }
  }, [_vm._v("Question 1")]), _vm._v(" "), _c("th", {
    staticClass: "col-attribut"
  }, [_vm._v("Attribut")]), _vm._v(" "), _c("th", {
    staticClass: "col-note"
  }, [_vm._v("Note")]), _vm._v(" "), _c("th", {
    staticClass: "col-ponderation"
  }, [_vm._v("Pondération")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("th", {
    staticClass: "col-question",
    attrs: {
      colspan: "3"
    }
  }, [_vm._v("Question 2")]), _vm._v(" "), _c("th", {
    staticClass: "col-attribut"
  }, [_vm._v("Attribut")]), _vm._v(" "), _c("th", {
    staticClass: "col-note"
  }, [_vm._v("Note")]), _vm._v(" "), _c("th", {
    staticClass: "col-ponderation"
  }, [_vm._v("Pondération")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("th", {
    staticClass: "col-question",
    attrs: {
      colspan: "3"
    }
  }, [_vm._v("Question 3")]), _vm._v(" "), _c("th", {
    staticClass: "col-attribut"
  }, [_vm._v("Attribut")]), _vm._v(" "), _c("th", {
    staticClass: "col-note"
  }, [_vm._v("Note")]), _vm._v(" "), _c("th", {
    staticClass: "col-ponderation"
  }, [_vm._v("Pondération")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "justify-content-center"
  }, [_c("div", {
    staticClass: "head-memorandum-title px-3 mb-4",
    staticStyle: {
      "text-align": "center"
    }
  }, [_vm._v("PROFIL PROFESSIONNEL")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("th", {
    staticClass: "col-question"
  }, [_vm._v("Question 1")]), _vm._v(" "), _c("th", {
    staticClass: "col-attribut"
  }, [_vm._v("Attribut")]), _vm._v(" "), _c("th", {
    staticClass: "col-note"
  }, [_vm._v("Note")]), _vm._v(" "), _c("th", {
    staticClass: "col-ponderation"
  }, [_vm._v("Pondération")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("th", {
    staticClass: "col-question",
    attrs: {
      colspan: "3",
      rowspan: "3"
    }
  }, [_vm._v("Question 2")]), _vm._v(" "), _c("th", {
    staticClass: "col-attribut"
  }, [_vm._v("Attribut")]), _vm._v(" "), _c("th", {
    staticClass: "col-note"
  }, [_vm._v("Note")]), _vm._v(" "), _c("th", {
    staticClass: "col-ponderation"
  }, [_vm._v("Pondération")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "justify-content-center"
  }, [_c("div", {
    staticClass: "head-memorandum-title px-3 mb-4",
    staticStyle: {
      "text-align": "center"
    }
  }, [_vm._v("STABILITE")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("th", {
    staticClass: "col-question",
    attrs: {
      colspan: "5",
      rowspan: "5"
    }
  }, [_vm._v("Question 1")]), _vm._v(" "), _c("th", {
    staticClass: "col-attribut"
  }, [_vm._v("Attribut")]), _vm._v(" "), _c("th", {
    staticClass: "col-note"
  }, [_vm._v("Note")]), _vm._v(" "), _c("th", {
    staticClass: "col-ponderation"
  }, [_vm._v("Pondération")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("th", {
    staticClass: "col-question",
    attrs: {
      colspan: "4",
      role: "4"
    }
  }, [_vm._v("Question 2")]), _vm._v(" "), _c("th", {
    staticClass: "col-attribut"
  }, [_vm._v("Attribut")]), _vm._v(" "), _c("th", {
    staticClass: "col-note"
  }, [_vm._v("Note")]), _vm._v(" "), _c("th", {
    staticClass: "col-ponderation"
  }, [_vm._v("Pondération")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "justify-content-center"
  }, [_c("div", {
    staticClass: "head-memorandum-title px-3 mb-4",
    staticStyle: {
      "text-align": "center"
    }
  }, [_vm._v("REPUTATION & RELATION AVEC LA BANQUE")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("th", {
    staticClass: "col-question",
    attrs: {
      colspan: "5",
      rowspan: "5"
    }
  }, [_vm._v("Question 1")]), _vm._v(" "), _c("th", {
    staticClass: "col-attribut"
  }, [_vm._v("Attribut")]), _vm._v(" "), _c("th", {
    staticClass: "col-note"
  }, [_vm._v("Note")]), _vm._v(" "), _c("th", {
    staticClass: "col-ponderation"
  }, [_vm._v("Pondération")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("th", {
    staticClass: "col-question",
    attrs: {
      colspan: "8",
      rowspan: "8"
    }
  }, [_vm._v("Question 2")]), _vm._v(" "), _c("th", {
    staticClass: "col-attribut"
  }, [_vm._v("Attribut")]), _vm._v(" "), _c("th", {
    staticClass: "col-note"
  }, [_vm._v("Note")]), _vm._v(" "), _c("th", {
    staticClass: "col-ponderation"
  }, [_vm._v("Pondération")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("th", {
    staticClass: "col-question",
    attrs: {
      colspan: "4",
      rowspan: "4"
    }
  }, [_vm._v("Question 3")]), _vm._v(" "), _c("th", {
    staticClass: "col-attribut"
  }, [_vm._v("Attribut")]), _vm._v(" "), _c("th", {
    staticClass: "col-note"
  }, [_vm._v("Note")]), _vm._v(" "), _c("th", {
    staticClass: "col-ponderation"
  }, [_vm._v("Pondération")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("th", {
    staticClass: "col-question",
    attrs: {
      colspan: "3",
      rowspan: "3"
    }
  }, [_vm._v("Question 4")]), _vm._v(" "), _c("th", {
    staticClass: "col-attribut"
  }, [_vm._v("Attribut")]), _vm._v(" "), _c("th", {
    staticClass: "col-note"
  }, [_vm._v("Note")]), _vm._v(" "), _c("th", {
    staticClass: "col-ponderation"
  }, [_vm._v("Pondération")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("th", [_vm._v("Groupes de variables")]), _vm._v(" "), _c("th", [_vm._v("Score")]), _vm._v(" "), _c("th", [_vm._v("Pondération")])])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/contre_analyse_filiale/CA3.vue?vue&type=style&index=0&id=544eb9f8&lang=css&scoped=true":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/contre_analyse_filiale/CA3.vue?vue&type=style&index=0&id=544eb9f8&lang=css&scoped=true ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.bg-grey[data-v-544eb9f8] {\r\n    background-color: #f4f3f3;\n}\nth[data-v-544eb9f8] {\r\n    background: #f4f3f3 !important;\n}\n.vertical-middle[data-v-544eb9f8] {\r\n    vertical-align: middle;\n}\n.font-bold[data-v-544eb9f8] {\r\n    font-weight: bold;\n}\nlabel[data-v-544eb9f8] {\r\n    font-weight: bold;\n}\n.head-memorandum-title[data-v-544eb9f8] {\r\n    font-weight: bold !important;\r\n    text-transform: uppercase;\r\n    text-align: center;\r\n    border: 1px solid;\r\n    margin-bottom: 10px;\r\n    padding: 4px;\r\n    caption-side:top;\n}\n.text-uppercase[data-v-544eb9f8] {\r\n    text-transform: uppercase;\n}\n._border_right[data-v-544eb9f8] {\r\n    border-right: 1px solid;\n}\n._border_bottom[data-v-544eb9f8] {\r\n    border-bottom: 1px solid;\n}\n.pl-10-px[data-v-544eb9f8] {\r\n    padding-left: 10px;\n}\n.pl-30-px[data-v-544eb9f8] {\r\n    padding-left: 30px;\n}\n.pl-3[data-v-544eb9f8] {\r\n    padding-left: 10px;\n}\n.text-checked[data-v-544eb9f8] {\r\n    color: rgb(231, 76, 60);\r\n    font-weight: bold;\n}\n.scoring-card[data-v-544eb9f8] {\r\n  background: #f8f9fa;\r\n  border-radius: 8px;\r\n  padding: 20px;\r\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\r\n  transition: transform 0.2s;\n}\n.scoring-card[data-v-544eb9f8]:hover {\r\n  transform: translateY(-2px);\n}\n.scoring-title[data-v-544eb9f8] {\r\n  color: #343a40;\r\n  font-size: 1.5rem;\r\n  margin-bottom: 10px;\r\n  border-bottom: 2px solid #007bff;\r\n  padding-bottom: 5px;\r\n  display: inline-block;\n}\n.facilite-type[data-v-544eb9f8] {\r\n  font-size: 1.2rem;\r\n  color: #007bff;\r\n  display: block;\r\n  margin-bottom: 15px;\n}\n.divider[data-v-544eb9f8] {\r\n  border-top: 1px solid #dee2e6;\r\n  margin: 20px 0;\n}\n.card-body[data-v-544eb9f8] {\r\n  padding: 30px;\r\n  background: #ffffff;\r\n  border-radius: 10px;\n}\n.table th[data-v-544eb9f8], .table td[data-v-544eb9f8] {\r\n        text-align: center;\r\n        vertical-align: middle;\n}\n.col-question[data-v-544eb9f8] {\r\n        width: 15%;\n}\n.col-attribut[data-v-544eb9f8] {\r\n        width: 35%;\n}\n.col-note[data-v-544eb9f8] {\r\n        width: 10%;\n}\n.col-ponderation[data-v-544eb9f8] {\r\n        width: 10%;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/contre_analyse_filiale/CA3.vue?vue&type=style&index=0&id=544eb9f8&lang=css&scoped=true":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/contre_analyse_filiale/CA3.vue?vue&type=style&index=0&id=544eb9f8&lang=css&scoped=true ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CA3_vue_vue_type_style_index_0_id_544eb9f8_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CA3.vue?vue&type=style&index=0&id=544eb9f8&lang=css&scoped=true */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/contre_analyse_filiale/CA3.vue?vue&type=style&index=0&id=544eb9f8&lang=css&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CA3_vue_vue_type_style_index_0_id_544eb9f8_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CA3_vue_vue_type_style_index_0_id_544eb9f8_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/offview/bank/afg/contre_analyse_filiale/CA3.vue":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/offview/bank/afg/contre_analyse_filiale/CA3.vue ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CA3_vue_vue_type_template_id_544eb9f8_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CA3.vue?vue&type=template&id=544eb9f8&scoped=true */ "./resources/js/components/offview/bank/afg/contre_analyse_filiale/CA3.vue?vue&type=template&id=544eb9f8&scoped=true");
/* harmony import */ var _CA3_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CA3.vue?vue&type=script&lang=js */ "./resources/js/components/offview/bank/afg/contre_analyse_filiale/CA3.vue?vue&type=script&lang=js");
/* harmony import */ var _CA3_vue_vue_type_style_index_0_id_544eb9f8_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CA3.vue?vue&type=style&index=0&id=544eb9f8&lang=css&scoped=true */ "./resources/js/components/offview/bank/afg/contre_analyse_filiale/CA3.vue?vue&type=style&index=0&id=544eb9f8&lang=css&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _CA3_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _CA3_vue_vue_type_template_id_544eb9f8_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _CA3_vue_vue_type_template_id_544eb9f8_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "544eb9f8",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/offview/bank/afg/contre_analyse_filiale/CA3.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/offview/bank/afg/contre_analyse_filiale/CA3.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/components/offview/bank/afg/contre_analyse_filiale/CA3.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CA3_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CA3.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/contre_analyse_filiale/CA3.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CA3_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/offview/bank/afg/contre_analyse_filiale/CA3.vue?vue&type=style&index=0&id=544eb9f8&lang=css&scoped=true":
/*!*****************************************************************************************************************************************!*\
  !*** ./resources/js/components/offview/bank/afg/contre_analyse_filiale/CA3.vue?vue&type=style&index=0&id=544eb9f8&lang=css&scoped=true ***!
  \*****************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CA3_vue_vue_type_style_index_0_id_544eb9f8_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CA3.vue?vue&type=style&index=0&id=544eb9f8&lang=css&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/contre_analyse_filiale/CA3.vue?vue&type=style&index=0&id=544eb9f8&lang=css&scoped=true");


/***/ }),

/***/ "./resources/js/components/offview/bank/afg/contre_analyse_filiale/CA3.vue?vue&type=template&id=544eb9f8&scoped=true":
/*!***************************************************************************************************************************!*\
  !*** ./resources/js/components/offview/bank/afg/contre_analyse_filiale/CA3.vue?vue&type=template&id=544eb9f8&scoped=true ***!
  \***************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CA3_vue_vue_type_template_id_544eb9f8_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CA3_vue_vue_type_template_id_544eb9f8_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CA3_vue_vue_type_template_id_544eb9f8_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CA3.vue?vue&type=template&id=544eb9f8&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/contre_analyse_filiale/CA3.vue?vue&type=template&id=544eb9f8&scoped=true");


/***/ })

}]);