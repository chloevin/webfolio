// Sélectionne le document
var document = window.document;

// Ajoute un gestionnaire d'événements pour l'événement "keypress"
document.addEventListener('keypress', handleKeyPress);

// Fonction pour gérer l'événement de la touche Entrée
function handleKeyPress(event) {
  // Vérifie si la touche appuyée est la touche Entrée
  if (event.keyCode === 13) {
    // Redirige vers la page ecranapple.html
    window.location.href = 'ecranapple.html';
  }
}

var heuresDiv = document.querySelector('.heures');
var dateDiv = document.querySelector('.date');

var affichageHeure = function(){
    // Déclaration des variables qui seront utilisées : 
    var today, listeMois, mois, listeJours, jourNUmero, jourNom, heures, minutes, secondes, deuxChiffres;

    // Récupérer la date actuelle : 
    today = new Date();

 

    //Récupérer le mois : 
    listeMois = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
    mois = listeMois[today.getMonth()]; //getMonth() donne l'index 1 comme on est en Février, ce qui donne la valeur "Février" depuis notre liste

    // Récupérer le numéro du jour du mois : 
    jourNUmero = today.getDate(); //donne 29

    // Récupérer le jour. Attention la semaine commence un dimanche en Javascript : 
    listeJours = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
    jourNom = listeJours[today.getDay()]; // getDay() donne index 6, donc samedi


    //Afficher les heures, minutes et secondes toujours avec deux chiffres : 
    deuxChiffres = function(element){
        if(element < 10){
            return element = "0" + element;
        } else {
            return element;
        }
    }

    // Récupérer les heures : 
    heures = deuxChiffres(today.getHours());

    // Récupérer les minutes : 
    minutes = deuxChiffres(today.getMinutes());



    //Affichage dans nos DIV du HTML : 
    heuresDiv.textContent = heures + ":" + minutes + " ";
    dateDiv.textContent = jourNom + " " + jourNUmero + " " + mois + " " ;

    // Lancer la fonction affichage heure toutes les 1000 ms, soit toute les secondes : 
    setTimeout(affichageHeure, 1000);
}

//Lancer la fonction une fois au début : 
affichageHeure();


// Appareil photo 
const facetime = document.getElementById("facetime");

facetime.addEventListener("click", () => {
  navigator.mediaDevices.getUserMedia({ video: true })
    .then(stream => {
      const video = document.createElement("video");
      video.srcObject = stream;
      video.play();
      const newWindow = window.open("", "Camera", "width=400,height=300");
    newWindow.document.body.appendChild(video);

    })
    .catch(error => console.log(error));
});


// Note 
const noteIcon = document.getElementById('note');
const noteURL = 'note/note.html';

noteIcon.addEventListener('click', () => {
  window.open(noteURL, 'Note', 'width1400,height=600');
});


// Contact 
// Note 
const contactIcon = document.getElementById('contact');
const contactURL = 'contact/contact.html';

contactIcon.addEventListener('click', () => {
  window.open(contactURL, 'Contact', 'width=1400px,height=600px');
});



// ENTRER SUR PAGE INDEX 
