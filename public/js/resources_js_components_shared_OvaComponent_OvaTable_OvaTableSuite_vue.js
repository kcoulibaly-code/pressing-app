"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_shared_OvaComponent_OvaTable_OvaTableSuite_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/OvaComponent/OvaTable/OvaTableSuite.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/OvaComponent/OvaTable/OvaTableSuite.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
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
/**
 * OvaTableSuite.vue
 * 
 * Composant principal pour l'affichage de tableaux avancés avec fonctionnalités complètes.
 * Système de table flexible et extensible avec support pour les colonnes hiérarchiques.
 * 
 * Fonctionnalités principales :
 * - Colonnes hiérarchiques avec support des groupes et sous-colonnes
 * - Tri et filtrage avancés (texte, numérique, plages, opérateurs)
 * - Pagination locale et serveur
 * - Recherche globale avec support des accents
 * - Calculs automatiques d'agrégats (somme, moyenne, min, max, count)
 * - Support des styles conditionnels et visibilité conditionnelle
 * - Classes Bootstrap intégrées (striped, hover, bordered, small)
 * - Système de provide/inject pour communication parent-enfant
 * 
 * Modes de traitement :
 * - Local : Traitement côté client (tri, filtrage, pagination)
 * - Serveur : Émission d'événements pour traitement côté serveur
 * 
 * Composants enfants :
 * - OvaTableColumn : Définition de colonnes avec props (field, label, type, sortable, filterable)
 * - OvaTableHeader : Rendu de l'en-tête avec tri et icônes de direction
 * - OvaTableBody : Affichage des données avec support de slots personnalisés et composants
 * - OvaTableFooter : Pied avec totaux/agrégats et cellules combinées configurables
 * - OvaTablePagination : Navigation entre pages avec indicateurs de position
 * - OvaTableSearch : Barre de recherche avec debounce et bouton de suppression
 * - OvaTableToolbar : Conteneur pour actions et contrôles de la table
 * - OvaTableToolbarRow : Ligne dans la toolbar pour organisation des éléments
 * - OvaTableToolbarItem : Élément individuel dans la toolbar
 * - OvaTable : Wrapper pour la table HTML
 * - OvaTableResponsive : Wrapper responsive pour la table HTML
 * - CustomZeroCross : Composant d'affichage pour valeurs nulles/zéro
 * 
 * @author ovarion
 * @version 1.0.0-beta
 */
function cleanString(str) {
  return str.trim().toLowerCase().replace(/\s+/g, ' ') // Remove extra spaces
  .normalize('NFD') // Normalize accents
  .replace(/[\u0300-\u036f]/g, ''); // Remove diacritics
}
;
var __default__ = {
  name: 'OvaTableSuite',
  props: {
    data: {
      type: Array,
      required: true
    },
    rowKey: {
      type: String,
      "default": 'id'
    },
    itemsPerPage: {
      type: Number,
      "default": 10
    },
    /**
     * 'local': Le composant gère tout.
     * 'server': Le composant émet des événements et attend les données.
     */
    processingMode: {
      type: String,
      "default": 'local',
      validator: function validator(val) {
        return ['local', 'server'].includes(val);
      }
    },
    totalServerItems: {
      type: Number,
      "default": 0
    },
    loading: {
      type: Boolean,
      "default": false
    },
    // --- Props Bootstrap ---
    striped: {
      type: Boolean,
      "default": false
    },
    hover: {
      type: Boolean,
      "default": false
    },
    bordered: {
      type: Boolean,
      "default": false
    },
    small: {
      type: Boolean,
      "default": false
    },
    headerTheme: {
      type: String,
      "default": ''
    },
    // 'light' ou 'dark'
    clickableRows: {
      type: Boolean,
      "default": false
    },
    defaultSortKey: {
      type: String,
      "default": ''
    },
    defaultSortDirection: {
      type: String,
      "default": 'asc'
    }
  },
  data: function data() {
    return {
      internalColumns: [],
      sorting: {
        column: null,
        direction: 'asc'
      },
      columnFilters: {},
      globalSearchQuery: '',
      currentPage: 1
    };
  },
  provide: function provide() {
    var _this = this;
    return {
      ovaTableParent: {
        ctx: this,
        name: 'OvaTableSuite'
      },
      registerChild: this.registerChildConfig,
      orderChildConfig: this.orderChildConfig,
      // --- Données & État ---
      paginatedData: function paginatedData() {
        return _this.paginatedData;
      },
      totals: function totals() {
        return _this.totals;
      },
      sorting: function sorting() {
        return _this.sorting;
      },
      rowKey: this.rowKey,
      currentPage: function currentPage() {
        return _this.currentPage;
      },
      totalPages: function totalPages() {
        return _this.totalPages;
      },
      totalItemsCount: function totalItemsCount() {
        return _this.totalItemsCount;
      },
      itemsPerPage: function itemsPerPage() {
        return _this.itemsPerPage;
      },
      filters: function filters() {
        return _this.columnFilters;
      },
      headerRows: function headerRows() {
        return _this.headerRows;
      },
      leafColumns: function leafColumns() {
        return _this.leafColumns;
      },
      clickableRows: function clickableRows() {
        return _this.clickableRows;
      },
      // --- Méthodes ---
      toggleSort: this.toggleSort,
      updateFilter: this.updateFilter,
      updateGlobalSearch: this.updateGlobalSearch,
      setCurrentPage: this.setCurrentPage,
      handleRowClick: this.handleRowClick,
      // On fournit les classes de table aux enfants qui en ont besoin
      tableClasses: function tableClasses() {
        return _this.tableClasses;
      },
      headerThemeClass: function headerThemeClass() {
        return _this.headerTheme ? "thead-".concat(_this.headerTheme) : '';
      }
    };
  },
  computed: {
    // Calcule les classes à appliquer sur la balise <table>
    tableClasses: function tableClasses() {
      return {
        'table': true,
        'table-striped': this.striped,
        'table-hover': this.hover,
        'table-bordered': this.bordered,
        'table-sm': this.small
      };
    },
    processedData: function processedData() {
      var result = _toConsumableArray(this.data);

      // Si on est en mode serveur, on fait confiance aux données fournies.
      if (this.processingMode === 'server') {
        return result;
      }

      // Sinon, on applique notre pipeline local.
      result = this.globalSearchFilterLocal(result);
      result = this.filteredDataLocal(result);
      result = this.sortedDataLocal(result);
      return result;
    },
    paginatedData: function paginatedData() {
      if (this.itemsPerPage <= 0) return this.processedData;
      var start = (this.currentPage - 1) * this.itemsPerPage;
      return this.processedData.slice(start, start + this.itemsPerPage);
    },
    totals: function totals() {
      var _this2 = this;
      var totals = {};
      this.leafColumns.forEach(function (col) {
        if (col.type === 'number' || col.aggregate) {
          var values = _this2.processedData.map(function (row) {
            var val = _this2.getCellValue(row, col.key);
            return isNaN(val) ? 0 : Number(val);
          });
          switch (col.aggregate || 'sum') {
            case 'sum':
              totals[col.key] = values.reduce(function (sum, val) {
                return sum + val;
              }, 0);
              break;
            case 'avg':
              totals[col.key] = values.length ? values.reduce(function (sum, val) {
                return sum + val;
              }, 0) / values.length : 0;
              break;
            case 'min':
              totals[col.key] = Math.min.apply(Math, _toConsumableArray(values));
              break;
            case 'max':
              totals[col.key] = Math.max.apply(Math, _toConsumableArray(values));
              break;
            case 'count':
              totals[col.key] = _this2.processedData.length;
              break;
          }
        }
      });
      return totals;
    },
    totalItemsCount: function totalItemsCount() {
      return this.processingMode === 'server' ? this.totalServerItems : this.processedData.length;
    },
    totalPages: function totalPages() {
      return Math.ceil(this.totalItemsCount / this.itemsPerPage);
    },
    headerMaxDepth: function headerMaxDepth() {
      var _this3 = this;
      var _getDepth = function getDepth(nodes) {
        if (!nodes || nodes.length === 0) return 0;

        // Filtrer les nœuds visibles selon leur condition 'when'
        var visibleNodes = nodes.filter(function (node) {
          return _this3.evaluateWhenCondition(node.when);
        });
        if (visibleNodes.length === 0) return 0;
        return 1 + Math.max.apply(Math, [0].concat(_toConsumableArray(visibleNodes.map(function (node) {
          return _getDepth(node.children);
        }))));
      };
      return _getDepth(this.internalColumns);
    },
    /**
     * Transforme l'arborescence des colonnes en un tableau 2D [row][cell] que le <thead> peut rendre directement.
     * Calcule les colspan et rowspan pour chaque cellule.
     * Filtre également selon la propriété 'when' pour la visibilité conditionnelle.
     */
    headerRows: function headerRows() {
      var _this4 = this;
      var rows = [];
      var _getLeafCount = function getLeafCount(node) {
        if (!node.children || node.children.length === 0) {
          // Pour les feuilles, vérifier la condition 'when'
          return _this4.evaluateWhenCondition(node.when) ? 1 : 0;
        }
        return node.children.reduce(function (sum, child) {
          return sum + _getLeafCount(child);
        }, 0);
      };

      // Filtrer les colonnes racines selon leur condition 'when'
      var visibleRootColumns = this.internalColumns.filter(function (node) {
        return _this4.evaluateWhenCondition(node.when);
      });
      var queue = _toConsumableArray(visibleRootColumns);
      var _loop = function _loop(depth) {
        var row = [];
        var nextQueue = [];
        queue.forEach(function (node) {
          var leafCount = _getLeafCount(node);

          // Ne pas afficher la colonne si elle n'a pas de feuilles visibles
          if (leafCount === 0) return;
          var isGroup = node.children && node.children.length > 0;
          var shouldShow = _this4.evaluateWhenCondition(node.when);
          if (shouldShow) {
            row.push(_objectSpread(_objectSpread({}, node), {}, {
              key: node.columnKey || node.field || node.label,
              label: node.label,
              // Si c'est un groupe, le colspan est le nombre de feuilles visibles sous lui.
              colspan: isGroup ? leafCount : 1,
              // Si c'est une feuille, elle doit s'étendre sur les lignes restantes.
              rowspan: !isGroup ? _this4.headerMaxDepth - depth : 1,
              filterable: node.filterable && !isGroup,
              sortable: node.sortable && !isGroup,
              isGroup: isGroup,
              // Ajouter les classes et styles conditionnels
              headerClass: _this4.mergeConditionalClasses(node.headerClass, node.whenClass, shouldShow),
              cellClass: _this4.mergeConditionalClasses(node.cellClass, node.whenClass, shouldShow),
              headerStyle: _this4.mergeConditionalStyles(node.headerStyle, node.whenStyle, shouldShow),
              cellStyle: _this4.mergeConditionalStyles(node.cellStyle, node.whenStyle, shouldShow)
            }));
            if (isGroup) {
              // Filtrer les enfants selon leur condition 'when'
              var visibleChildren = node.children.filter(function (child) {
                return _this4.evaluateWhenCondition(child.when);
              });
              nextQueue.push.apply(nextQueue, _toConsumableArray(visibleChildren));
            }
          }
        });
        rows.push(row);
        queue = nextQueue;
      };
      for (var depth = 0; depth < this.headerMaxDepth; depth++) {
        _loop(depth);
      }
      return rows;
    },
    /**
     * Fournit une liste plate de toutes les colonnes "feuilles" (celles avec un 'field').
     * C'est ce que le <OvaTableSuiteBody> utilisera pour afficher les données.
     * Filtre également selon la propriété 'when' pour la visibilité conditionnelle.
     */
    leafColumns: function leafColumns() {
      var _this5 = this;
      var leaves = [];
      var _findLeaves = function findLeaves(nodes) {
        nodes.forEach(function (node) {
          // Évaluer la condition 'when' pour la visibilité
          var shouldShow = _this5.evaluateWhenCondition(node.when);
          if (shouldShow) {
            if (node.children && node.children.length > 0) {
              _findLeaves(node.children);
            } else if (node.field) {
              // Ajouter les classes et styles conditionnels
              var enhancedNode = _objectSpread(_objectSpread({}, node), {}, {
                cellClass: _this5.mergeConditionalClasses(node.cellClass, node.whenClass, shouldShow),
                headerClass: _this5.mergeConditionalClasses(node.headerClass, node.whenClass, shouldShow),
                cellStyle: _this5.mergeConditionalStyles(node.cellStyle, node.whenStyle, shouldShow),
                headerStyle: _this5.mergeConditionalStyles(node.headerStyle, node.whenStyle, shouldShow)
              });
              leaves.push(enhancedNode);
            }
          }
        });
      };
      _findLeaves(this.internalColumns);
      return leaves;
    },
    cursor: function cursor() {
      return this.clickableRows ? 'pointer' : 'default';
    }
  },
  methods: {
    /**
     * Extrait la valeur d'une cellule en suivant un chemin en dot notation
     * @param {Object} row - L'objet ligne de données
     * @param {String} path - Le chemin vers la propriété (ex: "user.name")
     * @returns {any} - La valeur extraite
     */
    getCellValue: function getCellValue(row, path) {
      return path.split(".").reduce(function (obj, key) {
        return obj && obj[key];
      }, row);
    },
    /**
     * Obtient la clé d'une colonne pour l'identification unique
     * @param {Object} column - L'objet colonne
     * @returns {String} - La clé de la colonne
     */
    getColumnKey: function getColumnKey(column) {
      return (column === null || column === void 0 ? void 0 : column.key) || (column === null || column === void 0 ? void 0 : column.keyName) || (column === null || column === void 0 ? void 0 : column.field);
    },
    orderChildConfig: function orderChildConfig(childrenConfig) {
      var _this6 = this;
      var orderedChild = [];
      var workingSet = _toConsumableArray(childrenConfig);
      var _loop2 = function _loop2() {
        var child = workingSet.shift();
        if (child) {
          if (orderedChild.length === 0) {
            orderedChild.push(child);
          } else {
            if (!child.after && !child.before) {
              orderedChild.push(child);
            } else {
              if (child.before) {
                var beforeIndex = orderedChild.findIndex(function (item) {
                  return _this6.getColumnKey(item) === child.before;
                });
                if (beforeIndex === -1) {
                  orderedChild.unshift(child);
                } else {
                  orderedChild.splice(beforeIndex, 0, child);
                }
              } else {
                var afterIndex = orderedChild.findIndex(function (item) {
                  return _this6.getColumnKey(item) === child.after;
                });
                if (afterIndex === -1) {
                  orderedChild.push(child);
                } else {
                  orderedChild.splice(afterIndex + 1, 0, child);
                }
              }
            }
          }
        } else {}
      };
      do {
        _loop2();
      } while (workingSet.length);
      return orderedChild;
    },
    registerChildConfig: function registerChildConfig(columnConfig, override) {
      var _this7 = this;
      var isExist = this.internalColumns.findIndex(function (col) {
        return _this7.getColumnKey(col) === _this7.getColumnKey(columnConfig);
      });
      if (isExist < 0 || override) {
        if (isExist < 0) {
          this.internalColumns.push(columnConfig);
        } else {
          this.internalColumns[isExist] = _objectSpread(_objectSpread({}, this.internalColumns[isExist]), columnConfig);
        }
        this.internalColumns = this.orderChildConfig(this.internalColumns);
      }
    },
    updateState: function updateState() {
      var _this8 = this;
      if (this.processingMode === 'server') {
        var numericFilters = Object.keys(this.columnFilters).map(function (key) {
          if (_this8.isSpecialFilter(_this8.columnFilters[key])) {
            return {
              field: key,
              operation: _this8.extractSpecialFilterOperations(_this8.columnFilters[key])
            };
          }
          return null;
        }).filter(Boolean);

        // En mode serveur, on émet l'état complet.
        this.$emit('update', {
          sorting: this.sorting,
          filters: _objectSpread(_objectSpread({}, this.columnFilters), {}, {
            global: this.globalSearchQuery,
            numericFilters: numericFilters
          }),
          pagination: {
            page: this.currentPage,
            itemsPerPage: this.itemsPerPage
          }
        });
      }
    },
    toggleSort: function toggleSort(columnKey) {
      if (this.sorting.column === columnKey) {
        this.sorting.direction = this.sorting.direction === 'asc' ? 'desc' : 'asc';
      } else {
        this.sorting.column = columnKey;
        this.sorting.direction = 'asc';
      }
      this.updateState();
    },
    updateFilter: function updateFilter(columnKey, value) {
      this.$set(this.columnFilters, columnKey, value);
      this.currentPage = 1;
      this.updateState();
    },
    updateGlobalSearch: function updateGlobalSearch(query) {
      this.globalSearchQuery = query;
      this.currentPage = 1;
      this.updateState();
    },
    setCurrentPage: function setCurrentPage(page) {
      this.currentPage = page;
      this.updateState();
    },
    handleRowClick: function handleRowClick(row) {
      this.clickableRows && this.$emit('row-click', row);
    },
    globalSearchFilterLocal: function globalSearchFilterLocal(data) {
      var _this9 = this;
      if (!this.globalSearchQuery || this.globalSearchQuery.trim() === '') return data;
      var query = cleanString(this.globalSearchQuery);
      return data.filter(function (row) {
        return _this9.leafColumns.some(function (col) {
          var cellValue = _this9.getCellValue(row, col.key);
          if (cellValue && typeof cellValue === 'string') {
            var cleanedCellValue = cleanString(cellValue);
            return cleanedCellValue.includes(query) || query.includes(cleanedCellValue);
          }
          return String(cellValue).includes(String(query));
        });
      });
    },
    // --- Special Numeric Filtering ---
    // Supports operations like: <100, >=50, =25, 100-500
    // Format examples:
    // - "< 100" or "<100" -> less than 100
    // - ">= 50" or ">=50" -> greater than or equal to 50  
    // - "= 25" or "=25" -> equals 25
    // - "100 - 500" or "100-500" -> between 100 and 500
    // - "1000- -600000" -> between 1000 and -600000
    // - "1000--600000" -> between 1000 and -600000
    // - "-1000-600000" -> between -1000 and 600000
    // - "-1000--600000" -> between -1000 and -600000
    extractSpecialFilterOperations: function extractSpecialFilterOperations(value) {
      var operations = [];
      value = value.trim();

      // Gérer les opérateurs de comparaison (avec le support pour les nombres négatifs)
      var operators = ['<=', '>=', '<', '>', '='];
      for (var _i = 0, _operators = operators; _i < _operators.length; _i++) {
        var op = _operators[_i];
        if (value.startsWith(op)) {
          var numPart = value.slice(op.length).trim();
          // Better parsing that preserves negative signs
          // const cleanedNum = numPart.replace(/[^\d.,-]/g, '').replace(',', '.');
          // const numValue = parseFloat(cleanedNum);
          var numValue = this.extractNumericValue(numPart);
          if (!isNaN(numValue)) {
            var type = void 0;
            switch (op) {
              case '<':
                type = 'lessThan';
                break;
              case '<=':
                type = 'lessThanOrEqual';
                break;
              case '>':
                type = 'greaterThan';
                break;
              case '>=':
                type = 'greaterThanOrEqual';
                break;
              case '=':
                type = 'equals';
                break;
            }
            operations.push({
              type: type,
              value: numValue
            });
          }
          break; // Un opérateur à la fois pour l'instant
        }
      }
      if (operations.length > 0) {
        return operations;
      }

      // Gérer les plages de valeurs
      // - "100-500" -> between 100 and 500
      // - "1000- -600000" -> between 1000 and -600000
      // - "1000--600000" -> between 1000 and -600000
      // - "-1000-600000" -> between -1000 and 600000
      // - "-1000--600000" -> between -1000 and -600000
      var rangeMatch = value.replace(/[^\d.,-]/g, '').split("--");
      if (rangeMatch.length === 2) {
        rangeMatch = [rangeMatch[0], "-".concat(rangeMatch[1])];
      } else {
        rangeMatch = value.split("-");
        if (value.startsWith("-") && rangeMatch.length > 2) {
          rangeMatch = ["-".concat(rangeMatch[1]), rangeMatch[2]];
        }
      }
      if (rangeMatch.length === 2) {
        var min = parseFloat(rangeMatch[0].replace(',', '.'));
        var max = parseFloat(rangeMatch[1].replace(',', '.'));
        var actualMin = Math.min(min, max);
        var actualMax = Math.max(min, max);
        operations.push({
          type: 'between',
          value: [actualMin, actualMax]
        });
        return operations;
      }
      if (operations.length === 0) {
        operations.push({
          type: 'equals',
          value: this.extractNumericValue(value)
        });
      }
      return operations;
    },
    filterToOperation: function filterToOperation(value) {
      // Opérations possible:
      // - Inférieur à (<)
      // - Inférieur ou égal à (<=)
      // - Supérieur à (>)
      // - Supérieur ou égal à (>=)
      // - Égal à (=)
      // - Entre (val1-val2)
      var operations = [];

      // if (this.isSpecialFilter(value)) {
      operations.push.apply(operations, _toConsumableArray(this.extractSpecialFilterOperations(value)));
      // } else {
      //   operations.push({ type: 'equals', value: this.extractNumericValue(value) });
      // }

      return operations;
    },
    filteredDataLocal: function filteredDataLocal(data) {
      var _this0 = this;
      var result = _toConsumableArray(data);
      Object.keys(this.columnFilters).forEach(function (key) {
        var filterValue = _this0.columnFilters[key];
        if (filterValue && filterValue !== '') {
          var col = _this0.leafColumns.find(function (c) {
            return c.key === key;
          });
          if (['currency', 'number'].includes(col === null || col === void 0 ? void 0 : col.type)) {
            var operations = _this0.filterToOperation(filterValue);
            result = result.filter(function (row) {
              var cellValue = _this0.getCellValue(row, key);
              var numericCellValue = _this0.extractNumericValue(cellValue);
              if (isNaN(numericCellValue)) return false;
              return operations.every(function (operation) {
                switch (operation.type) {
                  case 'lessThan':
                    return numericCellValue < operation.value;
                  case 'lessThanOrEqual':
                    return numericCellValue <= operation.value;
                  case 'greaterThan':
                    return numericCellValue > operation.value;
                  case 'greaterThanOrEqual':
                    return numericCellValue >= operation.value;
                  case 'equals':
                    return numericCellValue === operation.value;
                  case 'between':
                    return numericCellValue >= operation.value[0] && numericCellValue <= operation.value[1];
                  default:
                    return true;
                }
              });
            });
          } else {
            var cleanedFilterValue = cleanString(filterValue);
            result = result.filter(function (row) {
              var cellValue = _this0.getCellValue(row, key);
              if (typeof cellValue === 'string') {
                var cleanedCellValue = cleanString(cellValue);
                return cleanedCellValue.includes(cleanedFilterValue) || cleanedFilterValue.includes(cleanedCellValue);
              }
              return String(cellValue).includes(String(filterValue));
            });
          }
        }
      });
      return result;
    },
    sortedDataLocal: function sortedDataLocal(data) {
      var _this1 = this;
      if (!this.sorting.column) return data;
      var result = _toConsumableArray(data);
      result = result.sort(function (a, b) {
        var aVal = _this1.getCellValue(a, _this1.sorting.column);
        var bVal = _this1.getCellValue(b, _this1.sorting.column);
        var result = 0;
        if (aVal < bVal) result = -1;
        if (aVal > bVal) result = 1;
        return _this1.sorting.direction === 'desc' ? -result : result;
      });
      return result;
    },
    extractNumericValue: function extractNumericValue(value) {
      if (typeof value === 'number') return value;
      if (!value) return NaN;
      var cleanValue = String(value).replace(/[^0-9.,-]/g, '').replace(/\s+/g, '').replace(/,/g, '.');
      return parseFloat(cleanValue);
    },
    /**
     * Vérifie si une valeur de filtre utilise une syntaxe spéciale pour les nombres
     * @param {String} value - La valeur du filtre à vérifier
     * @returns {Boolean} - true si c'est un filtre spécial
     */
    isSpecialFilter: function isSpecialFilter(value) {
      if (!value || typeof value !== 'string') return false;
      var trimmed = value.trim();

      // Vérifier les opérateurs de comparaison
      var operators = ['<=', '>=', '<', '>', '='];
      for (var _i2 = 0, _operators2 = operators; _i2 < _operators2.length; _i2++) {
        var op = _operators2[_i2];
        if (trimmed.startsWith(op)) return true;
      }

      // Vérifier les plages (contient un tiret au milieu)
      if (/^\s*-?\d+(\.\d+)?\s*-\s*-?\d+(\.\d+)?\s*$/.test(trimmed)) return true;
      return false;
    },
    /**
     * Évalue la condition 'when' pour déterminer si une colonne doit être affichée
     * @param {Boolean|Function} when - La condition à évaluer
     * @returns {Boolean} - true si la colonne doit être affichée
     */
    evaluateWhenCondition: function evaluateWhenCondition(when) {
      // Si 'when' n'est pas défini, la colonne est toujours visible
      if (when === undefined || when === null) return true;

      // Si 'when' est défini comme true par défaut dans les props, on considère ça comme "toujours visible"
      if (when === true) return true;

      // Si c'est un boolean explicite
      if (typeof when === 'boolean') return when;

      // Si c'est une fonction, l'évaluer
      if (typeof when === 'function') {
        try {
          return when();
        } catch (error) {
          console.warn('Error evaluating when condition:', error);
          return false;
        }
      }
      return true; // default fallback
    },
    /**
     * Fusionne les classes conditionnelles avec les classes existantes
     * @param {String|Array|Object} baseClasses - Classes de base
     * @param {String|Array|Object} whenClasses - Classes conditionnelles
     * @param {Boolean} condition - Condition pour appliquer les classes conditionnelles
     * @returns {String|Array|Object} - Classes fusionnées
     */
    mergeConditionalClasses: function mergeConditionalClasses(baseClasses, whenClasses, condition) {
      if (!condition || !whenClasses) return baseClasses;

      // Si les classes de base sont un array
      if (Array.isArray(baseClasses)) {
        if (Array.isArray(whenClasses)) {
          return [].concat(_toConsumableArray(baseClasses), _toConsumableArray(whenClasses));
        }
        return [].concat(_toConsumableArray(baseClasses), [whenClasses]);
      }

      // Si les classes de base sont un objet
      if (_typeof(baseClasses) === 'object' && baseClasses !== null) {
        if (_typeof(whenClasses) === 'object' && whenClasses !== null) {
          return _objectSpread(_objectSpread({}, baseClasses), whenClasses);
        }
        return baseClasses; // On ne peut pas fusionner objet + string facilement
      }

      // Si les classes de base sont une string
      if (typeof baseClasses === 'string') {
        if (typeof whenClasses === 'string') {
          return "".concat(baseClasses, " ").concat(whenClasses).trim();
        }
        if (Array.isArray(whenClasses)) {
          return [baseClasses].concat(_toConsumableArray(whenClasses));
        }
        if (_typeof(whenClasses) === 'object') {
          return [baseClasses, whenClasses];
        }
      }
      return baseClasses;
    },
    /**
     * Fusionne les styles conditionnels avec les styles existants
     * @param {String|Object} baseStyles - Styles de base
     * @param {String|Object} whenStyles - Styles conditionnels
     * @param {Boolean} condition - Condition pour appliquer les styles conditionnels
     * @returns {String|Object} - Styles fusionnés
     */
    mergeConditionalStyles: function mergeConditionalStyles(baseStyles, whenStyles, condition) {
      if (!condition || !whenStyles) return baseStyles;

      // Si les styles de base sont un objet
      if (_typeof(baseStyles) === 'object' && baseStyles !== null) {
        if (_typeof(whenStyles) === 'object' && whenStyles !== null) {
          return _objectSpread(_objectSpread({}, baseStyles), whenStyles);
        }
        return baseStyles; // On ne peut pas fusionner objet + string facilement
      }

      // Si les styles de base sont une string
      if (typeof baseStyles === 'string') {
        if (typeof whenStyles === 'string') {
          return "".concat(baseStyles, "; ").concat(whenStyles).replace(/;+/g, ';').trim();
        }
        return baseStyles; // On ne peut pas fusionner string + objet facilement
      }
      return baseStyles;
    }
  },
  created: function created() {
    if (this.defaultSortKey) {
      this.sorting.column = this.defaultSortKey;
      this.sorting.direction = this.defaultSortDirection === 'desc' ? 'desc' : 'asc';
    }
  },
  mounted: function mounted() {
    // Émet un premier événement pour le mode serveur
    if (this.processingMode === 'server') {
      this.updateState();
    }
  }
};

var __injectCSSVars__ = function __injectCSSVars__() {
  (0,vue__WEBPACK_IMPORTED_MODULE_0__.useCssVars)(function (_vm, _setup) {
    return {
      "2cde8b96-cursor": _vm.cursor
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/OvaComponent/OvaTable/OvaTableSuite.vue?vue&type=template&id=2cde8b96&scoped=true":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/OvaComponent/OvaTable/OvaTableSuite.vue?vue&type=template&id=2cde8b96&scoped=true ***!
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
    staticClass: "ova-table-suite"
  }, [_vm._t("default", null, {
    data: _vm.processedData,
    sorting: _vm.sorting,
    filters: _vm.columnFilters,
    totals: _vm.totals,
    toggleSort: _vm.toggleSort,
    updateFilter: _vm.updateFilter,
    onRowClick: _vm.handleRowClick
  })], 2);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/OvaComponent/OvaTable/OvaTableSuite.vue?vue&type=style&index=0&id=2cde8b96&scoped=true&lang=css":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/OvaComponent/OvaTable/OvaTableSuite.vue?vue&type=style&index=0&id=2cde8b96&scoped=true&lang=css ***!
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.ova-table-suite[data-v-2cde8b96] {\r\n  width: 100%;\n}\r\n\r\n/* Table styling enhancements */\n.ova-table-suite[data-v-2cde8b96] .table {\r\n  font-size: 1rem;\r\n  border: 1px solid #dee2e6;\n}\n.ova-table-suite[data-v-2cde8b96] .table tfoot td.with-totals,\r\n.ova-table-suite[data-v-2cde8b96] .table th {\r\n  background: var(--bs-secondary);\r\n  color: white;\n}\n.ova-table-suite[data-v-2cde8b96] .table .ova-sticky {\r\n  background-color: #f1f1f1;\r\n  color: var(--bs-body-color);\r\n  border: solid 1px transparent;\r\n  /* border-bottom: solid 1px #6c757d; */\r\n  position: sticky;\r\n  left: -0.5px;\r\n  z-index: 10;\n}\n.ova-table-suite[data-v-2cde8b96] .table thead.ova-sticky {\r\n  position: sticky;\r\n  top: 0;\r\n  z-index: 15;\n}\n.ova-table-suite[data-v-2cde8b96] .table th.ova-sticky {\r\n  position: sticky;\r\n  top: 0;\r\n  z-index: 10;\n}\n.ova-table-suite[data-v-2cde8b96] .table tfoot.ova-sticky {\r\n  position: sticky;\r\n  bottom: 0;\r\n  z-index: 10;\n}\n.ova-table-suite[data-v-2cde8b96] .table td {\r\n  vertical-align: middle;\n}\n.ova-table-suite[data-v-2cde8b96] .table tbody tr:hover {\r\n  background-color: #f8f9fa;\r\n  cursor: var(--2cde8b96-cursor);\n}\r\n\r\n/* Monospace styling for numbers */\n.ova-table-suite[data-v-2cde8b96] .table td[data-type=\"currency\"],\r\n.ova-table-suite[data-v-2cde8b96] .table td[data-type=\"number\"] {\r\n  font-family: 'Courier New', monospace;\r\n  text-align: right;\r\n  font-weight: 500;\n}\r\n\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/OvaComponent/OvaTable/OvaTableSuite.vue?vue&type=style&index=0&id=2cde8b96&scoped=true&lang=css":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/OvaComponent/OvaTable/OvaTableSuite.vue?vue&type=style&index=0&id=2cde8b96&scoped=true&lang=css ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_OvaTableSuite_vue_vue_type_style_index_0_id_2cde8b96_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./OvaTableSuite.vue?vue&type=style&index=0&id=2cde8b96&scoped=true&lang=css */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/OvaComponent/OvaTable/OvaTableSuite.vue?vue&type=style&index=0&id=2cde8b96&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_OvaTableSuite_vue_vue_type_style_index_0_id_2cde8b96_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_OvaTableSuite_vue_vue_type_style_index_0_id_2cde8b96_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/shared/OvaComponent/OvaTable/OvaTableSuite.vue":
/*!********************************************************************************!*\
  !*** ./resources/js/components/shared/OvaComponent/OvaTable/OvaTableSuite.vue ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _OvaTableSuite_vue_vue_type_template_id_2cde8b96_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OvaTableSuite.vue?vue&type=template&id=2cde8b96&scoped=true */ "./resources/js/components/shared/OvaComponent/OvaTable/OvaTableSuite.vue?vue&type=template&id=2cde8b96&scoped=true");
/* harmony import */ var _OvaTableSuite_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OvaTableSuite.vue?vue&type=script&lang=js */ "./resources/js/components/shared/OvaComponent/OvaTable/OvaTableSuite.vue?vue&type=script&lang=js");
/* harmony import */ var _OvaTableSuite_vue_vue_type_style_index_0_id_2cde8b96_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./OvaTableSuite.vue?vue&type=style&index=0&id=2cde8b96&scoped=true&lang=css */ "./resources/js/components/shared/OvaComponent/OvaTable/OvaTableSuite.vue?vue&type=style&index=0&id=2cde8b96&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _OvaTableSuite_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _OvaTableSuite_vue_vue_type_template_id_2cde8b96_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _OvaTableSuite_vue_vue_type_template_id_2cde8b96_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "2cde8b96",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/shared/OvaComponent/OvaTable/OvaTableSuite.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/shared/OvaComponent/OvaTable/OvaTableSuite.vue?vue&type=script&lang=js":
/*!********************************************************************************************************!*\
  !*** ./resources/js/components/shared/OvaComponent/OvaTable/OvaTableSuite.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OvaTableSuite_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./OvaTableSuite.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/OvaComponent/OvaTable/OvaTableSuite.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OvaTableSuite_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/shared/OvaComponent/OvaTable/OvaTableSuite.vue?vue&type=style&index=0&id=2cde8b96&scoped=true&lang=css":
/*!****************************************************************************************************************************************!*\
  !*** ./resources/js/components/shared/OvaComponent/OvaTable/OvaTableSuite.vue?vue&type=style&index=0&id=2cde8b96&scoped=true&lang=css ***!
  \****************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_OvaTableSuite_vue_vue_type_style_index_0_id_2cde8b96_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./OvaTableSuite.vue?vue&type=style&index=0&id=2cde8b96&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/OvaComponent/OvaTable/OvaTableSuite.vue?vue&type=style&index=0&id=2cde8b96&scoped=true&lang=css");


/***/ }),

/***/ "./resources/js/components/shared/OvaComponent/OvaTable/OvaTableSuite.vue?vue&type=template&id=2cde8b96&scoped=true":
/*!**************************************************************************************************************************!*\
  !*** ./resources/js/components/shared/OvaComponent/OvaTable/OvaTableSuite.vue?vue&type=template&id=2cde8b96&scoped=true ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_OvaTableSuite_vue_vue_type_template_id_2cde8b96_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_OvaTableSuite_vue_vue_type_template_id_2cde8b96_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_OvaTableSuite_vue_vue_type_template_id_2cde8b96_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./OvaTableSuite.vue?vue&type=template&id=2cde8b96&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/OvaComponent/OvaTable/OvaTableSuite.vue?vue&type=template&id=2cde8b96&scoped=true");


/***/ })

}]);