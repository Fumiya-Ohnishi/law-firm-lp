import { useState, useEffect, useRef } from "react"
import type { RefObject } from "react"

/* ─────────────────────────────────────────────────────────────────────────
   Brand palette
───────────────────────────────────────────────────────────────────────── */
const C = {
  navy:      "#1B2A4A",
  navyDark:  "#0F1B32",
  navyLight: "#2C3F6A",
  gold:      "#C4933F",
  goldLight: "#D4AF70",
  cream:     "#F8F7F4",
  text:      "#4A5568",
  textLight: "#8A95AE",
}

/* styles are in src/index.css */

/* ─────────────────────────────────────────────────────────────────────────
   Hooks
───────────────────────────────────────────────────────────────────────── */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function useInView(threshold = 0.12): [RefObject<any>, boolean] {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const ref = useRef<any>(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setInView(true); obs.disconnect() }
    }, { threshold })
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])
  return [ref, inView]
}

function useCountUp(target: number, duration = 2000, active = false): number {
  const [val, setVal] = useState(0)
  useEffect(() => {
    if (!active) return
    let start: number | null = null
    const raf = (ts: number) => {
      if (!start) start = ts
      const p = Math.min((ts - start) / duration, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setVal(Math.floor(eased * target))
      if (p < 1) requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
  }, [target, duration, active])
  return val
}

/* ─────────────────────────────────────────────────────────────────────────
   SVG Illustrations
───────────────────────────────────────────────────────────────────────── */
function ScalesSVG() {
  return (
    <svg width="160" height="160" viewBox="0 0 160 160" fill="none" aria-hidden="true">
      <rect x="72" y="132" width="16" height="20" rx="2" fill={C.gold} opacity="0.55"/>
      <rect x="54" y="148" width="52" height="6" rx="3" fill={C.gold} opacity="0.65"/>
      <rect x="78" y="28" width="4" height="104" rx="2" fill={C.navy} opacity="0.7"/>
      <rect x="22" y="40" width="116" height="4" rx="2" fill={C.navy} opacity="0.7"/>
      <line x1="34" y1="44" x2="34" y2="88" stroke={C.gold} strokeWidth="1.8" strokeDasharray="4,3"/>
      <line x1="126" y1="44" x2="126" y2="78" stroke={C.gold} strokeWidth="1.8" strokeDasharray="4,3"/>
      <ellipse cx="34" cy="96" rx="22" ry="7" fill={C.navy} fillOpacity="0.1" stroke={C.navy} strokeWidth="1.5" opacity="0.55"/>
      <path d="M12 88 Q34 96 56 88" stroke={C.navy} strokeWidth="1.5" fill="none" opacity="0.55"/>
      <ellipse cx="126" cy="86" rx="22" ry="7" fill={C.navy} fillOpacity="0.1" stroke={C.navy} strokeWidth="1.5" opacity="0.55"/>
      <path d="M104 78 Q126 86 148 78" stroke={C.navy} strokeWidth="1.5" fill="none" opacity="0.55"/>
      <circle cx="80" cy="28" r="9" fill={C.gold} opacity="0.85"/>
      <circle cx="80" cy="28" r="4.5" fill={C.goldLight}/>
    </svg>
  )
}

function DocSVG() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <rect x="6" y="3" width="30" height="40" rx="3" fill="white" stroke={C.navy} strokeWidth="1.4" opacity="0.7"/>
      <line x1="12" y1="13" x2="30" y2="13" stroke={C.navy} strokeWidth="1.3" opacity="0.35"/>
      <line x1="12" y1="20" x2="30" y2="20" stroke={C.navy} strokeWidth="1.3" opacity="0.35"/>
      <line x1="12" y1="27" x2="24" y2="27" stroke={C.navy} strokeWidth="1.3" opacity="0.35"/>
      <rect x="20" y="33" width="12" height="7" rx="2" fill={C.gold} opacity="0.55"/>
    </svg>
  )
}

function ShieldSVG() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <path d="M24 4L42 12L42 26C42 36 34 44 24 47C14 44 6 36 6 26L6 12Z" fill={C.navy} fillOpacity="0.07" stroke={C.navy} strokeWidth="1.4" opacity="0.55"/>
      <path d="M24 9L37 16L37 26C37 33 31 39.5 24 42C17 39.5 11 33 11 26L11 16Z" fill={C.gold} fillOpacity="0.12"/>
      <path d="M19 24L22.5 27.5L29 19.5" stroke={C.gold} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function ClockSVG() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <circle cx="24" cy="24" r="18" fill="white" stroke={C.navy} strokeWidth="1.4" opacity="0.55"/>
      <circle cx="24" cy="24" r="2" fill={C.gold}/>
      <line x1="24" y1="24" x2="24" y2="11" stroke={C.navy} strokeWidth="1.8" strokeLinecap="round" opacity="0.7"/>
      <line x1="24" y1="24" x2="33" y2="29" stroke={C.gold} strokeWidth="1.8" strokeLinecap="round"/>
    </svg>
  )
}

function PhoneSVG() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <rect x="12" y="5" width="24" height="38" rx="4" fill="white" stroke={C.navy} strokeWidth="1.4" opacity="0.55"/>
      <line x1="19" y1="40" x2="29" y2="40" stroke={C.navy} strokeWidth="1.8" strokeLinecap="round" opacity="0.45"/>
      <rect x="15" y="12" width="18" height="20" rx="2" fill={C.navy} fillOpacity="0.05"/>
    </svg>
  )
}

function PersonSVG(_props: { female?: boolean } = {}) {
  return (
    <svg width="110" height="160" viewBox="0 0 110 160" fill="none" aria-hidden="true">
      <circle cx="55" cy="44" r="28" fill="rgba(255,255,255,0.12)" stroke={`rgba(196,147,63,0.4)`} strokeWidth="1"/>
      <path d="M35 48 Q45 37 55 41 Q65 37 75 48 Q77 62 70 70 Q62 76 55 76 Q48 76 40 70 Q33 62 35 48Z" fill="rgba(255,255,255,0.2)"/>
      <path d="M10 160 Q10 108 55 104 Q100 108 100 160" fill="rgba(255,255,255,0.1)"/>
    </svg>
  )
}

/* ─────────────────────────────────────────────────────────────────────────
   Navbar
───────────────────────────────────────────────────────────────────────── */
function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", fn)
    return () => window.removeEventListener("scroll", fn)
  }, [])

  const links = [
    ["相談内容", "#consultation"],
    ["強み",     "#strengths"],
    ["解決事例", "#cases"],
    ["弁護士紹介","#attorneys"],
    ["FAQ",     "#faq"],
  ]

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
      background: scrolled ? "rgba(15,27,50,0.97)" : C.navy,
      backdropFilter: "blur(12px)",
      borderBottom: "1px solid rgba(196,147,63,0.18)",
      transition: "background 0.3s ease",
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", height: 64, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{ width: 36, height: 36, background: `linear-gradient(135deg, ${C.gold}, ${C.goldLight})`, borderRadius: 4, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <span style={{ color: "white", fontWeight: 700, fontSize: "0.85rem" }}>法</span>
          </div>
          <div>
            <div style={{ color: "white", fontWeight: 700, fontSize: "0.9rem", letterSpacing: "0.06em" }}>山田・中村法律事務所</div>
            <div style={{ color: C.gold, fontSize: "0.6rem", letterSpacing: "0.12em" }}>YAMADA & NAKAMURA LAW OFFICE</div>
          </div>
        </div>

        {/* Desktop nav */}
        <div style={{ display: "flex", alignItems: "center", gap: 32 }} className="hidden-mobile">
          {links.map(([label, href]) => (
            <a key={label} href={href} className="nav-link" style={{ color: "rgba(255,255,255,0.72)", fontSize: "0.83rem", letterSpacing: "0.04em", transition: "color 0.2s" }}
              onMouseEnter={e => e.currentTarget.style.color = "white"}
              onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.72)"}
            >{label}</a>
          ))}
          <a href="#contact" style={{
            background: `linear-gradient(135deg, ${C.gold}, ${C.goldLight})`,
            color: "white", padding: "9px 22px", borderRadius: 4,
            fontSize: "0.82rem", fontWeight: 700, letterSpacing: "0.05em",
            transition: "opacity 0.2s",
          }}
            onMouseEnter={e => e.currentTarget.style.opacity = "0.82"}
            onMouseLeave={e => e.currentTarget.style.opacity = "1"}
          >無料相談</a>
        </div>

        {/* Hamburger */}
        <button onClick={() => setMenuOpen(v => !v)} style={{ background: "none", border: "none", cursor: "pointer", padding: 8 }} className="show-mobile" aria-label="メニュー">
          {[0,1,2].map(i => <div key={i} style={{ width: 22, height: 1.5, background: "white", marginBottom: i < 2 ? 5 : 0, transition: "all 0.3s" }}/>)}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{ background: C.navyDark, borderTop: "1px solid rgba(196,147,63,0.12)", padding: "16px 24px 24px" }}>
          {[...links, ["無料相談", "#contact"]].map(([label, href]) => (
            <a key={label} href={href} onClick={() => setMenuOpen(false)} style={{ display: "block", color: "rgba(255,255,255,0.75)", fontSize: "0.9rem", padding: "12px 0", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>{label}</a>
          ))}
        </div>
      )}

      <style>{`
        @media (min-width: 768px) { .hidden-mobile { display: flex !important; } .show-mobile { display: none !important; } }
        @media (max-width: 767px) { .hidden-mobile { display: none !important; } .show-mobile { display: block !important; } }
      `}</style>
    </nav>
  )
}

/* ─────────────────────────────────────────────────────────────────────────
   Hero
───────────────────────────────────────────────────────────────────────── */
function Hero() {
  const [ref, inView] = useInView(0.05)

  return (
    <section ref={ref} id="top" style={{
      background: `linear-gradient(160deg, ${C.navyDark} 0%, ${C.navy} 55%, ${C.navyLight} 100%)`,
      minHeight: "100vh", paddingTop: 64, display: "flex", alignItems: "center",
      position: "relative", overflow: "hidden",
    }}>
      {/* BG decoration */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none", overflow: "hidden" }}>
        <svg width="100%" height="100%" viewBox="0 0 1300 800" preserveAspectRatio="xMidYMid slice">
          <defs>
            <radialGradient id="gld1" cx="70%" cy="30%" r="50%">
              <stop offset="0%" stopColor={C.gold} stopOpacity="0.07"/>
              <stop offset="100%" stopColor={C.gold} stopOpacity="0"/>
            </radialGradient>
          </defs>
          <rect width="1300" height="800" fill="url(#gld1)"/>
          {/* Grid dots */}
          {Array.from({ length: 9 }).map((_, col) =>
            Array.from({ length: 7 }).map((_, row) => (
              <circle key={`${col}-${row}`} cx={700 + col * 70} cy={80 + row * 100} r="1.5" fill={C.gold} opacity="0.18"/>
            ))
          )}
          {/* Thin lines */}
          <line x1="0" y1="180" x2="500" y2="180" stroke={C.gold} strokeWidth="0.5" opacity="0.2"/>
          <line x1="800" y1="620" x2="1300" y2="620" stroke={C.gold} strokeWidth="0.5" opacity="0.15"/>
          <rect x="640" y="60" width="1" height="680" fill={C.gold} opacity="0.08"/>
        </svg>
      </div>

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "80px 24px", position: "relative", zIndex: 1, width: "100%", display: "grid", gridTemplateColumns: "1fr", gap: 48 }} className="hero-grid">
        {/* Left text */}
        <div className={`fade-up ${inView ? "vis" : ""}`} style={{ maxWidth: 620 }}>
          <div style={{ color: C.gold, fontSize: "0.68rem", letterSpacing: "0.28em", marginBottom: 22, display: "flex", alignItems: "center", gap: 12 }}>
            <span style={{ display: "inline-block", width: 30, height: 1, background: C.gold }}/>
            FREE CONSULTATION AVAILABLE
            <span style={{ display: "inline-block", width: 30, height: 1, background: C.gold }}/>
          </div>

          <h1 style={{ color: "white", fontSize: "clamp(2rem, 4vw, 3.4rem)", fontWeight: 700, lineHeight: 1.35, marginBottom: 24 }}>
            あなたの「困った」に、<br/>
            <span style={{ color: C.goldLight }}>誠実に向き合います。</span>
          </h1>

          <p style={{ color: "rgba(255,255,255,0.68)", lineHeight: 2, fontSize: "0.94rem", marginBottom: 36 }}>
            一人で悩まず、まずはご相談ください。<br/>
            創業30年、1,200件以上の解決実績を持つ法律事務所として、<br/>
            あなたの権利と未来を全力でお守りします。
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
            <a href="#contact" style={{
              background: `linear-gradient(135deg, ${C.gold}, ${C.goldLight})`,
              color: "white", padding: "15px 36px", borderRadius: 4,
              fontWeight: 700, fontSize: "0.95rem", letterSpacing: "0.05em",
              display: "inline-flex", alignItems: "center", gap: 9,
              transition: "all 0.3s ease",
              boxShadow: "0 6px 24px rgba(196,147,63,0.38)",
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 12px 36px rgba(196,147,63,0.5)" }}
              onMouseLeave={e => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = "0 6px 24px rgba(196,147,63,0.38)" }}
            >
              無料相談を予約する
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none"><path d="M3 7.5h9M8 3.5l4 4-4 4" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
            <a href="tel:0120-000-000" style={{
              border: "1.5px solid rgba(196,147,63,0.45)", color: "rgba(255,255,255,0.82)",
              padding: "15px 28px", borderRadius: 4, fontSize: "0.88rem",
              display: "inline-flex", alignItems: "center", gap: 8,
              transition: "all 0.3s ease",
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = C.gold; e.currentTarget.style.color = "white" }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(196,147,63,0.45)"; e.currentTarget.style.color = "rgba(255,255,255,0.82)" }}
            >
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none"><path d="M3 2h3.2L7.5 5.5l-2 1.4C6.2 8.4 7.4 9.6 8.8 10.2l1.4-2L14 9.6V13A1 1 0 0113 14C6.4 14 1 8.6 1 2a1 1 0 011-1z" stroke="currentColor" strokeWidth="1.2" fill="none"/></svg>
              0120-000-000
            </a>
          </div>

          {/* Mini stats */}
          <div style={{ display: "flex", gap: 32, marginTop: 44, paddingTop: 28, borderTop: "1px solid rgba(255,255,255,0.1)", flexWrap: "wrap" }}>
            {[["30+", "年の実績"], ["1,200+", "解決事案"], ["98%", "依頼者満足度"]].map(([v, l]) => (
              <div key={l}>
                <div style={{ color: C.goldLight, fontSize: "1.6rem", fontWeight: 700, lineHeight: 1 }}>{v}</div>
                <div style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.7rem", marginTop: 4 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right card illustration */}
        <div className={`fade-up ${inView ? "vis" : ""} hero-card`} style={{ transitionDelay: "0.18s", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ position: "relative", width: 300, maxWidth: "100%" }}>
            <div style={{ position: "absolute", top: 18, left: 18, right: -18, bottom: -18, background: `rgba(196,147,63,0.07)`, border: `1px solid rgba(196,147,63,0.18)`, borderRadius: 12 }}/>
            <div style={{
              position: "relative", background: "rgba(255,255,255,0.04)",
              border: `1px solid rgba(196,147,63,0.28)`, borderRadius: 12, padding: 36,
              backdropFilter: "blur(10px)",
            }}>
              <div style={{ display: "flex", justifyContent: "center", marginBottom: 24 }}>
                <ScalesSVG/>
              </div>
              <div style={{ borderTop: "1px solid rgba(196,147,63,0.18)", paddingTop: 20 }}>
                <div style={{ color: "rgba(255,255,255,0.42)", fontSize: "0.6rem", letterSpacing: "0.2em", marginBottom: 8 }}>ESTABLISHED</div>
                <div style={{ color: "white", fontWeight: 700, fontSize: "1rem", letterSpacing: "0.04em" }}>1994年 東京・丸の内</div>
                <div style={{ color: C.gold, fontSize: "0.74rem", marginTop: 6 }}>弁護士法人 山田・中村法律事務所</div>
              </div>
              <div style={{ position: "absolute", top: 12, right: 12, width: 28, height: 28, border: `1px solid ${C.gold}`, opacity: 0.28, borderRadius: 2 }}/>
            </div>
          </div>
        </div>
      </div>

      {/* Wave bottom */}
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0 }}>
        <svg viewBox="0 0 1300 64" fill="none" preserveAspectRatio="none" style={{ display: "block", height: 64 }}>
          <path d="M0 64L0 32Q325 0 650 32Q975 64 1300 32L1300 64Z" fill={C.cream}/>
        </svg>
      </div>

      <style>{`
        @media (min-width: 860px) {
          .hero-grid { grid-template-columns: 1fr 1fr !important; }
          .hero-card { display: flex !important; }
        }
        @media (max-width: 859px) {
          .hero-card { display: none !important; }
        }
      `}</style>
    </section>
  )
}

/* ─────────────────────────────────────────────────────────────────────────
   Consultation Topics
───────────────────────────────────────────────────────────────────────── */
function ConsultationTopics() {
  const [ref, inView] = useInView(0.1)
  const topics = [
    { icon: "⚖️", title: "離婚・男女問題",   desc: "離婚協議・財産分与・親権・養育費・不倫慰謝料など、家族に関わる問題を丁寧にサポートします。" },
    { icon: "📜", title: "相続・遺言",       desc: "遺産分割・相続放棄・遺言書作成など、複雑な相続問題に幅広く対応します。" },
    { icon: "💼", title: "労働・雇用問題",   desc: "不当解雇・残業代請求・ハラスメントなど、労働者の権利を守るために全力で対応します。" },
    { icon: "🏠", title: "不動産トラブル",   desc: "売買・賃貸借・隣地境界問題など、不動産に関する法律問題を解決します。" },
    { icon: "💳", title: "債務整理・破産",   desc: "借金問題の解決方法を一緒に考えます。任意整理・自己破産・個人再生に対応。" },
    { icon: "🏢", title: "企業法務・顧問",   desc: "契約書作成・審査・会社設立・トラブル対応など、ビジネスの法律問題を支援します。" },
  ]
  return (
    <section ref={ref} id="consultation" style={{ background: C.cream, padding: "96px 0" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        <div className={`fade-up ${inView ? "vis" : ""}`} style={{ textAlign: "center", marginBottom: 64 }}>
          <div style={{ color: C.gold, fontSize: "0.68rem", letterSpacing: "0.26em", marginBottom: 12 }}>PRACTICE AREAS</div>
          <h2 style={{ color: C.navy, fontSize: "clamp(1.6rem, 3vw, 2.3rem)", fontWeight: 700, marginBottom: 12 }}>よくある相談内容</h2>
          <div style={{ width: 44, height: 2, background: C.gold, margin: "0 auto 16px" }}/>
          <p style={{ color: C.text, fontSize: "0.88rem", maxWidth: 480, margin: "0 auto", lineHeight: 1.9 }}>
            どんな小さなお悩みでも、まずはお気軽にご相談ください
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 20 }}>
          {topics.map((t, i) => (
            <div key={t.title} className={`card-hover fade-up ${inView ? "vis" : ""}`} style={{
              transitionDelay: `${i * 0.07}s`,
              background: "white", borderRadius: 8, padding: "28px 24px",
              border: "1px solid rgba(27,42,74,0.07)",
              borderLeft: `3px solid ${C.gold}`,
            }}>
              <div style={{ fontSize: "2rem", marginBottom: 14 }}>{t.icon}</div>
              <h3 style={{ color: C.navy, fontWeight: 700, fontSize: "1rem", marginBottom: 10 }}>{t.title}</h3>
              <p style={{ color: C.text, fontSize: "0.82rem", lineHeight: 1.85 }}>{t.desc}</p>
              <div style={{ marginTop: 16, color: C.gold, fontSize: "0.76rem", fontWeight: 600, display: "flex", alignItems: "center", gap: 4 }}>
                詳しく見る
                <svg width="11" height="11" viewBox="0 0 11 11"><path d="M2 5.5h7M6 2.5l3 3-3 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" fill="none"/></svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────────────────────────────────
   Strengths + Count-up Stats
───────────────────────────────────────────────────────────────────────── */
function Strengths() {
  const [ref, inView] = useInView(0.12)
  const c1 = useCountUp(30,   1800, inView)
  const c2 = useCountUp(1200, 2000, inView)
  const c3 = useCountUp(98,   1600, inView)
  const c4 = useCountUp(365,  2200, inView)

  const items = [
    { svg: <ShieldSVG/>, title: "豊富な実績と経験",   desc: "30年以上にわたり地域の方々の法律問題を解決してきた実績。難しい案件にも真摯に取り組みます。" },
    { svg: <DocSVG/>,    title: "明確な料金体系",     desc: "料金は事前に明示し、途中で想定外の費用が発生しないよう、透明性のある運営を徹底しています。" },
    { svg: <ClockSVG/>,  title: "迅速なレスポンス",   desc: "お問い合わせから24時間以内に返答。緊急案件にも対応できる体制を整えています。" },
    { svg: <PhoneSVG/>,  title: "相談しやすい環境",   desc: "初めての方でも安心できるよう、専門用語を避けてわかりやすく説明することを心がけています。" },
  ]

  return (
    <section ref={ref} id="strengths" style={{ background: C.navy, padding: "96px 0" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        <div className={`fade-up ${inView ? "vis" : ""}`} style={{ textAlign: "center", marginBottom: 64 }}>
          <div style={{ color: C.gold, fontSize: "0.68rem", letterSpacing: "0.26em", marginBottom: 12 }}>WHY CHOOSE US</div>
          <h2 style={{ color: "white", fontSize: "clamp(1.6rem, 3vw, 2.3rem)", fontWeight: 700, marginBottom: 12 }}>事務所の強み</h2>
          <div style={{ width: 44, height: 2, background: C.gold, margin: "0 auto" }}/>
        </div>

        {/* Stats */}
        <div className={`fade-up ${inView ? "vis" : ""}`} style={{
          transitionDelay: "0.1s",
          display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 16, marginBottom: 64
        }}>
          {[
            [c1,   "+", "年の実績"],
            [c2,   "+", "解決事案数"],
            [c3,   "%", "依頼者満足度"],
            [c4,   "日", "年中対応"],
          ].map(([v, unit, label]) => (
            <div key={label} style={{
              textAlign: "center", padding: "28px 16px",
              border: "1px solid rgba(196,147,63,0.18)", borderRadius: 8,
              background: "rgba(255,255,255,0.03)",
            }}>
              <div style={{ fontSize: "2.6rem", fontWeight: 700, color: C.goldLight, lineHeight: 1 }}>
                {v}<span style={{ fontSize: "1.2rem" }}>{unit}</span>
              </div>
              <div style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.73rem", marginTop: 8, letterSpacing: "0.04em" }}>{label}</div>
            </div>
          ))}
        </div>

        {/* Feature cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 20 }}>
          {items.map((it, i) => (
            <div key={it.title} className={`card-hover fade-up ${inView ? "vis" : ""}`} style={{
              transitionDelay: `${0.15 + i * 0.09}s`,
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(196,147,63,0.14)", borderRadius: 8, padding: "30px 26px",
              display: "flex", gap: 22, alignItems: "flex-start",
            }}>
              <div style={{ flexShrink: 0, marginTop: 2, opacity: 0.92 }}>{it.svg}</div>
              <div>
                <h3 style={{ color: "white", fontWeight: 700, fontSize: "1rem", marginBottom: 10 }}>{it.title}</h3>
                <p style={{ color: "rgba(255,255,255,0.58)", fontSize: "0.83rem", lineHeight: 1.85 }}>{it.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────────────────────────────────
   Case Studies
───────────────────────────────────────────────────────────────────────── */
function CaseStudies() {
  const [ref, inView] = useInView(0.1)
  const cases = [
    {
      tag: "相続", period: "4ヶ月",
      title: "遺産分割で揉めていた兄弟間の調停",
      detail: "父の急逝後、兄弟間で遺産分割について意見が割れ、調停申立へ。客観的な評価資料をもとに適正な分割案を提示し、円満解決に至りました。",
      result: "約3,200万円の適正分配が実現",
    },
    {
      tag: "離婚", period: "2ヶ月",
      title: "離婚協議で養育費の不払いが問題に",
      detail: "離婚後に養育費が支払われなくなったケース。強制執行認諾条項付き公正証書を作成し、以降の不払いを防ぐ仕組みを整えました。",
      result: "公正証書作成で養育費を確保",
    },
    {
      tag: "労働", period: "3ヶ月",
      title: "長時間残業・未払い賃金の請求",
      detail: "退職後に未払い残業代があることが判明したケース。労働記録を丁寧に整理し、会社との交渉を経て適切な金額での和解を実現しました。",
      result: "残業代120万円を回収",
    },
  ]

  return (
    <section ref={ref} id="cases" style={{ background: "white", padding: "96px 0" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        <div className={`fade-up ${inView ? "vis" : ""}`} style={{ textAlign: "center", marginBottom: 64 }}>
          <div style={{ color: C.gold, fontSize: "0.68rem", letterSpacing: "0.26em", marginBottom: 12 }}>CASE STUDIES</div>
          <h2 style={{ color: C.navy, fontSize: "clamp(1.6rem, 3vw, 2.3rem)", fontWeight: 700, marginBottom: 12 }}>解決事例</h2>
          <div style={{ width: 44, height: 2, background: C.gold, margin: "0 auto 16px" }}/>
          <p style={{ color: C.text, fontSize: "0.88rem", maxWidth: 480, margin: "0 auto", lineHeight: 1.9 }}>
            実際に解決した事例の一部をご紹介します（プライバシー保護のため一部改変）
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          {cases.map((c, i) => (
            <div key={c.title} className={`card-hover fade-up ${inView ? "vis" : ""}`} style={{
              transitionDelay: `${i * 0.1}s`,
              border: "1px solid rgba(27,42,74,0.08)", borderRadius: 10,
              overflow: "hidden", display: "flex", flexWrap: "wrap",
            }}>
              <div style={{ flex: "1 1 300px", padding: "32px 36px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                  <span style={{ background: C.navy, color: "white", fontSize: "0.68rem", padding: "3px 11px", borderRadius: 3, fontWeight: 600, letterSpacing: "0.05em" }}>{c.tag}</span>
                  <span style={{ color: C.textLight, fontSize: "0.75rem" }}>解決まで {c.period}</span>
                </div>
                <h3 style={{ color: C.navy, fontWeight: 700, fontSize: "1.05rem", marginBottom: 12 }}>{c.title}</h3>
                <p style={{ color: C.text, fontSize: "0.84rem", lineHeight: 1.88 }}>{c.detail}</p>
              </div>
              <div style={{
                background: `linear-gradient(158deg, ${C.navy} 0%, ${C.navyLight} 100%)`,
                padding: "32px 28px", display: "flex", flexDirection: "column",
                justifyContent: "center", alignItems: "center",
                minWidth: 180, flex: "0 0 auto", textAlign: "center",
              }}>
                <div style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.62rem", letterSpacing: "0.18em", marginBottom: 12 }}>RESULT</div>
                <div style={{ color: C.goldLight, fontWeight: 700, fontSize: "1rem", lineHeight: 1.55 }}>{c.result}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────────────────────────────────
   Process
───────────────────────────────────────────────────────────────────────── */
function Process() {
  const [ref, inView] = useInView(0.1)
  const steps = [
    { num: "01", title: "お問い合わせ",          desc: "お電話またはWebフォームよりご連絡ください。24時間以内にご返答します。" },
    { num: "02", title: "無料相談（30分）",       desc: "ご来所またはZoom・お電話での相談が可能です。まずは状況をお聞かせください。" },
    { num: "03", title: "ご提案・お見積り",       desc: "解決の方向性と費用の見積もりをご提示。納得いただいてから依頼を決めていただけます。" },
    { num: "04", title: "委任契約の締結",         desc: "内容・費用にご同意いただけたら契約締結。担当弁護士が本格的に動きます。" },
    { num: "05", title: "解決へ向けた活動",       desc: "交渉・調停・訴訟など最適な手段で解決を目指します。進捗は随時ご報告します。" },
    { num: "06", title: "解決・完了報告",         desc: "問題が解決したらご報告。アフターフォローもお任せください。" },
  ]
  return (
    <section ref={ref} id="process" style={{ background: C.cream, padding: "96px 0" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        <div className={`fade-up ${inView ? "vis" : ""}`} style={{ textAlign: "center", marginBottom: 64 }}>
          <div style={{ color: C.gold, fontSize: "0.68rem", letterSpacing: "0.26em", marginBottom: 12 }}>HOW IT WORKS</div>
          <h2 style={{ color: C.navy, fontSize: "clamp(1.6rem, 3vw, 2.3rem)", fontWeight: 700, marginBottom: 12 }}>相談の流れ</h2>
          <div style={{ width: 44, height: 2, background: C.gold, margin: "0 auto 16px" }}/>
          <p style={{ color: C.text, fontSize: "0.88rem", maxWidth: 480, margin: "0 auto", lineHeight: 1.9 }}>
            初めての方も安心。ご相談から解決まで、丁寧にご案内します。
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 28 }}>
          {steps.map((s, i) => (
            <div key={s.num} className={`fade-up ${inView ? "vis" : ""}`} style={{ transitionDelay: `${i * 0.08}s`, display: "flex", gap: 20 }}>
              <div style={{ flexShrink: 0 }}>
                <div style={{
                  width: 50, height: 50, borderRadius: "50%",
                  background: i < 2 ? `linear-gradient(135deg, ${C.gold}, ${C.goldLight})` : "white",
                  border: `2px solid ${i < 2 ? C.gold : "rgba(27,42,74,0.12)"}`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: i < 2 ? "white" : C.navy, fontWeight: 700, fontSize: "0.8rem", letterSpacing: "0.04em",
                }}>{s.num}</div>
              </div>
              <div style={{ paddingTop: 6 }}>
                <h3 style={{ color: C.navy, fontWeight: 700, fontSize: "0.95rem", marginBottom: 8 }}>{s.title}</h3>
                <p style={{ color: C.text, fontSize: "0.82rem", lineHeight: 1.85 }}>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────────────────────────────────
   Attorneys
───────────────────────────────────────────────────────────────────────── */
function Attorneys() {
  const [ref, inView] = useInView(0.1)
  const attorneys = [
    {
      name: "山田 誠一郎", nameEn: "Seiichiro Yamada", title: "代表弁護士",
      special: "相続・離婚・企業法務",
      career: ["1990年 東京大学法学部卒業", "1994年 弁護士登録（東京弁護士会）", "2001年 山田・中村法律事務所設立"],
      msg: "依頼者の方が「この弁護士に相談してよかった」と感じていただけるよう、常に誠実な対応を心がけています。",
    },
    {
      name: "中村 恵子", nameEn: "Keiko Nakamura", title: "副代表弁護士",
      special: "労働問題・男女問題・債務整理",
      career: ["1998年 早稲田大学法学部卒業", "2002年 弁護士登録（東京弁護士会）", "2004年 山田・中村法律事務所参加"],
      msg: "法律は生活を守るためのものです。難しい言葉を使わず、わかりやすく丁寧にご説明することを大切にしています。",
    },
  ]

  return (
    <section ref={ref} id="attorneys" style={{ background: "white", padding: "96px 0" }}>
      <div style={{ maxWidth: 1000, margin: "0 auto", padding: "0 24px" }}>
        <div className={`fade-up ${inView ? "vis" : ""}`} style={{ textAlign: "center", marginBottom: 64 }}>
          <div style={{ color: C.gold, fontSize: "0.68rem", letterSpacing: "0.26em", marginBottom: 12 }}>OUR ATTORNEYS</div>
          <h2 style={{ color: C.navy, fontSize: "clamp(1.6rem, 3vw, 2.3rem)", fontWeight: 700, marginBottom: 12 }}>弁護士・代表紹介</h2>
          <div style={{ width: 44, height: 2, background: C.gold, margin: "0 auto" }}/>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 28 }}>
          {attorneys.map((a, i) => (
            <div key={a.name} className={`fade-up ${inView ? "vis" : ""}`} style={{ transitionDelay: `${i * 0.14}s` }}>
              <div style={{ border: "1px solid rgba(27,42,74,0.08)", borderRadius: 10, overflow: "hidden" }}>
                {/* Photo placeholder */}
                <div style={{
                  height: 200,
                  background: `linear-gradient(158deg, ${C.navy} 0%, ${C.navyLight} 100%)`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  position: "relative",
                }}>
                  <PersonSVG female={i === 1}/>
                  <div style={{ position: "absolute", top: 16, right: 16, background: `linear-gradient(135deg, ${C.gold}, ${C.goldLight})`, padding: "4px 13px", borderRadius: 3, color: "white", fontSize: "0.68rem", fontWeight: 700 }}>{a.title}</div>
                  {/* Corner accent */}
                  <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 3, background: `linear-gradient(90deg, ${C.gold}, transparent)` }}/>
                </div>

                <div style={{ padding: "26px 28px 32px" }}>
                  <div style={{ marginBottom: 18 }}>
                    <h3 style={{ color: C.navy, fontWeight: 700, fontSize: "1.3rem" }}>{a.name}</h3>
                    <div style={{ color: C.textLight, fontSize: "0.7rem", letterSpacing: "0.08em", marginTop: 3 }}>{a.nameEn}</div>
                  </div>

                  <div style={{ marginBottom: 14 }}>
                    <div style={{ color: C.gold, fontSize: "0.66rem", letterSpacing: "0.12em", fontWeight: 700, marginBottom: 6 }}>得意分野</div>
                    <div style={{ color: C.navy, fontSize: "0.85rem", fontWeight: 600 }}>{a.special}</div>
                  </div>

                  <div style={{ marginBottom: 18 }}>
                    <div style={{ color: C.gold, fontSize: "0.66rem", letterSpacing: "0.12em", fontWeight: 700, marginBottom: 6 }}>経歴</div>
                    {a.career.map(c => (
                      <div key={c} style={{ color: C.text, fontSize: "0.8rem", lineHeight: 2 }}>・{c}</div>
                    ))}
                  </div>

                  <div style={{ borderTop: "1px solid rgba(27,42,74,0.07)", paddingTop: 16 }}>
                    <p style={{ color: C.text, fontSize: "0.83rem", lineHeight: 1.88, fontStyle: "italic" }}>「{a.msg}」</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────────────────────────────────
   FAQ
───────────────────────────────────────────────────────────────────────── */
function FAQ() {
  const [ref, inView] = useInView(0.1)
  const [open, setOpen] = useState<number | null>(null)

  const faqs = [
    { q: "初回相談は本当に無料ですか？",       a: "はい、初回30分の相談は完全無料です。相談後に依頼しないことも自由ですので、お気軽にご相談ください。" },
    { q: "費用の目安を教えてください。",       a: "案件の内容や難易度によって異なります。相談時に目安をお伝えしています。着手金・報酬金の体系や、費用倒れにならないかについても率直にアドバイスします。" },
    { q: "平日に来所できないのですが…",       a: "土日祝日のご相談も事前予約にて承っております。またZoomや電話での相談も可能ですので、遠方の方もご安心ください。" },
    { q: "相談したことは秘密にしてもらえますか？", a: "弁護士には法律で定められた守秘義務があります。ご相談内容が外部に漏れることは一切ありませんので、安心してお話しください。" },
    { q: "どのくらいで解決しますか？",         a: "案件によって大きく異なります。交渉で2〜3ヶ月の場合もあれば、訴訟になると1〜2年かかることもあります。相談時に見通しをお伝えします。" },
    { q: "弁護士費用が払えるか不安です。",     a: "法テラス（日本司法支援センター）の立替制度を利用できる場合があります。収入・資産が一定以下の方が対象です。詳しくはご相談ください。" },
  ]

  return (
    <section ref={ref} id="faq" style={{ background: C.cream, padding: "96px 0" }}>
      <div style={{ maxWidth: 860, margin: "0 auto", padding: "0 24px" }}>
        <div className={`fade-up ${inView ? "vis" : ""}`} style={{ textAlign: "center", marginBottom: 64 }}>
          <div style={{ color: C.gold, fontSize: "0.68rem", letterSpacing: "0.26em", marginBottom: 12 }}>FAQ</div>
          <h2 style={{ color: C.navy, fontSize: "clamp(1.6rem, 3vw, 2.3rem)", fontWeight: 700, marginBottom: 12 }}>よくある質問</h2>
          <div style={{ width: 44, height: 2, background: C.gold, margin: "0 auto" }}/>
        </div>

        <div className={`fade-up ${inView ? "vis" : ""}`} style={{ transitionDelay: "0.1s", display: "flex", flexDirection: "column", gap: 10 }}>
          {faqs.map((f, i) => (
            <div key={i} style={{
              background: "white", borderRadius: 8, overflow: "hidden",
              border: `1px solid ${open === i ? "rgba(196,147,63,0.4)" : "rgba(27,42,74,0.08)"}`,
              transition: "border-color 0.3s",
            }}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                style={{
                  width: "100%", padding: "20px 24px",
                  display: "flex", justifyContent: "space-between", alignItems: "flex-start",
                  cursor: "pointer", background: "none", border: "none", textAlign: "left", gap: 16,
                }}
              >
                <div style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                  <span style={{ color: C.gold, fontWeight: 700, fontSize: "1rem", lineHeight: 1.5, flexShrink: 0 }}>Q.</span>
                  <span style={{ color: C.navy, fontSize: "0.92rem", fontWeight: 600, lineHeight: 1.65 }}>{f.q}</span>
                </div>
                <div style={{
                  width: 26, height: 26, borderRadius: "50%", flexShrink: 0,
                  border: `1.5px solid ${open === i ? C.gold : "rgba(27,42,74,0.2)"}`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  transition: "all 0.3s", transform: open === i ? "rotate(45deg)" : "rotate(0)",
                  color: open === i ? C.gold : C.textLight,
                }}>
                  <svg width="11" height="11" viewBox="0 0 11 11"><path d="M5.5 1v9M1 5.5h9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
                </div>
              </button>

              <div className={`faq-answer ${open === i ? "open" : ""}`}>
                <div style={{ padding: "0 24px 22px", borderTop: "1px solid rgba(27,42,74,0.06)" }}>
                  <div style={{ display: "flex", gap: 14, paddingTop: 18 }}>
                    <span style={{ color: C.navy, fontWeight: 700, fontSize: "1rem", lineHeight: 1.5, flexShrink: 0 }}>A.</span>
                    <p style={{ color: C.text, fontSize: "0.88rem", lineHeight: 1.9 }}>{f.a}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────────────────────────────────
   CTA
───────────────────────────────────────────────────────────────────────── */
function CTA() {
  const [ref, inView] = useInView(0.15)
  return (
    <section ref={ref} id="contact" style={{ background: C.navy, padding: "96px 0", position: "relative", overflow: "hidden" }}>
      {/* BG accent */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        <svg width="100%" height="100%" viewBox="0 0 1300 600" preserveAspectRatio="xMidYMid slice">
          <circle cx="200" cy="100" r="300" fill={C.gold} opacity="0.04"/>
          <circle cx="1100" cy="500" r="250" fill={C.gold} opacity="0.04"/>
        </svg>
      </div>

      <div style={{ maxWidth: 780, margin: "0 auto", padding: "0 24px", textAlign: "center", position: "relative", zIndex: 1 }}>
        <div className={`fade-up ${inView ? "vis" : ""}`}>
          <div style={{ color: C.gold, fontSize: "0.68rem", letterSpacing: "0.26em", marginBottom: 20 }}>CONTACT US</div>
          <h2 style={{ color: "white", fontSize: "clamp(1.8rem, 3.5vw, 2.9rem)", fontWeight: 700, lineHeight: 1.4, marginBottom: 18 }}>
            一人で抱え込まず、<br/>まずはご相談ください。
          </h2>
          <p style={{ color: "rgba(255,255,255,0.64)", fontSize: "0.92rem", lineHeight: 1.95, marginBottom: 52 }}>
            初回相談は30分無料。秘密は厳守します。<br/>
            あなたの状況を丁寧にお聞きした上で、最善の解決方法をご提案します。
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", gap: 16, justifyContent: "center" }}>
            <a href="#" style={{
              background: `linear-gradient(135deg, ${C.gold}, ${C.goldLight})`,
              color: "white", padding: "17px 40px", borderRadius: 5,
              fontWeight: 700, fontSize: "0.96rem", letterSpacing: "0.05em",
              display: "inline-flex", alignItems: "center", gap: 10,
              transition: "all 0.3s ease",
              boxShadow: "0 6px 26px rgba(196,147,63,0.42)",
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "0 14px 40px rgba(196,147,63,0.55)" }}
              onMouseLeave={e => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = "0 6px 26px rgba(196,147,63,0.42)" }}
            >
              <svg width="17" height="17" viewBox="0 0 17 17" fill="none"><rect x="2" y="3" width="13" height="11" rx="2" stroke="white" strokeWidth="1.3"/><path d="M2 6.5l6.5 4.5 6.5-4.5" stroke="white" strokeWidth="1.3"/></svg>
              無料相談フォームへ
            </a>
            <a href="tel:0120-000-000" style={{
              border: `2px solid rgba(196,147,63,0.48)`, color: "white",
              padding: "17px 36px", borderRadius: 5,
              fontWeight: 600, fontSize: "0.96rem",
              display: "inline-flex", alignItems: "center", gap: 10,
              transition: "all 0.3s ease",
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = C.gold; e.currentTarget.style.background = "rgba(196,147,63,0.1)" }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(196,147,63,0.48)"; e.currentTarget.style.background = "" }}
            >
              <svg width="17" height="17" viewBox="0 0 17 17" fill="none"><path d="M4 2.5h3.5l1.5 3.5-2.5 1.5c.9 1.9 2.3 3.2 4.2 4.2l1.5-2.5 3.5 1.5V14A1.5 1.5 0 0114 15.5C7 15.5 1.5 10 1.5 3A1.5 1.5 0 013 1.5H4z" stroke="white" strokeWidth="1.2" fill="none"/></svg>
              0120-000-000
            </a>
          </div>

          <div style={{ display: "flex", gap: 28, justifyContent: "center", marginTop: 48, flexWrap: "wrap" }}>
            {["初回相談30分無料", "秘密厳守・守秘義務", "土日祝日対応", "Zoom相談可能"].map(t => (
              <div key={t} style={{ display: "flex", alignItems: "center", gap: 7, color: "rgba(255,255,255,0.58)", fontSize: "0.78rem" }}>
                <svg width="13" height="13" viewBox="0 0 13 13"><path d="M2 6.5l3.5 3.5 5.5-6" stroke={C.gold} strokeWidth="1.7" strokeLinecap="round" fill="none"/></svg>
                {t}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────────────────────────────────
   Footer
───────────────────────────────────────────────────────────────────────── */
function Footer() {
  const cols = [
    { title: "取扱業務",   links: ["離婚・男女問題", "相続・遺言", "労働問題", "不動産トラブル", "債務整理", "企業法務"] },
    { title: "事務所情報", links: ["弁護士紹介", "アクセス", "料金案内", "よくある質問", "プライバシーポリシー"] },
  ]
  return (
    <footer style={{ background: C.navyDark, borderTop: "1px solid rgba(196,147,63,0.1)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "60px 24px 32px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 40, marginBottom: 48 }}>
          {/* Brand */}
          <div style={{ gridColumn: "span 2" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 18 }}>
              <div style={{ width: 40, height: 40, background: `linear-gradient(135deg, ${C.gold}, ${C.goldLight})`, borderRadius: 4, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ color: "white", fontWeight: 700 }}>法</span>
              </div>
              <div>
                <div style={{ color: "white", fontWeight: 700, fontSize: "0.92rem" }}>山田・中村法律事務所</div>
                <div style={{ color: C.gold, fontSize: "0.6rem", letterSpacing: "0.1em" }}>YAMADA & NAKAMURA LAW OFFICE</div>
              </div>
            </div>
            <div style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.79rem", lineHeight: 1.95 }}>
              東京都千代田区丸の内1-1-1<br/>
              丸の内ビルディング15F<br/>
              TEL: 03-0000-0000 / FAX: 03-0000-0001<br/>
              受付時間: 平日 9:00〜18:00（要予約）
            </div>
          </div>

          {cols.map(col => (
            <div key={col.title}>
              <h4 style={{ color: C.gold, fontSize: "0.66rem", letterSpacing: "0.15em", fontWeight: 700, marginBottom: 16 }}>{col.title}</h4>
              {col.links.map(l => (
                <a key={l} href="#" style={{ display: "block", color: "rgba(255,255,255,0.42)", fontSize: "0.8rem", lineHeight: 2.4, transition: "color 0.2s" }}
                  onMouseEnter={e => e.currentTarget.style.color = "rgba(255,255,255,0.78)"}
                  onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.42)"}
                >{l}</a>
              ))}
            </div>
          ))}
        </div>

        <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)", paddingTop: 22, display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 8 }}>
          <p style={{ color: "rgba(255,255,255,0.28)", fontSize: "0.7rem" }}>© 2024 山田・中村法律事務所. All Rights Reserved.</p>
          <p style={{ color: "rgba(255,255,255,0.28)", fontSize: "0.7rem" }}>東京弁護士会所属 ｜ 弁護士法人番号 第0000号</p>
        </div>
      </div>
    </footer>
  )
}

/* ─────────────────────────────────────────────────────────────────────────
   App
───────────────────────────────────────────────────────────────────────── */
export default function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <ConsultationTopics/>
      <Strengths/>
      <CaseStudies/>
      <Process/>
      <Attorneys/>
      <FAQ/>
      <CTA/>
      <Footer/>
    </>
  )
}
