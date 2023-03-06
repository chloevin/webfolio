$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 30,
    dots: true,
    nav: false,
    responsiveClass: true,
    responsive: {
      0: {
        items: 2,
        margin: 10,
        stagePadding: 20,
      },
      600: {
        items: 3,
        margin: 20,
        stagePadding: 50,
      },
      1000: {
        items: 4
      }
    }
  });

  // DESIGN

  const popup = document.querySelector(".popup");
  const popupImage = document.querySelector(".popup-image");
  
  // Écouteurs d'événements pour chaque image
  const images = document.querySelectorAll(".image");
  images.forEach(image => {
    image.addEventListener("click", () => {
      // Affichage de la popup
      popup.classList.add("show");
      
      // Remplacement de l'image dans la popup
      const src = image.getAttribute("src");
const alt = image.getAttribute("alt");
popupImage.setAttribute("src", src);
popupImage.setAttribute("alt", alt);
});
});
// Écouteur d'événement pour cacher la popup
popup.addEventListener("click", () => {
popup.classList.remove("show");
});



// sélectionnez tous les éléments li dans la liste
const liElements = document.querySelectorAll(".menu li");

// ajoutez un écouteur d'événement pour chaque élément li
liElements.forEach(function(li) {
  li.addEventListener("click", function() {
    // retirez la couleur rouge de tous les éléments li
    liElements.forEach(function(li) {
      li.style.backgroundColor = "";
    });
    
    // ajoutez la couleur grise à l'élément li sur lequel l'utilisateur a cliqué
    this.style.backgroundColor = "#c6c6c6";
  });
});


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
