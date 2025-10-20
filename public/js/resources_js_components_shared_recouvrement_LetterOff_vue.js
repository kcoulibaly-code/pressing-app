"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_shared_recouvrement_LetterOff_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/recouvrement/LetterOff.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/recouvrement/LetterOff.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_recouvremnt_letter_maping_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/recouvremnt_letter_maping.js */ "./resources/js/services/recouvremnt_letter_maping.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "LetterOff",
  props: {
    historique: Object,
    authcheckUsr: Object,
    dossier_credit: Object,
    guarantees: {
      type: Object,
      required: false,
      "default": function _default() {
        return {};
      }
    }
  },
  data: function data() {
    return {
      // loadingOffView: true
    };
  },
  mounted: function mounted() {},
  computed: {
    historique_lettre: function historique_lettre() {
      var _this$dossier_credit;
      var historique_lettre = (_this$dossier_credit = this.dossier_credit) === null || _this$dossier_credit === void 0 ? void 0 : _this$dossier_credit.historique_lettre;
      return historique_lettre;
    },
    getFiliale: function getFiliale() {
      return this.getFilialeByCode(this.authcheckUsr.filiale);
    },
    getPaysInfo: function getPaysInfo() {
      var _this$historique;
      var numeroDossier = (_this$historique = this.historique) === null || _this$historique === void 0 || (_this$historique = _this$historique.letter_data) === null || _this$historique === void 0 || (_this$historique = _this$historique.sender_info) === null || _this$historique === void 0 ? void 0 : _this$historique.filiale;
      var mapping = {
        "CFN CIV": {
          "lib": "la Compagnie Financière Africaine (COFINA CIV)",
          "code": "COFINA CIV",
          "root": "CFNCIV",
          "indicatif": "+225",
          "capitale": "Abidjan"
        },
        "CFN TG": {
          "lib": "la Compagnie Financière Africaine (COFINA TG)",
          "code": "COFINA TG",
          "root": "CFNTG",
          "indicatif": "+228",
          "capitale": "Lomé"
        },
        "CFN ML": {
          "lib": "la Compagnie Financière Africaine (COFINA ML)",
          "code": "COFINA ML",
          "root": "CFNML",
          "indicatif": "+223",
          "capitale": "Bamako"
        },
        "CFN CG": {
          "lib": "la Compagnie Financière Africaine (COFINA CG)",
          "code": "COFINA CG",
          "root": "CFNCG",
          "indicatif": "+242",
          "capitale": "Brazzaville"
        },
        "CFN GB": {
          "lib": "la Compagnie Financière Africaine (COFINA GA)",
          "code": "COFINA GA",
          "root": "CFNGB",
          "indicatif": "+241",
          "capitale": "Libreville"
        },
        "FINL": {
          "lib": "FINELLE",
          "code": "FINL",
          "root": "FINL",
          "indicatif": "+225",
          "capitale": "Abidjan"
        }
      };
      for (var key in mapping) {
        if (numeroDossier.includes(key)) {
          return mapping[key];
        }
      }
      return mapping["CFN CIV"]; // Valeur par défaut (Côte d'Ivoire)
    },
    agenceRoot: function agenceRoot() {
      var _this$dossier_credit2;
      return ((_this$dossier_credit2 = this.dossier_credit) === null || _this$dossier_credit2 === void 0 || (_this$dossier_credit2 = _this$dossier_credit2.caf_recorded_file) === null || _this$dossier_credit2 === void 0 ? void 0 : _this$dossier_credit2.codeagence) || '';
    },
    tamponDynamique: function tamponDynamique() {
      var _this$getPaysInfo, _this$historique2;
      var paysRoot = ((_this$getPaysInfo = this.getPaysInfo) === null || _this$getPaysInfo === void 0 ? void 0 : _this$getPaysInfo.root) || 'CFNCIV';
      var agenceRoot = this.agenceRoot;
      var envKey = "MIX_VUE_APP_TAMPON_AGENCE_".concat(paysRoot);
      var envVariables = _services_recouvremnt_letter_maping_js__WEBPACK_IMPORTED_MODULE_0__.AGENCY_TAMPONS_ENV;
      var envValue = envVariables["MIX_VUE_APP_TAMPON_AGENCE_".concat(paysRoot)] || 'false';
      var isAgenceAutorisee = envValue === 'true' || envValue === true;
      console.log('Debug:', {
        paysRoot: paysRoot,
        agenceRoot: agenceRoot,
        envKey: envKey,
        envValue: envValue,
        isAgenceAutorisee: isAgenceAutorisee
      });
      var isLetterAllowedForAgencyStamp = _services_recouvremnt_letter_maping_js__WEBPACK_IMPORTED_MODULE_0__.ALLOWED_LETTERS_FOR_AGENCY_STAMP.includes((_this$historique2 = this.historique) === null || _this$historique2 === void 0 || (_this$historique2 = _this$historique2.letter_data) === null || _this$historique2 === void 0 ? void 0 : _this$historique2.letter_slug);
      if (isAgenceAutorisee && agenceRoot && isLetterAllowedForAgencyStamp) {
        return "/tampons/COFINA/".concat(paysRoot, "/").concat(agenceRoot, "/tampon.png");
      }
      return "/tampons/COFINA/".concat(paysRoot, "/tampon.png");
    }
  },
  methods: _defineProperty({
    returnLeterTitle: function returnLeterTitle(slug) {
      var letre = _services_recouvremnt_letter_maping_js__WEBPACK_IMPORTED_MODULE_0__.LETTERS_MAPING.find(function (letter) {
        return letter.slug == slug;
      });
      return letre.title;
    },
    arrondirMontantEntier: function arrondirMontantEntier(montant) {
      return Math.floor(montant);
    },
    convertir_date_echeance: function convertir_date_echeance(dateStr) {
      var date = new Date(dateStr);
      var day = String(date.getDate()).padStart(2, '0');
      var month = String(date.getMonth() + 1).padStart(2, '0'); // Les mois commencent à 0
      var year = date.getFullYear();
      return "".concat(day, "/").concat(month, "/").concat(year);
    }
  }, "arrondirMontantEntier", function arrondirMontantEntier(montant) {
    return Math.floor(montant);
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/recouvrement/LetterOff.vue?vue&type=template&id=2ad1cdba&scoped=true":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/recouvrement/LetterOff.vue?vue&type=template&id=2ad1cdba&scoped=true ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm$historique, _vm$getPaysInfo, _vm$formatDate, _vm$historique2, _vm$historique$client, _vm$historique3, _vm$historique$client2, _vm$historique4, _vm$historique5, _vm$historique$info_d, _vm$historique6, _vm$historique7, _vm$historique8, _vm$historique9, _vm$historique$letter, _vm$historique0, _vm$historique1, _vm$convertir_date_ec, _vm$historique10, _vm$convertir_date_ec2, _vm$historique11, _vm$historique12, _vm$historique13, _vm$historique14, _vm$historique$info_a, _vm$historique15, _vm$historique16, _vm$getPaysInfo2, _vm$formatDate2, _vm$historique17, _vm$historique$client3, _vm$historique18, _vm$historique$client4, _vm$historique19, _vm$historique$client5, _vm$historique20, _vm$historique$info_d2, _vm$historique21, _vm$historique$client6, _vm$historique22, _vm$getPaysInfo3, _vm$historique$letter2, _vm$historique23, _vm$arrondirMontantEn, _vm$historique24, _vm$historique$client7, _vm$historique25, _vm$historique26, _vm$historique$info_a2, _vm$historique27, _vm$historique28, _vm$getPaysInfo4, _vm$historique29, _vm$historique30, _vm$historique31, _vm$historique32, _vm$historique33, _vm$historique34, _vm$historique35, _vm$historique36, _vm$authcheckUsr, _vm$getPaysInfo5, _vm$historique37, _vm$getPaysInfo6, _vm$historique38, _vm$historique39, _vm$historique40, _vm$formatDate3, _vm$historique41, _vm$historique$client8, _vm$historique42, _vm$historique$client9, _vm$historique43, _vm$historique$client0, _vm$historique44, _vm$convertir_date_ec3, _vm$historique45, _vm$historique$client1, _vm$historique46, _vm$historique47, _vm$historique$client10, _vm$historique48, _vm$getPaysInfo7, _vm$historique49, _vm$guarantees$nom_pr, _vm$guarantees, _vm$historique50, _vm$historique$info_a3, _vm$historique51, _vm$historique52, _vm$getPaysInfo8, _vm$historique53, _vm$guarantees2, _vm$guarantees3, _vm$historique54, _vm$guarantees4, _vm$historique55, _vm$convertir_date_ec4, _vm$historique56, _vm$historique57, _vm$historique58, _vm$historique$letter3, _vm$historique59, _vm$historique$letter4, _vm$historique60, _vm$historique61, _vm$historique62, _vm$guarantees$nom_pr2, _vm$guarantees5, _vm$historique63, _vm$historique$info_a4, _vm$historique64, _vm$historique65, _vm$getPaysInfo9, _vm$historique66, _vm$guarantees6, _vm$guarantees7, _vm$historique67, _vm$historique68, _vm$convertir_date_ec5, _vm$historique69, _vm$getPaysInfo0, _vm$historique$client11, _vm$historique70, _vm$historique71, _vm$historique$messag, _vm$historique72, _vm$historique$messag2, _vm$historique73, _vm$historique$messag3, _vm$historique74, _vm$historique75, _vm$historique$messag4, _vm$historique76, _vm$guarantees$nom_pr3, _vm$guarantees8, _vm$getPaysInfo1, _vm$historique77, _vm$historique78;
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [((_vm$historique = _vm.historique) === null || _vm$historique === void 0 || (_vm$historique = _vm$historique.letter_data) === null || _vm$historique === void 0 ? void 0 : _vm$historique.letter_slug) === "PREMIERE_LETTRE_DE_RELANCE" ? _c("div", {
    staticClass: "container"
  }, [_c("div", {
    staticClass: "header"
  }, [_c("p", [_vm._v(_vm._s((_vm$getPaysInfo = _vm.getPaysInfo) === null || _vm$getPaysInfo === void 0 ? void 0 : _vm$getPaysInfo.capitale) + " le, " + _vm._s((_vm$formatDate = _vm.formatDate((_vm$historique2 = _vm.historique) === null || _vm$historique2 === void 0 ? void 0 : _vm$historique2.date)) !== null && _vm$formatDate !== void 0 ? _vm$formatDate : ""))]), _vm._v(" "), _c("p", [_vm._v("\n                Nom client : " + _vm._s((_vm$historique$client = (_vm$historique3 = _vm.historique) === null || _vm$historique3 === void 0 || (_vm$historique3 = _vm$historique3.client_info) === null || _vm$historique3 === void 0 ? void 0 : _vm$historique3.name) !== null && _vm$historique$client !== void 0 ? _vm$historique$client : "") + "."), _c("br"), _vm._v("\n                (Tel) : " + _vm._s((_vm$historique$client2 = (_vm$historique4 = _vm.historique) === null || _vm$historique4 === void 0 || (_vm$historique4 = _vm$historique4.client_info) === null || _vm$historique4 === void 0 ? void 0 : _vm$historique4.phone) !== null && _vm$historique$client2 !== void 0 ? _vm$historique$client2 : "")), _c("br"), _vm._v("\n                Adresse : " + _vm._s((_vm$historique5 = _vm.historique) === null || _vm$historique5 === void 0 || (_vm$historique5 = _vm$historique5.client_info) === null || _vm$historique5 === void 0 ? void 0 : _vm$historique5.adresse) + "\n            ")])]), _vm._v(" "), _c("div", {
    staticClass: "content"
  }, [_c("h2", [_vm._v("URGENCE SIGNALEE")]), _vm._v(" "), _c("p", [_vm._v("Par lettre au porteur avec accusé de réception")]), _vm._v(" "), _c("p", [_vm._v("\n                N/Réf : " + _vm._s((_vm$historique$info_d = (_vm$historique6 = _vm.historique) === null || _vm$historique6 === void 0 ? void 0 : _vm$historique6.info_dossier) !== null && _vm$historique$info_d !== void 0 ? _vm$historique$info_d : "")), _c("br")]), _vm._v(" "), _vm._m(0), _vm._v(" "), _c("br"), _vm._v(" "), _c("p", [_vm._v("\n                Monsieur /Madame " + _vm._s((_vm$historique7 = _vm.historique) === null || _vm$historique7 === void 0 || (_vm$historique7 = _vm$historique7.client_info) === null || _vm$historique7 === void 0 ? void 0 : _vm$historique7.name) + "\n            ")]), _vm._v(" "), _c("p", [_vm._v("\n                Nous vous rappelons que vous avez sollicité et obtenu de " + _vm._s(_vm.getFiliale) + ", un\n                prêt à hauteur de\n                " + _vm._s(this.convertirEnLettres(_vm.arrondirMontantEntier((_vm$historique8 = _vm.historique) === null || _vm$historique8 === void 0 || (_vm$historique8 = _vm$historique8.letter_data) === null || _vm$historique8 === void 0 || (_vm$historique8 = _vm$historique8.decharge_data) === null || _vm$historique8 === void 0 ? void 0 : _vm$historique8.production_en_volume))) + "\n                (" + _vm._s(_vm._f("formatNumber")(_vm.arrondirMontantEntier((_vm$historique9 = _vm.historique) === null || _vm$historique9 === void 0 || (_vm$historique9 = _vm$historique9.letter_data) === null || _vm$historique9 === void 0 || (_vm$historique9 = _vm$historique9.decharge_data) === null || _vm$historique9 === void 0 ? void 0 : _vm$historique9.production_en_volume))) + ")\n                F/CFA, remboursable en\n                " + _vm._s((_vm$historique$letter = (_vm$historique0 = _vm.historique) === null || _vm$historique0 === void 0 || (_vm$historique0 = _vm$historique0.letter_data) === null || _vm$historique0 === void 0 || (_vm$historique0 = _vm$historique0.decharge_data) === null || _vm$historique0 === void 0 ? void 0 : _vm$historique0.duree_initiale) !== null && _vm$historique$letter !== void 0 ? _vm$historique$letter : "") + " mois échéances\n                mensuelles de\n                " + _vm._s(_vm._f("formatNumber")(_vm.arrondirMontantEntier((_vm$historique1 = _vm.historique) === null || _vm$historique1 === void 0 || (_vm$historique1 = _vm$historique1.letter_data) === null || _vm$historique1 === void 0 || (_vm$historique1 = _vm$historique1.decharge_data) === null || _vm$historique1 === void 0 ? void 0 : _vm$historique1.montant_echeance))) + "\n                F/CFA chacune, allant du\n                " + _vm._s((_vm$convertir_date_ec = _vm.convertir_date_echeance((_vm$historique10 = _vm.historique) === null || _vm$historique10 === void 0 || (_vm$historique10 = _vm$historique10.letter_data) === null || _vm$historique10 === void 0 || (_vm$historique10 = _vm$historique10.decharge_data) === null || _vm$historique10 === void 0 ? void 0 : _vm$historique10.date_premiere_echeance)) !== null && _vm$convertir_date_ec !== void 0 ? _vm$convertir_date_ec : "") + " au\n                " + _vm._s((_vm$convertir_date_ec2 = _vm.convertir_date_echeance((_vm$historique11 = _vm.historique) === null || _vm$historique11 === void 0 || (_vm$historique11 = _vm$historique11.letter_data) === null || _vm$historique11 === void 0 || (_vm$historique11 = _vm$historique11.decharge_data) === null || _vm$historique11 === void 0 ? void 0 : _vm$historique11.date_fin_echeance)) !== null && _vm$convertir_date_ec2 !== void 0 ? _vm$convertir_date_ec2 : "") + "\n            ")]), _vm._v(" "), _c("p", [_vm._v("\n                Cependant, nous constatons que l’échéance mensuelle fixée\n                n’a pas été respectée de sorte que vous restez devoir ce\n                jour à notre institution la somme de\n                "), _c("b", [_vm._v(_vm._s(_vm._f("formatNumber")(_vm.arrondirMontantEntier((_vm$historique12 = _vm.historique) === null || _vm$historique12 === void 0 || (_vm$historique12 = _vm$historique12.letter_data) === null || _vm$historique12 === void 0 || (_vm$historique12 = _vm$historique12.decharge_data) === null || _vm$historique12 === void 0 ? void 0 : _vm$historique12.encours_impaye))) + "\n                    F/CFA (sans les pénalités)")]), _vm._v("\n                à titre d’échéance échue impayée sous réserve des intérêts\n                et pénalités de retard qui continuent à courir.\n            ")]), _vm._v(" "), _c("p", [_vm._v("\n                Par conséquent, nous vous invitons à bien vouloir\n                régulariser votre situation débitrice dans nos livres ce,\n                dans un délai maximum de trois (03) jours à compter de la\n                réception des présentes.\n            ")]), _vm._v(" "), _c("p", [_vm._v("\n                Vous remerciant par avance pour votre règlement diligent,\n                recevez " + _vm._s((_vm$historique13 = _vm.historique) === null || _vm$historique13 === void 0 || (_vm$historique13 = _vm$historique13.client_info) === null || _vm$historique13 === void 0 ? void 0 : _vm$historique13.name) + " nos sincères salutations.\n            ")])]), _vm._v(" "), _c("div", {
    staticClass: "signature"
  }, [_c("p", [_vm._v("\n                " + _vm._s((_vm$historique14 = _vm.historique) === null || _vm$historique14 === void 0 || (_vm$historique14 = _vm$historique14.info_agence) === null || _vm$historique14 === void 0 || (_vm$historique14 = _vm$historique14.actors_recovery) === null || _vm$historique14 === void 0 || (_vm$historique14 = _vm$historique14.chef_agence) === null || _vm$historique14 === void 0 ? void 0 : _vm$historique14.name) + "\n                (" + _vm._s((_vm$historique$info_a = (_vm$historique15 = _vm.historique) === null || _vm$historique15 === void 0 || (_vm$historique15 = _vm$historique15.info_agence) === null || _vm$historique15 === void 0 || (_vm$historique15 = _vm$historique15.actors_recovery) === null || _vm$historique15 === void 0 || (_vm$historique15 = _vm$historique15.chef_agence) === null || _vm$historique15 === void 0 ? void 0 : _vm$historique15.display_name) !== null && _vm$historique$info_a !== void 0 ? _vm$historique$info_a : "") + ")\n            ")])]), _vm._v(" "), _c("div", {
    staticClass: "tampon"
  }, [_c("p", [_c("img", {
    attrs: {
      src: _vm.tamponDynamique,
      alt: "Tampon ".concat(_vm.getPaysInfo.code)
    }
  })])])]) : _vm._e(), _vm._v(" "), ((_vm$historique16 = _vm.historique) === null || _vm$historique16 === void 0 || (_vm$historique16 = _vm$historique16.letter_data) === null || _vm$historique16 === void 0 ? void 0 : _vm$historique16.letter_slug) === "DEUXIEME_LETTRE_DE_RELANCE" ? _c("div", {
    staticClass: "container"
  }, [_c("div", {
    staticClass: "header"
  }, [_c("p", [_vm._v(_vm._s((_vm$getPaysInfo2 = _vm.getPaysInfo) === null || _vm$getPaysInfo2 === void 0 ? void 0 : _vm$getPaysInfo2.capitale) + " le, " + _vm._s((_vm$formatDate2 = _vm.formatDate((_vm$historique17 = _vm.historique) === null || _vm$historique17 === void 0 ? void 0 : _vm$historique17.date)) !== null && _vm$formatDate2 !== void 0 ? _vm$formatDate2 : ""))]), _vm._v(" "), _c("p", [_vm._v("\n                Nom client : " + _vm._s((_vm$historique$client3 = (_vm$historique18 = _vm.historique) === null || _vm$historique18 === void 0 || (_vm$historique18 = _vm$historique18.client_info) === null || _vm$historique18 === void 0 ? void 0 : _vm$historique18.name) !== null && _vm$historique$client3 !== void 0 ? _vm$historique$client3 : "") + "."), _c("br"), _vm._v("\n                (Tel) : " + _vm._s((_vm$historique$client4 = (_vm$historique19 = _vm.historique) === null || _vm$historique19 === void 0 || (_vm$historique19 = _vm$historique19.client_info) === null || _vm$historique19 === void 0 ? void 0 : _vm$historique19.phone) !== null && _vm$historique$client4 !== void 0 ? _vm$historique$client4 : "")), _c("br"), _vm._v("\n                Adresse : " + _vm._s((_vm$historique$client5 = (_vm$historique20 = _vm.historique) === null || _vm$historique20 === void 0 || (_vm$historique20 = _vm$historique20.client_info) === null || _vm$historique20 === void 0 ? void 0 : _vm$historique20.adresse) !== null && _vm$historique$client5 !== void 0 ? _vm$historique$client5 : "") + "\n            ")])]), _vm._v(" "), _c("div", {
    staticClass: "content"
  }, [_c("h2", [_vm._v("URGENCE SIGNALEE")]), _vm._v(" "), _c("p", [_vm._v("Par lettre au porteur avec accusé de réception")]), _vm._v(" "), _c("p", [_vm._v("\n                N/Réf : " + _vm._s((_vm$historique$info_d2 = (_vm$historique21 = _vm.historique) === null || _vm$historique21 === void 0 ? void 0 : _vm$historique21.info_dossier) !== null && _vm$historique$info_d2 !== void 0 ? _vm$historique$info_d2 : "")), _c("br"), _vm._v("\n                V/Réf : A nous communiquer\n            ")]), _vm._v(" "), _c("p", [_vm._v("Monsieur/Madame " + _vm._s((_vm$historique$client6 = (_vm$historique22 = _vm.historique) === null || _vm$historique22 === void 0 || (_vm$historique22 = _vm$historique22.client_info) === null || _vm$historique22 === void 0 ? void 0 : _vm$historique22.name) !== null && _vm$historique$client6 !== void 0 ? _vm$historique$client6 : ""))]), _vm._v(" "), _c("p", [_vm._v("\n                Nous avons fait tenir il y a quelques jours de cela une\n                lettre de relance pour parvenir au règlement de votre\n                échéance impayée au regard de l’échéancier convenu dans le\n                cadre de ma convention de prêt avec " + _vm._s((_vm$getPaysInfo3 = _vm.getPaysInfo) === null || _vm$getPaysInfo3 === void 0 ? void 0 : _vm$getPaysInfo3.lib) + ".\n            ")]), _vm._v(" "), _c("p", [_vm._v("\n                Cependant, malgré cette invitation à un règlement amiable et\n                diligent, nous constatons que vous n’avez pas effectué le\n                paiement attendu pour la régularisation de votre situation\n                débitrice dans nos livres, de sorte que vous restez toujours\n                nous devoir.\n            ")]), _vm._v(" "), _c("p", [_vm._v("\n                Par conséquent, nous vous invitons à bien vouloir verser sur\n                votre compte numéro°\n                "), _c("b", [_vm._v(_vm._s((_vm$historique$letter2 = (_vm$historique23 = _vm.historique) === null || _vm$historique23 === void 0 || (_vm$historique23 = _vm$historique23.letter_data) === null || _vm$historique23 === void 0 || (_vm$historique23 = _vm$historique23.decharge_data) === null || _vm$historique23 === void 0 ? void 0 : _vm$historique23.numero_compte) !== null && _vm$historique$letter2 !== void 0 ? _vm$historique$letter2 : ""))]), _vm._v("\n                la somme de\n                "), _c("b", [_vm._v(_vm._s((_vm$arrondirMontantEn = _vm.arrondirMontantEntier((_vm$historique24 = _vm.historique) === null || _vm$historique24 === void 0 || (_vm$historique24 = _vm$historique24.letter_data) === null || _vm$historique24 === void 0 || (_vm$historique24 = _vm$historique24.decharge_data) === null || _vm$historique24 === void 0 ? void 0 : _vm$historique24.encours_impaye)) !== null && _vm$arrondirMontantEn !== void 0 ? _vm$arrondirMontantEn : "") + "\n                    FCFA\n                ")]), _vm._v("\n                représentant le montant de votre échéance échue impayée à ce\n                jour sans préjudice des intérêts et pénalités qui continuent\n                à courir et ce dans un délai maximum de huit (08) jours à\n                compter de la réception des présentes.\n            ")]), _vm._v(" "), _c("p", [_vm._v("\n                En cas d’inexécution de votre part dans le délai ci-dessus\n                indiqué, nous nous verrons obligés de constater le défaut de\n                paiement et de poursuivre par toute voie de droit et tous\n                frais à votre charge le recouvrement de la totalité de notre\n                créance.\n            ")]), _vm._v(" "), _c("p", [_vm._v("\n                Dans l’attente d’une prompte réaction, nous vous prions de\n                recevoir Monsieur/Madame\n                " + _vm._s((_vm$historique$client7 = (_vm$historique25 = _vm.historique) === null || _vm$historique25 === void 0 || (_vm$historique25 = _vm$historique25.client_info) === null || _vm$historique25 === void 0 ? void 0 : _vm$historique25.name) !== null && _vm$historique$client7 !== void 0 ? _vm$historique$client7 : "") + " nos sincères\n                salutations.\n            ")])]), _vm._v(" "), _c("div", {
    staticClass: "signature"
  }, [_c("p", [_vm._v("\n                " + _vm._s((_vm$historique26 = _vm.historique) === null || _vm$historique26 === void 0 || (_vm$historique26 = _vm$historique26.info_agence) === null || _vm$historique26 === void 0 || (_vm$historique26 = _vm$historique26.actors_recovery) === null || _vm$historique26 === void 0 || (_vm$historique26 = _vm$historique26.chef_agence) === null || _vm$historique26 === void 0 ? void 0 : _vm$historique26.name) + "\n                (" + _vm._s((_vm$historique$info_a2 = (_vm$historique27 = _vm.historique) === null || _vm$historique27 === void 0 || (_vm$historique27 = _vm$historique27.info_agence) === null || _vm$historique27 === void 0 || (_vm$historique27 = _vm$historique27.actors_recovery) === null || _vm$historique27 === void 0 || (_vm$historique27 = _vm$historique27.chef_agence) === null || _vm$historique27 === void 0 ? void 0 : _vm$historique27.display_name) !== null && _vm$historique$info_a2 !== void 0 ? _vm$historique$info_a2 : "") + ")\n            ")])]), _vm._v(" "), _c("div", {
    staticClass: "tampon"
  }, [_c("p", [_c("img", {
    attrs: {
      src: _vm.tamponDynamique,
      alt: "Tampon ".concat(_vm.getPaysInfo.code)
    }
  })])])]) : _vm._e(), _vm._v(" "), ((_vm$historique28 = _vm.historique) === null || _vm$historique28 === void 0 || (_vm$historique28 = _vm$historique28.letter_data) === null || _vm$historique28 === void 0 ? void 0 : _vm$historique28.letter_slug) === "TROISIEME_LETTRE_DE_RELANCE_CDR" ? _c("div", {
    staticClass: "container"
  }, [_c("div", {
    staticClass: "header"
  }, [_c("p", [_vm._v(_vm._s((_vm$getPaysInfo4 = _vm.getPaysInfo) === null || _vm$getPaysInfo4 === void 0 ? void 0 : _vm$getPaysInfo4.capitale) + " le, " + _vm._s(_vm.formatDate((_vm$historique29 = _vm.historique) === null || _vm$historique29 === void 0 ? void 0 : _vm$historique29.date)))]), _vm._v(" "), _c("p", [_vm._v("\n                Nom client: " + _vm._s((_vm$historique30 = _vm.historique) === null || _vm$historique30 === void 0 || (_vm$historique30 = _vm$historique30.client_info) === null || _vm$historique30 === void 0 ? void 0 : _vm$historique30.name) + "."), _c("br"), _vm._v("\n                (Tel) : " + _vm._s((_vm$historique31 = _vm.historique) === null || _vm$historique31 === void 0 || (_vm$historique31 = _vm$historique31.client_info) === null || _vm$historique31 === void 0 ? void 0 : _vm$historique31.phone)), _c("br"), _vm._v("\n                Adresse:" + _vm._s((_vm$historique32 = _vm.historique) === null || _vm$historique32 === void 0 || (_vm$historique32 = _vm$historique32.client_info) === null || _vm$historique32 === void 0 ? void 0 : _vm$historique32.adresse) + "\n            ")])]), _vm._v(" "), _c("div", {
    staticClass: "content"
  }, [_c("h2", [_vm._v("URGENCE SIGNALEE")]), _vm._v(" "), _c("p", [_vm._v("Par lettre au porteur avec accusé de réception")]), _vm._v(" "), _c("p", [_vm._v("\n                A l’attention particulière de M./Mme\n                " + _vm._s((_vm$historique33 = _vm.historique) === null || _vm$historique33 === void 0 || (_vm$historique33 = _vm$historique33.client_info) === null || _vm$historique33 === void 0 ? void 0 : _vm$historique33.name) + ".\n            ")]), _vm._v(" "), _c("p", [_vm._v("\n                N/Réf : " + _vm._s((_vm$historique34 = _vm.historique) === null || _vm$historique34 === void 0 ? void 0 : _vm$historique34.info_dossier)), _c("br")]), _vm._v(" "), _vm._m(1), _vm._v(" "), _c("br"), _vm._v(" "), _c("p", [_vm._v("\n                Monsieur/Madame " + _vm._s((_vm$historique35 = _vm.historique) === null || _vm$historique35 === void 0 || (_vm$historique35 = _vm$historique35.client_info) === null || _vm$historique35 === void 0 ? void 0 : _vm$historique35.name) + "\n            ")]), _vm._v(" "), _c("p", [_vm._v("\n                Nous revenons vers vous relativement à la situation très\n                préoccupante de votre compte dans nos livres due aux\n                échéances impayées sur le prêt qui vous a été accordé.\n            ")]), _vm._v(" "), _c("p", [_vm._v("\n                Malheureusement, cette situation reste sans solutions malgré\n                les appels et courriers de relance de votre gestionnaire en\n                Agence.\n            ")]), _vm._v(" "), _c("p", [_vm._v("\n                Pour rappel, sauf erreur ou omission, vous restez à ce jour\n                nous devoir la somme de\n                "), _c("b", [_vm._v(_vm._s(_vm._f("formatNumber")(_vm.arrondirMontantEntier((_vm$historique36 = _vm.historique) === null || _vm$historique36 === void 0 || (_vm$historique36 = _vm$historique36.letter_data) === null || _vm$historique36 === void 0 || (_vm$historique36 = _vm$historique36.decharge_data) === null || _vm$historique36 === void 0 ? void 0 : _vm$historique36.encours_impaye))) + "\n                    francs CFA (sans les pénalités) .")]), _vm._v("\n                en principal et accessoires sous réserve des échéances à\n                échoir ainsi que des intérêts et pénalités de retard à\n                venir.\n            ")]), _vm._v(" "), _c("p", [_vm._v("\n                À cet effet, après un retard de paiement de plus de\n                "), _c("b", [_vm._v("huit (08) jours")]), _vm._v(", nous vous informons par la présente\n                que la gestion de votre compte a été transférée au\n                Département Recouvrement et sera prise en charge désormais\n                par Madame /Monsieur "), _c("b", [_vm._v(_vm._s((_vm$authcheckUsr = _vm.authcheckUsr) === null || _vm$authcheckUsr === void 0 ? void 0 : _vm$authcheckUsr.name))]), _vm._v(" Chargé(e) de\n                Recouvrement que vous pourrez contacter au "), _c("b", [_vm._v(" " + _vm._s((_vm$getPaysInfo5 = _vm.getPaysInfo) === null || _vm$getPaysInfo5 === void 0 ? void 0 : _vm$getPaysInfo5.indicatif) + " " + _vm._s((_vm$historique37 = _vm.historique) === null || _vm$historique37 === void 0 || (_vm$historique37 = _vm$historique37.letter_data) === null || _vm$historique37 === void 0 || (_vm$historique37 = _vm$historique37.sender_info) === null || _vm$historique37 === void 0 ? void 0 : _vm$historique37.contact_whatsap))])]), _vm._v(" "), _c("p", [_vm._v("\n                En raison de ce qui précède, nous vous sommons de procéder à\n                la régularisation de la situation débitrice de votre compte\n                dans le délai de huit (8) jours et ce dès réception de la\n                présente.\n            ")]), _vm._v(" "), _c("p", [_vm._v("\n                Passé ce délai sans réaction de votre part, nous procèderons\n                sans autre avis à la transmission de votre dossier au\n                service contentieux afin d’engager la réalisation immédiate\n                de toutes les garanties offertes à notre profit ainsi que\n                des poursuites judiciaires pour recouvrer la totalité de\n                notre créance.\n            ")]), _vm._v(" "), _c("p", [_vm._v("\n                Dans l’attente d’un amiable et prompt règlement de votre\n                part,\n            ")]), _vm._v(" "), _c("p", [_vm._v("Recevez Monsieur nos meilleures salutations.")])]), _vm._v(" "), _c("div", {
    staticClass: "signature"
  }, [((_vm$getPaysInfo6 = _vm.getPaysInfo) === null || _vm$getPaysInfo6 === void 0 ? void 0 : _vm$getPaysInfo6.root) == "CFNTG" ? _c("span", [_c("p", [_vm._v("KOFFI DOSSOU (Responsable recouvrement)")])]) : _c("span", [_c("p", [_vm._v("\n                    " + _vm._s((_vm$historique38 = _vm.historique) === null || _vm$historique38 === void 0 || (_vm$historique38 = _vm$historique38.info_agence) === null || _vm$historique38 === void 0 || (_vm$historique38 = _vm$historique38.actors_recovery) === null || _vm$historique38 === void 0 || (_vm$historique38 = _vm$historique38.recovery_team1) === null || _vm$historique38 === void 0 || (_vm$historique38 = _vm$historique38.responsable) === null || _vm$historique38 === void 0 ? void 0 : _vm$historique38.name) + "\n                    (" + _vm._s((_vm$historique39 = _vm.historique) === null || _vm$historique39 === void 0 || (_vm$historique39 = _vm$historique39.info_agence) === null || _vm$historique39 === void 0 || (_vm$historique39 = _vm$historique39.actors_recovery) === null || _vm$historique39 === void 0 || (_vm$historique39 = _vm$historique39.recovery_team1) === null || _vm$historique39 === void 0 || (_vm$historique39 = _vm$historique39.responsable) === null || _vm$historique39 === void 0 ? void 0 : _vm$historique39.display_name) + ")\n                ")])])]), _vm._v(" "), _c("div", {
    staticClass: "tampon"
  }, [_c("p", [_c("img", {
    attrs: {
      src: _vm.tamponDynamique,
      alt: "Tampon ".concat(_vm.getPaysInfo.code)
    }
  })])])]) : _vm._e(), _vm._v(" "), ((_vm$historique40 = _vm.historique) === null || _vm$historique40 === void 0 || (_vm$historique40 = _vm$historique40.letter_data) === null || _vm$historique40 === void 0 ? void 0 : _vm$historique40.letter_slug) === "LETTRE_INFORMATION_A_LA_CAUTION_AGENCE" ? _c("div", {
    staticClass: "container"
  }, [_c("div", {
    staticClass: "header"
  }, [_c("p", [_vm._v("Fait le " + _vm._s((_vm$formatDate3 = _vm.formatDate((_vm$historique41 = _vm.historique) === null || _vm$historique41 === void 0 ? void 0 : _vm$historique41.date)) !== null && _vm$formatDate3 !== void 0 ? _vm$formatDate3 : ""))]), _vm._v(" "), _c("p", [_vm._v("\n                M/Mme " + _vm._s((_vm$historique$client8 = (_vm$historique42 = _vm.historique) === null || _vm$historique42 === void 0 || (_vm$historique42 = _vm$historique42.client_info) === null || _vm$historique42 === void 0 ? void 0 : _vm$historique42.name) !== null && _vm$historique$client8 !== void 0 ? _vm$historique$client8 : "") + "."), _c("br"), _vm._v("\n                (Tel) : " + _vm._s((_vm$historique$client9 = (_vm$historique43 = _vm.historique) === null || _vm$historique43 === void 0 || (_vm$historique43 = _vm$historique43.client_info) === null || _vm$historique43 === void 0 ? void 0 : _vm$historique43.phone) !== null && _vm$historique$client9 !== void 0 ? _vm$historique$client9 : "")), _c("br"), _vm._v("\n                Adresse : " + _vm._s((_vm$historique$client0 = (_vm$historique44 = _vm.historique) === null || _vm$historique44 === void 0 || (_vm$historique44 = _vm$historique44.client_info) === null || _vm$historique44 === void 0 ? void 0 : _vm$historique44.adresse) !== null && _vm$historique$client0 !== void 0 ? _vm$historique$client0 : "") + "\n            ")])]), _vm._v(" "), _c("div", {
    staticClass: "content"
  }, [_c("p", [_vm._v("Mr /Mme")]), _vm._v(" "), _c("p", [_vm._v("\n                Par contrat en date du " + _vm._s((_vm$convertir_date_ec3 = _vm.convertir_date_echeance((_vm$historique45 = _vm.historique) === null || _vm$historique45 === void 0 || (_vm$historique45 = _vm$historique45.letter_data) === null || _vm$historique45 === void 0 || (_vm$historique45 = _vm$historique45.decharge_data) === null || _vm$historique45 === void 0 ? void 0 : _vm$historique45.date_mise_en_place)) !== null && _vm$convertir_date_ec3 !== void 0 ? _vm$convertir_date_ec3 : "") + ",\n                vous vous êtes portée caution personnelle et solidaire en\n                faveur de notre établissement en garantie des engagements de\n                "), _c("b", [_vm._v(_vm._s((_vm$historique$client1 = (_vm$historique46 = _vm.historique) === null || _vm$historique46 === void 0 || (_vm$historique46 = _vm$historique46.client_info) === null || _vm$historique46 === void 0 ? void 0 : _vm$historique46.name) !== null && _vm$historique$client1 !== void 0 ? _vm$historique$client1 : ""))]), _vm._v(" à hauteur du montant\n                de\n                "), _c("b", [_vm._v("\n                    " + _vm._s(_vm._f("formatNumber")(_vm.arrondirMontantEntier((_vm$historique47 = _vm.historique) === null || _vm$historique47 === void 0 || (_vm$historique47 = _vm$historique47.letter_data) === null || _vm$historique47 === void 0 || (_vm$historique47 = _vm$historique47.decharge_data) === null || _vm$historique47 === void 0 ? void 0 : _vm$historique47.production_en_volume))) + "\n                    francs CFA")]), _vm._v(".\n            ")]), _vm._v(" "), _c("p", [_vm._v("\n                En cette qualité de caution, nous venons par la présente\n                vous informer de la défaillance du client\n                "), _c("b", [_vm._v(_vm._s((_vm$historique$client10 = (_vm$historique48 = _vm.historique) === null || _vm$historique48 === void 0 || (_vm$historique48 = _vm$historique48.client_info) === null || _vm$historique48 === void 0 ? void 0 : _vm$historique48.name) !== null && _vm$historique$client10 !== void 0 ? _vm$historique$client10 : ""))]), _vm._v(" qui n’a pas respecté\n                ses engagements contractuels et reste donc devoir à ce jour\n                à " + _vm._s((_vm$getPaysInfo7 = _vm.getPaysInfo) === null || _vm$getPaysInfo7 === void 0 ? void 0 : _vm$getPaysInfo7.lib) + " la somme de\n                "), _c("b", [_vm._v("\n                    " + _vm._s(_vm._f("formatNumber")(_vm.arrondirMontantEntier((_vm$historique49 = _vm.historique) === null || _vm$historique49 === void 0 || (_vm$historique49 = _vm$historique49.letter_data) === null || _vm$historique49 === void 0 || (_vm$historique49 = _vm$historique49.decharge_data) === null || _vm$historique49 === void 0 ? void 0 : _vm$historique49.encours_impaye))) + "\n                    F/CFA")]), _vm._v(".\n            ")]), _vm._v(" "), _c("p", [_vm._v("\n                Nous vous demandons par conséquent de prendre les meilleures\n                dispositions afin que le montant susvisé soit payé dans les\n                huit (08) jours de la réception de la présente.\n            ")]), _vm._v(" "), _c("p", [_vm._v("\n                Passé ce délai sans réaction de votre part, nous procèderons\n                au recouvrement de notre créance par tout moyen légal.\n            ")]), _vm._v(" "), _c("p", [_vm._v("\n                Dans l’attente, nous vous prions d’agréer Monsieur/Madame\n                "), _c("b", [_vm._v(_vm._s((_vm$guarantees$nom_pr = (_vm$guarantees = _vm.guarantees) === null || _vm$guarantees === void 0 ? void 0 : _vm$guarantees.nom_prenoms) !== null && _vm$guarantees$nom_pr !== void 0 ? _vm$guarantees$nom_pr : ""))]), _vm._v(" nos sincères\n                salutations.\n            ")])]), _vm._v(" "), _c("div", {
    staticClass: "signature"
  }, [_c("p", [_vm._v("\n\n                " + _vm._s((_vm$historique50 = _vm.historique) === null || _vm$historique50 === void 0 || (_vm$historique50 = _vm$historique50.info_agence) === null || _vm$historique50 === void 0 || (_vm$historique50 = _vm$historique50.actors_recovery) === null || _vm$historique50 === void 0 || (_vm$historique50 = _vm$historique50.chef_agence) === null || _vm$historique50 === void 0 ? void 0 : _vm$historique50.name) + "\n                (" + _vm._s((_vm$historique$info_a3 = (_vm$historique51 = _vm.historique) === null || _vm$historique51 === void 0 || (_vm$historique51 = _vm$historique51.info_agence) === null || _vm$historique51 === void 0 || (_vm$historique51 = _vm$historique51.actors_recovery) === null || _vm$historique51 === void 0 || (_vm$historique51 = _vm$historique51.chef_agence) === null || _vm$historique51 === void 0 ? void 0 : _vm$historique51.display_name) !== null && _vm$historique$info_a3 !== void 0 ? _vm$historique$info_a3 : "") + ")\n            ")]), _vm._v(" "), _c("div", {
    staticClass: "tampon"
  }, [_c("p", [_c("img", {
    attrs: {
      src: _vm.tamponDynamique,
      alt: "Tampon ".concat(_vm.getPaysInfo.code)
    }
  })])])])]) : _vm._e(), _vm._v(" "), ((_vm$historique52 = _vm.historique) === null || _vm$historique52 === void 0 || (_vm$historique52 = _vm$historique52.letter_data) === null || _vm$historique52 === void 0 ? void 0 : _vm$historique52.letter_slug) === "LETTRE_DE_PRESENTATION_DE_BIEN_GAGE" ? _c("div", {
    staticClass: "container"
  }, [_c("div", {
    staticClass: "header"
  }, [_c("p", [_vm._v("\n                " + _vm._s((_vm$getPaysInfo8 = _vm.getPaysInfo) === null || _vm$getPaysInfo8 === void 0 ? void 0 : _vm$getPaysInfo8.capitale) + " le, " + _vm._s(_vm.formatDate((_vm$historique53 = _vm.historique) === null || _vm$historique53 === void 0 ? void 0 : _vm$historique53.date)) + "\n            ")]), _vm._v(" "), _c("p", [_vm._v("\n                Nom client: " + _vm._s((_vm$guarantees2 = _vm.guarantees) === null || _vm$guarantees2 === void 0 ? void 0 : _vm$guarantees2.nom_prenoms) + ".\n                "), _c("br"), _vm._v("\n                (Tel) : " + _vm._s((_vm$guarantees3 = _vm.guarantees) === null || _vm$guarantees3 === void 0 ? void 0 : _vm$guarantees3.phone)), _c("br"), _vm._v("\n                Adresse: " + _vm._s((_vm$historique54 = _vm.historique) === null || _vm$historique54 === void 0 || (_vm$historique54 = _vm$historique54.client_info) === null || _vm$historique54 === void 0 ? void 0 : _vm$historique54.adresse) + "\n            ")])]), _vm._v(" "), _c("div", {
    staticClass: "content"
  }, [_c("h2", [_vm._v("URGENCE SIGNALEE")]), _vm._v(" "), _c("p", [_vm._v("Par lettre au porteur avec accusé de réception")]), _vm._v(" "), _c("p", [_vm._v("\n                A l’attention particulière de Monsieur/Madame\n                " + _vm._s((_vm$guarantees4 = _vm.guarantees) === null || _vm$guarantees4 === void 0 ? void 0 : _vm$guarantees4.nom_prenoms) + ".\n            ")]), _vm._v(" "), _c("p", [_vm._v("N/Réf: " + _vm._s((_vm$historique55 = _vm.historique) === null || _vm$historique55 === void 0 ? void 0 : _vm$historique55.info_dossier))]), _vm._v(" "), _vm._m(2), _vm._v(" "), _c("br"), _vm._v(" "), _c("p", [_vm._v("Monsieur /Madame")]), _vm._v(" "), _c("p", [_vm._v("\n                Pour mémoire, suivant convention de prêt en date du\n                "), _c("b", [_vm._v(" " + _vm._s((_vm$convertir_date_ec4 = _vm.convertir_date_echeance((_vm$historique56 = _vm.historique) === null || _vm$historique56 === void 0 || (_vm$historique56 = _vm$historique56.letter_data) === null || _vm$historique56 === void 0 || (_vm$historique56 = _vm$historique56.decharge_data) === null || _vm$historique56 === void 0 ? void 0 : _vm$historique56.date_mise_en_place)) !== null && _vm$convertir_date_ec4 !== void 0 ? _vm$convertir_date_ec4 : ""))]), _vm._v(", la société " + _vm._s((_vm$historique57 = _vm.historique) === null || _vm$historique57 === void 0 || (_vm$historique57 = _vm$historique57.client_info) === null || _vm$historique57 === void 0 ? void 0 : _vm$historique57.name) + " a sollicité et obtenu de notre institution un prêt à\n                hauteur de\n                "), _c("b", [_vm._v(" " + _vm._s(_vm._f("formatNumber")(_vm.arrondirMontantEntier((_vm$historique58 = _vm.historique) === null || _vm$historique58 === void 0 || (_vm$historique58 = _vm$historique58.letter_data) === null || _vm$historique58 === void 0 || (_vm$historique58 = _vm$historique58.decharge_data) === null || _vm$historique58 === void 0 ? void 0 : _vm$historique58.production_en_volume))))]), _vm._v(" en\n                principal, remboursable sur une durée maximale de\n                " + _vm._s((_vm$historique$letter3 = (_vm$historique59 = _vm.historique) === null || _vm$historique59 === void 0 || (_vm$historique59 = _vm$historique59.letter_data) === null || _vm$historique59 === void 0 || (_vm$historique59 = _vm$historique59.decharge_data) === null || _vm$historique59 === void 0 ? void 0 : _vm$historique59.duree_credit) !== null && _vm$historique$letter3 !== void 0 ? _vm$historique$letter3 : "") + " mois à compter du\n                "), _c("b", [_vm._v(_vm._s((_vm$historique$letter4 = (_vm$historique60 = _vm.historique) === null || _vm$historique60 === void 0 || (_vm$historique60 = _vm$historique60.letter_data) === null || _vm$historique60 === void 0 || (_vm$historique60 = _vm$historique60.decharge_data) === null || _vm$historique60 === void 0 ? void 0 : _vm$historique60.date_echeance) !== null && _vm$historique$letter4 !== void 0 ? _vm$historique$letter4 : ""))]), _vm._v(".\n            ")]), _vm._v(" "), _c("p", [_vm._v("\n                Cependant, la société\n                " + _vm._s((_vm$historique61 = _vm.historique) === null || _vm$historique61 === void 0 || (_vm$historique61 = _vm$historique61.client_info) === null || _vm$historique61 === void 0 ? void 0 : _vm$historique61.name) + "\n                ne respecte toujours pas ses échéances mensuelles de\n                remboursement, de sorte qu’elle cumule plusieurs échéances\n                échues et impayées qui se chiffrent à date à la somme de\n                "), _c("b", [_vm._v(_vm._s(_vm._f("formatNumber")(_vm.arrondirMontantEntier((_vm$historique62 = _vm.historique) === null || _vm$historique62 === void 0 || (_vm$historique62 = _vm$historique62.letter_data) === null || _vm$historique62 === void 0 || (_vm$historique62 = _vm$historique62.decharge_data) === null || _vm$historique62 === void 0 ? void 0 : _vm$historique62.encours_impaye))) + " FCFA (sans les pénalités)\n                ")]), _vm._v("\n                en principal sous réserves des échéances, pénalités et\n                intérêts à échoir.\n            ")]), _vm._v(" "), _c("p", [_vm._v("\n                Toutes ses perspectives et promesses de paiements afin de\n                régulariser sa situation débitrice dans nos livres sont\n                restées vaines jusqu’à ce jour.\n            ")]), _vm._v(" "), _c("p", [_vm._v("\n                Cette situation cause à notre Institution un énorme\n                préjudice et ne saurait davantage perdurer.\n            ")]), _vm._v(" "), _c("p", [_vm._v("\n                C’est pourquoi nous vous invitons à mettre à la disposition\n                de notre service juridique les véhicules gagés susvisés\n                ainsi que les documents y afférents (carte grise, visite\n                technique…) dans un délai maximum de huit (08) jours à\n                compter de la réception des présentes afin de nous permettre\n                de nous conformer à nos procédures internes de vérification\n                de la régularité des inscriptions et de réalisation amiable\n                des sûretés.\n            ")]), _vm._v(" "), _c("p", [_vm._v("\n                Aussi, vous rappelant les dispositions de l’article 469 du\n                code pénal qui dispose que « Est puni d’un emprisonnement\n                d’un à cinq ans et d’une amende de 300.000 à 3.000.000 de\n                francs […] 2° le débiteur emprunteur ou tiers donneur de\n                gage qui détruit ou détourne l’objet par lui donné à titre\n                de gage ; […] », nous vous invitons à prendre contact avec\n                notre service juridique dans le délai sus-indiqué à l’effet\n                de discuter des conditions de réalisation desdites sûretés.\n            ")]), _vm._v(" "), _c("p", [_vm._v("\n                Tout en espérant que vous privilégierez la voie amiable pour\n                la résolution de cette affaire, nous vous prions de recevoir\n                Monsieur /Madame\n                " + _vm._s((_vm$guarantees$nom_pr2 = (_vm$guarantees5 = _vm.guarantees) === null || _vm$guarantees5 === void 0 ? void 0 : _vm$guarantees5.nom_prenoms) !== null && _vm$guarantees$nom_pr2 !== void 0 ? _vm$guarantees$nom_pr2 : "") + "\n                nos meilleures salutations.\n            ")])]), _vm._v(" "), _c("div", {
    staticClass: "signature"
  }, [_c("p", [_vm._v("\n                " + _vm._s((_vm$historique63 = _vm.historique) === null || _vm$historique63 === void 0 || (_vm$historique63 = _vm$historique63.info_agence) === null || _vm$historique63 === void 0 || (_vm$historique63 = _vm$historique63.actors_recovery) === null || _vm$historique63 === void 0 || (_vm$historique63 = _vm$historique63.chef_agence) === null || _vm$historique63 === void 0 ? void 0 : _vm$historique63.name) + "\n                (" + _vm._s((_vm$historique$info_a4 = (_vm$historique64 = _vm.historique) === null || _vm$historique64 === void 0 || (_vm$historique64 = _vm$historique64.info_agence) === null || _vm$historique64 === void 0 || (_vm$historique64 = _vm$historique64.actors_recovery) === null || _vm$historique64 === void 0 || (_vm$historique64 = _vm$historique64.chef_agence) === null || _vm$historique64 === void 0 ? void 0 : _vm$historique64.display_name) !== null && _vm$historique$info_a4 !== void 0 ? _vm$historique$info_a4 : "") + ")\n            ")]), _vm._v(" "), _c("div", {
    staticClass: "tampon"
  }, [_c("p", [_c("img", {
    attrs: {
      src: _vm.tamponDynamique,
      alt: "Tampon ".concat(_vm.getPaysInfo.code)
    }
  })])])])]) : _vm._e(), _vm._v(" "), ((_vm$historique65 = _vm.historique) === null || _vm$historique65 === void 0 || (_vm$historique65 = _vm$historique65.letter_data) === null || _vm$historique65 === void 0 ? void 0 : _vm$historique65.letter_slug) === "LETTRE_INFORMATION_A_LA_CAUTION_CDR" ? _c("div", {
    staticClass: "container"
  }, [_c("div", {
    staticClass: "header"
  }, [_c("p", [_vm._v(_vm._s((_vm$getPaysInfo9 = _vm.getPaysInfo) === null || _vm$getPaysInfo9 === void 0 ? void 0 : _vm$getPaysInfo9.capitale) + " le, " + _vm._s(_vm.formatDate((_vm$historique66 = _vm.historique) === null || _vm$historique66 === void 0 ? void 0 : _vm$historique66.date)))]), _vm._v(" "), _c("p", [_vm._v("\n                Nom client: " + _vm._s((_vm$guarantees6 = _vm.guarantees) === null || _vm$guarantees6 === void 0 ? void 0 : _vm$guarantees6.nom_prenoms) + ".\n                "), _c("br"), _vm._v("\n                (Tel) : " + _vm._s((_vm$guarantees7 = _vm.guarantees) === null || _vm$guarantees7 === void 0 ? void 0 : _vm$guarantees7.phone)), _c("br"), _vm._v("\n                Adresse:" + _vm._s((_vm$historique67 = _vm.historique) === null || _vm$historique67 === void 0 || (_vm$historique67 = _vm$historique67.client_info) === null || _vm$historique67 === void 0 ? void 0 : _vm$historique67.adresse) + "\n            ")])]), _vm._v(" "), _c("div", {
    staticClass: "content"
  }, [_c("h2", [_vm._v("URGENCE SIGNALEE")]), _vm._v(" "), _c("p", [_vm._v("N/Réf: " + _vm._s((_vm$historique68 = _vm.historique) === null || _vm$historique68 === void 0 ? void 0 : _vm$historique68.info_dossier))]), _vm._v(" "), _c("p", [_vm._v("Monsieur/Madame,")]), _vm._v(" "), _c("p", [_vm._v("\n                Pour rappel, par acte sous seing privé en date du\n                "), _c("b", [_vm._v(_vm._s((_vm$convertir_date_ec5 = _vm.convertir_date_echeance((_vm$historique69 = _vm.historique) === null || _vm$historique69 === void 0 || (_vm$historique69 = _vm$historique69.letter_data) === null || _vm$historique69 === void 0 || (_vm$historique69 = _vm$historique69.decharge_data) === null || _vm$historique69 === void 0 ? void 0 : _vm$historique69.date_mise_en_place)) !== null && _vm$convertir_date_ec5 !== void 0 ? _vm$convertir_date_ec5 : ""))]), _vm._v(", " + _vm._s((_vm$getPaysInfo0 = _vm.getPaysInfo) === null || _vm$getPaysInfo0 === void 0 ? void 0 : _vm$getPaysInfo0.lib) + " a accordé à Monsieur/Madame\n                "), _c("b", [_vm._v(_vm._s((_vm$historique$client11 = (_vm$historique70 = _vm.historique) === null || _vm$historique70 === void 0 || (_vm$historique70 = _vm$historique70.client_info) === null || _vm$historique70 === void 0 ? void 0 : _vm$historique70.name) !== null && _vm$historique$client11 !== void 0 ? _vm$historique$client11 : ""))]), _vm._v("\n                un prêt d’un montant global de\n                "), _c("b", [_vm._v(_vm._s(_vm._f("formatNumber")(_vm.arrondirMontantEntier((_vm$historique71 = _vm.historique) === null || _vm$historique71 === void 0 || (_vm$historique71 = _vm$historique71.letter_data) === null || _vm$historique71 === void 0 || (_vm$historique71 = _vm$historique71.decharge_data) === null || _vm$historique71 === void 0 ? void 0 : _vm$historique71.production_en_volume))) + " F/CFA")]), _vm._v("\n                en principal, remboursable sur\n                "), _c("b", [_vm._v(_vm._s((_vm$historique$messag = (_vm$historique72 = _vm.historique) === null || _vm$historique72 === void 0 || (_vm$historique72 = _vm$historique72.message_data) === null || _vm$historique72 === void 0 ? void 0 : _vm$historique72.duree_credit) !== null && _vm$historique$messag !== void 0 ? _vm$historique$messag : ""))]), _vm._v(" échéances\n                mensuelles à hauteur de\n                "), _c("b", [_vm._v(_vm._s((_vm$historique$messag2 = (_vm$historique73 = _vm.historique) === null || _vm$historique73 === void 0 || (_vm$historique73 = _vm$historique73.message_data) === null || _vm$historique73 === void 0 ? void 0 : _vm$historique73.montant_echeance) !== null && _vm$historique$messag2 !== void 0 ? _vm$historique$messag2 : "") + " F/CFA")]), _vm._v(" chacune.\n            ")]), _vm._v(" "), _c("p", [_vm._v("\n                A cette occasion, vous vous êtes porté(e) caution\n                personnelle solidaire et indivisible de celui-ci par acte\n                sous seing privé aux fins de garantir ses engagements dans\n                la limite du montant maximum de\n                "), _c("b", [_vm._v(_vm._s((_vm$historique$messag3 = (_vm$historique74 = _vm.historique) === null || _vm$historique74 === void 0 || (_vm$historique74 = _vm$historique74.message_data) === null || _vm$historique74 === void 0 ? void 0 : _vm$historique74.montant_echeance) !== null && _vm$historique$messag3 !== void 0 ? _vm$historique$messag3 : "") + " F/CFA")]), _vm._v(", ce qui\n                induit que vous êtes tenu(e) de l’exécution de l’obligation\n                de payer notre créance dans les mêmes conditions que le\n                Débiteur principal en cas de défaillance de celui-ci.\n            ")]), _vm._v(" "), _c("p", [_vm._v("\n                En cette qualité et conformément aux dispositions légales en\n                vigueur, nous venons par la présente vous informer de la\n                défaillance de Monsieur/Madame\n                "), _c("b", [_vm._v(_vm._s((_vm$historique75 = _vm.historique) === null || _vm$historique75 === void 0 || (_vm$historique75 = _vm$historique75.client_info) === null || _vm$historique75 === void 0 ? void 0 : _vm$historique75.name))]), _vm._v(", qui n’a pas respecté ses engagements contractuels.\n            ")]), _vm._v(" "), _c("p", [_vm._v("\n                Il reste donc devoir à ce jour à la Compagnie Africaine de\n                Crédit, devenue Compagnie Financière Africaine de Côte\n                d’Ivoire, la somme de\n                "), _c("b", [_vm._v(_vm._s((_vm$historique$messag4 = (_vm$historique76 = _vm.historique) === null || _vm$historique76 === void 0 || (_vm$historique76 = _vm$historique76.message_data) === null || _vm$historique76 === void 0 ? void 0 : _vm$historique76.encour_impaye) !== null && _vm$historique$messag4 !== void 0 ? _vm$historique$messag4 : "") + " F/CFA (sans\n                    les pénalités)")]), _vm._v("\n                en principal.\n            ")]), _vm._v(" "), _c("p", [_vm._v("\n                Nous vous transmettons copie de la lettre de relance restée\n                sans suite et vous demandons par conséquent de prendre les\n                meilleures dispositions afin que la créance susvisée de\n                notre institution soit remboursée dans le délai de huit (8)\n                jours à compter de la réception des présentes.\n            ")]), _vm._v(" "), _c("p", [_vm._v("\n                Passé ce délai sans réaction de votre part, nous procèderons\n                au recouvrement judiciaire de notre créance en principal\n                sans préjudice des intérêts et pénalités de retard ainsi que\n                des frais de procédure qui en découleront.\n            ")]), _vm._v(" "), _c("p", [_vm._v("\n                Dans l’attente, nous vous prions d’agréer, Monsieur/Madame " + _vm._s((_vm$guarantees$nom_pr3 = (_vm$guarantees8 = _vm.guarantees) === null || _vm$guarantees8 === void 0 ? void 0 : _vm$guarantees8.nom_prenoms) !== null && _vm$guarantees$nom_pr3 !== void 0 ? _vm$guarantees$nom_pr3 : "") + ", l’expression de nos salutations respectueuses.\n            ")])]), _vm._v(" "), _c("div", {
    staticClass: "signature"
  }, [((_vm$getPaysInfo1 = _vm.getPaysInfo) === null || _vm$getPaysInfo1 === void 0 ? void 0 : _vm$getPaysInfo1.root) == "CFNTG" ? _c("span", [_c("p", [_vm._v("KOFFI DOSSOU (Responsable recouvrement)")])]) : _c("span", [_c("p", [_vm._v("\n                    " + _vm._s((_vm$historique77 = _vm.historique) === null || _vm$historique77 === void 0 || (_vm$historique77 = _vm$historique77.info_agence) === null || _vm$historique77 === void 0 || (_vm$historique77 = _vm$historique77.actors_recovery) === null || _vm$historique77 === void 0 || (_vm$historique77 = _vm$historique77.recovery_team1) === null || _vm$historique77 === void 0 || (_vm$historique77 = _vm$historique77.responsable) === null || _vm$historique77 === void 0 ? void 0 : _vm$historique77.name) + "\n                    (" + _vm._s((_vm$historique78 = _vm.historique) === null || _vm$historique78 === void 0 || (_vm$historique78 = _vm$historique78.info_agence) === null || _vm$historique78 === void 0 || (_vm$historique78 = _vm$historique78.actors_recovery) === null || _vm$historique78 === void 0 || (_vm$historique78 = _vm$historique78.recovery_team1) === null || _vm$historique78 === void 0 || (_vm$historique78 = _vm$historique78.responsable) === null || _vm$historique78 === void 0 ? void 0 : _vm$historique78.display_name) + ")\n                ")])]), _vm._v(" "), _c("div", {
    staticClass: "tampon"
  }, [_c("p", [_c("img", {
    attrs: {
      src: _vm.tamponDynamique,
      alt: "Tampon ".concat(_vm.getPaysInfo.code)
    }
  })])])])]) : _vm._e()]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("p", [_c("u", [_vm._v("Objet")]), _vm._v(" : Relance échéance impayée")]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("p", [_c("u", [_vm._v("Objet")]), _vm._v(" : Régularisation Urgente de vos échéances impayées ")]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("p", [_c("u", [_vm._v("Objet")]), _vm._v(" : Demande de Présentation de Biens offerts en Gage")]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/recouvrement/LetterOff.vue?vue&type=style&index=0&id=2ad1cdba&scoped=true&lang=css":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/recouvrement/LetterOff.vue?vue&type=style&index=0&id=2ad1cdba&scoped=true&lang=css ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\nbody[data-v-2ad1cdba] {\r\n    font-family: Arial, sans-serif;\r\n    margin: 40px;\n}\n.container[data-v-2ad1cdba] {\r\n    width: 80%;\r\n    margin: 0 auto;\n}\n.header[data-v-2ad1cdba],\r\n.footer[data-v-2ad1cdba] {\r\n    text-align: right;\n}\n.content[data-v-2ad1cdba] {\r\n    margin-top: 40px;\n}\n.signature[data-v-2ad1cdba] {\r\n    margin-top: 30px;\r\n    text-align: right;\n}\n.header-logo[data-v-2ad1cdba] {\r\n    text-align: center;\n}\n.tampon img[data-v-2ad1cdba] {\r\n    width: 250px;\n}\n.tampon[data-v-2ad1cdba] {\r\n    text-align: right;\r\n    margin-right: 23px;\r\n    margin-top: -13px;\n}\n.filigrane[data-v-2ad1cdba] {\r\n    position: fixed;\r\n    top: 55%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n    opacity: 0.1;\r\n    z-index: 1;\r\n    width: 45%;\r\n    height: auto;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/recouvrement/LetterOff.vue?vue&type=style&index=0&id=2ad1cdba&scoped=true&lang=css":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/recouvrement/LetterOff.vue?vue&type=style&index=0&id=2ad1cdba&scoped=true&lang=css ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_LetterOff_vue_vue_type_style_index_0_id_2ad1cdba_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./LetterOff.vue?vue&type=style&index=0&id=2ad1cdba&scoped=true&lang=css */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/recouvrement/LetterOff.vue?vue&type=style&index=0&id=2ad1cdba&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_LetterOff_vue_vue_type_style_index_0_id_2ad1cdba_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_LetterOff_vue_vue_type_style_index_0_id_2ad1cdba_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/shared/recouvrement/LetterOff.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/components/shared/recouvrement/LetterOff.vue ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _LetterOff_vue_vue_type_template_id_2ad1cdba_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LetterOff.vue?vue&type=template&id=2ad1cdba&scoped=true */ "./resources/js/components/shared/recouvrement/LetterOff.vue?vue&type=template&id=2ad1cdba&scoped=true");
/* harmony import */ var _LetterOff_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LetterOff.vue?vue&type=script&lang=js */ "./resources/js/components/shared/recouvrement/LetterOff.vue?vue&type=script&lang=js");
/* harmony import */ var _LetterOff_vue_vue_type_style_index_0_id_2ad1cdba_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LetterOff.vue?vue&type=style&index=0&id=2ad1cdba&scoped=true&lang=css */ "./resources/js/components/shared/recouvrement/LetterOff.vue?vue&type=style&index=0&id=2ad1cdba&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _LetterOff_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _LetterOff_vue_vue_type_template_id_2ad1cdba_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _LetterOff_vue_vue_type_template_id_2ad1cdba_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "2ad1cdba",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/shared/recouvrement/LetterOff.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/shared/recouvrement/LetterOff.vue?vue&type=script&lang=js":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/shared/recouvrement/LetterOff.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LetterOff_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./LetterOff.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/recouvrement/LetterOff.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LetterOff_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/shared/recouvrement/LetterOff.vue?vue&type=style&index=0&id=2ad1cdba&scoped=true&lang=css":
/*!***************************************************************************************************************************!*\
  !*** ./resources/js/components/shared/recouvrement/LetterOff.vue?vue&type=style&index=0&id=2ad1cdba&scoped=true&lang=css ***!
  \***************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_LetterOff_vue_vue_type_style_index_0_id_2ad1cdba_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./LetterOff.vue?vue&type=style&index=0&id=2ad1cdba&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/recouvrement/LetterOff.vue?vue&type=style&index=0&id=2ad1cdba&scoped=true&lang=css");


/***/ }),

/***/ "./resources/js/components/shared/recouvrement/LetterOff.vue?vue&type=template&id=2ad1cdba&scoped=true":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/components/shared/recouvrement/LetterOff.vue?vue&type=template&id=2ad1cdba&scoped=true ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_LetterOff_vue_vue_type_template_id_2ad1cdba_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_LetterOff_vue_vue_type_template_id_2ad1cdba_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_LetterOff_vue_vue_type_template_id_2ad1cdba_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./LetterOff.vue?vue&type=template&id=2ad1cdba&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/recouvrement/LetterOff.vue?vue&type=template&id=2ad1cdba&scoped=true");


/***/ }),

/***/ "./resources/js/services/recouvremnt_letter_maping.js":
/*!************************************************************!*\
  !*** ./resources/js/services/recouvremnt_letter_maping.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AGENCY_TAMPONS_ENV: () => (/* binding */ AGENCY_TAMPONS_ENV),
/* harmony export */   ALLOWED_LETTERS_FOR_AGENCY_STAMP: () => (/* binding */ ALLOWED_LETTERS_FOR_AGENCY_STAMP),
/* harmony export */   LETTERS_MAPING: () => (/* binding */ LETTERS_MAPING)
/* harmony export */ });
/* provided dependency */ var process = __webpack_require__(/*! process/browser.js */ "./node_modules/process/browser.js");
var LETTERS_MAPING = [{
  title: "SMS DE RAPPEL D’ECHEANCE",
  slug: "SMS_DE_RAPPEL_ECHEANCE"
}, {
  title: "La 1ère lettre de relance",
  slug: "PREMIERE_LETTRE_DE_RELANCE"
}, {
  title: "La seconde lettre de relance",
  slug: "DEUXIEME_LETTRE_DE_RELANCE"
}, {
  title: "La lettre d'information à la caution agence",
  slug: "LETTRE_INFORMATION_A_LA_CAUTION_AGENCE"
}, {
  title: "3ème lettre de relance CDR",
  slug: "TROISIEME_LETTRE_DE_RELANCE_CDR"
}, {
  title: "La lettre de présentation de bien gage",
  slug: "LETTRE_DE_PRESENTATION_DE_BIEN_GAGE"
}, {
  title: "La lettre d'information à la caution CDR",
  slug: "LETTRE_INFORMATION_A_LA_CAUTION_CDR"
}

// {
//     title: "LETTRE D’INFORMATION A LA CAUTION (Par voie de Commissaire de Justice)",
//     slug: "LETTRE_INFORMATION_A_LA_CAUTION_CDR",
// },
// {
//     title: "MISE EN DEMEURE",
//     slug: "MISE_EN_DEMEURE",
// },
// {
//     title: "MESURES CONSERVATOIRES (Saisie de créances, saisie de biens meubles corporels, …)",
//     slug: "MESURES_CONSERVATOIRES",
// },
// {
//     title: "DECISION DE JUSTICE (Requête OIP ou Assignation)",
//     slug: "DECISION_DE_JUSTICE",
// },
// {
//     title: "MESURES D’EXECUTION (Saisie attribution de créances, saisie vente, …)",
//     slug: "MESURES_EXECUTION",
// },
];
var ALLOWED_LETTERS_FOR_AGENCY_STAMP = ["PREMIERE_LETTRE_DE_RELANCE", "DEUXIEME_LETTRE_DE_RELANCE", "LETTRE_INFORMATION_A_LA_CAUTION_AGENCE"];
var AGENCY_TAMPONS_ENV = {
  MIX_VUE_APP_TAMPON_AGENCE_CFNTG: process.env.MIX_VUE_APP_TAMPON_AGENCE_CFNTG,
  MIX_VUE_APP_TAMPON_AGENCE_CFNCIV: process.env.MIX_VUE_APP_TAMPON_AGENCE_CFNCIV,
  MIX_VUE_APP_TAMPON_AGENCE_CFNML: process.env.MIX_VUE_APP_TAMPON_AGENCE_CFNML,
  MIX_VUE_APP_TAMPON_AGENCE_CFNGB: process.env.MIX_VUE_APP_TAMPON_AGENCE_CFNGB
};

/***/ })

}]);