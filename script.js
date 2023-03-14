// let answers = document.querySelectorAll(".accordion");
// answers.forEach((event) => {
// event.addEventListener("click", () => {
// 	if (event.classList.contains("active")) {
// 	event.classList.remove("active");
// 	} else {
// 	event.classList.add("active");
// 	}
// });
// });

const faq = document.getElementsByClassName("frequent-question");
var i;
for (i = 0; i < faq.length; i++) {
    faq[i].addEventListener("click", function () {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");
        /* Toggle between hiding and showing the active panel */
        const body = this.nextElementSibling;
        if (body.style.display === "block") {
            body.style.display = "none";
        } else {
            body.style.display = "block";
        }
    });
}

const menu = document.querySelector('.menu');
const navLink = document.querySelector('.nav__set');

menu.addEventListener('click', () => {
  navLink.classList.toggle('hide');
});

// var slideIndex = 1;
// showSlides(slideIndex);
// function plusSlides(n) {
//    showSlides(slideIndex += n);
// }
// function currentSlide(n) {
//    showSlides(slideIndex = n);
// }
// function showSlides(n) {
//    var i;
//    var slides = document.getElementsByClassName("mySlides");
//    var dots = document.getElementsByClassName("dot");
//    if (n > slides.length) {slideIndex = 1}
//    if (n < 1) {slideIndex = slides.length}
//    for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";
//    }
//    for (i = 0; i < dots.length; i++) {
//       dots[i].className = dots[i].className.replace(" active", "");
//    }
//    slides[slideIndex-1].style.display = "block";
//    dots[slideIndex-1].className += " active";
// }

//  showSlides(n)();
// setInterval(showSlides(n),8000);
//  window.onload = function() {
//    currentSlide(n)();
//  }

 var imgs = document.querySelectorAll('.slider img');
 var dots = document.querySelectorAll('.dot');
 var currentImg = 0; // index of the first image 
 const interval = 3000;
 
 function myloader(){ setTimeout(function(){
   document.getElementById("loader").style.display="none";
}, 15000); 
   
 }

// const observer = new IntersectionObserver((entries)=>{
//    entries.forEach((entry)=> {
//       console.log(entry)
//       if (entry.isIntersecting){
//          entry.target.classList.add("show");
//       } else{
//          entry.target.classList.remove("show");
//       }
//    });
// });
// const hiddenElements = document.querySelectorAll(".hidden");
// hiddenElements.forEach((el) => observer.observe(el));
// let text =document.getElementById("hil");
// let tex =document.getElementById("hill");
// window.addEventListener("scroll", () =>{
//    let value = window.scrollY;
//    hil.style.marginTop = value *1.5 + "px";
//    hill.style.top = value *-1.5 + "px";
// });
let slide = document.querySelectorAll(".slide-container");
let index = 0;
function next(){
   slide[index].classList.remove(".active");
   index = (index + 1 ) % slide.length;
   slide[index].classList.add(".active");
}
function prev(){
   slide[index].classList.remove(".active");
   index = (index - 1 + slide.length ) % slide.length;
   slide[index].classList.add(".active");
}
// setInterval(next, 5000);