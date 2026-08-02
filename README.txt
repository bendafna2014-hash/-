<!DOCTYPE html>
<html lang="he" dir="rtl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>הדפסות תלת מימד - בן דפנה</title>
  <meta name="description" content="הדפסות תלת מימד איכותיות בהזמנה אישית - בן דפנה">
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
  <header class="header">
    <div class="header-inner">
      <a href="index.html" class="logo">🖨️ <span>הדפסות תלת מימד</span> - בן דפנה</a>
      <nav class="nav">
        <a href="index.html" class="active">חנות</a>
        <a href="about.html">אודות</a>
        <a href="contact.html">צור קשר</a>
        <a href="cart.html" class="cart-btn">
          🛒 סל
          <span class="cart-count">0</span>
        </a>
      </nav>
    </div>
  </header>

  <main class="main">
    <h1 class="page-title">החנות</h1>
    <p class="page-subtitle">הדפסות תלת מימד איכותיות בהזמנה אישית. כל המוצרים מודפסים בעבודת יד.</p>

    <div class="products-grid" id="products-grid">
      <!-- המוצרים נטענים כאן דינמית -->
    </div>
  </main>

  <footer class="footer">
    <p>© 2026 בן דפנה | הדפסות תלת מימד</p>
    <p>
      <a href="tel:0542319539">054-2319539</a> · 
      <a href="mailto:bendafna2014@gmail.com">bendafna2014@gmail.com</a> · 
      <a href="https://wa.me/972542319539" target="_blank">וואטסאפ</a>
    </p>
  </footer>

  <script src="js/products.js"></script>
  <script src="js/cart.js"></script>
  <script>
    function renderProducts() {
      const products = getProducts();
      const grid = document.getElementById('products-grid');

      if (products.length === 0) {
        grid.innerHTML = `
          <div class="cart-empty" style="grid-column: 1 / -1;">
            <h2>עדיין אין מוצרים</h2>
            <p>היכנס לדף המנהל והוסף מוצרים.</p>
          </div>`;
        return;
      }

      grid.innerHTML = products.map(p => `
        <div class="product-card">
          <img src="${p.image}" alt="${p.name}" class="product-image" loading="lazy"
               onerror="this.src='https://placehold.co/400x400/e5e7eb/9ca3af?text=תמונה'">
          <div class="product-body">
            <div class="product-category">${p.category || 'כללי'}</div>
            <h3 class="product-name">${p.name}</h3>
            <p class="product-desc">${p.description}</p>
            <div class="product-footer">
              <div class="product-price">${p.price} ₪</div>
              <button class="btn btn-primary btn-sm" onclick="addToCart(${p.id})">
                + הוסף לסל
              </button>
            </div>
          </div>
        </div>
      `).join('');
    }

    document.addEventListener('DOMContentLoaded', renderProducts);
  </script>
</body>
</html>
