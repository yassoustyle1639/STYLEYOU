import { useState } from "react";

const items = [
  ["01","NOIR ESSENTIALS","قطع سوداء بتفاصيل فاخرة","https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1400&q=90"],
  ["02","BEAUTY EDIT","جمال مختار بعناية","https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=1400&q=90"],
  ["03","SIGNATURE SCENTS","عطور تترك أثراً","https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=1400&q=90"]
];

function App(){
 const [open,setOpen]=useState(false); const [cart,setCart]=useState(0);
 return <div className="app">
  <div className="announcement">YASSOU STYLE · DELIVERY TO 58 WILAYAS · CASH ON DELIVERY</div>
  <header>
   <button className="hamb" onClick={()=>setOpen(!open)}>☰</button>
   <nav className={open?"open":""}><a href="#shop">SHOP</a><a href="#edit">THE EDIT</a><a href="#story">STORY</a><a href="#contact">CONTACT</a></nav>
   <a className="logo" href="#">YASSOU<span>STYLE</span><small>YOUR STYLE. YOUR SIGNATURE.</small></a>
   <div className="tools"><button>⌕</button><button onClick={()=>setCart(cart+1)}>BAG <b>{cart}</b></button></div>
  </header>
  <main>
   <section className="hero">
    <video autoPlay muted loop playsInline poster="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=2200&q=90"><source src="https://cdn.coverr.co/videos/coverr-a-woman-in-a-black-dress-1575/1080p.mp4" type="video/mp4"/></video>
    <div className="veil"/>
    <div className="heroText"><div className="micro">EST. · ALGERIA · 2026</div><h1>YASSOU<br/><em>STYLE</em></h1><p>Luxury, redefined for you.</p><strong>فخامتك تبدأ من اختيارك.</strong><button className="cta" onClick={()=>document.querySelector("#shop")?.scrollIntoView({behavior:"smooth"})}>EXPLORE COLLECTION <span>↗</span></button></div>
    <div className="heroSide">SCROLL TO DISCOVER <i>↓</i></div>
   </section>
   <section className="intro"><div className="goldline"/><p>YASSOU STYLE IS A DIGITAL BOUTIQUE FOR WOMEN WHO CHOOSE<br/>THEIR STYLE WITH INTENTION.</p><div className="goldline"/></section>
   <section id="edit" className="editorial">
    <div className="sectionTitle"><span>01 — CURATED</span><h2>THE<br/><i>EDIT</i></h2><p>مختارات محدودة. حضور واضح.<br/>كل قطعة عندها سبب تكون هنا.</p></div>
    <div className="editorialGrid">{items.map(([n,t,d,img])=><article key={n}><img src={img}/><div><small>{n}</small><h3>{t}</h3><p>{d}</p><button>VIEW EDIT ↗</button></div></article>)}</div>
   </section>
   <section id="shop" className="shop">
    <div className="shopHead"><span>02 — SHOP</span><h2>THE SIGNATURE<br/><i>COLLECTION</i></h2><button>VIEW ALL ↗</button></div>
    <div className="products">
     {[
      ["BLACK SILK SET","6,900 DA","https://images.unsplash.com/photo-1618244972963-dbee1a7edc95?auto=format&fit=crop&w=1000&q=90"],
      ["SIGNATURE PERFUME","5,400 DA","https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=1000&q=90"],
      ["GLOW BEAUTY SET","7,900 DA","https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1000&q=90"],
      ["NOIR BAG","8,200 DA","https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=1000&q=90"]
     ].map((p,i)=><article className="product" key={p[0]}><div className="pic"><img src={p[2]}/><button onClick={()=>setCart(cart+1)}>ADD TO BAG +</button><span>0{i+1}</span></div><div className="pmeta"><div><small>YASSOU STYLE</small><h3>{p[0]}</h3></div><strong>{p[1]}</strong></div></article>)}
    </div>
   </section>
   <section id="story" className="statement"><div className="statementImg"><img src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1600&q=90"/></div><div><span>03 — THE HOUSE</span><h2>NOT JUST<br/><i>A STORE.</i></h2><p>YASSOU STYLE is a feeling. قطع، جمال وتفاصيل نختاروهم بعين تحب الأناقة وتؤمن أن الفخامة ماشي في كثرة الأشياء، بل في اختيار الصح.</p><div className="signature">Yassou ✦</div></div></section>
   <section className="services"><div><b>01</b><h3>CURATED</h3><p>اختيارات مدروسة</p></div><div><b>02</b><h3>58 WILAYAS</h3><p>نوصلولك وين ما كنتي</p></div><div><b>03</b><h3>COD</h3><p>الدفع عند الاستلام</p></div><div><b>04</b><h3>ASSISTED</h3><p>نعاونك تختاري</p></div></section>
   <section id="contact" className="contact"><span>04 — STAY CLOSE</span><h2>ENTER THE<br/><i>YASSOU WORLD.</i></h2><div><input placeholder="YOUR EMAIL ADDRESS"/><button>JOIN ↗</button></div></section>
  </main>
  <footer><div><a className="logo">YASSOU<span>STYLE</span></a><p>Your style. Your signature.</p></div><div><small>EXPLORE</small><a>Shop</a><a>The Edit</a><a>Our Story</a></div><div><small>CONNECT</small><a>Instagram</a><a>TikTok</a><a>Algiers, Algeria</a></div><div className="copy">© 2026 YASSOU STYLE<br/>ALL RIGHTS RESERVED.</div></footer>
 </div>
}
export default App;