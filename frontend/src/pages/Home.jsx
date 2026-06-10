function Home() {
  return (
    <main>

      {/* HERO */}
      <section style={{
        backgroundColor: 'var(--color-cream)',
        padding: '3.5rem 2rem 2.5rem',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
        minHeight: '320px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}>

        {/* Patrón de fondo */}
        <div id="hero-pattern" style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '2px 0',
          zIndex: 0,
        }}>
          {[...Array(6)].map((_, rowIdx) => (
            <div key={rowIdx} style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '0 4px',
              width: '100%',
            }}>
              {[...Array(10)].map((_, colIdx) => {
                const fonts = [
                  { f: "'Bebas Neue', sans-serif", w: '400', s: 'normal', sz: 18 },
                  { f: "'Nunito', sans-serif", w: '900', s: 'italic', sz: 22 },
                  { f: 'cursive', w: '400', s: 'normal', sz: 16 },
                  { f: "'Nunito', sans-serif", w: '900', s: 'normal', sz: 20 },
                  { f: 'cursive', w: '700', s: 'normal', sz: 18 },
                ]
                const words = ['we', 'WE', 'we.', 'We', 'WE.', 'we']
                const idx = rowIdx * 10 + colIdx
                const font = fonts[idx % fonts.length]
                return (
                  <span key={colIdx} style={{
                    fontFamily: font.f,
                    fontWeight: font.w,
                    fontStyle: font.s,
                    fontSize: `${font.sz}px`,
                    color: '#F04040',
                    opacity: 0.16,
                    userSelect: 'none',
                  }}>
                    {words[idx % words.length]}
                  </span>
                )
              })}
            </div>
          ))}
        </div>

        {/* Contenido */}
        <div style={{ position: 'relative', zIndex: 1 }}>
          <span style={{
            fontFamily: "'Nunito', sans-serif",
            fontSize: '72px',
            fontWeight: '900',
            fontStyle: 'italic',
            background: 'var(--gradient-we)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            display: 'block',
            marginBottom: '0.2rem',
          }}>
            we.
          </span>

          <p style={{
            fontSize: '15px',
            fontWeight: '900',
            letterSpacing: '2px',
            textTransform: 'uppercase',
            background: 'var(--gradient-we)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            margin: '0 0 0.4rem',
          }}>
            Move Society
          </p>

          <p style={{ fontSize: '13px', color: 'var(--color-coral-dark)', opacity: 0.8, margin: '0 0 1.4rem' }}>
            Actividades deportivas · comunidad · Costa Brava
          </p>

          <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '1rem' }}>
            <button style={{
              background: 'var(--color-coral)',
              color: '#fff',
              border: 'none',
              borderRadius: 'var(--radius-full)',
              padding: '11px 26px',
              fontSize: '14px',
              fontWeight: '700',
              cursor: 'pointer',
              fontFamily: 'inherit',
            }}>
              Únete al grupo
            </button>
            <button style={{
              background: 'transparent',
              color: 'var(--color-coral)',
              border: '2px solid var(--color-coral)',
              borderRadius: 'var(--radius-full)',
              padding: '11px 26px',
              fontSize: '14px',
              fontWeight: '700',
              cursor: 'pointer',
              fontFamily: 'inherit',
            }}>
              Ver actividades
            </button>
          </div>

          {/* Instagram */}
          
            <a href="https://www.instagram.com/wemovesociety"
            target="_blank"
            rel="noreferrer"
            style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'var(--gradient-we)',
                borderRadius: '12px',
                padding: '10px 20px',
                textDecoration: 'none',
            }}
            >
            <span style={{ color: '#fff', fontSize: '14px', fontWeight: '700' }}>
              @wemovesociety
            </span>
          </a>
        </div>

      </section>

    </main>
  )
}

export default Home