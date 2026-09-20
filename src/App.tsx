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
  const swipeStart = useRef({ x: 0, index: 0 });
  const swiping = useRef(false);
  const rtl = lang === "ar";
  const t = copy[lang];
  useEffect(() => { document.documentElement.lang = lang; document.documentElement.dir = rtl ? "rtl" : "ltr"; }, [lang, rtl]);
  const labelIndex = lang === "ar" ? 0 : lang === "fr" ? 1 : 2;
  const selected = selectedProduct === null ? null : images.products[selectedProduct];
  return (
    <div className={"app " + (rtl ? "rtl" : "ltr")}>
      <div className="announcement">{t.announcement}</div>
      <header>
        <button className="hamb" onClick={() => setOpen(!open)}>☰</button>
        <nav className={open ? "open" : ""}>{t.nav.map((n,i)=><a key={n} href={["#shop","#story","#contact"][i]} onClick={()=>setOpen(false)}>{n}</a>)}</nav>
        <a className="logo" href="#">YASSOU<span>STYLE</span><small>{t.signature}</small></a>
        <div className="tools">
          <div className="language"><button>{t.lang}⌄</button><div className="languageMenu">{(["ar","fr","en"] as const).map(l=><button key={l} onClick={()=>{setLang(l);setOpen(false)}}>{l==="ar"?"العربية":l==="fr"?"Français":"English"}</button>)}</div></div>
          <button aria-label="search">⌕</button><button onClick={()=>setCart(cart+1)}>BAG <b>{cart}</b></button>
        </div>
      </header>
      <main>
        <section className="hero"><video autoPlay muted loop playsInline poster={images.hero}><source src="https://cdn.coverr.co/videos/coverr-a-woman-in-a-black-dress-1575/1080p.mp4" type="video/mp4"/></video><div className="veil"/><div className="heroText"><div className="micro">{t.micro}</div><h1>YASSOU<br/><em>STYLE</em></h1><p>{t.hero}</p><strong>{t.sub}</strong><button className="cta" onClick={()=>document.querySelector("#shop")?.scrollIntoView({behavior:"smooth"})}>{t.cta} <span>↗</span></button></div><div className="heroSide">{t.scroll} <i>↓</i></div></section>
        <section className="intro"><div className="goldline"/><p>{t.intro}</p><div className="goldline"/></section>
        <section id="shop" className="shop">
          <div className="shopHead"><span>01 — {t.shopLabel}</span><div><h2>{lang==="ar"?<>البضاعة<br/><i>المتاحة</i></>:lang==="fr"?<>LES ARTICLES<br/><i>DISPONIBLES</i></>:<>AVAILABLE<br/><i>PRODUCTS</i></>}</h2><div className="viewToggle"><button className={viewMode===1?"active":""} onClick={()=>setViewMode(1)}>1</button><button className={viewMode===2?"active":""} onClick={()=>setViewMode(2)}>2</button></div></div></div>
          <div className={"products products-"+viewMode}>{images.products.map((p,i)=>{const photoIndex=photoIndexes[i]??0;return <article className="product" key={p.name[2]} onClick={()=>{if(!swiping.current){setSelectedProduct(i);setModalPhoto(photoIndex)}}}><div className="pic productSwipe" onPointerDown={e=>{swipeStart.current={x:e.clientX,index:photoIndex};swiping.current=false;e.currentTarget.setPointerCapture?.(e.pointerId)}} onPointerUp={e=>{const dx=e.clientX-swipeStart.current.x;if(Math.abs(dx)>35){const next=dx<0?(swipeStart.current.index+1)%p.photos.length:(swipeStart.current.index-1+p.photos.length)%p.photos.length;setPhotoIndexes(s=>({...s,[i]:next}));swiping.current=true;window.setTimeout(()=>{swiping.current=false},100)}}} onPointerCancel={()=>{swiping.current=false}}>
            <img key={photoIndex} className="productImageSmooth" src={p.photos[photoIndex]} alt={p.name[labelIndex]} draggable="false"/><button className="quickAdd" onClick={e=>{e.stopPropagation();setCart(cart+1)}}>{t.add} +</button><span>0{i+1}</span><div className="swipeDots">{p.photos.map((_,pi)=><i key={pi} className={pi===photoIndex?"active":""}/>)}</div>
          </div><div className="pmeta"><div><small>YASSOU STYLE</small><h3>{p.name[labelIndex]}</h3></div><strong>{p.price[labelIndex]}</strong></div></article>})}</div>
        </section>
        <section id="story" className="statement"><div className="statementImg"><img src={images.story} alt={t.house}/></div><div><span>02 — {t.house}</span><h2>{lang==="ar"?<>ماشي غير<br/><i>متجر.</i></>:lang==="fr"?<>PAS JUSTE<br/><i>UNE BOUTIQUE.</i></>:<>NOT JUST<br/><i>A STORE.</i></>}</h2><p>{t.storyText}</p><div className="signature">Yassou ✦</div></div></section>
        <section className="services">{t.services.map(([n,title,desc])=><div key={n}><b>{n}</b><h3>{title}</h3><p>{desc}</p></div>)}</section>
        <section id="contact" className="contact"><span>03 — {t.connect}</span><h2>{t.enterWorld}<br/><i>YASSOU WORLD.</i></h2><div><input placeholder={t.email}/><button>{t.join} ↗</button></div></section>
      </main>
      <footer><div><a className="logo">YASSOU<span>STYLE</span></a><p>{t.signature}</p></div><div><small>{t.exploreLabel}</small><a>{t.nav[0]}</a><a>{t.nav[1]}</a><a>{t.nav[2]}</a></div><div><small>{t.connectLabel}</small><a>Instagram</a><a>TikTok</a><a>{t.location}</a></div><div className="copy">{t.rights}</div></footer>
      {selected&&<div className="productModal" role="dialog" aria-modal="true" onClick={()=>setSelectedProduct(null)}><div className="productModalInner" onClick={e=>e.stopPropagation()}><button className="modalClose" onClick={()=>setSelectedProduct(null)}>×</button><div className="modalGallery"><img src={selected.photos[modalPhoto]} alt={selected.name[labelIndex]}/><button className="galleryPrev" onClick={()=>setModalPhoto((modalPhoto-1+selected.photos.length)%selected.photos.length)}>‹</button><button className="galleryNext" onClick={()=>setModalPhoto((modalPhoto+1)%selected.photos.length)}>›</button><div className="modalDots">{selected.photos.map((_,i)=><button key={i} className={i===modalPhoto?"active":""} onClick={()=>setModalPhoto(i)}/>)}</div></div><div className="modalInfo"><small>YASSOU STYLE</small><h2>{selected.name[labelIndex]}</h2><strong>{selected.price[labelIndex]}</strong><p>{selected.description[labelIndex]}</p><button className="modalAdd" onClick={()=>{setCart(cart+1);setSelectedProduct(null)}}>{t.add}</button></div></div></div>}
    </div>
  );
}
export default App;