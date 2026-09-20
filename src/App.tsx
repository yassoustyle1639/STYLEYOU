import { useEffect, useRef, useState } from "react";

const copy = {
  ar: {
    nav: ["المتجر","قصتنا","تواصل معنا"],
    announcement: "YASSOU STYLE · توصيل إلى 58 ولاية · الدفع عند الاستلام",
    micro: "تأسست · الجزائر · 2026",
    hero: "فخامة، بتوقيعك.",
    sub: "فخامتك تبدأ من اختيارك.",
    cta: "اكتشفي المجموعة",
    scroll: "مرري لاكتشاف المزيد",
    intro: "YASSOU STYLE بوتيك رقمي للنساء اللواتي يخترن أناقتهن بعناية.",
    edit: "المختارات",
    editSub: "قطع محدودة. حضور واضح. كل قطعة عندها سبب تكون هنا.",
    view: "شاهدي المجموعة",
    all: "شاهدي الكل",
    add: "أضيفي إلى السلة",
    storyText: "YASSOU STYLE هو إحساس. قطع، جمال وتفاصيل نختاروهم بعين تحب الأناقة وتؤمن أن الفخامة ماشي في كثرة الأشياء، بل في اختيار الصح.",
    services: [["01","مختارات","اختيارات مدروسة"],["02","58 ولاية","نوصلولك وين ما كنتي"],["03","الدفع عند الاستلام","ادفعي عند استلام طلبك"],["04","مساعدة","نعاونك تختاري"]],
    email: "بريدك الإلكتروني",
    join: "انضمي",
    explore: "استكشفي",
    connect: "تواصلي معنا",
    location: "الجزائر",
    rights: "© 2026 YASSOU STYLE · جميع الحقوق محفوظة",
    lang: "العربية",
    shopLabel: "المتجر",
    collection: "المجموعة المميزة",
    house: "الدار",
    notStore: "ماشي غير متجر.",
    enterWorld: "دخلي لعالم",
    signature: "توقيعك. أسلوبك.",
    exploreLabel: "استكشفي",
    connectLabel: "تواصلي",
    productNames: ["طقم أسود حريري","عطر مميز","مجموعة إشراقة الجمال","حقيبة نوار"],
    prices: ["6,900 دج","5,400 دج","7,900 دج","8,200 دج"],
    editorialNames: ["أساسيات نوار","مختارات الجمال","عطور مميزة"],
    editorialDesc: ["قطع سوداء بتفاصيل فاخرة","جمال مختار بعناية","عطور تترك أثراً"]
  },
  fr: {
    nav: ["Boutique","Notre histoire","Contact"],
    announcement: "YASSOU STYLE · LIVRAISON AUX 58 WILAYAS · PAIEMENT À LA LIVRAISON",
    micro: "ÉTABLI · ALGÉRIE · 2026",
    hero: "Le luxe, à votre image.",
    sub: "Votre élégance commence par votre choix.",
    cta: "DÉCOUVRIR LA COLLECTION",
    scroll: "DÉFILER POUR DÉCOUVRIR",
    intro: "YASSOU STYLE EST UNE BOUTIQUE DIGITALE POUR LES FEMMES QUI CHOISISSENT LEUR STYLE AVEC INTENTION.",
    edit: "LA SÉLECTION",
    editSub: "Pièces choisies. Présence affirmée. Chaque pièce a sa raison d'être ici.",
    view: "VOIR LA SÉLECTION",
    all: "VOIR TOUT",
    add: "AJOUTER AU PANIER",
    storyText: "YASSOU STYLE est une sensation. Des pièces, de la beauté et des détails choisis avec passion, parce que le luxe n'est pas dans l'accumulation, mais dans le bon choix.",
    services: [["01","SÉLECTION","Choix soigneusement sélectionnés"],["02","58 WILAYAS","Livraison partout en Algérie"],["03","À LA LIVRAISON","Payez à la réception"],["04","ASSISTANCE","Nous vous aidons à choisir"]],
    email: "VOTRE ADRESSE E-MAIL",
    join: "REJOINDRE",
    explore: "EXPLORER",
    connect: "CONTACT",
    location: "Alger, Algérie",
    rights: "© 2026 YASSOU STYLE · TOUS DROITS RÉSERVÉS",
    lang: "Français",
    shopLabel: "BOUTIQUE",
    collection: "COLLECTION SIGNATURE",
    house: "LA MAISON",
    notStore: "PAS JUSTE UNE BOUTIQUE.",
    enterWorld: "ENTREZ DANS LE",
    signature: "Votre style. Votre signature.",
    exploreLabel: "EXPLORER",
    connectLabel: "CONTACT",
    productNames: ["ENSEMBLE SOIE NOIRE","PARFUM SIGNATURE","SET BEAUTÉ GLOW","SAC NOIR"],
    prices: ["6 900 DA","5 400 DA","7 900 DA","8 200 DA"],
    editorialNames: ["NOIR ESSENTIALS","BEAUTY EDIT","SIGNATURE SCENTS"],
    editorialDesc: ["Pièces noires aux détails luxueux","Beauté choisie avec soin","Des parfums qui laissent une empreinte"]
  },
  en: {
    nav: ["Shop","Our Story","Contact"],
    announcement: "YASSOU STYLE · DELIVERY TO ALL 58 WILAYAS · CASH ON DELIVERY",
    micro: "EST. · ALGERIA · 2026",
    hero: "Luxury, redefined for you.",
    sub: "Your style. Your signature.",
    cta: "EXPLORE COLLECTION",
    scroll: "SCROLL TO DISCOVER",
    intro: "YASSOU STYLE IS A DIGITAL BOUTIQUE FOR WOMEN WHO CHOOSE THEIR STYLE WITH INTENTION.",
    edit: "THE EDIT",
    editSub: "Curated pieces. Clear presence. Every piece has a reason to be here.",
    view: "VIEW EDIT",
    all: "VIEW ALL",
    add: "ADD TO BAG",
    storyText: "YASSOU STYLE is a feeling. Pieces, beauty and details chosen with an eye for elegance, because luxury is not about having more — it is about choosing right.",
    services: [["01","CURATED","Thoughtful selections"],["02","58 WILAYAS","We deliver across Algeria"],["03","COD","Pay on delivery"],["04","ASSISTED","We help you choose"]],
    email: "YOUR EMAIL ADDRESS",
    join: "JOIN",
    explore: "EXPLORE",
    connect: "CONNECT",
    location: "Algiers, Algeria",
    rights: "© 2026 YASSOU STYLE · ALL RIGHTS RESERVED.",
    lang: "English",
    shopLabel: "SHOP",
    collection: "THE SIGNATURE COLLECTION",
    house: "THE HOUSE",
    notStore: "NOT JUST A STORE.",
    enterWorld: "ENTER THE",
    signature: "Your style. Your signature.",
    exploreLabel: "EXPLORE",
    connectLabel: "CONNECT",
    productNames: ["BLACK SILK SET","SIGNATURE PERFUME","GLOW BEAUTY SET","NOIR BAG"],
    prices: ["6,900 DA","5,400 DA","7,900 DA","8,200 DA"],
    editorialNames: ["NOIR ESSENTIALS","BEAUTY EDIT","SIGNATURE SCENTS"],
    editorialDesc: ["Black pieces with luxury details","Beauty selected with care","Scents that leave a signature"]
  }
} as const;

const images = {
  editorial: [
    "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1400&q=90",
    "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=1400&q=90",
    "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=1400&q=90"
  ],
  products: [
    { name: ["طقم أسود حريري","ENSEMBLE SOIE NOIRE","BLACK SILK SET"], price: ["6,900 دج","6 900 DA","6,900 DA"], description: ["طقم أنيق بتفاصيل فاخرة ولمسة ناعمة.","Ensemble élégant aux détails luxueux et finition raffinée.","Elegant set with luxury details and a refined finish."], photos: ["https://images.unsplash.com/photo-1618244972963-dbee1a7edc95?auto=format&fit=crop&w=1200&q=90","https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1200&q=90","https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1200&q=90"] },
    { name: ["عطر مميز","PARFUM SIGNATURE","SIGNATURE PERFUME"], price: ["5,400 دج","5 400 DA","5,400 DA"], description: ["عطر أنيق برائحة مميزة تترك أثراً.","Parfum élégant au caractère raffiné.","A refined signature scent that leaves an impression."], photos: ["https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=1200&q=90","https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=1200&q=90","https://images.unsplash.com/photo-1587017539504-67cfbddac569?auto=format&fit=crop&w=1200&q=90"] },
    { name: ["مجموعة إشراقة الجمال","SET BEAUTÉ GLOW","GLOW BEAUTY SET"], price: ["7,900 دج","7 900 DA","7,900 DA"], description: ["مجموعة جمال مختارة للعناية والإشراقة.","Une sélection beauté pensée pour le soin et l'éclat.","A curated beauty set for care and glow."], photos: ["https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1200&q=90","https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=1200&q=90","https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&fit=crop&w=1200&q=90"] },
    { name: ["حقيبة نوار","SAC NOIR","NOIR BAG"], price: ["8,200 دج","8 200 DA","8,200 DA"], description: ["حقيبة سوداء بتصميم عصري وأنيق.","Sac noir au design moderne et élégant.","A modern black bag with a refined silhouette."], photos: ["https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=1200&q=90","https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?auto=format&fit=crop&w=1200&q=90","https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=1200&q=90"] }
  ],
  story: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1600&q=90",
  hero: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=2200&q=90"
};

function App() {
  const [lang, setLang] = useState<"ar" | "fr" | "en">("ar");
  const [open, setOpen] = useState(false);
  const [cart, setCart] = useState(0);
  const [viewMode, setViewMode] = useState<1 | 2>(2);
  const [photoIndexes, setPhotoIndexes] = useState<Record<number, number>>({});
  const [selectedProduct, setSelectedProduct] = useState<number | null>(null);
  const [modalPhoto, setModalPhoto] = useState(0);
  const [search,setSearch]=useState(""); const [category,setCategory]=useState("all"); const [sort,setSort]=useState("newest");
  const [favorites,setFavorites]=useState<number[]>([]); const [cartItems,setCartItems]=useState<{id:string,qty:number}[]>([]);
  const [cartOpen,setCartOpen]=useState(false); const [quickProduct,setQuickProduct]=useState<number|null>(null); const [checkoutOpen,setCheckoutOpen]=useState(false); const [orderDone,setOrderDone]=useState(false); const [toast,setToast]=useState("");
  const [orderForm,setOrderForm]=useState({name:"",phone:"",wilaya:"",address:"",notes:""});
  const swipeStart = useRef({ x: 0, index: 0 });
  const swiping = useRef(false);
  const rtl = lang === "ar";
  const t = copy[lang];
  useEffect(() => { document.documentElement.lang = lang; document.documentElement.dir = rtl ? "rtl" : "ltr"; }, [lang, rtl]);
  const labelIndex = lang === "ar" ? 0 : lang === "fr" ? 1 : 2;
  const selected = selectedProduct === null ? null : images.products[selectedProduct];
  const filteredProducts=images.products.filter(p=>{const q=search.toLowerCase();const cat=category==="all"||(category==="fashion"&&p.name[0].includes("طقم"))||(category==="beauty"&&p.name[0].includes("الجمال"))||(category==="fragrance"&&p.name[0].includes("عطر"))||(category==="accessories"&&p.name[0].includes("حقيبة"));return cat&&(!q||p.name.some(n=>n.toLowerCase().includes(q)))}).sort((a,b)=>sort==="low"?Number(a.price[0].replace(/\\D/g,""))-Number(b.price[0].replace(/\\D/g,"")):sort==="high"?Number(b.price[0].replace(/\\D/g,""))-Number(a.price[0].replace(/\\D/g,"")):0);
  const cartCount=cartItems.reduce((n,x)=>n+x.qty,0); const cartTotal=cartItems.reduce((n,x)=>{const p=images.products.find(p=>p.name[2]===x.id);return n+(p?Number(p.price[0].replace(/\\D/g,""))*x.qty:0)},0);
  const addToCart=(id:string)=>{setCartItems(c=>{const f=c.find(x=>x.id===id);return f?c.map(x=>x.id===id?{...x,qty:x.qty+1}:x):[...x,{id,qty:1}]});setToast(t.add);window.setTimeout(()=>setToast(""),1600)};
  const changeQty=(id:string,d:number)=>setCartItems(c=>c.map(x=>x.id===id?{...x,qty:x.qty+d}:x).filter(x=>x.qty>0));
  return (
    <div className={"app " + (rtl ? "rtl" : "ltr")}>
      <div className="announcement">{t.announcement}</div>
      <header>
        <button className="hamb" onClick={() => setOpen(!open)}>☰</button>
        <nav className={open ? "open" : ""}>{t.nav.map((n,i)=><a key={n} href={["#shop","#story","#contact"][i]} onClick={()=>setOpen(false)}>{n}</a>)}</nav>
        <a className="logo" href="#">YASSOU<span>STYLE</span><small>{t.signature}</small></a>
        <div className="tools">
          <div className="language"><button>{t.lang}⌄</button><div className="languageMenu">{(["ar","fr","en"] as const).map(l=><button key={l} onClick={()=>{setLang(l);setOpen(false)}}>{l==="ar"?"العربية":l==="fr"?"Français":"English"}</button>)}</div></div>
          <button aria-label="search">⌕</button><button className="bagButton" onClick={()=>setCartOpen(true)}>BAG <b>{cartCount}</b></button>
        </div>
      </header>
      <main>
        <section className="hero"><video autoPlay muted loop playsInline poster={images.hero}><source src="https://cdn.coverr.co/videos/coverr-a-woman-in-a-black-dress-1575/1080p.mp4" type="video/mp4"/></video><div className="veil"/><div className="heroText"><div className="micro">{t.micro}</div><h1>YASSOU<br/><em>STYLE</em></h1><p>{t.hero}</p><strong>{t.sub}</strong><button className="cta" onClick={()=>document.querySelector("#shop")?.scrollIntoView({behavior:"smooth"})}>{t.cta} <span>↗</span></button></div><div className="heroSide">{t.scroll} <i>↓</i></div></section>
        <section className="intro"><div className="goldline"/><p>{t.intro}</p><div className="goldline"/></section>
        <section id="shop" className="shop">\n          <div className="shopControls"><label className="searchBox">⌕<input value={search} onChange={e=>setSearch(e.target.value)} placeholder={lang==="ar"?"ابحثي عن منتج…":lang==="fr"?"Rechercher un produit…":"Search products…"}/></label><div className="categoryPills">{["all","fashion","beauty","fragrance","accessories"].map((k,i)=><button key={k} className={category===k?"active":""} onClick={()=>setCategory(k)}>{lang==="ar"?["الكل","ملابس","جمال","عطور","أكسسوارات"][i]:["ALL","MODE","BEAUTY","FRAGRANCE","ACCESSORIES"][i]}</button>)}</div><select className="sortBox" value={sort} onChange={e=>setSort(e.target.value)}><option value="newest">{lang==="ar"?"الأحدث":"NEWEST"}</option><option value="low">{lang==="ar"?"الأقل سعراً":"PRICE ↑"}</option><option value="high">{lang==="ar"?"الأعلى سعراً":"PRICE ↓"}</option></select></div>
          <div className="shopHead"><span>01 — {t.shopLabel}</span><div><h2>{lang==="ar"?<>البضاعة<br/><i>المتاحة</i></>:lang==="fr"?<>LES ARTICLES<br/><i>DISPONIBLES</i></>:<>AVAILABLE<br/><i>PRODUCTS</i></>}</h2><div className="viewToggle"><button className={viewMode===1?"active":""} onClick={()=>setViewMode(1)}>1</button><button className={viewMode===2?"active":""} onClick={()=>setViewMode(2)}>2</button></div></div></div>
          <div className={"products products-"+viewMode}>{filteredProducts.map(p=>{const i=images.products.indexOf(p),photoIndex=photoIndexes[i]??0;return <article className="product" key={p.name[2]} onClick={()=>{if(!swiping.current){setSelectedProduct(i);setModalPhoto(photoIndex)}}}><div className="pic productSwipe" onPointerDown={e=>{swipeStart.current={x:e.clientX,index:photoIndex};swiping.current=false;e.currentTarget.setPointerCapture?.(e.pointerId)}} onPointerUp={e=>{const dx=e.clientX-swipeStart.current.x;if(Math.abs(dx)>35){const next=dx<0?(swipeStart.current.index+1)%p.photos.length:(swipeStart.current.index-1+p.photos.length)%p.photos.length;setPhotoIndexes(s=>({...s,[i]:next}));swiping.current=true;window.setTimeout(()=>{swiping.current=false},100)}}} onPointerCancel={()=>{swiping.current=false}}>
            <img key={photoIndex} className="productImageSmooth" src={p.photos[photoIndex]} alt={p.name[labelIndex]} draggable="false"/><span className="productBadge">{p.name[0].includes("عطر")?"BESTSELLER":p.name[0].includes("حقيبة")?"LIMITED":"NEW"}</span><button className="favorite" onClick={e=>{e.stopPropagation();setFavorites(f=>f.includes(i)?f.filter(x=>x!==i):[...f,i])}}>♡</button><button className="quickAdd" onClick={e=>{e.stopPropagation();addToCart(p.name[2])}}>{t.add} +</button><div className="swipeDots">{p.photos.map((_,pi)=><i key={pi} className={pi===photoIndex?"active":""}/>)}</div>
          </div><div className="pmeta"><div><small>YASSOU STYLE</small><h3>{p.name[labelIndex]}</h3><button className="quickView" onClick={e=>{e.stopPropagation();setQuickProduct(i)}}>{lang==="ar"?"عرض سريع":"QUICK VIEW"} ↗</button></div><strong>{p.price[labelIndex]}</strong></div></article>})}</div>
        </section>
        <section id="story" className="statement"><div className="statementImg"><img src={images.story} alt={t.house}/></div><div><span>02 — {t.house}</span><h2>{lang==="ar"?<>ماشي غير<br/><i>متجر.</i></>:lang==="fr"?<>PAS JUSTE<br/><i>UNE BOUTIQUE.</i></>:<>NOT JUST<br/><i>A STORE.</i></>}</h2><p>{t.storyText}</p><div className="signature">Yassou ✦</div></div></section>
        <section className="services">{t.services.map(([n,title,desc])=><div key={n}><b>{n}</b><h3>{title}</h3><p>{desc}</p></div>)}</section>
        <section id="collections" className="collections"><div className="sectionTitle"><span>02 — COLLECTIONS</span><div><h2>{lang==="ar"?"المجموعات":lang==="fr"?"COLLECTIONS":"COLLECTIONS"}<br/><i>{lang==="ar"?"اكتشفي عالم YASSOU STYLE":lang==="fr"?"DÉCOUVREZ L'UNIVERS YASSOU STYLE":"DISCOVER THE YASSOU STYLE WORLD"}</i></h2></div></div><div className="collectionGrid"><article onClick={()=>{setCategory("fashion");document.querySelector("#shop")?.scrollIntoView({behavior:"smooth"})}}><img src="https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1400&q=90" alt="NOIR"/><div><small>YASSOU STYLE</small><h3>NOIR</h3><span>↗</span></div></article><article onClick={()=>{setCategory("beauty");document.querySelector("#shop")?.scrollIntoView({behavior:"smooth"})}}><img src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=1400&q=90" alt="BEAUTY"/><div><small>YASSOU STYLE</small><h3>BEAUTY</h3><span>↗</span></div></article><article onClick={()=>{setCategory("fragrance");document.querySelector("#shop")?.scrollIntoView({behavior:"smooth"})}}><img src="https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=1400&q=90" alt="SIGNATURE"/><div><small>YASSOU STYLE</small><h3>SIGNATURE</h3><span>↗</span></div></article></div></section>
        <section className="newsletter"><div><span>04 — YASSOU STYLE</span><h2>{lang==="ar"?"خليكي قريبة.":lang==="fr"?"RESTEZ PROCHE.":"STAY CLOSE."}</h2><p>{lang==="ar"?"آخر القطع والمجموعات الجديدة توصلك قبل الجميع.":lang==="fr"?"Les nouveautés et collections avant tout le monde.":"New pieces and collections before everyone else."}</p></div><form onSubmit={e=>{e.preventDefault();setToast(lang==="ar"?"تم الاشتراك بنجاح.":lang==="fr"?"Inscription réussie.":"Subscribed successfully.");window.setTimeout(()=>setToast(""),1600)}}><input required type="email" placeholder={lang==="ar"?"بريدك الإلكتروني":lang==="fr"?"VOTRE ADRESSE E-MAIL":"YOUR EMAIL ADDRESS"}/><button>{lang==="ar"?"انضمي":lang==="fr"?"REJOINDRE":"JOIN"} ↗</button></form></section>
        <section className="social"><div className="sectionTitle"><span>05 — SOCIAL</span><h2>{lang==="ar"?"من عالم YASSOU STYLE":lang==="fr"?"L'UNIVERS YASSOU STYLE":"THE YASSOU STYLE WORLD"}</h2></div><div className="socialGrid"><a href="#"><img src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=2200&q=90" alt="YASSOU STYLE"/><span>Instagram ↗</span></a><a href="#"><img src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=1400&q=90" alt="YASSOU STYLE"/><span>Instagram ↗</span></a><a href="#"><img src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1600&q=90" alt="YASSOU STYLE"/><span>Instagram ↗</span></a><a href="#"><img src="https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=1200&q=90" alt="YASSOU STYLE"/><span>Instagram ↗</span></a></div></section>
        <section id="contact" className="contact"><span>03 — {t.connect}</span><h2>{t.enterWorld}<br/><i>YASSOU WORLD.</i></h2><div><input placeholder={t.email}/><button>{t.join} ↗</button></div></section>
      </main>
      <footer><div><a className="logo">YASSOU<span>STYLE</span></a><p>{t.signature}</p></div><div><small>{t.exploreLabel}</small><a>{t.nav[0]}</a><a>{t.nav[1]}</a><a>{t.nav[2]}</a></div><div><small>{t.connectLabel}</small><a>Instagram</a><a>TikTok</a><a>{t.location}</a></div><div className="copy">{t.rights}</div></footer>
      {selected&&<div className="productModal" role="dialog" aria-modal="true" onClick={()=>setSelectedProduct(null)}><div className="productModalInner" onClick={e=>e.stopPropagation()}><button className="modalClose" onClick={()=>setSelectedProduct(null)}>×</button><div className="modalGallery"><img src={selected.photos[modalPhoto]} alt={selected.name[labelIndex]}/><button className="galleryPrev" onClick={()=>setModalPhoto((modalPhoto-1+selected.photos.length)%selected.photos.length)}>‹</button><button className="galleryNext" onClick={()=>setModalPhoto((modalPhoto+1)%selected.photos.length)}>›</button><div className="modalDots">{selected.photos.map((_,i)=><button key={i} className={i===modalPhoto?"active":""} onClick={()=>setModalPhoto(i)}/>)}</div></div><div className="modalInfo"><small>YASSOU STYLE</small><h2>{selected.name[labelIndex]}</h2><strong>{selected.price[labelIndex]}</strong><p>{selected.description[labelIndex]}</p><button className="modalAdd" onClick={()=>{setCart(cart+1);setSelectedProduct(null)}}>{t.add}</button></div></div></div>}
      {quickProduct!==null&&<div className="quickModal" onClick={()=>setQuickProduct(null)}><div className="quickInner" onClick={e=>e.stopPropagation()}><button className="modalClose" onClick={()=>setQuickProduct(null)}>×</button><img src={images.products[quickProduct].photos[0]} alt=""/><div><small>YASSOU STYLE</small><h2>{images.products[quickProduct].name[labelIndex]}</h2><strong>{images.products[quickProduct].price[labelIndex]}</strong><p>{images.products[quickProduct].description[labelIndex]}</p><button className="modalAdd" onClick={()=>{addToCart(images.products[quickProduct].name[2]);setQuickProduct(null)}}>{t.add}</button><button className="textButton" onClick={()=>{setSelectedProduct(quickProduct);setQuickProduct(null)}}>{lang==="ar"?"التفاصيل":"DETAILS"} ↗</button></div></div></div>}
      {cartOpen&&<div className="drawerBackdrop" onClick={()=>setCartOpen(false)}><aside className="cartDrawer" onClick={e=>e.stopPropagation()}><div className="drawerHead"><h2>{lang==="ar"?"السلة":"BAG"} <span>{cartCount}</span></h2><button onClick={()=>setCartOpen(false)}>×</button></div>{cartItems.length?<><div className="cartList">{cartItems.map(x=>{const p=images.products.find(y=>y.name[2]===x.id);return p&&<div className="cartItem" key={x.id}><img src={p.photos[0]} alt=""/><div><h3>{p.name[labelIndex]}</h3><strong>{p.price[labelIndex]}</strong><div className="qty"><button onClick={()=>changeQty(x.id,-1)}>−</button><span>{x.qty}</span><button onClick={()=>changeQty(x.id,1)}>+</button><button className="remove" onClick={()=>changeQty(x.id,-x.qty)}>×</button></div></div></div>})}</div><div className="cartSummary"><div className="total"><span>{lang==="ar"?"المجموع":"TOTAL"}</span><strong>{cartTotal.toLocaleString("fr-FR")} دج</strong></div><button className="checkoutButton" onClick={()=>{setCartOpen(false);setCheckoutOpen(true)}}>{lang==="ar"?"إتمام الطلب":"CHECKOUT"} ↗</button></div></>:<div className="emptyCart"><span>♡</span><p>{lang==="ar"?"السلة فارغة":"Your bag is empty"}</p></div>}</aside></div>}
      {checkoutOpen&&<div className="checkoutOverlay"><div className="checkoutPanel">{orderDone?<div className="success"><span>✓</span><h2>{lang==="ar"?"تم تسجيل طلبك بنجاح":"ORDER RECEIVED"}</h2><p>{lang==="ar"?"شكراً لثقتك في YASSOU STYLE.":"Thank you for choosing YASSOU STYLE."}</p><button onClick={()=>{setCheckoutOpen(false);setOrderDone(false)}}>{lang==="ar"?"واصلي التسوق":"CONTINUE"}</button></div>:<><button className="modalClose" onClick={()=>setCheckoutOpen(false)}>×</button><div className="checkoutHead"><span>YASSOU STYLE</span><h2>{lang==="ar"?"إتمام الطلب":"CHECKOUT"}</h2><p>{lang==="ar"?"الدفع عند الاستلام":"CASH ON DELIVERY"}</p></div><form className="checkoutForm" onSubmit={e=>{e.preventDefault();setOrderDone(true);setCartItems([])}}><label>{lang==="ar"?"الاسم الكامل":"FULL NAME"}<input required value={orderForm.name} onChange={e=>setOrderForm({...orderForm,name:e.target.value})}/></label><label>{lang==="ar"?"رقم الهاتف":"PHONE"}<input required type="tel" value={orderForm.phone} onChange={e=>setOrderForm({...orderForm,phone:e.target.value})}/></label><label>{lang==="ar"?"الولاية":"WILAYA"}<input required value={orderForm.wilaya} onChange={e=>setOrderForm({...orderForm,wilaya:e.target.value})}/></label><label>{lang==="ar"?"العنوان":"ADDRESS"}<input required value={orderForm.address} onChange={e=>setOrderForm({...orderForm,address:e.target.value})}/></label><label>{lang==="ar"?"ملاحظات":"NOTES"}<textarea value={orderForm.notes} onChange={e=>setOrderForm({...orderForm,notes:e.target.value})}/></label><div className="checkoutTotal"><span>TOTAL</span><strong>{cartTotal.toLocaleString("fr-FR")} دج</strong></div><button className="checkoutButton" type="submit">{lang==="ar"?"تأكيد الطلب":"PLACE ORDER"} ↗</button></form></>}</div></div>}
      {toast&&<div className="toast">{toast}</div>}
    </div>
  );
}
export default App;