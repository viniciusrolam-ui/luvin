'use client';

import { useState } from 'react';

// ─── TYPES ───────────────────────────────────────────────────────────────────
interface Article {
  id: number;
  category: string;
  categoryColor: string;
  title: string;
  excerpt: string;
  tag: string;
  readTime: string;
  affiliateLabel: string;
  affiliateHref: string;
  emoji: string;
  hero?: boolean;
}

// ─── DATA ────────────────────────────────────────────────────────────────────
const NAV_LINKS = ['Tech & AI', 'Home Decor & Smart Living', 'Finance & Wealth', 'Lifestyle Gadgets'];

const CATEGORY_COLORS: Record<string, string> = {
  'Tech & AI': '#6C63FF',
  'Home Decor & Smart Living': '#00BFA6',
  'Finance & Wealth': '#FFB300',
  'Lifestyle Gadgets': '#F06292',
};

const ARTICLES: Article[] = [
  {
    id: 1,
    category: 'Lifestyle Gadgets',
    categoryColor: CATEGORY_COLORS['Lifestyle Gadgets'],
    title: 'Top 5 Smart Home Gadgets That Are Worth Every Penny in 2026',
    excerpt:
      'From AI-powered security cameras to voice-controlled lighting ecosystems — these are the gadgets actually changing how people live at home. We tested them all so you don\'t have to.',
    tag: '🔥 Trending',
    readTime: '6 min read',
    affiliateLabel: '→ Shop Top Smart Home Picks on Amazon',
    affiliateHref: 'https://www.amazon.com/s?k=smart+home+gadgets+2026&tag=YOUR_AFFILIATE_ID',
    emoji: '🏠',
    hero: true,
  },
  {
    id: 2,
    category: 'Tech & AI',
    categoryColor: CATEGORY_COLORS['Tech & AI'],
    title: 'Is AI Automating Your Job? Here\'s How to Pivot and Profit',
    excerpt:
      'The jobs AI is replacing — and the high-income skills you need to pivot into right now before the window closes.',
    tag: '🤖 AI',
    readTime: '5 min read',
    affiliateLabel: '→ Best AI & Productivity Books on Amazon',
    affiliateHref: 'https://www.amazon.com/s?k=AI+skills+books+2026&tag=YOUR_AFFILIATE_ID',
    emoji: '🤖',
  },
  {
    id: 3,
    category: 'Home Decor & Smart Living',
    categoryColor: CATEGORY_COLORS['Home Decor & Smart Living'],
    title: 'The Minimalist Home Office Setup Guide (Under $500)',
    excerpt:
      'Clean desk. Clear mind. This step-by-step guide builds a distraction-free, aesthetic home office without overspending.',
    tag: '🏆 Editor\'s Pick',
    readTime: '7 min read',
    affiliateLabel: '→ Shop Minimalist Desk Setups on Amazon',
    affiliateHref: 'https://www.amazon.com/s?k=minimalist+home+office+setup&tag=YOUR_AFFILIATE_ID',
    emoji: '🖥️',
  },
  {
    id: 4,
    category: 'Finance & Wealth',
    categoryColor: CATEGORY_COLORS['Finance & Wealth'],
    title: '7 Passive Income Streams You Can Start This Weekend',
    excerpt:
      'Dividend investing, digital products, print-on-demand, and AI tools that generate money while you sleep — ranked by ROI.',
    tag: '💰 Finance',
    readTime: '8 min read',
    affiliateLabel: '→ Top Personal Finance Books on Amazon',
    affiliateHref: 'https://www.amazon.com/s?k=passive+income+books&tag=YOUR_AFFILIATE_ID',
    emoji: '💰',
  },
  {
    id: 5,
    category: 'Tech & AI',
    categoryColor: CATEGORY_COLORS['Tech & AI'],
    title: 'Best Wireless Earbuds of 2026: Tested & Ranked',
    excerpt:
      'ANC, spatial audio, battery life — we pit the top contenders against each other in the most competitive earbuds market yet.',
    tag: '🎧 Review',
    readTime: '5 min read',
    affiliateLabel: '→ Compare Earbuds Deals on Amazon',
    affiliateHref: 'https://www.amazon.com/s?k=best+wireless+earbuds+2026&tag=YOUR_AFFILIATE_ID',
    emoji: '🎧',
  },
  {
    id: 6,
    category: 'Lifestyle Gadgets',
    categoryColor: CATEGORY_COLORS['Lifestyle Gadgets'],
    title: 'The 2026 Travel Tech Kit: Pack Light, Stay Connected',
    excerpt:
      'Portable chargers, eSIM routers, compact cameras — the exact gear frequent travelers and digital nomads swear by.',
    tag: '✈️ Travel',
    readTime: '6 min read',
    affiliateLabel: '→ Shop Travel Tech Essentials on Amazon',
    affiliateHref: 'https://www.amazon.com/s?k=travel+tech+gadgets+2026&tag=YOUR_AFFILIATE_ID',
    emoji: '✈️',
  },
  {
    id: 7,
    category: 'Home Decor & Smart Living',
    categoryColor: CATEGORY_COLORS['Home Decor & Smart Living'],
    title: 'Smart Kitchen Appliances That Actually Save You Time in 2026',
    excerpt:
      'Air fryer combos, auto-stir pots, AI recipe assistants — we separate the gimmicks from the kitchen game-changers.',
    tag: '🍳 Home',
    readTime: '5 min read',
    affiliateLabel: '→ Shop Smart Kitchen Deals on Amazon',
    affiliateHref: 'https://www.amazon.com/s?k=smart+kitchen+appliances+2026&tag=YOUR_AFFILIATE_ID',
    emoji: '🍳',
  },
];

// ─── STYLE TOKENS ────────────────────────────────────────────────────────────
const T = {
  bg: '#0D0D0D',
  surface: '#161616',
  card: '#1C1C1E',
  border: '#2A2A2A',
  text: '#F0F0F0',
  muted: '#888',
  accent: '#6C63FF',
};

// ─── AD SLOT COMPONENTS ──────────────────────────────────────────────────────
function AdLeaderboard() {
  return (
    <div
      style={{
        width: '100%',
        maxWidth: 728,
        height: 90,
        margin: '0 auto',
        background: 'linear-gradient(135deg,#1a1a2e,#16213e)',
        border: `1px dashed ${T.border}`,
        borderRadius: 8,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#555',
        fontSize: 12,
        letterSpacing: 2,
        fontFamily: 'monospace',
        flexShrink: 0,
      }}
    >
      [ GOOGLE_ADSENSE_LEADERBOARD — 728×90 ]
    </div>
  );
}

function AdRectangle() {
  return (
    <div
      style={{
        width: 300,
        height: 250,
        background: 'linear-gradient(135deg,#1a1a2e,#16213e)',
        border: `1px dashed ${T.border}`,
        borderRadius: 8,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#555',
        fontSize: 11,
        letterSpacing: 1.5,
        fontFamily: 'monospace',
        flexShrink: 0,
      }}
    >
      [ GOOGLE_ADSENSE_RECTANGLE — 300×250 ]
    </div>
  );
}

// ─── HERO CARD ───────────────────────────────────────────────────────────────
function HeroCard({ article }: { article: Article }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: hov
          ? 'linear-gradient(135deg,#1f1c3a,#1C1C1E)'
          : 'linear-gradient(135deg,#161625,#1C1C1E)',
        border: `1px solid ${hov ? T.accent : T.border}`,
        borderRadius: 16,
        padding: '40px 36px',
        cursor: 'pointer',
        transition: 'all .25s ease',
        boxShadow: hov ? `0 0 40px ${T.accent}33` : '0 4px 24px #00000066',
        display: 'flex',
        flexDirection: 'column',
        gap: 20,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* bg glow */}
      <div
        style={{
          position: 'absolute',
          top: -60,
          right: -60,
          width: 260,
          height: 260,
          borderRadius: '50%',
          background: `${article.categoryColor}18`,
          filter: 'blur(60px)',
          pointerEvents: 'none',
        }}
      />
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <span
          style={{
            background: article.categoryColor,
            color: '#fff',
            fontSize: 11,
            fontWeight: 700,
            padding: '3px 10px',
            borderRadius: 20,
            letterSpacing: 1,
            textTransform: 'uppercase',
          }}
        >
          {article.category}
        </span>
        <span style={{ color: '#ff6b6b', fontSize: 12, fontWeight: 600 }}>{article.tag}</span>
      </div>

      <div style={{ fontSize: 64, lineHeight: 1 }}>{article.emoji}</div>

      <h1
        style={{
          fontSize: 'clamp(26px,4vw,42px)',
          fontWeight: 800,
          color: T.text,
          lineHeight: 1.25,
          margin: 0,
        }}
      >
        {article.title}
      </h1>
      <p style={{ color: '#aaa', fontSize: 17, lineHeight: 1.7, margin: 0 }}>{article.excerpt}</p>

      {/* Amazon affiliate CTA */}
      <a
        href={article.affiliateHref}
        target="_blank"
        rel="noopener noreferrer nofollow"
        style={{
          display: 'inline-block',
          padding: '12px 24px',
          borderRadius: 8,
          background: '#FF9900',
          color: '#000',
          fontWeight: 700,
          fontSize: 14,
          textDecoration: 'none',
          alignSelf: 'flex-start',
          transition: 'opacity .2s',
        }}
      >
        {article.affiliateLabel}
      </a>

      <span style={{ color: T.muted, fontSize: 12 }}>{article.readTime}</span>
    </div>
  );
}

// ─── SECONDARY CARD ──────────────────────────────────────────────────────────
function ArticleCard({ article }: { article: Article }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: hov ? '#222' : T.card,
        border: `1px solid ${hov ? article.categoryColor + '66' : T.border}`,
        borderRadius: 12,
        padding: 24,
        cursor: 'pointer',
        transition: 'all .2s ease',
        display: 'flex',
        flexDirection: 'column',
        gap: 12,
        boxShadow: hov ? `0 4px 24px ${article.categoryColor}22` : 'none',
      }}
    >
      <div style={{ fontSize: 36 }}>{article.emoji}</div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
        <span
          style={{
            background: article.categoryColor + '22',
            color: article.categoryColor,
            fontSize: 10,
            fontWeight: 700,
            padding: '2px 8px',
            borderRadius: 20,
            letterSpacing: 1,
            textTransform: 'uppercase',
            border: `1px solid ${article.categoryColor}44`,
          }}
        >
          {article.category}
        </span>
        <span style={{ color: T.muted, fontSize: 11 }}>{article.readTime}</span>
      </div>
      <h2 style={{ fontSize: 17, fontWeight: 700, color: T.text, lineHeight: 1.35, margin: 0 }}>
        {article.title}
      </h2>
      <p style={{ color: '#999', fontSize: 13, lineHeight: 1.65, margin: 0 }}>{article.excerpt}</p>
      <a
        href={article.affiliateHref}
        target="_blank"
        rel="noopener noreferrer nofollow"
        style={{
          color: '#FF9900',
          fontSize: 12,
          fontWeight: 600,
          textDecoration: 'none',
          marginTop: 4,
        }}
      >
        {article.affiliateLabel}
      </a>
    </div>
  );
}

// ─── PAGE ────────────────────────────────────────────────────────────────────
export default function HomePage() {
  const [activeNav, setActiveNav] = useState('All');
  const [menuOpen, setMenuOpen] = useState(false);

  const hero = ARTICLES[0];
  const grid = ARTICLES.slice(1, 7);

  return (
    <div
      style={{
        minHeight: '100vh',
        background: T.bg,
        color: T.text,
        fontFamily:
          "'Inter','Segoe UI',system-ui,-apple-system,BlinkMacSystemFont,sans-serif",
        lineHeight: 1.6,
      }}
    >
      {/* ── HEADER ── */}
      <header
        style={{
          background: '#0D0D0Ddd',
          backdropFilter: 'blur(16px)',
          borderBottom: `1px solid ${T.border}`,
          position: 'sticky',
          top: 0,
          zIndex: 100,
        }}
      >
        {/* leaderboard ad */}
        <div style={{ padding: '10px 20px', background: '#111' }}>
          <AdLeaderboard />
        </div>

        <div
          style={{
            maxWidth: 1200,
            margin: '0 auto',
            padding: '0 24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: 64,
          }}
        >
          {/* Logo */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div
              style={{
                width: 32,
                height: 32,
                background: `linear-gradient(135deg,${T.accent},#a78bfa)`,
                borderRadius: 8,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 16,
              }}
            >
              ⚡
            </div>
            <span
              style={{
                fontWeight: 800,
                fontSize: 20,
                background: `linear-gradient(90deg,${T.accent},#a78bfa)`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              PulseGrid
            </span>
            <span
              style={{
                fontSize: 10,
                background: T.accent,
                color: '#fff',
                padding: '2px 6px',
                borderRadius: 4,
                fontWeight: 700,
                letterSpacing: 1,
              }}
            >
              PRO
            </span>
          </div>

          {/* Desktop Nav */}
          <nav style={{ display: 'flex', gap: 4, alignItems: 'center' }}>
            {['All', ...NAV_LINKS].map((link) => (
              <button
                key={link}
                onClick={() => setActiveNav(link)}
                style={{
                  background: activeNav === link ? T.accent : 'transparent',
                  color: activeNav === link ? '#fff' : T.muted,
                  border: 'none',
                  borderRadius: 6,
                  padding: '6px 14px',
                  fontSize: 13,
                  fontWeight: activeNav === link ? 700 : 400,
                  cursor: 'pointer',
                  transition: 'all .15s',
                  whiteSpace: 'nowrap',
                }}
              >
                {link}
              </button>
            ))}
          </nav>

          {/* Subscribe CTA */}
          <button
            style={{
              background: `linear-gradient(90deg,${T.accent},#a78bfa)`,
              border: 'none',
              borderRadius: 8,
              padding: '8px 18px',
              color: '#fff',
              fontWeight: 700,
              fontSize: 13,
              cursor: 'pointer',
            }}
          >
            Subscribe Free
          </button>
        </div>
      </header>

      {/* ── HERO BANNER ── */}
      <div
        style={{
          background: `linear-gradient(180deg,${T.accent}14 0%,transparent 100%)`,
          borderBottom: `1px solid ${T.border}`,
          padding: '14px 0',
          textAlign: 'center',
        }}
      >
        <span style={{ fontSize: 13, color: T.muted }}>
          🌍 Trusted by readers in&nbsp;
          <strong style={{ color: T.text }}>USA · Europe · UAE</strong> &nbsp;|&nbsp; 100% curated, affiliate-supported
        </span>
      </div>

      {/* ── MAIN LAYOUT ── */}
      <main style={{ maxWidth: 1200, margin: '0 auto', padding: '40px 24px' }}>
        <div style={{ display: 'flex', gap: 36, alignItems: 'flex-start' }}>

          {/* ── CONTENT COLUMN ── */}
          <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: 40 }}>

            {/* Section label */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <span
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: 2,
                  color: T.accent,
                  textTransform: 'uppercase',
                }}
              >
                ◆ Trending Now
              </span>
              <div style={{ flex: 1, height: 1, background: T.border }} />
            </div>

            {/* HERO */}
            <HeroCard article={hero} />

            {/* Mid-content leaderboard ad */}
            <div
              style={{
                width: '100%',
                maxWidth: 728,
                height: 90,
                background: 'linear-gradient(135deg,#1a1a2e,#16213e)',
                border: `1px dashed ${T.border}`,
                borderRadius: 8,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#555',
                fontSize: 12,
                letterSpacing: 2,
                fontFamily: 'monospace',
              }}
            >
              [ GOOGLE_ADSENSE_LEADERBOARD — 728×90 ]
            </div>

            {/* Section label */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <span
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: 2,
                  color: '#aaa',
                  textTransform: 'uppercase',
                }}
              >
                ◆ Editor's Selection
              </span>
              <div style={{ flex: 1, height: 1, background: T.border }} />
            </div>

            {/* ARTICLE GRID — 2 col */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill,minmax(280px,1fr))',
                gap: 20,
              }}
            >
              {grid.map((a) => (
                <ArticleCard key={a.id} article={a} />
              ))}
            </div>

            {/* Bottom ad */}
            <div
              style={{
                width: '100%',
                maxWidth: 728,
                height: 90,
                background: 'linear-gradient(135deg,#1a1a2e,#16213e)',
                border: `1px dashed ${T.border}`,
                borderRadius: 8,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#555',
                fontSize: 12,
                letterSpacing: 2,
                fontFamily: 'monospace',
              }}
            >
              [ GOOGLE_ADSENSE_LEADERBOARD — 728×90 ]
            </div>
          </div>

          {/* ── SIDEBAR ── */}
          <aside
            style={{
              width: 300,
              flexShrink: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: 28,
              position: 'sticky',
              top: 160,
            }}
          >
            {/* Rectangle Ad */}
            <AdRectangle />

            {/* Trending sidebar widget */}
            <div
              style={{
                background: T.card,
                border: `1px solid ${T.border}`,
                borderRadius: 12,
                padding: 20,
              }}
            >
              <h3
                style={{
                  fontSize: 13,
                  fontWeight: 700,
                  color: T.accent,
                  letterSpacing: 2,
                  textTransform: 'uppercase',
                  margin: '0 0 16px',
                }}
              >
                ◆ Quick Reads
              </h3>
              {ARTICLES.slice(1, 5).map((a, i) => (
                <div
                  key={a.id}
                  style={{
                    display: 'flex',
                    gap: 12,
                    padding: '12px 0',
                    borderBottom: i < 3 ? `1px solid ${T.border}` : 'none',
                    cursor: 'pointer',
                  }}
                >
                  <span
                    style={{
                      fontSize: 24,
                      width: 40,
                      height: 40,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: T.surface,
                      borderRadius: 8,
                      flexShrink: 0,
                    }}
                  >
                    {a.emoji}
                  </span>
                  <div>
                    <p style={{ margin: 0, fontSize: 13, fontWeight: 600, color: T.text, lineHeight: 1.35 }}>
                      {a.title}
                    </p>
                    <span style={{ fontSize: 11, color: T.muted }}>{a.readTime}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Newsletter widget */}
            <div
              style={{
                background: `linear-gradient(135deg,${T.accent}22,#a78bfa22)`,
                border: `1px solid ${T.accent}44`,
                borderRadius: 12,
                padding: 20,
                display: 'flex',
                flexDirection: 'column',
                gap: 12,
              }}
            >
              <h3 style={{ margin: 0, fontSize: 16, fontWeight: 800, color: T.text }}>
                📬 Weekly Alpha Drop
              </h3>
              <p style={{ margin: 0, fontSize: 13, color: '#aaa', lineHeight: 1.6 }}>
                Get the top 5 high-value articles every Sunday. No spam, ever.
              </p>
              <input
                type="email"
                placeholder="your@email.com"
                style={{
                  background: '#0D0D0D',
                  border: `1px solid ${T.border}`,
                  borderRadius: 8,
                  padding: '10px 14px',
                  color: T.text,
                  fontSize: 13,
                  outline: 'none',
                  width: '100%',
                  boxSizing: 'border-box',
                }}
              />
              <button
                style={{
                  background: `linear-gradient(90deg,${T.accent},#a78bfa)`,
                  border: 'none',
                  borderRadius: 8,
                  padding: '10px',
                  color: '#fff',
                  fontWeight: 700,
                  fontSize: 13,
                  cursor: 'pointer',
                  width: '100%',
                }}
              >
                Subscribe Free →
              </button>
            </div>

            {/* Second rectangle ad */}
            <AdRectangle />
          </aside>
        </div>
      </main>

      {/* ── FOOTER ── */}
      <footer
        style={{
          borderTop: `1px solid ${T.border}`,
          background: T.surface,
          padding: '40px 24px',
          marginTop: 60,
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            gap: 20,
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
            <div
              style={{
                width: 28,
                height: 28,
                background: `linear-gradient(135deg,${T.accent},#a78bfa)`,
                borderRadius: 6,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 14,
              }}
            >
              ⚡
            </div>
            <span style={{ fontWeight: 800, fontSize: 18, color: T.text }}>PulseGrid</span>
          </div>
          <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap', justifyContent: 'center' }}>
            {['About', 'Privacy Policy', 'Affiliate Disclosure', 'Contact', 'Advertise'].map((l) => (
              <a key={l} href="#" style={{ color: T.muted, fontSize: 13, textDecoration: 'none' }}>
                {l}
              </a>
            ))}
          </div>
          <p style={{ color: '#444', fontSize: 12, maxWidth: 600, lineHeight: 1.7, margin: 0 }}>
            PulseGrid is a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.com. Some links on this site may be affiliate links.
          </p>
          <p style={{ color: '#333', fontSize: 11, margin: 0 }}>
            © {new Date().getFullYear()} PulseGrid Media. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
