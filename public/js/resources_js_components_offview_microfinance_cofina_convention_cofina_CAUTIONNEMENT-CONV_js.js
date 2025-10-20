"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_offview_microfinance_cofina_convention_cofina_CAUTIONNEMENT-CONV_js"],{

/***/ "./resources/js/components/offview/microfinance/cofina/convention/cofina/CAUTIONNEMENT-CONV.js":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/offview/microfinance/cofina/convention/cofina/CAUTIONNEMENT-CONV.js ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  // title: "Convention de test",
  paragraphs: [[{
    type: "text",
    content: "Entre les soussignés : "
  }, {
    type: "br"
  }], [{
    type: "bold",
    content: "Compagnie Financière Africaine "
  }, {
    type: "editable",
    key: "pays_filiale",
    inputType: "text",
    placeholder: "Pays de la filiale",
    hasDefault: true,
    defaultV: "filiale"
  }, {
    type: "bold",
    content: " S.A,"
  }, {
    type: "text",
    content: "en abrégé COFINA"
  }, {
    type: "editable",
    key: "pays_filiale",
    inputType: "text",
    placeholder: "Pays de la filiale",
    hasDefault: true,
    defaultV: "filiale"
  }, {
    type: "text",
    content: ","
  }, {
    type: "text",
    content: "société anonyme avec Conseil d’Administration au capital social de"
  }, {
    type: "editable",
    key: "capital_social",
    inputType: "money",
    placeholder: "Capital social de la filiale",
    hasDefault: false,
    defaultV: "capital_social"
  }, {
    type: "text",
    content: " FCFA, ayant son siège social à"
  }, {
    type: "editable",
    key: "siege_social",
    inputType: "text",
    placeholder: "Siège social de la filiale",
    hasDefault: false,
    defaultV: "siege_social"
  }, {
    type: "text",
    content: ","
  }, {
    type: "editable",
    key: "code_postal",
    inputType: "text",
    placeholder: "Code postal du siège social de la filiale",
    hasDefault: false,
    defaultV: "code_postal"
  }, {
    type: "text",
    content: ",immatriculée au Registre du Commerce et du Crédit Mobilier sous le numéro  "
  }, {
    type: "editable",
    key: "numero_rccm",
    inputType: "text",
    placeholder: "Numéro d'immatriculation de la filiale",
    hasDefault: false,
    defaultV: "numero_rccm"
  }, {
    type: "text",
    content: " , "
  }, {
    type: "text",
    content: "Tèl : "
  }, {
    type: "editable",
    key: "telephone",
    inputType: "tel",
    placeholder: "Numéro de téléphone de la filiale"
  }, {
    type: "text",
    content: ";"
  }, {
    type: "br"
  }], [{
    type: "text",
    content: "Repr\xE9sent\xE9e par"
  }, {
    type: "editable",
    key: "denomination_dg",
    inputType: "select",
    options: ["Madame", "Monsieur"],
    placeholder: "denomination",
    hasDefault: false,
    defaultV: "empty"
  }, {
    type: "text",
    content: " "
  }, {
    type: "editable",
    key: "nom_dg",
    inputType: "text",
    placeholder: "Nom du directeur general",
    hasDefault: false,
    defaultV: "nom_dg"
  }, {
    type: "text",
    content: ", agissant en sa qualit\xE9 de Directeur G\xE9n\xE9ral,"
  }, {
    type: "br"
  }], [{
    type: "text",
    content: "Ci-apr\xE8s d\xE9sign\xE9e"
  }, {
    type: "bold",
    content: "\"COFINA"
  }, {
    type: "editable",
    key: "pays_filiale",
    inputType: "text",
    placeholder: "Pays de la filiale",
    hasDefault: true,
    defaultV: "filiale"
  }, {
    type: "text",
    content: "\" d\u2019une part,"
  }, {
    type: "br"
  }], [{
    type: "text",
    content: "Et"
  }, {
    type: "br"
  }], [{
    type: "editable",
    key: "denomination_caution",
    inputType: "select",
    options: ["Madame", "Monsieur"],
    placeholder: "denomination",
    hasDefault: false,
    defaultV: "empty"
  }, {
    type: "text",
    content: " "
  }, {
    type: "editable",
    key: "nom_caution",
    inputType: "text",
    placeholder: "Nom de la caution",
    hasDefault: false,
    defaultV: "nom_caution"
  }, {
    type: "text",
    content: ", "
  }, {
    type: "text",
    content: "n\xE9(e) le "
  }, {
    type: "editable",
    key: "date_naissance_caution",
    inputType: "date",
    hasDefault: false,
    defaultV: "date_naissance_caution"
  }, {
    type: "text",
    content: "\xE0 "
  }, {
    type: "editable",
    key: "lieu_naissance_caution",
    inputType: "text",
    placeholder: "Lieu de naissance de la caution",
    hasDefault: false,
    defaultV: "lieu_naissance_caution"
  }, {
    type: "text",
    content: ", "
  }, {
    type: "editable",
    key: "profession_caution",
    inputType: "text",
    placeholder: "Profession de la caution"
  }, {
    type: "text",
    content: " de nationalit\xE9 "
  }, {
    type: "editable",
    key: "nationalite_caution",
    inputType: "text",
    placeholder: "Nationalité de la caution"
  },
  // { type: "text", content: ` ` },
  {
    type: "text",
    content: ", titulaire "
  }, _defineProperty(_defineProperty({
    type: "editable",
    key: "type_piece_caution",
    inputType: "select",
    hasDefault: false,
    defaultV: "type_piece_caution",
    options: ["de la Carte Nationale d’Identité Burkinabè N°", "du passeport N°", "de la carte consulaire N°"],
    placeholder: "Type de pièce d'identité de la caution"
  }, "hasDefault", false), "defaultV", "empty"), {
    type: "text",
    content: " "
  }, {
    type: "editable",
    key: "numero_piece_caution",
    inputType: "text",
    placeholder: "Numéro de la piece d'identité de la caution",
    hasDefault: false,
    defaultV: "numero_piece_caution"
  }, {
    type: "text",
    content: "du "
  }, {
    type: "editable",
    key: "date_emission_caution",
    inputType: "date"
  }, {
    type: "text",
    content: " valable jusqu\u2019au "
  }, {
    type: "editable",
    key: "valable_jusqu_au",
    inputType: "date"
  }, {
    type: "text",
    content: "demeurant \xE0 "
  }, {
    type: "editable",
    key: "lieu_activite_ville",
    inputType: "text",
    placeholder: "ville"
  }, {
    type: "text",
    content: "T\xE9l :"
  }, {
    type: "editable",
    key: "tel_caution",
    inputType: "tel",
    placeholder: "Numéro de téléphone de la caution"
  }, {
    type: "br"
  }], [{
    type: "text",
    content: "Ci-apr\xE8s d\xE9sign\xE9e "
  }, {
    type: "bold",
    content: "\u201Cla caution\u201D"
  }, {
    type: "text",
    content: "d\u2019autre part,"
  }, {
    type: "br"
  }], [{
    type: "bold",
    content: "Il a \xE9t\xE9 convenu et arr\xEAt\xE9 ce qui suit : "
  }, {
    type: "br"
  }], [{
    type: "bold",
    content: "ARTICLE 1 : OBJET "
  }, {
    type: "br"
  }], [{
    type: "editable",
    key: "denomination_caution",
    inputType: "select",
    options: ["Madame", "Monsieur"],
    placeholder: "Titre de la caution",
    hasDefault: false,
    defaultV: "empty"
  }, {
    type: "text",
    content: " "
  }, {
    type: "editable",
    key: "nom_caution",
    inputType: "text",
    placeholder: "Nom de la caution"
  }, {
    type: "text",
    content: "se porte caution aux fins de garantir \xE0 titre personnel, solidaire et indivisible le remboursement de toutes les sommes dont le cautionn\xE9 "
  }, {
    type: "editable",
    key: "nom_cautionne",
    inputType: "text",
    placeholder: "Nom du cautionné",
    hasDefault: false,
    defaultV: "nomcli"
  }, {
    type: "text",
    content: ", client titulaire du compte N\xB0"
  }, {
    type: "editable",
    key: "num_compte_caution",
    inputType: "text",
    placeholder: "Numéro de compte du cautionné",
    hasDefault: true,
    defaultV: "numero_compte_courant"
  }, {
    type: "text",
    content: " ouvert dans les livres de COFINA "
  }, {
    type: "editable",
    key: "pays_filiale",
    inputType: "text",
    placeholder: "Pays de la filiale",
    hasDefault: true,
    defaultV: "filiale"
  }, {
    type: "text",
    content: ", se trouve ou pourrait se trouver d\xE9biteur \xE0 raison du cr\xE9dit d\u2019exploitation du montant de  "
  }, {
    type: "editable",
    key: "montant_dette_cautionne",
    inputType: "money",
    placeholder: "Montant de la dette du cautionné"
  }, {
    type: "text",
    content: " FCFA plus int\xE9r\xEAts, commissions, p\xE9nalit\xE9s, frais et accessoires quelconques qui lui sont consenties. "
  }, {
    type: "br"
  }], [{
    type: 'blank',
    height: 150
  }], [{
    type: "bold",
    content: "ARTICLE 2 : \xC9TENDUE DU CAUTIONNEMENT"
  }, {
    type: "br"
  }], [{
    type: "text",
    content: "Le pr\xE9sent engagement oblige la Caution, \xE0 titre solidaire et personnel, sur tous ses biens meubles et immeubles, \xE0 payer \xE0 "
  }, {
    type: "bold",
    content: " COFINA "
  }, {
    type: "editable",
    key: "pays_filiale",
    inputType: "text",
    placeholder: "Pays de la filiale",
    hasDefault: true,
    defaultV: "filiale"
  }, {
    type: "text",
    content: " ce que lui doit ou lui devra le Cautionn\xE9, au cas o\xF9 le client Cautionn\xE9 ne pourrait faire face \xE0 ses obligations contractuelles directes ou indirectes, pour un quelconque motif."
  }, {
    type: "br"
  }], [{
    type: "bold",
    content: "ARTICLE 3 : CARACT\xC9RISTIQUES DU CAUTIONNEMENT"
  }, {
    type: "br"
  }], [{
    type: "text",
    content: " La Caution, par les pr\xE9sentes, renonce express\xE9ment aux b\xE9n\xE9fices de discussion et de division tant avec le d\xE9biteur principal qu'avec tous cooblig\xE9s."
  }, {
    type: "br"
  }], [{
    type: "bold",
    content: "ARTICLE 4 : D\xC9CLARATIONS ET ENGAGEMENT DE LA CAUTION"
  }, {
    type: "br"
  }], [{
    type: "text",
    content: "La Caution d\xE9clare avoir pris personnellement connaissance et v\xE9rifi\xE9 la situation financi\xE8re du Cautionn\xE9 au moment de la signature des pr\xE9sentes."
  }, {
    type: 'br'
  }], [{
    type: 'br'
  }, {
    type: "text",
    content: "Elle s\u2019engage express\xE9ment \xE0 ne pas se pr\xE9valoir des dispositions de l\u2019article 23 alin\xE9a 3 de l\u2019Acte Uniforme OHADA portant Organisation des S\xFBret\xE9s et toutes autres dispositions qui, sans d\xE9charger la Caution de son engagement, l\u2019autorise \xE0 poursuivre le Cautionn\xE9 pour le contraindre au paiement ou obtenir une garantie ou une mesure conservatoire, au cas de d\xE9lais de paiement accord\xE9s \xE0 celui-ci par "
  }, {
    type: "bold",
    content: " COFINA "
  }, {
    type: "editable",
    key: "pays_filiale",
    inputType: "text",
    placeholder: "Pays de la filiale",
    hasDefault: true,
    defaultV: "filiale"
  }, {
    type: 'text',
    content: '. Dès lors, si le cautionné obtient de tels délais de la part de '
  }, {
    type: "bold",
    content: " COFINA "
  }, {
    type: "editable",
    key: "pays_filiale",
    inputType: "text",
    placeholder: "Pays de la filiale",
    hasDefault: true,
    defaultV: "filiale"
  }, {
    type: 'text',
    content: ', la Caution qui reste tenue ne pourra poursuivre le Cautionné avant l’expiration de ces délais.'
  }, {
    type: 'br'
  }], [{
    type: 'br'
  }, {
    type: "text",
    content: "La Caution s\u2019engage express\xE9ment \xE0 ne pas se pr\xE9valoir de l\u2019article 35 alin\xE9a de l\u2019Acte Uniforme OHADA portant Organisation des S\xFBret\xE9s et de toutes autres dispositions qui ont pour effet de la faire venir en concours avec "
  }, {
    type: "bold",
    content: " COFINA "
  }, {
    type: "editable",
    key: "pays_filiale",
    inputType: "text",
    placeholder: "Pays de la filiale",
    hasDefault: true,
    defaultV: "filiale"
  }, {
    type: 'text',
    content: ' tant que cette dernière n’aura pas été désintéressée de la totalité des sommes dues en principal, intérêts, commissions, frais et de tous accessoires qui lui seront dues par le débiteur cautionné. '
  }, {
    type: 'br'
  }], [{
    type: 'blank',
    height: 150
  }], [{
    type: "bold",
    content: "ARTICLE 5 : EXIGIBILITE"
  }, {
    type: "br"
  }], [{
    type: 'br'
  }, {
    type: "text",
    content: "Toutes les sommes dues \xE0  "
  }, {
    type: "bold",
    content: " COFINA "
  }, {
    type: "editable",
    key: "pays_filiale",
    inputType: "text",
    placeholder: "Pays de la filiale",
    hasDefault: true,
    defaultV: "filiale"
  }, {
    type: "text",
    content: " en principal, int\xE9r\xEAts, commissions, frais et accessoires au titre du pr\xEAt garanti deviendront, sauf d\xE9cision contraire de"
  }, {
    type: "bold",
    content: " COFINA "
  }, {
    type: "editable",
    key: "pays_filiale",
    inputType: "text",
    placeholder: "Pays de la filiale",
    hasDefault: true,
    defaultV: "filiale"
  },
  //{type : 'br'},
  {
    type: "text",
    content: " imm\xE9diatement exigibles d\xE8s r\xE9ception par la Caution d\u2019une mise en demeure faite par "
  }, {
    type: "bold",
    content: " COFINA "
  }, {
    type: "editable",
    key: "pays_filiale",
    inputType: "text",
    placeholder: "Pays de la filiale",
    hasDefault: true,
    defaultV: "filiale"
  }, {
    type: "text",
    content: "par lettre recommand\xE9e avec demande d\u2019avis de r\xE9ception en cas de survenance de l\u2019un des \xE9v\xE9nements ci-dessous : "
  }, {
    type: 'br'
  }, {
    type: "editablelist",
    keys: ['pays_filiale'],
    list: [[{
      type: "text",
      content: "Cl\xF4ture du compte du client d\xE9biteur principal ou du compte de la Caution si celle-ci est Cliente de "
    }, {
      type: "text",
      content: " COFINA ",
      style: {
        fontWeight: 'bold'
      }
    }, {
      type: "editable",
      key: "pays_filiale",
      inputType: "text",
      placeholder: "Pays de la filiale",
      hasDefault: true,
      defaultV: "filiale"
    }, {
      type: "text",
      content: " pour quelque cause que ce soit ;"
    }], [{
      type: "text",
      content: "Non-paiement pour quelque cause que ce soit par le client cautionn\xE9 de toute somme due en principal, int\xE9r\xEAts, commissions, frais et accessoires aux dates d'\xE9chesances pr\xE9vues au titre du pr\xEA\u0302t, apr\xE8s une mise en demeure rest\xE9e infructueuse ;"
    }], [{
      type: "text",
      content: "En cas d\u2019admission du cautionn\xE9 \xE0 une proc\xE9dure collective d\u2019apurement du passif ou \xE0 toute circonstance analogue ; "
    }], [{
      type: "text",
      content: "En cas de d\xE9ch\xE9ance du terme applicable au client cautionn\xE9 tel que d\xE9finie par le Contrat de pr\xEAt ;"
    }], [{
      type: "text",
      content: "Au cas o\xF9 plus g\xE9n\xE9ralement la Caution n\u2019ex\xE9cuterait pas l\u2019une quelconque de ses obligations r\xE9sultant des pr\xE9sentes, et s\u2019il n\u2019y \xE9tait pas rem\xE9di\xE9 dans un d\xE9lai de quinze (15) jours \xE0 compter de la mise en demeure faite par "
    }, {
      type: "text",
      content: " COFINA ",
      style: {
        fontWeight: 'bold'
      }
    }, {
      type: "editable",
      key: "pays_filiale",
      inputType: "text",
      placeholder: "Pays de la filiale",
      hasDefault: true,
      defaultV: "filiale"
    }, {
      type: "text",
      content: " \xE0 la Caution."
    }]]
  }, {
    type: 'br'
  }], [{
    type: "bold",
    content: "ARTICLE 6 : INDIVISIBILIT\xC9"
  }, {
    type: "br"
  }], [{
    type: "text",
    content: "Toutes les obligations, r\xE9sultant du pr\xE9sent contrat pour la Caution, sont stipul\xE9es indivisibles de telle sorte que leur\n          ex\xE9cution pourra \xEAtre r\xE9clam\xE9e pour leur totalit\xE9 \xE0 n\u2019importe lequel des h\xE9ritiers ou ayant droits de la Caution."
  }, {
    type: 'br'
  }], [{
    type: "bold",
    content: "ARTICLE 7 : DUR\xC9E DE VALIDIT\xC9"
  }, {
    type: "br"
  }], [{
    type: "text",
    content: "Le pr\xE9sent Cautionnement restera en vigueur tant que le d\xE9biteur cautionn\xE9 restera devoir une quelconque somme au titre du pr\xEAt consenti par  "
  }, {
    type: "bold",
    content: " COFINA "
  }, {
    type: "editable",
    key: "pays_filiale",
    inputType: "text",
    placeholder: "Pays de la filiale",
    hasDefault: true,
    defaultV: "filiale"
  }, {
    type: 'text',
    content: "."
  }, {
    type: 'br'
  }], [{
    type: 'blank',
    height: 150
  }], [{
    type: "bold",
    content: "ARTICLE 8 : CORRESPONDANCES \u2013 \xC9LECTION DE DOMICILE"
  }, {
    type: "br"
  }], [{
    type: "text",
    content: "Toute communication, demande ou notification devant \xEAtre r\xE9alis\xE9e en vertu des pr\xE9sentes ou de leurs suites sera valablement r\xE9alis\xE9e si elle est adress\xE9e par lettre recommand\xE9e avec demande d\u2019avis de r\xE9ception ou par t\xE9l\xE9copie confirm\xE9e par lettre recommand\xE9e avec accus\xE9 de r\xE9ception \xE0 l\u2019une ou l\u2019autre des parties \xE0 leur adresse respective sus-indiqu\xE9e en ent\xEAte."
  }, {
    type: 'br'
  }, {
    type: 'text',
    content: "Domicile est \xE9lu par les parties en leur adresse respective figurant en ent\xEAte des pr\xE9sentes"
  }], [{
    type: "bold",
    content: "ARTICLE 9 : INFORMATION"
  }, {
    type: "br"
  }], [{
    type: "bold",
    content: " COFINA "
  }, {
    type: "editable",
    key: "pays_filiale",
    inputType: "text",
    placeholder: "Pays de la filiale",
    hasDefault: true,
    defaultV: "filiale"
  }, {
    type: "text",
    content: "informera la Caution de toute d\xE9faillance, d\xE9ch\xE9ance ou prorogation du terme applicable au client\ncautionn\xE9 ainsi que de l\u2019\xE9volution de l\u2019endettement de celui-ci.\n"
  }, {
    type: 'br'
  }], [{
    type: "bold",
    content: "ARTICLE 10 : DROITS ET FRAIS"
  }, {
    type: "br"
  }], [{
    type: "text",
    content: "Tous les frais et droits auxquels donnent ou pourront donner lieu le pr\xE9sent contrat et son ex\xE9cution seront support\xE9s par la Caution qui s\u2019y oblige."
  }, {
    type: 'br'
  }], [{
    type: "bold",
    content: "ARTICLE 11 : DROIT APPLICABLE \u2013 ATTRIBUTION DE COMP\xC9TENCE"
  }, {
    type: "br"
  }], [{
    type: "text",
    content: "Le pr\xE9sent contrat est r\xE9gi par les actes uniformes du trait\xE9 OHADA et par toute disposition compatible de la loi "
  }, {
    type: "editable",
    key: "pays_loi",
    inputType: "text",
    placeholder: "Pays de la loi",
    hasDefault: false,
    defaultV: "nationalite"
  }, {
    type: 'text',
    content: "."
  }, {
    type: "br"
  }, {
    type: "br"
  }, {
    type: "text",
    content: "Tous diff\xE9rends et litiges relatifs \xE0 son interpr\xE9tation, son ex\xE9cution, ses suites et ses cons\xE9quences, seront de la seule comp\xE9tence du Tribunal de Commerce  "
  }, {
    type: "editable",
    key: "lieu_tribunal_commerce",
    inputType: "text",
    placeholder: "Lieu du Tribunal de Commerce",
    hasDefault: false,
    defaultV: "capitale"
  }, {
    type: 'text',
    content: "."
  }], [{
    type: 'blank',
    height: 150
  }], [{
    type: 'right_block',
    content: [{
      type: "text",
      content: "Fait à  "
    }, {
      type: "editable",
      key: "lieu_edition_contrat",
      inputType: "text",
      placeholder: "Lieu d'édition du contrat"
    }, {
      type: 'text',
      content: " le "
    }, {
      type: "editable",
      key: "date_edition_contrat",
      inputType: "date",
      placeholder: "Date d'édition du contrat",
      hasDefault: false,
      defaultV: "now"
    }, {
      type: 'br'
    }, {
      type: 'text',
      content: "En deux (02) exemplaires "
    }, {
      type: 'br'
    }]
  }], [{
    type: "table",
    columns: [{
      content: "Le promettant",
      width: 30,
      subcontent: "(Signature)"
    }, {
      content: "",
      width: 40,
      subcontent: ""
    }, {
      content: "La banque",
      width: 30,
      subcontent: "(Signature + Cachet)"
    }]
  }, {
    type: 'br'
  }], [{
    type: 'br'
  }, {
    type: 'text',
    content: "(Cachet et Signature et mention manuscrite « Lu et approuvé » si la caution est une personne morale)",
    style: {
      fontStyle: 'italic',
      marginTop: '300px',
      display: 'block'
    }
  }, {
    type: 'br'
  }, {
    type: 'text',
    content: "(1) Mention manuscrite devant précéder la signature de la caution : « Lu et approuvé, bon pour cautionnement solidaire et indivisible à concurrence de ",
    style: {
      fontStyle: 'italic'
    }
  }, {
    type: "editable",
    key: "montant_dette_cautionne",
    inputType: "money",
    placeholder: "Montant de la dette du cautionné",
    style: {
      fontStyle: 'italic'
    }
  }, {
    type: "text",
    content: " FCFA"
  }, {
    type: 'text',
    content: " en principal, frais intérêt, commissions, accessoires, frais de recouvrement y compris tous frais postérieurs à toute dénonciation.",
    style: {
      fontStyle: 'italic'
    }
  }]]
});

// TODO :
// 1- Add editable in list element

/***/ })

}]);