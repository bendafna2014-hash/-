// ============================================
// ניהול סל הקניות (localStorage)
// ============================================

function getCart() {
  const cart = localStorage.getItem('ben_3d_cart');
  return cart ? JSON.parse(cart) : [];
}

function saveCart(cart) {
  localStorage.setItem('ben_3d_cart', JSON.stringify(cart));
  updateCartCount();
}

function addToCart(productId, quantity = 1) {
  const products = getProducts();
  const product = products.find(p => p.id === productId);
  if (!product) return;

  let cart = getCart();
  const existing = cart.find(item => item.id === productId);

  if (existing) {
    existing.quantity += quantity;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: quantity
    });
  }

  saveCart(cart);
  showToast(`נוסף לסל: ${product.name}`);
}

function removeFromCart(productId) {
  let cart = getCart();
  cart = cart.filter(item => item.id !== productId);
  saveCart(cart);
}

function updateQuantity(productId, quantity) {
  let cart = getCart();
  const item = cart.find(i => i.id === productId);
  if (item) {
    if (quantity <= 0) {
      removeFromCart(productId);
    } else {
      item.quantity = quantity;
      saveCart(cart);
    }
  }
}

function getCartTotal() {
  const cart = getCart();
  return cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
}

function getCartCount() {
  const cart = getCart();
  return cart.reduce((sum, item) => sum + item.quantity, 0);
}

function clearCart() {
  localStorage.removeItem('ben_3d_cart');
  updateCartCount();
}

function updateCartCount() {
  const countEls = document.querySelectorAll('.cart-count');
  const count = getCartCount();
  countEls.forEach(el => {
    el.textContent = count;
    el.style.display = count > 0 ? 'inline-flex' : 'none';
  });
}

// הודעה קטנה (toast)
function showToast(message) {
  let toast = document.getElementById('toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2500);
}

// עדכון מספר הפריטים בסל בכל טעינת דף
document.addEventListener('DOMContentLoaded', updateCartCount);
