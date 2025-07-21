// Carrito de compras
let cart = []
let cartCount = 0
let cartTotal = 0

// Elementos del DOM
const cartFloat = document.getElementById("cartFloat")
const cartCountElement = document.getElementById("cartCount")
const cartModal = new bootstrap.Modal(document.getElementById("cartModal"))
const cartItemsContainer = document.getElementById("cartItems")
const cartTotalElement = document.getElementById("cartTotal")
const addToCartButtons = document.querySelectorAll(".add-to-cart")
const filterButtons = document.querySelectorAll(".filter-btn")
const searchInput = document.getElementById("searchInput")
const productsContainer = document.getElementById("productsContainer")

// Inicializar eventos
document.addEventListener("DOMContentLoaded", () => {
  initializeEventListeners()
  updateCartDisplay()
})

function initializeEventListeners() {
  // Botones de agregar al carrito
  addToCartButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const productData = {
        id: this.dataset.id,
        name: this.dataset.name,
        price: Number.parseFloat(this.dataset.price),
        image: this.closest(".product-card").querySelector("img").src,
      }
      addToCart(productData)
    })
  })

  // Carrito flotante
  cartFloat.addEventListener("click", () => {
    cartModal.show()
  })

  // Filtros de productos
  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const filter = this.dataset.filter
      filterProducts(filter)

      // Actualizar botón activo
      filterButtons.forEach((btn) => btn.classList.remove("active"))
      this.classList.add("active")
    })
  })

  // Búsqueda de productos
  searchInput.addEventListener("input", function () {
    searchProducts(this.value)
  })

  // Botón de checkout
  document.getElementById("checkoutBtn").addEventListener("click", () => {
    if (cart.length === 0) {
      alert("Tu carrito está vacío")
      return
    }

    // Simular proceso de pago
    alert(`Procesando pago por S/. ${cartTotal.toFixed(2)}\n¡Gracias por tu compra!`)
    clearCart()
    cartModal.hide()
  })
}

function addToCart(product) {
  const existingItem = cart.find((item) => item.id === product.id)

  if (existingItem) {
    existingItem.quantity += 1
  } else {
    cart.push({
      ...product,
      quantity: 1,
    })
  }

  updateCartDisplay()
  showAddToCartAnimation()
}

function removeFromCart(productId) {
  cart = cart.filter((item) => item.id !== productId)
  updateCartDisplay()
}

function updateQuantity(productId, newQuantity) {
  if (newQuantity <= 0) {
    removeFromCart(productId)
    return
  }

  const item = cart.find((item) => item.id === productId)
  if (item) {
    item.quantity = newQuantity
    updateCartDisplay()
  }
}

function updateCartDisplay() {
  // Actualizar contador
  cartCount = cart.reduce((total, item) => total + item.quantity, 0)
  cartCountElement.textContent = cartCount

  // Actualizar total
  cartTotal = cart.reduce((total, item) => total + item.price * item.quantity, 0)
  cartTotalElement.textContent = cartTotal.toFixed(2)

  // Actualizar contenido del modal
  updateCartModal()

  // Mostrar/ocultar carrito flotante
  cartFloat.style.display = cartCount > 0 ? "flex" : "none"
}

function updateCartModal() {
  if (cart.length === 0) {
    cartItemsContainer.innerHTML = `
            <div class="text-center py-4">
                <iconify-icon icon="mdi:cart-outline" class="fs-1 text-muted"></iconify-icon>
                <p class="text-muted mt-2">Tu carrito está vacío</p>
            </div>
        `
    return
  }

  cartItemsContainer.innerHTML = cart
    .map(
      (item) => `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.name}">
            <div class="cart-item-info">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-price">S/. ${item.price.toFixed(2)}</div>
                <div class="quantity-controls">
                    <button class="quantity-btn" onclick="updateQuantity('${item.id}', ${item.quantity - 1})">-</button>
                    <span class="mx-2">${item.quantity}</span>
                    <button class="quantity-btn" onclick="updateQuantity('${item.id}', ${item.quantity + 1})">+</button>
                    <button class="btn btn-sm btn-outline-danger ms-3" onclick="removeFromCart('${item.id}')">
                        <iconify-icon icon="mdi:delete"></iconify-icon>
                    </button>
                </div>
            </div>
            <div class="cart-item-total">
                <strong>S/. ${(item.price * item.quantity).toFixed(2)}</strong>
            </div>
        </div>
    `,
    )
    .join("")
}

function clearCart() {
  cart = []
  updateCartDisplay()
}

function showAddToCartAnimation() {
  // Crear elemento de animación
  const animation = document.createElement("div")
  animation.innerHTML = '<iconify-icon icon="mdi:check-circle" class="text-success"></iconify-icon> Agregado al carrito'
  animation.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: white;
        padding: 1rem 2rem;
        border-radius: 8px;
        box-shadow: 0 5px 20px rgba(0,0,0,0.2);
        z-index: 9999;
        font-weight: 600;
        color: var(--dark-color);
    `

  document.body.appendChild(animation)

  // Remover después de 2 segundos
  setTimeout(() => {
    animation.remove()
  }, 2000)
}

function filterProducts(category) {
  const products = document.querySelectorAll(".product-item")

  products.forEach((product) => {
    if (category === "all" || product.dataset.category === category) {
      product.classList.remove("hidden")
    } else {
      product.classList.add("hidden")
    }
  })
}

function searchProducts(query) {
  const products = document.querySelectorAll(".product-item")
  const searchTerm = query.toLowerCase()

  products.forEach((product) => {
    const productName = product.querySelector(".product-title").textContent.toLowerCase()
    const productDescription = product.querySelector(".product-description").textContent.toLowerCase()

    if (productName.includes(searchTerm) || productDescription.includes(searchTerm)) {
      product.classList.remove("hidden")
    } else {
      product.classList.add("hidden")
    }
  })
}

// Funciones globales para los botones del modal
window.updateQuantity = updateQuantity
window.removeFromCart = removeFromCart
