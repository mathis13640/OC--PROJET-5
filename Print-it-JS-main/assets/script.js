const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]


	const leftArrow = document.querySelector(".arrow_left");
	const rightArrow = document.querySelector(".arrow_right");
	const containerDot = document.querySelector(".dots");


	// Ajout d'un clic gauche sur flèche ///
		leftArrow.addEventListener('click', function() {
		console.log('Clic gauche');
	});
	
	// Ajout d'un clic droit sur flèche ///
		rightArrow.addEventListener('click', function() {
		console.log('Clic droit');
	});
    
	// boucle parcourant le tableau de slides//
	for (let i = 0; i < slides.length; i += 1) {
		//creation div class dot//
		const dot = document.createElement('div');
		dot.className = 'dot';
		//ajout element enfant à parent//
		containerDot.appendChild(dot);
	}
	//select element de la page possédant la classe css DOT 
	const dots = document.querySelectorAll(".dot");
	dots[0].classList.add('dot_selected');
	



