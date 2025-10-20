"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_pv_nsia_ccca_CCCA-PV1_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pv/nsia/ccca/CCCA-PV1.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pv/nsia/ccca/CCCA-PV1.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");
/* harmony import */ var _shared_ContextMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/ContextMenu */ "./resources/js/components/shared/ContextMenu.vue");
/* harmony import */ var _shared_ContextMenuItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/ContextMenuItem */ "./resources/js/components/shared/ContextMenuItem.vue");
/* harmony import */ var _services_ebapis_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/ebapis.service */ "./resources/js/services/ebapis.service.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/auth.service */ "./resources/js/services/auth.service.js");
/* harmony import */ var _services_credit_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/credit.service */ "./resources/js/services/credit.service.js");
/* harmony import */ var _helpers_indexedDB__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../helpers/indexedDB */ "./resources/js/helpers/indexedDB.js");
/* harmony import */ var _helpers_indexedDB__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_helpers_indexedDB__WEBPACK_IMPORTED_MODULE_5__);
//  import {
//      MoreVerticalIcon,
//      ChevronUpIcon,
//      ChevronDownIcon,
//  } from "vue-feather-icons";




//  import { AirplayIcon } from 'vue-feather-icons'
//  import { BookOpenIcon } from 'vue-feather-icons'




window.$ = window.jQuery = __webpack_require__(/*! jquery/dist/jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "CCCA-PV1",
  display: "CCCAPV1",
  components: {
    MoreVerticalIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_6__.MoreVerticalIcon,
    ChevronUpIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_6__.ChevronUpIcon,
    ChevronDownIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_6__.ChevronDownIcon,
    ContextMenu: _shared_ContextMenu__WEBPACK_IMPORTED_MODULE_0__["default"],
    ContextMenuItem: _shared_ContextMenuItem__WEBPACK_IMPORTED_MODULE_1__["default"],
    AirplayIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_6__.AirplayIcon,
    TrashIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_6__.TrashIcon,
    PlusIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_6__.PlusIcon,
    BookOpenIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_6__.BookOpenIcon
  },
  props: {
    meta_data: Object,
    tb_name: String,
    tb_display_name: String
  },
  created: function created() {
    var _this = this;
    _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["default"].loadUserData().then(function (res) {
      _this.authcheck = true;
      _this.authcheckUsr = res.data;
      _this.authcheckStatus = res.status;
      _this.formDataToBeWatched.comite_credit_conseil_admin = _this.authcheckUsr.name;
    })["catch"](function (err) {
      _this.loadWithError(err);
    });
  },
  mounted: function mounted() {
    var _this$meta_data$dossi,
      _this$meta_data$dossi2,
      _this$note_risque_es$,
      _this2 = this,
      _this$meta_data$dossi3,
      _this$meta_data$dossi4,
      _this$meta_data$dossi5,
      _this$meta_data$dossi6,
      _this$meta_data$dossi8;
    var applied_templ_name = (_this$meta_data$dossi = this.meta_data['dossier_credit']) === null || _this$meta_data$dossi === void 0 ? void 0 : _this$meta_data$dossi.applied_templ_name;
    var tbArrays = this.determineCredPubTables(applied_templ_name);
    this.credpub00 = tbArrays[0];
    this.denomination_client = (_this$meta_data$dossi2 = this.meta_data['dossier_credit'][this.credpub00]) === null || _this$meta_data$dossi2 === void 0 ? void 0 : _this$meta_data$dossi2.denomination_client;
    this.cotation_risque_es = (_this$note_risque_es$ = this.note_risque_es.filter(function (item, index) {
      var _this2$meta_data;
      return item.note === ((_this2$meta_data = _this2.meta_data) === null || _this2$meta_data === void 0 || (_this2$meta_data = _this2$meta_data.dossier_credit) === null || _this2$meta_data === void 0 || (_this2$meta_data = _this2$meta_data.cred_pub_tb_5001) === null || _this2$meta_data === void 0 ? void 0 : _this2$meta_data.risque_note);
    })) === null || _this$note_risque_es$ === void 0 || (_this$note_risque_es$ = _this$note_risque_es$[0]) === null || _this$note_risque_es$ === void 0 ? void 0 : _this$note_risque_es$["risque"];
    this.groupe = (_this$meta_data$dossi3 = this.meta_data['dossier_credit'][this.credpub00]) === null || _this$meta_data$dossi3 === void 0 ? void 0 : _this$meta_data$dossi3.groupe;
    this.consentement_bic = (_this$meta_data$dossi4 = this.meta_data['dossier_credit'][this.credpub00]) === null || _this$meta_data$dossi4 === void 0 ? void 0 : _this$meta_data$dossi4.consentement_bic;
    this.grand_risque = (_this$meta_data$dossi5 = this.meta_data['dossier_credit'].cred_pub_tb_19501) === null || _this$meta_data$dossi5 === void 0 ? void 0 : _this$meta_data$dossi5.grand_risque;
    if (!['', null, undefined].includes((_this$meta_data$dossi6 = this.meta_data['dossier_credit'].cred_pub_tb_17501) === null || _this$meta_data$dossi6 === void 0 ? void 0 : _this$meta_data$dossi6.grand_risque)) {
      var _this$meta_data$dossi7;
      this.grand_risque = (_this$meta_data$dossi7 = this.meta_data['dossier_credit'].cred_pub_tb_17501) === null || _this$meta_data$dossi7 === void 0 ? void 0 : _this$meta_data$dossi7.grand_risque;
    }
    this.formatDate(this.date_approbation_ccdg = (_this$meta_data$dossi8 = this.meta_data['dossier_credit']) === null || _this$meta_data$dossi8 === void 0 || (_this$meta_data$dossi8 = _this$meta_data$dossi8.cred_pub_tb_40001) === null || _this$meta_data$dossi8 === void 0 ? void 0 : _this$meta_data$dossi8.date_approbation_ccdg);
    this.loadRetrieved();
    this.loadTbAttrs(); // charge les attributs + sous attributs des tables
    // helper.loadCurrencyFormatter();
    this.tableClosedOrOpened();
    // this.crdLd();
  },
  data: function data() {
    var vm = this;
    return {
      ebapisHost: _services_ebapis_service__WEBPACK_IMPORTED_MODULE_2__["default"].host,
      authcheck: false,
      authcheckUsr: null,
      authcheckStatus: null,
      watchInPause: false,
      initLoad: true,
      seen: true,
      seen1: true,
      seen2: true,
      seen5: true,
      credits: [],
      clients: [],
      secteurs_activites: [],
      dossier_credit: null,
      encours: null,
      placeholder: "Chercher clients",
      matcli: "matcli",
      nomcli: "nomcli",
      meta_parseable: {
        cred_pub_key: this.meta_data["cred_pub_key"],
        tb_name: this.tb_name
      },
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
      }],
      formDataToBeWatched: {
        comite_credit_conseil_admin: "",
        notes: []
      },
      avis_ccdg: [{
        membre_comite: "DG",
        comment: "",
        avis: "",
        date: ""
      }, {
        membre_comite: "DGA",
        comment: "",
        avis: "",
        date: ""
      }, {
        membre_comite: "DC",
        comment: "",
        avis: "",
        date: ""
      }
      // {
      //     membre_comite:"Directeur Central de l'Exploitation",
      //     comment:"",
      //     avis:"",
      //     date:"",
      // },
      ],
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
      denomination_client: null,
      cotation_risque_es: null,
      groupe: null,
      grand_risque: null,
      consentement_bic: null,
      date_approbation_ccdg: null,
      listingNote: false,
      credpub00: null
    };
  },
  methods: {
    tableClosedOrOpened: function tableClosedOrOpened() {
      this.seen = this.fetchClosedTables(this.tb_name + this.meta_data['cred_pub_key']);
    },
    openNotesModal: function openNotesModal() {
      var listing = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      this.listingNote = listing;
      this.$modal.show(this.tb_name);
    },
    formDataVars: function formDataVars(event) {
      this.formDataToBeWatched[event[0]] = event[1];
    },
    loadRetrieved: function loadRetrieved() {
      var lentb = this.meta_data["dossier_credit"]["tbs_in_use"];
      var createdKey = this.tb_name;
      var createdKeyArr = createdKey.split("tb");
      createdKey = "cred_pub_tb_" + createdKeyArr[1];
      if (lentb.length > 0) {
        var _this$meta_data$dossi9;
        if (this.meta_data["dossier_credit"][createdKey] != undefined) {
          this.formDataToBeWatched = this.meta_data["dossier_credit"][createdKey];
        }
        // Close table by default
        this.defaultRetract(false, (_this$meta_data$dossi9 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi9 === void 0 ? void 0 : _this$meta_data$dossi9.applied_templ_id);
      }
    },
    setTbVal: function setTbVal(val) {
      this.cred_pub_key = val;
    },
    loadWithError: function loadWithError(err) {
      // // window.location.href = "/login";
    },
    handleInput: function handleInput(evt) {},
    send2Backend: function send2Backend(res, newVal, oldVal) {
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
          var _this3 = this;
          // this.$Progress.finish();
          this.$emit("autosaving");
          // console.log(response)

          var tbFetcheData = response.data;
          if (tbFetcheData["is_success"] === true) {
            var _this$dossier_credit$, _this$dossier_credit$2, _this$dossier_credit$3, _this$dossier_credit$4, _this$dossier_credit;
            this.dossier_credit = tbFetcheData['dossier_credit'];
            this.denomination_client = (_this$dossier_credit$ = this.dossier_credit[this.credpub00]) === null || _this$dossier_credit$ === void 0 ? void 0 : _this$dossier_credit$.denomination_client;
            this.cotation_risque_es = this.note_risque_es.filter(function (item, index) {
              var _this3$meta_data;
              return item.note === ((_this3$meta_data = _this3.meta_data) === null || _this3$meta_data === void 0 || (_this3$meta_data = _this3$meta_data.dossier_credit) === null || _this3$meta_data === void 0 || (_this3$meta_data = _this3$meta_data.cred_pub_tb_5001) === null || _this3$meta_data === void 0 ? void 0 : _this3$meta_data.risque_note);
            })[0]["risque"];
            this.groupe = (_this$dossier_credit$2 = this.dossier_credit[this.credpub00]) === null || _this$dossier_credit$2 === void 0 ? void 0 : _this$dossier_credit$2.groupe;
            this.consentement_bic = (_this$dossier_credit$3 = this.dossier_credit[this.credpub00]) === null || _this$dossier_credit$3 === void 0 ? void 0 : _this$dossier_credit$3.consentement_bic;
            this.grand_risque = (_this$dossier_credit$4 = this.dossier_credit.cred_pub_tb_19001) === null || _this$dossier_credit$4 === void 0 ? void 0 : _this$dossier_credit$4.grand_risque;
            this.formatDate(this.date_approbation_ccdg = (_this$dossier_credit = this.dossier_credit) === null || _this$dossier_credit === void 0 || (_this$dossier_credit = _this$dossier_credit.cred_pub_tb_40001) === null || _this$dossier_credit === void 0 ? void 0 : _this$dossier_credit.date_approbation_ccdg);
            this.formDataToBeWatched.comite_credit_conseil_admin = this.authcheckUsr.name;
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
    retract: function retract() {
      this.seen = !this.seen;
      var a = {
        "tb_name": this.tb_name + this.meta_data['cred_pub_key'],
        "status": this.seen
      };
      EventBus.$emit("savedclosed-table", a);
    },
    // add defaultRetract
    defaultRetract: function defaultRetract(rc, ra) {
      if (ra != null) {
        this.seen = rc;
        var a = {
          "tb_name": this.tb_name + this.meta_data['cred_pub_key'],
          "status": this.seen
        };
        EventBus.$emit("savedclosed-table", a);
      }
    },
    retract1: function retract1() {
      this.seen1 = !this.seen1;
    },
    retract2: function retract2() {
      this.seen2 = !this.seen2;
    },
    deleteTB: function deleteTB() {
      if (confirm("Êtes-vous sûr de vouloir supprimer ce tableau ?")) {
        this.$emit("delete-tb", {
          tb_name: this.tb_name
        });
      }
    },
    loadTbAttrs: function loadTbAttrs() {
      var l = [];
      var topdivel = this.$refs.topdiv;
      // let k = document.querySelectorAll('.subdiv')
      var k = document.querySelectorAll(".subdiv" + this.tb_name);
      // console.log(k)
      k.forEach(function (e) {
        l.push(e.innerText);
      });
      var p = {
        name_of_title: topdivel.innerText,
        list_of_content: l,
        id: "ccca1-head"
      };
      // console.log(p)
      this.$emit("load-buffer", p);
    },
    credData: function credData(res) {
      this.credits = res.data;
    },
    send2Backend0: function send2Backend0(res) {
      this.authcheck = true;
      this.authcheckUsr = res.data;
      this.authcheckStatus = res.status;
      if (this.authcheckStatus === 401) {
        // window.location.href = "/login";
      }
      if (this.authcheck === true) {
        this.$axios.post(this.ebapisHost + "creditbuilder/api/v1/updatedoctitle/", {
          user: this.authcheckUsr,
          cred_pub_key: this.meta_parseable.cred_pub_key,
          filledData: {
            doss_name: this.formDataToBeWatched.nom_client + "_" + this.formDataToBeWatched.prefixe
          }
        }).then(function (response) {
          var tbFetcheData = response.data;
        }.bind(this))["catch"](function (error) {
          this.$Progress.finish();
          console.log(error);
        }.bind(this));
      } else {
        alert("Unauthenticated");
      }
    },
    autoRenamer: function autoRenamer() {
      var _this4 = this;
      _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["default"].loadUserData().then(function (res) {
        _this4.send2Backend0(res);
      })["catch"](function (err) {
        _this4.loadWithError(err);
      });
    },
    instruction2: function instruction2(id) {
      var id0 = '#' + id;
      window.$(id0).modal('show');
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
  },
  computed: {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pv/nsia/ccca/CCCA-PV1.vue?vue&type=template&id=8ca443ee&scoped=true":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pv/nsia/ccca/CCCA-PV1.vue?vue&type=template&id=8ca443ee&scoped=true ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm$formDataToBeWatch, _vm$formDataToBeWatch2;
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
  }, [_c("ContextMenu", {
    ref: "menu",
    attrs: {
      cred_pub_key: _vm.meta_parseable.cred_pub_key,
      id: _vm.tb_name,
      contextList: _vm.contextList
    }
  }), _vm._v(" "), _vm.seen === true ? _c("div", {
    staticClass: "card",
    staticStyle: {
      width: "100%",
      height: "100%"
    }
  }, [_c("br"), _vm._v(" "), _c("div", {
    staticClass: "card-header hdc pb-0 pt-2"
  }, [_c("h3", {
    ref: "topdiv",
    staticClass: "head",
    attrs: {
      id: "ccca1-head"
    }
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col"
  }, [_vm._v("\n                             " + _vm._s(_vm.tb_display_name) + " : CCCA-PV1\n                         ")]), _vm._v(" "), _c("div", {
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
    staticClass: "badge-sm"
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
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(0), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.denomination_client,
      expression: "denomination_client"
    }],
    staticClass: "form-control",
    attrs: {
      readonly: "",
      type: "text",
      id: "denomination_client"
    },
    domProps: {
      value: _vm.denomination_client
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.denomination_client = $event.target.value;
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(1), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.cotation_risque_es,
      expression: "cotation_risque_es"
    }],
    staticClass: "form-control",
    attrs: {
      required: "",
      type: "text",
      readonly: "",
      id: "cotation_risque_es"
    },
    domProps: {
      value: _vm.cotation_risque_es
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.cotation_risque_es = $event.target.value;
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(2), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model.lazy",
      value: _vm.groupe,
      expression: "groupe",
      modifiers: {
        lazy: true
      }
    }],
    staticClass: "form-control",
    attrs: {
      readonly: "",
      type: "text",
      id: "groupe"
    },
    domProps: {
      value: _vm.groupe
    },
    on: {
      change: function change($event) {
        _vm.groupe = $event.target.value;
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(3), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model.lazy",
      value: _vm.grand_risque,
      expression: "grand_risque",
      modifiers: {
        lazy: true
      }
    }],
    staticClass: "form-control",
    attrs: {
      readonly: "",
      type: "text",
      id: "grand_risque"
    },
    domProps: {
      value: _vm.grand_risque
    },
    on: {
      change: function change($event) {
        _vm.grand_risque = $event.target.value;
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(4), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model.lazy",
      value: _vm.consentement_bic,
      expression: "consentement_bic",
      modifiers: {
        lazy: true
      }
    }],
    staticClass: "form-control",
    attrs: {
      readonly: "",
      type: "text",
      id: "consentement_bic"
    },
    domProps: {
      value: _vm.consentement_bic
    },
    on: {
      change: function change($event) {
        _vm.consentement_bic = $event.target.value;
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(5), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model.lazy",
      value: _vm.date_approbation_ccdg,
      expression: "date_approbation_ccdg",
      modifiers: {
        lazy: true
      }
    }],
    staticClass: "form-control",
    attrs: {
      required: "",
      type: "text",
      readonly: "",
      id: "date_approbation_ccdg"
    },
    domProps: {
      value: _vm.date_approbation_ccdg
    },
    on: {
      change: function change($event) {
        _vm.date_approbation_ccdg = $event.target.value;
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(6), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model.lazy",
      value: _vm.formDataToBeWatched.comite_credit_conseil_admin,
      expression: "formDataToBeWatched.comite_credit_conseil_admin",
      modifiers: {
        lazy: true
      }
    }],
    staticClass: "form-control",
    attrs: {
      required: "",
      type: "text",
      readonly: "",
      id: "comite_credit_conseil_admin"
    },
    domProps: {
      value: _vm.formDataToBeWatched.comite_credit_conseil_admin
    },
    on: {
      change: function change($event) {
        return _vm.$set(_vm.formDataToBeWatched, "comite_credit_conseil_admin", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c("br"), _vm._v(" "), _c("div", {
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
  }, [_vm._v("\n                     Fermer le tableau\n                 ")])])]) : _c("div", {
    staticClass: "card card-width-height"
  }, [_c("br"), _vm._v(" "), _c("div", {
    staticClass: "card-header hdc pb-0 pt-2"
  }, [_c("h3", {
    staticClass: "head",
    attrs: {
      id: "ccca1-head"
    }
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col"
  }, [_vm._v("\n                             " + _vm._s(_vm.tb_display_name) + " : CCCA-PV1\n                         ")]), _vm._v(" "), _c("div", {
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
    staticClass: "badge-sm"
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
  })], 1)])])])])], 1), _vm._v(" "), _c("div", [_c("div", {
    staticClass: "modal fade modal-lg",
    attrs: {
      id: "instruction2",
      tabindex: "-1",
      "aria-labelledby": "instruction2",
      "aria-hidden": "true"
    }
  }, [_c("div", {
    staticClass: "modal-dialog",
    staticStyle: {
      width: "650px"
    }
  }, [_c("div", {
    staticClass: "modal-content"
  }, [_c("div", {
    staticClass: "modal-header"
  }, [_c("h5", {
    staticClass: "modal-title",
    attrs: {
      id: "instruction2"
    }
  }, [_vm._v("\n                             Instruction - " + _vm._s(_vm.tb_display_name) + " : Présentation du client\n                         ")]), _vm._v(" "), _c("button", {
    staticClass: "btn-close",
    attrs: {
      type: "button",
      "data-bs-dismiss": "modal",
      "aria-label": "Close"
    }
  })]), _vm._v(" "), _vm._m(7), _vm._v(" "), _vm._m(8)])])])]), _vm._v(" "), _c("note-modal", {
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
  return _c("label", {
    staticClass: "form-label"
  }, [_vm._v("Client\n                            "), _c("span", {
    staticStyle: {
      color: "red"
    }
  }, [_vm._v("*")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "cotation_risque_es"
    }
  }, [_vm._v(" Cotation du client :  "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label",
    attrs: {
      "for": ""
    }
  }, [_vm._v("\n                        Groupe"), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label",
    attrs: {
      "for": ""
    }
  }, [_vm._v("\n                            Grand risque"), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label",
    attrs: {
      "for": ""
    }
  }, [_vm._v("\n                        Consentement BIC"), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label",
    attrs: {
      "for": ""
    }
  }, [_vm._v("\n                        Date d'approbation CCDG"), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label",
    attrs: {
      "for": ""
    }
  }, [_vm._v("\n                        Comité de crédit au conseil d'adminnistration"), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "modal-body"
  }, [_c("img", {
    attrs: {
      src: "/images/capture_afg/signaletique.png",
      width: "100%; height:100%;"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "modal-footer"
  }, [_c("button", {
    staticClass: "btn btn-secondary",
    attrs: {
      type: "button",
      "data-bs-dismiss": "modal"
    }
  }, [_vm._v("Fermer")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pv/nsia/ccca/CCCA-PV1.vue?vue&type=style&index=0&id=8ca443ee&lang=css&scoped=true":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pv/nsia/ccca/CCCA-PV1.vue?vue&type=style&index=0&id=8ca443ee&lang=css&scoped=true ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\ninput[data-v-8ca443ee] {\n     /*border: 1px solid red;*/\n}\n*[data-v-8ca443ee] {\n     font-family: \"Google sans\";\n}\nlabel[data-v-8ca443ee] {\n     height: 10px;\n     font-size: 13px;\n}\ninput[data-v-8ca443ee],\n select[data-v-8ca443ee] {\n     height: 35px;\n     border-color: #34495e;\n     color: #57606f;\n     font-size: 13px;\n     font-weight: bold;\n}\n.card-width-height[data-v-8ca443ee] {\n     width: 100%;\n     height: 100%;\n}\n.head[data-v-8ca443ee] {\n     color: #f1f2f6;\n     font-size: 22px;\n}\n.hdc[data-v-8ca443ee] {\n     background-color: #57606f;\n}\n\n /*  List element styles */\n#menu ul[data-v-8ca443ee],\n #menu li[data-v-8ca443ee] {\n     list-style: none;\n     padding: 0;\n     margin: 0;\n     display: inline-block;\n}\n#menu li[data-v-8ca443ee] {\n     padding: 5px 0px;\n}\n\n /* Main menu links */\n#menu a[data-v-8ca443ee]:link,\n #menu a[data-v-8ca443ee]:visited,\n #menu a[data-v-8ca443ee]:active {\n     text-decoration: none;\n     color: var(--link2-color);\n     padding: 5px 7px;\n     font-weight: bold;\n     position: relative;\n     z-index: 2;\n}\n#menu a[data-v-8ca443ee]:hover,\n #menu a[data-v-8ca443ee]:focus {\n     background-color: var(--link-color);\n     color: var(--link2-color);\n     text-decoration: underline;\n}\n\n /* The submenu links container*/\n.subdrop[data-v-8ca443ee] {\n     background: var(--bg-color);\n     height: 0;\n     border-top: 0;\n     min-width: 100%;\n     left: 0;\n     margin: 0;\n     position: absolute;\n     text-align: left;\n     top: 100%;\n     visibility: hidden;\n     height: 1px;\n     overflow: hidden;\n     z-index: 10;\n}\n\n /* Dropdown Parent Link Style */\n.droplink[data-v-8ca443ee] {\n     display: inline-block;\n     min-width: -moz-fit-content;\n     min-width: fit-content;\n     position: relative;\n}\ninput[type=checkbox][data-v-8ca443ee] {\n     /* Double-sized Checkboxes */\n     /* IE */\n     /* FF */\n     /* Safari and Chrome */\n     /* Opera */\n     transform: scale(2);\n     padding: 10px;\n}\n\n /* List elements within the dropdown */\n.subdrop li[data-v-8ca443ee] {\n     display: block !important;\n     padding: 0 !important;\n}\n\n /* Links within the dropdown list */\n.subdrop a[data-v-8ca443ee] {\n     display: block;\n     padding: 12px 20px;\n     white-space: nowrap;\n}\n\n /* Allows links to show on hover/focus and through keyboard navigation via focus-within */\n.droplink:hover .subdrop[data-v-8ca443ee] {\n     visibility: visible;\n     height: auto;\n     z-index: 11;\n}\n\n /* Separate these to avoid IE completely ignoring the css above */\n.droplink:focus-within .subdrop[data-v-8ca443ee] {\n     visibility: visible;\n     height: auto;\n     z-index: 11;\n}\n.relook-header[data-v-8ca443ee] {\n    color: #000;\n    background-color: #f4f3f3;\n    padding: 2px;\n    border-bottom: 1px solid #b6b8bb;\n}\n.badge-sm[data-v-8ca443ee] {\n     display: inline-block;\n     width: 15px;\n     height: 15px;\n     background: rgba(255, 0, 0, 0.882);\n     color: white;\n     font-size: 12px;\n     font-weight: 500;\n     border-radius: 100%;\n     position: absolute;\n     top: -20%;\n     left: 55%;\n     text-align: center;\n}\n ", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pv/nsia/ccca/CCCA-PV1.vue?vue&type=style&index=0&id=8ca443ee&lang=css&scoped=true":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pv/nsia/ccca/CCCA-PV1.vue?vue&type=style&index=0&id=8ca443ee&lang=css&scoped=true ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CCCA_PV1_vue_vue_type_style_index_0_id_8ca443ee_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CCCA-PV1.vue?vue&type=style&index=0&id=8ca443ee&lang=css&scoped=true */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pv/nsia/ccca/CCCA-PV1.vue?vue&type=style&index=0&id=8ca443ee&lang=css&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CCCA_PV1_vue_vue_type_style_index_0_id_8ca443ee_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CCCA_PV1_vue_vue_type_style_index_0_id_8ca443ee_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/pv/nsia/ccca/CCCA-PV1.vue":
/*!***********************************************************!*\
  !*** ./resources/js/components/pv/nsia/ccca/CCCA-PV1.vue ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CCCA_PV1_vue_vue_type_template_id_8ca443ee_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CCCA-PV1.vue?vue&type=template&id=8ca443ee&scoped=true */ "./resources/js/components/pv/nsia/ccca/CCCA-PV1.vue?vue&type=template&id=8ca443ee&scoped=true");
/* harmony import */ var _CCCA_PV1_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CCCA-PV1.vue?vue&type=script&lang=js */ "./resources/js/components/pv/nsia/ccca/CCCA-PV1.vue?vue&type=script&lang=js");
/* harmony import */ var _CCCA_PV1_vue_vue_type_style_index_0_id_8ca443ee_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CCCA-PV1.vue?vue&type=style&index=0&id=8ca443ee&lang=css&scoped=true */ "./resources/js/components/pv/nsia/ccca/CCCA-PV1.vue?vue&type=style&index=0&id=8ca443ee&lang=css&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _CCCA_PV1_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _CCCA_PV1_vue_vue_type_template_id_8ca443ee_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _CCCA_PV1_vue_vue_type_template_id_8ca443ee_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "8ca443ee",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/pv/nsia/ccca/CCCA-PV1.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/pv/nsia/ccca/CCCA-PV1.vue?vue&type=script&lang=js":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/pv/nsia/ccca/CCCA-PV1.vue?vue&type=script&lang=js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CCCA_PV1_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CCCA-PV1.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pv/nsia/ccca/CCCA-PV1.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CCCA_PV1_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/pv/nsia/ccca/CCCA-PV1.vue?vue&type=style&index=0&id=8ca443ee&lang=css&scoped=true":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/components/pv/nsia/ccca/CCCA-PV1.vue?vue&type=style&index=0&id=8ca443ee&lang=css&scoped=true ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CCCA_PV1_vue_vue_type_style_index_0_id_8ca443ee_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CCCA-PV1.vue?vue&type=style&index=0&id=8ca443ee&lang=css&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pv/nsia/ccca/CCCA-PV1.vue?vue&type=style&index=0&id=8ca443ee&lang=css&scoped=true");


/***/ }),

/***/ "./resources/js/components/pv/nsia/ccca/CCCA-PV1.vue?vue&type=template&id=8ca443ee&scoped=true":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/pv/nsia/ccca/CCCA-PV1.vue?vue&type=template&id=8ca443ee&scoped=true ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CCCA_PV1_vue_vue_type_template_id_8ca443ee_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CCCA_PV1_vue_vue_type_template_id_8ca443ee_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CCCA_PV1_vue_vue_type_template_id_8ca443ee_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CCCA-PV1.vue?vue&type=template&id=8ca443ee&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pv/nsia/ccca/CCCA-PV1.vue?vue&type=template&id=8ca443ee&scoped=true");


/***/ })

}]);