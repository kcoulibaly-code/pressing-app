"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_forms_afg_bo_BO-CV0_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/bo/BO-CV0.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/bo/BO-CV0.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");
/* harmony import */ var _shared_ContextMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/ContextMenu */ "./resources/js/components/shared/ContextMenu.vue");
/* harmony import */ var _shared_ContextMenuItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/ContextMenuItem */ "./resources/js/components/shared/ContextMenuItem.vue");
/* harmony import */ var _vueform_multiselect_dist_multiselect_vue2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vueform/multiselect/dist/multiselect.vue2 */ "./node_modules/@vueform/multiselect/dist/multiselect.vue2.js");
/* harmony import */ var _services_ebapis_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/ebapis.service */ "./resources/js/services/ebapis.service.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/auth.service */ "./resources/js/services/auth.service.js");
/* harmony import */ var _services_connects_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/connects.service */ "./resources/js/services/connects.service.js");
/* harmony import */ var _services_proxy_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../services/proxy.service */ "./resources/js/services/proxy.service.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");









window.$ = window.jQuery = __webpack_require__(/*! jquery/dist/jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Checklist_primaire",
  display: "Checklist primaire",
  components: {
    PlusIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_7__.PlusIcon,
    TrashIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_7__.TrashIcon,
    MoreVerticalIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_7__.MoreVerticalIcon,
    ChevronUpIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_7__.ChevronUpIcon,
    ChevronDownIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_7__.ChevronDownIcon,
    ContextMenu: _shared_ContextMenu__WEBPACK_IMPORTED_MODULE_0__["default"],
    ContextMenuItem: _shared_ContextMenuItem__WEBPACK_IMPORTED_MODULE_1__["default"],
    Multiselect: _vueform_multiselect_dist_multiselect_vue2__WEBPACK_IMPORTED_MODULE_2__["default"],
    AirplayIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_7__.AirplayIcon
  },
  props: {
    meta_data: Object,
    tb_name: String,
    tb_display_name: String
  },
  created: function created() {},
  mounted: function mounted() {
    var _this = this;
    this.tableClosedOrOpened();
    this.loadRetrieved();
    this.loadTbAttrs();
    EventBus.$on("created-extra-file-template", function (data) {
      _this.bo_check_list_diligeances.forEach(function (element, index) {
        var _data$template;
        var template_name = "Pièce(s) jointe(s) -bo_check_list_diligeances" + index + "_" + _this.$route.params.templateId;
        if (template_name == (data === null || data === void 0 || (_data$template = data.template) === null || _data$template === void 0 ? void 0 : _data$template.name)) {
          var _data$template2, _data$template3, _data$template4;
          _this.bo_check_list_diligeances[index]["template"] = {
            id: data === null || data === void 0 || (_data$template2 = data.template) === null || _data$template2 === void 0 ? void 0 : _data$template2.id,
            name: data === null || data === void 0 || (_data$template3 = data.template) === null || _data$template3 === void 0 ? void 0 : _data$template3.name,
            slug: data === null || data === void 0 || (_data$template4 = data.template) === null || _data$template4 === void 0 ? void 0 : _data$template4.slug
          };
          _this.handleInput();
        }
      });
    });
    EventBus.$on("updated-extra-file-upload", function (data) {
      _this.getFiles();
    });
    this.getFiles();
  },
  computed: {},
  data: function data() {
    var vm = this;
    return {
      ebapisHost: _services_ebapis_service__WEBPACK_IMPORTED_MODULE_3__["default"].host,
      authcheck: false,
      authcheckUsr: null,
      authcheckStatus: null,
      watchInPause: false,
      initLoad: true,
      seen: true,
      seen1: true,
      seen2: true,
      seen3: true,
      seen4: true,
      seen5: true,
      connectsHost: _services_connects_service__WEBPACK_IMPORTED_MODULE_5__["default"].loadablehost(),
      duree_credit0: null,
      mode_paiement0: null,
      listingNote: false,
      contextList: [
      // Ajouter note
      {
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
      meta_parseable: {
        cred_pub_key: this.meta_data["cred_pub_key"],
        tb_name: this.tb_name
      },
      bo_check_list_diligeances: [{
        id: (0,uuid__WEBPACK_IMPORTED_MODULE_8__["default"])(),
        name: "S'assurer du respect du circuit de validation du dossier de crédit",
        value: "",
        parent: "",
        numero_compte: "",
        ss_obj: false,
        checked: false,
        disabled: false,
        files: 0,
        template: "",
        comment: "",
        from_monteur_doss: false
      }
      // {
      //     id: uuidv4(),
      //     name: "Vérifier l'existence dans le dossier de crédit, du cachet de la DAJ attestant du recueil des garanties ",
      //     value: "",
      //     parent: "",
      //     numero_compte: "",
      //     ss_obj: false,
      //     checked: false,
      //     disabled: false,
      //     files: 0,
      //     template: "",
      //     comment: "",
      //     from_monteur_doss: false,
      // },
      // {
      //     id: uuidv4(),
      //     name: "S’assurer de la signature de la convention de crédit par les parties",
      //     value: "",
      //     parent: "",
      //     numero_compte: "",
      //     ss_obj: true,
      //     checked: false,
      //     disabled: false,
      //     files: 0,
      //     template: "",
      //     comment: "",
      //     from_monteur_doss: false,
      // },
      // {
      //     id: uuidv4(),
      //     name: "S'assurer de l'existence dans le dossier de crédit, de l'attestation de règlement des frais notariés (pour les prêts immobiliers)",
      //     value: "",
      //     parent: "",
      //     numero_compte: "",
      //     ss_obj: true,
      //     checked: false,
      //     disabled: false,
      //     files: 0,
      //     template: "",
      //     comment: "",
      //     from_monteur_doss: false,
      // },
      // {
      //     id: uuidv4(),
      //     name: "S'assurer de l'existence de tous les éléments requis pour la constitution d'un dossier de crédit, selon la procédure",
      //     value: "",
      //     parent: "",
      //     numero_compte: "",
      //     ss_obj: true,
      //     checked: false,
      //     disabled: false,
      //     files: 0,
      //     template: "",
      //     comment: "",
      //     from_monteur_doss: false,
      // },
      // {
      //     id: uuidv4(),
      //     name: "S'assurer du respect des conditions de mise en place de tirage (décaissement des fonds) telles que mentionnées dans la convention de crédt",
      //     value: "",
      //     parent: "",
      //     numero_compte: "",
      //     ss_obj: true,
      //     checked: false,
      //     disabled: false,
      //     files: 0,
      //     template: "",
      //     comment: "",
      //     from_monteur_doss: false,
      // },
      // {
      //     id: uuidv4(),
      //     name: "S'assurer de la conformité de la signature du client (Cachet + Visa du gestionnaire)",
      //     value: "",
      //     parent: "",
      //     numero_compte: "",
      //     ss_obj: true,
      //     checked: false,
      //     disabled: false,
      //     files: 0,
      //     template: "",
      //     comment: "",
      //     from_monteur_doss: false,
      // },
      ],
      formDataToBeWatched: {
        notes: [],
        bo_check_list_diligeances: [],
        bref_commentaire: ""
      },
      files: [],
      countries: []
    };
  },
  methods: {
    handleDoubleClickOrClick: function handleDoubleClickOrClick(event, index, element) {
      var _this2 = this;
      EventBus.$emit("open-extra-file-explorer");
      setTimeout(function () {
        EventBus.$emit("data-extra-file-explorer", {
          name: "Pièce(s) jointe(s) {(*)}bo_check_list_diligeances" + index + "_" + _this2.$route.params.templateId,
          view: element === null || element === void 0 ? void 0 : element.from_monteur_doss
        });
      }, 500);
    },
    getFiles: function getFiles() {
      var _this3 = this;
      _services_proxy_service__WEBPACK_IMPORTED_MODULE_6__["default"].proxyEbapis({
        url: this.connectsHost + 'api/get-files',
        method: 'POST',
        data: {
          file_identity: this.meta_data["dossier_credit"].cred_pub_key
        }
      })
      //this.$axios.post(this.connectsHost + 'api/get-files', { file_identity: this.meta_data["dossier_credit"].cred_pub_key })
      .then(function (res) {
        var _res$data$data, _res$data$data2;
        // console.log("resres55",res);
        res.data = JSON.parse(res.data);
        if (((_res$data$data = res.data.data) === null || _res$data$data === void 0 ? void 0 : _res$data$data.length) > 0 || ((_res$data$data2 = res.data.data) === null || _res$data$data2 === void 0 ? void 0 : _res$data$data2.length) != null) {
          _this3.files = res.data.data;
          // console.log("filesfiles",this.files);
          _this3.bo_check_list_diligeances.forEach(function (element, index) {
            var count = 0;
            _this3.files.forEach(function (file) {
              var _element$template;
              if ((file === null || file === void 0 ? void 0 : file.extra_file_template_id) != null && (element === null || element === void 0 || (_element$template = element.template) === null || _element$template === void 0 ? void 0 : _element$template.id) == (file === null || file === void 0 ? void 0 : file.extra_file_template_id)) {
                count++;
              }
            });
            _this3.bo_check_list_diligeances[index]['files'] = count;
            _this3.handleInput();
          });
        }
      })["catch"](function (err) {
        console.error(err);
      });
    },
    tableClosedOrOpened: function tableClosedOrOpened() {
      this.seen = this.fetchClosedTables(this.tb_name + this.meta_data["cred_pub_key"]);
    },
    openNotesModal: function openNotesModal() {
      var listing = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      this.listingNote = listing;
      this.$modal.show(this.tb_name);
    },
    checkboxValCashCall: function checkboxValCashCall(event, index) {
      if (event.target.checked) {
        this.bo_check_list_diligeances[index]["value"] = event.target.value;
      } else {
        this.bo_check_list_diligeances[index]["value"] = "";
      }
      this.handleInput();
    },
    loadRetrieved: function loadRetrieved() {
      var _this4 = this;
      var lentb = this.meta_data["dossier_credit"]["tbs_in_use"];
      var createdKey = this.tb_name;
      var createdKeyArr = createdKey.split("tb");
      createdKey = "cred_pub_tb_" + createdKeyArr[1];

      // this.defaultRetract(
      //     false,
      //     this.meta_data["dossier_credit"]?.applied_templ_id
      // );

      if (this.meta_data["dossier_credit"][createdKey] == undefined) {
        // this.formDataToBeWatched =
        //     this.meta_data["dossier_credit"]["cred_pub_tb_300101"];

        if (!['', null, undefined].includes(this.meta_data["dossier_credit"]["cred_pub_tb_300101"])) {
          var _this$meta_data$dossi;
          if (((_this$meta_data$dossi = this.meta_data["dossier_credit"]["cred_pub_tb_300101"]) === null || _this$meta_data$dossi === void 0 ? void 0 : _this$meta_data$dossi.bo_check_list_diligeances) != "") {
            var _this$meta_data$dossi2;
            this.bo_check_list_diligeances = (_this$meta_data$dossi2 = this.meta_data["dossier_credit"]["cred_pub_tb_300101"]) === null || _this$meta_data$dossi2 === void 0 ? void 0 : _this$meta_data$dossi2["bo_check_list_diligeances"];
          }
        }
      }
      if (lentb.length > 0) {
        if (this.meta_data["dossier_credit"][createdKey] != undefined) {
          var _this$meta_data$dossi3;
          this.formDataToBeWatched = this.meta_data["dossier_credit"][createdKey];
          if (((_this$meta_data$dossi3 = this.meta_data["dossier_credit"][createdKey]) === null || _this$meta_data$dossi3 === void 0 ? void 0 : _this$meta_data$dossi3.bo_check_list_diligeances) != "") {
            var _this$meta_data$dossi4;
            this.bo_check_list_diligeances = (_this$meta_data$dossi4 = this.meta_data["dossier_credit"][createdKey]) === null || _this$meta_data$dossi4 === void 0 ? void 0 : _this$meta_data$dossi4["bo_check_list_diligeances"];
          }
          if (!['', null, undefined].includes(this.meta_data["dossier_credit"]["cred_pub_tb_300101"])) {
            var _this$meta_data$dossi5;
            if (((_this$meta_data$dossi5 = this.meta_data["dossier_credit"]["cred_pub_tb_300101"]) === null || _this$meta_data$dossi5 === void 0 ? void 0 : _this$meta_data$dossi5.bo_check_list_diligeances) != "") {
              var _this$meta_data$dossi6;
              var bo_check_list_diligeances_from_monteur_doss = (_this$meta_data$dossi6 = this.meta_data["dossier_credit"]["cred_pub_tb_300101"]) === null || _this$meta_data$dossi6 === void 0 ? void 0 : _this$meta_data$dossi6["bo_check_list_diligeances"];
              this.bo_check_list_diligeances.forEach(function (el, ind) {
                if (el !== null && el !== void 0 && el.from_monteur_doss) {
                  var found = bo_check_list_diligeances_from_monteur_doss.find(function (el0) {
                    return (el0 === null || el0 === void 0 ? void 0 : el0.id) == (el === null || el === void 0 ? void 0 : el.id);
                  });
                  if (found) {
                    _this4.bo_check_list_diligeances[ind] = found;
                  }
                }
              });
              var new_lists = [];
              bo_check_list_diligeances_from_monteur_doss.forEach(function (el, ind) {
                var found = _this4.bo_check_list_diligeances.find(function (el0) {
                  return (el0 === null || el0 === void 0 ? void 0 : el0.id) == (el === null || el === void 0 ? void 0 : el.id);
                });
                if ([null, undefined].includes(found)) {
                  _this4.bo_check_list_diligeances.splice(14, 0, el);
                }
              });
              this.handleInput();
            }
          }
        }
      }
    },
    convertNumber: function convertNumber(valeur) {
      return Number(String(valeur).replace(/\s+/g, ""));
    },
    // AJOUTER
    launchAutoSaver: function launchAutoSaver() {
      var _this5 = this;
      _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["default"].loadUserData().then(function (res) {
        _this5.send2Backend(res, 0, 0);
      })["catch"](function (err) {
        _this5.loadWithError(err);
      });
    },
    addMore: function addMore() {
      this.bo_check_list_diligeances.push({
        id: (0,uuid__WEBPACK_IMPORTED_MODULE_8__["default"])(),
        name: "",
        value: "",
        parent: "",
        numero_compte: "",
        ss_obj: false,
        checked: true,
        disabled: false,
        files: 0,
        template: "",
        comment: "",
        from_monteur_doss: false
      });
    },
    remove: function remove(index) {
      this.bo_check_list_diligeances.splice(index, 1);
      this.handleInput();
    },
    somX3: function somX3(ob, key) {
      var som = 0;
      ob.filter(function (elm) {
        var _elm$key;
        som += parseInt((_elm$key = elm[key]) === null || _elm$key === void 0 ? void 0 : _elm$key.toString().replace(/\s/g, ""));
      });
      return som;
    },
    removeByKey: function removeByKey(index, removeList) {
      this[removeList].splice(index, 1);
    },
    loadTbAttrs: function loadTbAttrs() {
      var l = [];
      var topdivel = this.$refs.topdiv;
      // let k = document.querySelectorAll('.subdiv')
      var k = document.querySelectorAll(".subdiv" + this.tb_name);
      if (k.length > 0) {
        k.forEach(function (e) {
          l.push(e.innerText);
        });
      }
      var p = {
        name_of_title: topdivel.innerText,
        list_of_content: l,
        id: "dcp-ppo7-head"
      };
      this.$emit("load-buffer", p);
    },
    retract: function retract() {
      this.seen = !this.seen;
      if (this.meta_data && this.meta_data["cred_pub_key"]) {
        var a = {
          tb_name: this.tb_name + this.meta_data["cred_pub_key"],
          status: this.seen
        };
        EventBus.$emit("savedclosed-table", a);
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
          filledData: this.formDataToBeWatched
        }).then(function (response) {
          this.$emit("autosaving");
          var tbFetcheData = response.data;
          if (tbFetcheData["is_success"] === true) {
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
    handleInput: function handleInput() {
      this.formDataToBeWatched.bo_check_list_diligeances = this.bo_check_list_diligeances;
    },
    retract1: function retract1() {
      this.seen1 = !this.seen1;
    },
    retract2: function retract2() {
      this.seen2 = !this.seen2;
    },
    retract3: function retract3() {
      this.seen3 = !this.seen3;
    },
    retract4: function retract4() {
      this.seen4 = !this.seen4;
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
        // ? Cache management
        // this.saveDataInCache(newVal, oldVal);
      },
      deep: true,
      immediate: true
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/bo/BO-CV0.vue?vue&type=template&id=a66a5a52&scoped=true":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/bo/BO-CV0.vue?vue&type=template&id=a66a5a52&scoped=true ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************/
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
      id: "dcp-ppo7-head"
    }
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col"
  }, [_vm._v("\n                            " + _vm._s(_vm.tb_display_name) + " : Checklist primaire\n                        ")]), _vm._v(" "), _c("div", {
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
  }, [_c("span", [_vm._v("\n                                            " + _vm._s(_vm.formDataToBeWatched.notes.length) + "\n                                        ")])])])]) : _vm._e(), _vm._v(" "), _c("chevron-up-icon", {
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
    staticClass: "row p-0"
  }, [_c("div", {
    staticClass: "col-12 position-relative"
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-bordered"
  }, [_vm._m(0), _vm._v(" "), _c("tbody", [_vm._l(_vm.bo_check_list_diligeances, function (el, index) {
    return _c("tr", {
      key: index
    }, [[_c("td", [index > 7 && !(el !== null && el !== void 0 && el.from_monteur_doss) ? _c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: el.name,
        expression: "el.name"
      }],
      staticClass: "form-control",
      staticStyle: {
        "min-width": "250px"
      },
      attrs: {
        type: "text",
        required: "",
        disabled: el === null || el === void 0 ? void 0 : el.from_monteur_doss
      },
      domProps: {
        value: el.name
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(el, "name", $event.target.value);
        }
      }
    }) : _c("span", {
      "class": {
        floating_text: (el === null || el === void 0 ? void 0 : el.ss_obj) == true
      }
    }, [_vm._v(_vm._s(el.name))])]), _vm._v(" "), _c("td", [_c("div", {
      staticClass: "m-2 mr-4",
      staticStyle: {
        "vertical-align": "middle"
      }
    }, [_c("input", {
      staticClass: "form-check-input",
      staticStyle: {
        width: "20px",
        height: "20px"
      },
      attrs: {
        type: "checkbox",
        value: "Oui",
        id: "oui" + index,
        disabled: el === null || el === void 0 ? void 0 : el.from_monteur_doss
      },
      domProps: {
        checked: el.value == "Oui"
      },
      on: {
        change: function change($event) {
          return _vm.checkboxValCashCall($event, index);
        }
      }
    })])]), _vm._v(" "), _c("td", [_c("div", {
      staticClass: "m-2 mr-4",
      staticStyle: {
        "vertical-align": "middle"
      }
    }, [_c("input", {
      staticClass: "form-check-input",
      staticStyle: {
        width: "20px",
        height: "20px"
      },
      attrs: {
        type: "checkbox",
        value: "Non",
        id: "non" + index,
        disabled: el === null || el === void 0 ? void 0 : el.from_monteur_doss
      },
      domProps: {
        checked: el.value == "Non"
      },
      on: {
        change: function change($event) {
          return _vm.checkboxValCashCall($event, index);
        }
      }
    })])]), _vm._v(" "), _c("td", {
      staticClass: "text-center"
    }, [_c("div", {
      staticClass: "m-2 mr-4",
      staticStyle: {
        "vertical-align": "middle"
      }
    }, [_c("input", {
      staticClass: "form-check-input",
      staticStyle: {
        width: "20px",
        height: "20px"
      },
      attrs: {
        type: "checkbox",
        value: "Non applicable",
        id: "non_applicable" + index,
        disabled: el === null || el === void 0 ? void 0 : el.from_monteur_doss
      },
      domProps: {
        checked: el.value == "Non applicable"
      },
      on: {
        change: function change($event) {
          return _vm.checkboxValCashCall($event, index);
        }
      }
    })])]), _vm._v(" "), _c("td", [el.value == "Oui" ? _c("div", {
      staticClass: "d-flex align-items-center text-center justify-content-center"
    }, [_c("div", [(el === null || el === void 0 ? void 0 : el.files) > 0 ? _c("span", {
      staticClass: "p-1 px-2 mx-2 text-nowrap",
      staticStyle: {
        "background-color": "rgb(44, 62, 80)",
        color: "white",
        "font-size": "13px",
        "border-radius": "5px",
        "margin-left": "0!important",
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
          return _vm.handleDoubleClickOrClick($event, index, el);
        }
      }
    }, [_c("i", {
      staticClass: "icofont-attachment"
    })])]) : _vm._e()]) : _c("div", {
      staticClass: "text-center text-danger"
    }, [_vm._v("\n                                                    Aucun fichier(s) uploadé(s)\n                                                ")])]), _vm._v(" "), _c("td", [_c("textarea", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: el.comment,
        expression: "el.comment"
      }],
      staticClass: "form-control",
      staticStyle: {
        "min-width": "150px"
      },
      attrs: {
        cols: "1",
        rows: "1",
        disabled: el === null || el === void 0 ? void 0 : el.from_monteur_doss
      },
      domProps: {
        value: el.comment
      },
      on: {
        change: _vm.handleInput,
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(el, "comment", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("td", [index > 7 && !(el !== null && el !== void 0 && el.from_monteur_doss) ? _c("button", {
      staticStyle: {
        "background-color": "transparent",
        border: "none"
      },
      attrs: {
        type: "button",
        title: "Supprimer ce document"
      },
      on: {
        click: function click($event) {
          return _vm.remove(index);
        }
      }
    }, [_c("trash-icon", {
      staticClass: "custom-class",
      attrs: {
        size: "21"
      }
    })], 1) : _vm._e()])]], 2);
  }), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "text-right",
    attrs: {
      colspan: "8"
    }
  }, [_c("button", {
    staticStyle: {
      "background-color": "#2c3e50",
      color: "#ffffff",
      "border-radius": "15%",
      border: "none"
    },
    attrs: {
      type: "button",
      title: "Ajouter un document"
    },
    on: {
      click: function click($event) {
        return _vm.addMore();
      }
    }
  }, [_c("plus-icon", {
    staticClass: "custom-class",
    attrs: {
      size: "21"
    }
  })], 1)])])], 2)])]), _vm._v(" "), _c("div", [_vm._m(1), _vm._v(" "), _c("vue-editor", {
    attrs: {
      id: "bref_commentaire"
    },
    on: {
      "update-value": function updateValue($event) {
        _vm.formDataToBeWatched[$event[0]] = $event[1];
      }
    },
    model: {
      value: _vm.formDataToBeWatched.bref_commentaire,
      callback: function callback($$v) {
        _vm.$set(_vm.formDataToBeWatched, "bref_commentaire", $$v);
      },
      expression: "formDataToBeWatched.bref_commentaire\n                                    "
    }
  })], 1)])]), _vm._v(" "), _c("div", {
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
  }, [_vm._v("\n                    Fermer le tableau\n                ")])])]) : _c("div", {
    staticClass: "card card-width-height"
  }, [_c("br"), _vm._v(" "), _c("div", {
    staticClass: "card-header hdc pb-0 pt-2"
  }, [_c("h6", {
    staticClass: "head",
    attrs: {
      id: "dcp-ppo7-head"
    }
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col"
  }, [_vm._v("\n                            " + _vm._s(_vm.tb_display_name) + " : Checklist primaire\n                        ")]), _vm._v(" "), _c("div", {
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
  }, [_c("span", [_vm._v("\n                                            " + _vm._s(_vm.formDataToBeWatched.notes.length) + "\n                                        ")])])])]) : _vm._e(), _vm._v(" "), _c("chevron-down-icon", {
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
  })], 1)])])])])], 1), _vm._v(" "), _c("modal", {
    attrs: {
      name: "documentation_somise",
      width: 500,
      resizable: "",
      height: "300"
    }
  }, [_c("div", {
    staticClass: "image1"
  })]), _vm._v(" "), _c("note-modal", {
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
  return _c("thead", [_c("tr", {
    staticClass: "text-center"
  }, [_c("td", {
    staticClass: "th vertical-middle fw-bold"
  }, [_c("label", [_vm._v("LIBELLE")])]), _vm._v(" "), _c("td", {
    staticClass: "th vertical-middle fw-bold"
  }, [_c("label", [_vm._v("OUI ")])]), _vm._v(" "), _c("td", {
    staticClass: "th vertical-middle fw-bold"
  }, [_c("label", [_vm._v("NON ")])]), _vm._v(" "), _c("td", {
    staticClass: "th vertical-middle fw-bold"
  }, [_c("label", [_vm._v("NON APPLICABLE")])]), _vm._v(" "), _c("td", {
    staticClass: "th vertical-middle fw-bold"
  }, [_c("label", [_vm._v("FICHIERS ATTACHES")])]), _vm._v(" "), _c("td", {
    staticClass: "th vertical-middle fw-bold"
  }, [_c("label", [_vm._v("COMMENTAIRE")])]), _vm._v(" "), _c("td", {
    staticClass: "th vertical-middle fw-bold"
  }, [_c("label")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", [_c("b", [_vm._v("Commentaire")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/bo/BO-CV0.vue?vue&type=style&index=0&id=a66a5a52&lang=css&scoped=true":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/bo/BO-CV0.vue?vue&type=style&index=0&id=a66a5a52&lang=css&scoped=true ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n*[data-v-a66a5a52] {\r\n    font-family: \"Google sans\";\n}\nlabel[data-v-a66a5a52] {\r\n    height: 10px;\r\n    font-size: 13px;\n}\ninput[type=\"text\"][data-v-a66a5a52],\r\ninput[type=\"date\"][data-v-a66a5a52],\r\nselect[data-v-a66a5a52] {\r\n    height: 35px;\r\n    border-color: #34495e;\r\n    color: #57606f;\r\n    font-size: 13px;\r\n    font-weight: bold;\n}\n.card-width-height[data-v-a66a5a52] {\r\n    width: 100%;\r\n    height: 100%;\n}\n.head[data-v-a66a5a52] {\r\n    color: #f1f2f6;\r\n    font-size: 22px;\n}\n.hdc[data-v-a66a5a52] {\r\n    background-color: #57606f;\n}\n.card-width-height[data-v-a66a5a52] {\r\n    width: 100%;\r\n    height: 100%;\n}\n.head[data-v-a66a5a52] {\r\n    color: #f1f2f6;\r\n    font-size: 22px;\n}\n.review[data-v-a66a5a52] {\r\n    width: 180px !important;\n}\n.engagement input[type=\"text\"][data-v-a66a5a52],\r\ninput[type=\"date\"][data-v-a66a5a52] {\r\n    width: 100% !important;\n}\n.th[data-v-a66a5a52] {\r\n    padding: 4px;\r\n    padding-bottom: 0px;\n}\nselect[data-v-a66a5a52] {\r\n    width: 250px;\n}\n.badge-sm[data-v-a66a5a52] {\r\n    display: inline-block;\r\n    width: 15px;\r\n    height: 15px;\r\n    background: rgba(255, 0, 0, 0.882);\r\n    color: white;\r\n    font-size: 12px;\r\n    font-weight: 500;\r\n    border-radius: 100%;\r\n    position: absolute;\r\n    top: -20%;\r\n    left: 55%;\r\n    text-align: center;\n}\n.relook-header[data-v-a66a5a52] {\r\n    color: #000;\r\n    background-color: #f4f3f3;\r\n    padding: 5px;\r\n    border-bottom: 1px solid #b6b8bb;\n}\ninput[type=checkbox][data-v-a66a5a52] {\r\n    /* Double-sized Checkboxes */\r\n    /* IE */\r\n    /* FF */\r\n    /* Safari and Chrome */\r\n    /* Opera */\r\n    transform: scale(1);\r\n    padding: 10px;\r\n    cursor: pointer;\n}\n.image1[data-v-a66a5a52] {\r\n    background: url(\"/images/capture/exemples/documentation_somise.png\") no-repeat;\r\n    background-position: center;\r\n    background-size: contain;\r\n\r\n    width: 500px;\r\n    height: 300px;\n}\n.floating_text[data-v-a66a5a52] {\r\n    /* float: right; */\r\n    /* text-align: right; */\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/bo/BO-CV0.vue?vue&type=style&index=0&id=a66a5a52&lang=css&scoped=true":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/bo/BO-CV0.vue?vue&type=style&index=0&id=a66a5a52&lang=css&scoped=true ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BO_CV0_vue_vue_type_style_index_0_id_a66a5a52_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./BO-CV0.vue?vue&type=style&index=0&id=a66a5a52&lang=css&scoped=true */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/bo/BO-CV0.vue?vue&type=style&index=0&id=a66a5a52&lang=css&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BO_CV0_vue_vue_type_style_index_0_id_a66a5a52_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BO_CV0_vue_vue_type_style_index_0_id_a66a5a52_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/forms/afg/bo/BO-CV0.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/forms/afg/bo/BO-CV0.vue ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _BO_CV0_vue_vue_type_template_id_a66a5a52_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BO-CV0.vue?vue&type=template&id=a66a5a52&scoped=true */ "./resources/js/components/forms/afg/bo/BO-CV0.vue?vue&type=template&id=a66a5a52&scoped=true");
/* harmony import */ var _BO_CV0_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BO-CV0.vue?vue&type=script&lang=js */ "./resources/js/components/forms/afg/bo/BO-CV0.vue?vue&type=script&lang=js");
/* harmony import */ var _BO_CV0_vue_vue_type_style_index_0_id_a66a5a52_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BO-CV0.vue?vue&type=style&index=0&id=a66a5a52&lang=css&scoped=true */ "./resources/js/components/forms/afg/bo/BO-CV0.vue?vue&type=style&index=0&id=a66a5a52&lang=css&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _BO_CV0_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _BO_CV0_vue_vue_type_template_id_a66a5a52_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _BO_CV0_vue_vue_type_template_id_a66a5a52_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "a66a5a52",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/forms/afg/bo/BO-CV0.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/forms/afg/bo/BO-CV0.vue?vue&type=script&lang=js":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/forms/afg/bo/BO-CV0.vue?vue&type=script&lang=js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BO_CV0_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./BO-CV0.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/bo/BO-CV0.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BO_CV0_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/forms/afg/bo/BO-CV0.vue?vue&type=style&index=0&id=a66a5a52&lang=css&scoped=true":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/components/forms/afg/bo/BO-CV0.vue?vue&type=style&index=0&id=a66a5a52&lang=css&scoped=true ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BO_CV0_vue_vue_type_style_index_0_id_a66a5a52_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./BO-CV0.vue?vue&type=style&index=0&id=a66a5a52&lang=css&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/bo/BO-CV0.vue?vue&type=style&index=0&id=a66a5a52&lang=css&scoped=true");


/***/ }),

/***/ "./resources/js/components/forms/afg/bo/BO-CV0.vue?vue&type=template&id=a66a5a52&scoped=true":
/*!***************************************************************************************************!*\
  !*** ./resources/js/components/forms/afg/bo/BO-CV0.vue?vue&type=template&id=a66a5a52&scoped=true ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BO_CV0_vue_vue_type_template_id_a66a5a52_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BO_CV0_vue_vue_type_template_id_a66a5a52_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BO_CV0_vue_vue_type_template_id_a66a5a52_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./BO-CV0.vue?vue&type=template&id=a66a5a52&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/bo/BO-CV0.vue?vue&type=template&id=a66a5a52&scoped=true");


/***/ })

}]);