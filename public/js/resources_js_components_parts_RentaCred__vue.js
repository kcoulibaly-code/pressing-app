"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_parts_RentaCred__vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/parts/RentaCred_.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/parts/RentaCred_.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_ebapis_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/ebapis.service */ "./resources/js/services/ebapis.service.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
// import Auth from '../../services/auth.service'

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'RentaCred',
  props: {
    // authUser: Object,
    // dossier_credit: Object,
  },
  data: function data() {
    return {
      //
      authUser: null,
      data: {
        amortissement2: null,
        //{},
        autres_revenus_sur_credit: null,
        cout_moyen_des_ressources: null,
        frais_de_dossier: null,
        interet_annuel: null,
        montant_echeance: null,
        nombre_echeance: null,
        nombre_paiements_planifies: null,
        paiement_programme: null,
        paiements_par_an: null,
        periode_pret: null,
        plan_amortissement: null,
        //[],
        plan_amortissement2: null,
        //[],
        pourcentage_cout_moyen_des_ressources: null,
        pourcentage_rentabilite_brute_annuelle: null,
        pourcentage_taux_de_cout_du_risque_espere: null,
        prime_de_risque: null,
        rentabilite_brute_annuelle: null,
        rentabilite_nette_annuelle: null,
        rentabilite_status: null,
        revenus_generes_par_les_cashflow: null,
        revenus_annuels_sur_cashflow: null,
        revenu_cashflow: null,
        taux_de_cout_du_risque_espere: null,
        taux_interet: null,
        total_des_interets: null,
        total_revenus_annuel: null,
        total_revenus_generes_par_les_cashflow: null,
        total_revenus_sur_la_duree_du_credit: null,
        VPM: null
      },
      DATA_CONFIG: {
        KEYS: {
          pourcentage_autres_revenus_sur_credit: "Prime d'assurance",
          pourcentage_frais_de_dossier: "Frais de dossier",
          pourcentage_prime_de_risque: "Prime de risque"
        },
        taux_interet_annuel: 18.0
      },
      DEFAULT_NULL_INDICATOR: '--',
      ebapisHost: _services_ebapis_service__WEBPACK_IMPORTED_MODULE_0__["default"].host,
      dossier_credit: null,
      filiales: ["CFN_BF", "CFB_CG", "CFN_CI", "CFN_GB", "CFN_GN", "CFN_ML", "CFN_SN", "CFN_TG", "FINL"],
      formData: {
        code_filiale: null,
        depot_de_garantie: null,
        duree_mois: 0,
        mode_remboursement: null,
        montant_credit: null,
        pourcentage_autres_revenus_sur_credit: 0.00,
        pourcentage_frais_de_dossier: 3.00,
        pourcentage_prime_de_risque: 1.00,
        taux_interet_annuel: null,
        type_de_client: null
      },
      isLoading: false,
      isCashflowTableVisible: false,
      isDebugInfoVisible: false,
      isPlanAmortissementVisible: false,
      isPlanAmortissement2Visible: false,
      modes_remboursement: [1, 2, 3, 4, 5, 6, 12],
      showCalcTables: false,
      loadingMessage: "Chargement",
      messageList: [],
      types_de_client: [],
      raw_type_de_clients: ["Commerçant et Entrepreneurs individuels", "PME Formelles", "Retails (Particuliers-Salariés-Retraités)", "Mutuelles-Associations-ONG", "Professions liberales"]
    };
  },
  created: function created() {
    this.loadUserData();
  },
  mounted: function mounted() {
    this.$console.log("**RentaCred**");
    this.initData();

    // Order of operations : from bottom to top
  },
  computed: {
    debug_params_info: function debug_params_info() {
      var _this$formData, _this$formData2, _this$formData3, _this$formData4, _this$formData5, _this$formData6, _this$formData7, _this$formData8, _this$formData9, _this$formData0;
      var params = [["code_filiale", (_this$formData = this.formData) === null || _this$formData === void 0 ? void 0 : _this$formData.code_filiale], ["depot_de_garantie", (_this$formData2 = this.formData) === null || _this$formData2 === void 0 ? void 0 : _this$formData2.depot_de_garantie], ["duree_mois", (_this$formData3 = this.formData) === null || _this$formData3 === void 0 ? void 0 : _this$formData3.duree_mois], ["mode_remboursement", (_this$formData4 = this.formData) === null || _this$formData4 === void 0 ? void 0 : _this$formData4.mode_remboursement], ["montant_credit", (_this$formData5 = this.formData) === null || _this$formData5 === void 0 ? void 0 : _this$formData5.montant_credit], ["pourcentage_autres_revenus_sur_credit", (_this$formData6 = this.formData) === null || _this$formData6 === void 0 ? void 0 : _this$formData6.pourcentage_autres_revenus_sur_credit], ["pourcentage_frais_de_dossier", (_this$formData7 = this.formData) === null || _this$formData7 === void 0 ? void 0 : _this$formData7.pourcentage_frais_de_dossier], ["pourcentage_prime_de_risque", (_this$formData8 = this.formData) === null || _this$formData8 === void 0 ? void 0 : _this$formData8.pourcentage_prime_de_risque], ["taux_interet_annuel", (_this$formData9 = this.formData) === null || _this$formData9 === void 0 ? void 0 : _this$formData9.taux_interet_annuel], ["type_de_client", (_this$formData0 = this.formData) === null || _this$formData0 === void 0 ? void 0 : _this$formData0.type_de_client],
      // 
      ["periode_pret", this.periode_pret], ["paiements_par_an", this.paiements_par_an], ["paiement_programme", this.paiement_programme], ["nombre_paiements_planifies", this.nombre_paiements_planifies], ["paiementsSupp", this.paiementsSupp], ["total_des_interets", this.total_des_interets], ["rentabilite_brute_annuelle", this.rentabilite_brute_annuelle], ["rentabilite_nette_annuelle", this.rentabilite_nette_annuelle]];
      console.log("params info", params);
      return params;
    }
  },
  methods: {
    computeRentaCred: function computeRentaCred() {
      var _this = this;
      try {
        var _this$formData$montan, _this$formData1, _this$formData$code_f, _this$formData10, _this$formData$depot_, _this$formData11, _this$formData12, _this$formData$duree_, _this$formData13, _this$formData$mode_r, _this$formData14, _this$formData$pource, _this$formData15, _this$formData16, _this$formData17, _this$formData$taux_i, _this$formData18, _this$formData21;
        console.log("computeRentaCred");
        // Setup form Data;

        // TODO compute all these vars IN ORDER
        this.loadingMessage = "Vérification des informations";
        console.log("Vérification des informations");
        this.data = {
          amortissement2: null,
          //{},
          autres_revenus_sur_credit: null,
          cout_moyen_des_ressources: null,
          frais_de_dossier: null,
          interet_annuel: null,
          montant_echeance: null,
          nombre_echeance: null,
          nombre_paiements_planifies: null,
          paiement_programme: null,
          paiements_par_an: null,
          periode_pret: null,
          plan_amortissement: null,
          //[],
          plan_amortissement2: null,
          //[],
          pourcentage_cout_moyen_des_ressources: null,
          pourcentage_rentabilite_brute_annuelle: null,
          pourcentage_taux_de_cout_du_risque_espere: null,
          prime_de_risque: null,
          rentabilite_brute_annuelle: null,
          rentabilite_nette_annuelle: null,
          rentabilite_status: null,
          revenus_generes_par_les_cashflow: null,
          revenus_annuels_sur_cashflow: null,
          revenu_cashflow: null,
          taux_de_cout_du_risque_espere: null,
          taux_interet: null,
          total_des_interets: null,
          total_revenus_annuel: null,
          total_revenus_generes_par_les_cashflow: null,
          total_revenus_sur_la_duree_du_credit: null,
          VPM: null
        };
        this.loadingMessage = "Calcul des variables";
        console.log("Calcul des variables");
        var I7 = null;
        var E13 = null;
        var E23 = null;
        var E16 = null;
        var E17 = null;
        var E18 = null;
        var Q206 = null;
        var E15 = null;
        var E19 = null;
        var E20 = null;
        var E24 = null;
        var E25 = null;
        var E26 = null;
        var E27 = null;
        var E7 = (_this$formData$montan = (_this$formData1 = this.formData) === null || _this$formData1 === void 0 ? void 0 : _this$formData1.montant_credit) !== null && _this$formData$montan !== void 0 ? _this$formData$montan : 0;
        var E1 = (_this$formData$code_f = (_this$formData10 = this.formData) === null || _this$formData10 === void 0 ? void 0 : _this$formData10.code_filiale) !== null && _this$formData$code_f !== void 0 ? _this$formData$code_f : null;
        var E8 = (_this$formData$depot_ = (_this$formData11 = this.formData) === null || _this$formData11 === void 0 ? void 0 : _this$formData11.depot_de_garantie) !== null && _this$formData$depot_ !== void 0 ? _this$formData$depot_ : 0;
        var E6 = (_this$formData12 = this.formData) === null || _this$formData12 === void 0 ? void 0 : _this$formData12.type_de_client;
        var E10 = (_this$formData$duree_ = (_this$formData13 = this.formData) === null || _this$formData13 === void 0 ? void 0 : _this$formData13.duree_mois) !== null && _this$formData$duree_ !== void 0 ? _this$formData$duree_ : 1;
        var E11 = (_this$formData$mode_r = (_this$formData14 = this.formData) === null || _this$formData14 === void 0 ? void 0 : _this$formData14.mode_remboursement) !== null && _this$formData$mode_r !== void 0 ? _this$formData$mode_r : 1;
        var D16 = ((_this$formData$pource = (_this$formData15 = this.formData) === null || _this$formData15 === void 0 ? void 0 : _this$formData15.pourcentage_frais_de_dossier) !== null && _this$formData$pource !== void 0 ? _this$formData$pource : 0) / 100;
        var D17 = ((_this$formData16 = this.formData) === null || _this$formData16 === void 0 ? void 0 : _this$formData16.pourcentage_prime_de_risque) / 100;
        var D18 = ((_this$formData17 = this.formData) === null || _this$formData17 === void 0 ? void 0 : _this$formData17.pourcentage_autres_revenus_sur_credit) / 100;
        // var I7 = amortissement2?.total_des_interets;
        // var E13 = nombre_echeance;
        // var E23 = total_des_interets ?? 0;
        // var E16 = frais_de_dossier;
        // var E17 = prime_de_risque;
        // var E18 = autres_revenus_sur_credit;

        // var Q206 = total_revenus_generes_par_les_cashflow;
        // var E15 = interet_annuel;
        // var E19 = revenus_annuels_sur_cashflow;
        // var E7 = this.formData?.montant_credit;
        // var E20 = total_revenus_annuel;
        // var E24 = pourcentage_rentabilite_brute_annuelle;
        // var E25 = pourcentage_cout_moyen_des_ressources;
        // var E26 = taux_de_cout_du_risque_espere;
        // var E27 = rentabilite_nette_annuelle;

        // 
        console.log("Calcul de la période de prêt");
        var periode_pret = E10 / 12;
        console.log("periode_pret", periode_pret);
        // 
        console.log("Calcul du nombre de paiements par an");
        var paiements_par_an = 12 / E11;
        console.log("paiements_par_an", paiements_par_an);
        // 
        console.log("Calcul des frais de dossier");
        var frais_de_dossier = E10 < 12 ? D16 * E7 * (12 / E10) : D16 * E7;
        E16 = frais_de_dossier;
        console.log("frais_de_dossier", frais_de_dossier);
        console.log("Calcul de la prime de risque");
        var prime_de_risque = E10 < 12 ? D17 * E7 * (12 / E10) : D17 * E7;
        E17 = prime_de_risque;
        console.log("prime_de_risque", prime_de_risque);
        console.log("Calcul des autres revenus sur credit");
        var autres_revenus_sur_credit = E10 < 12 ? D18 * E7 * (12 / E10) : D18 * E7;
        E18 = autres_revenus_sur_credit;
        console.log("autres_revenus_sur_credit", autres_revenus_sur_credit);
        console.log("Calcul du nombre d'écheances");
        var nombre_echeance = E10 / E11;
        console.log("nombre_echeance", nombre_echeance);
        // 
        console.log("Calcul du nombre de paiements planifiés");
        var nombre_paiements_planifies = periode_pret * paiements_par_an;
        console.log("nombre_paiements_planifies", nombre_paiements_planifies);

        // 
        var calcVPM = function calcVPM(montant, taux, nombre_echeance) {
          console.log("Calcul du VPM", montant, taux, nombre_echeance);
          var numerator = montant * taux * Math.pow(1 + taux, nombre_echeance);
          var denominator = Math.pow(1 + taux, nombre_echeance) - 1;
          var VPM = numerator / denominator;
          console.log("calcVPM", VPM);
          return VPM;
        };
        var VPM = function () {
          var montant = E7;
          var duree = nombre_echeance;
          var t = taux_interet;
          var R = 1 - Math.pow(1 + t, -duree);
          R = R <= 0 ? 1 : R; // Formula from chatGPT

          /*
              PMT is the periodic payment (what you're solving for).
              P is the principal amount (loan amount or initial investment).
              r is the periodic interest rate (expressed as a decimal).
              n is the number of periods (number of payments). 
                const P = montant;
              const r = t;
              const n = duree;
                const PMT = P * r * (1 + r)^n / ((1 + r)^n - 1)
              return this.formatRound(PMT);
          */
          var result = montant * t / R;
          return result;
        }();
        console.log("VPM", VPM);

        // 
        console.log("Calcul du taux d'interêt");
        var taux_interet = ((_this$formData$taux_i = (_this$formData18 = this.formData) === null || _this$formData18 === void 0 ? void 0 : _this$formData18.taux_interet_annuel) !== null && _this$formData$taux_i !== void 0 ? _this$formData$taux_i : 0) / 100;
        console.log("taux_interet", taux_interet);
        // 
        console.log("Calcul du paiement programmé");
        var paiement_programme = calcVPM(E7, taux_interet / paiements_par_an, nombre_paiements_planifies);
        console.log("paiement_programme", paiement_programme);
        // 
        console.log("Calcul du montant échéance");
        var montant_echeance = paiement_programme;
        console.log("montant_echeance", montant_echeance);
        // 
        console.log("Calcul de paiement programmé");
        var calcPaiementProgramme = function calcPaiementProgramme(montant, nombre_paiements_planifies) {
          return calcVPM(montant, taux_interet / paiements_par_an, nombre_paiements_planifies);
        };
        // 
        var calcPlanAmortissement = function calcPlanAmortissement(montant_du_pret) {
          var _plans$at2;
          var total_des_paiements_en_avance = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
          var paiementsSupp = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
          console.log("Calcul du plan amortissement ", montant_du_pret, total_des_paiements_en_avance, paiementsSupp);
          var plans = [];
          var periode_pret = E10;
          var nombre_paiements_planifies = periode_pret * paiements_par_an;
          var paiement_programme = calcPaiementProgramme(montant_du_pret, nombre_paiements_planifies);
          var amortissement = {
            montant_du_pret: montant_du_pret,
            paiementsSupp: paiementsSupp,
            periode_pret: periode_pret,
            paiements_par_an: paiements_par_an,
            nombre_paiements_planifies: nombre_paiements_planifies,
            paiement_programme: paiement_programme
          };
          console.log("computing amortissement", amortissement);
          for (var increment = 1; increment <= nombre_paiements_planifies; increment++) {
            var _plans$at;
            var paymentIndex = increment - 1;
            var previousPaymentIndex = paymentIndex - 1;
            var previousPlan = increment > 1 ? plans[previousPaymentIndex] : null;
            var numero_paiement = increment;
            // =SI([@[N° PAIEMENT]]<>"";FIN.MOIS(DateDébutPrêt;LIGNE([@[N° PAIEMENT]])-LIGNE(ÉchéancierPaiement[[#En-têtes];[N° PAIEMENT]])-2)+JOUR(DateDébutPrêt);"")
            var date_echeance = null;
            var solde_depart = montant_du_pret;
            if (increment > 1) solde_depart = (_plans$at = plans.at(paymentIndex - 1)) === null || _plans$at === void 0 ? void 0 : _plans$at.solde_final;
            var paiement_supplementaire = 0;
            if (paiement_programme + paiementsSupp < solde_depart) {
              paiement_supplementaire = paiementsSupp;
            } else if (solde_depart - paiement_programme > 0) {
              paiement_supplementaire = solde_depart - paiement_programme;
            } else {
              paiement_supplementaire = 0;
            }

            // =SI([@[N° PAIEMENT]]<>"";SI([@[PAIEMENT PROGRAMMÉ]]+[@[PAIEMENT SUPPLÉMENTAIRE]]<=[@[SOLDE DE DÉPART]];[@[PAIEMENT PROGRAMMÉ]]+[@[PAIEMENT SUPPLÉMENTAIRE]];[@[SOLDE DE DÉPART]]);"")
            var paiement_total = 0;
            var totalPayment = paiement_programme + paiement_supplementaire;
            if (totalPayment <= solde_depart) {
              paiement_total = totalPayment;
            } else {
              paiement_total = solde_depart;
            }

            // =SI([@[N° PAIEMENT]]<>"";[@[SOLDE DE DÉPART]]*(TauxIntérêt/PaiementsParAn);"")
            var interets = solde_depart * (taux_interet / paiements_par_an);

            // =SI([@[N° PAIEMENT]]<>"";[@[PAIEMENT TOTAL]]-[@INTÉRÊTS];"")
            var principal = paiement_total - interets;

            // =SI([@[N° PAIEMENT]]<>"";SI([@[PAIEMENT PROGRAMMÉ]]+[@[PAIEMENT SUPPLÉMENTAIRE]]<=[@[SOLDE DE DÉPART]];[@[SOLDE DE DÉPART]]-[@PRINCIPAL];0);"")
            var solde_final = null;
            var finalPayment = paiement_programme + paiement_supplementaire;

            // solde_final = finalPayment <= solde_depart ? solde_depart - principal : 0;

            if (finalPayment <= solde_depart) {
              solde_final = solde_depart - principal;
            } else {
              solde_final = 0;
            }

            // =SI([@[N° PAIEMENT]]<>"";SOMME(INDEX([INTÉRÊTS];1;1):[@INTÉRÊTS]);"")
            var interets_cumules = interets;
            if (increment > 1) interets_cumules += previousPlan === null || previousPlan === void 0 ? void 0 : previousPlan.interets_cumules;

            // const startDate = new Date(payment['DateDébutPrêt']);
            // const dueDate = new Date(startDate.getFullYear(), startDate.getMonth() + paymentIndex - 1, startDate.getDate());

            // date_echeance = dueDate.toDateString(); // Or format as needed

            //
            plans.push({
              numero_paiement: numero_paiement,
              date_echeance: date_echeance,
              solde_depart: solde_depart,
              paiement_programme: paiement_programme,
              paiement_supplementaire: paiement_supplementaire,
              paiement_total: paiement_total,
              principal: principal,
              interets: interets,
              solde_final: solde_final,
              interets_cumules: interets_cumules
            });
          }

          // const total_des_interets = reduce((acc, curr) => acc + curr?.total ?? 0 , 0)
          var total_des_interets = (_plans$at2 = plans.at(-1)) === null || _plans$at2 === void 0 ? void 0 : _plans$at2.interets_cumules;
          amortissement = _objectSpread(_objectSpread({}, amortissement), {}, {
            plans: plans,
            total_des_interets: total_des_interets
          });
          console.log("amortissement", amortissement);
          return amortissement;
        };
        console.log("Calcul du plan amortissement");
        var plan_amortissement = function () {
          console.log("Calcul du plan amortissement", "paiement_programme", paiement_programme);
          var plans = [];
          for (var increment = 1; increment <= nombre_echeance; increment++) {
            var _this$formData19, _this$formData$paieme, _this$formData20;
            var paymentIndex = increment - 1;
            var previousPaymentIndex = paymentIndex - 1;
            var previousPlan = increment > 1 ? plans[previousPaymentIndex] : null;
            var numero_paiement = increment;
            // =SI([@[N° PAIEMENT]]<>"";FIN.MOIS(DateDébutPrêt;LIGNE([@[N° PAIEMENT]])-LIGNE(ÉchéancierPaiement[[#En-têtes];[N° PAIEMENT]])-2)+JOUR(DateDébutPrêt);"")
            var date_echeance = null;
            var solde_depart = (_this$formData19 = _this.formData) === null || _this$formData19 === void 0 ? void 0 : _this$formData19.montant_credit;
            if (increment > 1) {
              var _plans$at3;
              solde_depart = (_plans$at3 = plans.at(paymentIndex - 1)) === null || _plans$at3 === void 0 ? void 0 : _plans$at3.solde_final;
            }

            // =SI([@[N° PAIEMENT]]<>"";SI([@[PAIEMENT PROGRAMMÉ]]+PaiementsSupp<[@[SOLDE DE DÉPART]];PaiementsSupp;SI([@[SOLDE DE DÉPART]]-[@[PAIEMENT PROGRAMMÉ]]>0;[@[SOLDE DE DÉPART]]-[@[PAIEMENT PROGRAMMÉ]];0));"")
            var paiementsSupp = (_this$formData$paieme = (_this$formData20 = _this.formData) === null || _this$formData20 === void 0 ? void 0 : _this$formData20.paiementsSupp) !== null && _this$formData$paieme !== void 0 ? _this$formData$paieme : 0;
            var paiement_supplementaire = 0;
            if (paiement_programme + paiementsSupp < solde_depart) {
              paiement_supplementaire = paiementsSupp;
            } else if (solde_depart - paiement_programme > 0) {
              paiement_supplementaire = solde_depart - paiement_programme;
            } else {
              paiement_supplementaire = 0;
            }

            // =SI([@[N° PAIEMENT]]<>"";SI([@[PAIEMENT PROGRAMMÉ]]+[@[PAIEMENT SUPPLÉMENTAIRE]]<=[@[SOLDE DE DÉPART]];[@[PAIEMENT PROGRAMMÉ]]+[@[PAIEMENT SUPPLÉMENTAIRE]];[@[SOLDE DE DÉPART]]);"")
            var paiement_total = 0;
            var totalPayment = paiement_programme + paiement_supplementaire;
            if (totalPayment <= solde_depart) {
              paiement_total = totalPayment;
            } else {
              paiement_total = solde_depart;
            }

            // =SI([@[N° PAIEMENT]]<>"";[@[SOLDE DE DÉPART]]*(TauxIntérêt/PaiementsParAn);"")
            var interets = null;
            interets = solde_depart * (taux_interet / nombre_echeance);

            // =SI([@[N° PAIEMENT]]<>"";[@[PAIEMENT TOTAL]]-[@INTÉRÊTS];"")
            var principal = null;
            principal = paiement_total - interets;

            // =SI([@[N° PAIEMENT]]<>"";SI([@[PAIEMENT PROGRAMMÉ]]+[@[PAIEMENT SUPPLÉMENTAIRE]]<=[@[SOLDE DE DÉPART]];[@[SOLDE DE DÉPART]]-[@PRINCIPAL];0);"")
            var solde_final = null;
            var finalPayment = paiement_programme + paiement_supplementaire;
            if (finalPayment <= solde_depart) {
              solde_final = solde_depart - principal;
            } else {
              solde_final = 0;
            }

            // =SI([@[N° PAIEMENT]]<>"";SOMME(INDEX([INTÉRÊTS];1;1):[@INTÉRÊTS]);"")
            var interets_cumules = interets;

            // let sum = 0;
            // for (let i = 0; i <= paymentIndex; i++) {
            //     sum += plans[i]?.interets;
            // }
            // interets_cumules = sum;

            if (increment > 1) {
              interets_cumules += previousPlan === null || previousPlan === void 0 ? void 0 : previousPlan.interets_cumules;
            }

            // const startDate = new Date(payment['DateDébutPrêt']);
            // const dueDate = new Date(startDate.getFullYear(), startDate.getMonth() + paymentIndex - 1, startDate.getDate());

            // date_echeance = dueDate.toDateString(); // Or format as needed

            //
            plans.push({
              numero_paiement: numero_paiement,
              date_echeance: date_echeance,
              solde_depart: solde_depart,
              paiement_programme: paiement_programme,
              paiement_supplementaire: paiement_supplementaire,
              paiement_total: paiement_total,
              principal: principal,
              interets: interets,
              solde_final: solde_final,
              interets_cumules: interets_cumules
            });
          }
          console.log("plans amortissement", plans);
          return plans;
        }();
        console.log("plan_amortissement", plan_amortissement);
        // 
        console.log("Calcul du plan amortissement 2");
        var amortissement2 = function () {
          var montant_du_pret = montant_echeance;
          var amortissement_ = calcPlanAmortissement(montant_du_pret);
          console.log("plan_amortissement2", amortissement_);
          return amortissement_;
        }();
        console.log("amortissement2", amortissement2);
        console.log("Plan amortissement 2");
        var plan_amortissement2 = amortissement2 === null || amortissement2 === void 0 ? void 0 : amortissement2.plans;
        console.log("plan_amortissement2", plan_amortissement2);

        // 
        console.log("Calcul des revenus generes par les cashflow");
        var revenus_generes_par_les_cashflow = function () {
          var revenus = [];
          for (var increment = 1; increment <= nombre_echeance; increment++) {
            var _frais_de_dossier = montant_echeance * (D16 / 100);
            I7 = amortissement2 === null || amortissement2 === void 0 ? void 0 : amortissement2.total_des_interets;
            E13 = nombre_echeance;
            var K6 = increment;
            var _interet_annuel = I7 / E10 * ((E13 - K6) / 12);
            var _autres_revenus_sur_credit = montant_echeance * (D18 / 100);
            var _prime_de_risque = montant_echeance * (D17 / 100);
            var total = _frais_de_dossier + _interet_annuel + _autres_revenus_sur_credit + _prime_de_risque;
            revenus.push({
              frais_de_dossier: _frais_de_dossier,
              interet_annuel: _interet_annuel,
              prime_de_risque: _prime_de_risque,
              autres_revenus_sur_credit: _autres_revenus_sur_credit,
              total: total
            });
          }
          console.log("::revenus_generes_par_les_cashflow", revenus);
          return revenus;
        }();
        //
        console.log("Calcul du total revenus generes par les cashflow");
        var total_revenus_generes_par_les_cashflow = function () {
          var echeance_to_omit_index = 0;
          // somme des totaux des revenus_generes_par_les_cashflow
          return revenus_generes_par_les_cashflow.reduce(function (sum, item) {
            var _item$total;
            return sum += echeance_to_omit_index == (revenus_generes_par_les_cashflow === null || revenus_generes_par_les_cashflow === void 0 ? void 0 : revenus_generes_par_les_cashflow.indexOf(item)) ? 0 : (_item$total = item === null || item === void 0 ? void 0 : item.total) !== null && _item$total !== void 0 ? _item$total : 0;
          }, 0);
        }();
        // 
        Q206 = total_revenus_generes_par_les_cashflow;
        console.log("Calcul des revenus annuels sur cashflow");
        var revenus_annuels_sur_cashflow = E10 < 12 ? Q206 : Q206 / (E10 / 12);

        // 
        console.log("Calcul du revenu cashflow");
        var revenu_cashflow = E10 < 12 ? Q206 : Q206 / (E10 / 12);

        // 
        console.log("Calcul du total des interets");
        var total_des_interets = paiement_programme * nombre_echeance - ((_this$formData21 = this.formData) === null || _this$formData21 === void 0 ? void 0 : _this$formData21.montant_credit);
        E23 = total_des_interets;
        // 
        console.log("Calcul de l'interêt annuel");
        var interet_annuel = E10 < 12 ? E23 * (12 / E10) : E23 / (E10 / 12);
        E15 = interet_annuel;
        // 
        console.log("Calcul du total revenus sur la duree du credit");
        Q206 = total_revenus_generes_par_les_cashflow;
        var total_revenus_sur_la_duree_du_credit = E23 + E16 + E17 + E18 + Q206;
        console.log("total_revenus_sur_la_duree_du_credit", total_revenus_sur_la_duree_du_credit);
        // 

        E19 = revenus_annuels_sur_cashflow;
        console.log("Calcul du total revenus annuel");
        var total_revenus_annuel = E10 <= 12 ? E15 + E16 + E17 + E18 + E19 : E15 + (E16 + E17 + E18) / (E10 / 12) + E19;
        E20 = total_revenus_annuel;
        console.log("total_revenus_annuel", total_revenus_annuel);
        // 
        console.log("Calcul de la rentabilite brute annuelle");
        var rentabilite_brute_annuelle = E20 / E7;
        console.log("rentabilite_brute_annuelle", rentabilite_brute_annuelle);
        // 
        console.log("Calcul du pourcentage rentabilite brute annuelle");
        var pourcentage_rentabilite_brute_annuelle = !!rentabilite_brute_annuelle ? rentabilite_brute_annuelle * 100 : 0;
        E24 = pourcentage_rentabilite_brute_annuelle;

        // 
        console.log("Calcul du taux de cout moyen des ressource");
        var calcTauxDeCoutMoyenDesRessources = function calcTauxDeCoutMoyenDesRessources(code_filiale) {
          if (!code_filiale) return null;
          // TODO store this static data in database
          var data = {
            CFN_BF: 5.06,
            CFB_CG: 4.77,
            CFN_CI: 4.84,
            CFN_GB: 5.54,
            CFN_GN: 7.36,
            CFN_ML: 5.07,
            CFN_SN: 5.3,
            CFN_TG: 4.88,
            FINL: 5.32
          };
          try {
            var _data$code_filiale;
            var result = (_data$code_filiale = data[code_filiale]) !== null && _data$code_filiale !== void 0 ? _data$code_filiale : null;
            result = result != null ? result / 100 : null;
            console.log("calcTauxDeCoutMoyenDesRessources", result);
            return result;
          } catch (error) {
            _this.$console.log("xx calcTauxDeCoutMoyenDesRessources", error);
            return null;
          }
        };
        // 
        console.log("Calcul du cout moyen des ressource");
        var cout_moyen_des_ressources = calcTauxDeCoutMoyenDesRessources(E1) * (E7 - E8) / E7;
        console.log("cout_moyen_des_ressources", cout_moyen_des_ressources);
        // 
        console.log("Calcul du pourcentage cout moyen des ressources");
        var pourcentage_cout_moyen_des_ressources = !!cout_moyen_des_ressources ? cout_moyen_des_ressources * 100 : 0;
        E25 = pourcentage_cout_moyen_des_ressources;
        console.log("pourcentage_cout_moyen_des_ressources", pourcentage_cout_moyen_des_ressources);
        // 
        console.log("Calcul du taux de cout du risque espéré ajusté par types de client");
        var calcTauxDeCoutDuRisqueEspereAjustParTypesClients = function calcTauxDeCoutDuRisqueEspereAjustParTypesClients(code_filiale, type_de_client) {
          if (!code_filiale || !type_de_client) return null;
          // 
          var data = {
            CFN_BF: {
              // "Commerçant et Entrepreneurs individuels" : 0.95,
              // "PME Formelles" : 2.04,
              // "Retails (Particuliers-Salariés-Retraités)" : 1.56,
              // "Mutuelles-Associations-ONG" : 0.00,
              // "Professions liberales" : 0.00,
              // "Total general" : 0.91,
              commercant_et_entrepreneurs_individuels: 0.95,
              pme_formelles: 2.04,
              retails_particuliers_salaries_retraites: 1.56,
              mutuelles_associations_ong: 0.0,
              professions_liberales: 0.0,
              total_general: 0.91
            },
            CFB_CG: {
              commercant_et_entrepreneurs_individuels: 2.08,
              pme_formelles: 2.07,
              retails_particuliers_salaries_retraites: 2.97,
              mutuelles_associations_ong: 0.9,
              professions_liberales: 0.9,
              total_general: 1.78
            },
            CFN_CI: {
              commercant_et_entrepreneurs_individuels: 2.99,
              pme_formelles: 2.7,
              retails_particuliers_salaries_retraites: 4.15,
              mutuelles_associations_ong: 1.9,
              professions_liberales: 1.9,
              total_general: 2.73
            },
            CFN_GB: {
              commercant_et_entrepreneurs_individuels: 1.81,
              pme_formelles: 1.33,
              retails_particuliers_salaries_retraites: 1.59,
              mutuelles_associations_ong: 2.7,
              professions_liberales: 0.9,
              total_general: 1.67
            },
            CFN_GN: {
              commercant_et_entrepreneurs_individuels: 2.13,
              pme_formelles: 2.3,
              retails_particuliers_salaries_retraites: 3.15,
              mutuelles_associations_ong: 1.0,
              professions_liberales: 1.0,
              total_general: 1.92
            },
            CFN_ML: {
              commercant_et_entrepreneurs_individuels: 1.61,
              pme_formelles: 1.69,
              retails_particuliers_salaries_retraites: 1.18,
              mutuelles_associations_ong: 2.37,
              professions_liberales: 0.77,
              total_general: 1.52
            },
            CFN_SN: {
              commercant_et_entrepreneurs_individuels: 2.94,
              pme_formelles: 3.18,
              retails_particuliers_salaries_retraites: 4.21,
              mutuelles_associations_ong: 2.2,
              professions_liberales: 0.9,
              total_general: 2.69
            },
            CFN_TG: {
              commercant_et_entrepreneurs_individuels: 1.35,
              pme_formelles: 1.7,
              retails_particuliers_salaries_retraites: 1.57,
              mutuelles_associations_ong: 0.9,
              professions_liberales: 0.9,
              total_general: 1.28
            },
            FINL: {
              commercant_et_entrepreneurs_individuels: 1.92,
              pme_formelles: 0.96,
              retails_particuliers_salaries_retraites: 0.91,
              mutuelles_associations_ong: 1.56,
              professions_liberales: 1.56,
              total_general: 1.38
            }
          };
          try {
            var _data$code_filiale2, _info$type_de_client;
            var info = (_data$code_filiale2 = data[code_filiale]) !== null && _data$code_filiale2 !== void 0 ? _data$code_filiale2 : null;
            var result = (_info$type_de_client = info[type_de_client]) !== null && _info$type_de_client !== void 0 ? _info$type_de_client : null;
            return result;
          } catch (error) {
            _this.$console.log("xx calcTauxDeCoutDuRisqueEspereAjustParTypesClients", error);
            return null;
          }
        };
        // 
        console.log("Calcul du taux de cout du risque espere");
        var taux_de_cout_du_risque_espere = calcTauxDeCoutDuRisqueEspereAjustParTypesClients(E1, E6);
        E26 = taux_de_cout_du_risque_espere;
        console.log("taux_de_cout_du_risque_espere", taux_de_cout_du_risque_espere);
        // 
        console.log("Calcul du pourcentage du taux de cout du risque espere");
        var pourcentage_taux_de_cout_du_risque_espere = (taux_de_cout_du_risque_espere !== null && taux_de_cout_du_risque_espere !== void 0 ? taux_de_cout_du_risque_espere : 0) * 100;
        // 
        console.log("Calcul de rentabilité nette annuelle");
        var rentabilite_nette_annuelle = E24 - E26 - E25;
        E27 = rentabilite_nette_annuelle;
        var pourcentage_rentabilite_nette_annuelle = rentabilite_nette_annuelle;
        console.log("rentabilite_nette_annuelle", rentabilite_nette_annuelle);
        console.log("Détermination du status de la rentabilité");
        var rentabilite_status = function () {
          if (E1 == null || E27 == null) return null;
          var result;
          // TODO refractor lists as key val array
          if (["CFN_CIV", "CFN_CI", "CFN_BF", "CFN_ML", "CFN_SN", "FINL", "CFN_TG"].includes(E1) && E27 < 0.1) {
            result = "NON RENTABLE";
          } else if (["CFN_GB", "CFN_CG", "CFN_GN"].includes(E1) && E27 < 0.15) {
            result = "NON RENTABLE";
          } else {
            result = "RENTABLE";
          }
          return result;
        }();
        console.log("Compilation des résultats");
        this.data = _objectSpread(_objectSpread({}, this.data), {}, {
          amortissement2: amortissement2,
          autres_revenus_sur_credit: autres_revenus_sur_credit,
          cout_moyen_des_ressources: cout_moyen_des_ressources,
          frais_de_dossier: frais_de_dossier,
          interet_annuel: interet_annuel.toFixed(),
          montant_echeance: montant_echeance.toFixed(),
          nombre_echeance: nombre_echeance,
          nombre_paiements_planifies: nombre_paiements_planifies,
          paiement_programme: paiement_programme,
          paiements_par_an: paiements_par_an,
          periode_pret: periode_pret,
          plan_amortissement: plan_amortissement,
          plan_amortissement2: plan_amortissement2,
          pourcentage_cout_moyen_des_ressources: pourcentage_cout_moyen_des_ressources.toFixed(2),
          pourcentage_rentabilite_brute_annuelle: pourcentage_rentabilite_brute_annuelle.toFixed(2),
          pourcentage_rentabilite_nette_annuelle: pourcentage_rentabilite_nette_annuelle.toFixed(2),
          pourcentage_taux_de_cout_du_risque_espere: pourcentage_taux_de_cout_du_risque_espere.toFixed(2),
          prime_de_risque: prime_de_risque,
          rentabilite_brute_annuelle: rentabilite_brute_annuelle,
          rentabilite_nette_annuelle: rentabilite_nette_annuelle,
          rentabilite_status: rentabilite_status,
          revenus_generes_par_les_cashflow: revenus_generes_par_les_cashflow,
          revenus_annuels_sur_cashflow: revenus_annuels_sur_cashflow.toFixed(),
          revenu_cashflow: revenu_cashflow,
          taux_de_cout_du_risque_espere: taux_de_cout_du_risque_espere,
          taux_interet: taux_interet,
          total_des_interets: total_des_interets,
          total_revenus_annuel: total_revenus_annuel.toFixed(),
          total_revenus_generes_par_les_cashflow: total_revenus_generes_par_les_cashflow.toFixed(2),
          total_revenus_sur_la_duree_du_credit: total_revenus_sur_la_duree_du_credit.toFixed(),
          VPM: VPM
        });
      } catch (error) {
        this.loadingMessage = "Erreur";
        console.log("xx error computeRentaCred", error);
      }
    },
    fetchDossierCredit: function fetchDossierCredit(cred_pub_key) {
      var _this2 = this;
      this.$axios.post(this.ebapisHost + "creditbuilder/api/v1/compile/", {
        user: this.authUser,
        cred_pub_key: cred_pub_key
      }).then(function (response) {
        var fetchedData = response.data;
        if (fetchedData["is_success"] === true) {
          _this2.dossier_credit = fetchedData["dossier_credit"];
          _this2.initData();
        }
      })["catch"](function (error) {
        console.log(error);
      });
    },
    loadUserData: function loadUserData() {
      var _this3 = this;
      // this.$Progress.start();
      //this.$axios.post('/api/user/dashboard', {})
      this.$axios.post("/api/user/dashboard2", {}).then(function (response) {
        _this3.authUser = response.data;
        _this3.fetchDossierCredit("202308-1119-05322023-08-11-dbd0bc63-184b-49ab-9bea-4e9e47392888");
      })["catch"](function (error) {
        console.log(error);
      });
    },
    initData: function initData() {
      var _this4 = this,
        _this$authUser,
        _this$dossier_credit$,
        _this$dossier_credit,
        _mode_payment_indexer,
        _depot_de_garantie,
        _montant_credit,
        _this$dossier_credit$2,
        _this$dossier_credit2,
        _ref3,
        _parsc$taux_modififie,
        _ref4,
        _pfdd$taux_modififie,
        _ref5,
        _ppdr$taux_modififie,
        _this$DATA_CONFIG$tau,
        _this$DATA_CONFIG;
      console.log("initData");
      this.types_de_client = [];
      this.raw_type_de_clients.forEach(function (name, id) {
        _this4.types_de_client.push({
          id: id,
          name: name,
          slug: _this4.slugify(name)
        });
      });
      var code_filiale = (_this$authUser = this.authUser) === null || _this$authUser === void 0 || (_this$authUser = _this$authUser.filiale) === null || _this$authUser === void 0 ? void 0 : _this$authUser.replace(/\s/g, "_");
      console.log("initData RentaCred", this.formData, "doss:", this.dossier_credit, "user:", this.authUser);
      // Fetch data from dossier credit

      var _ref = (_this$dossier_credit$ = (_this$dossier_credit = this.dossier_credit) === null || _this$dossier_credit === void 0 ? void 0 : _this$dossier_credit.cred_pub_tb_1) !== null && _this$dossier_credit$ !== void 0 ? _this$dossier_credit$ : {},
        depot_de_garantie = _ref.garantie,
        duree_mois = _ref.duree_credit,
        montant_credit = _ref.montant_credit,
        mode_paiement = _ref.mode_paiement,
        frais = _ref.frais;

      // 1,2,3,4,5,6,12
      var mode_payment_indexer = {
        'Mensuelle': 1,
        'Bi-mensuel': 2,
        'Trimestriel': 3,
        'Semestriel': 6,
        'Annuel': 12,
        'In fine': null
      };
      var mode_remboursement = (_mode_payment_indexer = mode_payment_indexer[mode_paiement]) !== null && _mode_payment_indexer !== void 0 ? _mode_payment_indexer : null;
      depot_de_garantie = parseInt((_depot_de_garantie = depot_de_garantie) === null || _depot_de_garantie === void 0 || (_depot_de_garantie = _depot_de_garantie.toString()) === null || _depot_de_garantie === void 0 ? void 0 : _depot_de_garantie.replace(/\s/gi, ''));
      montant_credit = parseInt((_montant_credit = montant_credit) === null || _montant_credit === void 0 || (_montant_credit = _montant_credit.toString()) === null || _montant_credit === void 0 ? void 0 : _montant_credit.replace(/\s/gi, ''));
      var _ref2 = (_this$dossier_credit$2 = (_this$dossier_credit2 = this.dossier_credit) === null || _this$dossier_credit2 === void 0 ? void 0 : _this$dossier_credit2.cred_pub_tb_00) !== null && _this$dossier_credit$2 !== void 0 ? _this$dossier_credit$2 : {},
        type_client = _ref2.type_de_clientele;
      // 
      var parsc = frais === null || frais === void 0 ? void 0 : frais.find(function (itm) {
        var _this4$DATA_CONFIG;
        return (itm === null || itm === void 0 ? void 0 : itm.libelle_taux) == ((_this4$DATA_CONFIG = _this4.DATA_CONFIG) === null || _this4$DATA_CONFIG === void 0 || (_this4$DATA_CONFIG = _this4$DATA_CONFIG.KEYS) === null || _this4$DATA_CONFIG === void 0 ? void 0 : _this4$DATA_CONFIG.pourcentage_autres_revenus_sur_credit);
      });
      var pourcentage_autres_revenus_sur_credit = (_ref3 = (_parsc$taux_modififie = parsc === null || parsc === void 0 ? void 0 : parsc.taux_modififie) !== null && _parsc$taux_modififie !== void 0 ? _parsc$taux_modififie : parsc === null || parsc === void 0 ? void 0 : parsc.taux_initial) !== null && _ref3 !== void 0 ? _ref3 : 0;
      // 
      var pfdd = frais === null || frais === void 0 ? void 0 : frais.find(function (itm) {
        var _this4$DATA_CONFIG2;
        return (itm === null || itm === void 0 ? void 0 : itm.libelle_taux) == ((_this4$DATA_CONFIG2 = _this4.DATA_CONFIG) === null || _this4$DATA_CONFIG2 === void 0 || (_this4$DATA_CONFIG2 = _this4$DATA_CONFIG2.KEYS) === null || _this4$DATA_CONFIG2 === void 0 ? void 0 : _this4$DATA_CONFIG2.pourcentage_frais_de_dossier);
      });
      var pourcentage_frais_de_dossier = (_ref4 = (_pfdd$taux_modififie = pfdd === null || pfdd === void 0 ? void 0 : pfdd.taux_modififie) !== null && _pfdd$taux_modififie !== void 0 ? _pfdd$taux_modififie : pfdd === null || pfdd === void 0 ? void 0 : pfdd.taux_initial) !== null && _ref4 !== void 0 ? _ref4 : 0;
      // 
      var ppdr = frais === null || frais === void 0 ? void 0 : frais.find(function (itm) {
        var _this4$DATA_CONFIG3;
        return (itm === null || itm === void 0 ? void 0 : itm.libelle_taux) == ((_this4$DATA_CONFIG3 = _this4.DATA_CONFIG) === null || _this4$DATA_CONFIG3 === void 0 || (_this4$DATA_CONFIG3 = _this4$DATA_CONFIG3.KEYS) === null || _this4$DATA_CONFIG3 === void 0 ? void 0 : _this4$DATA_CONFIG3.pourcentage_prime_de_risque);
      });
      var pourcentage_prime_de_risque = (_ref5 = (_ppdr$taux_modififie = ppdr === null || ppdr === void 0 ? void 0 : ppdr.taux_modififie) !== null && _ppdr$taux_modififie !== void 0 ? _ppdr$taux_modififie : ppdr === null || ppdr === void 0 ? void 0 : ppdr.taux_initial) !== null && _ref5 !== void 0 ? _ref5 : 0;
      var taux_interet_annuel = (_this$DATA_CONFIG$tau = (_this$DATA_CONFIG = this.DATA_CONFIG) === null || _this$DATA_CONFIG === void 0 ? void 0 : _this$DATA_CONFIG.taux_interet_annuel) !== null && _this$DATA_CONFIG$tau !== void 0 ? _this$DATA_CONFIG$tau : 0;
      this.formData = {
        code_filiale: code_filiale,
        depot_de_garantie: depot_de_garantie,
        duree_mois: duree_mois,
        mode_remboursement: mode_remboursement,
        montant_credit: montant_credit,
        pourcentage_autres_revenus_sur_credit: pourcentage_autres_revenus_sur_credit,
        pourcentage_frais_de_dossier: pourcentage_frais_de_dossier,
        pourcentage_prime_de_risque: pourcentage_prime_de_risque,
        taux_interet_annuel: taux_interet_annuel,
        type_de_client: type_de_client
      };
      console.log("initDATA", this.formData);
      this.computeRentaCred();
    },
    formatFixed: function formatFixed(val) {
      var point = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
      return val === null || val === void 0 ? void 0 : val.toFixed(point);
    },
    formatRound: function formatRound(val) {
      return Math.ceil(val);
    },
    slugify: function slugify(str) {
      return str.toLowerCase().trim().replace(/[^\w\s-]/g, '').replace(/[\s_-]+/g, '-').replace(/^-+|-+$/g, '');
    },
    test: function test() {
      this.formData = {
        code_filiale: "CFN_SN",
        depot_de_garantie: 18750000,
        duree_mois: 12,
        mode_remboursement: 1,
        montant_credit: 125000000,
        pourcentage_autres_revenus_sur_credit: 0.00,
        pourcentage_frais_de_dossier: 3.00,
        pourcentage_prime_de_risque: 1.00,
        taux_interet_annuel: 18.00,
        type_de_client: "PME Formelles"
      };
    }
  },
  watch: {
    formData: function formData(val) {
      console.log("oo formData", val);
      this.computeRentaCred();
    },
    loadingMessage: function loadingMessage(val) {
      console.log("loadingMessage", val);
      this.messageList.push(val);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/parts/RentaCred_.vue?vue&type=template&id=6a070b3a":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/parts/RentaCred_.vue?vue&type=template&id=6a070b3a ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm$data, _vm$data2, _vm$data3, _vm$data4, _vm$data5, _vm$data6, _vm$data7, _vm$data8, _vm$data9, _vm$data0, _vm$data1, _vm$data10, _vm$data11, _vm$data12, _vm$data13, _vm$data14, _vm$data$rentabilite_, _vm$data15, _vm$data16;
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "mx-3 mb-5 pb-5"
  }, [_vm.showCalcTables ? [_c("table", {
    staticClass: "table table-bordered table-responsive mb-2 bg-white"
  }, [_c("thead", [_c("tr", [_c("th", {
    staticClass: "text-center",
    attrs: {
      colspan: "10"
    }
  }, [_c("div", {
    staticClass: "d-flex gap-2 justify-content-between align-items-center"
  }, [_c("span"), _vm._v(" "), _c("span", [_vm._v("\n                                Plan d'amortissement\n                            ")]), _vm._v(" "), _c("span", {
    staticClass: "btn",
    on: {
      click: function click($event) {
        _vm.isPlanAmortissementVisible = !_vm.isPlanAmortissementVisible;
      }
    }
  }, [_vm._v("\n                                " + _vm._s(_vm.isPlanAmortissementVisible ? "Cacher" : "Afficher") + "\n                            ")])])])]), _vm._v(" "), _vm.isPlanAmortissementVisible ? _c("tr", [_c("th", [_vm._v("N°")]), _vm._v(" "), _c("th", [_vm._v("Date Echeance")]), _vm._v(" "), _c("th", [_vm._v("Solde de départ")]), _vm._v(" "), _c("th", [_vm._v("Paiement programmé")]), _vm._v(" "), _c("th", [_vm._v("Paiement supplémentaire")]), _vm._v(" "), _c("th", [_vm._v("Paiement Total")]), _vm._v(" "), _c("th", [_vm._v("Principal")]), _vm._v(" "), _c("th", [_vm._v("Intérêts")]), _vm._v(" "), _c("th", [_vm._v("Solde Final")]), _vm._v(" "), _c("th", [_vm._v("Interets cumulés")])]) : _vm._e()]), _vm._v(" "), _vm.isPlanAmortissementVisible ? _c("tbody", _vm._l((_vm$data = _vm.data) === null || _vm$data === void 0 ? void 0 : _vm$data.plan_amortissement, function (plan, i) {
    var _plan$date_echeance, _plan$solde_depart, _plan$paiement_progra, _plan$paiement_supple, _plan$paiement_total, _plan$principal, _plan$interets, _plan$solde_final, _plan$interets_cumule;
    return _c("tr", {
      key: i
    }, [_c("td", [_vm._v(_vm._s(plan === null || plan === void 0 ? void 0 : plan.numero_paiement))]), _vm._v(" "), _c("td", [_vm._v("\n                        " + _vm._s(plan === null || plan === void 0 || (_plan$date_echeance = plan.date_echeance) === null || _plan$date_echeance === void 0 ? void 0 : _plan$date_echeance.toFixed(2)) + "\n                    ")]), _vm._v(" "), _c("td", [_vm._v("\n                        " + _vm._s(plan === null || plan === void 0 || (_plan$solde_depart = plan.solde_depart) === null || _plan$solde_depart === void 0 ? void 0 : _plan$solde_depart.toFixed(2)) + "\n                    ")]), _vm._v(" "), _c("td", [_vm._v("\n                        " + _vm._s(plan === null || plan === void 0 || (_plan$paiement_progra = plan.paiement_programme) === null || _plan$paiement_progra === void 0 ? void 0 : _plan$paiement_progra.toFixed(2)) + "\n                    ")]), _vm._v(" "), _c("td", [_vm._v("\n                        " + _vm._s(plan === null || plan === void 0 || (_plan$paiement_supple = plan.paiement_supplementaire) === null || _plan$paiement_supple === void 0 ? void 0 : _plan$paiement_supple.toFixed(2)) + "\n                    ")]), _vm._v(" "), _c("td", [_vm._v("\n                        " + _vm._s(plan === null || plan === void 0 || (_plan$paiement_total = plan.paiement_total) === null || _plan$paiement_total === void 0 ? void 0 : _plan$paiement_total.toFixed(2)) + "\n                    ")]), _vm._v(" "), _c("td", [_vm._v("\n                        " + _vm._s(plan === null || plan === void 0 || (_plan$principal = plan.principal) === null || _plan$principal === void 0 ? void 0 : _plan$principal.toFixed(2)) + "\n                    ")]), _vm._v(" "), _c("td", [_vm._v("\n                        " + _vm._s(plan === null || plan === void 0 || (_plan$interets = plan.interets) === null || _plan$interets === void 0 ? void 0 : _plan$interets.toFixed(2)) + "\n                    ")]), _vm._v(" "), _c("td", [_vm._v("\n                        " + _vm._s(plan === null || plan === void 0 || (_plan$solde_final = plan.solde_final) === null || _plan$solde_final === void 0 ? void 0 : _plan$solde_final.toFixed(2)) + "\n                    ")]), _vm._v(" "), _c("td", [_vm._v("\n                        " + _vm._s(plan === null || plan === void 0 || (_plan$interets_cumule = plan.interets_cumules) === null || _plan$interets_cumule === void 0 ? void 0 : _plan$interets_cumule.toFixed(2)) + "\n                    ")])]);
  }), 0) : _vm._e()]), _vm._v(" "), _c("table", {
    staticClass: "table table-bordered table-responsive mb-2 bg-white"
  }, [_c("thead", [_c("tr", [_c("th", {
    staticClass: "text-center",
    attrs: {
      colspan: "10"
    }
  }, [_c("div", {
    staticClass: "d-flex gap-2 justify-content-between align-items-center"
  }, [_c("span"), _vm._v(" "), _c("span", [_vm._v("\n\n                            Plan d'amortissement 2\n                            ")]), _vm._v(" "), _c("span", {
    staticClass: "btn",
    on: {
      click: function click($event) {
        _vm.isPlanAmortissement2Visible = !_vm.isPlanAmortissement2Visible;
      }
    }
  }, [_vm._v("\n                                " + _vm._s(_vm.isPlanAmortissement2Visible ? "Cacher" : "Afficher") + "\n                            ")])])])]), _vm._v(" "), _vm.isPlanAmortissement2Visible ? _c("tr", [_c("th", [_vm._v("N°")]), _vm._v(" "), _c("th", [_vm._v("Date Echeance")]), _vm._v(" "), _c("th", [_vm._v("Solde de départ")]), _vm._v(" "), _c("th", [_vm._v("Paiement programmé")]), _vm._v(" "), _c("th", [_vm._v("Paiement supplémentaire")]), _vm._v(" "), _c("th", [_vm._v("Paiement Total")]), _vm._v(" "), _c("th", [_vm._v("Principal")]), _vm._v(" "), _c("th", [_vm._v("Intérêts")]), _vm._v(" "), _c("th", [_vm._v("Solde Final")]), _vm._v(" "), _c("th", [_vm._v("Interets cumulés")])]) : _vm._e()]), _vm._v(" "), _vm.isPlanAmortissement2Visible ? _c("tbody", _vm._l((_vm$data2 = _vm.data) === null || _vm$data2 === void 0 ? void 0 : _vm$data2.plan_amortissement2, function (plan, i) {
    var _plan$date_echeance2, _plan$solde_depart2, _plan$paiement_progra2, _plan$paiement_supple2, _plan$paiement_total2, _plan$principal2, _plan$interets2, _plan$solde_final2, _plan$interets_cumule2;
    return _c("tr", {
      key: i
    }, [_c("td", [_vm._v(_vm._s(plan === null || plan === void 0 ? void 0 : plan.numero_paiement))]), _vm._v(" "), _c("td", [_vm._v("\n                        " + _vm._s(plan === null || plan === void 0 || (_plan$date_echeance2 = plan.date_echeance) === null || _plan$date_echeance2 === void 0 ? void 0 : _plan$date_echeance2.toFixed(2)) + "\n                    ")]), _vm._v(" "), _c("td", [_vm._v("\n                        " + _vm._s(plan === null || plan === void 0 || (_plan$solde_depart2 = plan.solde_depart) === null || _plan$solde_depart2 === void 0 ? void 0 : _plan$solde_depart2.toFixed(2)) + "\n                    ")]), _vm._v(" "), _c("td", [_vm._v("\n                        " + _vm._s(plan === null || plan === void 0 || (_plan$paiement_progra2 = plan.paiement_programme) === null || _plan$paiement_progra2 === void 0 ? void 0 : _plan$paiement_progra2.toFixed(2)) + "\n                    ")]), _vm._v(" "), _c("td", [_vm._v("\n                        " + _vm._s(plan === null || plan === void 0 || (_plan$paiement_supple2 = plan.paiement_supplementaire) === null || _plan$paiement_supple2 === void 0 ? void 0 : _plan$paiement_supple2.toFixed(2)) + "\n                    ")]), _vm._v(" "), _c("td", [_vm._v("\n                        " + _vm._s(plan === null || plan === void 0 || (_plan$paiement_total2 = plan.paiement_total) === null || _plan$paiement_total2 === void 0 ? void 0 : _plan$paiement_total2.toFixed(2)) + "\n                    ")]), _vm._v(" "), _c("td", [_vm._v("\n                        " + _vm._s(plan === null || plan === void 0 || (_plan$principal2 = plan.principal) === null || _plan$principal2 === void 0 ? void 0 : _plan$principal2.toFixed(2)) + "\n                    ")]), _vm._v(" "), _c("td", [_vm._v("\n                        " + _vm._s(plan === null || plan === void 0 || (_plan$interets2 = plan.interets) === null || _plan$interets2 === void 0 ? void 0 : _plan$interets2.toFixed(2)) + "\n                    ")]), _vm._v(" "), _c("td", [_vm._v("\n                        " + _vm._s(plan === null || plan === void 0 || (_plan$solde_final2 = plan.solde_final) === null || _plan$solde_final2 === void 0 ? void 0 : _plan$solde_final2.toFixed(2)) + "\n                    ")]), _vm._v(" "), _c("td", [_vm._v("\n                        " + _vm._s(plan === null || plan === void 0 || (_plan$interets_cumule2 = plan.interets_cumules) === null || _plan$interets_cumule2 === void 0 ? void 0 : _plan$interets_cumule2.toFixed(2)) + "\n                    ")])]);
  }), 0) : _vm._e()]), _vm._v(" "), _c("table", {
    staticClass: "table table-bordered table-responsive mb-2 bg-white"
  }, [_c("thead", [_c("tr", [_c("th", {
    staticClass: "text-center",
    attrs: {
      colspan: "6"
    }
  }, [_vm._v("\n                        Revenus générés par les cash flow (replacé dans les mêmes conditions)\n                    ")]), _vm._v(" "), _c("th", {
    staticClass: "text-center cursor-pointer",
    on: {
      click: function click($event) {
        _vm.isCashflowTableVisible = !_vm.isCashflowTableVisible;
      }
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.isCashflowTableVisible ? "Cacher" : "Afficher") + "\n                    ")])]), _vm._v(" "), _vm._m(0)]), _vm._v(" "), _vm.isCashflowTableVisible ? _c("tbody", _vm._l((_vm$data3 = _vm.data) === null || _vm$data3 === void 0 ? void 0 : _vm$data3.revenus_generes_par_les_cashflow, function (revenu, i) {
    var _revenu$frais_de_doss, _revenu$interet_annue, _revenu$prime_de_risq, _revenu$autres_revenu, _revenu$total;
    return _c("tr", {
      key: i
    }, [_c("td", [_vm._v("Echeance " + _vm._s(i + 1))]), _vm._v(" "), _c("td", [_vm._v("\n                        " + _vm._s(_vm._f("formatNumber")(revenu === null || revenu === void 0 || (_revenu$frais_de_doss = revenu.frais_de_dossier) === null || _revenu$frais_de_doss === void 0 ? void 0 : _revenu$frais_de_doss.toFixed(2))) + "\n                    ")]), _vm._v(" "), _c("td", [_vm._v("\n                        " + _vm._s(_vm._f("formatNumber")(revenu === null || revenu === void 0 || (_revenu$interet_annue = revenu.interet_annuel) === null || _revenu$interet_annue === void 0 ? void 0 : _revenu$interet_annue.toFixed(2))) + "\n                    ")]), _vm._v(" "), _c("td", [_vm._v("\n                        " + _vm._s(_vm._f("formatNumber")(revenu === null || revenu === void 0 || (_revenu$prime_de_risq = revenu.prime_de_risque) === null || _revenu$prime_de_risq === void 0 ? void 0 : _revenu$prime_de_risq.toFixed(2))) + "\n                    ")]), _vm._v(" "), _c("td", [_vm._v("\n                        " + _vm._s(_vm._f("formatNumber")(revenu === null || revenu === void 0 || (_revenu$autres_revenu = revenu.autres_revenus_sur_credit) === null || _revenu$autres_revenu === void 0 ? void 0 : _revenu$autres_revenu.toFixed(2))) + "\n                    ")]), _vm._v(" "), _c("td", [_vm._v("\n                        " + _vm._s(_vm._f("formatNumber")(revenu === null || revenu === void 0 || (_revenu$total = revenu.total) === null || _revenu$total === void 0 ? void 0 : _revenu$total.toFixed(2))) + "\n                    ")])]);
  }), 0) : _vm._e(), _vm._v(" "), _c("tfoot", [_c("tr", [_c("td", {
    attrs: {
      colspan: "5"
    }
  }), _vm._v(" "), _c("td", [_vm._v("\n                        " + _vm._s(_vm._f("formatNumber")((_vm$data4 = _vm.data) === null || _vm$data4 === void 0 ? void 0 : _vm$data4.total_revenus_generes_par_les_cashflow)) + "\n                        \n                    ")])])])])] : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col"
  }, [_vm._v("\n            " + _vm._s(_vm.debug_params_info) + "\n        ")])]), _vm._v(" "), _c("table", {
    staticClass: "table table-bordered table-responsive mb-2 bg-white"
  }, [_c("thead", {
    staticClass: "bg-ed-primary"
  }, [_c("tr", {
    staticClass: "bg-grey"
  }, [_c("th", {
    staticStyle: {
      "text-align": "center"
    },
    attrs: {
      scope: "row",
      colspan: "6"
    }
  }, [_c("div", {
    staticClass: "d-flex justify-content-between align-items-center"
  }, [_c("button", {
    staticClass: "btn fw-normal invisible"
  }, [_vm._v("\n                            " + _vm._s(_vm.showCalcTables ? "Cacher" : "Afficher") + " tableaux de calculs\n                        ")]), _vm._v(" "), _c("span", [_vm._v("\n                            RentaCred\n                        ")]), _vm._v(" "), _c("button", {
    staticClass: "btn fw-normal",
    on: {
      click: function click($event) {
        _vm.showCalcTables = !_vm.showCalcTables;
      }
    }
  }, [_vm._v("\n                            " + _vm._s(_vm.showCalcTables ? "Cacher" : "Afficher") + " tableaux de calculs\n                        ")])])])]), _vm._v(" "), _c("tr", [_vm._m(1), _vm._v(" "), _c("td", {
    staticClass: "bg-light",
    attrs: {
      colspan: "2"
    }
  }, [_c("div", {
    staticClass: "d-flex justify-content-end"
  }, [_c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formData.code_filiale,
      expression: "formData.code_filiale"
    }],
    staticClass: "form-control text-right w-auto",
    attrs: {
      name: "code_filiale",
      id: "code_filiale"
    },
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.formData, "code_filiale", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      disabled: "",
      selected: "",
      value: "null"
    }
  }, [_vm._v("--Selectionnez la filiale--")]), _vm._v(" "), _vm._l(_vm.filiales, function (code_filiale) {
    return _c("option", {
      key: code_filiale,
      domProps: {
        value: code_filiale
      }
    }, [_vm._v("\n                                " + _vm._s(code_filiale) + "\n                            ")]);
  })], 2)])])]), _vm._v(" "), _vm._m(2)]), _vm._v(" "), _c("tbody", [_c("tr", [_vm._m(3), _vm._v(" "), _c("td", {
    staticClass: "bg-light",
    attrs: {
      colspan: "2"
    }
  }, [_c("div", {
    staticClass: "d-flex justify-content-end"
  }, [_c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formData.type_de_client,
      expression: "formData.type_de_client"
    }],
    staticClass: "form-control text-right w-auto",
    attrs: {
      name: "type_de_client",
      id: "type_de_client"
    },
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.formData, "type_de_client", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      disabled: "",
      selected: "",
      value: "null"
    }
  }, [_vm._v("--Selectionnez le Type de client--")]), _vm._v(" "), _vm._l(_vm.types_de_client, function (type_client, i) {
    return _c("option", {
      key: i,
      domProps: {
        value: type_client.slug
      }
    }, [_vm._v("\n                                " + _vm._s(type_client.name) + "\n                            ")]);
  })], 2)])])]), _vm._v(" "), _c("tr", [_vm._m(4), _vm._v(" "), _c("td", {
    staticClass: "bg-light",
    attrs: {
      colspan: "2"
    }
  }, [_c("div", {
    staticClass: "d-flex justify-content-end"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formData.montant_credit,
      expression: "formData.montant_credit"
    }],
    staticClass: "form-control text-right w-auto h-100",
    attrs: {
      id: "montant_credit",
      type: "number",
      min: "0",
      placeholder: "Entrez le montant du crédit"
    },
    domProps: {
      value: _vm.formData.montant_credit
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formData, "montant_credit", $event.target.value);
      }
    }
  })])])]), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "ps-5",
    attrs: {
      colspan: "4"
    }
  }, [_vm._v("Dépot de garantie")]), _vm._v(" "), _c("td", {
    staticClass: "bg-light",
    attrs: {
      colspan: "2"
    }
  }, [_c("div", {
    staticClass: "d-flex justify-content-end"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formData.depot_de_garantie,
      expression: "formData.depot_de_garantie"
    }],
    staticClass: "form-control text-right pe-3 w-auto h-100",
    attrs: {
      type: "number",
      min: "0",
      placeholder: "Entrez le dépot de garantie"
    },
    domProps: {
      value: _vm.formData.depot_de_garantie
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formData, "depot_de_garantie", $event.target.value);
      }
    }
  })])])]), _vm._v(" "), _c("tr", [_vm._m(5), _vm._v(" "), _c("td", {
    staticClass: "bg-light",
    attrs: {
      colspan: "2"
    }
  }, [_c("div", {
    staticClass: "d-flex justify-content-end"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formData.taux_interet_annuel,
      expression: "formData.taux_interet_annuel"
    }],
    staticClass: "form-control text-right pe-3 w-auto h-100",
    attrs: {
      id: "taux_interet_annuel",
      type: "number",
      min: "0",
      placeholder: "Entrez le taux d'intérêt annuel"
    },
    domProps: {
      value: _vm.formData.taux_interet_annuel
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formData, "taux_interet_annuel", $event.target.value);
      }
    }
  })])])]), _vm._v(" "), _c("tr", [_vm._m(6), _vm._v(" "), _c("td", {
    staticClass: "bg-light",
    attrs: {
      colspan: "2"
    }
  }, [_c("div", {
    staticClass: "d-flex justify-content-end"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formData.duree_mois,
      expression: "formData.duree_mois"
    }],
    staticClass: "form-control text-right pe-3 w-auto h-100",
    attrs: {
      id: "duree_mois",
      type: "number",
      min: "1",
      placeholder: "Entrez la durée"
    },
    domProps: {
      value: _vm.formData.duree_mois
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formData, "duree_mois", $event.target.value);
      }
    }
  })])])]), _vm._v(" "), _c("tr", [_vm._m(7), _vm._v(" "), _c("td", {
    staticClass: "bg-light",
    attrs: {
      colspan: "2"
    }
  }, [_c("div", {
    staticClass: "d-flex justify-content-end"
  }, [_c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formData.mode_remboursement,
      expression: "formData.mode_remboursement"
    }],
    staticClass: "form-control text-right pe-3 w-auto h-100",
    attrs: {
      name: "mode_remboursement",
      id: "mode_remboursement"
    },
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.formData, "mode_remboursement", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      disabled: "",
      selected: "",
      value: "null"
    }
  }, [_vm._v("--Selectionnez le mode de remboursement--")]), _vm._v(" "), _vm._l(_vm.modes_remboursement, function (mode, i) {
    return _c("option", {
      key: i,
      domProps: {
        value: mode
      }
    }, [_vm._v("\n                            " + _vm._s(mode) + "\n                        ")]);
  })], 2)])])]), _vm._v(" "), _c("tr", [_vm._m(8), _vm._v(" "), _c("th", {
    staticClass: "text-right",
    attrs: {
      colspan: "2"
    }
  }, [_vm._v("\n                    " + _vm._s(_vm._f("formatNumber")((_vm$data5 = _vm.data) === null || _vm$data5 === void 0 ? void 0 : _vm$data5.montant_echeance)) + "\n                ")])]), _vm._v(" "), _c("tr", [_vm._m(9), _vm._v(" "), _c("th", {
    staticClass: "text-right",
    attrs: {
      colspan: "2"
    }
  }, [_vm._v("\n                    " + _vm._s(_vm._f("formatNumber")((_vm$data6 = _vm.data) === null || _vm$data6 === void 0 ? void 0 : _vm$data6.nombre_echeance)) + "\n                ")])])]), _vm._v(" "), _vm._m(10), _vm._v(" "), _c("tbody", [_c("tr", [_c("td", {
    staticClass: "ps-5",
    attrs: {
      colspan: "4"
    }
  }, [_vm._v("Intéret annuel")]), _vm._v(" "), _c("th", {
    staticClass: "text-right",
    attrs: {
      colspan: "2"
    }
  }, [_vm._v("\n                    " + _vm._s(_vm._f("formatNumber")((_vm$data7 = _vm.data) === null || _vm$data7 === void 0 ? void 0 : _vm$data7.interet_annuel)) + "\n                ")])]), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "ps-5",
    attrs: {
      colspan: "4"
    }
  }, [_vm._v("Frais de dossier / Commissions")]), _vm._v(" "), _c("td", {
    staticClass: "bg-light"
  }, [_c("div", {
    staticClass: "d-flex justify-content-end"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formData.pourcentage_frais_de_dossier,
      expression: "formData.pourcentage_frais_de_dossier"
    }],
    staticClass: "form-control text-right pe-3 w-auto h-100",
    attrs: {
      type: "number",
      min: "1",
      placeholder: "Frais de dossier"
    },
    domProps: {
      value: _vm.formData.pourcentage_frais_de_dossier
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formData, "pourcentage_frais_de_dossier", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c("td", {
    staticClass: "text-right"
  }, [_vm._v("\n                    " + _vm._s(_vm._f("formatNumber")((_vm$data8 = _vm.data) === null || _vm$data8 === void 0 ? void 0 : _vm$data8.frais_de_dossier)) + "\n                ")])]), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "ps-5",
    attrs: {
      colspan: "4"
    }
  }, [_vm._v("Prime de risque / Assurance")]), _vm._v(" "), _c("td", {
    staticClass: "bg-light"
  }, [_c("div", {
    staticClass: "d-flex justify-content-end"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formData.pourcentage_prime_de_risque,
      expression: "formData.pourcentage_prime_de_risque"
    }],
    staticClass: "form-control text-right w-auto h-100",
    attrs: {
      type: "number",
      min: "1",
      placeholder: "Prime de risque"
    },
    domProps: {
      value: _vm.formData.pourcentage_prime_de_risque
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formData, "pourcentage_prime_de_risque", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c("td", {
    staticClass: "text-right"
  }, [_vm._v("\n                    " + _vm._s(_vm._f("formatNumber")((_vm$data9 = _vm.data) === null || _vm$data9 === void 0 ? void 0 : _vm$data9.prime_de_risque)) + "\n                ")])]), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "ps-5",
    attrs: {
      colspan: "4"
    }
  }, [_vm._v("Autres revenus sur crédit")]), _vm._v(" "), _c("td", {
    staticClass: "bg-light"
  }, [_c("div", {
    staticClass: "d-flex justify-content-end"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formData.pourcentage_autres_revenus_sur_credit,
      expression: "formData.pourcentage_autres_revenus_sur_credit"
    }],
    staticClass: "form-control text-right w-auto h-100",
    attrs: {
      type: "number",
      min: "1",
      placeholder: "Autres revenus sur credit"
    },
    domProps: {
      value: _vm.formData.pourcentage_autres_revenus_sur_credit
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formData, "pourcentage_autres_revenus_sur_credit", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c("td", {
    staticClass: "text-right"
  }, [_vm._v("\n                    " + _vm._s(_vm._f("formatNumber")((_vm$data0 = _vm.data) === null || _vm$data0 === void 0 ? void 0 : _vm$data0.autres_revenus_sur_credit)) + "\n                ")])]), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "ps-5",
    attrs: {
      colspan: "4"
    }
  }, [_vm._v("Revenus annuel sur cashflow")]), _vm._v(" "), _c("td", {
    staticClass: "text-right",
    attrs: {
      colspan: "2"
    }
  }, [_vm._v("\n                    " + _vm._s(_vm._f("formatNumber")((_vm$data1 = _vm.data) === null || _vm$data1 === void 0 ? void 0 : _vm$data1.revenus_annuels_sur_cashflow)) + "\n                ")])]), _vm._v(" "), _c("tr", [_c("th", {
    staticClass: "ps-5",
    attrs: {
      colspan: "4"
    }
  }, [_vm._v("Total revenus annuel")]), _vm._v(" "), _c("th", {
    staticClass: "text-right",
    attrs: {
      colspan: "2"
    }
  }, [_vm._v("\n                    " + _vm._s(_vm._f("formatNumber")((_vm$data10 = _vm.data) === null || _vm$data10 === void 0 ? void 0 : _vm$data10.total_revenus_annuel)) + "\n                ")])]), _vm._v(" "), _c("tr", [_c("th", {
    staticClass: "ps-5",
    attrs: {
      colspan: "4"
    }
  }, [_vm._v("Total revenus sur la durée du credit")]), _vm._v(" "), _c("th", {
    staticClass: "text-right",
    attrs: {
      colspan: "2"
    }
  }, [_vm._v("\n                    " + _vm._s(_vm._f("formatNumber")((_vm$data11 = _vm.data) === null || _vm$data11 === void 0 ? void 0 : _vm$data11.total_revenus_sur_la_duree_du_credit)) + "\n                ")])]), _vm._v(" "), _vm._m(11)]), _vm._v(" "), _c("tfoot", [_c("tr", {
    staticClass: "bg-danger text-white"
  }, [_c("th", {
    staticClass: "ps-5",
    attrs: {
      colspan: "4"
    }
  }, [_vm._v("Rentabilité brute annuelle")]), _vm._v(" "), _c("td", {
    staticClass: "text-right",
    attrs: {
      colspan: "2"
    }
  }, [_vm._v("\n                    " + _vm._s(_vm._f("formatNumber")((_vm$data12 = _vm.data) === null || _vm$data12 === void 0 ? void 0 : _vm$data12.pourcentage_rentabilite_brute_annuelle)) + "\n                ")])]), _vm._v(" "), _c("tr", {
    staticClass: "bg-light"
  }, [_c("th", {
    staticClass: "ps-5",
    attrs: {
      colspan: "4"
    }
  }, [_vm._v("Coût moyen des ressources")]), _vm._v(" "), _c("td", {
    staticClass: "text-right",
    attrs: {
      colspan: "2"
    }
  }, [_vm._v("\n                    " + _vm._s(_vm._f("formatNumber")((_vm$data13 = _vm.data) === null || _vm$data13 === void 0 ? void 0 : _vm$data13.pourcentage_cout_moyen_des_ressources)) + "\n                ")])]), _vm._v(" "), _c("tr", {
    staticClass: "bg-light"
  }, [_c("th", {
    staticClass: "ps-5",
    attrs: {
      colspan: "4"
    }
  }, [_vm._v("Taux de Coût du risque espéré")]), _vm._v(" "), _c("td", {
    staticClass: "text-right",
    attrs: {
      colspan: "2"
    }
  }, [_vm._v("\n                    " + _vm._s(_vm._f("formatNumber")((_vm$data14 = _vm.data) === null || _vm$data14 === void 0 ? void 0 : _vm$data14.taux_de_cout_du_risque_espere)) + "\n                ")])]), _vm._v(" "), _c("tr", {
    staticClass: "bg-danger text-white"
  }, [_c("th", {
    staticClass: "ps-5",
    attrs: {
      colspan: "4"
    }
  }, [_vm._v("Rentabilité nette annuelle")]), _vm._v(" "), _c("td", {
    staticClass: "text-center"
  }, [_vm._v("\n                    " + _vm._s((_vm$data$rentabilite_ = (_vm$data15 = _vm.data) === null || _vm$data15 === void 0 ? void 0 : _vm$data15.rentabilite_status) !== null && _vm$data$rentabilite_ !== void 0 ? _vm$data$rentabilite_ : _vm.DEFAULT_NULL_INDICATOR) + "\n                ")]), _vm._v(" "), _c("td", {
    staticClass: "text-right"
  }, [_vm._v("\n                    " + _vm._s(_vm._f("formatNumber")((_vm$data16 = _vm.data) === null || _vm$data16 === void 0 ? void 0 : _vm$data16.pourcentage_rentabilite_nette_annuelle)) + "\n                ")])])])]), _vm._v(" "), _c("div", {
    staticClass: "row text-left"
  }, [_c("div", {
    staticClass: "col"
  }, [_vm._v("\n            " + _vm._s(_vm.loadingMessage) + "\n        ")]), _vm._v(" "), _c("div", {
    staticClass: "col"
  }, [_vm._v("\n            " + _vm._s(_vm.messageList) + "\n        ")])])], 2);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("tr", [_c("th"), _vm._v(" "), _c("th", [_vm._v("Frais de dossier / Commissions")]), _vm._v(" "), _c("th", [_vm._v("Intérêt annuel")]), _vm._v(" "), _c("th", [_vm._v("Prime de risque")]), _vm._v(" "), _c("th", [_vm._v("Autres revenus sur crédit")]), _vm._v(" "), _c("th", [_vm._v("Total")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {
    staticClass: "ps-5",
    attrs: {
      colspan: "4"
    }
  }, [_c("label", {
    attrs: {
      "for": "code_filiale"
    }
  }, [_vm._v("Filiale")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("tr", [_c("th", {
    attrs: {
      colspan: "6"
    }
  }, [_vm._v("Caracteristique du crédit")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {
    staticClass: "ps-5",
    attrs: {
      colspan: "4"
    }
  }, [_c("label", {
    attrs: {
      "for": "type_de_client"
    }
  }, [_vm._v("Type de client")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {
    staticClass: "ps-5",
    attrs: {
      colspan: "4"
    }
  }, [_c("label", {
    attrs: {
      "for": "montant_credit"
    }
  }, [_vm._v(" Montant du crédit ")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {
    staticClass: "ps-5",
    attrs: {
      colspan: "4"
    }
  }, [_c("label", {
    attrs: {
      "for": "taux_interet_annuel"
    }
  }, [_vm._v("\n                        Taux d'intérêt annuel\n                    ")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {
    staticClass: "ps-5",
    attrs: {
      colspan: "4"
    }
  }, [_c("label", {
    attrs: {
      "for": "duree_mois"
    }
  }, [_vm._v("\n                        Durée (MOIS)\n                    ")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {
    staticClass: "ps-5",
    attrs: {
      colspan: "4"
    }
  }, [_c("label", {
    attrs: {
      "for": "mode_remboursement"
    }
  }, [_vm._v("\n                    Mode remboursement (M/T/S/A)\n                ")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {
    staticClass: "ps-5",
    attrs: {
      colspan: "4"
    }
  }, [_c("span", {
    staticClass: "ps-5"
  }, [_vm._v(" Montant échéance ")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {
    staticClass: "ps-5",
    attrs: {
      colspan: "4"
    }
  }, [_c("span", {
    staticClass: "ps-5"
  }, [_vm._v(" Nombre échéances ")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("th", {
    attrs: {
      colspan: "6"
    }
  }, [_vm._v("Revenus sur crédit")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("tr", [_c("td"), _vm._v(" "), _c("td"), _vm._v(" "), _c("td"), _vm._v(" "), _c("td"), _vm._v(" "), _c("td"), _vm._v(" "), _c("td")]);
}];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/components/parts/RentaCred_.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/parts/RentaCred_.vue ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _RentaCred_vue_vue_type_template_id_6a070b3a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RentaCred_.vue?vue&type=template&id=6a070b3a */ "./resources/js/components/parts/RentaCred_.vue?vue&type=template&id=6a070b3a");
/* harmony import */ var _RentaCred_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RentaCred_.vue?vue&type=script&lang=js */ "./resources/js/components/parts/RentaCred_.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _RentaCred_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _RentaCred_vue_vue_type_template_id_6a070b3a__WEBPACK_IMPORTED_MODULE_0__.render,
  _RentaCred_vue_vue_type_template_id_6a070b3a__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/parts/RentaCred_.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/parts/RentaCred_.vue?vue&type=script&lang=js":
/*!******************************************************************************!*\
  !*** ./resources/js/components/parts/RentaCred_.vue?vue&type=script&lang=js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RentaCred_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RentaCred_.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/parts/RentaCred_.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RentaCred_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/parts/RentaCred_.vue?vue&type=template&id=6a070b3a":
/*!************************************************************************************!*\
  !*** ./resources/js/components/parts/RentaCred_.vue?vue&type=template&id=6a070b3a ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RentaCred_vue_vue_type_template_id_6a070b3a__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RentaCred_vue_vue_type_template_id_6a070b3a__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RentaCred_vue_vue_type_template_id_6a070b3a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RentaCred_.vue?vue&type=template&id=6a070b3a */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/parts/RentaCred_.vue?vue&type=template&id=6a070b3a");


/***/ })

}]);