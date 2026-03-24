# 📝 Blog API

Blog API est une API REST développée avec Node.js permettant de gérer des articles (création, lecture, modification, suppression).

Cette API peut être utilisée avec une application frontend (React, mobile, etc.) pour créer un blog complet.

## ⚙️ Technologies utilisées

* Node.js
* Express.js
* SQLite
* Swagger (documentation API)

---

## 📦 Installation

1. Cloner le projet :

```bash
git clone https://github.com/ton-username/blog_api
cd blog_api
```

2. Installer les dépendances :

```bash
npm install
```

3. Configurer la base de données :
   Dans `database/db.js`

4. Lancer le serveur :

```bash
node app.js
```

---

## 🚀 Utilisation

Le serveur démarre sur :

```
http://localhost:3000
```

### 📄 Articles

| Méthode | Route             | Description                 |
| ------- | ----------------- | --------------------------- |
| GET     | /api/articles     | Récupérer tous les articles |
| GET     | /api/articles/:id | Récupérer un article        |
| POST    | /api/articles     | Créer un article            |
| PUT     | /api/articles/:id | Modifier un article         |
| DELETE  | /api/articles/:id | Supprimer un article        |

--

## 📘 Documentation API

Disponible via Swagger :

```
http://localhost:3000/api-docs
```

---

## 📁 Structure du projet

```
blog_api/
│
├── controllers/
│   └── articleController.js
│
├── models/
│   └── articleModel.js
│
├── routes/
│   └── articleRoutes.js
│
├── database/
│   └── db.js
│
├── app.js
├── swagger.js
└── package.json
```

---

## 👨‍💻 Auteur

Développé par Benoit Minkoulou 🚀
