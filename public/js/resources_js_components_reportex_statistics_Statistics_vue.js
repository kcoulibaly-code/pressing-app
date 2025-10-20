"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_reportex_statistics_Statistics_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/reportex/statistics/ChartCard.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/reportex/statistics/ChartCard.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    title: {
      type: String,
      "default": "Graphique"
    },
    autoHeight: {
      type: Boolean,
      "default": false
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/reportex/statistics/StatLittleCard.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/reportex/statistics/StatLittleCard.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    color: {
      type: String,
      "default": "success"
    },
    title: {
      type: String,
      "default": "Dossiers acceptés"
    },
    icon: {
      type: String,
      "default": "icofont-ui-check"
    },
    iconSize: {
      type: Number,
      "default": 2
    },
    value: {
      type: Number,
      "default": 0
    },
    progress: {
      type: Number,
      "default": 0
    },
    montant: {
      type: Boolean,
      "default": true
    }
  },
  computed: {
    progressColor: function progressColor() {
      return "bg-" + this.color;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/reportex/statistics/Statistics.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/reportex/statistics/Statistics.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DoughnutChart_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DoughnutChart.vue */ "./resources/js/components/reportex/statistics/DoughnutChart.vue");
/* harmony import */ var _BarChart_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BarChart.vue */ "./resources/js/components/reportex/statistics/BarChart.vue");
/* harmony import */ var _ChartCard_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ChartCard.vue */ "./resources/js/components/reportex/statistics/ChartCard.vue");
/* harmony import */ var _StatLittleCard_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./StatLittleCard.vue */ "./resources/js/components/reportex/statistics/StatLittleCard.vue");
/* harmony import */ var _StatTable_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./StatTable.vue */ "./resources/js/components/reportex/statistics/StatTable.vue");
/* harmony import */ var _services_ebapis_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/ebapis.service */ "./resources/js/services/ebapis.service.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/auth.service */ "./resources/js/services/auth.service.js");



// import LineChart from './LineChart.vue';




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    DoughnutChart: _DoughnutChart_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    BarChart: _BarChart_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    StatLittleCard: _StatLittleCard_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    ChartCard: _ChartCard_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    StatTable: _StatTable_vue__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  computed: {
    repartion_clientele_headers: function repartion_clientele_headers() {
      var _this$data, _this$data2, _this$data3;
      if ((_this$data = this.data) !== null && _this$data !== void 0 && _this$data.repartition_clientele && ((_this$data2 = this.data) === null || _this$data2 === void 0 || (_this$data2 = _this$data2.repartition_clientele) === null || _this$data2 === void 0 ? void 0 : _this$data2.length) >= 0) return Object.keys((_this$data3 = this.data) === null || _this$data3 === void 0 || (_this$data3 = _this$data3.repartition_clientele) === null || _this$data3 === void 0 ? void 0 : _this$data3.at(0));
      return [];
    },
    repartition_clientele: function repartition_clientele() {
      var _this$data4;
      return (_this$data4 = this.data) === null || _this$data4 === void 0 ? void 0 : _this$data4.repartition_clientele;
    },
    sortableKeys: function sortableKeys() {
      var _this$data5;
      var months = {
        'janvier': 1,
        'février': 2,
        'mars': 3,
        'avril': 4,
        'mai': 5,
        'juin': 6,
        'juillet': 7,
        'août': 8,
        'septembre': 9,
        'octobre': 10,
        'novembre': 11,
        'décembre': 12
      };
      var sorted = (_this$data5 = this.data) === null || _this$data5 === void 0 || (_this$data5 = _this$data5.filiale) === null || _this$data5 === void 0 || (_this$data5 = _this$data5.datasets) === null || _this$data5 === void 0 ? void 0 : _this$data5.map(function (el) {
        return el.label;
      }).sort(function (a, b) {
        var _ref = [a.toLowerCase(), b.toLowerCase()];
        a = _ref[0];
        b = _ref[1];
        if (months[b] - months[a] > 0) return -1;else if (months[b] - months[a] < 0) return 1;else return 0;
      });
      return sorted;
    },
    chartTitle: function chartTitle() {
      var start = "Statistique de ";
      var type_graph = "montant";
      var type_ = "montant";
      if (this.isMontant) {
        type_graph = "montant";
      } else {
        type_graph = "nombre";
      }
      return "Filiale";
    },
    agences: function agences() {
      var _this$filiales,
        _this = this;
      return this.filiale ? (_this$filiales = this.filiales) === null || _this$filiales === void 0 || (_this$filiales = _this$filiales.find(function (el) {
        return el.name == _this.filiale;
      })) === null || _this$filiales === void 0 ? void 0 : _this$filiales.agences : [];
    },
    currentData: function currentData() {
      var _this$data6;
      return (_this$data6 = this.data) === null || _this$data6 === void 0 ? void 0 : _this$data6.basic;
    },
    filialeData: function filialeData() {
      var _this$data7;
      return (_this$data7 = this.data) === null || _this$data7 === void 0 ? void 0 : _this$data7.filiale;
    },
    typeClientele: function typeClientele() {
      var _this$data8;
      return (_this$data8 = this.data) === null || _this$data8 === void 0 || (_this$data8 = _this$data8.type_clientele) === null || _this$data8 === void 0 ? void 0 : _this$data8.values;
    },
    filialeChart: function filialeChart() {
      var _this$filialeData, _this$data9, _this$data0;
      var colors = ['#5555', '#41B883', '#E46651'];
      (_this$filialeData = this.filialeData) === null || _this$filialeData === void 0 || (_this$filialeData = _this$filialeData.datasets) === null || _this$filialeData === void 0 || _this$filialeData.forEach(function (dataset, index) {
        dataset.backgroundColor = colors[index];
      });
      var months = {
        'janvier': 1,
        'février': 2,
        'mars': 3,
        'avril': 4,
        'mai': 5,
        'juin': 6,
        'juillet': 7,
        'août': 8,
        'septembre': 9,
        'octobre': 10,
        'novembre': 11,
        'décembre': 12
      };
      var datasets = (_this$data9 = this.data) === null || _this$data9 === void 0 || (_this$data9 = _this$data9.filiale) === null || _this$data9 === void 0 || (_this$data9 = _this$data9.datasets) === null || _this$data9 === void 0 ? void 0 : _this$data9.sort(function (a, b) {
        var _ref2 = [months[a.label.toLowerCase()], months[b.label.toLowerCase()]];
        a = _ref2[0];
        b = _ref2[1];
        if (Math.abs(a - b) > 9) return 1; // remplacer le 1 par -1 en janvier en cas de deordre de la liste
        if (b - a > 0) return -1;else if (b - a < 0) return 1;else return 0;
      });
      return {
        labels: (_this$data0 = this.data) === null || _this$data0 === void 0 || (_this$data0 = _this$data0.filiale) === null || _this$data0 === void 0 ? void 0 : _this$data0.labels,
        datasets: datasets
      };
    },
    typeChart: function typeChart() {
      var _this$data1;
      return {
        labels: (_this$data1 = this.data) === null || _this$data1 === void 0 || (_this$data1 = _this$data1.type_clientele) === null || _this$data1 === void 0 ? void 0 : _this$data1.labels,
        datasets: [{
          backgroundColor: ['#41B883', '#E46651', '#5555'],
          label: "Rendu par filiale",
          data: this.typeClientele
        }]
      };
    },
    bigChartTitle: function bigChartTitle() {
      var _this2 = this;
      var premier = this.stats_types.find(function (el) {
        return el.value == _this2.stat_type;
      }).label;
      var deux = " total de dossiers " + this.status_types.find(function (el) {
        return el.value == _this2.status_type;
      }).label.toLowerCase();
      var trois = " par " + this.filters.find(function (el) {
        return el.value == _this2.area;
      }).gbtitle;
      return premier + deux + trois;
    },
    clientelTitle: function clientelTitle() {
      var _this3 = this;
      var status = this.status_type == null ? '' : this.status_types.find(function (el) {
        return el.value == _this3.status_type;
      }).label.toLowerCase();
      return 'Clientèle des dossiers ' + status;
    }
  },
  created: function created() {
    var _this4 = this;
    _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["default"].loadUserData().then(function (res) {
      _this4.user = res.data;
      _this4.filiale = _this4.__filiale__ || res.data.filiale;
      _this4.getBasicStats();
      _this4.getFiliales();
    })["catch"](function (err) {
      console.error(err);
    })["finally"](function () {});
  },
  data: function data() {
    return {
      user: null,
      ebapisHost: _services_ebapis_service__WEBPACK_IMPORTED_MODULE_5__["default"].host,
      data: null,
      isMontant: true,
      freq: "M",
      periods: [{
        label: "Jour",
        value: "D"
      }, {
        label: "mois",
        value: "M"
      }, {
        label: "Année",
        value: "Y"
      }],
      filters: [{
        label: "Tous",
        value: "all",
        gbtitle: "filiales"
      }, {
        label: "Filiale",
        value: "filiale",
        gbtitle: "agences"
      }, {
        label: "Agence",
        value: "agence",
        gbtitle: "DGFINL"
      }],
      stats_types: [{
        label: "Montant ",
        value: "sum"
      }, {
        label: "Nombre",
        value: "count"
      }
      // {label: "Moyenne ", value: "mean"},
      ],
      date_types: [{
        label: "Date de création",
        value: "created_at"
      }, {
        label: "Date d'approbation",
        value: "outcome_date"
      }, {
        label: "Date de mise en place",
        value: "mep_date"
      }],
      date_type: "created_at",
      status_types: [{
        label: "Global ",
        value: null
      }, {
        label: "Mise en place",
        value: 2
      }, {
        label: "Acceptés",
        value: 1
      }, {
        label: "En cours",
        value: 0
      }, {
        label: "Refusés",
        value: -1
      }

      // {label: "Moyenne ", value: "mean"},
      ],
      status_type: null,
      stat_type: "sum",
      sort: "",
      filiales: [],
      area: "filiale",
      filiale: "",
      agence: ""
    };
  },
  methods: {
    reset: function reset() {
      this.sort = "";
    },
    getFiliales: function getFiliales() {
      var _this5 = this;
      this.$axios.post(this.reportex_link() + "reportex/api/v1/get-filiales/").then(function (res) {
        _this5.filiales = res.data.filiales;
      })["catch"](function (err) {
        console.error(err);
      });
    },
    getBasicStats: function getBasicStats() {
      var _this6 = this;
      this.$axios.post(this.reportex_link() + "reportex/api/v1/stat-basic/", {
        freq: this.freq,
        filter: {
          area: this.area,
          filiale: this.filiale,
          agence: this.agence,
          outcome: this.status_type,
          date_type: this.date_type
        },
        stat_type: this.stat_type,
        sort: this.sort
      }).then(function (res) {
        _this6.data = res.data;
      })["catch"](function (err) {
        console.error(err);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/reportex/statistics/ChartCard.vue?vue&type=template&id=24e03eef":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/reportex/statistics/ChartCard.vue?vue&type=template&id=24e03eef ***!
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
    staticClass: "card w-100 border-0",
    "class": {
      "h-auto": _vm.autoHeight,
      "shadow-sm": false
    },
    staticStyle: {
      "min-height": "300px",
      "max-height": "min-content"
    }
  }, [_c("div", {
    staticClass: "card-content"
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("h5", {
    staticClass: "card-title"
  }, [_vm._v(_vm._s(_vm.title))]), _vm._v(" "), _c("hr"), _vm._v(" "), _c("div", [_vm._t("default")], 2)])])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/reportex/statistics/StatLittleCard.vue?vue&type=template&id=a42c1eee":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/reportex/statistics/StatLittleCard.vue?vue&type=template&id=a42c1eee ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "card w-100 border-0",
    "class": {
      "shadow-sm": false
    }
  }, [_c("div", {
    staticClass: "card-content"
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "d-flex justify-content-between"
  }, [_c("div", {
    staticClass: "media-body text-left"
  }, [_c("h3", {
    "class": "text-" + _vm.color
  }, [_vm.montant ? _c("span", [_vm._v("\n                            " + _vm._s(_vm._f("formatNumber")(_vm.value)) + "\n                            ")]) : _c("span", [_vm._v("\n                            " + _vm._s(_vm.value) + "\n                        ")])]), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.title))]), _vm._v(" "), _c("span", {
    attrs: {
      title: _vm.progress || 0 + "% du total"
    }
  }, [_vm._v("  (" + _vm._s(_vm.progress || 0) + "%)")])]), _vm._v(" "), _c("div", {
    staticClass: "align-self-center"
  }, [_c("i", {
    "class": _vm.icon + " text-" + _vm.color + " icofont-" + _vm.iconSize + "x float-right"
  })])]), _vm._v(" "), _c("div", {
    staticClass: "progress mt-1 mb-0",
    staticStyle: {
      height: "6px"
    }
  }, [_c("div", {
    staticClass: "progress-bar",
    "class": _vm.progressColor,
    style: "width: " + _vm.progress + "%",
    attrs: {
      role: "progressbar",
      "aria-valuenow": _vm.progress,
      "aria-valuemin": "0",
      "aria-valuemax": "100"
    }
  })])])])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/reportex/statistics/Statistics.vue?vue&type=template&id=1633e812&scoped=true":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/reportex/statistics/Statistics.vue?vue&type=template&id=1633e812&scoped=true ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm$currentData, _vm$currentData2, _vm$currentData3, _vm$currentData4;
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12"
  }, [_c("div", {
    staticClass: "my-3 fs-6 d-flex flex-wrap align-items-center justify-content-between flex-wrap"
  }, [_c("h6", {
    staticClass: "col"
  }, [_vm._v("\n                    Statistiques\n                ")]), _vm._v(" "), _c("div", {
    staticClass: "col-auto"
  }, [_c("div", {
    staticClass: "d-lg-flex d-none align-items-center justify-content-between"
  }, [_c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.area,
      expression: "area"
    }],
    staticClass: "form-select filters border-0 mx-2 shadow-none",
    attrs: {
      id: "area"
    },
    on: {
      change: [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.area = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }, _vm.getBasicStats]
    }
  }, _vm._l(_vm.filters, function (filter) {
    return _c("option", {
      key: filter.label,
      domProps: {
        value: filter.value
      }
    }, [_vm._v("\n                                " + _vm._s(filter.label) + "\n                            ")]);
  }), 0), _vm._v(" "), ["filiale", "agence"].includes(_vm.area) ? _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.filiale,
      expression: "filiale"
    }],
    staticClass: "form-select filters border-0 mx-2 shadow-none",
    attrs: {
      id: "filiale"
    },
    on: {
      change: [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.filiale = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }, _vm.getBasicStats]
    }
  }, [_c("option", {
    attrs: {
      value: ""
    }
  }, [_vm._v("Filiale...")]), _vm._v(" "), _vm._l(_vm.filiales, function (fil) {
    return _c("option", {
      key: fil.name,
      domProps: {
        value: fil.name
      }
    }, [_vm._v("\n                                " + _vm._s(fil.name) + "\n                            ")]);
  })], 2) : _vm._e(), _vm._v(" "), _vm.area == "agence" ? _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.agence,
      expression: "agence"
    }],
    staticClass: "form-select filters border-0 mx-2 shadow-none",
    attrs: {
      id: "agence"
    },
    on: {
      change: [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.agence = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }, _vm.getBasicStats]
    }
  }, [_c("option", {
    attrs: {
      value: ""
    }
  }, [_vm._v("Agence...")]), _vm._v(" "), _vm._l(_vm.agences, function (agc) {
    return _c("option", {
      key: agc.name,
      domProps: {
        value: agc.code
      }
    }, [_vm._v("\n                                " + _vm._s(agc.name) + "\n                            ")]);
  })], 2) : _vm._e(), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.status_type,
      expression: "status_type"
    }],
    staticClass: "form-select filters border-0 mx-2 shadow-none",
    attrs: {
      id: "freq"
    },
    on: {
      change: [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.status_type = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }, _vm.getBasicStats]
    }
  }, _vm._l(_vm.status_types, function (s_type) {
    return _c("option", {
      key: s_type.label,
      domProps: {
        value: s_type.value
      }
    }, [_vm._v(_vm._s(s_type.label))]);
  }), 0), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.freq,
      expression: "freq"
    }],
    staticClass: "form-select filters border-0 mx-2 shadow-none",
    attrs: {
      id: "freq"
    },
    on: {
      change: [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.freq = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }, function ($event) {
        _vm.reset();
        _vm.getBasicStats();
      }]
    }
  }, _vm._l(_vm.periods, function (period) {
    return _c("option", {
      key: period.label,
      domProps: {
        value: period.value
      }
    }, [_vm._v(_vm._s(period.label))]);
  }), 0), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.stat_type,
      expression: "stat_type"
    }],
    staticClass: "form-select filters border-0 mx-2 shadow-none",
    attrs: {
      id: "freq"
    },
    on: {
      change: [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.stat_type = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }, _vm.getBasicStats]
    }
  }, _vm._l(_vm.stats_types, function (s_type) {
    return _c("option", {
      key: s_type.label,
      domProps: {
        value: s_type.value
      }
    }, [_vm._v(_vm._s(s_type.label))]);
  }), 0), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.sort,
      expression: "sort"
    }],
    staticClass: "form-select filters border-0 mx-2 shadow-none",
    attrs: {
      id: "freq"
    },
    on: {
      change: [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.sort = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }, _vm.getBasicStats]
    }
  }, [_c("option", {
    attrs: {
      value: ""
    }
  }, [_vm._v("\n                                Trier par ...\n                            ")]), _vm._v(" "), _vm._l(_vm.sortableKeys, function (key) {
    return _c("option", {
      key: key,
      domProps: {
        value: key
      }
    }, [_vm._v("\n                                " + _vm._s(key) + "\n                            ")]);
  })], 2)])])])]), _vm._v(" "), _c("div", {
    staticClass: "col-12"
  }, [_c("div", {
    staticClass: "d-flex flex-wrap justify-content-between"
  }, [_c("div", {
    staticClass: "col-lg col-md-6 col-12 pe-1"
  }, [_c("stat-little-card", {
    attrs: {
      montant: _vm.isMontant,
      value: (_vm$currentData = _vm.currentData) === null || _vm$currentData === void 0 ? void 0 : _vm$currentData.mise_en_place,
      title: "Dossier mis en place",
      icon: "icofont-ui-check"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-lg col-md-6 col-12 px-lg-1 ps-md-1"
  }, [_c("stat-little-card", {
    attrs: {
      montant: _vm.isMontant,
      value: (_vm$currentData2 = _vm.currentData) === null || _vm$currentData2 === void 0 ? void 0 : _vm$currentData2.acceptes,
      icon: "icofont-arrow-up"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-lg col-md-6 col-12 px-lg-1 pe-md-1"
  }, [_c("stat-little-card", {
    attrs: {
      montant: _vm.isMontant,
      value: (_vm$currentData3 = _vm.currentData) === null || _vm$currentData3 === void 0 ? void 0 : _vm$currentData3.refuses,
      icon: "icofont-close",
      title: "Dossiers refusés",
      color: "danger"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-lg col-md-12 col-12 ps-lg-1 px-0"
  }, [_c("stat-little-card", {
    attrs: {
      montant: _vm.isMontant,
      value: (_vm$currentData4 = _vm.currentData) === null || _vm$currentData4 === void 0 ? void 0 : _vm$currentData4.activites,
      iconSize: 3,
      icon: "icofont-maximize",
      title: "Activité",
      color: "primary"
    }
  })], 1)])]), _vm._v(" "), _c("div", {
    staticClass: "col-xl-9 col-12"
  }, [_c("div", {
    staticClass: "d-flex flex-wrap justify-content-between"
  }, [_c("div", {
    staticClass: "col-12 h-100"
  }, [_c("chart-card", {
    staticStyle: {
      height: "100% !important"
    },
    attrs: {
      title: _vm.bigChartTitle
    }
  }, [_vm.data ? _c("BarChart", {
    attrs: {
      chartData: _vm.filialeChart
    }
  }) : _vm._e()], 1)], 1)])]), _vm._v(" "), _c("div", {
    staticClass: "col-xl-3 col-12 px-lg-0 pb-lg-3 pb-2"
  }, [_c("div", {
    staticClass: "d-flex h-100"
  }, [_c("chart-card", {
    staticStyle: {
      height: "100% !important"
    },
    attrs: {
      title: _vm.clientelTitle
    }
  }, [_vm.data ? _c("DoughnutChart", {
    attrs: {
      chartData: _vm.typeChart
    }
  }) : _vm._e()], 1)], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-12"
  }, [_c("stat-table", {
    attrs: {
      headers: _vm.repartion_clientele_headers,
      items: _vm.repartition_clientele
    }
  })], 1)])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/reportex/statistics/Statistics.vue?vue&type=style&index=0&id=1633e812&scoped=true&lang=scss":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/reportex/statistics/Statistics.vue?vue&type=style&index=0&id=1633e812&scoped=true&lang=scss ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "#main-stats[data-v-1633e812] {\n  background: rgba(122, 83, 145, 0.16);\n}\n.filters[data-v-1633e812] {\n  background: rgba(122, 83, 145, 0.26);\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/reportex/statistics/Statistics.vue?vue&type=style&index=0&id=1633e812&scoped=true&lang=scss":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/reportex/statistics/Statistics.vue?vue&type=style&index=0&id=1633e812&scoped=true&lang=scss ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Statistics_vue_vue_type_style_index_0_id_1633e812_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Statistics.vue?vue&type=style&index=0&id=1633e812&scoped=true&lang=scss */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/reportex/statistics/Statistics.vue?vue&type=style&index=0&id=1633e812&scoped=true&lang=scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Statistics_vue_vue_type_style_index_0_id_1633e812_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Statistics_vue_vue_type_style_index_0_id_1633e812_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/reportex/statistics/ChartCard.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/components/reportex/statistics/ChartCard.vue ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ChartCard_vue_vue_type_template_id_24e03eef__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChartCard.vue?vue&type=template&id=24e03eef */ "./resources/js/components/reportex/statistics/ChartCard.vue?vue&type=template&id=24e03eef");
/* harmony import */ var _ChartCard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ChartCard.vue?vue&type=script&lang=js */ "./resources/js/components/reportex/statistics/ChartCard.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ChartCard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _ChartCard_vue_vue_type_template_id_24e03eef__WEBPACK_IMPORTED_MODULE_0__.render,
  _ChartCard_vue_vue_type_template_id_24e03eef__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/reportex/statistics/ChartCard.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/reportex/statistics/ChartCard.vue?vue&type=script&lang=js":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/reportex/statistics/ChartCard.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartCard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ChartCard.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/reportex/statistics/ChartCard.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartCard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/reportex/statistics/ChartCard.vue?vue&type=template&id=24e03eef":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/reportex/statistics/ChartCard.vue?vue&type=template&id=24e03eef ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartCard_vue_vue_type_template_id_24e03eef__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartCard_vue_vue_type_template_id_24e03eef__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartCard_vue_vue_type_template_id_24e03eef__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ChartCard.vue?vue&type=template&id=24e03eef */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/reportex/statistics/ChartCard.vue?vue&type=template&id=24e03eef");


/***/ }),

/***/ "./resources/js/components/reportex/statistics/StatLittleCard.vue":
/*!************************************************************************!*\
  !*** ./resources/js/components/reportex/statistics/StatLittleCard.vue ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _StatLittleCard_vue_vue_type_template_id_a42c1eee__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StatLittleCard.vue?vue&type=template&id=a42c1eee */ "./resources/js/components/reportex/statistics/StatLittleCard.vue?vue&type=template&id=a42c1eee");
/* harmony import */ var _StatLittleCard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StatLittleCard.vue?vue&type=script&lang=js */ "./resources/js/components/reportex/statistics/StatLittleCard.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _StatLittleCard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _StatLittleCard_vue_vue_type_template_id_a42c1eee__WEBPACK_IMPORTED_MODULE_0__.render,
  _StatLittleCard_vue_vue_type_template_id_a42c1eee__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/reportex/statistics/StatLittleCard.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/reportex/statistics/StatLittleCard.vue?vue&type=script&lang=js":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/reportex/statistics/StatLittleCard.vue?vue&type=script&lang=js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StatLittleCard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./StatLittleCard.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/reportex/statistics/StatLittleCard.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StatLittleCard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/reportex/statistics/StatLittleCard.vue?vue&type=template&id=a42c1eee":
/*!******************************************************************************************************!*\
  !*** ./resources/js/components/reportex/statistics/StatLittleCard.vue?vue&type=template&id=a42c1eee ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_StatLittleCard_vue_vue_type_template_id_a42c1eee__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_StatLittleCard_vue_vue_type_template_id_a42c1eee__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_StatLittleCard_vue_vue_type_template_id_a42c1eee__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./StatLittleCard.vue?vue&type=template&id=a42c1eee */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/reportex/statistics/StatLittleCard.vue?vue&type=template&id=a42c1eee");


/***/ }),

/***/ "./resources/js/components/reportex/statistics/Statistics.vue":
/*!********************************************************************!*\
  !*** ./resources/js/components/reportex/statistics/Statistics.vue ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Statistics_vue_vue_type_template_id_1633e812_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Statistics.vue?vue&type=template&id=1633e812&scoped=true */ "./resources/js/components/reportex/statistics/Statistics.vue?vue&type=template&id=1633e812&scoped=true");
/* harmony import */ var _Statistics_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Statistics.vue?vue&type=script&lang=js */ "./resources/js/components/reportex/statistics/Statistics.vue?vue&type=script&lang=js");
/* harmony import */ var _Statistics_vue_vue_type_style_index_0_id_1633e812_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Statistics.vue?vue&type=style&index=0&id=1633e812&scoped=true&lang=scss */ "./resources/js/components/reportex/statistics/Statistics.vue?vue&type=style&index=0&id=1633e812&scoped=true&lang=scss");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Statistics_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Statistics_vue_vue_type_template_id_1633e812_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _Statistics_vue_vue_type_template_id_1633e812_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "1633e812",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/reportex/statistics/Statistics.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/reportex/statistics/Statistics.vue?vue&type=script&lang=js":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/reportex/statistics/Statistics.vue?vue&type=script&lang=js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Statistics_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Statistics.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/reportex/statistics/Statistics.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Statistics_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/reportex/statistics/Statistics.vue?vue&type=style&index=0&id=1633e812&scoped=true&lang=scss":
/*!*****************************************************************************************************************************!*\
  !*** ./resources/js/components/reportex/statistics/Statistics.vue?vue&type=style&index=0&id=1633e812&scoped=true&lang=scss ***!
  \*****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Statistics_vue_vue_type_style_index_0_id_1633e812_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Statistics.vue?vue&type=style&index=0&id=1633e812&scoped=true&lang=scss */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/reportex/statistics/Statistics.vue?vue&type=style&index=0&id=1633e812&scoped=true&lang=scss");


/***/ }),

/***/ "./resources/js/components/reportex/statistics/Statistics.vue?vue&type=template&id=1633e812&scoped=true":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/components/reportex/statistics/Statistics.vue?vue&type=template&id=1633e812&scoped=true ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Statistics_vue_vue_type_template_id_1633e812_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Statistics_vue_vue_type_template_id_1633e812_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Statistics_vue_vue_type_template_id_1633e812_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Statistics.vue?vue&type=template&id=1633e812&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/reportex/statistics/Statistics.vue?vue&type=template&id=1633e812&scoped=true");


/***/ })

}]);