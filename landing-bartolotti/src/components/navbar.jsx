import React from 'react';

const NavBar = () => {
  return (
    <nav style={styles.navbar}>
      <div style={styles.logo}>
        <img src="/path-to-your-logo.png" alt="Logo" style={styles.logoImage} />
      </div>
      <div style={styles.links}>
        <a href="/" style={styles.link}>Inicio</a>
        <a href="/tienda" style={styles.link}>Tienda</a>
        <a href="/sobrenosotros" style={styles.link}>Sobre Nosotros</a>
        <a href="/contacto" style={styles.link}>Contacto</a>
      </div>
      <div style={styles.cartWidget}>
        <img src="/path-to-cart-icon.png" alt="Cart" style={styles.cartIcon} />
        <span style={styles.cartCount}>0</span>
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: '#333',
    color: '#fff',
  },
  logo: {
    flex: 1,
  },
  logoImage: {
    height: '40px',
  },
  links: {
    display: 'flex',
    gap: '20px',
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '18px',
  },
  cartWidget: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
  },
  cartIcon: {
    width: '30px',
    height: '30px',
    marginRight: '5px',
  },
  cartCount: {
    backgroundColor: '#f44336',
    borderRadius: '50%',
    padding: '5px 10px',
    color: '#fff',
    fontSize: '14px',
  },
};

export default NavBar;