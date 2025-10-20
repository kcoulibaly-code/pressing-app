"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_contreanalyse_cofina_filiale_CA8_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/cofina/filiale/CA8.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/cofina/filiale/CA8.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");
/* harmony import */ var _services_ebapis_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../services/ebapis.service */ "./resources/js/services/ebapis.service.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../services/auth.service */ "./resources/js/services/auth.service.js");
/* harmony import */ var _services_credit_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/credit.service */ "./resources/js/services/credit.service.js");
/* provided dependency */ var process = __webpack_require__(/*! process/browser.js */ "./node_modules/process/browser.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }





// ? IndexedDB helper for formDataToBeWatched Cache management
// import IndexedDB from "../../../helpers/indexedDB";

/**
 * Cache Management variables
 */
var indexedDBName = "CREDITFLOW_TABLES";
var collectionName = "TABLES";
var documentName = "T";
var documentId = null;
var _cache,
  _lastSaveTime = null,
  _onlineSaveIntervalTimeInSeconds = 30;
var _DEBUG = process.env.MIX_APP_DEBUG;
var _cacheAutosaveInterval = null;
var _timeSpentInSeconds = 0;
// -- End Cache Management variables

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "stocks",
  display: "stocks",
  components: {
    MoreVerticalIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_3__.MoreVerticalIcon,
    ChevronUpIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_3__.ChevronUpIcon,
    ChevronDownIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_3__.ChevronDownIcon,
    PlusIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_3__.PlusIcon,
    BookOpenIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_3__.BookOpenIcon,
    TrashIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_3__.TrashIcon,
    AirplayIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_3__.AirplayIcon
  },
  computed: {
    totalValeurBoursierestock: function totalValeurBoursierestock() {
      var trying = this.stocks.map(function (el) {
        el.valeur_boursiere = String(el.valeur_boursiere).replace(/\s+/g, "");
        if (!el.valeur_boursiere) return 0;
        return Number(el.valeur_boursiere);
      }).reduce(function (sum, curr) {
        return sum + curr;
      }, 0);
      return trying.toLocaleString("fr-FR");
    },
    moyenneMargestock: function moyenneMargestock() {
      var trying = this.stocks.map(function (el) {
        el.marge_pourcentage = String(el.marge_pourcentage).replace(/\s+/g, "");
        if (!el.marge_pourcentage) return 0;
        return Number(el.marge_pourcentage);
      }).reduce(function (sum, curr) {
        return sum + curr;
      }, 0);
      return trying;
    },
    TotalQuantitePrixAchat: function TotalQuantitePrixAchat() {
      var trying = this.stocks.map(function (el) {
        el.prix_vente = Number(String(el.prix_vente).replace(/\s+/g, ""));
        el.prix_achat = Number(String(el.prix_achat).replace(/\s+/g, ""));
        var mult = el.quantite * el.prix_achat;
        if (!mult) return 0;
        return Number(mult);
      }).reduce(function (sum, curr) {
        return sum + curr;
      }, 0);
      return trying;
    },
    TotalQuantitePrixVentes: function TotalQuantitePrixVentes() {
      var trying = this.stocks.map(function (el) {
        el.prix_vente = Number(String(el.prix_vente).replace(/\s+/g, ""));
        el.prix_achat = Number(String(el.prix_achat).replace(/\s+/g, ""));
        var mult = el.quantite * el.prix_vente;
        if (!mult) return 0;
        return Number(mult);
      }).reduce(function (sum, curr) {
        return sum + curr;
      }, 0);
      return trying;
    },
    TotalAchat: function TotalAchat() {
      var trying = this.stocks.map(function (el) {
        el.prix_achat = String(el.prix_achat).replace(/\s+/g, "");
        if (!el.prix_achat) return 0;
        return Number(el.prix_achat);
      }).reduce(function (sum, curr) {
        return sum + curr;
      }, 0);
      return trying;
    },
    totalMargeBrute: function totalMargeBrute() {
      var value = 0;
      var marge = 0;
      this.stocks.forEach(function (stock, key) {
        stock.quantite = Number(String(stock.quantite).replace(/\s+/g, ""));
        stock.prix_vente = Number(String(stock.prix_vente).replace(/\s+/g, ""));
        stock.prix_achat = Number(String(stock.prix_achat).replace(/\s+/g, ""));
        marge = stock.prix_vente * stock.quantite - stock.prix_achat * stock.quantite;
        value += marge;
      });
      return value;
    },
    credPubStock: function credPubStock() {
      var _this$meta_data$dossi2;
      var applied_templ_name = this.meta_data.dossier_credit.applied_templ_name;
      if (![undefined, null, ''].includes(applied_templ_name)) {
        var _this$credKeyMaping;
        if (![null, undefined, ''].includes((_this$credKeyMaping = this.credKeyMaping) === null || _this$credKeyMaping === void 0 ? void 0 : _this$credKeyMaping[applied_templ_name])) {
          var _this$meta_data$dossi;
          // console.log("applied_templane name", this.credKeyMaping[applied_templ_name])
          return (_this$meta_data$dossi = this.meta_data.dossier_credit) === null || _this$meta_data$dossi === void 0 ? void 0 : _this$meta_data$dossi[this.credKeyMaping[applied_templ_name]];
        }
      }
      return (_this$meta_data$dossi2 = this.meta_data.dossier_credit) === null || _this$meta_data$dossi2 === void 0 ? void 0 : _this$meta_data$dossi2.cred_pub_tb_6;
    }
  },
  props: {
    meta_data: Object,
    tb_name: String,
    tb_display_name: String
  },
  created: function created() {
    // ? Setup cache listeners and stuff
    // this.setupCache();
    //
  },
  mounted: function mounted() {
    // Initiate cache

    // // this.initCache();
    //

    this.loadRetrieved();
    this.loadTbAttrs(); // charge les attributs + sous attributs des tables
    this.tableClosedOrOpened();
  },
  data: function data() {
    var vm = this;
    return {
      credKeyMaping: {
        "Insvestissement": "cred_pub_tb_6",
        "BFR (Besoin en fonds de roulement)": "cred_pub_tb_6",
        "Retail BF (Burkina Faso)": "cred_pub_tb_16112"
      },
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
      ebapisHost: _services_ebapis_service__WEBPACK_IMPORTED_MODULE_0__["default"].host,
      authcheck: false,
      authcheckUsr: null,
      authcheckStatus: null,
      watchInPause: false,
      initLoad: true,
      seen: true,
      seen1: true,
      seen2: true,
      seen3: true,
      // customToolbar: [
      //       ["bold", "italic", "underline"],
      //       [{ list: "ordered" }, { list: "bullet" }],
      //       // ["image", "code-block"]
      //     ],
      meta_parseable: {
        cred_pub_key: this.meta_data["cred_pub_key"],
        tb_name: this.tb_name
      },
      has_cameFrom: false,
      formDataToBeWatched: {
        stocks: "",
        moyenne_marge: "",
        commentaire_stock_mort: "",
        notes: [],
        valeur_stock_visite: "",
        date_visite: "",
        stock_theorique: "",
        stock_final: "",
        total: ""
      },
      listingNote: false,
      stocks: [{
        article: "",
        quantite: "",
        prix_achat: "",
        prix_vente: "",
        valeur_boursiere: "",
        marge_pourcentage: ""
      }]
    };
  },
  methods: {
    setDateInput: function setDateInput(event) {
      this.formDataToBeWatched[event[0]] = event[1];
    },
    tableClosedOrOpened: function tableClosedOrOpened() {
      this.seen = this.fetchClosedTables(this.tb_name + this.meta_data["cred_pub_key"]);
    },
    openNotesModal: function openNotesModal() {
      var listing = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      this.listingNote = listing;
      this.$modal.show(this.tb_name);
    },
    setStocksVars: function setStocksVars(event, index) {
      this.stocks[index][event[0]] = event[1];
      this.handleInput();
    },
    formDataVars: function formDataVars(event) {
      this.formDataToBeWatched[event[0]] = event[1];
      this.handleInput();
      EventBus.$emit("montant-stock-visite", this.formDataToBeWatched.valeur_stock_visite);
    },
    loadRetrieved: function loadRetrieved() {
      var _this$meta_data$dossi3;
      var lentb = this.meta_data["dossier_credit"]["tbs_in_use"];
      var createdKey = this.tb_name;
      var createdKeyArr = createdKey.split("tb");
      createdKey = "cred_pub_tb_" + createdKeyArr[1];

      // Close table by default
      this.defaultRetract(false, (_this$meta_data$dossi3 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi3 === void 0 ? void 0 : _this$meta_data$dossi3.applied_templ_id);
      if (this.meta_data["dossier_credit"][createdKey] == undefined) {
        var _this$credPubStock;
        if (!["", undefined].includes((_this$credPubStock = this.credPubStock) === null || _this$credPubStock === void 0 ? void 0 : _this$credPubStock.stocks)) {
          var _this$credPubStock2, _this$credPubStock3, _this$credPubStock4, _this$credPubStock5, _this$credPubStock6, _this$credPubStock7, _this$credPubStock8, _this$credPubStock9, _this$credPubStock0;
          this.stocks = (_this$credPubStock2 = this.credPubStock) === null || _this$credPubStock2 === void 0 ? void 0 : _this$credPubStock2.stocks;
          this.formDataToBeWatched.moyenne_marge = (_this$credPubStock3 = this.credPubStock) === null || _this$credPubStock3 === void 0 ? void 0 : _this$credPubStock3.moyenne_marge;
          this.formDataToBeWatched.valeur_stock_visite = (_this$credPubStock4 = this.credPubStock) === null || _this$credPubStock4 === void 0 ? void 0 : _this$credPubStock4.valeur_stock_visite;
          this.formDataToBeWatched.date_visite = (_this$credPubStock5 = this.credPubStock) === null || _this$credPubStock5 === void 0 ? void 0 : _this$credPubStock5.date_visite;
          this.formDataToBeWatched.stock_theorique = (_this$credPubStock6 = this.credPubStock) === null || _this$credPubStock6 === void 0 ? void 0 : _this$credPubStock6.stock_theorique;
          this.formDataToBeWatched.stock_final = (_this$credPubStock7 = this.credPubStock) === null || _this$credPubStock7 === void 0 ? void 0 : _this$credPubStock7.stock_final;
          this.formDataToBeWatched.total = (_this$credPubStock8 = this.credPubStock) === null || _this$credPubStock8 === void 0 ? void 0 : _this$credPubStock8.total;
          this.formDataToBeWatched.commentaire_stock_mort = (_this$credPubStock9 = this.credPubStock) === null || _this$credPubStock9 === void 0 ? void 0 : _this$credPubStock9.commentaire_stock_mort;
          if (((_this$credPubStock0 = this.credPubStock) === null || _this$credPubStock0 === void 0 || (_this$credPubStock0 = _this$credPubStock0.stocks) === null || _this$credPubStock0 === void 0 ? void 0 : _this$credPubStock0.length) > 0) {
            this.has_cameFrom = true;
            this.stocks = this.stocks.map(function (ed) {
              return _objectSpread(_objectSpread({}, ed), {}, {
                cameFrom: 'tb_6'
              });
            });
          }
          this.handleInput();
          // this.stocks = this.stocks.map()
        }
      }
      if (lentb.length > 0) {
        if (this.meta_data["dossier_credit"][createdKey] != undefined) {
          this.formDataToBeWatched = this.meta_data["dossier_credit"][createdKey];
          if (this.meta_data["dossier_credit"][createdKey]["stocks"] != "") {
            this.stocks = this.meta_data["dossier_credit"][createdKey]["stocks"];
          }
        }

        // if (this.meta_data["dossier_credit"][createdKey]['garanties_specifiques'] != "") {
        //   this.garanties_specifiques = this.meta_data["dossier_credit"][createdKey]['garanties_specifiques'];
        // }
      }
      // Close table by default
      // this.defaultRetract(
      //     false,
      //     this.meta_data["dossier_credit"]?.applied_templ_id
      // );
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
          // this.$Progress.finish();
          // console.log(response);
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
    retract: function retract() {
      this.seen = !this.seen;
      var a = {
        tb_name: this.tb_name + this.meta_data["cred_pub_key"],
        status: this.seen
      };
      EventBus.$emit("savedclosed-table", a);
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
    retract2: function retract2() {
      this.seen2 = !this.seen2;
    },
    addMore: function addMore() {
      this.stocks.push({
        article: "",
        quantite: "",
        prix_achat: "",
        prix_vente: "",
        valeur_boursiere: "",
        marge_pourcentage: ""
      });
    },
    remove: function remove(index) {
      this.stocks.splice(index, 1);
      this.handleInput();
    },
    convertNumber: function convertNumber(valeur) {
      return Number(String(valeur).replace(/\s+/g, ""));
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
        id: "t6-head"
      };
      // console.log(p)
      this.$emit("load-buffer", p);
    },
    // SOMME DES MONTANTS
    somX3: function somX3(ob, key) {
      var som = 0;
      ob.filter(function (elm) {
        var result = String(elm[key]).replace(/\s+/g, "");
        if (result === "") {
          som += 0;
        } else {
          som += parseInt(result);
        }
      });
      return som;
    },
    handleInput: function handleInput() {
      var _this = this;
      this.formDataToBeWatched["stocks"] = this.stocks;
      this.formDataToBeWatched.total_valeur_boursiere = this.totalValeurBoursierestock;
      this.formDataToBeWatched.stock_theorique = this.TotalQuantitePrixAchat;

      // console.log(this.formDataToBeWatched.total);

      this.formDataToBeWatched.stock_final = this.convertNumber(this.formDataToBeWatched.stock_theorique) - this.convertNumber(this.formDataToBeWatched.total);

      // console.log("totalmarge", this.totalMargeBrute);

      this.stocks.forEach(function (stock, index) {
        var marge_brute = _this.convertNumber(stock.prix_vente) - _this.convertNumber(stock.prix_achat);
        stock.marge_pourcentage = marge_brute / (_this.convertNumber(stock.prix_vente) || 1) * 100;
        var stock_theorique = _this.convertNumber(stock.prix_achat) * _this.convertNumber(stock.quantite);

        // console.log(stock.prix_vente);
      });
      this.formDataToBeWatched.moyenne_marge = this.totalMargeBrute / this.TotalQuantitePrixVentes * 100;
    },
    instruction4: function instruction4(id) {
      var id0 = "#" + id;
      window.$(id0).modal("show");
    } // dateInputHdl(){
    //   this.chiffres_cles[0].date_creation_rccm_n_2 = this.chiffres_cles[0].date_creation_rccm_n_1
    //   this.formDataToBeWatched['chiffres_cles'] = this.chiffres_cles;
    // },
    //
    // nbActvHdl(){
    //   this.chiffres_cles[0].nb_an_activite_n_2 = parseInt(this.chiffres_cles[0].nb_an_activite_n_1) - 1;
    //   this.formDataToBeWatched['chiffres_cles'] = this.chiffres_cles;
    // }
  },
  watch: {
    formDataToBeWatched: {
      handler: function handler(newVal, oldVal) {
        // if (oldVal === undefined) {
        //   return
        // }
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/cofina/filiale/CA8.vue?vue&type=template&id=2a0a6d78&scoped=true":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/cofina/filiale/CA8.vue?vue&type=template&id=2a0a6d78&scoped=true ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  }, [_c("h6", {
    ref: "topdiv",
    staticClass: "head",
    attrs: {
      id: "t6-head"
    }
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col"
  }, [_vm._v("\n                            " + _vm._s(_vm.tb_display_name) + " : Stocks\n                        ")]), _vm._v(" "), _c("div", {
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
    staticClass: "col-12 p-0"
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("div", [_c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "p-2"
  }, [_vm._m(0), _vm._v(" "), _c("tbody", [_vm._l(_vm.stocks, function (stock, index) {
    return _c("tr", {
      key: index
    }, [_c("td", [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model.lazy",
        value: stock.article,
        expression: "stock.article",
        modifiers: {
          lazy: true
        }
      }],
      staticClass: "form-control",
      "class": {
        stock_incomming_color: (stock === null || stock === void 0 ? void 0 : stock.cameFrom) == "tb_6"
      },
      attrs: {
        required: "",
        type: "text"
      },
      domProps: {
        value: stock.article
      },
      on: {
        change: [function ($event) {
          return _vm.$set(stock, "article", $event.target.value);
        }, _vm.handleInput]
      }
    })]), _vm._v(" "), _c("td", [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model.lazy",
        value: stock.quantite,
        expression: "stock.quantite",
        modifiers: {
          lazy: true
        }
      }],
      staticClass: "form-control",
      "class": {
        stock_incomming_color: (stock === null || stock === void 0 ? void 0 : stock.cameFrom) == "tb_6"
      },
      attrs: {
        required: "",
        type: "number"
      },
      domProps: {
        value: stock.quantite
      },
      on: {
        change: [function ($event) {
          return _vm.$set(stock, "quantite", $event.target.value);
        }, _vm.handleInput]
      }
    })]), _vm._v(" "), _c("td", [_c("currency-input", {
      "class": {
        stock_incomming_color: (stock === null || stock === void 0 ? void 0 : stock.cameFrom) == "tb_6"
      },
      attrs: {
        value: stock.prix_achat,
        id: "prix_achat"
      },
      on: {
        input: function input($event) {
          return _vm.setStocksVars($event, index, "prix_achat");
        }
      }
    })], 1), _vm._v(" "), _c("td", [_c("currency-input", {
      "class": {
        stock_incomming_color: (stock === null || stock === void 0 ? void 0 : stock.cameFrom) == "tb_6"
      },
      attrs: {
        value: stock.prix_vente,
        id: "prix_vente"
      },
      on: {
        input: function input($event) {
          return _vm.setStocksVars($event, index, "prix_vente");
        }
      }
    })], 1), _vm._v(" "), _c("td", [_c("currency-input", {
      "class": {
        stock_incomming_color: (stock === null || stock === void 0 ? void 0 : stock.cameFrom) == "tb_6"
      },
      attrs: {
        value: stock.marge_pourcentage,
        id: "marge_pourcentage",
        "float": "",
        disabled: ""
      },
      on: {
        input: function input($event) {
          return _vm.setStocksVars($event, index, "marge_pourcentage");
        }
      }
    })], 1), _vm._v(" "), index == 0 ? _c("td", {
      staticStyle: {
        "font-size": "16px"
      }
    }, [_c("button", {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: index == 0,
        expression: "index == 0"
      }],
      staticStyle: {
        "background-color": "#2c3e50",
        color: "#ffffff",
        "border-radius": "15%",
        border: "none"
      },
      attrs: {
        type: "button",
        title: "Ajouter un nouvel article"
      },
      on: {
        click: function click($event) {
          return _vm.addMore(index);
        }
      }
    }, [_c("plus-icon", {
      staticClass: "custom-class",
      attrs: {
        size: "21"
      }
    })], 1)]) : _c("td", [_c("button", {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: index != 0,
        expression: "index != 0"
      }],
      staticStyle: {
        "background-color": "transparent",
        border: "none"
      },
      attrs: {
        type: "button",
        title: "Supprimer cet article"
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
    })], 1)])]);
  }), _vm._v(" "), _c("tr", [_c("td"), _vm._v(" "), _c("td", [_vm._v("Stock théorique")]), _vm._v(" "), _c("td", [_c("currency-input", {
    attrs: {
      value: _vm.formDataToBeWatched.stock_theorique,
      id: "stock_theorique",
      disabled: ""
    },
    on: {
      input: _vm.formDataVars
    }
  })], 1), _vm._v(" "), _c("td", [_vm._v("Total / moyenne")]), _vm._v(" "), _c("td", [_c("currency-input", {
    attrs: {
      value: _vm.formDataToBeWatched.moyenne_marge,
      id: "moyenne_marge",
      "float": "",
      disabled: ""
    },
    on: {
      input: _vm.formDataVars
    }
  })], 1), _vm._v(" "), _c("td"), _vm._v(" "), _c("td")]), _vm._v(" "), _vm._m(1), _vm._v(" "), _c("tr", [_c("td"), _vm._v(" "), _c("td", [_vm._v("\n                                                Stock total endommagé /\n                                                réduit\n                                            ")]), _vm._v(" "), _c("td", [_c("currency-input", {
    "class": {
      stock_incomming_color: _vm.has_cameFrom
    },
    attrs: {
      value: _vm.formDataToBeWatched.total,
      id: "total"
    },
    on: {
      input: _vm.formDataVars
    }
  })], 1), _vm._v(" "), _c("td"), _vm._v(" "), _c("td"), _vm._v(" "), _c("td"), _vm._v(" "), _c("td")]), _vm._v(" "), _c("tr", [_c("td"), _vm._v(" "), _c("td", [_vm._v("Stock final")]), _vm._v(" "), _c("td", [_c("currency-input", {
    attrs: {
      value: _vm.formDataToBeWatched.stock_final,
      id: "stock_final",
      disabled: ""
    },
    on: {
      input: _vm.formDataVars
    }
  })], 1), _vm._v(" "), _c("td"), _vm._v(" "), _c("td"), _vm._v(" "), _c("td"), _vm._v(" "), _c("td")]), _vm._v(" "), _c("tr", {
    staticStyle: {
      "margin-top": "30px"
    }
  }, [_c("td", [_vm._v("\n                                                Valeur du stock à la visite\n                                                "), _c("currency-input", {
    "class": {
      stock_incomming_color: _vm.has_cameFrom
    },
    attrs: {
      value: _vm.formDataToBeWatched.valeur_stock_visite,
      id: "valeur_stock_visite"
    },
    on: {
      input: _vm.formDataVars
    }
  })], 1), _vm._v(" "), _c("td", [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Date de la\n                                                    visite")]), _vm._v(" "), _c("date-input", {
    attrs: {
      value: _vm.formDataToBeWatched.date_visite,
      id: "date_visite",
      background: "background: #00ffff21",
      color: "color: #000"
    },
    on: {
      input: _vm.setDateInput
    }
  })], 1), _vm._v(" "), _c("td"), _vm._v(" "), _c("td"), _vm._v(" "), _c("td"), _vm._v(" "), _c("td"), _vm._v(" "), _c("td")])], 2)])])]), _vm._v(" "), _c("br"), _vm._v(" "), _c("br"), _vm._v(" "), _c("div", {
    staticClass: "mt-3"
  }, [_c("h6", [_vm._v("Commentaire sur le stock")]), _vm._v(" "), _c("vue-editor", {
    attrs: {
      id: "commentaire_benefice"
    },
    model: {
      value: _vm.formDataToBeWatched.commentaire_stock_mort,
      callback: function callback($$v) {
        _vm.$set(_vm.formDataToBeWatched, "commentaire_stock_mort", $$v);
      },
      expression: "\n                                    formDataToBeWatched.commentaire_stock_mort\n                                "
    }
  })], 1), _vm._v(" "), _c("br")]), _vm._v(" "), _c("div", {
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
  }, [_vm._v("\n                        Fermer le tableau\n                    ")])])])]) : _c("div", {
    staticClass: "card card-width-height"
  }, [_c("br"), _vm._v(" "), _c("div", {
    staticClass: "card-header hdc pb-0 pt-2"
  }, [_c("h6", {
    staticClass: "head",
    attrs: {
      id: "t6-head"
    }
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col"
  }, [_vm._v("\n                            " + _vm._s(_vm.tb_display_name) + " : Stocks\n                        ")]), _vm._v(" "), _c("div", {
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
  })], 1)])])])]), _vm._v(" "), _c("modal", {
    attrs: {
      name: "instruction_historique_cofianCIV",
      width: 370,
      resizable: "",
      height: "200"
    }
  }, [_c("div", {
    staticClass: "image1"
  })]), _vm._v(" "), _c("modal", {
    attrs: {
      name: "instruction_historique_autresBanques",
      width: 370,
      resizable: "",
      height: "120"
    }
  }, [_c("div", {
    staticClass: "image2"
  })]), _vm._v(" "), _c("modal", {
    attrs: {
      name: "sampleTB11",
      width: "auto",
      resizable: "",
      height: 200
    }
  }, [_c("div", {
    staticClass: "sample1"
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
  })], 1)]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("td", [_vm._v("Article")]), _vm._v(" "), _c("td", [_vm._v("Quantité")]), _vm._v(" "), _c("td", [_vm._v("Prix d'achat")]), _vm._v(" "), _c("td", [_vm._v("Prix de vente")]), _vm._v(" "), _c("td", [_vm._v("Marge brute (en %)")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("tr", [_c("td"), _vm._v(" "), _c("td"), _vm._v(" "), _c("td"), _vm._v(" "), _c("td"), _vm._v(" "), _c("td"), _vm._v(" "), _c("td"), _vm._v(" "), _c("td")]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/cofina/filiale/CA8.vue?vue&type=style&index=0&id=2a0a6d78&lang=css&scoped=true":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/cofina/filiale/CA8.vue?vue&type=style&index=0&id=2a0a6d78&lang=css&scoped=true ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\ninput[data-v-2a0a6d78] {\r\n    /*border: 1px solid red;*/\n}\n*[data-v-2a0a6d78] {\r\n    font-family: \"Google sans\";\n}\nlabel[data-v-2a0a6d78] {\r\n    height: 10px;\r\n    font-size: 13px;\n}\ninput[data-v-2a0a6d78],\r\nselect[data-v-2a0a6d78] {\r\n    height: 35px;\r\n    border-color: #34495e;\r\n    color: #57606f;\r\n    font-size: 13px;\r\n    font-weight: bold;\n}\n.card-width-height[data-v-2a0a6d78] {\r\n    width: 100%;\r\n    height: 100%;\n}\n.centrer[data-v-2a0a6d78] {\r\n    position: relative;\r\n    left: 10%;\r\n    right: 10%;\r\n    transform: translateX(50%);\n}\n.head[data-v-2a0a6d78] {\r\n    color: #f1f2f6;\r\n    font-size: 22px;\n}\n.hdc[data-v-2a0a6d78] {\r\n    background-color: #57606f;\n}\n.imageM21520[data-v-2a0a6d78] {\r\n    background: url(\"/images/capture_cofina/instruction_Evaluation_activite_commerciale_position_sepche.png\")\r\n        no-repeat;\r\n    background-position: center;\r\n    background-size: contain;\r\n    width: 100%;\r\n    height: 100%;\n}\n.image1[data-v-2a0a6d78] {\r\n    background: url(\"/images/capture_cofina/instruction_analyse_comptes_courants.png\")\r\n        no-repeat;\r\n    background-position: center;\r\n    background-size: contain;\r\n    width: 370px;\r\n    height: 200px;\n}\n.image2[data-v-2a0a6d78] {\r\n    background: url(\"/images/capture_cofina/instruction_historique_analyse_comptes_courants.png\")\r\n        no-repeat;\r\n    background-position: center;\r\n    background-size: contain;\r\n    width: 370px;\r\n    height: 120px;\n}\ntd[data-v-2a0a6d78] {\r\n    padding: 5px;\r\n    font-size: 13px;\n}\ninput[data-v-2a0a6d78] {\r\n    width: 250px;\n}\nselect[data-v-2a0a6d78] {\r\n    width: 250px;\n}\n.stock_incomming_color[data-v-2a0a6d78]{\r\n    background: #00ffff21;\r\n    color: #000;\n}\n.badge-sm[data-v-2a0a6d78] {\r\n    display: inline-block;\r\n    width: 15px;\r\n    height: 15px;\r\n    background: rgba(255, 0, 0, 0.882);\r\n    color: white;\r\n    font-size: 12px;\r\n    font-weight: 500;\r\n    border-radius: 100%;\r\n    position: absolute;\r\n    top: -20%;\r\n    left: 55%;\r\n    text-align: center;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/cofina/filiale/CA8.vue?vue&type=style&index=0&id=2a0a6d78&lang=css&scoped=true":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/cofina/filiale/CA8.vue?vue&type=style&index=0&id=2a0a6d78&lang=css&scoped=true ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CA8_vue_vue_type_style_index_0_id_2a0a6d78_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CA8.vue?vue&type=style&index=0&id=2a0a6d78&lang=css&scoped=true */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/cofina/filiale/CA8.vue?vue&type=style&index=0&id=2a0a6d78&lang=css&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CA8_vue_vue_type_style_index_0_id_2a0a6d78_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CA8_vue_vue_type_style_index_0_id_2a0a6d78_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/contreanalyse/cofina/filiale/CA8.vue":
/*!**********************************************************************!*\
  !*** ./resources/js/components/contreanalyse/cofina/filiale/CA8.vue ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CA8_vue_vue_type_template_id_2a0a6d78_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CA8.vue?vue&type=template&id=2a0a6d78&scoped=true */ "./resources/js/components/contreanalyse/cofina/filiale/CA8.vue?vue&type=template&id=2a0a6d78&scoped=true");
/* harmony import */ var _CA8_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CA8.vue?vue&type=script&lang=js */ "./resources/js/components/contreanalyse/cofina/filiale/CA8.vue?vue&type=script&lang=js");
/* harmony import */ var _CA8_vue_vue_type_style_index_0_id_2a0a6d78_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CA8.vue?vue&type=style&index=0&id=2a0a6d78&lang=css&scoped=true */ "./resources/js/components/contreanalyse/cofina/filiale/CA8.vue?vue&type=style&index=0&id=2a0a6d78&lang=css&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _CA8_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _CA8_vue_vue_type_template_id_2a0a6d78_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _CA8_vue_vue_type_template_id_2a0a6d78_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "2a0a6d78",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/contreanalyse/cofina/filiale/CA8.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/contreanalyse/cofina/filiale/CA8.vue?vue&type=script&lang=js":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/contreanalyse/cofina/filiale/CA8.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CA8_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CA8.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/cofina/filiale/CA8.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CA8_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/contreanalyse/cofina/filiale/CA8.vue?vue&type=style&index=0&id=2a0a6d78&lang=css&scoped=true":
/*!******************************************************************************************************************************!*\
  !*** ./resources/js/components/contreanalyse/cofina/filiale/CA8.vue?vue&type=style&index=0&id=2a0a6d78&lang=css&scoped=true ***!
  \******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CA8_vue_vue_type_style_index_0_id_2a0a6d78_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CA8.vue?vue&type=style&index=0&id=2a0a6d78&lang=css&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/cofina/filiale/CA8.vue?vue&type=style&index=0&id=2a0a6d78&lang=css&scoped=true");


/***/ }),

/***/ "./resources/js/components/contreanalyse/cofina/filiale/CA8.vue?vue&type=template&id=2a0a6d78&scoped=true":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/components/contreanalyse/cofina/filiale/CA8.vue?vue&type=template&id=2a0a6d78&scoped=true ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CA8_vue_vue_type_template_id_2a0a6d78_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CA8_vue_vue_type_template_id_2a0a6d78_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CA8_vue_vue_type_template_id_2a0a6d78_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CA8.vue?vue&type=template&id=2a0a6d78&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/cofina/filiale/CA8.vue?vue&type=template&id=2a0a6d78&scoped=true");


/***/ })

}]);