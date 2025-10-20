"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_offview_microfinance_cofina_convention_cofina_Convention-transfert_js"],{

/***/ "./resources/js/components/offview/microfinance/cofina/convention/cofina/Convention-transfert.js":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/components/offview/microfinance/cofina/convention/cofina/Convention-transfert.js ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  Title: "CONVENTION DE TRANSFERT FIDUCIAIRE DE SOMME D’ARGENT",
  subtitle: "(Articles 87 à 91 de l’acte uniforme portant organisation des sûretés)",
  paragraphs: [[{
    type: "text",
    content: "Entre"
  }], [{
    type: 'bold',
    content: 'Compagnie Financière Africaine '
  }, {
    type: 'editable',
    key: 'filiale_contry',
    inputType: 'text',
    placeholder: 'Pays de la filiale',
    hasDefault: false,
    defaultV: "filiale"
  }, {
    type: 'bold',
    content: 'S.A'
  }, {
    type: 'text',
    content: ', en abrégé COFINA '
  }, {
    type: 'editable',
    key: 'filiale_contry',
    inputType: 'text',
    placeholder: 'Pays de la filiale',
    hasDefault: false,
    defaultV: "filiale"
  }, {
    type: 'text',
    content: ", société anonyme avec Conseil d’Administration au capital social de "
  }, {
    type: 'editable',
    key: 'filiale_capital',
    inputType: 'money',
    placeholder: 'Capitalisation',
    hasDefault: false,
    defaultV: "filiale_capital"
  }, {
    type: 'text',
    content: "FCFA ayant son siège social à "
  }, {
    type: 'editable',
    key: 'siege',
    inputType: 'text',
    placeholder: 'Siège social',
    hasDefault: false,
    defaultV: "siege"
  }, {
    type: 'text',
    content: ', '
  }, {
    type: 'editable',
    key: 'code',
    inputType: 'text',
    placeholder: 'Adresse postal',
    hasDefault: false,
    defaultV: "code"
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
    type: 'text',
    content: ", Tel : ",
    placeholder: 'Numéro de téléphone'
  }, {
    type: 'editable',
    key: 'filiale_telephone',
    inputType: 'tel',
    placeholder: 'téléphone de la filiale',
    hasDefault: false,
    defaultV: 'filiale_telephone'
  }, {
    type: 'text',
    content: '; '
  }], [{
    type: "text",
    content: 'Représentée par '
  }, {
    type: 'editable',
    inputType: "select",
    key: "titre_representant",
    options: ["Monsieur ", "Madame "],
    placeholder: "Titre du représentant",
    hasDefault: false,
    defaultV: "empty"
  }, {
    type: 'text',
    content: " "
  }, {
    type: 'editable',
    key: "representative_name",
    inputType: "text",
    placeholder: "Nom répresentant",
    hasDefault: false,
    defaultV: "nom_dg"
  }, {
    type: "text",
    content: ", agissant en sa qualité de Directeur Général,"
  }, {
    type: "br"
  }], [{
    type: 'right_block',
    content: [{
      type: 'text',
      content: 'Ci-après dénommée au contrat << '
    }, {
      type: 'bold',
      content: 'Le créancier'
    }, {
      type: "text",
      content: '>>'
    }]
  }], [{
    type: 'text',
    content: 'Et'
  }], [{
    type: "editable",
    key: "titre_constituant",
    inputType: "select",
    options: ["Madame", "Monsieur"],
    placeholder: "Titre du constituant",
    hasDefault: false,
    defaultV: "empty"
  }, {
    type: 'text',
    content: ' '
  }, {
    type: 'editable',
    key: 'contractor_name',
    inputType: 'text',
    placeholder: "Nom du Constituant"
  }, {
    type: 'text',
    content: 'né(e) le'
  }, {
    type: 'editable',
    key: 'contractor_birth_date',
    inputType: 'date'
  }, {
    type: 'text',
    content: 'à'
  }, {
    type: 'editable',
    key: 'contrator_birth_location',
    inputType: 'text',
    placeholder: "Lieu de naissance du gagiste"
  }, {
    type: 'text',
    content: ', Cadre commerciale de nationalité '
  }, {
    type: 'editable',
    key: 'contrator_nationality',
    inputType: 'text',
    placeholder: "Nationalité du gagiste"
  }, {
    type: 'text',
    content: ", titulaire de  "
  }, {
    type: "editable",
    key: "type_piece_promettant",
    inputType: "select",
    options: ["de la Carte National d'Identité", "du passeport", "de la carte consulaire"],
    placeholder: "Type de pièce d'identité du promettant",
    hasDefault: false,
    defaultV: "empty"
  }, {
    type: 'text',
    content: " N° "
  }, {
    type: 'editable',
    key: 'contractor_carte_id',
    inputType: 'text',
    placeholder: "Numéro de pièce d'identité"
  }, {
    type: 'text',
    content: 'du'
  }, {
    type: 'editable',
    key: 'contractor_carte_produce_date',
    inputType: 'date'
  }, {
    type: 'text',
    content: "valable jusqu'au "
  }, {
    type: 'editable',
    key: 'contractor_carte_expire_date',
    inputType: 'date'
  }, {
    type: 'text',
    content: ", ayant son lieu d'activités au quartier"
  }, {
    type: 'editable',
    key: 'contractor_activity_location',
    inputType: 'text',
    placeholder: "Lieu d'activité du gagiste"
  }, {
    type: 'text',
    content: 'et ayant son domicile au quartier'
  }, {
    type: 'editable',
    key: 'contractor_location',
    inputType: 'text',
    placeholder: "Lieu habitation du gagiste"
  }, {
    type: 'text',
    content: ', Tél :'
  }, {
    type: 'editable',
    key: 'contractor_telephone',
    inputType: 'tel',
    placeholder: "Numéro de téléphone du gagiste"
  }], [{
    type: 'right_block',
    content: [{
      type: 'text',
      content: 'Ci-après dénommée le « '
    }, {
      type: 'bold',
      content: 'Constituant'
    }, {
      type: 'text',
      content: '»'
    }]
  }], [{
    type: 'text',
    content: 'Après avoir rappelé que '
  }, {
    type: "editable",
    key: "titre_constituant",
    inputType: "select",
    options: ["Madame", "Monsieur"],
    placeholder: "Titre du constituant",
    hasDefault: false,
    defaultV: "empty"
  }, {
    type: 'text',
    content: ' '
  }, {
    type: 'editable',
    key: 'contractor_name',
    inputType: 'text',
    placeholder: "Nom du Constituant"
  }, {
    type: 'text',
    content: ' a parfaite connaissance du fait que '
  }, {
    type: 'bold',
    content: 'COFINA'
  }, {
    type: 'editable',
    key: 'filiale_contry',
    inputType: 'text',
    placeholder: 'Pays de la filiale',
    hasDefault: false,
    defaultV: "filiale"
  }, {
    type: 'bold',
    content: 'S.A,'
  }, {
    type: 'text',
    content: ' lui a consenti des concours dans le cadre de ses activités. '
  }], [{
    type: 'underline',
    content: ' I -Object :'
  }], [{
    type: 'text',
    content: 'La'
  }, {
    type: 'bold',
    content: 'Compagnie Financière Africaine '
  }, {
    type: 'editable',
    key: 'filiale_contry',
    inputType: 'text',
    placeholder: 'Pays de la filiale',
    hasDefault: false,
    defaultV: "filiale"
  }, {
    type: 'bold',
    content: 'S.A'
  }, {
    type: 'text',
    content: ', en abrégé COFINA '
  }, {
    type: 'editable',
    key: 'filiale_contry',
    inputType: 'text',
    placeholder: 'Pays de la filiale',
    hasDefault: false,
    defaultV: "filiale"
  }, {
    type: 'bold',
    content: 'S.A,'
  }, {
    type: 'text',
    content: " ouvre, par les présentes au Constituant, à l’emprunteur qui accepte et s'oblige à en exécuter les conditions, les concours aux caractéristiques suivantes : "
  }], [{
    type: "underline",
    content: " II - CONDITIONS"
  }], [{
    type: "underline",
    content: "Type de concours :"
  }, {
    type: "editable",
    key: "type_concours",
    inputType: "text",
    placeholder: "Type de concours",
    hasDefault: false,
    defaultV: "type_de_concours"
  }], [{
    type: 'bold',
    content: "\u2022 \tMontant : "
  }, {
    type: 'editable',
    key: "montant",
    inputType: 'money',
    hasDefault: false,
    defaultV: "montant"
  }, {
    type: 'text',
    content: "F CFA"
  }, {
    type: 'br'
  }, {
    type: 'bold',
    content: "\u2022 \tDur\xE9e : "
  }, {
    type: 'editable',
    key: "duree_credit",
    inputType: 'number',
    hasDefault: false,
    defaultV: "duree_credit"
  }, {
    type: 'br'
  }, {
    type: 'bold',
    content: "\u2022 \tP\xE9riodicit\xE9 de remboursement : "
  }, {
    type: 'editable',
    key: "periodicite",
    inputType: 'text',
    hasDefault: false,
    defaultV: "periodicite"
  }, {
    type: 'text',
    content: " avec précompte mensuel des intérêts ;"
  }, {
    type: 'br'
  }, {
    type: 'bold',
    content: "\u2022 \tTaux d'int\xE9r\xEAt :"
  }, {
    type: 'editable',
    key: "taux_interet_ht",
    inputType: 'number',
    hasDefault: false,
    defaultV: "taux_interet_ht"
  }, {
    type: 'bold',
    content: " % HT l'an + "
  }, {
    type: 'editable',
    key: "taxe",
    inputType: 'number',
    hasDefault: false,
    defaultV: "tva"
  }, {
    type: 'bold',
    content: " de TVA"
  }, {
    type: 'text',
    content: " ( soit taux de DAT + 2 % ) ;"
  }, {
    type: 'br'
  }, {
    type: 'bold',
    content: "\u2022 \tFrais de dossier : "
  }, {
    type: 'editable',
    key: "frais_dossier",
    inputType: 'money',
    hasDefault: false,
    defaultV: "frais_dossier"
  }, {
    type: 'bold',
    content: " FCFA HT ("
  }, {
    type: 'editable',
    key: "frais_percent",
    inputType: 'number',
    hasDefault: false,
    defaultV: "frais_percent"
  }, {
    type: 'bold',
    content: " % du montant accord\xE9)"
  }, {
    type: 'br'
  }, {
    type: 'bold',
    content: "\u2022 \tPrimes de risques : "
  }, {
    type: 'editable',
    key: "prime",
    inputType: 'money',
    hasDefault: false,
    defaultV: "prime_risque"
  }, {
    type: 'br'
  }, {
    type: 'bold',
    content: '• 	Date de première échéance :'
  }, {
    type: 'editable',
    key: 'premiere_echeance',
    inputType: 'date',
    hasDefault: false,
    defaultV: "premiere_echeance"
  }, {
    type: 'br'
  }, {
    type: 'bold',
    content: '• 	Date de dernière échéance :'
  }, {
    type: 'editable',
    key: 'derniere_echeance',
    inputType: 'date',
    hasDefault: false,
    defaultV: "premiere_echeance"
  }, {
    type: 'br'
  }, {
    type: 'bold',
    content: "• Montant de l'échéance :"
  }, {
    type: 'editable',
    key: "montant_echeance",
    inputType: 'money',
    hasDefault: false,
    defaultV: "montant_echeance"
  }, {
    type: 'br'
  }, {
    type: 'underline',
    content: ' III - SURETE'
  }, {
    type: 'br'
  }, {
    type: 'text',
    content: 'En sûreté de l’engagement de '
  }, {
    type: 'bold',
    content: 'COFINA'
  }, {
    type: 'editable',
    key: 'filiale_contry',
    inputType: 'text',
    placeholder: 'Pays de la filiale',
    hasDefault: false,
    defaultV: "filiale"
  }, {
    type: 'text',
    content: 'à virer les montants sus décrits, le bénéficiaire, qui les accepte sans réserve aux conditions ci-dessus, consent à '
  }, {
    type: 'bold',
    content: 'COFINA'
  }, {
    type: 'editable',
    key: 'filiale_contry',
    inputType: 'text',
    placeholder: 'Pays de la filiale',
    hasDefault: false,
    defaultV: "filiale"
  }, {
    type: 'text',
    content: 'créancière,  qui l’accepte à titre de garantie du remboursement de toutes sommes en principal, intérêts, frais, commissions, taxes et accessoires que le Constituant pourrait devoir à '
  }, {
    type: 'bold',
    content: 'COFINA'
  }, {
    type: 'editable',
    key: 'filiale_contry',
    inputType: 'text',
    placeholder: 'Pays de la filiale',
    hasDefault: false,
    defaultV: "filiale"
  }, {
    type: 'text',
    content: ', en cas de défaillance dans l’exécution du financement ci-dessus mentionné, « un transfert fiduciaire » portant sur la somme de  '
  }, {
    type: 'editable',
    key: "montant_transfert",
    inputType: 'money',
    hasDefault: false,
    defaultV: "montant_transfert"
  }, {
    type: 'text',
    content: 'disponible sur le compte de dépôt à terme'
  }, {
    type: 'editable',
    key: "compte_depot",
    inputType: 'text',
    placeholder: "Compte de dépôt à terme",
    hasDefault: false,
    defaultV: "compte_depot"
  }, {
    type: 'text',
    content: ' au nom de'
  }, {
    type: 'editable',
    key: 'contractor_name',
    inputType: 'text',
    placeholder: "Nom du Constituant"
  }], [{
    type: 'text',
    content: 'Les fonds cédés seront inscrits sur le compte bloqué '
  }, {
    type: 'editable',
    key: 'compte_bloque',
    inputType: 'text',
    placeholder: "Compte bloqué",
    hasDefault: false,
    defaultV: "compte_bloque"
  }, {
    type: 'br'
  }, {
    type: 'text',
    content: 'Le Constituant ne peut disposer de cette somme bloquée de quelle que manière que ce soit, tant qu’elle demeurera affectée à la garantie de ses engagements envers '
  }, {
    type: 'bold',
    content: 'COFINA'
  }, {
    type: 'br'
  }, {
    type: 'text',
    content: 'Les fonds cédés au profit '
  }, {
    type: 'bold',
    content: 'COFINA'
  }, {
    type: 'text',
    content: ', en vertu de la présente convention, produisent intérêts au taux conventionnel établi dans la convention de dépôt.A la garantie, sûreté et remboursement par le Constituant, de toutes les sommes qu’il pourrait devoir à Cofina, en principal, intérêts, frais et accessoires, en raison du prêt visé dans l’exposé ci-dessus, le Constituant affecte et sans concours, dans les termes de l’article 87 et suivants de l’Acte Uniforme portant Organisation des Sûretés, la somme d’argent sus évoquée.'
  }, {
    type: 'br'
  }, {
    type: 'text',
    content: "Le présent transfert fiduciaire de sommes d’argent garantira également de plein droit toutes sommes qui pourraient être dues au titre d'un avenant ultérieur au contrat de prêt visé plus haut."
  }], [{
    type: 'underline',
    content: ' IV - ECHEANCE DE LA SURETE'
  }], [{
    type: "text",
    content: 'L’échéance de la sûreté est prévue le '
  }, {
    type: "editable",
    key: "date_echeance",
    inputType: "date",
    placeholder: "Date de l'echeance",
    hasDefault: false,
    defaultV: "date_echeance"
  }, {
    type: "text",
    content: "et en cas de complet paiement de la créance garantie, les fonds inscrits sur le compte bloqué sont restitués au constituant avec les intérêts.En cas de non-remboursement du débiteur et huit jours après que le constituant en ait été dûment averti,"
  }, {
    type: 'bold',
    content: 'COFINA'
  }, {
    type: 'text',
    content: "peut se faire remettre les fonds cédés dans la limite du montant des créances garanties demeurant impayées."
  }, {
    type: 'br'
  }, {
    type: 'text',
    content: "Tous les frais auxquels donneront lieu la formalisation et l’exécution du présent acte sont à la charge du Constituant, qui s’y oblige expressément. "
  }, {
    type: 'br'
  }, {
    type: 'text',
    content: "Le présent acte est régi par les articles 87 à 91 de l’acte uniforme portant organisation des sûretés."
  }, {
    type: 'br'
  }, {
    type: 'text',
    content: "Tout différend dans son interprétation ou exécution fera l’objet d’un règlement amiable entre les parties."
  }, {
    type: 'br'
  }, {
    type: 'text',
    content: "A défaut d’un règlement amiable, il sera soumis à la compétence du Tribunal de Commerce de "
  }, {
    type: 'editable',
    key: 'tribunal_competent',
    inputType: 'text',
    placeholder: "Tribunal compétent",
    hasDefault: false,
    defaultV: "tribunal_competent"
  }, {
    type: 'text',
    content: " ."
  }], [{
    type: "underline",
    content: "V - DECLARATION DU CONSTITUANT"
  }], [{
    type: 'text',
    content: "Le constituant déclare qu’il ne consentira aucune cession ou autre transfert ou promesse de transfert, totalement ou partiellement des contrats dont il est fait mention ci-dessus."
  }], [{
    type: 'right_block',
    content: [{
      type: 'text',
      content: 'Fait à Ouagadougou, le '
    }, {
      type: 'editable',
      key: 'date_redaction',
      inputType: 'date',
      placeholder: 'Date de rédaction',
      hasDefault: false,
      defaultV: 'date_redaction'
    }]
  }, {
    type: "right_block",
    content: [{
      type: 'text',
      content: 'Sur trois pages et en Trois exemplaires'
    }]
  }], [{
    type: 'table',
    columns: [{
      content: "LE CONSTITUANT ",
      width: 75
    }, {
      content: "COFINA  ",
      width: 75,
      input: true,
      key: 'filiale_contry',
      inputType: 'text',
      placeholder: 'Pays de la filiale',
      hasDefault: false,
      defaultV: "filiale",
      style: {
        marginLeft: '15px'
      }
    }]
  }, {
    type: 'br'
  }, {
    type: 'br'
  }, {
    type: 'br'
  }, {
    type: 'table',
    columns: [{
      content: "",
      width: 75,
      input: true,
      key: 'contractor_name',
      inputType: 'text',
      placeholder: "Nom du Constituant",
      hasDefault: false,
      defaultV: "contractor_name"
    }, {
      content: "",
      width: 75,
      input: true,
      key: 'representative_name',
      inputType: 'text',
      placeholder: 'Nom du Representant',
      hasDefault: false,
      defaultV: "representative_name",
      style: {
        marginLeft: '15px'
      }
    }]
  }]]
});

/***/ })

}]);