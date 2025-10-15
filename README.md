# Application de Gestion de Pressing — KassLaverie

Une solution complète pour la gestion de pressings multi-sites (multi-entreprises), avec gestion des clients, cartes de fidélité, dépôts, bonus automatiques, paiements et suivi du personnel.

---

## Stack Technique

| Élément | Technologie |
|----------|--------------|
| **Backend** | Laravel 11 (PHP 8.2) |
| **Frontend** | Vue.js 3 + Vite |
| **Base de données** | MySQL 8 |
| **Authentification** | Laravel Breeze (avec Sanctum) |
| **UI** | TailwindCSS + Vue Router + Pinia |
| **Outil de build** | Vite |
| **Gestion de versions** | Git / GitHub |

---

## Fonctionnalités principales

### * Multi-Pressing / Multi-Entreprise
- Un compte propriétaire peut gérer plusieurs pressings (ex: *KassLaverie A*, *KassLaverie B*).
- Chaque pressing a ses propres employés, clients, commandes et paiements.

### * Gestion des Clients
- Création et suivi des clients par pressing.
- Attribution d’une carte de fidélité unique à chaque client.

### * Dépôts & Commandes
- Enregistrement rapide des dépôts (articles, type de lavage, prix, date).
- Statut des commandes : *En attente*, *En cours*, *Terminée*, *Livrée*.

### * Bonus et Fidélité
- À partir d’un certain nombre de dépôts (ex : 5), le client reçoit un **bonus automatique** :
  - Lavage gratuit ou à moitié prix.
  - Historique des bonus consultable.

### * Employés & Rôles
- Gestion des employés (caissiers, livreurs, responsables).
- Attribution de rôles et permissions selon le poste.

### * Paiements
- Gestion des modes de paiement : espèces, mobile money, carte bancaire.
- Génération automatique de reçus.

---

## Architecture du Projet

