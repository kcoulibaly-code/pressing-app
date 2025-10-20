"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_offview_bank_nsia_memo_scene_cover_PRES3_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/memo/scene_cover/PRES3.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/memo/scene_cover/PRES3.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var CONSO_FP_MAPPING = ['cred_pub_tb_28004', 'cred_pub_tb_19503', 'cred_pub_tb_19003'];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    dossier_credit: Object
  },
  mounted: function mounted() {
    var _this$dossier_credit, _this$dossier_credit2, _this$dossier_credit4, _this$dossier_credit6;
    this.respect_des_criteres_d_appetence = (_this$dossier_credit = this.dossier_credit) === null || _this$dossier_credit === void 0 || (_this$dossier_credit = _this$dossier_credit.cred_pub_tb_19) === null || _this$dossier_credit === void 0 ? void 0 : _this$dossier_credit.respect_des_criteres_d_appetence;
    if (((_this$dossier_credit2 = this.dossier_credit) === null || _this$dossier_credit2 === void 0 || (_this$dossier_credit2 = _this$dossier_credit2.cred_pub_tb_19004) === null || _this$dossier_credit2 === void 0 ? void 0 : _this$dossier_credit2.respect_des_criteres_d_appetence) != undefined) {
      var _this$dossier_credit3;
      this.respect_des_criteres_d_appetence = (_this$dossier_credit3 = this.dossier_credit) === null || _this$dossier_credit3 === void 0 || (_this$dossier_credit3 = _this$dossier_credit3.cred_pub_tb_19004) === null || _this$dossier_credit3 === void 0 ? void 0 : _this$dossier_credit3.respect_des_criteres_d_appetence;
    }
    if (((_this$dossier_credit4 = this.dossier_credit) === null || _this$dossier_credit4 === void 0 || (_this$dossier_credit4 = _this$dossier_credit4.cred_pub_tb_19504) === null || _this$dossier_credit4 === void 0 ? void 0 : _this$dossier_credit4.respect_des_criteres_d_appetence) != undefined) {
      var _this$dossier_credit5;
      this.respect_des_criteres_d_appetence = (_this$dossier_credit5 = this.dossier_credit) === null || _this$dossier_credit5 === void 0 || (_this$dossier_credit5 = _this$dossier_credit5.cred_pub_tb_19504) === null || _this$dossier_credit5 === void 0 ? void 0 : _this$dossier_credit5.respect_des_criteres_d_appetence;
    }
    if (((_this$dossier_credit6 = this.dossier_credit) === null || _this$dossier_credit6 === void 0 || (_this$dossier_credit6 = _this$dossier_credit6.cred_pub_tb_40011) === null || _this$dossier_credit6 === void 0 ? void 0 : _this$dossier_credit6.respect_des_criteres_d_appetence) != undefined) {
      var _this$dossier_credit7;
      this.respect_des_criteres_d_appetence = (_this$dossier_credit7 = this.dossier_credit) === null || _this$dossier_credit7 === void 0 || (_this$dossier_credit7 = _this$dossier_credit7.cred_pub_tb_40011) === null || _this$dossier_credit7 === void 0 ? void 0 : _this$dossier_credit7.respect_des_criteres_d_appetence;
    }
    for (var _i = 0, _CONSO_FP_MAPPING = CONSO_FP_MAPPING; _i < _CONSO_FP_MAPPING.length; _i++) {
      var _this$dossier_credit8;
      var key = _CONSO_FP_MAPPING[_i];
      if (((_this$dossier_credit8 = this.dossier_credit) === null || _this$dossier_credit8 === void 0 ? void 0 : _this$dossier_credit8[key]) != undefined) {
        var _this$dossier_credit9;
        this.dataForFp = (_this$dossier_credit9 = this.dossier_credit) === null || _this$dossier_credit9 === void 0 ? void 0 : _this$dossier_credit9[key];
        return;
      }
    }
  },
  data: function data() {
    return {
      respect_des_criteres_d_appetence: [],
      dataForFp: undefined
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
    convertNumber: function convertNumber(valeur) {
      return Number(String(valeur).replace(/\s+/g, ""));
    },
    arrondiA2Chiffre: function arrondiA2Chiffre(x) {
      var value = Math.round(x * 100) / 100;
      return value;
    },
    handleDoubleClickOrClick: function handleDoubleClickOrClick(index) {
      var _this = this;
      EventBus.$emit("open-extra-file-explorer");
      setTimeout(function () {
        var _this$dataForFp;
        EventBus.$emit("data-extra-file-explorer", {
          name: (_this$dataForFp = _this.dataForFp) === null || _this$dataForFp === void 0 || (_this$dataForFp = _this$dataForFp.conso_fond_propre[index]) === null || _this$dataForFp === void 0 ? void 0 : _this$dataForFp.name,
          view: true
        });
      }, 500);
    },
    getFiles: function getFiles() {
      var _this$dataForFp2,
        _this$dataForFp3,
        _this2 = this;
      if ((_this$dataForFp2 = this.dataForFp) !== null && _this$dataForFp2 !== void 0 && _this$dataForFp2.conso_fond_propre && ((_this$dataForFp3 = this.dataForFp) === null || _this$dataForFp3 === void 0 ? void 0 : _this$dataForFp3.conso_fond_propre.length) > 0) {
        this.isLoadingFile = true;
        this.$axios.post(this.connectsHost + 'api/get-files', {
          file_identity: this.dossier_credit.cred_pub_key
        }).then(function (res) {
          var _res$data$data, _res$data$data2;
          res.data = JSON.parse(res.data);
          if (((_res$data$data = res.data.data) === null || _res$data$data === void 0 ? void 0 : _res$data$data.length) > 0 || ((_res$data$data2 = res.data.data) === null || _res$data$data2 === void 0 ? void 0 : _res$data$data2.length) != null) {
            var _this2$dataForFp;
            _this2.files = res.data.data;
            (_this2$dataForFp = _this2.dataForFp) === null || _this2$dataForFp === void 0 || _this2$dataForFp.conso_fond_propre.forEach(function (element, index) {
              var count = 0;
              _this2.files.forEach(function (file) {
                var _element$template;
                if ((file === null || file === void 0 ? void 0 : file.extra_file_template_id) != null && (element === null || element === void 0 || (_element$template = element.template) === null || _element$template === void 0 ? void 0 : _element$template.id) == (file === null || file === void 0 ? void 0 : file.extra_file_template_id)) {
                  count++;
                }
              });
              _this2.dataForFp.conso_fond_propre[index]['files'] = count;
            });
          }
          _this2.isLoadingFile = false;
        })["catch"](function (err) {
          _this2.isLoadingFile = false;
          console.error(err);
        });
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/memo/scene_cover/PRES3.vue?vue&type=template&id=5838c328&scoped=true":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/memo/scene_cover/PRES3.vue?vue&type=template&id=5838c328&scoped=true ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm$dataForFp, _vm$dataForFp2, _vm$dataForFp3, _vm$dataForFp4, _vm$dataForFp5, _vm$dataForFp6, _vm$dataForFp7, _vm$dataForFp8, _vm$dataForFp9, _vm$dataForFp0, _vm$dataForFp1, _vm$dataForFp10, _vm$dataForFp11;
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("div", {
    staticClass: "head-memorandum-title px-3 mb-3",
    staticStyle: {
      "text-align": "center"
    }
  }, [_vm._v("\n        RESPECT DES CRITERES D’APPETENCE AU RISQUE (1)\n    ")]), _vm._v(" "), _c("div", {
    staticClass: "mb-3 w-100"
  }, [_c("div", {
    staticClass: "p-0"
  }, [_c("div", {
    staticClass: "table-responsive m-0"
  }, [_c("table", {
    staticClass: "table table-bordered m-0"
  }, [_vm._m(0), _vm._v(" "), _c("tbody", _vm._l(_vm.respect_des_criteres_d_appetence, function (cl, index) {
    return _c("tr", {
      key: index
    }, [_c("td", {
      staticClass: "align-middle"
    }, [_c("div", {
      staticStyle: {
        width: "180px"
      }
    }, [_c("b", [_vm._v(_vm._s(cl.label))]), _vm._v(" "), cl.indicateur_secteur != "" ? _c("b", [_c("br"), _vm._v(_vm._s(cl.indicateur_secteur))]) : _vm._e()])]), _vm._v(" "), _c("td", {
      staticClass: "align-middle"
    }, [index == 0 ? _c("div", {
      staticClass: "text-center"
    }, [_vm._v("\n                                    " + _vm._s(cl.situation_du_client) + "\n                                ")]) : _vm._e(), _vm._v(" "), index > 1 ? _c("div", {
      staticClass: "text-right"
    }, [_c("span", {
      "class": cl.situation_du_client_error ? "text-red" : ""
    }, [_vm._v(_vm._s(cl.situation_du_client_pour) + " %")])]) : _vm._e(), _vm._v(" "), index == 1 ? _c("div", {
      staticClass: "text-center"
    }, [_vm._v("\n                                    " + _vm._s(cl.situation_du_client_pour) + " % (" + _vm._s(cl.situation_du_client) + ")\n                                ")]) : _vm._e()]), _vm._v(" "), _c("td", {
      staticClass: "align-middle"
    }, [index == 0 ? _c("div") : cl.seuil_d_alerte_dg_unit == "" ? _c("div", {
      staticClass: "text-center"
    }, [_vm._v("\n                                    " + _vm._s(cl.seuil_d_alerte_dg) + " Dossier(s)\n                                ")]) : _c("div", {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: index != 0,
        expression: "index != 0"
      }],
      staticClass: "text-right"
    }, [_vm._v("\n                                    " + _vm._s(cl.seuil_d_alerte_dg) + " %\n                                ")])]), _vm._v(" "), _c("td", {
      staticClass: "align-middle"
    }, [index == 0 ? _c("div") : cl.seuil_d_alerte_conseil_admin_unit == "" ? _c("div", {
      staticClass: "text-center"
    }, [_vm._v("\n                                    " + _vm._s(cl.seuil_d_alerte_conseil_admin) + " Dossier(s)\n                                ")]) : _c("div", {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: index != 0,
        expression: "index != 0"
      }],
      staticClass: "text-right"
    }, [_vm._v("\n                                    " + _vm._s(cl.seuil_d_alerte_conseil_admin) + " %\n                                ")])]), _vm._v(" "), _c("td", {
      staticClass: "align-middle"
    }, [_c("div", {
      staticStyle: {
        width: "195px"
      }
    }, [_vm._v(_vm._s(cl.commentaire))])])]);
  }), 0)])]), _vm._v(" "), _vm._m(1)])]), _vm._v(" "), _c("div", {
    staticClass: "card rounded-0 mb-3 w-100"
  }, [_c("div", {
    staticClass: "card-header"
  }, [_vm._v("Consommation en fonds propres")]), _vm._v(" "), _c("div", {
    staticClass: "card-body p-2"
  }, [_c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: ((_vm$dataForFp = _vm.dataForFp) === null || _vm$dataForFp === void 0 ? void 0 : _vm$dataForFp.mode_calcul) == "A",
      expression: "dataForFp?.mode_calcul == 'A'"
    }],
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-bordered"
  }, [_vm._m(2), _vm._v(" "), _c("tbody", [_vm._m(3), _vm._v(" "), _vm._l((_vm$dataForFp2 = _vm.dataForFp) === null || _vm$dataForFp2 === void 0 ? void 0 : _vm$dataForFp2.conso_fps, function (cp, index) {
    return _c("tr", {
      key: index
    }, [_c("td", [_vm._v("\n                            " + _vm._s(cp.libelle) + "\n                        ")]), _vm._v(" "), _c("td", [_vm._v("\n                            " + _vm._s(cp.bilan) + "\n                        ")]), _vm._v(" "), _c("td", [_vm._v("\n                            " + _vm._s(cp.hor_bilan) + "\n                            \n                        ")]), _vm._v(" "), _c("td", [_vm._v("\n                            " + _vm._s(cp.fcec) + "\n                            \n                        ")]), _vm._v(" "), _c("td", [_vm._v("\n                            " + _vm._s(cp.hb_apres_fcec) + "\n                           \n                        ")]), _vm._v(" "), _c("td", [_vm._v(_vm._s(cp.total_exposition) + "\n                           \n                        ")]), _vm._v(" "), _c("td", [_vm._v("\n                            " + _vm._s(cp.tarc) + "\n                           \n                        ")]), _vm._v(" "), _c("td", [_vm._v("\n                            " + _vm._s(cp.pond) + "\n                            \n                        ")]), _vm._v(" "), _c("td", [_vm._v("\n                            " + _vm._s(cp.apr) + "\n                        ")])]);
  }), _vm._v(" "), _c("tr", [_c("td", [_vm._v("\n                            TOTAL\n                        ")]), _vm._v(" "), _c("td", [_vm._v("\n                            " + _vm._s((_vm$dataForFp3 = _vm.dataForFp) === null || _vm$dataForFp3 === void 0 ? void 0 : _vm$dataForFp3.total_bilan_cmt_cct) + "\n                           \n                        ")]), _vm._v(" "), _c("td", [_vm._v("\n                            " + _vm._s((_vm$dataForFp4 = _vm.dataForFp) === null || _vm$dataForFp4 === void 0 ? void 0 : _vm$dataForFp4.total_hor_bilan_cmt_cct) + "\n                           \n                        ")]), _vm._v(" "), _c("td", [_vm._v("\n                            " + _vm._s((_vm$dataForFp5 = _vm.dataForFp) === null || _vm$dataForFp5 === void 0 ? void 0 : _vm$dataForFp5.total_fcec_cmt_cct) + "\n                           \n                        ")]), _vm._v(" "), _c("td", [_vm._v("\n                            " + _vm._s((_vm$dataForFp6 = _vm.dataForFp) === null || _vm$dataForFp6 === void 0 ? void 0 : _vm$dataForFp6.total_hb_apres_fcec_cmt_cct) + "\n                            \n                        ")]), _vm._v(" "), _c("td", [_vm._v("\n                            " + _vm._s((_vm$dataForFp7 = _vm.dataForFp) === null || _vm$dataForFp7 === void 0 ? void 0 : _vm$dataForFp7.total_total_exposition_cmt_cct) + "\n                            \n                        ")]), _vm._v(" "), _c("td", [_vm._v("\n                            " + _vm._s((_vm$dataForFp8 = _vm.dataForFp) === null || _vm$dataForFp8 === void 0 ? void 0 : _vm$dataForFp8.total_tarc_cmt_cct) + "\n                            \n                        ")]), _vm._v(" "), _c("td", [_vm._v("\n                            " + _vm._s((_vm$dataForFp9 = _vm.dataForFp) === null || _vm$dataForFp9 === void 0 ? void 0 : _vm$dataForFp9.total_pond_cmt_cct) + "\n                            \n                        ")]), _vm._v(" "), _c("td", [_vm._v("\n                            " + _vm._s((_vm$dataForFp0 = _vm.dataForFp) === null || _vm$dataForFp0 === void 0 ? void 0 : _vm$dataForFp0.total_apr_cmt_cct) + "\n                            \n                        ")])])], 2)]), _vm._v(" "), _c("br")]), _vm._v(" "), _c("br"), _vm._v(" "), _c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: ((_vm$dataForFp1 = _vm.dataForFp) === null || _vm$dataForFp1 === void 0 ? void 0 : _vm$dataForFp1.mode_calcul) == "M",
      expression: "dataForFp?.mode_calcul == 'M'"
    }],
    staticClass: "table-resposive"
  }, [_c("table", {
    staticClass: "table table-bordered mb-1"
  }, [_c("tbody", _vm._l((_vm$dataForFp10 = _vm.dataForFp) === null || _vm$dataForFp10 === void 0 ? void 0 : _vm$dataForFp10.conso_fond_propre, function (conso_fp, index) {
    return _c("tr", {
      key: index
    }, [_c("td", [_c("label", [_c("b", [_vm._v(_vm._s(conso_fp.name))]), _c("span", {
      staticClass: "text-danger"
    }, [_vm._v("*")])])]), _vm._v(" "), _c("td", [_vm._v("\n                                " + _vm._s(_vm._f("formatNumber")(conso_fp.montant)) + "\n                            ")]), _vm._v(" "), _c("td", [Number(String(conso_fp.montant).replace(/\s+/g, "")) > 0 ? _c("div", {
      staticClass: "d-flex align-items-center"
    }, [_c("div", [conso_fp.files > 0 ? _c("span", {
      staticClass: "p-1 px-2 mx-2 text-nowrap",
      staticStyle: {
        "background-color": "rgb(44, 62, 80)",
        color: "white",
        "font-size": "13px",
        "border-radius": "5px",
        "margin-left": "0!important"
      }
    }, [_vm._v(_vm._s(conso_fp.files > 0 ? conso_fp.files + " fichier(s) uploadé(s)" : ""))]) : _vm._e()]), _vm._v(" "), conso_fp.name.trim() != "" ? _c("div", [_c("button", {
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
          return _vm.handleDoubleClickOrClick(index);
        }
      }
    }, [_c("i", {
      staticClass: "icofont-attachment"
    })])]) : _vm._e()]) : _c("div", {
      staticClass: "text-center text-danger"
    }, [_vm._v("\n                                    Aucun fichier(s) uploadé(s)\n                                ")])])]);
  }), 0)])]), _vm._v(" "), _c("table", {
    staticClass: "table table-bordered mb-4"
  }, [_vm._m(4), _vm._v(" "), _c("tbody", [_c("tr", [_c("td", [_c("span", {
    domProps: {
      innerHTML: _vm._s((_vm$dataForFp11 = _vm.dataForFp) === null || _vm$dataForFp11 === void 0 ? void 0 : _vm$dataForFp11.comment_conso_fond_propre)
    }
  })])])])])])])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", {}, [_c("tr", [_c("th", {
    staticClass: "bg-grey text-nowrap",
    staticStyle: {
      "text-align": "center",
      "vertical-align": "middle"
    },
    attrs: {
      scope: "row"
    }
  }, [_vm._v("\n                                Indicateurs-clés de risques\n                            ")]), _vm._v(" "), _c("th", {
    staticClass: "bg-grey text-nowrap",
    staticStyle: {
      "text-align": "center"
    },
    attrs: {
      scope: "row"
    }
  }, [_vm._v("\n                                Situation de "), _c("br"), _vm._v(" notre client\n                            ")]), _vm._v(" "), _c("th", {
    staticClass: "bg-grey text-nowrap",
    staticStyle: {
      "text-align": "center",
      "vertical-align": "middle"
    },
    attrs: {
      scope: "row"
    }
  }, [_vm._v("\n                                Seuil "), _c("br"), _vm._v(" d’alerte DG\n                            ")]), _vm._v(" "), _c("th", {
    staticClass: "bg-grey text-nowrap",
    staticStyle: {
      "text-align": "center",
      "vertical-align": "middle"
    },
    attrs: {
      scope: "row"
    }
  }, [_vm._v("\n                                Seuil d’alerte "), _c("br"), _vm._v(" Conseil d’adminsitration\n                            ")]), _vm._v(" "), _c("th", {
    staticClass: "bg-grey text-nowrap",
    staticStyle: {
      "text-align": "center",
      "vertical-align": "middle"
    },
    attrs: {
      scope: "row"
    }
  }, [_vm._v("\n                                Commentaire\n                            ")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("ul", {
    staticClass: "p-2"
  }, [_c("li", [_vm._v("(1) Non bloquant au stade individuel")]), _vm._v(" "), _c("li", [_vm._v("(2) Se référer au tableau des seuils d’appétence au risque joint en annexe")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("td", {
    staticClass: "text-center text-uppercase",
    attrs: {
      rowspan: "2"
    }
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_c("b", [_vm._v("Nature de la facilité")])])]), _vm._v(" "), _c("th", {
    staticClass: "text-center text-uppercase"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_c("b", [_vm._v("Bilan")])])]), _vm._v(" "), _c("th", {
    staticClass: "text-center text-uppercase"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_c("b", [_vm._v("Hors Bilan")])])]), _vm._v(" "), _c("th", {
    staticClass: "text-center text-uppercase"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_c("b", [_vm._v("FCEC")])])]), _vm._v(" "), _c("th", {
    staticClass: "text-center text-uppercase"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_c("b", [_vm._v("HB après  FCECC")])])]), _vm._v(" "), _c("th", {
    staticClass: "text-center text-uppercase"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_c("b", [_vm._v("Total Exposition avant TARC")])])]), _vm._v(" "), _c("th", {
    staticClass: "text-center text-uppercase"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_c("b", [_vm._v("TARC")])])]), _vm._v(" "), _c("th", {
    staticClass: "text-center text-uppercase"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_c("b", [_vm._v("Pond")])])]), _vm._v(" "), _c("th", {
    staticClass: "text-center text-uppercase"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_c("b", [_vm._v("APR")])])])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("tr", [_c("td", [_c("label", {
    attrs: {
      "for": ""
    }
  })]), _vm._v(" "), _c("td", {
    staticClass: "text-center"
  }, [_vm._v("\n                            bilan\n                        ")]), _vm._v(" "), _c("td", {
    staticClass: "text-center"
  }, [_vm._v("\n                            hors bilan\n                        ")]), _vm._v(" "), _c("td", {
    staticClass: "text-center"
  }, [_vm._v("\n                            c\n                        ")]), _vm._v(" "), _c("td", {
    staticClass: "text-center"
  }, [_vm._v("\n                            (d)=(b)*(c )\n                        ")]), _vm._v(" "), _c("td", {
    staticClass: "text-center"
  }, [_vm._v("\n                            (e)\n                        ")]), _vm._v(" "), _c("td", {
    staticClass: "text-center"
  }, [_vm._v("\n                            (f)\n                        ")]), _vm._v(" "), _c("td", {
    staticClass: "text-center"
  }, [_vm._v("\n                            (g)\n                        ")]), _vm._v(" "), _c("td", {
    staticClass: "text-center"
  }, [_vm._v("\n                            (h)=(e-f)*(g)\n                        ")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", {
    staticClass: "bg-ed-primary"
  }, [_c("tr", [_c("th", {
    staticClass: "col-12 text-center py-2 m-0"
  }, [_vm._v("\n                                commentaire\n                            ")])])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/memo/scene_cover/PRES3.vue?vue&type=style&index=0&id=5838c328&lang=css&scoped=true":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/memo/scene_cover/PRES3.vue?vue&type=style&index=0&id=5838c328&lang=css&scoped=true ***!
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.bg-grey[data-v-5838c328],\r\n.th[data-v-5838c328] {\r\n    background-color: #f4f3f3;\r\n    font-weight: 600;\n}\n.memo[data-v-5838c328] {\r\n    margin-top: 10px;\r\n    padding: 10px;\r\n    border: 2px solid #fff;\r\n    font-weight: 550;\r\n    font-size: 16px;\r\n    text-align: left;\r\n    text-transform: uppercase;\r\n    background-color: #34495e;\r\n    color: #fff;\n}\n.head-memorandum-title[data-v-5838c328] {\r\n    margin-top: 15px;\r\n    padding: 16px;\r\n    color: #fff;\r\n    font-weight: bold;\r\n    background-color: #34495e;\r\n    border: 2px solid #575759;\r\n    box-shadow: 1px 3px 4px #ddd;\r\n    font-size: 16px;\r\n    text-align: center;\r\n    text-transform: uppercase;\r\n    border-radius: 10px;\r\n    margin-bottom: 15px;\n}\n.vertical-middle[data-v-5838c328] {\r\n    vertical-align: middle;\n}\n.mr-2[data-v-5838c328] {\r\n    margin-right: 0.5rem;\n}\n.ml-25-px[data-v-5838c328] {\r\n    margin-left: 25px;\n}\n.ml-45-px[data-v-5838c328] {\r\n    margin-left: 45px;\n}\n.table-bordered[data-v-5838c328] {\r\n    font-size: 0.9rem;\n}\n.form-check-input[data-v-5838c328]:disabled {\r\n    opacity: 1;\n}\n.activite td[data-v-5838c328] {\r\n    padding: 7px;\n}\n.card[data-v-5838c328] {\r\n    position: static;\r\n    float: none;\r\n    border: 1px solid rgba(0,0,0,0.175) !important;\n}\n.card-body[data-v-5838c328] {\r\n    font-size: 0.9rem;\n}\n.card-body [class*='col-'][data-v-5838c328] {\r\n    margin-bottom: 10px;\n}\n.text-red[data-v-5838c328] {\r\n    color: red;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/memo/scene_cover/PRES3.vue?vue&type=style&index=0&id=5838c328&lang=css&scoped=true":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/memo/scene_cover/PRES3.vue?vue&type=style&index=0&id=5838c328&lang=css&scoped=true ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PRES3_vue_vue_type_style_index_0_id_5838c328_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PRES3.vue?vue&type=style&index=0&id=5838c328&lang=css&scoped=true */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/memo/scene_cover/PRES3.vue?vue&type=style&index=0&id=5838c328&lang=css&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PRES3_vue_vue_type_style_index_0_id_5838c328_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PRES3_vue_vue_type_style_index_0_id_5838c328_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/offview/bank/nsia/memo/scene_cover/PRES3.vue":
/*!******************************************************************************!*\
  !*** ./resources/js/components/offview/bank/nsia/memo/scene_cover/PRES3.vue ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PRES3_vue_vue_type_template_id_5838c328_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PRES3.vue?vue&type=template&id=5838c328&scoped=true */ "./resources/js/components/offview/bank/nsia/memo/scene_cover/PRES3.vue?vue&type=template&id=5838c328&scoped=true");
/* harmony import */ var _PRES3_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PRES3.vue?vue&type=script&lang=js */ "./resources/js/components/offview/bank/nsia/memo/scene_cover/PRES3.vue?vue&type=script&lang=js");
/* harmony import */ var _PRES3_vue_vue_type_style_index_0_id_5838c328_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PRES3.vue?vue&type=style&index=0&id=5838c328&lang=css&scoped=true */ "./resources/js/components/offview/bank/nsia/memo/scene_cover/PRES3.vue?vue&type=style&index=0&id=5838c328&lang=css&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _PRES3_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _PRES3_vue_vue_type_template_id_5838c328_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _PRES3_vue_vue_type_template_id_5838c328_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "5838c328",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/offview/bank/nsia/memo/scene_cover/PRES3.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/offview/bank/nsia/memo/scene_cover/PRES3.vue?vue&type=script&lang=js":
/*!******************************************************************************************************!*\
  !*** ./resources/js/components/offview/bank/nsia/memo/scene_cover/PRES3.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PRES3_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PRES3.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/memo/scene_cover/PRES3.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PRES3_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/offview/bank/nsia/memo/scene_cover/PRES3.vue?vue&type=style&index=0&id=5838c328&lang=css&scoped=true":
/*!**************************************************************************************************************************************!*\
  !*** ./resources/js/components/offview/bank/nsia/memo/scene_cover/PRES3.vue?vue&type=style&index=0&id=5838c328&lang=css&scoped=true ***!
  \**************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PRES3_vue_vue_type_style_index_0_id_5838c328_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PRES3.vue?vue&type=style&index=0&id=5838c328&lang=css&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/memo/scene_cover/PRES3.vue?vue&type=style&index=0&id=5838c328&lang=css&scoped=true");


/***/ }),

/***/ "./resources/js/components/offview/bank/nsia/memo/scene_cover/PRES3.vue?vue&type=template&id=5838c328&scoped=true":
/*!************************************************************************************************************************!*\
  !*** ./resources/js/components/offview/bank/nsia/memo/scene_cover/PRES3.vue?vue&type=template&id=5838c328&scoped=true ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PRES3_vue_vue_type_template_id_5838c328_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PRES3_vue_vue_type_template_id_5838c328_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PRES3_vue_vue_type_template_id_5838c328_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PRES3.vue?vue&type=template&id=5838c328&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/memo/scene_cover/PRES3.vue?vue&type=template&id=5838c328&scoped=true");


/***/ })

}]);