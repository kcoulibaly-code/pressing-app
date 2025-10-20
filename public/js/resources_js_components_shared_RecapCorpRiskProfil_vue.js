"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_shared_RecapCorpRiskProfil_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/RecapCorpRiskProfil.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/RecapCorpRiskProfil.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_ebapis_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/ebapis.service */ "./resources/js/services/ebapis.service.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "RecapProfilRisque",
  props: {
    dossier_credit: Object,
    authcheckUsr: Object
  },
  components: {},
  data: function data() {
    return {
      grand_risque: "",
      partie_liee: "",
      inhabituel: "",
      credpub0: null,
      credpub1: null,
      ongoingDesc: false,
      checkVerifyCanApprove: false,
      role_uuid: null,
      activeRecapProfil: null,
      ongoingDescDGR: false,
      ebapisHost: _services_ebapis_service__WEBPACK_IMPORTED_MODULE_0__["default"].host,
      selected_path_type: null,
      checkNoteSni: false,
      verifyNoteSni: false,
      compte_contribuable: null,
      sni_details: null,
      score_info: null,
      block_pub: false,
      note_edane: "",
      note_edane_old: "",
      failed_match_sni: null,
      ongoingDescSni: false,
      error_sni: false
    };
  },
  created: function created() {
    var _this = this;
    EventBus.$on('update-sni-callback', function () {
      _this.checkNoteSni = false;
      _this.verifyNoteSni = false;
    });
  },
  mounted: function mounted() {
    this.initData();
  },
  methods: {
    initData: function initData() {
      var _this$dossier_credit, _this$dossier_credit$, _this$dossier_credit2, _this$authcheckUsr, _this$dossier_credit3, _this$dossier_credit4, _this$dossier_credit$2, _this$dossier_credit8, _this$authcheckUsr2, _this$dossier_credit9, _this$dossier_credit$3, _this$dossier_credit0, _this$dossier_credit1, _data_f0$compte_contr, _this$dossier_credit$4, _this$dossier_credit10, _this$dossier_credit$5, _this$dossier_credit11;
      this.ongoingDesc = false;
      this.checkVerifyCanApprove = false;
      EventBus.$emit('value-updated');
      var applied_templ_name = (_this$dossier_credit = this.dossier_credit) === null || _this$dossier_credit === void 0 ? void 0 : _this$dossier_credit.applied_templ_name;
      var type_fiche = (_this$dossier_credit$ = (_this$dossier_credit2 = this.dossier_credit) === null || _this$dossier_credit2 === void 0 || (_this$dossier_credit2 = _this$dossier_credit2.cred_pub_tb_1001) === null || _this$dossier_credit2 === void 0 ? void 0 : _this$dossier_credit2.fiche_a_utilise) !== null && _this$dossier_credit$ !== void 0 ? _this$dossier_credit$ : null;
      var credValByRole = this.determineCredPubTablesFromRole((_this$authcheckUsr = this.authcheckUsr) === null || _this$authcheckUsr === void 0 ? void 0 : _this$authcheckUsr.role_uuid, (_this$dossier_credit3 = this.dossier_credit) === null || _this$dossier_credit3 === void 0 ? void 0 : _this$dossier_credit3.selected_path_type, type_fiche);
      var tbArrays = this.determineCredPubTables(applied_templ_name);
      this.credpub0 = tbArrays[0];
      this.credpub1 = tbArrays[1];
      if (((_this$dossier_credit4 = this.dossier_credit) === null || _this$dossier_credit4 === void 0 ? void 0 : _this$dossier_credit4.selected_path_type) == 'LONG') {
        if (credValByRole.length > 0) {
          var _this$dossier_credit5, _this$dossier_credit6, _this$dossier_credit7;
          this.grand_risque = (_this$dossier_credit5 = this.dossier_credit) === null || _this$dossier_credit5 === void 0 || (_this$dossier_credit5 = _this$dossier_credit5[credValByRole[0]]) === null || _this$dossier_credit5 === void 0 || (_this$dossier_credit5 = _this$dossier_credit5.grand_risque) === null || _this$dossier_credit5 === void 0 || (_this$dossier_credit5 = _this$dossier_credit5.toString()) === null || _this$dossier_credit5 === void 0 ? void 0 : _this$dossier_credit5.toUpperCase();
          this.partie_liee = (_this$dossier_credit6 = this.dossier_credit) === null || _this$dossier_credit6 === void 0 || (_this$dossier_credit6 = _this$dossier_credit6[credValByRole[0]]) === null || _this$dossier_credit6 === void 0 || (_this$dossier_credit6 = _this$dossier_credit6.partie_liee) === null || _this$dossier_credit6 === void 0 || (_this$dossier_credit6 = _this$dossier_credit6.toString()) === null || _this$dossier_credit6 === void 0 ? void 0 : _this$dossier_credit6.toUpperCase();
          this.inhabituel = (_this$dossier_credit7 = this.dossier_credit) === null || _this$dossier_credit7 === void 0 || (_this$dossier_credit7 = _this$dossier_credit7[credValByRole[0]]) === null || _this$dossier_credit7 === void 0 || (_this$dossier_credit7 = _this$dossier_credit7.inhabituel) === null || _this$dossier_credit7 === void 0 || (_this$dossier_credit7 = _this$dossier_credit7.toString()) === null || _this$dossier_credit7 === void 0 ? void 0 : _this$dossier_credit7.toUpperCase();
        }
      }
      this.selected_path_type = (_this$dossier_credit$2 = (_this$dossier_credit8 = this.dossier_credit) === null || _this$dossier_credit8 === void 0 ? void 0 : _this$dossier_credit8.selected_path_type) !== null && _this$dossier_credit$2 !== void 0 ? _this$dossier_credit$2 : null;
      this.role_uuid = (_this$authcheckUsr2 = this.authcheckUsr) === null || _this$authcheckUsr2 === void 0 ? void 0 : _this$authcheckUsr2.role_uuid;
      if (!['tyJLxuAh6F2DJR6e', '', null, undefined].includes(this.role_uuid) || ((_this$dossier_credit9 = this.dossier_credit) === null || _this$dossier_credit9 === void 0 ? void 0 : _this$dossier_credit9.selected_path_type) != 'LONG') {
        this.activeRecapProfil = true;
      }
      this.note_edane = (_this$dossier_credit$3 = (_this$dossier_credit0 = this.dossier_credit) === null || _this$dossier_credit0 === void 0 || (_this$dossier_credit0 = _this$dossier_credit0[this.credpub0]) === null || _this$dossier_credit0 === void 0 ? void 0 : _this$dossier_credit0.note_edane) !== null && _this$dossier_credit$3 !== void 0 ? _this$dossier_credit$3 : "";
      var data_f0 = (_this$dossier_credit1 = this.dossier_credit) === null || _this$dossier_credit1 === void 0 ? void 0 : _this$dossier_credit1[this.credpub0];
      this.compte_contribuable = (_data_f0$compte_contr = data_f0 === null || data_f0 === void 0 ? void 0 : data_f0.compte_contribuable) !== null && _data_f0$compte_contr !== void 0 ? _data_f0$compte_contr : "";
      var decision_logs = (_this$dossier_credit$4 = (_this$dossier_credit10 = this.dossier_credit) === null || _this$dossier_credit10 === void 0 ? void 0 : _this$dossier_credit10.decision_logs) !== null && _this$dossier_credit$4 !== void 0 ? _this$dossier_credit$4 : [];
      var current_stage = (_this$dossier_credit$5 = (_this$dossier_credit11 = this.dossier_credit) === null || _this$dossier_credit11 === void 0 || (_this$dossier_credit11 = _this$dossier_credit11.workflow) === null || _this$dossier_credit11 === void 0 || (_this$dossier_credit11 = _this$dossier_credit11.current_stage) === null || _this$dossier_credit11 === void 0 ? void 0 : _this$dossier_credit11.stage_id) !== null && _this$dossier_credit$5 !== void 0 ? _this$dossier_credit$5 : 0;
      if (false) // removed by dead control flow
{ var _data_f0$sni_details, _this$dossier_credit13, _this$dossier_credit14, _this$dossier_credit15, _this$dossier_credit12; }
    },
    goTo: function goTo() {
      var _this$dossier_credit16;
      if (((_this$dossier_credit16 = this.dossier_credit) === null || _this$dossier_credit16 === void 0 ? void 0 : _this$dossier_credit16.global_env_entity) == 'BANK') {
        window.open('http://scoring-corp.nsiabanque.com', '_blank');
      }
    },
    validateRp: function validateRp(rep) {
      if (this.ongoingDesc) {
        return;
      }
      this.ongoingDesc = true;
      this.$emit('validate-rp', rep);
      this.checkVerifyCanApprove = rep;
    },
    validateRpDGR: function validateRpDGR(rep) {
      var _this2 = this;
      var fmsg = "";
      if (rep) {
        fmsg = "Ce dossier de crédit passera par la DGR. \nEtes-vous sûr(e) ?";
      } else {
        fmsg = "Ce dossier de crédit ne passera pas par la DGR. \nEtes-vous sûr(e) ?";
      }
      this.$confirm(fmsg, "Routage dossier DGR").then(function () {
        var _this2$dossier_credit, _this2$authcheckUsr, _this2$authcheckUsr2, _this2$authcheckUsr3, _this2$authcheckUsr4, _this2$authcheckUsr5, _this2$authcheckUsr6, _this2$authcheckUsr7, _this2$authcheckUsr8, _this2$authcheckUsr9, _this2$authcheckUsr0, _this2$authcheckUsr1, _this2$authcheckUsr10, _this2$authcheckUsr11;
        _this2.ongoingDescDGR = true;
        _this2.cred_pub_key = (_this2$dossier_credit = _this2.dossier_credit) === null || _this2$dossier_credit === void 0 ? void 0 : _this2$dossier_credit.cred_pub_key;
        var actor = {
          categorie_client: (_this2$authcheckUsr = _this2.authcheckUsr) === null || _this2$authcheckUsr === void 0 ? void 0 : _this2$authcheckUsr.categorie_client,
          contact_whatsap: (_this2$authcheckUsr2 = _this2.authcheckUsr) === null || _this2$authcheckUsr2 === void 0 ? void 0 : _this2$authcheckUsr2.contact_whatsap,
          email: (_this2$authcheckUsr3 = _this2.authcheckUsr) === null || _this2$authcheckUsr3 === void 0 ? void 0 : _this2$authcheckUsr3.email,
          filiale: (_this2$authcheckUsr4 = _this2.authcheckUsr) === null || _this2$authcheckUsr4 === void 0 ? void 0 : _this2$authcheckUsr4.filiale,
          name: (_this2$authcheckUsr5 = _this2.authcheckUsr) === null || _this2$authcheckUsr5 === void 0 ? void 0 : _this2$authcheckUsr5.name,
          nom_entite: (_this2$authcheckUsr6 = _this2.authcheckUsr) === null || _this2$authcheckUsr6 === void 0 ? void 0 : _this2$authcheckUsr6.nom_entite,
          role: (_this2$authcheckUsr7 = _this2.authcheckUsr) === null || _this2$authcheckUsr7 === void 0 ? void 0 : _this2$authcheckUsr7.role,
          role_sigle: (_this2$authcheckUsr8 = _this2.authcheckUsr) === null || _this2$authcheckUsr8 === void 0 ? void 0 : _this2$authcheckUsr8.role_sigle,
          role_uuid: (_this2$authcheckUsr9 = _this2.authcheckUsr) === null || _this2$authcheckUsr9 === void 0 ? void 0 : _this2$authcheckUsr9.role_uuid,
          type_entite: (_this2$authcheckUsr0 = _this2.authcheckUsr) === null || _this2$authcheckUsr0 === void 0 ? void 0 : _this2$authcheckUsr0.type_entite,
          user_id: (_this2$authcheckUsr1 = _this2.authcheckUsr) === null || _this2$authcheckUsr1 === void 0 ? void 0 : _this2$authcheckUsr1.user_id,
          visibility_scope_ref: (_this2$authcheckUsr10 = _this2.authcheckUsr) === null || _this2$authcheckUsr10 === void 0 ? void 0 : _this2$authcheckUsr10.visibility_scope_ref,
          what_tobe_produced: (_this2$authcheckUsr11 = _this2.authcheckUsr) === null || _this2$authcheckUsr11 === void 0 ? void 0 : _this2$authcheckUsr11.what_tobe_produced
        };
        _this2.$axios.post(_this2.ebapisHost + "creditbuilder/api/v1/save-allow-to-dgr/", {
          cred_pub_key: _this2.cred_pub_key,
          data: {
            actor: actor,
            response: rep
          }
        }).then(function (res) {
          _this2.activeRecapProfil = true;
          _this2.ongoingDescDGR = false;
          EventBus.$emit('value-updated');
        })["catch"](function (error) {
          _this2.ongoingDescDGR = false;
          _this2.activeRecapProfil = false;
          _this2.$console.error(error);
          _this2.$toasted.show("Une erreur est survenue", {
            duration: 5000
          });
        });
      });
    },
    loadScore: function loadScore() {
      var _this3 = this;
      this.error_sni = false;
      this.$axios.post(this.ebapisHost + "creditbuilder/api/v1/load-score/", {
        cc: this.compte_contribuable
      }).then(function (res) {
        _this3.verifyNoteSni = false;
        var data = res.data;
        _this3.score_info = data["score"][0];
        if (['DUxMP2ZQheGFreQt5z2s', 'r472oAxtaFJSlsh5'].includes(_this3.role_uuid) && ['appui_com', 'charge_affaire', 'chef_agence', 'dir_com', 'chef_depart_com', 'rep_com'].includes(_this3.score_info['VALIDATION'])) {
          _this3.block_pub = true;
        } else if (['tyJLxuAh6F2DJR6e'].includes(_this3.role_uuid) && _this3.score_info['VALIDATION'] != "Note validée") {
          _this3.block_pub = true;
        } else {
          _this3.note_edane_old = _this3.note_edane;
          _this3.note_edane = _this3.score_info['CRAN'];
          if (['DUxMP2ZQheGFreQt5z2s', 'r472oAxtaFJSlsh5'].includes(_this3.role_uuid)) {
            _this3.checkNoteSni = true;
            _this3.verifyNoteSni = true;
            EventBus.$emit('update-sni');
          } else {
            if (_this3.note_edane_old != _this3.note_edane) {
              _this3.failed_match_sni = true;
              _this3.verifyNoteSni = false;
            } else {
              _this3.checkNoteSni = false;
              _this3.verifyNoteSni = false;
            }
          }
        }
      })["catch"](function (err) {
        _this3.error_sni = true;
        _this3.verifyNoteSni = false;
        console.log(err);
      });
    },
    validateRpAj: function validateRpAj() {
      var _this4 = this;
      if (this.ongoingDesc) {
        return;
      }
      var title_confirm = "Ajournement du dossier";
      var fmsg = "Vous êtes sur le point d'ajourner ce dossier crédit. \nEtes-vous sûr(e) ?";
      this.$confirm(fmsg, title_confirm).then(function () {
        _this4.ongoingDescSni = true;
        EventBus.$emit('ajournement-sni');
      });
    }
  },
  watch: {
    dossier_credit: {
      handler: function handler(newVal) {
        if (['', null, undefined].includes(this.note_edane)) {
          this.initData();
        }
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/RecapCorpRiskProfil.vue?vue&type=template&id=0f872095":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/RecapCorpRiskProfil.vue?vue&type=template&id=0f872095 ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm$dossier_credit, _vm$dossier_credit2, _vm$grand_risque, _vm$inhabituel, _vm$partie_liee, _vm$dossier_credit3, _vm$dossier_credit4;
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticStyle: {
      margin: "10px"
    }
  }, [_vm.checkNoteSni ? [_c("h1", {
    staticClass: "text-center",
    staticStyle: {
      color: "#34495e"
    }
  }, [_vm._v("\n            Vérification de la note SNI\n        ")]), _vm._v(" "), _c("hr"), _vm._v(" "), _vm.verifyNoteSni ? _c("div", {
    staticClass: "d-flex justify-content-center text-center align-items-center text-muted py-4"
  }, [_vm._m(0)]) : _c("div", [_vm.block_pub ? _c("div", [_c("div", {
    staticStyle: {
      "text-align": "center",
      margin: "14px 2px",
      padding: "5px"
    }
  }, [_c("span", {
    staticStyle: {
      "font-size": "1em",
      background: "rgb(243 156 18 / 25%)",
      padding: "1px 15px"
    }
  }, [_c("i", {
    staticClass: "icofont icofont-info-circle icofont-1x",
    staticStyle: {
      color: "#f39c12",
      height: "30px",
      "margin-right": "1px"
    }
  }), _vm._v("\n                        Veuillez vous assurer que la note SNI est "), !["DUxMP2ZQheGFreQt5z2s", "r472oAxtaFJSlsh5"].includes(this.role_uuid) ? _c("span", [_vm._v("définitivement ")]) : _vm._e(), _vm._v("validée.\n                    ")])]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-sm-6 col-md-6 col-lg-6"
  }, [_c("div", {
    staticClass: "text-center"
  }, [_c("button", {
    staticClass: "btn btn-danger",
    staticStyle: {
      width: "100%",
      height: "8vh",
      "background-color": "#e74c3c"
    },
    attrs: {
      title: "FERMER"
    },
    on: {
      click: function click($event) {
        return _vm.$modal.hide("publish");
      }
    }
  }, [_c("i", {
    staticClass: "icofont icofont-close icofont-3x"
  })]), _vm._v(" "), _vm._m(1)])]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-6 col-md-6 col-lg-6"
  }, [_c("div", {
    staticClass: "text-center"
  }, [_c("button", {
    staticClass: "btn btn-success",
    staticStyle: {
      width: "100%",
      height: "8vh",
      "background-color": "#27ae60"
    },
    attrs: {
      title: "CONSULTER SNI"
    },
    on: {
      click: function click($event) {
        return _vm.goTo();
      }
    }
  }, [_c("i", {
    staticClass: "icofont icofont-link icofont-3x"
  })]), _vm._v(" "), _vm._m(2)])])])]) : _vm._e(), _vm._v(" "), _vm.failed_match_sni ? _c("div", [_c("div", {
    staticStyle: {
      "text-align": "center",
      margin: "14px 2px",
      padding: "5px"
    }
  }, [_c("span", {
    staticStyle: {
      "font-size": "1em",
      background: "rgb(243 156 18 / 25%)",
      padding: "1px 15px",
      display: "block"
    }
  }, [_c("i", {
    staticClass: "icofont icofont-info-circle icofont-1x",
    staticStyle: {
      color: "#f39c12",
      height: "30px",
      "margin-right": "1px"
    }
  }), _vm._v("\n                        La note SNI validée diffère de la note SNI provisoire (note SNI DCEI)."), _c("br"), _vm._v(" En conséquence, prière d'ajourner le dossier afin qu'il puisse suivre le circuit de validation adapté à cette note."), _c("br"), _vm._v(" "), _c("div", {
    staticClass: "text-left"
  }, [_vm._v("\n                            - Note provisoire : "), _c("b", [_vm._v(_vm._s(this.note_edane_old))]), _vm._v(" "), _c("br"), _vm._v("\n                            - Note validée : "), _c("b", [_vm._v(_vm._s(this.note_edane))]), _vm._v(" "), _c("br")])])]), _vm._v(" "), !_vm.ongoingDescSni ? _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-sm-6 col-md-6 col-lg-6"
  }, [_c("div", {
    staticClass: "text-center"
  }, [_c("button", {
    staticClass: "btn btn-danger",
    staticStyle: {
      width: "100%",
      height: "8vh",
      "background-color": "#e74c3c"
    },
    attrs: {
      title: "FERMER"
    },
    on: {
      click: function click($event) {
        return _vm.$modal.hide("publish");
      }
    }
  }, [_c("i", {
    staticClass: "icofont icofont-close icofont-3x"
  })]), _vm._v(" "), _vm._m(3)])]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-6 col-md-6 col-lg-6"
  }, [_c("div", {
    staticClass: "text-center"
  }, [_c("button", {
    staticClass: "btn btn-warning",
    staticStyle: {
      width: "100%",
      height: "8vh",
      "background-color": "#e67e22",
      color: "white"
    },
    attrs: {
      title: "Oui"
    },
    on: {
      click: function click($event) {
        return _vm.validateRpAj();
      }
    }
  }, [_c("i", {
    staticClass: "icofont icofont-warning-alt icofont-3x"
  })]), _vm._v(" "), _vm._m(4)])])]) : _c("div", {
    staticClass: "row"
  }, [_vm._m(5)])]) : _vm._e(), _vm._v(" "), _vm.error_sni ? _c("div", [_vm._m(6), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-sm-12 col-md-12 col-lg-12"
  }, [_c("div", {
    staticClass: "text-center"
  }, [_c("button", {
    staticClass: "btn btn-danger",
    staticStyle: {
      width: "100%",
      height: "8vh",
      "background-color": "#e74c3c"
    },
    attrs: {
      title: "FERMER"
    },
    on: {
      click: function click($event) {
        return _vm.$modal.hide("publish");
      }
    }
  }, [_c("i", {
    staticClass: "icofont icofont-close icofont-3x"
  })]), _vm._v(" "), _vm._m(7)])])])]) : _vm._e()])] : _vm._e(), _vm._v(" "), _vm.checkNoteSni == false && ["tyJLxuAh6F2DJR6e"].includes(_vm.role_uuid) && !_vm.activeRecapProfil && this.selected_path_type == "LONG" ? [_c("h1", {
    staticClass: "text-center",
    staticStyle: {
      color: "#34495e"
    }
  }, [_vm._v("\n            Routage dossier DGR\n        ")]), _vm._v(" "), _c("hr"), _vm._v(" "), _c("h3", {
    staticClass: "text-center text-danger m-5 fw-bold"
  }, [_vm._v("\n            Ce dossier doit-il passer par la DGR ?\n        ")]), _vm._v(" "), !_vm.ongoingDescDGR ? _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-sm-6 col-md-6 col-lg-6"
  }, [_c("div", {
    staticClass: "text-center"
  }, [_c("button", {
    staticClass: "btn btn-danger",
    staticStyle: {
      width: "100%",
      height: "8vh",
      "background-color": "#e74c3c"
    },
    attrs: {
      title: "Non"
    },
    on: {
      click: function click($event) {
        return _vm.validateRpDGR(false);
      }
    }
  }, [_c("i", {
    staticClass: "icofont icofont-close icofont-3x"
  })]), _vm._v(" "), _vm._m(8)])]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-6 col-md-6 col-lg-6"
  }, [_c("div", {
    staticClass: "text-center"
  }, [_c("button", {
    staticClass: "btn btn-success",
    staticStyle: {
      width: "100%",
      height: "8vh",
      "background-color": "#27ae60"
    },
    attrs: {
      title: "Oui"
    },
    on: {
      click: function click($event) {
        return _vm.validateRpDGR(true);
      }
    }
  }, [_c("i", {
    staticClass: "icofont icofont-check icofont-3x"
  })]), _vm._v(" "), _vm._m(9)])])]) : _c("div", {
    staticClass: "row"
  }, [_vm._m(10)])] : _vm._e(), _vm._v(" "), _vm.checkNoteSni == false && _vm.activeRecapProfil ? [_c("h1", {
    staticClass: "text-center",
    staticStyle: {
      color: "#34495e"
    }
  }, [_vm._v("\n            Récapitulatif du Profil de Risque\n        ")]), _vm._v(" "), _c("hr"), _vm._v(" "), _vm.checkVerifyCanApprove ? [_vm._m(11)] : _c("div", [_c("table", {
    staticClass: "table"
  }, [_c("tbody", [_c("tr", [_c("th", {
    attrs: {
      scope: "row"
    }
  }, [_vm._v("Type de Clientèle")]), _vm._v(" "), _c("td", {
    attrs: {
      scope: "row"
    }
  }, [_vm._v("\n                            " + _vm._s((_vm$dossier_credit = _vm.dossier_credit) === null || _vm$dossier_credit === void 0 || (_vm$dossier_credit = _vm$dossier_credit[_vm.credpub0]) === null || _vm$dossier_credit === void 0 ? void 0 : _vm$dossier_credit.type_de_clientele) + "\n                        ")])]), _vm._v(" "), _c("tr", [_c("th", {
    attrs: {
      scope: "row"
    }
  }, [_vm._v("Notation/Cotation")]), _vm._v(" "), _c("td", {
    attrs: {
      scope: "row"
    }
  }, [_vm._v("\n                            " + _vm._s(_vm.note_edane) + "\n                        ")])]), _vm._v(" "), _c("tr", [_c("th", {
    attrs: {
      scope: "row"
    }
  }, [_vm._v("PPE")]), _vm._v(" "), _c("td", {
    attrs: {
      scope: "row"
    }
  }, [_vm._v("\n                            " + _vm._s((_vm$dossier_credit2 = _vm.dossier_credit) === null || _vm$dossier_credit2 === void 0 || (_vm$dossier_credit2 = _vm$dossier_credit2[_vm.credpub0]) === null || _vm$dossier_credit2 === void 0 || (_vm$dossier_credit2 = _vm$dossier_credit2.personne_politiquement_expose) === null || _vm$dossier_credit2 === void 0 ? void 0 : _vm$dossier_credit2.toString().toUpperCase()) + "\n                        ")])]), _vm._v(" "), _c("tr", [_c("th", {
    attrs: {
      scope: "row"
    }
  }, [_vm._v("Grand Risque")]), _vm._v(" "), _c("td", {
    attrs: {
      scope: "row"
    }
  }, [_vm._v("\n                            " + _vm._s((_vm$grand_risque = _vm.grand_risque) === null || _vm$grand_risque === void 0 ? void 0 : _vm$grand_risque.toString().toUpperCase()) + "\n                        ")])]), _vm._v(" "), _c("tr", [_c("th", {
    attrs: {
      scope: "row"
    }
  }, [_vm._v("Inhabituel")]), _vm._v(" "), _c("td", {
    attrs: {
      scope: "row"
    }
  }, [_vm._v("\n                            " + _vm._s((_vm$inhabituel = _vm.inhabituel) === null || _vm$inhabituel === void 0 ? void 0 : _vm$inhabituel.toString().toUpperCase()) + "\n                        ")])]), _vm._v(" "), _c("tr", [_c("th", {
    attrs: {
      scope: "row"
    }
  }, [_vm._v("Partie Liée")]), _vm._v(" "), _c("td", {
    attrs: {
      scope: "row"
    }
  }, [_vm._v("\n                            " + _vm._s((_vm$partie_liee = _vm.partie_liee) === null || _vm$partie_liee === void 0 ? void 0 : _vm$partie_liee.toString().toUpperCase()) + "\n                        ")])]), _vm._v(" "), _c("tr", [_c("th", {
    attrs: {
      scope: "row"
    }
  }, [_vm._v("100% Cash Coll")]), _vm._v(" "), _c("td", {
    attrs: {
      scope: "row"
    }
  }, [_vm._v("\n                            " + _vm._s((_vm$dossier_credit3 = _vm.dossier_credit) === null || _vm$dossier_credit3 === void 0 || (_vm$dossier_credit3 = _vm$dossier_credit3[_vm.credpub1]) === null || _vm$dossier_credit3 === void 0 || (_vm$dossier_credit3 = _vm$dossier_credit3.pret_couvert_cash_call) === null || _vm$dossier_credit3 === void 0 ? void 0 : _vm$dossier_credit3.toString().toUpperCase()) + "\n                        ")])]), _vm._v(" "), _c("tr", [_c("th", {
    attrs: {
      scope: "row"
    }
  }, [_vm._v("Exposition à autoriser")]), _vm._v(" "), _c("td", {
    attrs: {
      scope: "row"
    }
  }, [_vm._v("\n                            " + _vm._s(_vm._f("formatNumber")((_vm$dossier_credit4 = _vm.dossier_credit) === null || _vm$dossier_credit4 === void 0 || (_vm$dossier_credit4 = _vm$dossier_credit4[_vm.credpub0]) === null || _vm$dossier_credit4 === void 0 ? void 0 : _vm$dossier_credit4.exposition_globale)) + "\n                        ")])])])]), _vm._v(" "), ["", null, undefined].includes(_vm.note_edane) ? [_vm._m(12)] : [!_vm.ongoingDesc ? _c("h6", {
    staticClass: "text-center"
  }, [_vm._v("\n                    Approuvez vous ce profil de risque ?\n                ")]) : _vm._e(), _vm._v(" "), !_vm.ongoingDesc ? _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-sm-6 col-md-6 col-lg-6"
  }, [_c("div", {
    staticClass: "text-center"
  }, [_c("button", {
    staticClass: "btn btn-danger",
    staticStyle: {
      width: "100%",
      height: "8vh",
      "background-color": "#e74c3c"
    },
    attrs: {
      title: "Non"
    },
    on: {
      click: function click($event) {
        return _vm.validateRp(false);
      }
    }
  }, [_c("i", {
    staticClass: "icofont icofont-close icofont-3x"
  })]), _vm._v(" "), _vm._m(13)])]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-6 col-md-6 col-lg-6"
  }, [_c("div", {
    staticClass: "text-center"
  }, [_c("button", {
    staticClass: "btn btn-success",
    staticStyle: {
      width: "100%",
      height: "8vh",
      "background-color": "#27ae60"
    },
    attrs: {
      title: "Oui"
    },
    on: {
      click: function click($event) {
        return _vm.validateRp(true);
      }
    }
  }, [_c("i", {
    staticClass: "icofont icofont-check icofont-3x"
  })]), _vm._v(" "), _vm._m(14)])])]) : _vm._e()]], 2)] : _vm._e()], 2);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("span", {
    staticClass: "spinner-border spinner-border"
  }), _vm._v(" "), _c("h5", [_vm._v("\n                    Chargement des données en cours ... "), _c("br"), _vm._v("\n                    Ceci peut prendre un peu de temps\n                ")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("b", [_vm._v("FERMER")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("b", [_vm._v("CONSULTER SNI")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("b", [_vm._v("FERMER")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("b", [_vm._v("AJOURNER")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "col-sm-12 col-md-12 col-lg-12"
  }, [_c("button", {
    staticClass: "btn btn-secondary",
    staticStyle: {
      width: "100%",
      height: "8vh",
      "background-color": "#7f8c8d"
    },
    attrs: {
      disabled: ""
    }
  }, [_c("span", {
    staticClass: "spinner-border spinner-border-sm"
  }, [_c("span", {
    staticClass: "visually-hidden"
  }, [_vm._v("Loading...")])]), _vm._v(" Prise en compte en cours ...\n                        ")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticStyle: {
      "text-align": "center",
      margin: "14px 2px",
      padding: "5px"
    }
  }, [_c("span", {
    staticStyle: {
      "font-size": "1em",
      background: "rgb(243 156 18 / 25%)",
      padding: "1px 15px",
      display: "block"
    }
  }, [_c("i", {
    staticClass: "icofont icofont-info-circle icofont-1x",
    staticStyle: {
      color: "#f39c12",
      height: "30px",
      "margin-right": "1px"
    }
  }), _vm._v("\n                        Le serveur SNI est injoignable. Merci de contacter le Service Applications Connexes.\n                    ")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("b", [_vm._v("FERMER")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("b", [_vm._v("Non")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("b", [_vm._v("Oui")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "col-sm-12 col-md-12 col-lg-12"
  }, [_c("button", {
    staticClass: "btn btn-secondary",
    staticStyle: {
      width: "100%",
      height: "8vh",
      "background-color": "#7f8c8d"
    },
    attrs: {
      disabled: ""
    }
  }, [_c("span", {
    staticClass: "spinner-border spinner-border-sm"
  }, [_c("span", {
    staticClass: "visually-hidden"
  }, [_vm._v("Loading...")])]), _vm._v(" Prise en compte en cours ...\n                ")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "d-flex justify-content-center text-center align-items-center text-muted py-4"
  }, [_c("div", [_c("span", {
    staticClass: "spinner-border spinner-border"
  }), _vm._v(" "), _c("h5", [_vm._v("\n                        Chargement des données en cours ... "), _c("br"), _vm._v("\n                        Ceci peut prendre un peu de temps\n                    ")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "col-sm-12 col-md-12 col-lg-12"
  }, [_c("button", {
    staticClass: "btn btn-secondary",
    staticStyle: {
      width: "100%",
      height: "4.5vh",
      "background-color": "#7f8c8d"
    },
    attrs: {
      disabled: ""
    }
  }, [_c("span", {
    staticClass: "spinner-border spinner-border-sm"
  }, [_c("span", {
    staticClass: "visually-hidden"
  }, [_vm._v("Loading...")])]), _vm._v(" Chargement des informations en cours ...\n                    ")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("b", [_vm._v("Non")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("b", [_vm._v("Oui")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/components/shared/RecapCorpRiskProfil.vue":
/*!****************************************************************!*\
  !*** ./resources/js/components/shared/RecapCorpRiskProfil.vue ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _RecapCorpRiskProfil_vue_vue_type_template_id_0f872095__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RecapCorpRiskProfil.vue?vue&type=template&id=0f872095 */ "./resources/js/components/shared/RecapCorpRiskProfil.vue?vue&type=template&id=0f872095");
/* harmony import */ var _RecapCorpRiskProfil_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RecapCorpRiskProfil.vue?vue&type=script&lang=js */ "./resources/js/components/shared/RecapCorpRiskProfil.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _RecapCorpRiskProfil_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _RecapCorpRiskProfil_vue_vue_type_template_id_0f872095__WEBPACK_IMPORTED_MODULE_0__.render,
  _RecapCorpRiskProfil_vue_vue_type_template_id_0f872095__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/shared/RecapCorpRiskProfil.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/shared/RecapCorpRiskProfil.vue?vue&type=script&lang=js":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/shared/RecapCorpRiskProfil.vue?vue&type=script&lang=js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RecapCorpRiskProfil_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RecapCorpRiskProfil.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/RecapCorpRiskProfil.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RecapCorpRiskProfil_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/shared/RecapCorpRiskProfil.vue?vue&type=template&id=0f872095":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/shared/RecapCorpRiskProfil.vue?vue&type=template&id=0f872095 ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RecapCorpRiskProfil_vue_vue_type_template_id_0f872095__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RecapCorpRiskProfil_vue_vue_type_template_id_0f872095__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RecapCorpRiskProfil_vue_vue_type_template_id_0f872095__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RecapCorpRiskProfil.vue?vue&type=template&id=0f872095 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/RecapCorpRiskProfil.vue?vue&type=template&id=0f872095");


/***/ })

}]);