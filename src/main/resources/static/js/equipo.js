// Filtros del equipo
document.addEventListener("DOMContentLoaded", () => {
  const filterButtons = document.querySelectorAll(".filter-btn")
  const teamItems = document.querySelectorAll(".team-item")

  // Función para filtrar el equipo
  function filterTeam(category) {
    teamItems.forEach((item) => {
      if (category === "all" || item.dataset.category === category) {
        item.style.display = "block"
        item.classList.remove("hidden")
      } else {
        item.style.display = "none"
        item.classList.add("hidden")
      }
    })
  }

  // Event listeners para los botones de filtro
  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Remover clase active de todos los botones
      filterButtons.forEach((btn) => btn.classList.remove("active"))

      // Agregar clase active al botón clickeado
      this.classList.add("active")

      // Filtrar equipo
      const category = this.dataset.filter
      filterTeam(category)
    })
  })

  // Animación de entrada para las tarjetas del equipo
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1"
        entry.target.style.transform = "translateY(0)"
      }
    })
  }, observerOptions)

  // Observar todas las tarjetas del equipo
  teamItems.forEach((item) => {
    item.style.opacity = "0"
    item.style.transform = "translateY(30px)"
    item.style.transition = "all 0.6s ease"
    observer.observe(item)
  })
})
