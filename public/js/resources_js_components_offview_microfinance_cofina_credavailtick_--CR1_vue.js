"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_offview_microfinance_cofina_credavailtick_--CR1_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/microfinance/cofina/credavailtick/--CR1.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/microfinance/cofina/credavailtick/--CR1.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "CR1",
  computed: {
    // autre_frais () {
    //   const frais = this.dossier_credit?.cred_pub_tb_1?.frais
    //   if (frais?.length > 0) {
    //
    //     const result = frais.map(el => Number(el.montant_frais)).reduce((sum, curr) => sum + curr4
    //     alert(result)
    //     return
    //   }
    //   else return 0
    // }
  },
  props: {
    dossier_credit: Object
  },
  mounted: function mounted() {
    var _this = this;
    EventBus.$on("print_cat", function (divName) {
      _this.launchPrintView(divName);
    });
    this.loadRetrieved();
  },
  created: function created() {},
  data: function data() {
    return {
      formDataToBeWatched: {
        montant_engagement: "0",
        hypotheques_analyste: "",
        gages_analyste: '',
        // hypotheques: [],
        cond_particulieres: "",
        co_signataire: "",
        commentaire_activite: "",
        total_hypotheques_valeur_marchande: "",
        total_hypotheques_valeur_considere: "",
        total_gages_valeur_marchande: "",
        total_gages_valeur_considere: "",
        notes: [],
        suretes_diverses: [],
        autres_suretes_diverses: [],
        cautionnement_solidaires: []
      },
      hypotheques_analyste: "",
      gages_analyste: "",
      hypotheques: null,
      total_hypotheques_valeur_marchande: null,
      total_hypotheques_valeur_considere: null,
      gages: null,
      total_gages_valeur_considere: null,
      total_gages_valeur_marchande: null,
      cond_particulieres: null,
      suretes_diverses: null,
      autres_suretes_diverses: null,
      cautionnement_solidaires: null,
      meta_parseable: {
        // cred_pub_key: this.meta_data['cred_pub_key'],
        cred_pub_key: this.dossier_credit['cred_pub_key']
        // tb_name: this.tb_name,
      }
      //autre_frais:0,
    };
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
      window.print();
      document.body.innerHTML = originalContents;
      location.reload();
    },
    send2Backend: function send2Backend(res, newVal, oldVal) {
      this.authcheck = true;
      this.authcheckUsr = res.data;
      this.authcheckStatus = res.status;
      if (this.authcheckStatus === 401) {
        window.location.href = "/login";
      }
      if (this.authcheck === true) {
        this.$emit('autosaving');
        this.$axios.post(this.ebapisHost + "creditbuilder/api/v1/autosaving/", {
          user: this.authcheckUsr,
          meta_parseable: this.meta_parseable,
          filledData: this.formDataToBeWatched
        }).then(function (response) {
          this.$emit('autosaving');
          var tbFetcheData = response.data;
          if (tbFetcheData["is_success"] === true) {
            this.$emit("load-shell");
          }
        }.bind(this))["catch"](function (error) {
          this.$Progress.finish();
          console.log(error);
        }.bind(this));
      } else {
        alert("Unauthenticated");
      }
    },
    loadRetrieved: function loadRetrieved() {
      var lentb = this.dossier_credit["tbs_in_use"];
      if (lentb.length > 0) {
        if (this.dossier_credit["cred_pub_tb_49"] == undefined && this.dossier_credit["cred_pub_tb_490"] == undefined && this.dossier_credit["cred_pub_tb_049"] == undefined && this.dossier_credit["cred_pub_tb_0490"] == undefined) {
          var _dossier_credit, _dossier_credit2, _dossier_credit3, _dossier_credit4, _dossier_credit5, _dossier_credit6, _dossier_credit7, _dossier_credit8, _dossier_credit9, _dossier_credit0, _dossier_credit1, _dossier_credit10, _dossier_credit11, _dossier_credit12, _dossier_credit13, _dossier_credit14, _dossier_credit15, _dossier_credit16, _dossier_credit17, _dossier_credit18;
          this.hypotheques = (_dossier_credit = dossier_credit) === null || _dossier_credit === void 0 || (_dossier_credit = _dossier_credit[this.determineCredPubTables((_dossier_credit2 = dossier_credit) === null || _dossier_credit2 === void 0 ? void 0 : _dossier_credit2.applied_templ_name)[4]]) === null || _dossier_credit === void 0 ? void 0 : _dossier_credit['hypotheques'];
          this.total_hypotheques_valeur_marchande = (_dossier_credit3 = dossier_credit) === null || _dossier_credit3 === void 0 || (_dossier_credit3 = _dossier_credit3[this.determineCredPubTables((_dossier_credit4 = dossier_credit) === null || _dossier_credit4 === void 0 ? void 0 : _dossier_credit4.applied_templ_name)[4]]) === null || _dossier_credit3 === void 0 ? void 0 : _dossier_credit3['total_hypotheques_valeur_marchande'];
          this.total_hypotheques_valeur_considere = (_dossier_credit5 = dossier_credit) === null || _dossier_credit5 === void 0 || (_dossier_credit5 = _dossier_credit5[this.determineCredPubTables((_dossier_credit6 = dossier_credit) === null || _dossier_credit6 === void 0 ? void 0 : _dossier_credit6.applied_templ_name)[4]]) === null || _dossier_credit5 === void 0 ? void 0 : _dossier_credit5['total_hypotheques_valeur_considere'];
          this.gages = (_dossier_credit7 = dossier_credit) === null || _dossier_credit7 === void 0 || (_dossier_credit7 = _dossier_credit7[this.determineCredPubTables((_dossier_credit8 = dossier_credit) === null || _dossier_credit8 === void 0 ? void 0 : _dossier_credit8.applied_templ_name)[4]]) === null || _dossier_credit7 === void 0 ? void 0 : _dossier_credit7.gages;
          this.total_gages_valeur_considere = (_dossier_credit9 = dossier_credit) === null || _dossier_credit9 === void 0 || (_dossier_credit9 = _dossier_credit9[this.determineCredPubTables((_dossier_credit0 = dossier_credit) === null || _dossier_credit0 === void 0 ? void 0 : _dossier_credit0.applied_templ_name)[4]]) === null || _dossier_credit9 === void 0 ? void 0 : _dossier_credit9['total_gages_valeur_considere'];
          this.total_gages_valeur_marchande = (_dossier_credit1 = dossier_credit) === null || _dossier_credit1 === void 0 || (_dossier_credit1 = _dossier_credit1[this.determineCredPubTables((_dossier_credit10 = dossier_credit) === null || _dossier_credit10 === void 0 ? void 0 : _dossier_credit10.applied_templ_name)[4]]) === null || _dossier_credit1 === void 0 ? void 0 : _dossier_credit1['total_gages_valeur_marchande'];
          this.cond_particulieres = (_dossier_credit11 = dossier_credit) === null || _dossier_credit11 === void 0 || (_dossier_credit11 = _dossier_credit11[this.determineCredPubTables((_dossier_credit12 = dossier_credit) === null || _dossier_credit12 === void 0 ? void 0 : _dossier_credit12.applied_templ_name)[4]]) === null || _dossier_credit11 === void 0 ? void 0 : _dossier_credit11['cond_particulieres'];
          this.suretes_diverses = (_dossier_credit13 = dossier_credit) === null || _dossier_credit13 === void 0 || (_dossier_credit13 = _dossier_credit13[this.determineCredPubTables((_dossier_credit14 = dossier_credit) === null || _dossier_credit14 === void 0 ? void 0 : _dossier_credit14.applied_templ_name)[4]]) === null || _dossier_credit13 === void 0 ? void 0 : _dossier_credit13['suretes_diverses'];
          this.autres_suretes_diverses = (_dossier_credit15 = dossier_credit) === null || _dossier_credit15 === void 0 || (_dossier_credit15 = _dossier_credit15[this.determineCredPubTables((_dossier_credit16 = dossier_credit) === null || _dossier_credit16 === void 0 ? void 0 : _dossier_credit16.applied_templ_name)[4]]) === null || _dossier_credit15 === void 0 ? void 0 : _dossier_credit15['autres_suretes_diverses'];
          this.cautionnement_solidaires = (_dossier_credit17 = dossier_credit) === null || _dossier_credit17 === void 0 || (_dossier_credit17 = _dossier_credit17[this.determineCredPubTables((_dossier_credit18 = dossier_credit) === null || _dossier_credit18 === void 0 ? void 0 : _dossier_credit18.applied_templ_name)[4]]) === null || _dossier_credit17 === void 0 ? void 0 : _dossier_credit17['cautionnement_solidaires'];
        } else if (this.dossier_credit["cred_pub_tb_049"] == undefined && this.dossier_credit["cred_pub_tb_0490"] == undefined) {
          var _this$dossier_credit, _this$dossier_credit2, _this$dossier_credit3, _this$dossier_credit4, _this$dossier_credit5, _this$dossier_credit6, _this$dossier_credit7, _this$dossier_credit8, _this$dossier_credit9, _this$dossier_credit0;
          this.hypotheques = (_this$dossier_credit = this.dossier_credit) === null || _this$dossier_credit === void 0 || (_this$dossier_credit = _this$dossier_credit.cred_pub_tb_490) === null || _this$dossier_credit === void 0 ? void 0 : _this$dossier_credit.hypotheques;
          this.total_hypotheques_valeur_marchande = (_this$dossier_credit2 = this.dossier_credit) === null || _this$dossier_credit2 === void 0 || (_this$dossier_credit2 = _this$dossier_credit2.cred_pub_tb_490) === null || _this$dossier_credit2 === void 0 ? void 0 : _this$dossier_credit2.total_hypotheques_valeur_marchande;
          this.total_hypotheques_valeur_considere = (_this$dossier_credit3 = this.dossier_credit) === null || _this$dossier_credit3 === void 0 || (_this$dossier_credit3 = _this$dossier_credit3.cred_pub_tb_490) === null || _this$dossier_credit3 === void 0 ? void 0 : _this$dossier_credit3.total_hypotheques_valeur_considere;
          this.gages = (_this$dossier_credit4 = this.dossier_credit) === null || _this$dossier_credit4 === void 0 || (_this$dossier_credit4 = _this$dossier_credit4.cred_pub_tb_490) === null || _this$dossier_credit4 === void 0 ? void 0 : _this$dossier_credit4.gages;
          this.total_gages_valeur_considere = (_this$dossier_credit5 = this.dossier_credit) === null || _this$dossier_credit5 === void 0 || (_this$dossier_credit5 = _this$dossier_credit5.cred_pub_tb_490) === null || _this$dossier_credit5 === void 0 ? void 0 : _this$dossier_credit5.total_gages_valeur_considere;
          this.total_gages_valeur_marchande = (_this$dossier_credit6 = this.dossier_credit) === null || _this$dossier_credit6 === void 0 || (_this$dossier_credit6 = _this$dossier_credit6.cred_pub_tb_490) === null || _this$dossier_credit6 === void 0 ? void 0 : _this$dossier_credit6.total_gages_valeur_marchande;
          this.cond_particulieres = (_this$dossier_credit7 = this.dossier_credit) === null || _this$dossier_credit7 === void 0 || (_this$dossier_credit7 = _this$dossier_credit7.cred_pub_tb_490) === null || _this$dossier_credit7 === void 0 ? void 0 : _this$dossier_credit7.cond_particulieres;
          this.suretes_diverses = (_this$dossier_credit8 = this.dossier_credit) === null || _this$dossier_credit8 === void 0 || (_this$dossier_credit8 = _this$dossier_credit8.cred_pub_tb_490) === null || _this$dossier_credit8 === void 0 ? void 0 : _this$dossier_credit8.suretes_diverses;
          this.autres_suretes_diverses = (_this$dossier_credit9 = this.dossier_credit) === null || _this$dossier_credit9 === void 0 || (_this$dossier_credit9 = _this$dossier_credit9.cred_pub_tb_490) === null || _this$dossier_credit9 === void 0 ? void 0 : _this$dossier_credit9.autres_suretes_diverses;
          this.cautionnement_solidaires = (_this$dossier_credit0 = this.dossier_credit) === null || _this$dossier_credit0 === void 0 || (_this$dossier_credit0 = _this$dossier_credit0.cred_pub_tb_490) === null || _this$dossier_credit0 === void 0 ? void 0 : _this$dossier_credit0.cautionnement_solidaires;

          // console.log('echeance_interet', Math.ceil(this.dossier_credit["cred_pub_tb_1"]?.echeance.interet))
        } else if (this.dossier_credit["cred_pub_tb_0490"] == undefined) {
          var _this$dossier_credit1, _this$dossier_credit10, _this$dossier_credit11, _this$dossier_credit12, _this$dossier_credit13, _this$dossier_credit14, _this$dossier_credit15, _this$dossier_credit16, _this$dossier_credit17, _this$dossier_credit18;
          this.hypotheques = (_this$dossier_credit1 = this.dossier_credit) === null || _this$dossier_credit1 === void 0 || (_this$dossier_credit1 = _this$dossier_credit1.cred_pub_tb_049) === null || _this$dossier_credit1 === void 0 ? void 0 : _this$dossier_credit1.hypotheques_analyste;
          this.total_hypotheques_valeur_marchande = (_this$dossier_credit10 = this.dossier_credit) === null || _this$dossier_credit10 === void 0 || (_this$dossier_credit10 = _this$dossier_credit10.cred_pub_tb_049) === null || _this$dossier_credit10 === void 0 ? void 0 : _this$dossier_credit10.total_hypotheques_valeur_marchande;
          this.total_hypotheques_valeur_considere = (_this$dossier_credit11 = this.dossier_credit) === null || _this$dossier_credit11 === void 0 || (_this$dossier_credit11 = _this$dossier_credit11.cred_pub_tb_049) === null || _this$dossier_credit11 === void 0 ? void 0 : _this$dossier_credit11.total_hypotheques_valeur_considere;
          this.gages = (_this$dossier_credit12 = this.dossier_credit) === null || _this$dossier_credit12 === void 0 || (_this$dossier_credit12 = _this$dossier_credit12.cred_pub_tb_049) === null || _this$dossier_credit12 === void 0 ? void 0 : _this$dossier_credit12.gages_analyste;
          this.total_gages_valeur_considere = (_this$dossier_credit13 = this.dossier_credit) === null || _this$dossier_credit13 === void 0 || (_this$dossier_credit13 = _this$dossier_credit13.cred_pub_tb_049) === null || _this$dossier_credit13 === void 0 ? void 0 : _this$dossier_credit13.total_gages_valeur_considere;
          this.total_gages_valeur_marchande = (_this$dossier_credit14 = this.dossier_credit) === null || _this$dossier_credit14 === void 0 || (_this$dossier_credit14 = _this$dossier_credit14.cred_pub_tb_049) === null || _this$dossier_credit14 === void 0 ? void 0 : _this$dossier_credit14.total_gages_valeur_marchande;
          this.cond_particulieres = (_this$dossier_credit15 = this.dossier_credit) === null || _this$dossier_credit15 === void 0 || (_this$dossier_credit15 = _this$dossier_credit15.cred_pub_tb_049) === null || _this$dossier_credit15 === void 0 ? void 0 : _this$dossier_credit15.cond_particulieres;
          this.suretes_diverses = (_this$dossier_credit16 = this.dossier_credit) === null || _this$dossier_credit16 === void 0 || (_this$dossier_credit16 = _this$dossier_credit16.cred_pub_tb_049) === null || _this$dossier_credit16 === void 0 ? void 0 : _this$dossier_credit16.suretes_diverses;
          this.autres_suretes_diverses = (_this$dossier_credit17 = this.dossier_credit) === null || _this$dossier_credit17 === void 0 || (_this$dossier_credit17 = _this$dossier_credit17.cred_pub_tb_049) === null || _this$dossier_credit17 === void 0 ? void 0 : _this$dossier_credit17.autres_suretes_diverses;
          this.cautionnement_solidaires = (_this$dossier_credit18 = this.dossier_credit) === null || _this$dossier_credit18 === void 0 || (_this$dossier_credit18 = _this$dossier_credit18.cred_pub_tb_049) === null || _this$dossier_credit18 === void 0 ? void 0 : _this$dossier_credit18.cautionnement_solidaires;
        }
      }
    },
    formatDate: function formatDate(date) {
      var options = {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric'
      };
      return new Date(date).toLocaleDateString('fr', options);
    }
  }
  // total_hypotheques_valeur_marchande: null,
  // total_hypotheques_valeur_considere: null,
  // total_gages_valeur_marchande: null,
  // total_gages_valeur_considere: null,
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/microfinance/cofina/credavailtick/--CR1.vue?vue&type=template&id=2ae388e7&scoped=true":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/microfinance/cofina/credavailtick/--CR1.vue?vue&type=template&id=2ae388e7&scoped=true ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm$dossier_credit, _vm$dossier_credit2, _vm$dossier_credit3, _vm$dossier_credit4, _vm$dossier_credit5, _vm$dossier_credit6, _vm$dossier_credit7, _vm$dossier_credit8, _vm$dossier_credit9, _vm$dossier_credit0, _vm$dossier_credit1, _vm$dossier_credit10, _vm$dossier_credit11, _vm$dossier_credit12, _vm$dossier_credit13, _vm$dossier_credit14, _vm$dossier_credit15, _vm$dossier_credit16, _vm$dossier_credit17, _vm$dossier_credit18, _vm$dossier_credit19, _vm$dossier_credit20, _vm$dossier_credit21, _vm$dossier_credit22, _vm$dossier_credit23, _vm$dossier_credit24, _vm$dossier_credit25, _vm$dossier_credit26, _vm$dossier_credit27, _vm$dossier_credit28, _vm$dossier_credit29, _vm$dossier_credit30, _vm$dossier_credit31, _vm$dossier_credit32, _vm$dossier_credit33, _vm$dossier_credit34, _vm$dossier_credit35, _vm$dossier_credit36, _vm$dossier_credit37, _vm$dossier_credit38, _vm$dossier_credit39, _vm$dossier_credit40, _vm$dossier_credit41, _vm$dossier_credit42, _vm$dossier_credit43, _vm$dossier_credit44, _vm$dossier_credit45, _vm$dossier_credit46, _vm$dossier_credit47, _vm$dossier_credit48, _vm$dossier_credit49, _vm$dossier_credit50, _vm$dossier_credit51, _vm$dossier_credit52, _vm$dossier_credit53, _vm$dossier_credit54, _vm$dossier_credit55, _vm$dossier_credit56, _vm$dossier_credit57, _vm$dossier_credit58, _vm$dossier_credit59, _vm$dossier_credit60, _vm$dossier_credit61, _vm$dossier_credit62, _vm$dossier_credit63, _vm$dossier_credit64, _vm$dossier_credit65, _vm$dossier_credit66, _vm$dossier_credit67;
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "row justify-content-between",
    attrs: {
      id: "print_cat"
    }
  }, [_c("div", {
    staticClass: "credavail text-uppercase px-3 mb-2 mt-4 mb-4",
    staticStyle: {
      "text-align": "center"
    }
  }, [_vm._v("\n        CREDIT AVAILMENT TICKET (CAT) DU " + _vm._s((_vm$dossier_credit = _vm.dossier_credit) === null || _vm$dossier_credit === void 0 ? void 0 : _vm$dossier_credit.memo_of)), _c("br")]), _vm._v(" "), _c("div", {
    staticClass: "col-8"
  }, [_c("table", {
    staticClass: "table table-bordered"
  }, [_c("tbody", [_c("tr", [_vm._m(0), _vm._v(" "), _c("td", {
    staticClass: "align-middle"
  }, [_vm._v(_vm._s(_vm._f("formatDate")((_vm$dossier_credit2 = _vm.dossier_credit) === null || _vm$dossier_credit2 === void 0 || (_vm$dossier_credit2 = _vm$dossier_credit2[this.determineCredPubTables((_vm$dossier_credit3 = _vm.dossier_credit) === null || _vm$dossier_credit3 === void 0 ? void 0 : _vm$dossier_credit3.applied_templ_name)[0]]) === null || _vm$dossier_credit2 === void 0 ? void 0 : _vm$dossier_credit2["date_demande"])))])]), _vm._v(" "), _c("tr", [_vm._m(1), _vm._v(" "), _c("td", {
    staticClass: "align-middle"
  }, [_vm._v(_vm._s((_vm$dossier_credit4 = _vm.dossier_credit) === null || _vm$dossier_credit4 === void 0 || (_vm$dossier_credit4 = _vm$dossier_credit4[this.determineCredPubTables((_vm$dossier_credit5 = _vm.dossier_credit) === null || _vm$dossier_credit5 === void 0 ? void 0 : _vm$dossier_credit5.applied_templ_name)[0]]) === null || _vm$dossier_credit4 === void 0 ? void 0 : _vm$dossier_credit4["matricule_client"]) + "/ "), _c("b", [_vm._v("\n                            " + _vm._s((_vm$dossier_credit6 = _vm.dossier_credit) === null || _vm$dossier_credit6 === void 0 || (_vm$dossier_credit6 = _vm$dossier_credit6[this.determineCredPubTables((_vm$dossier_credit7 = _vm.dossier_credit) === null || _vm$dossier_credit7 === void 0 ? void 0 : _vm$dossier_credit7.applied_templ_name)[0]]) === null || _vm$dossier_credit6 === void 0 ? void 0 : _vm$dossier_credit6["denomination_client"]))])])]), _vm._v(" "), _c("tr", [_vm._m(2), _vm._v(" "), _c("td", {
    staticClass: "align-middle"
  }, [_vm._v(_vm._s((_vm$dossier_credit8 = _vm.dossier_credit) === null || _vm$dossier_credit8 === void 0 || (_vm$dossier_credit8 = _vm$dossier_credit8[this.determineCredPubTables((_vm$dossier_credit9 = _vm.dossier_credit) === null || _vm$dossier_credit9 === void 0 ? void 0 : _vm$dossier_credit9.applied_templ_name)[0]]) === null || _vm$dossier_credit8 === void 0 ? void 0 : _vm$dossier_credit8["numero_compte_courant"]))])]), _vm._v(" "), _c("tr", [_vm._m(3), _vm._v(" "), _c("td", {
    staticClass: "align-middle"
  }, [_vm._v(_vm._s((_vm$dossier_credit0 = _vm.dossier_credit) === null || _vm$dossier_credit0 === void 0 || (_vm$dossier_credit0 = _vm$dossier_credit0[this.determineCredPubTables((_vm$dossier_credit1 = _vm.dossier_credit) === null || _vm$dossier_credit1 === void 0 ? void 0 : _vm$dossier_credit1.applied_templ_name)[0]]) === null || _vm$dossier_credit0 === void 0 ? void 0 : _vm$dossier_credit0["adresse_professionnel_principal"]))])]), _vm._v(" "), _c("tr", [_vm._m(4), _vm._v(" "), _c("td", {
    staticClass: "align-middle"
  }, [_vm._v(_vm._s((_vm$dossier_credit10 = _vm.dossier_credit) === null || _vm$dossier_credit10 === void 0 || (_vm$dossier_credit10 = _vm$dossier_credit10[this.determineCredPubTables((_vm$dossier_credit11 = _vm.dossier_credit) === null || _vm$dossier_credit11 === void 0 ? void 0 : _vm$dossier_credit11.applied_templ_name)[0]]) === null || _vm$dossier_credit10 === void 0 ? void 0 : _vm$dossier_credit10["sous_secteur_activite_pcb"]))])]), _vm._v(" "), _c("tr", [_vm._m(5), _vm._v(" "), _c("td", {
    staticClass: "align-middle"
  }, [_vm._v(_vm._s((_vm$dossier_credit12 = _vm.dossier_credit) === null || _vm$dossier_credit12 === void 0 || (_vm$dossier_credit12 = _vm$dossier_credit12[this.determineCredPubTables((_vm$dossier_credit13 = _vm.dossier_credit) === null || _vm$dossier_credit13 === void 0 ? void 0 : _vm$dossier_credit13.applied_templ_name)[0]]) === null || _vm$dossier_credit12 === void 0 ? void 0 : _vm$dossier_credit12["type_credit"]))])])])])]), _vm._v(" "), _c("div", {
    staticClass: "col"
  }, [_c("div", {
    staticClass: "column g-3 justify-content-between align-content-center align-items-lg-stretch"
  }, [_c("div", {
    staticClass: "col"
  }, [_vm._v("\n                N Prêt: " + _vm._s((_vm$dossier_credit14 = _vm.dossier_credit) === null || _vm$dossier_credit14 === void 0 || (_vm$dossier_credit14 = _vm$dossier_credit14.cred_pub_tb_3000) === null || _vm$dossier_credit14 === void 0 ? void 0 : _vm$dossier_credit14.numero_pret) + "\n            ")]), _vm._v(" "), _c("div", {
    staticClass: "col my-4"
  }, [_vm._v("\n                N Comité: " + _vm._s((_vm$dossier_credit15 = _vm.dossier_credit) === null || _vm$dossier_credit15 === void 0 || (_vm$dossier_credit15 = _vm$dossier_credit15.cred_pub_tb_3000) === null || _vm$dossier_credit15 === void 0 ? void 0 : _vm$dossier_credit15.numero_comite) + "\n            ")])])]), _vm._v(" "), _c("div", {
    staticClass: "head-memorandum-title mb-4",
    staticStyle: {
      "text-align": "center"
    }
  }, [_vm._v("\n        CARACTERISTIQUES DU PRET\n    ")]), _vm._v(" "), _c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-bordered"
  }, [_c("tbody", [_c("tr", [_c("td", {
    staticClass: "align-middle"
  }, [_vm._v("Montant approuvé ")]), _vm._v(" "), _c("td", {
    staticClass: "align-middle"
  }, [_vm._v(_vm._s(_vm._f("formatNumber")((_vm$dossier_credit16 = _vm.dossier_credit) === null || _vm$dossier_credit16 === void 0 || (_vm$dossier_credit16 = _vm$dossier_credit16[this.determineCredPubTables((_vm$dossier_credit17 = _vm.dossier_credit) === null || _vm$dossier_credit17 === void 0 ? void 0 : _vm$dossier_credit17.applied_templ_name)[0]]) === null || _vm$dossier_credit16 === void 0 ? void 0 : _vm$dossier_credit16["enc_cumule_apres_acc"], true)) + "\n                    ")]), _vm._v(" "), _c("td", {
    staticClass: "align-middle"
  }, [_vm._v("Code du crédit ")]), _vm._v(" "), _c("td", {
    staticClass: "align-middle"
  }, [_vm._v(_vm._s((_vm$dossier_credit18 = _vm.dossier_credit) === null || _vm$dossier_credit18 === void 0 || (_vm$dossier_credit18 = _vm$dossier_credit18.cred_pub_tb_3000) === null || _vm$dossier_credit18 === void 0 ? void 0 : _vm$dossier_credit18.code_credit) + " ")])]), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "align-middle"
  }, [_vm._v("Motif du crédit")]), _vm._v(" "), _c("td", {
    staticClass: "align-middle",
    domProps: {
      innerHTML: _vm._s((_vm$dossier_credit19 = _vm.dossier_credit) === null || _vm$dossier_credit19 === void 0 || (_vm$dossier_credit19 = _vm$dossier_credit19.cred_pub_tb_2) === null || _vm$dossier_credit19 === void 0 ? void 0 : _vm$dossier_credit19.objet_detaille_credit)
    }
  }), _vm._v(" "), _c("td", {
    staticClass: "align-middle"
  }, [_vm._v("Secteur d’activités")]), _vm._v(" "), _c("td", {
    staticClass: "align-middle"
  }, [_vm._v(_vm._s((_vm$dossier_credit20 = _vm.dossier_credit) === null || _vm$dossier_credit20 === void 0 || (_vm$dossier_credit20 = _vm$dossier_credit20[this.determineCredPubTables((_vm$dossier_credit21 = _vm.dossier_credit) === null || _vm$dossier_credit21 === void 0 ? void 0 : _vm$dossier_credit21.applied_templ_name)[0]]) === null || _vm$dossier_credit20 === void 0 ? void 0 : _vm$dossier_credit20["secteur_activite"]))])]), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "align-middle"
  }, [_vm._v("Durée")]), _vm._v(" "), _c("td", {
    staticClass: "align-middle"
  }, [_vm._v(_vm._s((_vm$dossier_credit22 = _vm.dossier_credit) === null || _vm$dossier_credit22 === void 0 || (_vm$dossier_credit22 = _vm$dossier_credit22[this.determineCredPubTables((_vm$dossier_credit23 = _vm.dossier_credit) === null || _vm$dossier_credit23 === void 0 ? void 0 : _vm$dossier_credit23.applied_templ_name)[1]]) === null || _vm$dossier_credit22 === void 0 ? void 0 : _vm$dossier_credit22["duree_credit"]) + " mois")]), _vm._v(" "), _c("td", {
    staticClass: "align-middle"
  }, [_vm._v("Code Chargé d’affaire")]), _vm._v(" "), _c("td", {
    staticClass: "align-middle"
  }, [_vm._v(_vm._s((_vm$dossier_credit24 = _vm.dossier_credit) === null || _vm$dossier_credit24 === void 0 || (_vm$dossier_credit24 = _vm$dossier_credit24[this.determineCredPubTables((_vm$dossier_credit25 = _vm.dossier_credit) === null || _vm$dossier_credit25 === void 0 ? void 0 : _vm$dossier_credit25.applied_templ_name)[0]]) === null || _vm$dossier_credit24 === void 0 ? void 0 : _vm$dossier_credit24["caf"]))])]), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "align-middle"
  }, [_vm._v("Date de la 1ère échéance")]), _vm._v(" "), _c("td", {
    staticClass: "align-middle"
  }, [_vm._v(_vm._s((_vm$dossier_credit26 = _vm.dossier_credit) === null || _vm$dossier_credit26 === void 0 || (_vm$dossier_credit26 = _vm$dossier_credit26[this.determineCredPubTables((_vm$dossier_credit27 = _vm.dossier_credit) === null || _vm$dossier_credit27 === void 0 ? void 0 : _vm$dossier_credit27.applied_templ_name)[0]]) === null || _vm$dossier_credit26 === void 0 ? void 0 : _vm$dossier_credit26["premiere_echeance"]))]), _vm._v(" "), _c("td", {
    staticClass: "align-middle"
  }, [_vm._v("Date de la dernière échéance")]), _vm._v(" "), _c("td", {
    staticClass: "align-middle"
  }, [_vm._v(_vm._s((_vm$dossier_credit28 = _vm.dossier_credit) === null || _vm$dossier_credit28 === void 0 || (_vm$dossier_credit28 = _vm$dossier_credit28[this.determineCredPubTables((_vm$dossier_credit29 = _vm.dossier_credit) === null || _vm$dossier_credit29 === void 0 ? void 0 : _vm$dossier_credit29.applied_templ_name)[0]]) === null || _vm$dossier_credit28 === void 0 ? void 0 : _vm$dossier_credit28["derniere_echeance"]))])]), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "align-middle"
  }, [_vm._v("Nombre de mensualité")]), _vm._v(" "), _c("td", {
    staticClass: "align-middle"
  }, [_vm._v(_vm._s((_vm$dossier_credit30 = _vm.dossier_credit) === null || _vm$dossier_credit30 === void 0 || (_vm$dossier_credit30 = _vm$dossier_credit30[this.determineCredPubTables((_vm$dossier_credit31 = _vm.dossier_credit) === null || _vm$dossier_credit31 === void 0 ? void 0 : _vm$dossier_credit31.applied_templ_name)[1]]) === null || _vm$dossier_credit30 === void 0 ? void 0 : _vm$dossier_credit30["duree_credit"]))]), _vm._v(" "), _c("td", {
    staticClass: "align-middle"
  }, [_vm._v("Rating du risque crédit")]), _vm._v(" "), _c("td", {
    staticClass: "align-middle"
  }, [_vm._v(_vm._s((_vm$dossier_credit32 = _vm.dossier_credit) === null || _vm$dossier_credit32 === void 0 || (_vm$dossier_credit32 = _vm$dossier_credit32.cred_pub_tb_3001) === null || _vm$dossier_credit32 === void 0 ? void 0 : _vm$dossier_credit32.rating_risque_credit))])]), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "align-middle"
  }, [_vm._v("Source de remboursement")]), _vm._v(" "), _c("td", {
    staticClass: "align-middle"
  }, [_vm._v(_vm._s((_vm$dossier_credit33 = _vm.dossier_credit) === null || _vm$dossier_credit33 === void 0 || (_vm$dossier_credit33 = _vm$dossier_credit33.cred_pub_tb_3001) === null || _vm$dossier_credit33 === void 0 ? void 0 : _vm$dossier_credit33.source_remboursement))]), _vm._v(" "), _c("td", {
    staticClass: "align-middle"
  }, [_vm._v("Intérêts – Taux nominal (%)")]), _vm._v(" "), _c("td", {
    staticClass: "align-middle"
  }, [_vm._v(_vm._s((_vm$dossier_credit34 = _vm.dossier_credit) === null || _vm$dossier_credit34 === void 0 || (_vm$dossier_credit34 = _vm$dossier_credit34[this.determineCredPubTables((_vm$dossier_credit35 = _vm.dossier_credit) === null || _vm$dossier_credit35 === void 0 ? void 0 : _vm$dossier_credit35.applied_templ_name)[1]]) === null || _vm$dossier_credit34 === void 0 ? void 0 : _vm$dossier_credit34["source_remboursement"]))])]), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "align-middle"
  }, [_vm._v("Remboursement PQSS2")]), _vm._v(" "), _c("td", {
    staticClass: "align-middle"
  }, [_vm._v(_vm._s((_vm$dossier_credit36 = _vm.dossier_credit) === null || _vm$dossier_credit36 === void 0 || (_vm$dossier_credit36 = _vm$dossier_credit36.cred_pub_tb_3001) === null || _vm$dossier_credit36 === void 0 ? void 0 : _vm$dossier_credit36.remboursement_passe))]), _vm._v(" "), _c("td", {
    staticClass: "align-middle"
  }, [_vm._v("FRAIS DE DOSSIER EN %")]), _vm._v(" "), _c("td", {
    staticClass: "align-middle"
  }, [_vm._v(_vm._s((_vm$dossier_credit37 = _vm.dossier_credit) === null || _vm$dossier_credit37 === void 0 || (_vm$dossier_credit37 = _vm$dossier_credit37[this.determineCredPubTables((_vm$dossier_credit38 = _vm.dossier_credit) === null || _vm$dossier_credit38 === void 0 ? void 0 : _vm$dossier_credit38.applied_templ_name)[1]]) === null || _vm$dossier_credit37 === void 0 ? void 0 : _vm$dossier_credit37["valeur_garantieaccorde"]) + " ")])]), _vm._v(" "), _c("tr", [_vm._m(6), _vm._v(" "), _c("td", {
    staticClass: "align-middle text-center",
    attrs: {
      colspan: "2"
    }
  }, [_vm._v("\n                        " + _vm._s((_vm$dossier_credit39 = _vm.dossier_credit) === null || _vm$dossier_credit39 === void 0 || (_vm$dossier_credit39 = _vm$dossier_credit39[this.determineCredPubTables((_vm$dossier_credit40 = _vm.dossier_credit) === null || _vm$dossier_credit40 === void 0 ? void 0 : _vm$dossier_credit40.applied_templ_name)[1]]) === null || _vm$dossier_credit39 === void 0 || (_vm$dossier_credit39 = _vm$dossier_credit39["frais"]) === null || _vm$dossier_credit39 === void 0 || (_vm$dossier_credit39 = _vm$dossier_credit39[2]) === null || _vm$dossier_credit39 === void 0 ? void 0 : _vm$dossier_credit39["montant_frais"]))])]), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "align-middle"
  }, [_vm._v("Dépôt de garantie")]), _vm._v(" "), _c("td", {
    staticClass: "align-middle"
  }, [_vm._v(_vm._s(_vm._f("formatNumber")((_vm$dossier_credit41 = _vm.dossier_credit) === null || _vm$dossier_credit41 === void 0 || (_vm$dossier_credit41 = _vm$dossier_credit41[this.determineCredPubTables((_vm$dossier_credit42 = _vm.dossier_credit) === null || _vm$dossier_credit42 === void 0 ? void 0 : _vm$dossier_credit42.applied_templ_name)[1]]) === null || _vm$dossier_credit41 === void 0 ? void 0 : _vm$dossier_credit41["garantie"], true)) + " FCFA")]), _vm._v(" "), _c("td", [_vm._v("Epargne obligatoire")]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm._f("formatNumber")((_vm$dossier_credit43 = _vm.dossier_credit) === null || _vm$dossier_credit43 === void 0 || (_vm$dossier_credit43 = _vm$dossier_credit43[this.determineCredPubTables((_vm$dossier_credit44 = _vm.dossier_credit) === null || _vm$dossier_credit44 === void 0 ? void 0 : _vm$dossier_credit44.applied_templ_name)[1]]) === null || _vm$dossier_credit43 === void 0 || (_vm$dossier_credit43 = _vm$dossier_credit43["frais"]) === null || _vm$dossier_credit43 === void 0 || (_vm$dossier_credit43 = _vm$dossier_credit43[2]) === null || _vm$dossier_credit43 === void 0 ? void 0 : _vm$dossier_credit43["montant_pep"], true)))])]), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "align-middle"
  }, [_vm._v("Etat de(s) garantie(s)")]), _vm._v(" "), _c("td", {
    staticClass: "align-middle"
  }, [_vm._v(_vm._s((_vm$dossier_credit45 = _vm.dossier_credit) === null || _vm$dossier_credit45 === void 0 || (_vm$dossier_credit45 = _vm$dossier_credit45.cred_pub_tb_3001) === null || _vm$dossier_credit45 === void 0 ? void 0 : _vm$dossier_credit45.etat_garantie))]), _vm._v(" "), _c("td", [_vm._v("TEG")]), _vm._v(" "), _c("td", [_vm._v(_vm._s((_vm$dossier_credit46 = _vm.dossier_credit) === null || _vm$dossier_credit46 === void 0 || (_vm$dossier_credit46 = _vm$dossier_credit46.cred_pub_tb_3001) === null || _vm$dossier_credit46 === void 0 ? void 0 : _vm$dossier_credit46.taux_teg))])]), _vm._v(" "), _c("tr", [_c("td", [_vm._v("Expiration « due date » de(s) garantie(s)")]), _vm._v(" "), _c("td", [_vm._v(_vm._s((_vm$dossier_credit47 = _vm.dossier_credit) === null || _vm$dossier_credit47 === void 0 || (_vm$dossier_credit47 = _vm$dossier_credit47.cred_pub_tb_3001) === null || _vm$dossier_credit47 === void 0 ? void 0 : _vm$dossier_credit47.taux_teg))]), _vm._v(" "), _c("td", [_vm._v("Intérêts TTC")]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm._f("formatNumber")(Math.ceil((_vm$dossier_credit48 = _vm.dossier_credit) === null || _vm$dossier_credit48 === void 0 || (_vm$dossier_credit48 = _vm$dossier_credit48[this.determineCredPubTables((_vm$dossier_credit49 = _vm.dossier_credit) === null || _vm$dossier_credit49 === void 0 ? void 0 : _vm$dossier_credit49.applied_templ_name)[1]]) === null || _vm$dossier_credit48 === void 0 || (_vm$dossier_credit48 = _vm$dossier_credit48["echeance"]) === null || _vm$dossier_credit48 === void 0 ? void 0 : _vm$dossier_credit48["interet"]), true)) + " FCFA")])]), _vm._v(" "), _c("tr", [_c("td", [_vm._v("Date d’approbation du crédit")]), _vm._v(" "), _c("td", [_vm._v("\n                        " + _vm._s(_vm.dossier_credit.is_dossier_closed.date_cloture) + "\n                    ")]), _vm._v(" "), _c("td", [_vm._v("Frais de dossier HT")]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm._f("formatNumber")((_vm$dossier_credit50 = _vm.dossier_credit) === null || _vm$dossier_credit50 === void 0 || (_vm$dossier_credit50 = _vm$dossier_credit50[this.determineCredPubTables((_vm$dossier_credit51 = _vm.dossier_credit) === null || _vm$dossier_credit51 === void 0 ? void 0 : _vm$dossier_credit51.applied_templ_name)[1]]) === null || _vm$dossier_credit50 === void 0 || (_vm$dossier_credit50 = _vm$dossier_credit50["frais"]) === null || _vm$dossier_credit50 === void 0 || (_vm$dossier_credit50 = _vm$dossier_credit50[0]) === null || _vm$dossier_credit50 === void 0 ? void 0 : _vm$dossier_credit50["montant_frais"], true)) + " FCFA")])]), _vm._v(" "), _c("tr", [_c("td", [_vm._v("Autres frais")]), _vm._v(" "), _c("td", [(_vm$dossier_credit52 = _vm.dossier_credit) !== null && _vm$dossier_credit52 !== void 0 && (_vm$dossier_credit52 = _vm$dossier_credit52[this.determineCredPubTables((_vm$dossier_credit53 = _vm.dossier_credit) === null || _vm$dossier_credit53 === void 0 ? void 0 : _vm$dossier_credit53.applied_templ_name)[1]]) !== null && _vm$dossier_credit52 !== void 0 && _vm$dossier_credit52["frais"] ? _c("table", {
    staticClass: "table"
  }, [_c("tbody", _vm._l((_vm$dossier_credit54 = _vm.dossier_credit) === null || _vm$dossier_credit54 === void 0 || (_vm$dossier_credit54 = _vm$dossier_credit54[this.determineCredPubTables((_vm$dossier_credit55 = _vm.dossier_credit) === null || _vm$dossier_credit55 === void 0 ? void 0 : _vm$dossier_credit55.applied_templ_name)[1]]) === null || _vm$dossier_credit54 === void 0 ? void 0 : _vm$dossier_credit54["frais"], function (frais, indexFrais) {
    return _c("tr", {
      key: indexFrais
    }, [_c("td", [_vm._v(_vm._s(frais.libelle_taux))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm._f("formatNumber")(frais.montant_frais, true)))])]);
  }), 0)]) : _vm._e()]), _vm._v(" "), _c("td", {
    staticClass: "align-middle p-0",
    attrs: {
      colspan: "4"
    }
  }, [_c("table", {
    staticClass: "table p-2"
  }, [_c("tbody", [_c("tr", {}, [_c("td", {
    staticClass: "w-100",
    attrs: {
      colspan: "2"
    }
  }, [_vm._v("Frais d’assurance part partenaire ")]), _vm._v(" "), _c("td", {
    staticClass: "w-100",
    attrs: {
      colspan: "2"
    }
  }, [_vm._v(_vm._s((_vm$dossier_credit56 = _vm.dossier_credit) === null || _vm$dossier_credit56 === void 0 || (_vm$dossier_credit56 = _vm$dossier_credit56.cred_pub_tb_3001) === null || _vm$dossier_credit56 === void 0 ? void 0 : _vm$dossier_credit56.frais_part_nsia) + "\n                                    ")])]), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "w-100",
    attrs: {
      colspan: "2"
    }
  }, [_vm._v("Frais d’assurance part COFINA")]), _vm._v(" "), _c("td", {
    staticClass: "w-100",
    attrs: {
      colspan: "2"
    }
  }, [_vm._v("\n                                        " + _vm._s((_vm$dossier_credit57 = _vm.dossier_credit) === null || _vm$dossier_credit57 === void 0 || (_vm$dossier_credit57 = _vm$dossier_credit57.cred_pub_tb_3001) === null || _vm$dossier_credit57 === void 0 ? void 0 : _vm$dossier_credit57.frais_part_cofina))])])])])])])])])]), _vm._v(" "), ["Crédit conso"].includes((_vm$dossier_credit58 = _vm.dossier_credit) === null || _vm$dossier_credit58 === void 0 ? void 0 : _vm$dossier_credit58.applied_templ_name) ? _c("div", {
    staticClass: "table-responsive"
  }, [_c("div", {
    staticClass: "head-memorandum-title px-3 mb-2",
    staticStyle: {
      "text-align": "center"
    }
  }, [_vm._v("\n            GARANTIES / SUPPORT\n        ")]), _vm._v(" "), _c("div", {
    staticClass: "table-responsive py-3 justify-content-center"
  }, [_c("div", {
    staticClass: "table-responsive py-3 justify-content-center"
  }, [_c("table", {
    staticClass: "table"
  }, [_vm._m(7), _vm._v(" "), _c("tbody", {
    staticStyle: {
      "font-size": "16px"
    }
  }, _vm._l((_vm$dossier_credit59 = _vm.dossier_credit) === null || _vm$dossier_credit59 === void 0 || (_vm$dossier_credit59 = _vm$dossier_credit59.cred_pub_tb_7004) === null || _vm$dossier_credit59 === void 0 ? void 0 : _vm$dossier_credit59.garantie_supports, function (dossier, index) {
    return _c("tr", {
      key: index
    }, [dossier.value == true ? _c("td", {
      staticClass: "align-middle"
    }, [_c("input", {
      staticClass: "form-check-input",
      staticStyle: {
        width: "20px",
        height: "20px"
      },
      attrs: {
        onclick: "return false;",
        type: "checkbox",
        checked: "",
        disabled: ""
      }
    })]) : _c("td", {
      staticClass: "align-middle",
      staticStyle: {
        width: "20px",
        height: "20px"
      }
    }, [_c("input", {
      staticClass: "form-check-input",
      attrs: {
        type: "checkbox",
        onclick: "return false;",
        disabled: ""
      }
    })]), _vm._v(" "), _c("td", {
      staticClass: "align-middle"
    }, [_vm._v(_vm._s(dossier.label))])]);
  }), 0)]), _vm._v(" "), _c("br")]), _vm._v(" "), _c("br"), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "fw-bold text-center"
  }, [_vm._v("\n              Garanties supports porposés par le ARC\n            ")]), _vm._v(" "), _c("table", {
    staticClass: "table garantie_supports"
  }, [_vm._m(8), _vm._v(" "), _c("tbody", {
    staticStyle: {
      "font-size": "16px"
    }
  }, _vm._l((_vm$dossier_credit60 = _vm.dossier_credit) === null || _vm$dossier_credit60 === void 0 || (_vm$dossier_credit60 = _vm$dossier_credit60.cred_pub_tb_49) === null || _vm$dossier_credit60 === void 0 ? void 0 : _vm$dossier_credit60.garantie_supports, function (garantie_support_arc, index) {
    return _c("tr", {
      key: index
    }, [garantie_support_arc.value == true ? _c("td", {
      staticClass: "align-middle"
    }, [_c("input", {
      staticClass: "form-check-input",
      staticStyle: {
        width: "20px",
        height: "20px"
      },
      attrs: {
        onclick: "return false;",
        type: "checkbox",
        checked: "",
        disabled: ""
      }
    })]) : _c("td", {
      staticClass: "align-middle",
      staticStyle: {
        width: "20px",
        height: "20px"
      }
    }, [_c("input", {
      staticClass: "form-check-input",
      attrs: {
        type: "checkbox",
        onclick: "return false;",
        disabled: ""
      }
    })]), _vm._v(" "), _c("td", {
      staticClass: "align-middle"
    }, [_vm._v(_vm._s(garantie_support_arc.label))])]);
  }), 0)])]), _vm._v(" "), _c("br"), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "fw-bold text-center"
  }, [_vm._v("\n              Garanties supports porposés par le SRC\n            ")]), _vm._v(" "), _c("table", {
    staticClass: "table garantie_supports"
  }, [_vm._m(9), _vm._v(" "), _c("tbody", {
    staticStyle: {
      "font-size": "16px"
    }
  }, _vm._l((_vm$dossier_credit61 = _vm.dossier_credit) === null || _vm$dossier_credit61 === void 0 || (_vm$dossier_credit61 = _vm$dossier_credit61.cred_pub_tb_490) === null || _vm$dossier_credit61 === void 0 ? void 0 : _vm$dossier_credit61.garantie_supports, function (garantie_support_arc, index) {
    return _c("tr", {
      key: index
    }, [garantie_support_arc.value == true ? _c("td", {
      staticClass: "align-middle"
    }, [_c("input", {
      staticClass: "form-check-input",
      staticStyle: {
        width: "20px",
        height: "20px"
      },
      attrs: {
        onclick: "return false;",
        type: "checkbox",
        checked: "",
        disabled: ""
      }
    })]) : _c("td", {
      staticClass: "align-middle",
      staticStyle: {
        width: "20px",
        height: "20px"
      }
    }, [_c("input", {
      staticClass: "form-check-input",
      attrs: {
        type: "checkbox",
        onclick: "return false;",
        disabled: ""
      }
    })]), _vm._v(" "), _c("td", {
      staticClass: "align-middle"
    }, [_vm._v(_vm._s(garantie_support_arc.label))])]);
  }), 0)])]), _vm._v(" "), _c("br"), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "fw-bold text-center"
  }, [_vm._v("\n              Garanties supports porposés par le SRCG\n            ")]), _vm._v(" "), _c("table", {
    staticClass: "table garantie_supports"
  }, [_vm._m(10), _vm._v(" "), _c("tbody", {
    staticStyle: {
      "font-size": "16px"
    }
  }, _vm._l((_vm$dossier_credit62 = _vm.dossier_credit) === null || _vm$dossier_credit62 === void 0 || (_vm$dossier_credit62 = _vm$dossier_credit62.cred_pub_tb_0490) === null || _vm$dossier_credit62 === void 0 ? void 0 : _vm$dossier_credit62.garantie_supports, function (garantie_support_srcg, index) {
    return _c("tr", {
      key: index
    }, [garantie_support_srcg.value == true ? _c("td", {
      staticClass: "align-middle"
    }, [_c("input", {
      staticClass: "form-check-input",
      staticStyle: {
        width: "20px",
        height: "20px"
      },
      attrs: {
        onclick: "return false;",
        type: "checkbox",
        checked: "",
        disabled: ""
      }
    })]) : _c("td", {
      staticClass: "align-middle",
      staticStyle: {
        width: "20px",
        height: "20px"
      }
    }, [_c("input", {
      staticClass: "form-check-input",
      attrs: {
        type: "checkbox",
        onclick: "return false;",
        disabled: ""
      }
    })]), _vm._v(" "), _c("td", {
      staticClass: "align-middle"
    }, [_vm._v(_vm._s(garantie_support_srcg.label))])]);
  }), 0)])]), _vm._v(" "), _c("br"), _vm._v(" "), _c("table", {
    staticClass: "table table-bordered mb-2 mt-3"
  }, [_vm._m(11), _vm._v(" "), _c("tbody", [_c("tr", [_c("td", {
    domProps: {
      innerHTML: _vm._s((_vm$dossier_credit63 = _vm.dossier_credit) === null || _vm$dossier_credit63 === void 0 || (_vm$dossier_credit63 = _vm$dossier_credit63.cred_pub_tb_0490) === null || _vm$dossier_credit63 === void 0 ? void 0 : _vm$dossier_credit63.comment_garantie_supports)
    }
  })])])])])]) : _c("div", [_c("div", {
    staticClass: "head-memorandum-title text-uppercase mb-4",
    staticStyle: {
      "text-align": "center"
    }
  }, [_vm._v("\n        Sûretés proposées et garanties\n    ")]), _vm._v(" "), _c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-bordered"
  }, [_c("tbody", [_vm._m(12), _vm._v(" "), _vm._m(13), _vm._v(" "), _vm._l(_vm.hypotheques, function (hypo_du_caf, index) {
    return _c("tr", {
      key: index
    }, [_c("td", [_vm._v("\n                        " + _vm._s(hypo_du_caf === null || hypo_du_caf === void 0 ? void 0 : hypo_du_caf.bien_hypotheque) + "\n                    ")]), _vm._v(" "), _c("td", [_vm._v("\n                        " + _vm._s(hypo_du_caf === null || hypo_du_caf === void 0 ? void 0 : hypo_du_caf.proprietaire) + "\n                    ")]), _vm._v(" "), _c("td", [_vm._v("\n                        " + _vm._s(_vm._f("formatDate")(hypo_du_caf === null || hypo_du_caf === void 0 ? void 0 : hypo_du_caf.annee_achat)) + "\n                    ")]), _vm._v(" "), _c("td", [_vm._v("\n                        " + _vm._s(hypo_du_caf === null || hypo_du_caf === void 0 ? void 0 : hypo_du_caf.adresse_emplacement) + "\n                    ")]), _vm._v(" "), _c("td", [_vm._v("\n                        " + _vm._s(hypo_du_caf === null || hypo_du_caf === void 0 ? void 0 : hypo_du_caf.longitude) + "\n                    ")]), _vm._v(" "), _c("td", [_vm._v("\n                        " + _vm._s(hypo_du_caf === null || hypo_du_caf === void 0 ? void 0 : hypo_du_caf.lattitude) + "\n                    ")]), _vm._v(" "), _c("td", [_vm._v("\n                        " + _vm._s(_vm._f("formatDate")(hypo_du_caf === null || hypo_du_caf === void 0 ? void 0 : hypo_du_caf.date_evaluation)) + "\n                    ")]), _vm._v(" "), _c("td", [_vm._v("\n                        " + _vm._s(hypo_du_caf === null || hypo_du_caf === void 0 ? void 0 : hypo_du_caf.valeur_marchande) + "\n                    ")]), _vm._v(" "), _c("td", [_vm._v("\n                        " + _vm._s(hypo_du_caf === null || hypo_du_caf === void 0 ? void 0 : hypo_du_caf.valeur_considere) + "\n                    ")])]);
  }), _vm._v(" "), _c("tr", [_vm._m(14), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.total_hypotheques_valeur_marchande))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.total_hypotheques_valeur_considere))])])], 2)])]), _vm._v(" "), _c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-bordered"
  }, [_vm._m(15), _vm._v(" "), _c("tbody", [_vm._m(16), _vm._v(" "), _vm._l(_vm.gages, function (gage, index) {
    return _c("tr", {
      key: index
    }, [_c("td", [_vm._v("\n                        " + _vm._s(gage === null || gage === void 0 ? void 0 : gage.bien_a_gage) + "\n                    ")]), _vm._v(" "), _c("td", [_vm._v("\n                        " + _vm._s(gage === null || gage === void 0 ? void 0 : gage.proprietaire) + "\n                    ")]), _vm._v(" "), _c("td", [_vm._v("\n                        " + _vm._s(gage === null || gage === void 0 ? void 0 : gage.numero_tel) + "\n                    ")]), _vm._v(" "), _c("td", [_vm._v("\n                        " + _vm._s(_vm._f("formatDate")(gage === null || gage === void 0 ? void 0 : gage.annee_achat)) + "\n                    ")]), _vm._v(" "), _c("td", [_vm._v("\n                        " + _vm._s(gage === null || gage === void 0 ? void 0 : gage.adresse_emplacement) + "\n                    ")]), _vm._v(" "), _c("td", [_vm._v("\n                        " + _vm._s(_vm._f("formatDate")(gage === null || gage === void 0 ? void 0 : gage.date_evaluation)) + "\n                    ")]), _vm._v(" "), _c("td", [_vm._v("\n                        " + _vm._s(gage === null || gage === void 0 ? void 0 : gage.valeur_marchande) + "\n                    ")]), _vm._v(" "), _c("td", [_vm._v("\n                        " + _vm._s(gage === null || gage === void 0 ? void 0 : gage.valeur_considere) + "\n                    ")])]);
  }), _vm._v(" "), _c("tr", [_vm._m(17), _vm._v(" "), _c("td", [_vm._v("\n                        " + _vm._s(_vm.total_gages_valeur_marchande) + "\n                    ")]), _vm._v(" "), _c("td", [_vm._v("\n                        " + _vm._s(_vm.total_gages_valeur_considere) + "\n                    ")])])], 2)])]), _vm._v(" "), _c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-bodered"
  }, [_vm._m(18), _vm._v(" "), _c("tbody", [_c("tr", [_c("td", {
    staticClass: "align-middle p-0",
    attrs: {
      colspan: "6"
    }
  }, [_vm._l(_vm.suretes_diverses, function (sure, index) {
    return _c("div", {
      key: index,
      staticClass: "form-group py-2"
    }, [_c("div", {
      staticClass: "form-check"
    }, [_c("label", {
      staticClass: "form-check-label",
      attrs: {
        "for": sure.id
      }
    }, [_vm._v("\n                                    " + _vm._s(index + 1 + " " + ".") + " " + _vm._s(sure === null || sure === void 0 ? void 0 : sure.label) + "\n                                ")])])]);
  }), _vm._v(" "), ((_vm$dossier_credit64 = _vm.dossier_credit) === null || _vm$dossier_credit64 === void 0 || (_vm$dossier_credit64 = _vm$dossier_credit64[this.determineCredPubTables((_vm$dossier_credit65 = _vm.dossier_credit) === null || _vm$dossier_credit65 === void 0 ? void 0 : _vm$dossier_credit65.applied_templ_name)[4]]) === null || _vm$dossier_credit64 === void 0 || (_vm$dossier_credit64 = _vm$dossier_credit64["autres_suretes_diverses"]) === null || _vm$dossier_credit64 === void 0 ? void 0 : _vm$dossier_credit64.length) > 0 ? _c("table", {
    staticClass: "table table-bordered table-striped table-responsive table-hover"
  }, [_vm._m(19), _vm._v(" "), _c("tbody", [_vm._m(20), _vm._v(" "), _vm._l(_vm.autres_suretes_diverses, function (autre_surete, index) {
    return _c("tr", {
      key: autre_surete === null || autre_surete === void 0 ? void 0 : autre_surete.label
    }, [_c("td", {
      staticClass: "col-1"
    }, [_vm._v(_vm._s(index + 1) + ".")]), _vm._v(" "), _c("td", {
      staticClass: "col-10"
    }, [_vm._v(_vm._s(autre_surete === null || autre_surete === void 0 ? void 0 : autre_surete.label))])]);
  })], 2)]) : _vm._e()], 2)])])])]), _vm._v(" "), _c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-bordered"
  }, [_vm._m(21), _vm._v(" "), _c("tbody", [_vm._m(22), _vm._v(" "), _vm._l(_vm.cautionnement_solidaires, function (cautionnement, index) {
    return _c("tr", {
      key: index
    }, [_c("td", {
      staticClass: "col-4"
    }, [_vm._v("\n                        " + _vm._s(cautionnement === null || cautionnement === void 0 ? void 0 : cautionnement.nom_prenoms) + "\n\n                    ")]), _vm._v(" "), _c("td", {
      staticClass: "col-2"
    }, [_vm._v("\n                        " + _vm._s(cautionnement === null || cautionnement === void 0 ? void 0 : cautionnement.profession) + "\n                    ")]), _vm._v(" "), _c("td", {
      staticClass: "col-2"
    }, [_vm._v("\n                        " + _vm._s(cautionnement === null || cautionnement === void 0 ? void 0 : cautionnement.revenu_mensuel) + "\n                    ")]), _vm._v(" "), _c("td", {
      staticClass: "col-2"
    }, [_vm._v("\n                        " + _vm._s(cautionnement === null || cautionnement === void 0 ? void 0 : cautionnement.valeur_patrimoine) + "\n                    ")])]);
  })], 2)])]), _vm._v(" "), _c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-bordered"
  }, [_vm._m(23), _vm._v(" "), _c("tbody", [_vm._m(24), _vm._v(" "), _vm._l(_vm.cond_particulieres, function (cond_particuliere, index) {
    return _c("tr", {
      key: index
    }, [_c("td", [_vm._v(" " + _vm._s(index + 1) + ". ")]), _vm._v(" "), _c("td", [_vm._v("\n                        " + _vm._s(cond_particuliere === null || cond_particuliere === void 0 ? void 0 : cond_particuliere.cond_description) + "\n                    ")])]);
  })], 2)])])]), _vm._v(" "), _c("div", {
    staticClass: "head-memorandum-title mb-4",
    staticStyle: {
      "text-align": "center"
    }
  }, [_vm._v("\n        CHECK LIST\n    ")]), _vm._v(" "), _c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-bordered"
  }, [_vm._m(25), _vm._v(" "), _c("tbody", _vm._l((_vm$dossier_credit66 = _vm.dossier_credit) === null || _vm$dossier_credit66 === void 0 || (_vm$dossier_credit66 = _vm$dossier_credit66.cred_pub_tb_3004) === null || _vm$dossier_credit66 === void 0 ? void 0 : _vm$dossier_credit66.check_lists, function (cl, index) {
    return _c("tr", {
      key: index
    }, [_c("td", {
      staticClass: "align-middle"
    }, [_vm._v(_vm._s(cl.libelle))]), _vm._v(" "), cl.isChecked == true ? _c("td", {
      staticClass: "align-middle"
    }, [_c("center", [_c("input", {
      staticClass: "form-check-input",
      staticStyle: {
        width: "40px",
        height: "40px"
      },
      attrs: {
        disabled: "",
        type: "checkbox",
        checked: ""
      }
    })])], 1) : _c("td", {
      staticClass: "align-middle"
    }, [_c("center", [_c("input", {
      staticClass: "form-check-input",
      staticStyle: {
        width: "40px",
        height: "40px"
      },
      attrs: {
        disabled: "",
        type: "checkbox"
      }
    })])], 1), _vm._v(" "), _c("td", [_vm._v(_vm._s(cl.commentaire))])]);
  }), 0)])]), _vm._v(" "), _c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-bordered"
  }, [_c("tbody", [_vm._m(26), _vm._v(" "), _c("tr", [_c("td", [_c("span", {
    domProps: {
      innerHTML: _vm._s((_vm$dossier_credit67 = _vm.dossier_credit) === null || _vm$dossier_credit67 === void 0 || (_vm$dossier_credit67 = _vm$dossier_credit67.cred_pub_tb_3004) === null || _vm$dossier_credit67 === void 0 ? void 0 : _vm$dossier_credit67.comments)
    }
  })])])])])])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {
    staticClass: "align-middle"
  }, [_c("b", [_vm._v("Date")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {
    staticClass: "align-middle"
  }, [_c("b", [_vm._v("Client (matricule / dénomination)")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {
    staticClass: "align-middle"
  }, [_c("b", [_vm._v("Numero de compte")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {
    staticClass: "align-middle"
  }, [_c("b", [_vm._v(" Addresse")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {
    staticClass: "align-middle"
  }, [_c("b", [_vm._v("Nature de crédit")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {
    staticClass: "align-middle"
  }, [_c("b", [_vm._v("Type de crédit")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {
    staticClass: "align-middle",
    attrs: {
      colspan: "2"
    }
  }, [_c("b", [_vm._v("prime de risque")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", {
    staticClass: "bg-grey"
  }, [_c("th", {
    attrs: {
      colspan: "2"
    }
  }, [_vm._v("Garanties support renseignées par le CAF")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("tr", [_c("th", {
    staticStyle: {
      "text-align": "center"
    },
    attrs: {
      colspan: "",
      scope: "row"
    }
  }), _vm._v(" "), _c("th", {
    staticStyle: {
      "text-align": "center"
    },
    attrs: {
      colspan: "",
      scope: "row"
    }
  }), _vm._v(" "), _c("th", {
    staticStyle: {
      "text-align": "center"
    },
    attrs: {
      colspan: "",
      scope: "row"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("tr", [_c("th", {
    staticStyle: {
      "text-align": "center"
    },
    attrs: {
      colspan: "",
      scope: "row"
    }
  }), _vm._v(" "), _c("th", {
    staticStyle: {
      "text-align": "center"
    },
    attrs: {
      colspan: "",
      scope: "row"
    }
  }), _vm._v(" "), _c("th", {
    staticStyle: {
      "text-align": "center"
    },
    attrs: {
      colspan: "",
      scope: "row"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("tr", [_c("th", {
    staticStyle: {
      "text-align": "center"
    },
    attrs: {
      colspan: "",
      scope: "row"
    }
  }), _vm._v(" "), _c("th", {
    staticStyle: {
      "text-align": "center"
    },
    attrs: {
      colspan: "",
      scope: "row"
    }
  }), _vm._v(" "), _c("th", {
    staticStyle: {
      "text-align": "center"
    },
    attrs: {
      colspan: "",
      scope: "row"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("th", {
    staticClass: "bg-grey border"
  }, [_vm._v("Commentaire")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("tr", [_c("th", {
    staticClass: "text-center bg-grey",
    attrs: {
      colspan: "9"
    }
  }, [_vm._v("\n                        Hypothèques\n                    ")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("tr", [_c("td", [_c("label", [_vm._v("Hypothèques ")])]), _vm._v(" "), _c("td", [_c("label", [_vm._v("Propriétaire")])]), _vm._v(" "), _c("td", [_c("label", [_vm._v("Date d'achat")])]), _vm._v(" "), _c("td", [_c("label", [_vm._v("Adresse de l'emplacement")])]), _vm._v(" "), _c("td", [_c("label", [_vm._v("Longitude")])]), _vm._v(" "), _c("td", [_c("label", [_vm._v("Latitude")])]), _vm._v(" "), _c("td", [_c("label", [_vm._v("Date d'évaluation")])]), _vm._v(" "), _c("td", [_c("label", [_vm._v("Valeur marchande")])]), _vm._v(" "), _c("td", [_c("label", [_vm._v("Valeur considérée")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {
    staticClass: "text-end",
    attrs: {
      colspan: "7"
    }
  }, [_c("b", [_vm._v("Totaux")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", {
    staticClass: "bg-grey"
  }, [_c("th", {
    staticClass: "text-center",
    attrs: {
      colspan: "8"
    }
  }, [_vm._v("\n                        Gages\n                    ")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("tr", [_c("td", [_c("label", [_vm._v("Gages ")])]), _vm._v(" "), _c("td", [_c("label", [_vm._v("Propriétaire")])]), _vm._v(" "), _c("td", [_c("label", [_vm._v("N° du titre foncier")])]), _vm._v(" "), _c("td", [_c("label", [_vm._v("Date d'achat")])]), _vm._v(" "), _c("td", [_c("label", [_vm._v("Adresse de l'emplacement")])]), _vm._v(" "), _c("td", [_c("label", [_vm._v("Date d'évaluation")])]), _vm._v(" "), _c("td", [_c("label", [_vm._v("Valeur marchande")])]), _vm._v(" "), _c("td", [_c("label", [_vm._v("Valeur considérée")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {
    staticClass: "text-end",
    attrs: {
      colspan: "6"
    }
  }, [_c("b", [_vm._v("Totaux")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("th", {
    staticClass: "bg-grey text-center"
  }, [_vm._v("suretés diverses")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("th", {
    attrs: {
      colspan: "2"
    }
  }, [_vm._v("\n                                        Sûretés diverses\n                                    ")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("tr", [_c("th", [_vm._v("#")]), _vm._v(" "), _c("th", [_vm._v("Autres suretés diverses")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", {
    staticClass: "bg-grey text-center"
  }, [_c("td", {
    attrs: {
      colspan: "4"
    }
  }, [_vm._v("\n                        Cautionnement solidaire\n                    ")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("tr", [_c("td", [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v(" Nom et prénoms")])]), _vm._v(" "), _c("td", [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Profession")])]), _vm._v(" "), _c("td", [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Revenue moyens / mois")])]), _vm._v(" "), _c("td", [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Valeur patrimoine")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", {
    staticClass: "bg-grey text-center"
  }, [_c("th", {
    attrs: {
      colspan: "2"
    }
  }, [_vm._v("\n                        Conditions particulières\n                    ")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("tr", [_c("td", [_vm._v("N°")]), _vm._v(" "), _c("td", [_c("label", [_vm._v(" Description")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", {
    staticClass: "bg-ed-primary"
  }, [_c("tr", [_c("th", {
    staticStyle: {
      "text-align": "center"
    },
    attrs: {
      colspan: "",
      scope: "row"
    }
  }, [_vm._v("\n                               LIBELLES\n                           ")]), _vm._v(" "), _c("th", {
    staticStyle: {
      "text-align": "center"
    },
    attrs: {
      colspan: "",
      scope: "row"
    }
  }, [_vm._v("\n                               REPONSES\n                           ")]), _vm._v(" "), _c("th", {
    staticStyle: {
      "text-align": "center"
    },
    attrs: {
      colspan: "",
      scope: "row"
    }
  }, [_vm._v("\n                               COMMENTAIRES\n                           ")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("tr", [_c("th", {
    staticClass: "text-center bg-grey"
  }, [_vm._v("\n                        Commentaire synthèse\n                    ")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/microfinance/cofina/credavailtick/--CR1.vue?vue&type=style&index=0&id=2ae388e7&lang=css&scoped=true":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/microfinance/cofina/credavailtick/--CR1.vue?vue&type=style&index=0&id=2ae388e7&lang=css&scoped=true ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.credavail[data-v-2ae388e7] {\r\n    margin-top: 10px;\r\n    padding: 10px;\r\n    border: 2px solid #fff;\r\n    font-weight: 550;\r\n    font-size: 16px;\r\n    text-align: center;\r\n    text-transform: uppercase;\r\n    background-color: #dc0030;\r\n    color: #fff;\n}\n.head-memorandum-title[data-v-2ae388e7] {\r\n    margin-top: 15px;\r\n    padding: 16px;\r\n    color: #fff;\r\n    font-weight: bold;\r\n    background-color: #34495e;\r\n    border: 2px solid #575759;\r\n    box-shadow: 1px 3px 4px #ddd;\r\n    font-size: 16px;\r\n    text-align: center;\r\n    text-transform: uppercase;\r\n    border-radius: 10px;\r\n    margin-bottom: 15px;\n}\n.bg-grey[data-v-2ae388e7] {\r\n    background-color: #f4f3f3;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/microfinance/cofina/credavailtick/--CR1.vue?vue&type=style&index=0&id=2ae388e7&lang=css&scoped=true":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/microfinance/cofina/credavailtick/--CR1.vue?vue&type=style&index=0&id=2ae388e7&lang=css&scoped=true ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CR1_vue_vue_type_style_index_0_id_2ae388e7_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./--CR1.vue?vue&type=style&index=0&id=2ae388e7&lang=css&scoped=true */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/microfinance/cofina/credavailtick/--CR1.vue?vue&type=style&index=0&id=2ae388e7&lang=css&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CR1_vue_vue_type_style_index_0_id_2ae388e7_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CR1_vue_vue_type_style_index_0_id_2ae388e7_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/offview/microfinance/cofina/credavailtick/--CR1.vue":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/offview/microfinance/cofina/credavailtick/--CR1.vue ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CR1_vue_vue_type_template_id_2ae388e7_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./--CR1.vue?vue&type=template&id=2ae388e7&scoped=true */ "./resources/js/components/offview/microfinance/cofina/credavailtick/--CR1.vue?vue&type=template&id=2ae388e7&scoped=true");
/* harmony import */ var _CR1_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./--CR1.vue?vue&type=script&lang=js */ "./resources/js/components/offview/microfinance/cofina/credavailtick/--CR1.vue?vue&type=script&lang=js");
/* harmony import */ var _CR1_vue_vue_type_style_index_0_id_2ae388e7_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./--CR1.vue?vue&type=style&index=0&id=2ae388e7&lang=css&scoped=true */ "./resources/js/components/offview/microfinance/cofina/credavailtick/--CR1.vue?vue&type=style&index=0&id=2ae388e7&lang=css&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _CR1_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _CR1_vue_vue_type_template_id_2ae388e7_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _CR1_vue_vue_type_template_id_2ae388e7_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "2ae388e7",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/offview/microfinance/cofina/credavailtick/--CR1.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/offview/microfinance/cofina/credavailtick/--CR1.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/components/offview/microfinance/cofina/credavailtick/--CR1.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CR1_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./--CR1.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/microfinance/cofina/credavailtick/--CR1.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CR1_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/offview/microfinance/cofina/credavailtick/--CR1.vue?vue&type=style&index=0&id=2ae388e7&lang=css&scoped=true":
/*!*********************************************************************************************************************************************!*\
  !*** ./resources/js/components/offview/microfinance/cofina/credavailtick/--CR1.vue?vue&type=style&index=0&id=2ae388e7&lang=css&scoped=true ***!
  \*********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CR1_vue_vue_type_style_index_0_id_2ae388e7_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./--CR1.vue?vue&type=style&index=0&id=2ae388e7&lang=css&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/microfinance/cofina/credavailtick/--CR1.vue?vue&type=style&index=0&id=2ae388e7&lang=css&scoped=true");


/***/ }),

/***/ "./resources/js/components/offview/microfinance/cofina/credavailtick/--CR1.vue?vue&type=template&id=2ae388e7&scoped=true":
/*!*******************************************************************************************************************************!*\
  !*** ./resources/js/components/offview/microfinance/cofina/credavailtick/--CR1.vue?vue&type=template&id=2ae388e7&scoped=true ***!
  \*******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CR1_vue_vue_type_template_id_2ae388e7_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CR1_vue_vue_type_template_id_2ae388e7_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CR1_vue_vue_type_template_id_2ae388e7_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./--CR1.vue?vue&type=template&id=2ae388e7&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/microfinance/cofina/credavailtick/--CR1.vue?vue&type=template&id=2ae388e7&scoped=true");


/***/ })

}]);