
let slidesIndex = 1;

function showSlides (n) {
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    
    // slideindex -1 =
    slides[slideIndex-1].style.display = 'block';
}
    
showSlides();