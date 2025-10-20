"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_shared_afg_Garantie_GarantieTable_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/PhoneInput.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/PhoneInput.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    isDisabled: Boolean,
    indicatif: String,
    number: String
  },
  data: function data() {
    return {
      query: this.indicatif || '+',
      indicatifData: this.indicatif || '+',
      numberData: this.number || '',
      phoneNumber: '',
      opened: false,
      stayOpened: false,
      filteredItems: [],
      items: [{
        flag: "",
        indicatif: "+93"
      },
      // Afghanistan
      {
        flag: "",
        indicatif: "+27"
      },
      // South Africa
      {
        flag: "",
        indicatif: "+355"
      },
      // Albania
      {
        flag: "",
        indicatif: "+213"
      },
      // Algeria
      {
        flag: "",
        indicatif: "+49"
      },
      // Germany
      {
        flag: "",
        indicatif: "+376"
      },
      // Andorra
      {
        flag: "",
        indicatif: "+244"
      },
      // Angola
      {
        flag: "",
        indicatif: "+1264"
      },
      // Anguilla
      {
        flag: "",
        indicatif: "+1268"
      },
      // Antigua and Barbuda
      {
        flag: "",
        indicatif: "+966"
      },
      // Saudi Arabia
      {
        flag: "",
        indicatif: "+54"
      },
      // Argentina
      {
        flag: "",
        indicatif: "+374"
      },
      // Armenia
      {
        flag: "",
        indicatif: "+297"
      },
      // Aruba
      {
        flag: "",
        indicatif: "+247"
      },
      // Ascension Island
      {
        flag: "",
        indicatif: "+61"
      },
      // Australia
      {
        flag: "",
        indicatif: "+43"
      },
      // Austria
      {
        flag: "",
        indicatif: "+994"
      },
      // Azerbaijan
      {
        flag: "",
        indicatif: "+1242"
      },
      // Bahamas
      {
        flag: "",
        indicatif: "+973"
      },
      // Bahrain
      {
        flag: "",
        indicatif: "+880"
      },
      // Bangladesh
      {
        flag: "",
        indicatif: "+1246"
      },
      // Barbados
      {
        flag: "",
        indicatif: "+32"
      },
      // Belgium
      {
        flag: "",
        indicatif: "+501"
      },
      // Belize
      {
        flag: "",
        indicatif: "+229"
      },
      // Benin
      {
        flag: "",
        indicatif: "+1441"
      },
      // Bermuda
      {
        flag: "",
        indicatif: "+975"
      },
      // Bhutan
      {
        flag: "",
        indicatif: "+375"
      },
      // Belarus
      {
        flag: "",
        indicatif: "+95"
      },
      // Myanmar
      {
        flag: "",
        indicatif: "+591"
      },
      // Bolivia
      {
        flag: "",
        indicatif: "+387"
      },
      // Bosnia and Herzegovina
      {
        flag: "",
        indicatif: "+267"
      },
      // Botswana
      {
        flag: "",
        indicatif: "+55"
      },
      // Brazil
      {
        flag: "",
        indicatif: "+673"
      },
      // Brunei
      {
        flag: "",
        indicatif: "+359"
      },
      // Bulgaria
      {
        flag: "",
        indicatif: "+226"
      },
      // Burkina Faso
      {
        flag: "",
        indicatif: "+257"
      },
      // Burundi
      {
        flag: "",
        indicatif: "+855"
      },
      // Cambodia
      {
        flag: "",
        indicatif: "+237"
      },
      // Cameroon
      {
        flag: "",
        indicatif: "+1"
      },
      // Canada
      {
        flag: "",
        indicatif: "+238"
      },
      // Cape Verde
      {
        flag: "",
        indicatif: "+1345"
      },
      // Cayman Islands
      {
        flag: "",
        indicatif: "+236"
      },
      // Central African Republic
      {
        flag: "",
        indicatif: "+56"
      },
      // Chile
      {
        flag: "",
        indicatif: "+86"
      },
      // China
      {
        flag: "",
        indicatif: "+357"
      },
      // Cyprus
      {
        flag: "",
        indicatif: "+57"
      },
      // Colombia
      {
        flag: "",
        indicatif: "+269"
      },
      // Comoros
      {
        flag: "",
        indicatif: "+243"
      },
      // Democratic Republic of the Congo
      {
        flag: "",
        indicatif: "+242"
      },
      // Republic of the Congo
      {
        flag: "",
        indicatif: "+682"
      },
      // Cook Islands
      {
        flag: "",
        indicatif: "+850"
      },
      // North Korea
      {
        flag: "",
        indicatif: "+82"
      },
      // South Korea
      {
        flag: "",
        indicatif: "+506"
      },
      // Costa Rica
      {
        flag: "",
        indicatif: "+225"
      },
      // Côte d'Ivoire
      {
        flag: "",
        indicatif: "+385"
      },
      // Croatia
      {
        flag: "",
        indicatif: "+53"
      },
      // Cuba
      {
        flag: "",
        indicatif: "+599"
      },
      // Curaçao
      {
        flag: "",
        indicatif: "+45"
      },
      // Denmark
      {
        flag: "",
        indicatif: "+246"
      },
      // British Indian Ocean Territory
      {
        flag: "",
        indicatif: "+253"
      },
      // Djibouti
      {
        flag: "",
        indicatif: "+1767"
      },
      // Dominica
      {
        flag: "",
        indicatif: "+20"
      },
      // Egypt
      {
        flag: "",
        indicatif: "+971"
      },
      // United Arab Emirates
      {
        flag: "",
        indicatif: "+593"
      },
      // Ecuador
      {
        flag: "",
        indicatif: "+291"
      },
      // Eritrea
      {
        flag: "",
        indicatif: "+34"
      },
      // Spain
      {
        flag: "",
        indicatif: "+372"
      },
      // Estonia
      {
        flag: "",
        indicatif: "+251"
      },
      // Ethiopia
      {
        flag: "",
        indicatif: "+298"
      },
      // Faroe Islands
      {
        flag: "",
        indicatif: "+679"
      },
      // Fiji
      {
        flag: "",
        indicatif: "+358"
      },
      // Finland
      {
        flag: "",
        indicatif: "+33"
      },
      // France
      {
        flag: "",
        indicatif: "+241"
      },
      // Gabon
      {
        flag: "",
        indicatif: "+220"
      },
      // The Gambia
      {
        flag: "",
        indicatif: "+995"
      },
      // Georgia
      {
        flag: "",
        indicatif: "+233"
      },
      // Ghana
      {
        flag: "",
        indicatif: "+350"
      },
      // Gibraltar
      {
        flag: "",
        indicatif: "+30"
      },
      // Greece
      {
        flag: "",
        indicatif: "+1473"
      },
      // Grenada
      {
        flag: "",
        indicatif: "+299"
      },
      // Greenland
      {
        flag: "",
        indicatif: "+590"
      },
      // Guadeloupe
      {
        flag: "",
        indicatif: "+1671"
      },
      // Guam
      {
        flag: "",
        indicatif: "+502"
      },
      // Guatemala
      {
        flag: "",
        indicatif: "+224"
      },
      // Guinea
      {
        flag: "",
        indicatif: "+240"
      },
      // Equatorial Guinea
      {
        flag: "",
        indicatif: "+245"
      },
      // Guinea-Bissau
      {
        flag: "",
        indicatif: "+592"
      },
      // Guyana
      {
        flag: "",
        indicatif: "+594"
      },
      // French Guiana
      {
        flag: "",
        indicatif: "+509"
      },
      // Haiti
      {
        flag: "",
        indicatif: "+504"
      },
      // Honduras
      {
        flag: "",
        indicatif: "+852"
      },
      // Hong Kong
      {
        flag: "",
        indicatif: "+36"
      },
      // Hungary
      {
        flag: "",
        indicatif: "+91"
      },
      // India
      {
        flag: "",
        indicatif: "+62"
      },
      // Indonesia
      {
        flag: "",
        indicatif: "+964"
      },
      // Iraq
      {
        flag: "",
        indicatif: "+98"
      },
      // Iran
      {
        flag: "",
        indicatif: "+353"
      },
      // Ireland
      {
        flag: "",
        indicatif: "+354"
      },
      // Iceland
      {
        flag: "",
        indicatif: "+972"
      },
      // Israel
      {
        flag: "",
        indicatif: "+39"
      },
      // Italy
      {
        flag: "",
        indicatif: "+1876"
      },
      // Jamaica
      {
        flag: "",
        indicatif: "+81"
      },
      // Japan
      {
        flag: "",
        indicatif: "+962"
      },
      // Jordan
      {
        flag: "",
        indicatif: "+7"
      },
      // Kazakhstan
      {
        flag: "",
        indicatif: "+254"
      },
      // Kenya
      {
        flag: "",
        indicatif: "+996"
      },
      // Kyrgyzstan
      {
        flag: "",
        indicatif: "+686"
      },
      // Kiribati
      {
        flag: "",
        indicatif: "+383"
      },
      // Kosovo
      {
        flag: "",
        indicatif: "+965"
      },
      // Kuwait
      {
        flag: "",
        indicatif: "+856"
      },
      // Laos
      {
        flag: "",
        indicatif: "+266"
      },
      // Lesotho
      {
        flag: "",
        indicatif: "+371"
      },
      // Latvia
      {
        flag: "",
        indicatif: "+961"
      },
      // Lebanon
      {
        flag: "",
        indicatif: "+231"
      },
      // Liberia
      {
        flag: "",
        indicatif: "+218"
      },
      // Libya
      {
        flag: "",
        indicatif: "+423"
      },
      // Liechtenstein
      {
        flag: "",
        indicatif: "+370"
      },
      // Lithuania
      {
        flag: "",
        indicatif: "+352"
      },
      // Luxembourg
      {
        flag: "",
        indicatif: "+853"
      },
      // Macau
      {
        flag: "",
        indicatif: "+389"
      },
      // North Macedonia
      {
        flag: "",
        indicatif: "+261"
      },
      // Madagascar
      {
        flag: "",
        indicatif: "+60"
      },
      // Malaysia
      {
        flag: "",
        indicatif: "+265"
      },
      // Malawi
      {
        flag: "",
        indicatif: "+960"
      },
      // Maldives
      {
        flag: "",
        indicatif: "+223"
      },
      // Mali
      {
        flag: "",
        indicatif: "+500"
      },
      // Falkland Islands
      {
        flag: "",
        indicatif: "+356"
      },
      // Malta
      {
        flag: "",
        indicatif: "+1670"
      },
      // Northern Mariana Islands
      {
        flag: "",
        indicatif: "+212"
      },
      // Morocco
      {
        flag: "",
        indicatif: "+692"
      },
      // Marshall Islands
      {
        flag: "",
        indicatif: "+596"
      },
      // Martinique
      {
        flag: "",
        indicatif: "+230"
      },
      // Mauritius
      {
        flag: "",
        indicatif: "+222"
      },
      // Mauritania
      {
        flag: "",
        indicatif: "+262"
      },
      // Mayotte/Reunion
      {
        flag: "",
        indicatif: "+52"
      },
      // Mexico
      {
        flag: "",
        indicatif: "+691"
      },
      // Micronesia
      {
        flag: "",
        indicatif: "+373"
      },
      // Moldova
      {
        flag: "",
        indicatif: "+377"
      },
      // Monaco
      {
        flag: "",
        indicatif: "+976"
      },
      // Mongolia
      {
        flag: "",
        indicatif: "+382"
      },
      // Montenegro
      {
        flag: "",
        indicatif: "+1664"
      },
      // Montserrat
      {
        flag: "",
        indicatif: "+258"
      },
      // Mozambique
      {
        flag: "",
        indicatif: "+264"
      },
      // Namibia
      {
        flag: "",
        indicatif: "+674"
      },
      // Nauru
      {
        flag: "",
        indicatif: "+977"
      },
      // Nepal
      {
        flag: "",
        indicatif: "+505"
      },
      // Nicaragua
      {
        flag: "",
        indicatif: "+227"
      },
      // Niger
      {
        flag: "",
        indicatif: "+234"
      },
      // Nigeria
      {
        flag: "",
        indicatif: "+683"
      },
      // Niue
      {
        flag: "",
        indicatif: "+47"
      },
      // Norway
      {
        flag: "",
        indicatif: "+687"
      },
      // New Caledonia
      {
        flag: "",
        indicatif: "+64"
      },
      // New Zealand
      {
        flag: "",
        indicatif: "+968"
      },
      // Oman
      {
        flag: "",
        indicatif: "+256"
      },
      // Uganda
      {
        flag: "",
        indicatif: "+998"
      },
      // Uzbekistan
      {
        flag: "",
        indicatif: "+92"
      },
      // Pakistan
      {
        flag: "",
        indicatif: "+680"
      },
      // Palau
      {
        flag: "",
        indicatif: "+970"
      },
      // Palestine
      {
        flag: "",
        indicatif: "+507"
      },
      // Panama
      {
        flag: "",
        indicatif: "+675"
      },
      // Papua New Guinea
      {
        flag: "",
        indicatif: "+595"
      },
      // Paraguay
      {
        flag: "",
        indicatif: "+31"
      },
      // Netherlands
      {
        flag: "",
        indicatif: "+51"
      },
      // Peru
      {
        flag: "",
        indicatif: "+63"
      },
      // Philippines
      {
        flag: "",
        indicatif: "+48"
      },
      // Poland
      {
        flag: "",
        indicatif: "+689"
      },
      // French Polynesia
      {
        flag: "",
        indicatif: "+351"
      },
      // Portugal
      {
        flag: "",
        indicatif: "+974"
      },
      // Qatar
      {
        flag: "",
        indicatif: "+40"
      },
      // Romania
      {
        flag: "",
        indicatif: "+44"
      },
      // United Kingdom
      {
        flag: "",
        indicatif: "+250"
      },
      // Rwanda
      {
        flag: "",
        indicatif: "+1869"
      },
      // Saint Kitts and Nevis
      {
        flag: "",
        indicatif: "+290"
      },
      // Saint Helena
      {
        flag: "",
        indicatif: "+1758"
      },
      // Saint Lucia
      {
        flag: "",
        indicatif: "+378"
      },
      // San Marino
      {
        flag: "",
        indicatif: "+508"
      },
      // Saint Pierre and Miquelon
      {
        flag: "",
        indicatif: "+1784"
      },
      // Saint Vincent and the Grenadines
      {
        flag: "",
        indicatif: "+677"
      },
      // Solomon Islands
      {
        flag: "",
        indicatif: "+503"
      },
      // El Salvador
      {
        flag: "",
        indicatif: "+685"
      },
      // Samoa
      {
        flag: "",
        indicatif: "+1684"
      },
      // American Samoa
      {
        flag: "",
        indicatif: "+239"
      },
      // São Tomé and Príncipe
      {
        flag: "",
        indicatif: "+221"
      },
      // Senegal
      {
        flag: "",
        indicatif: "+381"
      },
      // Serbia
      {
        flag: "",
        indicatif: "+248"
      },
      // Seychelles
      {
        flag: "",
        indicatif: "+232"
      },
      // Sierra Leone
      {
        flag: "",
        indicatif: "+65"
      },
      // Singapore
      {
        flag: "",
        indicatif: "+421"
      },
      // Slovakia
      {
        flag: "",
        indicatif: "+386"
      },
      // Slovenia
      {
        flag: "",
        indicatif: "+252"
      },
      // Somalia
      {
        flag: "",
        indicatif: "+249"
      },
      // Sudan
      {
        flag: "",
        indicatif: "+211"
      },
      // South Sudan
      {
        flag: "",
        indicatif: "+94"
      },
      // Sri Lanka
      {
        flag: "",
        indicatif: "+46"
      },
      // Sweden
      {
        flag: "",
        indicatif: "+41"
      },
      // Switzerland
      {
        flag: "",
        indicatif: "+597"
      },
      // Suriname
      {
        flag: "",
        indicatif: "+268"
      },
      // Eswatini
      {
        flag: "",
        indicatif: "+963"
      },
      // Syria
      {
        flag: "",
        indicatif: "+992"
      },
      // Tajikistan
      {
        flag: "",
        indicatif: "+255"
      },
      // Tanzania
      {
        flag: "",
        indicatif: "+886"
      },
      // Taiwan
      {
        flag: "",
        indicatif: "+235"
      },
      // Chad
      {
        flag: "",
        indicatif: "+420"
      },
      // Czech Republic
      {
        flag: "",
        indicatif: "+672"
      },
      // Christmas Island
      {
        flag: "",
        indicatif: "+66"
      },
      // Thailand
      {
        flag: "",
        indicatif: "+670"
      },
      // East Timor
      {
        flag: "",
        indicatif: "+228"
      },
      // Togo
      {
        flag: "",
        indicatif: "+690"
      },
      // Tokelau
      {
        flag: "",
        indicatif: "+676"
      },
      // Tonga
      {
        flag: "",
        indicatif: "+1868"
      },
      // Trinidad and Tobago
      {
        flag: "",
        indicatif: "+216"
      },
      // Tunisia
      {
        flag: "",
        indicatif: "+993"
      },
      // Turkmenistan
      {
        flag: "",
        indicatif: "+1649"
      },
      // Turks and Caicos Islands
      {
        flag: "",
        indicatif: "+90"
      },
      // Turkey
      {
        flag: "",
        indicatif: "+688"
      },
      // Tuvalu
      {
        flag: "",
        indicatif: "+380"
      },
      // Ukraine
      {
        flag: "",
        indicatif: "+598"
      },
      // Uruguay
      {
        flag: "",
        indicatif: "+678"
      },
      // Vanuatu
      {
        flag: "",
        indicatif: "+58"
      },
      // Venezuela
      {
        flag: "",
        indicatif: "+1340"
      },
      // U.S. Virgin Islands
      {
        flag: "",
        indicatif: "+1284"
      },
      // British Virgin Islands
      {
        flag: "",
        indicatif: "+84"
      },
      // Vietnam
      {
        flag: "",
        indicatif: "+681"
      },
      // Wallis and Futuna
      {
        flag: "",
        indicatif: "+967"
      },
      // Yemen
      {
        flag: "",
        indicatif: "+260"
      },
      // Zambia
      {
        flag: "",
        indicatif: "+263"
      } // Zimbabwe
      ]
    };
  },
  created: function created() {
    var _this = this;
    this.filterItems();
    // Initialize EventBus listener
    this.$on("tb-pcp1", function (data) {
      console.log("NUMBER", data);
      _this.numberData = _this.number || '';
      _this.indicatifData = _this.indicatif || '+';
      _this.query = _this.indicatif || '+';
      _this.filterItems();
    });
  },
  methods: {
    onUpdate: function onUpdate(v) {
      this.query = v;
      this.indicatifData = v;
      this.opened = false;
      this.stayOpened = false;
      this.$emit('update:indicatif', v);
    },
    filterItems: function filterItems() {
      if (!this.query) {
        this.filteredItems = this.items;
      } else {
        var search = this.query.toLowerCase().replace('+', '');
        this.filteredItems = this.items.filter(function (item) {
          return item.indicatif.toLowerCase().includes(search);
        });
      }
    }
  },
  watch: {
    indicatifData: function indicatifData(newVal) {
      this.phoneNumber = "".concat(newVal, " ").concat(this.numberData).trim();
      this.$emit('updatephone', this.phoneNumber);
    },
    numberData: function numberData(newVal) {
      if (newVal === undefined || newVal === null) {
        this.numberData = '';
        return;
      }
      if (newVal.length > 10) {
        this.numberData = newVal.slice(0, 10);
      }
      this.phoneNumber = "".concat(this.indicatifData || '+', " ").concat(this.numberData).trim();
      //   console.log('Emitting phoneNumber from numberData:', this.phoneNumber);
      this.$emit('updatephone', this.phoneNumber);
    },
    // numberData(newVal) {
    //   // Guard against undefined or null
    //   if (newVal === undefined || newVal === null) {
    //     this.numberData = '';
    //     return;
    //   }
    //   if (newVal.length > 10) {
    //     this.numberData = newVal.slice(0, 10);
    //   }
    //   this.phoneNumber = `${this.indicatifData} ${this.numberData}`.trim();
    //   this.$emit('updatephone', this.phoneNumber);
    // },
    query: function query(newVal) {
      var regex = /^\+?\d{0,4}$/;
      if (!regex.test(newVal)) {
        this.query = '+';
      }
      this.filterItems();
    },
    indicatif: function indicatif(newVal) {
      this.indicatifData = newVal || '+';
      this.query = newVal || '+';
      this.filterItems();
    },
    number: function number(newVal) {
      // Ensure numberData is always a string
      this.numberData = newVal || '';
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/Garantie/GarantieTable.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/Garantie/GarantieTable.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");
/* harmony import */ var _vueform_multiselect_dist_multiselect_vue2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vueform/multiselect/dist/multiselect.vue2 */ "./node_modules/@vueform/multiselect/dist/multiselect.vue2.js");
/* harmony import */ var _PhoneInput_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../PhoneInput.vue */ "./resources/js/components/shared/PhoneInput.vue");
/* harmony import */ var _services_afg_garantie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/afg/garantie.service */ "./resources/js/services/afg/garantie.service.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }




var propsFactory = function propsFactory() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return _objectSpread({
    info: {
      type: Object
    },
    index: {
      type: Number
    },
    field: {
      type: String
    },
    disabled: {
      type: Boolean,
      "default": false
    },
    accentColor: {
      type: String,
      "default": ''
    }
  }, props);
};
var __default__ = {
  name: "GarantieTable",
  components: {
    MoreVerticalIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_3__.MoreVerticalIcon,
    ChevronUpIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_3__.ChevronUpIcon,
    ChevronDownIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_3__.ChevronDownIcon,
    PlusIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_3__.PlusIcon,
    TrashIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_3__.TrashIcon,
    AirplayIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_3__.AirplayIcon,
    Multiselect: _vueform_multiselect_dist_multiselect_vue2__WEBPACK_IMPORTED_MODULE_0__["default"],
    PhoneInput: _PhoneInput_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    SelectInput: {
      // props: ["info", "index", "field", "options", "disabled"],
      props: propsFactory({
        options: {
          type: Array,
          "default": function _default() {
            return [];
          }
        }
      }),
      template: "\n        <select\n          class=\"form-select\"\n          v-model=\"info[field]\"\n          :id=\"'type_facilite_' + index\"\n          @change=\"$emit('input', $event.target.value)\"\n          style=\"width: 250px;\"\n          :class=\"{ 'equipe': disabled, 'to-be-accent': Boolean(accentColor), }\"\n        >\n          <option disabled selected value=\"\">--S\xE9lectionner une option--</option>\n          <option\n            v-for=\"(option, optIndex) in options\"\n            :key=\"optIndex\"\n            :value=\"option.value || option\"\n          >\n            {{ option.label || option }}\n          </option>\n        </select>\n      "
    },
    TextInput: {
      // props: ["info", "index", "field", "placeholder", "disabled"],
      props: propsFactory({
        placeholder: {
          type: String,
          "default": ""
        }
      }),
      template: "\n        <input\n          class=\"form-control\"\n          type=\"text\"\n          v-model=\"info[field]\"\n          :placeholder=\"placeholder\"\n          @change=\"$emit('input', $event.target.value)\"\n          style=\"width: 250px;\"\n          :class=\"{ 'equipe': disabled, 'to-be-accent': Boolean(accentColor), }\"\n        />\n      "
    },
    CurrencyInput: {
      // props: ["info", "index", "field", "placeholder", "disabled"],
      props: propsFactory({
        placeholder: {
          type: String,
          "default": ""
        }
      }),
      template: "\n        <currency-input\n          class=\"form-control\"\n          v-model=\"info[field]\"\n          :default-typing=\"false\"\n          :placeholder=\"placeholder\"\n          @change=\"$emit('input', $event)\"\n          style=\"width: 250px;\"\n          :class=\"{ 'equipe': disabled, 'to-be-accent': Boolean(accentColor), }\"\n        />\n      "
    },
    DateInput: {
      // props: ["info", "index", "field", "disabled"],
      props: propsFactory(),
      template: "\n        <date-input\n          :value=\"info[field]\"\n          @input=\"$emit('input', $event[1])\"\n          style=\"width: 250px;\"\n          :background=\"Boolean(accentColor) ? 'background: ' + accentColor : 'background: inherit'\"\n          :class=\"{ 'equipe': disabled, 'to-be-accent': Boolean(accentColor), }\"\n        />\n      "
    },
    PhoneInputField: {
      // props: ["info", "index", "field", "disabled"],
      props: propsFactory(),
      components: {
        PhoneInput: _PhoneInput_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
      },
      template: "\n        <PhoneInput\n          :indicatif=\"info[field]?.split(' ')[0] || '+'\"\n          :number=\"info[field]?.split(' ')[1] || ''\"\n          @updatephone=\"$emit('input', $event)\"\n          style=\"width: 250px;\"\n          :class=\"{ 'equipe': disabled, 'to-be-accent': Boolean(accentColor), }\"\n        />\n      "
    },
    FileInput: {
      // props: ["info", "index", "disabled"],
      props: propsFactory(),
      template: "\n        <div class=\"file-field\">\n          <div v-if=\"info.ligneCredit\" class=\"d-flex align-items-center\">\n            <span\n              v-if=\"info.files > 0\"\n              class=\"p-1 px-2 mx-2 text-nowrap\"\n              style=\"background-color: rgb(44, 62, 80); color: white; font-size: 13px; border-radius: 5px; width: 150px;\"\n            >\n              {{ info.files > 0 ? (info.files + ' fichier(s) upload\xE9(s)') : '' }}\n            </span>\n            <button\n              v-if=\"info.ligneCredit\"\n              type=\"button\"\n              class=\"btn shadow-md text-white\"\n              style=\"cursor: pointer; background: #2c3e50; width: 26px; font-size: 13px; padding: 1px;\"\n              @click=\"$emit('upload-file')\"\n              data-toggle=\"tooltip\"\n              title=\"Cliquer ici pour uploader ou voir le(s) fichier(s)\"\n            >\n              <i class=\"icofont-attachment\"></i>\n            </button>\n          </div>\n          <div v-else class=\"text-center text-danger\">\n            Aucun fichier(s) upload\xE9(s)\n          </div>\n        </div>\n      "
    },
    CheckboxInput: {
      // props: ["info", "index", "field", "disabled"],
      props: propsFactory(),
      template: "\n        <div class=\"d-flex justify-content-center\">\n          <div style=\"display: flex;\">\n            <label for=\"recueillie_oui\">Oui</label>\n            <input\n              type=\"checkbox\"\n              :checked=\"info[field] === 'Oui'\"\n              value=\"Oui\"\n              @input=\"$emit('input', $event.target.value)\"\n              :disabled=\"disabled\"\n              :class=\"{ 'to-be-accent': Boolean(accentColor), }\"\n            />\n          </div>\n          <div style=\"display: flex;\">\n            <label for=\"recueillie_non\">Non</label>\n            <input\n              type=\"checkbox\"\n              :checked=\"info[field] === 'Non'\"\n              value=\"Non\"\n              @input=\"$emit('input', $event.target.value)\"\n              :disabled=\"disabled\"\n              :class=\"{ 'to-be-accent': Boolean(accentColor), }\"\n            />\n          </div>\n        </div>\n      "
    },
    TextareaInput: {
      // props: ["info", "index", "field", "placeholder", "disabled"],
      props: propsFactory({
        placeholder: {
          type: String,
          "default": ""
        }
      }),
      template: "\n        <textarea\n          class=\"form-control\"\n          v-model=\"info[field]\"\n          :placeholder=\"placeholder\"\n          @change=\"$emit('input', $event.target.value)\"\n          style=\"width: 250px;\"\n          :class=\"{ 'equipe': disabled, 'to-be-accent': Boolean(accentColor), }\"\n        ></textarea>\n      "
    }
  },
  props: {
    byKey: {
      type: String,
      "default": ''
    },
    garantieId: {
      type: String,
      required: true
    },
    garantieName: {
      type: String,
      required: true
    },
    infos: {
      type: Array,
      required: true
    },
    facilitesSollicitees: {
      type: Array,
      required: true
    },
    comeFrom: {
      type: String,
      "default": ""
    },
    accentColor: {
      type: String,
      "default": 'inherit'
    }
  },
  data: function data() {
    return {
      defaultGarantieIds: _services_afg_garantie_service__WEBPACK_IMPORTED_MODULE_2__.GarantieService.DefaultGarantieIds,
      localInfos: [],
      columnsByGarantie: {
        avi: [{
          key: "ligneCredit",
          label: "Ligne de crédit associée",
          component: "SelectInput",
          field: "ligneCredit",
          options: this.facilitesSollicitees.map(function (opt) {
            return {
              value: opt.uuid,
              label: "".concat(opt.type_facilite, "-").concat(opt.montant_credit)
            };
          })
        }, {
          key: "montant",
          label: "Montant de la domiciliation",
          component: "CurrencyInput",
          field: "montant",
          placeholder: "Montant"
        }, {
          key: "files",
          label: "Pièce(s) jointe(s) (si nécessaire)",
          component: "FileInput",
          field: "files"
        }, {
          key: "is_recueillie",
          label: "Garantie recueillie (Oui/Non)",
          component: "CheckboxInput",
          field: "is_recueillie"
        }, {
          key: "commentaire",
          label: "Commentaire",
          component: "TextareaInput",
          field: "commentaire",
          placeholder: "Commentaire"
        }],
        assurance: [{
          key: "ligneCredit",
          label: "Ligne de crédit associée",
          component: "SelectInput",
          field: "ligneCredit",
          options: this.facilitesSollicitees.map(function (opt) {
            return {
              value: opt.uuid,
              label: "".concat(opt.type_facilite, "-").concat(opt.montant_credit)
            };
          })
        }, {
          key: "typeAssurance",
          label: "Type d'assurance",
          component: "SelectInput",
          field: "typeAssurance",
          options: _services_afg_garantie_service__WEBPACK_IMPORTED_MODULE_2__.GarantieService.AssuranceTypes
        }, {
          key: "valeurAssuree",
          label: "Montant/Hauteur de l'assurance",
          component: "CurrencyInput",
          field: "valeurAssuree",
          placeholder: "Valeur assurée"
        }, {
          key: "files",
          label: "Pièce(s) jointe(s) (si nécessaire)",
          component: "FileInput",
          field: "files"
        }, {
          key: "is_recueillie",
          label: "Garantie recueillie (Oui/Non)",
          component: "CheckboxInput",
          field: "is_recueillie"
        }, {
          key: "commentaire",
          label: "Commentaire",
          component: "TextareaInput",
          field: "commentaire",
          placeholder: "Commentaire"
        }],
        caution: [{
          key: "ligneCredit",
          label: "Ligne de crédit associée",
          component: "SelectInput",
          field: "ligneCredit",
          options: this.facilitesSollicitees.map(function (opt) {
            return {
              value: opt.uuid,
              label: "".concat(opt.type_facilite, "-").concat(opt.montant_credit)
            };
          })
        }, {
          key: "firstname",
          label: "Nom du garant/caution",
          component: "TextInput",
          field: "firstname",
          placeholder: "Nom du garant"
        }, {
          key: "lastname",
          label: "Prénom du garant/caution",
          component: "TextInput",
          field: "lastname",
          placeholder: "Prénom du garant"
        }, {
          key: "telephone",
          label: "Téléphone",
          component: "PhoneInputField",
          field: "telephone"
        }, {
          key: "valeur_caution",
          label: "Valeur de cautionnement",
          component: "CurrencyInput",
          field: "valeur_caution",
          placeholder: "Valeur de la caution"
        }, {
          key: "files",
          label: "Pièce(s) jointe(s) (si nécessaire)",
          component: "FileInput",
          field: "files"
        }, {
          key: "is_recueillie",
          label: "Garantie recueillie (Oui/Non)",
          component: "CheckboxInput",
          field: "is_recueillie"
        }, {
          key: "piece",
          label: "Pièce d'identité",
          component: "TextInput",
          field: "piece",
          placeholder: "N de la pièce"
        }, {
          key: "commentaire",
          label: "Commentaire",
          component: "TextareaInput",
          field: "commentaire",
          placeholder: "Commentaire"
        }],
        hypotheque: [{
          key: "ligneCredit",
          label: "Ligne de crédit associée",
          component: "SelectInput",
          field: "ligneCredit",
          options: this.facilitesSollicitees.map(function (opt) {
            return {
              value: opt.uuid,
              label: "".concat(opt.type_facilite, "-").concat(opt.montant_credit)
            };
          })
        }, {
          key: "bien_hypotheque",
          label: "Type d'hypothèque",
          component: "TextInput",
          field: "bien_hypotheque",
          placeholder: "Hypothèques"
        }, {
          key: "rang",
          label: "Rang de l'hypothèque",
          component: "SelectInput",
          field: "rang",
          options: ["1er rang", "2ème rang", "3ème rang"]
        }, {
          key: "proprietaire",
          label: "Nom du propriétaire",
          component: "TextInput",
          field: "proprietaire",
          placeholder: "Propriétaire"
        }, {
          key: "numero_tel",
          label: "N° du titre foncier (si nécessaire)",
          component: "TextInput",
          field: "numero_tel",
          placeholder: "N° du titre foncier"
        }, {
          key: "annee_achat",
          label: "Date d'attribution",
          component: "DateInput",
          field: "annee_achat"
        }, {
          key: "adresse_emplacement",
          label: "Adresse de l'emplacement",
          component: "TextInput",
          field: "adresse_emplacement",
          placeholder: "Adresse"
        }, {
          key: "longitude",
          label: "Longitude",
          component: "TextInput",
          field: "longitude",
          placeholder: "Longitude"
        }, {
          key: "latitude",
          label: "Latitude",
          component: "TextInput",
          field: "latitude",
          placeholder: "Latitude"
        }, {
          key: "date_evaluation",
          label: "Date d'évaluation",
          component: "DateInput",
          field: "date_evaluation"
        }, {
          key: "valeur_marchande",
          label: "Valeur marchande",
          component: "CurrencyInput",
          field: "valeur_marchande",
          placeholder: "Valeur marchande"
        }, {
          key: "valeur_considere",
          label: "Valeur considérée",
          component: "CurrencyInput",
          field: "valeur_considere",
          placeholder: "Valeur considérée"
        }, {
          key: "files",
          label: "Pièce(s) jointe(s) (si nécessaire)",
          component: "FileInput",
          field: "files"
        }, {
          key: "is_recueillie",
          label: "Garantie recueillie (Oui/Non)",
          component: "CheckboxInput",
          field: "is_recueillie"
        }],
        gage: [{
          key: "ligneCredit",
          label: "Ligne de crédit associée",
          component: "SelectInput",
          field: "ligneCredit",
          options: this.facilitesSollicitees.map(function (opt) {
            return {
              value: opt.uuid,
              label: "".concat(opt.type_facilite, "-").concat(opt.montant_credit)
            };
          })
        }, {
          key: "bienGage",
          label: "Type de bien à gagé",
          component: "TextInput",
          field: "bienGage",
          placeholder: "Description du bien"
        }, {
          key: "montant",
          label: "Montant/Valeur du gage",
          component: "CurrencyInput",
          field: "montant",
          placeholder: "Montant"
        }, {
          key: "files",
          label: "Pièce(s) jointe(s) (si nécessaire)",
          component: "FileInput",
          field: "files"
        }, {
          key: "is_recueillie",
          label: "Garantie recueillie (Oui/Non)",
          component: "CheckboxInput",
          field: "is_recueillie"
        }, {
          key: "commentaire",
          label: "Commentaire",
          component: "TextareaInput",
          field: "commentaire",
          placeholder: "Commentaire"
        }],
        "default": [{
          key: "ligneCredit",
          label: "Ligne de crédit associée",
          component: "SelectInput",
          field: "ligneCredit",
          options: this.facilitesSollicitees.map(function (opt) {
            return {
              value: opt.uuid,
              label: "".concat(opt.type_facilite, "-").concat(opt.montant_credit)
            };
          })
        }, {
          key: "description",
          label: "Description",
          component: "TextareaInput",
          field: "description",
          placeholder: "Description"
        }, {
          key: "montant",
          label: "Montant",
          component: "CurrencyInput",
          field: "montant",
          placeholder: "Montant"
        }, {
          key: "files",
          label: "Pièce(s) jointe(s) (si nécessaire)",
          component: "FileInput",
          field: "files"
        }, {
          key: "commentaire",
          label: "Commentaire",
          component: "TextareaInput",
          field: "commentaire",
          placeholder: "Commentaire"
        }, {
          key: "is_recueillie",
          label: "Garantie recueillie (Oui/Non)",
          component: "CheckboxInput",
          field: "is_recueillie"
        }]
      }
    };
  },
  computed: {
    hasNumericFields: function hasNumericFields() {
      var numericFields = {
        avi: ["montant"],
        assurance: ["valeurAssuree"],
        caution: ["valeur_caution"],
        hypotheque: ["valeur_marchande", "valeur_considere"],
        gage: ["montant"],
        divers: ["montant"],
        "default": ["montant"]
      };
      return (numericFields[this.garantieId] || numericFields["default"]).length > 0;
    },
    colspan: function colspan() {
      return (this.columnsByGarantie[this.garantieId] || this.columnsByGarantie["default"]).length + 1;
    }
  },
  watch: {
    infos: {
      immediate: true,
      deep: true,
      handler: function handler(newInfos) {
        this.localInfos = JSON.parse(JSON.stringify(newInfos));
      }
    },
    facilitesSollicitees: {
      deep: true,
      handler: function handler() {
        var _this = this;
        // Update options dynamically if facilitesSollicitees changes
        this.columnsByGarantie = _objectSpread(_objectSpread({}, this.columnsByGarantie), {}, {
          avi: this.columnsByGarantie.avi.map(function (col) {
            return col.field === "ligneCredit" ? _objectSpread(_objectSpread({}, col), {}, {
              options: _this.facilitesSollicitees.map(function (opt) {
                return {
                  value: opt.uuid,
                  label: "".concat(opt.type_facilite, "-").concat(opt.montant_credit)
                };
              })
            }) : col;
          }),
          assurance: this.columnsByGarantie.assurance.map(function (col) {
            return col.field === "ligneCredit" ? _objectSpread(_objectSpread({}, col), {}, {
              options: _this.facilitesSollicitees.map(function (opt) {
                return {
                  value: opt.uuid,
                  label: "".concat(opt.type_facilite, "-").concat(opt.montant_credit)
                };
              })
            }) : col;
          }),
          caution: this.columnsByGarantie.caution.map(function (col) {
            return col.field === "ligneCredit" ? _objectSpread(_objectSpread({}, col), {}, {
              options: _this.facilitesSollicitees.map(function (opt) {
                return {
                  value: opt.uuid,
                  label: "".concat(opt.type_facilite, "-").concat(opt.montant_credit)
                };
              })
            }) : col;
          }),
          hypotheque: this.columnsByGarantie.hypotheque.map(function (col) {
            return col.field === "ligneCredit" ? _objectSpread(_objectSpread({}, col), {}, {
              options: _this.facilitesSollicitees.map(function (opt) {
                return {
                  value: opt.uuid,
                  label: "".concat(opt.type_facilite, "-").concat(opt.montant_credit)
                };
              })
            }) : col;
          }),
          gage: this.columnsByGarantie.gage.map(function (col) {
            return col.field === "ligneCredit" ? _objectSpread(_objectSpread({}, col), {}, {
              options: _this.facilitesSollicitees.map(function (opt) {
                return {
                  value: opt.uuid,
                  label: "".concat(opt.type_facilite, "-").concat(opt.montant_credit)
                };
              })
            }) : col;
          }),
          "default": this.columnsByGarantie["default"].map(function (col) {
            return col.field === "ligneCredit" ? _objectSpread(_objectSpread({}, col), {}, {
              options: _this.facilitesSollicitees.map(function (opt) {
                return {
                  value: opt.uuid,
                  label: "".concat(opt.type_facilite, "-").concat(opt.montant_credit)
                };
              })
            }) : col;
          })
        });
      }
    }
  },
  methods: {
    handleFieldChange: function handleFieldChange(fieldName, index, value) {
      var updatedInfos = _toConsumableArray(this.localInfos);
      if (["montant", "valeurAssuree", "valeur_marchande", "valeur_considere", "valeur_caution"].includes(fieldName)) {
        updatedInfos[index][fieldName] = value ? Number(value) : null;
      } else {
        updatedInfos[index][fieldName] = value;
      }
      this.$emit("input-change", updatedInfos);
    },
    calculateTotal: function calculateTotal(fieldName) {
      return this.localInfos.reduce(function (sum, info) {
        return sum + (Number(info[fieldName]) || 0);
      }, 0);
    },
    isInfoOwner: function isInfoOwner(info) {
      // return GarantieService.isInfoOwner(info, this.authenticatedUser?.id ?? this.authenticatedUser?.user_id);
      if (!info || !this.byKey) return false;
      return info[this.byKey] === true;
    },
    whichAccentColor: function whichAccentColor(info) {
      return this.isInfoOwner(info) ? '' : this.accentColor;
    }
  }
};

var __injectCSSVars__ = function __injectCSSVars__() {
  (0,vue__WEBPACK_IMPORTED_MODULE_4__.useCssVars)(function (_vm, _setup) {
    return {
      "968ad90a-accentColor": _vm.accentColor
    };
  });
};
var __setup__ = __default__.setup;
__default__.setup = __setup__ ? function (props, ctx) {
  __injectCSSVars__();
  return __setup__(props, ctx);
} : __injectCSSVars__;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/PhoneInput.vue?vue&type=template&id=27e5a94b&scoped=true":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/PhoneInput.vue?vue&type=template&id=27e5a94b&scoped=true ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "input-group"
  }, [_c("div", {
    staticClass: "input-group-prepend d-flex w-100"
  }, [_c("div", {
    staticClass: "position-relative",
    staticStyle: {
      width: "100px",
      "border-radius": "0"
    }
  }, [_c("div", [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.query,
      expression: "query"
    }],
    staticClass: "form-control shadow-none",
    staticStyle: {
      "border-radius": "0"
    },
    attrs: {
      disabled: _vm.isDisabled,
      type: "text",
      placeholder: "+"
    },
    domProps: {
      value: _vm.query
    },
    on: {
      focusout: function focusout($event) {
        _vm.opened = false;
      },
      focusin: function focusin($event) {
        _vm.opened = true;
      },
      input: [function ($event) {
        if ($event.target.composing) return;
        _vm.query = $event.target.value;
      }, _vm.filterItems]
    }
  })]), _vm._v(" "), _vm.opened || _vm.stayOpened ? _c("div", {
    staticClass: "options w-100 bg-white shadow-sm overflow-x-hidden overflow-auto",
    staticStyle: {
      "max-height": "350px"
    }
  }, [_c("ul", {
    staticClass: "list-group border-0",
    on: {
      mouseover: function mouseover($event) {
        _vm.stayOpened = true;
      },
      mouseleave: function mouseleave($event) {
        _vm.stayOpened = false;
      }
    }
  }, _vm._l(_vm.filteredItems, function (item, index) {
    return _c("li", {
      key: index,
      staticClass: "list-group-item p-1 border-top-0 border-left-0 border-right-0",
      "class": {
        "rounded-bottom": index === _vm.filteredItems.length - 1,
        "rounded-0": index !== _vm.filteredItems.length - 1
      },
      attrs: {
        role: "button"
      },
      on: {
        click: function click($event) {
          return _vm.onUpdate(item.indicatif);
        }
      }
    }, [_c("div", {
      staticClass: "d-flex align-items-center justify-item-start"
    }, [_c("span", {
      staticStyle: {
        "font-size": "14px"
      }
    }, [_vm._v(_vm._s(item.indicatif))])])]);
  }), 0)]) : _vm._e()]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.numberData,
      expression: "numberData"
    }],
    staticClass: "form-control w-100 rounded-l-0 shadow-none",
    staticStyle: {
      "border-radius": "0"
    },
    attrs: {
      disabled: _vm.isDisabled,
      type: "tel",
      placeholder: "Numéro de téléphone"
    },
    domProps: {
      value: _vm.numberData
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.numberData = $event.target.value;
      }
    }
  })])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/Garantie/GarantieTable.vue?vue&type=template&id=968ad90a&scoped=true":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/Garantie/GarantieTable.vue?vue&type=template&id=968ad90a&scoped=true ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table mb-5 table-bordered"
  }, [_c("thead", [_c("tr", {
    staticClass: "text-center justify-content-center"
  }, [_c("td"), _vm._v(" "), _vm._l(_vm.columnsByGarantie[_vm.garantieId] || _vm.columnsByGarantie["default"], function (column) {
    return _c("td", {
      key: column.key,
      staticClass: "th fw-bold vertical-middle"
    }, [_c("label", [_vm._v(_vm._s(column.label))])]);
  }), _vm._v(" "), _c("td")], 2)]), _vm._v(" "), _c("tbody", _vm._l(_vm.localInfos, function (info, index) {
    return _c("tr", {
      key: index
    }, [_c("td", [_vm._v(_vm._s(index + 1) + ".")]), _vm._v(" "), _vm._l(_vm.columnsByGarantie[_vm.garantieId] || _vm.columnsByGarantie["default"], function (column) {
      return _c("td", {
        key: column.key,
        "class": {
          "text-center": column.type === "file" || column.type === "checkbox"
        }
      }, [_c(column.component, {
        tag: "component",
        attrs: {
          info: info,
          index: index,
          field: column.field,
          "accent-color": _vm.whichAccentColor(info),
          options: column.options,
          placeholder: column.placeholder,
          disabled: _vm.comeFrom === "tb_120008"
        },
        on: {
          input: function input($event) {
            return _vm.handleFieldChange(column.field, index, $event);
          },
          "upload-file": function uploadFile($event) {
            return _vm.$emit("upload-file", {
              index: index
            });
          }
        }
      })], 1);
    }), _vm._v(" "), _c("td", [index === 0 ? _c("button", {
      staticStyle: {
        "background-color": "#2c3e50",
        color: "#ffffff",
        "border-radius": "15%",
        border: "none"
      },
      attrs: {
        type: "button",
        title: "Ajouter un nouvel ensemble"
      },
      on: {
        click: function click($event) {
          return _vm.$emit("add-info");
        }
      }
    }, [_c("plus-icon", {
      staticClass: "custom-class",
      attrs: {
        size: "21"
      }
    })], 1) : _c("button", {
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
          return _vm.$emit("remove-info", index);
        }
      }
    }, [_c("trash-icon", {
      staticClass: "custom-class",
      attrs: {
        size: "21"
      }
    })], 1)])], 2);
  }), 0)])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/PhoneInput.vue?vue&type=style&index=0&id=27e5a94b&scoped=true&lang=css":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/PhoneInput.vue?vue&type=style&index=0&id=27e5a94b&scoped=true&lang=css ***!
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.options[data-v-27e5a94b] {\r\n  position: absolute;\r\n  z-index: 1000;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/Garantie/GarantieTable.vue?vue&type=style&index=0&id=968ad90a&scoped=true&lang=css":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/Garantie/GarantieTable.vue?vue&type=style&index=0&id=968ad90a&scoped=true&lang=css ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.file-field[data-v-968ad90a] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: flex-start;\n}\n.file-field .d-flex[data-v-968ad90a] {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 10px;\n}\nlabel[data-v-968ad90a] {\r\n  height: 10px;\r\n  font-size: 13px;\n}\ninput[data-v-968ad90a],\r\nselect[data-v-968ad90a],\r\ntextarea[data-v-968ad90a] {\r\n  border-color: #34495e;\r\n  color: #57606f;\r\n  font-size: 13px;\r\n  font-weight: bold;\n}\n.th[data-v-968ad90a] {\r\n  padding: 4px;\r\n  padding-bottom: 0px;\n}\n.head[data-v-968ad90a] {\r\n  color: #f1f2f6;\r\n  font-size: 22px;\n}\n.hdc[data-v-968ad90a] {\r\n  background-color: #57606f;\n}\n.relook-header[data-v-968ad90a] {\r\n  color: #000;\r\n  background-color: #f4f3f3;\r\n  padding: 5px;\r\n  border-bottom: 1px solid #b6b8bb;\n}\n.badge-sm[data-v-968ad90a] {\r\n  display: inline-block;\r\n  width: 15px;\r\n  height: 15px;\r\n  background: rgba(255, 0, 0, 0.882);\r\n  color: white;\r\n  font-size: 12px;\r\n  font-weight: 500;\r\n  border-radius: 100%;\r\n  position: absolute;\r\n  top: -20%;\r\n  left: 55%;\r\n  text-align: center;\n}\ntd[data-v-968ad90a],\r\np[data-v-968ad90a] {\r\n  font-size: 13px;\n}\n.width-100[data-v-968ad90a] {\r\n  width: 90%;\n}\n.personne input[data-v-968ad90a] {\r\n  width: 135px;\n}\n._border_right[data-v-968ad90a] {\r\n  border-right: 1px solid;\n}\n.text-red[data-v-968ad90a] {\r\n  color: red;\n}\n.multiselect-option p[data-v-968ad90a] {\r\n  margin: 0 !important;\r\n  padding: 10px !important;\n}\n.vertical-middle[data-v-968ad90a] {\r\n  vertical-align: middle;\n}\n[data-v-968ad90a] input[type=\"checkbox\"] {\r\n  height: 18px;\r\n  width: 20px;\r\n  margin-right: 5px;\n}\n.revenu input[type=\"checkbox\"][data-v-968ad90a],\r\n.engagement input[type=\"checkbox\"][data-v-968ad90a],\r\n.garantie input[type=\"checkbox\"][data-v-968ad90a] {\r\n  height: 26px;\r\n  width: 24px;\r\n  margin-right: 5px;\n}\n.mt-2_5-px[data-v-968ad90a] {\r\n  margin-top: 2.5px;\n}\n[data-v-968ad90a] .readonly-checkbox {\r\n  -webkit-appearance: none;\r\n     -moz-appearance: none;\r\n          appearance: none;\r\n  width: 20px;\r\n  height: 20px;\r\n  border: 2px solid #ccc;\r\n  background-color: #f0f0f0;\r\n  cursor: not-allowed;\n}\n[data-v-968ad90a] .equipe {\r\n  background: #00ffff21;\r\n  color: #000;\n}\n[data-v-968ad90a] .to-be-accent {\r\n  background-color: var(--968ad90a-accentColor) !important;\n}\n[data-v-968ad90a] input[type=\"checkbox\"].to-be-accent:checked {\r\n  background-color: #0d6efd !important;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/PhoneInput.vue?vue&type=style&index=0&id=27e5a94b&scoped=true&lang=css":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/PhoneInput.vue?vue&type=style&index=0&id=27e5a94b&scoped=true&lang=css ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PhoneInput_vue_vue_type_style_index_0_id_27e5a94b_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PhoneInput.vue?vue&type=style&index=0&id=27e5a94b&scoped=true&lang=css */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/PhoneInput.vue?vue&type=style&index=0&id=27e5a94b&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PhoneInput_vue_vue_type_style_index_0_id_27e5a94b_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PhoneInput_vue_vue_type_style_index_0_id_27e5a94b_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/Garantie/GarantieTable.vue?vue&type=style&index=0&id=968ad90a&scoped=true&lang=css":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/Garantie/GarantieTable.vue?vue&type=style&index=0&id=968ad90a&scoped=true&lang=css ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GarantieTable_vue_vue_type_style_index_0_id_968ad90a_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GarantieTable.vue?vue&type=style&index=0&id=968ad90a&scoped=true&lang=css */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/Garantie/GarantieTable.vue?vue&type=style&index=0&id=968ad90a&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GarantieTable_vue_vue_type_style_index_0_id_968ad90a_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GarantieTable_vue_vue_type_style_index_0_id_968ad90a_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/shared/PhoneInput.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/shared/PhoneInput.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PhoneInput_vue_vue_type_template_id_27e5a94b_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PhoneInput.vue?vue&type=template&id=27e5a94b&scoped=true */ "./resources/js/components/shared/PhoneInput.vue?vue&type=template&id=27e5a94b&scoped=true");
/* harmony import */ var _PhoneInput_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PhoneInput.vue?vue&type=script&lang=js */ "./resources/js/components/shared/PhoneInput.vue?vue&type=script&lang=js");
/* harmony import */ var _PhoneInput_vue_vue_type_style_index_0_id_27e5a94b_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PhoneInput.vue?vue&type=style&index=0&id=27e5a94b&scoped=true&lang=css */ "./resources/js/components/shared/PhoneInput.vue?vue&type=style&index=0&id=27e5a94b&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _PhoneInput_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _PhoneInput_vue_vue_type_template_id_27e5a94b_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _PhoneInput_vue_vue_type_template_id_27e5a94b_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "27e5a94b",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/shared/PhoneInput.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/shared/PhoneInput.vue?vue&type=script&lang=js":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/shared/PhoneInput.vue?vue&type=script&lang=js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PhoneInput_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PhoneInput.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/PhoneInput.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PhoneInput_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/shared/PhoneInput.vue?vue&type=style&index=0&id=27e5a94b&scoped=true&lang=css":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/components/shared/PhoneInput.vue?vue&type=style&index=0&id=27e5a94b&scoped=true&lang=css ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PhoneInput_vue_vue_type_style_index_0_id_27e5a94b_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PhoneInput.vue?vue&type=style&index=0&id=27e5a94b&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/PhoneInput.vue?vue&type=style&index=0&id=27e5a94b&scoped=true&lang=css");


/***/ }),

/***/ "./resources/js/components/shared/PhoneInput.vue?vue&type=template&id=27e5a94b&scoped=true":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/shared/PhoneInput.vue?vue&type=template&id=27e5a94b&scoped=true ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PhoneInput_vue_vue_type_template_id_27e5a94b_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PhoneInput_vue_vue_type_template_id_27e5a94b_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PhoneInput_vue_vue_type_template_id_27e5a94b_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PhoneInput.vue?vue&type=template&id=27e5a94b&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/PhoneInput.vue?vue&type=template&id=27e5a94b&scoped=true");


/***/ }),

/***/ "./resources/js/components/shared/afg/Garantie/GarantieTable.vue":
/*!***********************************************************************!*\
  !*** ./resources/js/components/shared/afg/Garantie/GarantieTable.vue ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _GarantieTable_vue_vue_type_template_id_968ad90a_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GarantieTable.vue?vue&type=template&id=968ad90a&scoped=true */ "./resources/js/components/shared/afg/Garantie/GarantieTable.vue?vue&type=template&id=968ad90a&scoped=true");
/* harmony import */ var _GarantieTable_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GarantieTable.vue?vue&type=script&lang=js */ "./resources/js/components/shared/afg/Garantie/GarantieTable.vue?vue&type=script&lang=js");
/* harmony import */ var _GarantieTable_vue_vue_type_style_index_0_id_968ad90a_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GarantieTable.vue?vue&type=style&index=0&id=968ad90a&scoped=true&lang=css */ "./resources/js/components/shared/afg/Garantie/GarantieTable.vue?vue&type=style&index=0&id=968ad90a&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _GarantieTable_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _GarantieTable_vue_vue_type_template_id_968ad90a_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _GarantieTable_vue_vue_type_template_id_968ad90a_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "968ad90a",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/shared/afg/Garantie/GarantieTable.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/shared/afg/Garantie/GarantieTable.vue?vue&type=script&lang=js":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/shared/afg/Garantie/GarantieTable.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GarantieTable_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GarantieTable.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/Garantie/GarantieTable.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GarantieTable_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/shared/afg/Garantie/GarantieTable.vue?vue&type=style&index=0&id=968ad90a&scoped=true&lang=css":
/*!*******************************************************************************************************************************!*\
  !*** ./resources/js/components/shared/afg/Garantie/GarantieTable.vue?vue&type=style&index=0&id=968ad90a&scoped=true&lang=css ***!
  \*******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GarantieTable_vue_vue_type_style_index_0_id_968ad90a_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GarantieTable.vue?vue&type=style&index=0&id=968ad90a&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/Garantie/GarantieTable.vue?vue&type=style&index=0&id=968ad90a&scoped=true&lang=css");


/***/ }),

/***/ "./resources/js/components/shared/afg/Garantie/GarantieTable.vue?vue&type=template&id=968ad90a&scoped=true":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/components/shared/afg/Garantie/GarantieTable.vue?vue&type=template&id=968ad90a&scoped=true ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GarantieTable_vue_vue_type_template_id_968ad90a_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GarantieTable_vue_vue_type_template_id_968ad90a_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GarantieTable_vue_vue_type_template_id_968ad90a_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GarantieTable.vue?vue&type=template&id=968ad90a&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/Garantie/GarantieTable.vue?vue&type=template&id=968ad90a&scoped=true");


/***/ }),

/***/ "./resources/js/services/afg/garantie.service.js":
/*!*******************************************************!*\
  !*** ./resources/js/services/afg/garantie.service.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GarantieService: () => (/* binding */ GarantieService)
/* harmony export */ });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");
var _GarantieService;
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _assertClassBrand(e, t, n) { if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n; throw new TypeError("Private element is not present on this object"); }

var GarantieService = /*#__PURE__*/function () {
  function GarantieService() {
    _classCallCheck(this, GarantieService);
  }
  return _createClass(GarantieService, [{
    key: "isDefaultGarantie",
    value: function isDefaultGarantie(garantieId) {
      return GarantieService.isDefaultGarantie(garantieId);
    }
  }, {
    key: "isGarantieOwner",
    value: function isGarantieOwner(garantie, user_id) {
      return GarantieService.isGarantieOwner(garantie, user_id);
    }
  }, {
    key: "isInfoOwner",
    value: function isInfoOwner(info, user_id) {
      return GarantieService.isInfoOwner(info, user_id);
    }
  }, {
    key: "garantieFactory",
    value: function garantieFactory() {
      var user_id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var byKey = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
      return GarantieService.garantieFactory(user_id, byKey);
    }
  }, {
    key: "infoFactory",
    value: function infoFactory(garantieId) {
      var user_id = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var byKey = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
      return GarantieService.infoFactory(garantieId, user_id, byKey);
    }
  }, {
    key: "getOrderedInfo",
    value: function getOrderedInfo(info) {
      return GarantieService.getOrderedInfo(info);
    }
  }, {
    key: "getLabeledInfo",
    value: function getLabeledInfo(garantieId, info) {
      return GarantieService.getLabeledInfo(garantieId, info);
    }
  }, {
    key: "getFieldsConfig",
    value: function getFieldsConfig(garantieId) {
      return GarantieService.getFieldsConfig(garantieId);
    }
  }], [{
    key: "getLabeledInfo",
    value: function getLabeledInfo(garantieId, info) {
      var _this$getFieldsConfig, _this$getFieldsConfig2;
      if (!garantieId) {
        throw new Error("Garantie ID is required to get info labels.");
      }
      if (!info || _typeof(info) !== "object" || Array.isArray(info)) {
        throw new Error("Info must be an object.");
      }
      var labels = (_this$getFieldsConfig = (_this$getFieldsConfig2 = this.getFieldsConfig(garantieId)) === null || _this$getFieldsConfig2 === void 0 ? void 0 : _this$getFieldsConfig2.labels()) !== null && _this$getFieldsConfig !== void 0 ? _this$getFieldsConfig : _assertClassBrand(GarantieService, this, _labelsfactory).call(this);
      var labeledInfo = Object.keys(info).reduce(function (acc, key) {
        var label = labels[key];
        if (label) {
          acc[key] = {
            label: label,
            value: info[key],
            displayable: true
          };
        } else {
          acc[key] = {
            label: key,
            value: info[key],
            displayable: false
          };
        }
        return acc;
      }, {});
      labeledInfo.id = info.id;
      return labeledInfo;
    }
  }, {
    key: "isDefaultGarantie",
    value: function isDefaultGarantie(garantieId) {
      return this.DefaultGarantieIds.includes(garantieId);
    }
  }, {
    key: "isGarantieOwner",
    value: function isGarantieOwner(garantie, user_id) {
      if (!garantie || !user_id) return false;
      return garantie.user_id === user_id;
    }
  }, {
    key: "isInfoOwner",
    value: function isInfoOwner(info, user_id) {
      if (!info || !user_id) return false;
      return info.user_id === user_id;
    }
  }, {
    key: "garantieFactory",
    value: function garantieFactory() {
      var user_id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var byKey = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
      var newGarantie = {
        id: (0,uuid__WEBPACK_IMPORTED_MODULE_0__["default"])(),
        name: "",
        checked: false,
        isOpen: false,
        infos: [],
        value: "",
        disabled: false,
        user_id: user_id || null
      };
      if (byKey) {
        newGarantie[byKey] = true; // Set the byKey field to true
      }
      return newGarantie;
    }
  }, {
    key: "infoFactory",
    value: function infoFactory(garantieId) {
      var _this = this;
      var user_id = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var byKey = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
      if (!garantieId) {
        throw new Error("Garantie ID is required to create a new info.");
      }
      var fields = this.getFieldsConfig(garantieId).fields;
      var info = {
        id: (0,uuid__WEBPACK_IMPORTED_MODULE_0__["default"])(),
        user_id: user_id
      };
      if (byKey) {
        info[byKey] = true; // Set the byKey field to true
      }
      fields.forEach(function (field) {
        var value = "";
        if (_this.NullFieldsByDefault.includes(field)) {
          value = null;
        } else if (_this.NumberFields.includes(field)) {
          value = 0;
        }
        info[field] = value;
      });
      return info;
    }
  }, {
    key: "getOrderedInfo",
    value: function getOrderedInfo(info) {
      var _this2 = this;
      if (!info || _typeof(info) !== "object" || Array.isArray(info)) {
        throw new Error("L'info doit être un objet.");
      }
      var orderedEntries = Object.entries(info).sort(function (_ref, _ref2) {
        var _ref3 = _slicedToArray(_ref, 1),
          keyA = _ref3[0];
        var _ref4 = _slicedToArray(_ref2, 1),
          keyB = _ref4[0];
        var orderA = _this2.FieldsOrder.hasOwnProperty(keyA) ? _this2.FieldsOrder[keyA] : Infinity;
        var orderB = _this2.FieldsOrder.hasOwnProperty(keyB) ? _this2.FieldsOrder[keyB] : Infinity;
        return orderA - orderB;
      });
      return Object.fromEntries(orderedEntries);
    }
  }, {
    key: "getFieldsConfig",
    value: function getFieldsConfig(garantieId) {
      return this.FieldsConfig[garantieId] || GarantieService.FieldsConfig["default"];
    }
  }]);
}();
_GarantieService = GarantieService;
function _labelsfactory() {
  var _this$FieldsConfig$id;
  var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "default";
  var labels = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var fields = ((_this$FieldsConfig$id = this.FieldsConfig[id]) === null || _this$FieldsConfig$id === void 0 ? void 0 : _this$FieldsConfig$id.fields) || [];
  labels = _objectSpread({
    ligneCredit: "Ligne de crédit associée",
    montant: "Montant",
    files: "Pièce(s) jointe(s) (si nécessaire)",
    is_recueillie: "Garantie recueillie (Oui/Non)",
    commentaire: "Commentaire",
    description: "Description"
  }, labels);
  var result = fields.reduce(function (acc, f) {
    if (labels[f]) {
      acc[f] = labels[f];
    }
    return acc;
  }, {});
  return result;
}
_defineProperty(GarantieService, "AssuranceTypes", ["Assurance Auto", "Assurance Moto", "Assurance Habitation", "Assurance Santé", "Assurance Vie", "Assurance Emprunteur", "Assurance Responsabilité Civile", "Assurance Animaux Domestiques", "Assurance Voyage", "Assurance Professionnelle", "Assurance Cyber-risques", "Assurance Obsèques", "Assurance Crédit", "Assurance Agricole", "Assurance Collectivité", "Assurance Flotte Automobile", "Assurance Risques Locatifs", "Assurance Protection Juridique"]);
_defineProperty(GarantieService, "NumberFields", ["montant", "valeurAssuree", "valeur_marchande", "valeur_considere", "valeur_caution", "files"]);
_defineProperty(GarantieService, "NullFieldsByDefault", ["montant", "template", "is_recueillie", "valeurAssuree", "valeur_caution", "valeur_marchande", "valeur_considere"]);
_defineProperty(GarantieService, "FieldsOrder", {
  id: 0,
  ligneCredit: 1,
  montant: 2,
  bienGage: 3,
  bien_hypotheque: 3,
  typeAssurance: 3,
  valeurAssuree: 4,
  valeur_caution: 4,
  rang: 4,
  proprietaire: 5,
  numero_tel: 6,
  annee_achat: 7,
  adresse_emplacement: 8,
  longitude: 9,
  latitude: 10,
  date_evaluation: 11,
  valeur_marchande: 12,
  valeur_considere: 13,
  firstname: 14,
  lastname: 15,
  telephone: 16,
  description: 17,
  files: 18,
  is_recueillie: 19,
  commentaire: 20,
  template: 21
});
_defineProperty(GarantieService, "FieldsConfig", {
  avi: {
    fields: ["montant", "ligneCredit", "files", "commentaire", "template", "is_recueillie"],
    optional: ["files", "commentaire", "template", "is_recueillie"],
    labels: function labels() {
      return _assertClassBrand(_GarantieService, _GarantieService, _labelsfactory).call(_GarantieService, "avi", {
        montant: "Montant de la domiciliation"
      });
    }
  },
  assurance: {
    fields: ["ligneCredit", "typeAssurance", "valeurAssuree", "files", "commentaire", "template", "is_recueillie"],
    optional: ["files", "commentaire", "template", "is_recueillie"],
    labels: function labels() {
      return _assertClassBrand(_GarantieService, _GarantieService, _labelsfactory).call(_GarantieService, "assurance", {
        typeAssurance: "Type d'assurance",
        valeurAssuree: "Montant/Hauteur de l'assurance"
      });
    }
  },
  caution: {
    fields: ["ligneCredit", "firstname", "lastname", "telephone", "valeur_caution", "piece", "commentaire", "files", "template", "is_recueillie"],
    optional: ["commentaire", "files", "template", "is_recueillie"],
    labels: function labels() {
      return _assertClassBrand(_GarantieService, _GarantieService, _labelsfactory).call(_GarantieService, "caution", {
        firstname: "Prénom du garant/caution",
        lastname: "Nom du garant/caution",
        telephone: "Téléphone",
        valeur_caution: "Valeur de cautionnement",
        piece: "Pièce d'identité"
      });
    }
  },
  hypotheque: {
    fields: ["ligneCredit", "bien_hypotheque", "rang", "proprietaire", "numero_tel", "annee_achat", "adresse_emplacement", "longitude", "latitude", "date_evaluation", "valeur_marchande", "valeur_considere", "files", "template", "is_recueillie"],
    optional: ["files", "template", "is_recueillie"],
    labels: function labels() {
      return _assertClassBrand(_GarantieService, _GarantieService, _labelsfactory).call(_GarantieService, "hypotheque", {
        bien_hypotheque: "Type d'hypothèque",
        rang: "Rang de l'hypothèque",
        proprietaire: "Nom du propriétaire",
        numero_tel: "N° du titre foncier(si nécessaire)",
        annee_achat: "Date d'attribution",
        adresse_emplacement: "Adresse de l'emplacement",
        longitude: "Longitude",
        latitude: "Latitude",
        date_evaluation: "Date d'évaluation",
        valeur_marchande: "Valeur marchande",
        valeur_considere: "Valeur considérée"
      });
    }
  },
  gage: {
    fields: ["ligneCredit", "montant", "bienGage", "files", "commentaire", "template", "is_recueillie"],
    optional: ["files", "commentaire", "template", "is_recueillie"],
    labels: function labels() {
      return _assertClassBrand(_GarantieService, _GarantieService, _labelsfactory).call(_GarantieService, "gage", {
        montant: "Montant/Valeur du gage",
        bienGage: "Type de bien à gagé"
      });
    }
  },
  divers: {
    fields: ["ligneCredit", "description", "montant", "files", "commentaire", "template", "is_recueillie"],
    optional: ["files", "commentaire", "template", "is_recueillie"],
    labels: function labels() {
      return _assertClassBrand(_GarantieService, _GarantieService, _labelsfactory).call(_GarantieService, "divers");
    }
  },
  "default": {
    fields: ["ligneCredit", "description", "montant", "files", "commentaire", "template", "is_recueillie"],
    optional: ["files", "commentaire", "template", "is_recueillie"],
    labels: function labels() {
      return _assertClassBrand(_GarantieService, _GarantieService, _labelsfactory).call(_GarantieService);
    }
  }
});
_defineProperty(GarantieService, "DefaultGaranties", [{
  id: "avi",
  name: "Attestation de Virement Irrévocable (AVI) / Domiciliation Irrévocable de salaire",
  checked: false,
  isOpen: false,
  infos: [],
  value: "",
  disabled: false
}, {
  id: "assurance",
  name: "Assurance",
  checked: false,
  isOpen: false,
  infos: [],
  value: "",
  disabled: false
}, {
  id: "caution",
  name: "Caution personnelle et solidaire (CPS)",
  checked: false,
  isOpen: false,
  infos: [],
  value: "",
  disabled: false
}, {
  id: "hypotheque",
  name: "Hypothèque",
  checked: false,
  isOpen: false,
  infos: [],
  value: "",
  disabled: false
}, {
  id: "gage",
  name: "Gage",
  checked: false,
  isOpen: false,
  infos: [],
  value: "",
  disabled: false
}, {
  id: "divers",
  name: "Divers",
  checked: false,
  isOpen: false,
  infos: [],
  value: "",
  disabled: false
}]);
_defineProperty(GarantieService, "DefaultGarantieIds", _GarantieService.DefaultGaranties.map(function (g) {
  return g.id;
}));

/***/ })

}]);