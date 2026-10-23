/* NOVA CARE — boutique statique. Remplacez le numéro WhatsApp et les produits ci-dessous avant la publication. */
const CONFIG = {
  // Format international sans + ni espaces. Exemple Maroc : 2126XXXXXXXX
  WHATSAPP_NUMBER: "2126XXXXXXXX",
  CURRENCY: "MAD",
  STORE_NAME: "NOVA CARE"
};

const PRODUCTS = [
  {id:"c-vita", name:"Vitamine C — 60 gélules", nameAR:"فيتامين C — 60 كبسولة", category:"supplements", price:129, description:"Complément alimentaire · Format 60 gélules", descriptionAR:"مكمل غذائي · عبوة من 60 كبسولة", visual:"capsules", tone:"tone-sage", badge:"Sélection"},
  {id:"collagene", name:"Collagène Complexe", nameAR:"كولاجين كومبليكس", category:"supplements", price:159, description:"Complément alimentaire · Référence à confirmer", descriptionAR:"مكمل غذائي · المرجو تأكيد المرجع", visual:"bottle", tone:"tone-yellow", badge:"Populaire"},
  {id:"probiotiques", name:"Probiotiques Care", nameAR:"بروبيوتيك كير", category:"supplements", price:139, description:"Complément alimentaire · Format 60 gélules", descriptionAR:"مكمل غذائي · عبوة من 60 كبسولة", visual:"capsules", tone:"tone-blue", badge:""},
  {id:"zincora", name:"Zincora — 60 gélules", nameAR:"زينكورا — 60 كبسولة", category:"supplements", price:99, description:"Complément alimentaire · Référence à confirmer", descriptionAR:"مكمل غذائي · المرجو تأكيد المرجع", visual:"bottle", tone:"tone-lilac", badge:""},
  {id:"niacinamide", name:"Sérum à la niacinamide", nameAR:"سيروم النياسيناميد", category:"face", price:119, description:"Soin visage · Format 30 ml (exemple)", descriptionAR:"عناية بالوجه · 30 مل (مثال)", visual:"dropper", tone:"tone-pink", badge:"Favori"},
  {id:"gel-visage", name:"Gel nettoyant visage", nameAR:"جل منظف للوجه", category:"face", price:89, description:"Nettoyant visage · Format 120 ml (exemple)", descriptionAR:"منظف للوجه · 120 مل (مثال)", visual:"tube", tone:"tone-yellow", badge:""},
  {id:"shampooing", name:"Shampoing à la biotine", nameAR:"شامبو بالبيوتين", category:"hair", price:99, description:"Soin capillaire · Format 200 ml (exemple)", descriptionAR:"عناية بالشعر · 200 مل (مثال)", visual:"shampoo", tone:"tone-sage", badge:"Nouveau"},
  {id:"creme-visage", name:"Crème hydratante visage", nameAR:"كريم مرطب للوجه", category:"face", price:109, description:"Soin quotidien · Format 50 ml (exemple)", descriptionAR:"عناية يومية · 50 مل (مثال)", visual:"jar", tone:"tone-pink", badge:""},
  {id:"soin-corps", name:"Soin douceur pour le corps", nameAR:"كريم لطيف للجسم", category:"body", price:95, description:"Soin corps · Format à confirmer", descriptionAR:"عناية بالجسم · الحجم يحتاج إلى تأكيد", visual:"body", tone:"tone-blue", badge:""},
  {id:"shampoing-pur", name:"Essentiel hygiène quotidienne", nameAR:"أساسيات النظافة اليومية", category:"body", price:79, description:"Hygiène & soin · Référence à confirmer", descriptionAR:"نظافة وعناية · المرجع يحتاج إلى تأكيد", visual:"tube", tone:"tone-lilac", badge:""}
];

const I18N = {
  fr: {
    announcement:"Votre routine beauté et bien-être, en toute simplicité",brandTag:"BEAUTÉ · BIEN-ÊTRE",navShop:"Boutique",navCategories:"Catégories",navStory:"Notre sélection",navFaq:"FAQ",
    heroEyebrow:"LE SOIN, AVEC INTENTION",heroTitle:'Prenez soin de vous.<br><em>À votre façon.</em>',heroText:"Une sélection de soins cosmétiques et de produits de bien-être pour accompagner vos petites habitudes du quotidien.",heroButton:"Explorer la boutique",heroSecondary:"Voir les catégories",note1:"Sélection beauté & bien-être",note2:"Commande simple par WhatsApp",artCaption:"RITUELS SIMPLES, SENSATION DE FRAÎCHEUR",heroBottom:"UNE BEAUTÉ QUI VOUS RESSEMBLE",
    benefit1Title:"Une sélection réfléchie",benefit1Text:"Des références choisies avec soin",benefit2Title:"Beauté & bien-être",benefit2Text:"Des essentiels pour vos routines",benefit3Title:"Commande facile",benefit3Text:"Finalisez votre demande sur WhatsApp",
    categoriesEyebrow:"TROUVEZ VOTRE ESSENTIEL",categoriesTitle:'Qu\'est-ce qui vous ferait <em>du bien ?</em>',categoriesText:"Explorez nos univers et trouvez les produits qui correspondent à votre routine.",catSupplements:"Compléments",catSupplementsSub:"Bien-être au quotidien",catFace:"Soins du visage",catFaceSub:"Votre rituel, votre éclat",catHair:"Cheveux",catHairSub:"Des soins à votre rythme",catBody:"Corps & hygiène",catBodySub:"Les essentiels du quotidien",
    catalogueEyebrow:"LA SÉLECTION NOVA",catalogueTitle:'Les favoris <em>du moment.</em>',showAll:"Tout voir",demoNotice:"Catalogue de démonstration : remplacez les prix, photos et références par vos produits réels avant publication.",filterAll:"Tout",filterSupplements:"Compléments",filterFace:"Visage",filterHair:"Cheveux",filterBody:"Corps & hygiène",searchPlaceholder:"Rechercher un produit...",emptyTitle:"Aucun produit trouvé",emptyText:"Essayez un autre mot-clé ou une autre catégorie.",catalogueBottom:"Une question sur un produit ? Écrivez-nous avant de commander.",contactUs:"Nous contacter",
    storyEyebrow:"NOTRE PHILOSOPHIE",storyTitle:'Les petits gestes<br>font les <em>grandes routines.</em>',storyText:"Nous croyons qu'une bonne routine commence par des choix simples. Notre boutique rassemble des références de beauté et de bien-être sélectionnées auprès de fournisseurs, pour vous aider à découvrir vos prochains essentiels.",storyValue1:"Des choix plus simples",storyValue2:"Un service humain",storyValue3:"Des informations claires",storyButton:"Découvrir la sélection",
    faqEyebrow:"BESOIN D'INFORMATIONS ?",faqTitle:'Les réponses à vos <em>questions.</em>',faqText:"Les informations essentielles pour commander en toute clarté.",faqQ1:"Comment passer une commande ?",faqA1:"Ajoutez les produits à votre panier, remplissez vos coordonnées et envoyez votre demande via WhatsApp. Nous confirmerons la disponibilité et les détails avant validation.",faqQ2:"Les produits affichés sont-ils tous disponibles ?",faqA2:"La disponibilité doit être confirmée avant chaque commande. Le catalogue de cette version est un exemple à compléter avec vos références réelles.",faqQ3:"Comment connaître le prix et les frais de livraison ?",faqA3:"Les prix affichés dans cette version sont des exemples. Remplacez-les avant la mise en ligne et confirmez les frais de livraison avec le client avant de valider sa commande.",faqQ4:"Les compléments alimentaires remplacent-ils un traitement ?",faqA4:"Non. Les compléments alimentaires ne remplacent pas une alimentation variée ni un avis médical. Lisez l'étiquette du produit et demandez conseil à un professionnel de santé en cas de doute.",
    contactEyebrow:"ON EST LÀ POUR VOUS",contactTitle:"Un doute ? Parlons-en.",contactText:"Contactez-nous pour vérifier la disponibilité d'un produit ou obtenir des informations avant votre commande.",contactButton:"Écrire sur WhatsApp",footerDesc:"Des essentiels beauté et bien-être pour vos routines, à votre rythme.",footerExplore:"Explorer",footerHelp:"Besoin d'aide ?",privacy:"Confidentialité",privacyEyebrow:"VOS INFORMATIONS",privacyTitle:"Des informations utilisées avec soin.",privacyText:"Les coordonnées saisies dans le formulaire servent à préparer votre demande de commande et sont transmises à WhatsApp lorsque vous choisissez de l’envoyer. Le panier est enregistré dans le navigateur de votre appareil. Ajoutez vos coordonnées de contact et votre politique complète de confidentialité avant la mise en ligne.",footerNote:"Prenez le temps de choisir ce qui vous convient.",backTop:"Retour en haut",rights:"Tous droits réservés.",footerDisclaimer:"Les informations produits doivent être vérifiées avant publication.",yourSelection:"VOTRE SÉLECTION",yourCart:"Votre panier",cartEmptyTitle:"Votre panier est encore vide",cartEmptyText:"Ajoutez quelques essentiels pour commencer.",continueShopping:"Continuer mes achats",subtotal:"Sous-total estimé",cartShipping:"Livraison à confirmer avant validation.",checkout:"Commander sur WhatsApp",cartSecure:"Votre commande sera envoyée via WhatsApp pour confirmation.",almostDone:"PRESQUE TERMINÉ",checkoutDetails:"Vos coordonnées",checkoutIntro:"Renseignez vos informations. Votre demande sera préparée dans WhatsApp.",formName:"Nom complet *",formPhone:"Téléphone *",formCity:"Ville *",formAddress:"Adresse de livraison",formNote:"Note (facultatif)",estimatedTotal:"Total estimé (hors livraison)",sendOrder:"Envoyer la demande",formPrivacy:"Vos informations seront utilisées uniquement pour traiter votre demande de commande.",categorySupplements:"Compléments",categoryFace:"Visage",categoryHair:"Cheveux",categoryBody:"Corps & hygiène",addToCart:"Ajouter",added:"Produit ajouté au panier",removed:"Produit retiré du panier",whatsappNotSet:"Configurez votre numéro WhatsApp dans app.js avant d'utiliser cette fonction.",emptyCartToast:"Ajoutez au moins un produit avant de commander.",orderGreeting:"Bonjour NOVA CARE, je souhaite demander une commande :",orderCustomer:"Client",orderPhone:"Téléphone",orderCity:"Ville",orderAddress:"Adresse",orderNote:"Note",orderSubtotal:"Sous-total estimé",orderDisclaimer:"Merci de confirmer la disponibilité, le prix final et les frais de livraison avant validation.",formMissing:"Veuillez remplir votre nom, téléphone et ville."
  },
  ar: {
    announcement:"روتين الجمال والعناية بصحتك، بكل بساطة",brandTag:"الجمال · العناية",navShop:"المتجر",navCategories:"الفئات",navStory:"اختياراتنا",navFaq:"الأسئلة الشائعة",
    heroEyebrow:"العناية باهتمام",heroTitle:'اعتنِ بنفسك.<br><em>على طريقتك.</em>',heroText:"مجموعة مختارة من مستحضرات التجميل ومنتجات العناية لترافق عاداتك اليومية البسيطة.",heroButton:"اكتشف المتجر",heroSecondary:"شاهد الفئات",note1:"اختيارات للجمال والعناية",note2:"طلب سهل عبر واتساب",artCaption:"طقوس بسيطة وإحساس بالانتعاش",heroBottom:"جمال يشبهك",
    benefit1Title:"اختيارات بعناية",benefit1Text:"منتجات مختارة باهتمام",benefit2Title:"الجمال والعناية",benefit2Text:"أساسيات لروتينك اليومي",benefit3Title:"طلب سهل",benefit3Text:"أكمل طلبك عبر واتساب",
    categoriesEyebrow:"اعثر على ما يناسبك",categoriesTitle:'ما الذي قد يمنحك <em>شعورًا أفضل؟</em>',categoriesText:"اكتشف فئاتنا واختر المنتجات المناسبة لروتينك.",catSupplements:"مكملات غذائية",catSupplementsSub:"العناية اليومية",catFace:"العناية بالوجه",catFaceSub:"روتينك وإشراقتك",catHair:"الشعر",catHairSub:"عناية على طريقتك",catBody:"الجسم والنظافة",catBodySub:"أساسيات كل يوم",
    catalogueEyebrow:"اختيارات نوفا",catalogueTitle:'منتجات <em>مختارة لك.</em>',showAll:"عرض الكل",demoNotice:"كتالوج تجريبي: غيّر الأسعار والصور والمراجع إلى منتجاتك الحقيقية قبل نشر الموقع.",filterAll:"الكل",filterSupplements:"مكملات",filterFace:"الوجه",filterHair:"الشعر",filterBody:"الجسم والنظافة",searchPlaceholder:"ابحث عن منتج...",emptyTitle:"لم يتم العثور على منتجات",emptyText:"جرب كلمة أخرى أو فئة مختلفة.",catalogueBottom:"لديك سؤال حول منتج؟ تواصل معنا قبل الطلب.",contactUs:"تواصل معنا",
    storyEyebrow:"فلسفتنا",storyTitle:'الخطوات الصغيرة تصنع<br><em>روتينًا أفضل.</em>',storyText:"نؤمن بأن الروتين الجيد يبدأ باختيارات بسيطة. يجمع متجرنا منتجات للجمال والعناية من موردين مختلفين، لمساعدتك على اكتشاف أساسياتك القادمة.",storyValue1:"اختيارات أبسط",storyValue2:"خدمة إنسانية",storyValue3:"معلومات واضحة",storyButton:"اكتشف المنتجات",
    faqEyebrow:"تحتاج إلى معلومات؟",faqTitle:'أجوبة على <em>أسئلتك.</em>',faqText:"المعلومات الأساسية لإتمام طلبك بوضوح.",faqQ1:"كيف يمكنني تقديم طلب؟",faqA1:"أضف المنتجات إلى السلة، أدخل معلوماتك، ثم أرسل الطلب عبر واتساب. سنؤكد توفر المنتجات والتفاصيل قبل التأكيد النهائي.",faqQ2:"هل كل المنتجات المعروضة متوفرة؟",faqA2:"يجب التأكد من توفر كل منتج قبل الطلب. هذا الكتالوج تجريبي ويجب استبداله بمراجعك الحقيقية.",faqQ3:"كيف أعرف السعر وتكلفة التوصيل؟",faqA3:"الأسعار المعروضة هنا أمثلة فقط. غيّرها قبل النشر، وأكد تكلفة التوصيل مع العميل قبل تثبيت الطلب.",faqQ4:"هل المكملات الغذائية بديل للعلاج؟",faqA4:"لا. المكملات الغذائية لا تعوض النظام الغذائي المتنوع أو الاستشارة الطبية. اقرأ الملصق واستشر مختصًا صحيًا عند الحاجة.",
    contactEyebrow:"نحن هنا لمساعدتك",contactTitle:"لديك سؤال؟ لنتحدث.",contactText:"تواصل معنا للتأكد من توفر منتج أو لمعرفة المعلومات قبل الطلب.",contactButton:"راسلنا على واتساب",footerDesc:"أساسيات الجمال والعناية لروتينك اليومي، على طريقتك.",footerExplore:"اكتشف",footerHelp:"تحتاج إلى مساعدة؟",privacy:"الخصوصية",privacyEyebrow:"معلوماتك",privacyTitle:"نتعامل مع معلوماتك بعناية.",privacyText:"تُستخدم بيانات التواصل التي تدخلها في النموذج لإعداد طلبك، وتُرسل إلى واتساب عندما تختار الإرسال. يتم حفظ السلة في متصفح جهازك. أضف بيانات التواصل وسياسة الخصوصية الكاملة قبل نشر الموقع.",footerNote:"خذ وقتك لاختيار ما يناسبك.",backTop:"العودة للأعلى",rights:"جميع الحقوق محفوظة.",footerDisclaimer:"يرجى التحقق من معلومات المنتجات قبل النشر.",yourSelection:"اختياراتك",yourCart:"سلة التسوق",cartEmptyTitle:"سلتك فارغة حاليًا",cartEmptyText:"أضف بعض المنتجات للبدء.",continueShopping:"مواصلة التسوق",subtotal:"المجموع التقديري",cartShipping:"سيتم تأكيد تكلفة التوصيل قبل تثبيت الطلب.",checkout:"اطلب عبر واتساب",cartSecure:"سيتم إرسال طلبك عبر واتساب للتأكيد.",almostDone:"بقيت خطوة واحدة",checkoutDetails:"معلوماتك",checkoutIntro:"أدخل معلوماتك وسنجهز الطلب لإرساله عبر واتساب.",formName:"الاسم الكامل *",formPhone:"رقم الهاتف *",formCity:"المدينة *",formAddress:"عنوان التوصيل",formNote:"ملاحظة (اختياري)",estimatedTotal:"المجموع التقديري دون التوصيل",sendOrder:"إرسال الطلب",formPrivacy:"ستُستخدم معلوماتك فقط لمعالجة طلبك.",categorySupplements:"مكملات غذائية",categoryFace:"العناية بالوجه",categoryHair:"الشعر",categoryBody:"الجسم والنظافة",addToCart:"أضف",added:"تمت إضافة المنتج إلى السلة",removed:"تم حذف المنتج من السلة",whatsappNotSet:"يرجى إعداد رقم واتساب في ملف app.js قبل استخدام هذه الخاصية.",emptyCartToast:"أضف منتجًا واحدًا على الأقل قبل الطلب.",orderGreeting:"مرحبًا NOVA CARE، أود تقديم طلب:",orderCustomer:"العميل",orderPhone:"الهاتف",orderCity:"المدينة",orderAddress:"العنوان",orderNote:"ملاحظة",orderSubtotal:"المجموع التقديري",orderDisclaimer:"يرجى تأكيد التوفر والسعر النهائي وتكلفة التوصيل قبل تثبيت الطلب.",formMissing:"يرجى إدخال الاسم ورقم الهاتف والمدينة."
  }
};

let currentLanguage = "fr";
let activeFilter = "all";
let cart = loadCart();
const $ = (selector, root=document) => root.querySelector(selector);
const $$ = (selector, root=document) => [...root.querySelectorAll(selector)];

function loadCart(){
  try { const saved = JSON.parse(localStorage.getItem("novaCareCart") || "[]"); return Array.isArray(saved) ? saved.filter(item => PRODUCTS.some(p => p.id === item.id) && Number(item.qty) > 0).map(item=>({id:item.id,qty:Math.min(99,Math.floor(Number(item.qty)))})) : []; }
  catch { return []; }
}
function saveCart(){ try { localStorage.setItem("novaCareCart", JSON.stringify(cart)); } catch {} }
function t(key){ return I18N[currentLanguage][key] || I18N.fr[key] || key; }
function money(value){ return `${new Intl.NumberFormat(currentLanguage === "ar" ? "ar-MA" : "fr-MA", {maximumFractionDigits:0}).format(value)} ${CONFIG.CURRENCY}`; }
function escapeHtml(value){ return String(value).replace(/[&<>"']/g, ch=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[ch])); }
function categoryLabel(category){ return t({supplements:"categorySupplements",face:"categoryFace",hair:"categoryHair",body:"categoryBody"}[category]); }
function productName(product){ return currentLanguage === "ar" ? product.nameAR : product.name; }
function productDescription(product){ return currentLanguage === "ar" ? product.descriptionAR : product.description; }
function productPack(product){ return `<div class="product-pack pack-${product.visual}" aria-hidden="true"></div>`; }
function translatePage(){
  const dict = I18N[currentLanguage];
  document.documentElement.lang = currentLanguage;
  document.documentElement.dir = currentLanguage === "ar" ? "rtl" : "ltr";
  $$('[data-i18n]').forEach(el=>{
    const value = dict[el.dataset.i18n]; if(value == null) return;
    // Keep the decorative plus sign inside each FAQ summary, while allowing markup in headings.
    if(el.matches(".faq-item summary") && el.firstChild && el.firstChild.nodeType === Node.TEXT_NODE) el.firstChild.textContent = value;
    else el.innerHTML = value;
  });
  $$('[data-i18n-placeholder]').forEach(el=>{el.placeholder = dict[el.dataset.i18nPlaceholder] || "";});
  $("#languageSwitch").textContent = currentLanguage === "fr" ? "AR" : "FR";
  $("#languageSwitch").setAttribute("aria-label", currentLanguage === "fr" ? "التبديل إلى العربية" : "Passer au français");
  renderProducts(); renderCart();
}
function getVisibleProducts(){
  const query = $("#productSearch").value.trim().toLocaleLowerCase(currentLanguage === "ar" ? "ar" : "fr");
  return PRODUCTS.filter(product=>{
    const filterMatch = activeFilter === "all" || product.category === activeFilter;
    const haystack = `${product.name} ${product.nameAR} ${product.description} ${product.descriptionAR}`.toLocaleLowerCase();
    return filterMatch && (!query || haystack.includes(query));
  });
}
function renderProducts(){
  const visible = getVisibleProducts();
  $("#productGrid").innerHTML = visible.map(product=>{
    const badge = product.badge ? `<span class="product-badge ${product.badge === "Nouveau" ? "new" : ""}">${escapeHtml(currentLanguage === "ar" ? (product.badge === "Nouveau" ? "جديد" : product.badge === "Populaire" ? "الأكثر طلبًا" : product.badge === "Favori" ? "مفضل" : "مختار") : product.badge)}</span>` : "";
    return `<article class="product-card" data-product-id="${product.id}"><div class="product-visual ${product.tone}">${badge}${productPack(product)}<button class="product-quick-add" data-add="${product.id}" type="button" aria-label="${escapeHtml(t("addToCart"))} — ${escapeHtml(productName(product))}">+</button></div><div class="product-info"><span class="product-category">${escapeHtml(categoryLabel(product.category))}</span><h3 class="product-name">${escapeHtml(productName(product))}</h3><p class="product-description">${escapeHtml(productDescription(product))}</p><div class="product-bottom"><div class="product-price">${money(product.price)}<small>${currentLanguage === "ar" ? "سعر تجريبي" : "Prix indicatif de démonstration"}</small></div><button class="product-add-text" data-add="${product.id}" type="button">${escapeHtml(t("addToCart"))} +</button></div></div></article>`;
  }).join("");
  $("#emptyState").hidden = visible.length > 0;
  $("#productGrid").hidden = visible.length === 0;
}
function getProduct(id){ return PRODUCTS.find(product=>product.id===id); }
function cartQty(){ return cart.reduce((sum,item)=>sum+item.qty,0); }
function cartTotal(){ return cart.reduce((sum,item)=>sum+(getProduct(item.id)?.price || 0)*item.qty,0); }
function addToCart(id){
  const existing = cart.find(item=>item.id===id);
  if(existing) existing.qty = Math.min(99,existing.qty+1); else cart.push({id,qty:1});
  saveCart(); renderCart(); showToast(t("added"));
}
function changeQty(id,delta){
  const item=cart.find(entry=>entry.id===id); if(!item)return;
  item.qty += delta; if(item.qty<=0) cart=cart.filter(entry=>entry.id!==id); else item.qty=Math.min(99,item.qty);
  saveCart();renderCart();
}
function removeItem(id){cart=cart.filter(item=>item.id!==id);saveCart();renderCart();showToast(t("removed"));}
function renderCart(){
  $("#cartCount").textContent = cartQty();
  $("#cartSubtotal").textContent = money(cartTotal());
  $("#checkoutTotal").textContent = money(cartTotal());
  const hasItems=cart.length>0;
  $("#cartEmpty").hidden=hasItems;
  $("#cartFooter").hidden=!hasItems;
  $("#cartItems").innerHTML=cart.map(item=>{
    const product=getProduct(item.id); if(!product)return "";
    return `<div class="cart-line"><div class="cart-thumb ${product.tone}">${productPack(product)}</div><div><h4 class="cart-product-title">${escapeHtml(productName(product))}</h4><div class="cart-product-price">${money(product.price)} / ${currentLanguage === "ar" ? "قطعة" : "unité"}</div><div class="quantity-control"><button type="button" data-qty="${product.id}" data-delta="-1" aria-label="−">−</button><span>${item.qty}</span><button type="button" data-qty="${product.id}" data-delta="1" aria-label="+">+</button></div></div><div><strong class="cart-product-price">${money(product.price*item.qty)}</strong><button type="button" class="remove-item" data-remove="${product.id}" aria-label="Retirer">×</button></div></div>`;
  }).join("");
}
function showToast(message){
  const toast=$("#toast");toast.textContent=message;toast.classList.add("visible");clearTimeout(showToast.timer);showToast.timer=setTimeout(()=>toast.classList.remove("visible"),3000);
}
function setOverlay(visible){$("#overlay").classList.toggle("visible",visible);document.body.classList.toggle("locked",visible);}
function openCart(){ $("#cartDrawer").classList.add("open");$("#cartDrawer").setAttribute("aria-hidden","false");setOverlay(true); }
function closeCart(){ $("#cartDrawer").classList.remove("open");$("#cartDrawer").setAttribute("aria-hidden","true");if(!$("#checkoutModal").classList.contains("open"))setOverlay(false); }
function openCheckout(){
  if(!cart.length){showToast(t("emptyCartToast"));return;}
  closeCart();$("#checkoutModal").classList.add("open");$("#checkoutModal").setAttribute("aria-hidden","false");setOverlay(true);setTimeout(()=>$("#checkoutModal input[name="+"name"+"]")?.focus(),120);
}
function closeCheckout(){$("#checkoutModal").classList.remove("open");$("#checkoutModal").setAttribute("aria-hidden","true");setOverlay(false);}
function getWhatsAppNumber(){return CONFIG.WHATSAPP_NUMBER.replace(/\D/g,"");}
function whatsappConfigured(){const n=getWhatsAppNumber();return n.length>=10 && !/[Xx]/.test(CONFIG.WHATSAPP_NUMBER);}
function openWhatsApp(message){
  if(!whatsappConfigured()){showToast(t("whatsappNotSet"));return false;}
  const url=`https://wa.me/${getWhatsAppNumber()}?text=${encodeURIComponent(message)}`;
  window.open(url,"_blank","noopener,noreferrer");return true;
}
function orderMessage(formData){
  const lines=[t("orderGreeting"),"",...cart.map(item=>{const p=getProduct(item.id);return `• ${productName(p)} × ${item.qty} — ${money(p.price*item.qty)}`;}),"",`${t("orderSubtotal")} : ${money(cartTotal())}`,"",`${t("orderCustomer")} : ${formData.get("name")}`,`${t("orderPhone")} : ${formData.get("phone")}`,`${t("orderCity")} : ${formData.get("city")}`];
  if(formData.get("address"))lines.push(`${t("orderAddress")} : ${formData.get("address")}`);
  if(formData.get("note"))lines.push(`${t("orderNote")} : ${formData.get("note")}`);
  lines.push("",t("orderDisclaimer"));return lines.join("\n");
}

$("#productGrid").addEventListener("click",event=>{const button=event.target.closest("[data-add]");if(button)addToCart(button.dataset.add);});
$("#cartItems").addEventListener("click",event=>{const qty=event.target.closest("[data-qty]");const remove=event.target.closest("[data-remove]");if(qty)changeQty(qty.dataset.qty,Number(qty.dataset.delta));if(remove)removeItem(remove.dataset.remove);});
$$(".filter-pill").forEach(button=>button.addEventListener("click",()=>{activeFilter=button.dataset.filter;$$(".filter-pill").forEach(btn=>btn.classList.toggle("active",btn===button));renderProducts();}));
$$(".category-card").forEach(button=>button.addEventListener("click",()=>{activeFilter=button.dataset.category;$$(".filter-pill").forEach(btn=>btn.classList.toggle("active",btn.dataset.filter===activeFilter));$("#catalogue").scrollIntoView({behavior:"smooth"});renderProducts();}));
$("#productSearch").addEventListener("input",renderProducts);
$("#showAllLink").addEventListener("click",event=>{event.preventDefault();activeFilter="all";$("#productSearch").value="";$$(".filter-pill").forEach(btn=>btn.classList.toggle("active",btn.dataset.filter==="all"));renderProducts();});
$("#cartTrigger").addEventListener("click",openCart);$("#closeCart").addEventListener("click",closeCart);$("#continueShopping").addEventListener("click",closeCart);$("#checkoutButton").addEventListener("click",openCheckout);$("#closeCheckout").addEventListener("click",closeCheckout);
$("#overlay").addEventListener("click",()=>{closeCart();closeCheckout();});
$("#checkoutForm").addEventListener("submit",event=>{event.preventDefault();const formData=new FormData(event.currentTarget);if(!formData.get("name")||!formData.get("phone")||!formData.get("city")){showToast(t("formMissing"));return;}const opened=openWhatsApp(orderMessage(formData));if(opened)closeCheckout();});
$("#contactWhatsApp").addEventListener("click",event=>{event.preventDefault();openWhatsApp(currentLanguage === "ar" ? "مرحبًا، أود الاستفسار عن أحد المنتجات." : "Bonjour, je souhaite obtenir des informations sur un produit.");});
$("#languageSwitch").addEventListener("click",()=>{currentLanguage=currentLanguage==="fr"?"ar":"fr";translatePage();});
$("#menuToggle").addEventListener("click",()=>$(".main-nav").classList.toggle("open"));
$$(".main-nav a").forEach(a=>a.addEventListener("click",()=>$(".main-nav").classList.remove("open")));
document.addEventListener("keydown",event=>{if(event.key==="Escape"){closeCart();closeCheckout();$(".main-nav").classList.remove("open");}});
$("#year").textContent = new Date().getFullYear();
translatePage();
