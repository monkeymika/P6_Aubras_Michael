// va cherhcer dotenv dans les dépendances (variable d'environnement)
require('dotenv').config();
// Importation de express
const express = require('express');
// Creation de l'application express
const app = express();

// Va chercher le package CORS (c'est un middleware qui agit entre la requête et la réponse)
const cors = require("cors");
/************************************** Routes ******************************************************************************/
//route utilisateur
const userRoutes = require("./routes/user");

//route sauce
const saucesRoutes = require("./routes/sauces");

/************************************* Base de données (mongoose) **********************************************************/
const mongoose = require('./db/bdd');

/************************************ Permet de gérer les CORS ************************************************************/
app.use(cors());

/********************** requetes effectué au format json-(bodyparser est inclus dans la version de express) ***************/
app.use(express.json());

/************************************* route authentification signup/login *****************************************************/
app.use("/api/auth", userRoutes);

/************************************* route pour les sauces *****************************************************/
app.use("/api/sauces", saucesRoutes);

/****************************** app peut être utilisé dans les autres fichiers ***********************/
module.exports = app;