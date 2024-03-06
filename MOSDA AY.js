let slideIndex = 0;
showSlides();

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides() {
  let i;
  const slides = document.getElementsByClassName("slide");
  var texts = document.getElementsByClassName("text");
  if (slideIndex >= slides.length) {slideIndex = 0}    
  if (slideIndex < 0) {slideIndex = slides.length - 1}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  slides[slideIndex].style.display = "block";  
  slideIndex++;
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
