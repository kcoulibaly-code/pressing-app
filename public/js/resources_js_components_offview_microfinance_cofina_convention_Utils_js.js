"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_offview_microfinance_cofina_convention_Utils_js"],{

/***/ "./resources/js/components/offview/microfinance/cofina/convention/Utils.js":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/offview/microfinance/cofina/convention/Utils.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GetDefaultValue: () => (/* binding */ GetDefaultValue),
/* harmony export */   getDefValBill: () => (/* binding */ getDefValBill),
/* harmony export */   verifyContractObject: () => (/* binding */ verifyContractObject)
/* harmony export */ });
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
// retrouver les valeurs par défaults en fonction de la clé rechercher

function GetDefaultValue(dossier, key, tb_arrays) {
  var _countryWords$entite, _dossier$cred2, _countryWords$entite2, _countryWords$entite3, _ref, _dossier$cred_pub_tb_, _dossier$cred_pub_tb_2, _dossier$cred3, _dossier$cred_pub_tb_3, _dossier$cred1$frais$, _dossier$cred4, _dossier$cred_pub_tb_4, _dossier$cred5, _dossier$cred_pub_tb_5, _dossier$decision_log, _dossier$cred0$dir_ge, _dossier$cred6;
  var extraParams = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  // console.log("key au debut", key)
  var cred0 = tb_arrays[0];
  var cred1 = tb_arrays[1];
  var keys = ["caf_recorded_file", "doss_central_file_recorder"];
  var entite = '';
  var result = '';
  var _caracteristiqueDuPre = caracteristiqueDuPret(dossier, cred0, cred1),
    montantDef = _caracteristiqueDuPre.montantDef,
    dureeDef = _caracteristiqueDuPre.dureeDef,
    periodicite = _caracteristiqueDuPre.periodicite;
  // get entity
  for (var _i = 0, _keys = keys; _i < _keys.length; _i++) {
    var _key = _keys[_i];
    var value = dossier[_key];
    if (value !== null && value !== undefined) {
      if (value.filiale !== null && value.filiale !== undefined) {
        entite = value.filiale;
      }
    }
  }
  switch (key) {
    case 'filiale':
      return (_countryWords$entite = countryWords[entite]) === null || _countryWords$entite === void 0 ? void 0 : _countryWords$entite.pays;
    case 'entite':
      return entite;
    case 'nomcli':
      keys.forEach(function (key) {
        var value = dossier[key];
        if (value !== null && _typeof(value) === 'object') {
          var _value$nomcli;
          result = (_value$nomcli = value.nomcli) !== null && _value$nomcli !== void 0 ? _value$nomcli : value.client.nomcli;
        }
      });
      if (cred0 !== null) {
        var _dossier$cred;
        result = ((_dossier$cred = dossier[cred0]) === null || _dossier$cred === void 0 ? void 0 : _dossier$cred.denomination_client) || result;
      }
      return result;
    case 'numero_compte_courant':
      return (_dossier$cred2 = dossier[cred0]) === null || _dossier$cred2 === void 0 ? void 0 : _dossier$cred2.numero_compte_courant;
    case 'nationalite':
      return (_countryWords$entite2 = countryWords[entite]) === null || _countryWords$entite2 === void 0 ? void 0 : _countryWords$entite2.nationalite;
    case 'capitale':
      return (_countryWords$entite3 = countryWords[entite]) === null || _countryWords$entite3 === void 0 ? void 0 : _countryWords$entite3.capitale;
    case "now":
      return new Date().toISOString().slice(0, 10);
    case "montant":
      return montantDef !== null && montantDef !== void 0 ? montantDef : '';
    case "duree_credit":
      return dureeDef !== null && dureeDef !== void 0 ? dureeDef : '';
    case "type_de_concours":
      return dossier === null || dossier === void 0 ? void 0 : dossier.applied_templ_name;
    case "periodicite":
      return periodicite !== null && periodicite !== void 0 ? periodicite : '';
    case "taux_interet_ht":
      return "1.5";
    case "tva":
      return "18";
    case "frais_dossier":
      return (_ref = (_dossier$cred_pub_tb_ = dossier === null || dossier === void 0 || (_dossier$cred_pub_tb_2 = dossier["cred_pub_tb_19000"]) === null || _dossier$cred_pub_tb_2 === void 0 ? void 0 : _dossier$cred_pub_tb_2.frais_dossier) !== null && _dossier$cred_pub_tb_ !== void 0 ? _dossier$cred_pub_tb_ : dossier === null || dossier === void 0 || (_dossier$cred3 = dossier[cred1]) === null || _dossier$cred3 === void 0 || (_dossier$cred3 = _dossier$cred3.frais) === null || _dossier$cred3 === void 0 || (_dossier$cred3 = _dossier$cred3[0]) === null || _dossier$cred3 === void 0 ? void 0 : _dossier$cred3.montant_frais) !== null && _ref !== void 0 ? _ref : "";
    case "pourcent_montant_accorde_frais_dossier":
      return dossier === null || dossier === void 0 || (_dossier$cred_pub_tb_3 = dossier["cred_pub_tb_19000"]) === null || _dossier$cred_pub_tb_3 === void 0 ? void 0 : _dossier$cred_pub_tb_3.pourcent_montant_accorde_frais_dossier;
    case "prime_risque":
      return (_dossier$cred1$frais$ = dossier === null || dossier === void 0 || (_dossier$cred4 = dossier[cred1]) === null || _dossier$cred4 === void 0 || (_dossier$cred4 = _dossier$cred4['frais'][2]) === null || _dossier$cred4 === void 0 ? void 0 : _dossier$cred4['montant_frais']) !== null && _dossier$cred1$frais$ !== void 0 ? _dossier$cred1$frais$ : dossier === null || dossier === void 0 || (_dossier$cred_pub_tb_4 = dossier["cred_pub_tb_19000"]) === null || _dossier$cred_pub_tb_4 === void 0 ? void 0 : _dossier$cred_pub_tb_4.prime_risque;
    case "pourcent_montant_accorde_prime_risque":
      return dossier === null || dossier === void 0 || (_dossier$cred5 = dossier[cred1]) === null || _dossier$cred5 === void 0 || (_dossier$cred5 = _dossier$cred5['frais'][2]) === null || _dossier$cred5 === void 0 ? void 0 : _dossier$cred5['taux_modififie'];
    case "montant_echeance":
      return Math.ceil(dossier === null || dossier === void 0 || (_dossier$cred_pub_tb_5 = dossier["cred_pub_tb_12001"]) === null || _dossier$cred_pub_tb_5 === void 0 || (_dossier$cred_pub_tb_5 = _dossier$cred_pub_tb_5['echeance']) === null || _dossier$cred_pub_tb_5 === void 0 ? void 0 : _dossier$cred_pub_tb_5['echeance']);
    case "nom_caf":
      return dossier === null || dossier === void 0 ? void 0 : dossier.monteur_doss;
    case "nom_ca":
      return dossier === null || dossier === void 0 || (_dossier$decision_log = dossier.decision_logs.find(function (d) {
        return d.giver_role_sigle == 'CA';
      })) === null || _dossier$decision_log === void 0 ? void 0 : _dossier$decision_log.giver_name;
    case "nom_dg":
      return (_dossier$cred0$dir_ge = (_dossier$cred6 = dossier[cred0]) === null || _dossier$cred6 === void 0 || (_dossier$cred6 = _dossier$cred6.dir_gen_filiale) === null || _dossier$cred6 === void 0 ? void 0 : _dossier$cred6.name) !== null && _dossier$cred0$dir_ge !== void 0 ? _dossier$cred0$dir_ge : '';
    case "empty":
      return "";
    default:
      // console.log({ inSwitchKey: key })

      return populateDefaultKeys(key, extraParams);
  }
}
function verifyContractObject(dossier_credit, selectedConvention, tb_keys) {
  var _tb_keys$;
  // console.log({dossier_credit});
  var cred_pub_tb_4 = (_tb_keys$ = tb_keys[4]) !== null && _tb_keys$ !== void 0 ? _tb_keys$ : null;
  // Verifie si le dossier de credit a un l'objet du contrat.
  // Exemple pour un contract de caution on verifie si le dossier a des cautions

  var res = [];
  if (["Contrat de prêt", "Billet à ordre"].includes(selectedConvention)) {
    var _Object$keys;
    var contractor = null;
    var clients = getClient(dossier_credit);
    if (((_Object$keys = Object.keys(clients)) === null || _Object$keys === void 0 ? void 0 : _Object$keys.length) > 0) {
      contractor = clients;
    }
    res.push(contractor);
    // localStorage.setItem("contractor", JSON.stringify(contractor));
    return res;
  } else if (selectedConvention == "Contrat de cautionnement") {
    var cautions_kyc = [];
    var cautionsPreApp = [];
    var cautionsT4 = [];
    cautions_kyc = getKycCaution(dossier_credit === null || dossier_credit === void 0 ? void 0 : dossier_credit.kwc_checklist);
    cautionsPreApp = getPrerAppCaution(dossier_credit === null || dossier_credit === void 0 ? void 0 : dossier_credit.n_1_checklist);
    // console.log({cred_pub_tb_4})
    if (![undefined, null, ''].includes(cred_pub_tb_4)) {
      cautionsT4 = getT4Caution(dossier_credit[cred_pub_tb_4]);
    }
    // console.log({cautions_kyc, cautionsPreApp, cautionsT4})
    // Merge les cautions distinctement
    res = mergeListsDistinctly(cautions_kyc, cautionsPreApp, cautionsT4, 'nom_prenoms');
    // console.log({res});
  }
  return res;
}
function getDefValBill(dossier_credit, key, tb_arrays) {
  var cred0 = tb_arrays[0];
  var client = getClient(dossier_credit);
  // console.log({client})
  if (client) {
    if (key == "date_naissance_client") {
      var _client$date_naissanc;
      return (_client$date_naissanc = client === null || client === void 0 ? void 0 : client.date_naissance) !== null && _client$date_naissanc !== void 0 ? _client$date_naissanc : '';
    }
    if (key == "lieu_naissance_client") {
      var _client$lieu_naissanc;
      return (_client$lieu_naissanc = client === null || client === void 0 ? void 0 : client.lieu_naissance) !== null && _client$lieu_naissanc !== void 0 ? _client$lieu_naissanc : '';
    }
    if (["nom_client", "nomcli"].includes(key)) {
      if (![undefined, null, ''].includes(client === null || client === void 0 ? void 0 : client['nom_prenom'])) {
        return client === null || client === void 0 ? void 0 : client['nom_prenom'];
      } else if (![undefined, null, ''].includes(client === null || client === void 0 ? void 0 : client.nom_prenoms)) {
        return client === null || client === void 0 ? void 0 : client.nom_prenoms;
      } else if (![undefined, null, ''].includes(client === null || client === void 0 ? void 0 : client.denomination_client)) {
        return client === null || client === void 0 ? void 0 : client.denomination_client;
      } else {
        var _dossier_credit$cred;
        return dossier_credit === null || dossier_credit === void 0 || (_dossier_credit$cred = dossier_credit[cred0]) === null || _dossier_credit$cred === void 0 ? void 0 : _dossier_credit$cred.denomination_client;
      }
      // return client?.['nom_prenom'] ??  ?? client?.denomination_client ?? '';
    }
    if (key == "profession_client") {
      var _client$fonction;
      return (_client$fonction = client === null || client === void 0 ? void 0 : client.fonction) !== null && _client$fonction !== void 0 ? _client$fonction : '';
    }
    if (key == "type_piece_identite") {
      var _client$nature_piece, _client$nature_piece2;
      return ["Carte nationale d'identité", "CNI", "cni"].includes(client === null || client === void 0 || (_client$nature_piece = client.nature_piece) === null || _client$nature_piece === void 0 ? void 0 : _client$nature_piece.trim()) ? "de la carte d'identité N° " : ["Carte consulaire"].includes(client === null || client === void 0 ? void 0 : client.nature_piece) ? "de la carte consulaire N°" : ["passeport", "passport"].includes(client === null || client === void 0 || (_client$nature_piece2 = client.nature_piece) === null || _client$nature_piece2 === void 0 ? void 0 : _client$nature_piece2.toLowerCase()) ? "du passeport N°" : "";
    }
    if (key == "num_piece_identite") {
      var _client$numero_piece;
      return (_client$numero_piece = client === null || client === void 0 ? void 0 : client.numero_piece) !== null && _client$numero_piece !== void 0 ? _client$numero_piece : '';
    }
    if (key == "titre_client") {
      var _ref2;
      return (_ref2 = ["Masculin", "M", "Masc"]) !== null && _ref2 !== void 0 && _ref2.includes(client === null || client === void 0 ? void 0 : client.sexe) ? "Monsieur" : ["Feminin", "F", "Féminin"].includes(client === null || client === void 0 ? void 0 : client.sexe) ? "Madame" : "";
    }
    if (key == "num_compte") {
      var _dossier_credit$cred2, _dossier_credit$cred3;
      return (_dossier_credit$cred2 = dossier_credit === null || dossier_credit === void 0 || (_dossier_credit$cred3 = dossier_credit[cred0]) === null || _dossier_credit$cred3 === void 0 ? void 0 : _dossier_credit$cred3.numero_compte_courant) !== null && _dossier_credit$cred2 !== void 0 ? _dossier_credit$cred2 : '';
    }
  }
  return '';
}
function getKycCaution(kyc_checklist) {
  var res = [];
  if (![undefined, null, ''].includes(kyc_checklist)) {
    var checker_one = kyc_checklist === null || kyc_checklist === void 0 ? void 0 : kyc_checklist.checker_one;
    if (![undefined, null, ''].includes(checker_one)) {
      var entries = checker_one === null || checker_one === void 0 ? void 0 : checker_one.entries;
      if (![undefined, null, ''].includes(entries)) {
        var cautions = entries.cautions;
        if (![undefined, null, ''].includes(cautions)) {
          var caution_added = cautions.caution_added;
          if (![undefined, null, ''].includes(caution_added)) {
            res = caution_added.map(function (el) {
              var _el$nom_prenoms, _el$date_naissance, _el$lieu_naissance, _el$numero_piece_iden;
              return {
                nom_prenoms: (_el$nom_prenoms = el === null || el === void 0 ? void 0 : el.nom_prenoms) !== null && _el$nom_prenoms !== void 0 ? _el$nom_prenoms : '',
                date_naissance: (_el$date_naissance = el === null || el === void 0 ? void 0 : el.date_naissance) !== null && _el$date_naissance !== void 0 ? _el$date_naissance : '',
                lieu_naissance: (_el$lieu_naissance = el === null || el === void 0 ? void 0 : el.lieu_naissance) !== null && _el$lieu_naissance !== void 0 ? _el$lieu_naissance : '',
                numero_piece: (_el$numero_piece_iden = el === null || el === void 0 ? void 0 : el.numero_piece_identite) !== null && _el$numero_piece_iden !== void 0 ? _el$numero_piece_iden : '',
                nature_piece: el === null || el === void 0 ? void 0 : el.nature_piece
              };
            });
          }
        }
      }
    }
  }
  return res;
}
function getPrerAppCaution(n_1_checklist) {
  var res = [];
  if (![undefined, null, ''].includes(n_1_checklist)) {
    var checker_one = n_1_checklist === null || n_1_checklist === void 0 ? void 0 : n_1_checklist.checker_one;
    if (![undefined, null, ''].includes(checker_one)) {
      var entries = checker_one === null || checker_one === void 0 ? void 0 : checker_one.entries;
      if (![undefined, null, ''].includes(entries)) {
        var Verification_caution_solidaire = entries === null || entries === void 0 ? void 0 : entries.Verification_caution_solidaire;
        if (![undefined, null, ''].includes(Verification_caution_solidaire)) {
          var cautions = Verification_caution_solidaire.caution_added;
          if (![undefined, null, ''].includes(cautions)) {
            res = cautions.map(function (el) {
              var _el$nom_prenoms2, _el$date_naissance2, _el$lieu_naissance2, _el$numero_piece_iden2;
              return {
                nom_prenoms: (_el$nom_prenoms2 = el === null || el === void 0 ? void 0 : el.nom_prenoms) !== null && _el$nom_prenoms2 !== void 0 ? _el$nom_prenoms2 : '',
                date_naissance: (_el$date_naissance2 = el === null || el === void 0 ? void 0 : el.date_naissance) !== null && _el$date_naissance2 !== void 0 ? _el$date_naissance2 : '',
                lieu_naissance: (_el$lieu_naissance2 = el === null || el === void 0 ? void 0 : el.lieu_naissance) !== null && _el$lieu_naissance2 !== void 0 ? _el$lieu_naissance2 : '',
                numero_piece: (_el$numero_piece_iden2 = el === null || el === void 0 ? void 0 : el.numero_piece_identite) !== null && _el$numero_piece_iden2 !== void 0 ? _el$numero_piece_iden2 : '',
                nature_piece: el === null || el === void 0 ? void 0 : el.nature_piece
              };
            });
          }
        }
      }
    }
  }
  return res;
}
function getClient(dossier_credit) {
  var n_1_checklist = dossier_credit === null || dossier_credit === void 0 ? void 0 : dossier_credit.n_1_checklist;
  var res = {};
  if (![undefined, null, ''].includes(n_1_checklist)) {
    var checker_one = n_1_checklist === null || n_1_checklist === void 0 ? void 0 : n_1_checklist.checker_one;
    if (![undefined, null, ''].includes(checker_one)) {
      var entries = checker_one === null || checker_one === void 0 ? void 0 : checker_one.entries;
      if (![undefined, null, ''].includes(entries)) {
        var verification_cni = entries === null || entries === void 0 ? void 0 : entries.verification_cni;
        var responsable_entreprise = entries === null || entries === void 0 ? void 0 : entries.responsable_entreprise;
        if (![undefined, null, ''].includes(verification_cni)) {
          res = _objectSpread({}, verification_cni);
          if (!res['nom_prenom']) {
            var _res;
            res['nom_prenoms'] = (_res = res) === null || _res === void 0 ? void 0 : _res['nom_prenom'];
          }
        } else {
          var dirigeant = responsable_entreprise.find(function (e) {
            return e.fonction == "Directeur Géneral";
          });
          // console.log({ dirigeant })
          res = ![undefined, null, ''].includes(dirigeant) ? _objectSpread({}, dirigeant) : {};
          if (!res['nom_prenom']) {
            var _res2;
            res['nom_prenoms'] = (_res2 = res) === null || _res2 === void 0 ? void 0 : _res2['nom_prenom'];
          }
        }
      }
    }
  }
  return res;
}
function getT4Caution(tb4) {
  var res = [];
  if (![undefined, null, ''].includes(tb4)) {
    var caution_solidaire = tb4 === null || tb4 === void 0 ? void 0 : tb4.cautionnement_solidaires;
    res = caution_solidaire.map(function (el) {
      var _el$nom_prenoms3, _el$date_naissance3, _el$lieu_naissance3, _el$numero_piece_iden3, _el$nature_piece;
      return {
        nom_prenoms: (_el$nom_prenoms3 = el === null || el === void 0 ? void 0 : el.nom_prenoms) !== null && _el$nom_prenoms3 !== void 0 ? _el$nom_prenoms3 : '',
        date_naissance: (_el$date_naissance3 = el === null || el === void 0 ? void 0 : el.date_naissance) !== null && _el$date_naissance3 !== void 0 ? _el$date_naissance3 : '',
        lieu_naissance: (_el$lieu_naissance3 = el === null || el === void 0 ? void 0 : el.lieu_naissance) !== null && _el$lieu_naissance3 !== void 0 ? _el$lieu_naissance3 : '',
        numero_piece: (_el$numero_piece_iden3 = el === null || el === void 0 ? void 0 : el.numero_piece_identite) !== null && _el$numero_piece_iden3 !== void 0 ? _el$numero_piece_iden3 : '',
        nature_piece: (_el$nature_piece = el === null || el === void 0 ? void 0 : el.nature_piece) !== null && _el$nature_piece !== void 0 ? _el$nature_piece : ''
      };
    });
  }
  return res.filter(function (el) {
    return !isEmpty(el);
  }) || res;
}
function isEmpty(obj) {
  if (!obj || _typeof(obj) !== 'object') return true;
  return Object.values(obj).every(function (value) {
    return value === undefined || value === null || value === '';
  });
}
function populateDefaultKeys(key, _ref3) {
  var contractor = _ref3.contractor,
    entityInfos = _ref3.entityInfos;
  if (["nom_caution", "emprunteur_name"].includes(key)) {
    var _ref4;
    return (_ref4 = (contractor === null || contractor === void 0 ? void 0 : contractor.nom_prenoms) || (contractor === null || contractor === void 0 ? void 0 : contractor.nom_prenom)) !== null && _ref4 !== void 0 ? _ref4 : '';
  } else if (["date_naissance_caution", "emprunter_birth_date", "date_naissance_client"].includes(key)) {
    var _contractor$date_nais;
    return (_contractor$date_nais = contractor === null || contractor === void 0 ? void 0 : contractor.date_naissance) !== null && _contractor$date_nais !== void 0 ? _contractor$date_nais : '';
  } else if (key == "lieu_naissance_caution") {
    var _contractor$lieu_nais;
    return (_contractor$lieu_nais = contractor === null || contractor === void 0 ? void 0 : contractor.lieu_naissance) !== null && _contractor$lieu_nais !== void 0 ? _contractor$lieu_nais : '';
  } else if (key == "type_piece_caution") {
    var _contractor$nature_pi;
    return ["Carte nationale d'identité", "CNI", "cni"].includes(contractor === null || contractor === void 0 ? void 0 : contractor.nature_piece) ? "de la carte d'identité N° " : ["de la carte consulaire N°"].includes(contractor === null || contractor === void 0 ? void 0 : contractor.nature_piece) ? "du passeport N°" : ["passeport", "passport"].includes(contractor === null || contractor === void 0 || (_contractor$nature_pi = contractor.nature_piece) === null || _contractor$nature_pi === void 0 ? void 0 : _contractor$nature_pi.toLowerCase()) ? "du passeport N°" : "";
  } else if (["cni", "numero_piece_caution"].includes(key === null || key === void 0 ? void 0 : key.toLowerCase())) {
    var _contractor$numero_pi;
    return (_contractor$numero_pi = contractor === null || contractor === void 0 ? void 0 : contractor.numero_piece) !== null && _contractor$numero_pi !== void 0 ? _contractor$numero_pi : "";
  } else if (key == "activite") {
    var _contractor$fonction;
    return (_contractor$fonction = contractor === null || contractor === void 0 ? void 0 : contractor.fonction) !== null && _contractor$fonction !== void 0 ? _contractor$fonction : '';
  } else if (["telephone_emprunteur"].includes(key)) {
    var _contractor$numero_te;
    return (_contractor$numero_te = contractor === null || contractor === void 0 ? void 0 : contractor.numero_tel) !== null && _contractor$numero_te !== void 0 ? _contractor$numero_te : "";
  } else if (["capital_social", "filiale_capital"].includes(key)) {
    var _entityInfos$capital_;
    return (_entityInfos$capital_ = entityInfos === null || entityInfos === void 0 ? void 0 : entityInfos.capital_social) !== null && _entityInfos$capital_ !== void 0 ? _entityInfos$capital_ : '';
  } else if (["code_postal", "code"].includes(key)) {
    var _entityInfos$code_pos;
    return (_entityInfos$code_pos = entityInfos === null || entityInfos === void 0 ? void 0 : entityInfos.code_postal) !== null && _entityInfos$code_pos !== void 0 ? _entityInfos$code_pos : '';
  } else if (["siege_social", "siege"].includes(key)) {
    var _entityInfos$siege_so;
    return (_entityInfos$siege_so = entityInfos === null || entityInfos === void 0 ? void 0 : entityInfos.siege_social) !== null && _entityInfos$siege_so !== void 0 ? _entityInfos$siege_so : '';
  } else if (["telephone", "filiale_telephone"].includes(key)) {
    var _entityInfos$telephon;
    return (_entityInfos$telephon = entityInfos === null || entityInfos === void 0 ? void 0 : entityInfos.telephone) !== null && _entityInfos$telephon !== void 0 ? _entityInfos$telephon : '';
  } else if (["numero_rccm", "immatriculation"].includes(key)) {
    var _entityInfos$rccm;
    return (_entityInfos$rccm = entityInfos === null || entityInfos === void 0 ? void 0 : entityInfos.rccm) !== null && _entityInfos$rccm !== void 0 ? _entityInfos$rccm : '';
  } else {
    return '';
  }
}
function mergeListsDistinctly() {
  var list1 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var list2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var list3 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  var key = arguments.length > 3 ? arguments[3] : undefined;
  var mergedMap = new Map();

  // Fonction pour compter le nombre de clés non vides dans un objet
  function countFilledKeys(obj) {
    return Object.values(obj).filter(function (value) {
      return value !== null && value !== undefined && value !== "";
    }).length;
  }

  // Fonction pour ajouter ou fusionner les objets dans le Map
  function addToMap(list) {
    list.forEach(function (item) {
      if (item[key] !== undefined) {
        var existingItem = mergedMap.get(item[key]);
        if (!existingItem) {
          // Si aucun objet avec cette clé, on l'ajoute
          mergedMap.set(item[key], item);
        } else {
          // Comparer le nombre de clés remplies
          if (countFilledKeys(item) > countFilledKeys(existingItem)) {
            mergedMap.set(item[key], item);
          }
        }
      }
    });
  }

  // Ajouter les objets des trois listes
  addToMap(list1);
  addToMap(list2);
  addToMap(list3);

  // Retourner la liste fusionnée
  return Array.from(mergedMap.values());
}
function caracteristiqueDuPret(dossier_credit, cred0, cred1) {
  var _dossier_credit$cred4;
  var caract_inter_pret = dossier_credit === null || dossier_credit === void 0 ? void 0 : dossier_credit.caract_inter_pret;
  var latestAmount = 0;
  var latetstDuree = 0;
  var periodicite = "";
  var risque = dossier_credit === null || dossier_credit === void 0 || (_dossier_credit$cred4 = dossier_credit[cred1]) === null || _dossier_credit$cred4 === void 0 || (_dossier_credit$cred4 = _dossier_credit$cred4.frais) === null || _dossier_credit$cred4 === void 0 || (_dossier_credit$cred4 = _dossier_credit$cred4[2]) === null || _dossier_credit$cred4 === void 0 ? void 0 : _dossier_credit$cred4.montant_frais;
  if (caract_inter_pret != null) {
    var _dossier_credit$final, _latestObj$mensualite;
    var finalOutcomeUserRole = dossier_credit === null || dossier_credit === void 0 || (_dossier_credit$final = dossier_credit.final_outcome) === null || _dossier_credit$final === void 0 ? void 0 : _dossier_credit$final.giver_role_sigle;
    // console.log({finalOutcomeUserRole:finalOutcomeUserRole})
    var latestObj = caract_inter_pret.find(function (el) {
      return el.role_sigle == finalOutcomeUserRole;
    });
    latestAmount = latestObj === null || latestObj === void 0 ? void 0 : latestObj['montant_pret_' + finalOutcomeUserRole];
    latetstDuree = latestObj === null || latestObj === void 0 ? void 0 : latestObj.duree_pret;
    periodicite = (_latestObj$mensualite = latestObj === null || latestObj === void 0 ? void 0 : latestObj.mensualite_credit) !== null && _latestObj$mensualite !== void 0 ? _latestObj$mensualite : '';
    // console.log({latestAmountBefor:latestAmount})
    if (!latestAmount) {
      var _caract_inter_pret$at, _caract_inter_pret$at2, _caract_inter_pret$at3, _caract_inter_pret$at4;
      finalOutcomeUserRole = (_caract_inter_pret$at = caract_inter_pret.at(-1)) === null || _caract_inter_pret$at === void 0 ? void 0 : _caract_inter_pret$at.role_sigle;
      latestAmount = (_caract_inter_pret$at2 = caract_inter_pret.at(-1)) === null || _caract_inter_pret$at2 === void 0 ? void 0 : _caract_inter_pret$at2['montant_pret_' + finalOutcomeUserRole];
      latetstDuree = (_caract_inter_pret$at3 = caract_inter_pret.at(-1)) === null || _caract_inter_pret$at3 === void 0 ? void 0 : _caract_inter_pret$at3['duree_pret'];
      periodicite = (_caract_inter_pret$at4 = caract_inter_pret.at(-1)) === null || _caract_inter_pret$at4 === void 0 ? void 0 : _caract_inter_pret$at4['mensualite_credit'];
    }
    if ((dossier_credit === null || dossier_credit === void 0 ? void 0 : dossier_credit.notif_accord_credit) == true) {
      var _dossier_credit$cred_, _dossier_credit$cred_2, _dossier_credit$cred_3, _dossier_credit$cred_4, _dossier_credit$cred_5, _dossier_credit$cred_6;
      var montant = (_dossier_credit$cred_ = dossier_credit === null || dossier_credit === void 0 || (_dossier_credit$cred_2 = dossier_credit.cred_pub_tb_19000) === null || _dossier_credit$cred_2 === void 0 ? void 0 : _dossier_credit$cred_2.montant) !== null && _dossier_credit$cred_ !== void 0 ? _dossier_credit$cred_ : 0;
      latestAmount = this.convertInt(montant);
      latetstDuree = (_dossier_credit$cred_3 = dossier_credit === null || dossier_credit === void 0 || (_dossier_credit$cred_4 = dossier_credit.cred_pub_tb_19000) === null || _dossier_credit$cred_4 === void 0 ? void 0 : _dossier_credit$cred_4.duree_credit) !== null && _dossier_credit$cred_3 !== void 0 ? _dossier_credit$cred_3 : 0;
      risque = (_dossier_credit$cred_5 = dossier_credit === null || dossier_credit === void 0 || (_dossier_credit$cred_6 = dossier_credit.cred_pub_tb_19000) === null || _dossier_credit$cred_6 === void 0 ? void 0 : _dossier_credit$cred_6.primes_risques) !== null && _dossier_credit$cred_5 !== void 0 ? _dossier_credit$cred_5 : 0;
    }
  }
  return {
    montantDef: latestAmount,
    dureeDef: latetstDuree,
    periodicite: periodicite
  };
}
var countryWords = {
  "CFN BF": {
    "pays": "BURKINA FASO",
    "nationalite": "Burkinabé",
    "capitale": "de Ouagadougou"
  },
  "CFN CIV": {
    "pays": "CÔTE D'IVOIRE",
    "nationalite": "Ivoirienne",
    "capitale": "d'Abidjan"
  },
  "CFN CG": {
    "pays": "CONGO",
    "nationalite": "Congolaise",
    "capitale": "de Brazaville"
  },
  "CFN GB": {
    "pays": "GABON",
    "nationalite": "Gabonaise",
    "capitale": "de Libreville"
  },
  "CFN GN": {
    "pays": "GUINEE",
    "nationalite": "Guinéenne",
    "capitale": "de Conakry"
  },
  "CFN ML": {
    "pays": "MALI",
    "nationalite": "Malienne",
    "capitale": "de Bamako"
  },
  "CFN SN": {
    "pays": "SENEGAL",
    "nationalite": "Sénégalaise",
    "capitale": "de Dakar"
  },
  "CFN TG": {
    "pays": "TOGO",
    "nationalite": "Togolaise",
    "capitale": "de Lomé"
  },
  "FINL": {
    "pays": "CÔTE D'IVOIRE",
    "nationalite": "Ivoirienne",
    "capitale": "d'Abidjan"
  }
};

// les défaults
//montant_approuve
//agenceBusinessUnit
// applied_templ_name - type gabarit
// type_credit
// type_demande

// -------------INFO CLIENT
//caf_recorded --+ client --+
// nomcli
// matcli
// phonecli
// monteur doss

// INFO PRET (cred_pub_tb_19000)
// type_de_concours / montant / duree_credit (en mois) /
// periodicite_remboursement (mensuelle ... ) / taux_interet / frais_dossier
// primes_risques /

// cred_pub_tb_3001
// premiere_echeance / derniere_echeance

/***/ })

}]);