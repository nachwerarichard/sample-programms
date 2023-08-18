let slideIndex = 1;
showSlides(slideIndex);

function pluSlides(n){
    showSlides(slideIndex+=n);
}
function currentSlide(){
    showSlides(slideIndex = n);
}

function showSlides(n){
    let i;
    let slides= document.getElementsByClassName("slideshow");
    let dot = document.getElementsByClassName("section1");
    if (n > slides.length) {slideIndex = 1 }
    if (n<1) {slideIndex = slides.length}
    for (i=0;i<slides.length;i++){
    slides[i].style.display="none";
    }
    for (i=0;i<section1;i++){
    section1[i].className =section1[i].className.replace("active","");
    }
    slides[slideIndex-1].style.display="block";
    dot[slideIndex-1].className +="active";

}