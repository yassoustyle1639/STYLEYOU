import { useEffect, useState } from "react";

const copy = {
 ar:{nav:["المتجر","المختارات","قصتنا","تواصل معنا"],announcement:"YASSOU STYLE · توصيل إلى 58 ولاية · الدفع عند الاستلام",micro:"تأسست · الجزائر · 2026",hero:"فخامة، بتوقيعك.",sub:"فخامتك تبدأ من اختيارك.",cta:"اكتشفي المجموعة",scroll:"مرري لاكتشاف المزيد",intro:"YASSOU STYLE بوتيك رقمي للنساء اللواتي يخترن أناقتهن بعناية.",edit:"المختارات",editSub:"قطع محدودة. حضور واضح. كل قطعة عندها سبب تكون هنا.",view:"شاهدي المجموعة",all:"شاهدي الكل",add:"أضيفي إلى السلة",storyText:"YASSOU STYLE هو إحساس. قطع، جمال وتفاصيل نختاروهم بعين تحب الأناقة وتؤمن أن الفخامة ماشي في كثرة الأشياء، بل في اختيار الصح.",services:[["01","مختارات","اختيارات مدروسة"],["02","58 ولاية","نوصلولك وين ما كنتي"],["03","الدفع عند الاستلام","ادفعي عند استلام طلبك"],["04","مساعدة","نعاونك تختاري"]],email:"بريدك الإلكتروني",join:"انضمي",explore:"استكشفي",connect:"تواصلي معنا",location:"الجزائر",rights:"© 2026 YASSOU STYLE · جميع الحقوق محفوظة",lang:"العربية"},
 fr:{nav:["Boutique","La sélection","Notre histoire","Contact"],announcement:"YASSOU STYLE · LIVRAISON AUX 58 WILAYAS · PAIEMENT À LA LIVRAISON",micro:"ÉTABLI · ALGÉRIE · 2026",hero:"Le luxe, à votre image.",sub:"Votre élégance commence par votre choix.",cta:"DÉCOUVRIR LA COLLECTION",scroll:"DÉFILER POUR DÉCOUVRIR",intro:"YASSOU STYLE EST UNE BOUTIQUE DIGITALE POUR LES FEMMES QUI CHOISISSENT LEUR STYLE AVEC INTENTION.",edit:"LA SÉLECTION",editSub:"Pièces choisies. Présence affirmée. Chaque pièce a sa raison d'être ici.",view:"VOIR LA SÉLECTION",all:"VOIR TOUT",add:"AJOUTER AU PANIER",storyText:"YASSOU STYLE est une sensation. Des pièces, de la beauté et des détails choisis avec passion, parce que le luxe n'est pas dans l'accumulation, mais dans le bon choix.",services:[["01","SÉLECTION","Choix soigneusement sélectionnés"],["02","58 WILAYAS","Livraison partout en Algérie"],["03","À LA LIVRAISON","Payez à la réception"],["04","ASSISTANCE","Nous vous aidons à choisir"]],email:"VOTRE ADRESSE E-MAIL",join:"REJOINDRE",explore:"EXPLORER",connect:"CONTACT",location:"Alger, Algérie",rights:"© 2026 YASSOU STYLE · TOUS DROITS RÉSERVÉS",lang:"Français"},
 en:{nav:["Shop","The Edit","Our Story","Contact"],announcement:"YASSOU STYLE · DELIVERY TO ALL 58 WILAYAS · CASH ON DELIVERY",micro:"EST. · ALGERIA · 2026",hero:"Luxury, redefined for you.",sub:"Your style. Your signature.",cta:"EXPLORE COLLECTION",scroll:"SCROLL TO DISCOVER",intro:"YASSOU STYLE IS A DIGITAL BOUTIQUE FOR WOMEN WHO CHOOSE THEIR STYLE WITH INTENTION.",edit:"THE EDIT",editSub:"Curated pieces. Clear presence. Every piece has a reason to be here.",view:"VIEW EDIT",all:"VIEW ALL",add:"ADD TO BAG",storyText:"YASSOU STYLE is a feeling. Pieces, beauty and details chosen with an eye for elegance, because luxury is not about having more — it is about choosing right.",services:[["01","CURATED","Thoughtful selections"],["02","58 WILAYAS","We deliver across Algeria"],["03","COD","Pay on delivery"],["04","ASSISTED","We help you choose"]],email:"YOUR EMAIL ADDRESS",join:"JOIN",explore:"EXPLORE",connect:"CONNECT",location:"Algiers, Algeria",rights:"© 2026 YASSOU STYLE · ALL RIGHTS RESERVED.",lang:"English"}
};

const items = [
  ["01","NOIR ESSENTIALS","قطع سوداء بتفاصيل فاخرة","https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1400&q=90"],
  ["02","BEAUTY EDIT","جمال مختار بعناية","https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=1400&q=90"],
  ["03","SIGNATURE SCENTS","عطور تترك أثراً","https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=1400&q=90"]
];

function App(){
 const [lang,setLang]=useState<"ar"|"fr"|"en">("ar");
 const [open,setOpen]=useState(false); const [cart,setCart]=useState(0);
 const rtl=lang==="ar";
 useEffect(()=>{document.documentElement.lang=lang;document.documentElement.dir=rtl?"rtl":"ltr"},[lang,rtl]);
 return <div className={"app "+(rtl?"rtl":"ltr")}>
  <div className="announcement">{copy[lang].announcement}</div>
  <header>
   <button className="hamb" onClick={()=>setOpen(!open)}>☰</button>
   <nav className={open?"open":""}>{copy[lang].nav.map((n,i)=><a key={n} href={["#shop","#edit","#story","#contact"][i]}>{n}</a>)}</nav>
   <a className="logo" href="#">YASSOU<span>STYLE</span><small>YOUR STYLE. YOUR SIGNATURE.</small></a>
   <div className="tools"><div className="language"><button>{copy[lang].lang}⌄</button><div className="languageMenu">{(["ar","fr","en"] as const).map(l=><button key={l} onClick={()=>setLang(l)}>{l==="ar"?"العربية":l==="fr"?"Français":"English"}</button>)}</div></div><button>⌕</button><button onClick={()=>setCart(cart+1)}>BAG <b>{cart}</b></button></div>
  </header>
  <main>
   <section className="hero">
    <video autoPlay muted loop playsInline poster="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=2200&q=90"><source src="https://cdn.coverr.co/videos/coverr-a-woman-in-a-black-dress-1575/1080p.mp4" type="video/mp4"/></video>
    <div className="veil"/>
    <div className="heroText"><div className="micro">EST. · ALGERIA · 2026</div><h1>YASSOU<br/><em>STYLE</em></h1><p>Luxury, redefined for you.</p><strong>فخامتك تبدأ من اختيارك.</strong><button className="cta" onClick={()=>document.querySelector("#shop")?.scrollIntoView({behavior:"smooth"})}>EXPLORE COLLECTION <span>↗</span></button></div>
    <div className="heroSide">{copy[lang].scroll} <i>↓</i></div>
   </section>
   <section className="intro"><div className="goldline"/><p>{copy[lang].intro}</p><div className="goldline"/></section>
   <section id="edit" className="editorial">
    <div className="sectionTitle"><span>01 — {copy[lang].edit}</span><h2>THE<br/><i>EDIT</i></h2><p>{copy[lang].editSub}</p></div>
    <div className="editorialGrid">{items.map(([n,t,d,img])=><article key={n}><img src={img}/><div><small>{n}</small><h3>{t}</h3><p>{d}</p><button>{copy[lang].view} ↗</button></div></article>)}</div>
   </section>
   <section id="shop" className="shop">
    <div className="shopHead"><span>02 — SHOP</span><h2>THE SIGNATURE<br/><i>COLLECTION</i></h2><button>{copy[lang].all} ↗</button></div>
    <div className="products">
     {[
      ["BLACK SILK SET","6,900 DA","https://images.unsplash.com/photo-1618244972963-dbee1a7edc95?auto=format&fit=crop&w=1000&q=90"],
      ["SIGNATURE PERFUME","5,400 DA","https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=1000&q=90"],
      ["GLOW BEAUTY SET","7,900 DA","https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1000&q=90"],
      ["NOIR BAG","8,200 DA","https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=1000&q=90"]
     ].map((p,i)=><article className="product" key={p[0]}><div className="pic"><img src={p[2]}/><button onClick={()=>setCart(cart+1)}>{copy[lang].add} +</button><span>0{i+1}</span></div><div className="pmeta"><div><small>YASSOU STYLE</small><h3>{p[0]}</h3></div><strong>{p[1]}</strong></div></article>)}
    </div>
   </section>
   <section id="story" className="statement"><div className="statementImg"><img src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1600&q=90"/></div><div><span>03 — THE HOUSE</span><h2>NOT JUST<br/><i>A STORE.</i></h2><p>{copy[lang].storyText}</p><div className="signature">Yassou ✦</div></div></section>
   <section className="services">{copy[lang].services.map(([n,t,d])=><div key={n}><b>{n}</b><h3>{t}</h3><p>{d}</p></div>)}</section>
   <section id="contact" className="contact"><span>04 — {copy[lang].connect}</span><h2>{lang==="ar"?"دخلي لعالم":"ENTER THE"}<br/><i>YASSOU WORLD.</i></h2><div><input placeholder={copy[lang].email}/><button>{copy[lang].join} ↗</button></div></section>
  </main>
  <footer><div><a className="logo">YASSOU<span>STYLE</span></a><p>Your style. Your signature.</p></div><div><small>EXPLORE</small><a>Shop</a><a>The Edit</a><a>Our Story</a></div><div><small>CONNECT</small><a>Instagram</a><a>TikTok</a><a>Algiers, Algeria</a></div><div className="copy">{copy[lang].rights}</div></footer>
 </div>
}
export default App;