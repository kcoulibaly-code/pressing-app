"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_offview_bank_nsia_dgr_DGR-FAR5_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/dgr/DGR-FAR5.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/dgr/DGR-FAR5.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************************************/
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
    return {
      inventairesTrier: [],
      previousMount: this.getPreviousYearAndCurrentMonth()
    };
  },
  created: function created() {
    //this.sortInventaires()
  },
  mounted: function mounted() {
    // console.log("**********",this.dossier_credit?.cred_pub_tb_28005?.autre_limite_ratio_test[0]?.grand_1[0]?.title)
    // this.clearTr([0, 2, 3, 7, 9, 11])
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
    disabledHead: function disabledHead(key) {
      return false;
    },
    clearTr: function clearTr(keys) {
      var table = document.getElementById('title');
      var tbody = table.childNodes[2];
      var nodes = tbody.childNodes;
      var trNodes, color, fontW;
      var newTr;
      var newTd;
      var textcontent;
      keys.forEach(function (key) {
        console.log("nodes[key]", nodes[key]);
        tbody.removeChild(nodes[key]);
        newTr = document.createElement('tr');
        newTd = document.createElement('td');
        newTd.setAttribute("colspan", "5");
        if (key == 0) {
          textcontent = "I. Limites internes (Appétence aux risques)";
          color = "#D6EEEE";
        }
        if (key == 2) {
          textcontent = "II. Limites prudentielles";
          color = "#D6EEEE";
        }
        if (key == 3) {
          textcontent = "A. Normes de solvabilité";
          color = "#f4f3f3";
          fontW = "bold";
        }
        if (key == 7) {
          textcontent = "B. Norme de division des risques";
          color = "#f4f3f3";
          fontW = "bold";
        }
        if (key == 9) {
          textcontent = "C. Ratio de levier";
          color = "#f4f3f3";
          fontW = "bold";
        }
        if (key == 11) {
          textcontent = "D. Autres normes prudentielles";
          color = "#f4f3f3";
          fontW = "bold";
        }
        newTd.textContent = textcontent;
        // newTd.style.backgroundColor = color
        newTr.style.backgroundColor = color;
        newTr.style.fontWeight = fontW;
        newTr.appendChild(newTd);
        trNodes = nodes[key].childNodes;
        var firstChild = tbody.firstChild;
        tbody.insertBefore(newTr, nodes[key]);
      });
      console.log("nodes", nodes);
      // background-color: #D6EEEE;
      // console.log("nodes", nodes)
      // nodes.forEach((node, key)=>{

      //     if (key != 1 || key != 2 ) {
      //         td = tr.childNodes[key]
      //         console.log('childnoe', node)
      //     }
      // })
      // keys.forEach(key=>{
      //     td = tr.childNodes[key]
      //     console.log("td", td)
      //     input = td.firstChild
      //     console.log("input", input)
      //     // td.removeChild(input)
      // })
    },
    convertNumber: function convertNumber(valeur) {
      return Number(String(valeur).replace(/\s+/g, ""));
    },
    // AffichetotalAchat(){
    //     let value=0
    //     this.inventairesTrier.forEach((inventaire, key) => {
    //         value += (Number(String(inventaire.quantite).replace(/\s+/g,"")) * Number(String(inventaire.prix_achat).replace(/\s+/g,"")))
    //     })
    //     return value
    // },
    // AffichetotalQuantite(){
    //     let value=0
    //     this.inventairesTrier.forEach((inventaire, key) => {
    //         value += Number(String(inventaire.quantite).replace(/\s+/g,""))
    //     })
    //     return value
    // },
    // AffichetotalMargePourcentage(){
    //     let value=0
    //     this.inventairesTrier.forEach((inventaire, key) => {
    //         value += Number(String(inventaire.marge_pourcentage).replace(/\s+/g,""))
    //     })
    //     return value
    // },
    // AffichetotalMargetotal(){
    //     let value=0
    //     this.inventairesTrier.forEach((inventaire, key) => {
    //         value += (Number(String(inventaire.prix_vente).replace(/\s+/g,"")) - Number(String(inventaire.prix_achat).replace(/\s+/g,"")))*inventaire.quantite
    //     })
    //     return value
    // },
    // AffichetotalMarge(){
    //     let value=0
    //     this.inventairesTrier.forEach((inventaire, key) => {
    //         value += (Number(String(inventaire.prix_vente).replace(/\s+/g,"")) - Number(String(inventaire.prix_achat).replace(/\s+/g,"")))
    //     })
    //     return value
    // },
    // sortInventaires(){
    //    let objs= this.dossier_credit?.cred_pub_tb_025?.inventaires
    //     this.inventairesTrier = objs.sort((a,b) => (b.quantite* Number(String(b.prix_vente).replace(/\s+/g,""))) - (a.quantite * Number(String(a.prix_vente).replace(/\s+/g,"")) )).slice(0,5)
    // },
    arrondiA2Chiffre: function arrondiA2Chiffre(x) {
      var value = Math.round(x * 100) / 100;
      return value;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/dgr/DGR-FAR5.vue?vue&type=template&id=4851367e&scoped=true":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/dgr/DGR-FAR5.vue?vue&type=template&id=4851367e&scoped=true ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm$dossier_credit, _vm$dossier_credit2, _vm$dossier_credit3, _vm$dossier_credit4, _vm$dossier_credit5, _vm$dossier_credit6, _vm$dossier_credit7, _vm$dossier_credit8, _vm$dossier_credit9, _vm$dossier_credit0, _vm$dossier_credit1, _vm$dossier_credit10, _vm$dossier_credit11, _vm$dossier_credit12, _vm$dossier_credit13, _vm$dossier_credit14, _vm$dossier_credit15, _vm$dossier_credit16, _vm$dossier_credit17, _vm$dossier_credit18, _vm$dossier_credit19, _vm$dossier_credit20, _vm$dossier_credit21;
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {}, [_c("div", {
    staticClass: "row justify-content-center"
  }, [_vm.dossier_credit.tbs_in_use.includes("tb28005") ? _c("div", {
    staticClass: "row",
    staticStyle: {
      "padding-top": ""
    }
  }, [_c("div", {
    staticClass: "head-memorandum-title mb-4",
    staticStyle: {
      "text-align": "center"
    }
  }, [_vm._v("\n                RESPECT DES LIMITES\n            ")]), _vm._v(" "), _c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-bordered"
  }, [_vm._m(0), _vm._v(" "), _c("tbody", [_vm._l((_vm$dossier_credit = _vm.dossier_credit) === null || _vm$dossier_credit === void 0 || (_vm$dossier_credit = _vm$dossier_credit.cred_pub_tb_28005) === null || _vm$dossier_credit === void 0 ? void 0 : _vm$dossier_credit.expositions_groupe, function (element, index) {
    return _c("tr", {
      key: index
    }, [_c("td", {
      staticStyle: {
        "vertical-align": "middle"
      }
    }, [_vm._v("\n                            " + _vm._s(element.client_groupe) + "\n                            ")]), _vm._v(" "), _c("td", [_vm._v("\n                                " + _vm._s(element.exposition) + "\n                            ")]), _vm._v(" "), _c("td", {
      staticClass: "text-center"
    }, [_vm._v("\n                            " + _vm._s(element.surete_fin) + "\n                            ")]), _vm._v(" "), _c("td", [_vm._v("\n                                " + _vm._s(element.garantie_hypo) + "\n                            ")]), _vm._v(" "), _c("td", [_vm._v("\n                                " + _vm._s(element.autre_garantie) + "  \n                            ")]), _vm._v(" "), _c("td", [_vm._v("\n                                " + _vm._s(element.apr) + "\n                            ")])]);
  }), _vm._v(" "), _c("tr", [_vm._m(1), _vm._v(" "), _c("td", {
    staticStyle: {
      width: "150px"
    }
  }, [_vm._v("\n                            " + _vm._s((_vm$dossier_credit2 = _vm.dossier_credit) === null || _vm$dossier_credit2 === void 0 || (_vm$dossier_credit2 = _vm$dossier_credit2.cred_pub_tb_28005) === null || _vm$dossier_credit2 === void 0 ? void 0 : _vm$dossier_credit2.total_exposition) + "\n                            ")]), _vm._v(" "), _c("td", [_vm._v("\n                                " + _vm._s((_vm$dossier_credit3 = _vm.dossier_credit) === null || _vm$dossier_credit3 === void 0 || (_vm$dossier_credit3 = _vm$dossier_credit3.cred_pub_tb_28005) === null || _vm$dossier_credit3 === void 0 ? void 0 : _vm$dossier_credit3.total_surete_fin) + "\n                            ")]), _vm._v(" "), _c("td", [_vm._v("\n                            " + _vm._s((_vm$dossier_credit4 = _vm.dossier_credit) === null || _vm$dossier_credit4 === void 0 || (_vm$dossier_credit4 = _vm$dossier_credit4.cred_pub_tb_28005) === null || _vm$dossier_credit4 === void 0 ? void 0 : _vm$dossier_credit4.total_garantie_hypo) + "\n                            ")]), _vm._v(" "), _c("td", [_vm._v("\n                                " + _vm._s((_vm$dossier_credit5 = _vm.dossier_credit) === null || _vm$dossier_credit5 === void 0 || (_vm$dossier_credit5 = _vm$dossier_credit5.cred_pub_tb_28005) === null || _vm$dossier_credit5 === void 0 ? void 0 : _vm$dossier_credit5.total_autre_garantie) + "\n                            ")]), _vm._v(" "), _c("td", [_vm._v("\n                                " + _vm._s((_vm$dossier_credit6 = _vm.dossier_credit) === null || _vm$dossier_credit6 === void 0 || (_vm$dossier_credit6 = _vm$dossier_credit6.cred_pub_tb_28005) === null || _vm$dossier_credit6 === void 0 ? void 0 : _vm$dossier_credit6.total_apr) + "\n                            ")])])], 2)])]), _vm._v(" "), _c("br"), _vm._v(" "), _c("table", {
    staticClass: "table table-bordered mb-4"
  }, [_vm._m(2), _vm._v(" "), _c("tbody", [_c("tr", [_c("td", [_c("span", {
    domProps: {
      innerHTML: _vm._s((_vm$dossier_credit7 = _vm.dossier_credit) === null || _vm$dossier_credit7 === void 0 || (_vm$dossier_credit7 = _vm$dossier_credit7.cred_pub_tb_28005) === null || _vm$dossier_credit7 === void 0 ? void 0 : _vm$dossier_credit7.comment_exposition_groupe)
    }
  })])])])]), _vm._v(" "), _c("br"), _vm._v(" "), _c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-bordered"
  }, [_vm._m(3), _vm._v(" "), _c("tbody", [!["", null, undefined].includes((_vm$dossier_credit8 = _vm.dossier_credit) === null || _vm$dossier_credit8 === void 0 || (_vm$dossier_credit8 = _vm$dossier_credit8.cred_pub_tb_28005) === null || _vm$dossier_credit8 === void 0 ? void 0 : _vm$dossier_credit8.apr_entite) ? _c("tr", [_c("td", {
    staticClass: "text-nowrap"
  }, [_vm._v("APR ENTITE ( en millions de FCFA)")]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm._f("formatNumber")((_vm$dossier_credit9 = _vm.dossier_credit) === null || _vm$dossier_credit9 === void 0 || (_vm$dossier_credit9 = _vm$dossier_credit9.cred_pub_tb_28005) === null || _vm$dossier_credit9 === void 0 ? void 0 : _vm$dossier_credit9.apr_entite)))])]) : _vm._e(), _vm._v(" "), _vm._l((_vm$dossier_credit0 = _vm.dossier_credit) === null || _vm$dossier_credit0 === void 0 || (_vm$dossier_credit0 = _vm$dossier_credit0.cred_pub_tb_28005) === null || _vm$dossier_credit0 === void 0 ? void 0 : _vm$dossier_credit0.ratio_division, function (element, index) {
    return _c("tr", {
      key: index
    }, [index == 1 ? _c("td", [_vm._v("Fonds Propres de Base T1 (en millions de FCFA)")]) : _c("td", {
      staticClass: "text-nowrap"
    }, [_vm._v(_vm._s(element.indicateur))]), _vm._v(" "), _c("td", [index == 3 ? _c("span", [_vm._v(_vm._s(element.valeur + "%"))]) : !["", null, undefined, 0, "0", NaN, "NaN"].includes(element.valeur) ? _c("span", [_vm._v(_vm._s(_vm._f("formatNumber")(element.valeur)))]) : _c("span", [_vm._v(_vm._s(element.valeur))])])]);
  })], 2)])]), _vm._v(" "), _c("br"), _vm._v(" "), _c("table", {
    staticClass: "table table-bordered mb-4"
  }, [_vm._m(4), _vm._v(" "), _c("tbody", [_c("tr", [_c("td", [_c("span", {
    domProps: {
      innerHTML: _vm._s((_vm$dossier_credit1 = _vm.dossier_credit) === null || _vm$dossier_credit1 === void 0 || (_vm$dossier_credit1 = _vm$dossier_credit1.cred_pub_tb_28005) === null || _vm$dossier_credit1 === void 0 ? void 0 : _vm$dossier_credit1.comment_ratio_division)
    }
  })])])])]), _vm._v(" "), _c("br"), _vm._v(" "), _c("div", {
    staticClass: "mb-3"
  }), _vm._v(" "), _vm._m(5), _vm._v(" "), _c("div", {
    staticClass: "table-responsive",
    staticStyle: {
      height: "400px"
    }
  }, [_c("table", {
    staticClass: "table table-bordered",
    attrs: {
      id: "title"
    }
  }, [_vm._m(6), _vm._v(" "), _c("tbody", [_c("tr", {
    attrs: {
      id: "grand1"
    }
  }, [_c("td", {
    attrs: {
      colspan: "6"
    }
  }, [_c("b", [_vm._v(_vm._s((_vm$dossier_credit10 = _vm.dossier_credit) === null || _vm$dossier_credit10 === void 0 || (_vm$dossier_credit10 = _vm$dossier_credit10.cred_pub_tb_28005) === null || _vm$dossier_credit10 === void 0 || (_vm$dossier_credit10 = _vm$dossier_credit10.autre_limite_ratio_test[0]) === null || _vm$dossier_credit10 === void 0 || (_vm$dossier_credit10 = _vm$dossier_credit10.grand_1[0]) === null || _vm$dossier_credit10 === void 0 ? void 0 : _vm$dossier_credit10.title))])])]), _vm._v(" "), _vm._l((_vm$dossier_credit11 = _vm.dossier_credit) === null || _vm$dossier_credit11 === void 0 || (_vm$dossier_credit11 = _vm$dossier_credit11.cred_pub_tb_28005) === null || _vm$dossier_credit11 === void 0 || (_vm$dossier_credit11 = _vm$dossier_credit11.autre_limite_ratio_test[0]) === null || _vm$dossier_credit11 === void 0 || (_vm$dossier_credit11 = _vm$dossier_credit11.grand_1[0]) === null || _vm$dossier_credit11 === void 0 ? void 0 : _vm$dossier_credit11.content, function (element, index) {
    return _c("tr", {
      key: index
    }, [_c("td", {
      staticStyle: {
        display: "inline-block",
        width: "178px"
      }
    }, [_c("span", {
      staticStyle: {
        width: "220px"
      }
    }, [_c("b", [_vm._v(_vm._s(element.limites) + " (" + _vm._s(element.secteur) + ")")])])]), _vm._v(" "), _c("td", [_vm._v("\n                            " + _vm._s(element.niveau_respecte) + "\n                        ")]), _vm._v(" "), _c("td", [_vm._v("\n                            " + _vm._s(element.niveau_observe) + "       \n                        ")]), _vm._v(" "), _c("td", [_vm._v("\n                            " + _vm._s(element.situation_apres_mise_en_place) + "\n                        ")]), _vm._v(" "), _c("td", [_vm._v("\n                            " + _vm._s(element.statut) + "\n                        ")]), _vm._v(" "), _c("td", [_vm._v("\n                            " + _vm._s(element.observation) + "\n                            \n                        ")])]);
  }), _vm._v(" "), _c("tr", {
    attrs: {
      id: "grand2"
    }
  }, [_c("td", {
    attrs: {
      colspan: "6"
    }
  }, [_c("b", [_vm._v(_vm._s((_vm$dossier_credit12 = _vm.dossier_credit) === null || _vm$dossier_credit12 === void 0 || (_vm$dossier_credit12 = _vm$dossier_credit12.cred_pub_tb_28005) === null || _vm$dossier_credit12 === void 0 || (_vm$dossier_credit12 = _vm$dossier_credit12.autre_limite_ratio_test[0]) === null || _vm$dossier_credit12 === void 0 || (_vm$dossier_credit12 = _vm$dossier_credit12.grand_2[0]) === null || _vm$dossier_credit12 === void 0 ? void 0 : _vm$dossier_credit12.title))])])]), _vm._v(" "), _c("tr", {
    attrs: {
      id: "grandA"
    }
  }, [_c("td", {
    attrs: {
      colspan: "6"
    }
  }, [_c("b", [_vm._v(_vm._s((_vm$dossier_credit13 = _vm.dossier_credit) === null || _vm$dossier_credit13 === void 0 || (_vm$dossier_credit13 = _vm$dossier_credit13.cred_pub_tb_28005) === null || _vm$dossier_credit13 === void 0 || (_vm$dossier_credit13 = _vm$dossier_credit13.autre_limite_ratio_test[0]) === null || _vm$dossier_credit13 === void 0 || (_vm$dossier_credit13 = _vm$dossier_credit13.grand_2[0]) === null || _vm$dossier_credit13 === void 0 || (_vm$dossier_credit13 = _vm$dossier_credit13.s_title[0]) === null || _vm$dossier_credit13 === void 0 ? void 0 : _vm$dossier_credit13.title))])])]), _vm._v(" "), _vm._l((_vm$dossier_credit14 = _vm.dossier_credit) === null || _vm$dossier_credit14 === void 0 || (_vm$dossier_credit14 = _vm$dossier_credit14.cred_pub_tb_28005) === null || _vm$dossier_credit14 === void 0 || (_vm$dossier_credit14 = _vm$dossier_credit14.autre_limite_ratio_test[0]) === null || _vm$dossier_credit14 === void 0 || (_vm$dossier_credit14 = _vm$dossier_credit14.grand_2[0]) === null || _vm$dossier_credit14 === void 0 || (_vm$dossier_credit14 = _vm$dossier_credit14.s_title[0]) === null || _vm$dossier_credit14 === void 0 ? void 0 : _vm$dossier_credit14.content, function (element, index) {
    return _c("tr", [_c("td", {
      staticStyle: {
        display: "inline-block",
        width: "178px"
      }
    }, [_c("span", {
      staticStyle: {
        width: "220px"
      }
    }, [_c("b", [_vm._v(_vm._s(element.limites))])])]), _vm._v(" "), _c("td", [_vm._v("\n                            " + _vm._s(element.niveau_respecte) + "\n                        ")]), _vm._v(" "), _c("td", [_vm._v("\n                            " + _vm._s(element.niveau_observe) + "       \n                        ")]), _vm._v(" "), _c("td", [_vm._v("\n                            " + _vm._s(element.situation_apres_mise_en_place) + "\n                        ")]), _vm._v(" "), _c("td", [_vm._v("\n                            " + _vm._s(element.statut) + "\n                        ")]), _vm._v(" "), _c("td", [_vm._v("\n                            " + _vm._s(element.observation) + "\n                            \n                        ")])]);
  }), _vm._v(" "), _c("tr", {
    attrs: {
      id: "grandB"
    }
  }, [_c("td", {
    attrs: {
      colspan: "6"
    }
  }, [_c("b", [_vm._v(_vm._s((_vm$dossier_credit15 = _vm.dossier_credit) === null || _vm$dossier_credit15 === void 0 || (_vm$dossier_credit15 = _vm$dossier_credit15.cred_pub_tb_28005) === null || _vm$dossier_credit15 === void 0 || (_vm$dossier_credit15 = _vm$dossier_credit15.autre_limite_ratio_test[0]) === null || _vm$dossier_credit15 === void 0 || (_vm$dossier_credit15 = _vm$dossier_credit15.grand_2[0]) === null || _vm$dossier_credit15 === void 0 || (_vm$dossier_credit15 = _vm$dossier_credit15.s_title[1]) === null || _vm$dossier_credit15 === void 0 ? void 0 : _vm$dossier_credit15.title))])])]), _vm._v(" "), _vm._l((_vm$dossier_credit16 = _vm.dossier_credit) === null || _vm$dossier_credit16 === void 0 || (_vm$dossier_credit16 = _vm$dossier_credit16.cred_pub_tb_28005) === null || _vm$dossier_credit16 === void 0 || (_vm$dossier_credit16 = _vm$dossier_credit16.autre_limite_ratio_test[0]) === null || _vm$dossier_credit16 === void 0 || (_vm$dossier_credit16 = _vm$dossier_credit16.grand_2[0]) === null || _vm$dossier_credit16 === void 0 || (_vm$dossier_credit16 = _vm$dossier_credit16.s_title[1]) === null || _vm$dossier_credit16 === void 0 ? void 0 : _vm$dossier_credit16.content, function (element, index) {
    return _c("tr", [_c("td", {
      staticStyle: {
        display: "inline-block",
        width: "178px"
      }
    }, [_c("span", {
      staticStyle: {
        width: "220px"
      }
    }, [_c("b", [_vm._v(_vm._s(element.limites))])])]), _vm._v(" "), _c("td", [_vm._v("\n                            " + _vm._s(element.niveau_respecte) + "\n                        ")]), _vm._v(" "), _c("td", [_vm._v("\n                            " + _vm._s(element.niveau_observe) + "       \n                        ")]), _vm._v(" "), _c("td", [_vm._v("\n                            " + _vm._s(element.situation_apres_mise_en_place) + "\n                        ")]), _vm._v(" "), _c("td", [_vm._v("\n                            " + _vm._s(element.statut) + "\n                        ")]), _vm._v(" "), _c("td", [_vm._v("\n                            " + _vm._s(element.observation) + "\n                            \n                        ")])]);
  }), _vm._v(" "), _c("tr", {
    attrs: {
      id: "grandC"
    }
  }, [_c("td", {
    attrs: {
      colspan: "6"
    }
  }, [_c("b", [_vm._v(_vm._s((_vm$dossier_credit17 = _vm.dossier_credit) === null || _vm$dossier_credit17 === void 0 || (_vm$dossier_credit17 = _vm$dossier_credit17.cred_pub_tb_28005) === null || _vm$dossier_credit17 === void 0 || (_vm$dossier_credit17 = _vm$dossier_credit17.autre_limite_ratio_test[0]) === null || _vm$dossier_credit17 === void 0 || (_vm$dossier_credit17 = _vm$dossier_credit17.grand_2[0]) === null || _vm$dossier_credit17 === void 0 || (_vm$dossier_credit17 = _vm$dossier_credit17.s_title[2]) === null || _vm$dossier_credit17 === void 0 ? void 0 : _vm$dossier_credit17.title))])])]), _vm._v(" "), _vm._l((_vm$dossier_credit18 = _vm.dossier_credit) === null || _vm$dossier_credit18 === void 0 || (_vm$dossier_credit18 = _vm$dossier_credit18.cred_pub_tb_28005) === null || _vm$dossier_credit18 === void 0 || (_vm$dossier_credit18 = _vm$dossier_credit18.autre_limite_ratio_test[0]) === null || _vm$dossier_credit18 === void 0 || (_vm$dossier_credit18 = _vm$dossier_credit18.grand_2[0]) === null || _vm$dossier_credit18 === void 0 || (_vm$dossier_credit18 = _vm$dossier_credit18.s_title[2]) === null || _vm$dossier_credit18 === void 0 ? void 0 : _vm$dossier_credit18.content, function (element) {
    return _c("tr", [_c("td", {
      staticStyle: {
        display: "inline-block",
        width: "178px"
      }
    }, [_c("span", {
      staticStyle: {
        width: "220px"
      }
    }, [_c("b", [_vm._v(_vm._s(element.limites))])])]), _vm._v(" "), _c("td", [_vm._v("\n                            " + _vm._s(element.niveau_respecte) + "\n                        ")]), _vm._v(" "), _c("td", [_vm._v("\n                            " + _vm._s(element.niveau_observe) + "       \n                        ")]), _vm._v(" "), _c("td", [_vm._v("\n                            " + _vm._s(element.situation_apres_mise_en_place) + "\n                        ")]), _vm._v(" "), _c("td", [_vm._v("\n                            " + _vm._s(element.statut) + "\n                        ")]), _vm._v(" "), _c("td", [_vm._v("\n                            " + _vm._s(element.observation) + "\n                            \n                        ")])]);
  }), _vm._v(" "), _c("tr", {
    attrs: {
      id: "grandD"
    }
  }, [_c("td", {
    attrs: {
      colspan: "6"
    }
  }, [_c("b", [_vm._v(_vm._s((_vm$dossier_credit19 = _vm.dossier_credit) === null || _vm$dossier_credit19 === void 0 || (_vm$dossier_credit19 = _vm$dossier_credit19.cred_pub_tb_28005) === null || _vm$dossier_credit19 === void 0 || (_vm$dossier_credit19 = _vm$dossier_credit19.autre_limite_ratio_test[0]) === null || _vm$dossier_credit19 === void 0 || (_vm$dossier_credit19 = _vm$dossier_credit19.grand_2[0]) === null || _vm$dossier_credit19 === void 0 || (_vm$dossier_credit19 = _vm$dossier_credit19.s_title[3]) === null || _vm$dossier_credit19 === void 0 ? void 0 : _vm$dossier_credit19.title))])])]), _vm._v(" "), _vm._l((_vm$dossier_credit20 = _vm.dossier_credit) === null || _vm$dossier_credit20 === void 0 || (_vm$dossier_credit20 = _vm$dossier_credit20.cred_pub_tb_28005) === null || _vm$dossier_credit20 === void 0 || (_vm$dossier_credit20 = _vm$dossier_credit20.autre_limite_ratio_test[0]) === null || _vm$dossier_credit20 === void 0 || (_vm$dossier_credit20 = _vm$dossier_credit20.grand_2[0]) === null || _vm$dossier_credit20 === void 0 || (_vm$dossier_credit20 = _vm$dossier_credit20.s_title[3]) === null || _vm$dossier_credit20 === void 0 ? void 0 : _vm$dossier_credit20.content, function (element) {
    return _c("tr", [_c("td", {
      staticStyle: {
        display: "inline-block",
        width: "178px"
      }
    }, [_c("span", {
      staticStyle: {
        width: "220px"
      }
    }, [_c("b", [_vm._v(_vm._s(element.limites))])])]), _vm._v(" "), _c("td", [_vm._v("\n                            " + _vm._s(element.niveau_respecte) + "\n                        ")]), _vm._v(" "), _c("td", [_vm._v("\n                            " + _vm._s(element.niveau_observe) + "       \n                        ")]), _vm._v(" "), _c("td", [_vm._v("\n                            " + _vm._s(element.situation_apres_mise_en_place) + "\n                        ")]), _vm._v(" "), _c("td", [_vm._v("\n                            " + _vm._s(element.statut) + "\n                        ")]), _vm._v(" "), _c("td", [_vm._v("\n                            " + _vm._s(element.observation) + "\n                            \n                        ")])]);
  })], 2)])]), _vm._v(" "), _c("div", {
    staticClass: "mb-5"
  }), _vm._v(" "), _c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-bordered mb-4"
  }, [_vm._m(7), _vm._v(" "), _c("tbody", [_c("tr", [_c("td", [_c("span", {
    domProps: {
      innerHTML: _vm._s((_vm$dossier_credit21 = _vm.dossier_credit) === null || _vm$dossier_credit21 === void 0 || (_vm$dossier_credit21 = _vm$dossier_credit21.cred_pub_tb_28005) === null || _vm$dossier_credit21 === void 0 ? void 0 : _vm$dossier_credit21.comment_autre_limite_ratio)
    }
  })])])])])])]) : _vm._e()])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("th", {
    staticClass: "bg-grey",
    staticStyle: {
      "text-align": "center"
    },
    attrs: {
      colspan: "6",
      scope: "row"
    }
  }, [_vm._v("\n                                Expositions sur le groupe de clients liés ( en millions de FCFA)\n                            ")])]), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "th fw-bold text-nowrap"
  }, [_c("label", [_vm._v("Client du groupe")])]), _vm._v(" "), _c("td", {
    staticClass: "th fw-bold text-center text-nowrap min-w-100-px"
  }, [_c("label", [_vm._v("Exposition Brute simulée")])]), _vm._v(" "), _c("td", {
    staticClass: "th fw-bold text-center text-nowrap min-w-100-px"
  }, [_c("label", [_vm._v("Sûretés financières")])]), _vm._v(" "), _c("td", {
    staticClass: "th fw-bold text-center text-nowrap"
  }, [_c("label", [_vm._v("Garanties Hypothécaires")])]), _vm._v(" "), _c("td", {
    staticClass: "th fw-bold text-center text-nowrap"
  }, [_c("label", [_vm._v("Autres Garanties éligibles")])]), _vm._v(" "), _c("td", {
    staticClass: "th fw-bold text-center text-nowrap"
  }, [_c("label", [_vm._v("APR")])])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {
    staticClass: "th fw-bold text-nowrap"
  }, [_c("label", [_vm._v("GROUPE")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", {
    staticClass: "bg-ed-primary"
  }, [_c("tr", [_c("th", {
    staticClass: "col-12 text-center py-2 m-0"
  }, [_vm._v("\n                            commentaire sur l'exposition groupe\n                        ")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("td", {
    staticClass: "bg-grey",
    staticStyle: {
      "text-align": "center"
    },
    attrs: {
      colspan: "2",
      scope: "row"
    }
  }, [_vm._v("\n                                Ratio de division des risques relatif au groupe de clients liés\n                            ")])]), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "th fw-bold text-nowrap"
  }, [_c("label"), _vm._v("Indicateurs après mise en place")]), _vm._v(" "), _c("td", {
    staticClass: "th fw-bold text-center text-nowrap min-w-100-px"
  }, [_c("label", [_vm._v("\n                                Valeur simulée")])])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", {
    staticClass: "bg-ed-primary"
  }, [_c("tr", [_c("th", {
    staticClass: "col-12 text-center py-2 m-0"
  }, [_vm._v("\n                            commentaire sur ratio de division \n                        ")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "mb-3 text-center",
    staticStyle: {
      background: "#f4f3f3"
    }
  }, [_c("b", [_vm._v("Ratio de division des risques relatif au groupe de clients liés")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", {
    staticClass: "position-sticky top-0 bg-light",
    staticStyle: {
      "z-index": "1"
    }
  }, [_c("tr", {
    staticStyle: {
      "background-color": "#f4f3f3"
    }
  }, [_c("th", {
    staticClass: "fw-bold text-nowrap",
    staticStyle: {
      width: "250px"
    }
  }, [_vm._v("Limites")]), _vm._v(" "), _c("th", {
    staticClass: "fw-bold text-center text-nowrap"
  }, [_vm._v("Niveau à respecter (en %)")]), _vm._v(" "), _c("th", {
    staticClass: "fw-bold text-center text-nowrap"
  }, [_c("label", [_vm._v("Niveau observé (dernière situation disponible en %)")])]), _vm._v(" "), _c("th", {
    staticClass: "fw-bold text-center text-nowrap"
  }, [_c("label", [_vm._v("Situation après mise en place du financement (en %)")])]), _vm._v(" "), _c("th", {
    staticClass: "fw-bold text-center text-nowrap"
  }, [_c("label", [_vm._v("Statut")])]), _vm._v(" "), _c("th", {
    staticClass: "fw-bold text-center text-nowrap"
  }, [_c("label", [_vm._v("Observation")])]), _vm._v(" "), _c("td")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", {
    staticClass: "bg-ed-primary"
  }, [_c("tr", [_c("th", {
    staticClass: "col-12 text-center py-2 m-0"
  }, [_vm._v("\n                            commentaire sur ratio de division \n                        ")])])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/dgr/DGR-FAR5.vue?vue&type=style&index=0&id=4851367e&lang=css&scoped=true":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/dgr/DGR-FAR5.vue?vue&type=style&index=0&id=4851367e&lang=css&scoped=true ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n#title th[data-v-4851367e]:first-child,\r\n#title td:first-child \r\n#grand1 td[data-v-4851367e]:first-child,\r\n#grand2 td[data-v-4851367e]:first-child,\r\n#grandA td[data-v-4851367e]:first-child,\r\n#grandB td[data-v-4851367e]:first-child,\r\n#grandC td[data-v-4851367e]:first-child,\r\n#grandD td[data-v-4851367e]:first-child {\r\n\r\n    background-color: #f4f3f3;\r\n    position: sticky;\r\n    left: 0;\r\n    z-index:0;\n}\n.bg-grey[data-v-4851367e] {\r\n    background-color: #f4f3f3;\n}\nth[data-v-4851367e] {\r\n    background: #f4f3f3 !important;\n}\n.btn-group-inputPercent[data-v-4851367e], .btn-group-inputPercent>.btn[data-v-4851367e] {\r\n   position: initial;\n}\n.head-memorandum-title[data-v-4851367e] {\r\n    margin-top: 15px;\r\n    padding: 16px;\r\n    color: #fff;\r\n    font-weight: bold;\r\n    background-color: #34495e;\r\n    border: 2px solid #575759;\r\n    box-shadow: 1px 3px 4px #ddd;\r\n    font-size: 16px;\r\n    text-align: center;\r\n    text-transform: uppercase;\r\n    border-radius: 10px;\r\n    margin-bottom: 15px;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/dgr/DGR-FAR5.vue?vue&type=style&index=0&id=4851367e&lang=css&scoped=true":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/dgr/DGR-FAR5.vue?vue&type=style&index=0&id=4851367e&lang=css&scoped=true ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DGR_FAR5_vue_vue_type_style_index_0_id_4851367e_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DGR-FAR5.vue?vue&type=style&index=0&id=4851367e&lang=css&scoped=true */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/dgr/DGR-FAR5.vue?vue&type=style&index=0&id=4851367e&lang=css&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DGR_FAR5_vue_vue_type_style_index_0_id_4851367e_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DGR_FAR5_vue_vue_type_style_index_0_id_4851367e_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/offview/bank/nsia/dgr/DGR-FAR5.vue":
/*!********************************************************************!*\
  !*** ./resources/js/components/offview/bank/nsia/dgr/DGR-FAR5.vue ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DGR_FAR5_vue_vue_type_template_id_4851367e_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DGR-FAR5.vue?vue&type=template&id=4851367e&scoped=true */ "./resources/js/components/offview/bank/nsia/dgr/DGR-FAR5.vue?vue&type=template&id=4851367e&scoped=true");
/* harmony import */ var _DGR_FAR5_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DGR-FAR5.vue?vue&type=script&lang=js */ "./resources/js/components/offview/bank/nsia/dgr/DGR-FAR5.vue?vue&type=script&lang=js");
/* harmony import */ var _DGR_FAR5_vue_vue_type_style_index_0_id_4851367e_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DGR-FAR5.vue?vue&type=style&index=0&id=4851367e&lang=css&scoped=true */ "./resources/js/components/offview/bank/nsia/dgr/DGR-FAR5.vue?vue&type=style&index=0&id=4851367e&lang=css&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _DGR_FAR5_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _DGR_FAR5_vue_vue_type_template_id_4851367e_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _DGR_FAR5_vue_vue_type_template_id_4851367e_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "4851367e",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/offview/bank/nsia/dgr/DGR-FAR5.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/offview/bank/nsia/dgr/DGR-FAR5.vue?vue&type=script&lang=js":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/offview/bank/nsia/dgr/DGR-FAR5.vue?vue&type=script&lang=js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DGR_FAR5_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DGR-FAR5.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/dgr/DGR-FAR5.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DGR_FAR5_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/offview/bank/nsia/dgr/DGR-FAR5.vue?vue&type=style&index=0&id=4851367e&lang=css&scoped=true":
/*!****************************************************************************************************************************!*\
  !*** ./resources/js/components/offview/bank/nsia/dgr/DGR-FAR5.vue?vue&type=style&index=0&id=4851367e&lang=css&scoped=true ***!
  \****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DGR_FAR5_vue_vue_type_style_index_0_id_4851367e_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DGR-FAR5.vue?vue&type=style&index=0&id=4851367e&lang=css&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/dgr/DGR-FAR5.vue?vue&type=style&index=0&id=4851367e&lang=css&scoped=true");


/***/ }),

/***/ "./resources/js/components/offview/bank/nsia/dgr/DGR-FAR5.vue?vue&type=template&id=4851367e&scoped=true":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/components/offview/bank/nsia/dgr/DGR-FAR5.vue?vue&type=template&id=4851367e&scoped=true ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DGR_FAR5_vue_vue_type_template_id_4851367e_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DGR_FAR5_vue_vue_type_template_id_4851367e_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DGR_FAR5_vue_vue_type_template_id_4851367e_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DGR-FAR5.vue?vue&type=template&id=4851367e&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/dgr/DGR-FAR5.vue?vue&type=template&id=4851367e&scoped=true");


/***/ })

}]);