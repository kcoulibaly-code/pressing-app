"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_credavailtick_CR6_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/credavailtick/CR6.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/credavailtick/CR6.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");
/* harmony import */ var _services_ebapis_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/ebapis.service */ "./resources/js/services/ebapis.service.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./resources/js/services/auth.service.js");
/* harmony import */ var _services_cofina_simulateur_teg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/cofina/simulateur-teg */ "./resources/js/services/cofina/simulateur-teg.js");
/* harmony import */ var _shared_TauxEffectifGlobal_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/TauxEffectifGlobal.vue */ "./resources/js/components/shared/TauxEffectifGlobal.vue");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }



// import { VueEditor } from "vue2-editor";




window.$ = window.jQuery = __webpack_require__(/*! jquery/dist/jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "SimulateurTEG",
  display: "SimulateurTEG",
  components: {
    MoreVerticalIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_4__.MoreVerticalIcon,
    ChevronUpIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_4__.ChevronUpIcon,
    ChevronDownIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_4__.ChevronDownIcon,
    PlusIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_4__.PlusIcon,
    TrashIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_4__.TrashIcon,
    AirplayIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_4__.AirplayIcon,
    BookOpenIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_4__.BookOpenIcon,
    TauxEffectifGlobal: _shared_TauxEffectifGlobal_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  props: _defineProperty({
    meta_data: Object,
    tb_name: String,
    tb_display_name: String
  }, "tb_display_name", String),
  created: function created() {},
  mounted: function mounted() {
    this.loadRetrieved();
    // this.loadTbAttrs();
    // this.launchSimulator()
    // (modeRemboursement, tauxNominal, dureeEnMois)

    this.tableClosedOrOpened();
  },
  data: function data() {
    var vm = this;
    return {
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
      },
      // {
      //     title: "Rejeter",
      //     icon: "icofont icofont-close",
      //     handler: function () { },
      //     disabled: true
      // },
      // {
      //     title: "Vider",
      //     icon: "icofont icofont-paperclip",
      //     handler: function () { },
      //     disabled: true
      // },
      {
        title: "Supprimer",
        icon: "icofont icofont-trash",
        handler: this.startDeletingTbFromContext,
        disabled: false
      }],
      allDates: "",
      ebapisHost: _services_ebapis_service__WEBPACK_IMPORTED_MODULE_0__["default"].host,
      authcheck: false,
      authcheckUsr: null,
      authcheckStatus: null,
      seen: true,
      listingNote: false,
      automaticMode: false,
      meta_parseable: {
        cred_pub_key: this.meta_data["cred_pub_key"],
        tb_name: this.tb_name
      },
      formDataToBeWatched: {}

      // data: [{
      //   date: '',
      //   solde_initiale: '',
      //   principal: '',
      //   interet: "",
      //   mensualite: "",
      //   capital_restant: "",
      // }],
      // date_debut_des_echeances: new Date('2023-11-01')
    };
  },
  methods: _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({
    loadRetrieved: function loadRetrieved() {
      var lentb = this.meta_data["dossier_credit"]["tbs_in_use"];
      var createdKey = this.tb_name;
      var createdKeyArr = createdKey.split("tb");
      createdKey = "cred_pub_tb_" + createdKeyArr[1];
      createdKey = "cred_pub_tb_" + createdKeyArr[1];
      if (lentb.length > 0) {
        if (this.meta_data["dossier_credit"][createdKey] != undefined) {
          this.formDataToBeWatched = this.meta_data["dossier_credit"][createdKey];
          //   this.launchSimulator(this.formDataToBeWatched)
          return;
        }
      }
      //   this.preconfigData()
      //   this.defaultRetract(false, this.meta_data["dossier_credit"]?.applied_templ_id)
    },
    launchSimulator: function launchSimulator() {
      var _this = this;
      var tegData = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var premiere_echeance = tegData ? new Date(tegData.premiere_echeance) : new Date(this.formDataToBeWatched.premiere_echeance);
      var params = {
        premiere_echeance: premiere_echeance == 'Invalid Date' ? '' : premiere_echeance,
        montant_pret: tegData ? tegData.montant_pret : this.formDataToBeWatched.montant_pret,
        mode_remboursement: tegData ? tegData.mode_remboursement : this.formDataToBeWatched.mode_remboursement,
        taux_nominal: tegData ? tegData.taux_nominal : this.formDataToBeWatched.taux_nominal,
        duree_en_mois: tegData ? tegData.duree : this.formDataToBeWatched.duree,
        diff: tegData ? tegData.duree_diff : this.formDataToBeWatched.duree_diff,
        frais_dossier: tegData ? tegData.frais_dossier : this.formDataToBeWatched.frais_dossier,
        autre_commission: tegData ? tegData.autre_commission : this.formDataToBeWatched.autre_commission,
        prime_risque: tegData ? tegData.prime_risque : this.formDataToBeWatched.prime_risque
      };
      var validator = function validator(args) {
        var message = "";
        for (var _i = 0, _Object$entries = Object.entries(args); _i < _Object$entries.length; _i++) {
          var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
            el = _Object$entries$_i[0],
            value = _Object$entries$_i[1];
          if ([null, undefined, ""].includes(value)) {
            if (el == "premiere_echeance") {
              message = "Veuillez saisir la première écheance";
              // return false
            } else if (el == "montant_pret") {
              message = "Veuillez saisir le montant du prêt";
              // return false
            } else if (el == "mode_remboursement") {
              message = 'Veuillez saisir le mode de remboursement ';
            } else if (el == "taux_nominal") {
              message = 'Veuillez saisir le taux nominal (annuel)';
            } else if (el == "duree_en_mois") {
              message = 'Veuillez saisir la durée du crédit';
            } else if (el == "frais_dossier") {
              message = 'Veuillez saisir les frais du dossier';
            } else if (el == "diff") {
              message = 'Veuillez saisir la durée diffée';
            }
          }
          if (message) {
            var _this$meta_data;
            if (["Mémo de changement de conditions"].includes((_this$meta_data = _this.meta_data) === null || _this$meta_data === void 0 || (_this$meta_data = _this$meta_data.dossier_credit) === null || _this$meta_data === void 0 ? void 0 : _this$meta_data.applied_templ_name)) return false;
            _this.$toasted.show(message, {
              duration: 5000
            });
            return false;
          }
        }
        return true;
      };
      if (validator(params)) {
        var _this$simulateur;
        this.simulateur.initData(params);
        this.formDataToBeWatched.teg = (_this$simulateur = this.simulateur) === null || _this$simulateur === void 0 || (_this$simulateur = _this$simulateur.TEG) === null || _this$simulateur === void 0 ? void 0 : _this$simulateur.toFixed(2);
        var limite_teg = this.formDataToBeWatched.limite_teg ? Number(this.formDataToBeWatched.limite_teg) : 0;
        limite_teg = isNaN(limite_teg) ? 0 : limite_teg;
        this.formDataToBeWatched.difference = Math.abs(limite_teg - this.formDataToBeWatched.teg);
        this.formDataToBeWatched.operations = this.simulateur.data;
      }
    },
    preconfigData: function preconfigData() {
      var _this$meta_data$dossi, _cred_pub_tb_1$frais$, _cred_pub_tb_1$frais$2, _this$formDataToBeWat2;
      // console.log("credArrays", this.determineCredPubTables(this.dossier_credit.applied_templ_name))
      var applied_templ_name = this.meta_data.dossier_credit.applied_templ_name;
      var cred_pub_tb_1 = (_this$meta_data$dossi = this.meta_data.dossier_credit) === null || _this$meta_data$dossi === void 0 ? void 0 : _this$meta_data$dossi[this.determineCredPubTables(applied_templ_name)[1]];
      this.formDataToBeWatched.montant_pret = cred_pub_tb_1.montant_credit;
      this.formDataToBeWatched.duree = cred_pub_tb_1.duree_credit;
      this.formDataToBeWatched.taux_nominal = cred_pub_tb_1.taux_credit * 12;
      this.formDataToBeWatched.prime_risque = (_cred_pub_tb_1$frais$ = cred_pub_tb_1.frais.find(function (el) {
        return el.libelle_taux == "Prime de risque";
      })) === null || _cred_pub_tb_1$frais$ === void 0 ? void 0 : _cred_pub_tb_1$frais$.taux_modififie;
      this.formDataToBeWatched.frais_dossier = (_cred_pub_tb_1$frais$2 = cred_pub_tb_1.frais.find(function (el) {
        return el.libelle_taux == "Frais de dossier";
      })) === null || _cred_pub_tb_1$frais$2 === void 0 ? void 0 : _cred_pub_tb_1$frais$2.taux_modififie;
      var typePaiement = cred_pub_tb_1 === null || cred_pub_tb_1 === void 0 ? void 0 : cred_pub_tb_1.type_paiement;
      // console.log("typePaiement", typePaiement)
      if (typePaiement == "Normal") {
        this.formDataToBeWatched.mode_remboursement = "Sans différé";
      }
      if (typePaiement == "Différé") {
        var _this$formDataToBeWat;
        var periodeTypePaiement = cred_pub_tb_1 === null || cred_pub_tb_1 === void 0 ? void 0 : cred_pub_tb_1.periode_type_paiement;
        // console.log("periodeTypePaiement", periodeTypePaiement)
        if (!isNaN(periodeTypePaiement)) {
          if (periodeTypePaiement < Number(cred_pub_tb_1.duree_credit)) {
            this.formDataToBeWatched.mode_remboursement = "Différé partiel";
          } else {
            this.formDataToBeWatched.mode_remboursement = "Différé total";
          }
        } else {
          this.$oncetegData.mode_remboursement = typePaiement;
        }
        this.formDataToBeWatched.duree_diff = periodeTypePaiement !== null && periodeTypePaiement !== void 0 ? periodeTypePaiement : (_this$formDataToBeWat = this.formDataToBeWatched) === null || _this$formDataToBeWat === void 0 ? void 0 : _this$formDataToBeWat.duree;
      }
      this.formDataToBeWatched.duree_diff = Number((_this$formDataToBeWat2 = this.formDataToBeWatched) === null || _this$formDataToBeWat2 === void 0 ? void 0 : _this$formDataToBeWat2.duree) - 1;
      this.launchSimulator(this.formDataToBeWatched);
    },
    setDateInput: function setDateInput(event) {
      this.formDataToBeWatched[event[0]] = event[1];
      this.launchSimulator(this.formDataToBeWatched);
    },
    checkboxValCashCall: function checkboxValCashCall(event) {
      if (event.target.checked) {
        this.formDataToBeWatched.mode_remboursement = event.target.value;
      } else {
        this.formDataToBeWatched.mode_remboursement = "";
      }
      this.launchSimulator(this.formDataToBeWatched);
    }
  }, "setDateInput", function setDateInput(event) {
    this.formDataToBeWatched[event[0]] = event[1];
  }), "tableClosedOrOpened", function tableClosedOrOpened() {
    this.seen = !this.fetchClosedTables(this.tb_name + this.meta_data['cred_pub_key']);
  }), "openNotesModal", function openNotesModal() {
    var listing = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    this.listingNote = listing;
    this.$modal.show(this.tb_name);
  }), "setTbVal", function setTbVal(val) {
    this.cred_pub_key = val;
  }), "loadWithError", function loadWithError(err) {
    // window.location.href = "/login";
  }), "send2Backend", function send2Backend(res, newVal, oldVal) {
    this.authcheck = true;
    this.authcheckUsr = res.data;
    this.authcheckStatus = res.status;
    if (this.authcheckStatus === 401) {
      // window.location.href = "/login";
    }
    if (this.authcheck === true) {
      this.$emit("autosaving");
      this.$axios.post(this.ebapisHost + "creditbuilder/api/v1/autosaving/", {
        user: this.authcheckUsr,
        meta_parseable: this.meta_parseable,
        filledData: this.formDataToBeWatched,
        loadDossier: true
      }).then(function (response) {
        this.$emit("autosaving");
        var tbFetcheData = response.data;
        if (tbFetcheData["is_success"] === true) {
          this.dossier_credit = tbFetcheData['dossier_credit'];
          this.$emit("load-shell");
        }
      }.bind(this))["catch"](function (error) {
        this.$Progress.finish();
        console.log(error);
      }.bind(this));
    } else {
      alert("Unauthenticated");
    }
  }), "retract", function retract() {
    this.seen = !this.seen;
    var a = {
      "tb_name": this.tb_name + this.meta_data['cred_pub_key'],
      "status": this.seen
    };
    EventBus.$emit("savedclosed-table", a);
  }), "defaultRetract", function defaultRetract(rc, ra) {
    if (ra != null) {
      this.seen = rc;
      var a = {
        "tb_name": this.tb_name + this.meta_data['cred_pub_key'],
        "status": this.seen
      };
      EventBus.$emit("savedclosed-table", a);
    }
  }), "loadTbAttrs", function loadTbAttrs() {
    var l = [];
    var topdivel = this.$refs.topdiv;
    var k = document.querySelectorAll(".subdiv" + this.tb_name);
    // console.log(k)
    k.forEach(function (e) {
      l.push(e.innerText);
      // console.log(l)
    });
    var p = {
      name_of_title: topdivel.innerText,
      list_of_content: l,
      id: "cr4-head"
    };
    // console.log(p)
    this.$emit("load-buffer", p);
  }),
  watch: {
    formDataToBeWatched: {
      handler: function handler(newVal, oldVal) {
        // if (oldVal === undefined) {
        //   return
        // }
        this.autosaving(newVal, oldVal);
      },
      deep: true,
      immediate: true
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/credavailtick/CR6.vue?vue&type=template&id=89ff484a&scoped=true":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/credavailtick/CR6.vue?vue&type=template&id=89ff484a&scoped=true ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm$formDataToBeWatch, _vm$meta_data$dossier, _vm$meta_data$dossier2, _vm$meta_data$dossier3, _vm$formDataToBeWatch2;
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    on: {
      contextmenu: function contextmenu($event) {
        return _vm.$refs.menu.open($event, _vm.tb_name);
      }
    }
  }, [_c("div", {
    staticClass: "row bg-light",
    staticStyle: {
      width: "100%",
      height: "100%"
    }
  }, [_vm.seen === true ? _c("div", {
    staticClass: "card",
    staticStyle: {
      width: "100%",
      height: "100%"
    }
  }, [_c("ContextMenu", {
    ref: "menu",
    attrs: {
      cred_pub_key: _vm.meta_parseable.cred_pub_key,
      id: _vm.tb_name,
      contextList: _vm.contextList
    }
  }), _vm._v(" "), _c("br"), _vm._v(" "), _c("div", {
    staticClass: "card-header hdc"
  }, [_c("h6", {
    ref: "topdiv",
    staticClass: "head",
    attrs: {
      id: "t17-head"
    }
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col"
  }, [_vm._v("\n              " + _vm._s(_vm.tb_display_name) + " : Simulateur TEG\n            ")]), _vm._v(" "), _c("div", {
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
  }, [_c("span", [_vm._v(" " + _vm._s(_vm.formDataToBeWatched.notes.length) + " ")])])])]) : _vm._e(), _vm._v(" "), _c("chevron-up-icon", {
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
  }, [_vm.automaticMode ? _c("taux-effectif-global", {
    attrs: {
      cred_pub_tb_1: (_vm$meta_data$dossier = _vm.meta_data.dossier_credit) === null || _vm$meta_data$dossier === void 0 ? void 0 : _vm$meta_data$dossier.cred_pub_tb_1,
      cred_pub_key: (_vm$meta_data$dossier2 = _vm.meta_data.dossier_credit) === null || _vm$meta_data$dossier2 === void 0 ? void 0 : _vm$meta_data$dossier2.cred_pub_key,
      numero_dossier: (_vm$meta_data$dossier3 = _vm.meta_data.dossier_credit) === null || _vm$meta_data$dossier3 === void 0 ? void 0 : _vm$meta_data$dossier3.numero_dossier
    }
  }) : _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-6"
  }, [_c("label", {
    staticClass: "form-label",
    attrs: {
      "for": ""
    }
  }, [_vm._v("Limite TEG")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.limite_teg,
      expression: "formDataToBeWatched.limite_teg"
    }],
    staticClass: "form-control",
    attrs: {
      type: "number"
    },
    domProps: {
      value: _vm.formDataToBeWatched.limite_teg
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formDataToBeWatched, "limite_teg", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-6"
  }, [_c("label", {
    staticClass: "form-label",
    attrs: {
      "for": ""
    }
  }, [_vm._v("TEG")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.teg,
      expression: "formDataToBeWatched.teg"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text"
    },
    domProps: {
      value: _vm.formDataToBeWatched.teg
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formDataToBeWatched, "teg", $event.target.value);
      }
    }
  })])])], 1), _vm._v(" "), _c("div", {
    staticClass: "mb-5"
  }), _vm._v(" "), _c("button", {
    staticClass: "btn shadow-md text-white position-absolute",
    staticStyle: {
      cursor: "pointer",
      right: "16px",
      bottom: "10px",
      background: "#2c3e50",
      "max-width": "max-content"
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
  }, [_vm._v("\n        Fermer le tableau\n      ")])], 1) : _c("div", {
    staticClass: "card card-width-height"
  }, [_c("br"), _vm._v(" "), _c("div", {
    staticClass: "card-header hdc"
  }, [_c("h6", {
    ref: "topdiv",
    staticClass: "head",
    attrs: {
      id: "t17-head"
    }
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col"
  }, [_vm._v("\n              " + _vm._s(_vm.tb_display_name) + " : Simulateur TEG\n            ")]), _vm._v(" "), _c("div", {
    staticClass: "col-auto"
  }, [((_vm$formDataToBeWatch2 = _vm.formDataToBeWatched.notes) === null || _vm$formDataToBeWatch2 === void 0 ? void 0 : _vm$formDataToBeWatch2.length) > 0 ? _c("div", {
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
  }, [_c("span", [_vm._v(" " + _vm._s(_vm.formDataToBeWatched.notes.length) + " ")])])])]) : _vm._e(), _vm._v(" "), _c("chevron-down-icon", {
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
  })], 1)])])])])]), _vm._v(" "), _c("note-modal", {
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
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/credavailtick/CR6.vue?vue&type=style&index=0&id=89ff484a&lang=css&scoped=true":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/credavailtick/CR6.vue?vue&type=style&index=0&id=89ff484a&lang=css&scoped=true ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\ninput[data-v-89ff484a] {\r\n  /*border: 1px solid red;*/\n}\n*[data-v-89ff484a] {\r\n  font-family: \"Google sans\";\n}\nlabel[data-v-89ff484a] {\r\n  height: 10px;\r\n  font-size: 13px;\n}\ninput[data-v-89ff484a],\r\nselect[data-v-89ff484a] {\r\n  height: 35px;\r\n  border-color: #34495e;\r\n  color: #57606f;\r\n  font-size: 13px;\r\n  font-weight: bold;\n}\n.card-width-height[data-v-89ff484a] {\r\n  width: 100%;\r\n  height: 100%;\n}\n.head[data-v-89ff484a] {\r\n  color: #f1f2f6;\r\n  font-size: 22px;\n}\n.hdc[data-v-89ff484a] {\r\n  background-color: #57606f;\n}\n.badge-sm[data-v-89ff484a] {\r\n  display: inline-block;\r\n  width: 15px;\r\n  height: 15px;\r\n  background: rgba(255, 0, 0, 0.882);\r\n  color: white;\r\n  font-size: 12px;\r\n  font-weight: 500;\r\n  border-radius: 100%;\r\n  position: absolute;\r\n  top: -20%;\r\n  left: 55%;\r\n  text-align: center;\n}\ninput[type=\"checkbox\"][data-v-89ff484a] {\r\n  height: 18px;\r\n  width: 20px;\r\n  margin-right: 5px;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/credavailtick/CR6.vue?vue&type=style&index=0&id=89ff484a&lang=css&scoped=true":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/credavailtick/CR6.vue?vue&type=style&index=0&id=89ff484a&lang=css&scoped=true ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CR6_vue_vue_type_style_index_0_id_89ff484a_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CR6.vue?vue&type=style&index=0&id=89ff484a&lang=css&scoped=true */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/credavailtick/CR6.vue?vue&type=style&index=0&id=89ff484a&lang=css&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CR6_vue_vue_type_style_index_0_id_89ff484a_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CR6_vue_vue_type_style_index_0_id_89ff484a_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/credavailtick/CR6.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/credavailtick/CR6.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CR6_vue_vue_type_template_id_89ff484a_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CR6.vue?vue&type=template&id=89ff484a&scoped=true */ "./resources/js/components/credavailtick/CR6.vue?vue&type=template&id=89ff484a&scoped=true");
/* harmony import */ var _CR6_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CR6.vue?vue&type=script&lang=js */ "./resources/js/components/credavailtick/CR6.vue?vue&type=script&lang=js");
/* harmony import */ var _CR6_vue_vue_type_style_index_0_id_89ff484a_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CR6.vue?vue&type=style&index=0&id=89ff484a&lang=css&scoped=true */ "./resources/js/components/credavailtick/CR6.vue?vue&type=style&index=0&id=89ff484a&lang=css&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _CR6_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _CR6_vue_vue_type_template_id_89ff484a_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _CR6_vue_vue_type_template_id_89ff484a_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "89ff484a",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/credavailtick/CR6.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/credavailtick/CR6.vue?vue&type=script&lang=js":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/credavailtick/CR6.vue?vue&type=script&lang=js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CR6_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CR6.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/credavailtick/CR6.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CR6_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/credavailtick/CR6.vue?vue&type=style&index=0&id=89ff484a&lang=css&scoped=true":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/components/credavailtick/CR6.vue?vue&type=style&index=0&id=89ff484a&lang=css&scoped=true ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CR6_vue_vue_type_style_index_0_id_89ff484a_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CR6.vue?vue&type=style&index=0&id=89ff484a&lang=css&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/credavailtick/CR6.vue?vue&type=style&index=0&id=89ff484a&lang=css&scoped=true");


/***/ }),

/***/ "./resources/js/components/credavailtick/CR6.vue?vue&type=template&id=89ff484a&scoped=true":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/credavailtick/CR6.vue?vue&type=template&id=89ff484a&scoped=true ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CR6_vue_vue_type_template_id_89ff484a_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CR6_vue_vue_type_template_id_89ff484a_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CR6_vue_vue_type_template_id_89ff484a_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CR6.vue?vue&type=template&id=89ff484a&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/credavailtick/CR6.vue?vue&type=template&id=89ff484a&scoped=true");


/***/ })

}]);