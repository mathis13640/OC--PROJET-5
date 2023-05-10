const slides = [
	{
	  image: "slide1.jpg",
	  tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
	},
	{
	  image: "slide2.jpg",
	  tagLine:
		"Tirages haute définition grand format <span>pour vos bureaux et events</span>",
	},
	{
	  image: "slide3.jpg",
	  tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
	},
	{
	  image: "slide4.png",
	  tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
	},
  ];
  
  // Sélection des flèches gauche et droite
  const arrowLeft = document.querySelector(".arrow_left");
  const arrowRight = document.querySelector(".arrow_right");
  
  // Calcul de la longueur des slides
  const slidesLength = slides.length;
  
  // Initialisation du compteur
  let count = 0;
  
  // Sélection de l'image de la bannière et du titre
  const bannerImg = document.querySelector(".banner-img");
  const title = document.querySelector(".banner-img + p");
  
  // Sélection du conteneur de points
  const dotsContainer = document.querySelector(".dots");
  
  // Création d'un point pour chaque slide et ajout dans le conteneur de points
  for (let i = 0; i < slidesLength; i++) {
	const dot = document.createElement("div");
	dot.classList.add("dot");
	dotsContainer.appendChild(dot);
  }
  
  // Sélection de tous les points et ajout de la classe "dot_selected" au premier
  const dots = document.querySelectorAll(".dot");
  dots[count].classList.add("dot_selected");

  // Ajout d'un événement clic sur la flèche gauche
  arrowLeft.addEventListener("click", () => {
	count--;
	if (count < 0) {
		count = 4;
	}
	updateSlide();
  });

  // Ajout d'un événement clic sur la flèche droite
  arrowRight.addEventListener("click", () => {
	count++;
	if (count > 4) {
		count = 0;
	}	
	updateSlide();
  });
  
  // Fonction pour mettre à jour l'image de la bannière et le titre
  function updateSlide() {
	bannerImg.src = "./assets/images/slideshow/" + slides[count].image;
	title.innerHTML = slides[count].tagLine;
	dots.forEach((dot, index) => {
	  if (index === count) {
		dot.classList.add("dot_selected");
	  } else {
		dot.classList.remove("dot_selected");
	  }
	});
  }
  
  
  
  
