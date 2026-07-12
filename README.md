# 漢字 Flashcards

Application web de révision de japonais par flashcards, avec mode Drill progressif et système de répétition espacée (SRS).

## Fonctionnement

Les cartes sont organisées en **collections**. Chaque collection contient trois niveaux imbriqués :

| Niveau | Description |
|--------|-------------|
| **Phrases** | Phrase complète en japonais (kanji + hiragana + traductions) |
| **Mots** | Mots avec kanji extraits des phrases, liés aux phrases sources |
| **Kanjis** | Kanjis individuels dédupliqués, liés aux mots sources |

### Mode Drill

Quiz en trois phases enchaînées automatiquement :

1. **Phrases** — lire et donner la lecture hiragana
2. **Mots** — seulement les mots issus des phrases ratées en phase 1
3. **Kanjis** — seulement les kanjis issus des mots ratés en phase 2

### Mode SRS (répétition espacée)

Implémentation de l'algorithme **SM-2** simplifié. Chaque carte (phrase, mot ou kanji) est planifiée individuellement avec un intervalle de révision croissant selon la qualité de la réponse (0 = raté, 1 = difficile, 2 = correct, 3 = facile). Les données SRS sont persistées dans `localStorage`.

### Saisie des réponses

Les réponses peuvent être saisies en **hiragana** ou en **rōmaji** (converti automatiquement en hiragana avant comparaison). La vérification est insensible à la casse et aux espaces en début/fin.

## Structure des données (`data.js`)

```js
{
  id: "coll-id",
  name: {
    fr: "Nom de la collection",
    en: "Name of the collection",
  },
  sentences: [
    { id, display, hiragana, en, fr }
  ],
  words: [
    { id, display, hiragana, sentenceIds[], en, fr }
  ],
  kanjis: [
    { id, kanji, readings[], wordIds[], en, fr }
  ]
}
```

Les collections peuvent être **importées** (JSON) et **exportées** depuis l'interface.

## Fichiers

```
index.html      Interface utilisateur (vues : accueil, collection, session, résultats)
app.js          Logique applicative (state, SRS, Session, rendu DOM)
data.js         Collections par défaut
style.css       Styles (thème sombre, responsive)
libs/
  wanakana.min.js   Bibliothèque WanaKana (conversion rōmaji → hiragana)
```

## Technologies

| Technologie | Usage |
|-------------|-------|
| **HTML / CSS / JS vanilla** | Aucun framework — application entièrement côté client |
| **[WanaKana](https://wanakana.com/)** (v5, local) | Conversion rōmaji → hiragana pour la saisie des réponses |
| **[Noto Sans JP](https://fonts.google.com/noto/specimen/Noto+Sans+JP)** (Google Fonts) | Police optimisée pour les caractères japonais |
| **localStorage** | Persistance des données SRS et des collections importées |

## Lancement

Aucune installation requise. Ouvrir `index.html` directement dans un navigateur, ou servir le dossier avec n'importe quel serveur HTTP statique :

```bash
npx serve .
# ou
python -m http.server
```
