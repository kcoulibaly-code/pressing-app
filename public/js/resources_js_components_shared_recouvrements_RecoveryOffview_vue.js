(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_shared_recouvrements_RecoveryOffview_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/recouvrements/RecoveryOffview.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/recouvrements/RecoveryOffview.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! html2canvas */ "./node_modules/html2canvas/dist/html2canvas.js");
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(html2canvas__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_ebapis_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/ebapis.service */ "./resources/js/services/ebapis.service.js");
/* harmony import */ var _StampRecovery_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./StampRecovery.vue */ "./resources/js/components/shared/recouvrements/StampRecovery.vue");
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }



// import FR0 from '../../offview/microfinance/cofina/recoveryiq/FR0.vue'
// import ebapis from "../../offview/"
// import ebapis from "../../../../../services/ebapis.service";

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "RecoveryOffview",
  computed: {},
  components: {
    StampRecovery: _StampRecovery_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  props: {
    dossier_credit: Object,
    dismiss: Boolean,
    offBankList: {
      type: [Array],
      "default": function _default() {
        return [];
      }
    },
    doc_tobe_produced: String,
    authcheckusr: Object,
    dossiers_credit_files: Array,
    dossier_credit_recovery: {
      type: [Object],
      "default": function _default() {
        return {};
      }
    }
  },
  data: function data() {
    return {
      components: {},
      screenCount: 0,
      entityType: _services_ebapis_service__WEBPACK_IMPORTED_MODULE_1__["default"].loadableEntity()[0],
      realEntity: _services_ebapis_service__WEBPACK_IMPORTED_MODULE_1__["default"].loadableEntity()[1],
      isLoading: true,
      mountedComponents: 0,
      pjMap: [{
        name: "obtenu_sur_la_Base_du_Billet_à_Ordre",
        forms: ["FR25", "FR28", "FR29", "FR27", "FR30", "FR20", "FR16"]
      }, {
        name: "obtenu_sur_la_Base_de_la_Procédure_d_Injonction_de_Payer",
        forms: ["FR11", "FR31", "FR13", "FR32"]
      }, {
        name: "obtenu_sur_la_Base_Assignation",
        forms: ["FR33", "FR15", "FR34", "FR14"]
      }],
      team3Task: ["FR14", "FR18", "FR35", "FR22"]
    };
  },
  created: function created() {
    var _this$dossier_credit$,
      _this$dossier_credit,
      _this = this;
    // ORDRE D AFFICHAGE DES TABLEAUX DANS LE OFFVIEW
    // Rapport appel téléphonique client
    // Rapport visite client
    // Rapport appel téléphonique  caution
    // Rapport visite caution
    // Pv comité de recouvrement 
    // Décharge lettres et mise en demeure
    // Actions procédures juridiques jusqu’à la fin

    var customOrder = ["FR0", "FR1", "FR2", "FR3", "FR6", "FR5", "FR4", "FR8", "FR9", "FR10", "FR26"]; // Ordre personnalisé
    // Kassoum Code
    var recovery_pj = (_this$dossier_credit$ = (_this$dossier_credit = this.dossier_credit) === null || _this$dossier_credit === void 0 || (_this$dossier_credit = _this$dossier_credit.demande_procedure_juridique) === null || _this$dossier_credit === void 0 || (_this$dossier_credit = _this$dossier_credit.procedure_data) === null || _this$dossier_credit === void 0 ? void 0 : _this$dossier_credit.recovery_procedure_juridique) !== null && _this$dossier_credit$ !== void 0 ? _this$dossier_credit$ : null;
    if (recovery_pj && ['', null, undefined].includes(recovery_pj) === false) {
      // Trouver l'objet dans pjMap dont le name est égal à recovery_pj
      var matchingPj = this.pjMap.find(function (pj) {
        return pj.name === recovery_pj;
      });
      if (matchingPj) {
        // Trier pjMap pour que l'élément correspondant soit en première position
        var sortedPjMap = [matchingPj].concat(_toConsumableArray(this.pjMap.filter(function (pj) {
          return pj.name !== recovery_pj;
        })));

        // Concaténer customOrder avec les forms de tous les objets dans sortedPjMap
        sortedPjMap.forEach(function (pj) {
          customOrder.push.apply(customOrder, _toConsumableArray(pj.forms));
        });
      }
    } else {
      // Si la condition n'est pas vérifiée, ajouter les forms de tous les objets dans pjMap
      this.pjMap.forEach(function (pj) {
        customOrder.push.apply(customOrder, _toConsumableArray(pj.forms));
      });
    }

    // console.log("customOrder ** ", customOrder);

    // FOR TEAM 3
    this.team3Task.forEach(function (pj) {
      customOrder.push(pj);
      // if (!customOrder.includes(pj)) { // Ajouter uniquement si ce n'est pas déjà dans customOrder
      //     customOrder.push(pj);
      // }
    });
    for (var i = 0; i <= 35; i++) {
      var name = "FR" + i;
      if (!customOrder.includes(name)) {
        // Éviter les doublons
        customOrder.push(name);
      }
    }

    // console.log(" // customOrder ** ",customOrder);

    customOrder.forEach(function (name) {
      _this.components[name] = function () {
        return __webpack_require__("./resources/js/components/offview/microfinance/cofina/recoveryiq lazy recursive ^\\.\\/.*\\.vue$")("./".concat(name, ".vue"));
      };
    });
  },
  mounted: function mounted() {
    var _this2 = this;
    EventBus.$emit("value-get_doss_credit_file");
    //this.waitPageLoad()
    EventBus.$on("printcaffil", function (divName) {
      _this2.launchPrintView(divName);
    });
  },
  methods: {
    onComponentMounted: function onComponentMounted() {
      this.mountedComponents += 1;
      var mountedPercentage = this.mountedComponents * 100 / Object.keys(this.components).length;
      EventBus.$emit("CompMounted", mountedPercentage.toFixed(2));
      // Check if all components are mounted
      if (this.mountedComponents === Object.keys(this.components).length) {
        // console.log("All child components are mounted.");
        // Additional logic when all components are mounted
        // this.isLoading = false;
        EventBus.$emit("allCompMounted");
      }
    },
    launchCompilerT0: function launchCompilerT0() {
      EventBus.$emit("value-updatedT1");
    },
    launchPrintView: function launchPrintView(divName) {
      var printContents = document.getElementById(divName).innerHTML;
      var originalContents = document.body.innerHTML;
      document.body.innerHTML = printContents;
      // encours-layout

      document.body.style.backgroundColor = "white";
      document.body.style.height = "auto";
      document.body.style.width = "auto";
      document.body.style.margin = "auto";
      window.print();
      document.body.innerHTML = originalContents;
      location.reload();
    } // waitPageLoad() {
    //     if(this.screenCount <=2 ){
    //       setTimeout(() => {
    //           this.saveMemerandumAsImage();
    //       }, 10000); //10s
    //       this.screenCount++;
    //     }
    // },
    // ? Saves Memorandum html component as a png image
    // async saveMemerandumAsImage() {
    //     const templateId =
    //         this.$route.params.templateId ?? new Date().toISOString();
    //     const timestamp = new Date().getTime();
    //     const divElement = document.getElementById("printcaffil");
    //     const canvas = await html2canvas(divElement);
    //     const dataURL = canvas.toDataURL();
    //     // const imageName = "mememorandum-image-" + templateId + "-" + timestamp;
    //     const imageName = templateId;
    //     let res = await fetch("/api/html-to-image", {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json",
    //             Accept: "application/json",
    //         },
    //         body: JSON.stringify({
    //             imageName,
    //             imageData: dataURL,
    //         }),
    //     });
    //     let response = await res.json();
    //     // console.log("<<<<< saveMemerandumAsImage", response["image_url"]);
    // },
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/recouvrements/StampRecovery.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/recouvrements/StampRecovery.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_ebapis_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/ebapis.service */ "./resources/js/services/ebapis.service.js");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "StampRecovery",
  props: {
    // cred_pub_key: String,
    dossier_credit: Object,
    // approval_nodes : Array,
    // final_outcome : Object,
    // decision_logs : Array,
    recouvrement_decision_logs: Array
    // is_ajournee: Boolean,
    // ajournement_logs : Array,
    // mise_en_place_logs : Object,
    // caract_inter_pret : Array,
    // caract_inter_pret_bank : Array,
    // mise_en_place: Boolean,
    // en_arbitrage: Boolean,
    // dosRecalledLogs : Array,
    // isDosRecalled:Boolean,
    // authcheckusr:Object,
    // arbitrage_logs:Object,
    // recommandations: Array,
    // condition_decaissements: Array,
    // condition_commerciales: Array,
    // document_name : {
    //   type: String,
    //   default: ''
    // },
  },
  data: function data() {
    var _this$dossier_credit, _this$dossier_credit2;
    return {
      ebapisHost: _services_ebapis_service__WEBPACK_IMPORTED_MODULE_0__["default"].host,
      outcome_msg: "",
      isLoading: false,
      affectationLogs: (_this$dossier_credit = this.dossier_credit) === null || _this$dossier_credit === void 0 ? void 0 : _this$dossier_credit.affectation_logs,
      currentIndex: 0,
      reviewerRoles: ['REV_ARC', 'REV_CS_ACEI', 'REV_CD_DC', 'REV_DC'],
      mt: 0,
      caThresold: 150000000,
      serv_jurid_decision_logs: [],
      notif_accord_decision_logs: [],
      serv_admin_credit_decision_logs: [],
      controle_admin_credit_decision_logs: [],
      MAX_COMMENT_VISIBLE: 200,
      isOpen: true,
      live_instance_tracker: (_this$dossier_credit2 = this.dossier_credit) === null || _this$dossier_credit2 === void 0 ? void 0 : _this$dossier_credit2.live_instance_tracker,
      amendementsListe: ["AJOURNEMENT_DE_DOSSIER", "AFFECTATION_DE_DOSSIER", "FICHE_DE_LECTURE", "FICHE_DE_SUIVI", "FICHE_DE_COMMENTAIRE"],
      amendementsUser: []
    };
  },
  mounted: function mounted() {

    // EventBus.$on("printstamps", (divName) => {
    //       this.launchPrintView(divName)
    //   })
  },
  computed: {
    recouvrement_final_outcome: function recouvrement_final_outcome() {
      var _this$dossier_credit3;
      return (_this$dossier_credit3 = this.dossier_credit) === null || _this$dossier_credit3 === void 0 ? void 0 : _this$dossier_credit3.recouvrement_final_outcome;
    }
  },
  methods: {
    launchPrintView: function launchPrintView(divName) {
      var printContents = document.getElementById(divName).innerHTML;
      var originalContents = document.body.innerHTML;
      document.body.innerHTML = printContents;
      document.body.style.backgroundColor = "white";
      document.body.style.height = "auto";
      document.body.style.width = "auto";
      document.body.style.margin = "auto";
      document.body.style.printColorAdjust = "exact";
      document.body.style.webkitPrintColorAdjust = "exact";
      window.print();
      document.body.innerHTML = originalContents;
      location.reload();
    },
    wasHere: function wasHere(stage_id, ls) {
      for (var index = 0; index < ls.length; index++) {
        var element = ls[index];
        if ((element === null || element === void 0 ? void 0 : element.stage_id) == stage_id) {
          return true;
        }
      }
      return false;
    },
    openPts: function openPts() {
      EventBus.$emit('open-pts');
    },
    madebyCafDemain: function madebyCafDemain(giver_role, stage_id) {
      if (stage_id == 0) {
        var _this$dossier_credit4;
        if (((_this$dossier_credit4 = this.dossier_credit) === null || _this$dossier_credit4 === void 0 ? void 0 : _this$dossier_credit4.mounted_by_caf_demain) == true) {
          return "CAF de demain";
        }
      }
      return giver_role;
    },
    determineMontantApprouve: function determineMontantApprouve() {
      var _this$dossier_credit5, _latestAmount;
      var caract_inter_pret = (_this$dossier_credit5 = this.dossier_credit) === null || _this$dossier_credit5 === void 0 ? void 0 : _this$dossier_credit5.caract_inter_pret;
      var latestAmount = 0;
      var latetstDuree = 0;
      if (caract_inter_pret != null) {
        var _this$dossier_credit6;
        var finalOutcomeUserRole = (_this$dossier_credit6 = this.dossier_credit) === null || _this$dossier_credit6 === void 0 || (_this$dossier_credit6 = _this$dossier_credit6.final_outcome) === null || _this$dossier_credit6 === void 0 ? void 0 : _this$dossier_credit6.giver_role_sigle;
        // console.log({finalOutcomeUserRole:finalOutcomeUserRole})
        var latestObj = caract_inter_pret.find(function (el) {
          return el.role_sigle == finalOutcomeUserRole;
        });
        latestAmount = latestObj === null || latestObj === void 0 ? void 0 : latestObj['montant_pret_' + finalOutcomeUserRole];
        latetstDuree = latestObj === null || latestObj === void 0 ? void 0 : latestObj.duree_pret;
        // console.log({latestAmountBefor:latestAmount})
        if (!latestAmount) {
          var _caract_inter_pret$at, _caract_inter_pret$at2, _caract_inter_pret$at3;
          finalOutcomeUserRole = (_caract_inter_pret$at = caract_inter_pret.at(-1)) === null || _caract_inter_pret$at === void 0 ? void 0 : _caract_inter_pret$at.role_sigle;
          latestAmount = (_caract_inter_pret$at2 = caract_inter_pret.at(-1)) === null || _caract_inter_pret$at2 === void 0 ? void 0 : _caract_inter_pret$at2['montant_pret_' + finalOutcomeUserRole];
          latetstDuree = (_caract_inter_pret$at3 = caract_inter_pret.at(-1)) === null || _caract_inter_pret$at3 === void 0 ? void 0 : _caract_inter_pret$at3['duree_pret'];
        }
      }
      this.mt = Number((_latestAmount = latestAmount) === null || _latestAmount === void 0 ? void 0 : _latestAmount.toString().replace(/\s/g, ""));
      return {
        montantDef: latestAmount,
        dureeDef: latetstDuree
      };
    },
    clearCafAvis: function clearCafAvis(avis) {
      return avis === null || avis === void 0 ? void 0 : avis.split("|");
    },
    filterDecisionLog: function filterDecisionLog(decision_logs) {
      var _this$authcheckusr,
        _this = this,
        _this$authcheckusr3;
      if (this.entityType.toUpperCase() !== 'BANK') return decision_logs;
      var rse_role_uuid = ['hPw54QVzoevn72FWV8Um', '4U0BBD80Ung8bGC3BMpR', 'ZFMou0JDoVz1ZRi75JKQ', 'z1k6nzjLJRZrGbPt5oWY'];
      if (rse_role_uuid.includes((_this$authcheckusr = this.authcheckusr) === null || _this$authcheckusr === void 0 ? void 0 : _this$authcheckusr.role_uuid)) {
        var role_rse = ['ARSE', 'CS_RSE', 'CD_RSE', 'DR_RSE'];
        return decision_logs.filter(function (dl) {
          return role_rse.includes(dl.giver_role_sigle);
        });
      }
      decision_logs.forEach(function (el) {
        var _this$dossier_credit7;
        el.text_decision = null;
        if (el.outcome === 2) {
          el.text_decision = "Avis Favorable";
        }
        if (el.outcome === 3) {
          el.text_decision = "Avis Défavorable";
        }
        (_this$dossier_credit7 = _this.dossier_credit) === null || _this$dossier_credit7 === void 0 || _this$dossier_credit7.pub_workflow.forEach(function (pub) {
          if ((pub === null || pub === void 0 ? void 0 : pub.is_signature_compulsory) != undefined && pub.is_signature_compulsory && pub.responsible_id === el.given_by) {
            if (el.outcome === 2) {
              // el.text_decision = "Accord";
              el.text_decision = "Avis Favorable";
              el.is_signature_compulsory = true;
            }
            if (el.outcome === 3) {
              // el.text_decision = "Refus";
              el.text_decision = "Avis Défavorable";
              el.is_signature_compulsory = true;
            }
          }
        });
        if (_this.reviewerRoles.includes(el.giver_role_sigle)) {
          if (el.outcome === 2) {
            el.text_decision = "Reviewer Favorable";
          }
          if (el.outcome === 3) {
            el.text_decision = "Reviewer Défavorable";
          }
        }
      });
      if (this.entityType.toUpperCase() == 'BANK') {
        var _this$authcheckusr2;
        var dgr_role_uid = ['HQZuHzJ1PnBmLK1nB7tv', 'QDs8GuDUB2ztQCN02zfV', 'a6xRkvxKKxBqyXRHkry0', 'hyJKyNEHgzv4sEj1EZXW'];
        if (!dgr_role_uid.includes((_this$authcheckusr2 = this.authcheckusr) === null || _this$authcheckusr2 === void 0 ? void 0 : _this$authcheckusr2.role_uuid)) {
          var role_dgr = ['AGRC', 'CS_GRC', 'CD_GRC'];
          decision_logs = decision_logs.filter(function (decision) {
            return !role_dgr.includes(decision.giver_role_sigle);
          });
        }
      }
      if (!['CONTRE_ANALYSE_FILIALE', 'REVIEW_CONTRE_ANALYSE_FILIALE'].includes((_this$authcheckusr3 = this.authcheckusr) === null || _this$authcheckusr3 === void 0 ? void 0 : _this$authcheckusr3.what_tobe_produced)) {
        return decision_logs.filter(function (dl) {
          return !_this.reviewerRoles.includes(dl.giver_role_sigle);
        });
      }
      return decision_logs;
    },
    showModal: function showModal(index, slug_modal) {
      this.currentIndex = index;
      if (slug_modal == "detailLignes") {
        this.$modal.show('detailLignes');
      }
      if (slug_modal == "detailRecommandations") {
        this.$modal.show('detailRecommandations');
      }
    },
    computeTotalLigne: function computeTotalLigne(index) {
      var _this$caract_inter_pr, _this$caract_inter_pr3;
      var totalParCaisse = 0;
      var totalEngagement = 0;
      if ((_this$caract_inter_pr = this.caract_inter_pret_bank) !== null && _this$caract_inter_pr !== void 0 && (_this$caract_inter_pr = _this$caract_inter_pr[index]) !== null && _this$caract_inter_pr !== void 0 && (_this$caract_inter_pr = _this$caract_inter_pr.lignes) !== null && _this$caract_inter_pr !== void 0 && _this$caract_inter_pr.lignes_par_caisse) {
        var _this$caract_inter_pr2;
        totalParCaisse = (_this$caract_inter_pr2 = this.caract_inter_pret_bank) === null || _this$caract_inter_pr2 === void 0 || (_this$caract_inter_pr2 = _this$caract_inter_pr2[index]) === null || _this$caract_inter_pr2 === void 0 || (_this$caract_inter_pr2 = _this$caract_inter_pr2.lignes) === null || _this$caract_inter_pr2 === void 0 ? void 0 : _this$caract_inter_pr2.lignes_par_caisse.reduce(function (accumulator, el) {
          return accumulator + Number(String(el === null || el === void 0 ? void 0 : el.montant_ligne).replace(/\s+/g, ""));
        }, 0);
      }
      if ((_this$caract_inter_pr3 = this.caract_inter_pret_bank) !== null && _this$caract_inter_pr3 !== void 0 && (_this$caract_inter_pr3 = _this$caract_inter_pr3[index]) !== null && _this$caract_inter_pr3 !== void 0 && (_this$caract_inter_pr3 = _this$caract_inter_pr3.lignes) !== null && _this$caract_inter_pr3 !== void 0 && _this$caract_inter_pr3.engagement_signatures) {
        var _this$caract_inter_pr4;
        totalEngagement = (_this$caract_inter_pr4 = this.caract_inter_pret_bank) === null || _this$caract_inter_pr4 === void 0 || (_this$caract_inter_pr4 = _this$caract_inter_pr4[index]) === null || _this$caract_inter_pr4 === void 0 || (_this$caract_inter_pr4 = _this$caract_inter_pr4.lignes) === null || _this$caract_inter_pr4 === void 0 ? void 0 : _this$caract_inter_pr4.engagement_signatures.reduce(function (accumulator, el) {
          return accumulator + Number(String(el === null || el === void 0 ? void 0 : el.montant_ligne).replace(/\s+/g, ""));
        }, 0);
      }
      return totalParCaisse + totalEngagement;
    },
    goToArbitrage: function goToArbitrage() {
      var _this2 = this;
      this.$Progress.start();
      this.isLoading = true;
      _services_ebapis_service__WEBPACK_IMPORTED_MODULE_0__["default"].loadUserData().then(function (res) {
        _this2.$axios.post(_this2.ebapisHost + "workflowbuilder/api/v1/start-arbitrage/", {
          user: res.data,
          cred_pub_key: _this2.cred_pub_key,
          raison: _this2.outcome_msg
        }).then(function (res) {
          _this2.$Progress.finish();
          _this2.isLoading = false;
          _this2.$modal.hide("arbitrage");
          EventBus.$emit("value-updated");
        })["catch"](function (error) {
          _this2.$Progress.finish();
          console.error(error);
          _this2.$toasted.show("Une erreur s'est produite.");
          _this2.isLoading = false;
        });
      });
    },
    indexFinder: function indexFinder(recouvrement_decision_logs, stage_id) {
      for (var i = 0; i < recouvrement_decision_logs.length; i++) {
        if (recouvrement_decision_logs[i]['stage_id'] == stage_id) {
          return i;
        }
      }
      return 0;
    },
    buildAmountStr: function buildAmountStr(sigle) {
      return "montant_pret_" + sigle;
    },
    hasBeenAjournee: function hasBeenAjournee(curr_stage_id) {
      var b0 = [];
      for (var i = 0; i < this.ajournement_logs.length; i++) {
        var p = this.ajournement_logs[i];
        if ((p === null || p === void 0 ? void 0 : p.stage_id) == curr_stage_id) {
          b0.push(this.ajournement_logs[i]);
        }
      }
      return b0;
    },
    hasBeenRappele: function hasBeenRappele(curr_stage_id) {
      var b0 = [];
      for (var i = 0; i < this.dosRecalledLogs.length; i++) {
        var p = this.dosRecalledLogs[i];
        if ((p === null || p === void 0 ? void 0 : p.stage_id) == curr_stage_id && (p === null || p === void 0 ? void 0 : p.is_recall_confirmed) == true) {
          b0.push(this.dosRecalledLogs[i]);
        }
      }
      return b0;
    },
    hasBeenAssigned: function hasBeenAssigned(curr_stage_id) {
      var b0 = [];
      for (var i = 0; i < this.affectationLogs.length; i++) {
        var p = this.affectationLogs[i];
        if ((p === null || p === void 0 ? void 0 : p.to_stage_id) == curr_stage_id) {
          b0.push(this.affectationLogs[i]);
        }
      }
      return b0;
    },
    hasBeenAj: function hasBeenAj(curr_stage_id) {
      var b0 = [];
      for (var i = 0; i < ((_this$dossier_credit8 = this.dossier_credit) === null || _this$dossier_credit8 === void 0 ? void 0 : _this$dossier_credit8.aj_desc_logs.length); i++) {
        var _this$dossier_credit8, _this$dossier_credit9;
        var p = (_this$dossier_credit9 = this.dossier_credit) === null || _this$dossier_credit9 === void 0 ? void 0 : _this$dossier_credit9.aj_desc_logs[i];
        if ((p === null || p === void 0 ? void 0 : p.stage_id) == curr_stage_id) {
          var _this$dossier_credit0;
          b0.push((_this$dossier_credit0 = this.dossier_credit) === null || _this$dossier_credit0 === void 0 ? void 0 : _this$dossier_credit0.aj_desc_logs[i]);
        }
      }
      return b0;
    },
    getData: function getData(user_id, data, key) {
      var data_ = [];
      if (!['', null, undefined].includes(data)) {
        data.forEach(function (element) {
          if (element.user.user_id == user_id) {
            if (element[key] != undefined) {
              data_ = data_.concat(element[key]);
            }
          }
        });
      }
      return data_;
    },
    filterSerJuridDecisionLog: function filterSerJuridDecisionLog(decision_logs) {
      var last_key = null;
      decision_logs.forEach(function (el, index) {
        el.text_decision = null;
        if (el.outcome === 2) {
          el.text_decision = "Avis Favorable";
        }
        if (el.outcome === 3) {
          el.text_decision = "Avis Défavorable";
        }
        if (el.giver_role_sigle == "GG_DAJC") {
          if (el.outcome === 2) {
            el.text_decision = "Encodage effectué";
          }
          if (el.outcome === 3) {
            el.text_decision = "Encodage non effectué";
          }
        }
        if (el.giver_role_sigle == "CS_DAJC") {
          if ([1, 2].includes(el.outcome)) {
            el.text_decision = "Encodage vérifié";
          }
          if (el.outcome === 3) {
            el.text_decision = "Encodage non vérifié";
          }
        }
        if (['DR_DAJC', 'CD_DAJC'].includes(el.giver_role_sigle)) {
          if ([1, 2].includes(el.outcome)) {
            el.text_decision = "Accord pour mise en place";
          }
          if ([-1, 3].includes(el.outcome)) {
            el.text_decision = "Refus";
          }
        }
        if (last_key && decision_logs[last_key]) {
          var last_el = decision_logs[last_key];
          if (last_el.giver_role_sigle == "CS_DAJC") {
            if (last_el.outcome === 2) {
              last_el.text_decision = "Encodage vérifié";
            }
            if (last_el.outcome === 3) {
              last_el.text_decision = "Encodage non vérifié";
            }
          }
          decision_logs[last_key] = last_el;
        }
        last_key = index;
      });
      return decision_logs;
    },
    filterNotifAccordDecisionLog: function filterNotifAccordDecisionLog(decision_logs) {
      decision_logs.forEach(function (el, index) {
        el.text_decision = null;
        if (['ARC', 'CAE', 'CC'].includes(el.giver_role_sigle)) {
          el.text_decision = "Soumission de la notification";
        }
        if (['CS_ACEI', 'CS_ACP'].includes(el.giver_role_sigle)) {
          if ([1, 2].includes(el.outcome)) {
            el.text_decision = "Notification d'accord";
          }
          if ([-1, 3].includes(el.outcome)) {
            el.text_decision = "Notification de refus";
          }
        }
        if (['DCEI', 'DCP'].includes(el.giver_role_sigle)) {
          if ([1, 2].includes(el.outcome)) {
            el.text_decision = "Accord de notification";
          }
          if ([-1, 3].includes(el.outcome)) {
            el.text_decision = "Refus";
          }
        }
      });
      return decision_logs;
    },
    getTauxPropose: function getTauxPropose(data) {
      var _data$taux_pret, _this$dossier_credit1;
      var taux = (_data$taux_pret = data === null || data === void 0 ? void 0 : data.taux_pret) !== null && _data$taux_pret !== void 0 ? _data$taux_pret : "";
      if (((_this$dossier_credit1 = this.dossier_credit) === null || _this$dossier_credit1 === void 0 ? void 0 : _this$dossier_credit1.categorie_client) == "Retail") {
        if (['', null, undefined].includes(taux)) {
          var credVal = this.determineCredPubTablesFromDosCred(this.dossier_credit);
          if (credVal[0]) {
            var _this$dossier_credit$, _this$dossier_credit10;
            var credpub0 = credVal[1];
            taux = (_this$dossier_credit$ = (_this$dossier_credit10 = this.dossier_credit) === null || _this$dossier_credit10 === void 0 || (_this$dossier_credit10 = _this$dossier_credit10[credpub0]) === null || _this$dossier_credit10 === void 0 ? void 0 : _this$dossier_credit10.taux) !== null && _this$dossier_credit$ !== void 0 ? _this$dossier_credit$ : "";
          }
        }
      }
      return taux;
    },
    getObjectLogLimited: function getObjectLogLimited(obj, message_key) {
      if (!['', undefined, null].includes(obj === null || obj === void 0 ? void 0 : obj[message_key])) {
        var _obj$message_key, _obj$message_key2;
        if (obj[message_key + '_max'] == undefined) {
          this.$set(obj, message_key + '_max', this.MAX_COMMENT_VISIBLE);
        }
        var max_ = obj === null || obj === void 0 || (_obj$message_key = obj[message_key]) === null || _obj$message_key === void 0 ? void 0 : _obj$message_key.length;
        var max = obj[message_key + '_max'];
        if (max_ - max <= 0) {
          return obj === null || obj === void 0 ? void 0 : obj[message_key];
        }
        this.$set(obj, 'show_button', true);
        this.$set(obj, message_key + '_limited', (obj === null || obj === void 0 || (_obj$message_key2 = obj[message_key]) === null || _obj$message_key2 === void 0 ? void 0 : _obj$message_key2.substring(0, max)) + ' ... ');
        return obj[message_key + '_limited'] + ' ... ';
      }
      return "";
    },
    updatedObjectLogLimited: function updatedObjectLogLimited(obj, message_key, max) {
      var hashtag = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
      if (!['', undefined, null].includes(obj === null || obj === void 0 ? void 0 : obj[message_key])) {
        var _obj$message_key3;
        if (obj[message_key + '_max'] == undefined) {
          this.$set(obj, message_key + '_max', this.MAX_COMMENT_VISIBLE);
        } else {
          if (max == 0) {
            this.$set(obj, message_key + '_max', this.MAX_COMMENT_VISIBLE);
          } else {
            this.$set(obj, message_key + '_max', obj[message_key + '_max'] + max);
          }
        }
        var max_ = obj === null || obj === void 0 || (_obj$message_key3 = obj[message_key]) === null || _obj$message_key3 === void 0 ? void 0 : _obj$message_key3.length;
        max = obj[message_key + '_max'];
        if (max_ - max <= 0) {
          delete obj[message_key + '_limited'];
        } else {
          var _obj$message_key4;
          this.$set(obj, message_key + '_limited', (obj === null || obj === void 0 || (_obj$message_key4 = obj[message_key]) === null || _obj$message_key4 === void 0 ? void 0 : _obj$message_key4.substring(0, max)) + ' ... ');
        }
        if (hashtag != null) {
          var url = window.location.href.split('#')[0];
          window.location.href = url + '#' + hashtag;
        }
      }
    },
    filterSerAdminCreditDecisionLog: function filterSerAdminCreditDecisionLog(decision_logs) {
      var last_key = null;
      decision_logs.forEach(function (el, index) {
        el.text_decision = null;
        if (el.outcome === 2) {
          el.text_decision = "Avis Favorable";
        }
        if (el.outcome === 3) {
          el.text_decision = "Avis Défavorable";
        }
        if (el.giver_role_sigle == "ACC_GAC") {
          if (el.outcome === 2) {
            el.text_decision = "Saisie effectuée";
          }
          if (el.outcome === 3) {
            el.text_decision = "Saisie non effectuée";
          }
        }
        if (el.giver_role_sigle == "CS_GAC") {
          if ([1, 2].includes(el.outcome)) {
            el.text_decision = "Mise en place vérifiée";
          }
          if (el.outcome === 3) {
            el.text_decision = "Mise en place non vérifiée";
          }
        }
        if (['DR_GAC', 'CD_GAC'].includes(el.giver_role_sigle)) {
          if ([1, 2].includes(el.outcome)) {
            el.text_decision = "Mise en place effectuée";
          }
          if ([-1, 3].includes(el.outcome)) {
            el.text_decision = "Refus";
          }
        }
        if (last_key && decision_logs[last_key]) {
          var last_el = decision_logs[last_key];
          if (last_el.giver_role_sigle == "CS_GAC") {
            if (last_el.outcome === 2) {
              last_el.text_decision = "Mise en place vérifiée";
            }
            if (last_el.outcome === 3) {
              last_el.text_decision = "Mise en place non vérifiée";
            }
          }
          decision_logs[last_key] = last_el;
        }
        last_key = index;
      });
      return decision_logs;
    },
    filterControleSerAdminCreditDecisionLog: function filterControleSerAdminCreditDecisionLog(decision_logs) {
      var last_key = null;
      decision_logs.forEach(function (el, index) {
        el.text_decision = null;
        if (el.outcome === 2) {
          el.text_decision = "Avis Favorable";
        }
        if (el.outcome === 3) {
          el.text_decision = "Avis Défavorable";
        }
        if (el.giver_role_sigle == "ACC_GAC") {
          if (el.outcome === 2) {
            el.text_decision = "Contrôle à J+1 effectué";
          }
          if (el.outcome === 3) {
            el.text_decision = "Contrôle non effectué";
          }
        }
        if (el.giver_role_sigle == "CS_GAC") {
          if ([1, 2].includes(el.outcome)) {
            el.text_decision = "Contrôle vérifié";
          }
          if (el.outcome === 3) {
            el.text_decision = "Contrôle non vérifié";
          }
        }
        if (['DR_GAC', 'CD_GAC'].includes(el.giver_role_sigle)) {
          if ([1, 2].includes(el.outcome)) {
            el.text_decision = "Contrôle à J+1 effectué";
          }
          if ([-1, 3].includes(el.outcome)) {
            el.text_decision = "Refus";
          }
        }
        if (last_key && decision_logs[last_key]) {
          var last_el = decision_logs[last_key];
          if (last_el.giver_role_sigle == "CS_GAC") {
            if (last_el.outcome === 2) {
              last_el.text_decision = "Contrôle vérifié";
            }
            if (last_el.outcome === 3) {
              last_el.text_decision = "Contrôle non vérifié";
            }
          }
          decision_logs[last_key] = last_el;
        }
        last_key = index;
      });
      return decision_logs;
    },
    toggleAccordion: function toggleAccordion() {
      this.isOpen = !this.isOpen;
    },
    elapsedTimeBetweenDates: function elapsedTimeBetweenDates(startDate, endDate) {
      // Convertir les chaînes de caractères en objets Date
      var start = new Date(startDate);
      var end = new Date(endDate);

      // Vérifier si les dates passées sont valides
      if (isNaN(start.getTime()) || isNaN(end.getTime())) {
        return "Date(s) invalide(s).";
      }

      // Calculer la différence en millisecondes
      var diff = end - start;
      if (diff < 0) {
        return "La date de fin est antérieure à la date de début.";
      }

      // Convertir la différence en jours, heures, minutes et secondes
      var msInSecond = 1000;
      var msInMinute = msInSecond * 60;
      var msInHour = msInMinute * 60;
      var msInDay = msInHour * 24;
      var days = Math.floor(diff / msInDay);
      diff = diff % msInDay;
      var hours = Math.floor(diff / msInHour);
      diff = diff % msInHour;
      var minutes = Math.floor(diff / msInMinute);
      diff = diff % msInMinute;
      var seconds = Math.floor(diff / msInSecond);
      return {
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds
      };
    },
    displayTimeData: function displayTimeData() {
      var _this$live_instance_t,
        _this3 = this;
      var userTimeData = {};
      if ((_this$live_instance_t = this.live_instance_tracker) !== null && _this$live_instance_t !== void 0 && _this$live_instance_t.tracker_logs) {
        var _this$live_instance_t2;
        (_this$live_instance_t2 = this.live_instance_tracker) === null || _this$live_instance_t2 === void 0 || _this$live_instance_t2.tracker_logs.forEach(function (log) {
          var _log$who_currently_ha;
          var userId = (_log$who_currently_ha = log.who_currently_has_it) === null || _log$who_currently_ha === void 0 ? void 0 : _log$who_currently_ha.user_id;
          if (!userTimeData[userId]) {
            userTimeData[userId] = {
              user_id: userId,
              deadline_with_amendments: 0,
              amendments: 0,
              deadline_without_amendments: 0,
              date_without_amendments: 0
            };
          }

          // Date de reception du dossier
          var sinceWhenHasIt = new Date(log.since_when_has_it);

          // Date de fin de tache
          var sinceWhenDidHeNotHaveIt = new Date(log.since_when_did_he_not_have_it);

          // Calculer la différence de temps entre la date de fin de tache et la date de reception du dossier
          var timeDifference = sinceWhenDidHeNotHaveIt - sinceWhenHasIt;
          userTimeData[userId].deadline_without_amendments += timeDifference;
          userTimeData[userId].deadline_with_amendments += timeDifference;
          userTimeData[userId].date_without_amendments = log.since_when_did_he_not_have_it;

          // si des amendements existent 
          if (_this3.amendementsListe.includes(log.why_has_it.event_name)) {
            userTimeData[userId].amendments += 1;
            userTimeData[userId].deadline_with_amendments += timeDifference;
          }
        });
      }
      return Object.values(userTimeData);
    },
    formatTime: function formatTime(time) {
      var totalSeconds = Math.floor(time / 1000);
      var hours = Math.floor(totalSeconds / 3600);
      var minutes = Math.floor(totalSeconds % 3600 / 60);
      var seconds = totalSeconds % 60;
      return "".concat(hours, "h ").concat(minutes, "m ").concat(seconds, "s");
    },
    addTimeToDate: function addTimeToDate(dateStr, milliseconds) {
      // Split the date and time components
      var _dateStr$split = dateStr.split(' '),
        _dateStr$split2 = _slicedToArray(_dateStr$split, 2),
        datePart = _dateStr$split2[0],
        timePart = _dateStr$split2[1];
      var _datePart$split$map = datePart.split('-').map(Number),
        _datePart$split$map2 = _slicedToArray(_datePart$split$map, 3),
        day = _datePart$split$map2[0],
        month = _datePart$split$map2[1],
        year = _datePart$split$map2[2];
      var _timePart$split$map = timePart.split(':').map(Number),
        _timePart$split$map2 = _slicedToArray(_timePart$split$map, 3),
        hours = _timePart$split$map2[0],
        minutes = _timePart$split$map2[1],
        seconds = _timePart$split$map2[2];

      // Create a new Date object using the extracted components
      var formattedDate = new Date(year, month - 1, day, hours, minutes, seconds);

      // Add the specified milliseconds to the Date object
      var newTimestamp = formattedDate.getTime() + milliseconds;

      // Return the new Date object
      var newDate = new Date(newTimestamp);

      // Format the new Date object to 'dd-MM-yyyy HH:mm:ss'
      var formattedNewDate = this.formatDate(newDate);
      return formattedNewDate;
    },
    formatDate: function formatDate(date) {
      var day = String(date.getDate()).padStart(2, '0');
      var month = String(date.getMonth() + 1).padStart(2, '0');
      var year = date.getFullYear();
      var hours = String(date.getHours()).padStart(2, '0');
      var minutes = String(date.getMinutes()).padStart(2, '0');
      var seconds = String(date.getSeconds()).padStart(2, '0');
      return "".concat(day, "-").concat(month, "-").concat(year, " ").concat(hours, ":").concat(minutes, ":").concat(seconds);
    },
    openamendementsmodal: function openamendementsmodal(userId) {
      this.getAmendementsByUser(userId);
      this.$modal.show('amendements');
    },
    getAmendementsByUser: function getAmendementsByUser(userId) {
      var _this$live_instance_t3,
        _this4 = this;
      this.amendementsUser = (_this$live_instance_t3 = this.live_instance_tracker) === null || _this$live_instance_t3 === void 0 ? void 0 : _this$live_instance_t3.tracker_logs.filter(function (log) {
        return log.who_currently_has_it.user_id === userId && _this4.amendementsListe.includes(log.why_has_it.event_name);
      });
      return this.amendementsUser;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/recouvrements/RecoveryOffview.vue?vue&type=template&id=39a2251a&scoped=true":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/recouvrements/RecoveryOffview.vue?vue&type=template&id=39a2251a&scoped=true ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm$dossier_credit, _vm$dossier_credit2, _vm$dossier_credit3, _vm$dossier_credit4;
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    attrs: {
      id: "printcaffil"
    }
  }, [_c("div", {
    staticClass: "justify-content-center"
  }, [_c("div", {
    staticClass: "memo"
  }, [_vm._v("\n            FICHE DE RECOUVREMENT- " + _vm._s((_vm$dossier_credit = _vm.dossier_credit) === null || _vm$dossier_credit === void 0 ? void 0 : _vm$dossier_credit.doss_name)), _c("br"), _vm._v("\n           " + _vm._s((_vm$dossier_credit2 = _vm.dossier_credit) === null || _vm$dossier_credit2 === void 0 || (_vm$dossier_credit2 = _vm$dossier_credit2[this.determineCredPubTables((_vm$dossier_credit3 = _vm.dossier_credit) === null || _vm$dossier_credit3 === void 0 ? void 0 : _vm$dossier_credit3.applied_templ_name)[0]]) === null || _vm$dossier_credit2 === void 0 ? void 0 : _vm$dossier_credit2["denomination_client"]) + "\n        ")]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_vm._l(_vm.components, function (component, index) {
    return _c("div", {
      key: index,
      staticClass: "col-12"
    }, [_c("keep-alive", [_c(component, {
      tag: "component",
      attrs: {
        dossier_credit: _vm.dossier_credit,
        dossier_credit_recovery: _vm.dossier_credit_recovery,
        dossiers_credit_files: _vm.dossiers_credit_files
      },
      on: {
        "hook:mounted": _vm.onComponentMounted
      }
    })], 1)], 1);
  }), _vm._v(" "), _c("StampRecovery", {
    attrs: {
      dossier_credit: _vm.dossier_credit,
      recouvrement_decision_logs: (_vm$dossier_credit4 = _vm.dossier_credit) === null || _vm$dossier_credit4 === void 0 ? void 0 : _vm$dossier_credit4.recouvrement_decision_logs
    }
  })], 2)])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/recouvrements/StampRecovery.vue?vue&type=template&id=4f54052c&scoped=true":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/recouvrements/StampRecovery.vue?vue&type=template&id=4f54052c&scoped=true ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm$recouvrement_fina, _vm$recouvrement_fina2, _vm$recouvrement_fina3, _vm$recouvrement_fina4, _vm$recouvrement_fina5, _vm$recouvrement_fina6, _vm$recouvrement_fina7, _vm$recouvrement_fina8, _vm$recouvrement_fina9, _vm$recouvrement_fina0;
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    attrs: {
      id: "print-stamps"
    }
  }, [_vm.recouvrement_decision_logs != undefined ? _c("div", {
    staticClass: "table-responsive"
  }, [_c("div", {
    staticClass: "head-analyse-financiere relative",
    staticStyle: {
      "text-align": "center"
    }
  }, [_vm._v("\n      PROCESSUS DE RECOUVREMENT "), _c("div", {
    staticClass: "icofont icofont-printer cursor-pointer absolute",
    staticStyle: {
      top: "25px",
      right: "30px"
    },
    attrs: {
      title: "Imprimer les dossiers"
    },
    on: {
      click: function click($event) {
        return _vm.launchPrintView("print-stamps");
      }
    }
  })]), _vm._v(" "), _c("hr", {
    staticStyle: {
      color: "#2980b9",
      "font-weight": "bold"
    }
  }), _vm._v(" "), _c("table", {
    staticClass: "table table-responsive"
  }, [_vm._m(0), _vm._v(" "), _vm.recouvrement_decision_logs != undefined ? _c("tbody", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.isOpen,
      expression: "isOpen"
    }]
  }, _vm._l(_vm.recouvrement_decision_logs, function (decision_log, index) {
    var _decision_log$recover, _decision_log$recover2, _decision_log$recover3, _decision_log$recover4, _decision_log$recover5, _decision_log$outcome;
    return _c("tr", {
      key: index,
      "class": {
        "specific-bg-color": index % 2 == 0
      }
    }, [_c("td", [_vm._v(_vm._s(decision_log.stage_label))]), _vm._v(" "), _c("td", [_c("span", [_c("span", {
      staticStyle: {
        "font-size": "13px"
      }
    }, [_c("b", [_vm._v("Durée de l'impayé")]), _vm._v(": " + _vm._s(decision_log === null || decision_log === void 0 || (_decision_log$recover = decision_log.recovery_log) === null || _decision_log$recover === void 0 ? void 0 : _decision_log$recover.par))]), _c("br"), _vm._v(" "), _c("span", {
      staticStyle: {
        "font-size": "13px"
      }
    }, [_c("b", [_vm._v("Date de la demande  de prêt ")]), _vm._v(": " + _vm._s(decision_log === null || decision_log === void 0 || (_decision_log$recover2 = decision_log.recovery_log) === null || _decision_log$recover2 === void 0 ? void 0 : _decision_log$recover2.date_demande))]), _c("br"), _vm._v(" "), _c("span", {
      staticStyle: {
        "font-size": "13px"
      }
    }, [_c("b", [_vm._v("Date de mise en place")]), _vm._v(": " + _vm._s(_vm._f("formatDate")(decision_log === null || decision_log === void 0 || (_decision_log$recover3 = decision_log.recovery_log) === null || _decision_log$recover3 === void 0 ? void 0 : _decision_log$recover3.date_mise_en_place)))]), _c("br"), _vm._v(" "), _c("span", {
      staticStyle: {
        "font-size": "13px"
      }
    }, [_c("b", [_vm._v("Date de la première échéance")]), _vm._v(": " + _vm._s(_vm._f("formatDate")(decision_log === null || decision_log === void 0 || (_decision_log$recover4 = decision_log.recovery_log) === null || _decision_log$recover4 === void 0 ? void 0 : _decision_log$recover4.date_1re_ech)))]), _c("br"), _vm._v(" "), _c("span", {
      staticStyle: {
        "font-size": "13px"
      }
    }, [_c("b", [_vm._v("Date de la fin de l'échéance")]), _vm._v(": " + _vm._s(_vm._f("formatDate")(decision_log === null || decision_log === void 0 || (_decision_log$recover5 = decision_log.recovery_log) === null || _decision_log$recover5 === void 0 ? void 0 : _decision_log$recover5.date_fin_echeance)))]), _c("br")]), _vm._v(" "), _c("div", [(decision_log === null || decision_log === void 0 ? void 0 : decision_log.outcome) == 8 ? _c("span", {
      staticClass: "stamp"
    }, [_vm._v("RESTRUCTURER")]) : (decision_log === null || decision_log === void 0 ? void 0 : decision_log.outcome) == 7 ? _c("span", {
      staticClass: "stamp is-approved"
    }, [_vm._v("RECOUVRER")]) : (decision_log === null || decision_log === void 0 ? void 0 : decision_log.outcome) == -2 ? _c("span", {
      staticClass: "stamp is-nope"
    }, [_vm._v("RADIER")]) : _c("span", {
      staticClass: "stamp avis-fav"
    }, [_vm._v("Dossier transmis")])]), _vm._v(" "), _c("br"), _vm._v(" "), _c("span", {
      staticStyle: {
        "font-size": "13px"
      }
    }, [_c("b", [_vm._v("Fait le")]), _vm._v("  :  "), _c("span", {
      staticStyle: {
        color: "#3498db"
      }
    }, [_vm._v(_vm._s(decision_log.outcome_date))])]), _c("br"), _vm._v(" "), _c("span", {
      staticStyle: {
        "font-size": "13px"
      }
    }, [_c("b", [_vm._v("Par")]), _vm._v("  : " + _vm._s(decision_log.giver_name) + "  ")]), _c("br")]), _vm._v(" "), _c("td", {
      staticClass: "overflow-wrap-anywhere"
    }, [_c("div", [_c("span", {
      attrs: {
        id: "tag_" + index
      }
    }, [_c("span", {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: false,
        expression: "false"
      }]
    }, [_vm._v(_vm._s(_vm.getObjectLogLimited(decision_log, "outcome_message")))])]), _vm._v(" "), _c("span", {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: false,
        expression: "false"
      }],
      staticClass: "show_before_printer"
    }, [_vm._v(_vm._s(decision_log["outcome_message"]))]), _vm._v(" "), _c("div", {
      staticClass: "hidden_before_printer"
    }, [_vm._v("\n            " + _vm._s((_decision_log$outcome = decision_log === null || decision_log === void 0 ? void 0 : decision_log.outcome_message_limited) !== null && _decision_log$outcome !== void 0 ? _decision_log$outcome : decision_log === null || decision_log === void 0 ? void 0 : decision_log.outcome_message) + "\n            "), decision_log !== null && decision_log !== void 0 && decision_log.show_button ? [![null, undefined].includes(decision_log === null || decision_log === void 0 ? void 0 : decision_log.outcome_message_limited) ? _c("button", {
      staticClass: "btn btn-sm border",
      staticStyle: {
        "box-shadow": "0 2px 4px 0 rgba(0, 0, 0, 0.08)"
      },
      attrs: {
        title: "VOIR PLUS"
      },
      on: {
        click: function click($event) {
          return _vm.updatedObjectLogLimited(decision_log, "outcome_message", _vm.MAX_COMMENT_VISIBLE);
        }
      }
    }, [_c("i", {
      staticClass: "icofont-plus"
    }), _vm._v(" VOIR PLUS")]) : _c("button", {
      staticClass: "btn btn-sm border",
      staticStyle: {
        "box-shadow": "0 2px 4px 0 rgba(0, 0, 0, 0.08)"
      },
      attrs: {
        title: "MASQUER"
      },
      on: {
        click: function click($event) {
          return _vm.updatedObjectLogLimited(decision_log, "outcome_message", 0, "tag_" + index);
        }
      }
    }, [_vm._v("MASQUER")])] : _vm._e()], 2)])])]);
  }), 0) : _vm._e()]), _vm._v(" "), _c("br"), _vm._v(" "), ((_vm$recouvrement_fina = _vm.recouvrement_final_outcome) === null || _vm$recouvrement_fina === void 0 ? void 0 : _vm$recouvrement_fina.outcome) != 0 ? _c("div", {
    "class": {
      "box restructure": ((_vm$recouvrement_fina2 = _vm.recouvrement_final_outcome) === null || _vm$recouvrement_fina2 === void 0 ? void 0 : _vm$recouvrement_fina2.outcome) === 8,
      "box radie": ((_vm$recouvrement_fina3 = _vm.recouvrement_final_outcome) === null || _vm$recouvrement_fina3 === void 0 ? void 0 : _vm$recouvrement_fina3.outcome) === -2,
      "box recouvrer": ((_vm$recouvrement_fina4 = _vm.recouvrement_final_outcome) === null || _vm$recouvrement_fina4 === void 0 ? void 0 : _vm$recouvrement_fina4.outcome) === 7
    }
  }, [_c("div", {
    staticClass: "container-fluid tb"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-sm-6 col-md-6 col-lg-6"
  }, [((_vm$recouvrement_fina5 = _vm.recouvrement_final_outcome) === null || _vm$recouvrement_fina5 === void 0 ? void 0 : _vm$recouvrement_fina5.outcome) === 7 ? _c("span", {
    staticClass: "stamp avis-fav"
  }, [_vm._v("Crédit Recouvrer")]) : _vm._e(), _vm._v(" "), ((_vm$recouvrement_fina6 = _vm.recouvrement_final_outcome) === null || _vm$recouvrement_fina6 === void 0 ? void 0 : _vm$recouvrement_fina6.outcome) === -2 ? _c("span", {
    staticClass: "stamp avis-nonfav"
  }, [_vm._v("Crédit Radier")]) : _vm._e(), _vm._v(" "), ((_vm$recouvrement_fina7 = _vm.recouvrement_final_outcome) === null || _vm$recouvrement_fina7 === void 0 ? void 0 : _vm$recouvrement_fina7.outcome) === 8 ? _c("span", {
    staticClass: "stamp is-approved"
  }, [_vm._v("Crédit Restructurer")]) : _vm._e(), _vm._v(" "), _c("br")]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-6 col-md-6 col-lg-6"
  }, [_c("span", {
    staticStyle: {
      "font-size": "13px"
    }
  }, [_c("b", [_vm._v("Fait le")]), _vm._v("  :  "), _c("span", {
    staticStyle: {
      color: "#3498db"
    }
  }, [_vm._v(_vm._s((_vm$recouvrement_fina8 = _vm.recouvrement_final_outcome) === null || _vm$recouvrement_fina8 === void 0 ? void 0 : _vm$recouvrement_fina8.outcome_date))])]), _c("br"), _vm._v(" "), _c("span", {
    staticStyle: {
      "font-size": "13px"
    }
  }, [_c("b", [_vm._v("Par")]), _vm._v("  : " + _vm._s((_vm$recouvrement_fina9 = _vm.recouvrement_final_outcome) === null || _vm$recouvrement_fina9 === void 0 ? void 0 : _vm$recouvrement_fina9.giver_name) + " | "), _c("span", {
    staticStyle: {
      color: "#34495e"
    }
  }, [_c("b", [_vm._v(_vm._s((_vm$recouvrement_fina0 = _vm.recouvrement_final_outcome) === null || _vm$recouvrement_fina0 === void 0 ? void 0 : _vm$recouvrement_fina0.giver_role))])])]), _vm._v(" "), _c("br"), _vm._v(" "), _c("br")])])])]) : _vm._e()]) : _vm._e()]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", {
    staticStyle: {
      "background-color": "#34495e",
      color: "white",
      "font-size": "15px"
    }
  }, [_c("th", {
    staticClass: "col-md-6"
  }, [_vm._v("  Etape")]), _vm._v(" "), _c("th", {
    staticClass: "col-md-6"
  }, [_vm._v("Décision")]), _vm._v(" "), _c("th", {
    staticClass: "col-md-4"
  }, [_vm._v("Avis / Commentaire / Recommandations")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/recouvrements/RecoveryOffview.vue?vue&type=style&index=0&id=39a2251a&lang=css&scoped=true":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/recouvrements/RecoveryOffview.vue?vue&type=style&index=0&id=39a2251a&lang=css&scoped=true ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.bg-grey[data-v-39a2251a] {\r\n    background-color: #f5f5f5;\r\n    padding: 10px;\r\n    border-radius: 10px;\n}\nth[data-v-39a2251a] {\r\n    background: #f4f3f3 !important;\n}\nli table[data-v-39a2251a] {\r\n    margin-top: 10px;\n}\ntd ul[data-v-39a2251a] {\r\n    padding: 20px\n}\ntd ul li[data-v-39a2251a] {\r\n    list-style-type: \"\\27A2\";\r\n    margin: 10px 0;\r\n    padding-left: 10px;\n}\ntd[data-v-39a2251a] {\r\n    vertical-align: middle;\r\n    font-size: 15px;\n}\ntd>*[data-v-39a2251a] {\r\n    vertical-align: middle;\n}\n.larger-td-height[data-v-39a2251a] {\r\n    height: 100px;\n}\n.memo[data-v-39a2251a] {\r\n    margin-top: 10px;\r\n    padding: 20px 10px;\r\n    border: 2px solid #fff;\r\n    font-weight: 550;\r\n    font-size: 16px;\r\n    text-align: center;\r\n    text-transform: uppercase;\r\n    background-color: #dc0030;\r\n    color: #fff;\n}\r\n\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/recouvrements/StampRecovery.vue?vue&type=style&index=0&id=4f54052c&lang=css&scoped=true":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/recouvrements/StampRecovery.vue?vue&type=style&index=0&id=4f54052c&lang=css&scoped=true ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.head-analyse-financiere[data-v-4f54052c]{\r\n  margin-top: 10px;\r\n  padding: 16px;\r\n  border: 2px solid ;\r\n  font-weight: bold;\r\n  text-align: center;\r\n  text-transform: uppercase;\r\n  background: rgb(215, 210, 210);\n}\n.stamp[data-v-4f54052c] {\r\n  transform: rotate(-4deg);\r\n\tcolor:  #3498db;\r\n\tfont-size: 1.5rem;\r\n\tfont-weight: 700;\r\n\tborder: 0.25rem solid #3498db;\r\n\tdisplay: inline-block;\r\n\tpadding: 0.25rem 1rem;\r\n  margin: 1rem auto;\r\n\ttext-transform: uppercase;\r\n  text-align: center;\r\n\tborder-radius: 1rem;\r\n\tfont-family: 'Courier';\r\n\t-webkit-mask-image: url('/images/grunge.png');\r\n  -webkit-mask-size: 944px 604px;\r\n  mix-blend-mode: multiply;\r\n  /* float: right; */\r\n  /*\r\n  position: relative; */\r\n  /* top: 20vh;\r\n  right: -25vh; */\n}\n.is-nope[data-v-4f54052c] {\r\n  color: #D23;\r\n  border: 0.5rem double #D23;\r\n  transform: rotate(3deg);\r\n\t-webkit-mask-position: 2rem 3rem;\r\n  font-size: 1.5rem;\n}\n.is-approved[data-v-4f54052c] {\r\n\tcolor: #0A9928;\r\n\tborder: 0.5rem solid #0A9928;\r\n\t-webkit-mask-position: 13rem 6rem;\r\n\ttransform: rotate(-4deg);\r\n  border-radius: 0;\n}\n.avis-fav[data-v-4f54052c] {\r\n\tcolor: #2ecc71;\r\n\tborder: 1rem double #2ecc71;\r\n\ttransform: rotate(1deg);\r\n  font-size: 1.2rem;\r\n  font-family: \"Open sans\", Helvetica, Arial, sans-serif;\r\n  border-radius: 0;\r\n  padding: 0.5rem;\n}\n.avis-nonfav[data-v-4f54052c] {\r\n\tcolor: #e74c3c;\r\n\tborder: 1rem double #e74c3c;\r\n\ttransform: rotate(1deg);\r\n  font-size: 1.2rem;\r\n  font-family: \"Open sans\", Helvetica, Arial, sans-serif;\r\n  border-radius: 0;\r\n  padding: 0.5rem;\n}\n.arbitrage[data-v-4f54052c]{\r\n  color: #c1ff09;\r\n\tborder: 0.5rem solid #d5ff18;\r\n\t-webkit-mask-position: 13rem 6rem;\r\n\ttransform: rotate(-4deg);\r\n  border-radius: 0;\n}\n.tb[data-v-4f54052c]{\r\n   background-color: #ecf0f1;\r\n   padding:10px;\r\n   border-radius: 3px;\r\n   /* box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22); */\r\n   box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;\n}\n.is-nope2[data-v-4f54052c] {\r\n  color: #e67e22;\r\n  border: 0.5rem double #e67e22;\r\n  transform: rotate(3deg);\r\n\t-webkit-mask-position: 2rem 3rem;\r\n  font-size: 1.5rem;\n}\n.is-nope3[data-v-4f54052c] {\r\n  color: #8e44ad;\r\n  border: 0.5rem double #8e44ad;\r\n  transform: rotate(3deg);\r\n\t-webkit-mask-position: 2rem 3rem;\r\n  font-size: 1.5rem;\n}\n.is-nope4[data-v-4f54052c] {\r\n  color: #a7d403;\r\n  border: 0.5rem double #a7d403;\r\n  transform: rotate(3deg);\r\n\t-webkit-mask-position: 2rem 3rem;\r\n  font-size: 1.5rem;\n}\ndiv.box.restructure[data-v-4f54052c]:after\r\n{\r\n    content:\"CREDIT RESTRUCTURE\";\r\n    position:absolute;\r\n    top:30px;\r\n    left:303px;\r\n    z-index:1;\r\n    font-family:Arial,sans-serif; /* Safari old -45*/ /* Firefox old -45*/ /* IE old -45*/ /* Opera old -45*/\r\n    transform: rotate(0deg);\r\n    font-size:30px;\r\n    color:#3498db;\r\n    background:#fff;\r\n    border:solid 2px #3498db;\r\n    padding:3px;\r\n    border-radius:5px;\r\n    zoom:1;\r\n    filter:alpha(opacity=20);\r\n    opacity:0.3;\r\n    -webkit-text-shadow: 0 0 5px #3498db;\r\n    text-shadow: 0 0 5px #3498db;\r\n    box-shadow: 0 0 5px #3498db;\n}\ndiv.box.radie[data-v-4f54052c]:after\r\n{\r\n    content:\"CREDIT RADIE\";\r\n    position:absolute;\r\n    top:71px;\r\n    left:-12px;\r\n    z-index:1;\r\n    font-family:Arial,sans-serif; /* Safari */ /* Firefox */ /* IE */ /* Opera */\r\n    transform: rotate(-45deg);\r\n    font-size:30px;\r\n    color:#3498db;\r\n    background:#fff;\r\n    border:solid 2px #3498db;\r\n    padding:3px;\r\n    border-radius:5px;\r\n    zoom:1;\r\n    filter:alpha(opacity=20);\r\n    opacity:0.3;\r\n    -webkit-text-shadow: 0 0 5px #3498db;\r\n    text-shadow: 0 0 5px #3498db;\r\n    box-shadow: 0 0 5px #3498db;\n}\ndiv.box.recouvrerR[data-v-4f54052c]:after\r\n{\r\n    content:\"CREDIT RECOUVRE\";\r\n    position:absolute;\r\n    top:30px;\r\n    left:303px;\r\n    z-index:1;\r\n    font-family:Arial,sans-serif; /* Safari old -45*/ /* Firefox old -45*/ /* IE old -45*/ /* Opera old -45*/\r\n    transform: rotate(0deg);\r\n    font-size:30px;\r\n    color:#3498db;\r\n    background:#fff;\r\n    border:solid 2px #3498db;\r\n    padding:3px;\r\n    border-radius:5px;\r\n    zoom:1;\r\n    filter:alpha(opacity=20);\r\n    opacity:0.3;\r\n    -webkit-text-shadow: 0 0 5px #3498db;\r\n    text-shadow: 0 0 5px #3498db;\r\n    box-shadow: 0 0 5px #3498db;\n}\ndiv.box.recouvrer[data-v-4f54052c]:after\r\n{\r\n    content:\"CREDIT RECOUVRE\";\r\n    position:absolute;\r\n    top:85px;\r\n    left:-18px;\r\n    z-index:1;\r\n    font-family:Arial,sans-serif; /* Safari */ /* Firefox */ /* IE */ /* Opera */\r\n    transform: rotate(-45deg);\r\n    font-size:25px;\r\n    color:#3498db;\r\n    background:#fff;\r\n    border:solid 2px #3498db;\r\n    padding:3px;\r\n    border-radius:5px;\r\n    zoom:1;\r\n    filter:alpha(opacity=20);\r\n    opacity:0.3;\r\n    -webkit-text-shadow: 0 0 5px #3498db;\r\n    text-shadow: 0 0 5px #3498db;\r\n    box-shadow: 0 0 5px #3498db;\n}\n.rotingtxt[data-v-4f54052c]{\r\n\ttransform: rotate(331deg);\r\n\tfont-size: 6em;\r\n\tcolor: rgba(255, 5, 5, 0.17);\r\n\tposition: absolute;\r\n\tfont-family: \"Open sans\", Helvetica, Arial, sans-serif;\r\n\ttext-transform:uppercase;\r\n\tpadding-left: 6%;\n}\n.rotingtxt2[data-v-4f54052c]{\r\n\t/* transform: rotate(331deg); */\r\n\tfont-size: 0.8em;\r\n\tcolor:#9b59b6;\r\n\t/* position: absolute; */\r\n\tfont-family: \"Open sans\", Helvetica, Arial, sans-serif;\r\n\ttext-transform:uppercase;\r\n\t/* padding-left: 2%; */\n}\ntd.overflow-wrap-anywhere div[data-v-4f54052c] {\r\n  overflow-wrap: anywhere;\n}\n.specific-bg-color[data-v-4f54052c] {\r\n  background: #f2f6fc;\n}\n.stamp-gray[data-v-4f54052c] {\r\n  color: gray!important;\r\n\tborder: 0.25rem solid gray!important;\n}\n.accordion-button[data-v-4f54052c] {\r\n  background-color: #007BFF;\r\n  color: white;\r\n  cursor: pointer;\r\n  padding: 10px 20px;\r\n  border: none;\r\n  border-radius: 5px;\r\n  outline: none;\r\n  transition: background-color 0.3s;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\n}\n.accordion-button[data-v-4f54052c]:hover {\r\n  background-color: #0056b3;\n}\n.chevron[data-v-4f54052c] {\r\n  /* font-size: 18px; */\r\n  transition: transform 0.3s;\n}\n.chevron.open[data-v-4f54052c] {\r\n  transform: rotate(180deg);\n}\n.accordion-content[data-v-4f54052c] {\r\n  background-color: #f1f1f1;\r\n  padding: 15px;\r\n  margin-top: 10px;\r\n  border: 1px solid #ddd;\r\n  border-radius: 5px;\r\n  overflow: hidden;\n}\r\n\r\n/* Transitions */\n.accordion-enter-active[data-v-4f54052c], .accordion-leave-active[data-v-4f54052c] {\r\n  transition: all 0.3s ease;\n}\n.accordion-enter[data-v-4f54052c], .accordion-leave-to[data-v-4f54052c] {\r\n  height: 0;\r\n  padding: 0 15px;\r\n  opacity: 0;\n}\r\n\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/recouvrements/RecoveryOffview.vue?vue&type=style&index=0&id=39a2251a&lang=css&scoped=true":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/recouvrements/RecoveryOffview.vue?vue&type=style&index=0&id=39a2251a&lang=css&scoped=true ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RecoveryOffview_vue_vue_type_style_index_0_id_39a2251a_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RecoveryOffview.vue?vue&type=style&index=0&id=39a2251a&lang=css&scoped=true */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/recouvrements/RecoveryOffview.vue?vue&type=style&index=0&id=39a2251a&lang=css&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RecoveryOffview_vue_vue_type_style_index_0_id_39a2251a_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RecoveryOffview_vue_vue_type_style_index_0_id_39a2251a_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/recouvrements/StampRecovery.vue?vue&type=style&index=0&id=4f54052c&lang=css&scoped=true":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/recouvrements/StampRecovery.vue?vue&type=style&index=0&id=4f54052c&lang=css&scoped=true ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_StampRecovery_vue_vue_type_style_index_0_id_4f54052c_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./StampRecovery.vue?vue&type=style&index=0&id=4f54052c&lang=css&scoped=true */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/recouvrements/StampRecovery.vue?vue&type=style&index=0&id=4f54052c&lang=css&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_StampRecovery_vue_vue_type_style_index_0_id_4f54052c_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_StampRecovery_vue_vue_type_style_index_0_id_4f54052c_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/offview/microfinance/cofina/recoveryiq lazy recursive ^\\.\\/.*\\.vue$":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/components/offview/microfinance/cofina/recoveryiq/ lazy ^\.\/.*\.vue$ namespace object ***!
  \*************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./FR0.vue": [
		"./resources/js/components/offview/microfinance/cofina/recoveryiq/FR0.vue",
		"resources_js_components_offview_microfinance_cofina_recoveryiq_FR0_vue"
	],
	"./FR1.vue": [
		"./resources/js/components/offview/microfinance/cofina/recoveryiq/FR1.vue",
		"resources_js_components_offview_microfinance_cofina_recoveryiq_FR1_vue"
	],
	"./FR10.vue": [
		"./resources/js/components/offview/microfinance/cofina/recoveryiq/FR10.vue",
		"resources_js_components_offview_microfinance_cofina_recoveryiq_FR10_vue"
	],
	"./FR11.vue": [
		"./resources/js/components/offview/microfinance/cofina/recoveryiq/FR11.vue",
		"resources_js_components_offview_microfinance_cofina_recoveryiq_FR11_vue"
	],
	"./FR12.vue": [
		"./resources/js/components/offview/microfinance/cofina/recoveryiq/FR12.vue",
		"resources_js_components_offview_microfinance_cofina_recoveryiq_FR12_vue"
	],
	"./FR13.vue": [
		"./resources/js/components/offview/microfinance/cofina/recoveryiq/FR13.vue",
		"resources_js_components_offview_microfinance_cofina_recoveryiq_FR13_vue"
	],
	"./FR14.vue": [
		"./resources/js/components/offview/microfinance/cofina/recoveryiq/FR14.vue",
		"resources_js_components_offview_microfinance_cofina_recoveryiq_FR14_vue"
	],
	"./FR15.vue": [
		"./resources/js/components/offview/microfinance/cofina/recoveryiq/FR15.vue",
		"resources_js_components_offview_microfinance_cofina_recoveryiq_FR15_vue"
	],
	"./FR16.vue": [
		"./resources/js/components/offview/microfinance/cofina/recoveryiq/FR16.vue",
		"resources_js_components_offview_microfinance_cofina_recoveryiq_FR16_vue"
	],
	"./FR17.vue": [
		"./resources/js/components/offview/microfinance/cofina/recoveryiq/FR17.vue",
		"resources_js_components_offview_microfinance_cofina_recoveryiq_FR17_vue"
	],
	"./FR18.vue": [
		"./resources/js/components/offview/microfinance/cofina/recoveryiq/FR18.vue",
		"resources_js_components_offview_microfinance_cofina_recoveryiq_FR18_vue"
	],
	"./FR19.vue": [
		"./resources/js/components/offview/microfinance/cofina/recoveryiq/FR19.vue",
		"resources_js_components_offview_microfinance_cofina_recoveryiq_FR19_vue"
	],
	"./FR2.vue": [
		"./resources/js/components/offview/microfinance/cofina/recoveryiq/FR2.vue",
		"resources_js_components_offview_microfinance_cofina_recoveryiq_FR2_vue"
	],
	"./FR20.vue": [
		"./resources/js/components/offview/microfinance/cofina/recoveryiq/FR20.vue",
		"resources_js_components_offview_microfinance_cofina_recoveryiq_FR20_vue"
	],
	"./FR21.vue": [
		"./resources/js/components/offview/microfinance/cofina/recoveryiq/FR21.vue",
		"resources_js_components_offview_microfinance_cofina_recoveryiq_FR21_vue"
	],
	"./FR22.vue": [
		"./resources/js/components/offview/microfinance/cofina/recoveryiq/FR22.vue",
		"resources_js_components_offview_microfinance_cofina_recoveryiq_FR22_vue"
	],
	"./FR23.vue": [
		"./resources/js/components/offview/microfinance/cofina/recoveryiq/FR23.vue",
		"resources_js_components_offview_microfinance_cofina_recoveryiq_FR23_vue"
	],
	"./FR24.vue": [
		"./resources/js/components/offview/microfinance/cofina/recoveryiq/FR24.vue",
		"resources_js_components_offview_microfinance_cofina_recoveryiq_FR24_vue"
	],
	"./FR25.vue": [
		"./resources/js/components/offview/microfinance/cofina/recoveryiq/FR25.vue",
		"resources_js_components_offview_microfinance_cofina_recoveryiq_FR25_vue"
	],
	"./FR26.vue": [
		"./resources/js/components/offview/microfinance/cofina/recoveryiq/FR26.vue",
		"resources_js_components_offview_microfinance_cofina_recoveryiq_FR26_vue"
	],
	"./FR27.vue": [
		"./resources/js/components/offview/microfinance/cofina/recoveryiq/FR27.vue",
		"resources_js_components_offview_microfinance_cofina_recoveryiq_FR27_vue"
	],
	"./FR28.vue": [
		"./resources/js/components/offview/microfinance/cofina/recoveryiq/FR28.vue",
		"resources_js_components_offview_microfinance_cofina_recoveryiq_FR28_vue"
	],
	"./FR29.vue": [
		"./resources/js/components/offview/microfinance/cofina/recoveryiq/FR29.vue",
		"resources_js_components_offview_microfinance_cofina_recoveryiq_FR29_vue"
	],
	"./FR3.vue": [
		"./resources/js/components/offview/microfinance/cofina/recoveryiq/FR3.vue",
		"resources_js_components_offview_microfinance_cofina_recoveryiq_FR3_vue"
	],
	"./FR30.vue": [
		"./resources/js/components/offview/microfinance/cofina/recoveryiq/FR30.vue",
		"resources_js_components_offview_microfinance_cofina_recoveryiq_FR30_vue"
	],
	"./FR31.vue": [
		"./resources/js/components/offview/microfinance/cofina/recoveryiq/FR31.vue",
		"resources_js_components_offview_microfinance_cofina_recoveryiq_FR31_vue"
	],
	"./FR32.vue": [
		"./resources/js/components/offview/microfinance/cofina/recoveryiq/FR32.vue",
		"resources_js_components_offview_microfinance_cofina_recoveryiq_FR32_vue"
	],
	"./FR33.vue": [
		"./resources/js/components/offview/microfinance/cofina/recoveryiq/FR33.vue",
		"resources_js_components_offview_microfinance_cofina_recoveryiq_FR33_vue"
	],
	"./FR34.vue": [
		"./resources/js/components/offview/microfinance/cofina/recoveryiq/FR34.vue",
		"resources_js_components_offview_microfinance_cofina_recoveryiq_FR34_vue"
	],
	"./FR35.vue": [
		"./resources/js/components/offview/microfinance/cofina/recoveryiq/FR35.vue",
		"resources_js_components_offview_microfinance_cofina_recoveryiq_FR35_vue"
	],
	"./FR4.vue": [
		"./resources/js/components/offview/microfinance/cofina/recoveryiq/FR4.vue",
		"resources_js_components_offview_microfinance_cofina_recoveryiq_FR4_vue"
	],
	"./FR5.vue": [
		"./resources/js/components/offview/microfinance/cofina/recoveryiq/FR5.vue",
		"resources_js_components_offview_microfinance_cofina_recoveryiq_FR5_vue"
	],
	"./FR6.vue": [
		"./resources/js/components/offview/microfinance/cofina/recoveryiq/FR6.vue",
		"resources_js_components_offview_microfinance_cofina_recoveryiq_FR6_vue"
	],
	"./FR7.vue": [
		"./resources/js/components/offview/microfinance/cofina/recoveryiq/FR7.vue",
		"resources_js_components_offview_microfinance_cofina_recoveryiq_FR7_vue"
	],
	"./FR8.vue": [
		"./resources/js/components/offview/microfinance/cofina/recoveryiq/FR8.vue",
		"resources_js_components_offview_microfinance_cofina_recoveryiq_FR8_vue"
	],
	"./FR9.vue": [
		"./resources/js/components/offview/microfinance/cofina/recoveryiq/FR9.vue",
		"resources_js_components_offview_microfinance_cofina_recoveryiq_FR9_vue"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = "./resources/js/components/offview/microfinance/cofina/recoveryiq lazy recursive ^\\.\\/.*\\.vue$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./resources/js/components/shared/recouvrements/RecoveryOffview.vue":
/*!**************************************************************************!*\
  !*** ./resources/js/components/shared/recouvrements/RecoveryOffview.vue ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _RecoveryOffview_vue_vue_type_template_id_39a2251a_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RecoveryOffview.vue?vue&type=template&id=39a2251a&scoped=true */ "./resources/js/components/shared/recouvrements/RecoveryOffview.vue?vue&type=template&id=39a2251a&scoped=true");
/* harmony import */ var _RecoveryOffview_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RecoveryOffview.vue?vue&type=script&lang=js */ "./resources/js/components/shared/recouvrements/RecoveryOffview.vue?vue&type=script&lang=js");
/* harmony import */ var _RecoveryOffview_vue_vue_type_style_index_0_id_39a2251a_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RecoveryOffview.vue?vue&type=style&index=0&id=39a2251a&lang=css&scoped=true */ "./resources/js/components/shared/recouvrements/RecoveryOffview.vue?vue&type=style&index=0&id=39a2251a&lang=css&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _RecoveryOffview_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _RecoveryOffview_vue_vue_type_template_id_39a2251a_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _RecoveryOffview_vue_vue_type_template_id_39a2251a_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "39a2251a",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/shared/recouvrements/RecoveryOffview.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/shared/recouvrements/RecoveryOffview.vue?vue&type=script&lang=js":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/shared/recouvrements/RecoveryOffview.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RecoveryOffview_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RecoveryOffview.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/recouvrements/RecoveryOffview.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RecoveryOffview_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/shared/recouvrements/RecoveryOffview.vue?vue&type=style&index=0&id=39a2251a&lang=css&scoped=true":
/*!**********************************************************************************************************************************!*\
  !*** ./resources/js/components/shared/recouvrements/RecoveryOffview.vue?vue&type=style&index=0&id=39a2251a&lang=css&scoped=true ***!
  \**********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RecoveryOffview_vue_vue_type_style_index_0_id_39a2251a_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RecoveryOffview.vue?vue&type=style&index=0&id=39a2251a&lang=css&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/recouvrements/RecoveryOffview.vue?vue&type=style&index=0&id=39a2251a&lang=css&scoped=true");


/***/ }),

/***/ "./resources/js/components/shared/recouvrements/RecoveryOffview.vue?vue&type=template&id=39a2251a&scoped=true":
/*!********************************************************************************************************************!*\
  !*** ./resources/js/components/shared/recouvrements/RecoveryOffview.vue?vue&type=template&id=39a2251a&scoped=true ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RecoveryOffview_vue_vue_type_template_id_39a2251a_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RecoveryOffview_vue_vue_type_template_id_39a2251a_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RecoveryOffview_vue_vue_type_template_id_39a2251a_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RecoveryOffview.vue?vue&type=template&id=39a2251a&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/recouvrements/RecoveryOffview.vue?vue&type=template&id=39a2251a&scoped=true");


/***/ }),

/***/ "./resources/js/components/shared/recouvrements/StampRecovery.vue":
/*!************************************************************************!*\
  !*** ./resources/js/components/shared/recouvrements/StampRecovery.vue ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _StampRecovery_vue_vue_type_template_id_4f54052c_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StampRecovery.vue?vue&type=template&id=4f54052c&scoped=true */ "./resources/js/components/shared/recouvrements/StampRecovery.vue?vue&type=template&id=4f54052c&scoped=true");
/* harmony import */ var _StampRecovery_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StampRecovery.vue?vue&type=script&lang=js */ "./resources/js/components/shared/recouvrements/StampRecovery.vue?vue&type=script&lang=js");
/* harmony import */ var _StampRecovery_vue_vue_type_style_index_0_id_4f54052c_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./StampRecovery.vue?vue&type=style&index=0&id=4f54052c&lang=css&scoped=true */ "./resources/js/components/shared/recouvrements/StampRecovery.vue?vue&type=style&index=0&id=4f54052c&lang=css&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _StampRecovery_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _StampRecovery_vue_vue_type_template_id_4f54052c_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _StampRecovery_vue_vue_type_template_id_4f54052c_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "4f54052c",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/shared/recouvrements/StampRecovery.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/shared/recouvrements/StampRecovery.vue?vue&type=script&lang=js":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/shared/recouvrements/StampRecovery.vue?vue&type=script&lang=js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StampRecovery_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./StampRecovery.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/recouvrements/StampRecovery.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StampRecovery_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/shared/recouvrements/StampRecovery.vue?vue&type=style&index=0&id=4f54052c&lang=css&scoped=true":
/*!********************************************************************************************************************************!*\
  !*** ./resources/js/components/shared/recouvrements/StampRecovery.vue?vue&type=style&index=0&id=4f54052c&lang=css&scoped=true ***!
  \********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_StampRecovery_vue_vue_type_style_index_0_id_4f54052c_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./StampRecovery.vue?vue&type=style&index=0&id=4f54052c&lang=css&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/recouvrements/StampRecovery.vue?vue&type=style&index=0&id=4f54052c&lang=css&scoped=true");


/***/ }),

/***/ "./resources/js/components/shared/recouvrements/StampRecovery.vue?vue&type=template&id=4f54052c&scoped=true":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/components/shared/recouvrements/StampRecovery.vue?vue&type=template&id=4f54052c&scoped=true ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_StampRecovery_vue_vue_type_template_id_4f54052c_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_StampRecovery_vue_vue_type_template_id_4f54052c_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_StampRecovery_vue_vue_type_template_id_4f54052c_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./StampRecovery.vue?vue&type=template&id=4f54052c&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/recouvrements/StampRecovery.vue?vue&type=template&id=4f54052c&scoped=true");


/***/ })

}]);