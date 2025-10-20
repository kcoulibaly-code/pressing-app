"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_offview_bank_nsia_memo_fiche_screening_garantie_DCEICLB1_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/memo/fiche_screening_garantie/DCEICLB1.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/memo/fiche_screening_garantie/DCEICLB1.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "",
  props: {
    dossier_credit: Object
  },
  data: function data() {
    return {
      items: [{
        content: "Production ou commerce de tout produit illégal ou activité et services illégaux au regard des législations de la Côte d'Ivoire ou des réglementations, conventions et/ou accords internationaux."
      }, {
        content: "Tout secteur ou tout service faisant l'objet d'un embargo des Nations Unies, de l'Union Européenne dans un Etat donné,sans restriction de montant absolu ou relatif."
      }, {
        content: "Production ou activité requérant travail forcé ou travail enfants."
      }, {
        content: "Commerce d'animaux, de végétaux ou de tout produits naturels réglementés par les lois. et les réglementaires spécifiques Ivoiriennes, la CITES et la liste rouge de l'UICN (ex. Lycaon, faux gavial d'Afrique, chimpanzé,mérou Goliath, vautour à tête blanche, pangolin etc. )."
      }, {
        content: "Maison de jeux, paris, casino et tout entréprise équivalente."
      }, {
        content: "Tout commerce ou activités liés à la pornographie ou à la prostitution."
      }, {
        content: "Production ou activités empiétant sur des terrains appartenant à des peuples indigènes ou ethnies autochtones pour lequel ces dernières ont effectué un recours en justice afin de faire valoire leurs droits ou ne respectant pas les interdits et d'habitudes culturels (Néyo,Godié,etc.)."
      }, {
        content: "Tout opération entraînant ou nécessitant la destruction d'un habitat ou écosysthème critique et qui n'aurait pas pas réçu de environnemental officiellement délivré par les autorités compétant de la Côte d'Ivoire, Notament le Ministère de l'environnement et du dévéloppement durable, ou tout autre structure sous ça tutelle(L'Agence Nationale de l'environnement (ANDE)) tout exploitation forestière commerciale d'une forêt primaire ou tout projet forestier ne mettant pas en oeuvre un plan d'aménagement et de gestion durable."
      }, {
        content: "Toute opération engendrant une modification irréversible ou le déplacement significatif d'un élément de pattrimoine culturel critique."
      }, {
        content: "Activité de pêche utilisant un filet dérivant de plus 2,5 km de long."
      }, {
        content: "Production , utilisation ou commerce de matériaux dangereux tels que les fibres en amiante, des matériaux radioactifs ou les produits cotenant des PCB et ou ayant un impact irréversible dans l'environnement marin et côtier (ex. surpêche, destruction des barrières de corails, etc)."
      }, {
        content: "Production, utilisation ou commerce de produits pharmaceutiques, d'herbicides et de pesticides, de produits destructeur de la couche d'ozones ou tout autre produit dangereux, soumis à interdiction ou concerné par une suppression progressive dans les conventions internationales."
      }, {
        content: "Commerce transfrontalier de déchets, excepté ceux qui sont acceptés par la convention de bâle et les réglementations qui les sous-tendent."
      }, {
        content: "Production et distribution ou Participation à des medias racistes, anti-démocratiques ou prônant la discrimination d'une partie de la population."
      }, {
        content: "Exploitation illicite de mines des pierres précieuses et exploitation illicite de diamantifères anisi que la commercialisation des diamants et des pierres précieuses illicitement exploités."
      }],
      items_conserne: [{
        content: "Production ou commerce d'alcool fort destiné à la consommation humaine."
      }, {
        content: " Production ou commerce de tabac."
      }, {
        content: "Production ou commerce d'armes et/ou de munitions"
      }]
    };
  },
  methods: {
    formatDate: function formatDate(date) {
      var options = {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric'
      };
      return new Date(date).toLocaleDateString('fr', options);
    },
    //   getGlobalIndex(critereIndex, index) {
    //     let total = 0;
    //     const keys = Object.keys(this.dossier_credit?.cred_pub_tb_4501?.dynamique_question);
    //     for (let i = 0; i < critereIndex; i++) {
    //     total += this.dossier_credit?.cred_pub_tb_4501?.[keys[i]].length ;
    //     }
    //     return total + index;
    // },
    getGlobalIndex: function getGlobalIndex(critereIndex, index) {
      var total = 0;

      // Ensure dossier_credit and cred_pub_tb_4501 exist
      if (!this.dossier_credit || !this.dossier_credit.cred_pub_tb_4501) {
        return total + index; // Return early if data is missing
      }

      // Get keys of dynamique_question, if it exists
      var keys = Object.keys(this.dossier_credit.cred_pub_tb_4501.dynamique_question || {});

      // Iterate through keys up to critereIndex
      for (var i = 0; i < critereIndex; i++) {
        // Check if the key exists and its value is an array
        if (keys[i] && Array.isArray(this.dossier_credit.cred_pub_tb_4501[keys[i]])) {
          total += this.dossier_credit.cred_pub_tb_4501[keys[i]].length;
        }
      }
      return total + index;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/memo/fiche_screening_garantie/DCEICLB1.vue?vue&type=template&id=c6c41278&scoped=true":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/memo/fiche_screening_garantie/DCEICLB1.vue?vue&type=template&id=c6c41278&scoped=true ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm$dossier_credit, _vm$dossier_credit2, _vm$dossier_credit3, _vm$dossier_credit4, _vm$dossier_credit5, _vm$dossier_credit6, _vm$dossier_credit7, _vm$dossier_credit8;
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("div", {
    staticClass: "row"
  }, [_vm.dossier_credit.tbs_in_use.includes("tb4501") ? _c("div", {
    staticClass: "col-12"
  }, [((_vm$dossier_credit = _vm.dossier_credit) === null || _vm$dossier_credit === void 0 || (_vm$dossier_credit = _vm$dossier_credit.cred_pub_tb_00) === null || _vm$dossier_credit === void 0 ? void 0 : _vm$dossier_credit.has_bailleur) !== "Oui" ? _c("div", [_vm._m(0)]) : _c("div", {
    staticClass: "table-responsive p-2"
  }, [Object.keys((_vm$dossier_credit2 = _vm.dossier_credit) === null || _vm$dossier_credit2 === void 0 || (_vm$dossier_credit2 = _vm$dossier_credit2.cred_pub_tb_4501) === null || _vm$dossier_credit2 === void 0 ? void 0 : _vm$dossier_credit2.dynamique_question).length > 0 ? _c("div", [_c("table", {
    staticClass: "table table-bordered"
  }, [_c("thead", [_c("tr", [_c("th", {
    attrs: {
      colspan: "4"
    }
  }, [_vm._v("CRITÈRES D'ÉLIGIBILITÉ "), _c("span", {
    staticStyle: {
      "text-transform": "uppercase"
    }
  }, [_vm._v(_vm._s((_vm$dossier_credit3 = _vm.dossier_credit) === null || _vm$dossier_credit3 === void 0 || (_vm$dossier_credit3 = _vm$dossier_credit3.cred_pub_tb_4501) === null || _vm$dossier_credit3 === void 0 ? void 0 : _vm$dossier_credit3.bailleur))])]), _vm._v(" "), _c("th", [_vm._v("OUI / NON")]), _vm._v(" "), _c("th", [_vm._v("COMMENTAIRE")])])]), _vm._v(" "), _c("tbody", [_vm._l((_vm$dossier_credit4 = _vm.dossier_credit) === null || _vm$dossier_credit4 === void 0 || (_vm$dossier_credit4 = _vm$dossier_credit4.cred_pub_tb_4501) === null || _vm$dossier_credit4 === void 0 ? void 0 : _vm$dossier_credit4.dynamique_question, function (group, critere, critereIndex) {
    return [_c("tr", [_c("td", {
      staticClass: "bg-secondary text-white",
      attrs: {
        colspan: "6"
      }
    }, [_vm._v(_vm._s(critere))])]), _vm._v(" "), _vm._l(group, function (dynamique, index) {
      return [_c("tr", [_c("td", {
        attrs: {
          rowspan: dynamique.sub_questions && Object.keys(dynamique.sub_questions).length > 0 ? Object.keys(dynamique.sub_questions).length + 1 : 1
        }
      }, [_c("ol", [_c("li", [_c("span", {
        staticClass: "fw-bold"
      }, [_vm._v(_vm._s(_vm.getGlobalIndex(critereIndex, index) + 1) + ")")])])])]), _vm._v(" "), _c("td", {
        attrs: {
          colspan: dynamique.sub_questions && Object.keys(dynamique.sub_questions).length > 0 ? 5 : 3
        }
      }, [_vm._v("\n                                " + _vm._s(dynamique.question) + "\n                                ")]), _vm._v(" "), !dynamique.sub_questions || Object.keys(dynamique.sub_questions).length === 0 ? [_c("td", {
        staticStyle: {
          "vertical-align": "middle"
        }
      }, [_c("div", {
        staticClass: "d-flex justify-content-center"
      }, [_c("div", {
        staticClass: "m-2 d-flex mr-4"
      }, [_c("input", {
        staticClass: "form-check-input mx-1",
        attrs: {
          type: "checkbox",
          value: "oui",
          id: "question_oui_" + critereIndex + "_" + index,
          disabled: ""
        },
        domProps: {
          checked: dynamique.demande === "oui"
        }
      }), _vm._v(" "), _c("label", {
        staticClass: "text-nowrap",
        attrs: {
          "for": "question_oui_" + critereIndex + "_" + index
        }
      }, [_vm._v("Oui")])]), _vm._v(" "), _c("div", {
        staticClass: "m-2 d-flex mr-4"
      }, [_c("input", {
        staticClass: "form-check-input mx-1",
        attrs: {
          type: "checkbox",
          value: "non",
          id: "question_non_" + critereIndex + "_" + index,
          disabled: ""
        },
        domProps: {
          checked: dynamique.demande === "non"
        }
      }), _vm._v(" "), _c("label", {
        staticClass: "text-nowrap",
        attrs: {
          "for": "question_non_" + critereIndex + "_" + index
        }
      }, [_vm._v("Non")])])])]), _vm._v(" "), _c("td", [_c("textarea", {
        directives: [{
          name: "model",
          rawName: "v-model",
          value: dynamique.commentaire,
          expression: "dynamique.commentaire"
        }],
        staticClass: "form-control",
        attrs: {
          cols: "6"
        },
        domProps: {
          value: dynamique.commentaire
        },
        on: {
          input: function input($event) {
            if ($event.target.composing) return;
            _vm.$set(dynamique, "commentaire", $event.target.value);
          }
        }
      })])] : _vm._e()], 2), _vm._v(" "), _vm._l(dynamique.sub_questions, function (sub, subindex) {
        var _sub$question;
        return dynamique.sub_questions && Object.keys(dynamique.sub_questions).length > 0 ? _c("tr", {
          key: "sub_" + critereIndex + "_" + index + "_" + subindex
        }, [_c("td", {
          attrs: {
            colspan: "3"
          }
        }, [_vm._v(_vm._s((_sub$question = sub === null || sub === void 0 ? void 0 : sub.question) !== null && _sub$question !== void 0 ? _sub$question : sub))]), _vm._v(" "), _c("td", {
          staticStyle: {
            "vertical-align": "middle"
          }
        }, [_c("div", {
          staticClass: "d-flex justify-content-center"
        }, [_c("div", {
          staticClass: "m-2 d-flex mr-4"
        }, [_c("input", {
          staticClass: "form-check-input mx-1",
          attrs: {
            type: "checkbox",
            value: "oui",
            id: "sub_question_oui_" + critereIndex + "_" + index + "_" + subindex,
            disabled: ""
          },
          domProps: {
            checked: sub.sous_demande === "oui"
          }
        }), _vm._v(" "), _c("label", {
          staticClass: "text-nowrap",
          attrs: {
            "for": "sub_question_oui_" + critereIndex + "_" + index + "_" + subindex
          }
        }, [_vm._v("Oui")])]), _vm._v(" "), _c("div", {
          staticClass: "m-2 d-flex mr-4"
        }, [_c("input", {
          staticClass: "form-check-input mx-1",
          attrs: {
            type: "checkbox",
            value: "non",
            id: "sub_question_non_" + critereIndex + "_" + index + "_" + subindex,
            disabled: ""
          },
          domProps: {
            checked: sub.sous_demande === "non"
          }
        }), _vm._v(" "), _c("label", {
          staticClass: "text-nowrap",
          attrs: {
            "for": "sub_question_non_" + critereIndex + "_" + index + "_" + subindex
          }
        }, [_vm._v("Non")])])])]), _vm._v(" "), _c("td", [_c("textarea", {
          directives: [{
            name: "model",
            rawName: "v-model",
            value: sub.commentaire,
            expression: "sub.commentaire"
          }],
          staticClass: "form-control",
          attrs: {
            cols: "6"
          },
          domProps: {
            value: sub.commentaire
          },
          on: {
            input: function input($event) {
              if ($event.target.composing) return;
              _vm.$set(sub, "commentaire", $event.target.value);
            }
          }
        })])]) : _vm._e();
      })];
    })];
  })], 2)]), _vm._v(" "), ((_vm$dossier_credit5 = _vm.dossier_credit) === null || _vm$dossier_credit5 === void 0 || (_vm$dossier_credit5 = _vm$dossier_credit5.cred_pub_tb_4501) === null || _vm$dossier_credit5 === void 0 ? void 0 : _vm$dossier_credit5.bailleur) == "agf" ? _c("div", {
    staticClass: "container mt-4",
    staticStyle: {
      "font-size": "12px"
    }
  }, [_vm._m(1), _vm._v(" "), _c("p", [_vm._v("AGF n’investira, ni ne garantira, ni ne fournira de développement de capacité à aucune activité, production, utilisation, distribution ou activité commerciale énumérées ci-dessous :")]), _vm._v(" "), _vm._m(2), _vm._v(" "), _c("p", [_vm._v("Un critère raisonnable sera appliqué lorsque les activités de l’entreprise portant le projet ont (auront) un impact significatif sur le développement du pays, et que la situation du pays nécessite l’ajustement de cette liste d’exclusion.\n                            Les partenaires financiers d’AGF, à l’exception de ceux engagés dans des activités de microfinance ou de financement du commerce, doivent appliquer les exclusions suivantes, en plus de la liste d’exclusion d’AGF :")]), _vm._v(" "), _c("hr", {
    staticStyle: {
      width: "20%"
    }
  }), _vm._v(" "), _vm._m(3), _vm._v(" "), _vm._m(4), _vm._v(" "), _c("p", [_vm._v("Les partenaires financiers d’AGF, engagés dans des activités de microfinance,\n                             doivent appliquer les exclusions suivantes, en plus de la liste d’exclusion d’AGF :")]), _vm._v(" "), _vm._m(5), _vm._v(" "), _c("p", [_vm._v("Les partenaires financiers d’AGF, engagés dans les activités financières du commerce,\n                             doivent appliquer les exclusions suivantes, en plus de la liste d’exclusion d’AGF")]), _vm._v(" "), _vm._m(6), _vm._v(" "), _c("hr", {
    staticStyle: {
      width: "20%"
    }
  }), _vm._v(" "), _vm._m(7), _vm._v(" "), _vm._m(8), _vm._v(" "), _c("div", {
    staticClass: "segmentation"
  })]) : _vm._e(), _vm._v(" "), ((_vm$dossier_credit6 = _vm.dossier_credit) === null || _vm$dossier_credit6 === void 0 || (_vm$dossier_credit6 = _vm$dossier_credit6.cred_pub_tb_4501) === null || _vm$dossier_credit6 === void 0 ? void 0 : _vm$dossier_credit6.bailleur) == "bad" ? _c("div", {
    staticClass: "container mt-4",
    staticStyle: {
      "font-size": "12px"
    }
  }, [_vm._m(9)]) : _vm._e(), _vm._v(" "), ((_vm$dossier_credit7 = _vm.dossier_credit) === null || _vm$dossier_credit7 === void 0 || (_vm$dossier_credit7 = _vm$dossier_credit7.cred_pub_tb_4501) === null || _vm$dossier_credit7 === void 0 ? void 0 : _vm$dossier_credit7.bailleur) == "sfi-amef" ? _c("div", {
    staticClass: "container mt-4",
    staticStyle: {
      "font-size": "12px"
    }
  }, [_vm._m(10), _vm._v(" "), _c("p", [_vm._v("Sont exclus les financements concernant les secteurs d'activité suivants :")]), _vm._v(" "), _vm._m(11), _vm._v(" "), _vm._m(12), _vm._v(" "), _c("div", {
    staticClass: "segmentation"
  })]) : _vm._e(), _vm._v(" "), ((_vm$dossier_credit8 = _vm.dossier_credit) === null || _vm$dossier_credit8 === void 0 || (_vm$dossier_credit8 = _vm$dossier_credit8.cred_pub_tb_4501) === null || _vm$dossier_credit8 === void 0 ? void 0 : _vm$dossier_credit8.bailleur) == "sfi-pme" ? _c("div", {
    staticClass: "container mt-4",
    staticStyle: {
      "font-size": "12px"
    }
  }, [_vm._m(13), _vm._v(" "), _c("p", [_vm._v("Sont exclus les financements concernant les secteurs d'activité suivants :")]), _vm._v(" "), _vm._m(14), _vm._v(" "), _vm._m(15), _vm._v(" "), _c("div", {
    staticClass: "segmentation"
  })]) : _vm._e()]) : _c("div", {
    staticClass: "card-body"
  }, [_vm._m(16)])])]) : _vm._e()])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "d-flex justify-content-center text-center align-items-center text-muted py-4"
  }, [_c("div", [_c("h5", [_vm._v("Ce client, n'est pas éligible à une garantie de portefeuille")])])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("h5", {
    staticClass: "text-start"
  }, [_c("b", [_c("u", [_vm._v("Liste d'exclusion")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("ol", [_c("li", [_vm._v("1)Production ou commerce de tout produit illégal ou activité illégale au regard des législations du pays d'accueil ou des réglementations internationales (produits pharmaceutiques, pesticides, herbicides, produits chimiques destructeurs de la couche d'ozone, PCB, animaux ou végétaux protégés par CITES).")]), _vm._v(" "), _c("li", [_vm._v("2)Production ou commerce d'armes et/ou de munitions.")]), _vm._v(" "), _c("li", [_vm._v("3)Production ou commerce d'alcool fort destiné à la consommation humaine (à l'exception de la bière et du vin).")]), _vm._v(" "), _c("li", [_vm._v("4)Production ou commerce de tabac.")]), _vm._v(" "), _c("li", [_vm._v("5)Maisons de jeux, casinos ou toute entreprise équivalente.")]), _vm._v(" "), _c("li", [_vm._v("6)Pornographie et/ou prostitution.")]), _vm._v(" "), _c("li", [_vm._v("7)Média raciste et/ou anti-démocratique.")]), _vm._v(" "), _c("li", [_vm._v("8)Production ou commerce de matières radioactives (sauf pour les équipements médicaux protégés).")]), _vm._v(" "), _c("li", [_vm._v("9)Production ou commerce de fibres d'amiante friable (sauf si la teneur est inférieure à 20%).")]), _vm._v(" "), _c("li", [_vm._v("10)Méthodes de pêche non durables (filets dérivants de plus de 2,5 km de long).")]), _vm._v(" "), _c("li", [_vm._v("11)Commerce transfrontalier de déchets et de leurs dérivés (sauf exceptions légales).")]), _vm._v(" "), _c("li", [_vm._v("12)Destruction des zones à Haute Valeur de Conservation.")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("footer", {
    staticClass: "mt-4",
    staticStyle: {
      "font-size": "11px"
    }
  }, [_c("p", {
    staticClass: "small"
  }, [_vm._v("¹ Destruction significative 1 / l’élimination ou la réduction drastique de l’intégrité d’une zone ; élimination causée par un changement majeur et de long terme sur l’utilisation du sol ou l’eau ou 2 / la modification d’un habitat de sorte qu’il ne soit plus possible à la zone concernée de maintenir sa fonction")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("ol", [_c("li", [_vm._v("1)Production ou activité requérant un travail forcé ou un travail d'enfants.")]), _vm._v(" "), _c("li", [_vm._v("2)Exploitation forestière commerciale dans les forêts tropicales humides primaires.")]), _vm._v(" "), _c("li", [_vm._v("3)Production ou commerce de bois ou tout projet forestier sans plan de gestion durable.")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("ol", [_c("li", [_vm._v("1)Production ou activité requérant un travail forcé² ou un travail d’enfants³")]), _vm._v(" "), _c("li", [_vm._v("2)Exploitation forestière commerciale dans les forêts tropicales humides primaires")]), _vm._v(" "), _c("li", [_vm._v("3)Production ou commerce de produits contenant des PCB (Biphényles Polychlorés)")]), _vm._v(" "), _c("li", [_vm._v("4)Production ou commerce de produits destructeurs de la couche d’ozone ou tout autre produit dangereux, soumis à interdiction ou suppression progressive internationale")]), _vm._v(" "), _c("li", [_vm._v("5)Production ou commerce de bois ou tout autre produit forestier ne mettant pas en œuvre un plan d’aménagement et de gestion durable")]), _vm._v(" "), _c("li", [_vm._v("6)Production, commerce, stockage ou transport de volumes importants de produits chimiques dangereux ou utilisation à une échelle commerciale de produits chimiques dangereux. La définition des produits chimiques dangereux inclut l’essence et le kérosène et tout autre produits pétroliers")]), _vm._v(" "), _c("li", [_vm._v("7)Production ou activités qui empiètent sur les terres possédées par les peuples autochtones ou revendiquées par ceux-ci sous jugement, sans le plein consentement documenté de ces peuples")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("ol", [_c("li", [_vm._v("1)Production ou activité requérant un travail forcé² ou un travail d’enfants³")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("footer", {
    staticClass: "mt-4",
    staticStyle: {
      "font-size": "11px"
    }
  }, [_c("p", {
    staticClass: "small"
  }, [_vm._v("² Le travail forcé désigne tout travail ou service, non effectué volontairement, qui est obtenu d’un individu sous la menace de la force ou d’une peine")]), _vm._v(" "), _c("p", {
    staticClass: "small"
  }, [_vm._v("³ Le travail d’enfants désigne l’utilisation d’enfants dans des activités à but économique, susceptible de compromettre ou d’entraver l’éducation de l’enfant, ou de nuire à la santé, au développement physique, mental, spirituel, moral ou social de l’enfant.")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("span", {
    staticStyle: {
      "font-size": "15px"
    }
  }, [_c("b", [_c("u", [_vm._v("Segmentation TPME NSIA BANQUE")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("h2", {
    staticClass: "text-start"
  }, [_c("u", [_vm._v("NB : Veuillez noter que l’avis de non-objection de la BAD est à obtenir avant le décaissement du crédit")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("h5", {
    staticClass: "text-start"
  }, [_c("b", [_c("u", [_vm._v("Liste d'exclusion")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("ol", [_c("li", [_vm._v("1) La production ou le commerce de tous produits ou activités jugés illégaux en vertu des lois ou réglementation du pays hôte ou de conventions et accords internationaux, ou soumis à des interdictions internationales, tels que les médicaments, les pesticides/herbicides, les substances appauvrissant la couche d'ozone, les PCB (bisphénols polychlorés), la faune et la flore ou les produits réglementés au titre de la CITES (Convention sur le commerce international des espèces de faune et de flore sauvages menacées d’extinction)")]), _vm._v(" "), _c("li", [_vm._v("2) La production ou le commerce d'armes et de munitions")]), _vm._v(" "), _c("li", [_vm._v("3) La production ou le commerce de boissons alcoolisées (à l'exception de la bière et du vin)")]), _vm._v(" "), _c("li", [_vm._v("4) La production ou le commerce de tabac")]), _vm._v(" "), _c("li", [_vm._v("5) Les jeux d'argent, les casinos et les entreprises équivalentes")]), _vm._v(" "), _c("li", [_vm._v("6) La production ou le commerce de matériaux radioactifs. Cela ne s'applique pas à l'achat de dispositif médical, d'équipements de contrôle (mesure) de la qualité et tout équipement pour lequel la SFI considère que la source radioactive est insignifiante et/ou fait l'objet d'une protection adéquate")]), _vm._v(" "), _c("li", [_vm._v("7) La production ou le commerce de fibres d'amiante libres. Cela ne s'applique pas à l'achat et à l'utilisation de plaques en amiante-ciment dans lesquelles la teneur en amiante est inférieure à 20%")]), _vm._v(" "), _c("li", [_vm._v("8) La pêche au filet dérivant dans l'environnement marin en utilisant des filets d'une longueur de plus de 2,5 km")]), _vm._v(" "), _c("li", [_vm._v("9) La production ou les activités impliquant des formes préjudiciables ou d'exploitation du travail forcé/travail d'enfant préjudiciable")]), _vm._v(" "), _c("li", [_vm._v("10) L'exploitation forestière commerciale dans les forêts tropicales humides primaires")]), _vm._v(" "), _c("li", [_vm._v("11) La production ou le commerce de bois ou autres produits forestiers autres que ceux provenant de forêts gérées de manière durable")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("span", {
    staticStyle: {
      "font-size": "15px"
    }
  }, [_c("b", [_c("u", [_vm._v("Segmentation TPME NSIA BANQUE")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("h5", {
    staticClass: "text-start"
  }, [_c("b", [_c("u", [_vm._v("Liste d'exclusion")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("ol", [_c("li", [_vm._v("1) La production ou le commerce de tous produits ou activités jugés illégaux en vertu des lois ou réglementation du pays hôte ou de conventions et accords internationaux, ou soumis à des interdictions internationales, tels que les médicaments, les pesticides/herbicides, les substances appauvrissant la couche d'ozone, les PCB (bisphénols polychlorés), la faune et la flore ou les produits réglementés au titre de la CITES (Convention sur le commerce international des espèces de faune et de flore sauvages menacées d’extinction)")]), _vm._v(" "), _c("li", [_vm._v("2) La production ou le commerce d'armes et de munitions")]), _vm._v(" "), _c("li", [_vm._v("3) La production ou le commerce de boissons alcoolisées (à l'exception de la bière et du vin)")]), _vm._v(" "), _c("li", [_vm._v("4) La production ou le commerce de tabac")]), _vm._v(" "), _c("li", [_vm._v("5) Les jeux d'argent, les casinos et les entreprises équivalentes")]), _vm._v(" "), _c("li", [_vm._v("6) La production ou le commerce de matériaux radioactifs. Cela ne s'applique pas à l'achat de dispositif médical, d'équipements de contrôle (mesure) de la qualité et tout équipement pour lequel la SFI considère que la source radioactive est insignifiante et/ou fait l'objet d'une protection adéquate")]), _vm._v(" "), _c("li", [_vm._v("7) La production ou le commerce de fibres d'amiante libres. Cela ne s'applique pas à l'achat et à l'utilisation de plaques en amiante-ciment dans lesquelles la teneur en amiante est inférieure à 20%")]), _vm._v(" "), _c("li", [_vm._v("8) La pêche au filet dérivant dans l'environnement marin en utilisant des filets d'une longueur de plus de 2,5 km")]), _vm._v(" "), _c("li", [_vm._v("9) La production ou les activités impliquant des formes préjudiciables ou d'exploitation du travail forcé/travail d'enfant préjudiciable")]), _vm._v(" "), _c("li", [_vm._v("10) L'exploitation forestière commerciale dans les forêts tropicales humides primaires")]), _vm._v(" "), _c("li", [_vm._v("11) La production ou le commerce de bois ou autres produits forestiers autres que ceux provenant de forêts gérées de manière durable")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("span", {
    staticStyle: {
      "font-size": "15px"
    }
  }, [_c("b", [_c("u", [_vm._v("Segmentation TPME NSIA BANQUE")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "d-flex justify-content-center text-center align-items-center text-muted py-4"
  }, [_c("div", [_c("h5", [_vm._v("\n                                    Aucune donnée trouvée pour ce tableau "), _c("br"), _vm._v("\n                                    veuillez changer de bailleur/d'institution\n                                ")])])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/memo/fiche_screening_garantie/DCEICLB1.vue?vue&type=style&index=0&id=c6c41278&scoped=true&lang=css":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/memo/fiche_screening_garantie/DCEICLB1.vue?vue&type=style&index=0&id=c6c41278&scoped=true&lang=css ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.head-memorandum-title[data-v-c6c41278] {\r\n    margin-top: 15px;\r\n    padding: 16px;\r\n    color: #fff;\r\n    font-weight: bold;\r\n    background-color: #34495e;\r\n    border: 2px solid #575759;\r\n    box-shadow: 1px 3px 4px #ddd;\r\n    font-size: 16px;\r\n    text-align: center;\r\n    text-transform: uppercase;\r\n    border-radius: 10px;\r\n    margin-bottom: 15px;\n}\n.segmentation[data-v-c6c41278]{\r\n    background: url(\"/images/capture_nsia/bailleur_nsia/segmentation.png\")\r\n        no-repeat;\r\n    background-position: center;\r\n    background-size: contain;\r\n\r\n    width: 500px;\r\n    height: 300px;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/memo/fiche_screening_garantie/DCEICLB1.vue?vue&type=style&index=0&id=c6c41278&scoped=true&lang=css":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/memo/fiche_screening_garantie/DCEICLB1.vue?vue&type=style&index=0&id=c6c41278&scoped=true&lang=css ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DCEICLB1_vue_vue_type_style_index_0_id_c6c41278_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DCEICLB1.vue?vue&type=style&index=0&id=c6c41278&scoped=true&lang=css */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/memo/fiche_screening_garantie/DCEICLB1.vue?vue&type=style&index=0&id=c6c41278&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DCEICLB1_vue_vue_type_style_index_0_id_c6c41278_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DCEICLB1_vue_vue_type_style_index_0_id_c6c41278_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/offview/bank/nsia/memo/fiche_screening_garantie/DCEICLB1.vue":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/offview/bank/nsia/memo/fiche_screening_garantie/DCEICLB1.vue ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DCEICLB1_vue_vue_type_template_id_c6c41278_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DCEICLB1.vue?vue&type=template&id=c6c41278&scoped=true */ "./resources/js/components/offview/bank/nsia/memo/fiche_screening_garantie/DCEICLB1.vue?vue&type=template&id=c6c41278&scoped=true");
/* harmony import */ var _DCEICLB1_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DCEICLB1.vue?vue&type=script&lang=js */ "./resources/js/components/offview/bank/nsia/memo/fiche_screening_garantie/DCEICLB1.vue?vue&type=script&lang=js");
/* harmony import */ var _DCEICLB1_vue_vue_type_style_index_0_id_c6c41278_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DCEICLB1.vue?vue&type=style&index=0&id=c6c41278&scoped=true&lang=css */ "./resources/js/components/offview/bank/nsia/memo/fiche_screening_garantie/DCEICLB1.vue?vue&type=style&index=0&id=c6c41278&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _DCEICLB1_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _DCEICLB1_vue_vue_type_template_id_c6c41278_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _DCEICLB1_vue_vue_type_template_id_c6c41278_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "c6c41278",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/offview/bank/nsia/memo/fiche_screening_garantie/DCEICLB1.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/offview/bank/nsia/memo/fiche_screening_garantie/DCEICLB1.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************!*\
  !*** ./resources/js/components/offview/bank/nsia/memo/fiche_screening_garantie/DCEICLB1.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DCEICLB1_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DCEICLB1.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/memo/fiche_screening_garantie/DCEICLB1.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DCEICLB1_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/offview/bank/nsia/memo/fiche_screening_garantie/DCEICLB1.vue?vue&type=style&index=0&id=c6c41278&scoped=true&lang=css":
/*!******************************************************************************************************************************************************!*\
  !*** ./resources/js/components/offview/bank/nsia/memo/fiche_screening_garantie/DCEICLB1.vue?vue&type=style&index=0&id=c6c41278&scoped=true&lang=css ***!
  \******************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DCEICLB1_vue_vue_type_style_index_0_id_c6c41278_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DCEICLB1.vue?vue&type=style&index=0&id=c6c41278&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/memo/fiche_screening_garantie/DCEICLB1.vue?vue&type=style&index=0&id=c6c41278&scoped=true&lang=css");


/***/ }),

/***/ "./resources/js/components/offview/bank/nsia/memo/fiche_screening_garantie/DCEICLB1.vue?vue&type=template&id=c6c41278&scoped=true":
/*!****************************************************************************************************************************************!*\
  !*** ./resources/js/components/offview/bank/nsia/memo/fiche_screening_garantie/DCEICLB1.vue?vue&type=template&id=c6c41278&scoped=true ***!
  \****************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DCEICLB1_vue_vue_type_template_id_c6c41278_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DCEICLB1_vue_vue_type_template_id_c6c41278_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DCEICLB1_vue_vue_type_template_id_c6c41278_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DCEICLB1.vue?vue&type=template&id=c6c41278&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/memo/fiche_screening_garantie/DCEICLB1.vue?vue&type=template&id=c6c41278&scoped=true");


/***/ })

}]);