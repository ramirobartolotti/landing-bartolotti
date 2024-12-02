import React from 'react';

const Contenedor = (props) => {
  return (
    <div style={styles.container}>
      <h1 style={styles.welcomeMessage}>{props.welcomeMessage}</h1>
      <p style={styles.description}>
        Bienvenido a nuestra tienda en línea. Aquí encontrarás los mejores productos.
      </p>
    </div>
  );
};

Contenedor.defaultProps = {
  welcomeMessage: "¡Bienvenido a nuestra tienda!",
};

const styles = {
  container: {
    padding: '20px',
    textAlign: 'center',
    backgroundColor: '#f4f4f4',
  },
  welcomeMessage: {
    fontSize: '36px',
    color: '#333',
  },
  description: {
    fontSize: '18px',
    color: '#666',
  },
};

export default Contenedor;