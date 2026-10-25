// --- SUPABASE CONFIGURATION ---
const SUPABASE_URL = 'YOUR_SUPABASE_URL_HERE';        // ඔබේ Supabase Project URL එක මෙතැනට යොදන්න
const SUPABASE_ANON_KEY = 'YOUR_SUPABASE_ANON_KEY_HERE'; // ඔබේ Supabase Anon Key එක මෙතැනට යොදන්න

// Initialize Supabase Client if keys are provided
let _supabase = null;
if (SUPABASE_URL !== 'YOUR_SUPABASE_URL_HERE' && window.supabase) {
  _supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
}

// Default Fallback Products
const defaultProducts = [
  {
    id: "1",
    code: "#FC-101",
    title: "Luxury Silk Dress (China Import)",
    category: "Clothes",
    price: 3850,
    image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=600&q=80",
    desc: "High quality soft silk material dress with elegant design."
  },
  {
    id: "2",
    code: "#FC-102",
    title: "Gluta Whitening Day Cream",
    category: "Creams",
    price: 1950,
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600&q=80",
    desc: "Original whitening and moisturizer cream imported directly from Guangzhou."
  },
  {
    id: "3",
    code: "#FC-103",
    title: "Smart RGB LED Desk Lamp",
    category: "Items",
    price: 2450,
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=600&q=80",
    desc: "Rechargeable modern minimalist study table lamp with multiple color modes."
  }
];

let products = JSON.parse(localStorage.getItem('francy_products')) || defaultProducts;
let selectedCategory = 'All';
let currentSelectedItem = null;
const whatsappNumber = "94770000000"; // ඔබේ WhatsApp දුරකථන අංකය මෙතැනට දාන්න (e.g., 94771234567)

// Initialize Application
document.addEventListener("DOMContentLoaded", async () => {
  if (_supabase) {
    await fetchProductsFromSupabase();
  } else {
    renderProducts();
  }
  lucide.createIcons();
});

// Fetch Products from Supabase
async function fetchProductsFromSupabase() {
  try {
    const { data, error } = await _supabase
      .from('products')
      .select('*')
      .order('id', { ascending: false });

    if (error) throw error;

    if (data && data.length > 0) {
      products = data;
    }
    renderProducts();
  } catch (err) {
    console.error("Supabase fetch error, using local data:", err.message);
    renderProducts();
  }
}

// Render Product Grid
function renderProducts() {
  const container = document.getElementById('productGrid');
  const searchVal = document.getElementById('searchInput')?.value.toLowerCase() || '';

  const filtered = products.filter(p => {
    const matchesCategory = selectedCategory === 'All' || p.category === selectedCategory;
    const matchesSearch = p.title.toLowerCase().includes(searchVal) || p.code.toLowerCase().includes(searchVal);
    return matchesCategory && matchesSearch;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="col-span-full text-center py-12 text-slate-500">
        <i data-lucide="package-x" class="w-12 h-12 mx-auto mb-2 opacity-50"></i>
        <p>කිසිදු භාණ්ඩයක් හමු වූයේ නැත.</p>
      </div>`;
    lucide.createIcons();
    return;
  }

  container.innerHTML = filtered.map(item => `
    <div class="product-card bg-slate-800/80 border border-slate-700/80 rounded-2xl overflow-hidden flex flex-col justify-between">
      <div class="relative group overflow-hidden">
        <img src="${item.image}" alt="${item.title}" class="w-full h-56 object-cover group-hover:scale-105 transition duration-500" loading="lazy">
        <span class="absolute top-3 left-3 bg-slate-900/90 text-amber-400 font-mono text-xs px-2.5 py-1 rounded-full border border-slate-700 font-bold">
          ${item.code}
        </span>
        <span class="absolute top-3 right-3 bg-slate-900/90 text-slate-300 text-xs px-2.5 py-1 rounded-full border border-slate-700">
          ${item.category}
        </span>
      </div>

      <div class="p-5 flex-1 flex flex-col justify-between">
        <div>
          <h3 class="text-base font-bold text-white mb-1 line-clamp-1">${item.title}</h3>
          <p class="text-xs text-slate-400 mb-4 line-clamp-2">${item.desc}</p>
        </div>

        <div>
          <div class="flex items-baseline justify-between mb-4">
            <span class="text-xs text-slate-400">මිල:</span>
            <span class="text-lg font-extrabold text-amber-400 font-mono">Rs. ${Number(item.price).toLocaleString()}</span>
          </div>

          <button onclick="openBuyModal('${item.id}')" class="w-full bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white text-sm font-bold py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 transition shadow-lg shadow-emerald-950/40">
            <i data-lucide="shopping-cart" class="w-4 h-4"></i>
            <span>මිලදී ගන්න (Order Now)</span>
          </button>
        </div>
      </div>
    </div>
  `).join('');

  lucide.createIcons();
}

// Category Filter
function filterCategory(cat) {
  selectedCategory = cat;
  document.querySelectorAll('.category-btn').forEach(btn => {
    btn.classList.toggle('active', btn.innerText.includes(cat) || (cat === 'All' && btn.innerText.includes('සියල්ල')));
  });
  renderProducts();
}

// Search Filter
function filterProducts() {
  renderProducts();
}

// Open Buy Modal
function openBuyModal(productId) {
  currentSelectedItem = products.find(p => p.id == productId);
  if (!currentSelectedItem) return;

  const modalDetails = document.getElementById('modalItemDetails');
  modalDetails.innerHTML = `
    <img src="${currentSelectedItem.image}" class="w-14 h-14 object-cover rounded-xl border border-slate-700">
    <div>
      <h4 class="text-sm font-bold text-white">${currentSelectedItem.title}</h4>
      <div class="flex items-center gap-2 mt-0.5">
        <span class="text-xs text-amber-400 font-mono font-bold">${currentSelectedItem.code}</span>
        <span class="text-xs text-slate-400">• Rs. ${Number(currentSelectedItem.price).toLocaleString()}</span>
      </div>
    </div>
  `;

  document.getElementById('buyModal').classList.remove('hidden');
  document.getElementById('buyModal').classList.add('flex');
}

function closeBuyModal() {
  document.getElementById('buyModal').classList.add('hidden');
  document.getElementById('buyModal').classList.remove('flex');
}

// Submit Order to WhatsApp
function sendWhatsAppOrder(e) {
  e.preventDefault();
  if (!currentSelectedItem) return;

  const name = document.getElementById('buyerName').value.trim();
  const phone = document.getElementById('buyerPhone').value.trim();
  const address = document.getElementById('buyerAddress').value.trim();
  const qty = document.getElementById('buyerQty').value;
  const totalPrice = currentSelectedItem.price * parseInt(qty);

  const message = 
`🛍️ *New Order - Francy China Shop*
----------------------------------
📌 *Item Code:* ${currentSelectedItem.code}
📦 *Product:* ${currentSelectedItem.title}
🏷️ *Category:* ${currentSelectedItem.category}
🔢 *Quantity:* ${qty}
💰 *Total Price:* Rs. ${totalPrice.toLocaleString()}

👤 *Buyer Details:*
• Name: ${name}
• Phone: ${phone}
• Address: ${address}`;

  const encodedMessage = encodeURIComponent(message);
  window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
  closeBuyModal();
}

// Admin Password Modal Logic
function openAdminAuthModal() {
  document.getElementById('adminAuthModal').classList.remove('hidden');
  document.getElementById('adminAuthModal').classList.add('flex');
}

function closeAdminAuthModal() {
  document.getElementById('adminAuthModal').classList.add('hidden');
  document.getElementById('adminAuthModal').classList.remove('flex');
}

function verifyAdminPin() {
  const pin = document.getElementById('adminPinInput').value;
  if (pin === "1289") {
    closeAdminAuthModal();
    document.getElementById('adminPinInput').value = '';
    openAdminPanel();
  } else {
    alert("වැරදි PIN අංකයකි! නැවත උත්සාහ කරන්න.");
  }
}

// Admin Panel Logic
function openAdminPanel() {
  renderAdminProducts();
  document.getElementById('adminPanel').classList.remove('hidden');
}

function closeAdminPanel() {
  document.getElementById('adminPanel').classList.add('hidden');
}

// Add New Product (Supabase or LocalStorage)
async function handleAddNewProduct(e) {
  e.preventDefault();
  
  const newProduct = {
    id: Date.now().toString(),
    code: document.getElementById('newCode').value.trim(),
    title: document.getElementById('newTitle').value.trim(),
    price: parseFloat(document.getElementById('newPrice').value),
    category: document.getElementById('newCategory').value,
    image: document.getElementById('newImage').value.trim(),
    desc: document.getElementById('newDesc').value.trim()
  };

  if (_supabase) {
    try {
      const { error } = await _supabase.from('products').insert([newProduct]);
      if (error) throw error;

      alert("නව භාණ්ඩය සාර්ථකව Supabase Database එකට එකතු කරන ලදී!");
      document.getElementById('addProductForm').reset();
      closeAdminPanel();
      await fetchProductsFromSupabase();
    } catch (err) {
      alert("දෝෂයක් සිදු විය: " + err.message);
    }
  } else {
    products.unshift(newProduct);
    localStorage.setItem('francy_products', JSON.stringify(products));
    renderProducts();
    alert("නව භාණ්ඩය සාර්ථකව එකතු කරන ලදී!");
    document.getElementById('addProductForm').reset();
    closeAdminPanel();
  }
}

// Delete Product (Supabase or LocalStorage)
async function deleteProduct(id) {
  if (confirm("ඔබට මෙම භාණ්ඩය ඉවත් කිරීමට අවශ්‍යද?")) {
    if (_supabase) {
      try {
        const { error } = await _supabase.from('products').delete().eq('id', id);
        if (error) throw error;

        await fetchProductsFromSupabase();
        renderAdminProducts();
        alert("භාණ්ඩය ඉවත් කරන ලදී!");
      } catch (err) {
        alert("ඉවත් කිරීමේදී දෝෂයක් සිදු විය: " + err.message);
      }
    } else {
      products = products.filter(p => p.id !== id);
      localStorage.setItem('francy_products', JSON.stringify(products));
      renderProducts();
      renderAdminProducts();
    }
  }
}

function renderAdminProducts() {
  const container = document.getElementById('adminProductList');
  container.innerHTML = products.map(item => `
    <div class="bg-slate-800 border border-slate-700 p-3 rounded-xl flex items-center justify-between gap-4">
      <div class="flex items-center gap-3">
        <img src="${item.image}" class="w-12 h-12 object-cover rounded-lg">
        <div>
          <h4 class="text-sm font-bold text-white">${item.title} <span class="text-amber-400 font-mono text-xs">(${item.code})</span></h4>
          <p class="text-xs text-slate-400">Rs. ${Number(item.price).toLocaleString()} | ${item.category}</p>
        </div>
      </div>
      <button onclick="deleteProduct('${item.id}')" class="bg-red-500/20 text-red-400 hover:bg-red-500 hover:text-white p-2 rounded-lg transition">
        <i data-lucide="trash-2" class="w-4 h-4"></i>
      </button>
    </div>
  `).join('');
  lucide.createIcons();
}
