const express = require("express");
// Import du router
const router = require("./router");
const app = express();


app.set('view engine', 'ejs');

// Chemin vers les views
app.set('views', './views');

// Je spécifie à Express que je vais utiliser le dossier public pour mes fichiers static

// Tous les fichiers dans le dossier public seront accessibles depuis l'url `/`
app.use(express.static('public'));



const port = 3000;
app.listen(port, () => {
    console.log('Listening at http://localhost:3000');
});

app.use(router);