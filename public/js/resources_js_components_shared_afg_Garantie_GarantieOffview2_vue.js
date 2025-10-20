"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_shared_afg_Garantie_GarantieOffview2_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/Garantie/GarantieOffview2.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/Garantie/GarantieOffview2.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'GarantiesTable',
  props: {
    dossierCredit: {
      type: Object,
      required: true
    },
    garantiesData: {
      type: Array,
      required: true
    },
    faciliteSollicitees: {
      type: Array,
      required: true
    },
    title: {
      type: String,
      "default": 'Sûretés et garanties'
    }
  },
  data: function data() {
    var _this$dossierCredit;
    return {
      data_tb: (_this$dossierCredit = this.dossierCredit) === null || _this$dossierCredit === void 0 ? void 0 : _this$dossierCredit.cred_pub_tb_120008,
      defaultGarantieIds: ['avi', 'assurance', 'caution', 'hypotheque', 'gage', 'divers'],
      tableConfig: {
        avi: [{
          label: 'Ligne de crédit associée',
          key: 'ligneCredit',
          format: 'formaTypeFacilite'
        }, {
          label: 'Montant de la domiciliation',
          key: 'montant',
          format: 'formatNumber'
        }, {
          label: 'Pièce(s) jointe(s) (si nécessaire)',
          key: 'files'
        }, {
          label: 'Garantie recueillie (Oui/Non)',
          key: 'is_recueillie'
        }, {
          label: 'Commentaire',
          key: 'commentaire'
        }],
        assurance: [{
          label: 'Ligne de crédit associée',
          key: 'ligneCredit',
          format: 'formaTypeFacilite'
        }, {
          label: "Type d'assurance",
          key: 'typeAssurance'
        }, {
          label: "Montant/Hauteur de l'assurance",
          key: 'valeurAssuree',
          format: 'formatNumber'
        }, {
          label: 'Pièce(s) jointe(s) (si nécessaire)',
          key: 'files'
        }, {
          label: 'Garantie recueillie (Oui/Non)',
          key: 'is_recueillie'
        }, {
          label: 'Commentaire',
          key: 'commentaire'
        }],
        caution: [{
          label: 'Ligne de crédit associée',
          key: 'ligneCredit',
          format: 'formaTypeFacilite'
        }, {
          label: 'Nom du garant/caution',
          key: 'firstname'
        }, {
          label: 'Prénom du garant/caution',
          key: 'lastname'
        }, {
          label: 'Date de naissance',
          key: 'date_naissance',
          format: 'formatDate'
        }, {
          label: 'Lieu de naissance',
          key: 'lieu_naissance',
          "default": '-'
        }, {
          label: 'Nom du père',
          key: 'nom_du_pere',
          "default": '-'
        }, {
          label: 'Nom de la mère',
          key: 'nom_de_la_mere',
          "default": '-'
        }, {
          label: 'Adresse de la caution',
          key: 'adresse_de_la_caution',
          "default": '-'
        }, {
          label: 'Sexe',
          key: 'sexe'
        }, {
          label: 'Caution principale (Oui/Non)',
          key: 'isPrincipal'
        }, {
          label: 'Téléphone',
          key: 'telephone'
        }, {
          label: 'Valeur de cautionnement',
          key: 'valeur_caution',
          format: 'formatNumber'
        }, {
          label: "Pièce d'identité",
          key: 'files'
        }, {
          label: "N° Pièce d'identité",
          key: 'piece'
        }, {
          label: 'Type de la pièce',
          key: 'type_piece',
          "default": '-'
        }, {
          label: 'Date de délivrance de la pièce',
          key: 'date_delivrance_piece',
          format: 'formatDate',
          "default": '-'
        }, {
          label: 'Lieu de délivrance de la pièce',
          key: 'lieu_delivration',
          "default": '-'
        }, {
          label: 'Garantie recueillie (Oui/Non)',
          key: 'is_recueillie'
        }, {
          label: 'Commentaire',
          key: 'commentaire'
        }],
        hypotheque: [{
          label: 'Ligne de crédit associée',
          key: 'ligneCredit',
          format: 'formaTypeFacilite'
        }, {
          label: "Type d'hypothèque",
          key: 'bien_hypotheque'
        }, {
          label: "Rang de l'hypothèque",
          key: 'rang'
        }, {
          label: 'Nom du propriétaire',
          key: 'proprietaire'
        }, {
          label: 'N° du titre foncier (si nécessaire)',
          key: 'numero_tel'
        }, {
          label: "Date d'attribution",
          key: 'annee_achat',
          format: 'formatDate'
        }, {
          label: "Adresse de l'emplacement",
          key: 'adresse_emplacement'
        }, {
          label: 'Longitude',
          key: 'longitude'
        }, {
          label: 'Latitude',
          key: 'latitude'
        }, {
          label: "Date d'évaluation",
          key: 'date_evaluation',
          format: 'formatDate'
        }, {
          label: 'Valeur marchande',
          key: 'valeur_marchande',
          format: 'formatNumber'
        }, {
          label: 'Valeur considérée',
          key: 'valeur_considere',
          format: 'formatNumber'
        }, {
          label: 'Pièce(s) jointe(s) (si nécessaire)',
          key: 'files'
        }, {
          label: 'Garantie recueillie (Oui/Non)',
          key: 'is_recueillie'
        }],
        gage: [{
          label: 'Ligne de crédit associée',
          key: 'ligneCredit',
          format: 'formaTypeFacilite'
        }, {
          label: 'Type de bien à gagé',
          key: 'bienGage'
        }, {
          label: 'Montant/Valeur du gage',
          key: 'montant',
          format: 'formatNumber'
        }, {
          label: 'Pièce(s) jointe(s) (si nécessaire)',
          key: 'files'
        }, {
          label: 'Garantie recueillie (Oui/Non)',
          key: 'is_recueillie'
        }, {
          label: 'Commentaire',
          key: 'commentaire'
        }],
        "default": [{
          label: 'Ligne de crédit associée',
          key: 'ligneCredit',
          format: 'formaTypeFacilite'
        }, {
          label: 'Description',
          key: 'description'
        }, {
          label: 'Montant',
          key: 'montant',
          format: 'formatNumber'
        }, {
          label: '%',
          key: 'percent'
        }, {
          label: 'Pièce(s) jointe(s) (si nécessaire)',
          key: 'files'
        }, {
          label: 'Garantie recueillie (Oui/Non)',
          key: 'is_recueillie'
        }, {
          label: 'Commentaire',
          key: 'commentaire'
        }]
      }
    };
  },
  computed: {
    filteredGarantie: function filteredGarantie() {
      var _this$garantiesData$f, _this$garantiesData;
      return (_this$garantiesData$f = (_this$garantiesData = this.garantiesData) === null || _this$garantiesData === void 0 ? void 0 : _this$garantiesData.filter(function (garantie) {
        return garantie.checked;
      })) !== null && _this$garantiesData$f !== void 0 ? _this$garantiesData$f : [];
    }
  },
  methods: {
    formaTypeFacilite: function formaTypeFacilite(data) {
      var _this$faciliteSollici;
      var f = (_this$faciliteSollici = this.faciliteSollicitees) === null || _this$faciliteSollici === void 0 ? void 0 : _this$faciliteSollici.find(function (f) {
        return f.uuid == data;
      });
      return f ? "".concat(f.type_facilite, "-").concat(f.montant_credit) : '';
    },
    formatValue: function formatValue(info, key, row) {
      var _ref, _info$key;
      if (key == 'ligneCredit') {
        console.log('******************', key);
      }
      var value = (_ref = (_info$key = info[key]) !== null && _info$key !== void 0 ? _info$key : row["default"]) !== null && _ref !== void 0 ? _ref : '';
      if (row.format === 'formatNumber') {
        return this.$options.filters.formatNumber(value);
      } else if (row.format === 'formatDate') {
        return this.$options.filters.formatDate(value);
      }
      return value;
    },
    getTableRows: function getTableRows(garantie) {
      var isDefault = ['divers', 'cash_collateral'].includes(garantie.id) || !this.defaultGarantieIds.includes(garantie.id);
      return this.tableConfig[garantie.id] || this.tableConfig["default"];
    },
    handleFileAction: function handleFileAction(_ref2, garantieId) {
      var _this$garantiesData2, _garantie$infos, _this$dossierCredit2;
      var index = _ref2.index;
      var garantie = (_this$garantiesData2 = this.garantiesData) === null || _this$garantiesData2 === void 0 ? void 0 : _this$garantiesData2.find(function (g) {
        return g.id === garantieId;
      });
      var info = garantie === null || garantie === void 0 || (_garantie$infos = garantie.infos) === null || _garantie$infos === void 0 ? void 0 : _garantie$infos[index];
      if (!garantie || !info) {
        console.error('Garantie ou info non trouvée');
        return;
      }
      var identity = "".concat((_this$dossierCredit2 = this.dossierCredit) === null || _this$dossierCredit2 === void 0 ? void 0 : _this$dossierCredit2.cred_pub_key, "_").concat(garantieId, "_").concat(info.id);
      var templateName = "Pi\xE8ce(s) jointe(s) -Suretes_et_garanties_check_list_".concat(identity);

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
      this.$emit('get-files');
    },
    hasGaranties: function hasGaranties() {
      var _this$garantiesData3, _this$garantiesData4;
      return ((_this$garantiesData3 = this.garantiesData) === null || _this$garantiesData3 === void 0 || (_this$garantiesData3 = _this$garantiesData3.garanties) === null || _this$garantiesData3 === void 0 ? void 0 : _this$garantiesData3.length) > 0 && ((_this$garantiesData4 = this.garantiesData) === null || _this$garantiesData4 === void 0 ? void 0 : _this$garantiesData4.garanties.some(function (cp) {
        return (cp === null || cp === void 0 ? void 0 : cp.name) !== null && (cp === null || cp === void 0 ? void 0 : cp.checked) === true;
      }));
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/Garantie/GarantieOffview2.vue?vue&type=template&id=166a84fe&scoped=true":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/Garantie/GarantieOffview2.vue?vue&type=template&id=166a84fe&scoped=true ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm.garantiesData ? _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "justify-content-center"
  }, [_c("div", {
    staticClass: "head-memorandum-title px-3 mb-4",
    staticStyle: {
      "text-align": "center"
    }
  }, [_vm._v("\n      " + _vm._s(_vm.title) + "\n    ")])]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12"
  }, [_c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-bordered"
  }, [_vm._m(0), _vm._v(" "), _c("tbody", [_vm._m(1), _vm._v(" "), _vm.filteredGarantie.length > 0 ? _vm._l(_vm.filteredGarantie, function (garantie, index) {
    return garantie.checked ? _c("tr", {
      key: garantie.id
    }, [_c("td", {
      staticClass: "text-center"
    }, [_c("input", {
      staticClass: "form-check-input",
      staticStyle: {
        width: "20px",
        height: "20px"
      },
      attrs: {
        disabled: "",
        type: "checkbox"
      },
      domProps: {
        checked: garantie.checked
      }
    })]), _vm._v(" "), _c("td", [_vm._v(_vm._s(garantie.name))])]) : _vm._e();
  }) : [_vm._m(2)]], 2)])]), _vm._v(" "), _vm.filteredGarantie.length > 0 ? _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12"
  }, [_c("div", {
    staticClass: "garanties-details"
  }, _vm._l(_vm.filteredGarantie, function (garantie) {
    var _garantie$infos, _garantie$infos2;
    return _c("div", {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: garantie.checked && ((_garantie$infos = garantie.infos) === null || _garantie$infos === void 0 ? void 0 : _garantie$infos.some(function (el) {
          return ![null, undefined, ""].includes(el.ligneCredit);
        })),
        expression: "\n                garantie.checked &&\n                garantie.infos?.some(\n                  (el) => ![null, undefined, ''].includes(el.ligneCredit)\n                )\n              "
      }],
      key: garantie.id,
      staticClass: "garantie-detail"
    }, [_c("div", {
      staticClass: "p-2 text-center fw-bold fst-italic",
      staticStyle: {
        border: "1px solid",
        "border-bottom": "0"
      }
    }, [_c("b", [_vm._v(_vm._s(garantie.name))])]), _vm._v(" "), (_garantie$infos2 = garantie.infos) !== null && _garantie$infos2 !== void 0 && _garantie$infos2.some(function (el) {
      return ![null, undefined, ""].includes(el.ligneCredit);
    }) ? _c("div", {
      staticClass: "table-responsive"
    }, [_c("table", {
      staticClass: "table table-bordered",
      staticStyle: {
        border: "none"
      }
    }, [_c("tbody", [_vm._l(_vm.getTableRows(garantie), function (row, rowIndex) {
      return _c("tr", {
        key: row.label + rowIndex
      }, [_c("td", {
        staticClass: "sticky-col"
      }, [_vm._v(_vm._s(row.label))]), _vm._v(" "), _vm._l(garantie.infos, function (info, infoIndex) {
        return _c("td", {
          key: "".concat(row.key, "-").concat(infoIndex, "-").concat(garantie.id)
        }, [row.key === "files" ? [garantie.checked && (info === null || info === void 0 ? void 0 : info.files) > 0 ? _c("div", {
          staticClass: "d-flex align-items-center"
        }, [_c("span", {
          staticClass: "p-1 px-2 mx-2 text-nowrap",
          staticStyle: {
            "background-color": "rgb(44, 62, 80)",
            color: "white",
            "font-size": "13px",
            "border-radius": "5px",
            "margin-left": "0 !important",
            width: "150px"
          }
        }, [_vm._v("\n                                " + _vm._s(info.files) + " fichier(s) uploadé(s)\n                              ")]), _vm._v(" "), _c("button", {
          staticClass: "btn shadow-md text-white",
          staticStyle: {
            cursor: "pointer",
            background: "#2c3e50",
            width: "26px",
            "font-size": "13px",
            padding: "1px"
          },
          attrs: {
            type: "button",
            "data-toggle": "tooltip",
            title: "Cliquer ici pour uploader ou voir le(s) fichier(s)"
          },
          on: {
            click: function click($event) {
              return _vm.handleFileAction({
                index: infoIndex
              }, garantie.id);
            }
          }
        }, [_c("i", {
          staticClass: "icofont-attachment"
        })])]) : _c("div", {
          staticClass: "text-center text-danger"
        }, [_vm._v("\n                              Aucun fichier(s) uploadé(s)\n                            ")])] : row.key === "is_recueillie" ? [_c("span", {
          staticClass: "badge",
          "class": info[row.key] === "Non" ? "badge-danger" : "badge-success"
        }, [_vm._v("\n                              " + _vm._s(info[row.key] === "Non" ? "A Recueillir" : info[row.key] === "Oui" ? "Recueillie" : "") + "\n                            ")])] : [_vm._v("\n                            " + _vm._s(_vm.formatValue(info, row.key, row)) + "\n                          ")]], 2);
      })], 2);
    })], 2)])]) : _vm._e()]);
  }), 0)])]) : _vm._e()])])]) : _vm._e();
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("th", {
    staticClass: "th text-nowrap text-center bg-grey",
    attrs: {
      colspan: "2"
    }
  }, [_c("b", [_vm._v("Récapitulatif des Garanties")])])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("tr", {
    staticClass: "text-center"
  }, [_c("th", {
    staticClass: "th text-nowrap"
  }, [_c("label", [_vm._v("---")])]), _vm._v(" "), _c("th", {
    staticClass: "th text-nowrap"
  }, [_c("label", [_vm._v("Type garantie /sûreté")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("tr", [_c("td", {
    staticClass: "text-center text-danger",
    attrs: {
      colspan: "2"
    }
  }, [_vm._v("\n                  Aucune(s) garantie(s)/sûreté(s) saisie(s)\n                ")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/Garantie/GarantieOffview2.vue?vue&type=style&index=0&id=166a84fe&lang=css&scoped=true":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/Garantie/GarantieOffview2.vue?vue&type=style&index=0&id=166a84fe&lang=css&scoped=true ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.bg-grey[data-v-166a84fe] {\r\n  background-color: #f4f3f3;\r\n  font-weight: 600;\r\n  width: 32%;\n}\n.head-memorandum-title[data-v-166a84fe] {\r\n  font-weight: bold;\r\n  text-transform: uppercase;\r\n  text-align: center;\r\n  border: 1px solid;\r\n  padding: 4px;\r\n  margin-top: 30px;\n}\n.badge-success[data-v-166a84fe] {\r\n  background-color: rgb(20, 165, 20);\n}\n.badge-danger[data-v-166a84fe] {\r\n  background-color: rgb(212, 14, 14);\n}\n.vertical-middle[data-v-166a84fe] {\r\n  vertical-align: middle;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/Garantie/GarantieOffview2.vue?vue&type=style&index=0&id=166a84fe&lang=css&scoped=true":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/Garantie/GarantieOffview2.vue?vue&type=style&index=0&id=166a84fe&lang=css&scoped=true ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GarantieOffview2_vue_vue_type_style_index_0_id_166a84fe_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GarantieOffview2.vue?vue&type=style&index=0&id=166a84fe&lang=css&scoped=true */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/Garantie/GarantieOffview2.vue?vue&type=style&index=0&id=166a84fe&lang=css&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GarantieOffview2_vue_vue_type_style_index_0_id_166a84fe_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GarantieOffview2_vue_vue_type_style_index_0_id_166a84fe_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/shared/afg/Garantie/GarantieOffview2.vue":
/*!**************************************************************************!*\
  !*** ./resources/js/components/shared/afg/Garantie/GarantieOffview2.vue ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _GarantieOffview2_vue_vue_type_template_id_166a84fe_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GarantieOffview2.vue?vue&type=template&id=166a84fe&scoped=true */ "./resources/js/components/shared/afg/Garantie/GarantieOffview2.vue?vue&type=template&id=166a84fe&scoped=true");
/* harmony import */ var _GarantieOffview2_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GarantieOffview2.vue?vue&type=script&lang=js */ "./resources/js/components/shared/afg/Garantie/GarantieOffview2.vue?vue&type=script&lang=js");
/* harmony import */ var _GarantieOffview2_vue_vue_type_style_index_0_id_166a84fe_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GarantieOffview2.vue?vue&type=style&index=0&id=166a84fe&lang=css&scoped=true */ "./resources/js/components/shared/afg/Garantie/GarantieOffview2.vue?vue&type=style&index=0&id=166a84fe&lang=css&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _GarantieOffview2_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _GarantieOffview2_vue_vue_type_template_id_166a84fe_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _GarantieOffview2_vue_vue_type_template_id_166a84fe_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "166a84fe",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/shared/afg/Garantie/GarantieOffview2.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/shared/afg/Garantie/GarantieOffview2.vue?vue&type=script&lang=js":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/shared/afg/Garantie/GarantieOffview2.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GarantieOffview2_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GarantieOffview2.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/Garantie/GarantieOffview2.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GarantieOffview2_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/shared/afg/Garantie/GarantieOffview2.vue?vue&type=style&index=0&id=166a84fe&lang=css&scoped=true":
/*!**********************************************************************************************************************************!*\
  !*** ./resources/js/components/shared/afg/Garantie/GarantieOffview2.vue?vue&type=style&index=0&id=166a84fe&lang=css&scoped=true ***!
  \**********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GarantieOffview2_vue_vue_type_style_index_0_id_166a84fe_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GarantieOffview2.vue?vue&type=style&index=0&id=166a84fe&lang=css&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/Garantie/GarantieOffview2.vue?vue&type=style&index=0&id=166a84fe&lang=css&scoped=true");


/***/ }),

/***/ "./resources/js/components/shared/afg/Garantie/GarantieOffview2.vue?vue&type=template&id=166a84fe&scoped=true":
/*!********************************************************************************************************************!*\
  !*** ./resources/js/components/shared/afg/Garantie/GarantieOffview2.vue?vue&type=template&id=166a84fe&scoped=true ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GarantieOffview2_vue_vue_type_template_id_166a84fe_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GarantieOffview2_vue_vue_type_template_id_166a84fe_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GarantieOffview2_vue_vue_type_template_id_166a84fe_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GarantieOffview2.vue?vue&type=template&id=166a84fe&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/Garantie/GarantieOffview2.vue?vue&type=template&id=166a84fe&scoped=true");


/***/ })

}]);