//Script para cargar al index

//logica.... nombre del archivo ruta no es necesario . html y 
// en getID colocar el name del id_ que se encuentra en el index 

//navbar
const basePath = window.location.pathname.includes('/html/') ? '../html/' : 'html/';

fetch(basePath + 'navbar.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('navbar').innerHTML = data;
  });
//footer
fetch(basePath + 'footer.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('footer').innerHTML = data;
  });

//continuara...
//carrousel
const swiper = new Swiper(".mySwiper", {
slidesPerView: 1,
spaceBetween: 30,
loop: true,
grabCursor: true,
centeredSlides: true,
autoplay: {
    delay: 2500,
    disableOnInteraction: false,
},
pagination: {
    el: ".swiper-pagination",
    clickable: true,
},
navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
},
breakpoints: {
    768: {
    slidesPerView: 2,
    },
    992: {
    slidesPerView: 3,
    },
}
});
//boton
document.addEventListener('DOMContentLoaded', function() {
    const backToTopButton = document.getElementById('back-to-top');
    
    // Mostrar/ocultar el botón al hacer scroll
    window.addEventListener('scroll', function() {
      if (window.pageYOffset > 300) {
        backToTopButton.classList.add('active');
      } else {
        backToTopButton.classList.remove('active');
      }
    });
    
    // Scroll suave al hacer clic
    backToTopButton.addEventListener('click', function(e) {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  });
