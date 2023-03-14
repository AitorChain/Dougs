# Test technique

## Objectifs

L’objectif de ce test technique est d’afficher des catégories avec des filtres et une recherche.

## Fichiers

Les fichiers suivants sont fournis pour le test :
- L'archive des sources d'un serveur d'api node
- Un lien figma avec les maquettes

## Attendus

Afin de tester tes compétences, nous te demandons de créer une SPA (React, Angular à toi de choisir). L’application devra se conformer scrupuleusement aux maquettes.

## Serveur d'API

Un serveur API est fourni avec deux routes.

Pour le lancer :

```
npm install
```
```
npm start
```

Les routes :

- `/all-categories`

  Cette route permet de récupérer l’ensemble des catégories.

  Elle ne prend rien en paramètre et renvoie une liste de catégories sous la forme suivante :
  ```
  {
    id: number;
    group?: {
      id: number;
      name: string;
      color: string;
    };
    wording: string;
    description: string;
  }
  ```

- `/visible-categories`

  Cette route permet de récupérer les catégories à afficher.

  Elle ne prend rien en paramètre et renvoie une liste d’ID de catégories sous la forme suivante :

  ```
  {
    id: number;
  }
  ```

## Maquette

Le lien Figma des maquettes est le suivant : https://www.figma.com/file/wr3a4hOd5A1Y9F5R7rmhAt/Test-technique-front-end?node-id=0%3A1

Les catégories affichées seront celles qui sont récupérées via la route `visible-categories`.

Si t’as des questions, n’hésite pas à nous en faire part !

**Bon test!!**
