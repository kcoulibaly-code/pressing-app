"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_offview_microfinance_cofina_recoveryiq_FR5_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/microfinance/cofina/recoveryiq/FR5.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/microfinance/cofina/recoveryiq/FR5.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_connects_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../services/connects.service */ "./resources/js/services/connects.service.js");
/* harmony import */ var _services_proxy_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../services/proxy.service */ "./resources/js/services/proxy.service.js");
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../services/auth.service */ "./resources/js/services/auth.service.js");
// import connects from "../../../../../services/connects.service";
// import ProxyService from "../../../../../services/proxy.service";





// import Auth from "./services/auth.service";

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    dossier_credit: Object,
    dossiers_credit_files: Array
  },
  components: {
    ChevronUpIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_4__.ChevronUpIcon,
    ChevronDownIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_4__.ChevronDownIcon
  },
  created: function created() {
    var _this = this;
    _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["default"].loadUserData().then(function (res) {
      _this.authcheckUsr = res.data;
    })["catch"](function (err) {
      _this.loadWithError(err);
    });
  },
  mounted: function mounted() {
    var _this$data_tb0$rappor,
      _this$data_tb,
      _this2 = this;
    this.data_tb0 = this.dossier_credit["cred_pub_tb_16507"];
    if (![null, "", undefined, 0, false].includes(this.data_tb0)) {
      this.getFiles();
    }
    this.currentSeen = ((_this$data_tb0$rappor = (_this$data_tb = this.data_tb0) === null || _this$data_tb === void 0 ? void 0 : _this$data_tb.rapport_de_visite.length) !== null && _this$data_tb0$rappor !== void 0 ? _this$data_tb0$rappor : 0) - 1;
    EventBus.$on("openAllSeen", function () {
      _this2.openAllseen = true;
    });
  },
  data: function data() {
    return {
      data_tb0: null,
      connectsHost: _services_connects_service__WEBPACK_IMPORTED_MODULE_1__["default"].loadablehost(),
      files: [],
      currentSeen: 0,
      seen2: true,
      authcheckUsr: null,
      openAllseen: false
    };
  },
  methods: {
    setCurrentSeen: function setCurrentSeen(index) {
      this.currentSeen = index;
    },
    handleDoubleClickOrClick: function handleDoubleClickOrClick(event, index, index_checkList) {
      var _this$data_tb0$rappor2, _this$dossier_credit, _this$data_tb0$rappor3;
      EventBus.$emit("open-extra-file-explorer");
      var current_user_id = (_this$data_tb0$rappor2 = this.data_tb0.rapport_de_visite[index]) === null || _this$data_tb0$rappor2 === void 0 ? void 0 : _this$data_tb0$rappor2.user_id;
      var identity = ((_this$dossier_credit = this.dossier_credit) === null || _this$dossier_credit === void 0 ? void 0 : _this$dossier_credit.cred_pub_key) + "_" + current_user_id + "_" + index;
      var fullName = "Rapport visite {(*)}check_list_" + identity + "_" + ((_this$data_tb0$rappor3 = this.data_tb0.rapport_de_visite[index]) === null || _this$data_tb0$rappor3 === void 0 || (_this$data_tb0$rappor3 = _this$data_tb0$rappor3["checkListVisiteClient"][index_checkList]) === null || _this$data_tb0$rappor3 === void 0 ? void 0 : _this$data_tb0$rappor3.name);
      // console.log("");
      // name:"Contrat {(*)}envoie_contrats_" +index +"_" +this.$route.params.templateId,
      setTimeout(function () {
        EventBus.$emit("data-extra-file-explorer", {
          name: fullName,
          view: true
        });
      }, 500);
    },
    getFiles: function getFiles() {
      var _this$data_tb2,
        _this3 = this;
      this.files = this.dossiers_credit_files;
      (_this$data_tb2 = this.data_tb0) === null || _this$data_tb2 === void 0 || _this$data_tb2.rapport_de_visite.forEach(function (rapport, index_rapport) {
        rapport.checkListVisiteClient.forEach(function (element, index) {
          var count = 0;
          _this3.files.forEach(function (file) {
            var _element$template;
            if ((file === null || file === void 0 ? void 0 : file.extra_file_template_id) != null && (element === null || element === void 0 || (_element$template = element.template) === null || _element$template === void 0 ? void 0 : _element$template.id) == (file === null || file === void 0 ? void 0 : file.extra_file_template_id)) {
              count++;
            }
          });
          _this3.data_tb0.rapport_de_visite[index_rapport].checkListVisiteClient[index]["files"] = count;
          // this.handleInput();
        });
      });
    },
    textTruncate: function textTruncate(str, length, ending) {
      if (typeof str === "string") {
        if (length == null) {
          length = 25;
        }
        if (ending == null) {
          ending = "...";
        }
        if (str.length > length) {
          return str.substring(0, length - ending.length) + ending;
        } else {
          return str;
        }
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/microfinance/cofina/recoveryiq/FR5.vue?vue&type=template&id=2069fdde&scoped=true":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/microfinance/cofina/recoveryiq/FR5.vue?vue&type=template&id=2069fdde&scoped=true ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {}, [_c("div", {
    staticClass: "row justify-content-center"
  }, [_vm.data_tb0 ? _c("div", {
    staticClass: "row",
    staticStyle: {
      "padding-top": ""
    }
  }, [_c("div", {
    staticClass: "head-memorandum-title mb-4",
    staticStyle: {
      "text-align": "center"
    }
  }, [_vm._v("\n                RAPPORT DE VISITE CAUTION\n            ")]), _vm._v(" "), _c("div", {
    staticClass: "row p-0"
  }, [_c("div", {
    staticClass: "col-12 p-0 position-relative"
  }, [_vm._l(_vm.data_tb0.rapport_de_visite, function (planification, index) {
    var _planification$type, _Math$floor, _planification$user_i, _planification$user_i2, _planification$date_p, _planification$type2, _Math$floor2, _planification$user_i3, _planification$user_i4, _planification$date_p2;
    return _c("div", {
      key: index,
      staticClass: "table-responsive mb-2"
    }, [_vm.currentSeen == index || _vm.openAllseen ? _c("div", {
      key: index,
      staticClass: "card-body"
    }, [_c("div", {
      staticClass: "relook-header",
      on: {
        click: function click($event) {
          return _vm.setCurrentSeen(-1);
        }
      }
    }, [_c("div", {
      staticClass: "header-content",
      staticStyle: {
        display: "flex",
        "justify-content": "space-between",
        "align-items": "center"
      }
    }, [_c("h6", {
      attrs: {
        id: "rapport_de_visite" + (index + 1)
      }
    }, [_vm._v("\n                                            Rapport de visite ("), _c("small", [_vm._v(_vm._s((_planification$type = planification.type) !== null && _planification$type !== void 0 ? _planification$type : "Cautions"))]), _vm._v(") " + _vm._s(index + 1) + "\n                                        ")]), _vm._v(" "), _c("small", {
      staticStyle: {
        margin: "0"
      }
    }, [_vm._v("\n                                            Jour(s) de retard :\n                                            "), _c("span", {
      staticClass: "seuil"
    }, [_vm._v(_vm._s((_Math$floor = Math.floor(planification.par)) !== null && _Math$floor !== void 0 ? _Math$floor : ""))])]), _vm._v(" "), _c("small", {
      staticStyle: {
        margin: "0"
      }
    }, [_vm._v("\n                                        Etabli par: " + _vm._s(_vm.textTruncate((_planification$user_i = planification.user_infos) === null || _planification$user_i === void 0 ? void 0 : _planification$user_i.name) + "(" + _vm.textTruncate((_planification$user_i2 = planification.user_infos) === null || _planification$user_i2 === void 0 ? void 0 : _planification$user_i2.role_sigle) + ")") + "\n                                    ")]), _vm._v(" "), _c("div", {
      staticClass: "row"
    }, [_c("div", {
      staticClass: "col",
      staticStyle: {
        "float": "left"
      }
    }, [_c("small", {
      staticStyle: {
        margin: "0"
      }
    }, [_vm._v("\n                                                    le :\n                                                    " + _vm._s((_planification$date_p = planification.date_planification) !== null && _planification$date_p !== void 0 ? _planification$date_p : "#NA") + "\n                                                ")])])]), _vm._v(" "), _c("chevron-up-icon", {
      staticClass: "custom-class",
      staticStyle: {
        cursor: "pointer"
      },
      attrs: {
        size: "21"
      }
    })], 1)]), _vm._v(" "), _c("div", {
      staticClass: "card-body"
    }, [_c("div", {
      staticClass: "table-responsive mb-1"
    }, [_c("table", {
      staticClass: "table table-bordered"
    }, [_vm._m(0, true), _vm._v(" "), _vm._l(planification === null || planification === void 0 ? void 0 : planification.checkListVisiteClient, function (el, index_checkList) {
      var _vm$data_tb, _planification$heure_, _planification$heure_2, _planification$type_v, _planification$lieu_v, _planification$autres, _planification$exista, _planification$exista2, _planification$object, _planification$autres2, _planification$result, _planification$autres3, _planification$modes_, _planification$modes_2;
      return _c("tbody", {
        key: index_checkList
      }, [_c("tr", [_c("td", [_vm._v("\n                                                    " + _vm._s(el.name) + "\n                                                ")]), _vm._v(" "), _c("td", {
        staticClass: "text-center"
      }, [el.value == "Oui" ? _c("input", {
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
      })]), _vm._v(" "), _c("td", {
        staticClass: "text-center"
      }, [el.value == "Non" ? _c("input", {
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
      })]), _vm._v(" "), _c("td", {
        staticClass: "text-center"
      }, [el.value == "Non applicable" ? _c("input", {
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
      })]), _vm._v(" "), _c("td", [el.value == "Oui" && (el === null || el === void 0 ? void 0 : el.files) > 0 ? _c("div", {
        staticClass: "d-flex align-items-center"
      }, [_c("div", [(el === null || el === void 0 ? void 0 : el.files) > 0 ? _c("span", {
        staticClass: "p-1 px-2 mx-2 text-nowrap",
        staticStyle: {
          "background-color": "rgb(44,62,80)",
          color: "white",
          "font-size": "13px",
          "border-radius": "5px",
          "margin-left": "0 !important",
          width: "150px"
        }
      }, [_vm._v(_vm._s((el === null || el === void 0 ? void 0 : el.files) > 0 ? (el === null || el === void 0 ? void 0 : el.files) + " fichier(s) uploadé(s)" : ""))]) : _vm._e()]), _vm._v(" "), el.name.trim() != "" ? _c("div", [_c("button", {
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
            return _vm.handleDoubleClickOrClick($event, index, index_checkList);
          }
        }
      }, [_c("i", {
        staticClass: "icofont-attachment"
      })])]) : _vm._e()]) : _c("div", {
        staticClass: "text-center text-danger"
      }, [_vm._v("\n                                                        Aucun fichier(s)\n                                                        uploadé(s)\n                                                    ")])]), _vm._v(" "), _c("td", [_vm._v("\n                                                    " + _vm._s(el.comment) + "\n                                                ")])]), _vm._v(" "), ((_vm$data_tb = _vm.data_tb0) === null || _vm$data_tb === void 0 ? void 0 : _vm$data_tb.rapport_de_visite[index].checkListVisiteClient[0].value) == "Oui" && index_checkList == 0 ? _c("tr", [_c("td", {
        attrs: {
          colspan: "7"
        }
      }, [_c("div", {
        staticClass: "row mt-2"
      }, [_c("div", {
        staticClass: "mb-1"
      }, [_c("table", {
        staticClass: "table table-bordered"
      }, [_c("tbody", [_c("tr", [_c("td", {
        staticClass: "fw-bold"
      }, [_vm._v("\n                                                            Date action\n                                                          ")]), _vm._v(" "), _c("td", [_vm._v("\n                                                            " + _vm._s(!["", null, undefined].includes(planification.date_visite) ? _vm.formatDate(planification.date_visite) : "") + "\n                                                          ")]), _vm._v(" "), _c("td", {
        staticClass: "fw-bold"
      }, [_vm._v("\n                                                            Heure début\n                                                          ")]), _vm._v(" "), _c("td", [_vm._v("\n                                                            " + _vm._s((_planification$heure_ = planification.heure_debut) !== null && _planification$heure_ !== void 0 ? _planification$heure_ : "") + "\n                                                          ")])]), _vm._v(" "), _c("tr", [_c("td", {
        staticClass: "fw-bold"
      }, [_vm._v("\n                                                            Heure fin\n                                                          ")]), _vm._v(" "), _c("td", [_vm._v("\n                                                            " + _vm._s((_planification$heure_2 = planification.heure_fin) !== null && _planification$heure_2 !== void 0 ? _planification$heure_2 : "") + "\n                                                          ")]), _vm._v(" "), _c("td", {
        staticClass: "fw-bold"
      }, [_vm._v("\n                                                            Type de visite\n                                                          ")]), _vm._v(" "), _c("td", [_vm._v("\n                                                            " + _vm._s((_planification$type_v = planification.type_visite) !== null && _planification$type_v !== void 0 ? _planification$type_v : "") + "\n                                                          ")])]), _vm._v(" "), _vm._m(1, true), _vm._v(" "), _c("tr", [_c("td", {
        staticStyle: {
          "font-weight": "600"
        },
        attrs: {
          colspan: "4"
        },
        domProps: {
          innerHTML: _vm._s(planification.observation)
        }
      })]), _vm._v(" "), _c("tr", [_c("td", {
        staticClass: "fw-bold",
        attrs: {
          colspan: "2"
        }
      }, [_vm._v("Cette visite sera-t-elle en groupe ?")]), _vm._v(" "), _c("td", {
        attrs: {
          colspan: "2"
        }
      }, [_vm._v(_vm._s(planification.visite_groupee))])]), _vm._v(" "), planification.visite_groupee == "Oui" ? _c("tr", [_c("td", {
        staticClass: "fw-bold",
        attrs: {
          colspan: "4"
        }
      }, [_vm._v("\n                                                            Liste des participants\n                                                          ")])]) : _vm._e(), _vm._v(" "), _vm._l(planification.collaborateurs, function (user, ind) {
        return planification.visite_groupee == "Oui" ? _c("tr", {
          key: ind
        }, [user.user_name ? _c("td", {
          attrs: {
            colspan: "4"
          }
        }, [_vm._v("\n                                                            - " + _vm._s(user.user_name) + " (" + _vm._s(user.role_name) + ")\n                                                          ")]) : _vm._e()]) : _vm._e();
      }), _vm._v(" "), _c("tr", [_c("td", {
        staticClass: "fw-bold"
      }, [_vm._v("\n                                                            Lieu de visite\n                                                          ")]), _vm._v(" "), _c("td", [_vm._v("\n                                                            " + _vm._s((_planification$lieu_v = planification.lieu_visite) !== null && _planification$lieu_v !== void 0 ? _planification$lieu_v : "") + "\n                                                          ")]), _vm._v(" "), planification.lieu_visite == "autres" ? _c("td", {
        staticClass: "fw-bold"
      }, [_vm._v("\n                                                            Si autre lieu de visite\n                                                          ")]) : _vm._e(), _vm._v(" "), planification.lieu_visite == "autres" ? _c("td", [_vm._v("\n                                                            " + _vm._s((_planification$autres = planification.autres_lieux_visite) !== null && _planification$autres !== void 0 ? _planification$autres : "") + "\n                                                          ")]) : _vm._e()]), _vm._v(" "), ["aFwisnrdo42c4n9MHCG2", "tmu3PEDVQsevYH2rhw4o", "icWghWx71w9VpwZ6y1mT"].includes(planification.user_infos.role_uuid) ? [_c("tr", [_c("td", {
        staticClass: "fw-bold"
      }, [_vm._v("\n                                                                      Existance de l'activité\n                                                                    ")]), _vm._v(" "), _c("td", [_vm._v("\n                                                                      " + _vm._s((_planification$exista = planification.existance_activite) !== null && _planification$exista !== void 0 ? _planification$exista : "") + "\n                                                                    ")]), _vm._v(" "), planification.existance_activite == "Oui" ? _c("td", {
        staticClass: "fw-bold"
      }, [_vm._v("\n                                                                      Etat de l'activité\n                                                                    ")]) : _vm._e(), _vm._v(" "), planification.existance_activite == "Oui" ? _c("td", [_vm._v("\n                                                                      " + _vm._s((_planification$exista2 = planification.existance_activite) !== null && _planification$exista2 !== void 0 ? _planification$exista2 : "") + "\n                                                                    ")]) : _vm._e()])] : _vm._e(), _vm._v(" "), _c("tr", [_c("td", {
        staticClass: "fw-bold"
      }, [_vm._v("\n                                                            Objet de la visite\n                                                          ")]), _vm._v(" "), _c("td", [_vm._v("\n                                                            " + _vm._s((_planification$object = planification.object_visites) !== null && _planification$object !== void 0 ? _planification$object : "") + "\n                                                          ")]), _vm._v(" "), planification.lieu_visite == "autres" ? _c("td", {
        staticClass: "fw-bold"
      }, [_vm._v("\n                                                            Si autre objet de visite\n                                                          ")]) : _vm._e(), _vm._v(" "), planification.object_visites == "autres" ? _c("td", [_vm._v("\n                                                            " + _vm._s((_planification$autres2 = planification.autres_object_visites) !== null && _planification$autres2 !== void 0 ? _planification$autres2 : "") + "\n                                                          ")]) : _vm._e()]), _vm._v(" "), [planification.object_visites == "Rencontre client pour comprendre motifs impayés" ? _c("div", [_vm._m(2, true), _vm._v(" "), _c("tr", [_c("td", {
        staticStyle: {
          "font-weight": "600"
        },
        attrs: {
          colspan: "4"
        }
      }, [_vm._v(_vm._s(planification === null || planification === void 0 ? void 0 : planification.motif_impaye))])])]) : _vm._e()], _vm._v(" "), _c("tr", [_c("td", {
        staticClass: "fw-bold"
      }, [_vm._v("\n                                                              Résultat\n                                                            ")]), _vm._v(" "), _c("td", [_vm._v("\n                                                              " + _vm._s((_planification$result = planification.resultats) !== null && _planification$result !== void 0 ? _planification$result : "") + "\n                                                            ")]), _vm._v(" "), [planification.resultats == "autres" ? _c("div", [_c("td", {
        staticClass: "fw-bold"
      }, [_vm._v("\n                                                                    Si autre\n                                                                  ")]), _vm._v(" "), _c("td", [_vm._v("\n                                                                    " + _vm._s((_planification$autres3 = planification.autres_resultats) !== null && _planification$autres3 !== void 0 ? _planification$autres3 : "") + "\n                                                                  ")])]) : _vm._e()]], 2), _vm._v(" "), ["Partiellement payé", "Totalement payé"].includes(planification.resultats) ? _c("tr", [_c("td", {
        staticClass: "fw-bold"
      }, [_vm._v("\n                                                              Si " + _vm._s(planification.resultats) + "\n                                                            ")]), _vm._v(" "), _c("td", [_vm._v("\n                                                              " + _vm._s(_vm._f("formatNumber")(planification.montant_paye)) + "\n                                                            ")]), _vm._v(" "), _c("td", {
        staticClass: "fw-bold"
      }, [_vm._v("\n                                                              Montant payé\n                                                            ")]), _vm._v(" "), _c("td", [_vm._v("\n                                                              " + _vm._s((_planification$modes_ = planification.modes_paiements) !== null && _planification$modes_ !== void 0 ? _planification$modes_ : "") + "\n                                                            ")])]) : _vm._e(), _vm._v(" "), ["Engagement pris"].includes(planification.resultats) ? _c("tr", [_c("td", {
        attrs: {
          colspan: "4"
        }
      }, [_c("div", {
        staticClass: "table-responsive mb-1"
      }, [_c("table", {
        staticClass: "table table-bordered"
      }, [_vm._m(3, true), _vm._v(" "), _c("tbody", _vm._l(planification.promesses, function (pro, ind_pro) {
        var _pro$promesseTenu;
        return _c("tr", {
          key: "promesses" + ind_pro
        }, [_c("td", [_vm._v(_vm._s(pro.montant))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.formatDate(pro.echeance)))]), _vm._v(" "), _c("td", {
          attrs: {
            colspan: "1"
          },
          domProps: {
            innerHTML: _vm._s(pro.commentaire)
          }
        }), _vm._v(" "), _c("td", [_vm._v(_vm._s(["true", "oui"].includes(String((_pro$promesseTenu = pro.promesseTenu) !== null && _pro$promesseTenu !== void 0 ? _pro$promesseTenu : pro.prommesseTenu).trim().toLowerCase()) ? "Oui" : "Non"))])]);
      }), 0)])])])]) : _vm._e(), _vm._v(" "), ["Chèque", "Mobile Money"].includes(planification.modes_paiements) ? _c("tr", [_c("td", {
        staticClass: "fw-bold"
      }, [_vm._v("\n                                                              Mode paiement\n                                                            ")]), _vm._v(" "), _c("td", [_vm._v("\n                                                              " + _vm._s(planification.numero_cheque_telephone) + "\n                                                            ")]), _vm._v(" "), _c("td", {
        staticClass: "fw-bold"
      }, [_vm._v("\n                                                              Montant payé\n                                                            ")]), _vm._v(" "), _c("td", [_vm._v("\n                                                              " + _vm._s((_planification$modes_2 = planification.modes_paiements) !== null && _planification$modes_2 !== void 0 ? _planification$modes_2 : "") + "\n                                                            ")])]) : _vm._e()], 2)])])])])]) : _vm._e()]);
    })], 2)])])]) : _c("div", {
      key: index,
      staticClass: "card-body"
    }, [_c("div", {
      staticClass: "relook-header",
      on: {
        click: function click($event) {
          return _vm.setCurrentSeen(index);
        }
      }
    }, [_c("div", {
      staticClass: "header-content",
      staticStyle: {
        display: "flex",
        "justify-content": "space-between",
        "align-items": "center"
      }
    }, [_c("h6", {
      attrs: {
        id: "rapport_de_visite" + (index + 1)
      }
    }, [_vm._v("\n                                            Rapport de visite ("), _c("small", [_vm._v(_vm._s((_planification$type2 = planification.type) !== null && _planification$type2 !== void 0 ? _planification$type2 : "Cautions"))]), _vm._v(") " + _vm._s(index + 1) + "\n                                        ")]), _vm._v(" "), _c("small", {
      staticStyle: {
        margin: "0"
      }
    }, [_vm._v("\n                                            Jour(s) de retard :\n                                            "), _c("span", {
      staticClass: "seuil"
    }, [_vm._v(_vm._s((_Math$floor2 = Math.floor(planification.par)) !== null && _Math$floor2 !== void 0 ? _Math$floor2 : ""))])]), _vm._v(" "), _c("small", {
      staticStyle: {
        margin: "0"
      }
    }, [_vm._v("\n                                        Etabli par: " + _vm._s(_vm.textTruncate((_planification$user_i3 = planification.user_infos) === null || _planification$user_i3 === void 0 ? void 0 : _planification$user_i3.name) + "(" + _vm.textTruncate((_planification$user_i4 = planification.user_infos) === null || _planification$user_i4 === void 0 ? void 0 : _planification$user_i4.role_sigle) + ")") + "\n                                    ")]), _vm._v(" "), _c("div", {
      staticClass: "row"
    }, [_c("div", {
      staticClass: "col",
      staticStyle: {
        "float": "left"
      }
    }, [_c("small", {
      staticStyle: {
        margin: "0"
      }
    }, [_vm._v("\n                                                    le :\n                                                    " + _vm._s((_planification$date_p2 = planification.date_planification) !== null && _planification$date_p2 !== void 0 ? _planification$date_p2 : "#NA") + "\n                                                ")])])]), _vm._v(" "), _c("chevron-down-icon", {
      staticClass: "custom-class",
      staticStyle: {
        "float": "right",
        cursor: "pointer"
      },
      attrs: {
        size: "21"
      }
    })], 1)])])]);
  })], 2)])]) : _vm._e()])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", {
    staticClass: "text-center"
  }, [_c("th", [_c("label", [_vm._v("NATURE DE\n                                                        DOCUMENTS")])]), _vm._v(" "), _c("th", [_c("label", [_vm._v("OUI ")])]), _vm._v(" "), _c("th", [_c("label", [_vm._v("NON ")])]), _vm._v(" "), _c("th", [_c("label", [_vm._v("NON\n                                                        APPLICABLE")])]), _vm._v(" "), _c("th", [_c("label", [_vm._v("\n                                                        FICHIER\n                                                        ATTACHE")])]), _vm._v(" "), _c("th", [_c("label", [_vm._v("COMMENTAIRE")])])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("tr", [_c("td", {
    staticClass: "text-center",
    staticStyle: {
      "font-weight": "600"
    },
    attrs: {
      colspan: "4"
    }
  }, [_vm._v("Observation")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("tr", [_c("td", {
    staticStyle: {
      "font-weight": "600"
    },
    attrs: {
      colspan: "4"
    }
  }, [_vm._v("Motif de l'impayé")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("th", {
    staticClass: "col-12 text-center py-2 m-0",
    attrs: {
      colspan: "4"
    }
  }, [_vm._v("\n                                                                                Promesses\n                                                                            ")])]), _vm._v(" "), _c("tr", {
    staticClass: "text-center"
  }, [_c("th", [_c("label", [_vm._v("MONTANT ")])]), _vm._v(" "), _c("th", [_c("label", [_vm._v("ECHEANCE ")])]), _vm._v(" "), _c("th", [_c("label", [_vm._v("COMMENTAIRE ")])]), _vm._v(" "), _c("th", [_c("label", [_vm._v("PROMESSE TENU ? ")])])])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/microfinance/cofina/recoveryiq/FR5.vue?vue&type=style&index=0&id=2069fdde&lang=css&scoped=true":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/microfinance/cofina/recoveryiq/FR5.vue?vue&type=style&index=0&id=2069fdde&lang=css&scoped=true ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.bg-grey[data-v-2069fdde] {\n  background-color: #f4f3f3;\n}\nth[data-v-2069fdde] {\n  background: #f4f3f3;\n}\n.head-memorandum-title[data-v-2069fdde] {\n  margin-top: 15px;\n  padding: 16px;\n  color: #fff;\n  font-weight: bold;\n  background-color: #34495e;\n  border: 2px solid #575759;\n  box-shadow: 1px 3px 4px #ddd;\n  font-size: 16px;\n  text-align: center;\n  text-transform: uppercase;\n  border-radius: 10px;\n  margin-bottom: 15px;\n}\n.relook-header[data-v-2069fdde] {\n  color: #000;\n  background-color: #f4f3f3;\n  padding: 5px;\n  border-bottom: 1px solid #b6b8bb;\n}\n.bg-relooker[data-v-2069fdde] {\n  background-color: #2c3e50;\n  color: white;\n}\n.seuil[data-v-2069fdde] {\n  color: #fd7e14;\n  font-weight: 600 !important;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/microfinance/cofina/recoveryiq/FR5.vue?vue&type=style&index=0&id=2069fdde&lang=css&scoped=true":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/microfinance/cofina/recoveryiq/FR5.vue?vue&type=style&index=0&id=2069fdde&lang=css&scoped=true ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FR5_vue_vue_type_style_index_0_id_2069fdde_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FR5.vue?vue&type=style&index=0&id=2069fdde&lang=css&scoped=true */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/microfinance/cofina/recoveryiq/FR5.vue?vue&type=style&index=0&id=2069fdde&lang=css&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FR5_vue_vue_type_style_index_0_id_2069fdde_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FR5_vue_vue_type_style_index_0_id_2069fdde_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/offview/microfinance/cofina/recoveryiq/FR5.vue":
/*!********************************************************************************!*\
  !*** ./resources/js/components/offview/microfinance/cofina/recoveryiq/FR5.vue ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _FR5_vue_vue_type_template_id_2069fdde_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FR5.vue?vue&type=template&id=2069fdde&scoped=true */ "./resources/js/components/offview/microfinance/cofina/recoveryiq/FR5.vue?vue&type=template&id=2069fdde&scoped=true");
/* harmony import */ var _FR5_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FR5.vue?vue&type=script&lang=js */ "./resources/js/components/offview/microfinance/cofina/recoveryiq/FR5.vue?vue&type=script&lang=js");
/* harmony import */ var _FR5_vue_vue_type_style_index_0_id_2069fdde_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FR5.vue?vue&type=style&index=0&id=2069fdde&lang=css&scoped=true */ "./resources/js/components/offview/microfinance/cofina/recoveryiq/FR5.vue?vue&type=style&index=0&id=2069fdde&lang=css&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _FR5_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _FR5_vue_vue_type_template_id_2069fdde_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _FR5_vue_vue_type_template_id_2069fdde_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "2069fdde",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/offview/microfinance/cofina/recoveryiq/FR5.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/offview/microfinance/cofina/recoveryiq/FR5.vue?vue&type=script&lang=js":
/*!********************************************************************************************************!*\
  !*** ./resources/js/components/offview/microfinance/cofina/recoveryiq/FR5.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FR5_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FR5.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/microfinance/cofina/recoveryiq/FR5.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FR5_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/offview/microfinance/cofina/recoveryiq/FR5.vue?vue&type=style&index=0&id=2069fdde&lang=css&scoped=true":
/*!****************************************************************************************************************************************!*\
  !*** ./resources/js/components/offview/microfinance/cofina/recoveryiq/FR5.vue?vue&type=style&index=0&id=2069fdde&lang=css&scoped=true ***!
  \****************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FR5_vue_vue_type_style_index_0_id_2069fdde_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FR5.vue?vue&type=style&index=0&id=2069fdde&lang=css&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/microfinance/cofina/recoveryiq/FR5.vue?vue&type=style&index=0&id=2069fdde&lang=css&scoped=true");


/***/ }),

/***/ "./resources/js/components/offview/microfinance/cofina/recoveryiq/FR5.vue?vue&type=template&id=2069fdde&scoped=true":
/*!**************************************************************************************************************************!*\
  !*** ./resources/js/components/offview/microfinance/cofina/recoveryiq/FR5.vue?vue&type=template&id=2069fdde&scoped=true ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FR5_vue_vue_type_template_id_2069fdde_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FR5_vue_vue_type_template_id_2069fdde_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FR5_vue_vue_type_template_id_2069fdde_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FR5.vue?vue&type=template&id=2069fdde&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/microfinance/cofina/recoveryiq/FR5.vue?vue&type=template&id=2069fdde&scoped=true");


/***/ })

}]);