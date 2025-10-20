"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_offview_bank_nsia_memo_carcasse_ppi_PPI1_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/memo/carcasse_ppi/PPI1.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/memo/carcasse_ppi/PPI1.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    dossier_credit: Object
  },
  created: function created() {
    this.loadData();
  },
  data: function data() {
    var _this$dossier_credit, _this$dossier_credit2, _this$dossier_credit3, _this$dossier_credit4, _this$dossier_credit5, _this$dossier_credit6, _this$dossier_credit7, _this$dossier_credit8, _this$dossier_credit9, _this$dossier_credit0, _this$dossier_credit1;
    return {
      data_tb1: (_this$dossier_credit = this.dossier_credit) === null || _this$dossier_credit === void 0 ? void 0 : _this$dossier_credit.cred_pub_tb_30001,
      data_tb2: (_this$dossier_credit2 = this.dossier_credit) === null || _this$dossier_credit2 === void 0 ? void 0 : _this$dossier_credit2.cred_pub_tb_30002,
      data_tb3: (_this$dossier_credit3 = this.dossier_credit) === null || _this$dossier_credit3 === void 0 ? void 0 : _this$dossier_credit3.cred_pub_tb_30003,
      data_tb4: (_this$dossier_credit4 = this.dossier_credit) === null || _this$dossier_credit4 === void 0 ? void 0 : _this$dossier_credit4.cred_pub_tb_30004,
      data_tb5: (_this$dossier_credit5 = this.dossier_credit) === null || _this$dossier_credit5 === void 0 ? void 0 : _this$dossier_credit5.cred_pub_tb_30005,
      data_tb7: (_this$dossier_credit6 = this.dossier_credit) === null || _this$dossier_credit6 === void 0 ? void 0 : _this$dossier_credit6.cred_pub_tb_30007,
      caf_recorded_file: (_this$dossier_credit7 = this.dossier_credit) === null || _this$dossier_credit7 === void 0 ? void 0 : _this$dossier_credit7.caf_recorded_file,
      initiateur: (_this$dossier_credit8 = this.dossier_credit) === null || _this$dossier_credit8 === void 0 ? void 0 : _this$dossier_credit8.monteur_doss,
      gestionnaire: (_this$dossier_credit9 = this.dossier_credit) === null || _this$dossier_credit9 === void 0 ? void 0 : _this$dossier_credit9.monteur_doss,
      nom: (_this$dossier_credit0 = this.dossier_credit) === null || _this$dossier_credit0 === void 0 || (_this$dossier_credit0 = _this$dossier_credit0.cred_pub_tb_30002) === null || _this$dossier_credit0 === void 0 ? void 0 : _this$dossier_credit0.nom,
      prenoms: (_this$dossier_credit1 = this.dossier_credit) === null || _this$dossier_credit1 === void 0 || (_this$dossier_credit1 = _this$dossier_credit1.cred_pub_tb_30002) === null || _this$dossier_credit1 === void 0 ? void 0 : _this$dossier_credit1.prenoms,
      isLoadingFile: false,
      usage: [{
        checked: false,
        libelle: "Habitation de l'emprunteur"
      }, {
        checked: false,
        libelle: "Locatif"
      }, {
        checked: false,
        libelle: "Résidence principale"
      }, {
        checked: false,
        libelle: "Résidence secondaire"
      }],
      agence: ""
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
    formatAmount: function formatAmount(x) {
      return x === null || x === void 0 ? void 0 : x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    },
    formatMonth: function formatMonth(value) {
      return value === null || value === void 0 ? void 0 : value.toString().split('-').reverse().join('/');
    },
    loadData: function loadData() {
      var _this$dossier_credit10;
      if (((_this$dossier_credit10 = this.dossier_credit) === null || _this$dossier_credit10 === void 0 ? void 0 : _this$dossier_credit10.caf_recorded_file.client) != undefined) {
        var _this$dossier_credit11;
        this.agence = (_this$dossier_credit11 = this.dossier_credit) === null || _this$dossier_credit11 === void 0 || (_this$dossier_credit11 = _this$dossier_credit11[this.determineCredPubTablesFromDosCred(this.dossier_credit)[1]]) === null || _this$dossier_credit11 === void 0 ? void 0 : _this$dossier_credit11.filiale;
      }
    },
    handleDoubleClickOrClick: function handleDoubleClickOrClick(index) {
      var _this = this;
      EventBus.$emit("open-extra-file-explorer");
      setTimeout(function () {
        var _this$data_tb7$pieces;
        EventBus.$emit("data-extra-file-explorer", {
          name: (_this$data_tb7$pieces = _this.data_tb7.pieces_versees_list[index]) === null || _this$data_tb7$pieces === void 0 ? void 0 : _this$data_tb7$pieces.name,
          view: true
        });
      }, 500);
    },
    getFiles: function getFiles() {
      var _this$data_tb,
        _this2 = this;
      if ((_this$data_tb = this.data_tb7) !== null && _this$data_tb !== void 0 && _this$data_tb.pieces_versees_list && this.data_tb7.pieces_versees_list.length > 0) {
        this.isLoadingFile = true;
        this.$axios.post(this.connectsHost + 'api/get-files', {
          file_identity: this.dossier_credit.cred_pub_key
        }).then(function (res) {
          var _res$data$data, _res$data$data2;
          res.data = JSON.parse(res.data);
          if (((_res$data$data = res.data.data) === null || _res$data$data === void 0 ? void 0 : _res$data$data.length) > 0 || ((_res$data$data2 = res.data.data) === null || _res$data$data2 === void 0 ? void 0 : _res$data$data2.length) != null) {
            _this2.files = res.data.data;
            _this2.data_tb7.pieces_versees_list.forEach(function (element, index) {
              var count = 0;
              _this2.files.forEach(function (file) {
                var _element$template;
                if ((file === null || file === void 0 ? void 0 : file.extra_file_template_id) != null && (element === null || element === void 0 || (_element$template = element.template) === null || _element$template === void 0 ? void 0 : _element$template.id) == (file === null || file === void 0 ? void 0 : file.extra_file_template_id)) {
                  count++;
                }
              });
              _this2.data_tb7.pieces_versees_list[index]['files'] = count;
            });
          }
          _this2.isLoadingFile = false;
        })["catch"](function (err) {
          _this2.isLoadingFile = false;
          console.error(err);
        });
      }
    }
  },
  computed: {
    commentaire_garanties_constituees: function commentaire_garanties_constituees() {
      var _this$data_tb2;
      var garanties = [];
      if ((_this$data_tb2 = this.data_tb5) !== null && _this$data_tb2 !== void 0 && _this$data_tb2.garanties_proposees) {
        var _this$data_tb3;
        (_this$data_tb3 = this.data_tb5) === null || _this$data_tb3 === void 0 || _this$data_tb3.garanties_proposees.forEach(function (element) {
          if (element.checked) {
            var _element$type;
            garanties.push(element === null || element === void 0 || (_element$type = element.type) === null || _element$type === void 0 ? void 0 : _element$type.libelle);
          }
        });
      }
      if (garanties.length > 0) {
        return '- ' + garanties.join('<br> - ');
      }
      return "";
    },
    commentaire_garanties_personnelles: function commentaire_garanties_personnelles() {
      var _this$data_tb4;
      var personnelles = [];
      if ((_this$data_tb4 = this.data_tb5) !== null && _this$data_tb4 !== void 0 && _this$data_tb4.garanties_personnelles) {
        var _this$data_tb5;
        (_this$data_tb5 = this.data_tb5) === null || _this$data_tb5 === void 0 || _this$data_tb5.garanties_personnelles.forEach(function (element) {
          if ((element === null || element === void 0 ? void 0 : element.libelle) != "") {
            personnelles.push((element === null || element === void 0 ? void 0 : element.libelle) + ' (' + (element === null || element === void 0 ? void 0 : element.montant) + ')');
          }
        });
      }
      if (personnelles.length > 0) {
        return '- ' + personnelles.join('<br> - ');
      }
      return "";
    },
    labelHabitation: function labelHabitation() {
      var _this$data_tb6, _this$data_tb7;
      if (((_this$data_tb6 = this.data_tb2) === null || _this$data_tb6 === void 0 ? void 0 : _this$data_tb6.habitation) == 'Propriétaire') {
        return "Dépuis quelle date";
      }
      if (((_this$data_tb7 = this.data_tb2) === null || _this$data_tb7 === void 0 ? void 0 : _this$data_tb7.habitation) == 'Locataire') {
        return "Dépuis quelle date";
      }
      return "Ancienneté à l'adresse";
    },
    valueHabitation: function valueHabitation() {
      var _this$data_tb8, _this$data_tb1, _this$data_tb11, _this$data_tb12;
      if (((_this$data_tb8 = this.data_tb2) === null || _this$data_tb8 === void 0 ? void 0 : _this$data_tb8.habitation) == 'Propriétaire') {
        var _this$data_tb9, _this$data_tb0;
        return ((_this$data_tb9 = this.data_tb2) === null || _this$data_tb9 === void 0 ? void 0 : _this$data_tb9.proprietaire_depuis_quelle_date) != '' ? this.formatMonth((_this$data_tb0 = this.data_tb2) === null || _this$data_tb0 === void 0 ? void 0 : _this$data_tb0.proprietaire_depuis_quelle_date) : '';
      }
      if (((_this$data_tb1 = this.data_tb2) === null || _this$data_tb1 === void 0 ? void 0 : _this$data_tb1.habitation) == 'Locataire') {
        var _this$data_tb10;
        return (_this$data_tb10 = this.data_tb2) === null || _this$data_tb10 === void 0 ? void 0 : _this$data_tb10.loyer_mensuel;
      }
      return ((_this$data_tb11 = this.data_tb2) === null || _this$data_tb11 === void 0 ? void 0 : _this$data_tb11.anciennete_adresse) != '' ? this.formatMonth((_this$data_tb12 = this.data_tb2) === null || _this$data_tb12 === void 0 ? void 0 : _this$data_tb12.anciennete_adresse) : "";
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/memo/carcasse_ppi/PPI1.vue?vue&type=template&id=446c9dca&scoped=true":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/memo/carcasse_ppi/PPI1.vue?vue&type=template&id=446c9dca&scoped=true ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm$dossier_credit, _vm$dossier_credit2, _vm$dossier_credit3, _vm$caf_recorded_file, _vm$data_tb, _vm$data_tb2, _vm$data_tb3, _vm$data_tb4, _vm$data_tb5, _vm$data_tb6, _vm$data_tb7, _vm$data_tb8, _vm$data_tb9, _vm$data_tb0, _vm$data_tb1, _vm$data_tb10, _vm$data_tb11, _vm$data_tb12, _vm$data_tb13, _vm$data_tb14, _vm$data_tb15, _vm$data_tb16, _vm$data_tb17, _vm$data_tb18, _vm$data_tb19, _vm$data_tb20, _vm$data_tb21, _vm$data_tb22, _vm$data_tb23, _vm$data_tb24, _vm$data_tb25, _vm$data_tb26, _vm$data_tb27, _vm$data_tb28, _vm$data_tb29, _vm$data_tb30, _vm$data_tb31, _vm$data_tb32, _vm$data_tb33, _vm$data_tb34, _vm$data_tb35, _vm$data_tb36, _vm$data_tb37, _vm$data_tb38, _vm$data_tb39, _vm$data_tb40, _vm$data_tb41, _vm$data_tb42, _vm$data_tb43, _vm$data_tb44, _vm$data_tb45, _vm$data_tb46, _vm$data_tb47, _vm$data_tb48, _vm$data_tb49, _vm$data_tb50, _vm$data_tb51, _vm$data_tb52, _vm$data_tb53, _vm$data_tb54, _vm$data_tb55, _vm$data_tb56, _vm$data_tb57, _vm$data_tb58, _vm$data_tb59, _vm$data_tb60, _vm$data_tb61, _vm$data_tb62, _vm$data_tb63, _vm$data_tb64, _vm$data_tb65, _vm$data_tb66, _vm$data_tb67, _vm$data_tb68, _vm$data_tb69, _vm$data_tb70, _vm$data_tb71, _vm$data_tb72, _vm$data_tb73, _vm$data_tb74, _vm$data_tb75, _vm$data_tb76, _vm$data_tb77, _vm$data_tb78, _vm$data_tb79, _vm$data_tb80, _vm$data_tb81, _vm$data_tb82, _vm$data_tb83, _vm$data_tb84, _vm$data_tb85, _vm$data_tb86, _vm$data_tb87, _vm$data_tb88, _vm$data_tb89, _vm$data_tb90, _vm$data_tb91, _vm$data_tb92, _vm$data_tb93, _vm$data_tb94, _vm$data_tb95, _vm$data_tb96, _vm$data_tb97, _vm$data_tb98, _vm$data_tb99, _vm$data_tb100, _vm$data_tb101, _vm$data_tb102, _vm$data_tb103, _vm$data_tb104, _vm$data_tb105, _vm$data_tb106, _vm$data_tb107, _vm$data_tb108, _vm$data_tb109, _vm$data_tb110, _vm$data_tb111, _vm$data_tb112, _vm$data_tb113, _vm$data_tb114, _vm$data_tb115, _vm$data_tb116, _this$data_tb, _vm$data_tb117, _vm$data_tb118, _vm$data_tb119, _vm$data_tb120, _vm$data_tb121, _vm$data_tb122, _vm$data_tb123, _vm$data_tb124, _vm$data_tb125, _vm$data_tb126, _vm$data_tb127, _vm$data_tb128, _vm$data_tb129, _vm$data_tb130, _vm$data_tb131, _vm$data_tb132, _vm$data_tb133, _vm$data_tb134, _vm$data_tb135, _vm$data_tb136, _vm$data_tb137, _vm$data_tb138, _vm$data_tb139, _vm$data_tb140, _vm$data_tb141;
  var _vm = this,
    _c = _vm._self._c;
  return _vm.data_tb1 ? _c("div", [_vm._m(0), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-6"
  }, [_c("div", [_c("b", [_vm._v("Agence")]), _vm._v(" : " + _vm._s(_vm.agence))])]), _vm._v(" "), _c("div", {
    staticClass: "col-6"
  }, [_c("div", [_c("b", [_vm._v("Date")]), _vm._v(" : " + _vm._s((_vm$dossier_credit = _vm.dossier_credit) !== null && _vm$dossier_credit !== void 0 && _vm$dossier_credit.created_at && ((_vm$dossier_credit2 = _vm.dossier_credit) === null || _vm$dossier_credit2 === void 0 ? void 0 : _vm$dossier_credit2.created_at) != "" ? _vm.formatDate((_vm$dossier_credit3 = _vm.dossier_credit) === null || _vm$dossier_credit3 === void 0 ? void 0 : _vm$dossier_credit3.created_at) : "") + " ")])]), _vm._v(" "), _c("div", {
    staticClass: "col-6"
  }, [_c("div", [_c("b", [_vm._v("Initiateur")]), _vm._v(" : " + _vm._s(_vm.initiateur))])]), _vm._v(" "), _c("div", {
    staticClass: "col-6"
  }, [_c("div", [_c("b", [_vm._v("Indice")]), _vm._v(" : " + _vm._s((_vm$caf_recorded_file = _vm.caf_recorded_file) === null || _vm$caf_recorded_file === void 0 || (_vm$caf_recorded_file = _vm$caf_recorded_file.client) === null || _vm$caf_recorded_file === void 0 ? void 0 : _vm$caf_recorded_file.matcli))])]), _vm._v(" "), _c("div", {
    staticClass: "col-6"
  }, [_c("div", [_c("b", [_vm._v("Gestionnaire")]), _vm._v(" : " + _vm._s(_vm.gestionnaire))])]), _vm._v(" "), _c("div", {
    staticClass: "col-6"
  }, [_c("div", [_c("b", [_vm._v("N° Cpte")]), _vm._v(" : " + _vm._s((_vm$data_tb = _vm.data_tb2) === null || _vm$data_tb === void 0 ? void 0 : _vm$data_tb.compte_numero))])])]), _vm._v(" "), _vm._m(1), _vm._v(" "), _c("table", {
    staticClass: "table table-bordered mb-4"
  }, [_vm._m(2), _vm._v(" "), _c("table", {
    staticClass: "table table-borderless mb-3"
  }, [_c("tbody", [_c("tr", [_c("td", [_c("div", {
    staticClass: "row",
    staticStyle: {
      padding: "0.5rem 0.5rem"
    }
  }, [_c("td", {
    staticClass: "col-6",
    staticStyle: {
      padding: "0.5rem 0.5rem"
    }
  }, [_c("b", [_vm._v("Nom :")]), _vm._v(" " + _vm._s(_vm.nom))]), _vm._v(" "), _c("td", {
    staticClass: "col-6",
    staticStyle: {
      padding: "0.5rem 0.5rem"
    }
  }, [_c("b", [_vm._v("Prénoms :")]), _vm._v(" " + _vm._s(_vm.prenoms))]), _vm._v(" "), ((_vm$data_tb2 = _vm.data_tb2) === null || _vm$data_tb2 === void 0 ? void 0 : _vm$data_tb2.matrimoniale) == "Marié(e)" && ((_vm$data_tb3 = _vm.data_tb2) === null || _vm$data_tb3 === void 0 ? void 0 : _vm$data_tb3.genre) == "Feminin" ? _c("td", {
    staticClass: "col-6",
    staticStyle: {
      padding: "0.5rem 0.5rem"
    }
  }, [_c("b", [_vm._v("Nom de jeune fille :")]), _vm._v(" " + _vm._s((_vm$data_tb4 = _vm.data_tb2) === null || _vm$data_tb4 === void 0 ? void 0 : _vm$data_tb4.nom_jeune_fille))]) : _vm._e(), _vm._v(" "), _c("td", {
    staticClass: "col-6",
    staticStyle: {
      padding: "0.5rem 0.5rem"
    }
  }, [_c("b", [_vm._v("Nationalité :")]), _vm._v(" " + _vm._s((_vm$data_tb5 = _vm.data_tb2) === null || _vm$data_tb5 === void 0 ? void 0 : _vm$data_tb5.nationnalite))]), _vm._v(" "), _c("td", {
    staticClass: "col-6",
    staticStyle: {
      padding: "0.5rem 0.5rem"
    }
  }, [_c("b", [_vm._v("Né(e) le :")]), _vm._v(" " + _vm._s((_vm$data_tb6 = _vm.data_tb2) !== null && _vm$data_tb6 !== void 0 && _vm$data_tb6.date_naissance && ((_vm$data_tb7 = _vm.data_tb2) === null || _vm$data_tb7 === void 0 ? void 0 : _vm$data_tb7.date_naissance) != "" ? _vm.formatDate((_vm$data_tb8 = _vm.data_tb2) === null || _vm$data_tb8 === void 0 ? void 0 : _vm$data_tb8.date_naissance) : ""))]), _vm._v(" "), _c("td", {
    staticClass: "col-6",
    staticStyle: {
      padding: "0.5rem 0.5rem"
    }
  }, [_c("b", {
    staticClass: "text-uppercase"
  }, [_vm._v("à :")]), _vm._v(" " + _vm._s((_vm$data_tb9 = _vm.data_tb2) === null || _vm$data_tb9 === void 0 ? void 0 : _vm$data_tb9.ville_naissance))]), _vm._v(" "), _c("td", {
    staticClass: "col-6",
    staticStyle: {
      padding: "0.5rem 0.5rem"
    }
  }, [_c("b", [_vm._v("Situation matrimoniale : ")]), _vm._v(" " + _vm._s((_vm$data_tb0 = _vm.data_tb2) === null || _vm$data_tb0 === void 0 ? void 0 : _vm$data_tb0.matrimoniale) + "\n                            ")]), _vm._v(" "), ((_vm$data_tb1 = _vm.data_tb2) === null || _vm$data_tb1 === void 0 ? void 0 : _vm$data_tb1.matrimoniale) == "Marié(e)" ? _c("td", {
    staticClass: "col-6",
    staticStyle: {
      padding: "0.5rem 0.5rem"
    }
  }, [_c("b", [_vm._v("Régime matrimonial :")]), _vm._v(" " + _vm._s((_vm$data_tb10 = _vm.data_tb2) === null || _vm$data_tb10 === void 0 ? void 0 : _vm$data_tb10.regime_matrimonial) + "\n                            ")]) : _vm._e(), _vm._v(" "), _c("td", {
    staticClass: "col-6",
    staticStyle: {
      padding: "0.5rem 0.5rem"
    }
  }, [_c("b", [_vm._v("Nombre d'enfants à charge : ")]), _vm._v(" " + _vm._s((_vm$data_tb11 = _vm.data_tb2) === null || _vm$data_tb11 === void 0 ? void 0 : _vm$data_tb11.nbre_enfant) + "\n                            ")]), _vm._v(" "), _c("td", {
    staticClass: "col-6",
    staticStyle: {
      padding: "0.5rem 0.5rem"
    }
  }, [_c("b", [_vm._v("Pièce d'identité : ")]), _vm._v(" " + _vm._s((_vm$data_tb12 = _vm.data_tb2) === null || _vm$data_tb12 === void 0 ? void 0 : _vm$data_tb12.type_piece) + "\n                            ")]), _vm._v(" "), _c("td", {
    staticClass: "col-6",
    staticStyle: {
      padding: "0.5rem 0.5rem"
    }
  }, [_c("b", [_vm._v("N° pièce : ")]), _vm._v(" " + _vm._s((_vm$data_tb13 = _vm.data_tb2) === null || _vm$data_tb13 === void 0 ? void 0 : _vm$data_tb13.num_piece) + "\n                            ")]), _vm._v(" "), _c("td", {
    staticClass: "col-6",
    staticStyle: {
      padding: "0.5rem 0.5rem"
    }
  }, [_c("b", [_vm._v("Date de délivrance :")]), _vm._v(" " + _vm._s((_vm$data_tb14 = _vm.data_tb2) !== null && _vm$data_tb14 !== void 0 && _vm$data_tb14.date_delivrance_piece && ((_vm$data_tb15 = _vm.data_tb2) === null || _vm$data_tb15 === void 0 ? void 0 : _vm$data_tb15.date_delivrance_piece) != "" ? _vm.formatDate((_vm$data_tb16 = _vm.data_tb2) === null || _vm$data_tb16 === void 0 ? void 0 : _vm$data_tb16.date_delivrance_piece) : "") + "\n                            ")]), _vm._v(" "), _c("td", {
    staticClass: "col-6",
    staticStyle: {
      padding: "0.5rem 0.5rem"
    }
  }, [_c("b", [_vm._v("Lieu de délivrance :")]), _vm._v(" " + _vm._s((_vm$data_tb17 = _vm.data_tb2) === null || _vm$data_tb17 === void 0 ? void 0 : _vm$data_tb17.lieu_delivrance_piece) + "\n                            ")])])])])])])]), _vm._v(" "), _c("table", {
    staticClass: "table table-bordered mb-4"
  }, [_vm._m(3), _vm._v(" "), _c("table", {
    staticClass: "table table-borderless mb-3"
  }, [_c("tbody", [_c("tr", [_c("td", [_c("div", {
    staticClass: "row",
    staticStyle: {
      padding: "0.5rem 0.5rem"
    }
  }, [_c("td", {
    staticClass: "col-6",
    staticStyle: {
      padding: "0.5rem 0.5rem"
    }
  }, [_c("b", [_vm._v("Nom :")]), _vm._v(" " + _vm._s((_vm$data_tb18 = _vm.data_tb2) === null || _vm$data_tb18 === void 0 || (_vm$data_tb18 = _vm$data_tb18.conjoint) === null || _vm$data_tb18 === void 0 ? void 0 : _vm$data_tb18.nom))]), _vm._v(" "), _c("td", {
    staticClass: "col-6",
    staticStyle: {
      padding: "0.5rem 0.5rem"
    }
  }, [_c("b", [_vm._v("Prénoms :")]), _vm._v(" " + _vm._s((_vm$data_tb19 = _vm.data_tb2) === null || _vm$data_tb19 === void 0 || (_vm$data_tb19 = _vm$data_tb19.conjoint) === null || _vm$data_tb19 === void 0 ? void 0 : _vm$data_tb19.prenoms))]), _vm._v(" "), ((_vm$data_tb20 = _vm.data_tb2) === null || _vm$data_tb20 === void 0 ? void 0 : _vm$data_tb20.matrimoniale) == "Marié(e)" && ((_vm$data_tb21 = _vm.data_tb2) === null || _vm$data_tb21 === void 0 ? void 0 : _vm$data_tb21.genre) == "Feminin" ? _c("td", {
    staticClass: "col-6",
    staticStyle: {
      padding: "0.5rem 0.5rem"
    }
  }, [_c("b", [_vm._v("Nom de jeune fille :")]), _vm._v(" " + _vm._s((_vm$data_tb22 = _vm.data_tb2) === null || _vm$data_tb22 === void 0 || (_vm$data_tb22 = _vm$data_tb22.conjoint) === null || _vm$data_tb22 === void 0 ? void 0 : _vm$data_tb22.nom_jeune_fille))]) : _vm._e(), _vm._v(" "), _c("td", {
    staticClass: "col-6",
    staticStyle: {
      padding: "0.5rem 0.5rem"
    }
  }, [_c("b", [_vm._v("Nationalité :")]), _vm._v(" " + _vm._s((_vm$data_tb23 = _vm.data_tb2) === null || _vm$data_tb23 === void 0 || (_vm$data_tb23 = _vm$data_tb23.conjoint) === null || _vm$data_tb23 === void 0 ? void 0 : _vm$data_tb23.nationnalite))]), _vm._v(" "), _c("td", {
    staticClass: "col-6",
    staticStyle: {
      padding: "0.5rem 0.5rem"
    }
  }, [_c("b", [_vm._v("Né(e) le :")]), _vm._v(" " + _vm._s(((_vm$data_tb24 = _vm.data_tb2) === null || _vm$data_tb24 === void 0 || (_vm$data_tb24 = _vm$data_tb24.conjoint) === null || _vm$data_tb24 === void 0 ? void 0 : _vm$data_tb24.date_naissance) != "" ? _vm.formatDate((_vm$data_tb25 = _vm.data_tb2) === null || _vm$data_tb25 === void 0 || (_vm$data_tb25 = _vm$data_tb25.conjoint) === null || _vm$data_tb25 === void 0 ? void 0 : _vm$data_tb25.date_naissance) : ""))]), _vm._v(" "), _c("td", {
    staticClass: "col-6",
    staticStyle: {
      padding: "0.5rem 0.5rem"
    }
  }, [_c("b", {
    staticClass: "text-uppercase"
  }, [_vm._v("à :")]), _vm._v(" " + _vm._s((_vm$data_tb26 = _vm.data_tb2) === null || _vm$data_tb26 === void 0 || (_vm$data_tb26 = _vm$data_tb26.conjoint) === null || _vm$data_tb26 === void 0 ? void 0 : _vm$data_tb26.ville_naissance))])])])])])])]), _vm._v(" "), _c("table", {
    staticClass: "table table-bordered mb-4"
  }, [_vm._m(4), _vm._v(" "), _c("table", {
    staticClass: "table table-borderless mb-3"
  }, [_c("tbody", [_c("tr", [_c("td", {
    staticClass: "col-6"
  }, [_c("b", [_vm._v("Ville : ")]), _vm._v(" " + _vm._s((_vm$data_tb27 = _vm.data_tb2) === null || _vm$data_tb27 === void 0 ? void 0 : _vm$data_tb27.ville_residence))]), _vm._v(" "), _c("td", {
    staticClass: "col-6"
  }, [_c("b", [_vm._v("Téléphone : ")]), _vm._v(" " + _vm._s((_vm$data_tb28 = _vm.data_tb2) === null || _vm$data_tb28 === void 0 ? void 0 : _vm$data_tb28.telephone))])]), _vm._v(" "), _c("tr", [_c("td", [_c("b", [_vm._v("Type de logement : ")]), _vm._v(" " + _vm._s((_vm$data_tb29 = _vm.data_tb2) === null || _vm$data_tb29 === void 0 ? void 0 : _vm$data_tb29.habitation) + "\n                    ")]), _vm._v(" "), _c("td", [_c("b", [_vm._v(_vm._s(_vm.labelHabitation) + " : ")]), _vm._v(" " + _vm._s(_vm.valueHabitation) + "\n                    ")])])])])]), _vm._v(" "), _c("table", {
    staticClass: "table table-bordered mb-4"
  }, [_vm._m(5), _vm._v(" "), _c("table", {
    staticClass: "table table-bordered mb-3 activite"
  }, [_c("tbody", [_vm._m(6), _vm._v(" "), _vm._m(7), _vm._v(" "), _c("tr", [_vm._m(8), _vm._v(" "), _c("td", [_c("span", [_vm._v(_vm._s((_vm$data_tb30 = _vm.data_tb3) === null || _vm$data_tb30 === void 0 ? void 0 : _vm$data_tb30.fonction) + " ")])]), _vm._v(" "), _c("td", [_c("span", [_vm._v(_vm._s((_vm$data_tb31 = _vm.data_tb3) === null || _vm$data_tb31 === void 0 || (_vm$data_tb31 = _vm$data_tb31.conjoint) === null || _vm$data_tb31 === void 0 ? void 0 : _vm$data_tb31.fonction) + " ")])])]), _vm._v(" "), _c("tr", [_vm._m(9), _vm._v(" "), _c("td", [_c("span", [_vm._v(_vm._s((_vm$data_tb32 = _vm.data_tb3) === null || _vm$data_tb32 === void 0 ? void 0 : _vm$data_tb32.entreprise) + " ")])]), _vm._v(" "), _c("td", [_c("span", [_vm._v(_vm._s((_vm$data_tb33 = _vm.data_tb3) === null || _vm$data_tb33 === void 0 || (_vm$data_tb33 = _vm$data_tb33.conjoint) === null || _vm$data_tb33 === void 0 ? void 0 : _vm$data_tb33.entreprise) + " ")])])]), _vm._v(" "), _c("tr", [_vm._m(10), _vm._v(" "), _c("td", [_c("span", [_vm._v(_vm._s((_vm$data_tb34 = _vm.data_tb3) === null || _vm$data_tb34 === void 0 ? void 0 : _vm$data_tb34.entreprise_adresse) + " ")])]), _vm._v(" "), _c("td", [_c("span", [_vm._v(_vm._s((_vm$data_tb35 = _vm.data_tb3) === null || _vm$data_tb35 === void 0 || (_vm$data_tb35 = _vm$data_tb35.conjoint) === null || _vm$data_tb35 === void 0 ? void 0 : _vm$data_tb35.entreprise_adresse) + " ")])])]), _vm._v(" "), _c("tr", [_vm._m(11), _vm._v(" "), _c("td", [_c("span", [_vm._v(_vm._s((_vm$data_tb36 = _vm.data_tb3) === null || _vm$data_tb36 === void 0 ? void 0 : _vm$data_tb36.entreprise_telephone) + " ")])]), _vm._v(" "), _c("td", [_c("span", [_vm._v(_vm._s((_vm$data_tb37 = _vm.data_tb3) === null || _vm$data_tb37 === void 0 || (_vm$data_tb37 = _vm$data_tb37.conjoint) === null || _vm$data_tb37 === void 0 ? void 0 : _vm$data_tb37.entreprise_telephone) + " ")])])]), _vm._v(" "), _c("tr", [_vm._m(12), _vm._v(" "), _c("td", [_c("span", [_vm._v(_vm._s(_vm.formatMonth((_vm$data_tb38 = _vm.data_tb3) === null || _vm$data_tb38 === void 0 ? void 0 : _vm$data_tb38.anciennete_pro)) + " ")])]), _vm._v(" "), _c("td", [_c("span", [_vm._v(_vm._s(_vm.formatMonth((_vm$data_tb39 = _vm.data_tb3) === null || _vm$data_tb39 === void 0 || (_vm$data_tb39 = _vm$data_tb39.conjoint) === null || _vm$data_tb39 === void 0 ? void 0 : _vm$data_tb39.anciennete_pro)) + " ")])])]), _vm._v(" "), _c("tr", [_vm._m(13), _vm._v(" "), _c("td", [_c("span", [_vm._v(_vm._s((_vm$data_tb40 = _vm.data_tb3) === null || _vm$data_tb40 === void 0 ? void 0 : _vm$data_tb40.antecedent))])]), _vm._v(" "), _c("td", [_c("span", [_vm._v(_vm._s((_vm$data_tb41 = _vm.data_tb3) === null || _vm$data_tb41 === void 0 || (_vm$data_tb41 = _vm$data_tb41.conjoint) === null || _vm$data_tb41 === void 0 ? void 0 : _vm$data_tb41.antecedent))])])]), _vm._v(" "), _vm._m(14), _vm._v(" "), _c("tr", [_vm._m(15), _vm._v(" "), _c("td", [_c("span", [_vm._v(_vm._s((_vm$data_tb42 = _vm.data_tb3) === null || _vm$data_tb42 === void 0 ? void 0 : _vm$data_tb42.nature_activite))])]), _vm._v(" "), _c("td", [_c("span", [_vm._v(_vm._s((_vm$data_tb43 = _vm.data_tb3) === null || _vm$data_tb43 === void 0 || (_vm$data_tb43 = _vm$data_tb43.conjoint) === null || _vm$data_tb43 === void 0 ? void 0 : _vm$data_tb43.nature_activite) + " ")])])]), _vm._v(" "), _c("tr", [_vm._m(16), _vm._v(" "), _c("td", [_c("span", [_vm._v(_vm._s((_vm$data_tb44 = _vm.data_tb3) !== null && _vm$data_tb44 !== void 0 && _vm$data_tb44.date_debut_activite && ((_vm$data_tb45 = _vm.data_tb3) === null || _vm$data_tb45 === void 0 ? void 0 : _vm$data_tb45.date_debut_activite) != "" ? _vm.formatDate((_vm$data_tb46 = _vm.data_tb3) === null || _vm$data_tb46 === void 0 ? void 0 : _vm$data_tb46.date_debut_activite) : "") + "\n                        ")])]), _vm._v(" "), _c("td", [_c("span", [_vm._v(_vm._s((_vm$data_tb47 = _vm.data_tb3) !== null && _vm$data_tb47 !== void 0 && (_vm$data_tb47 = _vm$data_tb47.conjoint) !== null && _vm$data_tb47 !== void 0 && _vm$data_tb47.date_debut_activite && ((_vm$data_tb48 = _vm.data_tb3) === null || _vm$data_tb48 === void 0 || (_vm$data_tb48 = _vm$data_tb48.conjoint) === null || _vm$data_tb48 === void 0 ? void 0 : _vm$data_tb48.date_debut_activite) != "" ? _vm.formatDate((_vm$data_tb49 = _vm.data_tb3) === null || _vm$data_tb49 === void 0 || (_vm$data_tb49 = _vm$data_tb49.conjoint) === null || _vm$data_tb49 === void 0 ? void 0 : _vm$data_tb49.date_debut_activite) : "") + " ")])])]), _vm._v(" "), _c("tr", [_vm._m(17), _vm._v(" "), _c("td", [_c("span", [_vm._v(_vm._s((_vm$data_tb50 = _vm.data_tb3) === null || _vm$data_tb50 === void 0 ? void 0 : _vm$data_tb50.nombre_personnel_employe) + " ")])]), _vm._v(" "), _c("td", [_c("span", [_vm._v(_vm._s((_vm$data_tb51 = _vm.data_tb3) === null || _vm$data_tb51 === void 0 || (_vm$data_tb51 = _vm$data_tb51.conjoint) === null || _vm$data_tb51 === void 0 ? void 0 : _vm$data_tb51.nombre_personnel_employe) + " ")])])]), _vm._v(" "), _c("tr", [_vm._m(18), _vm._v(" "), _c("td", [_c("span", [_vm._v(_vm._s((_vm$data_tb52 = _vm.data_tb3) === null || _vm$data_tb52 === void 0 ? void 0 : _vm$data_tb52.adresse_professionnel) + " ")])]), _vm._v(" "), _c("td", [_c("span", [_vm._v(_vm._s((_vm$data_tb53 = _vm.data_tb3) === null || _vm$data_tb53 === void 0 || (_vm$data_tb53 = _vm$data_tb53.conjoint) === null || _vm$data_tb53 === void 0 ? void 0 : _vm$data_tb53.adresse_professionnel) + " ")])])]), _vm._v(" "), _c("tr", [_vm._m(19), _vm._v(" "), _c("td", [_c("span", [_vm._v(_vm._s((_vm$data_tb54 = _vm.data_tb3) === null || _vm$data_tb54 === void 0 ? void 0 : _vm$data_tb54.telephone_professionnel) + " ")]), _vm._v(" "), _c("br")]), _vm._v(" "), _c("td", [_c("span", [_vm._v(_vm._s((_vm$data_tb55 = _vm.data_tb3) === null || _vm$data_tb55 === void 0 || (_vm$data_tb55 = _vm$data_tb55.conjoint) === null || _vm$data_tb55 === void 0 ? void 0 : _vm$data_tb55.telephone_professionnel) + " ")]), _vm._v(" "), _c("br")])])])])]), _vm._v(" "), _vm._m(20), _vm._v(" "), _c("table", {
    staticClass: "table table-bordered mb-4"
  }, [_vm._m(21), _vm._v(" "), _c("table", {
    staticClass: "table table-borderless mb-3"
  }, [_c("tbody", [_c("tr", [_c("td", {
    staticClass: "col-6"
  }, [_c("b", [_vm._v("Ville : ")]), _vm._v(" " + _vm._s((_vm$data_tb56 = _vm.data_tb1) === null || _vm$data_tb56 === void 0 ? void 0 : _vm$data_tb56.localisation_ville))]), _vm._v(" "), _c("td", {
    staticClass: "col-6"
  }, [_c("b", [_vm._v("Quartier : ")]), _vm._v(" " + _vm._s((_vm$data_tb57 = _vm.data_tb1) === null || _vm$data_tb57 === void 0 ? void 0 : _vm$data_tb57.localisation_quartier))])])])])]), _vm._v(" "), _c("table", {
    staticClass: "table table-bordered mb-4"
  }, [_vm._m(22), _vm._v(" "), _c("table", {
    staticClass: "table table-borderless mb-3"
  }, [_c("tbody", [_c("tr", [_c("td", {
    staticClass: "col-12"
  }, [_c("b", [_vm._v("Usage : ")]), _vm._v(" " + _vm._s((_vm$data_tb58 = _vm.data_tb1) === null || _vm$data_tb58 === void 0 ? void 0 : _vm$data_tb58.usage))])])])])]), _vm._v(" "), _c("table", {
    staticClass: "table table-bordered mb-4"
  }, [_vm._m(23), _vm._v(" "), (_vm$data_tb59 = _vm.data_tb1) !== null && _vm$data_tb59 !== void 0 && _vm$data_tb59.construction_d_une_maison_individuelle ? _c("table", {
    staticClass: "table table-borderless mb-3"
  }, [_c("tbody", [_c("tr", [_vm._m(24), _vm._v(" "), _c("td", {
    staticClass: "col-6"
  }, [_c("b", [_vm._v("Avis de conformité en date de : ")]), _vm._v(" " + _vm._s(((_vm$data_tb60 = _vm.data_tb1) === null || _vm$data_tb60 === void 0 ? void 0 : _vm$data_tb60.avis_de_confirmite_en_date_de) != "" ? _vm.formatDate((_vm$data_tb61 = _vm.data_tb1) === null || _vm$data_tb61 === void 0 ? void 0 : _vm$data_tb61.avis_de_confirmite_en_date_de) : ""))])]), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "col-6"
  }, [_c("b", [_vm._v("Surface terrain : ")]), _vm._v(" " + _vm._s((_vm$data_tb62 = _vm.data_tb1) === null || _vm$data_tb62 === void 0 ? void 0 : _vm$data_tb62.surface_terrain_1))]), _vm._v(" "), _c("td", {
    staticClass: "col-6"
  }, [_c("b", [_vm._v("Surface utile : ")]), _vm._v(" " + _vm._s((_vm$data_tb63 = _vm.data_tb1) === null || _vm$data_tb63 === void 0 ? void 0 : _vm$data_tb63.surface_utile_1))])])])]) : (_vm$data_tb64 = _vm.data_tb1) !== null && _vm$data_tb64 !== void 0 && _vm$data_tb64.acquisition_dans_un_programme_collectif_neuf ? _c("table", {
    staticClass: "table table-borderless mb-3"
  }, [_c("tbody", [_c("tr", [_vm._m(25), _vm._v(" "), _c("td", {
    staticClass: "col-6"
  }, [_c("b", [_vm._v("Collectif : ")]), _vm._v(" " + _vm._s((_vm$data_tb65 = _vm.data_tb1) === null || _vm$data_tb65 === void 0 ? void 0 : _vm$data_tb65.collectif))])]), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "col-6"
  }, [_c("b", [_vm._v("Surface terrain : ")]), _vm._v(" " + _vm._s((_vm$data_tb66 = _vm.data_tb1) === null || _vm$data_tb66 === void 0 ? void 0 : _vm$data_tb66.surface_terrain_2))]), _vm._v(" "), _c("td", {
    staticClass: "col-6"
  }, [_c("b", [_vm._v("Surface utile :  ")]), _vm._v(" " + _vm._s((_vm$data_tb67 = _vm.data_tb1) === null || _vm$data_tb67 === void 0 ? void 0 : _vm$data_tb67.surface_utile_2))])]), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "col-6"
  }, [_c("b", [_vm._v("Promoteur : ")]), _vm._v(" " + _vm._s((_vm$data_tb68 = _vm.data_tb1) === null || _vm$data_tb68 === void 0 ? void 0 : _vm$data_tb68.promoteur))]), _vm._v(" "), _c("td", {
    staticClass: "col-6"
  }, [_c("b", [_vm._v("Programme : ")]), _vm._v(" " + _vm._s((_vm$data_tb69 = _vm.data_tb1) === null || _vm$data_tb69 === void 0 ? void 0 : _vm$data_tb69.programme))])]), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "col-6"
  }, [_c("b", [_vm._v("Attestation de reservation : ")]), _vm._v(" " + _vm._s((_vm$data_tb70 = _vm.data_tb1) === null || _vm$data_tb70 === void 0 ? void 0 : _vm$data_tb70.attestation_de_reservation))]), _vm._v(" "), _c("td", {
    staticClass: "col-6"
  }, [_c("b", [_vm._v("Crédit promoteur NSIA BANQUE-CI : ")]), _vm._v(" " + _vm._s((_vm$data_tb71 = _vm.data_tb1) === null || _vm$data_tb71 === void 0 ? void 0 : _vm$data_tb71.credit_promoteur_nsia))])]), _vm._v(" "), ((_vm$data_tb72 = _vm.data_tb1) === null || _vm$data_tb72 === void 0 ? void 0 : _vm$data_tb72.credit_promoteur_nsia) == "NON" ? _c("tr", [_c("td", {
    staticClass: "col-6"
  }, [_c("b", [_vm._v("Autres banques : ")]), _vm._v(" " + _vm._s((_vm$data_tb73 = _vm.data_tb1) === null || _vm$data_tb73 === void 0 ? void 0 : _vm$data_tb73.autres_banques))]), _vm._v(" "), _c("td", {
    staticClass: "col-6"
  }, [_c("b", [_vm._v("Montant : ")]), _vm._v(" " + _vm._s((_vm$data_tb74 = _vm.data_tb1) === null || _vm$data_tb74 === void 0 ? void 0 : _vm$data_tb74.montant_autre_banque_banque))])]) : _vm._e()])]) : (_vm$data_tb75 = _vm.data_tb1) !== null && _vm$data_tb75 !== void 0 && _vm$data_tb75.achat_d_un_logement_ancien ? _c("table", {
    staticClass: "table table-borderless mb-3"
  }, [_c("tbody", [_c("tr", [_vm._m(26), _vm._v(" "), _c("td", {
    staticClass: "col-6"
  }, [_c("b", [_vm._v("Type logement : ")]), _vm._v(" " + _vm._s((_vm$data_tb76 = _vm.data_tb1) === null || _vm$data_tb76 === void 0 ? void 0 : _vm$data_tb76.type_ancien_logement))])]), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "col-6"
  }, [_c("b", [_vm._v("Surface terrain : ")]), _vm._v(" " + _vm._s((_vm$data_tb77 = _vm.data_tb1) === null || _vm$data_tb77 === void 0 ? void 0 : _vm$data_tb77.surface_terrain_3))]), _vm._v(" "), _c("td", {
    staticClass: "col-6"
  }, [_c("b", [_vm._v("Surface utile : ")]), _vm._v(" " + _vm._s((_vm$data_tb78 = _vm.data_tb1) === null || _vm$data_tb78 === void 0 ? void 0 : _vm$data_tb78.surface_utile_3))])])])]) : (_vm$data_tb79 = _vm.data_tb1) !== null && _vm$data_tb79 !== void 0 && _vm$data_tb79.modification_de_batiment ? _c("table", {
    staticClass: "table table-borderless mb-3"
  }, [_c("tbody", [_vm._m(27), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "col-6"
  }, [_c("b", [_vm._v("Type travaux : ")]), _vm._v(" " + _vm._s((_vm$data_tb80 = _vm.data_tb1) === null || _vm$data_tb80 === void 0 ? void 0 : _vm$data_tb80.type_travaux))]), _vm._v(" "), _c("td", {
    staticClass: "col-6"
  }, [_c("b", [_vm._v("Type emprunteur : ")]), _vm._v(" " + _vm._s((_vm$data_tb81 = _vm.data_tb1) === null || _vm$data_tb81 === void 0 ? void 0 : _vm$data_tb81.type_emprunteur_proprietaire_ou_locataire))])]), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "col-6"
  }, [_c("b", [_vm._v("Surface habitable actuelle : ")]), _vm._v(" " + _vm._s((_vm$data_tb82 = _vm.data_tb1) === null || _vm$data_tb82 === void 0 ? void 0 : _vm$data_tb82.surface_habitable_actuelle))]), _vm._v(" "), _c("td", {
    staticClass: "col-6"
  }, [_c("b", [_vm._v("Surface après travaux : ")]), _vm._v(" " + _vm._s((_vm$data_tb83 = _vm.data_tb1) === null || _vm$data_tb83 === void 0 ? void 0 : _vm$data_tb83.surface_apres_travaux))])])])]) : _vm._e()]), _vm._v(" "), _vm._m(28), _vm._v(" "), _c("div", [_c("label", {
    staticClass: "fw-bold"
  }, [_vm._v("Montant du prêt : ")]), _vm._v(" " + _vm._s((_vm$data_tb84 = _vm.data_tb1) === null || _vm$data_tb84 === void 0 ? void 0 : _vm$data_tb84.montant_sollicite) + "\n    ")]), _vm._v(" "), _c("div", {
    staticClass: "mt-2"
  }, [_c("table", {
    staticClass: "table table-bordered"
  }, [_vm._m(29), _vm._v(" "), _c("tbody", [_c("tr", [_c("td", [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12"
  }, [_c("label", {
    staticClass: "fw-bold"
  }, [_vm._v("Frais annexes : ")]), _vm._v(" " + _vm._s((_vm$data_tb85 = _vm.data_tb4) === null || _vm$data_tb85 === void 0 ? void 0 : _vm$data_tb85.cout_operations_frais) + "\n                            ")]), _vm._v(" "), _c("div", {
    staticClass: "col-12 m-4"
  }), _vm._v(" "), _c("div", {
    staticClass: "col-12",
    staticStyle: {
      "margin-top": "4px"
    }
  }, [_c("label", {
    staticClass: "fw-bold"
  }, [_vm._v("Opération : ")]), _vm._v(" " + _vm._s((_vm$data_tb86 = _vm.data_tb4) === null || _vm$data_tb86 === void 0 ? void 0 : _vm$data_tb86.cout_operations_operation) + "\n                            ")])])]), _vm._v(" "), _c("td", [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-6"
  }, [_c("label", {
    staticClass: "fw-bold"
  }, [_vm._v("Apport pers. : ")]), _vm._v(" " + _vm._s((_vm$data_tb87 = _vm.data_tb4) === null || _vm$data_tb87 === void 0 ? void 0 : _vm$data_tb87.financement_apport_pers) + "\n                            ")]), _vm._v(" "), _c("div", {
    staticClass: "col-6"
  }, [_c("label", {
    staticClass: "fw-bold"
  }, [_vm._v("dont PEL : ")]), _vm._v(" " + _vm._s((_vm$data_tb88 = _vm.data_tb4) === null || _vm$data_tb88 === void 0 ? void 0 : _vm$data_tb88.financement_dont_pel) + "\n                            ")]), _vm._v(" "), _c("div", {
    staticClass: "col-6"
  }), _vm._v(" "), _c("div", {
    staticClass: "col-6",
    staticStyle: {
      "margin-top": "10px"
    }
  }, [_c("label", {
    staticClass: "fw-bold"
  }, [_vm._v("Autres : ")]), _vm._v(" " + _vm._s(_vm.formatAmount((_vm$data_tb89 = _vm.data_tb4) === null || _vm$data_tb89 === void 0 ? void 0 : _vm$data_tb89.financement_autres)) + "\n                            ")]), _vm._v(" "), _c("div", {
    staticClass: "col-6",
    staticStyle: {
      "margin-top": "20px"
    }
  }, [_c("label", {
    staticClass: "fw-bold"
  }, [_vm._v("Prêt : ")]), _vm._v(" " + _vm._s((_vm$data_tb90 = _vm.data_tb4) === null || _vm$data_tb90 === void 0 ? void 0 : _vm$data_tb90.financement_pret) + "\n                            ")]), _vm._v(" "), _c("div", {
    staticClass: "col-6",
    staticStyle: {
      "margin-top": "20px"
    }
  }, [_c("label", {
    staticClass: "fw-bold"
  }, [_vm._v("% prêt / opération : ")]), _vm._v(" " + _vm._s((_vm$data_tb91 = _vm.data_tb4) === null || _vm$data_tb91 === void 0 ? void 0 : _vm$data_tb91.financement_pourcentage_pret_operation) + " %\n                            ")])])])]), _vm._v(" "), _c("tr", [_c("td", [_c("label", {
    staticClass: "fw-bold"
  }, [_vm._v("Total : ")]), _vm._v(" " + _vm._s(_vm.formatAmount((_vm$data_tb92 = _vm.data_tb4) === null || _vm$data_tb92 === void 0 ? void 0 : _vm$data_tb92.cout_operations_total)) + "\n                    ")]), _vm._v(" "), _c("td", [_c("label", {
    staticClass: "fw-bold"
  }, [_vm._v("Total : ")]), _vm._v(" " + _vm._s(_vm.formatAmount((_vm$data_tb93 = _vm.data_tb4) === null || _vm$data_tb93 === void 0 ? void 0 : _vm$data_tb93.financement_total)) + "\n                    ")])])])])]), _vm._v(" "), _c("div", {
    staticClass: "mt-2"
  }, [_c("table", {
    staticClass: "table table-bordered"
  }, [_vm._m(30), _vm._v(" "), _c("tbody", [_c("tr", [_vm._m(31), _vm._v(" "), _c("td", [_vm._m(32), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-6 text-center"
  }, [(_vm$data_tb94 = _vm.data_tb4) !== null && _vm$data_tb94 !== void 0 && _vm$data_tb94.reescomptable_tep_1 ? _c("input", {
    staticClass: "form-check-input",
    attrs: {
      type: "checkbox",
      id: "reescomptable_tep_1",
      checked: "checked",
      disabled: ""
    }
  }) : _c("input", {
    staticClass: "form-check-input",
    attrs: {
      type: "checkbox",
      id: "reescomptable_tep_1",
      disabled: ""
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-6 text-center"
  }, [(_vm$data_tb95 = _vm.data_tb4) !== null && _vm$data_tb95 !== void 0 && _vm$data_tb95.reescomptable_ten_1 ? _c("input", {
    staticClass: "form-check-input",
    attrs: {
      type: "checkbox",
      id: "reescomptable_ten_1",
      checked: "checked",
      disabled: ""
    }
  }) : _c("input", {
    staticClass: "form-check-input",
    attrs: {
      type: "checkbox",
      id: "reescomptable_ten_1",
      disabled: ""
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-6 text-center"
  }, [(_vm$data_tb96 = _vm.data_tb4) !== null && _vm$data_tb96 !== void 0 && _vm$data_tb96.reescomptable_tep_2 ? _c("input", {
    staticClass: "form-check-input",
    attrs: {
      type: "checkbox",
      id: "reescomptable_tep_2",
      checked: "checked",
      disabled: ""
    }
  }) : _c("input", {
    staticClass: "form-check-input",
    attrs: {
      type: "checkbox",
      id: "reescomptable_tep_2",
      disabled: ""
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-6 text-center"
  }, [(_vm$data_tb97 = _vm.data_tb4) !== null && _vm$data_tb97 !== void 0 && _vm$data_tb97.reescomptable_ten_2 ? _c("input", {
    staticClass: "form-check-input",
    attrs: {
      type: "checkbox",
      id: "reescomptable_ten_2",
      checked: "checked",
      disabled: ""
    }
  }) : _c("input", {
    staticClass: "form-check-input",
    attrs: {
      type: "checkbox",
      id: "reescomptable_ten_2",
      disabled: ""
    }
  })])])]), _vm._v(" "), _c("td", [_vm._m(33), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12 text-center"
  }, [(_vm$data_tb98 = _vm.data_tb4) !== null && _vm$data_tb98 !== void 0 && _vm$data_tb98.non_reescomptable_ten_1 ? _c("input", {
    staticClass: "form-check-input",
    attrs: {
      type: "checkbox",
      id: "non_reescomptable_ten_1",
      checked: "checked",
      disabled: ""
    }
  }) : _c("input", {
    staticClass: "form-check-input",
    attrs: {
      type: "checkbox",
      id: "non_reescomptable_ten_1",
      disabled: ""
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12 text-center"
  }, [(_vm$data_tb99 = _vm.data_tb4) !== null && _vm$data_tb99 !== void 0 && _vm$data_tb99.non_reescomptable_ten_2 ? _c("input", {
    staticClass: "form-check-input",
    attrs: {
      type: "checkbox",
      id: "non_reescomptable_ten_2",
      checked: "checked",
      disabled: ""
    }
  }) : _c("input", {
    staticClass: "form-check-input",
    attrs: {
      type: "checkbox",
      id: "non_reescomptable_ten_2",
      disabled: ""
    }
  })])])]), _vm._v(" "), _c("td", [_vm._m(34), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12 text-center"
  }, [(_vm$data_tb100 = _vm.data_tb4) !== null && _vm$data_tb100 !== void 0 && _vm$data_tb100.cdmh_tep_1 ? _c("input", {
    staticClass: "form-check-input",
    attrs: {
      type: "checkbox",
      id: "cdmh_tep_1",
      checked: "checked",
      disabled: ""
    }
  }) : _c("input", {
    staticClass: "form-check-input",
    attrs: {
      type: "checkbox",
      id: "cdmh_tep_1",
      disabled: ""
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12 text-center"
  }, [(_vm$data_tb101 = _vm.data_tb4) !== null && _vm$data_tb101 !== void 0 && _vm$data_tb101.cdmh_tep_2 ? _c("input", {
    staticClass: "form-check-input",
    attrs: {
      type: "checkbox",
      id: "cdmh_tep_2",
      checked: "checked",
      disabled: ""
    }
  }) : _c("input", {
    staticClass: "form-check-input",
    attrs: {
      type: "checkbox",
      id: "cdmh_tep_2",
      disabled: ""
    }
  })])])])])])])]), _vm._v(" "), _c("div", {
    staticClass: "mt-2 table-responsive"
  }, [_c("table", {
    staticClass: "table table-bordered"
  }, [_vm._m(35), _vm._v(" "), _c("tbody", [_c("tr", [_c("td", {
    attrs: {
      rowspan: "2"
    }
  }, [_vm._l((_vm$data_tb102 = _vm.data_tb4) === null || _vm$data_tb102 === void 0 ? void 0 : _vm$data_tb102.liste_bareme_applicable, function (item, index) {
    return [item.checked ? _c("div", {
      key: index,
      staticClass: "text-nowrap my-1"
    }, [_vm._v(_vm._s(item.name) + " "), _c("br")]) : _vm._e()];
  })], 2), _vm._v(" "), _c("td", {
    staticClass: "text-center text-nowrap",
    attrs: {
      rowspan: "2"
    }
  }, [_vm._l((_vm$data_tb103 = _vm.data_tb4) === null || _vm$data_tb103 === void 0 ? void 0 : _vm$data_tb103.liste_bareme_applicable, function (item, index) {
    return [item.checked ? _c("div", {
      key: index,
      staticClass: "my-1"
    }, [_vm._v("\n                                " + _vm._s(item.code) + " "), _c("br")]) : _vm._e()];
  })], 2), _vm._v(" "), _c("td", {
    staticClass: "text-center text-nowrap",
    attrs: {
      rowspan: "2"
    }
  }, [_vm._l((_vm$data_tb104 = _vm.data_tb4) === null || _vm$data_tb104 === void 0 ? void 0 : _vm$data_tb104.liste_bareme_applicable, function (item, index) {
    return [item.checked ? _c("div", {
      key: index,
      staticClass: "my-1"
    }, [_vm._v("\n                                " + _vm._s(item.duree) + " "), _c("br")]) : _vm._e()];
  })], 2), _vm._v(" "), _c("td", {
    staticClass: "text-center text-nowrap",
    attrs: {
      rowspan: "2"
    }
  }, [_vm._l((_vm$data_tb105 = _vm.data_tb4) === null || _vm$data_tb105 === void 0 ? void 0 : _vm$data_tb105.liste_bareme_applicable, function (item, index) {
    return [item.checked ? _c("div", {
      key: index,
      staticClass: "my-1"
    }, [_vm._v("\n                                " + _vm._s(item.taux_client) + " " + _vm._s(item.taux_client > 0 ? "%" : "") + " "), _c("br")]) : _vm._e()];
  })], 2)]), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "text-center text-nowrap"
  }, [_vm._l((_vm$data_tb106 = _vm.data_tb4) === null || _vm$data_tb106 === void 0 ? void 0 : _vm$data_tb106.liste_bareme_applicable, function (item, index) {
    return [item.checked ? _c("div", {
      key: index,
      staticClass: "my-1"
    }, [_vm._v("\n                                " + _vm._s(_vm.formatAmount(item.palier_1)) + " "), _c("br")]) : _vm._e()];
  })], 2), _vm._v(" "), _c("td", {
    staticClass: "text-center text-nowrap"
  }, [_vm._l((_vm$data_tb107 = _vm.data_tb4) === null || _vm$data_tb107 === void 0 ? void 0 : _vm$data_tb107.liste_bareme_applicable, function (item, index) {
    return [item.checked ? _c("div", {
      key: index,
      staticClass: "my-1"
    }, [_vm._v("\n                                " + _vm._s(_vm.formatAmount(item.palier_2)) + " "), _c("br")]) : _vm._e()];
  })], 2), _vm._v(" "), _c("td", {
    staticClass: "text-center text-nowrap"
  }, [_vm._l((_vm$data_tb108 = _vm.data_tb4) === null || _vm$data_tb108 === void 0 ? void 0 : _vm$data_tb108.liste_bareme_applicable, function (item, index) {
    return [item.checked ? _c("div", {
      key: index,
      staticClass: "my-1"
    }, [_vm._v("\n                                " + _vm._s(_vm.formatAmount(item.palier_3)) + " "), _c("br")]) : _vm._e()];
  })], 2)])])])]), _vm._v(" "), _vm._m(36), _vm._v(" "), _vm._m(37), _vm._v(" "), _c("div", {
    staticClass: "mt-2 table-responsive"
  }, [_c("table", {
    staticClass: "table table-bordered"
  }, [_vm._m(38), _vm._v(" "), _c("tbody", [_vm._l((_vm$data_tb109 = _vm.data_tb5) === null || _vm$data_tb109 === void 0 ? void 0 : _vm$data_tb109.ressources, function (el, ind) {
    return _c("tr", {
      key: "ressource_" + ind
    }, [_c("td", [_vm._v("\n                        " + _vm._s(el.libelle) + "\n                    ")]), _vm._v(" "), _c("td", {
      staticClass: "text-right"
    }, [_vm._v("\n                        " + _vm._s(el.montant_emprunteur != "" ? _vm.formatAmount(el.montant_emprunteur) : 0) + "\n                    ")]), _vm._v(" "), _c("td", {
      staticClass: "text-right"
    }, [_vm._v("\n                        " + _vm._s(el.montant_conjoint != "" ? _vm.formatAmount(el.montant_conjoint) : 0) + "\n                    ")]), _vm._v(" "), _c("td", {
      staticClass: "text-right"
    }, [_vm._v("\n                        " + _vm._s(_vm.formatAmount(el.total_ligne)) + "\n                    ")])]);
  }), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "fw-bold text-right"
  }, [_vm._v("\n                        Total\n                    ")]), _vm._v(" "), _c("td", {
    staticClass: "fw-bold text-right"
  }, [_vm._v("\n                        " + _vm._s(_vm.formatAmount((_vm$data_tb110 = _vm.data_tb5) === null || _vm$data_tb110 === void 0 ? void 0 : _vm$data_tb110.emprunteur_total)) + "\n                    ")]), _vm._v(" "), _c("td", {
    staticClass: "fw-bold text-right"
  }, [_vm._v("\n                        " + _vm._s(_vm.formatAmount((_vm$data_tb111 = _vm.data_tb5) === null || _vm$data_tb111 === void 0 ? void 0 : _vm$data_tb111.conjoint_total)) + "\n                    ")]), _vm._v(" "), _c("td", {
    staticClass: "fw-bold text-right"
  }, [_vm._v("\n                        " + _vm._s(_vm.formatAmount((_vm$data_tb112 = _vm.data_tb5) === null || _vm$data_tb112 === void 0 ? void 0 : _vm$data_tb112.total_total)) + "\n                    ")])])], 2)])]), _vm._v(" "), _c("div", {
    staticClass: "mt-1 mb-5 d-flex justify-content-between"
  }, [_c("div", [_c("u", [_vm._v("Coefficient charges (I) / Ressources :")]), _vm._v(" " + _vm._s(_vm.formatAmount((_vm$data_tb113 = _vm.data_tb5) === null || _vm$data_tb113 === void 0 ? void 0 : _vm$data_tb113.coef_charges_ressources)) + " %\n        ")]), _vm._v(" "), _c("div", [_vm._v("(I) Prendre le palier le plus élevé")])]), _vm._v(" "), _c("div", {
    staticClass: "mt-2 table-responsive"
  }, [_c("table", {
    staticClass: "table table-bordered"
  }, [_vm._m(39), _vm._v(" "), _c("tbody", _vm._l((_vm$data_tb114 = _vm.data_tb5) === null || _vm$data_tb114 === void 0 ? void 0 : _vm$data_tb114.autre_prets, function (el, ind) {
    return _c("tr", {
      key: "autre_pret_" + ind
    }, [_c("td", [_vm._v(_vm._s(el.objet))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(el.nom_preteur))]), _vm._v(" "), _c("td", {
      staticClass: "text-right"
    }, [_vm._v(_vm._s(el.montant))]), _vm._v(" "), _c("td", {
      staticClass: "text-center"
    }, [_vm._v(_vm._s(el.date_fin_engagement != "" ? _vm.formatDate(el.date_fin_engagement) : ""))]), _vm._v(" "), _c("td", {
      staticClass: "text-right"
    }, [_vm._v(_vm._s(el.charge_mensuelle))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(el.garantie_retenue))])]);
  }), 0)])]), _vm._v(" "), _c("div", {
    staticClass: "mt-1 mb-5 d-flex justify-content-between"
  }, [_c("div", [_c("u", [_vm._v("Coefficient charges totales (I) / Ressources :")]), _vm._v(" " + _vm._s(_vm.formatAmount((_vm$data_tb115 = _vm.data_tb5) === null || _vm$data_tb115 === void 0 ? void 0 : _vm$data_tb115.coef_charges_totales_ressources)) + " %\n        ")]), _vm._v(" "), _c("div", [_vm._v("(I) Prêt demandé + autres prêts")])]), _vm._v(" "), _c("table", {
    staticClass: "table table-bordered mb-4"
  }, [_vm._m(40), _vm._v(" "), _c("table", {
    staticClass: "table table-borderless mb-3"
  }, [_c("tbody", [_c("tr", [_c("td", [_c("div", {
    staticClass: "row m-2"
  }, [_c("div", {
    staticClass: "col-4"
  }, [_c("label", {
    staticClass: "fw-bold"
  }, [_vm._v("Compte : ")]), _vm._v(" " + _vm._s((_vm$data_tb116 = _vm.data_tb5) === null || _vm$data_tb116 === void 0 || (_vm$data_tb116 = _vm$data_tb116.comptes[0]) === null || _vm$data_tb116 === void 0 ? void 0 : _vm$data_tb116.numero_compte) + "\n                            ")]), _vm._v(" "), _c("div", {
    staticClass: "col-4"
  }, [_c("label", {
    staticClass: "fw-bold"
  }, [_vm._v("Ancienneté : ")]), _vm._v(" " + _vm._s(_vm.formatMonth((_this$data_tb = this.data_tb5) === null || _this$data_tb === void 0 || (_this$data_tb = _this$data_tb.comptes[0]) === null || _this$data_tb === void 0 ? void 0 : _this$data_tb.anciennete)) + "\n                            ")]), _vm._v(" "), _c("div", {
    staticClass: "col-4"
  }, [_c("label", {
    staticClass: "fw-bold"
  }, [_vm._v("Solde moyen CT : ")]), _vm._v(" " + _vm._s((_vm$data_tb117 = _vm.data_tb5) === null || _vm$data_tb117 === void 0 || (_vm$data_tb117 = _vm$data_tb117.comptes[0]) === null || _vm$data_tb117 === void 0 ? void 0 : _vm$data_tb117.solde_moyen_ct) + "\n                            ")])]), _vm._v(" "), _c("div", {
    staticClass: "row m-2"
  }, [_c("div", {
    staticClass: "col-12 d-flex"
  }, [_c("label", {
    staticClass: "fw-bold"
  }, [_vm._v("Fonctionnement : ")]), _vm._v(" "), _c("div", {
    staticClass: "mx-2"
  }, [_c("label", [_vm._v("Très bon")]), _vm._v(" "), ((_vm$data_tb118 = _vm.data_tb5) === null || _vm$data_tb118 === void 0 || (_vm$data_tb118 = _vm$data_tb118.comptes[0]) === null || _vm$data_tb118 === void 0 ? void 0 : _vm$data_tb118.fonctionnement) == "Très bon" ? _c("input", {
    staticClass: "form-check-input",
    attrs: {
      type: "checkbox",
      checked: "",
      disabled: ""
    }
  }) : _c("input", {
    staticClass: "form-check-input",
    attrs: {
      type: "checkbox",
      disabled: ""
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "mx-2"
  }, [_c("label", [_vm._v("Bon")]), _vm._v(" "), ((_vm$data_tb119 = _vm.data_tb5) === null || _vm$data_tb119 === void 0 || (_vm$data_tb119 = _vm$data_tb119.comptes[0]) === null || _vm$data_tb119 === void 0 ? void 0 : _vm$data_tb119.fonctionnement) == "Bon" ? _c("input", {
    staticClass: "form-check-input",
    attrs: {
      type: "checkbox",
      checked: "",
      disabled: ""
    }
  }) : _c("input", {
    staticClass: "form-check-input",
    attrs: {
      type: "checkbox",
      disabled: ""
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "mx-2"
  }, [_c("label", [_vm._v("Moyen")]), _vm._v(" "), ((_vm$data_tb120 = _vm.data_tb5) === null || _vm$data_tb120 === void 0 || (_vm$data_tb120 = _vm$data_tb120.comptes[0]) === null || _vm$data_tb120 === void 0 ? void 0 : _vm$data_tb120.fonctionnement) == "Moyen" ? _c("input", {
    staticClass: "form-check-input",
    attrs: {
      type: "checkbox",
      checked: "",
      disabled: ""
    }
  }) : _c("input", {
    staticClass: "form-check-input",
    attrs: {
      type: "checkbox",
      disabled: ""
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "mx-2"
  }, [_c("label", [_vm._v("Mauvais")]), _vm._v(" "), ((_vm$data_tb121 = _vm.data_tb5) === null || _vm$data_tb121 === void 0 || (_vm$data_tb121 = _vm$data_tb121.comptes[0]) === null || _vm$data_tb121 === void 0 ? void 0 : _vm$data_tb121.fonctionnement) == "Mauvais" ? _c("input", {
    staticClass: "form-check-input",
    attrs: {
      type: "checkbox",
      checked: "",
      disabled: ""
    }
  }) : _c("input", {
    staticClass: "form-check-input",
    attrs: {
      type: "checkbox",
      disabled: ""
    }
  })])])])])])])])]), _vm._v(" "), _c("div", {
    staticClass: "mt-2 table-responsive"
  }, [_c("table", {
    staticClass: "table table-bordered"
  }, [_vm._m(41), _vm._v(" "), _c("tbody", [_vm._l((_vm$data_tb122 = _vm.data_tb5) === null || _vm$data_tb122 === void 0 ? void 0 : _vm$data_tb122.comptes, function (el, ind) {
    return [ind != 0 ? _c("tr", {
      key: "compte_" + ind
    }, [_c("td", [_vm._v(_vm._s(el.banque))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(el.numero_compte))])]) : _vm._e()];
  })], 2)])]), _vm._v(" "), _c("div", {
    staticClass: "mt-2 table-responsive"
  }, [_c("table", {
    staticClass: "table table-bordered"
  }, [_vm._m(42), _vm._v(" "), _c("tbody", [_vm._l((_vm$data_tb123 = _vm.data_tb5) === null || _vm$data_tb123 === void 0 ? void 0 : _vm$data_tb123.patrimoines, function (el, ind) {
    return _c("tr", {
      key: "patrimoine_" + ind
    }, [_c("td", [_vm._v(_vm._s(el.bien_patrimoine))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(el.adresse_emplacement))]), _vm._v(" "), _c("td", {
      staticClass: "text-right"
    }, [_vm._v(_vm._s(el.valeur_considere))])]);
  }), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "fw-bold text-right",
    attrs: {
      colspan: "2"
    }
  }, [_vm._v("Total")]), _vm._v(" "), _c("td", {
    staticClass: "text-right fw-bold"
  }, [_vm._v(_vm._s(_vm.formatAmount((_vm$data_tb124 = _vm.data_tb5) === null || _vm$data_tb124 === void 0 ? void 0 : _vm$data_tb124.total_patrimoine_valeur_considere)))])])], 2)])]), _vm._v(" "), _c("table", {
    staticClass: "table table-bordered mb-4"
  }, [_vm._m(43), _vm._v(" "), _c("table", {
    staticClass: "table table-borderless mb-3"
  }, [_c("tbody", [_c("tr", [_c("td", [_c("div", {
    staticClass: "row mt-2"
  }, [_c("div", {
    staticClass: "col-12"
  }, [_vm._m(44), _vm._v(" "), _c("div", [_c("div", {
    staticClass: "d-flex mt-2"
  }, [_c("label", {
    staticStyle: {
      "margin-left": "20px"
    }
  }, [_vm._v("Sur l'immeuble objet du prêt : ")]), _vm._v(" "), _c("div", {
    staticStyle: {
      "margin-left": "15px"
    }
  }, [_c("label", [_vm._v("OUI")]), _vm._v(" "), ((_vm$data_tb125 = _vm.data_tb5) === null || _vm$data_tb125 === void 0 ? void 0 : _vm$data_tb125.reelle_objet) == "OUI" ? _c("input", {
    staticClass: "form-check-input mr-2",
    attrs: {
      type: "checkbox",
      checked: "",
      disabled: ""
    }
  }) : _c("input", {
    staticClass: "form-check-input mr-2",
    attrs: {
      type: "checkbox",
      disabled: ""
    }
  }), _vm._v(" "), _c("label", [_vm._v("NON")]), _vm._v(" "), ((_vm$data_tb126 = _vm.data_tb5) === null || _vm$data_tb126 === void 0 ? void 0 : _vm$data_tb126.reelle_objet) == "NON" ? _c("input", {
    staticClass: "form-check-input mr-2",
    attrs: {
      type: "checkbox",
      checked: "",
      disabled: ""
    }
  }) : _c("input", {
    staticClass: "form-check-input mr-2",
    attrs: {
      type: "checkbox",
      disabled: ""
    }
  })])])]), _vm._v(" "), _c("div", [_c("div", {
    staticClass: "d-flex mt-2",
    staticStyle: {
      "margin-left": "20px"
    }
  }, [_c("div", {
    staticClass: "text-nowrap",
    staticStyle: {
      "margin-left": "20px"
    }
  }, [_c("label", [_vm._v("Hypothèque")]), _vm._v(" "), ((_vm$data_tb127 = _vm.data_tb5) === null || _vm$data_tb127 === void 0 ? void 0 : _vm$data_tb127.reelle_immeuble) == "Hypothèque" ? _c("input", {
    staticClass: "form-check-input mr-2",
    attrs: {
      type: "checkbox",
      checked: "",
      disabled: ""
    }
  }) : _c("input", {
    staticClass: "form-check-input mr-2",
    attrs: {
      type: "checkbox",
      disabled: ""
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "text-nowrap",
    staticStyle: {
      "margin-left": "20px"
    }
  }, [_c("label", [_vm._v("Subrogation")]), _vm._v(" "), ((_vm$data_tb128 = _vm.data_tb5) === null || _vm$data_tb128 === void 0 ? void 0 : _vm$data_tb128.reelle_immeuble) == "Subrogation" ? _c("input", {
    staticClass: "form-check-input mr-2",
    attrs: {
      type: "checkbox",
      checked: "",
      disabled: ""
    }
  }) : _c("input", {
    staticClass: "form-check-input mr-2",
    attrs: {
      type: "checkbox",
      disabled: ""
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "text-nowrap",
    staticStyle: {
      "margin-left": "20px"
    }
  }, [_c("label", [_vm._v("Caution hypothécaire")]), _vm._v(" "), ((_vm$data_tb129 = _vm.data_tb5) === null || _vm$data_tb129 === void 0 ? void 0 : _vm$data_tb129.reelle_immeuble) == "Caution hypothécaire" ? _c("input", {
    staticClass: "form-check-input mr-2",
    attrs: {
      type: "checkbox",
      checked: "",
      disabled: ""
    }
  }) : _c("input", {
    staticClass: "form-check-input mr-2",
    attrs: {
      type: "checkbox",
      disabled: ""
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "text-nowrap mt-2",
    staticStyle: {
      "margin-left": "40px"
    }
  }, [_c("label", [_vm._v("Valeur du bien : ")]), _vm._v(" " + _vm._s((_vm$data_tb130 = _vm.data_tb5) === null || _vm$data_tb130 === void 0 ? void 0 : _vm$data_tb130.reelle_immeuble_valeur) + "\n                                    ")])])])]), _vm._v(" "), (_vm$data_tb131 = _vm.data_tb5) !== null && _vm$data_tb131 !== void 0 && _vm$data_tb131.garanties_personnelles && _vm.commentaire_garanties_personnelles != "" ? _c("div", {
    staticClass: "row mt-4 mb-4"
  }, [_c("div", {
    staticClass: "col-12"
  }, [_vm._m(45), _vm._v(" "), _c("div", {
    staticStyle: {
      "margin-left": "20px"
    }
  }, [_c("span", {
    domProps: {
      innerHTML: _vm._s(_vm.commentaire_garanties_personnelles)
    }
  })])])]) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "row mt-2"
  }, [_c("div", {
    staticClass: "col-12"
  }, [_c("table", {
    staticClass: "table table-bordered mb-4"
  }, [_vm._m(46), _vm._v(" "), _c("table", {
    staticClass: "table table-borderless mb-3"
  }, [_c("tbody", [_c("tr", [_c("td", [_c("span", {
    domProps: {
      innerHTML: _vm._s(_vm.commentaire_garanties_constituees)
    }
  })])])])])])])])])])])])]), _vm._v(" "), _vm._m(47), _vm._v(" "), _c("div", {
    staticClass: "mt-2"
  }, [((_vm$data_tb132 = _vm.data_tb5) === null || _vm$data_tb132 === void 0 ? void 0 : _vm$data_tb132.regle_de_versement_choix) == "choix1" ? _c("div", [_c("div", {
    staticClass: "d-flex"
  }, [_c("label", [_vm._v("En une seule fois : entre les mains " + _vm._s((_vm$data_tb133 = _vm.data_tb5) === null || _vm$data_tb133 === void 0 ? void 0 : _vm$data_tb133.regle_de_versement_fonds_une_fois))])])]) : _vm._e(), _vm._v(" "), ((_vm$data_tb134 = _vm.data_tb5) === null || _vm$data_tb134 === void 0 ? void 0 : _vm$data_tb134.regle_de_versement_choix) == "choix2" ? _c("div", [_c("div", {
    staticClass: "d-flex"
  }, [_c("label", [_vm._v("Au fur à mesure de l'avancement des travaux : entre les mains " + _vm._s((_vm$data_tb135 = _vm.data_tb5) === null || _vm$data_tb135 === void 0 ? void 0 : _vm$data_tb135.regle_de_versement_fonds_avancement_travaux))])])]) : _vm._e(), _vm._v(" "), ((_vm$data_tb136 = _vm.data_tb5) === null || _vm$data_tb136 === void 0 ? void 0 : _vm$data_tb136.regle_de_versement_choix) == "choix3" ? _c("div", [_c("div", {
    staticClass: "d-flex"
  }, [_c("label", [_vm._v("Autres : ")]), _vm._v(" "), _c("div", {
    staticStyle: {
      "margin-left": "5px"
    }
  }, [((_vm$data_tb137 = _vm.data_tb5) === null || _vm$data_tb137 === void 0 ? void 0 : _vm$data_tb137.regle_de_versement_choix) == "choix3" ? _c("input", {
    staticClass: "form-check-input mr-2",
    attrs: {
      type: "checkbox",
      checked: "",
      disabled: ""
    }
  }) : _c("input", {
    staticClass: "form-check-input mr-2",
    attrs: {
      type: "checkbox",
      disabled: ""
    }
  })])]), _vm._v(" "), ((_vm$data_tb138 = _vm.data_tb5) === null || _vm$data_tb138 === void 0 ? void 0 : _vm$data_tb138.regle_de_versement_choix) == "choix3" ? _c("div", [_c("span", {
    domProps: {
      innerHTML: _vm._s((_vm$data_tb139 = _vm.data_tb5) === null || _vm$data_tb139 === void 0 ? void 0 : _vm$data_tb139.regle_de_versement_fonds_autre)
    }
  })]) : _vm._e()]) : _vm._e()]), _vm._v(" "), (_vm$data_tb140 = _vm.data_tb7) !== null && _vm$data_tb140 !== void 0 && _vm$data_tb140.pieces_versees_list ? [_vm._m(48), _vm._v(" "), _c("div", {
    staticClass: "mx-3 my-3"
  }, [_vm._l((_vm$data_tb141 = _vm.data_tb7) === null || _vm$data_tb141 === void 0 ? void 0 : _vm$data_tb141.pieces_versees_list, function (item, ind) {
    return [item.value == "Oui" ? _c("div", {
      key: "checklist_" + ind,
      staticClass: "my-3"
    }, [_c("input", {
      staticClass: "form-check-input",
      attrs: {
        type: "checkbox",
        checked: "",
        disabled: ""
      }
    }), _vm._v(" "), _c("label", [_vm._v(_vm._s(item.name) + " "), _vm.isLoadingFile ? _c("span", {
      staticClass: "spinner-border spinner-border spinner-custom-input",
      staticStyle: {
        position: "initial!important"
      }
    }) : _vm._e()]), _vm._v(" "), (item === null || item === void 0 ? void 0 : item.files) > 0 && !_vm.isLoadingFile ? _c("span", {
      staticClass: "p-1 px-2 mx-2",
      staticStyle: {
        "background-color": "rgb(44, 62, 80)",
        color: "white",
        "font-size": "13px",
        "border-radius": "5px",
        "margin-left": "0!important",
        cursor: "pointer"
      },
      on: {
        click: function click($event) {
          return _vm.handleDoubleClickOrClick(ind);
        }
      }
    }, [_vm._v(_vm._s((item === null || item === void 0 ? void 0 : item.files) > 0 ? (item === null || item === void 0 ? void 0 : item.files) + " fichier(s) uploadé(s)" : ""))]) : _vm._e()]) : _vm._e()];
  })], 2)] : _vm._e()], 2) : _vm._e();
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "justify-content-center"
  }, [_c("div", {
    staticClass: "px-3 mb-2",
    staticStyle: {
      "text-align": "center"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "justify-content-center"
  }, [_c("div", {
    staticClass: "head-memorandum-title px-3 mb-3",
    staticStyle: {
      "text-align": "center"
    }
  }, [_vm._v("Identité")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("td", {
    staticClass: "bg-grey",
    attrs: {
      colspan: "2"
    }
  }, [_vm._v("Emprunteur")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("td", {
    staticClass: "bg-grey",
    attrs: {
      colspan: "2"
    }
  }, [_vm._v("Conjoint(e)")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("td", {
    staticClass: "bg-grey text-center text-uppercase",
    attrs: {
      colspan: "2"
    }
  }, [_vm._v("Adresse Géographique")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("td", {
    staticClass: "bg-grey text-center text-uppercase",
    attrs: {
      colspan: "2"
    }
  }, [_vm._v("Activité")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("tr", [_c("td", {
    staticClass: "col-4 bg-grey"
  }), _vm._v(" "), _c("td", {
    staticClass: "col-4 bg-grey fw-bold text-center"
  }, [_vm._v("EMPRUNTEUR")]), _vm._v(" "), _c("td", {
    staticClass: "col-4 bg-grey fw-bold text-center"
  }, [_vm._v("CONJOINT")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("tr", [_c("td", [_c("u", [_c("b", [_vm._v("Pour les salariés")])])]), _vm._v(" "), _c("td"), _vm._v(" "), _c("td")]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", [_c("div", {
    staticClass: "ml-25-px"
  }, [_vm._v("Profession ")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", [_c("div", {
    staticClass: "ml-25-px"
  }, [_vm._v("Employeur - Nom ")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", [_c("div", {
    staticClass: "ml-45-px"
  }, [_vm._v("Adresse ")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", [_c("div", {
    staticClass: "ml-45-px"
  }, [_vm._v("Téléphone ")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", [_c("div", {
    staticClass: "ml-25-px"
  }, [_vm._v("Date entrée ")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", [_c("div", {
    staticClass: "ml-25-px"
  }, [_vm._v("Antécédent ")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("tr", [_c("td", {
    staticStyle: {
      "border-top-width": "1px!important"
    }
  }, [_c("u", [_c("b", [_vm._v("Pour les non salariés")])])]), _vm._v(" "), _c("td", {
    staticStyle: {
      "border-top-width": "1px!important"
    }
  }, [_c("u", [_c("br")])]), _vm._v(" "), _c("td", {
    staticStyle: {
      "border-top-width": "1px!important"
    }
  }, [_c("u", [_c("br")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", [_c("div", {
    staticClass: "ml-25-px"
  }, [_vm._v("Nature activité ")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", [_c("div", {
    staticClass: "ml-25-px"
  }, [_vm._v("Date début activité")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", [_c("div", {
    staticClass: "ml-25-px text-nowrap"
  }, [_vm._v("Nombre de personnel employé ")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", [_c("div", {
    staticClass: "ml-25-px"
  }, [_vm._v("Adresse professionnelle ")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", [_c("div", {
    staticClass: "ml-25-px"
  }, [_vm._v("Téléphone professionnel ")]), _vm._v(" "), _c("br")]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "justify-content-center"
  }, [_c("div", {
    staticClass: "head-memorandum-title px-3 mb-3",
    staticStyle: {
      "text-align": "center"
    }
  }, [_vm._v("Objet du prêt")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("td", {
    staticClass: "bg-grey text-center text-uppercase",
    attrs: {
      colspan: "2"
    }
  }, [_vm._v("Localisation")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("td", {
    staticClass: "bg-grey text-center text-uppercase",
    attrs: {
      colspan: "2"
    }
  }, [_vm._v("Usage")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("td", {
    staticClass: "bg-grey text-center text-uppercase",
    attrs: {
      colspan: "2"
    }
  }, [_vm._v("Nature")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {
    staticClass: "col-6"
  }, [_c("b", [_vm._v("Nature : ")]), _vm._v(" Contruction d'une maison individuelle")]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {
    staticClass: "col-6"
  }, [_c("b", [_vm._v("Nature : ")]), _vm._v(" Acquisition dans un programme collectif neuf")]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {
    staticClass: "col-6"
  }, [_c("b", [_vm._v("Nature : ")]), _vm._v(" Achat d'un logement ancien")]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("tr", [_c("td", {
    staticClass: "col-12",
    attrs: {
      colspan: "2"
    }
  }, [_c("span", [_c("b", [_vm._v("Nature : ")]), _vm._v(" Modification de bâtiment (Travaux)")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "justify-content-center"
  }, [_c("div", {
    staticClass: "head-memorandum-title px-3 mb-3",
    staticStyle: {
      "text-align": "center"
    }
  }, [_vm._v("Financement")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("th", {
    staticClass: "col-4 th text-center"
  }, [_vm._v("Coût opération")]), _vm._v(" "), _c("th", {
    staticClass: "col-8 th text-center"
  }, [_vm._v("Financement")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("th", {
    staticClass: "col-3 th text-center"
  }), _vm._v(" "), _c("th", {
    staticClass: "col-3 th text-center"
  }, [_vm._v("Réescomptable")]), _vm._v(" "), _c("th", {
    staticClass: "col-3 th text-center"
  }, [_vm._v("Non réescomptable")]), _vm._v(" "), _c("th", {
    staticClass: "col-3 th text-center"
  }, [_vm._v("CDMH")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12 text-center"
  }, [_vm._v("TOB")])]), _vm._v(" "), _c("div", {
    staticClass: "row text-center"
  }, [_c("div", {
    staticClass: "col-12"
  }, [_c("div", [_c("label", {
    attrs: {
      "for": "tob_exemption_tep fw-bold"
    }
  }, [_vm._v("Exemption")])])])]), _vm._v(" "), _c("div", {
    staticClass: "row text-center"
  }, [_c("div", {
    staticClass: "col-12"
  }, [_c("div", [_c("label", {
    attrs: {
      "for": "tob_non_exemption_tep fw-bold"
    }
  }, [_vm._v("Non exemption")])])])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-6 text-center"
  }, [_vm._v("TEP")]), _vm._v(" "), _c("div", {
    staticClass: "col-6 text-center"
  }, [_vm._v("TEN")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12 text-center"
  }, [_vm._v("TEN")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12 text-center"
  }, [_vm._v("TEP")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("th", {
    staticClass: "text-center th",
    attrs: {
      colspan: "7"
    }
  }, [_vm._v("BARÊME APPLICABLE")])]), _vm._v(" "), _c("tr", [_c("th", {
    staticClass: "col-2 text-center th vertical-middle",
    attrs: {
      rowspan: "2"
    }
  }), _vm._v(" "), _c("th", {
    staticClass: "col-1 text-center th vertical-middle",
    attrs: {
      rowspan: "2"
    }
  }, [_vm._v("Code")]), _vm._v(" "), _c("th", {
    staticClass: "col-1 text-center th vertical-middle",
    attrs: {
      rowspan: "2"
    }
  }, [_vm._v("Durée(1)")]), _vm._v(" "), _c("th", {
    staticClass: "col-1 text-center th vertical-middle",
    attrs: {
      rowspan: "2"
    }
  }, [_vm._v("Taux\n                        Client (2)")]), _vm._v(" "), _c("th", {
    staticClass: "col-6 text-center th vertical-middle",
    attrs: {
      colspan: "3"
    }
  }, [_vm._v("Montant\n                        échéances")])]), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "text-center col-2 th text-nowrap"
  }, [_vm._v("1"), _c("sup", [_vm._v("er")]), _vm._v(" palier")]), _vm._v(" "), _c("td", {
    staticClass: "text-center col-2 th text-nowrap"
  }, [_vm._v("2"), _c("sup", [_vm._v("e")]), _vm._v(" palier")]), _vm._v(" "), _c("td", {
    staticClass: "text-center col-2 th text-nowrap"
  }, [_vm._v("3"), _c("sup", [_vm._v("e")]), _vm._v(" palier")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "mt-1 mb-5 d-flex"
  }, [_c("div", {
    staticClass: "mr-4"
  }, [_vm._v("(1) En mois")]), _vm._v(" "), _c("div", [_vm._v("(2) TPS & Assurance incluses")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "justify-content-center"
  }, [_c("div", {
    staticClass: "head-memorandum-title px-3 mb-3",
    staticStyle: {
      "text-align": "center"
    }
  }, [_vm._v("Solvabilité de l'emprunteur")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", {
    staticClass: "text-center"
  }, [_c("th", {
    staticClass: "th",
    attrs: {
      rowspan: "2"
    }
  }), _vm._v(" "), _c("th", {
    staticClass: "th",
    attrs: {
      colspan: "3"
    }
  }, [_vm._v("Ressources")])]), _vm._v(" "), _c("tr", [_c("th", {
    staticClass: "col-3 th text-center"
  }, [_vm._v("Emprunteur")]), _vm._v(" "), _c("th", {
    staticClass: "col-3 th text-center"
  }, [_vm._v("Conjoint")]), _vm._v(" "), _c("th", {
    staticClass: "col-3 th text-center"
  }, [_vm._v("Total")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("th", {
    staticClass: "bg-grey text-center text-uppercase",
    attrs: {
      colspan: "6"
    }
  }, [_vm._v("Autres prêts")])]), _vm._v(" "), _c("tr", {
    staticClass: "text-center"
  }, [_c("th", {
    staticClass: "th vertical-middle"
  }, [_c("label", [_vm._v("Objet")])]), _vm._v(" "), _c("th", {
    staticClass: "th vertical-middle"
  }, [_c("label", [_vm._v("Nom du prêteur")])]), _vm._v(" "), _c("th", {
    staticClass: "th vertical-middle"
  }, [_c("label", [_vm._v("Montant")])]), _vm._v(" "), _c("th", {
    staticClass: "th vertical-middle"
  }, [_c("label", [_vm._v("Date fin "), _c("br"), _vm._v(" engagement")])]), _vm._v(" "), _c("th", {
    staticClass: "th vertical-middle"
  }, [_c("label", [_vm._v("Charges "), _c("br"), _vm._v(" mensuelles")])]), _vm._v(" "), _c("th", {
    staticClass: "th vertical-middle"
  }, [_c("label", [_vm._v("Garanties "), _c("br"), _vm._v(" retenues")])])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("td", {
    staticClass: "bg-grey text-center text-uppercase",
    attrs: {
      colspan: "2"
    }
  }, [_vm._v("Compte NSIA BANQUE-CI")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("td", {
    staticClass: "bg-grey text-center text-uppercase",
    attrs: {
      colspan: "2"
    }
  }, [_vm._v("Autres relations bancaires")])]), _vm._v(" "), _c("tr", [_c("th", {
    staticClass: "th text-nowrap text-center col-6"
  }, [_c("label", [_vm._v("Banque")])]), _vm._v(" "), _c("th", {
    staticClass: "th text-nowrap text-center col-6"
  }, [_c("label", [_vm._v("N° Compte")])])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("td", {
    staticClass: "bg-grey text-center text-uppercase",
    attrs: {
      colspan: "3"
    }
  }, [_vm._v("Patrimoines")])]), _vm._v(" "), _c("tr", [_c("th", {
    staticClass: "th text-nowrap text-center col-6"
  }, [_c("label", [_vm._v("Désignation des biens")])]), _vm._v(" "), _c("th", {
    staticClass: "th text-nowrap text-center col-3"
  }, [_c("label", [_vm._v("Adresse")])]), _vm._v(" "), _c("th", {
    staticClass: "th text-nowrap text-center col-3"
  }, [_c("label", [_vm._v("Estimation")])])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("td", {
    staticClass: "bg-grey text-center text-uppercase",
    attrs: {
      colspan: "2"
    }
  }, [_vm._v("Garanties")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", [_c("b", [_vm._v("Réelles")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", [_c("b", [_vm._v("Personnelles (préciser)")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("td", {
    staticClass: "bg-grey text-center text-uppercase",
    attrs: {
      colspan: "2"
    }
  }, [_vm._v("Garanties constituées")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "justify-content-center"
  }, [_c("div", {
    staticClass: "head-memorandum-title px-3 mb-3",
    staticStyle: {
      "text-align": "center"
    }
  }, [_vm._v("Règle de versement des fonds")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "justify-content-center"
  }, [_c("div", {
    staticClass: "head-memorandum-title px-3 mb-2",
    staticStyle: {
      "text-align": "center"
    }
  }, [_vm._v("Pièces versées au dossier")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/memo/carcasse_ppi/PPI1.vue?vue&type=style&index=0&id=446c9dca&lang=css&scoped=true":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/memo/carcasse_ppi/PPI1.vue?vue&type=style&index=0&id=446c9dca&lang=css&scoped=true ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".bg-grey[data-v-446c9dca], .th[data-v-446c9dca] {\r\n    background-color: #f4f3f3;\r\n    font-weight: 600;\n}\n.memo[data-v-446c9dca] {\r\n    margin-top: 10px;\r\n    padding: 10px;\r\n    border: 2px solid #fff;\r\n    font-weight: 550;\r\n    font-size: 16px;\r\n    text-align: left;\r\n    text-transform: uppercase;\r\n    background-color: #34495e;\r\n    color: #fff;\n}\n.head-memorandum-title[data-v-446c9dca] {\r\n    margin-top: 15px;\r\n    padding: 16px;\r\n    color: #fff;\r\n    font-weight: bold;\r\n    background-color: #34495e;\r\n    border: 2px solid #575759;\r\n    box-shadow: 1px 3px 4px #ddd;\r\n    font-size: 16px;\r\n    text-align: center;\r\n    text-transform: uppercase;\r\n    border-radius: 10px;\r\n    margin-bottom: 15px;\n}\n.vertical-middle[data-v-446c9dca] {\r\n    vertical-align: middle;\n}\n.mr-2[data-v-446c9dca] {\r\n    margin-right: 0.5rem;\n}\n.ml-25-px[data-v-446c9dca] {\r\n    margin-left: 25px;\n}\n.ml-45-px[data-v-446c9dca] {\r\n    margin-left: 45px;\n}\n.table-bordered[data-v-446c9dca] {\r\n    font-size: 0.9rem;\n}\n.form-check-input[data-v-446c9dca]:disabled {\r\n    opacity: 1;\n}\n.activite td[data-v-446c9dca] {\r\n    padding: 7px;\n}\r\n\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/memo/carcasse_ppi/PPI1.vue?vue&type=style&index=0&id=446c9dca&lang=css&scoped=true":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/memo/carcasse_ppi/PPI1.vue?vue&type=style&index=0&id=446c9dca&lang=css&scoped=true ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PPI1_vue_vue_type_style_index_0_id_446c9dca_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PPI1.vue?vue&type=style&index=0&id=446c9dca&lang=css&scoped=true */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/memo/carcasse_ppi/PPI1.vue?vue&type=style&index=0&id=446c9dca&lang=css&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PPI1_vue_vue_type_style_index_0_id_446c9dca_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PPI1_vue_vue_type_style_index_0_id_446c9dca_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/offview/bank/nsia/memo/carcasse_ppi/PPI1.vue":
/*!******************************************************************************!*\
  !*** ./resources/js/components/offview/bank/nsia/memo/carcasse_ppi/PPI1.vue ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PPI1_vue_vue_type_template_id_446c9dca_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PPI1.vue?vue&type=template&id=446c9dca&scoped=true */ "./resources/js/components/offview/bank/nsia/memo/carcasse_ppi/PPI1.vue?vue&type=template&id=446c9dca&scoped=true");
/* harmony import */ var _PPI1_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PPI1.vue?vue&type=script&lang=js */ "./resources/js/components/offview/bank/nsia/memo/carcasse_ppi/PPI1.vue?vue&type=script&lang=js");
/* harmony import */ var _PPI1_vue_vue_type_style_index_0_id_446c9dca_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PPI1.vue?vue&type=style&index=0&id=446c9dca&lang=css&scoped=true */ "./resources/js/components/offview/bank/nsia/memo/carcasse_ppi/PPI1.vue?vue&type=style&index=0&id=446c9dca&lang=css&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _PPI1_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _PPI1_vue_vue_type_template_id_446c9dca_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _PPI1_vue_vue_type_template_id_446c9dca_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "446c9dca",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/offview/bank/nsia/memo/carcasse_ppi/PPI1.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/offview/bank/nsia/memo/carcasse_ppi/PPI1.vue?vue&type=script&lang=js":
/*!******************************************************************************************************!*\
  !*** ./resources/js/components/offview/bank/nsia/memo/carcasse_ppi/PPI1.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PPI1_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PPI1.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/memo/carcasse_ppi/PPI1.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PPI1_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/offview/bank/nsia/memo/carcasse_ppi/PPI1.vue?vue&type=style&index=0&id=446c9dca&lang=css&scoped=true":
/*!**************************************************************************************************************************************!*\
  !*** ./resources/js/components/offview/bank/nsia/memo/carcasse_ppi/PPI1.vue?vue&type=style&index=0&id=446c9dca&lang=css&scoped=true ***!
  \**************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PPI1_vue_vue_type_style_index_0_id_446c9dca_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PPI1.vue?vue&type=style&index=0&id=446c9dca&lang=css&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/memo/carcasse_ppi/PPI1.vue?vue&type=style&index=0&id=446c9dca&lang=css&scoped=true");


/***/ }),

/***/ "./resources/js/components/offview/bank/nsia/memo/carcasse_ppi/PPI1.vue?vue&type=template&id=446c9dca&scoped=true":
/*!************************************************************************************************************************!*\
  !*** ./resources/js/components/offview/bank/nsia/memo/carcasse_ppi/PPI1.vue?vue&type=template&id=446c9dca&scoped=true ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PPI1_vue_vue_type_template_id_446c9dca_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PPI1_vue_vue_type_template_id_446c9dca_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PPI1_vue_vue_type_template_id_446c9dca_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PPI1.vue?vue&type=template&id=446c9dca&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/memo/carcasse_ppi/PPI1.vue?vue&type=template&id=446c9dca&scoped=true");


/***/ })

}]);