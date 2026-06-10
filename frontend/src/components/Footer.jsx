function Footer() {
  return (
    <footer style={{
      backgroundColor: 'var(--color-coral)',
      borderRadius: '16px',
      padding: '1.5rem',
      textAlign: 'center',
      margin: '2rem',
    }}>
      <p style={{
        fontFamily: 'var(--font-main)',
        fontSize: '36px',
        fontWeight: '900',
        fontStyle: 'italic',
        color: '#FAF0EC',
        marginBottom: '4px',
      }}>
        we.
      </p>
      <p style={{ fontSize: '13px', color: '#FAF0EC', opacity: '0.85', margin: '4px 0' }}>
        Move together · Costa Brava
      </p>
      <p style={{ fontSize: '13px', color: '#FAF0EC', margin: '6px 0 0' }}>
        @wemovesociety
      </p>
    </footer>
  )
}

export default Footer