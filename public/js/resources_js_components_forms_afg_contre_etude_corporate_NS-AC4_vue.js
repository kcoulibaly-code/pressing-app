"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_forms_afg_contre_etude_corporate_NS-AC4_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/contre_etude_corporate/NS-AC4.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/contre_etude_corporate/NS-AC4.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");
/* harmony import */ var _services_ebapis_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../services/ebapis.service */ "./resources/js/services/ebapis.service.js");
/* harmony import */ var _helpers_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../helpers/helper */ "./resources/js/helpers/helper.js");
/* harmony import */ var _vueform_multiselect_dist_multiselect_vue2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vueform/multiselect/dist/multiselect.vue2 */ "./node_modules/@vueform/multiselect/dist/multiselect.vue2.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/auth.service */ "./resources/js/services/auth.service.js");
/* harmony import */ var _services_credit_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/credit.service */ "./resources/js/services/credit.service.js");
/* harmony import */ var _helpers_indexedDB__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../helpers/indexedDB */ "./resources/js/helpers/indexedDB.js");
/* harmony import */ var _helpers_indexedDB__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_helpers_indexedDB__WEBPACK_IMPORTED_MODULE_5__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }








window.$ = window.jQuery = __webpack_require__(/*! jquery/dist/jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "DiagnosticEconomique",
  display: "diagnostic_economique",
  components: {
    MoreVerticalIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_6__.MoreVerticalIcon,
    ChevronUpIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_6__.ChevronUpIcon,
    ChevronDownIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_6__.ChevronDownIcon,
    PlusIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_6__.PlusIcon,
    TrashIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_6__.TrashIcon,
    AirplayIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_6__.AirplayIcon,
    BookOpenIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_6__.BookOpenIcon,
    Multiselect: _vueform_multiselect_dist_multiselect_vue2__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  props: {
    meta_data: Object,
    tb_name: String,
    tb_display_name: String
  },
  created: function created() {
    // Setup cache listeners
    // this.setupCache();
  },
  mounted: function mounted() {
    this.loadRetrieved();
    this.loadTbAttrs();
    this.tableClosedOrOpened();
  },
  data: function data() {
    var vm = this;
    return {
      ebapisHost: _services_ebapis_service__WEBPACK_IMPORTED_MODULE_0__["default"].host,
      authcheck: false,
      authcheckUsr: null,
      authcheckStatus: null,
      watchInPause: true,
      // Contrôle du watcher
      initLoad: true,
      seen: true,
      seen1: true,
      seen2: true,
      seen3: true,
      seen4: true,
      seen5: true,
      seen6: true,
      seen7: true,
      seen8: true,
      disp: false,
      isLoading: false,
      max: 5,
      placeholder: "Chercher clients",
      matcli: "matcli",
      nomcli: "nomcli",
      credits: [],
      clients: [],
      encours: null,
      frais: [],
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
        tb_name: this.tb_name,
        type_table: null
      },
      indicateur_de_performance: [{
        name: "Chiffres d'affaires",
        indicateur_en_n: 0,
        indicateur_en_n1: 0,
        indicateur_en_n2: 0,
        isEditable: false
      }, {
        name: "Résultat d'exploitation",
        indicateur_en_n: 0,
        indicateur_en_n1: 0,
        indicateur_en_n2: 0,
        isEditable: false
      }, {
        name: "Résultat net",
        indicateur_en_n: 0,
        indicateur_en_n1: 0,
        indicateur_en_n2: 0,
        isEditable: false
      }, {
        name: "Cash flow",
        indicateur_en_n: 0,
        indicateur_en_n1: 0,
        indicateur_en_n2: 0,
        isEditable: false
      }],
      structure_financiere: [{
        name: "FR",
        indicateur_en_n: 0,
        indicateur_en_n1: 0,
        indicateur_en_n2: 0,
        isEditable: false
      }, {
        name: "BFR",
        indicateur_en_n: 0,
        indicateur_en_n1: 0,
        indicateur_en_n2: 0,
        isEditable: false
      }, {
        name: "Trésorerie nette",
        indicateur_en_n: 0,
        indicateur_en_n1: 0,
        indicateur_en_n2: 0,
        isEditable: false
      }, {
        name: "Ratio de solvabilité",
        indicateur_en_n: 0,
        indicateur_en_n1: 0,
        indicateur_en_n2: 0,
        isEditable: false,
        isFloat: true
      },
      // {
      //     name: "Ratio d'endettement Levier financier restreint",
      //     indicateur_en_n: 0,
      //     indicateur_en_n1: 0,
      //     indicateur_en_n2: 0,
      //     isEditable: false,
      //     isFloat: true
      // },
      {
        name: "Ratio d'endettement classic",
        indicateur_en_n: 0,
        indicateur_en_n1: 0,
        indicateur_en_n2: 0,
        isEditable: false,
        isFloat: true
      }
      // {
      //     name: "Ratio d'endettement Brut",
      //     indicateur_en_n: 0,
      //     indicateur_en_n1: 0,
      //     indicateur_en_n2: 0,
      //     isEditable: false,
      //     isFloat: true
      // },
      ],
      formDataToBeWatched: {
        presentation_activite_et_marche: "",
        presentation_du_management: "",
        analyse_performance: "",
        analyse_previsionnelle: "",
        indicateur_de_performance: [],
        indicateur_de_performance_year_n: "",
        indicateur_de_performance_year_n1: "",
        indicateur_de_performance_year_n2: "",
        structure_financiere: [],
        structure_financiere_year_n: "",
        structure_financiere_year_n1: "",
        structure_financiere_year_n2: "",
        commentaire_indicateur_performance1: "",
        commentaire_indicateur_performance2: "",
        commentaire_commentaire_analyse_projections_financiere: "",
        analyse_chiffre_previsionnels: "",
        notes: []
      },
      listingNote: false,
      recall_financial: true
    };
  },
  methods: {
    openKetri: function openKetri() {
      EventBus.$emit('open-ketri', ['/images/capture_afg/exemples/contretude/diagnostic.png', '/images/capture_afg/exemples/contretude/diagnostic2.png', '/images/capture_afg/exemples/contretude/diagnostic3.png', '/images/capture_afg/exemples/contretude/diagnostic4.png', '/images/capture_afg/exemples/contretude/diagnostic5.png', '/images/capture_afg/exemples/contretude/diagnostic6.png']);
    },
    checkboxValCashCall: function checkboxValCashCall(event) {
      var value = event.target.checked ? event.target.value : "";
      this.$set(this.formDataToBeWatched, 'pret_couvert_cash_call', value);
    },
    tableClosedOrOpened: function tableClosedOrOpened() {
      this.seen = this.fetchClosedTables(this.tb_name + this.meta_data["cred_pub_key"]);
    },
    openNotesModal: function openNotesModal() {
      var listing = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      this.listingNote = listing;
      this.$modal.show(this.tb_name);
    },
    launchAutoSaver: function launchAutoSaver() {
      var _this = this;
      _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["default"].loadUserData().then(function (res) {
        _this.send2Backend(res, 0, 0);
      })["catch"](function (err) {
        _this.loadWithError(err);
      });
    },
    setChiffreCleVars: function setChiffreCleVars(event, index) {
      this.chiffres_cles[index][event[0]] = event[1];
      this.chiffres_cles[0].nb_an_activite_n_2 = parseInt(this.chiffres_cles[0].nb_an_activite_n_1) - 1;
      this.$set(this.formDataToBeWatched, "chiffres_cles", _toConsumableArray(this.chiffres_cles));
    },
    loadRetrieved: function loadRetrieved() {
      var _this$meta_data$dossi,
        _this2 = this;
      this.watchInPause = true; // Désactiver le watcher
      var lentb = this.meta_data["dossier_credit"]["tbs_in_use"];
      var createdKey = this.tb_name;
      var createdKeyArr = createdKey.split("tb");
      createdKey = "cred_pub_tb_" + createdKeyArr[1];
      this.defaultRetract(false, (_this$meta_data$dossi = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi === void 0 ? void 0 : _this$meta_data$dossi.applied_templ_id);
      if (this.meta_data["dossier_credit"][createdKey] == undefined) {
        var _this$meta_data$dossi2, _this$meta_data$dossi3;
        var data_tb13 = (_this$meta_data$dossi2 = (_this$meta_data$dossi3 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi3 === void 0 ? void 0 : _this$meta_data$dossi3["cred_pub_tb_13"]) !== null && _this$meta_data$dossi2 !== void 0 ? _this$meta_data$dossi2 : null;
        if (!['', null, undefined].includes(data_tb13 === null || data_tb13 === void 0 ? void 0 : data_tb13.years) || !['', null, undefined].includes(data_tb13 === null || data_tb13 === void 0 ? void 0 : data_tb13.annee_calculees)) {
          var _data_tb13$years$othe, _data_tb13$years, _data_tb13$annee_calc, _data_tb13$annee_calc2, _data_tb13$years$othe2, _data_tb13$years2, _data_tb13$annee_calc3, _data_tb13$annee_calc4, _data_tb13$years$othe3, _data_tb13$years3, _data_tb13$annee_calc5, _data_tb13$annee_calc6, _data_tb13$ratiosByCa;
          var n2 = (_data_tb13$years$othe = data_tb13 === null || data_tb13 === void 0 || (_data_tb13$years = data_tb13.years) === null || _data_tb13$years === void 0 || (_data_tb13$years = _data_tb13$years.other) === null || _data_tb13$years === void 0 ? void 0 : _data_tb13$years.y2) !== null && _data_tb13$years$othe !== void 0 ? _data_tb13$years$othe : (data_tb13 === null || data_tb13 === void 0 || (_data_tb13$annee_calc = data_tb13.annee_calculees) === null || _data_tb13$annee_calc === void 0 ? void 0 : _data_tb13$annee_calc.at(-1)) != undefined ? (data_tb13 === null || data_tb13 === void 0 || (_data_tb13$annee_calc2 = data_tb13.annee_calculees) === null || _data_tb13$annee_calc2 === void 0 ? void 0 : _data_tb13$annee_calc2.at(-1)) - 2 : "";
          var n1 = (_data_tb13$years$othe2 = data_tb13 === null || data_tb13 === void 0 || (_data_tb13$years2 = data_tb13.years) === null || _data_tb13$years2 === void 0 || (_data_tb13$years2 = _data_tb13$years2.other) === null || _data_tb13$years2 === void 0 ? void 0 : _data_tb13$years2.y1) !== null && _data_tb13$years$othe2 !== void 0 ? _data_tb13$years$othe2 : (data_tb13 === null || data_tb13 === void 0 || (_data_tb13$annee_calc3 = data_tb13.annee_calculees) === null || _data_tb13$annee_calc3 === void 0 ? void 0 : _data_tb13$annee_calc3.at(-1)) != undefined ? (data_tb13 === null || data_tb13 === void 0 || (_data_tb13$annee_calc4 = data_tb13.annee_calculees) === null || _data_tb13$annee_calc4 === void 0 ? void 0 : _data_tb13$annee_calc4.at(-1)) - 1 : "";
          var n = (_data_tb13$years$othe3 = data_tb13 === null || data_tb13 === void 0 || (_data_tb13$years3 = data_tb13.years) === null || _data_tb13$years3 === void 0 || (_data_tb13$years3 = _data_tb13$years3.other) === null || _data_tb13$years3 === void 0 ? void 0 : _data_tb13$years3.y) !== null && _data_tb13$years$othe3 !== void 0 ? _data_tb13$years$othe3 : (data_tb13 === null || data_tb13 === void 0 || (_data_tb13$annee_calc5 = data_tb13.annee_calculees) === null || _data_tb13$annee_calc5 === void 0 ? void 0 : _data_tb13$annee_calc5.at(-1)) != undefined ? data_tb13 === null || data_tb13 === void 0 || (_data_tb13$annee_calc6 = data_tb13.annee_calculees) === null || _data_tb13$annee_calc6 === void 0 ? void 0 : _data_tb13$annee_calc6.at(-1) : "";
          this.formDataToBeWatched.indicateur_de_performance_year_n = n;
          this.formDataToBeWatched.indicateur_de_performance_year_n1 = n1;
          this.formDataToBeWatched.indicateur_de_performance_year_n2 = n2;
          this.formDataToBeWatched.structure_financiere_year_n = n;
          this.formDataToBeWatched.structure_financiere_year_n1 = n1;
          this.formDataToBeWatched.structure_financiere_year_n2 = n2;
          var ratiosByCategory = (_data_tb13$ratiosByCa = data_tb13 === null || data_tb13 === void 0 ? void 0 : data_tb13.ratiosByCategory) !== null && _data_tb13$ratiosByCa !== void 0 ? _data_tb13$ratiosByCa : null;
          var map_copy_names = ["FR", "BFR", "Cash flow", "Résultat net", "Trésorerie nette"];
          var map_original_names = ["Fonds de roulement", "Besoins en Fonds de roulement d'exploitation", "Cash-Flow", "Resultat net", "Tresorerie nette"];
          ['indicateur_de_performance', 'structure_financiere'].forEach(function (key) {
            if (!['', null, undefined].includes(_this2 === null || _this2 === void 0 ? void 0 : _this2[key])) {
              _this2[key].forEach(function (el) {
                var libelle = (el === null || el === void 0 ? void 0 : el.name) || "";
                var foundLibelle = map_copy_names.findIndex(function (l) {
                  return l == libelle;
                });
                if (foundLibelle != -1) {
                  libelle = map_original_names[foundLibelle] || libelle;
                }
                var found = ratiosByCategory === null || ratiosByCategory === void 0 ? void 0 : ratiosByCategory.find(function (r) {
                  var _libelle, _r$LIB, _r$LIB2, _libelle2;
                  if (((_libelle = libelle) === null || _libelle === void 0 ? void 0 : _libelle.toLowerCase()) == "ratio d'endettement") return r === null || r === void 0 || (_r$LIB = r.LIB) === null || _r$LIB === void 0 || (_r$LIB = _r$LIB.toString()) === null || _r$LIB === void 0 || (_r$LIB = _r$LIB.toLowerCase()) === null || _r$LIB === void 0 ? void 0 : _r$LIB.trim().includes("ratio d'endettement");
                  return (r === null || r === void 0 || (_r$LIB2 = r.LIB) === null || _r$LIB2 === void 0 || (_r$LIB2 = _r$LIB2.toString()) === null || _r$LIB2 === void 0 || (_r$LIB2 = _r$LIB2.toLowerCase()) === null || _r$LIB2 === void 0 ? void 0 : _r$LIB2.trim()) == ((_libelle2 = libelle) === null || _libelle2 === void 0 || (_libelle2 = _libelle2.toString()) === null || _libelle2 === void 0 || (_libelle2 = _libelle2.toLowerCase()) === null || _libelle2 === void 0 ? void 0 : _libelle2.trim());
                });
                if (found) {
                  el.indicateur_en_n = _this2.convertInt((found === null || found === void 0 ? void 0 : found.n) || 0) === 999999 ? 0 : _this2.convertInt((found === null || found === void 0 ? void 0 : found.n) || 0);
                  el.indicateur_en_n1 = _this2.convertInt((found === null || found === void 0 ? void 0 : found.n1) || 0) === 999999 ? 0 : _this2.convertInt((found === null || found === void 0 ? void 0 : found.n1) || 0);
                  el.indicateur_en_n2 = _this2.convertInt((found === null || found === void 0 ? void 0 : found.n2) || 0) === 999999 ? 0 : _this2.convertInt((found === null || found === void 0 ? void 0 : found.n2) || 0);
                  el.recall = true;
                }
              });
              _this2.formDataToBeWatched[key] = _this2[key];
            }
          });
        } else {
          this.formDataToBeWatched.indicateur_de_performance_year_n = this.getCurrentFullyear();
          this.formDataToBeWatched.indicateur_de_performance_year_n1 = this.getCurrentFullyear() - 1;
          this.formDataToBeWatched.indicateur_de_performance_year_n2 = this.getCurrentFullyear() - 2;
          this.formDataToBeWatched.structure_financiere_year_n = this.getCurrentFullyear();
          this.formDataToBeWatched.structure_financiere_year_n1 = this.getCurrentFullyear() - 1;
          this.formDataToBeWatched.structure_financiere_year_n2 = this.getCurrentFullyear() - 2;
        }
      }
      if (lentb.length > 0 && this.meta_data["dossier_credit"][createdKey]) {
        var _this$meta_data$dossi4, _this$meta_data$dossi5;
        this.formDataToBeWatched = _objectSpread({}, this.meta_data["dossier_credit"][createdKey]);
        if (((_this$meta_data$dossi4 = this.meta_data["dossier_credit"][createdKey]) === null || _this$meta_data$dossi4 === void 0 || (_this$meta_data$dossi4 = _this$meta_data$dossi4.indicateur_de_performance) === null || _this$meta_data$dossi4 === void 0 ? void 0 : _this$meta_data$dossi4.length) > 0) {
          this.$set(this, 'indicateur_de_performance', _toConsumableArray(this.meta_data["dossier_credit"][createdKey].indicateur_de_performance));
        }
        if (((_this$meta_data$dossi5 = this.meta_data["dossier_credit"][createdKey]) === null || _this$meta_data$dossi5 === void 0 || (_this$meta_data$dossi5 = _this$meta_data$dossi5.structure_financiere) === null || _this$meta_data$dossi5 === void 0 ? void 0 : _this$meta_data$dossi5.length) > 0) {
          this.$set(this, 'structure_financiere', _toConsumableArray(this.meta_data["dossier_credit"][createdKey].structure_financiere));
        }
      }
      this.watchInPause = false; // Réactiver le watcher
    },
    setTbVal: function setTbVal(val) {
      this.cred_pub_key = val;
    },
    loadWithError: function loadWithError(err) {
      // window.location.href = "/login";
    },
    send2Backend: function send2Backend(res, newVal, oldVal) {
      var _this3 = this;
      this.authcheck = true;
      this.authcheckUsr = res.data;
      this.authcheckStatus = res.status;
      if (this.authcheckStatus === 401) {
        // window.location.href = "/login";
      }
      if (this.authcheck) {
        this.$emit("autosaving");
        this.$axios.post(this.ebapisHost + "creditbuilder/api/v1/autosaving/", {
          user: this.authcheckUsr,
          meta_parseable: this.meta_parseable,
          filledData: this.formDataToBeWatched
        }).then(function (response) {
          _this3.$emit("autosaving");
          var tbFetcheData = response.data;
          if (tbFetcheData["is_success"] === true) {
            _this3.$emit("load-shell");
          }
        })["catch"](function (error) {
          console.log(error);
        });
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
    deleteTB: function deleteTB() {
      if (confirm("Êtes-vous sûr de vouloir supprimer ce tableau ?")) {
        this.$emit("delete-tb", {
          tb_name: this.tb_name
        });
      }
    },
    loadDate: function loadDate() {
      var options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
      };
      var today = new Date();
      this.dateOfToday = today.toLocaleDateString("fr-FR");
    },
    instruction4: function instruction4(id) {
      var id0 = "#" + id;
      window.$(id0).modal("show");
    },
    precomputeScore: function precomputeScore() {
      var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      this.meta_parseable["type_table"] = a;
      var scoringVar = [];
      if (a == "organisation") {
        scoringVar = ["vivre", "competences_manageriales", "formalisation", "interaction"];
      } else {
        scoringVar = ["technologie", "risque_juridique", "risque_politique"];
      }
      for (var i = 0; i < scoringVar.length; i++) {
        if (this.formDataToBeWatched[scoringVar[i]] == "") {
          return false;
        }
      }
      return true;
    },
    addMore: function addMore(listName) {
      this[listName].push({
        name: '',
        indicateur_en_n: '',
        indicateur_en_n1: '',
        indicateur_en_n2: '',
        isEditable: true,
        type: ""
      });
      this.$set(this.formDataToBeWatched, listName, _toConsumableArray(this[listName]));
    },
    remove: function remove(index, listName) {
      this[listName].splice(index, 1);
      this.$set(this.formDataToBeWatched, listName, _toConsumableArray(this[listName]));
    },
    addMore1: function addMore1() {
      this.entite_connectes.push({
        matricule_client_entite_connecte: "",
        raison_social_entite_connecte: "",
        secteur_activite_entite_connecte: ""
      });
    },
    remove1: function remove1(index) {
      this.entite_connectes.splice(index, 1);
    },
    loadTbAttrs: function loadTbAttrs() {
      var l = [];
      var topdivel = this.$refs.topdiv;
      var k = document.querySelectorAll(".subdiv" + this.tb_name);
      k.forEach(function (e) {
        l.push(e.innerText);
      });
      var p = {
        name_of_title: topdivel.innerText,
        list_of_content: l,
        id: "f1-head"
      };
      this.$emit("load-buffer", p);
    },
    onChange: function onChange(e) {
      this.disp = e.target.value === "Non";
    },
    onSlctMatCli: function onSlctMatCli(obj, key) {
      this.entite_connectes[key]["raison_social_entite_connecte"] = obj.nomcli;
      this.entite_connectes[key]["matricule_client_entite_connecte"] = obj.matclihan;
    },
    handleInput: function handleInput(evt, indicateurName, index, property) {
      var value;
      if (evt && evt.target) {
        value = evt.target.value;
      } else if (evt !== undefined) {
        value = evt;
      } else {
        console.warn("handleInput appelé avec evt undefined", {
          indicateurName: indicateurName,
          index: index,
          property: property
        });
        return;
      }
      if (index !== undefined && property) {
        this.$set(this[indicateurName][index], property, value);
      }
      this.$set(this.formDataToBeWatched, indicateurName, _toConsumableArray(this[indicateurName]));
    },
    instruction3: function instruction3(id) {
      var id0 = "#" + id;
      window.$(id0).modal("show");
    }
  },
  watch: {
    formDataToBeWatched: {
      handler: function handler(newVal, oldVal) {
        if (!this.watchInPause) {
          this.autosaving(newVal, oldVal);
        }
      },
      deep: true,
      immediate: true
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/contre_etude_corporate/NS-AC4.vue?vue&type=template&id=14a3911e&scoped=true":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/contre_etude_corporate/NS-AC4.vue?vue&type=template&id=14a3911e&scoped=true ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  }, [_vm.isLoading ? _c("loader") : _vm._e(), _vm._v(" "), _c("div", {
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
    staticClass: "card card-width-height"
  }, [_c("br"), _vm._v(" "), _c("div", {
    staticClass: "card-header hdc pb-0 pt-2"
  }, [_c("h3", {
    ref: "topdiv",
    staticClass: "head",
    attrs: {
      id: "f1-head"
    }
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col"
  }, [_vm._v("\n                            " + _vm._s(_vm.tb_display_name) + " : Diagnostic économique & financier du dossier\n                        ")]), _vm._v(" "), _c("div", {
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
  }, [_c("span", [_vm._v("\n                                            " + _vm._s(_vm.formDataToBeWatched.notes.length) + "\n                                        ")])])])]) : _vm._e(), _vm._v(" "), _c("airplay-icon", {
    staticClass: "custom-class mt-1",
    staticStyle: {
      cursor: "pointer",
      margin: "0 5px"
    },
    attrs: {
      size: "0.7x"
    },
    on: {
      click: _vm.openKetri
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
    staticClass: "row p-0"
  }, [_c("div", {
    staticClass: "col-12 p-0 position-relative"
  }, [_vm.seen1 ? _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "relook-header",
    on: {
      click: function click($event) {
        _vm.seen1 = !_vm.seen1;
      }
    }
  }, [_c("h6", {
    "class": "subdiv" + this.tb_name,
    attrs: {
      id: "bref-rappel-des-relations-du-client-avec-la-afg-banque-ci"
    }
  }, [_vm._v("\n                                Présentation succincte de l’activité & du Marché\n                                "), _c("chevron-up-icon", {
    staticClass: "custom-class",
    staticStyle: {
      "float": "right",
      cursor: "pointer"
    },
    attrs: {
      size: "21"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "card-body remove-card-padding"
  }, [_c("div", {
    staticClass: "col-md-12 mb-4"
  }, [_c("vue-editor", {
    attrs: {
      maximum: 1500,
      id: "presentation_activite_et_marche"
    },
    on: {
      "update-value": function updateValue($event) {
        _vm.formDataToBeWatched[$event[0]] = $event[1];
      }
    },
    model: {
      value: _vm.formDataToBeWatched.presentation_activite_et_marche,
      callback: function callback($$v) {
        _vm.$set(_vm.formDataToBeWatched, "presentation_activite_et_marche", $$v);
      },
      expression: "formDataToBeWatched.presentation_activite_et_marche"
    }
  })], 1)])]) : _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "relook-header",
    on: {
      click: function click($event) {
        _vm.seen1 = !_vm.seen1;
      }
    }
  }, [_c("h6", {
    "class": "subdiv" + this.tb_name,
    attrs: {
      id: "bref-rappel-des-relations-du-client-avec-la-afg-banque-ci"
    }
  }, [_vm._v("\n                                Présentation succincte de l’activité & du Marché\n                                "), _c("chevron-down-icon", {
    staticClass: "custom-class",
    staticStyle: {
      "float": "right",
      cursor: "pointer"
    },
    attrs: {
      size: "21"
    }
  })], 1)])]), _vm._v(" "), _vm.seen2 ? _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "relook-header",
    on: {
      click: function click($event) {
        _vm.seen2 = !_vm.seen2;
      }
    }
  }, [_c("h6", {
    "class": "subdiv" + this.tb_name,
    attrs: {
      id: "bref-rappel-des-relations-du-client-avec-la-afg-banque-ci"
    }
  }, [_vm._v("\n                                Présentation du Management\n                                "), _c("chevron-up-icon", {
    staticClass: "custom-class",
    staticStyle: {
      "float": "right",
      cursor: "pointer"
    },
    attrs: {
      size: "21"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "card-body remove-card-padding"
  }, [_c("div", {
    staticClass: "col-md-12 mb-4"
  }, [_c("vue-editor", {
    attrs: {
      maximum: 1500,
      id: "presentation_du_management"
    },
    on: {
      "update-value": function updateValue($event) {
        _vm.formDataToBeWatched[$event[0]] = $event[1];
      }
    },
    model: {
      value: _vm.formDataToBeWatched.presentation_du_management,
      callback: function callback($$v) {
        _vm.$set(_vm.formDataToBeWatched, "presentation_du_management", $$v);
      },
      expression: "formDataToBeWatched.presentation_du_management"
    }
  })], 1)])]) : _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "relook-header",
    on: {
      click: function click($event) {
        _vm.seen2 = !_vm.seen2;
      }
    }
  }, [_c("h6", {
    "class": "subdiv" + this.tb_name,
    attrs: {
      id: "bref-rappel-des-relations-du-client-avec-la-afg-banque-ci"
    }
  }, [_vm._v("\n                                Présentation du Management\n                                "), _c("chevron-down-icon", {
    staticClass: "custom-class",
    staticStyle: {
      "float": "right",
      cursor: "pointer"
    },
    attrs: {
      size: "21"
    }
  })], 1)])]), _vm._v(" "), _vm.seen3 ? _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "relook-header",
    on: {
      click: function click($event) {
        _vm.seen3 = !_vm.seen3;
      }
    }
  }, [_c("h6", {
    "class": "subdiv" + this.tb_name,
    attrs: {
      id: "bref-rappel-des-relations-du-client-avec-la-afg-banque-ci"
    }
  }, [_vm._v("\n                                Analyse des Performances & chiffres clés\n                                "), _c("chevron-up-icon", {
    staticClass: "custom-class",
    staticStyle: {
      "float": "right",
      cursor: "pointer"
    },
    attrs: {
      size: "21"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "card-body remove-card-padding"
  }, [_c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table dossier-table table-bordered",
    attrs: {
      id: "equipe-dirigeante-div"
    }
  }, [_c("thead", [_c("tr", [_c("td", {
    staticClass: "fw-bold text-center"
  }, [_vm._v("Indicateur")]), _vm._v(" "), _c("td", {
    staticClass: "fw-bold text-center"
  }, [_vm._v("Type de champs ")]), _vm._v(" "), _c("td", {
    staticClass: "fw-bold text-center"
  }, [_c("input-group", {
    staticStyle: {
      "min-width": "50px"
    },
    scopedSlots: _vm._u([{
      key: "input",
      fn: function fn() {
        return [_c("input", {
          directives: [{
            name: "model",
            rawName: "v-model",
            value: _vm.formDataToBeWatched.indicateur_de_performance_year_n2,
            expression: "formDataToBeWatched.indicateur_de_performance_year_n2"
          }],
          staticClass: "form-control",
          "class": {
            "recall-data": _vm.recall_financial
          },
          attrs: {
            type: "text",
            maxlength: "4"
          },
          domProps: {
            value: _vm.formDataToBeWatched.indicateur_de_performance_year_n2
          },
          on: {
            input: function input($event) {
              if ($event.target.composing) return;
              _vm.$set(_vm.formDataToBeWatched, "indicateur_de_performance_year_n2", $event.target.value);
            }
          }
        })];
      },
      proxy: true
    }, {
      key: "right",
      fn: function fn() {
        return [_vm._v("\n                                                            " + _vm._s("N- 2") + "\n                                                        ")];
      },
      proxy: true
    }], null, false, 1588364609)
  })], 1), _vm._v(" "), _c("td", {
    staticClass: "fw-bold text-center"
  }, [_c("input-group", {
    staticStyle: {
      "min-width": "50px"
    },
    scopedSlots: _vm._u([{
      key: "input",
      fn: function fn() {
        return [_c("input", {
          directives: [{
            name: "model",
            rawName: "v-model",
            value: _vm.formDataToBeWatched.indicateur_de_performance_year_n1,
            expression: "formDataToBeWatched.indicateur_de_performance_year_n1"
          }],
          staticClass: "form-control",
          "class": {
            "recall-data": _vm.recall_financial
          },
          attrs: {
            type: "text",
            maxlength: "4"
          },
          domProps: {
            value: _vm.formDataToBeWatched.indicateur_de_performance_year_n1
          },
          on: {
            input: function input($event) {
              if ($event.target.composing) return;
              _vm.$set(_vm.formDataToBeWatched, "indicateur_de_performance_year_n1", $event.target.value);
            }
          }
        })];
      },
      proxy: true
    }, {
      key: "right",
      fn: function fn() {
        return [_vm._v("\n                                                            " + _vm._s("N - 1") + "\n                                                        ")];
      },
      proxy: true
    }], null, false, 1771274210)
  })], 1), _vm._v(" "), _c("td", {
    staticClass: "fw-bold text-center"
  }, [_c("input-group", {
    staticStyle: {
      "min-width": "50px"
    },
    scopedSlots: _vm._u([{
      key: "input",
      fn: function fn() {
        return [_c("input", {
          directives: [{
            name: "model",
            rawName: "v-model",
            value: _vm.formDataToBeWatched.indicateur_de_performance_year_n,
            expression: "formDataToBeWatched.indicateur_de_performance_year_n"
          }],
          staticClass: "form-control",
          "class": {
            "recall-data": _vm.recall_financial
          },
          attrs: {
            type: "text",
            maxlength: "4"
          },
          domProps: {
            value: _vm.formDataToBeWatched.indicateur_de_performance_year_n
          },
          on: {
            input: function input($event) {
              if ($event.target.composing) return;
              _vm.$set(_vm.formDataToBeWatched, "indicateur_de_performance_year_n", $event.target.value);
            }
          }
        })];
      },
      proxy: true
    }, {
      key: "right",
      fn: function fn() {
        return [_vm._v("\n                                                            " + _vm._s("N") + "\n                                                        ")];
      },
      proxy: true
    }], null, false, 3042359966)
  })], 1), _vm._v(" "), _c("td", [_c("button", {
    staticStyle: {
      "background-color": "#2c3e50",
      color: "#ffffff",
      "border-radius": "15%",
      border: "none",
      "font-size": "16px"
    },
    attrs: {
      type: "button",
      title: "Ajouter un bien"
    },
    on: {
      click: function click($event) {
        return _vm.addMore("indicateur_de_performance");
      }
    }
  }, [_c("plus-icon", {
    staticClass: "custom-class",
    attrs: {
      size: "21"
    }
  })], 1)])])]), _vm._v(" "), _c("tbody", _vm._l(_vm.indicateur_de_performance, function (indicateur, index) {
    return _c("tr", {
      key: index,
      staticClass: "mb-2"
    }, [_c("td", {
      staticClass: "td dossier-cell"
    }, [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: indicateur.name,
        expression: "indicateur.name"
      }],
      staticClass: "form-control",
      "class": {
        "recall-data": indicateur === null || indicateur === void 0 ? void 0 : indicateur.recall
      },
      attrs: {
        type: "text",
        disabled: !(indicateur !== null && indicateur !== void 0 && indicateur.isEditable)
      },
      domProps: {
        value: indicateur.name
      },
      on: {
        change: function change($event) {
          return _vm.handleInput($event, "indicateur_de_performance", index, "name");
        },
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(indicateur, "name", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("td", {
      staticClass: "align-middle text-center"
    }, [indicateur !== null && indicateur !== void 0 && indicateur.isEditable ? _c("select", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: indicateur.isFloat,
        expression: "indicateur.isFloat"
      }],
      staticClass: "form-select",
      on: {
        change: function change($event) {
          var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
            return o.selected;
          }).map(function (o) {
            var val = "_value" in o ? o._value : o.value;
            return val;
          });
          _vm.$set(indicateur, "isFloat", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
        }
      }
    }, [_c("option", {
      domProps: {
        value: false
      }
    }, [_vm._v("Montant")]), _vm._v(" "), _c("option", {
      domProps: {
        value: true
      }
    }, [_vm._v("Pourcentage")])]) : _c("strong", [_vm._v(_vm._s(indicateur.isFloat ? "Pourcentage" : "Montant"))])]), _vm._v(" "), _c("td", {
      staticClass: "td dossier-cell"
    }, [_c("currency-input2", {
      "class": {
        "recall-data": indicateur === null || indicateur === void 0 ? void 0 : indicateur.recall
      },
      staticStyle: {
        color: "#000"
      },
      attrs: {
        "float": indicateur.isFloat,
        value: indicateur.indicateur_en_n
      },
      on: {
        change: function change($event) {
          return _vm.handleInput($event, "indicateur_de_performance", index, "indicateur_en_n");
        }
      }
    })], 1), _vm._v(" "), _c("td", {
      staticClass: "td dossier-cell"
    }, [_c("currency-input2", {
      "class": {
        "recall-data": indicateur === null || indicateur === void 0 ? void 0 : indicateur.recall
      },
      staticStyle: {
        color: "#000"
      },
      attrs: {
        "float": indicateur.isFloat,
        value: indicateur.indicateur_en_n1
      },
      on: {
        change: function change($event) {
          return _vm.handleInput($event, "indicateur_de_performance", index, "indicateur_en_n1");
        }
      }
    })], 1), _vm._v(" "), _c("td", {
      staticClass: "td dossier-cell"
    }, [_c("currency-input2", {
      "class": {
        "recall-data": indicateur === null || indicateur === void 0 ? void 0 : indicateur.recall
      },
      staticStyle: {
        color: "#000"
      },
      attrs: {
        "float": indicateur.isFloat,
        value: indicateur.indicateur_en_n2
      },
      on: {
        change: function change($event) {
          return _vm.handleInput($event, "indicateur_de_performance", index, "indicateur_en_n2");
        }
      }
    })], 1), _vm._v(" "), indicateur !== null && indicateur !== void 0 && indicateur.isEditable ? _c("td", [_c("button", {
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
        title: "Supprimer"
      },
      on: {
        click: function click($event) {
          return _vm.remove(index, "indicateur_de_performance");
        }
      }
    }, [_c("trash-icon", {
      staticClass: "custom-class",
      attrs: {
        size: "21"
      }
    })], 1)]) : _vm._e()]);
  }), 0)])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-12 mb-4"
  }, [_vm._m(0), _vm._v(" "), _c("vue-editor", {
    attrs: {
      maximum: 1500,
      id: "commentaire_indicateur_performance1"
    },
    on: {
      "update-value": function updateValue($event) {
        _vm.formDataToBeWatched[$event[0]] = $event[1];
      }
    },
    model: {
      value: _vm.formDataToBeWatched.commentaire_indicateur_performance1,
      callback: function callback($$v) {
        _vm.$set(_vm.formDataToBeWatched, "commentaire_indicateur_performance1", $$v);
      },
      expression: "formDataToBeWatched.commentaire_indicateur_performance1"
    }
  })], 1)])]) : _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "relook-header",
    on: {
      click: function click($event) {
        _vm.seen3 = !_vm.seen3;
      }
    }
  }, [_c("h6", {
    "class": "subdiv" + this.tb_name,
    attrs: {
      id: "bref-rappel-des-relations-du-client-avec-la-afg-banque-ci"
    }
  }, [_vm._v("\n                                Analyse des Performances & chiffres clés\n                                "), _c("chevron-down-icon", {
    staticClass: "custom-class",
    staticStyle: {
      "float": "right",
      cursor: "pointer"
    },
    attrs: {
      size: "21"
    }
  })], 1)])]), _vm._v(" "), _vm.seen4 ? _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "relook-header",
    on: {
      click: function click($event) {
        _vm.seen4 = !_vm.seen4;
      }
    }
  }, [_c("h6", {
    "class": "subdiv" + this.tb_name,
    attrs: {
      id: "bref-rappel-des-relations-du-client-avec-la-afg-banque-ci"
    }
  }, [_vm._v("\n                                La structure financière\n                                "), _c("chevron-up-icon", {
    staticClass: "custom-class",
    staticStyle: {
      "float": "right",
      cursor: "pointer"
    },
    attrs: {
      size: "21"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "card-body remove-card-padding"
  }, [_c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table dossier-table table-bordered",
    attrs: {
      id: "structure_financiere"
    }
  }, [_c("thead", [_c("tr", [_c("td", {
    staticClass: "fw-bold text-center"
  }, [_vm._v("Indicateur")]), _vm._v(" "), _c("td", {
    staticClass: "fw-bold text-center"
  }, [_vm._v("Type de champs ")]), _vm._v(" "), _c("td", {
    staticClass: "fw-bold text-center"
  }, [_c("input-group", {
    staticStyle: {
      "min-width": "50px"
    },
    scopedSlots: _vm._u([{
      key: "input",
      fn: function fn() {
        return [_c("input", {
          directives: [{
            name: "model",
            rawName: "v-model",
            value: _vm.formDataToBeWatched.structure_financiere_year_n2,
            expression: "formDataToBeWatched.structure_financiere_year_n2"
          }],
          staticClass: "form-control",
          "class": {
            "recall-data": _vm.recall_financial
          },
          attrs: {
            type: "text",
            maxlength: "4"
          },
          domProps: {
            value: _vm.formDataToBeWatched.structure_financiere_year_n2
          },
          on: {
            input: function input($event) {
              if ($event.target.composing) return;
              _vm.$set(_vm.formDataToBeWatched, "structure_financiere_year_n2", $event.target.value);
            }
          }
        })];
      },
      proxy: true
    }, {
      key: "right",
      fn: function fn() {
        return [_vm._v("\n                                                            " + _vm._s("N - 2 ") + "\n                                                        ")];
      },
      proxy: true
    }], null, false, 1910214913)
  })], 1), _vm._v(" "), _c("td", {
    staticClass: "fw-bold text-center"
  }, [_c("input-group", {
    staticStyle: {
      "min-width": "50px"
    },
    scopedSlots: _vm._u([{
      key: "input",
      fn: function fn() {
        return [_c("input", {
          directives: [{
            name: "model",
            rawName: "v-model",
            value: _vm.formDataToBeWatched.structure_financiere_year_n1,
            expression: "formDataToBeWatched.structure_financiere_year_n1"
          }],
          staticClass: "form-control",
          "class": {
            "recall-data": _vm.recall_financial
          },
          attrs: {
            type: "text",
            maxlength: "4"
          },
          domProps: {
            value: _vm.formDataToBeWatched.structure_financiere_year_n1
          },
          on: {
            input: function input($event) {
              if ($event.target.composing) return;
              _vm.$set(_vm.formDataToBeWatched, "structure_financiere_year_n1", $event.target.value);
            }
          }
        })];
      },
      proxy: true
    }, {
      key: "right",
      fn: function fn() {
        return [_vm._v("\n                                                            " + _vm._s("N - 1") + "\n                                                        ")];
      },
      proxy: true
    }], null, false, 3412021570)
  })], 1), _vm._v(" "), _c("td", {
    staticClass: "fw-bold text-center"
  }, [_c("input-group", {
    staticStyle: {
      "min-width": "50px"
    },
    scopedSlots: _vm._u([{
      key: "input",
      fn: function fn() {
        return [_c("input", {
          directives: [{
            name: "model",
            rawName: "v-model",
            value: _vm.formDataToBeWatched.structure_financiere_year_n,
            expression: "formDataToBeWatched.structure_financiere_year_n"
          }],
          staticClass: "form-control",
          "class": {
            "recall-data": _vm.recall_financial
          },
          attrs: {
            type: "text",
            maxlength: "4"
          },
          domProps: {
            value: _vm.formDataToBeWatched.structure_financiere_year_n
          },
          on: {
            input: function input($event) {
              if ($event.target.composing) return;
              _vm.$set(_vm.formDataToBeWatched, "structure_financiere_year_n", $event.target.value);
            }
          }
        })];
      },
      proxy: true
    }, {
      key: "right",
      fn: function fn() {
        return [_vm._v("\n                                                            " + _vm._s("N") + "\n                                                        ")];
      },
      proxy: true
    }], null, false, 3682363390)
  })], 1), _vm._v(" "), _c("td", [_c("button", {
    staticStyle: {
      "background-color": "#2c3e50",
      color: "#ffffff",
      "border-radius": "15%",
      border: "none",
      "font-size": "16px"
    },
    attrs: {
      type: "button",
      title: "Ajouter un bien"
    },
    on: {
      click: function click($event) {
        return _vm.addMore("structure_financiere");
      }
    }
  }, [_c("plus-icon", {
    staticClass: "custom-class",
    attrs: {
      size: "21"
    }
  })], 1)])])]), _vm._v(" "), _c("tbody", _vm._l(_vm.structure_financiere, function (indicateur, index) {
    return _c("tr", {
      key: index,
      staticClass: "mb-2"
    }, [_c("td", {
      staticClass: "td dossier-cell"
    }, [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: indicateur.name,
        expression: "indicateur.name"
      }],
      staticClass: "form-control",
      "class": {
        "recall-data": indicateur === null || indicateur === void 0 ? void 0 : indicateur.recall
      },
      attrs: {
        type: "text",
        disabled: !(indicateur !== null && indicateur !== void 0 && indicateur.isEditable)
      },
      domProps: {
        value: indicateur.name
      },
      on: {
        change: function change($event) {
          return _vm.handleInput($event, "structure_financiere", index, "name");
        },
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(indicateur, "name", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("td", {
      staticClass: "align-middle text-center"
    }, [indicateur !== null && indicateur !== void 0 && indicateur.isEditable ? _c("select", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: indicateur.isFloat,
        expression: "indicateur.isFloat"
      }],
      staticClass: "form-select",
      on: {
        change: function change($event) {
          var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
            return o.selected;
          }).map(function (o) {
            var val = "_value" in o ? o._value : o.value;
            return val;
          });
          _vm.$set(indicateur, "isFloat", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
        }
      }
    }, [_c("option", {
      domProps: {
        value: false
      }
    }, [_vm._v("Montant")]), _vm._v(" "), _c("option", {
      domProps: {
        value: true
      }
    }, [_vm._v("Pourcentage")])]) : _c("strong", [_vm._v(_vm._s(indicateur.isFloat ? "Pourcentage" : "Montant"))])]), _vm._v(" "), _c("td", {
      staticClass: "td dossier-cell"
    }, [_c("currency-input2", {
      "class": {
        "recall-data": indicateur === null || indicateur === void 0 ? void 0 : indicateur.recall
      },
      staticStyle: {
        color: "#000"
      },
      attrs: {
        "float": indicateur.isFloat,
        value: indicateur.indicateur_en_n
      },
      on: {
        change: function change($event) {
          return _vm.handleInput($event, "structure_financiere", index, "indicateur_en_n");
        }
      }
    })], 1), _vm._v(" "), _c("td", {
      staticClass: "td dossier-cell"
    }, [_c("currency-input2", {
      "class": {
        "recall-data": indicateur === null || indicateur === void 0 ? void 0 : indicateur.recall
      },
      staticStyle: {
        color: "#000"
      },
      attrs: {
        "float": indicateur.isFloat,
        value: indicateur.indicateur_en_n1
      },
      on: {
        change: function change($event) {
          return _vm.handleInput($event, "structure_financiere", index, "indicateur_en_n1");
        }
      }
    })], 1), _vm._v(" "), _c("td", {
      staticClass: "td dossier-cell"
    }, [_c("currency-input2", {
      "class": {
        "recall-data": indicateur === null || indicateur === void 0 ? void 0 : indicateur.recall
      },
      staticStyle: {
        color: "#000"
      },
      attrs: {
        "float": indicateur.isFloat,
        value: indicateur.indicateur_en_n2
      },
      on: {
        change: function change($event) {
          return _vm.handleInput($event, "structure_financiere", index, "indicateur_en_n2");
        }
      }
    })], 1), _vm._v(" "), indicateur !== null && indicateur !== void 0 && indicateur.isEditable ? _c("td", [_c("button", {
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
        title: "Supprimer"
      },
      on: {
        click: function click($event) {
          return _vm.remove(index, "structure_financiere");
        }
      }
    }, [_c("trash-icon", {
      staticClass: "custom-class",
      attrs: {
        size: "21"
      }
    })], 1)]) : _vm._e()]);
  }), 0)])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-12 mb-4"
  }, [_vm._m(1), _vm._v(" "), _c("vue-editor", {
    attrs: {
      maximum: 1500,
      id: "commentaire_indicateur_performance2"
    },
    on: {
      "update-value": function updateValue($event) {
        _vm.formDataToBeWatched[$event[0]] = $event[1];
      }
    },
    model: {
      value: _vm.formDataToBeWatched.commentaire_indicateur_performance2,
      callback: function callback($$v) {
        _vm.$set(_vm.formDataToBeWatched, "commentaire_indicateur_performance2", $$v);
      },
      expression: "formDataToBeWatched.commentaire_indicateur_performance2"
    }
  })], 1)])]) : _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "relook-header",
    on: {
      click: function click($event) {
        _vm.seen4 = !_vm.seen4;
      }
    }
  }, [_c("h6", {
    "class": "subdiv" + this.tb_name,
    attrs: {
      id: "bref-rappel-des-relations-du-client-avec-la-afg-banque-ci"
    }
  }, [_vm._v("\n                                La structure financière\n                                "), _c("chevron-down-icon", {
    staticClass: "custom-class",
    staticStyle: {
      "float": "right",
      cursor: "pointer"
    },
    attrs: {
      size: "21"
    }
  })], 1)])]), _vm._v(" "), _vm.seen5 ? _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "relook-header",
    on: {
      click: function click($event) {
        _vm.seen5 = !_vm.seen5;
      }
    }
  }, [_c("h6", {
    "class": " subdiv" + this.tb_name,
    attrs: {
      id: "compte-d'exploitation-prévisionnel"
    }
  }, [_vm._v("\n                                Analyse des projections financières (Pour les financements d'investissements)\n                                "), _c("i", {
    staticClass: "icofont icofont-rounded-up",
    staticStyle: {
      "float": "right",
      cursor: "pointer"
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "col-md-12 mt-0 mb-4"
  }, [_c("vue-editor", {
    attrs: {
      id: "commentaire_analyse_projections_financiere"
    },
    on: {
      "update-value": function updateValue($event) {
        _vm.formDataToBeWatched[$event[0]] = $event[1];
      }
    },
    model: {
      value: _vm.formDataToBeWatched.commentaire_commentaire_analyse_projections_financiere,
      callback: function callback($$v) {
        _vm.$set(_vm.formDataToBeWatched, "commentaire_commentaire_analyse_projections_financiere", $$v);
      },
      expression: "formDataToBeWatched.commentaire_commentaire_analyse_projections_financiere"
    }
  })], 1)])]) : _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "relook-header",
    on: {
      click: function click($event) {
        _vm.seen5 = !_vm.seen5;
      }
    }
  }, [_c("h6", {
    "class": " subdiv" + this.tb_name,
    attrs: {
      id: "compte-d'exploitation-prévisionnel"
    }
  }, [_vm._v("\n                                Analyse des projections financières (Pour les financements d'investissements) "), _c("i", {
    staticClass: "icofont icofont-rounded-down",
    staticStyle: {
      "float": "right",
      cursor: "pointer"
    }
  })])])]), _vm._v(" "), _vm.seen6 ? _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "relook-header",
    on: {
      click: function click($event) {
        _vm.seen6 = !_vm.seen6;
      }
    }
  }, [_c("h6", {
    "class": " subdiv" + this.tb_name,
    attrs: {
      id: "compte-d'exploitation-prévisionnel"
    }
  }, [_vm._v("\n                                Analyse des Chiffres prévisionnels ( le cas échéant)\n                                "), _c("i", {
    staticClass: "icofont icofont-rounded-up",
    staticStyle: {
      "float": "right",
      cursor: "pointer"
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "col-md-12 mt-0 mb-4"
  }, [_c("vue-editor", {
    attrs: {
      id: "commentaire_commentaire_analyse_projections_financiere"
    },
    on: {
      "update-value": function updateValue($event) {
        _vm.formDataToBeWatched[$event[0]] = $event[1];
      }
    },
    model: {
      value: _vm.formDataToBeWatched.analyse_chiffre_previsionnels,
      callback: function callback($$v) {
        _vm.$set(_vm.formDataToBeWatched, "analyse_chiffre_previsionnels", $$v);
      },
      expression: "formDataToBeWatched.analyse_chiffre_previsionnels"
    }
  })], 1)])]) : _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "relook-header",
    on: {
      click: function click($event) {
        _vm.seen6 = !_vm.seen6;
      }
    }
  }, [_c("h6", {
    "class": " subdiv" + this.tb_name,
    attrs: {
      id: "compte-d'exploitation-prévisionnel"
    }
  }, [_vm._v("\n                                Analyse des Chiffres prévisionnels ( le cas échéant) "), _c("i", {
    staticClass: "icofont icofont-rounded-down",
    staticStyle: {
      "float": "right",
      cursor: "pointer"
    }
  })])])]), _vm._v(" "), _c("div", {
    staticClass: "mb-5"
  }), _vm._v(" "), _c("button", {
    staticClass: "btn shadow-md text-white position-absolute",
    staticStyle: {
      cursor: "pointer",
      right: "32px",
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
    staticClass: "card-header hdc pb-0"
  }, [_c("h3", {
    staticClass: "head",
    attrs: {
      id: "f1-head"
    }
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col"
  }, [_vm._v("\n                            " + _vm._s(_vm.tb_display_name) + " : Diagnostic économique & financier du dossier\n                        ")]), _vm._v(" "), _c("div", {
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
  }, [_c("span", [_vm._v("\n                                            " + _vm._s(_vm.formDataToBeWatched.notes.length) + "\n                                        ")])])])]) : _vm._e(), _vm._v(" "), _c("airplay-icon", {
    staticClass: "custom-class mt-1",
    staticStyle: {
      cursor: "pointer",
      margin: "0 5px"
    },
    attrs: {
      size: "0.7x"
    },
    on: {
      click: _vm.openKetri
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
  return _c("label", [_c("b", [_vm._v("Commentaire")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", [_c("b", [_vm._v("Commentaire")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/contre_etude_corporate/NS-AC4.vue?vue&type=style&index=0&id=14a3911e&lang=css&scoped=true":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/contre_etude_corporate/NS-AC4.vue?vue&type=style&index=0&id=14a3911e&lang=css&scoped=true ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\ninput[data-v-14a3911e] {\n    /*border: 1px solid red;*/\n}\n*[data-v-14a3911e] {\n    font-family: \"Google sans\";\n}\nlabel[data-v-14a3911e] {\n    height: 10px;\n    font-size: 13px;\n}\ntd[data-v-14a3911e] {\n    padding: 5px;\n    font-size: 13px;\n}\ninput[data-v-14a3911e],\n  select[data-v-14a3911e] {\n    height: 35px;\n    border-color: #34495e;\n    color: #57606f;\n    font-size: 13px;\n    font-weight: bold;\n}\n.card-width-height[data-v-14a3911e] {\n    width: 100%;\n    height: 100%;\n}\n.head[data-v-14a3911e] {\n    color: #f1f2f6;\n    font-size: 22px;\n}\n.hdc[data-v-14a3911e] {\n    background-color: #57606f;\n}\n.relook-header[data-v-14a3911e] {\n    color: #000;\n    background-color: #f4f3f3;\n    padding: 5px;\n    border-bottom: 1px solid #b6b8bb;\n}\n.badge-sm[data-v-14a3911e] {\n    display: inline-block;\n    width: 15px;\n    height: 15px;\n    background: rgba(255, 0, 0, 0.882);\n    color: white;\n    font-size: 12px;\n    font-weight: 500;\n    border-radius: 100%;\n    position: absolute;\n    top: -20%;\n    left: 55%;\n    text-align: center;\n}\n.imageM21i[data-v-14a3911e] {\n    background: url(\"/images/capture_cofina/instruction_evaluation_risque.png\")\n        no-repeat;\n    background-position: center;\n    background-size: contain;\n    width: 100%;\n    height: 100%;\n}\n.imageM21exi[data-v-14a3911e] {\n    background: url(\"/images/capture_cofina/exemple_evaluation_risque.png\")\n        no-repeat;\n    background-position: center;\n    background-size: contain;\n    width: 1000px;\n    height: 200px;\n}\n.form-check-input[data-v-14a3911e]:disabled {\n    opacity: 1;\n}\n.image1[data-v-14a3911e] {\n      background: url(\"/images/capture_afg/contre_etude_diagnostic.png\")\n          no-repeat;\n      background-position: center;\n      background-size: contain;\n  \n      width: 500px;\n      height: 300px;\n}\n.dossier-table td button[data-v-14a3911e] {\n    border: none !important;\n}\n\n/* Supprimer la bordure de la cellule contenant le bouton */\n.dossier-table td[data-v-14a3911e]:has(button) {\n    border: none !important;\n}\n\n\n\n\n  ", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/contre_etude_corporate/NS-AC4.vue?vue&type=style&index=0&id=14a3911e&lang=css&scoped=true":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/contre_etude_corporate/NS-AC4.vue?vue&type=style&index=0&id=14a3911e&lang=css&scoped=true ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NS_AC4_vue_vue_type_style_index_0_id_14a3911e_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NS-AC4.vue?vue&type=style&index=0&id=14a3911e&lang=css&scoped=true */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/contre_etude_corporate/NS-AC4.vue?vue&type=style&index=0&id=14a3911e&lang=css&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NS_AC4_vue_vue_type_style_index_0_id_14a3911e_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NS_AC4_vue_vue_type_style_index_0_id_14a3911e_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/forms/afg/contre_etude_corporate/NS-AC4.vue":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/forms/afg/contre_etude_corporate/NS-AC4.vue ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _NS_AC4_vue_vue_type_template_id_14a3911e_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NS-AC4.vue?vue&type=template&id=14a3911e&scoped=true */ "./resources/js/components/forms/afg/contre_etude_corporate/NS-AC4.vue?vue&type=template&id=14a3911e&scoped=true");
/* harmony import */ var _NS_AC4_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NS-AC4.vue?vue&type=script&lang=js */ "./resources/js/components/forms/afg/contre_etude_corporate/NS-AC4.vue?vue&type=script&lang=js");
/* harmony import */ var _NS_AC4_vue_vue_type_style_index_0_id_14a3911e_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NS-AC4.vue?vue&type=style&index=0&id=14a3911e&lang=css&scoped=true */ "./resources/js/components/forms/afg/contre_etude_corporate/NS-AC4.vue?vue&type=style&index=0&id=14a3911e&lang=css&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _NS_AC4_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _NS_AC4_vue_vue_type_template_id_14a3911e_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _NS_AC4_vue_vue_type_template_id_14a3911e_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "14a3911e",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/forms/afg/contre_etude_corporate/NS-AC4.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/forms/afg/contre_etude_corporate/NS-AC4.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/forms/afg/contre_etude_corporate/NS-AC4.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NS_AC4_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NS-AC4.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/contre_etude_corporate/NS-AC4.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NS_AC4_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/forms/afg/contre_etude_corporate/NS-AC4.vue?vue&type=style&index=0&id=14a3911e&lang=css&scoped=true":
/*!*************************************************************************************************************************************!*\
  !*** ./resources/js/components/forms/afg/contre_etude_corporate/NS-AC4.vue?vue&type=style&index=0&id=14a3911e&lang=css&scoped=true ***!
  \*************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NS_AC4_vue_vue_type_style_index_0_id_14a3911e_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NS-AC4.vue?vue&type=style&index=0&id=14a3911e&lang=css&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/contre_etude_corporate/NS-AC4.vue?vue&type=style&index=0&id=14a3911e&lang=css&scoped=true");


/***/ }),

/***/ "./resources/js/components/forms/afg/contre_etude_corporate/NS-AC4.vue?vue&type=template&id=14a3911e&scoped=true":
/*!***********************************************************************************************************************!*\
  !*** ./resources/js/components/forms/afg/contre_etude_corporate/NS-AC4.vue?vue&type=template&id=14a3911e&scoped=true ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NS_AC4_vue_vue_type_template_id_14a3911e_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NS_AC4_vue_vue_type_template_id_14a3911e_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NS_AC4_vue_vue_type_template_id_14a3911e_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NS-AC4.vue?vue&type=template&id=14a3911e&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/contre_etude_corporate/NS-AC4.vue?vue&type=template&id=14a3911e&scoped=true");


/***/ })

}]);