"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_contreanalyse_nsia_filiale_dc_DC-NOAC3_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/dc/DC-NOAC3.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/dc/DC-NOAC3.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");
/* harmony import */ var _shared_ContextMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/ContextMenu */ "./resources/js/components/shared/ContextMenu.vue");
/* harmony import */ var _shared_ContextMenuItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/ContextMenuItem */ "./resources/js/components/shared/ContextMenuItem.vue");
/* harmony import */ var _services_ebapis_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../services/ebapis.service */ "./resources/js/services/ebapis.service.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../services/auth.service */ "./resources/js/services/auth.service.js");
/* harmony import */ var _services_credit_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../services/credit.service */ "./resources/js/services/credit.service.js");
/* harmony import */ var _helpers_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../helpers/helper */ "./resources/js/helpers/helper.js");







window.$ = window.jQuery = __webpack_require__(/*! jquery/dist/jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Resume_de_l_analyse_environnementale_et_sociale_ES",
  display: "Résumé de l'analyse environnementale et sociale(ES)",
  components: {
    PlusIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_6__.PlusIcon,
    TrashIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_6__.TrashIcon,
    MoreVerticalIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_6__.MoreVerticalIcon,
    ChevronUpIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_6__.ChevronUpIcon,
    ChevronDownIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_6__.ChevronDownIcon,
    ContextMenu: _shared_ContextMenu__WEBPACK_IMPORTED_MODULE_0__["default"],
    ContextMenuItem: _shared_ContextMenuItem__WEBPACK_IMPORTED_MODULE_1__["default"],
    AirplayIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_6__.AirplayIcon
  },
  props: {
    meta_data: Object,
    tb_name: String,
    tb_display_name: String
  },
  created: function created() {},
  mounted: function mounted() {
    this.loadRetrieved();
  },
  data: function data() {
    var _this$meta_data$dossi, _this$meta_data$dossi2, _this$meta_data$dossi3;
    var vm = this;
    return {
      ebapisHost: _services_ebapis_service__WEBPACK_IMPORTED_MODULE_2__["default"].host,
      authcheck: false,
      authcheckUsr: null,
      authcheckStatus: null,
      dossier_credit: null,
      watchInPause: false,
      initLoad: true,
      seen: true,
      seen1: true,
      listingNote: false,
      contextList: [{
        title: "Commenter",
        icon: "icofont icofont-comment",
        handler: function () {
          this.openNotesModal();
        }.bind(vm),
        disabled: false
      }, {
        title: "Assigner",
        icon: "icofont icofont-check",
        handler: function handler() {},
        disabled: true
      }, {
        title: "Supprimer",
        icon: "icofont icofont-trash",
        handler: this.startDeletingTbFromContext,
        disabled: false
      }],
      meta_parseable: {
        cred_pub_key: this.meta_data["cred_pub_key"],
        tb_name: this.tb_name
      },
      formDataToBeWatched: {
        notes: []
        // commentaires_raes: "",
      },
      cred0: (_this$meta_data$dossi = this.meta_data.dossier_credit) === null || _this$meta_data$dossi === void 0 ? void 0 : _this$meta_data$dossi.cred_pub_tb_00,
      cred1: (_this$meta_data$dossi2 = this.meta_data.dossier_credit) === null || _this$meta_data$dossi2 === void 0 ? void 0 : _this$meta_data$dossi2.cred_pub_tb_1,
      credtb22005: (_this$meta_data$dossi3 = this.meta_data.dossier_credit) === null || _this$meta_data$dossi3 === void 0 ? void 0 : _this$meta_data$dossi3.cred_pub_tb_22005,
      cotation_risque_es: "",
      note_risque_es: [{
        note: "A",
        risque: "Risques elevés"
      }, {
        note: "B-",
        risque: "Risques moyen"
      }, {
        note: "B+",
        risque: "Risques moyen (Nécessitant vigilance)"
      }, {
        note: "C",
        risque: "Risques faible"
      }]
    };
  },
  methods: {
    formDataVars: function formDataVars(event) {
      this.formDataToBeWatched[event[0]] = event[1];
    },
    formatAmount: function formatAmount(x) {
      return x === null || x === void 0 ? void 0 : x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    },
    tableClosedOrOpened: function tableClosedOrOpened() {
      this.seen = this.fetchClosedTables(this.tb_name + this.meta_data["cred_pub_key"]);
    },
    openNotesModal: function openNotesModal() {
      var listing = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      this.listingNote = listing;
      this.$modal.show(this.tb_name);
    },
    loadRetrieved: function loadRetrieved() {
      var _this$meta_data$dossi4,
        _this = this;
      var lentb = this.meta_data["dossier_credit"]["tbs_in_use"];
      var createdKey = this.tb_name;
      var createdKeyArr = createdKey.split("tb");
      createdKey = "cred_pub_tb_" + createdKeyArr[1];

      // Close table by default
      this.defaultRetract(false, (_this$meta_data$dossi4 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi4 === void 0 ? void 0 : _this$meta_data$dossi4.applied_templ_id);
      if (lentb.length > 0) {
        if (this.meta_data["dossier_credit"][createdKey] != undefined) {
          this.formDataToBeWatched = this.meta_data["dossier_credit"][createdKey];
        }
      }
      this.cotation_risque_es = this.note_risque_es.filter(function (item, index) {
        var _this$meta_data;
        return item.note === ((_this$meta_data = _this.meta_data) === null || _this$meta_data === void 0 || (_this$meta_data = _this$meta_data.dossier_credit) === null || _this$meta_data === void 0 || (_this$meta_data = _this$meta_data.cred_pub_tb_5001) === null || _this$meta_data === void 0 ? void 0 : _this$meta_data.risque_note);
      })[0]["note"] + " ( " + this.note_risque_es.filter(function (item, index) {
        var _this$meta_data2;
        return item.note === ((_this$meta_data2 = _this.meta_data) === null || _this$meta_data2 === void 0 || (_this$meta_data2 = _this$meta_data2.dossier_credit) === null || _this$meta_data2 === void 0 || (_this$meta_data2 = _this$meta_data2.cred_pub_tb_5001) === null || _this$meta_data2 === void 0 ? void 0 : _this$meta_data2.risque_note);
      })[0]["risque"] + " )";
    },
    launchAutoSaver: function launchAutoSaver() {
      var _this2 = this;
      _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["default"].loadUserData().then(function (res) {
        _this2.send2Backend(res, 0, 0);
      })["catch"](function (err) {
        _this2.loadWithError(err);
      });
    },
    somX3: function somX3(ob, key) {
      if (!ob || !key) return 0;
      var som = 0;
      ob.filter(function (elm) {
        var _elm$key;
        som += parseInt((_elm$key = elm[key]) === null || _elm$key === void 0 ? void 0 : _elm$key.toString().replace(/\s/g, ""));
      });
      if (isNaN(som)) {
        return 0;
      }
      return som;
    },
    loadTbAttrs: function loadTbAttrs() {
      var l = [];
      var topdivel = this.$refs.topdiv;
      // let k = document.querySelectorAll('.subdiv')
      var k = document.querySelectorAll(".subdiv" + this.tb_name);
      if ((k === null || k === void 0 ? void 0 : k.length) > 0) {
        k.forEach(function (e) {
          l.push(e.innerText);
        });
      }
      var p = {
        name_of_title: topdivel.innerText,
        list_of_content: l,
        id: "f26-head"
      };
      this.$emit("load-buffer", p);
    },
    retract: function retract() {
      this.seen = !this.seen;
      var a = {
        tb_name: this.tb_name + this.meta_data["cred_pub_key"],
        status: this.seen
      };
      EventBus.$emit("savedclosed-table", a);
    },
    setTbVal: function setTbVal(val) {
      this.cred_pub_key = val;
    },
    loadWithError: function loadWithError(err) {
      // // window.location.href = "/login";
    },
    send2Backend: function send2Backend(res, newVal, oldVal) {
      this.authcheck = true;
      this.authcheckUsr = res.data;
      this.authcheckStatus = res.status;
      if (this.authcheckStatus === 401) {
        // // window.location.href = "/login";
      }
      if (this.authcheck === true) {
        this.$emit("autosaving");
        this.$axios.post(this.ebapisHost + "creditbuilder/api/v1/autosaving/", {
          user: this.authcheckUsr,
          meta_parseable: this.meta_parseable,
          filledData: newVal,
          loadDossier: true
        }).then(function (response) {
          this.$emit("autosaving");
          // this.$Progress.finish();
          // console.log(response);
          var tbFetcheData = response.data;
          if (tbFetcheData["is_success"] === true) {
            // this.dossier_credit =
            //     tbFetcheData["dossier_credit"];

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
    // add defaultRetract
    defaultRetract: function defaultRetract(rc, ra) {
      if (ra != null) {
        this.seen = rc;
        var a = {
          tb_name: this.tb_name + this.meta_data["cred_pub_key"],
          status: this.seen
        };
        EventBus.$emit("savedclosed-table", a);
      }
    },
    retract1: function retract1() {
      this.seen1 = !this.seen1;
    },
    deleteTB: function deleteTB() {
      if (confirm("Êtes-vous sûr de vouloir supprimer ce tableau ?")) {
        this.$emit("delete-tb", {
          tb_name: this.tb_name
        });
      }
    }
  },
  watch: {
    formDataToBeWatched: {
      handler: function handler(newVal, oldVal) {
        this.autosaving(newVal, oldVal);
      },
      deep: true,
      immediate: true
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/dc/DC-NOAC3.vue?vue&type=template&id=4681c8d7&scoped=true":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/dc/DC-NOAC3.vue?vue&type=template&id=4681c8d7&scoped=true ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm$formDataToBeWatch, _vm$formDataToBeWatch2, _vm$cred, _vm$cred2, _vm$credtb, _vm$formDataToBeWatch3, _vm$formDataToBeWatch4;
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    on: {
      contextmenu: function contextmenu($event) {
        return _vm.$refs.menu.open($event, _vm.tb_name);
      }
    }
  }, [_c("div", {
    staticClass: "row bg-light card-width-height"
  }, [_c("ContextMenu", {
    ref: "menu",
    attrs: {
      id: _vm.tb_name,
      cred_pub_key: _vm.meta_parseable.cred_pub_key,
      tb_name: _vm.tb_name,
      contextList: _vm.contextList
    }
  }), _vm._v(" "), _vm.seen === true ? _c("div", {
    staticClass: "card card-width-height"
  }, [_c("br"), _vm._v(" "), _c("div", {
    staticClass: "card-header hdc pb-0 pt-2"
  }, [_c("h6", {
    ref: "topdiv",
    staticClass: "head",
    attrs: {
      id: "f26-head"
    }
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col"
  }, [_vm._v("\n                            " + _vm._s(_vm.tb_display_name) + " : Résumé de l'analyse\n                            environnementale et sociale(ES)\n                        ")]), _vm._v(" "), _c("div", {
    staticClass: "col-auto"
  }, [((_vm$formDataToBeWatch = _vm.formDataToBeWatched.notes) === null || _vm$formDataToBeWatch === void 0 ? void 0 : _vm$formDataToBeWatch.length) > 0 ? _c("div", {
    staticStyle: {
      display: "inline-block",
      position: "relative"
    }
  }, [_c("span", {
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.openNotesModal(true);
      }
    }
  }, [_c("i", {
    staticClass: "icofont icofont-comment text-white px-2",
    staticStyle: {
      "font-size": "12px"
    },
    attrs: {
      role: "button"
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "badge-sm pb-3"
  }, [_c("span", [_vm._v("\n                                            " + _vm._s((_vm$formDataToBeWatch2 = _vm.formDataToBeWatched.notes) === null || _vm$formDataToBeWatch2 === void 0 ? void 0 : _vm$formDataToBeWatch2.length) + "\n                                        ")])])])]) : _vm._e(), _vm._v(" "), _c("airplay-icon", {
    staticClass: "custom-class mt-1",
    staticStyle: {
      cursor: "pointer",
      margin: "0 5px"
    },
    attrs: {
      size: "0.7x",
      title: "exemple"
    },
    on: {
      click: function click($event) {
        return _vm.$modal.show("verifications_prealables");
      }
    }
  }), _vm._v(" "), _c("chevron-up-icon", {
    staticClass: "custom-class",
    staticStyle: {
      cursor: "pointer"
    },
    attrs: {
      size: "21"
    },
    on: {
      click: function click($event) {
        return _vm.retract();
      }
    }
  })], 1)])])]), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table mt-2 table-bordered"
  }, [_c("thead", [_c("tr", [_c("td", {
    attrs: {
      colspan: "6"
    }
  }, [_c("div", {
    staticClass: "p-1 mb-2"
  }, [_c("span", {
    staticClass: "fw-bold"
  }, [_vm._v("Secteur d’activité : ")]), _vm._v(_vm._s((_vm$cred = _vm.cred0) === null || _vm$cred === void 0 ? void 0 : _vm$cred.secteur_activite) + "\n                                    ")]), _vm._v(" "), _c("div", {
    staticClass: "p-1 d-flex"
  }, [_c("span", {
    staticClass: "fw-bold"
  }, [_vm._v("Destination du financement : ")]), _vm._v(" "), _c("span", {
    domProps: {
      innerHTML: _vm._s((_vm$cred2 = _vm.cred1) === null || _vm$cred2 === void 0 ? void 0 : _vm$cred2.objet_demande)
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "p-1"
  }, [_c("span", {
    staticClass: "fw-bold"
  }, [_vm._v("Cotation E&S / Niveau de risque : ")]), _vm._v(" " + _vm._s(_vm.cotation_risque_es) + "\n                                    ")])])]), _vm._v(" "), _vm._m(0)]), _vm._v(" "), _c("tbody", [_vm._l((_vm$credtb = _vm.credtb22005) === null || _vm$credtb === void 0 ? void 0 : _vm$credtb.norme_performances, function (norme, index) {
    return [_c("tr", {
      key: norme.id
    }, [_c("th", {
      staticClass: "fw-bold text-center th"
    }, [_vm._v("\n                                        " + _vm._s(index + 1) + "\n                                    ")]), _vm._v(" "), _c("td", {
      staticClass: "th",
      attrs: {
        colspan: "5"
      }
    }, [_c("textarea", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: norme.libelle,
        expression: "norme.libelle"
      }],
      staticClass: "form-control",
      attrs: {
        disabled: ""
      },
      domProps: {
        value: norme.libelle
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(norme, "libelle", $event.target.value);
        }
      }
    })])]), _vm._v(" "), _vm._l(norme === null || norme === void 0 ? void 0 : norme.contents, function (content, ind) {
      return _c("tr", [_c("td", {
        staticClass: "fw-bold text-center"
      }, [_vm._v("\n                                        " + _vm._s(index + 1) + "." + _vm._s(ind + 1) + "\n                                    ")]), _vm._v(" "), _c("td", {
        staticStyle: {
          "min-width": "200px"
        }
      }, [_c("textarea", {
        directives: [{
          name: "model",
          rawName: "v-model",
          value: content.exigence,
          expression: "content.exigence"
        }],
        staticClass: "form-control textarea-g",
        staticStyle: {
          height: "80px"
        },
        attrs: {
          disabled: ""
        },
        domProps: {
          value: content.exigence
        },
        on: {
          input: function input($event) {
            if ($event.target.composing) return;
            _vm.$set(content, "exigence", $event.target.value);
          }
        }
      })]), _vm._v(" "), _c("td", {
        staticStyle: {
          "min-width": "200px"
        }
      }, [_c("textarea", {
        directives: [{
          name: "model",
          rawName: "v-model",
          value: content.risque,
          expression: "content.risque"
        }],
        staticClass: "form-control textarea-g",
        staticStyle: {
          height: "80px"
        },
        attrs: {
          disabled: ""
        },
        domProps: {
          value: content.risque
        },
        on: {
          input: function input($event) {
            if ($event.target.composing) return;
            _vm.$set(content, "risque", $event.target.value);
          }
        }
      })]), _vm._v(" "), _c("td", {
        staticStyle: {
          "min-width": "200px"
        }
      }, [_c("textarea", {
        directives: [{
          name: "model",
          rawName: "v-model",
          value: content.action_corrective,
          expression: "\n                                                content.action_corrective\n                                            "
        }],
        staticClass: "form-control textarea-g",
        staticStyle: {
          height: "80px"
        },
        attrs: {
          disabled: ""
        },
        domProps: {
          value: content.action_corrective
        },
        on: {
          input: function input($event) {
            if ($event.target.composing) return;
            _vm.$set(content, "action_corrective", $event.target.value);
          }
        }
      })]), _vm._v(" "), _c("td", {
        staticStyle: {
          "min-width": "200px"
        }
      }, [_c("textarea", {
        directives: [{
          name: "model",
          rawName: "v-model",
          value: content.delai,
          expression: "content.delai"
        }],
        staticClass: "form-control textarea-g",
        staticStyle: {
          height: "80px"
        },
        attrs: {
          disabled: ""
        },
        domProps: {
          value: content.delai
        },
        on: {
          input: function input($event) {
            if ($event.target.composing) return;
            _vm.$set(content, "delai", $event.target.value);
          }
        }
      })]), _vm._v(" "), _c("td", {
        staticStyle: {
          "min-width": "200px"
        }
      }, [_c("textarea", {
        directives: [{
          name: "model",
          rawName: "v-model",
          value: content.livrable,
          expression: "content.livrable"
        }],
        staticClass: "form-control textarea-g",
        staticStyle: {
          height: "80px"
        },
        attrs: {
          disabled: ""
        },
        domProps: {
          value: content.livrable
        },
        on: {
          input: function input($event) {
            if ($event.target.composing) return;
            _vm.$set(content, "livrable", $event.target.value);
          }
        }
      })])]);
    })];
  })], 2)])]), _vm._v(" "), _c("div", {
    staticClass: "text-right mt-3 mb-2"
  }, [_c("button", {
    staticClass: "btn shadow-md text-white",
    staticStyle: {
      cursor: "pointer",
      background: "#2c3e50"
    },
    attrs: {
      type: "button",
      name: "button"
    },
    on: {
      click: function click($event) {
        return _vm.retract();
      }
    }
  }, [_vm._v("\n                        Fermer le tableau\n                    ")])])])]) : _c("div", {
    staticClass: "card card-width-height"
  }, [_c("br"), _vm._v(" "), _c("div", {
    staticClass: "card-header hdc pb-0 pt-2"
  }, [_c("h6", {
    staticClass: "head",
    attrs: {
      id: "f26-head"
    }
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col"
  }, [_vm._v("\n                            " + _vm._s(_vm.tb_display_name) + " : Résumé de l'analyse\n                            environnementale et sociale(ES)\n                        ")]), _vm._v(" "), _c("div", {
    staticClass: "col-auto"
  }, [((_vm$formDataToBeWatch3 = _vm.formDataToBeWatched.notes) === null || _vm$formDataToBeWatch3 === void 0 ? void 0 : _vm$formDataToBeWatch3.length) > 0 ? _c("div", {
    staticStyle: {
      display: "inline-block",
      position: "relative"
    }
  }, [_c("span", {
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.openNotesModal(true);
      }
    }
  }, [_c("i", {
    staticClass: "icofont icofont-comment text-white px-2",
    staticStyle: {
      "font-size": "12px"
    },
    attrs: {
      role: "button"
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "badge-sm pb-3"
  }, [_c("span", [_vm._v("\n                                            " + _vm._s((_vm$formDataToBeWatch4 = _vm.formDataToBeWatched.notes) === null || _vm$formDataToBeWatch4 === void 0 ? void 0 : _vm$formDataToBeWatch4.length) + "\n                                        ")])])])]) : _vm._e(), _vm._v(" "), _c("airplay-icon", {
    staticClass: "custom-class mt-1",
    staticStyle: {
      cursor: "pointer",
      margin: "0 5px"
    },
    attrs: {
      size: "0.7x",
      title: "exemple"
    },
    on: {
      click: function click($event) {
        return _vm.$modal.show("verifications_prealables");
      }
    }
  }), _vm._v(" "), _c("chevron-down-icon", {
    staticClass: "custom-class",
    staticStyle: {
      cursor: "pointer"
    },
    attrs: {
      size: "21"
    },
    on: {
      click: function click($event) {
        return _vm.retract();
      }
    }
  })], 1)])])])])], 1), _vm._v(" "), _c("note-modal", {
    attrs: {
      name: _vm.tb_name,
      listingNote: _vm.listingNote,
      notes: _vm.formDataToBeWatched.notes
    },
    on: {
      close: function close($event) {
        return _vm.$modal.hide(_vm.tb_name);
      },
      addNote: function addNote($event) {
        return _vm.formDataToBeWatched.notes.unshift($event);
      }
    },
    model: {
      value: _vm.formDataToBeWatched.notes,
      callback: function callback($$v) {
        _vm.$set(_vm.formDataToBeWatched, "notes", $$v);
      },
      expression: "formDataToBeWatched.notes"
    }
  })], 1);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("tr", [_c("td", {
    staticClass: "text-center vertical-middle fw-bold th"
  }, [_vm._v("N°")]), _vm._v(" "), _c("td", {
    staticClass: "text-center vertical-middle fw-bold th col-3"
  }, [_vm._v("\n                                    Exigence des normes de performance de la SFI\n                                ")]), _vm._v(" "), _c("td", {
    staticClass: "text-center vertical-middle fw-bold th col-3"
  }, [_vm._v("\n                                    Risques\n                                ")]), _vm._v(" "), _c("td", {
    staticClass: "text-center vertical-middle fw-bold th col-2"
  }, [_vm._v("\n                                    Actions correctives\n                                ")]), _vm._v(" "), _c("td", {
    staticClass: "text-center vertical-middle fw-bold th col-2"
  }, [_vm._v("\n                                    Délais\n                                ")]), _vm._v(" "), _c("td", {
    staticClass: "text-center vertical-middle fw-bold th col-2"
  }, [_vm._v("\n                                    Livrables\n                                ")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/dc/DC-NOAC3.vue?vue&type=style&index=0&id=4681c8d7&lang=css&scoped=true":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/dc/DC-NOAC3.vue?vue&type=style&index=0&id=4681c8d7&lang=css&scoped=true ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n*[data-v-4681c8d7] {\r\n    font-family: \"Google sans\";\n}\nselect[data-v-4681c8d7] {\r\n    min-width: 120px;\n}\nlabel[data-v-4681c8d7] {\r\n    font-size: 13px;\n}\ninput[data-v-4681c8d7],\r\ntextarea[data-v-4681c8d7],\r\nselect[data-v-4681c8d7] {\r\n    height: 35px;\r\n    border-color: #34495e;\r\n    color: #57606f;\r\n    font-size: 13px;\r\n    font-weight: bold;\n}\n.card-width-height[data-v-4681c8d7] {\r\n    width: 100%;\r\n    height: 100%;\n}\n.head[data-v-4681c8d7] {\r\n    color: #f1f2f6;\r\n    font-size: 22px;\n}\n.hdc[data-v-4681c8d7] {\r\n    background-color: #57606f;\n}\n.card-width-height[data-v-4681c8d7] {\r\n    width: 100%;\r\n    height: 100%;\n}\n.head[data-v-4681c8d7] {\r\n    color: #f1f2f6;\r\n    font-size: 22px;\n}\ninput[type=\"text\"][data-v-4681c8d7],\r\nselect input[type=\"date\"][data-v-4681c8d7] {\r\n    min-width: 120px;\n}\n.engagement input[type=\"text\"][data-v-4681c8d7],\r\ninput[type=\"date\"][data-v-4681c8d7] {\r\n    width: 100% !important;\n}\n.th[data-v-4681c8d7] {\r\n    padding: 4px;\r\n    padding-bottom: 0px;\n}\n.badge-sm[data-v-4681c8d7] {\r\n    display: inline-block;\r\n    width: 15px;\r\n    height: 15px;\r\n    background: rgba(255, 0, 0, 0.882);\r\n    color: white;\r\n    font-size: 12px;\r\n    font-weight: 500;\r\n    border-radius: 100%;\r\n    position: absolute;\r\n    top: -20%;\r\n    left: 55%;\r\n    text-align: center;\n}\n.relook-header[data-v-4681c8d7] {\r\n    color: #000;\r\n    background-color: #f4f3f3;\r\n    padding: 5px;\r\n    border-bottom: 1px solid #b6b8bb;\n}\ninput.input-box[data-v-4681c8d7] {\r\n    background: #00ffff21;\r\n    color: #000;\n}\ntextarea.input-box[data-v-4681c8d7] {\r\n    background: #00ffff21;\r\n    color: #000;\n}\n.bg-card-ana[data-v-4681c8d7] {\r\n    background-color: rgb(205, 225, 231);\n}\n.equipe[data-v-4681c8d7] {\r\n    background: #00ffff21;\r\n    color: #000;\n}\n.recall-data[data-v-4681c8d7] {\r\n    background: #00ffff21;\r\n    color: #000;\n}\n.rg-margin[data-v-4681c8d7] {\r\n    margin-left: 25px;\n}\n.r-vertical-align[data-v-4681c8d7] {\r\n    position: relative;\r\n    top: 2px;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/dc/DC-NOAC3.vue?vue&type=style&index=0&id=4681c8d7&lang=css&scoped=true":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/dc/DC-NOAC3.vue?vue&type=style&index=0&id=4681c8d7&lang=css&scoped=true ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DC_NOAC3_vue_vue_type_style_index_0_id_4681c8d7_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DC-NOAC3.vue?vue&type=style&index=0&id=4681c8d7&lang=css&scoped=true */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/dc/DC-NOAC3.vue?vue&type=style&index=0&id=4681c8d7&lang=css&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DC_NOAC3_vue_vue_type_style_index_0_id_4681c8d7_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DC_NOAC3_vue_vue_type_style_index_0_id_4681c8d7_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/contreanalyse/nsia/filiale/dc/DC-NOAC3.vue":
/*!****************************************************************************!*\
  !*** ./resources/js/components/contreanalyse/nsia/filiale/dc/DC-NOAC3.vue ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DC_NOAC3_vue_vue_type_template_id_4681c8d7_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DC-NOAC3.vue?vue&type=template&id=4681c8d7&scoped=true */ "./resources/js/components/contreanalyse/nsia/filiale/dc/DC-NOAC3.vue?vue&type=template&id=4681c8d7&scoped=true");
/* harmony import */ var _DC_NOAC3_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DC-NOAC3.vue?vue&type=script&lang=js */ "./resources/js/components/contreanalyse/nsia/filiale/dc/DC-NOAC3.vue?vue&type=script&lang=js");
/* harmony import */ var _DC_NOAC3_vue_vue_type_style_index_0_id_4681c8d7_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DC-NOAC3.vue?vue&type=style&index=0&id=4681c8d7&lang=css&scoped=true */ "./resources/js/components/contreanalyse/nsia/filiale/dc/DC-NOAC3.vue?vue&type=style&index=0&id=4681c8d7&lang=css&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _DC_NOAC3_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _DC_NOAC3_vue_vue_type_template_id_4681c8d7_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _DC_NOAC3_vue_vue_type_template_id_4681c8d7_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "4681c8d7",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/contreanalyse/nsia/filiale/dc/DC-NOAC3.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/contreanalyse/nsia/filiale/dc/DC-NOAC3.vue?vue&type=script&lang=js":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/contreanalyse/nsia/filiale/dc/DC-NOAC3.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DC_NOAC3_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DC-NOAC3.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/dc/DC-NOAC3.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DC_NOAC3_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/contreanalyse/nsia/filiale/dc/DC-NOAC3.vue?vue&type=style&index=0&id=4681c8d7&lang=css&scoped=true":
/*!************************************************************************************************************************************!*\
  !*** ./resources/js/components/contreanalyse/nsia/filiale/dc/DC-NOAC3.vue?vue&type=style&index=0&id=4681c8d7&lang=css&scoped=true ***!
  \************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DC_NOAC3_vue_vue_type_style_index_0_id_4681c8d7_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DC-NOAC3.vue?vue&type=style&index=0&id=4681c8d7&lang=css&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/dc/DC-NOAC3.vue?vue&type=style&index=0&id=4681c8d7&lang=css&scoped=true");


/***/ }),

/***/ "./resources/js/components/contreanalyse/nsia/filiale/dc/DC-NOAC3.vue?vue&type=template&id=4681c8d7&scoped=true":
/*!**********************************************************************************************************************!*\
  !*** ./resources/js/components/contreanalyse/nsia/filiale/dc/DC-NOAC3.vue?vue&type=template&id=4681c8d7&scoped=true ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DC_NOAC3_vue_vue_type_template_id_4681c8d7_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DC_NOAC3_vue_vue_type_template_id_4681c8d7_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DC_NOAC3_vue_vue_type_template_id_4681c8d7_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DC-NOAC3.vue?vue&type=template&id=4681c8d7&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/dc/DC-NOAC3.vue?vue&type=template&id=4681c8d7&scoped=true");


/***/ })

}]);