"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_parts_afg_FicheClientAFG_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/parts/afg/FicheClientAFG.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/parts/afg/FicheClientAFG.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _shared_widgets_InputCoreBankingClientNumber_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/widgets/InputCoreBankingClientNumber.vue */ "./resources/js/components/shared/widgets/InputCoreBankingClientNumber.vue");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'FicheClientAFG',
  props: {
    client_core_banking: {
      type: Object,
      // required: true,
      "default": function _default() {
        return null;
      }
    },
    has_input: {
      // ?- Shows customer code input to fetch clients from server
      type: Boolean,
      "default": false
    }
  },
  components: {
    InputCoreBankingClientNumber: _shared_widgets_InputCoreBankingClientNumber_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      accountSearchInput: null,
      ACCOUNT_TYPE_NAMES: {
        comptes: "Tous les comptes",
        comptes_courants: "Comptes courants",
        autres_comptes_depots: "Autres comptes dépots",
        credits_amortissables: "Credits amortissables",
        credits_bail: "Crédits bail",
        cautions: "Cautions (données)",
        garanties: "Garanties (reçues)",
        autres: "Autres comptes"
      },
      client: null,
      CUSTOMER_ACCOUNT_TYPE_NAME: {},
      customerCodeInput: null,
      ENTREPRISE_CODE: "4",
      isLoading: true,
      filters: [{
        key: 'negative_balance_accounts',
        title: 'Soldes négatifs',
        fn: function fn(acc) {
          return acc.balance < 0;
        }
      }, {
        key: 'zero_balance_accounts',
        title: 'Soldes à zéro',
        fn: function fn(acc) {
          return acc.balance == 0;
        }
      }, {
        key: 'non_zero_balance_accounts',
        title: 'Soldes non nuls',
        fn: function fn(acc) {
          return acc.balance != 0;
        }
      }, {
        key: 'positive_balance_accounts',
        title: 'Soldes positifs',
        fn: function fn(acc) {
          return acc.balance > 0;
        }
      }
      // {
      //     key: 'las_seven_days',
      //     title: 'Les 7 derniers jours',
      //     fn: (acc) => acc.created_at < ,
      // },
      ],
      PARTICULIERS_CODE: "1",
      PARTICULIERS_KEY: 'PARTICULIERS',
      NULL_INDICATOR: 'N/A',
      selectedAccountTab: "comptes",
      selectedFilters: ['non_zero_balance_accounts'],
      selectedFilter: 'non_zero_balance_accounts',
      showCustomerCodeInput: true,
      zdemoClientParticulier: {},
      zdemoClientEntreprise: {}
    };
  },
  mounted: function mounted() {
    var _this$client_core_ban;
    console.log("client_core_banking =>", this.client_core_banking);

    //
    // TODO format numbers on mounted
    this.CUSTOMER_ACCOUNT_TYPE_NAME = Object.keys(this.ACCOUNT_TYPE_NAMES).filter(function (tab) {
      return tab != 'comptes' && tab != 'autres' && tab != 'comptes_courants';
    });
    // setTimeout(()=>{
    //     this.client = this.zdemoClientParticulier ?? {};
    //     this.client = this.zdemoClientEntreprise ?? {};
    // }, 3000)
    this.showCustomerCodeInput = this.has_input;
    this.client = (_this$client_core_ban = this.client_core_banking) !== null && _this$client_core_ban !== void 0 ? _this$client_core_ban : null;
    this.isLoading = false;
  },
  computed: {
    accountTableTabs: function accountTableTabs() {
      return Object.keys(this.ACCOUNT_TYPE_NAMES);
    },
    accountProfileIcon: function accountProfileIcon() {
      var _this$client;
      if (!this.client) return null;
      var _ref = (_this$client = this.client) !== null && _this$client !== void 0 ? _this$client : {},
        sex = _ref.sex,
        is_particulier = _ref.is_particulier,
        groupe = _ref.groupe;
      var baseIconClass = 'icofont icofont-';
      var icon = '';
      if (is_particulier) {
        icon = 'user-alt-3';
        if (sex == 'M') {
          icon = 'user-male';
        }
        if (sex == 'F') {
          icon = 'user-female';
        }
      } else {
        //
        icon = 'user-suited';
        if (groupe) {
          icon = 'users-alt-2';
        }
      }
      return baseIconClass + icon;
    },
    filtersText: function filtersText() {
      var _this$filters,
        _this = this;
      var text = "";
      // let filters = this.selectedFilters.map((key) => this.filters?.find(f => f.key == key)?.title);
      var filters = [(_this$filters = this.filters) === null || _this$filters === void 0 || (_this$filters = _this$filters.find(function (f) {
        return f.key == _this.selectedFilter;
      })) === null || _this$filters === void 0 ? void 0 : _this$filters.title];
      if (filters) {
        text = filters[0];
        if (filters.length > 1) {
          if (filters.length > 2) {
            text += ', ';
            text += filters.slice(1, filters.length - 1).join(", ");
          }
          text += " et " + filters[filters.length - 1];
        }
      }
      return text;
    },
    selectedAccountTableData: function selectedAccountTableData() {
      var _this2 = this;
      var list = [];
      if (this.selectedAccountTab == 'comptes') {
        var _this$client$comptes, _this$client2;
        list = (_this$client$comptes = (_this$client2 = this.client) === null || _this$client2 === void 0 ? void 0 : _this$client2.comptes) !== null && _this$client$comptes !== void 0 ? _this$client$comptes : [];
      } else {
        var _this$client3;
        if ((_this$client3 = this.client) !== null && _this$client3 !== void 0 && _this$client3.accounts_data) {
          var _this$client$accounts, _this$client4;
          list = (_this$client$accounts = (_this$client4 = this.client) === null || _this$client4 === void 0 ? void 0 : _this$client4.accounts_data[this.selectedAccountTab]) !== null && _this$client$accounts !== void 0 ? _this$client$accounts : [];
        }
      }

      // ? - Use unique filter
      // this.selectedFilters.forEach(filter_key => {
      //     list = list.filter(this.findFilterFunction(filter_key))
      // });
      list = list.filter(this.findFilterFunction(this.selectedFilter));
      if (this.accountSearchInput) {
        list = list.filter(function (acc) {
          var _acc$code, _acc$type, _acc$currency_sigle, _acc$account_type_nam;
          return ((_acc$code = acc.code) === null || _acc$code === void 0 ? void 0 : _acc$code.includes(_this2.accountSearchInput)) || ((_acc$type = acc.type) === null || _acc$type === void 0 ? void 0 : _acc$type.includes(_this2.accountSearchInput)) || ((_acc$currency_sigle = acc.currency_sigle) === null || _acc$currency_sigle === void 0 ? void 0 : _acc$currency_sigle.includes(_this2.accountSearchInput)) || (acc === null || acc === void 0 || (_acc$account_type_nam = acc.account_type_name) === null || _acc$account_type_nam === void 0 ? void 0 : _acc$account_type_nam.includes(_this2.accountSearchInput));
        });
      }
      return list;
    }
  },
  methods: {
    findFilterFunction: function findFilterFunction(filter_key) {
      var _this$filters$find$fn, _this$filters$find;
      return (_this$filters$find$fn = (_this$filters$find = this.filters.find(function (f) {
        return f.key == filter_key;
      })) === null || _this$filters$find === void 0 ? void 0 : _this$filters$find.fn) !== null && _this$filters$find$fn !== void 0 ? _this$filters$find$fn : function (n) {
        return n;
      };
    },
    highlightText: function highlightText(text) {
      return text;
      // removed by dead control flow
{}
    },
    isFilterSelected: function isFilterSelected(filter) {
      // return this.selectedFilters.indexOf(filter.key) !== -1;
      return this.selectedFilter == filter.key;
    },
    isTabSelected: function isTabSelected(tab) {
      return tab == this.selectedAccountTab;
    },
    onCoreBankingClientChanged: function onCoreBankingClientChanged() {
      var _formData$client_core, _formData$client_core2;
      var formData = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      this.client = null;
      if (!formData) return;
      //console.log("onCoreBankingClientChanged", formData);
      if (!(formData !== null && formData !== void 0 && (_formData$client_core = formData.client_core_banking) !== null && _formData$client_core !== void 0 && _formData$client_core.customer_code)) {
        this.$toasted.show("Client inexistant");
        return;
      }
      this.client = (_formData$client_core2 = formData === null || formData === void 0 ? void 0 : formData.client_core_banking) !== null && _formData$client_core2 !== void 0 ? _formData$client_core2 : null;
    },
    clearFilters: function clearFilters() {
      this.selectedFilters = [];
      this.selectedFilter = null;
    },
    toggleSelectFilter: function toggleSelectFilter(filter) {
      if (this.isFilterSelected(filter)) {
        this.selectedFilter = null;
      } else {
        this.selectedFilter = filter.key;
      }
      return;
      // ?- Multiple filters
      // removed by dead control flow
{ var index; }
      // removed by dead control flow
{}
    },
    toggleSelectTab: function toggleSelectTab() {
      var tab = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      this.selectedAccountTab = tab !== null && tab !== void 0 ? tab : 'comptes';
      //console.log("selectedAccountTab", this.selectedAccountTab, this.selectedAccountTableData?.length ?? 'null' );
    }
  }
  // watch: {
  //     client_core_banking() {
  //         if(this.client_core_banking != null){
  //             this.client = this.client_core_banking ?? null;
  //             this.isLoading = false;
  //         }
  //     }
  // }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/parts/afg/FicheClientAFG.vue?vue&type=template&id=46fc2561&scoped=true":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/parts/afg/FicheClientAFG.vue?vue&type=template&id=46fc2561&scoped=true ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm$client$customer_c, _vm$client, _vm$client$name, _vm$client2, _vm$client$customer_c2, _vm$client3, _vm$client$name2, _vm$client4, _vm$client5, _vm$client$profile_pi, _vm$client6, _vm$client$customer_c3, _vm$client7, _vm$client8, _vm$client$last_name, _vm$client9, _vm$client$first_name, _vm$client0, _vm$client1, _vm$client10, _vm$client11, _vm$client$name3, _vm$client12, _vm$client13, _vm$client$groupe$gro, _vm$client14, _vm$client$groupe$job, _vm$client15, _vm$client$phone, _vm$client16, _vm$client$country, _vm$client17, _vm$client$nationalit, _vm$client18, _vm$client$addresses$, _vm$client19, _vm$client$client_typ, _vm$client20, _vm$client21, _vm$client22, _vm$client$segment_na, _vm$client23, _vm$client$agent_econ, _vm$client24, _vm$client$activity_n, _vm$client25, _vm$client$branch_nam, _vm$client26, _vm$client27, _vm$client$customer_o, _vm$client28, _vm$client29, _vm$client$customer_o2, _vm$client30, _vm$client$addresses$2, _vm$client31, _vm$client$accounts_d, _vm$client32, _vm$client33, _vm$client$accounts_d2, _vm$client34, _vm$client35, _vm$selectedAccountTa, _vm$selectedAccountTa2, _vm$selectedAccountTa3, _vm$selectedAccountTa4, _vm$client39;
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "p-lg-5 p-3 bg-white shadow fiche-container"
  }, [_c("header", {
    staticClass: "mb-3"
  }, [_c("div", {
    staticClass: "p-3 bg-light text-center mb-3 border cursor-pointer"
  }, [_c("h5", {
    staticClass: "mb-0 text-uppercase"
  }, [_vm._v("Fiche client AFG - " + _vm._s((_vm$client$customer_c = (_vm$client = _vm.client) === null || _vm$client === void 0 ? void 0 : _vm$client.customer_code) !== null && _vm$client$customer_c !== void 0 ? _vm$client$customer_c : _vm.NULL_INDICATOR) + " - " + _vm._s((_vm$client$name = (_vm$client2 = _vm.client) === null || _vm$client2 === void 0 ? void 0 : _vm$client2.name) !== null && _vm$client$name !== void 0 ? _vm$client$name : _vm.NULL_INDICATOR) + " ")]), _vm._v(" "), _vm.showCustomerCodeInput ? _c("div", {
    staticClass: "d-flex justify-content-center mt-2"
  }, [_c("InputCoreBankingClientNumber", {
    staticClass: "col-md-4 col-6",
    attrs: {
      formAddDoss: {},
      showLabel: false,
      categorieClient: ""
    },
    on: {
      loading: function loading($event) {
        _vm.isLoading = true;
      },
      loaded: function loaded($event) {
        _vm.isLoading = false;
      },
      "core-banking-client-changed": _vm.onCoreBankingClientChanged
    }
  })], 1) : _vm._e()]), _vm._v(" "), _c("div", [_c("h5", {
    staticClass: "mb-3 mb-md-1 text-center"
  }, [_vm._v(_vm._s((_vm$client$customer_c2 = (_vm$client3 = _vm.client) === null || _vm$client3 === void 0 ? void 0 : _vm$client3.customer_code) !== null && _vm$client$customer_c2 !== void 0 ? _vm$client$customer_c2 : _vm.NULL_INDICATOR) + " - " + _vm._s((_vm$client$name2 = (_vm$client4 = _vm.client) === null || _vm$client4 === void 0 ? void 0 : _vm$client4.name) !== null && _vm$client$name2 !== void 0 ? _vm$client$name2 : _vm.NULL_INDICATOR))]), _vm._v(" "), _c("section", {
    staticClass: "d-flex gap-3"
  }, [_c("aside", {
    staticClass: "bg-light border d-none d-lg-block",
    staticStyle: {
      width: "8rem",
      height: "auto"
    }
  }, [(_vm$client5 = _vm.client) !== null && _vm$client5 !== void 0 && _vm$client5.profile_picture ? _c("img", {
    staticClass: "w-100 h-auto d-block",
    attrs: {
      src: (_vm$client$profile_pi = (_vm$client6 = _vm.client) === null || _vm$client6 === void 0 ? void 0 : _vm$client6.profile_picture) !== null && _vm$client$profile_pi !== void 0 ? _vm$client$profile_pi : "/images/caution_definitive2.jpg",
      alt: "Photo ou Logo"
    }
  }) : _c("div", {
    staticClass: "w-100 d-flex flex-column justify-content-center align-items-center p-2 text-secondary",
    staticStyle: {
      height: "11rem"
    }
  }, [_c("span", {
    staticClass: "text-secondary"
  }, [_c("i", {
    "class": [_vm.accountProfileIcon, "icofont-4x"]
  })]), _vm._v(" "), _c("span", {
    staticClass: "d-none"
  }, [_vm._v("\n                            Photo ou Logo\n                        ")])])]), _vm._v(" "), _c("div", {
    staticClass: "w-100"
  }, [_c("main", {
    staticClass: "d-flex justify-content-md-between flex-wrap flex-md-nowrap align-items-start gap-3"
  }, [_c("div", {
    staticClass: "d-flex w-100 w-md-75 justify-content-start align-items-start gap-3"
  }, [_c("div", {
    staticClass: "mt-1 w-100 w-md-auto"
  }, [_c("div", [_c("div", {
    staticClass: "cursor-pointer",
    on: {
      click: function click($event) {
        $event.stopPropagation();
        _vm.showCustomerCodeInput = !_vm.showCustomerCodeInput;
      }
    }
  }, [_c("b", [_vm._v("\n                                            Indice:\n                                        ")]), _vm._v(" "), _c("span", [_vm._v("\n                                            " + _vm._s((_vm$client$customer_c3 = (_vm$client7 = _vm.client) === null || _vm$client7 === void 0 ? void 0 : _vm$client7.customer_code) !== null && _vm$client$customer_c3 !== void 0 ? _vm$client$customer_c3 : _vm.NULL_INDICATOR) + "\n                                        ")])]), _vm._v(" "), _c("div", {
    staticClass: "d-flex gap-2 justify-content-start"
  }, [((_vm$client8 = _vm.client) === null || _vm$client8 === void 0 ? void 0 : _vm$client8.client_type_code) == _vm.PARTICULIERS_CODE ? [_c("div", [_c("b", [_vm._v("\n                                                    Nom:\n                                                ")]), _vm._v(" "), _c("span", [_vm._v("\n                                                    " + _vm._s((_vm$client$last_name = (_vm$client9 = _vm.client) === null || _vm$client9 === void 0 ? void 0 : _vm$client9.last_name) !== null && _vm$client$last_name !== void 0 ? _vm$client$last_name : _vm.NULL_INDICATOR) + "\n                                                ")])]), _vm._v(" "), _c("div", [_c("b", [_vm._v("\n                                                    Prénoms:\n                                                ")]), _vm._v(" "), _c("span", [_vm._v("\n                                                    " + _vm._s((_vm$client$first_name = (_vm$client0 = _vm.client) === null || _vm$client0 === void 0 ? void 0 : _vm$client0.first_name) !== null && _vm$client$first_name !== void 0 ? _vm$client$first_name : _vm.NULL_INDICATOR) + "\n                                                ")]), _vm._v(" "), ((_vm$client1 = _vm.client) === null || _vm$client1 === void 0 || (_vm$client1 = _vm$client1.first_name) === null || _vm$client1 === void 0 || (_vm$client1 = _vm$client1.toString()) === null || _vm$client1 === void 0 || (_vm$client1 = _vm$client1.toLowerCase()) === null || _vm$client1 === void 0 ? void 0 : _vm$client1.indexOf((_vm$client10 = _vm.client) === null || _vm$client10 === void 0 || (_vm$client10 = _vm$client10.middle_name) === null || _vm$client10 === void 0 || (_vm$client10 = _vm$client10.toString()) === null || _vm$client10 === void 0 ? void 0 : _vm$client10.toLowerCase())) == -1 ? _c("span", [_vm._v("\n                                                    " + _vm._s((_vm$client11 = _vm.client) === null || _vm$client11 === void 0 ? void 0 : _vm$client11.middle_name) + "\n                                                ")]) : _vm._e()])] : _c("div", [_c("b", [_vm._v("\n                                                Dénomination Sociale:\n                                            ")]), _vm._v(" "), _c("span", [_vm._v("\n                                                " + _vm._s((_vm$client$name3 = (_vm$client12 = _vm.client) === null || _vm$client12 === void 0 ? void 0 : _vm$client12.name) !== null && _vm$client$name3 !== void 0 ? _vm$client$name3 : _vm.NULL_INDICATOR) + "\n                                            ")])])], 2), _vm._v(" "), (_vm$client13 = _vm.client) !== null && _vm$client13 !== void 0 && _vm$client13.groupe ? _c("div", {
    staticClass: "d-flex gap-2"
  }, [_c("b", [_vm._v("\n                                            Groupe:\n                                        ")]), _vm._v(" "), _c("div", {
    staticClass: "d-flex gap-2 justify-content-start"
  }, [_c("span", [_vm._v("\n                                                " + _vm._s((_vm$client$groupe$gro = (_vm$client14 = _vm.client) === null || _vm$client14 === void 0 || (_vm$client14 = _vm$client14.groupe) === null || _vm$client14 === void 0 ? void 0 : _vm$client14.group_code) !== null && _vm$client$groupe$gro !== void 0 ? _vm$client$groupe$gro : _vm.NULL_INDICATOR) + "\n                                            ")]), _vm._v("-"), _c("span", [_vm._v(_vm._s((_vm$client$groupe$job = (_vm$client15 = _vm.client) === null || _vm$client15 === void 0 || (_vm$client15 = _vm$client15.groupe) === null || _vm$client15 === void 0 ? void 0 : _vm$client15.job_name) !== null && _vm$client$groupe$job !== void 0 ? _vm$client$groupe$job : _vm.NULL_INDICATOR))])])]) : _vm._e()]), _vm._v(" "), _c("div", {
    staticClass: "d-flex gap-2"
  }, [_c("b", [_vm._v("\n                                        Téléphone:\n                                    ")]), _vm._v(" "), _c("span", [_vm._v(_vm._s((_vm$client$phone = (_vm$client16 = _vm.client) === null || _vm$client16 === void 0 ? void 0 : _vm$client16.phone) !== null && _vm$client$phone !== void 0 ? _vm$client$phone : _vm.NULL_INDICATOR))])]), _vm._v(" "), _c("div", [_c("div", {
    staticClass: "d-flex gap-2"
  }, [_c("b", [_vm._v("\n                                            Affiliation:\n                                        ")]), _vm._v(" "), _c("div", [_c("span", [_vm._v(_vm._s((_vm$client$country = (_vm$client17 = _vm.client) === null || _vm$client17 === void 0 ? void 0 : _vm$client17.country) !== null && _vm$client$country !== void 0 ? _vm$client$country : _vm.NULL_INDICATOR))]), _vm._v(" - "), _c("span", [_vm._v(_vm._s((_vm$client$nationalit = (_vm$client18 = _vm.client) === null || _vm$client18 === void 0 ? void 0 : _vm$client18.nationality) !== null && _vm$client$nationalit !== void 0 ? _vm$client$nationalit : _vm.NULL_INDICATOR))])])]), _vm._v(" "), _c("div", {
    staticClass: "d-flex gap-2"
  }, [_c("b", [_vm._v("\n                                            Adresse:\n                                        ")]), _vm._v(" "), _c("span", [_vm._v("\n                                            " + _vm._s((_vm$client$addresses$ = (_vm$client19 = _vm.client) === null || _vm$client19 === void 0 ? void 0 : _vm$client19.addresses[0].address) !== null && _vm$client$addresses$ !== void 0 ? _vm$client$addresses$ : _vm.NULL_INDICATOR) + "\n                                        ")])])])])]), _vm._v(" "), _c("div", {
    staticClass: "mt-1 w-100 w-md-auto text-md-right"
  }, [_c("div", [_c("div", {
    staticClass: "d-flex gap-2 justify-content-md-end"
  }, [_c("b", [_vm._v("Type:")]), _vm._v(" "), _c("span", [_vm._v(_vm._s((_vm$client$client_typ = (_vm$client20 = _vm.client) === null || _vm$client20 === void 0 ? void 0 : _vm$client20.client_type_name) !== null && _vm$client$client_typ !== void 0 ? _vm$client$client_typ : _vm.NULL_INDICATOR))])]), _vm._v(" "), _c("div", {
    staticClass: "d-flex gap-2 justify-content-md-end",
    attrs: {
      title: "Segment " + ((_vm$client21 = _vm.client) === null || _vm$client21 === void 0 ? void 0 : _vm$client21.segment_code) + "-" + ((_vm$client22 = _vm.client) === null || _vm$client22 === void 0 ? void 0 : _vm$client22.segment_name)
    }
  }, [_c("b", [_vm._v("Segment:")]), _vm._v(" "), _c("span", [_vm._v(_vm._s((_vm$client$segment_na = (_vm$client23 = _vm.client) === null || _vm$client23 === void 0 ? void 0 : _vm$client23.segment_name) !== null && _vm$client$segment_na !== void 0 ? _vm$client$segment_na : _vm.NULL_INDICATOR))])]), _vm._v(" "), _c("div", {
    staticClass: "d-flex gap-2 justify-content-md-end"
  }, [_c("b", [_vm._v("Agent économique:")]), _vm._v(" "), _c("span", [_vm._v(_vm._s((_vm$client$agent_econ = (_vm$client24 = _vm.client) === null || _vm$client24 === void 0 ? void 0 : _vm$client24.agent_economique_name) !== null && _vm$client$agent_econ !== void 0 ? _vm$client$agent_econ : _vm.NULL_INDICATOR))])]), _vm._v(" "), _c("div", {
    staticClass: "d-flex gap-2 justify-content-md-end"
  }, [_c("b", [_vm._v("Activité:")]), _vm._v(" "), _c("span", [_vm._v(_vm._s((_vm$client$activity_n = (_vm$client25 = _vm.client) === null || _vm$client25 === void 0 ? void 0 : _vm$client25.activity_name) !== null && _vm$client$activity_n !== void 0 ? _vm$client$activity_n : _vm.NULL_INDICATOR))])])]), _vm._v(" "), _c("div", [_c("div", {
    staticClass: "d-flex gap-2 justify-content-md-end"
  }, [_c("b", [_vm._v("\n                                        Branche:\n                                    ")]), _vm._v("\n                                    " + _vm._s((_vm$client$branch_nam = (_vm$client26 = _vm.client) === null || _vm$client26 === void 0 ? void 0 : _vm$client26.branch_name) !== null && _vm$client$branch_nam !== void 0 ? _vm$client$branch_nam : _vm.NULL_INDICATOR) + "\n                                ")])])])]), _vm._v(" "), _c("div", {
    staticClass: "d-flex flex-wrap flex-md-nowrap gap-md-2"
  }, [_c("b", [_vm._v("\n                            Customer Officer:\n                        ")]), _vm._v(" "), _c("div", {
    staticClass: "d-flex gap-2 justify-content-md-end"
  }, [(_vm$client27 = _vm.client) !== null && _vm$client27 !== void 0 && _vm$client27.customer_officer_code ? _c("span", [_vm._v(_vm._s((_vm$client$customer_o = (_vm$client28 = _vm.client) === null || _vm$client28 === void 0 ? void 0 : _vm$client28.customer_officer_code) !== null && _vm$client$customer_o !== void 0 ? _vm$client$customer_o : _vm.NULL_INDICATOR) + " - ")]) : _vm._e(), _vm._v(" "), !((_vm$client29 = _vm.client) !== null && _vm$client29 !== void 0 && _vm$client29.customer_officer_name) ? _c("b", [_vm._v("Nom:")]) : _vm._e(), _vm._v("\n                            " + _vm._s((_vm$client$customer_o2 = (_vm$client30 = _vm.client) === null || _vm$client30 === void 0 ? void 0 : _vm$client30.customer_officer_name) !== null && _vm$client$customer_o2 !== void 0 ? _vm$client$customer_o2 : _vm.NULL_INDICATOR) + "\n                        ")]), _vm._v(" "), _c("div", {
    staticClass: "d-flex gap-2 justify-content-md-end"
  }, [_c("b", [_vm._v("Email:")]), _vm._v("\n                            " + _vm._s((_vm$client$addresses$2 = (_vm$client31 = _vm.client) === null || _vm$client31 === void 0 ? void 0 : _vm$client31.addresses[0].email) !== null && _vm$client$addresses$2 !== void 0 ? _vm$client$addresses$2 : _vm.NULL_INDICATOR) + "\n                        ")])])])])]), _vm._v(" "),  false ? 0 : _vm._e()]), _vm._v(" "), _vm.isLoading ? _c("section", {
    staticClass: "bg-light p-3 border d-flex flex-column justify-content-center align-items-center"
  }, [_c("div", {
    staticClass: "spinner-border spinner-border-xl mt-3"
  }), _vm._v(" "), _c("h3", {
    staticClass: "text-center mb-3"
  }, [_vm._v("Chargement"), _c("span", {
    domProps: {
      innerHTML: _vm._s(_vm.loadingDots)
    }
  })])]) : [!_vm.client ? _c("section", {
    staticClass: "bg-light text-secondary p-3 border d-flex flex-column justify-content-center align-items-center"
  }, [_c("i", {
    staticClass: "icofont icofont-user-alt-2 icofont-5x text-secondary mt-3 mb-2"
  }), _vm._v(" "), _c("h3", {
    staticClass: "text-center mb-3"
  }, [_vm._v("Aucun Compte Client Trouvé")])]) : [_c("section", {
    staticClass: "bg-light p-3 border"
  }, [_c("h3", {
    staticClass: "text-center mb-4 mt-3"
  }, [_vm._v("Résumé des comptes")]), _vm._v(" "), _c("div", {
    staticClass: "resume-container-grid gap-3"
  }, [_c("article", {
    staticClass: "resume-grid-item bg-white py-2 border rounded px-3 cursor-pointer",
    on: {
      click: function click($event) {
        return _vm.toggleSelectTab("comptes_courants");
      }
    }
  }, [_c("div", {
    staticClass: "d-flex mb-1 justify-content-between align-items-end gap-2 text-secondary"
  }, [_c("h6", {
    staticClass: "mb-0"
  }, [_vm._v("Comptes courants débiteurs")]), _vm._v(" "), _c("span", [_vm._v(_vm._s((_vm$client$accounts_d = (_vm$client32 = _vm.client) === null || _vm$client32 === void 0 || (_vm$client32 = _vm$client32.accounts_data) === null || _vm$client32 === void 0 || (_vm$client32 = _vm$client32.comptes_courants) === null || _vm$client32 === void 0 || (_vm$client32 = _vm$client32.filter(function (acc) {
    return parseInt(acc === null || acc === void 0 ? void 0 : acc.balance) < 0;
  })) === null || _vm$client32 === void 0 ? void 0 : _vm$client32.length) !== null && _vm$client$accounts_d !== void 0 ? _vm$client$accounts_d : 0))])]), _vm._v(" "), _c("h4", {
    staticClass: "d-flex gap-2 justify-content-end text-start"
  }, [_c("span", [_vm._v(_vm._s(_vm._f("formatNumber")((_vm$client33 = _vm.client) === null || _vm$client33 === void 0 || (_vm$client33 = _vm$client33.accounts_data) === null || _vm$client33 === void 0 || (_vm$client33 = _vm$client33.comptes_courants) === null || _vm$client33 === void 0 || (_vm$client33 = _vm$client33.filter(function (acc) {
    return parseInt(acc === null || acc === void 0 ? void 0 : acc.balance) < 0;
  })) === null || _vm$client33 === void 0 ? void 0 : _vm$client33.reduce(function (acc, curr) {
    return acc += parseInt(curr === null || curr === void 0 ? void 0 : curr.balance);
  }, 0))))]), _vm._v(" "), _c("span", [_vm._v("XOF")])])]), _vm._v(" "), _c("article", {
    staticClass: "resume-grid-item bg-white py-2 border rounded px-3 cursor-pointer",
    on: {
      click: function click($event) {
        return _vm.toggleSelectTab("comptes_courants");
      }
    }
  }, [_c("div", {
    staticClass: "d-flex mb-1 justify-content-between align-items-end gap-2 text-secondary"
  }, [_c("h6", {
    staticClass: "mb-0"
  }, [_vm._v("Comptes courants créditeurs")]), _vm._v(" "), _c("span", [_vm._v(_vm._s((_vm$client$accounts_d2 = (_vm$client34 = _vm.client) === null || _vm$client34 === void 0 || (_vm$client34 = _vm$client34.accounts_data) === null || _vm$client34 === void 0 || (_vm$client34 = _vm$client34.comptes_courants) === null || _vm$client34 === void 0 || (_vm$client34 = _vm$client34.filter(function (acc) {
    return parseInt(acc === null || acc === void 0 ? void 0 : acc.balance) >= 0;
  })) === null || _vm$client34 === void 0 ? void 0 : _vm$client34.length) !== null && _vm$client$accounts_d2 !== void 0 ? _vm$client$accounts_d2 : 0))])]), _vm._v(" "), _c("h4", {
    staticClass: "d-flex gap-2 justify-content-end text-start"
  }, [_c("span", [_vm._v(_vm._s(_vm._f("formatNumber")((_vm$client35 = _vm.client) === null || _vm$client35 === void 0 || (_vm$client35 = _vm$client35.accounts_data) === null || _vm$client35 === void 0 || (_vm$client35 = _vm$client35.comptes_courants) === null || _vm$client35 === void 0 || (_vm$client35 = _vm$client35.filter(function (acc) {
    return parseInt(acc === null || acc === void 0 ? void 0 : acc.balance) >= 0;
  })) === null || _vm$client35 === void 0 ? void 0 : _vm$client35.reduce(function (acc, curr) {
    return acc += parseInt(curr === null || curr === void 0 ? void 0 : curr.balance);
  }, 0))))]), _vm._v(" "), _c("span", [_vm._v("XOF")])])]), _vm._v(" "), _vm._l(_vm.CUSTOMER_ACCOUNT_TYPE_NAME, function (tab) {
    var _vm$client36, _vm$client$accounts_d3, _vm$client37, _vm$client38;
    return (_vm$client36 = _vm.client) !== null && _vm$client36 !== void 0 && _vm$client36.accounts_data ? _c("article", {
      key: tab,
      staticClass: "resume-grid-item bg-white py-2 border rounded px-3 cursor-pointer",
      on: {
        click: function click($event) {
          return _vm.toggleSelectTab(tab);
        }
      }
    }, [_c("div", {
      staticClass: "d-flex mb-1 justify-content-between align-items-end gap-2 text-secondary"
    }, [_c("h6", {
      staticClass: "mb-0"
    }, [_vm._v(_vm._s(_vm.ACCOUNT_TYPE_NAMES[tab]))]), _vm._v(" "), _c("span", [_vm._v(_vm._s((_vm$client$accounts_d3 = (_vm$client37 = _vm.client) === null || _vm$client37 === void 0 || (_vm$client37 = _vm$client37.accounts_data[tab]) === null || _vm$client37 === void 0 ? void 0 : _vm$client37.length) !== null && _vm$client$accounts_d3 !== void 0 ? _vm$client$accounts_d3 : 0))])]), _vm._v(" "), _c("h4", {
      staticClass: "d-flex gap-2 justify-content-end text-start"
    }, [_c("span", [_vm._v(_vm._s(_vm._f("formatNumber")((_vm$client38 = _vm.client) === null || _vm$client38 === void 0 || (_vm$client38 = _vm$client38.accounts_data[tab]) === null || _vm$client38 === void 0 ? void 0 : _vm$client38.reduce(function (acc, curr) {
      return acc += parseInt(curr === null || curr === void 0 ? void 0 : curr.balance);
    }, 0))))]), _vm._v(" "), _c("span", [_vm._v("XOF")])])]) : _vm._e();
  })], 2)]), _vm._v(" "), _c("section", {
    staticClass: "mt-5 mb-2"
  }, [_c("div", {
    staticClass: "text-center mb-4"
  }, [_c("h3", {
    staticClass: "mb-1"
  }, [_c("span", [_vm._v("\n\n                                Liste de "), _c("b", [_vm._v(_vm._s(_vm.ACCOUNT_TYPE_NAMES[_vm.selectedAccountTab]))]), _vm._v(" "), _c("small", [_c("br"), _vm._v(" "), _vm.filtersText ? _c("span", [_vm._v(" avec "), _c("b", [_vm._v(_vm._s(_vm.filtersText))])]) : _vm._e(), _vm._v(" "), _c("br"), _vm._v(" "), _vm.accountSearchInput ? _c("span", [_vm._v(" correspondants à "), _c("b", [_vm._v('"' + _vm._s(_vm.accountSearchInput) + '"')])]) : _vm._e()])])]), _vm._v(" "), _c("h6", {
    staticClass: "text-secondary mb-3"
  }, [_vm._v("\n                            " + _vm._s((_vm$selectedAccountTa = (_vm$selectedAccountTa2 = _vm.selectedAccountTableData) === null || _vm$selectedAccountTa2 === void 0 ? void 0 : _vm$selectedAccountTa2.length) !== null && _vm$selectedAccountTa !== void 0 ? _vm$selectedAccountTa : "Aucun") + " compte" + _vm._s(((_vm$selectedAccountTa3 = _vm.selectedAccountTableData) === null || _vm$selectedAccountTa3 === void 0 ? void 0 : _vm$selectedAccountTa3.length) > 1 ? "s" : "") + " trouvé" + _vm._s(((_vm$selectedAccountTa4 = _vm.selectedAccountTableData) === null || _vm$selectedAccountTa4 === void 0 ? void 0 : _vm$selectedAccountTa4.length) > 1 ? "s" : "") + " sur " + _vm._s((_vm$client39 = _vm.client) === null || _vm$client39 === void 0 || (_vm$client39 = _vm$client39.comptes) === null || _vm$client39 === void 0 ? void 0 : _vm$client39.length) + " au total\n                        ")])]), _vm._v(" "), _c("div", {
    staticClass: "d-flex w-sm-100 justify-content-between flex-wrap flex-lg-nowrap align-items-stretch gap-3"
  }, [_c("div", {
    staticClass: "d-flex gap-2 justify-content-between flex-wrap flex-md-nowrap w-100 w-lg-auto align-items-stretch"
  }, [_c("div", {
    staticClass: "d-flex gap-2 justify-content-start"
  }, _vm._l(_vm.filters, function (filter, i) {
    return _c("span", {
      key: filter.key,
      "class": [_vm.isFilterSelected(filter) ? "border border-orange text-orange" : "border", "border px-2 py-1 d-flex justify-content-center align-items-center cursor-pointer"],
      attrs: {
        title: "Filtrer par " + filter.title
      },
      on: {
        click: function click($event) {
          return _vm.toggleSelectFilter(filter);
        }
      }
    }, [_vm._v("\n                                    " + _vm._s(filter.title) + "\n                                ")]);
  }), 0), _vm._v(" "), !!_vm.selectedFilter ? _c("span", {
    staticClass: "border px-2 ms-1 py-1 d-flex gap-2 justify-content-center align-items-center cursor-pointer text-danger border-danger",
    attrs: {
      title: "Effacer les filtres"
    },
    on: {
      click: _vm.clearFilters
    }
  }, [_vm._v("\n                                Effacer Filtres "), _c("i", {
    staticClass: "icofont icofont-close"
  })]) : _vm._e()]), _vm._v(" "), _c("div", {
    staticClass: "d-flex w-sm-100 w-md-100 w-lg-auto justify-content-end gap-3"
  }, [_c("span", {
    staticClass: "border d-flex w-sm-100 w-md-100 w-lg-auto gap-1 align-items-stretch bg-light"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.accountSearchInput,
      expression: "accountSearchInput"
    }],
    staticClass: "form-control border-0 px-2 border-none focus-none bg-light w-100 w-md-auto",
    attrs: {
      type: "text",
      placeholder: "Rechercher..."
    },
    domProps: {
      value: _vm.accountSearchInput
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.accountSearchInput = $event.target.value;
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "border-start bg-white p-1 px-2 d-flex justify-content-center align-items-center"
  }, [_vm.accountSearchInput ? _c("i", {
    staticClass: "icofont-close",
    on: {
      click: function click($event) {
        _vm.accountSearchInput = null;
      }
    }
  }) : _c("i", {
    staticClass: "icofont-search"
  })])])])])]), _vm._v(" "), _c("nav", {
    staticClass: "border mt-3 d-flex mb-2"
  }, [_c("ul", {
    staticClass: "d-flex scrollable-x bg-light border-start w-100"
  }, _vm._l(_vm.accountTableTabs, function (tab) {
    return _c("li", {
      key: tab,
      staticClass: "p-2 w-100 text-center cursor-pointer text-one-line bg-white border",
      "class": [_vm.isTabSelected(tab) ? "border-orange bg-white fw-bold text-orange" : ""],
      on: {
        click: function click($event) {
          return _vm.toggleSelectTab(tab);
        }
      }
    }, [_vm._v(_vm._s(_vm.ACCOUNT_TYPE_NAMES[tab]))]);
  }), 0)]), _vm._v(" "), _c("section", [_vm.selectedAccountTableData == null ? _c("div", {
    staticClass: "p-5 text-center"
  }, [_vm._v("\n                            Ce client n'a pas de " + _vm._s(_vm.ACCOUNT_TYPE_NAMES[_vm.selectedAccountTab]) + "\n                        ")]) : _c("table", {
    staticClass: "table table-responsive table-bordered table-striped"
  }, [_c("caption", [_vm._v("\n                                Liste de "), _c("b", [_vm._v(_vm._s(_vm.ACCOUNT_TYPE_NAMES[_vm.selectedAccountTab]))]), _vm._v(" "), _vm.filtersText ? _c("span", [_vm._v(" avec "), _c("b", [_vm._v(_vm._s(_vm.filtersText))])]) : _vm._e(), _vm._v(" "), _vm.accountSearchInput ? _c("span", [_vm._v(" correspondants à "), _c("b", [_vm._v('"' + _vm._s(_vm.accountSearchInput) + '"')])]) : _vm._e()]), _vm._v(" "), _vm._m(1), _vm._v(" "), _c("tbody", [_vm.selectedAccountTableData.length == 0 ? [_c("tr", [_c("td", {
    attrs: {
      colspan: "8"
    }
  }, [_c("div", {
    staticClass: "p-5 text-center"
  }, [_vm._v("\n                                                    Aucune ligne de "), _c("b", [_vm._v(_vm._s(_vm.ACCOUNT_TYPE_NAMES[_vm.selectedAccountTab]))]), _vm._v(" "), _vm.filtersText ? _c("span", [_vm._v(" avec "), _c("b", [_vm._v(_vm._s(_vm.filtersText))])]) : _vm._e(), _vm._v(" "), _vm.accountSearchInput ? _c("span", [_vm._v(" correspondants à "), _c("b", [_vm._v('"' + _vm._s(_vm.accountSearchInput) + '"')])]) : _vm._e()])])])] : _vm._l(_vm.selectedAccountTableData, function (account, i) {
    var _account$balance, _account$code, _account$class_code, _account$account_type, _account$currency_sig;
    return _c("tr", {
      key: i,
      "class": [(account === null || account === void 0 || (_account$balance = account.balance) === null || _account$balance === void 0 ? void 0 : _account$balance[0]) == "-" ? "text-danger" : (account === null || account === void 0 ? void 0 : account.status) != "O" ? "bg-light" : ""]
    }, [_c("td", {}, [_vm.accountSearchInput ? _c("span", {
      domProps: {
        innerHTML: _vm._s(_vm.highlightText(account === null || account === void 0 ? void 0 : account.code))
      }
    }) : _c("span", [_vm._v("\n                                                    " + _vm._s((_account$code = account === null || account === void 0 ? void 0 : account.code) !== null && _account$code !== void 0 ? _account$code : _vm.NULL_INDICATOR) + "\n                                                ")])]), _vm._v(" "), _c("td", {
      staticClass: "text-start"
    }, [_vm._v("\n                                                " + _vm._s((_account$class_code = account === null || account === void 0 ? void 0 : account.class_code) !== null && _account$class_code !== void 0 ? _account$class_code : _vm.NULL_INDICATOR) + "\n                                                -\n                                                "), _c("span", [_vm.accountSearchInput ? _c("span", {
      domProps: {
        innerHTML: _vm._s(_vm.highlightText(account === null || account === void 0 ? void 0 : account.account_type_name))
      }
    }) : _c("span", [_vm._v("\n                                                        " + _vm._s((_account$account_type = account === null || account === void 0 ? void 0 : account.account_type_name) !== null && _account$account_type !== void 0 ? _account$account_type : _vm.NULL_INDICATOR) + "\n                                                    ")])])]), _vm._v(" "), _c("td", {
      staticClass: "text-right"
    }, [_vm.accountSearchInput ? _c("span", {
      domProps: {
        innerHTML: _vm._s(_vm.highlightText(account === null || account === void 0 ? void 0 : account.balance))
      }
    }) : _c("span", [_vm._v("\n                                                    " + _vm._s(_vm._f("formatNumber")(account === null || account === void 0 ? void 0 : account.balance)) + "\n                                                ")])]), _vm._v(" "), _c("td", {
      staticClass: "text-right"
    }, [_vm._v(_vm._s(_vm._f("formatNumber")(account === null || account === void 0 ? void 0 : account.indicative_balance)))]), _vm._v(" "), _c("td", {
      staticClass: "text-center"
    }, [_vm.accountSearchInput ? _c("span", {
      domProps: {
        innerHTML: _vm._s(_vm.highlightText(account === null || account === void 0 ? void 0 : account.currency_sigle))
      }
    }) : _c("span", [_vm._v("\n                                                    " + _vm._s((_account$currency_sig = account === null || account === void 0 ? void 0 : account.currency_sigle) !== null && _account$currency_sig !== void 0 ? _account$currency_sig : _vm.NULL_INDICATOR) + "\n                                                ")])])]);
  })], 2)])])]]], 2);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "d-flex gap-3"
  }, [_c("aside")]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("th", [_vm._v("# Numéro de compte")]), _vm._v(" "), _c("th", [_vm._v("Libellé Comptable")]), _vm._v(" "), _c("th", {
    staticClass: "text-right"
  }, [_vm._v("Solde")]), _vm._v(" "), _c("th", {
    staticClass: "text-right"
  }, [_vm._v("Solde Indicatif")]), _vm._v(" "), _c("th", {
    staticClass: "text-center"
  }, [_vm._v("Devise")])])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/parts/afg/FicheClientAFG.vue?vue&type=style&index=0&id=46fc2561&scoped=true&lang=css":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/parts/afg/FicheClientAFG.vue?vue&type=style&index=0&id=46fc2561&scoped=true&lang=css ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.resume-container-grid[data-v-46fc2561]{\r\n    display: grid;\r\n    grid-template-columns: auto auto auto;\r\n    justify-content: center;\r\n    align-items: stretch;\n}\n.resume-container-grid > .resume-grid-item[data-v-46fc2561]:nth-child(7) {\r\n    grid-column: 2 / span 1;\n}\r\n\r\n/* Responsive styles for small screens (sm) */\n@media only screen and (max-width: 767px) {\n.resume-container-grid[data-v-46fc2561] {\r\n        grid-template-columns: auto;\n}\n.resume-container-grid > .resume-grid-item[data-v-46fc2561]:nth-child(3) {\r\n        grid-column: 1 / span 2;\n}\r\n    /* Adjust the grid item styles for the 7th item on small screens if needed */\n}\r\n\r\n/* Responsive styles for medium screens (md) */\n@media only screen and (min-width: 768px) and (max-width: 991px) {\r\n    /* Adjust styles as needed for medium screens */\n}\r\n\r\n/* Responsive styles for large screens (lg) */\n@media only screen and (min-width: 992px) {\r\n    /* Adjust styles as needed for large screens */\n.fiche-container[data-v-46fc2561]{\r\n        width: 992px !important;\r\n        margin: 1rem auto;\r\n        /* margin: 5rem auto; */\n}\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/parts/afg/FicheClientAFG.vue?vue&type=style&index=0&id=46fc2561&scoped=true&lang=css":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/parts/afg/FicheClientAFG.vue?vue&type=style&index=0&id=46fc2561&scoped=true&lang=css ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FicheClientAFG_vue_vue_type_style_index_0_id_46fc2561_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FicheClientAFG.vue?vue&type=style&index=0&id=46fc2561&scoped=true&lang=css */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/parts/afg/FicheClientAFG.vue?vue&type=style&index=0&id=46fc2561&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FicheClientAFG_vue_vue_type_style_index_0_id_46fc2561_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FicheClientAFG_vue_vue_type_style_index_0_id_46fc2561_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/parts/afg/FicheClientAFG.vue":
/*!**************************************************************!*\
  !*** ./resources/js/components/parts/afg/FicheClientAFG.vue ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _FicheClientAFG_vue_vue_type_template_id_46fc2561_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FicheClientAFG.vue?vue&type=template&id=46fc2561&scoped=true */ "./resources/js/components/parts/afg/FicheClientAFG.vue?vue&type=template&id=46fc2561&scoped=true");
/* harmony import */ var _FicheClientAFG_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FicheClientAFG.vue?vue&type=script&lang=js */ "./resources/js/components/parts/afg/FicheClientAFG.vue?vue&type=script&lang=js");
/* harmony import */ var _FicheClientAFG_vue_vue_type_style_index_0_id_46fc2561_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FicheClientAFG.vue?vue&type=style&index=0&id=46fc2561&scoped=true&lang=css */ "./resources/js/components/parts/afg/FicheClientAFG.vue?vue&type=style&index=0&id=46fc2561&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _FicheClientAFG_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _FicheClientAFG_vue_vue_type_template_id_46fc2561_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _FicheClientAFG_vue_vue_type_template_id_46fc2561_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "46fc2561",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/parts/afg/FicheClientAFG.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/parts/afg/FicheClientAFG.vue?vue&type=script&lang=js":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/parts/afg/FicheClientAFG.vue?vue&type=script&lang=js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FicheClientAFG_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FicheClientAFG.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/parts/afg/FicheClientAFG.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FicheClientAFG_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/parts/afg/FicheClientAFG.vue?vue&type=style&index=0&id=46fc2561&scoped=true&lang=css":
/*!**********************************************************************************************************************!*\
  !*** ./resources/js/components/parts/afg/FicheClientAFG.vue?vue&type=style&index=0&id=46fc2561&scoped=true&lang=css ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FicheClientAFG_vue_vue_type_style_index_0_id_46fc2561_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FicheClientAFG.vue?vue&type=style&index=0&id=46fc2561&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/parts/afg/FicheClientAFG.vue?vue&type=style&index=0&id=46fc2561&scoped=true&lang=css");


/***/ }),

/***/ "./resources/js/components/parts/afg/FicheClientAFG.vue?vue&type=template&id=46fc2561&scoped=true":
/*!********************************************************************************************************!*\
  !*** ./resources/js/components/parts/afg/FicheClientAFG.vue?vue&type=template&id=46fc2561&scoped=true ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FicheClientAFG_vue_vue_type_template_id_46fc2561_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FicheClientAFG_vue_vue_type_template_id_46fc2561_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FicheClientAFG_vue_vue_type_template_id_46fc2561_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FicheClientAFG.vue?vue&type=template&id=46fc2561&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/parts/afg/FicheClientAFG.vue?vue&type=template&id=46fc2561&scoped=true");


/***/ })

}]);