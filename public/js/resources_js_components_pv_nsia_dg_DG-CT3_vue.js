"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_pv_nsia_dg_DG-CT3_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pv/nsia/dg/DG-CT3.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pv/nsia/dg/DG-CT3.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************************/
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
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }



//  import { AirplayIcon } from 'vue-feather-icons'
//  import { BookOpenIcon } from 'vue-feather-icons'




window.$ = window.jQuery = __webpack_require__(/*! jquery/dist/jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "DG-CT3",
  display: "DGCT3",
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
  mounted: function mounted() {
    var _this$meta_data$dossi, _this$meta_data$dossi2, _this$meta_data$dossi3, _this$meta_data$dossi4, _this$meta_data$dossi5, _this$meta_data$dossi6;
    var applied_templ_name = (_this$meta_data$dossi = this.meta_data['dossier_credit']) === null || _this$meta_data$dossi === void 0 ? void 0 : _this$meta_data$dossi.applied_templ_name;
    var tbArrays = this.determineCredPubTables(applied_templ_name);
    this.credpub00 = tbArrays[0];
    this.loadRetrieved();
    this.loadTbAttrs(); // charge les attributs + sous attributs des tables
    // helper.loadCurrencyFormatter();
    this.tableClosedOrOpened();
    // this.crdLd();
    this.categorieEsDemande();
    this.selected_path_type = (_this$meta_data$dossi2 = this.meta_data['dossier_credit']) === null || _this$meta_data$dossi2 === void 0 ? void 0 : _this$meta_data$dossi2.selected_path_type;
    this.decision_logs = (_this$meta_data$dossi3 = this.meta_data['dossier_credit']) === null || _this$meta_data$dossi3 === void 0 || (_this$meta_data$dossi3 = _this$meta_data$dossi3.decision_logs.filter(function (elm, index) {
      return elm.giver_role_sigle == "DG";
    })[0]) === null || _this$meta_data$dossi3 === void 0 ? void 0 : _this$meta_data$dossi3.giver_role_sigle;
    this.categorie_client = (_this$meta_data$dossi4 = this.meta_data['dossier_credit']) === null || _this$meta_data$dossi4 === void 0 ? void 0 : _this$meta_data$dossi4.categorie_client;
    var index = ((_this$meta_data$dossi5 = this.meta_data['dossier_credit']) === null || _this$meta_data$dossi5 === void 0 ? void 0 : _this$meta_data$dossi5.decision_logs.filter(function (elm, index) {
      return elm.stage_label == "DIRECTION DU CREDIT (DC)";
    }).length) - 1;
    this.dern_signature_dg = (_this$meta_data$dossi6 = this.meta_data['dossier_credit']) === null || _this$meta_data$dossi6 === void 0 ? void 0 : _this$meta_data$dossi6.decision_logs.filter(function (elm, index) {
      return elm.stage_label == "DIRECTION DU CREDIT (DC)";
    })[index].giver_name;
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
      seen3: true,
      seen4: true,
      credits: [],
      clients: [],
      dossier_credit: null,
      encours: null,
      placeholder: "Chercher clients",
      matcli: "matcli",
      nomcli: "nomcli",
      categorie: "",
      selected_path_type: null,
      level_power: {
        LONG: 'CCCA',
        SHORT: 'CCDG'
      },
      decision_logs: null,
      signature_dg: {
        "in": 'Oui',
        nothing: 'Non'
      },
      dern_signature_dg: null,
      categorie_client: null,
      direction: [{
        Corporate: "DIRECTION CENTRALE DES ENTREPRISES ET INSTITUTIONNELS",
        sigle_Corporate: "DCEI"
      }, {
        Retail: "DIRECTION CENTRALE DES ENTREPRISES ET INSTITUTIONNELS",
        sigle_Retail: "DCP"
      }],
      meta_parseable: {
        cred_pub_key: this.meta_data["cred_pub_key"],
        tb_name: this.tb_name
      },
      actionnariats: [{
        nom_actionnaire: "",
        pourcentage_participation: "",
        max: 100
      }],
      formDataToBeWatched: {
        cotation_risque_es: "",
        analyste_credit_filiale: "",
        actionnariats: "",
        pourcentage_part: 0,
        notes: [],
        signature_dg: "",
        Niveau_pouvoir_ccdg_ccca: "",
        ancienne_echeance: "",
        nouvelle_echeance: "",
        commentaires_resume: ""
      },
      exigences_normes: [],
      total_nontant_accorde: 0,
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
      // cotation_risque_es:null,
      // pourcentage_part:null,
      listingNote: false,
      credpub00: null
    };
  },
  methods: {
    setPourcentagePartVars: function setPourcentagePartVars() {
      if (parseFloat(this.formDataToBeWatched.pourcentage_part) > 100) {
        this.formDataToBeWatched.pourcentage_part = 100;
      }
    },
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
    somX3: function somX3(ob, key) {
      var som = 0;
      ob === null || ob === void 0 || ob.filter(function (elm) {
        var _elm$key;
        som += parseInt((_elm$key = elm[key]) === null || _elm$key === void 0 ? void 0 : _elm$key.toString().replace(/\s/g, ""));
      });
      return som;
    },
    /* getYs(){
        return this.meta_data["dossier_credit"]?.[this.credpub00]?.actionnariats.map(d => d.pourcentage_participation);
    },
    getMaxY(){
        return Math.max(...getYs());
    }, */
    loadRetrieved: function loadRetrieved() {
      var lentb = this.meta_data["dossier_credit"]["tbs_in_use"];
      var createdKey = this.tb_name;
      var createdKeyArr = createdKey.split("tb");
      createdKey = "cred_pub_tb_" + createdKeyArr[1];
      if (lentb.length > 0) {
        var _this$meta_data$dossi7;
        if (this.meta_data["dossier_credit"][createdKey] != undefined) {
          this.formDataToBeWatched = this.meta_data["dossier_credit"][createdKey];
          if (this.meta_data["dossier_credit"][createdKey]["actionnariats"] != "") {
            this.actionnariats = this.meta_data["dossier_credit"][createdKey]["actionnariats"];
          }
        }
        // Close table by default
        this.defaultRetract(false, (_this$meta_data$dossi7 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi7 === void 0 ? void 0 : _this$meta_data$dossi7.applied_templ_id);
      }
    },
    setTbVal: function setTbVal(val) {
      this.cred_pub_key = val;
    },
    loadWithError: function loadWithError(err) {
      // // window.location.href = "/login";
    },
    addMore: function addMore(listName) {
      this[listName].push({
        nom_actionnaire: "",
        pourcentage_participation: "",
        max: this.ActionnariatMaxNumber
      });
    },
    handleInput: function handleInput(evt, vars) {
      if (evt) {
        this.formDataToBeWatched[evt[0]] = evt[1];
      }
      this.formDataToBeWatched["actionnariats"] = this.actionnariats;
      // this.exigences_normes = this.formDataToBeWatched.exigences_normes
      // this.formDataToBeWatched.exigences_normes = this.exigences_normes

      EventBus.$emit("event-T0", {
        formdata: this.formDataToBeWatched
      });
    },
    setActionnariatsVars: function setActionnariatsVars(event, index) {
      // si la valeur a été tapée au clavier
      if (event[2]) {
        if (this.actionnariats[index].pourcentage_participation == 0) this.actionnariats[index].max = this.ActionnariatMaxNumber;
        if (Number(this.actionnariats[index].pourcentage_participation) > 0) this.actionnariats[index].max = Number(this.ActionnariatMaxNumber) + Number(this.actionnariats[index][event[0]]);
      }
      this.actionnariats[index][event[0]] = event[1];
      this.handleInput();
    },
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
          var _this$meta_data$dossi8,
            _this = this;
          // this.$Progress.finish();
          this.$emit("autosaving");
          // console.log(response)
          var actionnariats = (_this$meta_data$dossi8 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi8 === void 0 || (_this$meta_data$dossi8 = _this$meta_data$dossi8[this.credpub00]) === null || _this$meta_data$dossi8 === void 0 ? void 0 : _this$meta_data$dossi8.actionnariats;
          var max_actionnariats = Math.max.apply(Math, _toConsumableArray(actionnariats.map(function (d) {
            return d.pourcentage_participation;
          })));
          var pp = actionnariats.filter(function (item, index) {
            return Number(item.pourcentage_participation) == max_actionnariats;
          });
          // console.log("principale actionnaire",pp)

          var tbFetcheData = response.data;
          if (tbFetcheData["is_success"] === true) {
            var _this$dossier_credit, _pp$;
            this.dossier_credit = tbFetcheData['dossier_credit'];
            this.groupe_ = (_this$dossier_credit = this.dossier_credit) === null || _this$dossier_credit === void 0 ? void 0 : _this$dossier_credit[this.credpub00];
            this.formDataToBeWatched.pourcentage_part = (_pp$ = pp[0]) === null || _pp$ === void 0 ? void 0 : _pp$.pourcentage_participation;
            this.formDataToBeWatched.cotation_risque_es = this.note_risque_es.filter(function (item, index) {
              var _this$meta_dossier_cr;
              return item.note === ((_this$meta_dossier_cr = _this.meta_dossier_credit) === null || _this$meta_dossier_cr === void 0 || (_this$meta_dossier_cr = _this$meta_dossier_cr.cred_pub_tb_22005) === null || _this$meta_dossier_cr === void 0 || (_this$meta_dossier_cr = _this$meta_dossier_cr.dossier_credit) === null || _this$meta_dossier_cr === void 0 || (_this$meta_dossier_cr = _this$meta_dossier_cr.cred_pub_tb_5001) === null || _this$meta_dossier_cr === void 0 ? void 0 : _this$meta_dossier_cr.risque_note);
            })[0]["risque"];
            this.formDataToBeWatched.nontant_accorde = this["this"].formDataToBeWatched.analyste_credit_filiale = this.authcheckUsr.name;
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
        id: "ca1-head"
      };
      // console.log(p)
      this.$emit("load-buffer", p);
    },
    credData: function credData(res) {
      this.credits = res.data;
    },
    onSlctMatCli: function onSlctMatCli(obj) {
      var _this$formDataToBeWat,
        _this2 = this;
      this.formDataToBeWatched.matricule_client = obj.matcli;
      this.formDataToBeWatched.nom_client = obj.nomcli;
      this.autoRenamer();
      _services_credit_service__WEBPACK_IMPORTED_MODULE_4__["default"].encours((_this$formDataToBeWat = this.formDataToBeWatched) === null || _this$formDataToBeWat === void 0 ? void 0 : _this$formDataToBeWat.matricule_client).then(function (res) {
        _this2.encoursData(res);
      })["catch"](function (err) {
        console.log(err);
      });
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
      var _this3 = this;
      _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["default"].loadUserData().then(function (res) {
        _this3.send2Backend0(res);
      })["catch"](function (err) {
        _this3.loadWithError(err);
      });
    },
    instruction2: function instruction2(id) {
      var id0 = '#' + id;
      window.$(id0).modal('show');
    },
    categorieEsDemande: function categorieEsDemande() {
      var _this$meta_data$dossi9,
        _this$note_risque_es,
        _this4 = this;
      this.cotation_risque_es = (_this$meta_data$dossi9 = this.meta_data['dossier_credit'].cred_pub_tb_5001) === null || _this$meta_data$dossi9 === void 0 ? void 0 : _this$meta_data$dossi9.risque_note;
      console.log("risque_note", this.meta_data['dossier_credit']);
      (_this$note_risque_es = this.note_risque_es) === null || _this$note_risque_es === void 0 || _this$note_risque_es.forEach(function (element, key) {
        if (_this4.cotation_risque_es == element.note) {
          _this4.categorie = element.risque;
          console.log(element);
        }
      });
      // console.log('element.note1', this.categorie,this.dossier_credit?.cred_pub_tb_5001?.risque_note)
    }
  },
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
  },
  computed: {
    totalPartPourcentageActionnariats: function totalPartPourcentageActionnariats() {
      var trying = this.actionnariats.map(function (el) {
        el.pourcentage_participation = String(el.pourcentage_participation).replace(/\s+/g, "");
        if (!el.pourcentage_participation) return 0;
        return Number(el.pourcentage_participation);
      }).reduce(function (sum, curr) {
        return sum + curr;
      }, 0);
      if (trying > 100) return "100.00";
      return trying.toLocaleString("fr-FR");
    },
    ActionnariatMaxNumber: function ActionnariatMaxNumber() {
      var restant = 100 - Number(this.totalPartPourcentageActionnariats);
      if (restant < 0) return 0;
      return restant;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pv/nsia/dg/DG-CT3.vue?vue&type=template&id=f53a94c0&scoped=true":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pv/nsia/dg/DG-CT3.vue?vue&type=template&id=f53a94c0&scoped=true ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm$formDataToBeWatch, _vm$dossier_credit, _vm$dossier_credit2, _vm$dossier_credit3, _vm$dossier_credit6, _vm$dossier_credit7, _vm$dossier_credit8, _vm$dossier_credit1, _vm$dossier_credit10, _vm$dossier_credit11, _vm$dossier_credit13, _vm$dossier_credit15, _vm$dossier_credit16, _vm$formDataToBeWatch2;
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
      id: "ca1-head"
    }
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col"
  }, [_vm._v("\n                                 " + _vm._s(_vm.tb_display_name) + " : Résumé de l'analyse environnementale et sociale(ES)\n                             ")]), _vm._v(" "), _c("div", {
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
  }, [_c("span", [_vm._v(" " + _vm._s(_vm.formDataToBeWatched.notes.length) + " ")])])])]) : _vm._e(), _vm._v(" "), _c("airplay-icon", {
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
        return _vm.$modal.show("resume_d_l_analyste_environemental");
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
    staticClass: "row"
  }, [(_vm$dossier_credit = _vm.dossier_credit) !== null && _vm$dossier_credit !== void 0 && _vm$dossier_credit.cred_pub_tb_22005 ? _c("div", {
    staticClass: "col-12 pl-4"
  }, [(_vm.seen2 = _vm.seen2) ? _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "relook-header",
    on: {
      click: function click($event) {
        _vm.seen2 = !_vm.seen2;
      }
    }
  }, [_c("h6", {
    "class": " subdiv" + this.tb_name,
    attrs: {
      id: "centrale-des-risques"
    }
  }, [_vm._v("\n                                            Normes de performance 1 de la SFI : Evaluation et gestion sociaux des risques environnementaux\n                                            "), _c("chevron-up-icon", {
    staticClass: "custom-class",
    staticStyle: {
      "float": "right",
      cursor: "pointer"
    },
    attrs: {
      size: "21"
    }
  })], 1)]), _vm._v(" "), (_vm$dossier_credit2 = _vm.dossier_credit) !== null && _vm$dossier_credit2 !== void 0 && (_vm$dossier_credit2 = _vm$dossier_credit2.cred_pub_tb_22005) !== null && _vm$dossier_credit2 !== void 0 && _vm$dossier_credit2.norme_performances1 ? _c("div", [_c("div", {
    staticClass: "table-responsive mt-3"
  }, [_c("table", {
    staticClass: "table mb-5 table-bordered"
  }, [_vm._m(0), _vm._v(" "), _c("tbody", [_vm._l((_vm$dossier_credit3 = _vm.dossier_credit) === null || _vm$dossier_credit3 === void 0 || (_vm$dossier_credit3 = _vm$dossier_credit3.cred_pub_tb_22005) === null || _vm$dossier_credit3 === void 0 ? void 0 : _vm$dossier_credit3.norme_performances1, function (norme_performance, index) {
    var _vm$dossier_credit4, _vm$dossier_credit5;
    return _c("tr", {
      key: index
    }, [_c("td", {
      "class": {
        "d-none": index > 0
      },
      attrs: {
        rowspan: ((_vm$dossier_credit4 = _vm.dossier_credit) === null || _vm$dossier_credit4 === void 0 || (_vm$dossier_credit4 = _vm$dossier_credit4.cred_pub_tb_22005) === null || _vm$dossier_credit4 === void 0 || (_vm$dossier_credit4 = _vm$dossier_credit4.norme_performances1) === null || _vm$dossier_credit4 === void 0 ? void 0 : _vm$dossier_credit4.length) + ((_vm$dossier_credit5 = _vm.dossier_credit) === null || _vm$dossier_credit5 === void 0 || (_vm$dossier_credit5 = _vm$dossier_credit5.cred_pub_tb_22005) === null || _vm$dossier_credit5 === void 0 || (_vm$dossier_credit5 = _vm$dossier_credit5.norme_performances2) === null || _vm$dossier_credit5 === void 0 ? void 0 : _vm$dossier_credit5.length)
      }
    }, [_vm._v("\n                                                            Promouvoir des conditions de travail sûres et saines et protéger la santé\n                                                            des travailleurs\n                                                        ")]), _vm._v(" "), _c("td", [_c("textarea", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: norme_performance.risque,
        expression: "norme_performance.risque"
      }],
      staticClass: "form-control",
      attrs: {
        rows: "2",
        cols: "40",
        readonly: ""
      },
      domProps: {
        value: norme_performance.risque
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(norme_performance, "risque", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("td", [_c("textarea", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: norme_performance.action_corrective,
        expression: "norme_performance.action_corrective"
      }],
      staticClass: "form-control",
      attrs: {
        rows: "2",
        cols: "40",
        readonly: ""
      },
      domProps: {
        value: norme_performance.action_corrective
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(norme_performance, "action_corrective", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("td", [_c("textarea", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: norme_performance.delai,
        expression: "norme_performance.delai"
      }],
      staticClass: "form-control",
      attrs: {
        rows: "2",
        cols: "40",
        readonly: ""
      },
      domProps: {
        value: norme_performance.delai
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(norme_performance, "delai", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("td", [_c("textarea", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: norme_performance.livrable,
        expression: "norme_performance.livrable"
      }],
      staticClass: "form-control",
      attrs: {
        rows: "2",
        cols: "40",
        readonly: ""
      },
      domProps: {
        value: norme_performance.livrable
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(norme_performance, "livrable", $event.target.value);
        }
      }
    })])]);
  }), _vm._v(" "), _vm._l((_vm$dossier_credit6 = _vm.dossier_credit) === null || _vm$dossier_credit6 === void 0 || (_vm$dossier_credit6 = _vm$dossier_credit6.cred_pub_tb_22005) === null || _vm$dossier_credit6 === void 0 ? void 0 : _vm$dossier_credit6.norme_performances2, function (norme_performance, index) {
    return _c("tr", {
      key: index
    }, [_c("td", [_c("textarea", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: norme_performance.risque,
        expression: "norme_performance.risque"
      }],
      staticClass: "form-control",
      attrs: {
        rows: "2",
        cols: "40",
        readonly: ""
      },
      domProps: {
        value: norme_performance.risque
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(norme_performance, "risque", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("td", [_c("textarea", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: norme_performance.action_corrective,
        expression: "norme_performance.action_corrective"
      }],
      staticClass: "form-control",
      attrs: {
        rows: "2",
        cols: "40",
        readonly: ""
      },
      domProps: {
        value: norme_performance.action_corrective
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(norme_performance, "action_corrective", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("td", [_c("textarea", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: norme_performance.delai,
        expression: "norme_performance.delai"
      }],
      staticClass: "form-control",
      attrs: {
        rows: "2",
        cols: "40",
        readonly: ""
      },
      domProps: {
        value: norme_performance.delai
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(norme_performance, "delai", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("td", [_c("textarea", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: norme_performance.livrable,
        expression: "norme_performance.livrable"
      }],
      staticClass: "form-control",
      attrs: {
        rows: "2",
        cols: "40",
        readonly: ""
      },
      domProps: {
        value: norme_performance.livrable
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(norme_performance, "livrable", $event.target.value);
        }
      }
    })])]);
  })], 2)])])]) : _c("div")]) : _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "relook-header",
    on: {
      click: function click($event) {
        _vm.seen2 = !_vm.seen2;
      }
    }
  }, [_c("h6", {
    attrs: {
      id: "centrale-des-risques"
    }
  }, [_vm._v("\n                                            Normes de performance 1 de la SFI : Evaluation et gestion sociaux des risques environnementaux\n                                            "), _c("chevron-down-icon", {
    staticClass: "custom-class",
    staticStyle: {
      "float": "right",
      cursor: "pointer"
    },
    attrs: {
      size: "21"
    }
  })], 1)])]), _vm._v(" "), (_vm.seen3 = _vm.seen3) ? _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "relook-header",
    on: {
      click: function click($event) {
        _vm.seen3 = !_vm.seen3;
      }
    }
  }, [_c("h6", {
    "class": " subdiv" + this.tb_name,
    attrs: {
      id: "centrale-des-risques"
    }
  }, [_vm._v("\n                                            Normes de performance 2 de la SFI : Main d’oeuvre et conditions de travail\n                                            "), _c("chevron-up-icon", {
    staticClass: "custom-class",
    staticStyle: {
      "float": "right",
      cursor: "pointer"
    },
    attrs: {
      size: "21"
    }
  })], 1)]), _vm._v(" "), (_vm$dossier_credit7 = _vm.dossier_credit) !== null && _vm$dossier_credit7 !== void 0 && (_vm$dossier_credit7 = _vm$dossier_credit7.cred_pub_tb_22005) !== null && _vm$dossier_credit7 !== void 0 && _vm$dossier_credit7.norme_performances2 ? _c("div", [_c("div", {
    staticClass: "table-responsive mt-3"
  }, [_c("table", {
    staticClass: "table mb-5 table-bordered"
  }, [_vm._m(1), _vm._v(" "), _c("tbody", [_vm._l((_vm$dossier_credit8 = _vm.dossier_credit) === null || _vm$dossier_credit8 === void 0 || (_vm$dossier_credit8 = _vm$dossier_credit8.cred_pub_tb_22005) === null || _vm$dossier_credit8 === void 0 ? void 0 : _vm$dossier_credit8.norme_performances3, function (norme_performance, index) {
    var _vm$dossier_credit9, _vm$dossier_credit0;
    return _c("tr", {
      key: index
    }, [_c("td", {
      "class": {
        "d-none": index > 0
      },
      attrs: {
        rowspan: ((_vm$dossier_credit9 = _vm.dossier_credit) === null || _vm$dossier_credit9 === void 0 || (_vm$dossier_credit9 = _vm$dossier_credit9.cred_pub_tb_22005) === null || _vm$dossier_credit9 === void 0 || (_vm$dossier_credit9 = _vm$dossier_credit9.norme_performances3) === null || _vm$dossier_credit9 === void 0 ? void 0 : _vm$dossier_credit9.length) + ((_vm$dossier_credit0 = _vm.dossier_credit) === null || _vm$dossier_credit0 === void 0 || (_vm$dossier_credit0 = _vm$dossier_credit0.cred_pub_tb_22005) === null || _vm$dossier_credit0 === void 0 || (_vm$dossier_credit0 = _vm$dossier_credit0.norme_performances4) === null || _vm$dossier_credit0 === void 0 ? void 0 : _vm$dossier_credit0.length)
      }
    }, [_vm._v("\n                                                            Santé et Sécurité au travail\n                                                        ")]), _vm._v(" "), _c("td", [_c("textarea", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: norme_performance.risque,
        expression: "norme_performance.risque"
      }],
      staticClass: "form-control",
      attrs: {
        rows: "2",
        cols: "40",
        readonly: ""
      },
      domProps: {
        value: norme_performance.risque
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(norme_performance, "risque", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("td", [_c("textarea", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: norme_performance.action_corrective,
        expression: "norme_performance.action_corrective"
      }],
      staticClass: "form-control",
      attrs: {
        rows: "2",
        cols: "40",
        readonly: ""
      },
      domProps: {
        value: norme_performance.action_corrective
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(norme_performance, "action_corrective", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("td", [_c("textarea", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: norme_performance.delai,
        expression: "norme_performance.delai"
      }],
      staticClass: "form-control",
      attrs: {
        rows: "2",
        cols: "40",
        readonly: ""
      },
      domProps: {
        value: norme_performance.delai
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(norme_performance, "delai", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("td", [_c("textarea", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: norme_performance.livrable,
        expression: "norme_performance.livrable"
      }],
      staticClass: "form-control",
      attrs: {
        rows: "2",
        cols: "40",
        readonly: ""
      },
      domProps: {
        value: norme_performance.livrable
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(norme_performance, "livrable", $event.target.value);
        }
      }
    })])]);
  }), _vm._v(" "), _vm._l((_vm$dossier_credit1 = _vm.dossier_credit) === null || _vm$dossier_credit1 === void 0 || (_vm$dossier_credit1 = _vm$dossier_credit1.cred_pub_tb_22005) === null || _vm$dossier_credit1 === void 0 ? void 0 : _vm$dossier_credit1.norme_performances4, function (norme_performance, index) {
    return _c("tr", {
      key: index
    }, [_c("td", [_c("textarea", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: norme_performance.risque,
        expression: "norme_performance.risque"
      }],
      staticClass: "form-control",
      attrs: {
        rows: "2",
        cols: "40",
        readonly: ""
      },
      domProps: {
        value: norme_performance.risque
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(norme_performance, "risque", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("td", {
      staticClass: "col-4"
    }, [_c("textarea", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: norme_performance.action_corrective,
        expression: "norme_performance.action_corrective"
      }],
      staticClass: "form-control",
      attrs: {
        rows: "2",
        cols: "40",
        readonly: ""
      },
      domProps: {
        value: norme_performance.action_corrective
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(norme_performance, "action_corrective", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("td", {
      staticClass: "col-4"
    }, [_c("textarea", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: norme_performance.delai,
        expression: "norme_performance.delai"
      }],
      staticClass: "form-control",
      attrs: {
        rows: "2",
        cols: "40",
        readonly: ""
      },
      domProps: {
        value: norme_performance.delai
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(norme_performance, "delai", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("td", {
      staticClass: "col-3"
    }, [_c("textarea", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: norme_performance.livrable,
        expression: "norme_performance.livrable"
      }],
      staticClass: "form-control",
      attrs: {
        rows: "2",
        cols: "40",
        readonly: ""
      },
      domProps: {
        value: norme_performance.livrable
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(norme_performance, "livrable", $event.target.value);
        }
      }
    })])]);
  })], 2)])])]) : _c("div")]) : _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "relook-header",
    on: {
      click: function click($event) {
        _vm.seen3 = !_vm.seen3;
      }
    }
  }, [_c("h6", {
    attrs: {
      id: "centrale-des-risques"
    }
  }, [_vm._v("\n                                            Normes de performance 2 de la SFI : Main d’oeuvre et conditions de travail\n                                            "), _c("chevron-down-icon", {
    staticClass: "custom-class",
    staticStyle: {
      "float": "right",
      cursor: "pointer"
    },
    attrs: {
      size: "21"
    }
  })], 1)])]), _vm._v(" "), (_vm.seen4 = _vm.seen4) ? _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "relook-header",
    on: {
      click: function click($event) {
        _vm.seen4 = !_vm.seen4;
      }
    }
  }, [_c("h6", {
    "class": " subdiv" + this.tb_name,
    attrs: {
      id: "centrale-des-risques"
    }
  }, [_vm._v("\n                                            Normes de Performance 3 de la SFI : Utilisation rationnelle des ressources et prévention de la pollution\n\n                                            "), _c("chevron-up-icon", {
    staticClass: "custom-class",
    staticStyle: {
      "float": "right",
      cursor: "pointer"
    },
    attrs: {
      size: "21"
    }
  })], 1)]), _vm._v(" "), (_vm$dossier_credit10 = _vm.dossier_credit) !== null && _vm$dossier_credit10 !== void 0 && (_vm$dossier_credit10 = _vm$dossier_credit10.cred_pub_tb_22005) !== null && _vm$dossier_credit10 !== void 0 && _vm$dossier_credit10.norme_performances3 ? _c("div", [_c("div", {
    staticClass: "table-responsive mt-3"
  }, [_c("table", {
    staticClass: "table mb-5 table-bordered"
  }, [_vm._m(2), _vm._v(" "), _c("tbody", [_vm._l((_vm$dossier_credit11 = _vm.dossier_credit) === null || _vm$dossier_credit11 === void 0 || (_vm$dossier_credit11 = _vm$dossier_credit11.cred_pub_tb_22005) === null || _vm$dossier_credit11 === void 0 ? void 0 : _vm$dossier_credit11.norme_performances5, function (norme_performance, index) {
    var _vm$dossier_credit12;
    return _c("tr", {
      key: index
    }, [_c("td", {
      "class": {
        "d-none": index > 0
      },
      attrs: {
        rowspan: (_vm$dossier_credit12 = _vm.dossier_credit) === null || _vm$dossier_credit12 === void 0 || (_vm$dossier_credit12 = _vm$dossier_credit12.cred_pub_tb_22005) === null || _vm$dossier_credit12 === void 0 || (_vm$dossier_credit12 = _vm$dossier_credit12.norme_performances5) === null || _vm$dossier_credit12 === void 0 ? void 0 : _vm$dossier_credit12.length
      }
    }, [_vm._v("\n                                                            Utilisation rationnelle des ressources en eau\n                                                        ")]), _vm._v(" "), _c("td", [_c("textarea", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: norme_performance.risque,
        expression: "norme_performance.risque"
      }],
      staticClass: "form-control",
      attrs: {
        rows: "2",
        cols: "40",
        readonly: ""
      },
      domProps: {
        value: norme_performance.risque
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(norme_performance, "risque", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("td", [_c("textarea", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: norme_performance.action_corrective,
        expression: "norme_performance.action_corrective"
      }],
      staticClass: "form-control",
      attrs: {
        rows: "2",
        cols: "40",
        readonly: ""
      },
      domProps: {
        value: norme_performance.action_corrective
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(norme_performance, "action_corrective", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("td", [_c("textarea", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: norme_performance.delai,
        expression: "norme_performance.delai"
      }],
      staticClass: "form-control",
      attrs: {
        rows: "2",
        cols: "40",
        readonly: ""
      },
      domProps: {
        value: norme_performance.delai
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(norme_performance, "delai", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("td", [_c("textarea", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: norme_performance.livrable,
        expression: "norme_performance.livrable"
      }],
      staticClass: "form-control",
      attrs: {
        rows: "2",
        cols: "40",
        readonly: ""
      },
      domProps: {
        value: norme_performance.livrable
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(norme_performance, "livrable", $event.target.value);
        }
      }
    })])]);
  }), _vm._v(" "), _vm._l((_vm$dossier_credit13 = _vm.dossier_credit) === null || _vm$dossier_credit13 === void 0 || (_vm$dossier_credit13 = _vm$dossier_credit13.cred_pub_tb_22005) === null || _vm$dossier_credit13 === void 0 ? void 0 : _vm$dossier_credit13.norme_performances6, function (norme_performance, index) {
    var _vm$dossier_credit14;
    return _c("tr", {
      key: index
    }, [_c("td", {
      "class": {
        "d-none": index > 0
      },
      attrs: {
        rowspan: (_vm$dossier_credit14 = _vm.dossier_credit) === null || _vm$dossier_credit14 === void 0 || (_vm$dossier_credit14 = _vm$dossier_credit14.cred_pub_tb_22005) === null || _vm$dossier_credit14 === void 0 || (_vm$dossier_credit14 = _vm$dossier_credit14.norme_performances6) === null || _vm$dossier_credit14 === void 0 ? void 0 : _vm$dossier_credit14.length
      }
    }, [_vm._v("\n                                                            Gestion des déchets fécaux et urinaires des porcs\n                                                        ")]), _vm._v(" "), _c("td", [_c("textarea", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: norme_performance.risque,
        expression: "norme_performance.risque"
      }],
      staticClass: "form-control",
      attrs: {
        rows: "2",
        cols: "40",
        readonly: ""
      },
      domProps: {
        value: norme_performance.risque
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(norme_performance, "risque", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("td", [_c("textarea", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: norme_performance.action_corrective,
        expression: "norme_performance.action_corrective"
      }],
      staticClass: "form-control",
      attrs: {
        rows: "2",
        cols: "40",
        readonly: ""
      },
      domProps: {
        value: norme_performance.action_corrective
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(norme_performance, "action_corrective", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("td", [_c("textarea", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: norme_performance.delai,
        expression: "norme_performance.delai"
      }],
      staticClass: "form-control",
      attrs: {
        rows: "2",
        cols: "40",
        readonly: ""
      },
      domProps: {
        value: norme_performance.delai
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(norme_performance, "delai", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("td", [_c("textarea", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: norme_performance.livrable,
        expression: "norme_performance.livrable"
      }],
      staticClass: "form-control",
      attrs: {
        rows: "2",
        cols: "40",
        readonly: ""
      },
      domProps: {
        value: norme_performance.livrable
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(norme_performance, "livrable", $event.target.value);
        }
      }
    })])]);
  })], 2)])])]) : _c("div")]) : _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "relook-header",
    on: {
      click: function click($event) {
        _vm.seen4 = !_vm.seen4;
      }
    }
  }, [_c("h6", {
    attrs: {
      id: "centrale-des-risques"
    }
  }, [_vm._v("\n                                            Normes de Performance 3 de la SFI : Utilisation rationnelle des ressources et prévention de la pollution\n                                            "), _c("chevron-down-icon", {
    staticClass: "custom-class",
    staticStyle: {
      "float": "right",
      cursor: "pointer"
    },
    attrs: {
      size: "21"
    }
  })], 1)])])]) : _c("div", {
    staticClass: "col-12 fw-bold"
  }, [_vm._m(3)]), _vm._v(" "), _c("div", {
    staticClass: "col-12 pl-4 mt-3"
  }, [_c("div", {
    staticClass: "table-responsive mt-3"
  }, [_c("table", {
    staticClass: "table table-response table-bordered"
  }, [_c("tbody", [_c("tr", [_c("td", {
    staticClass: "fw-bold",
    attrs: {
      rowspan: "2"
    }
  }, [_vm._v("Cotation")]), _vm._v(" "), _c("td", {
    attrs: {
      rowspan: "2"
    }
  }, [_c("input", {
    staticClass: "form-control",
    attrs: {
      type: "text",
      required: "",
      id: "nontant_initial",
      disabled: ""
    },
    domProps: {
      value: (_vm$dossier_credit15 = _vm.dossier_credit) === null || _vm$dossier_credit15 === void 0 || (_vm$dossier_credit15 = _vm$dossier_credit15.cred_pub_tb_5001) === null || _vm$dossier_credit15 === void 0 ? void 0 : _vm$dossier_credit15.risque_note
    }
  })]), _vm._v(" "), _c("td", {
    staticClass: "text-nowrap fw-bold",
    staticStyle: {
      "vertical-align": "middle"
    }
  }, [_vm._v("Initiateur ")]), _vm._v(" "), _c("td", {
    staticStyle: {
      "vertical-align": "middle"
    }
  }, [_c("input", {
    staticClass: "form-control",
    attrs: {
      required: "",
      type: "text",
      id: "initiateur",
      readonly: ""
    },
    domProps: {
      value: (_vm$dossier_credit16 = _vm.dossier_credit) === null || _vm$dossier_credit16 === void 0 ? void 0 : _vm$dossier_credit16.monteur_doss
    }
  })])]), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "text-nowrap fw-bold",
    staticStyle: {
      "vertical-align": "middle"
    }
  }, [_vm._v("Direction")]), _vm._v(" "), _c("td", {
    staticStyle: {
      "vertical-align": "middle"
    }
  }, [_c("input", {
    staticClass: "form-control",
    attrs: {
      required: "",
      type: "text",
      id: "direction",
      readonly: "",
      rows: "5"
    },
    domProps: {
      value: _vm.direction[0][_vm.categorie_client]
    }
  })])]), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "text-nowrap fw-bold",
    attrs: {
      rowspan: "3"
    }
  }, [_vm._v("Catégorisation ES")]), _vm._v(" "), _c("td", {
    attrs: {
      rowspan: "3"
    }
  }, [_c("input", {
    staticClass: "form-control",
    attrs: {
      type: "text",
      required: "",
      id: "nontant_initial",
      disabled: ""
    },
    domProps: {
      value: _vm.categorie
    }
  })])]), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "text-nowrap fw-bold",
    staticStyle: {
      "vertical-align": "middle"
    }
  }, [_vm._v("Initial")]), _vm._v(" "), _c("td", {
    staticStyle: {
      "vertical-align": "middle"
    }
  }, [_c("input", {
    staticClass: "form-control",
    attrs: {
      required: "",
      type: "text",
      id: "initial",
      readonly: ""
    },
    domProps: {
      value: _vm.direction[0]["sigle_" + _vm.categorie_client]
    }
  })])]), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "text-nowrap fw-bold",
    staticStyle: {
      "vertical-align": "middle"
    }
  }, [_vm._v("IP")]), _vm._v(" "), _c("td", {
    staticStyle: {
      "vertical-align": "middle"
    }
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.ip,
      expression: "formDataToBeWatched.ip"
    }],
    staticClass: "form-control",
    attrs: {
      required: "",
      type: "text",
      id: "ip"
    },
    domProps: {
      value: _vm.formDataToBeWatched.ip
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formDataToBeWatched, "ip", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "text-nowrap fw-bold"
  }, [_vm._v("Ancienne écheance")]), _vm._v(" "), _c("td", [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.ancienne_echeance,
      expression: "\n                                                            formDataToBeWatched.ancienne_echeance\n                                                        "
    }],
    staticClass: "form-control",
    attrs: {
      required: "",
      type: "date",
      id: "ancienne_echeance",
      "float": ""
    },
    domProps: {
      value: _vm.formDataToBeWatched.ancienne_echeance
    },
    on: {
      input: [function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formDataToBeWatched, "ancienne_echeance", $event.target.value);
      }, _vm.handleInput]
    }
  })]), _vm._v(" "), _c("td", {
    staticClass: "text-nowrap fw-bold"
  }, [_vm._v("Niveau de pouvoir CCDG ou CCCA")]), _vm._v(" "), _c("td", [_c("input", {
    staticClass: "form-control",
    attrs: {
      type: "text",
      readonly: "",
      require: ""
    },
    domProps: {
      value: _vm.level_power[_vm.selected_path_type]
    }
  })])]), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "text-nowrap fw-bold"
  }, [_vm._v("Nouvelle écheance")]), _vm._v(" "), _c("td", [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.nouvelle_echeance,
      expression: "\n                                                            formDataToBeWatched.nouvelle_echeance\n                                                        "
    }],
    staticClass: "form-control",
    attrs: {
      required: "",
      type: "date",
      id: "nouvelle_echeance",
      "float": ""
    },
    domProps: {
      value: _vm.formDataToBeWatched.nouvelle_echeance
    },
    on: {
      input: [function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formDataToBeWatched, "nouvelle_echeance", $event.target.value);
      }, _vm.handleInput]
    }
  })]), _vm._v(" "), _c("td", {
    staticClass: "text-nowrap fw-bold"
  }, [_vm._v("Dernier signataire DC")]), _vm._v(" "), _c("td", [_c("input", {
    staticClass: "form-control",
    attrs: {
      required: "",
      type: "text",
      id: "dernier_signataire_dc",
      readonly: ""
    },
    domProps: {
      value: _vm.dern_signature_dg
    }
  })])]), _vm._v(" "), _c("tr", [_c("td"), _vm._v(" "), _c("td"), _vm._v(" "), _c("td", {
    staticClass: "text-nowrap fw-bold"
  }, [_vm._v("Signature DG")]), _vm._v(" "), _c("td", [_vm.decision_logs ? _c("input", {
    staticClass: "form-control",
    attrs: {
      type: "text",
      readonly: ""
    },
    domProps: {
      value: _vm.signature_dg["in"]
    }
  }) : _c("input", {
    staticClass: "form-control",
    attrs: {
      type: "text",
      readonly: ""
    },
    domProps: {
      value: _vm.signature_dg.nothing
    }
  })])])])])])]), _vm._v(" "), _c("div", {
    staticClass: "col-12 pl-4 mt-3"
  }, [_vm._m(4), _vm._v(" "), _c("vue-editor", {
    attrs: {
      id: "commentaires_resume"
    },
    on: {
      "update-value": function updateValue($event) {
        _vm.formDataToBeWatched[$event[0]] = $event[1];
      }
    },
    model: {
      value: _vm.formDataToBeWatched.commentaires_resume,
      callback: function callback($$v) {
        _vm.$set(_vm.formDataToBeWatched, "commentaires_resume", $$v);
      },
      expression: "formDataToBeWatched.commentaires_resume"
    }
  })], 1)]), _vm._v(" "), _c("div", {
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
  }, [_vm._v("\n                         Fermer le tableau\n                     ")])])]) : _c("div", {
    staticClass: "card card-width-height"
  }, [_c("br"), _vm._v(" "), _c("div", {
    staticClass: "card-header hdc pb-0 pt-2"
  }, [_c("h3", {
    staticClass: "head",
    attrs: {
      id: "ca1-head"
    }
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col"
  }, [_vm._v("\n                                 " + _vm._s(_vm.tb_display_name) + " : Résumé de l'analyse environnementale et sociale(ES)\n                             ")]), _vm._v(" "), _c("div", {
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
  }, [_c("span", [_vm._v(" " + _vm._s(_vm.formDataToBeWatched.notes.length) + " ")])])])]) : _vm._e(), _vm._v(" "), _c("airplay-icon", {
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
        return _vm.$modal.show("resume_d_l_analyste_environemental");
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
  }, [_vm._v("\n                                 Instruction - " + _vm._s(_vm.tb_display_name) + " : Résumé de l'analyse environnementale et sociale(ES)\n                             ")]), _vm._v(" "), _c("button", {
    staticClass: "btn-close",
    attrs: {
      type: "button",
      "data-bs-dismiss": "modal",
      "aria-label": "Close"
    }
  })]), _vm._v(" "), _vm._m(5), _vm._v(" "), _vm._m(6)])])])]), _vm._v(" "), _c("modal", {
    attrs: {
      name: "resume_d_l_analyste_environemental",
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
  return _c("thead", [_c("tr", [_c("th", {
    staticStyle: {
      "min-width": "170px"
    }
  }, [_vm._v("\n                                                            Exigences des normes de performance de la SFI\n                                                        ")]), _vm._v(" "), _c("th", {
    staticStyle: {
      "min-width": "170px"
    }
  }, [_vm._v("Risques")]), _vm._v(" "), _c("th", {
    staticStyle: {
      "min-width": "170px"
    }
  }, [_vm._v("Actions correctives")]), _vm._v(" "), _c("th", {
    staticStyle: {
      "min-width": "170px"
    }
  }, [_vm._v("Délais")]), _vm._v(" "), _c("th", {
    staticStyle: {
      "min-width": "170px"
    }
  }, [_vm._v("Livrables")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("th", {
    staticStyle: {
      "min-width": "170px"
    }
  }, [_vm._v("Exigences des normes de performance de la SFI")]), _c("th", {
    staticStyle: {
      "min-width": "170px"
    }
  }, [_vm._v("Risques")]), _vm._v(" "), _c("th", {
    staticStyle: {
      "min-width": "170px"
    }
  }, [_vm._v("Actions correctives")]), _vm._v(" "), _c("th", {
    staticStyle: {
      "min-width": "170px"
    }
  }, [_vm._v("Délais")]), _vm._v(" "), _c("th", {
    staticStyle: {
      "min-width": "170px"
    }
  }, [_vm._v("Livrables")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("th", {
    staticStyle: {
      "min-width": "170px"
    }
  }, [_vm._v("\n                                                            Exigences des normes de performance de la SFI\n                                                        ")]), _vm._v(" "), _c("th", {
    staticStyle: {
      "min-width": "170px"
    }
  }, [_vm._v("Risques")]), _vm._v(" "), _c("th", {
    staticStyle: {
      "min-width": "170px"
    }
  }, [_vm._v("Actions correctives")]), _vm._v(" "), _c("th", {
    staticStyle: {
      "min-width": "170px"
    }
  }, [_vm._v("Délais")]), _vm._v(" "), _c("th", {
    staticStyle: {
      "min-width": "170px"
    }
  }, [_vm._v("Livrables")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-bordered"
  }, [_c("thead", [_c("tr", [_c("td", {
    staticClass: "col-3 text-center vertical-middle"
  }, [_vm._v("Exigences des normes de "), _c("br"), _vm._v(" performance de la SFI")]), _vm._v(" "), _c("td", {
    staticClass: "col-3 text-center vertical-middle"
  }, [_vm._v("Risques")]), _vm._v(" "), _c("td", {
    staticClass: "col-2 text-center vertical-middle"
  }, [_vm._v("Actions correctives")]), _vm._v(" "), _c("td", {
    staticClass: "col-2 text-center vertical-middle"
  }, [_vm._v("Délais")]), _vm._v(" "), _c("td", {
    staticClass: "col-2 text-center vertical-middle"
  }, [_vm._v("Livrables")])])]), _vm._v(" "), _c("tbody", [_c("tr", [_c("td", {
    staticStyle: {
      padding: "50px"
    }
  }), _vm._v(" "), _c("td"), _vm._v(" "), _c("td"), _vm._v(" "), _c("td"), _vm._v(" "), _c("td")])])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", [_c("b", [_vm._v("Commentaires")])]);
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

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pv/nsia/dg/DG-CT3.vue?vue&type=style&index=0&id=f53a94c0&lang=css&scoped=true":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pv/nsia/dg/DG-CT3.vue?vue&type=style&index=0&id=f53a94c0&lang=css&scoped=true ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\ninput[data-v-f53a94c0] {\n     /*border: 1px solid red;*/\n}\n*[data-v-f53a94c0] {\n     font-family: \"Google sans\";\n}\nlabel[data-v-f53a94c0] {\n     height: 10px;\n     font-size: 13px;\n}\ninput[data-v-f53a94c0],\n select[data-v-f53a94c0] {\n     height: 35px;\n     border-color: #34495e;\n     color: #57606f;\n     font-size: 13px;\n     font-weight: bold;\n}\n.card-width-height[data-v-f53a94c0] {\n     width: 100%;\n     height: 100%;\n}\n.head[data-v-f53a94c0] {\n     color: #f1f2f6;\n     font-size: 22px;\n}\n.hdc[data-v-f53a94c0] {\n     background-color: #57606f;\n}\n\n /*  List element styles */\n#menu ul[data-v-f53a94c0],\n #menu li[data-v-f53a94c0] {\n     list-style: none;\n     padding: 0;\n     margin: 0;\n     display: inline-block;\n}\n#menu li[data-v-f53a94c0] {\n     padding: 5px 0px;\n}\n\n /* Main menu links */\n#menu a[data-v-f53a94c0]:link,\n #menu a[data-v-f53a94c0]:visited,\n #menu a[data-v-f53a94c0]:active {\n     text-decoration: none;\n     color: var(--link2-color);\n     padding: 5px 7px;\n     font-weight: bold;\n     position: relative;\n     z-index: 2;\n}\n#menu a[data-v-f53a94c0]:hover,\n #menu a[data-v-f53a94c0]:focus {\n     background-color: var(--link-color);\n     color: var(--link2-color);\n     text-decoration: underline;\n}\n\n /* The submenu links container*/\n.subdrop[data-v-f53a94c0] {\n     background: var(--bg-color);\n     height: 0;\n     border-top: 0;\n     min-width: 100%;\n     left: 0;\n     margin: 0;\n     position: absolute;\n     text-align: left;\n     top: 100%;\n     visibility: hidden;\n     height: 1px;\n     overflow: hidden;\n     z-index: 10;\n}\n\n /* Dropdown Parent Link Style */\n.droplink[data-v-f53a94c0] {\n     display: inline-block;\n     min-width: -moz-fit-content;\n     min-width: fit-content;\n     position: relative;\n}\ninput[type=checkbox][data-v-f53a94c0] {\n     /* Double-sized Checkboxes */\n     /* IE */\n     /* FF */\n     /* Safari and Chrome */\n     /* Opera */\n     transform: scale(2);\n     padding: 10px;\n}\n\n /* List elements within the dropdown */\n.subdrop li[data-v-f53a94c0] {\n     display: block !important;\n     padding: 0 !important;\n}\n\n /* Links within the dropdown list */\n.subdrop a[data-v-f53a94c0] {\n     display: block;\n     padding: 12px 20px;\n     white-space: nowrap;\n}\n\n /* Allows links to show on hover/focus and through keyboard navigation via focus-within */\n.droplink:hover .subdrop[data-v-f53a94c0] {\n     visibility: visible;\n     height: auto;\n     z-index: 11;\n}\n\n /* Separate these to avoid IE completely ignoring the css above */\n.droplink:focus-within .subdrop[data-v-f53a94c0] {\n     visibility: visible;\n     height: auto;\n     z-index: 11;\n}\n.relook-header[data-v-f53a94c0] {\n    color: #000;\n    background-color: #f4f3f3;\n    padding: 2px;\n    border-bottom: 1px solid #b6b8bb;\n}\nthead th[data-v-f53a94c0]{\n    text-wrap: nowrap;\n}\n.badge-sm[data-v-f53a94c0] {\n     display: inline-block;\n     width: 15px;\n     height: 15px;\n     background: rgba(255, 0, 0, 0.882);\n     color: white;\n     font-size: 12px;\n     font-weight: 500;\n     border-radius: 100%;\n     position: absolute;\n     top: -20%;\n     left: 55%;\n     text-align: center;\n}\ntable input[data-v-f53a94c0]{\n    min-width:120px;\n}\n.vertical-middle[data-v-f53a94c0] {\n    vertical-align: middle;\n}\n ", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pv/nsia/dg/DG-CT3.vue?vue&type=style&index=0&id=f53a94c0&lang=css&scoped=true":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pv/nsia/dg/DG-CT3.vue?vue&type=style&index=0&id=f53a94c0&lang=css&scoped=true ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DG_CT3_vue_vue_type_style_index_0_id_f53a94c0_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DG-CT3.vue?vue&type=style&index=0&id=f53a94c0&lang=css&scoped=true */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pv/nsia/dg/DG-CT3.vue?vue&type=style&index=0&id=f53a94c0&lang=css&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DG_CT3_vue_vue_type_style_index_0_id_f53a94c0_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DG_CT3_vue_vue_type_style_index_0_id_f53a94c0_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/pv/nsia/dg/DG-CT3.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/pv/nsia/dg/DG-CT3.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DG_CT3_vue_vue_type_template_id_f53a94c0_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DG-CT3.vue?vue&type=template&id=f53a94c0&scoped=true */ "./resources/js/components/pv/nsia/dg/DG-CT3.vue?vue&type=template&id=f53a94c0&scoped=true");
/* harmony import */ var _DG_CT3_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DG-CT3.vue?vue&type=script&lang=js */ "./resources/js/components/pv/nsia/dg/DG-CT3.vue?vue&type=script&lang=js");
/* harmony import */ var _DG_CT3_vue_vue_type_style_index_0_id_f53a94c0_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DG-CT3.vue?vue&type=style&index=0&id=f53a94c0&lang=css&scoped=true */ "./resources/js/components/pv/nsia/dg/DG-CT3.vue?vue&type=style&index=0&id=f53a94c0&lang=css&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _DG_CT3_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _DG_CT3_vue_vue_type_template_id_f53a94c0_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _DG_CT3_vue_vue_type_template_id_f53a94c0_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "f53a94c0",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/pv/nsia/dg/DG-CT3.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/pv/nsia/dg/DG-CT3.vue?vue&type=script&lang=js":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/pv/nsia/dg/DG-CT3.vue?vue&type=script&lang=js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DG_CT3_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DG-CT3.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pv/nsia/dg/DG-CT3.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DG_CT3_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/pv/nsia/dg/DG-CT3.vue?vue&type=style&index=0&id=f53a94c0&lang=css&scoped=true":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/components/pv/nsia/dg/DG-CT3.vue?vue&type=style&index=0&id=f53a94c0&lang=css&scoped=true ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DG_CT3_vue_vue_type_style_index_0_id_f53a94c0_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DG-CT3.vue?vue&type=style&index=0&id=f53a94c0&lang=css&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pv/nsia/dg/DG-CT3.vue?vue&type=style&index=0&id=f53a94c0&lang=css&scoped=true");


/***/ }),

/***/ "./resources/js/components/pv/nsia/dg/DG-CT3.vue?vue&type=template&id=f53a94c0&scoped=true":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/pv/nsia/dg/DG-CT3.vue?vue&type=template&id=f53a94c0&scoped=true ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DG_CT3_vue_vue_type_template_id_f53a94c0_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DG_CT3_vue_vue_type_template_id_f53a94c0_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DG_CT3_vue_vue_type_template_id_f53a94c0_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DG-CT3.vue?vue&type=template&id=f53a94c0&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pv/nsia/dg/DG-CT3.vue?vue&type=template&id=f53a94c0&scoped=true");


/***/ })

}]);