// Efecto al cargar
$(document).ready(function() {
        $('.spa_animated').each(function(i) {
            $(this).delay(100 * i).queue(function() {
    $(this).addClass('spa_fadeIn').dequeue();
    });
});
            
// Efecto al pasar el mouse sobre los íconos
$('.spa_icon').hover(function() {
    $(this).addClass('fa-spin');
            }, function() {
                $(this).removeClass('fa-spin');
            });
});

// Asegúrate de que este código se ejecute después de que la página haya cargado
document.addEventListener("DOMContentLoaded", function () {
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
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
        }
      }
    });
  });
  