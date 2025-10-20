"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_parts_RentaCredData_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/parts/RentaCredData.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/parts/RentaCredData.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************************/
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
  name: "RentaCred",
  props: {
    // authUser: Object,
    // dossier_credit: Object,
  },
  data: function data() {
    return {
      //
      authUser: null,
      calc: {
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
      DEFAULT_NULL_INDICATOR: "--",
      ebapisHost: _services_ebapis_service__WEBPACK_IMPORTED_MODULE_0__["default"].host,
      dossier_credit: null,
      filiales: ["CFN_BF", "CFB_CG", "CFN_CI", "CFN_GB", "CFN_GN", "CFN_ML", "CFN_SN", "CFN_TG", "FINL"],
      formData: {
        code_filiale: null,
        depot_de_garantie: null,
        duree_mois: 0,
        mode_remboursement: null,
        montant_credit: null,
        pourcentage_autres_revenus_sur_credit: 0.0,
        pourcentage_frais_de_dossier: 3.0,
        pourcentage_prime_de_risque: 1.0,
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
      types_de_client: [],
      raw_type_de_clients: ["Commerçant et Entrepreneurs individuels", "PME Formelles", "Retails (Particuliers-Salariés-Retraités)", "Mutuelles-Associations-ONG", "Professions liberales"]
    };
  },
  created: function created() {},
  mounted: function mounted() {
    this.$console.log("**RentaCred**");
    this.fetchDossierCredit("202310-1614-45022023-10-16-6f6bbbad-f15c-4a27-aa59-3bcd02bffbad");
    this.initData();
  },
  computed: {
    amortissement2: function amortissement2() {
      var montant_du_pret = this.montant_echeance;
      var amortissement = this.calcPlanAmortissement(montant_du_pret);
      console.log("plan_amortissement2", amortissement);
      return amortissement;
    },
    autres_revenus_sur_credit: function autres_revenus_sur_credit() {
      var _this$formData, _this$formData2, _this$formData3, _this$formatRound;
      // =SI(E10<12;D18*E7*(12/E10);D18*E7)
      // Assuming you have values for the referenced cells
      var E7 = (_this$formData = this.formData) === null || _this$formData === void 0 ? void 0 : _this$formData.montant_credit;
      var E10 = (_this$formData2 = this.formData) === null || _this$formData2 === void 0 ? void 0 : _this$formData2.duree_mois;
      var D18 = ((_this$formData3 = this.formData) === null || _this$formData3 === void 0 ? void 0 : _this$formData3.pourcentage_autres_revenus_sur_credit) / 100;

      // if(E7 == null || E10 == null || D18 == null) return null;

      var result;
      if (E10 < 12) {
        result = D18 * E7 * (12 / E10);
      } else {
        result = D18 * E7;
      }
      return (_this$formatRound = this.formatRound(result)) !== null && _this$formatRound !== void 0 ? _this$formatRound : null;
    },
    cout_moyen_des_ressources: function cout_moyen_des_ressources() {
      var _this$formData$code_f, _this$formData4, _this$formData$montan, _this$formData5, _this$formData$depot_, _this$formData6;
      // =RECHERCHEV(E1;'Données Historiques'!F5:G13;2;0)*(E7-E8)/E7
      var E1 = (_this$formData$code_f = (_this$formData4 = this.formData) === null || _this$formData4 === void 0 ? void 0 : _this$formData4.code_filiale) !== null && _this$formData$code_f !== void 0 ? _this$formData$code_f : null;
      var E7 = (_this$formData$montan = (_this$formData5 = this.formData) === null || _this$formData5 === void 0 ? void 0 : _this$formData5.montant_credit) !== null && _this$formData$montan !== void 0 ? _this$formData$montan : 0;
      var E8 = (_this$formData$depot_ = (_this$formData6 = this.formData) === null || _this$formData6 === void 0 ? void 0 : _this$formData6.depot_de_garantie) !== null && _this$formData$depot_ !== void 0 ? _this$formData$depot_ : 0;
      // if(E1 == null || E7 == null || E8 == null) return null;

      var result;
      // result = this.calcTauxDeCoutDuRisqueEspereAjuste(E1) * (E7 - E8) / E7

      result = this.calcTauxDeCoutMoyenDesRessources(E1) * (E7 - E8) / E7;
      console.log("cout_moyen_des_ressources", result);
      // return this.formatRound(result) ?? null;
      return result !== null && result !== void 0 ? result : null;
    },
    debug_params_info: function debug_params_info() {
      var _this$formData7, _this$formData8, _this$formData9, _this$formData0, _this$formData1, _this$formData10, _this$formData11, _this$formData12, _this$formData13, _this$formData14;
      var params = [["code_filiale", (_this$formData7 = this.formData) === null || _this$formData7 === void 0 ? void 0 : _this$formData7.code_filiale], ["depot_de_garantie", (_this$formData8 = this.formData) === null || _this$formData8 === void 0 ? void 0 : _this$formData8.depot_de_garantie], ["duree_mois", (_this$formData9 = this.formData) === null || _this$formData9 === void 0 ? void 0 : _this$formData9.duree_mois], ["mode_remboursement", (_this$formData0 = this.formData) === null || _this$formData0 === void 0 ? void 0 : _this$formData0.mode_remboursement], ["montant_credit", (_this$formData1 = this.formData) === null || _this$formData1 === void 0 ? void 0 : _this$formData1.montant_credit], ["pourcentage_autres_revenus_sur_credit", (_this$formData10 = this.formData) === null || _this$formData10 === void 0 ? void 0 : _this$formData10.pourcentage_autres_revenus_sur_credit], ["pourcentage_frais_de_dossier", (_this$formData11 = this.formData) === null || _this$formData11 === void 0 ? void 0 : _this$formData11.pourcentage_frais_de_dossier], ["pourcentage_prime_de_risque", (_this$formData12 = this.formData) === null || _this$formData12 === void 0 ? void 0 : _this$formData12.pourcentage_prime_de_risque], ["taux_interet_annuel", (_this$formData13 = this.formData) === null || _this$formData13 === void 0 ? void 0 : _this$formData13.taux_interet_annuel], ["type_de_client", (_this$formData14 = this.formData) === null || _this$formData14 === void 0 ? void 0 : _this$formData14.type_de_client],
      //
      ["periode_pret", this.periode_pret], ["paiements_par_an", this.paiements_par_an], ["paiement_programme", this.paiement_programme], ["nombre_paiements_planifies", this.nombre_paiements_planifies], ["paiementsSupp", this.paiementsSupp], ["total_des_interets", this.total_des_interets], ["rentabilite_brute_annuelle", this.rentabilite_brute_annuelle], ["rentabilite_nette_annuelle", this.rentabilite_nette_annuelle]];
      console.log("params info", params);
      return params;
    },
    frais_de_dossier: function frais_de_dossier() {
      var _this$formData$montan2, _this$formData15, _this$formData$duree_, _this$formData16, _this$formData$pource, _this$formData17, _this$formatRound2;
      // =SI(E10<12;D16*E7*(12/E10);D16*E7)
      var E7 = (_this$formData$montan2 = (_this$formData15 = this.formData) === null || _this$formData15 === void 0 ? void 0 : _this$formData15.montant_credit) !== null && _this$formData$montan2 !== void 0 ? _this$formData$montan2 : 0;
      var E10 = (_this$formData$duree_ = (_this$formData16 = this.formData) === null || _this$formData16 === void 0 ? void 0 : _this$formData16.duree_mois) !== null && _this$formData$duree_ !== void 0 ? _this$formData$duree_ : 1;
      var D16 = ((_this$formData$pource = (_this$formData17 = this.formData) === null || _this$formData17 === void 0 ? void 0 : _this$formData17.pourcentage_frais_de_dossier) !== null && _this$formData$pource !== void 0 ? _this$formData$pource : 0) / 100;
      // if(E7 == null || E10 == null || D16 == null) return null;

      var result;
      if (E10 < 12) {
        result = D16 * E7 * (12 / E10);
      } else {
        result = D16 * E7;
      }
      return (_this$formatRound2 = this.formatRound(result)) !== null && _this$formatRound2 !== void 0 ? _this$formatRound2 : null;
    },
    interet_annuel: function interet_annuel() {
      var _this$formData$duree_2, _this$formData18, _this$total_des_inter, _this$formatRound3;
      // =SI(E10<12;(E23*(12/E10));(E23/(E10/12)))
      var E10 = (_this$formData$duree_2 = (_this$formData18 = this.formData) === null || _this$formData18 === void 0 ? void 0 : _this$formData18.duree_mois) !== null && _this$formData$duree_2 !== void 0 ? _this$formData$duree_2 : 1;
      var E23 = (_this$total_des_inter = this.total_des_interets) !== null && _this$total_des_inter !== void 0 ? _this$total_des_inter : 0;
      // if(E10 == null || E23 == null) return null;

      var result;
      if (E10 < 12) {
        result = E23 * (12 / E10);
      } else {
        result = E23 / (E10 / 12);
      }
      return (_this$formatRound3 = this.formatRound(result)) !== null && _this$formatRound3 !== void 0 ? _this$formatRound3 : null;
    },
    montant_echeance: function montant_echeance() {
      // =+PaiementProgrammé
      return this.paiement_programme;
    },
    nombre_echeance: function nombre_echeance() {
      var _this$formData$duree_3, _this$formData19, _this$formData$mode_r, _this$formData20, _this$formatRound4;
      // =E10/E11
      var E10 = (_this$formData$duree_3 = (_this$formData19 = this.formData) === null || _this$formData19 === void 0 ? void 0 : _this$formData19.duree_mois) !== null && _this$formData$duree_3 !== void 0 ? _this$formData$duree_3 : 0;
      var E11 = (_this$formData$mode_r = (_this$formData20 = this.formData) === null || _this$formData20 === void 0 ? void 0 : _this$formData20.mode_remboursement) !== null && _this$formData$mode_r !== void 0 ? _this$formData$mode_r : 1;
      // if(E10 == null || E11 == null) return null;

      var result;
      result = E10 / E11;
      return (_this$formatRound4 = this.formatRound(result)) !== null && _this$formatRound4 !== void 0 ? _this$formatRound4 : null;
    },
    nombre_paiements_planifies: function nombre_paiements_planifies() {
      // =SI(PrêtOK;PériodePrêt*PaiementsParAn;"")
      return this.periode_pret * this.paiements_par_an;
    },
    paiement_programme: function paiement_programme() {
      var _this$formData$montan3, _this$formData21;
      // =SI(PrêtOK;-VPM(TauxIntérêt/PaiementsParAn;NombreDePaiementsPlanifiés;MontantPrêt);"")
      // =SI(PrêtOK;-VPM(TauxIntérêt/PaiementsParAn;NombreDePaiementsPlanifiés;MontantPrêt);"")

      var montant = (_this$formData$montan3 = (_this$formData21 = this.formData) === null || _this$formData21 === void 0 ? void 0 : _this$formData21.montant_credit) !== null && _this$formData$montan3 !== void 0 ? _this$formData$montan3 : 0;
      var nombre_echeance = this.nombre_echeance;
      var taux = this.taux_interet;
      var result = this.calcVPM(montant, taux / this.paiements_par_an, this.nombre_paiements_planifies);
      return result;
    },
    paiements_par_an: function paiements_par_an() {
      var _this$formData22;
      // =12/RentaCréd!E11
      return 12 / ((_this$formData22 = this.formData) === null || _this$formData22 === void 0 ? void 0 : _this$formData22.mode_remboursement);
    },
    periode_pret: function periode_pret() {
      var _this$formData23;
      // =+RentaCréd!E10/12
      return ((_this$formData23 = this.formData) === null || _this$formData23 === void 0 ? void 0 : _this$formData23.duree_mois) / 12;
    },
    plan_amortissement: function plan_amortissement() {
      var plans = [];
      for (var increment = 1; increment <= this.nombre_echeance; increment++) {
        var _this$formData24, _this$formData$paieme, _this$formData25;
        var paymentIndex = increment - 1;
        var previousPaymentIndex = paymentIndex - 1;
        var previousPlan = increment > 1 ? plans[previousPaymentIndex] : null;
        var numero_paiement = increment;
        // =SI([@[N° PAIEMENT]]<>"";FIN.MOIS(DateDébutPrêt;LIGNE([@[N° PAIEMENT]])-LIGNE(ÉchéancierPaiement[[#En-têtes];[N° PAIEMENT]])-2)+JOUR(DateDébutPrêt);"")
        var date_echeance = null;
        var solde_depart = (_this$formData24 = this.formData) === null || _this$formData24 === void 0 ? void 0 : _this$formData24.montant_credit;
        if (increment > 1) {
          var _plans$at;
          solde_depart = (_plans$at = plans.at(paymentIndex - 1)) === null || _plans$at === void 0 ? void 0 : _plans$at.solde_final;
        }
        var paiement_programme = this.paiement_programme;
        // =SI([@[N° PAIEMENT]]<>"";SI([@[PAIEMENT PROGRAMMÉ]]+PaiementsSupp<[@[SOLDE DE DÉPART]];PaiementsSupp;SI([@[SOLDE DE DÉPART]]-[@[PAIEMENT PROGRAMMÉ]]>0;[@[SOLDE DE DÉPART]]-[@[PAIEMENT PROGRAMMÉ]];0));"")
        var paiementsSupp = (_this$formData$paieme = (_this$formData25 = this.formData) === null || _this$formData25 === void 0 ? void 0 : _this$formData25.paiementsSupp) !== null && _this$formData$paieme !== void 0 ? _this$formData$paieme : 0;
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
        interets = solde_depart * (this.taux_interet / this.nombre_echeance);

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
    },
    plan_amortissement2: function plan_amortissement2() {
      var _this$amortissement;
      return (_this$amortissement = this.amortissement2) === null || _this$amortissement === void 0 ? void 0 : _this$amortissement.plans;
    },
    pourcentage_cout_moyen_des_ressources: function pourcentage_cout_moyen_des_ressources() {
      if (this.cout_moyen_des_ressources) {
        return (this.cout_moyen_des_ressources * 100).toFixed(2);
      }
    },
    pourcentage_rentabilite_brute_annuelle: function pourcentage_rentabilite_brute_annuelle() {
      if (this.rentabilite_brute_annuelle) {
        return (this.rentabilite_brute_annuelle * 100).toFixed(2);
      }
    },
    pourcentage_taux_de_cout_du_risque_espere: function pourcentage_taux_de_cout_du_risque_espere() {
      if (this.taux_de_cout_du_risque_espere) {
        return (this.taux_de_cout_du_risque_espere * 100).toFixed(2);
      }
    },
    prime_de_risque: function prime_de_risque() {
      var _this$formData26, _this$formData27, _this$formData28, _this$formatRound5;
      // =SI(E10<12;D17*E7*(12/E10);D17*E7)
      var E7 = (_this$formData26 = this.formData) === null || _this$formData26 === void 0 ? void 0 : _this$formData26.montant_credit;
      var E10 = (_this$formData27 = this.formData) === null || _this$formData27 === void 0 ? void 0 : _this$formData27.duree_mois;
      var D17 = ((_this$formData28 = this.formData) === null || _this$formData28 === void 0 ? void 0 : _this$formData28.pourcentage_prime_de_risque) / 100;
      // if(E7 == null || E10 == null || D17 == null) return null;

      var result = null;
      if (E10 < 12) {
        result = D17 * E7 * (12 / E10);
      } else {
        result = D17 * E7;
      }
      return (_this$formatRound5 = this.formatRound(result)) !== null && _this$formatRound5 !== void 0 ? _this$formatRound5 : null;
    },
    rentabilite_brute_annuelle: function rentabilite_brute_annuelle() {
      var _this$formData29;
      // =(E20/(E7))
      var E7 = (_this$formData29 = this.formData) === null || _this$formData29 === void 0 ? void 0 : _this$formData29.montant_credit;
      var E20 = this.total_revenus_annuel;
      // if(E7 == null || E20 == null) return null;

      var result;
      result = E20 / E7;
      console.log("rentabilite_brute_annuelle", result);
      // return result ?? null;
      // return (result*100)?.toFixed(2) ?? null;
      return result !== null && result !== void 0 ? result : null;
    },
    rentabilite_nette_annuelle: function rentabilite_nette_annuelle() {
      // =E24-E26-E25
      // const E24 = this.rentabilite_brute_annuelle;
      // const E25 = this.cout_moyen_des_ressources;
      // const E26 = this.taux_de_cout_du_risque_espere;
      var E24 = this.pourcentage_rentabilite_brute_annuelle;
      var E25 = this.pourcentage_cout_moyen_des_ressources;
      var E26 = this.taux_de_cout_du_risque_espere;
      // if(E24 == null || E25 == null || E26 == null) return null;

      var result = null;
      result = E24 - E26 - E25;
      console.log("rentabilite_nette_annuelle", result);
      // return this.formatRound(result) ?? null;
      // return (result*100)?.toFixed(2) ?? null;
      return result !== null && result !== void 0 ? result : null;
    },
    rentabilite_status: function rentabilite_status() {
      var _this$formData30;
      // =SI(ET(OU(E1="CFN CIV";E1="CFN BF";E1="CFN ML";E1="CFN SN";E1="FINL";E1="CFN TG");E27<0,1);"NON RENTABLE";SI(ET(OU(E1="CFN GB";E1="CFN CG";E1="CFN GN");E27<0,15);"NON RENTABLE";"RENTABLE"))
      var E1 = (_this$formData30 = this.formData) === null || _this$formData30 === void 0 ? void 0 : _this$formData30.code_filiale;
      var E27 = this.rentabilite_nette_annuelle;
      if (E1 == null || E27 == null) return null;
      var result;
      if (["CFN_CIV", "CFN_CI", "CFN_BF", "CFN_ML", "CFN_SN", "FINL", "CFN_TG"].includes(E1) && E27 < 0.1) {
        result = "NON RENTABLE";
      } else if (["CFN_GB", "CFN_CG", "CFN_GN"].includes(E1) && E27 < 0.15) {
        result = "NON RENTABLE";
      } else {
        result = "RENTABLE";
      }
      return result;
    },
    revenus_generes_par_les_cashflow: function revenus_generes_par_les_cashflow() {
      //
      var revenus = [];
      for (var increment = 1; increment <= this.nombre_echeance; increment++) {
        var _this$formData31, _this$amortissement2, _this$formData32, _this$formData33, _this$formData34;
        // const E12 = this.montant_echeance;
        // const D16 = this.formData?.pourcentage_frais_de_dossier / 100;
        // // =+E12*D16
        // const frais_de_dossier = E12*D16
        var frais_de_dossier = this.montant_echeance * (((_this$formData31 = this.formData) === null || _this$formData31 === void 0 ? void 0 : _this$formData31.pourcentage_frais_de_dossier) / 100);
        // const interet_annuel = this.total_des_interets * ((this.nombre_echeance - increment)/12) - this.formData?.montant_credit

        var I7 = (_this$amortissement2 = this.amortissement2) === null || _this$amortissement2 === void 0 ? void 0 : _this$amortissement2.total_des_interets;
        var E10 = (_this$formData32 = this.formData) === null || _this$formData32 === void 0 ? void 0 : _this$formData32.duree_mois;
        var E13 = this.nombre_echeance;
        var K6 = increment;
        // =+('Échéancier Invest (2)'!$I$7/$E$10)*(($E$13-K6)/12)
        var interet_annuel = I7 / E10 * ((E13 - K6) / 12);
        var autres_revenus_sur_credit = this.montant_echeance * (((_this$formData33 = this.formData) === null || _this$formData33 === void 0 ? void 0 : _this$formData33.pourcentage_autres_revenus_sur_credit) / 100);
        var prime_de_risque = this.montant_echeance * (((_this$formData34 = this.formData) === null || _this$formData34 === void 0 ? void 0 : _this$formData34.pourcentage_prime_de_risque) / 100);
        var total = frais_de_dossier + interet_annuel + autres_revenus_sur_credit + prime_de_risque;
        revenus.push({
          frais_de_dossier: frais_de_dossier,
          interet_annuel: interet_annuel,
          prime_de_risque: prime_de_risque,
          autres_revenus_sur_credit: autres_revenus_sur_credit,
          total: total
        });
      }
      console.log("::revenus_generes_par_les_cashflow", revenus);
      return revenus;
    },
    revenus_annuels_sur_cashflow: function revenus_annuels_sur_cashflow() {
      var _this$formData35, _this$formatRound6;
      // =SI(E10<12;Q206;(Q206/(E10/12)))
      var E10 = (_this$formData35 = this.formData) === null || _this$formData35 === void 0 ? void 0 : _this$formData35.duree_mois;
      var Q206 = this.total_revenus_generes_par_les_cashflow;
      // if(E10 == null || Q206 == null) return null;

      var result;
      if (E10 < 12) {
        result = Q206;
      } else {
        result = Q206 / (E10 / 12);
      }
      return (_this$formatRound6 = this.formatRound(result)) !== null && _this$formatRound6 !== void 0 ? _this$formatRound6 : null;
    },
    revenu_cashflow: function revenu_cashflow() {
      var _this$formData36, _this$formatRound7;
      // SI(E10<12;Q206;(Q206/(E10/12)))
      var E10 = (_this$formData36 = this.formData) === null || _this$formData36 === void 0 ? void 0 : _this$formData36.duree_mois;
      var Q206 = this.total_revenus_generes_par_les_cashflow;
      // if(E10 == null || Q206 == null) return null;

      var result;
      if (E10 < 12) {
        result = Q206;
      } else {
        result = Q206 / (E10 / 12);
      }
      return (_this$formatRound7 = this.formatRound(result)) !== null && _this$formatRound7 !== void 0 ? _this$formatRound7 : null;
    },
    taux_de_cout_du_risque_espere: function taux_de_cout_du_risque_espere() {
      var _this$formData37, _this$formData38;
      // ?- already in percentage
      // =RECHERCHEV(E1&E6;'Données Historiques'!N:O;2;0)
      var E1 = (_this$formData37 = this.formData) === null || _this$formData37 === void 0 ? void 0 : _this$formData37.code_filiale;
      var E6 = (_this$formData38 = this.formData) === null || _this$formData38 === void 0 ? void 0 : _this$formData38.type_de_client;
      // if(E1 == null || E6 == null) return null;

      var result;
      result = this.calcTauxDeCoutDuRisqueEspereAjustParTypesClients(E1, E6);
      // return this.formatRound(result) ?? null;
      console.log("taux_de_cout_du_risque_espere", result);
      return result !== null && result !== void 0 ? result : null;
    },
    taux_interet: function taux_interet() {
      var _this$formData$taux_i, _this$formData39;
      return ((_this$formData$taux_i = (_this$formData39 = this.formData) === null || _this$formData39 === void 0 ? void 0 : _this$formData39.taux_interet_annuel) !== null && _this$formData$taux_i !== void 0 ? _this$formData$taux_i : 0) / 100;
    },
    total_des_interets: function total_des_interets() {
      var _this$formData40;
      // somme paiements programmé pour toutes les echeances - le montant du crédit
      // const cell_I7 = /* value from 'Échéancier Invest (2)'!$I$7 */;
      // =+('Échéancier Invest (2)'!$I$7/$E$10)*(($E$13-K6)/12)
      // const cell_I7 = this.total_des_interets;
      // const cell_E10 = this.formData?.duree_mois;
      // const cell_E13 = this.nombre_echeance;
      // const cell_K6 = iteration;

      // const result = (cell_I7 / cell_E10) * ((cell_E13 - cell_K6) / 12);
      // return result;
      //
      return this.paiement_programme * this.nombre_echeance - ((_this$formData40 = this.formData) === null || _this$formData40 === void 0 ? void 0 : _this$formData40.montant_credit);
    },
    total_revenus_annuel: function total_revenus_annuel() {
      var _this$formData41, _this$formatRound8;
      // =SI(E10<=12;(E15+E16+E17+E18+E19);E15+(E16+E17+E18)/(E10/12)+E19)
      var E10 = (_this$formData41 = this.formData) === null || _this$formData41 === void 0 ? void 0 : _this$formData41.duree_mois;
      var E15 = this.interet_annuel;
      var E16 = this.frais_de_dossier;
      var E17 = this.prime_de_risque;
      var E18 = this.autres_revenus_sur_credit;
      var E19 = this.revenus_annuels_sur_cashflow;
      // if(E10 == null || E15 == null || E16 == null || E17 == null || E18 == null || E19 == null) return null;

      var result;
      if (E10 <= 12) {
        result = E15 + E16 + E17 + E18 + E19;
      } else {
        result = E15 + (E16 + E17 + E18) / (E10 / 12) + E19;
      }
      console.log("total_revenus_annuel", result);
      return (_this$formatRound8 = this.formatRound(result)) !== null && _this$formatRound8 !== void 0 ? _this$formatRound8 : null;
    },
    total_revenus_generes_par_les_cashflow: function total_revenus_generes_par_les_cashflow() {
      var _this = this;
      var echeance_to_omit_index = 0;
      // somme des totaux des revenus_generes_par_les_cashflow
      return this.revenus_generes_par_les_cashflow.reduce(function (sum, item) {
        var _this$revenus_generes, _item$total;
        return sum += echeance_to_omit_index == ((_this$revenus_generes = _this.revenus_generes_par_les_cashflow) === null || _this$revenus_generes === void 0 ? void 0 : _this$revenus_generes.indexOf(item)) ? 0 : (_item$total = item === null || item === void 0 ? void 0 : item.total) !== null && _item$total !== void 0 ? _item$total : 0;
      }, 0);
    },
    total_revenus_sur_la_duree_du_credit: function total_revenus_sur_la_duree_du_credit() {
      var _this$formatRound9;
      // =(E23+E16+E17+E18+Q206)
      var E16 = this.frais_de_dossier;
      var E17 = this.prime_de_risque;
      var E18 = this.autres_revenus_sur_credit;
      var E23 = this.total_des_interets;
      var Q206 = this.total_revenus_generes_par_les_cashflow;
      // if(E16 == null || E17 == null || E18 == null || E23 == null || Q206 == null) return null;

      var result = E23 + E16 + E17 + E18 + Q206;
      return (_this$formatRound9 = this.formatRound(result)) !== null && _this$formatRound9 !== void 0 ? _this$formatRound9 : null;
    },
    VPM: function VPM() {
      var _this$formData42;
      var montant = (_this$formData42 = this.formData) === null || _this$formData42 === void 0 ? void 0 : _this$formData42.montant_credit;
      // const duree = this.formData?.duree_mois;
      var duree = this.nombre_echeance;
      var t = this.taux_interet;
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
      return this.formatRound(result);
    }
  },
  methods: {
    computeRentaCred: function computeRentaCred() {
      // Setup form Data;
      // TODO compute all these vars IN ORDER
      this.calc = {
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
      var VPM = this.calcVPM(montant, taux, nombre_echeance);
      // paiement_programme = SI(PrêtOK;-VPM(TauxIntérêt/PaiementsParAn;NombreDePaiementsPlanifiés;MontantPrêt);"")
      // nombre_echeance = +PaiementProgrammé
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
      })["catch"](function (error) {
        console.log(error);
      });
    },
    calcPaiementProgramme: function calcPaiementProgramme(montant, nombre_paiements_planifies) {
      var taux = this.taux_interet;
      var result = this.calcVPM(montant, taux / this.paiements_par_an, nombre_paiements_planifies);
      return result;
    },
    calcPlanAmortissement: function calcPlanAmortissement(montant_du_pret) {
      var _this$formData43, _plans$at3;
      var total_des_paiements_en_avance = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var paiementsSupp = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      var plans = [];
      var periode_pret = (_this$formData43 = this.formData) === null || _this$formData43 === void 0 ? void 0 : _this$formData43.duree_mois;
      var paiements_par_an = this.paiements_par_an;
      var nombre_paiements_planifies = periode_pret * paiements_par_an;
      var paiement_programme = this.calcPaiementProgramme(montant_du_pret, nombre_paiements_planifies);
      var amortissement = {
        montant_du_pret: montant_du_pret,
        paiementsSupp: paiementsSupp,
        periode_pret: periode_pret,
        paiements_par_an: paiements_par_an,
        nombre_paiements_planifies: nombre_paiements_planifies,
        paiement_programme: paiement_programme
      };
      for (var increment = 1; increment <= nombre_paiements_planifies; increment++) {
        var paymentIndex = increment - 1;
        var previousPaymentIndex = paymentIndex - 1;
        var previousPlan = increment > 1 ? plans[previousPaymentIndex] : null;
        var numero_paiement = increment;
        // =SI([@[N° PAIEMENT]]<>"";FIN.MOIS(DateDébutPrêt;LIGNE([@[N° PAIEMENT]])-LIGNE(ÉchéancierPaiement[[#En-têtes];[N° PAIEMENT]])-2)+JOUR(DateDébutPrêt);"")
        var date_echeance = null;
        var solde_depart = montant_du_pret;
        if (increment > 1) {
          var _plans$at2;
          solde_depart = (_plans$at2 = plans.at(paymentIndex - 1)) === null || _plans$at2 === void 0 ? void 0 : _plans$at2.solde_final;
        }
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
        var interets = solde_depart * (this.taux_interet / paiements_par_an);

        // =SI([@[N° PAIEMENT]]<>"";[@[PAIEMENT TOTAL]]-[@INTÉRÊTS];"")
        var principal = paiement_total - interets;

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

      // const total_des_interets = reduce((acc, curr) => acc + curr?.total ?? 0 , 0)
      var total_des_interets = (_plans$at3 = plans.at(-1)) === null || _plans$at3 === void 0 ? void 0 : _plans$at3.interets_cumules;
      amortissement = _objectSpread(_objectSpread({}, amortissement), {}, {
        plans: plans,
        total_des_interets: total_des_interets
      });
      console.log("amortissement", amortissement);
      return amortissement;
    },
    calcTauxDeCoutDuRisqueEspereAjuste: function calcTauxDeCoutDuRisqueEspereAjuste(code_filiale) {
      var _data$code_filiale;
      if (!code_filiale) return null;
      var data = {
        CFN_BF: 0.93,
        CFB_CG: 2.01,
        CFN_CI: 2.81,
        CFN_GB: 1.98,
        CFN_GN: 2.82,
        CFN_ML: 1.18,
        CFN_SN: 2.67,
        CFN_TG: 1.34,
        FINL: 1.54
      };
      var result = (_data$code_filiale = data[code_filiale]) !== null && _data$code_filiale !== void 0 ? _data$code_filiale : null;
      result = result != null ? result / 100 : null;
      console.log("calcTauxDeCoutDuRisqueEspereAjuste", result);
      return result;
    },
    calcTauxDeCoutDuRisqueEspereAjustParTypesClients: function calcTauxDeCoutDuRisqueEspereAjustParTypesClients(code_filiale, type_de_client) {
      var _data$code_filiale2, _info$type_de_client;
      if (!code_filiale || !type_de_client) return null;
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
      var info = (_data$code_filiale2 = data[code_filiale]) !== null && _data$code_filiale2 !== void 0 ? _data$code_filiale2 : null;
      var result = (_info$type_de_client = info[type_de_client]) !== null && _info$type_de_client !== void 0 ? _info$type_de_client : null;
      return result;
    },
    calcTauxDeCoutMoyenDesRessources: function calcTauxDeCoutMoyenDesRessources(code_filiale) {
      var _data$code_filiale3;
      if (!code_filiale) return null;
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
      var result = (_data$code_filiale3 = data[code_filiale]) !== null && _data$code_filiale3 !== void 0 ? _data$code_filiale3 : null;
      result = result != null ? result / 100 : null;
      console.log("calcTauxDeCoutMoyenDesRessources", result);
      return result;
    },
    // calcVPM(P, r, n) {
    //     const numerator = P * r * Math.pow(1 + r, n);
    //     const denominator = Math.pow(1 + r, n) - 1;
    //     const PMT = numerator / denominator;
    //     return PMT;
    // },
    calcVPM: function calcVPM(montant, taux, nombre_echeance) {
      //
      var numerator = montant * taux * Math.pow(1 + taux, nombre_echeance);
      var denominator = Math.pow(1 + taux, nombre_echeance) - 1;
      var VPM = numerator / denominator;
      //
      return VPM;
    },
    initData: function initData() {
      var _this4 = this,
        _this$authUser,
        _this$dossier_credit$,
        _this$dossier_credit,
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
        frais = _ref.frais;
      depot_de_garantie = parseInt((_depot_de_garantie = depot_de_garantie) === null || _depot_de_garantie === void 0 || (_depot_de_garantie = _depot_de_garantie.toString()) === null || _depot_de_garantie === void 0 ? void 0 : _depot_de_garantie.replace(/\s/gi, ""));
      montant_credit = parseInt((_montant_credit = montant_credit) === null || _montant_credit === void 0 || (_montant_credit = _montant_credit.toString()) === null || _montant_credit === void 0 ? void 0 : _montant_credit.replace(/\s/gi, ""));
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
        mode_remboursement: 3,
        montant_credit: montant_credit,
        pourcentage_autres_revenus_sur_credit: pourcentage_autres_revenus_sur_credit,
        pourcentage_frais_de_dossier: pourcentage_frais_de_dossier,
        pourcentage_prime_de_risque: pourcentage_prime_de_risque,
        taux_interet_annuel: taux_interet_annuel,
        type_de_client: type_de_client
      };
    },
    formatFixed: function formatFixed(val) {
      var point = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
      return val === null || val === void 0 ? void 0 : val.toFixed(point);
    },
    formatRound: function formatRound(val) {
      return Math.ceil(val);
    },
    // loadUserData() {
    //     Auth.loadUserData()
    //         .then((res) => {
    //             this.send2Backend(res, 0, 0);
    //         })
    //         .catch((err) => {
    //             this.loadWithError(err);
    //         });
    // },
    slugify: function slugify(str) {
      return str.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-").replace(/^-+|-+$/g, "");
    },
    test: function test() {
      this.formData = {
        code_filiale: "CFN_SN",
        depot_de_garantie: 18750000,
        duree_mois: 12,
        mode_remboursement: 3,
        montant_credit: 125000000,
        pourcentage_autres_revenus_sur_credit: 0.0,
        pourcentage_frais_de_dossier: 3.0,
        pourcentage_prime_de_risque: 1.0,
        taux_interet_annuel: 18.0,
        type_de_client: "PME Formelles"
      };
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/parts/RentaCredData.vue?vue&type=template&id=4ba99af6":
/*!************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/parts/RentaCredData.vue?vue&type=template&id=4ba99af6 ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm$total_revenus_gen, _vm$rentabilite_statu;
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
  }, [_c("span"), _vm._v(" "), _c("span", [_vm._v(" Plan d'amortissement ")]), _vm._v(" "), _c("span", {
    staticClass: "btn",
    on: {
      click: function click($event) {
        _vm.isPlanAmortissementVisible = !_vm.isPlanAmortissementVisible;
      }
    }
  }, [_vm._v("\n                " + _vm._s(_vm.isPlanAmortissementVisible ? "Cacher" : "Afficher") + "\n              ")])])])]), _vm._v(" "), _vm.isPlanAmortissementVisible ? _c("tr", [_c("th", [_vm._v("N°")]), _vm._v(" "), _c("th", [_vm._v("Date Echeance")]), _vm._v(" "), _c("th", [_vm._v("Solde de départ")]), _vm._v(" "), _c("th", [_vm._v("Paiement programmé")]), _vm._v(" "), _c("th", [_vm._v("Paiement supplémentaire")]), _vm._v(" "), _c("th", [_vm._v("Paiement Total")]), _vm._v(" "), _c("th", [_vm._v("Principal")]), _vm._v(" "), _c("th", [_vm._v("Intérêts")]), _vm._v(" "), _c("th", [_vm._v("Solde Final")]), _vm._v(" "), _c("th", [_vm._v("Interets cumulés")])]) : _vm._e()]), _vm._v(" "), _vm.isPlanAmortissementVisible ? _c("tbody", _vm._l(_vm.plan_amortissement, function (plan, i) {
    var _plan$date_echeance, _plan$solde_depart, _plan$paiement_progra, _plan$paiement_supple, _plan$paiement_total, _plan$principal, _plan$interets, _plan$solde_final, _plan$interets_cumule;
    return _c("tr", {
      key: i
    }, [_c("td", [_vm._v(_vm._s(plan === null || plan === void 0 ? void 0 : plan.numero_paiement))]), _vm._v(" "), _c("td", [_vm._v("\n            " + _vm._s(_vm._f("formatNumber")(plan === null || plan === void 0 || (_plan$date_echeance = plan.date_echeance) === null || _plan$date_echeance === void 0 ? void 0 : _plan$date_echeance.toFixed(2))) + "\n          ")]), _vm._v(" "), _c("td", [_vm._v("\n            " + _vm._s(_vm._f("formatNumber")(plan === null || plan === void 0 || (_plan$solde_depart = plan.solde_depart) === null || _plan$solde_depart === void 0 ? void 0 : _plan$solde_depart.toFixed(2))) + "\n          ")]), _vm._v(" "), _c("td", [_vm._v("\n            " + _vm._s(_vm._f("formatNumber")(plan === null || plan === void 0 || (_plan$paiement_progra = plan.paiement_programme) === null || _plan$paiement_progra === void 0 ? void 0 : _plan$paiement_progra.toFixed(2))) + "\n          ")]), _vm._v(" "), _c("td", [_vm._v("\n            " + _vm._s(_vm._f("formatNumber")(plan === null || plan === void 0 || (_plan$paiement_supple = plan.paiement_supplementaire) === null || _plan$paiement_supple === void 0 ? void 0 : _plan$paiement_supple.toFixed(2))) + "\n          ")]), _vm._v(" "), _c("td", [_vm._v("\n            " + _vm._s(_vm._f("formatNumber")(plan === null || plan === void 0 || (_plan$paiement_total = plan.paiement_total) === null || _plan$paiement_total === void 0 ? void 0 : _plan$paiement_total.toFixed(2))) + "\n          ")]), _vm._v(" "), _c("td", [_vm._v("\n            " + _vm._s(_vm._f("formatNumber")(plan === null || plan === void 0 || (_plan$principal = plan.principal) === null || _plan$principal === void 0 ? void 0 : _plan$principal.toFixed(2))) + "\n          ")]), _vm._v(" "), _c("td", [_vm._v("\n            " + _vm._s(_vm._f("formatNumber")(plan === null || plan === void 0 || (_plan$interets = plan.interets) === null || _plan$interets === void 0 ? void 0 : _plan$interets.toFixed(2))) + "\n          ")]), _vm._v(" "), _c("td", [_vm._v("\n            " + _vm._s(_vm._f("formatNumber")(plan === null || plan === void 0 || (_plan$solde_final = plan.solde_final) === null || _plan$solde_final === void 0 ? void 0 : _plan$solde_final.toFixed(2))) + "\n          ")]), _vm._v(" "), _c("td", [_vm._v("\n            " + _vm._s(_vm._f("formatNumber")(plan === null || plan === void 0 || (_plan$interets_cumule = plan.interets_cumules) === null || _plan$interets_cumule === void 0 ? void 0 : _plan$interets_cumule.toFixed(2))) + "\n          ")])]);
  }), 0) : _vm._e()]), _vm._v(" "), _c("table", {
    staticClass: "table table-bordered table-responsive mb-2 bg-white"
  }, [_c("thead", [_c("tr", [_c("th", {
    staticClass: "text-center",
    attrs: {
      colspan: "10"
    }
  }, [_c("div", {
    staticClass: "d-flex gap-2 justify-content-between align-items-center"
  }, [_c("span"), _vm._v(" "), _c("span", [_vm._v(" Plan d'amortissement 2 ")]), _vm._v(" "), _c("span", {
    staticClass: "btn",
    on: {
      click: function click($event) {
        _vm.isPlanAmortissement2Visible = !_vm.isPlanAmortissement2Visible;
      }
    }
  }, [_vm._v("\n                " + _vm._s(_vm.isPlanAmortissement2Visible ? "Cacher" : "Afficher") + "\n              ")])])])]), _vm._v(" "), _vm.isPlanAmortissement2Visible ? _c("tr", [_c("th", [_vm._v("N°")]), _vm._v(" "), _c("th", [_vm._v("Date Echeance")]), _vm._v(" "), _c("th", [_vm._v("Solde de départ")]), _vm._v(" "), _c("th", [_vm._v("Paiement programmé")]), _vm._v(" "), _c("th", [_vm._v("Paiement supplémentaire")]), _vm._v(" "), _c("th", [_vm._v("Paiement Total")]), _vm._v(" "), _c("th", [_vm._v("Principal")]), _vm._v(" "), _c("th", [_vm._v("Intérêts")]), _vm._v(" "), _c("th", [_vm._v("Solde Final")]), _vm._v(" "), _c("th", [_vm._v("Interets cumulés")])]) : _vm._e()]), _vm._v(" "), _vm.isPlanAmortissement2Visible ? _c("tbody", _vm._l(_vm.plan_amortissement2, function (plan, i) {
    var _plan$date_echeance2, _plan$solde_depart2, _plan$paiement_progra2, _plan$paiement_supple2, _plan$paiement_total2, _plan$principal2, _plan$interets2, _plan$solde_final2, _plan$interets_cumule2;
    return _c("tr", {
      key: i
    }, [_c("td", [_vm._v(_vm._s(plan === null || plan === void 0 ? void 0 : plan.numero_paiement))]), _vm._v(" "), _c("td", [_vm._v("\n            " + _vm._s(_vm._f("formatNumber")(plan === null || plan === void 0 || (_plan$date_echeance2 = plan.date_echeance) === null || _plan$date_echeance2 === void 0 ? void 0 : _plan$date_echeance2.toFixed(2))) + "\n          ")]), _vm._v(" "), _c("td", [_vm._v("\n            " + _vm._s(_vm._f("formatNumber")(plan === null || plan === void 0 || (_plan$solde_depart2 = plan.solde_depart) === null || _plan$solde_depart2 === void 0 ? void 0 : _plan$solde_depart2.toFixed(2))) + "\n          ")]), _vm._v(" "), _c("td", [_vm._v("\n            " + _vm._s(_vm._f("formatNumber")(plan === null || plan === void 0 || (_plan$paiement_progra2 = plan.paiement_programme) === null || _plan$paiement_progra2 === void 0 ? void 0 : _plan$paiement_progra2.toFixed(2))) + "\n          ")]), _vm._v(" "), _c("td", [_vm._v("\n            " + _vm._s(_vm._f("formatNumber")(plan === null || plan === void 0 || (_plan$paiement_supple2 = plan.paiement_supplementaire) === null || _plan$paiement_supple2 === void 0 ? void 0 : _plan$paiement_supple2.toFixed(2))) + "\n          ")]), _vm._v(" "), _c("td", [_vm._v("\n            " + _vm._s(_vm._f("formatNumber")(plan === null || plan === void 0 || (_plan$paiement_total2 = plan.paiement_total) === null || _plan$paiement_total2 === void 0 ? void 0 : _plan$paiement_total2.toFixed(2))) + "\n          ")]), _vm._v(" "), _c("td", [_vm._v("\n            " + _vm._s(_vm._f("formatNumber")(plan === null || plan === void 0 || (_plan$principal2 = plan.principal) === null || _plan$principal2 === void 0 ? void 0 : _plan$principal2.toFixed(2))) + "\n          ")]), _vm._v(" "), _c("td", [_vm._v("\n            " + _vm._s(_vm._f("formatNumber")(plan === null || plan === void 0 || (_plan$interets2 = plan.interets) === null || _plan$interets2 === void 0 ? void 0 : _plan$interets2.toFixed(2))) + "\n          ")]), _vm._v(" "), _c("td", [_vm._v("\n            " + _vm._s(_vm._f("formatNumber")(plan === null || plan === void 0 || (_plan$solde_final2 = plan.solde_final) === null || _plan$solde_final2 === void 0 ? void 0 : _plan$solde_final2.toFixed(2))) + "\n          ")]), _vm._v(" "), _c("td", [_vm._v("\n            " + _vm._s(_vm._f("formatNumber")(plan === null || plan === void 0 || (_plan$interets_cumule2 = plan.interets_cumules) === null || _plan$interets_cumule2 === void 0 ? void 0 : _plan$interets_cumule2.toFixed(2))) + "\n          ")])]);
  }), 0) : _vm._e()]), _vm._v(" "), _c("table", {
    staticClass: "table table-bordered table-responsive mb-2 bg-white"
  }, [_c("thead", [_c("tr", [_c("th", {
    staticClass: "text-center",
    attrs: {
      colspan: "6"
    }
  }, [_vm._v("\n            Revenus générés par les cash flow (replacé dans les mêmes conditions)\n          ")]), _vm._v(" "), _c("th", {
    staticClass: "text-center cursor-pointer",
    on: {
      click: function click($event) {
        _vm.isCashflowTableVisible = !_vm.isCashflowTableVisible;
      }
    }
  }, [_vm._v("\n            " + _vm._s(_vm.isCashflowTableVisible ? "Cacher" : "Afficher") + "\n          ")])]), _vm._v(" "), _vm._m(0)]), _vm._v(" "), _vm.isCashflowTableVisible ? _c("tbody", _vm._l(_vm.revenus_generes_par_les_cashflow, function (revenu, i) {
    var _revenu$frais_de_doss, _revenu$interet_annue, _revenu$prime_de_risq, _revenu$autres_revenu, _revenu$total;
    return _c("tr", {
      key: i
    }, [_c("td", [_vm._v("Echeance " + _vm._s(i + 1))]), _vm._v(" "), _c("td", [_vm._v("\n            " + _vm._s(_vm._f("formatNumber")(revenu === null || revenu === void 0 || (_revenu$frais_de_doss = revenu.frais_de_dossier) === null || _revenu$frais_de_doss === void 0 ? void 0 : _revenu$frais_de_doss.toFixed(2))) + "\n          ")]), _vm._v(" "), _c("td", [_vm._v("\n            " + _vm._s(_vm._f("formatNumber")(revenu === null || revenu === void 0 || (_revenu$interet_annue = revenu.interet_annuel) === null || _revenu$interet_annue === void 0 ? void 0 : _revenu$interet_annue.toFixed(2))) + "\n          ")]), _vm._v(" "), _c("td", [_vm._v("\n            " + _vm._s(_vm._f("formatNumber")(revenu === null || revenu === void 0 || (_revenu$prime_de_risq = revenu.prime_de_risque) === null || _revenu$prime_de_risq === void 0 ? void 0 : _revenu$prime_de_risq.toFixed(2))) + "\n          ")]), _vm._v(" "), _c("td", [_vm._v("\n            " + _vm._s(_vm._f("formatNumber")(revenu === null || revenu === void 0 || (_revenu$autres_revenu = revenu.autres_revenus_sur_credit) === null || _revenu$autres_revenu === void 0 ? void 0 : _revenu$autres_revenu.toFixed(2))) + "\n          ")]), _vm._v(" "), _c("td", [_vm._v("\n            " + _vm._s(_vm._f("formatNumber")(revenu === null || revenu === void 0 || (_revenu$total = revenu.total) === null || _revenu$total === void 0 ? void 0 : _revenu$total.toFixed(2))) + "\n          ")])]);
  }), 0) : _vm._e(), _vm._v(" "), _c("tfoot", [_c("tr", [_c("td", {
    attrs: {
      colspan: "5"
    }
  }), _vm._v(" "), _c("td", [_vm._v("\n            " + _vm._s(_vm._f("formatNumber")((_vm$total_revenus_gen = _vm.total_revenus_generes_par_les_cashflow) === null || _vm$total_revenus_gen === void 0 ? void 0 : _vm$total_revenus_gen.toFixed(2))) + "\n          ")])])])])] : _vm._e(), _vm._v(" "), _c("table", {
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
  }, [_vm._v("\n              " + _vm._s(_vm.showCalcTables ? "Cacher" : "Afficher") + " tableaux de calculs\n            ")]), _vm._v(" "), _c("span", [_vm._v(" RentaCred ")]), _vm._v(" "), _c("button", {
    staticClass: "btn fw-normal",
    on: {
      click: function click($event) {
        _vm.showCalcTables = !_vm.showCalcTables;
      }
    }
  }, [_vm._v("\n              " + _vm._s(_vm.showCalcTables ? "Cacher" : "Afficher") + " tableaux de calculs\n            ")])])])]), _vm._v(" "), _c("tr", [_vm._m(1), _vm._v(" "), _c("td", {
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
  }, [_vm._v("\n                --Selectionnez la filiale--\n              ")]), _vm._v(" "), _vm._l(_vm.filiales, function (code_filiale) {
    return _c("option", {
      key: code_filiale,
      domProps: {
        value: code_filiale
      }
    }, [_vm._v("\n                " + _vm._s(code_filiale) + "\n              ")]);
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
  }, [_vm._v("\n                --Selectionnez le Type de client--\n              ")]), _vm._v(" "), _vm._l(_vm.types_de_client, function (type_client, i) {
    return _c("option", {
      key: i,
      domProps: {
        value: type_client.slug
      }
    }, [_vm._v("\n                " + _vm._s(type_client.name) + "\n              ")]);
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
  }, [_vm._v("\n                --Selectionnez le mode de remboursement--\n              ")]), _vm._v(" "), _vm._l(_vm.modes_remboursement, function (mode, i) {
    return _c("option", {
      key: i,
      domProps: {
        value: mode
      }
    }, [_vm._v("\n                " + _vm._s(mode) + "\n              ")]);
  })], 2)])])]), _vm._v(" "), _c("tr", [_vm._m(8), _vm._v(" "), _c("th", {
    staticClass: "text-right",
    attrs: {
      colspan: "2"
    }
  }, [_vm._v("\n          " + _vm._s(_vm._f("formatNumber")(_vm.montant_echeance)) + "\n        ")])]), _vm._v(" "), _c("tr", [_vm._m(9), _vm._v(" "), _c("th", {
    staticClass: "text-right",
    attrs: {
      colspan: "2"
    }
  }, [_vm._v("\n          " + _vm._s(_vm._f("formatNumber")(_vm.nombre_echeance)) + "\n        ")])])]), _vm._v(" "), _vm._m(10), _vm._v(" "), _c("tbody", [_c("tr", [_c("td", {
    staticClass: "ps-5",
    attrs: {
      colspan: "4"
    }
  }, [_vm._v("Intéret annuel")]), _vm._v(" "), _c("th", {
    staticClass: "text-right",
    attrs: {
      colspan: "2"
    }
  }, [_vm._v("\n          " + _vm._s(_vm._f("formatNumber")(_vm.interet_annuel)) + "\n        ")])]), _vm._v(" "), _c("tr", [_c("td", {
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
  }, [_vm._v("\n          " + _vm._s(_vm._f("formatNumber")(_vm.frais_de_dossier)) + "\n        ")])]), _vm._v(" "), _c("tr", [_c("td", {
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
  }, [_vm._v("\n          " + _vm._s(_vm._f("formatNumber")(_vm.prime_de_risque)) + "\n        ")])]), _vm._v(" "), _c("tr", [_c("td", {
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
  }, [_vm._v("\n          " + _vm._s(_vm._f("formatNumber")(_vm.autres_revenus_sur_credit)) + "\n        ")])]), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "ps-5",
    attrs: {
      colspan: "4"
    }
  }, [_vm._v("Revenus annuel sur cashflow")]), _vm._v(" "), _c("td", {
    staticClass: "text-right",
    attrs: {
      colspan: "2"
    }
  }, [_vm._v("\n          " + _vm._s(_vm._f("formatNumber")(_vm.revenus_annuels_sur_cashflow)) + "\n        ")])]), _vm._v(" "), _c("tr", [_c("th", {
    staticClass: "ps-5",
    attrs: {
      colspan: "4"
    }
  }, [_vm._v("Total revenus annuel")]), _vm._v(" "), _c("th", {
    staticClass: "text-right",
    attrs: {
      colspan: "2"
    }
  }, [_vm._v("\n          " + _vm._s(_vm._f("formatNumber")(_vm.total_revenus_annuel)) + "\n        ")])]), _vm._v(" "), _c("tr", [_c("th", {
    staticClass: "ps-5",
    attrs: {
      colspan: "4"
    }
  }, [_vm._v("Total revenus sur la durée du credit")]), _vm._v(" "), _c("th", {
    staticClass: "text-right",
    attrs: {
      colspan: "2"
    }
  }, [_vm._v("\n          " + _vm._s(_vm._f("formatNumber")(_vm.total_revenus_sur_la_duree_du_credit)) + "\n        ")])]), _vm._v(" "), _vm._m(11)]), _vm._v(" "), _c("tfoot", [_c("tr", {
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
  }, [_vm._v("\n          " + _vm._s(_vm._f("formatNumber")(_vm.pourcentage_rentabilite_brute_annuelle)) + "\n        ")])]), _vm._v(" "), _c("tr", {
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
  }, [_vm._v("\n          " + _vm._s(_vm._f("formatNumber")(_vm.pourcentage_cout_moyen_des_ressources)) + "\n        ")])]), _vm._v(" "), _c("tr", {
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
  }, [_vm._v("\n          " + _vm._s(_vm._f("formatNumber")(_vm.taux_de_cout_du_risque_espere)) + "\n        ")])]), _vm._v(" "), _c("tr", {
    staticClass: "bg-danger text-white"
  }, [_c("th", {
    staticClass: "ps-5",
    attrs: {
      colspan: "4"
    }
  }, [_vm._v("Rentabilité nette annuelle")]), _vm._v(" "), _c("td", {
    staticClass: "text-center"
  }, [_vm._v("\n          " + _vm._s((_vm$rentabilite_statu = _vm.rentabilite_status) !== null && _vm$rentabilite_statu !== void 0 ? _vm$rentabilite_statu : _vm.DEFAULT_NULL_INDICATOR) + "\n        ")]), _vm._v(" "), _c("td", {
    staticClass: "text-right"
  }, [_vm._v("\n          " + _vm._s(_vm._f("formatNumber")(_vm.rentabilite_nette_annuelle)) + "\n        ")])])])])], 2);
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
  }, [_vm._v(" Taux d'intérêt annuel ")])]);
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
  }, [_vm._v(" Durée (MOIS) ")])]);
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
  }, [_vm._v(" Mode remboursement (M/T/S/A) ")])]);
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

/***/ "./resources/js/components/parts/RentaCredData.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/parts/RentaCredData.vue ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _RentaCredData_vue_vue_type_template_id_4ba99af6__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RentaCredData.vue?vue&type=template&id=4ba99af6 */ "./resources/js/components/parts/RentaCredData.vue?vue&type=template&id=4ba99af6");
/* harmony import */ var _RentaCredData_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RentaCredData.vue?vue&type=script&lang=js */ "./resources/js/components/parts/RentaCredData.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _RentaCredData_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _RentaCredData_vue_vue_type_template_id_4ba99af6__WEBPACK_IMPORTED_MODULE_0__.render,
  _RentaCredData_vue_vue_type_template_id_4ba99af6__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/parts/RentaCredData.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/parts/RentaCredData.vue?vue&type=script&lang=js":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/parts/RentaCredData.vue?vue&type=script&lang=js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RentaCredData_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RentaCredData.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/parts/RentaCredData.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RentaCredData_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/parts/RentaCredData.vue?vue&type=template&id=4ba99af6":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/parts/RentaCredData.vue?vue&type=template&id=4ba99af6 ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RentaCredData_vue_vue_type_template_id_4ba99af6__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RentaCredData_vue_vue_type_template_id_4ba99af6__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RentaCredData_vue_vue_type_template_id_4ba99af6__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RentaCredData.vue?vue&type=template&id=4ba99af6 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/parts/RentaCredData.vue?vue&type=template&id=4ba99af6");


/***/ })

}]);