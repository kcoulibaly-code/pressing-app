"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_reportex_statistics_Delais_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/reportex/statistics/Delais.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/reportex/statistics/Delais.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_ebapis_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/ebapis.service */ "./resources/js/services/ebapis.service.js");
/* harmony import */ var _workflow_AutocompleteSearch_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../workflow/AutocompleteSearch.vue */ "./resources/js/components/workflow/AutocompleteSearch.vue");
/* harmony import */ var _Tab_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Tab.vue */ "./resources/js/components/reportex/statistics/Tab.vue");
/* harmony import */ var _StatTable_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./StatTable.vue */ "./resources/js/components/reportex/statistics/StatTable.vue");
/* harmony import */ var _Delais2_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Delais2.vue */ "./resources/js/components/reportex/statistics/Delais2.vue");
/* harmony import */ var _services_credit_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/credit.service */ "./resources/js/services/credit.service.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }






/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    AutocompleteSearch: _workflow_AutocompleteSearch_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    StatTable: _StatTable_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    Tab: _Tab_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    Delais2: _Delais2_vue__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  props: {
    title: {
      type: String
    }
  },
  created: function created() {
    var _this = this;
    this.selected = this.btns[0];
    this.getDossByRole();
    this.getAllDoss();
    this.getAllDoss(true);
    // Credit.loadusers()
    //     .then((res) => {
    //         this.users = res.data;

    //     })
    //     .catch((err) => this.loadWithError(err))
    EventBus.$on('reportex-update-stats', function () {
      _this.getDossByRole();
      _this.getAllDoss();
      _this.getAllDoss(true);
    });
  },
  computed: {
    filiale: function filiale() {
      var _this$user;
      return this.__filiale__ || ((_this$user = this.user) === null || _this$user === void 0 ? void 0 : _this$user.filiale);
    },
    selectParameter: function selectParameter() {
      if (false) // removed by dead control flow
{}
    },
    user: function user() {
      return this.$store.state.reportex.user;
    },
    currentProps: function currentProps() {
      return this.selected;
    },
    intervenant_header: function intervenant_header() {
      var _this$data_intervenan;
      if (this.data_intervenant && ((_this$data_intervenan = this.data_intervenant) === null || _this$data_intervenan === void 0 || (_this$data_intervenan = _this$data_intervenan.dossiers) === null || _this$data_intervenan === void 0 ? void 0 : _this$data_intervenan.length) > 0) {
        return Object.keys(this.data_intervenant.dossiers[0]);
      } else return [];
    },
    role_header: function role_header() {
      var _this$data_role;
      if (this.data_role && ((_this$data_role = this.data_role) === null || _this$data_role === void 0 ? void 0 : _this$data_role.length) > 0) {
        var _this$data_role2;
        return Object.keys((_this$data_role2 = this.data_role) === null || _this$data_role2 === void 0 ? void 0 : _this$data_role2[0]);
      } else return [];
    },
    user_header: function user_header() {
      var _this$data_user;
      if (this.data_user && ((_this$data_user = this.data_user) === null || _this$data_user === void 0 ? void 0 : _this$data_user.length) > 0) {
        var _this$data_user2;
        return Object.keys((_this$data_user2 = this.data_user) === null || _this$data_user2 === void 0 ? void 0 : _this$data_user2[0]);
      } else return [];
    },
    specific_role_header: function specific_role_header() {
      var _this$data_specific_r;
      if (this.data_specific_role && ((_this$data_specific_r = this.data_specific_role) === null || _this$data_specific_r === void 0 ? void 0 : _this$data_specific_r.length) > 0) {
        var _this$data_specific_r2;
        return Object.keys((_this$data_specific_r2 = this.data_specific_role) === null || _this$data_specific_r2 === void 0 ? void 0 : _this$data_specific_r2[0]);
      } else return [];
    },
    global_header: function global_header() {
      var _this$data_global;
      if (this.data_global && ((_this$data_global = this.data_global) === null || _this$data_global === void 0 || (_this$data_global = _this$data_global.dossiers) === null || _this$data_global === void 0 ? void 0 : _this$data_global.length) > 0) {
        var _this$data_global$dos;
        return Object.keys((_this$data_global$dos = this.data_global.dossiers) === null || _this$data_global$dos === void 0 ? void 0 : _this$data_global$dos[0]);
      } else return [];
    },
    type_header: function type_header() {
      var _this$data_type_credi;
      if (this.data_type_credit && ((_this$data_type_credi = this.data_type_credit) === null || _this$data_type_credi === void 0 ? void 0 : _this$data_type_credi.length) > 0) {
        var _this$data_type_credi2;
        return Object.keys((_this$data_type_credi2 = this.data_type_credit) === null || _this$data_type_credi2 === void 0 ? void 0 : _this$data_type_credi2[0]);
      } else return [];
    },
    searchKeys: function searchKeys() {
      if (this.sigle) {
        if (!this.data_user) {
          if (this.detailed) return ['name', 'Client', 'Dossier'];else return ['name'];
        }
        return ['Dossier', "Client"];
      }
      return ["name", "sigle"];
    }
  },
  data: function data() {
    return _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({
      ebapisHost: _services_ebapis_service__WEBPACK_IMPORTED_MODULE_0__["default"].host,
      data_intervenant: null,
      data_role: null,
      users: null,
      intervenant: 121,
      roles: null,
      data_global: null,
      data_user: null,
      data_specific_role: null,
      username: null,
      sigle: null,
      data_type_credit: null,
      btns: [{
        label: "Role",
        title: "Delais de dossiers par role"
      },
      // headers: _vm.role_header, items: _vm.data_role
      {
        label: "Intervenant",
        title: "Delais de dossiers par intervenant"
      }, {
        label: "Produit",
        title: "Delais de dossiers par produit"
      },
      // , headers: _vm.type_header, items: _vm.data_type_credit
      {
        label: "Global",
        title: "Delais de dossiers global"
      },
      // , headers: _vm.global_header, items: _vm.data_global
      {
        label: "Rapport",
        title: "Rapport sur les delais de dossiers"
      } // , headers: _vm.global_header, items: _vm.data_global
      ],
      selected: null,
      reverse: false,
      sortKey: {
        "Intervenant": "Montant",
        "autre": "Moyenne"
      },
      globaly: true
    }, "username", null), "user_id", null), "type_credit", null), "year", new Date().getFullYear()), "loading", false), "detailed", false);
  },
  methods: {
    roleGoBack: function roleGoBack(variable) {
      if (variable == "data_role") {
        this.sigle = null;
        this.globaly = true;
      }
      this.username = null;
      this.data_user = null;
      this.setRoleBtn();
    },
    setRoleBtn: function setRoleBtn() {
      var btn = this.btns.find(function (el) {
        return el.label == "Role";
      });
      var btnInd = this.btns.findIndex(function (el) {
        return el.label == "Role";
      });
      if (this.globaly) {
        btn.items = this.data_role;
        btn.headers = this.role_header;
      } else {
        if (this.username) {
          btn.items = this.data_user;
          btn.headers = this.user_header;
        } else {
          btn.items = this.data_specific_role;
          btn.headers = this.specific_role_header;
        }
      }
      this.btns.splice(btnInd, 1, btn);
    },
    makeSelection: function makeSelection(event) {
      this.globaly = false;
      if (this.sigle) {
        this.username = event.name;
        this.getDossByRole(this.sigle);
      } else {
        this.getDossByRole(event);
      }
    },
    sortCurrent: function sortCurrent(event) {
      var _this$selected, _this$selected2, _this$selected3;
      this.reverse = !this.reverse;
      if (((_this$selected = this.selected) === null || _this$selected === void 0 ? void 0 : _this$selected.label) == "Intervenant") {
        this.sortKey['Intervenant'] = event;
        this.getDossByIntervenant(this.user_id);
      } else if (((_this$selected2 = this.selected) === null || _this$selected2 === void 0 ? void 0 : _this$selected2.label) == "Role") {
        this.sortKey['autre'] = event;
        if (this.sigle) {
          this.getDossByRole(this.sigle);
        } else {
          this.getDossByRole();
        }
      } else if (((_this$selected3 = this.selected) === null || _this$selected3 === void 0 ? void 0 : _this$selected3.label) == "Produit") {
        this.sortKey['autre'] = event;
        this.getAllDoss(true);
      } else {
        this.sortKey['Intervenant'] = event;
        this.getAllDoss();
      }
    },
    changeYearCurrent: function changeYearCurrent(event) {
      var _this$selected4, _this$selected5, _this$selected6;
      this.year = event;
      if (((_this$selected4 = this.selected) === null || _this$selected4 === void 0 ? void 0 : _this$selected4.label) == "Intervenant") {
        this.getDossByIntervenant(this.user_id);
      } else if (((_this$selected5 = this.selected) === null || _this$selected5 === void 0 ? void 0 : _this$selected5.label) == "Role") {
        if (this.sigle) {
          this.getDossByRole(this.sigle);
        } else {
          this.getDossByRole();
        }
      } else if (((_this$selected6 = this.selected) === null || _this$selected6 === void 0 ? void 0 : _this$selected6.label) == "Produit") {
        this.getAllDoss(true);
      } else {
        this.getAllDoss();
      }
    },
    completed_in: function completed_in(_completed_in) {
      if (Array.isArray(_completed_in)) {
        var days = 0,
          hours = 0,
          minutes = 0,
          seconds = 0;
        if (_completed_in) {
          var list = _completed_in.map(function (el) {
            return Math.abs(el);
          });
          days = list[0];
          hours = list[1];
          minutes = list[2];
          seconds = list[3];
        }
        // return `${parseInt(seconds)}s`;

        if (days == 0 && hours == 0 && minutes == 0) return "".concat(parseInt(seconds), "s");
        if (days == 0 && hours == 0) return "".concat(minutes, "m ").concat(parseInt(seconds), "s");
        if (days == 0) return "".concat(hours, "h ").concat(minutes, "m ").concat(parseInt(seconds), "s");
        return "".concat(days, "j ").concat(hours, "h ").concat(minutes, "m ").concat(parseInt(seconds), "s");
      } else if (typeof _completed_in == "number") {
        var _days = Math.floor(_completed_in / (60 * 60 * 24));
        var _hours = Math.floor(_completed_in % (60 * 60 * 24) / (60 * 60));
        var _minutes = Math.floor(_completed_in % (60 * 60) / 60);
        var _seconds = Math.floor(_completed_in % 60);
        if (_days == 0 && _hours == 0 && _minutes == 0) return "".concat(parseInt(_seconds), "s");
        if (_days == 0 && _hours == 0) return "".concat(_minutes, "m ").concat(parseInt(_seconds), "s");
        if (_days == 0) return "".concat(_hours, "h ").concat(_minutes, "m ").concat(parseInt(_seconds), "s");
        return "".concat(_days, "j ").concat(_hours, "h ").concat(_minutes, "m ").concat(parseInt(_seconds), "s");
      }
      return '';
    },
    getAllDoss: function getAllDoss(type_credit) {
      var _this$user2,
        _this2 = this;
      this.loading = true;
      this.$axios.post(this.reportex_link() + "reportex/api/v1/stat-delais-global/", {
        type_credit: type_credit,
        filiale: this.__filiale__ || ((_this$user2 = this.user) === null || _this$user2 === void 0 ? void 0 : _this$user2.filiale),
        sort: {
          reverse: this.reverse,
          key: type_credit ? this.sortKey.autre : this.sortKey.Intervenant
        },
        filter: this.$store.state.reportex.filter,
        year: this.year
      }).then(function (res) {
        if (type_credit) {
          res.data.forEach(function (el) {
            for (var key in el) {
              if (!["Nombre total dossier", "sigle", "Nom", "Montant", "username", "Dossier", "Client"].includes(key)) el[key] = _this2.completed_in(el[key]);
              if (key == 'Montant') el[key] = el[key].toLocaleString('fr-FR');
            }
          });
          _this2.data_type_credit = res.data;
        } else {
          res.data.dossiers.forEach(function (el) {
            el['Duree Reelle'] = _this2.completed_in(el['Duree Reelle']);
            el['Date Debut'] = new Date(el['Date Debut']).toLocaleDateString();
            // let fin = el['Date Fin'].split(' ')?.[0].split('-').reverse().join()
            el['Date Fin'] = new Date(el['Date Fin']).toLocaleDateString('fr-FR');
            el['Montant'] = el['Montant'].toLocaleString("fr-FR");
          });
          for (var key in (_res$data = res.data) === null || _res$data === void 0 ? void 0 : _res$data.total) {
            var _res$data;
            if (key != "Nombre total dossier") res.data.total[key] = _this2.completed_in(res.data.total[key]);
          }
          _this2.data_global = res.data;
        }
      })["catch"](function (err) {
        console.error(err);
      })["finally"](function () {
        return _this2.loading = false;
      });
    },
    // getRoles() {
    //    this.$axios.post(this.reportex_link() + "reportex/api/v1/get-roles/", {})
    //         .then(res => {
    //             this.roles = res.data.data
    //         })
    //         .catch(err => { console.log(err) })
    // },
    getDossByIntervenant: function getDossByIntervenant(user_id) {
      var _this3 = this;
      this.loading = true;
      // reportex/api/v1/stat-delais-intervenant/
      this.$axios.post(this.reportex_link() + "reportex/api/v1/stat-delais-intervenant/", {
        user_id: user_id,
        sort: {
          reverse: this.reverse,
          key: this.sortKey['Intervenant']
        }
      }).then(function (res) {
        res.data.dossiers.forEach(function (el) {
          el['Duree Reelle'] = _this3.completed_in(el['Duree Reelle']);
          el['Montant'] = el['Montant'].toLocaleString("fr-FR");
        });
        for (var key in (_res$data2 = res.data) === null || _res$data2 === void 0 ? void 0 : _res$data2.total) {
          var _res$data2;
          if (key != "Nombre total dossier") res.data.total[key] = _this3.completed_in(res.data.total[key]);
        }
        _this3.data_intervenant = res.data;
      })["catch"](function (err) {
        console.error(err);
      })["finally"](function () {
        return _this3.loading = false;
      });
    },
    getDossByRole: function getDossByRole(role, username) {
      var _this$user3,
        _this4 = this;
      this.loading = true;
      if (!this.globaly) this.sigle = role;
      this.$axios.post(this.reportex_link() + "reportex/api/v1/stat-delais-role/", {
        role: role,
        globaly: this.globaly,
        username: this.username,
        filiale: this.__filiale__ || ((_this$user3 = this.user) === null || _this$user3 === void 0 ? void 0 : _this$user3.filiale),
        sort: {
          reverse: this.reverse,
          key: this.sortKey.autre
        },
        filter: this.$store.state.reportex.filter,
        year: this.year,
        detailed: this.detailed
      }).then(function (res) {
        res.data.data.forEach(function (el) {
          // el['Duree Reelle'] = this.completed_in(el['Duree Reelle'])
          for (var key in el) {
            if (!["Nombre total dossier", "sigle", "name", "Montant", "username", "Dossier", "Client", 'avis'].includes(key)) el[key] = _this4.completed_in(el[key]);
            if (key == 'Montant') el[key] = el[key].toLocaleString('fr-FR');
          }
        });
        var btn = _this4.btns.find(function (el) {
          return el.label == "Role";
        });
        var btnInd = _this4.btns.findIndex(function (el) {
          return el.label == "Role";
        });
        if (_this4.globaly) {
          _this4.data_role = res.data.data;
          btn.headers = _this4.role_header;
        } else {
          if (_this4.username) {
            _this4.data_user = res.data.data;
            btn.headers = _this4.user_header;
          } else {
            _this4.data_specific_role = res.data.data;
            btn.headers = _this4.specific_role_header;
          }
        }
        btn.items = res.data.data;
        _this4.btns.splice(btnInd, 1, btn);
      })["catch"](function (err) {
        console.error(err);
      })["finally"](function () {
        return _this4.loading = false;
      });
    }
  },
  filters: {
    formatStamp: function formatStamp(completed_in) {
      if (completed_in) {
        var days = 0,
          hours = 0,
          minutes = 0,
          seconds = 0;
        if (completed_in) {
          var list = completed_in.map(function (el) {
            return Math.abs(el);
          });
          days = list[0];
          hours = list[1];
          minutes = list[2];
          seconds = list[3];
        }
        // return `${parseInt(seconds)}s`;

        if (days == 0 && hours == 0 && minutes == 0) return "".concat(parseInt(seconds), "s");
        if (days == 0 && hours == 0) return "".concat(minutes, "m ").concat(parseInt(seconds), "s");
        if (days == 0) return "".concat(hours, "h ").concat(minutes, "m ").concat(parseInt(seconds), "s");
        return "".concat(days, "j ").concat(hours, "h ").concat(minutes, "m ").concat(parseInt(seconds), "s");
      }
      return '';
    }
  },
  watch: {
    data_intervenant: function data_intervenant(val) {
      var _this$data_intervenan2, _this$data_intervenan3;
      var btn = this.btns.find(function (el) {
        return el.label == "Intervenant";
      });
      btn.headers = this.intervenant_header;
      btn.items = (_this$data_intervenan2 = this.data_intervenant) === null || _this$data_intervenan2 === void 0 ? void 0 : _this$data_intervenan2.dossiers;
      btn.total = (_this$data_intervenan3 = this.data_intervenant) === null || _this$data_intervenan3 === void 0 ? void 0 : _this$data_intervenan3.total;
      var btnInd = this.btns.findIndex(function (el) {
        return el.label == "Intervenant";
      });
      this.btns.splice(btnInd, 1, btn);
    },
    data_role: function data_role(val) {
      var btn = this.btns.find(function (el) {
        return el.label == "Role";
      });
      btn.headers = this.role_header;
      btn.items = this.data_role;
      var btnInd = this.btns.findIndex(function (el) {
        return el.label == "Role";
      });
      this.btns.splice(btnInd, 1, btn);
      // btn.total = this.data_intervenant?.total
    },
    data_type_credit: function data_type_credit(val) {
      var btn = this.btns.find(function (el) {
        return el.label == "Produit";
      });
      btn.headers = this.type_header;
      btn.items = this.data_type_credit;
      var btnInd = this.btns.findIndex(function (el) {
        return el.label == "Produit";
      });
      this.btns.splice(btnInd, 1, btn);
      // btn.total = this.data_intervenant?.total
    },
    data_global: function data_global(val) {
      var _this$data_global2, _this$data_global3;
      var btn = this.btns.find(function (el) {
        return el.label == "Global";
      });
      btn.headers = this.global_header;
      btn.items = (_this$data_global2 = this.data_global) === null || _this$data_global2 === void 0 ? void 0 : _this$data_global2.dossiers;
      btn.total = (_this$data_global3 = this.data_global) === null || _this$data_global3 === void 0 ? void 0 : _this$data_global3.total;
      var btnInd = this.btns.findIndex(function (el) {
        return el.label == "Global";
      });
      this.btns.splice(btnInd, 1, btn);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/reportex/statistics/Delais2.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/reportex/statistics/Delais2.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _StatTable_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StatTable.vue */ "./resources/js/components/reportex/statistics/StatTable.vue");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return r; }; var t, r = {}, e = Object.prototype, n = e.hasOwnProperty, o = "function" == typeof Symbol ? Symbol : {}, i = o.iterator || "@@iterator", a = o.asyncIterator || "@@asyncIterator", u = o.toStringTag || "@@toStringTag"; function c(t, r, e, n) { Object.defineProperty(t, r, { value: e, enumerable: !n, configurable: !n, writable: !n }); } try { c({}, ""); } catch (t) { c = function c(t, r, e) { return t[r] = e; }; } function h(r, e, n, o) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype); return c(a, "_invoke", function (r, e, n) { var o = 1; return function (i, a) { if (3 === o) throw Error("Generator is already running"); if (4 === o) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var u = n.delegate; if (u) { var c = d(u, n); if (c) { if (c === f) continue; return c; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (1 === o) throw o = 4, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = 3; var h = s(r, e, n); if ("normal" === h.type) { if (o = n.done ? 4 : 2, h.arg === f) continue; return { value: h.arg, done: n.done }; } "throw" === h.type && (o = 4, n.method = "throw", n.arg = h.arg); } }; }(r, n, new Context(o || [])), !0), a; } function s(t, r, e) { try { return { type: "normal", arg: t.call(r, e) }; } catch (t) { return { type: "throw", arg: t }; } } r.wrap = h; var f = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var l = {}; c(l, i, function () { return this; }); var p = Object.getPrototypeOf, y = p && p(p(x([]))); y && y !== e && n.call(y, i) && (l = y); var v = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(l); function g(t) { ["next", "throw", "return"].forEach(function (r) { c(t, r, function (t) { return this._invoke(r, t); }); }); } function AsyncIterator(t, r) { function e(o, i, a, u) { var c = s(t[o], t, i); if ("throw" !== c.type) { var h = c.arg, f = h.value; return f && "object" == _typeof(f) && n.call(f, "__await") ? r.resolve(f.__await).then(function (t) { e("next", t, a, u); }, function (t) { e("throw", t, a, u); }) : r.resolve(f).then(function (t) { h.value = t, a(h); }, function (t) { return e("throw", t, a, u); }); } u(c.arg); } var o; c(this, "_invoke", function (t, n) { function i() { return new r(function (r, o) { e(t, n, r, o); }); } return o = o ? o.then(i, i) : i(); }, !0); } function d(r, e) { var n = e.method, o = r.i[n]; if (o === t) return e.delegate = null, "throw" === n && r.i["return"] && (e.method = "return", e.arg = t, d(r, e), "throw" === e.method) || "return" !== n && (e.method = "throw", e.arg = new TypeError("The iterator does not provide a '" + n + "' method")), f; var i = s(o, r.i, e.arg); if ("throw" === i.type) return e.method = "throw", e.arg = i.arg, e.delegate = null, f; var a = i.arg; return a ? a.done ? (e[r.r] = a.value, e.next = r.n, "return" !== e.method && (e.method = "next", e.arg = t), e.delegate = null, f) : a : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, f); } function w(t) { this.tryEntries.push(t); } function m(r) { var e = r[4] || {}; e.type = "normal", e.arg = t, r[4] = e; } function Context(t) { this.tryEntries = [[-1]], t.forEach(w, this), this.reset(!0); } function x(r) { if (null != r) { var e = r[i]; if (e) return e.call(r); if ("function" == typeof r.next) return r; if (!isNaN(r.length)) { var o = -1, a = function e() { for (; ++o < r.length;) if (n.call(r, o)) return e.value = r[o], e.done = !1, e; return e.value = t, e.done = !0, e; }; return a.next = a; } } throw new TypeError(_typeof(r) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, c(v, "constructor", GeneratorFunctionPrototype), c(GeneratorFunctionPrototype, "constructor", GeneratorFunction), c(GeneratorFunctionPrototype, u, GeneratorFunction.displayName = "GeneratorFunction"), r.isGeneratorFunction = function (t) { var r = "function" == typeof t && t.constructor; return !!r && (r === GeneratorFunction || "GeneratorFunction" === (r.displayName || r.name)); }, r.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, c(t, u, "GeneratorFunction")), t.prototype = Object.create(v), t; }, r.awrap = function (t) { return { __await: t }; }, g(AsyncIterator.prototype), c(AsyncIterator.prototype, a, function () { return this; }), r.AsyncIterator = AsyncIterator, r.async = function (t, e, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(h(t, e, n, o), i); return r.isGeneratorFunction(e) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, g(v), c(v, u, "Generator"), c(v, i, function () { return this; }), c(v, "toString", function () { return "[object Generator]"; }), r.keys = function (t) { var r = Object(t), e = []; for (var n in r) e.unshift(n); return function t() { for (; e.length;) if ((n = e.pop()) in r) return t.value = n, t.done = !1, t; return t.done = !0, t; }; }, r.values = x, Context.prototype = { constructor: Context, reset: function reset(r) { if (this.prev = this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(m), !r) for (var e in this) "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0][4]; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(r) { if (this.done) throw r; var e = this; function n(t) { a.type = "throw", a.arg = r, e.next = t; } for (var o = e.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i[4], u = this.prev, c = i[1], h = i[2]; if (-1 === i[0]) return n("end"), !1; if (!c && !h) throw Error("try statement without catch or finally"); if (null != i[0] && i[0] <= u) { if (u < c) return this.method = "next", this.arg = t, n(c), !0; if (u < h) return n(h), !1; } } }, abrupt: function abrupt(t, r) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var n = this.tryEntries[e]; if (n[0] > -1 && n[0] <= this.prev && this.prev < n[2]) { var o = n; break; } } o && ("break" === t || "continue" === t) && o[0] <= r && r <= o[2] && (o = null); var i = o ? o[4] : {}; return i.type = t, i.arg = r, o ? (this.method = "next", this.next = o[2], f) : this.complete(i); }, complete: function complete(t, r) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && r && (this.next = r), f; }, finish: function finish(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[2] === t) return this.complete(e[4], e[3]), m(e), f; } }, "catch": function _catch(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[0] === t) { var n = e[4]; if ("throw" === n.type) { var o = n.arg; m(e); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(r, e, n) { return this.delegate = { i: x(r), r: e, n: n }, "next" === this.method && (this.arg = t), f; } }, r; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Delais2",
  components: {
    StatTable: _StatTable_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  computed: {
    user: function user() {
      return this.$store.state.reportex.user;
    },
    filiale: function filiale() {
      return this.$store.state.reportex.filiale;
    },
    agences: function agences() {
      var _this$$store$state$re,
        _this = this;
      return this.filiale ? (_this$$store$state$re = this.$store.state.reportex.filiales) === null || _this$$store$state$re === void 0 || (_this$$store$state$re = _this$$store$state$re.find(function (el) {
        return el.name == _this.filiale;
      })) === null || _this$$store$state$re === void 0 ? void 0 : _this$$store$state$re.agences : [];
    },
    start_date: function start_date() {
      if (this.filtre.mois) {
        return "".concat(this.year, "-").concat(this.filtre.mois);
      }
      return '';
    },
    end_date: function end_date() {
      if (this.filtre.mois) {
        return "".concat(this.year, "-").concat(this.filtre.mois);
      }
      return '';
    }
  },
  data: function data() {
    return {
      loading: false,
      items: [],
      headers: [],
      // start_date: '',
      // end_date: '',
      period: "ytd",
      filtre: {
        mois: '',
        agence: ''
      },
      segmentFiltre: {
        type_de_clientele: ''
      },
      year: new Date().getFullYear(),
      buttons: [{
        label: "Mois",
        model: "mois",
        options: [{
          label: "Mois",
          value: ""
        }, {
          label: "Janvier",
          value: 1
        }, {
          label: "Février",
          value: 2
        }, {
          label: "Mars",
          value: 3
        }, {
          label: "Avril",
          value: 4
        }, {
          label: "Mai",
          value: 5
        }, {
          label: "Juin",
          value: 6
        }, {
          label: "Juillet",
          value: 7
        }, {
          label: "Août",
          value: 8
        }, {
          label: "Septembre",
          value: 9
        }, {
          label: "Octobre",
          value: 10
        }, {
          label: "Novembre",
          value: 11
        }, {
          label: "Décembre",
          value: 12
        }]
      }],
      segmentation_buttons: [{
        label: "Type de clientele",
        model: 'type_de_clientele',
        options: [{
          label: "Type de clientele",
          value: ""
        }, {
          label: "Retail",
          value: "Retail"
        }, {
          label: "Corporate",
          value: "Corporate"
        }]
      }],
      segmentation_items: [],
      segmentation_headers: []
    };
  },
  created: function created() {
    this.getData();
    this.getSegmentData();
  },
  methods: {
    getData: function getData() {
      var _this2 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _this2.loading = true;
              _this2.$axios.post(_this2.reportex_link() + "reportex/api/v1/delais-traitement/", {
                filiale: _this2.filiale,
                // order: this.source_analyse?.order, 
                period: _this2.filtre.mois ? 'custom' : _this2.period,
                // type_deal: this.type_analyse, 
                start_date: _this2.start_date,
                end_date: _this2.end_date,
                agence: _this2.filtre.agence,
                year: _this2.year
              }).then(function (res) {
                var _this2$items;
                var total = res.data.data.map(function (el) {
                  return el.sum;
                }).reduce(function (sum, curr) {
                  return sum + curr;
                }, 0);
                _this2.items = res.data.data.map(function (el) {
                  el.percent = (el.sum / (total || 1) * 100).toFixed(2);
                  return el;
                });
                if ((_this2$items = _this2.items) !== null && _this2$items !== void 0 && _this2$items.length) {
                  var keys = Object.keys(_this2.items[0]);
                  _this2.headers = keys.filter(function (el) {
                    return el != 'percent';
                  });
                }

                // same calcul for counts
                //   const total_count = res.data.count.map(el => el.count).reduce((sum, curr) => sum + curr, 0)
                //   this.count_data = res.data.count.map(el => {
                //     el.percent = ((el.count / (total_count || 1)) * 100).toFixed(2)
                //     return el
                //   })
                //   if (this.count_data?.length) {

                //     const keys = Object.keys(this.count_data[0])
                //     this.count_headers = keys.filter(el => el != 'percent')
                //   }
              })["finally"](function () {
                return _this2.loading = false;
              });
            case 2:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }))();
    },
    getSegmentData: function getSegmentData() {
      var _this3 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _this3.loading = true;
              _this3.$axios.post(_this3.reportex_link() + "reportex/api/v1/delais-traitement/", {
                filiale: _this3.filiale,
                period: _this3.filtre.mois ? 'custom' : _this3.period,
                start_date: _this3.start_date,
                end_date: _this3.end_date,
                agence: _this3.filtre.agence,
                year: _this3.year,
                type_de_clientele: _this3.segmentFiltre.type_de_clientele,
                type_credit: true
              }).then(function (res) {
                var _this3$segmentation_i;
                var total = res.data.data.map(function (el) {
                  return el.sum;
                }).reduce(function (sum, curr) {
                  return sum + curr;
                }, 0);
                _this3.segmentation_items = res.data.data;
                if ((_this3$segmentation_i = _this3.segmentation_items) !== null && _this3$segmentation_i !== void 0 && _this3$segmentation_i.length) {
                  var keys = Object.keys(_this3.segmentation_items[0]);
                  _this3.segmentation_headers = keys.filter(function (el) {
                    return el != 'percent';
                  });
                }
              })["finally"](function () {
                return _this3.loading = false;
              });
            case 2:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }))();
    }
  },
  watch: {
    filiale: {
      handler: function handler() {
        this.buttons = [this.buttons[0], {
          label: "Agence",
          model: "agence",
          options: [{
            label: "Agence",
            value: ""
          }].concat(_toConsumableArray(this.agences.map(function (el) {
            return {
              label: el.name,
              value: el.code
            };
          })))
        }];
      },
      immediate: true
    }
  },
  mounted: function mounted() {
    var _this4 = this;
    EventBus.$on('reportex-update-stats', /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            _this4.getData();
            _this4.getSegmentData();
          case 2:
          case "end":
            return _context3.stop();
        }
      }, _callee3);
    })));
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/reportex/statistics/Delais.vue?vue&type=template&id=a0446d62&scoped=true":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/reportex/statistics/Delais.vue?vue&type=template&id=a0446d62&scoped=true ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm$selected2;
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12"
  }, [_c("div", [_c("div", {
    staticClass: "my-2 p-1 bg-grey rounded d-flex gap-2",
    staticStyle: {
      width: "fit-content"
    }
  }, _vm._l(_vm.btns, function (btn) {
    var _vm$selected;
    return _c("button", {
      key: btn.label,
      staticClass: "btn btn-sm border-0",
      "class": ((_vm$selected = _vm.selected) === null || _vm$selected === void 0 ? void 0 : _vm$selected.label) == btn.label ? "active-btn shadow" : "bg-grey",
      on: {
        click: function click($event) {
          _vm.selected = btn;
        }
      }
    }, [_vm._v("\n                    " + _vm._s(btn.label) + "\n                ")]);
  }), 0), _vm._v(" "), _c(((_vm$selected2 = _vm.selected) === null || _vm$selected2 === void 0 ? void 0 : _vm$selected2.label) == "Rapport" ? "Delais2" : "StatTable", _vm._b({
    tag: "component",
    attrs: {
      loading: _vm.loading,
      useSearch: "",
      searchKey: _vm.searchKeys
    },
    on: {
      yearChanged: _vm.changeYearCurrent,
      sort: function sort($event) {
        return _vm.sortCurrent($event);
      },
      select: function select($event) {
        return _vm.makeSelection($event);
      }
    },
    scopedSlots: _vm._u([{
      key: "header",
      fn: function fn() {
        var _vm$selected3, _vm$data_user$, _vm$sigle;
        return [((_vm$selected3 = _vm.selected) === null || _vm$selected3 === void 0 ? void 0 : _vm$selected3.label) == "Intervenant" ? _c("div", {
          staticClass: "row"
        }, [_c("div", {
          staticClass: "col-7"
        }, [_c("autocomplete-search", {
          attrs: {
            filiale: _vm.__filiale__,
            items: [],
            labelKey: "name",
            valueKey: "email",
            placeholder: "Veuillez choisir un intervenant"
          },
          on: {
            change: function change($event) {
              _vm.user_id = $event === null || $event === void 0 ? void 0 : $event.id;
              _vm.getDossByIntervenant($event === null || $event === void 0 ? void 0 : $event.id);
            }
          }
        })], 1)]) : [!_vm.sigle ? _c("div", {
          staticClass: "row"
        }, [_c("div", {
          staticClass: "col"
        }, [_c("h5", {
          staticClass: "card-title"
        }, [_vm._v(" Delais de dossier par role ")])])]) : _vm.sigle && !_vm.data_user ? _c("div", {
          staticClass: "row"
        }, [_c("div", {
          staticClass: "col"
        }, [_c("h5", {
          staticClass: "card-title"
        }, [_vm._v(" Delais de dossiers par " + _vm._s(_vm.sigle.name) + " ")])]), _vm._v(" "), _c("div", {
          staticClass: "col text-end"
        }, [_c("button", {
          staticClass: "btn btn-sm rounded-circle text-center",
          staticStyle: {
            "background-color": "rgba(142, 142, 139, 0.253)"
          },
          attrs: {
            title: "retour a la liste des roles"
          },
          on: {
            click: function click($event) {
              return _vm.roleGoBack("data_role");
            }
          }
        }, [_c("i", {
          staticClass: "icofont-rounded-double-left"
        })])])]) : _vm.sigle && _vm.data_user ? _c("div", {
          staticClass: "row"
        }, [_c("div", {
          staticClass: "col"
        }, [_c("h5", {
          staticClass: "card-title"
        }, [_vm._v(" Delais de dossiers de " + _vm._s((_vm$data_user$ = _vm.data_user[0]) === null || _vm$data_user$ === void 0 ? void 0 : _vm$data_user$.username) + " ")])]), _vm._v(" "), _c("div", {
          staticClass: "col text-end"
        }, [_c("button", {
          staticClass: "btn btn-sm rounded-circle text-center",
          staticStyle: {
            "background-color": "rgba(142, 142, 139, 0.253)"
          },
          attrs: {
            title: "retour a la liste des roles"
          },
          on: {
            click: function click($event) {
              return _vm.roleGoBack("data_role");
            }
          }
        }, [_c("i", {
          staticClass: "icofont-rounded-double-left"
        })]), _vm._v(" "), _c("button", {
          staticClass: "btn btn-sm rounded-circle text-center",
          staticStyle: {
            "background-color": "rgba(142, 142, 139, 0.253)"
          },
          attrs: {
            title: "retour a la liste des " + ((_vm$sigle = _vm.sigle) === null || _vm$sigle === void 0 ? void 0 : _vm$sigle.name)
          },
          on: {
            click: function click($event) {
              return _vm.roleGoBack("data_specific_role");
            }
          }
        }, [_c("i", {
          staticClass: "icofont-rounded-left"
        })])])]) : _vm._e()]];
      },
      proxy: true
    }, {
      key: "toolbar-buttons",
      fn: function fn() {
        return [_c("span")];
      },
      proxy: true
    }, _vm.sigle ? {
      key: "before-year",
      fn: function fn() {
        return [_c("div", {
          staticClass: "w-auto px-2 d-flex align-items-center"
        }, [_c("button", {
          staticClass: "btn border-1",
          "class": _vm.detailed ? "active-btn" : "active-light-btn",
          attrs: {
            title: "Cliquez ici pour " + (_vm.detailed ? "désactiver " : "activer") + " la vue détaillée"
          },
          on: {
            click: function click($event) {
              _vm.detailed = !_vm.detailed;
              _vm.getDossByRole(_vm.sigle);
            }
          }
        }, [_vm._v(" \n                            " + _vm._s(_vm.detailed ? "Désactiver vue detaillée" : "Activer vue detaillée") + "\n                        ")])])];
      },
      proxy: true
    } : null], null, true)
  }, "component", _vm.currentProps, false))], 1)])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/reportex/statistics/Delais2.vue?vue&type=template&id=4bf309f3&scoped=true":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/reportex/statistics/Delais2.vue?vue&type=template&id=4bf309f3&scoped=true ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "container-fluid bg-white"
  }, [_vm._m(0), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12 px-0"
  }, [_c("stat-table", {
    attrs: {
      useToolbar: "",
      useSearch: "",
      searchKey: "profile",
      title: "rapport des delais",
      loading: _vm.loading,
      headers: _vm.headers,
      items: _vm.items
    },
    on: {
      yearChanged: function yearChanged($event) {
        _vm.year = $event;
        _vm.getData();
        _vm.getSegmentData();
      }
    },
    scopedSlots: _vm._u([{
      key: "toolbar-buttons",
      fn: function fn() {
        return [_c("div", {
          staticClass: "d-flex gap-2 justify-content-between"
        }, _vm._l(_vm.buttons, function (btn) {
          return _c("div", {
            key: btn.label,
            staticClass: "col"
          }, [_c("select", {
            directives: [{
              name: "model",
              rawName: "v-model",
              value: _vm.filtre[btn.model],
              expression: "filtre[btn.model]"
            }],
            staticClass: "form-select",
            on: {
              change: [function ($event) {
                var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
                  return o.selected;
                }).map(function (o) {
                  var val = "_value" in o ? o._value : o.value;
                  return val;
                });
                _vm.$set(_vm.filtre, btn.model, $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
              }, function ($event) {
                _vm.getData();
                _vm.getSegmentData();
              }]
            }
          }, _vm._l(btn.options, function (i) {
            return _c("option", {
              key: i.label,
              domProps: {
                value: i.value
              }
            }, [_vm._v(" " + _vm._s(i.label))]);
          }), 0)]);
        }), 0)];
      },
      proxy: true
    }, {
      key: "tableHeader",
      fn: function fn(_ref) {
        var computedHeader = _ref.headers;
        return [_c("tr", {
          staticClass: "text-start"
        }, [_c("th", {
          attrs: {
            scope: "row"
          }
        }, [_vm._v("#")]), _vm._v(" "), _vm._l(computedHeader, function (header, i) {
          return _c("th", {
            key: header,
            staticClass: "text-uppercase",
            "class": {
              "text-end": i > 0
            },
            attrs: {
              role: "button"
            }
          }, [_vm._v("\n              " + _vm._s(header.split("_").join(" ")) + "\n              ")]);
        })], 2)];
      }
    }, {
      key: "default",
      fn: function fn(_ref2) {
        var items = _ref2.items;
        return _vm._l(items, function (item, index) {
          return _c("tr", {
            key: index,
            staticClass: "cursor-pointer",
            attrs: {
              role: "button"
            },
            on: {
              click: function click($event) {
                return _vm.$emit("select", item);
              }
            }
          }, [_c("td", [_vm._v("\n              " + _vm._s(++index) + "\n            ")]), _vm._v(" "), _vm._l(_vm.headers, function (h, ind) {
            return _c("td", {
              key: h,
              staticClass: "col",
              "class": {
                "text-end": ind > 0
              },
              style: {
                "min-width": "auto"
              },
              attrs: {
                title: item === null || item === void 0 ? void 0 : item[h]
              }
            }, [h == "profile" ? _c("span", [_vm._v(" " + _vm._s(item === null || item === void 0 ? void 0 : item[h]))]) : _c("span", [h.includes("%") ? _c("div", {
              staticClass: "d-flex justify-content-between align-items-center",
              "class": (item === null || item === void 0 ? void 0 : item[h]) == 0 ? "text-success" : (item === null || item === void 0 ? void 0 : item[h]) < 25 ? " text-warning" : "text-danger"
            }, [_c("span", {
              "class": (item === null || item === void 0 ? void 0 : item[h]) == 0 ? "bg-success" : (item === null || item === void 0 ? void 0 : item[h]) < 25 ? " bg-warning" : "bg-danger",
              staticStyle: {
                width: "10px",
                height: "10px",
                "border-radius": "50%"
              }
            }), _vm._v(" "), _c("span", [_vm._v(" " + _vm._s(_vm._f("formatNumber")(item === null || item === void 0 ? void 0 : item[h], true)) + " ")])]) : _c("span", [_vm._v(" " + _vm._s(_vm._f("formatNumber")(item === null || item === void 0 ? void 0 : item[h])) + " ")])])]);
          })], 2);
        });
      }
    }])
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-12 px-0"
  }, [_c("stat-table", {
    attrs: {
      useToolbar: "",
      useSearch: "",
      searchKey: "profile",
      title: "",
      loading: _vm.loading,
      headers: _vm.segmentation_headers,
      items: _vm.segmentation_items
    },
    on: {
      yearChanged: function yearChanged($event) {
        _vm.year = $event;
        _vm.getSegmentData();
        _vm.getData();
      }
    },
    scopedSlots: _vm._u([{
      key: "header",
      fn: function fn() {
        return [_c("h5", [_vm._v(" Delais de traitement par role selon les segments\n            "), _vm.segmentFiltre.type_de_clientele ? _c("span", [_vm._v("\n              ( " + _vm._s(_vm.filtre.type_de_clientele) + " )\n            ")]) : _vm._e()])];
      },
      proxy: true
    }, {
      key: "tableHeader",
      fn: function fn(_ref3) {
        var computedHeader = _ref3.headers;
        return [_c("tr", {
          staticClass: "text-start"
        }, [_c("th", {
          attrs: {
            scope: "row"
          }
        }, [_vm._v("#")]), _vm._v(" "), _vm._l(computedHeader, function (header, i) {
          return _c("th", {
            key: header,
            staticClass: "text-uppercase",
            "class": {
              "text-end": i > 0
            },
            attrs: {
              role: "button"
            }
          }, [_vm._v("\n              " + _vm._s(header.split("_").join(" ")) + "\n              ")]);
        })], 2)];
      }
    }, {
      key: "toolbar-buttons",
      fn: function fn() {
        return [_c("div", {
          staticClass: "d-flex gap-2 justify-content-between"
        }, _vm._l(_vm.segmentation_buttons, function (btn) {
          return _c("div", {
            key: btn.label,
            staticClass: "col-auto"
          }, [_c("select", {
            directives: [{
              name: "model",
              rawName: "v-model",
              value: _vm.segmentFiltre[btn.model],
              expression: "segmentFiltre[btn.model]"
            }],
            staticClass: "form-select",
            on: {
              change: [function ($event) {
                var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
                  return o.selected;
                }).map(function (o) {
                  var val = "_value" in o ? o._value : o.value;
                  return val;
                });
                _vm.$set(_vm.segmentFiltre, btn.model, $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
              }, _vm.getSegmentData]
            }
          }, _vm._l(btn.options, function (i) {
            return _c("option", {
              key: i.label,
              domProps: {
                value: i.value
              }
            }, [_vm._v(" " + _vm._s(i.label))]);
          }), 0)]);
        }), 0)];
      },
      proxy: true
    }, {
      key: "default",
      fn: function fn(_ref4) {
        var items = _ref4.items;
        return _vm._l(items, function (item, index) {
          return _c("tr", {
            key: index,
            staticClass: "cursor-pointer",
            attrs: {
              role: "button"
            },
            on: {
              click: function click($event) {
                return _vm.$emit("select", item);
              }
            }
          }, [_c("td", {
            staticClass: "delais"
          }, [_vm._v("\n              " + _vm._s(++index) + "\n            ")]), _vm._v(" "), _vm._l(_vm.segmentation_headers, function (h, ind) {
            return _c("td", {
              key: h,
              staticClass: "col delais",
              "class": {
                "text-end": ind > 0
              },
              style: {
                "min-width": "150px"
              },
              attrs: {
                title: item === null || item === void 0 ? void 0 : item[h]
              }
            }, [h == "profile" ? _c("span", [_vm._v(" " + _vm._s(item === null || item === void 0 ? void 0 : item[h]))]) : _c("span", [item !== null && item !== void 0 && item[h] ? _c("span", {
              staticClass: "badge bg-danger fw-normal"
            }, [_vm._v("\n                  " + _vm._s(_vm._f("formatNumber")(item === null || item === void 0 ? void 0 : item[h])) + " retard" + _vm._s((item === null || item === void 0 ? void 0 : item[h]) > 1 ? "s" : "") + "\n                ")]) : _vm._e()])]);
          })], 2);
        });
      }
    }])
  })], 1)])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col"
  })]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/reportex/statistics/Delais.vue?vue&type=style&index=0&id=a0446d62&scoped=true&lang=css":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/reportex/statistics/Delais.vue?vue&type=style&index=0&id=a0446d62&scoped=true&lang=css ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.active-btn[data-v-a0446d62] {\r\n    background: #54415e;\r\n    color: white\n}\n.active-light-btn[data-v-a0446d62] {\r\n    background: #e8e1ed;\r\n    color: #6b5279;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/reportex/statistics/Delais2.vue?vue&type=style&index=0&id=4bf309f3&scoped=true&lang=css":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/reportex/statistics/Delais2.vue?vue&type=style&index=0&id=4bf309f3&scoped=true&lang=css ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\nth[data-v-4bf309f3]:nth-child(1),\r\ntd[data-v-4bf309f3]:nth-child(1) {\r\n  background: rgb(241, 241, 241) !important;\n}\nth[data-v-4bf309f3]:nth-child(2),\r\ntd[data-v-4bf309f3]:nth-child(2) {\r\n  position: sticky !important;\r\n  left: 0;\r\n  background: rgb(241, 241, 241) !important;\n}\nth[data-v-4bf309f3]:nth-child(1),\r\ntd[data-v-4bf309f3]:nth-child(1),\r\nth[data-v-4bf309f3]:nth-child(2),\r\ntd[data-v-4bf309f3]:nth-child(2),\r\n.total>td[data-v-4bf309f3]:nth-child(1) {\r\n  background: rgb(241, 241, 241) !important;\n}\nth[data-v-4bf309f3]:nth-child(2),\r\ntd[data-v-4bf309f3]:nth-child(2) {\r\n  position: sticky !important;\r\n  background: rgb(241, 241, 241);\r\n  left: 0;\n}\n.total>td[data-v-4bf309f3]:nth-child(1) {\r\n  position: sticky !important;\r\n  left: 0;\r\n  z-index: 2;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/reportex/statistics/Delais.vue?vue&type=style&index=0&id=a0446d62&scoped=true&lang=css":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/reportex/statistics/Delais.vue?vue&type=style&index=0&id=a0446d62&scoped=true&lang=css ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Delais_vue_vue_type_style_index_0_id_a0446d62_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Delais.vue?vue&type=style&index=0&id=a0446d62&scoped=true&lang=css */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/reportex/statistics/Delais.vue?vue&type=style&index=0&id=a0446d62&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Delais_vue_vue_type_style_index_0_id_a0446d62_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Delais_vue_vue_type_style_index_0_id_a0446d62_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/reportex/statistics/Delais2.vue?vue&type=style&index=0&id=4bf309f3&scoped=true&lang=css":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/reportex/statistics/Delais2.vue?vue&type=style&index=0&id=4bf309f3&scoped=true&lang=css ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Delais2_vue_vue_type_style_index_0_id_4bf309f3_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Delais2.vue?vue&type=style&index=0&id=4bf309f3&scoped=true&lang=css */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/reportex/statistics/Delais2.vue?vue&type=style&index=0&id=4bf309f3&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Delais2_vue_vue_type_style_index_0_id_4bf309f3_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Delais2_vue_vue_type_style_index_0_id_4bf309f3_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/reportex/statistics/Delais.vue":
/*!****************************************************************!*\
  !*** ./resources/js/components/reportex/statistics/Delais.vue ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Delais_vue_vue_type_template_id_a0446d62_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Delais.vue?vue&type=template&id=a0446d62&scoped=true */ "./resources/js/components/reportex/statistics/Delais.vue?vue&type=template&id=a0446d62&scoped=true");
/* harmony import */ var _Delais_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Delais.vue?vue&type=script&lang=js */ "./resources/js/components/reportex/statistics/Delais.vue?vue&type=script&lang=js");
/* harmony import */ var _Delais_vue_vue_type_style_index_0_id_a0446d62_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Delais.vue?vue&type=style&index=0&id=a0446d62&scoped=true&lang=css */ "./resources/js/components/reportex/statistics/Delais.vue?vue&type=style&index=0&id=a0446d62&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Delais_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Delais_vue_vue_type_template_id_a0446d62_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _Delais_vue_vue_type_template_id_a0446d62_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "a0446d62",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/reportex/statistics/Delais.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/reportex/statistics/Delais.vue?vue&type=script&lang=js":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/reportex/statistics/Delais.vue?vue&type=script&lang=js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Delais_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Delais.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/reportex/statistics/Delais.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Delais_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/reportex/statistics/Delais.vue?vue&type=style&index=0&id=a0446d62&scoped=true&lang=css":
/*!************************************************************************************************************************!*\
  !*** ./resources/js/components/reportex/statistics/Delais.vue?vue&type=style&index=0&id=a0446d62&scoped=true&lang=css ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Delais_vue_vue_type_style_index_0_id_a0446d62_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Delais.vue?vue&type=style&index=0&id=a0446d62&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/reportex/statistics/Delais.vue?vue&type=style&index=0&id=a0446d62&scoped=true&lang=css");


/***/ }),

/***/ "./resources/js/components/reportex/statistics/Delais.vue?vue&type=template&id=a0446d62&scoped=true":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/components/reportex/statistics/Delais.vue?vue&type=template&id=a0446d62&scoped=true ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Delais_vue_vue_type_template_id_a0446d62_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Delais_vue_vue_type_template_id_a0446d62_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Delais_vue_vue_type_template_id_a0446d62_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Delais.vue?vue&type=template&id=a0446d62&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/reportex/statistics/Delais.vue?vue&type=template&id=a0446d62&scoped=true");


/***/ }),

/***/ "./resources/js/components/reportex/statistics/Delais2.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/components/reportex/statistics/Delais2.vue ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Delais2_vue_vue_type_template_id_4bf309f3_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Delais2.vue?vue&type=template&id=4bf309f3&scoped=true */ "./resources/js/components/reportex/statistics/Delais2.vue?vue&type=template&id=4bf309f3&scoped=true");
/* harmony import */ var _Delais2_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Delais2.vue?vue&type=script&lang=js */ "./resources/js/components/reportex/statistics/Delais2.vue?vue&type=script&lang=js");
/* harmony import */ var _Delais2_vue_vue_type_style_index_0_id_4bf309f3_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Delais2.vue?vue&type=style&index=0&id=4bf309f3&scoped=true&lang=css */ "./resources/js/components/reportex/statistics/Delais2.vue?vue&type=style&index=0&id=4bf309f3&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Delais2_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Delais2_vue_vue_type_template_id_4bf309f3_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _Delais2_vue_vue_type_template_id_4bf309f3_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "4bf309f3",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/reportex/statistics/Delais2.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/reportex/statistics/Delais2.vue?vue&type=script&lang=js":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/reportex/statistics/Delais2.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Delais2_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Delais2.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/reportex/statistics/Delais2.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Delais2_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/reportex/statistics/Delais2.vue?vue&type=style&index=0&id=4bf309f3&scoped=true&lang=css":
/*!*************************************************************************************************************************!*\
  !*** ./resources/js/components/reportex/statistics/Delais2.vue?vue&type=style&index=0&id=4bf309f3&scoped=true&lang=css ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Delais2_vue_vue_type_style_index_0_id_4bf309f3_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Delais2.vue?vue&type=style&index=0&id=4bf309f3&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/reportex/statistics/Delais2.vue?vue&type=style&index=0&id=4bf309f3&scoped=true&lang=css");


/***/ }),

/***/ "./resources/js/components/reportex/statistics/Delais2.vue?vue&type=template&id=4bf309f3&scoped=true":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/components/reportex/statistics/Delais2.vue?vue&type=template&id=4bf309f3&scoped=true ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Delais2_vue_vue_type_template_id_4bf309f3_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Delais2_vue_vue_type_template_id_4bf309f3_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Delais2_vue_vue_type_template_id_4bf309f3_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Delais2.vue?vue&type=template&id=4bf309f3&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/reportex/statistics/Delais2.vue?vue&type=template&id=4bf309f3&scoped=true");


/***/ })

}]);