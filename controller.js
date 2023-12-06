const gameData = require("./games.json");

const controller = {
    
    displayHomepage(req,res){
        console.log("displayHomePageHeeloo");
        // on appelle la vue associée à la homepage
        res.render('index', {gameData});

    },

//    displayRoller(req, res){
//     res.render("diceRoller",{gameData})
//    },

//    displayFourchette(req,res){
//     res.render("fourchette",{gameData})
//    },

   displayGame(req, res){
    const nomDujeu = req.params.nomDuJeu;
    const findGame = gameData.find(game => game.name === nomDujeu);
    if(findGame){
        res.render(nomDujeu, {gameData})
    } else {
        res.status(404).send("Jeu non trouvé")
    }
   },
   
};

module.exports = controller;