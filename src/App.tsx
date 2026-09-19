import { useMemo, useState } from "react";

type Product = {
  id: number;
  name: string;
  category: string;
  price: number;
  oldPrice?: number;
  image: string;
  badge?: string;
};

const products: Product[] = [
  { id: 1, name: "طقم ساتان فاخر", category: "ملابس", price: 6900, oldPrice: 8500, badge: "الأكثر طلباً", image: "https://images.unsplash.com/photo-1618244972963-dbee1a7edc95?auto=format&fit=crop&w=900&q=85" },
  { id: 2, name: "عطر Signature", category: "عطور", price: 5400, image: "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=900&q=85" },
  { id: 3, name: "روتين عناية فاخر", category: "كوسميتيك", price: 7900, oldPrice: 9200, image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=900&q=85" },
  { id: 4, name: "حقيبة Everyday", category: "إكسسوارات", price: 8200, image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=900&q=85" },
  { id: 5, name: "عباية Modern", category: "ملابس", price: 9800, image: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?auto=format&fit=crop&w=900&q=85" },
  { id: 6, name: "مجموعة Glow", category: "كوسميتيك", price: 6300, image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=900&q=85" },
];

const categories = [
  { name: "ملابس", label: "قطع مختارة", image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1000&q=85" },
  { name: "كوسميتيك", label: "جمالك أولاً", image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=1000&q=85" },
  { name: "عطور", label: "بصمتك الخاصة", image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=1000&q=85" },
  { name: "إكسسوارات", label: "التفاصيل تصنع الفرق", image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=1000&q=85" },
];

const format = (value: number) => new Intl.NumberFormat("fr-DZ").format(value) + " DA";

export default function App() {
  const [category, setCategory] = useState("الكل");
  const [cart, setCart] = useState<Product[]>([]);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [cartOpen, setCartOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const filtered = useMemo(() => products.filter(p =>
    (category === "الكل" || p.category === category) &&
    p.name.toLowerCase().includes(query.toLowerCase())
  ), [category, query]);

  const add = (p: Product) => {
    setCart(prev => [...prev, p]);
    setCartOpen(true);
  };

  const remove = (id: number) => setCart(prev => prev.filter((p, i) => p.id !== id || prev.findIndex(x => x.id === id) !== i));
  const total = cart.reduce((sum, p) => sum + p.price, 0);

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div className="site">
      <div className="topbar">شحن إلى 58 ولاية • الدفع عند الاستلام • قطع مختارة بعناية</div>

      <header className="nav">
        <button className="mobile-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="القائمة">☰</button>
        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          <button onClick={() => go("shop")}>المتجر</button>
          <button onClick={() => go("collections")}>التشكيلة</button>
          <button onClick={() => go("story")}>قصتنا</button>
          <button onClick={() => go("contact")}>تواصلي معنا</button>
        </nav>
        <div className="brand" onClick={() => go("home")}>
          <span>YASSOU</span> STYLE
          <small>YOUR STYLE. YOUR SIGNATURE.</small>
        </div>
        <div className="nav-actions">
          <button onClick={() => setSearchOpen(!searchOpen)} aria-label="بحث">⌕</button>
          <button onClick={() => setCartOpen(true)} aria-label="السلة">♡<b>{cart.length}</b></button>
        </div>
      </header>

      {searchOpen && <div className="searchbar"><input autoFocus value={query} onChange={e => setQuery(e.target.value)} placeholder="ابحثي عن قطعة..." /><button onClick={() => setSearchOpen(false)}>إغلاق</button></div>}

      <main>
        <section id="home" className="hero">
          <div className="hero-image" />
          <div className="hero-overlay" />
          <div className="hero-content">
            <p className="eyebrow">YASSOU STYLE • ALGERIA</p>
            <h1><span>YASSOU</span><br />STYLE</h1>
            <p className="hero-en">Your style. Your signature.</p>
            <p className="hero-ar">فخامتك تبدأ من اختيارك.</p>
            <p className="hero-text">أزياء، جمال وتفاصيل مختارة للمرأة التي تعرف قيمتها.</p>
            <button className="gold-btn" onClick={() => go("shop")}>اكتشفي التشكيلة <span>←</span></button>
          </div>
          <div className="scroll">SCROLL <span>↓</span></div>
        </section>

        <section id="collections" className="section">
          <div className="section-head"><p className="eyebrow dark">SHOP BY CATEGORY</p><h2>اختاري عالمك</h2><p>كل قطعة مختارة باش تزيد لمستك الخاصة.</p></div>
          <div className="category-grid">
            {categories.map(c => <button className="category-card" key={c.name} onClick={() => {setCategory(c.name); go("shop");}}>
              <img src={c.image} alt={c.name}/><span className="cat-shade" /><div><small>{c.label}</small><h3>{c.name}</h3><span>اكتشفي ←</span></div>
            </button>)}
          </div>
        </section>

        <section id="shop" className="section shop">
          <div className="section-head row"><div><p className="eyebrow dark">THE EDIT</p><h2>مختارات YASSOU</h2></div>
            <div className="filters">{["الكل","ملابس","كوسميتيك","عطور","إكسسوارات"].map(c => <button className={category === c ? "active" : ""} onClick={() => setCategory(c)} key={c}>{c}</button>)}</div>
          </div>
          <div className="products">
            {filtered.map(p => <article className="product" key={p.id}>
              <div className="product-img"><img src={p.image} alt={p.name}/>{p.badge && <span className="badge">{p.badge}</span>}<button className="quick" onClick={() => add(p)}>+ أضيفي للسلة</button></div>
              <div className="product-info"><div><small>{p.category}</small><h3>{p.name}</h3></div><div className="price">{format(p.price)}{p.oldPrice && <del>{format(p.oldPrice)}</del>}</div></div>
            </article>)}
          </div>
        </section>

        <section className="manifesto">
          <div><p className="eyebrow">YASSOU STYLE</p><h2>أناقة ما تحتاجش<br/><i>تفسير.</i></h2></div>
          <p>من أول اختيار للقطعة حتى توصلك لباب دارك، نحب كل تفصيلة تكون على ذوقك. جودة، أناقة وتجربة شراء بسيطة.</p>
        </section>

        <section id="story" className="story section">
          <div className="story-img"><img src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=85" alt="Yassou Style"/></div>
          <div className="story-copy"><p className="eyebrow dark">OUR STORY</p><h2>ستايلك هو<br/><i>توقيعك.</i></h2><p>YASSOU STYLE دار باش نجمعلك القطع اللي نحبها أنا قبل ما نعرضها عليك. نختار موديلات أنيقة، عملية وفخمة، ونخليلك مساحة تكوني أنتِ.</p><div className="signature">Yassou <span>✦</span></div></div>
        </section>

        <section className="benefits">
          <div><b>01</b><h3>اختيار مدروس</h3><p>قطع قليلة، لكن كل قطعة عندها قيمة.</p></div>
          <div><b>02</b><h3>توصيل 58 ولاية</h3><p>نوصلولك حتى لباب دارك.</p></div>
          <div><b>03</b><h3>دفع عند الاستلام</h3><p>تشوفي طلبك وتخلصي بسهولة.</p></div>
          <div><b>04</b><h3>خدمة قريبة</h3><p>نعاونك تختاري المقاس والقطعة المناسبة.</p></div>
        </section>

        <section id="contact" className="newsletter section">
          <p className="eyebrow dark">STAY IN THE KNOW</p><h2>خلي ذوقك أول واحد يعرف.</h2><p>دخلي إيميلك باش توصلك الجديد والعروض الخاصة.</p>
          <div className="email"><input placeholder="Email address" type="email"/><button>انضمي لنا</button></div>
        </section>
      </main>

      <footer><div className="footer-brand"><strong>YASSOU STYLE</strong><span>Your style. Your signature.</span></div><div><h4>SHOP</h4><button onClick={() => go("shop")}>كل المنتجات</button><button onClick={() => {setCategory("ملابس");go("shop")}}>ملابس</button><button onClick={() => {setCategory("كوسميتيك");go("shop")}}>كوسميتيك</button></div><div><h4>CONTACT</h4><p>Algiers, Algeria</p><p>Instagram: @yassoustyle</p></div><div><h4>FOLLOW</h4><p>Instagram · TikTok</p><p>© 2026 YASSOU STYLE</p></div></footer>

      {cartOpen && <div className="drawer-backdrop" onClick={() => setCartOpen(false)}><aside className="cart" onClick={e => e.stopPropagation()}><div className="cart-head"><h2>سلتك</h2><button onClick={() => setCartOpen(false)}>×</button></div>{cart.length === 0 ? <div className="empty">السلة فارغة حالياً.<br/><button onClick={() => {setCartOpen(false);go("shop")}}>تسوقي الآن</button></div> : <><div className="cart-items">{cart.map((p,i)=><div className="cart-item" key={i}><img src={p.image} alt=""/><div><h4>{p.name}</h4><p>{format(p.price)}</p><button onClick={() => remove(p.id)}>حذف</button></div></div>)}</div><div className="cart-total"><span>المجموع</span><strong>{format(total)}</strong></div><button className="checkout">إتمام الطلب</button></>}</aside></div>}
    </div>
  );
}