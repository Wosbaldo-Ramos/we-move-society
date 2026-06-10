import '../styles/variables.css'

function Navbar() {
  return (
    <nav style={{
      backgroundColor: 'var(--color-cream)',
      padding: '1rem 2rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderBottom: '1.5px solid var(--color-border)',
    }}>
      <span style={{
        fontFamily: 'var(--font-main)',
        fontSize: '32px',
        fontWeight: '900',
        fontStyle: 'italic',
        background: 'var(--gradient-we)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      }}>
        we.
      </span>
      <div style={{ display: 'flex', gap: '1.5rem' }}>
        <a href="#actividades" style={{ color: 'var(--color-coral)', fontWeight: '700', textDecoration: 'none', fontSize: '14px' }}>Actividades</a>
        <a href="#albumes" style={{ color: 'var(--color-coral)', fontWeight: '700', textDecoration: 'none', fontSize: '14px' }}>Álbumes</a>
        <a href="#tiendas" style={{ color: 'var(--color-coral)', fontWeight: '700', textDecoration: 'none', fontSize: '14px' }}>Tiendas</a>
      </div>
      <button style={{
        background: 'var(--color-coral)',
        color: '#fff',
        border: 'none',
        borderRadius: 'var(--radius-full)',
        padding: '8px 20px',
        fontWeight: '700',
        fontSize: '14px',
        cursor: 'pointer',
      }}>
        Únete
      </button>
    </nav>
  )
}

export default Navbar