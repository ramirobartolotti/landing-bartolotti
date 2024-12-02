import React from 'react';
import NavBar from './components/NavBar';
import Contenedor from './components/Contenedor';

const App = () => {
  return (
    <div>
      <NavBar />
      <Contenedor welcomeMessage="¡Explora las mejores ofertas de la temporada!" />
    </div>
  );
};

export default App;