"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_forms_afg_memorandum_F10_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/memorandum/F10.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/memorandum/F10.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");
/* harmony import */ var _services_ebapis_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../services/ebapis.service */ "./resources/js/services/ebapis.service.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../services/auth.service */ "./resources/js/services/auth.service.js");
/* harmony import */ var _vueform_multiselect_dist_multiselect_vue2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vueform/multiselect/dist/multiselect.vue2 */ "./node_modules/@vueform/multiselect/dist/multiselect.vue2.js");
/* harmony import */ var _helpers_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../helpers/helper */ "./resources/js/helpers/helper.js");
/* harmony import */ var _services_credit_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/credit.service */ "./resources/js/services/credit.service.js");
/* harmony import */ var _helpers_indexedDB__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../helpers/indexedDB */ "./resources/js/helpers/indexedDB.js");
/* harmony import */ var _helpers_indexedDB__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_helpers_indexedDB__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _services_connects_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../services/connects.service */ "./resources/js/services/connects.service.js");
/* harmony import */ var _services_proxy_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../services/proxy.service */ "./resources/js/services/proxy.service.js");
/* provided dependency */ var process = __webpack_require__(/*! process/browser.js */ "./node_modules/process/browser.js");







// ? IndexedDB helper for formDataToBeWatched Cache management




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

window.$ = window.jQuery = __webpack_require__(/*! jquery/dist/jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Source-revenu",
  display: "Source_revenu",
  components: {
    MoreVerticalIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_8__.MoreVerticalIcon,
    ChevronUpIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_8__.ChevronUpIcon,
    ChevronDownIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_8__.ChevronDownIcon,
    PlusIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_8__.PlusIcon,
    TrashIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_8__.TrashIcon,
    AirplayIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_8__.AirplayIcon,
    Multiselect: _vueform_multiselect_dist_multiselect_vue2__WEBPACK_IMPORTED_MODULE_2__["default"],
    BookOpenIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_8__.BookOpenIcon
  },
  computed: {
    totalPermanent: function totalPermanent() {
      var trying = this.source_revenus.map(function (el) {
        el.Permanente = String(el.Permanente).replace(/\s+/g, "");
        if (!el.Permanente) return 0;
        return Number(el.Permanente);
      }).reduce(function (sum, curr) {
        return sum + curr;
      }, 0);
      return trying.toLocaleString("fr-FR");
    },
    totalInterimaires: function totalInterimaires() {
      var trying = this.source_revenus.map(function (el) {
        el.interimaires = String(el.interimaires).replace(/\s+/g, "");
        if (!el.interimaires) return 0;
        return Number(el.interimaires);
      }).reduce(function (sum, curr) {
        return sum + curr;
      }, 0);
      return trying.toLocaleString("fr-FR");
    }
  },
  props: {
    meta_data: Object,
    tb_name: String,
    tb_display_name: String
  },
  created: function created() {
    var _this = this;
    // ? Setup cache listeners and stuff
    // this.setupCache();
    //
    EventBus.$on("event-T0", function (data) {
      // console.log("kkk", this.rtnExistant(data.formdata.experience_secteur))
      _this.formDataToBeWatched.vivre = _this.rtnExistant(data.formdata.experience_secteur);
    });
    _services_credit_service__WEBPACK_IMPORTED_MODULE_4__["default"].loadActivite().then(function (res) {
      _this.secteurs_activites = res.data.data.activites;
    })["catch"](function (err) {
      console.log(err);
    });
  },
  mounted: function mounted() {
    var _this2 = this;
    // Initiate cache

    // // this.initCache();
    //

    this.loadRetrieved();
    this.loadTbAttrs(); // charge les attributs + sous attributs des tables
    this.tableClosedOrOpened();
    // helper.loadCurrencyFormatter();
    // AJOUTER
    // EventBus.$on('autosubmit', ()=> {
    //     this.launchAutoSaver()
    // })

    EventBus.$on("created-extra-file-template", function (data) {
      _this2.entite_connectes.forEach(function (element, index) {
        var _data$template;
        var template_name = "Organigramme -groupe_" + index + "_" + _this2.$route.params.templateId;
        if (template_name == (data === null || data === void 0 || (_data$template = data.template) === null || _data$template === void 0 ? void 0 : _data$template.name)) {
          var _data$template2, _data$template3, _data$template4;
          _this2.entite_connectes[index]["template"] = {
            id: data === null || data === void 0 || (_data$template2 = data.template) === null || _data$template2 === void 0 ? void 0 : _data$template2.id,
            name: data === null || data === void 0 || (_data$template3 = data.template) === null || _data$template3 === void 0 ? void 0 : _data$template3.name,
            slug: data === null || data === void 0 || (_data$template4 = data.template) === null || _data$template4 === void 0 ? void 0 : _data$template4.slug
          };
          _this2.handleInput();
        }
      });
    });
    EventBus.$on("updated-extra-file-upload", function (data) {
      _this2.getFiles();
    });
    this.getFiles();
  },
  data: function data() {
    var vm = this;
    return {
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
      seen4: true,
      seen5: true,
      seen6: true,
      seen7: true,
      seen8: true,
      seen9: true,
      seenn1: true,
      vseenn1: true,
      disp: false,
      isLoading: false,
      // customToolbar: [
      //       ["bold", "italic", "underline"],
      //       [{ list: "ordered" }, { list: "bullet" }],
      //       // ["image", "code-block"]
      //     ],
      meta_parseable: {
        cred_pub_key: this.meta_data["cred_pub_key"],
        tb_name: this.tb_name
      },
      list_secteurs_edane: [
      // "Agriculture-Elevage-Pêche",
      // "Industrie - Boulangerie",
      // "Industrie Agro-Alimentaire",
      // "Industrie Boisson-Jus-Bière",
      // "Industrie Corps Gras - Huilerie",
      // "BTP Complet",
      // "BTP Specialise",
      // "Commerce Automobile et Pièces détachées",
      // "Commerce Quincaillerie",
      // "Commerce de Detail Divers",
      // "Commerce de Gros Divers",
      // "Commerce de Gros de Produits Agricoles",
      // "Distributeur de Carburant Major",
      // "Hotel Restaurant",
      // "Pharmacies - Détaillants",
      // "Pharmacies - Grossistes",
      // "Station de Carburant",
      // "Energie-Eau-Gaz",
      // "Industrie - Metalurgie",
      // "Industrie Chimique",
      // "Industrie Cimenterie",
      // "Industrie Divers",
      // "Industrie Medical",
      // "Industrie Papier-Imprimerie",
      // "Industrie Plastique",
      // "Industrie Tabac",
      // "Industrie Textile",
      // "Industrie du Bois",
      // "Mine",
      // "Pétrole",
      // "Agence de voyage",
      // "Agences et Activités Immobilières",
      // "Architecture et Ingénierie",
      // "Auxilliaire Assurance et Finance",
      // "Conseils Informatique",
      // "Conseils Juridiques Comptables",
      // "Enseignement",
      // "Gardiennage - Sécurité",
      // "Main d'oeuvre - Nettoyage - Formation",
      // "Publicité Communication",
      // "Réparation-Installation-Maintenance",
      // "Santé (Cliniques Medecins)",
      // "Services Divers",
      // "Telecom - Divers",
      // "Telecom - Opérateurs",
      // "Entreposage",
      // "Transit - Manutention-Logistique",
      // "Transport Passager et Marchandise",
      "Automobile", "Banque", "Biens de consommation et distribution", "Energie et ressources", "Franchise et réseaux", "Immobilier et Hôtellerie", "OLD industries", "Gouvernement,infrastructure et construction", "private equity", "Santé et sciences de la vie", "secteur public", "Technologies", "Télécommunications et médias", "Utilities", "Aéropastial et défance"],
      formDataToBeWatched: {
        entite_connectes: "",
        commentaire: "",
        notes: []
      },
      decision_theorique0: "",
      decision_theorique1: "",
      decision_theorique2: "",
      decision_theorique3: "",
      entite_connectes: [{
        // matricule_client_entite_connecte: "",
        raison_social_entite_connecte: "",
        // commentaire_ligne_entreprise:"",
        commentaire_historique_du_groupe: "",
        commentaire_indicateur_financier: "",
        secteur_activite_entite_connecte: "",
        pourcentage_detention: "",
        files: 0,
        template: ""
      }],
      co_signataire: [{
        label: "Co-débiteur",
        nom: "",
        adresse: "",
        tel: "",
        relation_client: "",
        revenu_mensuel: "",
        source_revenue: ""
      }, {
        label: "Garant 1",
        nom: "",
        adresse: "",
        tel: "",
        relation_client: "",
        revenu_mensuel: "",
        source_revenue: ""
      }, {
        label: "Garant 2",
        nom: "",
        adresse: "",
        tel: "",
        relation_client: "",
        revenu_mensuel: "",
        source_revenue: ""
      }, {
        label: "Garant 3",
        nom: "",
        adresse: "",
        tel: "",
        relation_client: "",
        revenu_mensuel: "",
        source_revenue: ""
      }],
      verification_juridique: [{
        entreprise_dument_enregistres: "",
        client_autorise: "",
        document_de_propriete: "",
        display_label: true
      }],
      // existance_default_value:"",
      // decision_theorique1 : "",
      // decision_theorique2 : "",
      // Ajouter note
      listingNote: false,
      source_revenus: [{
        activite: "",
        emplacement: "",
        depuis_quand: "",
        loue: "",
        Permanente: 0,
        salaire_Permanente: 0,
        interimaires: 0,
        salaire_interimaires: 0,
        apprenti: 0,
        salaire_apprenti: 0
      }],
      equipe_dirigeantes: [{
        dirigeants: "",
        pouvoir_signature: "",
        fonction_sein_entreprise: "",
        experience: "",
        diplome: ""
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
      secteurs_activites: [],
      showMoreNumber: 2,
      MAX_NAME_LENGTH: 10,
      SHORT_NAME_SEPARATOR: '...',
      connectsHost: _services_connects_service__WEBPACK_IMPORTED_MODULE_6__["default"].loadablehost()
    };
  },
  methods: {
    slctExistant: function slctExistant() {
      var _this$meta_data$dossi;
      var existance;
      var experience = (_this$meta_data$dossi = this.meta_data.dossier_credit) === null || _this$meta_data$dossi === void 0 || (_this$meta_data$dossi = _this$meta_data$dossi.cred_pub_tb_00) === null || _this$meta_data$dossi === void 0 ? void 0 : _this$meta_data$dossi.experience_secteur;
      // console.log("experience", experience);
      if (experience <= 3) {
        existance = "<3 ans";
      } else {
        if (experience <= 5) {
          existance = ">3 ans";
        } else {
          if (experience <= 10) existance = ">5 ans";else existance = ">10 ans";
        }
      }
      return existance;
    },
    rtnExistant: function rtnExistant(data) {
      var existance;
      var experience = data;
      // console.log("experience", experience);
      if (experience <= 3) {
        existance = "<3 ans";
      } else {
        if (experience <= 5) {
          existance = ">3 ans";
        } else {
          if (experience <= 10) existance = ">5 ans";else existance = ">10 ans";
        }
      }
      return existance;
    },
    tableClosedOrOpened: function tableClosedOrOpened() {
      this.seen = this.fetchClosedTables(this.tb_name + this.meta_data["cred_pub_key"]);
    },
    openNotesModal: function openNotesModal() {
      var listing = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      this.listingNote = listing;
      this.$modal.show(this.tb_name);
    },
    // AJOUTER
    launchAutoSaver: function launchAutoSaver() {
      var _this3 = this;
      _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["default"].loadUserData().then(function (res) {
        _this3.send2Backend(res, 0, 0);
      })["catch"](function (err) {
        _this3.loadWithError(err);
      });
    },
    SetPermanantEmp: function SetPermanantEmp(event, index) {
      this.source_revenus[index][event[0]] = event[1];
      // this.som = parseInt(this.source_revenus[index].Permanente?.toString().replace(/\s/g, ''))
      // console.log(this.source_revenus[index].Permanente?.toString().replace(/\s/g, ''))
      // this.formDataToBeWatched['total'] = parseInt(this.som)
      this.formDataToBeWatched["total"] = this.totalMontant;
      this.handleInput();
    },
    formDataVars: function formDataVars(event) {
      this.formDataToBeWatched[event[0]] = event[1];
    },
    onChange: function onChange(e) {
      if (e.target.value == "Non") {
        this.disp = true;
      } else {
        this.disp = false;
      }
    },
    setPartieLieeVars: function setPartieLieeVars(event, index) {
      this.entite_connectes[index][event[0]] = event[1];
      this.handleInput();
    },
    loadRetrieved: function loadRetrieved() {
      var _this$meta_data$dossi2;
      var lentb = this.meta_data["dossier_credit"]["tbs_in_use"];
      var createdKey = this.tb_name;
      var createdKeyArr = createdKey.split("tb");
      createdKey = "cred_pub_tb_" + createdKeyArr[1];

      // Close table by default
      this.defaultRetract(false, (_this$meta_data$dossi2 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi2 === void 0 ? void 0 : _this$meta_data$dossi2.applied_templ_id);
      if (lentb.length > 0) {
        if (this.meta_data["dossier_credit"][createdKey] != undefined) {
          this.formDataToBeWatched = this.meta_data["dossier_credit"][createdKey];
          if (this.meta_data["dossier_credit"][createdKey]["entite_connectes"] != "") {
            this.entite_connectes = this.meta_data["dossier_credit"][createdKey]["entite_connectes"];
          }
        }
        if (this.meta_data["dossier_credit"]["cred_pub_tb_00"] != undefined) {
          if (this.meta_data["dossier_credit"]["cred_pub_tb_00"]["experience_secteur"] != "") {
            this.formDataToBeWatched.vivre = this.slctExistant();
            // this.existance_default_value = this.slctExistant();
          }
        }
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
      //// window.location.href = "/login";
    },
    send2Backend: function send2Backend(res, newVal, oldVal) {
      this.authcheck = true;
      this.authcheckUsr = res.data;
      this.authcheckStatus = res.status;
      if (this.authcheckStatus === 401) {
        // // window.location.href = "/login";
      }
      if (this.authcheck === true) {
        // console.log(this.formDataToBeWatched)
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
    // onSlctMatCli(obj, key) {
    //     this.entite_connectes[key]["raison_social_entite_connecte"] =
    //         obj.nomcli;
    //     this.entite_connectes[key]["matricule_client_entite_connecte"] =
    //         obj.matclihan;
    //     this.handleInput();
    // },
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
      this.seen4 = !this.seen4;
    },
    addMore: function addMore() {
      this.source_revenus.push({
        activite: "",
        emplacement: "",
        depuis_quand: "",
        loue: "",
        Permanente: 0,
        salaire_Permanente: 0,
        interimaires: 0,
        salaire_interimaires: 0,
        apprenti: 0,
        salaire_apprenti: 0
      });
    },
    addMore3: function addMore3() {
      this.entite_connectes.push({
        // matricule_client_entite_connecte: "",
        raison_social_entite_connecte: "",
        // commentaire_ligne_entreprise:"",
        commentaire_historique_du_groupe: "",
        commentaire_indicateur_financier: "",
        secteur_activite_entite_connecte: "",
        pourcentage_detention: ""
      });
      this.handleInput();
    },
    remove3: function remove3(index) {
      this.entite_connectes.splice(index, 1);
      this.handleInput();
    },
    addMore2: function addMore2() {
      this.equipe_dirigeantes.push({
        dirigeants: "",
        pouvoir_signature: "",
        fonction_sein_entreprise: "",
        experience: "",
        diplome: ""
      });
    },
    remove: function remove(index) {
      this.source_revenus.splice(index, 1);
      this.formDataToBeWatched.total_permanent = this.somX3(this.source_revenus, "Permanente");
      this.formDataToBeWatched.total_interimaires = this.somX3(this.source_revenus, "interimaires");
      this.formDataToBeWatched.total_apprenti = this.somX3(this.source_revenus, "apprenti");
      this.formDataToBeWatched.total_salaire_permanent = this.somX4(this.source_revenus, "salaire_Permanente", "Permanente");
      this.formDataToBeWatched.total_salaire_interimaires = this.somX4(this.source_revenus, "salaire_interimaires", "interimaires");
      this.formDataToBeWatched.total_salaire_apprenti = this.somX4(this.source_revenus, "salaire_apprenti", "apprenti");
      this.formDataToBeWatched.total_masse_salariale = this.formDataToBeWatched.total_salaire_apprenti + this.formDataToBeWatched.total_salaire_interimaires + this.formDataToBeWatched.total_salaire_permanent;
    },
    remove2: function remove2(index) {
      this.equipe_dirigeantes.splice(index, 1);
    },
    somX3: function somX3(ob, key) {
      var som = 0;
      ob.filter(function (elm) {
        var _elm$key;
        som += Number((_elm$key = elm[key]) === null || _elm$key === void 0 ? void 0 : _elm$key.toString().replace(/\s/g, ""));
      });
      return som;
    },
    somX4: function somX4(ob, keyA, keyB) {
      var _ob$0$keyA, _ob$0$keyB;
      var som = Number((_ob$0$keyA = ob[0][keyA]) === null || _ob$0$keyA === void 0 ? void 0 : _ob$0$keyA.toString().replace(/\s/g, "")) * Number((_ob$0$keyB = ob[0][keyB]) === null || _ob$0$keyB === void 0 ? void 0 : _ob$0$keyB.toString().replace(/\s/g, ""));
      ob.filter(function (elm, index) {
        if (index > 0) {
          var _elm$keyA, _elm$keyB;
          var result = Number((_elm$keyA = elm[keyA]) === null || _elm$keyA === void 0 ? void 0 : _elm$keyA.toString().replace(/\s/g, "")) * Number((_elm$keyB = elm[keyB]) === null || _elm$keyB === void 0 ? void 0 : _elm$keyB.toString().replace(/\s/g, ""));
          som += result;
        }
      });
      return som;
    },
    handleInput: function handleInput(evt) {
      this.formDataToBeWatched["entite_connectes"] = this.entite_connectes;
    },
    loadTbAttrs: function loadTbAttrs() {
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
        id: "f12-head"
      };
      // console.log(p)
      this.$emit("load-buffer", p);
    },
    precomputeScore: function precomputeScore() {
      var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      this.meta_parseable["type_table"] = a;
      var scoringVar = [];
      if (a == "organisation") {
        scoringVar = ["vivre", "competences_manageriales", "formalisation", "interaction"];
      }
      //   else if (a=="evaluation") {
      //     scoringVar = ["diversification", "structure_fournisseur", "structure_clientele", "saisonnalite", "couverture_geographique", "concurrence"];
      //   }
      if (a == "evaluation") {
        scoringVar = ["technologie", "risque_juridique", "risque_politique"];
      }
      if (a == "activite") {
        scoringVar = ["diversification", "structure_fournisseur", "structure_clientele", "saisonnalite", "couverture_geographique", "concurrence"];
      }
      if (a == "competence") {
        scoringVar = ["maitrise", "dynamisme", "compet_gestion", "avis_cc", "reputation", "stabilite", "competence", "historique"];
      }
      for (var i = 0; i < scoringVar.length; i++) {
        if (this.formDataToBeWatched[scoringVar[i]] == "") {
          return false;
        }
      }
      return true;
    },
    launchScoringTable: function launchScoringTable(a) {
      if (this.precomputeScore(a) === true) {
        this.$axios.post(this.ebapisHost + "cofiscore/api/v1/launchscorer-table/", {
          user: this.authcheckUsr,
          meta_parseable: this.meta_parseable,
          filledData: this.formDataToBeWatched
        }).then(function (response) {
          // console.log(response)
          var tbFetcheData = response.data;
          // console.log('tbFetcheData',tbFetcheData)
          if (a == "organisation") {
            this.decision_theorique1 = tbFetcheData["decision_theorique"];
            if (this.formDataToBeWatched.decision_theorique1 == "") {
              this.formDataToBeWatched.decision_theorique1 = this.decision_theorique1;
            }
          }
          // else if (a=='evaluation') {
          //     this.decision_theorique = tbFetcheData['decision_theorique']
          //     console.log( "decision_theorique",this.decision_theorique)
          //     if (this.formDataToBeWatched.decision_theorique== ""){
          //         this.formDataToBeWatched.decision_theorique=this.decision_theorique
          //     }
          // }
          else if (a == "evaluation") {
            this.decision_theorique2 = tbFetcheData["decision_theorique"];
            if (this.formDataToBeWatched.decision_theorique2 == "") {
              this.formDataToBeWatched.decision_theorique2 = this.decision_theorique2;
            }
          } else if (a == "activite") {
            this.decision_theorique3 = tbFetcheData["decision_theorique"];
            if (this.formDataToBeWatched.decision_theorique3 == "") {
              this.formDataToBeWatched.decision_theorique3 = this.decision_theorique3;
            }
          } else if (a == "competence") {
            this.decision_theorique0 = tbFetcheData["decision_theorique"];
            if (this.formDataToBeWatched.decision_theorique0 == "") {
              this.formDataToBeWatched.decision_theorique0 = this.decision_theorique0;
            }
          }
        }.bind(this))["catch"](function (error) {
          this.$Progress.finish();
          console.log(error);
        }.bind(this));
      }
    },
    handleDoubleClickOrClick: function handleDoubleClickOrClick(event, index) {
      var _this4 = this;
      EventBus.$emit("open-extra-file-explorer");
      setTimeout(function () {
        EventBus.$emit("data-extra-file-explorer", {
          name: "Organigramme {(*)}groupe_" + index + "_" + _this4.$route.params.templateId
        });
      }, 500);
    },
    getFiles: function getFiles() {
      var _this5 = this;
      _services_proxy_service__WEBPACK_IMPORTED_MODULE_7__["default"].proxyEbapis({
        url: this.connectsHost + "api/get-files",
        method: "POST",
        data: {
          file_identity: this.meta_data["dossier_credit"].cred_pub_key
        }
      }).then(function (res) {
        var _res$data$data, _res$data$data2;
        res.data = JSON.parse(res.data);
        if (((_res$data$data = res.data.data) === null || _res$data$data === void 0 ? void 0 : _res$data$data.length) > 0 || ((_res$data$data2 = res.data.data) === null || _res$data$data2 === void 0 ? void 0 : _res$data$data2.length) != null) {
          _this5.files = res.data.data;
          _this5.entite_connectes.forEach(function (element, index) {
            var count = 0;
            _this5.files.forEach(function (file) {
              var _element$template;
              if ((file === null || file === void 0 ? void 0 : file.extra_file_template_id) != null && (element === null || element === void 0 || (_element$template = element.template) === null || _element$template === void 0 ? void 0 : _element$template.id) == (file === null || file === void 0 ? void 0 : file.extra_file_template_id)) {
                count++;
              }
            });
            _this5.entite_connectes[index]["files"] = count;
            _this5.handleInput();
          });
        }
      })["catch"](function (err) {
        console.error(err);
      });
    },
    downloadFile: function downloadFile(index, fileIndex) {
      var file = this.file_data_list[index][fileIndex];
      var url = window.location.origin + '/file?f=' + encodeURIComponent(file.file_url);
      window.open(url, '_blank');
    },
    formatFileName: function formatFileName(name) {
      return this.isFileNameTooLong(name) ? this.shortenFileName(name) : name;
    },
    shortenFileName: function shortenFileName(name) {
      return (name === null || name === void 0 ? void 0 : name.substring(0, Math.floor(this.MAX_NAME_LENGTH / 2))) + this.SHORT_NAME_SEPARATOR + (name === null || name === void 0 ? void 0 : name.substring((name === null || name === void 0 ? void 0 : name.length) - 1 - Math.floor(this.MAX_NAME_LENGTH / 2), (name === null || name === void 0 ? void 0 : name.length) - 1));
    },
    isFileNameTooLong: function isFileNameTooLong(name) {
      return (name === null || name === void 0 ? void 0 : name.length) > this.MAX_NAME_LENGTH;
    }
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/memorandum/F10.vue?vue&type=template&id=7ec3d705&scoped=true":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/memorandum/F10.vue?vue&type=template&id=7ec3d705&scoped=true ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "row bg-light card-width-height",
    staticStyle: {
      width: "100%",
      height: "100%"
    }
  }, [_c("ContextMenu", {
    ref: "menu",
    attrs: {
      id: _vm.tb_name,
      cred_pub_key: _vm.meta_parseable.cred_pub_key,
      tb_name: _vm.tb_name,
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
      id: "f12-head"
    }
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col"
  }, [_vm._v("\n                            " + _vm._s(_vm.tb_display_name) + " : Présentation du groupe (le cas échéant)\n                        ")]), _vm._v(" "), _c("div", {
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
    staticClass: "col-12 p-2 mt-3"
  }, [_c("div", {
    staticClass: "table-responsive p-2",
    staticStyle: {
      "overflow-x": "auto"
    }
  }, [(_vm.seen7 = _vm.seen7) ? _c("table", {
    staticClass: "table"
  }, [_vm._m(0), _vm._v(" "), _c("tbody", _vm._l(_vm.entite_connectes, function (entite_connecte, index) {
    return _c("tr", {
      key: index
    }, [_c("td", [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: entite_connecte.raison_social_entite_connecte,
        expression: "\n                                            entite_connecte.raison_social_entite_connecte"
      }],
      staticClass: "form-control",
      attrs: {
        required: "",
        type: "text"
      },
      domProps: {
        value: entite_connecte.raison_social_entite_connecte
      },
      on: {
        input: [function ($event) {
          if ($event.target.composing) return;
          _vm.$set(entite_connecte, "raison_social_entite_connecte", $event.target.value);
        }, _vm.handleInput]
      }
    })]), _vm._v(" "), _c("td", [_c("div", {
      staticClass: "d-flex position-relative align-items-center"
    }, [_c("Multiselect", {
      staticStyle: {
        height: "42px",
        "border-color": "#34495e",
        color: "#57606f",
        "font-size": "13px",
        "font-weight": "bold",
        width: "250px"
      },
      attrs: {
        searchable: true,
        trackBy: "intitule",
        label: "intitule",
        "value-prop": "intitule",
        classes: {
          optionPointed: "text-gray-800 bg-gray-100"
        },
        options: _vm.secteurs_activites,
        "data-bs-original-title": entite_connecte.secteur_activite_entite_connecte,
        title: entite_connecte.secteur_activite_entite_connecte,
        "data-toggle": "tooltip",
        "data-placement": "top"
      },
      on: {
        select: _vm.handleInput
      },
      scopedSlots: _vm._u([{
        key: "option",
        fn: function fn(_ref) {
          var option = _ref.option;
          return [_c("p", {
            staticClass: "multiselect-option"
          }, [_vm._v(_vm._s(option.intitule))])];
        }
      }, {
        key: "singlelabel",
        fn: function fn(_ref2) {
          var value = _ref2.value;
          return [_c("p", {
            staticClass: "multiselect-single-label",
            staticStyle: {
              overflow: "hidden"
            }
          }, [_vm._v(_vm._s(value.intitule))])];
        }
      }], null, true),
      model: {
        value: entite_connecte.secteur_activite_entite_connecte,
        callback: function callback($$v) {
          _vm.$set(entite_connecte, "secteur_activite_entite_connecte", $$v);
        },
        expression: "entite_connecte.secteur_activite_entite_connecte"
      }
    }), _vm._v(" "), _vm.secteurs_activites == "" || _vm.secteurs_activites.length == 0 ? _c("span", {
      staticClass: "spinner-border spinner-border spinner-custom-input",
      staticStyle: {
        "margin-right": "17px"
      }
    }) : _vm._e()], 1)]), _vm._v(" "), _c("td", [_c("textarea", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: entite_connecte.pourcentage_detention,
        expression: "\n                                            entite_connecte.pourcentage_detention"
      }],
      staticClass: "form-control",
      attrs: {
        rows: "1",
        id: "pourcentage_detention"
      },
      domProps: {
        value: entite_connecte.pourcentage_detention
      },
      on: {
        input: [function ($event) {
          if ($event.target.composing) return;
          _vm.$set(entite_connecte, "pourcentage_detention", $event.target.value);
        }, _vm.handleInput]
      }
    })]), _vm._v(" "), _c("td", [_c("textarea", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: entite_connecte.commentaire_historique_du_groupe,
        expression: "\n                                            entite_connecte.commentaire_historique_du_groupe"
      }],
      staticClass: "form-control",
      attrs: {
        rows: "1",
        id: "commentaire_historique_du_groupe"
      },
      domProps: {
        value: entite_connecte.commentaire_historique_du_groupe
      },
      on: {
        input: [function ($event) {
          if ($event.target.composing) return;
          _vm.$set(entite_connecte, "commentaire_historique_du_groupe", $event.target.value);
        }, _vm.handleInput]
      }
    })]), _vm._v(" "), _c("td", [_c("textarea", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: entite_connecte.commentaire_indicateur_financier,
        expression: "\n                                            entite_connecte.commentaire_indicateur_financier"
      }],
      staticClass: "form-control",
      attrs: {
        rows: "1",
        id: "commentaire_indicateur_financier"
      },
      domProps: {
        value: entite_connecte.commentaire_indicateur_financier
      },
      on: {
        input: [function ($event) {
          if ($event.target.composing) return;
          _vm.$set(entite_connecte, "commentaire_indicateur_financier", $event.target.value);
        }, _vm.handleInput]
      }
    })]), _vm._v(" "), _c("td", {
      staticClass: "col-2 d-flex vertical-middle"
    }, [_c("div", {
      staticClass: "d-flex align-items-center"
    }, [_c("div", [(entite_connecte === null || entite_connecte === void 0 ? void 0 : entite_connecte.files) > 0 ? _c("span", {
      staticClass: "p-1 px-2 mx-2 text-nowrap",
      staticStyle: {
        "background-color": "rgb(44, 62, 80)",
        color: "white",
        "font-size": "13px",
        "border-radius": "5px",
        "margin-left": "0 !important",
        width: "150px"
      }
    }, [_vm._v("\n                                                    " + _vm._s((entite_connecte === null || entite_connecte === void 0 ? void 0 : entite_connecte.files) > 0 ? (entite_connecte === null || entite_connecte === void 0 ? void 0 : entite_connecte.files) + " fichier(s) uploadé(s)" : "") + "\n                                                ")]) : _vm._e()]), _vm._v(" "), _c("div", [_c("button", {
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
          return _vm.handleDoubleClickOrClick($event, index);
        }
      }
    }, [_c("i", {
      staticClass: "icofont-attachment"
    })])])])]), _vm._v(" "), index == 0 ? _c("td", [_c("button", {
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
        title: "Ajouter une nouvelle matière première"
      },
      on: {
        click: function click($event) {
          return _vm.addMore3();
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
        title: "Supprimer"
      },
      on: {
        click: function click($event) {
          return _vm.remove3(index);
        }
      }
    }, [_c("trash-icon", {
      staticClass: "custom-class",
      attrs: {
        size: "21"
      }
    })], 1)])]);
  }), 0)]) : _vm._e()]), _vm._v(" "), _c("div", {
    staticClass: "card-body mb-5"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-md-12 m-0"
  }, [_vm._m(1), _vm._v(" "), _c("vue-editor", {
    staticClass: "m-0",
    attrs: {
      id: "bref_historique"
    },
    on: {
      "update-value": function updateValue($event) {
        _vm.formDataToBeWatched[$event[0]] = $event[1];
      }
    },
    model: {
      value: _vm.formDataToBeWatched.commentaire,
      callback: function callback($$v) {
        _vm.$set(_vm.formDataToBeWatched, "commentaire", $$v);
      },
      expression: "\n                                    formDataToBeWatched.commentaire\n                                "
    }
  })], 1)])]), _vm._v(" "), _c("button", {
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
      id: "f12-head"
    }
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col"
  }, [_vm._v("\n                            " + _vm._s(_vm.tb_display_name) + " : Présentation du groupe (le cas échéant)\n                        ")]), _vm._v(" "), _c("div", {
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
  })], 1)])])])])], 1), _vm._v(" "), _c("ketri-modal", {
    attrs: {
      name: "instruction_presentation_groupe",
      images: ["/images/capture_afg/instructions/presentation_groupe.png"],
      title: "Instruction"
    }
  }), _vm._v(" "), _c("note-modal", {
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
    staticClass: "text-center bg-grey"
  }, [_c("td", {
    staticClass: "fs-6",
    attrs: {
      colspan: "8"
    }
  }, [_vm._v("Liste des entreprises appartenant au groupe")])]), _vm._v(" "), _c("tr", [_c("th", {
    staticStyle: {
      "min-width": "250px"
    }
  }, [_c("label", {
    staticClass: "form-label"
  }, [_vm._v("Raison sociale\n                                            "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })])]), _vm._v(" "), _c("th", [_c("label", {
    staticClass: "form-label"
  }, [_vm._v("Domaine d’intervention"), _c("span", {
    staticStyle: {
      color: "red"
    }
  })])]), _vm._v(" "), _c("th", {
    staticStyle: {
      "min-width": "250px"
    }
  }, [_c("label", {
    staticClass: "form-label"
  }, [_vm._v("Actionnariat"), _c("span", {
    staticStyle: {
      color: "red"
    }
  })])]), _vm._v(" "), _c("th", {
    staticStyle: {
      "min-width": "250px"
    }
  }, [_c("label", {
    staticClass: "form-label"
  }, [_vm._v("Historique du groupe"), _c("span", {
    staticStyle: {
      color: "red"
    }
  })])]), _vm._v(" "), _c("th", {
    staticStyle: {
      "min-width": "250px"
    }
  }, [_c("label", {
    staticClass: "form-label"
  }, [_vm._v("Principaux indicateurs financiers du groupe\n                                            "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })])]), _vm._v(" "), _c("th", {
    staticStyle: {
      "min-width": "100px"
    }
  }, [_c("label", {
    staticClass: "form-label"
  }, [_vm._v("Organigramme du groupe"), _c("span", {
    staticStyle: {
      color: "red"
    }
  })])])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", [_c("b", [_vm._v("Présentation détaillée du groupe ")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/memorandum/F10.vue?vue&type=style&index=0&id=7ec3d705&lang=css&scoped=true":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/memorandum/F10.vue?vue&type=style&index=0&id=7ec3d705&lang=css&scoped=true ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n*[data-v-7ec3d705] {\r\n    font-family: \"Google sans\";\n}\nlabel[data-v-7ec3d705] {\r\n    height: 10px;\r\n    font-size: 13px;\n}\ntd input[data-v-7ec3d705],\r\nselect[data-v-7ec3d705],\r\ntextarea[data-v-7ec3d705] {\r\n    height: 35px;\r\n    border-color: #34495e;\r\n    color: #57606f;\r\n    font-size: 13px;\r\n    font-weight: bold;\n}\n.card-width-height[data-v-7ec3d705] {\r\n    width: 100%;\r\n    height: 100%;\n}\n.head[data-v-7ec3d705] {\r\n    color: #f1f2f6;\r\n    font-size: 22px;\n}\n.hdc[data-v-7ec3d705] {\r\n    background-color: #57606f;\n}\n.imageM22[data-v-7ec3d705] {\r\n    background: url(\"/images/capture_cofina/exemple_source_revenus.png\") no-repeat;\r\n    background-position: center;\r\n    background-size: contain;\r\n    width: 1000px;\r\n    height: 200px;\n}\ntd[data-v-7ec3d705],\r\np[data-v-7ec3d705] {\r\n    font-size: 13px;\n}\n.badge-sm[data-v-7ec3d705] {\r\n    display: inline-block;\r\n    width: 15px;\r\n    height: 15px;\r\n    background: rgba(255, 0, 0, 0.882);\r\n    color: white;\r\n    font-size: 12px;\r\n    font-weight: 500;\r\n    border-radius: 100%;\r\n    position: absolute;\r\n    top: -20%;\r\n    left: 55%;\r\n    text-align: center;\n}\n.relook-header[data-v-7ec3d705] {\r\n    color: #000;\r\n    background-color: #f4f3f3;\r\n    padding: 5px;\r\n    border-bottom: 1px solid #b6b8bb;\n}\n.width-100[data-v-7ec3d705] {\r\n    width: 90%;\n}\n.personne input[data-v-7ec3d705] {\r\n    width: 135px;\n}\n.image1[data-v-7ec3d705] {\r\n    background: url(\"/images/capture/exemples/qualite_de_la_maison.png\")\r\n        no-repeat;\r\n    background-position: center;\r\n    background-size: contain;\r\n\r\n    width: 500px;\r\n    height: 300px;\n}\n.multiselect-option p[data-v-7ec3d705] {\r\n    margin: 0 !important;\r\n    padding: 10px !important;\n}\ntbody[data-v-7ec3d705], td[data-v-7ec3d705], tfoot[data-v-7ec3d705], th[data-v-7ec3d705], thead[data-v-7ec3d705], tr[data-v-7ec3d705] {\r\n    border-color: inherit;\r\n    border-style: none;\r\n    border-width: 0;\n}\r\n\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/memorandum/F10.vue?vue&type=style&index=0&id=7ec3d705&lang=css&scoped=true":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/memorandum/F10.vue?vue&type=style&index=0&id=7ec3d705&lang=css&scoped=true ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_F10_vue_vue_type_style_index_0_id_7ec3d705_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./F10.vue?vue&type=style&index=0&id=7ec3d705&lang=css&scoped=true */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/memorandum/F10.vue?vue&type=style&index=0&id=7ec3d705&lang=css&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_F10_vue_vue_type_style_index_0_id_7ec3d705_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_F10_vue_vue_type_style_index_0_id_7ec3d705_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/forms/afg/memorandum/F10.vue":
/*!**************************************************************!*\
  !*** ./resources/js/components/forms/afg/memorandum/F10.vue ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _F10_vue_vue_type_template_id_7ec3d705_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./F10.vue?vue&type=template&id=7ec3d705&scoped=true */ "./resources/js/components/forms/afg/memorandum/F10.vue?vue&type=template&id=7ec3d705&scoped=true");
/* harmony import */ var _F10_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./F10.vue?vue&type=script&lang=js */ "./resources/js/components/forms/afg/memorandum/F10.vue?vue&type=script&lang=js");
/* harmony import */ var _F10_vue_vue_type_style_index_0_id_7ec3d705_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./F10.vue?vue&type=style&index=0&id=7ec3d705&lang=css&scoped=true */ "./resources/js/components/forms/afg/memorandum/F10.vue?vue&type=style&index=0&id=7ec3d705&lang=css&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _F10_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _F10_vue_vue_type_template_id_7ec3d705_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _F10_vue_vue_type_template_id_7ec3d705_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "7ec3d705",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/forms/afg/memorandum/F10.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/forms/afg/memorandum/F10.vue?vue&type=script&lang=js":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/forms/afg/memorandum/F10.vue?vue&type=script&lang=js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_F10_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./F10.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/memorandum/F10.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_F10_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/forms/afg/memorandum/F10.vue?vue&type=style&index=0&id=7ec3d705&lang=css&scoped=true":
/*!**********************************************************************************************************************!*\
  !*** ./resources/js/components/forms/afg/memorandum/F10.vue?vue&type=style&index=0&id=7ec3d705&lang=css&scoped=true ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_F10_vue_vue_type_style_index_0_id_7ec3d705_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./F10.vue?vue&type=style&index=0&id=7ec3d705&lang=css&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/memorandum/F10.vue?vue&type=style&index=0&id=7ec3d705&lang=css&scoped=true");


/***/ }),

/***/ "./resources/js/components/forms/afg/memorandum/F10.vue?vue&type=template&id=7ec3d705&scoped=true":
/*!********************************************************************************************************!*\
  !*** ./resources/js/components/forms/afg/memorandum/F10.vue?vue&type=template&id=7ec3d705&scoped=true ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_F10_vue_vue_type_template_id_7ec3d705_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_F10_vue_vue_type_template_id_7ec3d705_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_F10_vue_vue_type_template_id_7ec3d705_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./F10.vue?vue&type=template&id=7ec3d705&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/memorandum/F10.vue?vue&type=template&id=7ec3d705&scoped=true");


/***/ })

}]);