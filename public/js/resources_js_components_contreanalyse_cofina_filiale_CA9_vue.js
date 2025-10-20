"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_contreanalyse_cofina_filiale_CA9_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/cofina/filiale/CA9.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/cofina/filiale/CA9.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");
/* harmony import */ var _shared_ContextMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/ContextMenu */ "./resources/js/components/shared/ContextMenu.vue");
/* harmony import */ var _shared_ContextMenuItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/ContextMenuItem */ "./resources/js/components/shared/ContextMenuItem.vue");
/* harmony import */ var _vueform_multiselect_dist_multiselect_vue2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vueform/multiselect/dist/multiselect.vue2 */ "./node_modules/@vueform/multiselect/dist/multiselect.vue2.js");
/* harmony import */ var _services_ebapis_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/ebapis.service */ "./resources/js/services/ebapis.service.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/auth.service */ "./resources/js/services/auth.service.js");
/* harmony import */ var _offview_microfinance_cofina_memo_fiche_screening_es_FICHES1_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../offview/microfinance/cofina/memo/fiche_screening_es/FICHES1.vue */ "./resources/js/components/offview/microfinance/cofina/memo/fiche_screening_es/FICHES1.vue");
/* harmony import */ var _offview_microfinance_cofina_memo_fiche_cotation_es_COTES1_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../offview/microfinance/cofina/memo/fiche_cotation_es/COTES1.vue */ "./resources/js/components/offview/microfinance/cofina/memo/fiche_cotation_es/COTES1.vue");
/* harmony import */ var _utils_highlighter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../utils/highlighter */ "./resources/js/components/utils/highlighter.js");









window.$ = window.jQuery = __webpack_require__(/*! jquery/dist/jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "garanties",
  display: "Garanties",
  components: {
    PlusIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_8__.PlusIcon,
    TrashIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_8__.TrashIcon,
    MoreVerticalIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_8__.MoreVerticalIcon,
    ChevronUpIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_8__.ChevronUpIcon,
    ChevronDownIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_8__.ChevronDownIcon,
    ContextMenu: _shared_ContextMenu__WEBPACK_IMPORTED_MODULE_0__["default"],
    ContextMenuItem: _shared_ContextMenuItem__WEBPACK_IMPORTED_MODULE_1__["default"],
    Multiselect: _vueform_multiselect_dist_multiselect_vue2__WEBPACK_IMPORTED_MODULE_2__["default"],
    AirplayIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_8__.AirplayIcon,
    FICHES1: _offview_microfinance_cofina_memo_fiche_screening_es_FICHES1_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
    COTES1: _offview_microfinance_cofina_memo_fiche_cotation_es_COTES1_vue__WEBPACK_IMPORTED_MODULE_6__["default"]
  },
  props: {
    meta_data: Object,
    tb_name: String,
    tb_display_name: String
  },
  created: function created() {
    var _this = this;
    EventBus.$on('highlight-avis-fiche-screeming', function () {
      // this.highlightElementName = "avis-screeming";
      // this.showHighlight = true;

      (0,_utils_highlighter__WEBPACK_IMPORTED_MODULE_7__.highlightWithNote)(_this.$refs['avis-screeming'], _this.hightLightOptions);
    });
    EventBus.$on('highlight-avis-note-categorisation', function () {
      // this.highlightElementName = "avis-note";
      // this.showHighlight = true;
      (0,_utils_highlighter__WEBPACK_IMPORTED_MODULE_7__.highlightWithNote)(_this.$refs['avis-note'], _this.hightLightOptions);
    });
  },
  mounted: function mounted() {
    this.tableClosedOrOpened();
    this.loadRetrieved();
    this.loadTbAttrs();
  },
  computed: {
    highLightAvisScreeming: function highLightAvisScreeming() {
      return Boolean(this.highlightElementName == 'avis-screeming' && !this.formDataToBeWatched.type_avis_screeming && this.showHighlight);
    },
    highLightAvisCategorisation: function highLightAvisCategorisation() {
      return Boolean(this.highlightElementName == 'avis-note' && !this.formDataToBeWatched.type_avis_es && this.showHighlight);
    }
  },
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
        notes: [],
        avis_rse: "",
        type_avis_screeming: "",
        type_avis_es: ""
      },
      showHighlight: false,
      hightLightOptions: {
        message: "Vous devez donner votre avis avant de publier",
        duration: 10000,
        position: "top",
        type: "error",
        onClick: function onClick() {
          return vm.showHighlight = false;
        }
      },
      highlightElementName: "avis-screeming"
    };
  },
  methods: {
    remove: function remove(index) {
      this.pieces_jointes.splice(index, 1);
      this.handleInput();
    },
    isChecked: function isChecked(listName) {
      this[listName].push({
        label: "",
        value: false
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
    loadRetrieved: function loadRetrieved() {
      var _this$meta_data$dossi;
      var lentb = this.meta_data["dossier_credit"]["tbs_in_use"];
      var createdKey = this.tb_name;
      var createdKeyArr = createdKey.split("tb");
      createdKey = "cred_pub_tb_" + createdKeyArr[1];
      this.defaultRetract(false, (_this$meta_data$dossi = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi === void 0 ? void 0 : _this$meta_data$dossi.applied_templ_id);
      if (lentb.length > 0) {
        if (this.meta_data["dossier_credit"][createdKey] != undefined) {
          this.formDataToBeWatched = this.meta_data["dossier_credit"][createdKey];

          // Assurons-nous que type_avis_screeming est défini
          if (!this.formDataToBeWatched.type_avis_screeming) {
            this.formDataToBeWatched.type_avis_screeming = "";
          }
          if (!this.formDataToBeWatched.type_avis_es) {
            this.formDataToBeWatched.type_avis_es = "";
          }
        }
      }
    },
    convertNumber: function convertNumber(valeur) {
      return Number(String(valeur).replace(/\s+/g, ""));
    },
    // AJOUTER
    launchAutoSaver: function launchAutoSaver() {
      var _this2 = this;
      _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["default"].loadUserData().then(function (res) {
        _this2.send2Backend(res, 0, 0);
      })["catch"](function (err) {
        _this2.loadWithError(err);
      });
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
        id: "f46-head"
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
    },
    selectionnerAvis: function selectionnerAvis(avis, key) {
      // Enregistrer l'avis sélectionné
      if (avis === 'non_objection') {
        this.formDataToBeWatched[key] = 'non_objection';
      } else if (avis === 'objection') {
        this.formDataToBeWatched[key] = 'objection';
      }

      // Lancer l'autosave pour enregistrer l'avis
      this.launchAutoSaver();

      // Désactiver la surbrillance si elle est active
      if (this.showHighlight && (key === 'type_avis_screeming' && this.highlightElementName === 'avis-screeming' || key === 'type_avis_es' && this.highlightElementName === 'avis-note-categorisation')) {
        this.showHighlight = false;
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/microfinance/cofina/memo/fiche_cotation_es/COTES1.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/microfinance/cofina/memo/fiche_cotation_es/COTES1.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "",
  props: {
    dossier_credit: Object
  },
  data: function data() {
    var _this$dossier_credit;
    return {
      data_tb: (_this$dossier_credit = this.dossier_credit) === null || _this$dossier_credit === void 0 ? void 0 : _this$dossier_credit.cred_pub_tb_5001,
      list_esrisks: [{
        libelle: "E&S risk 100-150",
        type: "C Risques faibles"
      }, {
        libelle: "E&S risk 151-200",
        type: "B- Risques moyen"
      }, {
        libelle: "E&S risk 201-250",
        type: "B+ Risques moyen (Nécessitant vigilance)"
      }, {
        libelle: "E&S risk 251-300",
        type: "A Risques elevés"
      }]
    };
  },
  computed: {
    ddes_color: function ddes_color() {
      var _this$data_tb, _this$data_tb2, _this$data_tb3;
      var style = {
        "font-size": "1.2em",
        "text-transform": "uppercase"
      };
      if ((_this$data_tb = this.data_tb) !== null && _this$data_tb !== void 0 && (_this$data_tb = _this$data_tb.categorisation_finale) !== null && _this$data_tb !== void 0 && _this$data_tb.toLowerCase().includes('faible')) return _objectSpread({
        "background-color": "green",
        color: "white"
      }, style);
      if ((_this$data_tb2 = this.data_tb) !== null && _this$data_tb2 !== void 0 && (_this$data_tb2 = _this$data_tb2.categorisation_finale) !== null && _this$data_tb2 !== void 0 && _this$data_tb2.toLowerCase().includes('moyen')) return _objectSpread({
        "background-color": "#e27c00",
        color: "white"
      }, style);
      if ((_this$data_tb3 = this.data_tb) !== null && _this$data_tb3 !== void 0 && (_this$data_tb3 = _this$data_tb3.categorisation_finale) !== null && _this$data_tb3 !== void 0 && _this$data_tb3.toLowerCase().includes('elevé')) return _objectSpread({
        "background-color": "#d70000",
        color: "white"
      }, style);
      return style;
    },
    risque_transaction_color: function risque_transaction_color() {
      var _this$data_tb4;
      var style = {
        "text-transform": "uppercase"
      };
      if ((_this$data_tb4 = this.data_tb) !== null && _this$data_tb4 !== void 0 && _this$data_tb4.niveau_risque) {
        var _this$data_tb5, _this$data_tb6, _this$data_tb7;
        if (((_this$data_tb5 = this.data_tb) === null || _this$data_tb5 === void 0 ? void 0 : _this$data_tb5.niveau_risque) == "RISQUE FAIBLE") return _objectSpread({
          "background-color": "#e9ffe4",
          color: "green"
        }, style);
        if (((_this$data_tb6 = this.data_tb) === null || _this$data_tb6 === void 0 ? void 0 : _this$data_tb6.niveau_risque) == "RISQUE MOYEN") return _objectSpread({
          "background-color": "#fffcea",
          color: "#e27c00"
        }, style);
        if (((_this$data_tb7 = this.data_tb) === null || _this$data_tb7 === void 0 ? void 0 : _this$data_tb7.niveau_risque) == "RISQUE ELEVÉ") return _objectSpread({
          "background-color": "#fff0f0",
          color: "#d70000"
        }, style);
      }
      return style;
    },
    note_secteur_color: function note_secteur_color() {
      var _this$data_tb8, _this$data_tb9, _this$data_tb0;
      var style = {
        "text-transform": "uppercase"
      };
      if ((_this$data_tb8 = this.data_tb) !== null && _this$data_tb8 !== void 0 && (_this$data_tb8 = _this$data_tb8.note_secteur) !== null && _this$data_tb8 !== void 0 && _this$data_tb8.toLowerCase().includes('c')) return _objectSpread({
        "background-color": "#e9ffe4",
        color: "green"
      }, style);
      if ((_this$data_tb9 = this.data_tb) !== null && _this$data_tb9 !== void 0 && (_this$data_tb9 = _this$data_tb9.note_secteur) !== null && _this$data_tb9 !== void 0 && _this$data_tb9.toLowerCase().includes('b')) return _objectSpread({
        "background-color": "#fffcea",
        color: "#e27c00"
      }, style);
      if ((_this$data_tb0 = this.data_tb) !== null && _this$data_tb0 !== void 0 && (_this$data_tb0 = _this$data_tb0.note_secteur) !== null && _this$data_tb0 !== void 0 && _this$data_tb0.toLowerCase().includes('a')) return _objectSpread({
        "background-color": "#fff0f0",
        color: "#d70000"
      }, style);
      return style;
    }
  },
  methods: {
    get_note_libelle: function get_note_libelle(note) {
      var show_note = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var notes = {
        A: "RISQUE ELEVÉ",
        B: "RISQUE MOYEN",
        C: "RISQUE FAIBLE"
      };
      return show_note ? "".concat(notes[note], " (").concat(note, ")") : notes[note];
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/microfinance/cofina/memo/fiche_screening_es/FICHES1.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/microfinance/cofina/memo/fiche_screening_es/FICHES1.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************************************************************************/
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
        'content': 'Travail forcé  ou travail des enfants .'
      }, {
        'content': "Les activités ou les matériaux jugés illégaux en vertu des lois ou des règlements du pays hôte ou des conventions et accords internationaux, ou faisant l'objet d'une élimination progressive ou d'interdictions internationales, tels que :",
        'children': [{
          'content': "a) Substances appauvrissant la couche d'ozone, PCB (polychlorobiphényles) et autres produits pharmaceutiques, pesticides/herbicides ou produits chimiques spécifiques et dangereux ;"
        }, {
          'content': "b) Des espèces sauvages ou des produits réglementés par la Convention sur le commerce international des espèces de faune et de flore sauvages menacées d'extinction (CITES) ; ou"
        }, {
          'content': "c) Méthodes de pêche non durables (par exemple, la pêche à l'explosif et la pêche au filet dérivant en milieu marin à l'aide de filets de plus de 2,5 km de long)."
        }]
      }, {
        'content': "Le commerce transfrontalier de déchets et de produits résiduaires, à moins qu'il ne soit conforme à la Convention de Bâle et aux réglementations sous-jacentes."
      }, {
        'content': 'Destruction  de zones à haute valeur de conservation .'
      }, {
        'content': 'Exploitation forestière commerciale pour utilisation dans les forêts tropicales humides primaires.'
      }, {
        'content': "Matériaux radioactifs   et fibres d'amiante non liées."
      }, {
        'content': 'Pornographie et/ou prostitution.'
      }, {
        'content': 'Médias racistes et/ou anti-démocratiques.'
      }, {
        'content': "Dans le cas où l'un des produits suivants constitue une part substantielle du financement primaire d'un projet activités commerciales :",
        'children': [{
          'content': "a)  Boissons alcoolisées (à l'exception de la bière et du vin) ;"
        }, {
          'content': 'b)  Le tabac ;'
        }, {
          'content': 'c)  Armes et munitions ; ou'
        }, {
          'content': "d)  Jeux d'argent, casinos et entreprises assimilées."
        }]
      }, {
        'content': 'La production ou les activités qui empiètent sur les terres détenues ou revendiquées par les peuples autochtones, sans le consentement pleinement documenté de ces peuples.'
      }, {
        'content': 'Prospection, exploration, exploitation ou transformation du charbon.'
      }, {
        'content': 'Exploration ou production de pétrole.'
      }, {
        'content': 'Exploration et/ou production autonome de gaz fossile .'
      }, {
        'content': "Transport et infrastructures connexes principalement  utilisés pour le charbon destiné à la production d'électricité."
      }, {
        'content': 'Oléoducs de pétrole brut.'
      }, {
        'content': 'Raffineries de pétrole.'
      }, {
        'content': "Construction d'une nouvelle centrale électrique au charbon ou remise en état d'une centrale existante (y compris dual)."
      }, {
        'content': "Construction ou rénovation de toute centrale électrique existante fonctionnant uniquement au HFO ou au diesel, produisant de l'énergie pour le réseau public et entraînant une augmentation des émissions absolues de CO2 ."
      }, {
        'content': "Toute entreprise prévoyant une expansion du charbon captif utilisé pour la production d'électricité et/ou de chaleur."
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
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/cofina/filiale/CA9.vue?vue&type=template&id=29ee3e76&scoped=true":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/cofina/filiale/CA9.vue?vue&type=template&id=29ee3e76&scoped=true ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm$formDataToBeWatch, _vm$meta_data, _vm$meta_data2, _vm$formDataToBeWatch2;
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
      id: "f46-head"
    }
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col"
  }, [_vm._v("\n                            " + _vm._s(_vm.tb_display_name) + " : Avis sur la RSE\n                        ")]), _vm._v(" "), _c("div", {
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
    staticClass: "row p-0"
  }, [_c("div", {
    staticClass: "col-12"
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "col-md-12 mt-4"
  }, [_c("h5", {
    staticClass: "memo"
  }, [_vm._v("Fiche de screening E&S")]), _vm._v(" "), _c("FICHES1", {
    attrs: {
      dossier_credit: (_vm$meta_data = _vm.meta_data) === null || _vm$meta_data === void 0 ? void 0 : _vm$meta_data["dossier_credit"]
    }
  })], 1), _vm._v(" "), _c("div", {
    directives: [{
      name: "highlight",
      rawName: "v-highlight",
      value: _vm.highLightAvisScreeming ? _vm.hightLightOptions : null,
      expression: "highLightAvisScreeming ? hightLightOptions: null"
    }],
    ref: "avis-screeming",
    staticClass: "col-12"
  }, [_c("div", {
    staticClass: "mt-4 text-center fw-bold h5"
  }, [_vm._v("\n                                Veuillez donner votre avis sur la liste d'exclusion\n                            ")]), _vm._v(" "), _c("div", {
    staticClass: "d-flex justify-content-start gap-3 my-4"
  }, [_c("button", {
    "class": ["btn shadow-md col", _vm.formDataToBeWatched.type_avis_screeming === "non_objection" ? "btn-success" : "btn-outline-success"],
    staticStyle: {
      "min-width": "200px",
      height: "50px",
      "font-size": "large",
      "font-weight": "500",
      "border-radius": "6px"
    },
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.selectionnerAvis("non_objection", "type_avis_screeming");
      }
    }
  }, [_c("i", {
    staticClass: "icofont icofont-check-circled mr-2"
  }), _vm._v("\n                                    Avis de non objection\n                                    "), _vm.formDataToBeWatched.type_avis_screeming === "non_objection" ? _c("span", {
    staticClass: "ml-2"
  }, [_c("i", {
    staticClass: "icofont icofont-check"
  })]) : _vm._e()]), _vm._v(" "), _c("button", {
    "class": ["btn shadow-md col", _vm.formDataToBeWatched.type_avis_screeming === "objection" ? "btn-danger" : "btn-outline-danger"],
    staticStyle: {
      "min-width": "200px",
      height: "50px",
      "font-size": "large",
      "font-weight": "500",
      "border-radius": "6px"
    },
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.selectionnerAvis("objection", "type_avis_screeming");
      }
    }
  }, [_c("i", {
    staticClass: "icofont icofont-close-circled mr-2"
  }), _vm._v("\n                                    Avis d'objection\n                                    "), _vm.formDataToBeWatched.type_avis_screeming === "objection" ? _c("span", {
    staticClass: "ml-2"
  }, [_c("i", {
    staticClass: "icofont icofont-check"
  })]) : _vm._e()])])])])]), _vm._v(" "), _c("hr"), _vm._v(" "), _c("div", {
    staticClass: "col-12"
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "col-md-12"
  }, [_c("h5", {
    staticClass: "memo"
  }, [_vm._v("Fiche de catégorisation E&S")]), _vm._v(" "), _c("COTES1", {
    attrs: {
      dossier_credit: (_vm$meta_data2 = _vm.meta_data) === null || _vm$meta_data2 === void 0 ? void 0 : _vm$meta_data2["dossier_credit"]
    }
  })], 1), _vm._v(" "), _c("div", {
    directives: [{
      name: "highlight",
      rawName: "v-highlight",
      value: _vm.highLightAvisCategorisation ? _vm.hightLightOptions : null,
      expression: " highLightAvisCategorisation ? hightLightOptions : null"
    }],
    ref: "avis-note",
    staticClass: "col-12"
  }, [_c("div", {
    staticClass: "mt-4 text-center fw-bold h5"
  }, [_vm._v("\n                                Veuillez donner votre avis sur la note de catégorisation.\n                            ")]), _vm._v(" "), _c("div", {
    staticClass: "d-flex justify-content-start gap-3 my-4"
  }, [_c("button", {
    "class": ["btn shadow-md col", _vm.formDataToBeWatched.type_avis_es === "non_objection" ? "btn-success" : "btn-outline-success"],
    staticStyle: {
      "min-width": "200px",
      height: "50px",
      "font-size": "large",
      "font-weight": "500",
      "border-radius": "6px"
    },
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.selectionnerAvis("non_objection", "type_avis_es");
      }
    }
  }, [_c("i", {
    staticClass: "icofont icofont-check-circled mr-2"
  }), _vm._v("\n                                    Avis de non objection\n                                    "), _vm.formDataToBeWatched.type_avis_es === "non_objection" ? _c("span", {
    staticClass: "ml-2"
  }, [_c("i", {
    staticClass: "icofont icofont-check"
  })]) : _vm._e()]), _vm._v(" "), _c("button", {
    "class": ["btn shadow-md col", _vm.formDataToBeWatched.type_avis_es === "objection" ? "btn-danger" : "btn-outline-danger"],
    staticStyle: {
      "min-width": "200px",
      height: "50px",
      "font-size": "large",
      "font-weight": "500",
      "border-radius": "6px"
    },
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.selectionnerAvis("objection", "type_avis_es");
      }
    }
  }, [_c("i", {
    staticClass: "icofont icofont-close-circled mr-2"
  }), _vm._v("\n                                    Avis d'objection\n                                    "), _vm.formDataToBeWatched.type_avis_es === "objection" ? _c("span", {
    staticClass: "ml-2"
  }, [_c("i", {
    staticClass: "icofont icofont-check"
  })]) : _vm._e()])])])])]), _vm._v(" "), _c("div", {
    staticClass: "col-12 p-0 position-relative"
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "col-md-12 mt-4"
  }, [_vm._m(0), _vm._v(" "), _c("vue-editor", {
    attrs: {
      id: "avis"
    },
    on: {
      "update-value": function updateValue($event) {
        _vm.formDataToBeWatched[$event[0]] = $event[1];
      }
    },
    model: {
      value: _vm.formDataToBeWatched.avis_rse,
      callback: function callback($$v) {
        _vm.$set(_vm.formDataToBeWatched, "avis_rse", $$v);
      },
      expression: "formDataToBeWatched.avis_rse"
    }
  })], 1)])]), _vm._v(" "), _c("div", {
    staticClass: "col-12"
  }, [_c("div", {
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
      id: "f46-head"
    }
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col"
  }, [_vm._v("\n                            " + _vm._s(_vm.tb_display_name) + " : Avis sur la RSE\n                        ")]), _vm._v(" "), _c("div", {
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
      name: "avis_du_responsable_rse",
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
  return _c("label", [_c("b", {
    staticClass: "mb-2",
    staticStyle: {
      "font-size": "16px"
    }
  }, [_vm._v("Commentaire diligence RSE")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/microfinance/cofina/memo/fiche_cotation_es/COTES1.vue?vue&type=template&id=09e98e12&scoped=true":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/microfinance/cofina/memo/fiche_cotation_es/COTES1.vue?vue&type=template&id=09e98e12&scoped=true ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm$data_tb, _vm$data_tb2, _vm$data_tb3, _vm$data_tb4, _vm$data_tb5, _vm$data_tb6, _vm$data_tb7, _vm$data_tb8, _vm$data_tb9, _vm$data_tb0, _vm$data_tb1, _vm$data_tb10, _vm$data_tb11;
  var _vm = this,
    _c = _vm._self._c;
  return _vm.dossier_credit ? _c("div", [_vm.dossier_credit.tbs_in_use.includes("tb5001") ? _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12 mt-3"
  }, [_c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-bordered"
  }, [_vm._m(0), _vm._v(" "), _c("tbody", [_c("tr", [_c("td", [_vm._v("Secteur d'activité")]), _vm._v(" "), _c("td", [_vm._v(_vm._s((_vm$data_tb = _vm.data_tb) === null || _vm$data_tb === void 0 ? void 0 : _vm$data_tb.secteur_cofina))]), _vm._v(" "), _c("td", {
    staticClass: "text-center fw-bold text-nowrap align-middle",
    style: _vm.note_secteur_color,
    attrs: {
      rowspan: "2"
    }
  }, [_vm._v("\n                " + _vm._s(_vm.get_note_libelle((_vm$data_tb2 = _vm.data_tb) === null || _vm$data_tb2 === void 0 ? void 0 : _vm$data_tb2.note_secteur, true)) + "\n              ")])]), _vm._v(" "), _c("tr", [_c("td", [_vm._v("Sous Secteur d'activité")]), _vm._v(" "), _c("td", [_vm._v(_vm._s((_vm$data_tb3 = _vm.data_tb) === null || _vm$data_tb3 === void 0 ? void 0 : _vm$data_tb3.sous_secteur_cofina))])]), _vm._v(" "), _c("tr", [_c("td", [_vm._v("Taille du prêt")]), _vm._v(" "), _c("td", [_vm._v(_vm._s((_vm$data_tb4 = _vm.data_tb) === null || _vm$data_tb4 === void 0 || (_vm$data_tb4 = _vm$data_tb4.montant) === null || _vm$data_tb4 === void 0 ? void 0 : _vm$data_tb4.libelle))]), _vm._v(" "), _c("td", {
    staticClass: "text-center text-nowrap align-middle fw-semibold",
    style: _vm.risque_transaction_color,
    attrs: {
      rowspan: "2"
    }
  }, [_vm._v("\n                " + _vm._s((_vm$data_tb5 = _vm.data_tb) === null || _vm$data_tb5 === void 0 ? void 0 : _vm$data_tb5.niveau_risque) + " (" + _vm._s((_vm$data_tb6 = _vm.data_tb) === null || _vm$data_tb6 === void 0 ? void 0 : _vm$data_tb6.categorisation_risque) + ")\n              ")])]), _vm._v(" "), _c("tr", [_c("td", [_vm._v("Durée du prêt")]), _vm._v(" "), _c("td", [_vm._v(_vm._s((_vm$data_tb7 = _vm.data_tb) === null || _vm$data_tb7 === void 0 || (_vm$data_tb7 = _vm$data_tb7.duree) === null || _vm$data_tb7 === void 0 ? void 0 : _vm$data_tb7.libelle))])])])])]), _vm._v(" "), _c("div", {
    staticClass: "table-responsive mt-3"
  }, [_c("table", {
    staticClass: "table table-bordered"
  }, [_vm._m(1), _vm._v(" "), _c("tbody", [_c("tr", {
    staticClass: "d-flex"
  }, [_c("th", {
    staticClass: "bg-grey fw-normal col-7"
  }, [_vm._v("Catégorisation des risques par la SFI")]), _vm._v(" "), _c("td", {
    staticClass: "fw-bold align-middle col-5",
    style: "color: " + _vm.note_secteur_color.color
  }, [_vm._v(" " + _vm._s(_vm.get_note_libelle((_vm$data_tb8 = _vm.data_tb) === null || _vm$data_tb8 === void 0 ? void 0 : _vm$data_tb8.note_secteur, true)))])]), _vm._v(" "), _c("tr", {
    staticClass: "d-flex"
  }, [_c("th", {
    staticClass: "bg-grey fw-normal col-7"
  }, [_vm._v("Commentaires sur la catégorisation E&S")]), _vm._v(" "), _c("td", {
    staticClass: "fw-normal align-middle col-5"
  }, [_vm._v(" " + _vm._s((_vm$data_tb9 = _vm.data_tb) === null || _vm$data_tb9 === void 0 ? void 0 : _vm$data_tb9.commentaire_note_secteur))])])])])]), _vm._v(" "), _c("div", {
    staticClass: "table-responsive mt-3"
  }, [_c("table", {
    staticClass: "table table-bordered"
  }, [_vm._m(2), _vm._v(" "), _c("tbody", [_c("tr", {
    staticClass: "d-flex"
  }, [_c("th", {
    staticClass: "bg-grey fw-normal col-7"
  }, [_vm._v(" Catégorisation des risques de transaction")]), _vm._v(" "), _c("td", {
    staticClass: "fw-bold vertical-align-middle col-5",
    style: "color: " + _vm.risque_transaction_color.color
  }, [_vm._v(" " + _vm._s((_vm$data_tb0 = _vm.data_tb) === null || _vm$data_tb0 === void 0 ? void 0 : _vm$data_tb0.niveau_risque) + " (" + _vm._s((_vm$data_tb1 = _vm.data_tb) === null || _vm$data_tb1 === void 0 ? void 0 : _vm$data_tb1.categorisation_risque) + ")")])]), _vm._v(" "), _c("tr", {
    staticClass: "d-flex"
  }, [_c("th", {
    staticClass: "bg-grey fw-normal col-7"
  }, [_vm._v("Commentaires sur la catégorisation des risques de transaction")]), _vm._v(" "), _c("td", {
    staticClass: "fw-normal vertical-align-middle col-5"
  }, [_vm._v(" " + _vm._s((_vm$data_tb10 = _vm.data_tb) === null || _vm$data_tb10 === void 0 ? void 0 : _vm$data_tb10.commentaire_categorisation_ifc))])])])])]), _vm._v(" "), _c("div", {
    staticClass: "table-responsive mt-3"
  }, [_c("table", {
    staticClass: "table table-bordered"
  }, [_c("tbody", [_c("tr", {
    staticClass: "bg-grey d-flex"
  }, [_c("th", {
    staticClass: "col-7",
    attrs: {
      colspan: "5"
    }
  }, [_vm._v("\n                Catégorisation Finale\n              ")]), _vm._v(" "), _c("td", {
    staticClass: "fw-normal vertical-align-middle text-center col-5",
    style: _vm.ddes_color
  }, [_vm._v(" " + _vm._s((_vm$data_tb11 = _vm.data_tb) === null || _vm$data_tb11 === void 0 ? void 0 : _vm$data_tb11.categorisation_finale) + "\n              ")])])])])])])]) : _vm._e()]) : _c("div", [_vm._m(3)]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", {
    staticClass: "bg-grey"
  }, [_c("th", {
    staticClass: "text-center align-middle text-nowrap"
  }, [_vm._v("Critère")]), _vm._v(" "), _c("th", {
    staticClass: "text-center align-middle text-nowrap"
  }, [_vm._v("Activités")]), _vm._v(" "), _c("th", {
    staticClass: "text-center align-middle text-nowrap"
  }, [_vm._v("Criticité")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", {
    staticClass: "d-flex bg-grey"
  }, [_c("th", {
    staticClass: "text-center col-7",
    attrs: {
      colspan: "5"
    }
  }, [_vm._v("\n                Catégorisation des risques E&S Clients\n              ")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", {
    staticClass: "bg-grey fw-bold"
  }, [_c("th", {
    staticClass: "text-center",
    attrs: {
      colspan: "5"
    }
  }, [_vm._v("\n                Catégorisation des risques de transaction\n              ")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "row align-items-center text-center"
  }, [_c("div", {
    staticClass: "d-flex flex-column align-items-center justify-content-center text-center"
  }, [_c("span", {
    staticClass: "spinner spinner-border spinner-border-sm"
  }), _vm._v("\n      Dossier en cours de chargement veuillez patienter\n    ")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/microfinance/cofina/memo/fiche_screening_es/FICHES1.vue?vue&type=template&id=01adee90&scoped=true":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/microfinance/cofina/memo/fiche_screening_es/FICHES1.vue?vue&type=template&id=01adee90&scoped=true ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm$dossier_credit, _vm$dossier_credit2, _vm$dossier_credit3, _vm$dossier_credit4, _vm$dossier_credit7;
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("div", {
    staticClass: "row"
  }, [(_vm$dossier_credit = _vm.dossier_credit) !== null && _vm$dossier_credit !== void 0 && _vm$dossier_credit.tbs_in_use.includes("tb4001") ? _c("div", {
    staticClass: "col-12"
  }, [_c("div", {
    staticClass: "table-responsive p-2"
  }, [_c("table", {
    staticClass: "table table-bordered p-2"
  }, [_vm._m(0), _vm._v(" "), _c("tbody", [_c("tr", [_c("td", [_vm._v("\n                Nom du chargé de clientèle\n              ")]), _vm._v(" "), _c("td", [_vm._v("\n                " + _vm._s((_vm$dossier_credit2 = _vm.dossier_credit) === null || _vm$dossier_credit2 === void 0 || (_vm$dossier_credit2 = _vm$dossier_credit2.pub_workflow[0]) === null || _vm$dossier_credit2 === void 0 ? void 0 : _vm$dossier_credit2.responsible) + "\n              ")])]), _vm._v(" "), _c("tr", [_c("td", [_vm._v("\n                Numéro de dossier / Opportunité crédit\n              ")]), _vm._v(" "), _c("td", [_vm._v("\n                " + _vm._s(_vm.dossier_credit.numero_dossier) + "\n              ")])]), _vm._v(" "), _c("tr", [_c("td", [_vm._v("\n                Nom du client\n              ")]), _vm._v(" "), _c("td", [_vm._v("\n                " + _vm._s(_vm.dossier_credit.caf_recorded_file.client.nomcli) + "\n              ")])]), _vm._v(" "), _c("tr", [_c("td", [_vm._v("\n                Date du screening\n              ")]), _vm._v(" "), _c("td", [_vm._v("\n                " + _vm._s(((_vm$dossier_credit3 = _vm.dossier_credit) === null || _vm$dossier_credit3 === void 0 || (_vm$dossier_credit3 = _vm$dossier_credit3.cred_pub_tb_4001) === null || _vm$dossier_credit3 === void 0 ? void 0 : _vm$dossier_credit3.date_screening) != "" ? _vm.formatDate((_vm$dossier_credit4 = _vm.dossier_credit) === null || _vm$dossier_credit4 === void 0 || (_vm$dossier_credit4 = _vm$dossier_credit4.cred_pub_tb_4001) === null || _vm$dossier_credit4 === void 0 ? void 0 : _vm$dossier_credit4.date_screening) : "") + "\n              ")])])])])]), _vm._v(" "), _c("div", {
    staticClass: "table-responsive p-2"
  }, [_c("table", {
    staticClass: "table table-bordered p-2"
  }, [_vm._m(1), _vm._v(" "), _c("tbody", [_vm._l(_vm.items, function (item, index) {
    var _vm$dossier_credit5;
    return [!item.children ? _c("tr", {
      key: index
    }, [_c("td", {
      staticStyle: {
        "vertical-align": "middle"
      },
      attrs: {
        colspan: "3"
      }
    }, [_c("ol", [_c("li", [_c("span", {
      staticClass: "fw-bold"
    }, [_vm._v(_vm._s(index + 1) + ") ")]), _vm._v(" " + _vm._s(item.content) + "\n                    ")])])]), _vm._v(" "), _c("td", {
      staticStyle: {
        "vertical-align": "middle"
      }
    }, [_c("div", {
      staticStyle: {
        display: "flex",
        "align-content": "flex-end",
        "justify-content": "space-evenly",
        "text-transform": "uppercase"
      }
    }, [_vm._v("\n                    " + _vm._s((_vm$dossier_credit5 = _vm.dossier_credit) === null || _vm$dossier_credit5 === void 0 || (_vm$dossier_credit5 = _vm$dossier_credit5.cred_pub_tb_4001) === null || _vm$dossier_credit5 === void 0 || (_vm$dossier_credit5 = _vm$dossier_credit5.production_commerce) === null || _vm$dossier_credit5 === void 0 || (_vm$dossier_credit5 = _vm$dossier_credit5[index]) === null || _vm$dossier_credit5 === void 0 ? void 0 : _vm$dossier_credit5.demande) + "\n                  ")])])]) : _c("tr", {
      key: index
    }, [_c("td", {
      staticStyle: {
        "vertical-align": "middle"
      },
      attrs: {
        colspan: "4"
      }
    }, [_c("ol", [_c("li", [_c("span", {
      staticClass: "fw-bold"
    }, [_vm._v(_vm._s(index + 1) + ")")]), _vm._v("\n                                  " + _vm._s(item.content) + "\n                          ")])]), _vm._v(" "), _c("div", {
      staticClass: "ms-4 ml-4"
    }, [_c("table", {
      staticClass: "table"
    }, [_c("tbody", _vm._l(item.children, function (child, i) {
      var _vm$dossier_credit6;
      return _c("tr", {
        key: child.content
      }, [_c("td", {
        staticStyle: {
          "vertical-align": "middle"
        },
        attrs: {
          colspan: "3"
        }
      }, [_c("ol", [_c("li", [_c("span", {
        staticClass: "fw-bold"
      }), _vm._v("\n                                                  " + _vm._s(child.content) + "\n                                              ")])])]), _vm._v(" "), _c("td", {
        staticStyle: {
          "vertical-align": "middle"
        }
      }, [_c("div", {
        staticStyle: {
          display: "flex",
          "align-content": "flex-end",
          "justify-content": "space-evenly",
          "text-transform": "uppercase"
        }
      }, [_vm._v("\n                                            " + _vm._s((_vm$dossier_credit6 = _vm.dossier_credit) === null || _vm$dossier_credit6 === void 0 || (_vm$dossier_credit6 = _vm$dossier_credit6.cred_pub_tb_4001) === null || _vm$dossier_credit6 === void 0 || (_vm$dossier_credit6 = _vm$dossier_credit6.production_commerce) === null || _vm$dossier_credit6 === void 0 || (_vm$dossier_credit6 = _vm$dossier_credit6[index]) === null || _vm$dossier_credit6 === void 0 || (_vm$dossier_credit6 = _vm$dossier_credit6.children) === null || _vm$dossier_credit6 === void 0 || (_vm$dossier_credit6 = _vm$dossier_credit6[i]) === null || _vm$dossier_credit6 === void 0 ? void 0 : _vm$dossier_credit6.demande) + "\n                                          ")])])]);
    }), 0)])])])])];
  })], 2)])]), _vm._v(" "), _c("div", {
    staticClass: "table-responsible p-2"
  }, [_c("table", {
    staticClass: "table table-bordered"
  }, [_vm._m(2), _vm._v(" "), _c("tbody", [_c("tr", {
    staticClass: "d-flex"
  }, [_c("td", {
    staticClass: "col",
    domProps: {
      innerHTML: _vm._s((_vm$dossier_credit7 = _vm.dossier_credit) === null || _vm$dossier_credit7 === void 0 || (_vm$dossier_credit7 = _vm$dossier_credit7.cred_pub_tb_4001) === null || _vm$dossier_credit7 === void 0 ? void 0 : _vm$dossier_credit7.commentaires)
    }
  })])])])])]) : _vm._e()])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", {
    staticClass: "bg-grey"
  }, [_c("tr", [_c("th", {
    staticStyle: {
      "text-align": "center",
      "text-transform": "uppercase"
    },
    attrs: {
      colspan: "2",
      scope: "row"
    }
  }, [_vm._v("Information générale\n                sur la démande de crédit")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", {
    staticClass: "bg-grey"
  }, [_c("tr", [_c("th", {
    staticStyle: {
      "text-align": "center",
      "text-transform": "uppercase"
    },
    attrs: {
      colspan: "4",
      scope: "row"
    }
  }, [_vm._v("La démande de crédit\n                implique-t-elle une ou plusieurs activités listées dans la liste d'exclusion ?")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", {
    staticClass: "bg-grey d-flex"
  }, [_c("th", {
    staticClass: "col"
  }, [_vm._v("Commentaires")])])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/cofina/filiale/CA9.vue?vue&type=style&index=1&id=29ee3e76&lang=css&scoped=true":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/cofina/filiale/CA9.vue?vue&type=style&index=1&id=29ee3e76&lang=css&scoped=true ***!
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
___CSS_LOADER_EXPORT___.push([module.id, "\n*[data-v-29ee3e76] {\r\n    font-family: \"Google sans\";\n}\n.avis-fav[data-v-29ee3e76] {\r\n\tcolor: #2ecc71;\r\n\tborder: 1rem double #2ecc71;\r\n\ttransform: rotate(1deg);\r\n  font-size: 1.2rem;\r\n  font-family: \"Open sans\", Helvetica, Arial, sans-serif;\r\n  border-radius: 0;\r\n  padding: 0.5rem;\n}\n.avis-nonfav[data-v-29ee3e76] {\r\n\tcolor: #e74c3c;\r\n\tborder: 1rem double #e74c3c;\r\n\ttransform: rotate(1deg);\r\n  font-size: 1.2rem;\r\n  font-family: \"Open sans\", Helvetica, Arial, sans-serif;\r\n  border-radius: 0;\r\n  padding: 0.5rem;\n}\nlabel[data-v-29ee3e76] {\r\n    height: 10px;\r\n    font-size: 13px;\n}\ninput[type=\"text\"][data-v-29ee3e76],\r\ninput[type=\"date\"][data-v-29ee3e76],\r\nselect[data-v-29ee3e76] {\r\n    height: 35px;\r\n    border-color: #34495e;\r\n    color: #57606f;\r\n    font-size: 13px;\r\n    font-weight: bold;\n}\n.card-width-height[data-v-29ee3e76] {\r\n    width: 100%;\r\n    height: 100%;\n}\n.head[data-v-29ee3e76] {\r\n    color: #f1f2f6;\r\n    font-size: 22px;\n}\n.hdc[data-v-29ee3e76] {\r\n    background-color: #57606f;\n}\n.card-width-height[data-v-29ee3e76] {\r\n    width: 100%;\r\n    height: 100%;\n}\n.head[data-v-29ee3e76] {\r\n    color: #f1f2f6;\r\n    font-size: 22px;\n}\ninput[type=\"text\"][data-v-29ee3e76],\r\ninput[type=\"date\"][data-v-29ee3e76] {\r\n    width: 590px;\n}\n.review[data-v-29ee3e76] {\r\n    width: 180px !important;\n}\n.engagement input[type=\"text\"][data-v-29ee3e76],\r\ninput[type=\"date\"][data-v-29ee3e76] {\r\n    width: 100% !important;\n}\n.th[data-v-29ee3e76] {\r\n    padding: 4px;\r\n    padding-bottom: 0px;\n}\nselect[data-v-29ee3e76] {\r\n    width: 250px;\n}\n.badge-sm[data-v-29ee3e76] {\r\n    display: inline-block;\r\n    width: 15px;\r\n    height: 15px;\r\n    background: rgba(255, 0, 0, 0.882);\r\n    color: white;\r\n    font-size: 12px;\r\n    font-weight: 500;\r\n    border-radius: 100%;\r\n    position: absolute;\r\n    top: -20%;\r\n    left: 55%;\r\n    text-align: center;\n}\n.relook-header[data-v-29ee3e76] {\r\n    color: #000;\r\n    background-color: #f4f3f3;\r\n    padding: 5px;\r\n    border-bottom: 1px solid #b6b8bb;\n}\n.image1[data-v-29ee3e76] {\r\n    background: url(\"/images/capture_nsia/exemples/avis_du_responsable_rse.png\") no-repeat;\r\n    background-position: center;\r\n    background-size: contain;\r\n\r\n    width: 500px;\r\n    height: 300px;\n}\n.memo[data-v-29ee3e76] {\r\n    margin-top: 10px;\r\n    padding: 20px 10px;\r\n    border: 2px solid #fff;\r\n    font-weight: 550;\r\n    font-size: 16px;\r\n    text-align: center;\r\n    text-transform: uppercase;\r\n    background-color: #dc0030;\r\n    color: #fff;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/microfinance/cofina/memo/fiche_cotation_es/COTES1.vue?vue&type=style&index=0&id=09e98e12&lang=css&scoped=true":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/microfinance/cofina/memo/fiche_cotation_es/COTES1.vue?vue&type=style&index=0&id=09e98e12&lang=css&scoped=true ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.vertical-middle[data-v-09e98e12] {\r\n  vertical-align: middle;\n}\n.font-bold[data-v-09e98e12] {\r\n  font-weight: bold;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/microfinance/cofina/memo/fiche_screening_es/FICHES1.vue?vue&type=style&index=0&id=01adee90&scoped=true&lang=css":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/microfinance/cofina/memo/fiche_screening_es/FICHES1.vue?vue&type=style&index=0&id=01adee90&scoped=true&lang=css ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.head-memorandum-title[data-v-01adee90] {\r\n  margin-top: 15px;\r\n  padding: 16px;\r\n  color: #fff;\r\n  font-weight: bold;\r\n  background-color: #34495e;\r\n  border: 2px solid #575759;\r\n  box-shadow: 1px 3px 4px #ddd;\r\n  font-size: 16px;\r\n  text-align: center;\r\n  text-transform: uppercase;\r\n  border-radius: 10px;\r\n  margin-bottom: 15px;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/cofina/filiale/CA9.vue?vue&type=style&index=1&id=29ee3e76&lang=css&scoped=true":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/cofina/filiale/CA9.vue?vue&type=style&index=1&id=29ee3e76&lang=css&scoped=true ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CA9_vue_vue_type_style_index_1_id_29ee3e76_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CA9.vue?vue&type=style&index=1&id=29ee3e76&lang=css&scoped=true */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/cofina/filiale/CA9.vue?vue&type=style&index=1&id=29ee3e76&lang=css&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CA9_vue_vue_type_style_index_1_id_29ee3e76_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CA9_vue_vue_type_style_index_1_id_29ee3e76_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/microfinance/cofina/memo/fiche_cotation_es/COTES1.vue?vue&type=style&index=0&id=09e98e12&lang=css&scoped=true":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/microfinance/cofina/memo/fiche_cotation_es/COTES1.vue?vue&type=style&index=0&id=09e98e12&lang=css&scoped=true ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_COTES1_vue_vue_type_style_index_0_id_09e98e12_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./COTES1.vue?vue&type=style&index=0&id=09e98e12&lang=css&scoped=true */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/microfinance/cofina/memo/fiche_cotation_es/COTES1.vue?vue&type=style&index=0&id=09e98e12&lang=css&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_COTES1_vue_vue_type_style_index_0_id_09e98e12_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_COTES1_vue_vue_type_style_index_0_id_09e98e12_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/microfinance/cofina/memo/fiche_screening_es/FICHES1.vue?vue&type=style&index=0&id=01adee90&scoped=true&lang=css":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/microfinance/cofina/memo/fiche_screening_es/FICHES1.vue?vue&type=style&index=0&id=01adee90&scoped=true&lang=css ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FICHES1_vue_vue_type_style_index_0_id_01adee90_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FICHES1.vue?vue&type=style&index=0&id=01adee90&scoped=true&lang=css */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/microfinance/cofina/memo/fiche_screening_es/FICHES1.vue?vue&type=style&index=0&id=01adee90&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FICHES1_vue_vue_type_style_index_0_id_01adee90_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FICHES1_vue_vue_type_style_index_0_id_01adee90_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/contreanalyse/cofina/filiale/CA9.vue":
/*!**********************************************************************!*\
  !*** ./resources/js/components/contreanalyse/cofina/filiale/CA9.vue ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CA9_vue_vue_type_template_id_29ee3e76_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CA9.vue?vue&type=template&id=29ee3e76&scoped=true */ "./resources/js/components/contreanalyse/cofina/filiale/CA9.vue?vue&type=template&id=29ee3e76&scoped=true");
/* harmony import */ var _CA9_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CA9.vue?vue&type=script&lang=js */ "./resources/js/components/contreanalyse/cofina/filiale/CA9.vue?vue&type=script&lang=js");
/* harmony import */ var _vueform_multiselect_themes_default_css_vue_type_style_index_0_lang_css_external__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vueform/multiselect/themes/default.css?vue&type=style&index=0&lang=css&external */ "./node_modules/@vueform/multiselect/themes/default.css?vue&type=style&index=0&lang=css&external");
/* harmony import */ var _CA9_vue_vue_type_style_index_1_id_29ee3e76_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CA9.vue?vue&type=style&index=1&id=29ee3e76&lang=css&scoped=true */ "./resources/js/components/contreanalyse/cofina/filiale/CA9.vue?vue&type=style&index=1&id=29ee3e76&lang=css&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;



/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
  _CA9_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _CA9_vue_vue_type_template_id_29ee3e76_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _CA9_vue_vue_type_template_id_29ee3e76_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "29ee3e76",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/contreanalyse/cofina/filiale/CA9.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/contreanalyse/cofina/filiale/CA9.vue?vue&type=script&lang=js":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/contreanalyse/cofina/filiale/CA9.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CA9_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CA9.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/cofina/filiale/CA9.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CA9_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/contreanalyse/cofina/filiale/CA9.vue?vue&type=style&index=1&id=29ee3e76&lang=css&scoped=true":
/*!******************************************************************************************************************************!*\
  !*** ./resources/js/components/contreanalyse/cofina/filiale/CA9.vue?vue&type=style&index=1&id=29ee3e76&lang=css&scoped=true ***!
  \******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CA9_vue_vue_type_style_index_1_id_29ee3e76_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CA9.vue?vue&type=style&index=1&id=29ee3e76&lang=css&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/cofina/filiale/CA9.vue?vue&type=style&index=1&id=29ee3e76&lang=css&scoped=true");


/***/ }),

/***/ "./resources/js/components/contreanalyse/cofina/filiale/CA9.vue?vue&type=template&id=29ee3e76&scoped=true":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/components/contreanalyse/cofina/filiale/CA9.vue?vue&type=template&id=29ee3e76&scoped=true ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CA9_vue_vue_type_template_id_29ee3e76_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CA9_vue_vue_type_template_id_29ee3e76_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CA9_vue_vue_type_template_id_29ee3e76_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CA9.vue?vue&type=template&id=29ee3e76&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/cofina/filiale/CA9.vue?vue&type=template&id=29ee3e76&scoped=true");


/***/ }),

/***/ "./resources/js/components/offview/microfinance/cofina/memo/fiche_cotation_es/COTES1.vue":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/offview/microfinance/cofina/memo/fiche_cotation_es/COTES1.vue ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _COTES1_vue_vue_type_template_id_09e98e12_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./COTES1.vue?vue&type=template&id=09e98e12&scoped=true */ "./resources/js/components/offview/microfinance/cofina/memo/fiche_cotation_es/COTES1.vue?vue&type=template&id=09e98e12&scoped=true");
/* harmony import */ var _COTES1_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./COTES1.vue?vue&type=script&lang=js */ "./resources/js/components/offview/microfinance/cofina/memo/fiche_cotation_es/COTES1.vue?vue&type=script&lang=js");
/* harmony import */ var _COTES1_vue_vue_type_style_index_0_id_09e98e12_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./COTES1.vue?vue&type=style&index=0&id=09e98e12&lang=css&scoped=true */ "./resources/js/components/offview/microfinance/cofina/memo/fiche_cotation_es/COTES1.vue?vue&type=style&index=0&id=09e98e12&lang=css&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _COTES1_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _COTES1_vue_vue_type_template_id_09e98e12_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _COTES1_vue_vue_type_template_id_09e98e12_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "09e98e12",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/offview/microfinance/cofina/memo/fiche_cotation_es/COTES1.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/offview/microfinance/cofina/memo/fiche_cotation_es/COTES1.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************!*\
  !*** ./resources/js/components/offview/microfinance/cofina/memo/fiche_cotation_es/COTES1.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_COTES1_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./COTES1.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/microfinance/cofina/memo/fiche_cotation_es/COTES1.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_COTES1_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/offview/microfinance/cofina/memo/fiche_cotation_es/COTES1.vue?vue&type=style&index=0&id=09e98e12&lang=css&scoped=true":
/*!*******************************************************************************************************************************************************!*\
  !*** ./resources/js/components/offview/microfinance/cofina/memo/fiche_cotation_es/COTES1.vue?vue&type=style&index=0&id=09e98e12&lang=css&scoped=true ***!
  \*******************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_COTES1_vue_vue_type_style_index_0_id_09e98e12_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./COTES1.vue?vue&type=style&index=0&id=09e98e12&lang=css&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/microfinance/cofina/memo/fiche_cotation_es/COTES1.vue?vue&type=style&index=0&id=09e98e12&lang=css&scoped=true");


/***/ }),

/***/ "./resources/js/components/offview/microfinance/cofina/memo/fiche_cotation_es/COTES1.vue?vue&type=template&id=09e98e12&scoped=true":
/*!*****************************************************************************************************************************************!*\
  !*** ./resources/js/components/offview/microfinance/cofina/memo/fiche_cotation_es/COTES1.vue?vue&type=template&id=09e98e12&scoped=true ***!
  \*****************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_COTES1_vue_vue_type_template_id_09e98e12_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_COTES1_vue_vue_type_template_id_09e98e12_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_COTES1_vue_vue_type_template_id_09e98e12_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./COTES1.vue?vue&type=template&id=09e98e12&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/microfinance/cofina/memo/fiche_cotation_es/COTES1.vue?vue&type=template&id=09e98e12&scoped=true");


/***/ }),

/***/ "./resources/js/components/offview/microfinance/cofina/memo/fiche_screening_es/FICHES1.vue":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/offview/microfinance/cofina/memo/fiche_screening_es/FICHES1.vue ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _FICHES1_vue_vue_type_template_id_01adee90_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FICHES1.vue?vue&type=template&id=01adee90&scoped=true */ "./resources/js/components/offview/microfinance/cofina/memo/fiche_screening_es/FICHES1.vue?vue&type=template&id=01adee90&scoped=true");
/* harmony import */ var _FICHES1_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FICHES1.vue?vue&type=script&lang=js */ "./resources/js/components/offview/microfinance/cofina/memo/fiche_screening_es/FICHES1.vue?vue&type=script&lang=js");
/* harmony import */ var _FICHES1_vue_vue_type_style_index_0_id_01adee90_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FICHES1.vue?vue&type=style&index=0&id=01adee90&scoped=true&lang=css */ "./resources/js/components/offview/microfinance/cofina/memo/fiche_screening_es/FICHES1.vue?vue&type=style&index=0&id=01adee90&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _FICHES1_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _FICHES1_vue_vue_type_template_id_01adee90_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _FICHES1_vue_vue_type_template_id_01adee90_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "01adee90",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/offview/microfinance/cofina/memo/fiche_screening_es/FICHES1.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/offview/microfinance/cofina/memo/fiche_screening_es/FICHES1.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************!*\
  !*** ./resources/js/components/offview/microfinance/cofina/memo/fiche_screening_es/FICHES1.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FICHES1_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FICHES1.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/microfinance/cofina/memo/fiche_screening_es/FICHES1.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FICHES1_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/offview/microfinance/cofina/memo/fiche_screening_es/FICHES1.vue?vue&type=style&index=0&id=01adee90&scoped=true&lang=css":
/*!*********************************************************************************************************************************************************!*\
  !*** ./resources/js/components/offview/microfinance/cofina/memo/fiche_screening_es/FICHES1.vue?vue&type=style&index=0&id=01adee90&scoped=true&lang=css ***!
  \*********************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FICHES1_vue_vue_type_style_index_0_id_01adee90_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FICHES1.vue?vue&type=style&index=0&id=01adee90&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/microfinance/cofina/memo/fiche_screening_es/FICHES1.vue?vue&type=style&index=0&id=01adee90&scoped=true&lang=css");


/***/ }),

/***/ "./resources/js/components/offview/microfinance/cofina/memo/fiche_screening_es/FICHES1.vue?vue&type=template&id=01adee90&scoped=true":
/*!*******************************************************************************************************************************************!*\
  !*** ./resources/js/components/offview/microfinance/cofina/memo/fiche_screening_es/FICHES1.vue?vue&type=template&id=01adee90&scoped=true ***!
  \*******************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FICHES1_vue_vue_type_template_id_01adee90_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FICHES1_vue_vue_type_template_id_01adee90_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FICHES1_vue_vue_type_template_id_01adee90_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FICHES1.vue?vue&type=template&id=01adee90&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/microfinance/cofina/memo/fiche_screening_es/FICHES1.vue?vue&type=template&id=01adee90&scoped=true");


/***/ }),

/***/ "./resources/js/components/utils/highlighter.js":
/*!******************************************************!*\
  !*** ./resources/js/components/utils/highlighter.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   highlightBySelector: () => (/* binding */ highlightBySelector),
/* harmony export */   highlightMultiple: () => (/* binding */ highlightMultiple),
/* harmony export */   highlightWithNote: () => (/* binding */ highlightWithNote)
/* harmony export */ });
/**
 * Utilitaire pour mettre en surbrillance des éléments DOM avec des notes d'information
 */

/**
 * Applique une surbrillance à un élément DOM avec une note d'information
 * @param {HTMLElement} element - L'élément DOM à mettre en surbrillance
 * @param {Object} options - Options de configuration
 * @param {string} options.message - Le message à afficher dans la note d'information
 * @param {string} options.type - Type de surbrillance ('info', 'warning', 'error', 'success')
 * @param {string} options.position - Position de la note ('top', 'bottom', 'left', 'right')
 * @param {number} options.duration - Durée d'affichage en ms (0 pour permanent)
 * @param {Function} options.onClick - Fonction à exécuter lors du clic sur la note
 * @returns {Object} - Objet contenant des méthodes pour manipuler la surbrillance
 */
function highlightWithNote(element) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  // Valeurs par défaut
  var config = {
    message: options.message || 'Information',
    type: options.type || 'info',
    position: options.position || 'top',
    duration: options.duration || 0,
    // 0 = permanent
    onClick: options.onClick || null
  };

  // Vérifier que l'élément est valide
  if (!element || !(element instanceof HTMLElement)) {
    console.error('L\'élément fourni n\'est pas un élément DOM valide');
    return null;
  }

  // Sauvegarder le style original
  var originalStyles = {
    position: element.style.position,
    border: element.style.border,
    boxShadow: element.style.boxShadow,
    zIndex: element.style.zIndex
  };

  // Appliquer les styles de surbrillance
  element.style.position = element.style.position || 'relative';
  element.style.zIndex = '1';
  element.style.borderRadius = "5px";
  element.style.padding = "3px";
  // Déterminer la couleur selon le type
  var color;
  switch (config.type) {
    case 'info':
      color = '#3d3d3d';
      break;
    case 'warning':
      color = '#f39c12';
      break;
    case 'error':
      color = '#e74c3c';
      break;
    case 'success':
      color = '#2ecc71';
      break;
    default:
      color = '#3498db';
  }

  // Appliquer la bordure et l'ombre
  //   element.style.border = `2px solid ${color}`;
  element.style.boxShadow = "0 0 5px ".concat(color);

  // Créer l'élément de note
  var noteElement = document.createElement('div');
  noteElement.className = "highlight-note highlight-note-".concat(config.type);
  noteElement.innerHTML = config.message;

  // Styles pour la note
  noteElement.style.position = 'absolute';
  noteElement.style.backgroundColor = color;
  noteElement.style.color = 'white';
  noteElement.style.padding = '8px 12px';
  noteElement.style.borderRadius = '4px';
  noteElement.style.fontSize = '18px';
  noteElement.style.maxWidth = '250px';
  noteElement.style.boxShadow = '0 2px 5px rgba(0,0,0,0.2)';
  noteElement.style.zIndex = '2';
  noteElement.style.pointerEvents = 'auto';

  // Ajouter une flèche
  var arrow = document.createElement('div');
  arrow.style.position = 'absolute';
  arrow.style.width = '0';
  arrow.style.height = '0';
  arrow.style.borderStyle = 'solid';

  // Positionner la note selon l'option
  switch (config.position) {
    case 'top':
      noteElement.style.bottom = '100%';
      noteElement.style.left = '50%';
      noteElement.style.transform = 'translateX(-50%)';
      noteElement.style.marginBottom = '10px';
      arrow.style.top = '100%';
      arrow.style.left = '50%';
      arrow.style.transform = 'translateX(-50%)';
      arrow.style.borderWidth = '8px 8px 0 8px';
      arrow.style.borderColor = "".concat(color, " transparent transparent transparent");
      break;
    case 'bottom':
      noteElement.style.top = '100%';
      noteElement.style.left = '50%';
      noteElement.style.transform = 'translateX(-50%)';
      noteElement.style.marginTop = '10px';
      arrow.style.bottom = '100%';
      arrow.style.left = '50%';
      arrow.style.transform = 'translateX(-50%)';
      arrow.style.borderWidth = '0 8px 8px 8px';
      arrow.style.borderColor = "transparent transparent ".concat(color, " transparent");
      break;
    case 'left':
      noteElement.style.right = '100%';
      noteElement.style.top = '50%';
      noteElement.style.transform = 'translateY(-50%)';
      noteElement.style.marginRight = '10px';
      arrow.style.left = '100%';
      arrow.style.top = '50%';
      arrow.style.transform = 'translateY(-50%)';
      arrow.style.borderWidth = '8px 0 8px 8px';
      arrow.style.borderColor = "transparent transparent transparent ".concat(color);
      break;
    case 'right':
      noteElement.style.left = '100%';
      noteElement.style.top = '50%';
      noteElement.style.transform = 'translateY(-50%)';
      noteElement.style.marginLeft = '10px';
      arrow.style.right = '100%';
      arrow.style.top = '50%';
      arrow.style.transform = 'translateY(-50%)';
      arrow.style.borderWidth = '8px 8px 8px 0';
      arrow.style.borderColor = "transparent ".concat(color, " transparent transparent");
      break;
  }
  element.scrollIntoView({
    behavior: "smooth"
  });
  // Ajouter l'arrow à la note
  noteElement.appendChild(arrow);

  // Ajouter la note à l'élément
  element.appendChild(noteElement);

  // Gérer le clic sur la note
  if (typeof config.onClick === 'function') {
    noteElement.style.cursor = 'pointer';
    noteElement.addEventListener('click', config.onClick);
  }

  // Gérer la durée d'affichage
  var timeoutId = null;
  if (config.duration > 0) {
    timeoutId = setTimeout(function () {
      removeHighlight();
    }, config.duration);
  }

  // Fonction pour supprimer la surbrillance
  function removeHighlight() {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    // Restaurer les styles originaux
    element.style.position = originalStyles.position;
    element.style.border = originalStyles.border;
    element.style.boxShadow = originalStyles.boxShadow;
    element.style.zIndex = originalStyles.zIndex;

    // Supprimer la note
    if (element.contains(noteElement)) {
      element.removeChild(noteElement);
    }
  }

  // Retourner un objet avec des méthodes utiles
  return {
    remove: removeHighlight,
    update: function update(newMessage) {
      noteElement.innerHTML = newMessage;
      // Réajouter la flèche qui a été remplacée
      noteElement.appendChild(arrow);
    },
    getElement: function getElement() {
      return noteElement;
    }
  };
}

/**
 * Fonction pour mettre en surbrillance plusieurs éléments à la fois
 * @param {Array<HTMLElement>} elements - Tableau d'éléments DOM
 * @param {Object} options - Options de configuration
 * @returns {Array} - Tableau d'objets de surbrillance
 */
function highlightMultiple(elements) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return elements.map(function (element) {
    return highlightWithNote(element, options);
  });
}

/**
 * Fonction pour mettre en surbrillance les éléments correspondant à un sélecteur CSS
 * @param {string} selector - Sélecteur CSS
 * @param {Object} options - Options de configuration
 * @returns {Array} - Tableau d'objets de surbrillance
 */
function highlightBySelector(selector) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var elements = document.querySelectorAll(selector);
  return Array.from(elements).map(function (element) {
    return highlightWithNote(element, options);
  });
}

// Exporter un objet avec toutes les fonctions
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  highlightWithNote: highlightWithNote,
  highlightMultiple: highlightMultiple,
  highlightBySelector: highlightBySelector
});

/***/ })

}]);