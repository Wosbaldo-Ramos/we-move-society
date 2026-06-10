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

            {/* ACTIVIDADES */}
      <section id="actividades" style={{ padding: '2rem' }}>
        <h2 style={{
          fontSize: '20px',
          fontWeight: '900',
          background: 'var(--gradient-we)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          margin: '0 0 4px',
        }}>
          ¿Qué hacemos?
        </h2>
        <p style={{ fontSize: '13px', color: '#888', margin: '0 0 1.2rem' }}>
          Para todos los niveles, juntas siempre
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
          gap: '10px',
        }}>
          {[
            { name: 'WE Run', desc: 'Rutas por la Costa Brava', icon: '🏃‍♀️' },
            { name: 'WE Jump', desc: 'Salto y cardio en grupo', icon: '🤸‍♀️' },
            { name: 'WE Hit', desc: 'Boxeo y fuerza funcional', icon: '🥊' },
            { name: 'WE Ride', desc: 'Cicloturismo en grupo', icon: '🚴‍♀️' },
            { name: 'WE Swim', desc: 'Baños en cala', icon: '🏊‍♀️' },
          ].map((act) => (
            <div key={act.name} style={{
              background: 'var(--color-cream)',
              borderRadius: 'var(--radius-md)',
              padding: '1rem',
              textAlign: 'center',
              border: '1.5px solid var(--color-border)',
            }}>
              <div style={{ fontSize: '28px', marginBottom: '6px' }}>{act.icon}</div>
              <p style={{
                fontSize: '14px',
                fontWeight: '900',
                fontStyle: 'italic',
                background: 'var(--gradient-we)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                margin: '0 0 4px',
              }}>
                {act.name}
              </p>
              <p style={{ fontSize: '11px', color: '#C06050', margin: 0 }}>
                {act.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
          
          {/* PRÓXIMAS ACTIVIDADES */}
      <section style={{ padding: '2rem' }}>
        <h2 style={{
          fontSize: '20px',
          fontWeight: '900',
          background: 'var(--gradient-we)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          margin: '0 0 4px',
        }}>
          Próximas actividades
        </h2>
        <p style={{ fontSize: '13px', color: '#888', margin: '0 0 1.2rem' }}>
          Reserva tu plaza antes de que se llene
        </p>

        {[
          { day: '14', month: 'Jun', badge: 'WE Run', name: 'Ruta Cala Molins · 8km', info: 'Sant Feliu · 8:00h · 12 plazas', price: '6€', color: '#F04040' },
          { day: '19', month: 'Jun', badge: 'WE Hit', name: 'Sesión funcional · Parque', info: 'Sant Feliu · 9:00h · 15 plazas', price: '7€', color: '#E07020' },
          { day: '21', month: 'Jun', badge: 'WE Jump', name: 'Jump cardio · Playa', info: 'Passeig del Mar · 7:30h · 20 plazas', price: '5€', color: '#C060D0' },
        ].map((ev) => (
          <div key={ev.day + ev.badge} style={{
            background: '#fff',
            borderRadius: 'var(--radius-md)',
            border: '0.5px solid #e0e0e0',
            padding: '1rem 1.2rem',
            display: 'flex',
            alignItems: 'center',
            gap: '14px',
            marginBottom: '10px',
          }}>
            {/* Fecha */}
            <div style={{
              background: ev.color,
              color: '#fff',
              borderRadius: '10px',
              padding: '6px 10px',
              textAlign: 'center',
              minWidth: '44px',
            }}>
              <div style={{ fontSize: '20px', fontWeight: '900', lineHeight: 1 }}>{ev.day}</div>
              <div style={{ fontSize: '10px', fontWeight: '700', textTransform: 'uppercase' }}>{ev.month}</div>
            </div>

            {/* Info */}
            <div style={{ flex: 1 }}>
              <span style={{
                display: 'inline-block',
                background: 'var(--color-cream)',
                color: ev.color,
                borderRadius: '20px',
                fontSize: '11px',
                fontWeight: '700',
                padding: '2px 10px',
                border: `1px solid var(--color-border)`,
                marginBottom: '4px',
              }}>
                {ev.badge}
              </span>
              <p style={{ fontSize: '14px', fontWeight: '700', margin: '0 0 2px', color: '#333' }}>{ev.name}</p>
              <p style={{ fontSize: '12px', color: '#888', margin: 0 }}>{ev.info}</p>
            </div>

            {/* Precio y botón */}
            <div style={{ textAlign: 'right' }}>
              <p style={{ fontSize: '13px', fontWeight: '700', color: '#C060D0', margin: '0 0 4px' }}>{ev.price}</p>
              <button style={{
                background: ev.color,
                color: '#fff',
                border: 'none',
                borderRadius: '30px',
                padding: '7px 16px',
                fontSize: '12px',
                fontWeight: '700',
                cursor: 'pointer',
                fontFamily: 'inherit',
              }}>
                Reservar
              </button>
            </div>
          </div>
        ))}
      </section>
        {/* ÁLBUMES */}
      <section id="albumes" style={{ padding: '2rem' }}>
        <h2 style={{
          fontSize: '20px',
          fontWeight: '900',
          background: 'var(--gradient-we)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          margin: '0 0 4px',
        }}>
          Álbumes
        </h2>
        <p style={{ fontSize: '13px', color: '#888', margin: '0 0 1.2rem' }}>
          Fotos y vídeos de cada actividad
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
          gap: '12px',
        }}>
          {[
            { name: 'WE Run', date: 'Ruta Cala Molins · Jun 2025', icon: '🏃‍♀️', count: '24 fotos · 3 vídeos', bg: 'linear-gradient(135deg, #FAD0C0, #F08060)' },
            { name: 'WE Jump', date: 'Sesión Playa · May 2025', icon: '🤸‍♀️', count: '18 fotos · 2 vídeos', bg: 'linear-gradient(135deg, #F0D0F8, #D080E0)' },
            { name: 'WE Hit', date: 'Funcional Parque · Abr 2025', icon: '🥊', count: '21 fotos · 1 vídeo', bg: 'linear-gradient(135deg, #FAE0C0, #F0A060)' },
            { name: 'WE Ride', date: 'Volta Gavarres · Abr 2025', icon: '🚴‍♀️', count: '31 fotos · 2 vídeos', bg: 'linear-gradient(135deg, #FAF0EC, #F0C090)' },
            { name: 'WE Swim', date: 'Cala Bona · Jun 2025', icon: '🏊‍♀️', count: '12 fotos', bg: 'linear-gradient(135deg, #C0E8F8, #60B0D8)' },
          ].map((album) => (
            <div key={album.name} style={{
              background: '#fff',
              borderRadius: 'var(--radius-md)',
              border: '0.5px solid #e0e0e0',
              overflow: 'hidden',
              cursor: 'pointer',
            }}>
              {/* Thumbnail */}
              <div style={{
                height: '100px',
                background: album.bg,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
              }}>
                <span style={{ fontSize: '40px' }}>{album.icon}</span>
                <span style={{
                  position: 'absolute',
                  bottom: '6px',
                  right: '8px',
                  background: 'rgba(0,0,0,0.35)',
                  color: '#fff',
                  fontSize: '11px',
                  fontWeight: '700',
                  borderRadius: '20px',
                  padding: '2px 8px',
                }}>
                  {album.count}
                </span>
              </div>
              {/* Info */}
              <div style={{ padding: '10px 12px' }}>
                <p style={{
                  fontSize: '13px',
                  fontWeight: '700',
                  fontStyle: 'italic',
                  background: 'var(--gradient-we)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  margin: '0 0 2px',
                }}>
                  {album.name}
                </p>
                <p style={{ fontSize: '11px', color: '#888', margin: 0 }}>{album.date}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
          {/* TIENDAS */}
      <section id="tiendas" style={{ padding: '2rem' }}>
        <h2 style={{
          fontSize: '20px',
          fontWeight: '900',
          background: 'var(--gradient-we)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          margin: '0 0 4px',
        }}>
          Tiendas colaboradoras
        </h2>
        <p style={{ fontSize: '13px', color: '#888', margin: '0 0 1.2rem' }}>
          Descuentos exclusivos para miembros WE
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
          gap: '10px',
        }}>
          {[
            { name: 'SportLocal', type: 'Material deportivo', icon: '👟', disc: '10% dto.' },
            { name: 'Natura Café', type: 'Nutrición · desayunos', icon: '🥗', disc: 'Café gratis' },
            { name: 'Fisio Costa', type: 'Fisioterapia · recovery', icon: '💆‍♀️', disc: '15% dto.' },
          ].map((shop) => (
            <div key={shop.name} style={{
              background: '#fff',
              borderRadius: 'var(--radius-md)',
              border: '0.5px solid #e0e0e0',
              padding: '1rem',
              textAlign: 'center',
            }}>
              <div style={{ fontSize: '24px', marginBottom: '6px' }}>{shop.icon}</div>
              <p style={{ fontSize: '13px', fontWeight: '700', color: '#333', margin: '0 0 2px' }}>{shop.name}</p>
              <p style={{ fontSize: '11px', color: '#888' }}>{shop.type}</p>
              <span style={{
                display: 'inline-block',
                background: '#F0D0F8',
                color: '#9030B0',
                borderRadius: '20px',
                fontSize: '11px',
                fontWeight: '700',
                padding: '2px 10px',
                marginTop: '6px',
              }}>
                {shop.disc}
              </span>
            </div>
          ))}
        </div>
      </section>
      
    </main>
  )
}

export default Home