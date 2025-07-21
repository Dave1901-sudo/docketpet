// Formulario de contacto
document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.getElementById("contactForm")

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault()

      // Obtener valores del formulario
      const nombre = document.getElementById("nombre").value
      const email = document.getElementById("email").value
      const telefono = document.getElementById("telefono").value
      const mascota = document.getElementById("mascota").value
      const asunto = document.getElementById("asunto").value
      const mensaje = document.getElementById("mensaje").value

      // Validación básica
      if (!nombre || !email || !asunto || !mensaje) {
        alert("Por favor, completa todos los campos obligatorios.")
        return
      }

      // Validar email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(email)) {
        alert("Por favor, ingresa un email válido.")
        return
      }

      // Simular envío del formulario
      const submitBtn = contactForm.querySelector('button[type="submit"]')
      const originalText = submitBtn.innerHTML

      submitBtn.innerHTML = '<iconify-icon icon="mdi:loading" class="me-2"></iconify-icon>Enviando...'
      submitBtn.disabled = true

      setTimeout(() => {
        alert("¡Mensaje enviado correctamente! Nos pondremos en contacto contigo pronto.")
        contactForm.reset()
        submitBtn.innerHTML = originalText
        submitBtn.disabled = false
      }, 2000)
    })
  }
})
