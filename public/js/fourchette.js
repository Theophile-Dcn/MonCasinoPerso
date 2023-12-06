// Objectif : identifier un nombre aléatoire comme au juste prix


var max = 150;


var searchedNumber = Math.round(Math.random() * max);


var userInputElement = document.getElementById('userInput');


var messageParagraph = document.getElementById('messageParagraph');


var attempt = 1;

function checkNumber() {
    var enteredNumber = parseInt(userInputElement.value);

    
    if (isNaN(enteredNumber)) {
        showMessage('Veuillez saisir un nombre valide.');
        return; 
    }

    if (enteredNumber < searchedNumber) {
        userInputElement.value = "";
        showMessage('C\'est plus');
    } else if (enteredNumber > searchedNumber) {
        userInputElement.value = "";
        showMessage('C\'est moins');
    } else {
        showMessage('Bravo ! C\'était bien ' + searchedNumber + ' - Nombre d\'essais : ' + attempt);
        // Vous pouvez ajouter du code ici pour réinitialiser le jeu
    }

    attempt += 1;
}



function showMessage(message) {
    messageParagraph.textContent = message;

    
    var randomTop = Math.floor(Math.random() * (window.innerHeight * 0.2) + window.innerHeight * 0.6);
    var randomLeft = Math.floor(Math.random() * (window.innerWidth * 0.8) + window.innerWidth * 0.1);

   
    messageParagraph.style.top = randomTop + 'px';
    messageParagraph.style.left = randomLeft + 'px';

    messageParagraph.classList.add('textToWin', 'animateText');

    
    if (message.includes('plus')) {
        messageParagraph.style.color = "#6EB9DA";
    } else if (message.includes('moins')) {
        messageParagraph.style.color ="#D76790" ;
    } else {
        messageParagraph.style.color = 'white'; // Réinitialiser la couleur pour le message de victoire
    }

   
    setTimeout(function () {
        messageParagraph.textContent = '';
    }, 1000); // Le message disparaît après 5 secondes
}





