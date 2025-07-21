document.addEventListener("DOMContentLoaded", function() {
    // Seleccionar todos los checkboxes del acordeón
    const accordions = document.querySelectorAll('.acordeon-toggle');
  
    // Agregar un evento de cambio a cada checkbox
    accordions.forEach(accordion => {
      accordion.addEventListener('change', function() {
        // Si el checkbox es seleccionado (cambiado a checked)
        if (this.checked) {
          // Cerrar todos los otros acordeones
          accordions.forEach(otherAccordion => {
            if (otherAccordion !== this) {
              otherAccordion.checked = false;
            }
          });
        }
      });
    });
  });
  