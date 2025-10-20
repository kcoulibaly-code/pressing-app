"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_offview_bank_afg_contre_analyse_filiale_CA2_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/contre_analyse_filiale/CA2.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/contre_analyse_filiale/CA2.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    dossier_credit: Object
  },
  data: function data() {
    var _this$dossier_credit;
    return {
      credpubIn0: null,
      credpubIn1: null,
      credpubIn2: null,
      credpubIn3: null,
      credpubIn4: null,
      data_tb: (_this$dossier_credit = this.dossier_credit) === null || _this$dossier_credit === void 0 ? void 0 : _this$dossier_credit.cred_pub_tb_14072,
      cred_tb_14071: this.dossier_credit.cred_pub_tb_14071,
      defaultGarantieIds: ['avi', 'assurance', 'caution', 'hypotheque', 'gage', 'divers']
    };
  },
  mounted: function mounted() {
    var _this$dossier_credit2;
    var applied_templ_name = (_this$dossier_credit2 = this.dossier_credit) === null || _this$dossier_credit2 === void 0 ? void 0 : _this$dossier_credit2.applied_templ_name;
    var tbArrays = this.determineCredPubTables(applied_templ_name, this.dossier_credit);
    this.credpubIn0 = tbArrays[0];
    this.credpubIn1 = tbArrays[3];
    this.credpubIn2 = tbArrays[4];
    this.credpubIn3 = tbArrays[5];
    this.credpubIn4 = tbArrays[6];
    // EventBus.$on("updated-extra-file-upload", (data) => {
    //     this.getFiles();
    // });
  },
  methods: {
    formaTypeFacilite: function formaTypeFacilite(data) {
      var _this$cred_tb_;
      var f = (_this$cred_tb_ = this.cred_tb_14071) === null || _this$cred_tb_ === void 0 || (_this$cred_tb_ = _this$cred_tb_.propositions_concours) === null || _this$cred_tb_ === void 0 ? void 0 : _this$cred_tb_.find(function (f) {
        return f.uuid == data;
      });
      if (f) {
        return f.type_facilite + '-' + f.montant_credit;
      }
      return '';
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
    handleDoubleClickOrClick: function handleDoubleClickOrClick(_ref, garantieId) {
      var _this$data_tb, _garantie$infos, _this$dossier_credit3;
      var index = _ref.index;
      // console.log(`Clic sur le bouton d'upload pour la garantie ${garantieId}, index ${index}`);
      var garantie = (_this$data_tb = this.data_tb) === null || _this$data_tb === void 0 ? void 0 : _this$data_tb.garanties.find(function (g) {
        return g.id === garantieId;
      });
      var info = garantie === null || garantie === void 0 || (_garantie$infos = garantie.infos) === null || _garantie$infos === void 0 ? void 0 : _garantie$infos[index];
      if (!garantie || !info) {
        console.error('Garantie ou info non trouvée');
        return;
      }

      // console.log('Garantie:', garantie);
      // console.log('Info:', info);

      // Créer un nom unique pour le template
      var identity = "".concat((_this$dossier_credit3 = this.dossier_credit) === null || _this$dossier_credit3 === void 0 ? void 0 : _this$dossier_credit3.cred_pub_key, "_").concat(garantieId, "_").concat(info.id);

      // const templateName = `Pièce(s) jointe(s) {(*)}Suretes_et_garanties_check_list_${identity}_${this.tb_name}`;
      var templateName = "Pi\xE8ce(s) jointe(s) -Suretes_et_garanties_check_list_".concat(identity);

      // const str = "Pièce(s) jointe(s) -Suretes_et_garanties_check_list_202507-0108-55062025-07-01-a7f3fafb-8c7a-468b-b33c-ac12d9b072d1_avi_203db850-2bd9-44ee-b01b-48d39a3b29d3"
      // console.log("str **> ",str);
      // console.log("str === templateName  **> ",str === templateName);

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
      var _this$cred_tb_2,
        _this = this;
      this.files = this.dossiers_credit_files;
      (_this$cred_tb_2 = this.cred_tb_120008) === null || _this$cred_tb_2 === void 0 || _this$cred_tb_2.garanties.forEach(function (garantie, garantieId) {
        garantie.infos.forEach(function (element, index) {
          var count = 0;
          _this.files.forEach(function (file) {
            var _element$template;
            if ((file === null || file === void 0 ? void 0 : file.extra_file_template_id) != null && (element === null || element === void 0 || (_element$template = element.template) === null || _element$template === void 0 ? void 0 : _element$template.id) == (file === null || file === void 0 ? void 0 : file.extra_file_template_id)) {
              count++;
            }
          });
          _this.cred_tb_120008.garanties[garantieId].infos[index]["files"] = count;
        });
      });
    },
    hasGaranties: function hasGaranties() {
      var _this$data_tb2, _this$data_tb3, _this$data_tb4;
      return ((_this$data_tb2 = this.data_tb) === null || _this$data_tb2 === void 0 || (_this$data_tb2 = _this$data_tb2.garanties) === null || _this$data_tb2 === void 0 ? void 0 : _this$data_tb2.length) > 0 && ((_this$data_tb3 = this.data_tb) === null || _this$data_tb3 === void 0 || (_this$data_tb3 = _this$data_tb3.garanties) === null || _this$data_tb3 === void 0 ? void 0 : _this$data_tb3.length) > 0 && ((_this$data_tb4 = this.data_tb) === null || _this$data_tb4 === void 0 || (_this$data_tb4 = _this$data_tb4.garanties) === null || _this$data_tb4 === void 0 ? void 0 : _this$data_tb4.some(function (cp) {
        return (cp === null || cp === void 0 ? void 0 : cp.name) !== null && (cp === null || cp === void 0 ? void 0 : cp.checked) === true;
      }));
    }
  },
  computed: {
    filteredGarantie: function filteredGarantie() {
      var _this$data_tb$garanti, _this$data_tb5;
      return (_this$data_tb$garanti = (_this$data_tb5 = this.data_tb) === null || _this$data_tb5 === void 0 || (_this$data_tb5 = _this$data_tb5.garanties) === null || _this$data_tb5 === void 0 ? void 0 : _this$data_tb5.filter(function (garantie) {
        return garantie.checked;
      })) !== null && _this$data_tb$garanti !== void 0 ? _this$data_tb$garanti : [];
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/contre_analyse_filiale/CA2.vue?vue&type=template&id=546ae8fa&scoped=true":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/contre_analyse_filiale/CA2.vue?vue&type=template&id=546ae8fa&scoped=true ***!
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
    staticClass: "row"
  }, [_vm._m(0), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12"
  }, [_c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-bordered"
  }, [_vm._m(1), _vm._v(" "), _c("tbody", [_vm._m(2), _vm._v(" "), _vm.filteredGarantie.length > 0 ? _vm._l(_vm.filteredGarantie, function (garantie, index) {
    return garantie.checked ? _c("tr", {
      key: garantie.id
    }, [[_c("td", {
      staticClass: "text-center"
    }, [garantie.checked ? _c("input", {
      staticClass: "form-check-input",
      staticStyle: {
        width: "20px",
        height: "20px"
      },
      attrs: {
        disabled: "",
        type: "checkbox",
        checked: ""
      }
    }) : _c("input", {
      staticClass: "form-check-input",
      staticStyle: {
        width: "20px",
        height: "20px"
      },
      attrs: {
        type: "checkbox",
        disabled: ""
      }
    })]), _vm._v(" "), _c("td", [_vm._v(_vm._s(garantie.name))])]], 2) : _vm._e();
  }) : [_vm._m(3)]], 2)])]), _vm._v(" "), _vm.filteredGarantie.length > 0 ? _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12"
  }, [_c("div", {
    staticClass: "garanties-details"
  }, _vm._l(_vm.filteredGarantie, function (garantie, garantieID) {
    var _garantie$infos, _garantie$infos2;
    return _c("div", {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: garantie.checked && ((_garantie$infos = garantie.infos) === null || _garantie$infos === void 0 ? void 0 : _garantie$infos.some(function (el) {
          return ![null, undefined, ""].includes(el.ligneCredit);
        })),
        expression: "garantie.checked && garantie.infos?.some((el)=> ![null,undefined,''].includes(el.ligneCredit))"
      }],
      key: garantie.id,
      staticClass: "garantie-detail"
    }, [_c("div", {
      staticClass: "p-2 text-center fw-bold fst-italic",
      staticStyle: {
        border: "1px solid",
        "border-bottom": "0"
      }
    }, [_c("b", [_vm._v(_vm._s(garantie.name))])]), _vm._v(" "), garantie !== null && garantie !== void 0 && (_garantie$infos2 = garantie.infos) !== null && _garantie$infos2 !== void 0 && _garantie$infos2.some(function (el) {
      return ![null, undefined, ""].includes(el.ligneCredit);
    }) ? _c("div", {
      staticClass: "table-responsive"
    }, [_c("table", {
      staticClass: "table table-bordered",
      staticStyle: {
        border: "none"
      }
    }, [garantie.checked && garantie.id == "avi" ? [_c("tbody", [_c("tr", [_c("td", {
      staticClass: "sticky-col"
    }, [_vm._v("Ligne de crédit associée")]), _vm._v(" "), _vm._l(garantie === null || garantie === void 0 ? void 0 : garantie.infos, function (cp, index) {
      return _c("td", {
        key: "ligneCredit-" + index + "-" + garantie.id
      }, [_vm._v("\n                                                            " + _vm._s(_vm.formaTypeFacilite(cp.ligneCredit)) + "\n                                                        ")]);
    })], 2), _vm._v(" "), _c("tr", [_c("td", {
      staticClass: "sticky-col"
    }, [_vm._v("Montant de la domiciliation")]), _vm._v(" "), _vm._l(garantie === null || garantie === void 0 ? void 0 : garantie.infos, function (cp, index) {
      return _c("td", {
        key: "montant-" + index + "-" + garantie.id
      }, [_vm._v("\n                                                            " + _vm._s(_vm._f("formatNumber")(cp === null || cp === void 0 ? void 0 : cp.montant)) + "\n                                                        ")]);
    })], 2), _vm._v(" "), _c("tr", [_c("td", {
      staticClass: "sticky-col"
    }, [_vm._v("Pièce(s) jointe(s) (si nécessaire)")]), _vm._v(" "), _vm._l(garantie === null || garantie === void 0 ? void 0 : garantie.infos, function (cp, index) {
      return _c("td", {
        key: "ouverture-" + index + "-" + garantie.id
      }, [garantie.checked && (cp === null || cp === void 0 ? void 0 : cp.files) > 0 ? _c("div", {
        staticClass: "d-flex align-items-center"
      }, [_c("div", [(cp === null || cp === void 0 ? void 0 : cp.files) > 0 ? _c("span", {
        staticClass: "p-1 px-2 mx-2 text-nowrap",
        staticStyle: {
          "background-color": "rgb(44,62,80)",
          color: "white",
          "font-size": "13px",
          "border-radius": "5px",
          "margin-left": "0 !important",
          width: "150px"
        }
      }, [_vm._v(_vm._s((cp === null || cp === void 0 ? void 0 : cp.files) > 0 ? (cp === null || cp === void 0 ? void 0 : cp.files) + " fichier(s) uploadé(s)" : ""))]) : _vm._e()]), _vm._v(" "), garantie.checked ? _c("div", [_c("button", {
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
          name: "button",
          "data-toggle": "tooltip",
          title: "Cliquer ici pour uploader ou voir le(s) fichier(s)"
        },
        on: {
          click: function click($event) {
            return _vm.handleDoubleClickOrClick({
              index: index
            }, garantie.id);
          }
        }
      }, [_c("i", {
        staticClass: "icofont-attachment"
      })])]) : _vm._e()]) : _c("div", {
        staticClass: "text-center text-danger"
      }, [_vm._v("\n                                                                Aucun fichier(s)\n                                                                uploadé(s)\n                                                            ")])]);
    })], 2), _vm._v(" "), _c("tr", [_c("td", {
      staticClass: "sticky-col"
    }, [_vm._v("Garantie recueillie (Oui/Non)")]), _vm._v(" "), _vm._l(garantie === null || garantie === void 0 ? void 0 : garantie.infos, function (cp, index) {
      return _c("td", {
        key: "is_recueillie-" + index + "-" + garantie.id
      }, [(cp === null || cp === void 0 ? void 0 : cp.is_recueillie) == "Non" ? _c("span", {
        staticClass: "badge badge-danger"
      }, [_vm._v("\n                                                                A Recueillir\n                                                            ")]) : _c("span", {
        staticClass: "badge badge-success"
      }, [_vm._v("\n                                                                    " + _vm._s((cp === null || cp === void 0 ? void 0 : cp.is_recueillie) == "Oui" ? "Recueillie" : "") + "\n                                                            ")])]);
    })], 2), _vm._v(" "), _c("tr", [_c("td", {
      staticClass: "sticky-col"
    }, [_vm._v("Commentaire")]), _vm._v(" "), _vm._l(garantie === null || garantie === void 0 ? void 0 : garantie.infos, function (cp, index) {
      return _c("td", {
        key: "commentaire-" + index + "-" + garantie.id
      }, [_vm._v("\n                                                            " + _vm._s(cp === null || cp === void 0 ? void 0 : cp.commentaire) + "\n                                                        ")]);
    })], 2)])] : _vm._e(), _vm._v(" "), garantie.checked && garantie.id == "assurance" ? [_c("tbody", [_c("tr", [_c("td", {
      staticClass: "sticky-col"
    }, [_vm._v("Ligne de crédit associée")]), _vm._v(" "), _vm._l(garantie === null || garantie === void 0 ? void 0 : garantie.infos, function (cp, index) {
      return _c("td", {
        key: "ligneCredit-" + index + "-" + garantie.id
      }, [_vm._v("\n                                                            " + _vm._s(_vm.formaTypeFacilite(cp.ligneCredit)) + "\n                                                        ")]);
    })], 2), _vm._v(" "), _c("tr", [_c("td", {
      staticClass: "sticky-col"
    }, [_vm._v("Type d'assurance")]), _vm._v(" "), _vm._l(garantie === null || garantie === void 0 ? void 0 : garantie.infos, function (cp, index) {
      return _c("td", {
        key: "typeAssurance-" + index + "-" + garantie.id
      }, [_vm._v("\n                                                            " + _vm._s(cp.typeAssurance) + "\n                                                        ")]);
    })], 2), _vm._v(" "), _c("tr", [_c("td", {
      staticClass: "sticky-col"
    }, [_vm._v("Montant/Hauteur de l'assurance")]), _vm._v(" "), _vm._l(garantie === null || garantie === void 0 ? void 0 : garantie.infos, function (cp, index) {
      return _c("td", {
        key: "valeurAssuree-" + index + "-" + garantie.id
      }, [_vm._v("\n                                                            " + _vm._s(_vm._f("formatNumber")(cp === null || cp === void 0 ? void 0 : cp.valeurAssuree)) + "\n                                                        ")]);
    })], 2), _vm._v(" "), _c("tr", [_c("td", {
      staticClass: "sticky-col"
    }, [_vm._v("Pièce(s) jointe(s) (si nécessaire)")]), _vm._v(" "), _vm._l(garantie === null || garantie === void 0 ? void 0 : garantie.infos, function (cp, index) {
      return _c("td", {
        key: "ouverture-" + index + "-" + garantie.id
      }, [garantie.checked && (cp === null || cp === void 0 ? void 0 : cp.files) > 0 ? _c("div", {
        staticClass: "d-flex align-items-center"
      }, [_c("div", [(cp === null || cp === void 0 ? void 0 : cp.files) > 0 ? _c("span", {
        staticClass: "p-1 px-2 mx-2 text-nowrap",
        staticStyle: {
          "background-color": "rgb(44,62,80)",
          color: "white",
          "font-size": "13px",
          "border-radius": "5px",
          "margin-left": "0 !important",
          width: "150px"
        }
      }, [_vm._v(_vm._s((cp === null || cp === void 0 ? void 0 : cp.files) > 0 ? (cp === null || cp === void 0 ? void 0 : cp.files) + " fichier(s) uploadé(s)" : ""))]) : _vm._e()]), _vm._v(" "), garantie.checked ? _c("div", [_c("button", {
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
          name: "button",
          "data-toggle": "tooltip",
          title: "Cliquer ici pour uploader ou voir le(s) fichier(s)"
        },
        on: {
          click: function click($event) {
            return _vm.handleDoubleClickOrClick({
              index: index
            }, garantie.id);
          }
        }
      }, [_c("i", {
        staticClass: "icofont-attachment"
      })])]) : _vm._e()]) : _c("div", {
        staticClass: "text-center text-danger"
      }, [_vm._v("\n                                                                Aucun fichier(s)\n                                                                uploadé(s)\n                                                            ")])]);
    })], 2), _vm._v(" "), _c("tr", [_c("td", {
      staticClass: "sticky-col"
    }, [_vm._v("Garantie recueillie (Oui/Non)")]), _vm._v(" "), _vm._l(garantie === null || garantie === void 0 ? void 0 : garantie.infos, function (cp, index) {
      return _c("td", {
        key: "is_recueillie-" + index + "-" + garantie.id
      }, [(cp === null || cp === void 0 ? void 0 : cp.is_recueillie) == "Non" ? _c("span", {
        staticClass: "badge badge-danger"
      }, [_vm._v("\n                                                                A Recueillir\n                                                            ")]) : _c("span", {
        staticClass: "badge badge-success"
      }, [_vm._v("\n                                                                    " + _vm._s((cp === null || cp === void 0 ? void 0 : cp.is_recueillie) == "Oui" ? "Recueillie" : "") + "\n                                                            ")])]);
    })], 2), _vm._v(" "), _c("tr", [_c("td", {
      staticClass: "sticky-col"
    }, [_vm._v("Commentaire")]), _vm._v(" "), _vm._l(garantie === null || garantie === void 0 ? void 0 : garantie.infos, function (cp, index) {
      return _c("td", {
        key: "commentaire-" + index + "-" + garantie.id
      }, [_vm._v("\n                                                            " + _vm._s(cp === null || cp === void 0 ? void 0 : cp.commentaire) + "\n                                                        ")]);
    })], 2)])] : _vm._e(), _vm._v(" "), garantie.checked && garantie.id == "caution" ? [_c("tbody", [_c("tr", [_c("td", {
      staticClass: "sticky-col"
    }, [_vm._v("\n                                                            Ligne de crédit\n                                                            associée\n                                                        ")]), _vm._v(" "), _vm._l(garantie === null || garantie === void 0 ? void 0 : garantie.infos, function (cp, index) {
      return _c("td", {
        key: "ligneCredit-" + index + "-" + garantie.id
      }, [_vm._v("\n                                                            " + _vm._s(_vm.formaTypeFacilite(cp.ligneCredit)) + "\n                                                        ")]);
    })], 2), _vm._v(" "), _c("tr", [_c("td", {
      staticClass: "sticky-col"
    }, [_vm._v("\n                                                            Nom du\n                                                            garant/caution\n                                                        ")]), _vm._v(" "), _vm._l(garantie === null || garantie === void 0 ? void 0 : garantie.infos, function (cp, index) {
      return _c("td", {
        key: "firstname-" + index + "-" + garantie.id
      }, [_vm._v("\n                                                            " + _vm._s(cp.firstname) + "\n                                                        ")]);
    })], 2), _vm._v(" "), _c("tr", [_c("td", {
      staticClass: "sticky-col"
    }, [_vm._v("\n                                                            Prénom du\n                                                            garant/caution\n                                                        ")]), _vm._v(" "), _vm._l(garantie === null || garantie === void 0 ? void 0 : garantie.infos, function (cp, index) {
      return _c("td", {
        key: "lastname-" + index + "-" + garantie.id
      }, [_vm._v("\n                                                            " + _vm._s(cp.lastname) + "\n                                                        ")]);
    })], 2), _vm._v(" "), _c("tr", [_c("td", {
      staticClass: "sticky-col"
    }, [_vm._v("Date de naissance")]), _vm._v(" "), _vm._l(garantie === null || garantie === void 0 ? void 0 : garantie.infos, function (cp, index) {
      return _c("td", {
        key: "date_naissance-" + index + "-" + garantie.id
      }, [_vm._v("\n                                                            " + _vm._s(_vm._f("formatDate")(cp.date_naissance)) + "\n                                                        ")]);
    })], 2), _vm._v(" "), _c("tr", [_c("td", {
      staticClass: "sticky-col"
    }, [_vm._v("Lieu de naissance")]), _vm._v(" "), _vm._l(garantie === null || garantie === void 0 ? void 0 : garantie.infos, function (cp, index) {
      var _cp$lieu_naissance;
      return _c("td", {
        key: "lieu_naissance-" + index + "-" + garantie.id
      }, [_vm._v("\n                                                            " + _vm._s((_cp$lieu_naissance = cp.lieu_naissance) !== null && _cp$lieu_naissance !== void 0 ? _cp$lieu_naissance : "-") + "\n                                                        ")]);
    })], 2), _vm._v(" "), _c("tr", [_c("td", {
      staticClass: "sticky-col"
    }, [_vm._v("Nom du père")]), _vm._v(" "), _vm._l(garantie === null || garantie === void 0 ? void 0 : garantie.infos, function (cp, index) {
      var _cp$nom_du_pere;
      return _c("td", {
        key: "nom_du_pere-" + index + "-" + garantie.id
      }, [_vm._v("\n                                                            " + _vm._s((_cp$nom_du_pere = cp.nom_du_pere) !== null && _cp$nom_du_pere !== void 0 ? _cp$nom_du_pere : "-") + "\n                                                        ")]);
    })], 2), _vm._v(" "), _c("tr", [_c("td", {
      staticClass: "sticky-col"
    }, [_vm._v("Nom de la mère")]), _vm._v(" "), _vm._l(garantie === null || garantie === void 0 ? void 0 : garantie.infos, function (cp, index) {
      var _cp$nom_de_la_mere;
      return _c("td", {
        key: "nom_de_la_mere-" + index + "-" + garantie.id
      }, [_vm._v("\n                                                            " + _vm._s((_cp$nom_de_la_mere = cp.nom_de_la_mere) !== null && _cp$nom_de_la_mere !== void 0 ? _cp$nom_de_la_mere : "-") + "\n                                                        ")]);
    })], 2), _vm._v(" "), _c("tr", [_c("td", {
      staticClass: "sticky-col"
    }, [_vm._v("Adresse de la caution")]), _vm._v(" "), _vm._l(garantie === null || garantie === void 0 ? void 0 : garantie.infos, function (cp, index) {
      var _cp$adresse_de_la_cau;
      return _c("td", {
        key: "adresse_de_la_caution-" + index + "-" + garantie.id
      }, [_vm._v("\n                                                            " + _vm._s((_cp$adresse_de_la_cau = cp.adresse_de_la_caution) !== null && _cp$adresse_de_la_cau !== void 0 ? _cp$adresse_de_la_cau : "-") + "\n                                                        ")]);
    })], 2), _vm._v(" "), _c("tr", [_c("td", {
      staticClass: "sticky-col"
    }, [_vm._v("Sexe")]), _vm._v(" "), _vm._l(garantie === null || garantie === void 0 ? void 0 : garantie.infos, function (cp, index) {
      return _c("td", {
        key: "sexe-" + index + "-" + garantie.id
      }, [_vm._v("\n                                                            " + _vm._s(cp.sexe) + "\n                                                        ")]);
    })], 2), _vm._v(" "), _c("tr", [_c("td", {
      staticClass: "sticky-col"
    }, [_vm._v("Caution principale (Oui/Non)")]), _vm._v(" "), _vm._l(garantie === null || garantie === void 0 ? void 0 : garantie.infos, function (cp, index) {
      return _c("td", {
        key: "isPrincipal-" + index + "-" + garantie.id
      }, [_vm._v("\n                                                            " + _vm._s(cp.isPrincipal) + "\n                                                        ")]);
    })], 2), _vm._v(" "), _c("tr", [_c("td", {
      staticClass: "sticky-col"
    }, [_vm._v("\n                                                            Télephone\n                                                        ")]), _vm._v(" "), _vm._l(garantie === null || garantie === void 0 ? void 0 : garantie.infos, function (cp, index) {
      return _c("td", {
        key: "telephone-" + index + "-" + garantie.id
      }, [_vm._v("\n                                                            " + _vm._s(cp === null || cp === void 0 ? void 0 : cp.telephone) + "\n                                                        ")]);
    })], 2), _vm._v(" "), _c("tr", [_c("td", {
      staticClass: "sticky-col"
    }, [_vm._v("\n                                                            Valeur de\n                                                            cautionnement\n                                                        ")]), _vm._v(" "), _vm._l(garantie === null || garantie === void 0 ? void 0 : garantie.infos, function (cp, index) {
      return _c("td", {
        key: "valeur_caution-" + index + "-" + garantie.id
      }, [_vm._v("\n                                                            " + _vm._s(_vm._f("formatNumber")(cp === null || cp === void 0 ? void 0 : cp.valeur_caution)) + "\n                                                        ")]);
    })], 2), _vm._v(" "), _c("tr", [_c("td", {
      staticClass: "sticky-col"
    }, [_vm._v("\n                                                            Pièce d'identité\n                                                        ")]), _vm._v(" "), _vm._l(garantie === null || garantie === void 0 ? void 0 : garantie.infos, function (cp, index) {
      return _c("td", {
        key: "ouverture-" + index + "-" + garantie.id
      }, [garantie.checked && (cp === null || cp === void 0 ? void 0 : cp.files) > 0 ? _c("div", {
        staticClass: "d-flex align-items-center"
      }, [_c("div", [(cp === null || cp === void 0 ? void 0 : cp.files) > 0 ? _c("span", {
        staticClass: "p-1 px-2 mx-2 text-nowrap",
        staticStyle: {
          "background-color": "rgb(44,62,80)",
          color: "white",
          "font-size": "13px",
          "border-radius": "5px",
          "margin-left": "0 !important",
          width: "150px"
        }
      }, [_vm._v(_vm._s((cp === null || cp === void 0 ? void 0 : cp.files) > 0 ? (cp === null || cp === void 0 ? void 0 : cp.files) + " fichier(s) uploadé(s)" : ""))]) : _vm._e()]), _vm._v(" "), garantie.checked ? _c("div", [_c("button", {
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
          name: "button",
          "data-toggle": "tooltip",
          title: "Cliquer ici pour uploader ou voir le(s) fichier(s)"
        },
        on: {
          click: function click($event) {
            return _vm.handleDoubleClickOrClickCps({
              index: index
            }, garantie.id);
          }
        }
      }, [_c("i", {
        staticClass: "icofont-attachment"
      })])]) : _vm._e()]) : _c("div", {
        staticClass: "text-center text-danger"
      }, [_vm._v("\n                                                                Aucun fichier(s)\n                                                                uploadé(s)\n                                                            ")])]);
    })], 2), _vm._v(" "), _c("tr", [_c("td", {
      staticClass: "sticky-col"
    }, [_vm._v("\n                                                            N° Pièce d'indentité\n                                                        ")]), _vm._v(" "), _vm._l(garantie === null || garantie === void 0 ? void 0 : garantie.infos, function (cp, index) {
      return _c("td", {
        key: "piece-" + index + "-" + garantie.id
      }, [_vm._v("\n                                                            " + _vm._s(cp === null || cp === void 0 ? void 0 : cp.piece) + "\n                                                        ")]);
    })], 2), _vm._v(" "), _c("tr", [_c("td", {
      staticClass: "sticky-col"
    }, [_vm._v("Type de la pièce")]), _vm._v(" "), _vm._l(garantie === null || garantie === void 0 ? void 0 : garantie.infos, function (cp, index) {
      var _cp$type_piece;
      return _c("td", {
        key: "type_piece-" + index + "-" + garantie.id
      }, [_vm._v("\n                                                            " + _vm._s((_cp$type_piece = cp.type_piece) !== null && _cp$type_piece !== void 0 ? _cp$type_piece : "-") + "\n                                                        ")]);
    })], 2), _vm._v(" "), _c("tr", [_c("td", {
      staticClass: "sticky-col"
    }, [_vm._v("N° de la pièce")]), _vm._v(" "), _vm._l(garantie === null || garantie === void 0 ? void 0 : garantie.infos, function (cp, index) {
      var _cp$piece;
      return _c("td", {
        key: "piece-" + index + "-" + garantie.id
      }, [_vm._v("\n                                                            " + _vm._s((_cp$piece = cp.piece) !== null && _cp$piece !== void 0 ? _cp$piece : "-") + "\n                                                        ")]);
    })], 2), _vm._v(" "), _c("tr", [_c("td", {
      staticClass: "sticky-col"
    }, [_vm._v("Date de délivrance de la pièce")]), _vm._v(" "), _vm._l(garantie === null || garantie === void 0 ? void 0 : garantie.infos, function (cp, index) {
      return _c("td", {
        key: "date_delivrance_piece-" + index + "-" + garantie.id
      }, [_vm._v("\n                                                                " + _vm._s(cp !== null && cp !== void 0 && cp.date_delivrance_piece ? _vm.formatDate(cp.date_delivrance_piece) : "-") + "\n                                                            ")]);
    })], 2), _vm._v(" "), _c("tr", [_c("td", {
      staticClass: "sticky-col"
    }, [_vm._v("Lieu de délivrance de la pièce")]), _vm._v(" "), _vm._l(garantie === null || garantie === void 0 ? void 0 : garantie.infos, function (cp, index) {
      var _cp$lieu_delivration;
      return _c("td", {
        key: "lieu_delivration-" + index + "-" + garantie.id
      }, [_vm._v("\n                                                            " + _vm._s((_cp$lieu_delivration = cp.lieu_delivration) !== null && _cp$lieu_delivration !== void 0 ? _cp$lieu_delivration : "-") + "\n                                                        ")]);
    })], 2), _vm._v(" "), _c("tr", [_c("td", {
      staticClass: "sticky-col"
    }, [_vm._v("\n\n                                                            Garantie recueillie\n                                                            (Oui/Non)\n                                                        ")]), _vm._v(" "), _vm._l(garantie === null || garantie === void 0 ? void 0 : garantie.infos, function (cp, index) {
      return _c("td", {
        key: "is_recueillie-" + index + "-" + garantie.id
      }, [(cp === null || cp === void 0 ? void 0 : cp.is_recueillie) == "Non" ? _c("span", {
        staticClass: "badge badge-danger"
      }, [_vm._v("\n                                                                A Recueillir\n                                                            ")]) : _c("span", {
        staticClass: "badge badge-success"
      }, [_vm._v("\n                                                                " + _vm._s((cp === null || cp === void 0 ? void 0 : cp.is_recueillie) == "Oui" ? "Recueillie" : "") + "\n                                                            ")])]);
    })], 2), _vm._v(" "), _c("tr", [_c("td", {
      staticClass: "sticky-col"
    }, [_vm._v("\n                                                            Commentaire\n                                                        ")]), _vm._v(" "), _vm._l(garantie === null || garantie === void 0 ? void 0 : garantie.infos, function (cp, index) {
      return _c("td", {
        key: "commentaire-" + index + "-" + garantie.id
      }, [_c("span", {
        domProps: {
          innerHTML: _vm._s(cp === null || cp === void 0 ? void 0 : cp.commentaire)
        }
      })]);
    })], 2)])] : _vm._e(), _vm._v(" "), garantie.checked && garantie.id == "hypotheque" ? [_c("tbody", [_c("tr", [_c("td", {
      staticClass: "sticky-col"
    }, [_vm._v("Ligne de crédit associée")]), _vm._v(" "), _vm._l(garantie === null || garantie === void 0 ? void 0 : garantie.infos, function (cp, index) {
      return _c("td", {
        key: "ligneCredit-" + index + "-" + garantie.id
      }, [_vm._v("\n                                                            " + _vm._s(_vm.formaTypeFacilite(cp.ligneCredit)) + "\n                                                        ")]);
    })], 2), _vm._v(" "), _c("tr", [_c("td", {
      staticClass: "sticky-col"
    }, [_vm._v("Type d'hypothèque")]), _vm._v(" "), _vm._l(garantie === null || garantie === void 0 ? void 0 : garantie.infos, function (cp, index) {
      return _c("td", {
        key: "bien_hypotheque-" + index + "-" + garantie.id
      }, [_vm._v("\n                                                            " + _vm._s(cp.bien_hypotheque) + "\n                                                        ")]);
    })], 2), _vm._v(" "), _c("tr", [_c("td", {
      staticClass: "sticky-col"
    }, [_vm._v("Rang de l'hypothèque")]), _vm._v(" "), _vm._l(garantie === null || garantie === void 0 ? void 0 : garantie.infos, function (cp, index) {
      return _c("td", {
        key: "rang-" + index + "-" + garantie.id
      }, [_vm._v("\n                                                            " + _vm._s(cp.rang) + "\n                                                        ")]);
    })], 2), _vm._v(" "), _c("tr", [_c("td", {
      staticClass: "sticky-col"
    }, [_vm._v("Nom du propriétaire")]), _vm._v(" "), _vm._l(garantie === null || garantie === void 0 ? void 0 : garantie.infos, function (cp, index) {
      return _c("td", {
        key: "proprietaire-" + index + "-" + garantie.id
      }, [_vm._v("\n                                                            " + _vm._s(cp.proprietaire) + "\n                                                        ")]);
    })], 2), _vm._v(" "), _c("tr", [_c("td", {
      staticClass: "sticky-col"
    }, [_vm._v("N° du titre foncier(si nécessaire)")]), _vm._v(" "), _vm._l(garantie === null || garantie === void 0 ? void 0 : garantie.infos, function (cp, index) {
      return _c("td", {
        key: "numero_tel-" + index + "-" + garantie.id
      }, [_vm._v("\n                                                            " + _vm._s(cp.numero_tel) + "\n                                                        ")]);
    })], 2), _vm._v(" "), _c("tr", [_c("td", {
      staticClass: "sticky-col"
    }, [_vm._v("Date d'attribution")]), _vm._v(" "), _vm._l(garantie === null || garantie === void 0 ? void 0 : garantie.infos, function (cp, index) {
      return _c("td", {
        key: "annee_achat-" + index + "-" + garantie.id
      }, [_vm._v("\n                                                            " + _vm._s(_vm._f("formatDate")(cp.annee_achat)) + "\n                                                        ")]);
    })], 2), _vm._v(" "), _c("tr", [_c("td", {
      staticClass: "sticky-col"
    }, [_vm._v("Adresse de l'emplacement")]), _vm._v(" "), _vm._l(garantie === null || garantie === void 0 ? void 0 : garantie.infos, function (cp, index) {
      return _c("td", {
        key: "adresse_emplacement-" + index + "-" + garantie.id
      }, [_vm._v("\n                                                            " + _vm._s(cp.adresse_emplacement) + "\n                                                        ")]);
    })], 2), _vm._v(" "), _c("tr", [_c("td", {
      staticClass: "sticky-col"
    }, [_vm._v("Longitude")]), _vm._v(" "), _vm._l(garantie === null || garantie === void 0 ? void 0 : garantie.infos, function (cp, index) {
      return _c("td", {
        key: "longitude-" + index + "-" + garantie.id
      }, [_vm._v("\n                                                            " + _vm._s(cp.longitude) + "\n                                                        ")]);
    })], 2), _vm._v(" "), _c("tr", [_c("td", {
      staticClass: "sticky-col"
    }, [_vm._v("Latitude")]), _vm._v(" "), _vm._l(garantie === null || garantie === void 0 ? void 0 : garantie.infos, function (cp, index) {
      return _c("td", {
        key: "latitude-" + index + "-" + garantie.id
      }, [_vm._v("\n                                                            " + _vm._s(cp.latitude) + "\n                                                        ")]);
    })], 2), _vm._v(" "), _c("tr", [_c("td", {
      staticClass: "sticky-col"
    }, [_vm._v("Date d'évaluation")]), _vm._v(" "), _vm._l(garantie === null || garantie === void 0 ? void 0 : garantie.infos, function (cp, index) {
      return _c("td", {
        key: "date_evaluation-" + index + "-" + garantie.id
      }, [_vm._v("\n                                                            " + _vm._s(_vm._f("formatDate")(cp.date_evaluation)) + "\n                                                        ")]);
    })], 2), _vm._v(" "), _c("tr", [_c("td", {
      staticClass: "sticky-col"
    }, [_vm._v("Valeur marchande")]), _vm._v(" "), _vm._l(garantie === null || garantie === void 0 ? void 0 : garantie.infos, function (cp, index) {
      return _c("td", {
        key: "valeur_marchande-" + index + "-" + garantie.id
      }, [_vm._v("\n                                                            " + _vm._s(_vm._f("formatNumber")(cp.valeur_marchande)) + "\n                                                        ")]);
    })], 2), _vm._v(" "), _c("tr", [_c("td", {
      staticClass: "sticky-col"
    }, [_vm._v("Valeur considérée")]), _vm._v(" "), _vm._l(garantie === null || garantie === void 0 ? void 0 : garantie.infos, function (cp, index) {
      return _c("td", {
        key: "valeur_considere-" + index + "-" + garantie.id
      }, [_vm._v("\n                                                            " + _vm._s(_vm._f("formatNumber")(cp.valeur_considere)) + "\n                                                        ")]);
    })], 2), _vm._v(" "), _c("tr", [_c("td", {
      staticClass: "sticky-col"
    }, [_vm._v("Pièce(s) jointe(s) (si nécessaire)")]), _vm._v(" "), _vm._l(garantie === null || garantie === void 0 ? void 0 : garantie.infos, function (cp, index) {
      return _c("td", {
        key: "ouverture-" + index + "-" + garantie.id
      }, [garantie.checked && (cp === null || cp === void 0 ? void 0 : cp.files) > 0 ? _c("div", {
        staticClass: "d-flex align-items-center"
      }, [_c("div", [(cp === null || cp === void 0 ? void 0 : cp.files) > 0 ? _c("span", {
        staticClass: "p-1 px-2 mx-2 text-nowrap",
        staticStyle: {
          "background-color": "rgb(44,62,80)",
          color: "white",
          "font-size": "13px",
          "border-radius": "5px",
          "margin-left": "0 !important",
          width: "150px"
        }
      }, [_vm._v(_vm._s((cp === null || cp === void 0 ? void 0 : cp.files) > 0 ? (cp === null || cp === void 0 ? void 0 : cp.files) + " fichier(s) uploadé(s)" : ""))]) : _vm._e()]), _vm._v(" "), garantie.checked ? _c("div", [_c("button", {
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
          name: "button",
          "data-toggle": "tooltip",
          title: "Cliquer ici pour uploader ou voir le(s) fichier(s)"
        },
        on: {
          click: function click($event) {
            return _vm.handleDoubleClickOrClick({
              index: index
            }, garantie.id);
          }
        }
      }, [_c("i", {
        staticClass: "icofont-attachment"
      })])]) : _vm._e()]) : _c("div", {
        staticClass: "text-center text-danger"
      }, [_vm._v("\n                                                                Aucun fichier(s)\n                                                                uploadé(s)\n                                                            ")])]);
    })], 2), _vm._v(" "), _c("tr", [_c("td", {
      staticClass: "sticky-col"
    }, [_vm._v("Garantie recueillie (Oui/Non)")]), _vm._v(" "), _vm._l(garantie === null || garantie === void 0 ? void 0 : garantie.infos, function (cp, index) {
      return _c("td", {
        key: "is_recueillie-" + index + "-" + garantie.id
      }, [(cp === null || cp === void 0 ? void 0 : cp.is_recueillie) == "Non" ? _c("span", {
        staticClass: "badge badge-danger"
      }, [_vm._v("\n                                                                A Recueillir\n                                                            ")]) : _c("span", {
        staticClass: "badge badge-success"
      }, [_vm._v("\n                                                                    " + _vm._s((cp === null || cp === void 0 ? void 0 : cp.is_recueillie) == "Oui" ? "Recueillie" : "") + "\n                                                            ")])]);
    })], 2)])] : _vm._e(), _vm._v(" "), garantie.checked && garantie.id == "gage" ? [_c("tbody", [_c("tr", [_c("td", {
      staticClass: "sticky-col"
    }, [_vm._v("Ligne de crédit associée")]), _vm._v(" "), _vm._l(garantie === null || garantie === void 0 ? void 0 : garantie.infos, function (cp, index) {
      return _c("td", {
        key: "ligneCredit-" + index + "-" + garantie.id
      }, [_vm._v("\n                                                            " + _vm._s(_vm.formaTypeFacilite(cp.ligneCredit)) + "\n                                                        ")]);
    })], 2), _vm._v(" "), _c("tr", [_c("td", {
      staticClass: "sticky-col"
    }, [_vm._v("Type de bien à gagé")]), _vm._v(" "), _vm._l(garantie === null || garantie === void 0 ? void 0 : garantie.infos, function (cp, index) {
      return _c("td", {
        key: "bienGage-" + index + "-" + garantie.id
      }, [_vm._v("\n                                                            " + _vm._s(cp.bienGage) + "\n                                                        ")]);
    })], 2), _vm._v(" "), _c("tr", [_c("td", {
      staticClass: "sticky-col"
    }, [_vm._v("Montant/Valeur du gage")]), _vm._v(" "), _vm._l(garantie === null || garantie === void 0 ? void 0 : garantie.infos, function (cp, index) {
      return _c("td", {
        key: "montant-" + index + "-" + garantie.id
      }, [_vm._v("\n                                                            " + _vm._s(_vm._f("formatNumber")(cp === null || cp === void 0 ? void 0 : cp.montant)) + "\n                                                        ")]);
    })], 2), _vm._v(" "), _c("tr", [_c("td", {
      staticClass: "sticky-col"
    }, [_vm._v("Pièce(s) jointe(s) (si nécessaire)")]), _vm._v(" "), _vm._l(garantie === null || garantie === void 0 ? void 0 : garantie.infos, function (cp, index) {
      return _c("td", {
        key: "ouverture-" + index + "-" + garantie.id
      }, [garantie.checked && (cp === null || cp === void 0 ? void 0 : cp.files) > 0 ? _c("div", {
        staticClass: "d-flex align-items-center"
      }, [_c("div", [(cp === null || cp === void 0 ? void 0 : cp.files) > 0 ? _c("span", {
        staticClass: "p-1 px-2 mx-2 text-nowrap",
        staticStyle: {
          "background-color": "rgb(44,62,80)",
          color: "white",
          "font-size": "13px",
          "border-radius": "5px",
          "margin-left": "0 !important",
          width: "150px"
        }
      }, [_vm._v(_vm._s((cp === null || cp === void 0 ? void 0 : cp.files) > 0 ? (cp === null || cp === void 0 ? void 0 : cp.files) + " fichier(s) uploadé(s)" : ""))]) : _vm._e()]), _vm._v(" "), garantie.checked ? _c("div", [_c("button", {
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
          name: "button",
          "data-toggle": "tooltip",
          title: "Cliquer ici pour uploader ou voir le(s) fichier(s)"
        },
        on: {
          click: function click($event) {
            return _vm.handleDoubleClickOrClick({
              index: index
            }, garantie.id);
          }
        }
      }, [_c("i", {
        staticClass: "icofont-attachment"
      })])]) : _vm._e()]) : _c("div", {
        staticClass: "text-center text-danger"
      }, [_vm._v("\n                                                                Aucun fichier(s)\n                                                                uploadé(s)\n                                                            ")])]);
    })], 2), _vm._v(" "), _c("tr", [_c("td", {
      staticClass: "sticky-col"
    }, [_vm._v("Garantie recueillie (Oui/Non)")]), _vm._v(" "), _vm._l(garantie === null || garantie === void 0 ? void 0 : garantie.infos, function (cp, index) {
      return _c("td", {
        key: "is_recueillie-" + index + "-" + garantie.id
      }, [(cp === null || cp === void 0 ? void 0 : cp.is_recueillie) == "Non" ? _c("span", {
        staticClass: "badge badge-danger"
      }, [_vm._v("\n                                                                A Recueillir\n                                                            ")]) : _c("span", {
        staticClass: "badge badge-success"
      }, [_vm._v("\n                                                                    " + _vm._s((cp === null || cp === void 0 ? void 0 : cp.is_recueillie) == "Oui" ? "Recueillie" : "") + "\n                                                            ")])]);
    })], 2), _vm._v(" "), _c("tr", [_c("td", {
      staticClass: "sticky-col"
    }, [_vm._v("Commentaire")]), _vm._v(" "), _vm._l(garantie === null || garantie === void 0 ? void 0 : garantie.infos, function (cp, index) {
      return _c("td", {
        key: "commentaire-" + index + "-" + garantie.id
      }, [_vm._v("\n                                                            " + _vm._s(cp === null || cp === void 0 ? void 0 : cp.commentaire) + "\n                                                        ")]);
    })], 2)])] : _vm._e(), _vm._v(" "), garantie.checked && ["divers", "cash_collateral"].includes(garantie.id) || !_vm.defaultGarantieIds.includes(garantie.id) ? [_c("tbody", [_c("tr", [_c("td", {
      staticClass: "sticky-col"
    }, [_vm._v("Ligne de crédit associée")]), _vm._v(" "), _vm._l(garantie === null || garantie === void 0 ? void 0 : garantie.infos, function (cp, index) {
      return _c("td", {
        key: "ligneCredit-" + index + "-" + garantie.id
      }, [_vm._v("\n                                                            " + _vm._s(_vm.formaTypeFacilite(cp.ligneCredit)) + "\n                                                        ")]);
    })], 2), _vm._v(" "), _c("tr", [_c("td", {
      staticClass: "sticky-col"
    }, [_vm._v("Description")]), _vm._v(" "), _vm._l(garantie === null || garantie === void 0 ? void 0 : garantie.infos, function (cp, index) {
      return _c("td", {
        key: "description-" + index + "-" + garantie.id
      }, [_vm._v("\n                                                            " + _vm._s(cp.description) + "\n                                                        ")]);
    })], 2), _vm._v(" "), _c("tr", [_c("td", {
      staticClass: "sticky-col"
    }, [_vm._v("Montant")]), _vm._v(" "), _vm._l(garantie === null || garantie === void 0 ? void 0 : garantie.infos, function (cp, index) {
      return _c("td", {
        key: "montant-" + index + "-" + garantie.id
      }, [_vm._v("\n                                                            " + _vm._s(_vm._f("formatNumber")(cp === null || cp === void 0 ? void 0 : cp.montant)) + "\n                                                        ")]);
    })], 2), _vm._v(" "), _c("tr", [_c("td", {
      staticClass: "sticky-col"
    }, [_vm._v("%")]), _vm._v(" "), _vm._l(garantie === null || garantie === void 0 ? void 0 : garantie.infos, function (cp, index) {
      return _c("td", {
        key: "percent-" + index + "-" + garantie.id
      }, [_vm._v("\n                                                            " + _vm._s(cp === null || cp === void 0 ? void 0 : cp.percent) + "\n                                                        ")]);
    })], 2), _vm._v(" "), _c("tr", [_c("td", {
      staticClass: "sticky-col"
    }, [_vm._v("Pièce(s) jointe(s) (si nécessaire)")]), _vm._v(" "), _vm._l(garantie === null || garantie === void 0 ? void 0 : garantie.infos, function (cp, index) {
      return _c("td", {
        key: "ouverture-" + index + "-" + garantie.id
      }, [garantie.checked && (cp === null || cp === void 0 ? void 0 : cp.files) > 0 ? _c("div", {
        staticClass: "d-flex align-items-center"
      }, [_c("div", [(cp === null || cp === void 0 ? void 0 : cp.files) > 0 ? _c("span", {
        staticClass: "p-1 px-2 mx-2 text-nowrap",
        staticStyle: {
          "background-color": "rgb(44,62,80)",
          color: "white",
          "font-size": "13px",
          "border-radius": "5px",
          "margin-left": "0 !important",
          width: "150px"
        }
      }, [_vm._v(_vm._s((cp === null || cp === void 0 ? void 0 : cp.files) > 0 ? (cp === null || cp === void 0 ? void 0 : cp.files) + " fichier(s) uploadé(s)" : ""))]) : _vm._e()]), _vm._v(" "), garantie.checked ? _c("div", [_c("button", {
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
          name: "button",
          "data-toggle": "tooltip",
          title: "Cliquer ici pour uploader ou voir le(s) fichier(s)"
        },
        on: {
          click: function click($event) {
            return _vm.handleDoubleClickOrClick({
              index: index
            }, garantie.id);
          }
        }
      }, [_c("i", {
        staticClass: "icofont-attachment"
      })])]) : _vm._e()]) : _c("div", {
        staticClass: "text-center text-danger"
      }, [_vm._v("\n                                                                Aucun fichier(s)\n                                                                uploadé(s)\n                                                            ")])]);
    })], 2), _vm._v(" "), _c("tr", [_c("td", {
      staticClass: "sticky-col"
    }, [_vm._v("Garantie recueillie (Oui/Non)")]), _vm._v(" "), _vm._l(garantie === null || garantie === void 0 ? void 0 : garantie.infos, function (cp, index) {
      return _c("td", {
        key: "is_recueillie-" + index + "-" + garantie.id
      }, [(cp === null || cp === void 0 ? void 0 : cp.is_recueillie) == "Non" ? _c("span", {
        staticClass: "badge badge-danger"
      }, [_vm._v("\n                                                                A Recueillir\n                                                            ")]) : _c("span", {
        staticClass: "badge badge-success"
      }, [_vm._v("\n                                                                    " + _vm._s((cp === null || cp === void 0 ? void 0 : cp.is_recueillie) == "Oui" ? "Recueillie" : "") + "\n                                                            ")])]);
    })], 2), _vm._v(" "), _c("tr", [_c("td", {
      staticClass: "sticky-col"
    }, [_vm._v("Commentaire")]), _vm._v(" "), _vm._l(garantie === null || garantie === void 0 ? void 0 : garantie.infos, function (cp, index) {
      return _c("td", {
        key: "commentaire-" + index + "-" + garantie.id
      }, [_vm._v("\n                                                            " + _vm._s(cp === null || cp === void 0 ? void 0 : cp.commentaire) + "\n                                                        ")]);
    })], 2)])] : _vm._e()], 2)]) : _vm._e()]);
  }), 0)])]) : _vm._e()])])]) : _vm._e();
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
  }, [_vm._v("\n        Sûretés et garanties\n        ")])]);
}, function () {
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
  }, [_vm._v("Aucune(s) garantie(s)/sûreté(s) saisie(s)")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/contre_analyse_filiale/CA2.vue?vue&type=style&index=0&id=546ae8fa&lang=css&scoped=true":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/contre_analyse_filiale/CA2.vue?vue&type=style&index=0&id=546ae8fa&lang=css&scoped=true ***!
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.bg-grey[data-v-546ae8fa] {\r\n    background-color: #f4f3f3;\r\n    font-weight: 600;\r\n    width: 32%;\n}\n.memo[data-v-546ae8fa] {\r\n    margin-top: 10px;\r\n    padding: 10px;\r\n    border: 2px solid #fff;\r\n    font-weight: 550;\r\n    font-size: 16px;\r\n    text-align: left;\r\n    text-transform: uppercase;\r\n    background-color: #34495e;\r\n    color: #fff;\n}\r\n\r\n/* td {\r\n    width: 250px;\r\n} */\r\n\r\n/* input {\r\n    width: 250px;\r\n}\r\n.th{\r\n    padding: 4px;\r\n    padding-bottom: 0px;\r\n}\r\n\r\nselect {\r\n    width: 250px;\r\n} */\r\n\r\n/* .head-memorandum-title {\r\n    margin-top: 15px;\r\n    padding: 16px;\r\n    color: #fff;\r\n    font-weight: bold;\r\n    background-color: #34495e;\r\n    border: 2px solid #575759;\r\n    box-shadow: 1px 3px 4px #ddd;\r\n    font-size: 16px;\r\n    text-align: center;\r\n    text-transform: uppercase;\r\n    border-radius: 10px;\r\n    margin-bottom: 15px;\r\n} */\r\n\r\n/* .table th:nth-child(1),\r\n.table td:nth-child(1) {\r\n    position: sticky;\r\n    right: -0.9px;\r\n    background-color: #f4f3f3;\r\n}\r\n\r\n.table th:first-child {\r\n    position: sticky;\r\n    left: 0px;\r\n    background-color: #f4f3f3;\r\n}\r\n\r\n.table td:first-child {\r\n    position: sticky;\r\n    left: 0px;\r\n    background-color: #ffffff;\r\n} */\n.lgcrd[data-v-546ae8fa] {\r\n    font-size: 20px;\r\n    font-weight: bold;\r\n    color: #dc0030;\n}\r\n/* \r\n.head-memorandum-title {\r\n    margin-top: 15px;\r\n    padding: 16px;\r\n    color: #fff;\r\n    font-weight: bold;\r\n    background-color: #34495e;\r\n    border: 2px solid #575759;\r\n    box-shadow: 1px 3px 4px #ddd;\r\n    font-size: 16px;\r\n    text-align: center;\r\n    text-transform: uppercase;\r\n    border-radius: 10px;\r\n    margin-bottom: 15px;\r\n} */\n.head-memorandum-title[data-v-546ae8fa] {\r\n\r\nfont-weight: bold;\r\ntext-transform: uppercase;\r\ntext-align: center;border: 1px solid;\r\npadding: 4px;\r\nmargin-top: 30px;\n}\n.badge-success[data-v-546ae8fa] {\r\n    background-color: rgb(20, 165, 20);\n}\n.badge-danger[data-v-546ae8fa] {\r\n    background-color: rgb(212, 14, 14);\n}\n.vertical-middle[data-v-546ae8fa] {\r\n    vertical-align: middle;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/contre_analyse_filiale/CA2.vue?vue&type=style&index=0&id=546ae8fa&lang=css&scoped=true":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/contre_analyse_filiale/CA2.vue?vue&type=style&index=0&id=546ae8fa&lang=css&scoped=true ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CA2_vue_vue_type_style_index_0_id_546ae8fa_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CA2.vue?vue&type=style&index=0&id=546ae8fa&lang=css&scoped=true */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/contre_analyse_filiale/CA2.vue?vue&type=style&index=0&id=546ae8fa&lang=css&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CA2_vue_vue_type_style_index_0_id_546ae8fa_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CA2_vue_vue_type_style_index_0_id_546ae8fa_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/offview/bank/afg/contre_analyse_filiale/CA2.vue":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/offview/bank/afg/contre_analyse_filiale/CA2.vue ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CA2_vue_vue_type_template_id_546ae8fa_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CA2.vue?vue&type=template&id=546ae8fa&scoped=true */ "./resources/js/components/offview/bank/afg/contre_analyse_filiale/CA2.vue?vue&type=template&id=546ae8fa&scoped=true");
/* harmony import */ var _CA2_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CA2.vue?vue&type=script&lang=js */ "./resources/js/components/offview/bank/afg/contre_analyse_filiale/CA2.vue?vue&type=script&lang=js");
/* harmony import */ var _CA2_vue_vue_type_style_index_0_id_546ae8fa_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CA2.vue?vue&type=style&index=0&id=546ae8fa&lang=css&scoped=true */ "./resources/js/components/offview/bank/afg/contre_analyse_filiale/CA2.vue?vue&type=style&index=0&id=546ae8fa&lang=css&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _CA2_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _CA2_vue_vue_type_template_id_546ae8fa_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _CA2_vue_vue_type_template_id_546ae8fa_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "546ae8fa",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/offview/bank/afg/contre_analyse_filiale/CA2.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/offview/bank/afg/contre_analyse_filiale/CA2.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/components/offview/bank/afg/contre_analyse_filiale/CA2.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CA2_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CA2.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/contre_analyse_filiale/CA2.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CA2_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/offview/bank/afg/contre_analyse_filiale/CA2.vue?vue&type=style&index=0&id=546ae8fa&lang=css&scoped=true":
/*!*****************************************************************************************************************************************!*\
  !*** ./resources/js/components/offview/bank/afg/contre_analyse_filiale/CA2.vue?vue&type=style&index=0&id=546ae8fa&lang=css&scoped=true ***!
  \*****************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CA2_vue_vue_type_style_index_0_id_546ae8fa_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CA2.vue?vue&type=style&index=0&id=546ae8fa&lang=css&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/contre_analyse_filiale/CA2.vue?vue&type=style&index=0&id=546ae8fa&lang=css&scoped=true");


/***/ }),

/***/ "./resources/js/components/offview/bank/afg/contre_analyse_filiale/CA2.vue?vue&type=template&id=546ae8fa&scoped=true":
/*!***************************************************************************************************************************!*\
  !*** ./resources/js/components/offview/bank/afg/contre_analyse_filiale/CA2.vue?vue&type=template&id=546ae8fa&scoped=true ***!
  \***************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CA2_vue_vue_type_template_id_546ae8fa_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CA2_vue_vue_type_template_id_546ae8fa_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CA2_vue_vue_type_template_id_546ae8fa_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CA2.vue?vue&type=template&id=546ae8fa&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/contre_analyse_filiale/CA2.vue?vue&type=template&id=546ae8fa&scoped=true");


/***/ })

}]);