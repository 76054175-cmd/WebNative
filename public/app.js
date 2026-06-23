// ══════════════════════════════════════════════
//  GenesysTech — app.js
// ══════════════════════════════════════════════

const PRODUCTS = [
  {
    id: 1, emoji: '💻', name: 'MacBook Air M3', brand: 'Apple',
    subtitle: '13" · 8GB RAM · 256GB SSD',
    badge: 'badge-new', badgeText: 'Nuevo', price: 1299, oldPrice: 1499,
    desc: 'El MacBook Air M3 redefine la portabilidad con el chip M3 de Apple, ofreciendo rendimiento excepcional y autonomía impresionante en un diseño ultradelgado.',
    specs: [
      { label: 'Procesador',     value: 'Apple M3 (8 núcleos)' },
      { label: 'RAM',            value: '8 GB unificada' },
      { label: 'Almacenamiento', value: '256 GB SSD NVMe' },
      { label: 'Pantalla',       value: '13.6" Liquid Retina 2560×1664' },
      { label: 'Batería',        value: 'Hasta 18 horas' },
      { label: 'Puertos',        value: '2× USB-C Thunderbolt, MagSafe 3' },
      { label: 'Sistema',        value: 'macOS Sequoia' },
      { label: 'Peso',           value: '1.24 kg' },
    ],
  },
  {
    id: 2, emoji: '📱', name: 'iPhone 16 Pro Max', brand: 'Apple',
    subtitle: '256GB · Titanio natural',
    badge: 'badge-hot', badgeText: 'Popular', price: 1099, oldPrice: null,
    desc: 'El iPhone 16 Pro Max lleva la fotografía computacional al siguiente nivel con el chip A18 Pro y el nuevo sistema de cámara fusionada de última generación.',
    specs: [
      { label: 'Procesador',     value: 'Apple A18 Pro' },
      { label: 'Pantalla',       value: '6.9" Super Retina XDR ProMotion' },
      { label: 'Almacenamiento', value: '256 GB' },
      { label: 'Cámara',        value: '48 MP Fusion + 48 MP UW + 12 MP 5×' },
      { label: 'Batería',        value: 'Hasta 33 horas de video' },
      { label: 'Conectividad',   value: '5G, Wi-Fi 7, USB-C 3' },
      { label: 'Material',       value: 'Titanio grado 5' },
      { label: 'Sistema',        value: 'iOS 18' },
    ],
  },
  {
    id: 3, emoji: '🖥️', name: 'Monitor LG UltraWide 34"', brand: 'LG',
    subtitle: '34" · UWQHD · 144Hz',
    badge: 'badge-sale', badgeText: 'Oferta', price: 549, oldPrice: 699,
    desc: 'Sumérgete en la acción con el panel curvo UltraWide de 34 pulgadas. Ideal para gaming competitivo y trabajo creativo de alto nivel.',
    specs: [
      { label: 'Panel',          value: 'IPS Nano Color curvo 1800R' },
      { label: 'Resolución',     value: '3440×1440 (UWQHD)' },
      { label: 'Refresco',       value: '144 Hz' },
      { label: 'Respuesta',      value: '1 ms GtG' },
      { label: 'HDR',            value: 'DisplayHDR 400' },
      { label: 'Puertos',        value: 'HDMI 2.1, 2× DP 1.4, 4× USB-A' },
      { label: 'Compatibilidad', value: 'AMD FreeSync Premium Pro' },
      { label: 'Dimensiones',    value: '80.9 × 52.4 cm (sin base)' },
    ],
  },
  {
    id: 4, emoji: '🎧', name: 'Sony WH-1000XM6', brand: 'Sony',
    subtitle: 'ANC Pro · Bluetooth 5.3',
    badge: 'badge-new', badgeText: 'Nuevo', price: 379, oldPrice: null,
    desc: 'La evolución definitiva de los auriculares con cancelación de ruido líder en la industria. Audio de estudio en cualquier lugar del mundo.',
    specs: [
      { label: 'ANC',        value: 'Cancelación activa HD (8 micrófonos)' },
      { label: 'Bluetooth',  value: '5.3 · Multipoint (3 dispositivos)' },
      { label: 'Batería',    value: '40 horas con ANC activado' },
      { label: 'Carga',      value: 'USB-C · 3 min → 3 h de uso' },
      { label: 'Códecs',     value: 'LDAC, AAC, SBC' },
      { label: 'Frecuencia', value: '4 Hz – 40 kHz' },
      { label: 'Peso',       value: '254 g' },
      { label: 'Extras',     value: 'Modo Ambient, AI para llamadas' },
    ],
  },
  {
    id: 5, emoji: '⌚', name: 'Apple Watch Ultra 3', brand: 'Apple',
    subtitle: 'Titanio · GPS + Cellular',
    badge: 'badge-sale', badgeText: 'Oferta', price: 799, oldPrice: 899,
    desc: 'Diseñado para exploradores y atletas de élite. El smartwatch más resistente de Apple con batería extendida y GPS de doble frecuencia.',
    specs: [
      { label: 'Caja',        value: '49 mm titanio aeroespacial' },
      { label: 'Pantalla',    value: 'LTPO OLED 2000 nits' },
      { label: 'Chip',        value: 'Apple S9 SiP doble núcleo' },
      { label: 'Batería',     value: 'Hasta 36 h / 72 h modo ahorro' },
      { label: 'Resistencia', value: '100 m · MIL-STD-810H' },
      { label: 'GPS',         value: 'L1/L5 · Galileo · BeiDou · GLONASS' },
      { label: 'Sensores',    value: 'Temperatura, ECG, SpO₂, profundidad' },
      { label: 'Conectiv.',   value: 'LTE, Wi-Fi 6, Bluetooth 5.3, UWB' },
    ],
  },
  {
    id: 6, emoji: '🎮', name: 'Xbox Series X 2TB', brand: 'Microsoft',
    subtitle: '2TB NVMe · 4K 120fps',
    badge: 'badge-hot', badgeText: 'Popular', price: 599, oldPrice: null,
    desc: 'La consola más potente de Xbox con 2TB de almacenamiento y acceso a la mayor librería de juegos con Game Pass Ultimate.',
    specs: [
      { label: 'CPU',         value: 'AMD Zen 2 · 8 núcleos · 3.8 GHz' },
      { label: 'GPU',         value: 'AMD RDNA 2 · 12 TFLOPS' },
      { label: 'RAM',         value: '16 GB GDDR6' },
      { label: 'Almac.',      value: '2 TB NVMe SSD Custom' },
      { label: 'Resolución',  value: '4K / 120 fps · Ray Tracing' },
      { label: 'Retrocompat.', value: 'Xbox · Xbox 360 · Xbox One' },
      { label: 'Conectividad', value: 'HDMI 2.1, Wi-Fi 6E, Bluetooth 5.1' },
      { label: 'Incluye',     value: 'Game Pass Ultimate 1 mes' },
    ],
  },
  {
    id: 7, emoji: '📷', name: 'Sony Alpha A7 V', brand: 'Sony',
    subtitle: '61MP · Full Frame',
    badge: 'badge-new', badgeText: 'Nuevo', price: 3299, oldPrice: null,
    desc: 'La cámara mirrorless full-frame de referencia para fotógrafos y videógrafos profesionales que exigen máxima calidad de imagen.',
    specs: [
      { label: 'Sensor',       value: '61 MP BSI CMOS Full Frame' },
      { label: 'Procesador',   value: 'BIONZ XR + AI Processing Unit' },
      { label: 'ISO',          value: '100 – 102.400' },
      { label: 'Autoenfoque',  value: 'AI · 759 puntos fase · Seguimiento RT' },
      { label: 'Video',        value: '8K RAW / 4K 120fps' },
      { label: 'Estabiliz.',   value: 'IBIS 8 pasos EV' },
      { label: 'Pantalla',     value: 'LCD tilt 3" táctil' },
      { label: 'Conectividad', value: 'Wi-Fi 6, Bluetooth 5.0, USB-C 3.2' },
    ],
  },
  {
    id: 8, emoji: '🖱️', name: 'Logitech MX Master 4', brand: 'Logitech',
    subtitle: 'Wireless · Ergonómico',
    badge: 'badge-sale', badgeText: 'Oferta', price: 99, oldPrice: 129,
    desc: 'El ratón inalámbrico definitivo para profesionales. Ergonomía todo el día con scroll electromagnético MagSpeed y soporte multidevice.',
    specs: [
      { label: 'Sensor',        value: 'Darkfield 8000 DPI' },
      { label: 'Conectividad',  value: 'Bolt USB + Bluetooth' },
      { label: 'Batería',       value: '70 días · Carga USB-C' },
      { label: 'Botones',       value: '7 programables' },
      { label: 'Scroll',        value: 'MagSpeed electromagnético (1000 rpm)' },
      { label: 'Compatib.',     value: 'Windows, macOS, Linux, iPadOS' },
      { label: 'Multidevice',   value: 'Hasta 3 dispositivos (Easy-Switch)' },
      { label: 'Software',      value: 'Logi Options+' },
    ],
  },
];

/* ── ESTADO ── */
let cart = [];

/* ── UTILIDADES ── */
const fmt        = (n) => '$' + Number(n).toLocaleString('en-US');
const cartCount  = ()  => cart.reduce((s, i) => s + i.qty, 0);
const cartTotal  = ()  => cart.reduce((s, i) => s + i.price * i.qty, 0);

function updateCartBtn() {
  const btn = document.querySelector('.cart-btn');
  if (btn) btn.textContent = `🛒 Carrito (${cartCount()})`;
}

function addToCart(product) {
  const existing = cart.find(i => i.id === product.id);
  if (existing) existing.qty++;
  else cart.push({ ...product, qty: 1 });
  updateCartBtn();
  showToast(`✓ ${product.name} agregado al carrito`);
}

function showToast(msg) {
  const t = document.createElement('div');
  t.className = 'gt-toast';
  t.textContent = msg;
  document.body.appendChild(t);
  requestAnimationFrame(() => t.classList.add('gt-toast--show'));
  setTimeout(() => {
    t.classList.remove('gt-toast--show');
    setTimeout(() => t.remove(), 400);
  }, 2600);
}

function removeOverlay() {
  document.querySelectorAll('.gt-overlay').forEach(el => el.remove());
}

/* ── PANTALLA: DETALLE DE PRODUCTO ── */
function showProductDetail(product) {
  removeOverlay();

  const ol = document.createElement('div');
  ol.className = 'gt-overlay';
  ol.innerHTML = `
    <div class="gt-panel gt-pd-panel">
      <button class="gt-back" id="gt-back-store">← Volver a la tienda</button>
      <div class="gt-pd-grid">
        <div class="gt-pd-visual">
          <div class="gt-pd-emoji">${product.emoji}</div>
          <span class="product-badge ${product.badge}" style="font-size:12px;padding:4px 14px;">${product.badgeText}</span>
        </div>
        <div class="gt-pd-info">
          <div class="gt-pd-brand">${product.brand}</div>
          <h2 class="gt-pd-name">${product.name}</h2>
          <p class="gt-pd-sub">${product.subtitle}</p>
          <p class="gt-pd-desc">${product.desc}</p>
          <div class="gt-spec-table">
            ${product.specs.map(s => `
              <div class="gt-spec-row">
                <span class="gt-spec-label">${s.label}</span>
                <span class="gt-spec-value">${s.value}</span>
              </div>`).join('')}
          </div>
          <div class="gt-pd-footer">
            <div class="gt-pd-prices">
              <span class="gt-pd-price">${fmt(product.price)}</span>
              ${product.oldPrice ? `<span class="gt-pd-old">${fmt(product.oldPrice)}</span>` : ''}
            </div>
            <button class="gt-add-big" id="gt-add-product">+ Agregar al carrito</button>
          </div>
        </div>
      </div>
    </div>`;

  document.body.appendChild(ol);
  requestAnimationFrame(() => ol.classList.add('gt-overlay--show'));
  ol.querySelector('#gt-back-store').addEventListener('click', removeOverlay);
  ol.querySelector('#gt-add-product').addEventListener('click', () => addToCart(product));
}

/* ── PANTALLA: CARRITO / CHECKOUT ── */
function showCart() {
  removeOverlay();

  const itemsHTML = cart.length === 0
    ? `<div class="gt-cart-empty">🛒<br><br>Tu carrito está vacío.<br>¡Agrega productos para continuar!</div>`
    : cart.map(i => `
        <div class="gt-cart-item">
          <span class="gt-ci-emoji">${i.emoji}</span>
          <div class="gt-ci-info">
            <div class="gt-ci-name">${i.name}</div>
            <div class="gt-ci-brand">${i.brand} · Cantidad: ${i.qty}</div>
          </div>
          <div class="gt-ci-price">${fmt(i.price * i.qty)}</div>
        </div>`).join('');

  const formHTML = cart.length > 0 ? `
    <div class="gt-cart-total">
      <span>Total del pedido</span>
      <span class="gt-total-num">${fmt(cartTotal())}</span>
    </div>
    <div class="gt-form">
      <h3 class="gt-form-title">Datos de envío y pago</h3>
      <div class="gt-form-grid">
        <div class="gt-field">
          <label>Nombre completo *</label>
          <input type="text" id="f-name" placeholder="Ej: María García">
        </div>
        <div class="gt-field">
          <label>Correo electrónico *</label>
          <input type="email" id="f-email" placeholder="correo@ejemplo.com">
        </div>
        <div class="gt-field">
          <label>Teléfono</label>
          <input type="tel" id="f-tel" placeholder="+51 999 000 000">
        </div>
        <div class="gt-field">
          <label>Dirección de envío *</label>
          <input type="text" id="f-addr" placeholder="Calle, número, piso…">
        </div>
        <div class="gt-field">
          <label>Ciudad</label>
          <input type="text" id="f-city" placeholder="Ciudad">
        </div>
        <div class="gt-field">
          <label>Método de pago *</label>
          <select id="f-pay">
            <option value="">Seleccionar…</option>
            <option>Tarjeta de crédito</option>
            <option>Tarjeta de débito</option>
            <option>Transferencia bancaria</option>
            <option>PayPal</option>
            <option>Yape / Plin</option>
          </select>
        </div>
      </div>
      <button class="gt-pay-btn" id="gt-pay-btn">💳 Pagar ${fmt(cartTotal())}</button>
    </div>` : '';

  const ol = document.createElement('div');
  ol.className = 'gt-overlay';
  ol.innerHTML = `
    <div class="gt-panel gt-cart-panel">
      <button class="gt-back" id="gt-back-cart">← Seguir comprando</button>
      <h2 class="gt-cart-title">🛒 Mi carrito</h2>
      <div class="gt-cart-items">${itemsHTML}</div>
      ${formHTML}
    </div>`;

  document.body.appendChild(ol);
  requestAnimationFrame(() => ol.classList.add('gt-overlay--show'));
  ol.querySelector('#gt-back-cart').addEventListener('click', removeOverlay);
  if (cart.length > 0) {
    ol.querySelector('#gt-pay-btn').addEventListener('click', handlePay);
  }
}

function handlePay() {
  const name  = document.getElementById('f-name')?.value.trim();
  const email = document.getElementById('f-email')?.value.trim();
  const addr  = document.getElementById('f-addr')?.value.trim();
  const pay   = document.getElementById('f-pay')?.value;
  if (!name || !email || !addr || !pay) {
    showToast('⚠️ Completa todos los campos obligatorios (*)');
    return;
  }
  showSuccess(name);
}

/* ── PANTALLA: COMPRA EXITOSA ── */
function showSuccess(name) {
  removeOverlay();
  const orderId = 'GT-' + Date.now().toString().slice(-7);

  const ol = document.createElement('div');
  ol.className = 'gt-overlay gt-success-overlay';
  ol.innerHTML = `
    <div class="gt-success-box">
      <div class="gt-success-check">✓</div>
      <h2 class="gt-success-title">¡Compra exitosa!</h2>
      <p class="gt-success-msg">Gracias, <strong>${name}</strong>.<br>Tu pedido ha sido confirmado correctamente.</p>
      <div class="gt-order-id">Orden # ${orderId}</div>
      <p class="gt-success-sub">Recibirás un correo de confirmación en breve.<br>El envío se realizará en 24–48 horas hábiles.</p>
      <button class="gt-success-btn" id="gt-go-home">Volver a la tienda</button>
    </div>`;

  document.body.appendChild(ol);
  requestAnimationFrame(() => ol.classList.add('gt-overlay--show'));
  ol.querySelector('#gt-go-home').addEventListener('click', () => {
    cart = [];
    updateCartBtn();
    removeOverlay();
  });
}

/* ── INIT ── */
document.addEventListener('DOMContentLoaded', () => {
  updateCartBtn();

  document.querySelectorAll('.product-card').forEach((card, i) => {
    card.addEventListener('click', (e) => {
      if (e.target.classList.contains('add-btn')) return;
      showProductDetail(PRODUCTS[i]);
    });
  });

  document.querySelectorAll('.add-btn').forEach((btn, i) => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      addToCart(PRODUCTS[i]);
    });
  });

  document.querySelector('.cart-btn')?.addEventListener('click', showCart);
});

// Registrar service worker para PWA
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then(reg => {
        console.log('Service Worker registrado con scope:', reg.scope);
        if (reg.waiting) showToast('Nueva versión disponible — recarga la página');
        reg.addEventListener('updatefound', () => {
          const newSW = reg.installing;
          newSW?.addEventListener('statechange', () => {
            if (newSW.state === 'installed' && navigator.serviceWorker.controller) {
              showToast('Nueva versión instalada — recarga para actualizar');
            }
          });
        });
      })
      .catch(err => console.warn('Error registrando Service Worker:', err));
  });
}