# front-budget-guardian

## Conventions

### Git

- [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)
- [Conventional Branch](https://dev.to/varbsan/a-simplified-convention-for-naming-branches-and-commits-in-git-il4#:~:text=Branch%20Naming%20Convention&text=A%20git%20branch%20should%20start,bugfix%20%2C%20hotfix%20%2C%20or%20test%20.&text=After%20the%20category%2C%20there%20should,%2C%20just%20add%20no%2Dref%20.)

### Common

Tous les composants de type "transverse" doivent être rangés dans `src/common/components` avec la structure suivante :

```
src/common/components/
    - /__tests__/[nom-composant].test.tsx
    - /assets
    - [nom-composant].css
    - [nom-composant].tsx
    - [nom-composant].type.ts
    - index.ts
```

Pour tout utilitaire "transverse" -> `src/common/utils` avec comme nom de fichier `[nom-global].ts` et son test associé dans `src/common/utils/__tests__/[nom-global].ts`.

Le fichier à la racine `src/__tests__` contient les tests d'intégration qui permettent de tester la bonne navigation du projet.

### Entities

Le dossier `entities` dans `src/entities` contient tous les types globaux de l'application. C'est lui qui régit les typages qu'on utilisera partout dans l'application.

### Features

Le dossier `src/features` contient chaque grosse fonctionnalité par thématique, avec comme nom de dossier en [camel case](https://fr.wikipedia.org/wiki/Camel_case).

Exemple : suivi des dépenses -> `src/features/expenseTracking`

Chaque feature doit avoir l'architecture suivante :

```
src/features/[nomFonctionnalite]
    - /domain
    - /hooks
    - /interfaces
```

#### Domain

Dans `domain` vous mettrez pour chaque fichier une fonction avec une logique métier qui sera testé dans `__tests__` qui lui répertorie tous les tests des fonctions métiers.

Nom de fichier en camel case.

```
src/features/[nomFonctionnalite]/domain
    - /__tests__
    - [fonctionMetier].ts
```

#### Hooks

Dans `hooks` vous mettrez tous les custom hooks qui vous permettront d'associer et aggréger les fonctions métier pour exporter les données et méthodes à utiliser dans les composants.

Nom de fichier : `use[NomLogique].ts`

Ces fichiers ne sont pas testés. Leur logique est comprise dans domain et donc déjà testé.

#### Interfaces

Dans `interfaces` vous aurez tous les fichiers concernant le visuel de l'utilisateur.

L'architecture est la suivante :

```
src/features/[nomFonctionnalite]/interfaces
    - /__tests__
        - [ComposantPrincipal].test.tsx
        - [ComposantSecondaire].test.tsx
        - ...
    - /composantSecondaire
        - ComposantSecondaire.tsx
        - style.css
    - index.ts
    - label.ts
    - style.css
```

Le composant principal (composant mère) est à la racine d'`interfaces` est importe `style.css`. C'est lui qui centralisera les composants secondaires s'il y en a.

Nom de dossier des composants secondaires en camel case.

Le fichier `label.ts` contient et exporte tous les wordings fixe de la page, réutilisable dans les tests notamment.

Dans le dossier `__tests__`, le fichier de test du composant principal teste les intéractions utilisateur et autres logiques, tandis que les fichiers de test de composant secondaire teste seulement l'aspect visuel.

Chaque fichier de composant importe son propre custom hook si logique ou données il doit y avoir dedans.

### Mocks

Ce dossier (`src/mocks`) contient toutes les données mockées de l'application, ce qui sert notamment à faire des tests ou injecter des données pour le développement.

### Routes

Le dossier `src/routes` contient deux fichiers `Router.tsx` et `routes.ts`.

Le fichier `Router.tsx` est l'implémentation du router de l'application, tandis que le fichier `routes.ts` contient l'export de toutes les constantes de routing.

### Services

-> TODO à implémenter par la suite
