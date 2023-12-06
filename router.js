// Import du Router Express
const {Router} = require("express");
const controller = require("./controller");

// Initialisation du router
const router = Router();
console.log("router hello");
// Paramétrage des urls
// à une url donnée va correspondre une méthode dans le controller
router.get("theophile-dcn.github.io/MonCasinoPerso",controller.displayHomepage);

// Express permet de définir ce qui est appelé des routes paramétrées
// une route paramétrée est une route qui contient au moins un paramètre
// un paramètre commence par ":"
// ce qui se trouve après les ":" sera le nom du paramètre
// router.get("/:rayon",controller.displayRayon);
// Exemple d'une route paramétrée qui pourrait amener à un produit d'un rayon
// /jardinage/tondeuse.html
// Notre route vers Dice roller
// router.get("/game/diceRoller",controller.displayRoller);
// // Notre route vers fourchette
// router.get("/game/fourchette",controller.displayFourchette);
// route dynamique
router.get("theophile-dcn.github.io/MonCasinoPerso/:nomDuJeu", controller.displayGame);
// Export du router
module.exports = router;