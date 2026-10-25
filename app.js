const WHATSAPP_NUMBER = '212706828446';
const products = [
  {id:'focus', name:'FOCUS — Complément pour la concentration', ar:'FOCUS — مكمل غذائي للتركيز', cat:'supplements', price:199, desc:'Complément alimentaire · 60 capsules', descAr:'مكمل غذائي · 60 كبسولة', image:'assets/focus-bottle.webp'},
  {id:'face', name:'Soins du visage', ar:'العناية بالوجه', cat:'face', price:null, desc:'Contactez-nous pour découvrir les références disponibles.', descAr:'تواصل معنا للتعرف على المنتجات المتوفرة.'},
  {id:'hair', name:'Soins capillaires', ar:'العناية بالشعر', cat:'hair', price:null, desc:'Contactez-nous pour découvrir les références disponibles.', descAr:'تواصل معنا للتعرف على المنتجات المتوفرة.'},
  {id:'body', name:'Soins du corps & hygiène', ar:'العناية بالجسم والنظافة', cat:'body', price:null, desc:'Contactez-nous pour découvrir les références disponibles.', descAr:'تواصل معنا للتعرف على المنتجات المتوفرة.'},
  {id:'other-supplements', name:'Autres compléments', ar:'مكملات غذائية أخرى', cat:'supplements', price:null, desc:'Demandez le catalogue et les prix sur WhatsApp.', descAr:'اطلب الكتالوج والأسعار عبر واتساب.'}
];
let lang = 'fr';
const cart = {};
const $ = selector => document.querySelector(selector);
const $$ = selector => [...document.querySelectorAll(selector)];
const getText = (product, field) => lang === 'ar'
  ? (product[field === 'name' ? 'ar' : field === 'desc' ? 'descAr' : field] || product[field] || '')
  : product[field];
const money = price => price == null
  ? (lang === 'ar' ? 'السعر عند الطلب' : 'Prix sur demande')
  : `${new Intl.NumberFormat(lang === 'ar' ? 'ar-MA' : 'fr-MA').format(price)} DH`;
const categoryText = category => {
  const fr = {supplements:'Complément alimentaire', face:'Visage', hair:'Cheveux', body:'Corps & hygiène'};
  const ar = {supplements:'مكمل غذائي', face:'العناية بالوجه', hair:'العناية بالشعر', body:'العناية بالجسم'};
  return (lang === 'ar' ? ar : fr)[category] || category;
};
function render(filter = 'all') {
  const list = products.filter(product => filter === 'all' || product.cat === filter);
  $('#products').innerHTML = list.map(product => `
    <article class="product">
      <div class="product-photo">${product.image
        ? `<img src="${product.image}" alt="${getText(product, 'name')}" loading="lazy">`
        : `<div class="placeholder">${getText(product, 'name')}</div>`}</div>
      <div class="product-info">
        <span class="cat">${categoryText(product.cat)}</span>
        <h3>${getText(product, 'name')}</h3><p>${getText(product, 'desc')}</p>
        <div class="product-bottom"><span class="product-price">${money(product.price)}</span>
        <button class="add" data-add="${product.id}" type="button" aria-label="${lang === 'ar' ? 'أضف إلى السلة' : 'Ajouter au panier'}">+</button></div>
      </div>
    </article>`).join('');
}
function count() { return Object.values(cart).reduce((sum, quantity) => sum + quantity, 0); }
function toast(message) {
  const element = $('#toast'); element.textContent = message; element.classList.add('show');
  clearTimeout(toast.timer); toast.timer = setTimeout(() => element.classList.remove('show'), 2600);
}
function makeOrderMessage() {
  const items = products.filter(product => cart[product.id]);
  const greeting = lang === 'ar' ? 'السلام عليكم، أود طلب المنتجات التالية من AL BARAKA COSMETIQUE:' : 'Bonjour AL BARAKA COSMETIQUE, je souhaite commander :';
  const lines = items.map(product => `• ${getText(product, 'name')} × ${cart[product.id]} — ${money(product.price == null ? null : product.price * cart[product.id])}`);
  const note = lang === 'ar'
    ? 'يرجى تأكيد توفر المنتجات والأسعار وتكلفة التوصيل قبل تأكيد الطلب.'
    : 'Merci de confirmer la disponibilité, les prix à confirmer et les frais de livraison avant validation.';
  return [greeting, '', ...lines, '', note, 'WhatsApp : 0706828446'].join('\n');
}
function sendOrder() {
  if (!count()) {
    toast(lang === 'ar' ? 'أضف منتجًا واحدًا على الأقل أولاً.' : 'Ajoutez au moins un produit au panier.');
    $('#shop').scrollIntoView({behavior: 'smooth'});
    return;
  }
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(makeOrderMessage())}`;
  window.open(url, '_blank', 'noopener,noreferrer');
}
document.addEventListener('click', event => {
  const orderButton = event.target.closest('[data-order]');
  if (orderButton) { event.preventDefault(); sendOrder(); return; }
  const addButton = event.target.closest('[data-add]');
  if (!addButton) return;
  const product = products.find(item => item.id === addButton.dataset.add);
  if (!product) return;
  cart[product.id] = (cart[product.id] || 0) + 1;
  $('#count').textContent = count();
  toast(lang === 'ar' ? 'تمت إضافة المنتج إلى السلة' : 'Produit ajouté au panier');
});
$$('.filter').forEach(button => button.addEventListener('click', () => {
  $$('.filter').forEach(item => item.classList.remove('active'));
  button.classList.add('active'); render(button.dataset.filter);
}));
$('#lang').addEventListener('click', () => {
  lang = lang === 'fr' ? 'ar' : 'fr';
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  $$('[data-fr]').forEach(element => { element.innerHTML = element.dataset[lang] || element.dataset.fr; });
  $('#lang').textContent = lang === 'fr' ? 'العربية' : 'Français';
  render($('.filter.active')?.dataset.filter || 'all');
});
$('#year').textContent = new Date().getFullYear();
$('#count').textContent = count();
render();
