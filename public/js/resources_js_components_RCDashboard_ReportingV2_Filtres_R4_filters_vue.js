"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_RCDashboard_ReportingV2_Filtres_R4_filters_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/RCDashboard/ReportingV2/Filtres/R4_filters.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/RCDashboard/ReportingV2/Filtres/R4_filters.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Input_SelectFilialeV2_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Input/SelectFilialeV2.vue */ "./resources/js/components/RCDashboard/Input/SelectFilialeV2.vue");
/* harmony import */ var _Input_SelectStatus_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Input/SelectStatus.vue */ "./resources/js/components/RCDashboard/Input/SelectStatus.vue");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'R4_filters',
  components: {
    SelectFiliale: _Input_SelectFilialeV2_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    SelectStatus: _Input_SelectStatus_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  props: {
    SelectedDirection: {
      type: Object,
      "default": {}
    },
    typeClient: {
      type: String,
      "default": "DCP"
    },
    mappingZones: {
      type: Object,
      "default": {}
    },
    visibiliyScope: {
      type: String,
      "default": "ALL"
    },
    iam_user: {
      type: Object,
      "default": {}
    }
  },
  data: function data() {
    return {
      filterParams: {},
      Selectedfiliale: "",
      agence: "",
      period: "",
      periodtype: "year",
      start: '',
      end: '',
      status: "acceptes",
      years: [],
      detail: "detailled",
      year: "",
      month: "",
      extract_date: null,
      extract_time: null,
      months: [{
        value: "01",
        label: "Janvier"
      }, {
        value: "02",
        label: "Février"
      }, {
        value: "03",
        label: "Mars"
      }, {
        value: "04",
        label: "Avril"
      }, {
        value: "05",
        label: "Mai"
      }, {
        value: "06",
        label: "Juin"
      }, {
        value: "07",
        label: "Juillet"
      }, {
        value: "08",
        label: "Août"
      }, {
        value: "09",
        label: "Septembre"
      }, {
        value: "10",
        label: "Octobre"
      }, {
        value: "11",
        label: "Novembre"
      }, {
        value: "12",
        label: "Décembre"
      }],
      role: "",
      role_name: "",
      loading: false,
      intervenants: [],
      selectedUser: "",
      isEmpty: false,
      sort: {
        field: 'global_working_time',
        order: 'asc'
      },
      sortOptions: [{
        value: 'global_working_time',
        label: 'Temps de travail WT'
      }, {
        value: 'montant',
        label: 'Montant'
      }, {
        value: 'client',
        label: 'Ordre alphabetique client'
      }]
    };
  },
  mounted: function mounted() {
    var start = 2023;
    var end = new Date().getFullYear();
    for (var i = start; i <= end; i++) {
      this.years.unshift(i);
    }
    this.updateYear(this.years[0].toString());
    var currentDate = new Date();
    var mois = "0";
    this.updateMonth(mois);
    var selectElement = this.$el.querySelector('#month-filter');
    if (selectElement) {
      selectElement.value = mois;
    }
    this.updateSort();
  },
  methods: {
    updateFilterParams: function updateFilterParams() {
      var _this = this,
        _this$intervenants$fi;
      var mois = '';
      var periode_type = '';
      var periode_value = '';
      var plage_de_temps = '';
      if (this.periodtype == 'between_two_date') {
        mois = this.start + '/' + this.end;
        periode_type = 'between_two_date';
        periode_value = this.start + '/' + this.end;
        plage_de_temps = 'du ' + this.start + ' au ' + this.end;
      } else {
        var _this$months$find;
        mois = "".concat(this.year, "-").concat(this.month);
        periode_type = this.month != "0" ? 'month' : 'year';
        periode_value = this.month != "0" ? "".concat(this.year, "-").concat(this.month) : this.year;
        plage_de_temps = this.month == "0" ? "Toute l'année" : (_this$months$find = this.months.find(function (e) {
          return e.value == _this.month;
        })) === null || _this$months$find === void 0 ? void 0 : _this$months$find["label"];
      }
      this.filterParams = {
        detail: this.detail,
        filiale: this.Selectedfiliale,
        deep: 'intervenant',
        periode_value: periode_value,
        periode_type: periode_type,
        mois: mois,
        plage_de_temps: plage_de_temps,
        pagination: {
          "limit": 1000,
          "page": 1
        },
        extract_limit: this.isoDateTime,
        role: this.role,
        role_name: this.role_name,
        status: this.status,
        working_time: true,
        year: parseInt(this.year),
        intervenant: parseInt(this.selectedUser),
        intervenant_name: (_this$intervenants$fi = this.intervenants.find(function (e) {
          return e.id == parseInt(_this.selectedUser);
        })) === null || _this$intervenants$fi === void 0 ? void 0 : _this$intervenants$fi['name']
      };
      this.$emit('sendParam', this.filterParams);
    },
    setDateInput: function setDateInput(e) {
      this.extract_date = e[1];
      this.updateFilterParams();
    },
    updateSortField: function updateSortField(e) {
      this.sort.field = e;
      this.updateSort();
    },
    updateSortOrder: function updateSortOrder(e) {
      this.sort.order = e;
      this.updateSort();
    },
    updateSort: function updateSort() {
      this.$emit('sendSort', this.sort);
    },
    updateFiliale: function updateFiliale(e) {
      this.Selectedfiliale = e;
      this.$store.dispatch('set_filiale', this.Selectedfiliale);
      this.updateFilterParams();
      this.getIntervenant();
    },
    updateAgence: function updateAgence(e) {
      this.agence = e;
      this.updateFilterParams();
    },
    updateYear: function updateYear(e) {
      this.year = e;
      this.updateFilterParams();
      this.getIntervenant();
    },
    updateStatus: function updateStatus(e) {
      this.status = e;
      this.updateFilterParams();
      this.getIntervenant();
    },
    updateMonth: function updateMonth(e) {
      this.month = e;
      this.updateFilterParams();
      this.getIntervenant();
    },
    updateRole: function updateRole(e) {
      this.role_name = e;
      this.role = e.split(" - ")[0];
      this.updateFilterParams();
      this.getIntervenant();
    },
    getIntervenant: function getIntervenant() {
      var _this2 = this;
      if (['', null, undefined].includes(this.Selectedfiliale) || ['', null, undefined].includes(this.role)) {
        return;
      }
      this.isEmpty = false;
      this.loading = true;
      this.selectedUser = "";
      var selectElementIntervenant = this.$el.querySelector('#intervenant-filter');
      if (selectElementIntervenant) {
        selectElementIntervenant.value = "";
      }
      var host = sessionStorage.getItem("ebapis_host");
      var category_clientele = null;
      if (this.realEntity.toUpperCase() == "NSIA") {
        category_clientele = this.typeClient == "DCP" ? "Retail" : "Corporate";
      }
      return new Promise(function (resolve, reject) {
        _this2.$axios.post(host + "rcpipeline/api/v1/statistics/report-out-of-bounds-by-role/", {
          filiale: _this2.Selectedfiliale,
          deep: 'users',
          mois: "".concat(_this2.year, "-").concat(_this2.month),
          pagination: {
            "limit": 1000,
            "page": 1
          },
          role: _this2.role,
          status: _this2.status,
          working_time: true,
          year: parseInt(_this2.year),
          category_clientele: category_clientele !== null && category_clientele !== void 0 ? category_clientele : null
        }).then(function (res) {
          var data = res.data['data'];
          if (data.length === 0) {
            _this2.isEmpty = true;
            _this2.loading = false;
            _this2.intervenants = [];
            _this2.updateFilterParams();
            resolve([]);
          } else {
            var intervenantData = data.map(function (i) {
              var extra = "";
              if (_this2.realEntity.toUpperCase() == "NSIA") {
                var _this2$mappingZones;
                if (!['', null, undefined].includes((_this2$mappingZones = _this2.mappingZones) === null || _this2$mappingZones === void 0 ? void 0 : _this2$mappingZones.users)) {
                  var u = _this2.mappingZones['users'].find(function (el) {
                    return (el === null || el === void 0 ? void 0 : el.id) == (i === null || i === void 0 ? void 0 : i.user_id);
                  });
                  if (u) {
                    var _u$name;
                    i['type_credit'] = u === null || u === void 0 || (_u$name = u.name) === null || _u$name === void 0 ? void 0 : _u$name.toUpperCase();
                  }
                }
                if (["CC", "CAE"].includes(_this2.role)) {
                  var _this2$mappingZones2;
                  if (!['', null, undefined].includes((_this2$mappingZones2 = _this2.mappingZones) === null || _this2$mappingZones2 === void 0 ? void 0 : _this2$mappingZones2.cc_zone_maps)) {
                    var _u = _this2.mappingZones['users'].find(function (el) {
                      return (el === null || el === void 0 ? void 0 : el.id) == (i === null || i === void 0 ? void 0 : i.user_id);
                    });
                    if (_u) {
                      var _u$codeagence;
                      var codeagence = (_u$codeagence = _u === null || _u === void 0 ? void 0 : _u.codeagence) !== null && _u$codeagence !== void 0 ? _u$codeagence : "";
                      if (!['', null, undefined].includes(codeagence)) {
                        var _this2$mappingZones3;
                        var agence = codeagence;
                        (_this2$mappingZones3 = _this2.mappingZones) === null || _this2$mappingZones3 === void 0 || _this2$mappingZones3.filiales.forEach(function (el) {
                          var filiale = el.filiale.replace(/\s/g, '_');
                          agence = agence.replace(filiale + '_', '');
                          agence = agence.replace(/_/g, ' ');
                        });
                        if (agence) {
                          extra += ' (' + agence + ')';
                        }
                      }
                    }
                  }
                }
                if (_this2.role == "CA") {
                  var _this2$mappingZones4, _this2$mappingZones5;
                  if (!['', null, undefined].includes((_this2$mappingZones4 = _this2.mappingZones) === null || _this2$mappingZones4 === void 0 ? void 0 : _this2$mappingZones4.users) && !['', null, undefined].includes((_this2$mappingZones5 = _this2.mappingZones) === null || _this2$mappingZones5 === void 0 ? void 0 : _this2$mappingZones5.filiales)) {
                    var _u2 = _this2.mappingZones['users'].find(function (el) {
                      return (el === null || el === void 0 ? void 0 : el.id) == (i === null || i === void 0 ? void 0 : i.user_id);
                    });
                    if (_u2) {
                      var _u2$codeagence;
                      var _codeagence = (_u2$codeagence = _u2 === null || _u2 === void 0 ? void 0 : _u2.codeagence) !== null && _u2$codeagence !== void 0 ? _u2$codeagence : "";
                      if (!['', null, undefined].includes(_codeagence)) {
                        var _this2$mappingZones6;
                        var _agence = _codeagence;
                        (_this2$mappingZones6 = _this2.mappingZones) === null || _this2$mappingZones6 === void 0 || _this2$mappingZones6.filiales.forEach(function (el) {
                          var filiale = el.filiale.replace(/\s/g, '_');
                          _agence = _agence.replace(filiale + '_', '');
                          _agence = _agence.replace(/_/g, ' ');
                        });
                        if (_agence) {
                          extra += ' (' + _agence + ')';
                        }
                      }
                    }
                  }
                }
                if (_this2.role == "SPZ") {
                  var _this2$mappingZones7;
                  if (!['', null, undefined].includes((_this2$mappingZones7 = _this2.mappingZones) === null || _this2$mappingZones7 === void 0 ? void 0 : _this2$mappingZones7.sup_zones_maps)) {
                    var zone = _this2.mappingZones['sup_zones_maps'].find(function (el) {
                      return (el === null || el === void 0 ? void 0 : el.sup_zone_id) == (i === null || i === void 0 ? void 0 : i.user_id);
                    });
                    if (zone) {
                      extra += ' (' + (zone === null || zone === void 0 ? void 0 : zone.segment_clientele) + ')';
                    }
                  }
                }
                if (_this2.role == "CD_DCP") {
                  var _this2$mappingZones8;
                  if (!['', null, undefined].includes((_this2$mappingZones8 = _this2.mappingZones) === null || _this2$mappingZones8 === void 0 ? void 0 : _this2$mappingZones8.rep_reseau_maps)) {
                    var _zone = _this2.mappingZones['rep_reseau_maps'].find(function (el) {
                      return (el === null || el === void 0 ? void 0 : el.rep_reseau_id) == (i === null || i === void 0 ? void 0 : i.user_id);
                    });
                    if (_zone) {
                      extra += ' (' + (_zone === null || _zone === void 0 ? void 0 : _zone.zone) + ')';
                    }
                  }
                }
              }
              return {
                name: (i === null || i === void 0 ? void 0 : i.type_credit) + extra,
                id: i === null || i === void 0 ? void 0 : i.user_id
              };
            });
            _this2.intervenants = intervenantData.sort(function (a, b) {
              return a.name > b.name ? 1 : -1;
            });
            _this2.loading = false;
            resolve(res.data['data']);
          }
        })["catch"](function (err) {
          console.error(err);
          _this2.loading = false;
          reject(err);
        });
      });
    },
    updateIntervenant: function updateIntervenant(e) {
      this.selectedUser = e;
      this.updateFilterParams();
    },
    setStart: function setStart(e) {
      this.start = e[1];
      this.updateFilterParams();
    },
    setEnd: function setEnd(e) {
      this.end = e[1];
      this.updateFilterParams();
    },
    updatePeriodType: function updatePeriodType(e) {
      this.periodtype = e;
      this.updateFilterParams();
    }
  },
  computed: {
    ComputedStatus: function ComputedStatus() {
      var sts = ["mise_en_place", "acceptes", "demandes"
      // "anomalie",
      ];
      if (this.SelectedDirection.direction == 'DAJC') {
        sts.push("en_cours_dajc");
      } else {
        sts.push("en_cours");
      }
      return sts;
    },
    roleList: function roleList() {
      var _this$SelectedDirecti, _this$SelectedDirecti2;
      var roleList = (_this$SelectedDirecti = this.SelectedDirection) !== null && _this$SelectedDirecti !== void 0 && _this$SelectedDirecti.all_clients ? this.SelectedDirection.roles : (_this$SelectedDirecti2 = this.SelectedDirection) === null || _this$SelectedDirecti2 === void 0 ? void 0 : _this$SelectedDirecti2['roles_' + this.typeClient];
      if (this.visibiliyScope != "ALL") {
        roleList = [this.iam_user['role_sigle']];
      }
      return roleList;
    },
    isoDateTime: function isoDateTime() {
      if (this.extract_date && this.extract_time) {
        return "".concat(this.extract_date, "T").concat(this.extract_time, ":00");
      }
      return '';
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/RCDashboard/ReportingV2/Filtres/R4_filters.vue?vue&type=template&id=b5668958&scoped=true":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/RCDashboard/ReportingV2/Filtres/R4_filters.vue?vue&type=template&id=b5668958&scoped=true ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    staticStyle: {
      overflow: "auto"
    }
  }, [_c("div", {
    staticClass: "wrapper"
  }, [_vm._m(0), _vm._v(" "), _c("select", {
    staticClass: "form-select",
    attrs: {
      id: "role-filter"
    },
    on: {
      change: function change($event) {
        return _vm.updateRole($event.target.value);
      }
    }
  }, [_c("option", {
    attrs: {
      value: ""
    }
  }), _vm._v(" "), _vm._l(_vm.roleList, function (r) {
    return _c("option", {
      key: r,
      domProps: {
        value: r
      }
    }, [_vm._v(_vm._s(r))]);
  })], 2)]), _vm._v(" "), _c("div", {
    staticClass: "spacer"
  }), _vm._v(" "), _vm.loading ? _c("div", {
    staticClass: "wrapper",
    staticStyle: {
      "flex-direction": "row"
    }
  }, [_vm._m(1), _vm._v(" "), _c("span", [_vm._v("Chargement des intervenants")])]) : _vm._e(), _vm._v(" "), _vm.intervenants.length > 0 ? _c("div", {
    staticClass: "wrapper"
  }, [_vm._m(2), _vm._v(" "), _c("select", {
    staticClass: "form-select",
    attrs: {
      id: "intervenant-filter"
    },
    on: {
      change: function change($event) {
        return _vm.updateIntervenant($event.target.value);
      }
    }
  }, [_c("option", {
    attrs: {
      value: ""
    }
  }), _vm._v(" "), _vm._l(_vm.intervenants, function (r) {
    return _c("option", {
      key: r.id,
      domProps: {
        value: r.id
      }
    }, [_vm._v(_vm._s(r.name))]);
  })], 2)]) : _vm._e(), _vm._v(" "), _vm.isEmpty ? _c("div", {
    staticClass: "wrapper",
    staticStyle: {
      "font-size": "small",
      color: "red"
    }
  }, [_c("em", [_vm._v("Aucune donnée disponible pour le rôle  selectionnés. Prière d'en sélectionner un autre")])]) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "spacer"
  }), _vm._v(" "), _c("SelectFiliale", {
    attrs: {
      customClass: "w-100",
      customClassSelect: "w-100",
      flexDirection: "column",
      displayAgence: false
    },
    on: {
      update: _vm.updateFiliale
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "spacer"
  }), _vm._v(" "), _c("div", {
    staticClass: "wrapper"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("\n            Type de période:\n        ")]), _vm._v(" "), _c("select", {
    staticClass: "form-select text-uppercase w-100",
    on: {
      change: function change($event) {
        return _vm.updatePeriodType($event.target.value);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "year"
    }
  }, [_vm._v(" Mois ou année complet(e) ")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "between_two_date"
    }
  }, [_vm._v(" Période personnalisée ")])])]), _vm._v(" "), _c("div", {
    staticClass: "spacer"
  }), _vm._v(" "), _vm.periodtype == "between_two_date" ? _c("div", {
    staticClass: "wrapper"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("\n            Début :\n        ")]), _vm._v(" "), _c("date-input", {
    attrs: {
      value: _vm.start
    },
    on: {
      input: _vm.setStart
    }
  }), _vm._v(" "), _c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("\n            Fin :\n        ")]), _vm._v(" "), _c("date-input", {
    attrs: {
      value: _vm.end
    },
    on: {
      input: _vm.setEnd
    }
  })], 1) : _c("div", {
    staticClass: "wrapper"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("\n            Année:\n        ")]), _vm._v(" "), _c("select", {
    staticClass: "form-select text-uppercase w-100",
    on: {
      change: function change($event) {
        return _vm.updateYear($event.target.value);
      }
    }
  }, _vm._l(_vm.years, function (y) {
    return _c("option", {
      key: y,
      domProps: {
        value: y
      }
    }, [_vm._v(" " + _vm._s(y) + " ")]);
  }), 0), _vm._v(" "), _c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("\n            Mois:\n        ")]), _vm._v(" "), _c("select", {
    staticClass: "form-select",
    attrs: {
      id: "month-filter"
    },
    on: {
      change: function change($event) {
        return _vm.updateMonth($event.target.value);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "0"
    }
  }, [_vm._v("TOUS LES MOIS")]), _vm._v(" "), _vm._l(_vm.months, function (month) {
    return _c("option", {
      key: month.value,
      domProps: {
        value: month.value
      }
    }, [_vm._v(_vm._s(month.label))]);
  })], 2)]), _vm._v(" "), _c("div", {
    staticClass: "spacer"
  }), _vm._v(" "), _c("SelectStatus", {
    attrs: {
      status_to_display: _vm.ComputedStatus,
      defautStatus: _vm.status,
      customClassSelect: "w-100",
      customClass: "w-100"
    },
    on: {
      update: _vm.updateStatus
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "spacer"
  }), _vm._v(" "), _c("div", {
    staticClass: "wrapper"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("\n            Trier par:\n        ")]), _vm._v(" "), _c("select", {
    staticClass: "form-select text-uppercase w-100",
    on: {
      change: function change($event) {
        return _vm.updateSortField($event.target.value);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "",
      disabled: ""
    }
  }, [_vm._v("Trier par ...")]), _vm._v(" "), _vm._l(_vm.sortOptions, function (s) {
    return _c("option", {
      key: s.value,
      domProps: {
        value: s.value,
        selected: s.value == _vm.sort.field
      }
    }, [_vm._v(" " + _vm._s(s.label) + " ")]);
  })], 2), _vm._v(" "), _c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("\n            Ordre de tri:\n        ")]), _vm._v(" "), _c("select", {
    staticClass: "form-select text-uppercase w-100",
    on: {
      change: function change($event) {
        return _vm.updateSortOrder($event.target.value);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "",
      disabled: ""
    }
  }, [_vm._v("Ordre de tri ...")]), _vm._v(" "), _vm._l(["asc", "desc"], function (s) {
    return _c("option", {
      key: s,
      domProps: {
        value: s,
        selected: s == _vm.sort.order
      }
    }, [_vm._v(" " + _vm._s(s) + " ")]);
  })], 2)]), _vm._v(" "), _c("div", {
    staticClass: "spacer"
  }), _vm._v(" "), _c("div", {
    staticClass: "wrapper"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("\n            Niveau de détail du rapport :\n        ")]), _vm._v(" "), _c("div", {
    staticClass: "form-check"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.detail,
      expression: "detail"
    }],
    staticClass: "form-check-input",
    attrs: {
      type: "radio",
      name: "detail",
      id: "detailled",
      value: "detailled"
    },
    domProps: {
      checked: _vm._q(_vm.detail, "detailled")
    },
    on: {
      change: [function ($event) {
        _vm.detail = "detailled";
      }, _vm.updateFilterParams]
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "form-check-label",
    attrs: {
      "for": "detailled"
    }
  }, [_vm._v("\n                Rapport détaillé\n            ")])]), _vm._v(" "), _c("div", {
    staticClass: "form-check"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.detail,
      expression: "detail"
    }],
    staticClass: "form-check-input",
    attrs: {
      type: "radio",
      name: "detail",
      id: "resumed",
      value: "resumed"
    },
    domProps: {
      checked: _vm._q(_vm.detail, "resumed")
    },
    on: {
      change: [function ($event) {
        _vm.detail = "resumed";
      }, _vm.updateFilterParams]
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "form-check-label",
    attrs: {
      "for": "resumed"
    }
  }, [_vm._v("\n                Rapport résumé\n            ")])])]), _vm._v(" "), _c("div", {
    staticClass: "spacer"
  }), _vm._v(" "), _c("hr"), _vm._v(" "), _c("div", {
    staticClass: "wrapper"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("\n            Date de la fin du traitement :\n        ")]), _vm._v(" "), _c("date-input", {
    attrs: {
      value: _vm.extract_date
    },
    on: {
      input: _vm.setDateInput
    }
  }), _vm._v(" "), _c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("\n            Heure de la fin du traitement :\n        ")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.extract_time,
      expression: "extract_time"
    }],
    staticClass: "form-control",
    attrs: {
      type: "time"
    },
    domProps: {
      value: _vm.extract_time
    },
    on: {
      change: _vm.updateFilterParams,
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.extract_time = $event.target.value;
      }
    }
  })], 1)], 1);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("\n            Rôle: "), _c("span", {
    staticStyle: {
      color: "red"
    }
  }, [_vm._v("*")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "spinner-border",
    attrs: {
      role: "status"
    }
  }, [_c("span", {
    staticClass: "visually-hidden"
  }, [_vm._v("Chargement des intervenants")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("\n            Intervenant: "), _c("span", {
    staticStyle: {
      color: "red"
    }
  }, [_vm._v("*")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/RCDashboard/ReportingV2/Filtres/R4_filters.vue?vue&type=style&index=0&id=b5668958&scoped=true&lang=css":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/RCDashboard/ReportingV2/Filtres/R4_filters.vue?vue&type=style&index=0&id=b5668958&scoped=true&lang=css ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.wrapper[data-v-b5668958]{\r\n    padding: 0 5px;\r\n    display: flex;\r\n    justify-content: flex-start;\r\n    flex-direction: column;\r\n    align-items: start;\r\n    gap: 5px;\n}\nselect[data-v-b5668958] {\r\n    width: 100%;\n}\n.spacer[data-v-b5668958]{\r\n    height: 10px;\n}\n.custom-select[data-v-b5668958] {\r\n    position: relative;\r\n    display: inline-block;\r\n    \r\n    height: calc(2.25rem + 2px);\r\n    line-height: 1.5;\r\n    vertical-align: middle;\r\n    -webkit-appearance: none;\r\n    -moz-appearance: none;\r\n    appearance: none;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/RCDashboard/ReportingV2/Filtres/R4_filters.vue?vue&type=style&index=0&id=b5668958&scoped=true&lang=css":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/RCDashboard/ReportingV2/Filtres/R4_filters.vue?vue&type=style&index=0&id=b5668958&scoped=true&lang=css ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_R4_filters_vue_vue_type_style_index_0_id_b5668958_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./R4_filters.vue?vue&type=style&index=0&id=b5668958&scoped=true&lang=css */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/RCDashboard/ReportingV2/Filtres/R4_filters.vue?vue&type=style&index=0&id=b5668958&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_R4_filters_vue_vue_type_style_index_0_id_b5668958_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_R4_filters_vue_vue_type_style_index_0_id_b5668958_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/RCDashboard/ReportingV2/Filtres/R4_filters.vue":
/*!********************************************************************************!*\
  !*** ./resources/js/components/RCDashboard/ReportingV2/Filtres/R4_filters.vue ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _R4_filters_vue_vue_type_template_id_b5668958_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./R4_filters.vue?vue&type=template&id=b5668958&scoped=true */ "./resources/js/components/RCDashboard/ReportingV2/Filtres/R4_filters.vue?vue&type=template&id=b5668958&scoped=true");
/* harmony import */ var _R4_filters_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./R4_filters.vue?vue&type=script&lang=js */ "./resources/js/components/RCDashboard/ReportingV2/Filtres/R4_filters.vue?vue&type=script&lang=js");
/* harmony import */ var _R4_filters_vue_vue_type_style_index_0_id_b5668958_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./R4_filters.vue?vue&type=style&index=0&id=b5668958&scoped=true&lang=css */ "./resources/js/components/RCDashboard/ReportingV2/Filtres/R4_filters.vue?vue&type=style&index=0&id=b5668958&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _R4_filters_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _R4_filters_vue_vue_type_template_id_b5668958_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _R4_filters_vue_vue_type_template_id_b5668958_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "b5668958",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/RCDashboard/ReportingV2/Filtres/R4_filters.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/RCDashboard/ReportingV2/Filtres/R4_filters.vue?vue&type=script&lang=js":
/*!********************************************************************************************************!*\
  !*** ./resources/js/components/RCDashboard/ReportingV2/Filtres/R4_filters.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_R4_filters_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./R4_filters.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/RCDashboard/ReportingV2/Filtres/R4_filters.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_R4_filters_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/RCDashboard/ReportingV2/Filtres/R4_filters.vue?vue&type=style&index=0&id=b5668958&scoped=true&lang=css":
/*!****************************************************************************************************************************************!*\
  !*** ./resources/js/components/RCDashboard/ReportingV2/Filtres/R4_filters.vue?vue&type=style&index=0&id=b5668958&scoped=true&lang=css ***!
  \****************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_R4_filters_vue_vue_type_style_index_0_id_b5668958_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./R4_filters.vue?vue&type=style&index=0&id=b5668958&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/RCDashboard/ReportingV2/Filtres/R4_filters.vue?vue&type=style&index=0&id=b5668958&scoped=true&lang=css");


/***/ }),

/***/ "./resources/js/components/RCDashboard/ReportingV2/Filtres/R4_filters.vue?vue&type=template&id=b5668958&scoped=true":
/*!**************************************************************************************************************************!*\
  !*** ./resources/js/components/RCDashboard/ReportingV2/Filtres/R4_filters.vue?vue&type=template&id=b5668958&scoped=true ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_R4_filters_vue_vue_type_template_id_b5668958_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_R4_filters_vue_vue_type_template_id_b5668958_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_R4_filters_vue_vue_type_template_id_b5668958_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./R4_filters.vue?vue&type=template&id=b5668958&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/RCDashboard/ReportingV2/Filtres/R4_filters.vue?vue&type=template&id=b5668958&scoped=true");


/***/ })

}]);