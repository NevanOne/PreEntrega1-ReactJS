import React from 'react';

const ItemListContainer = ({ greeting }) => {
  return (
    <div style={{ backgroundColor: '#f0f0f0', padding: '20px', textAlign: 'center' }}>
      <h2>{greeting}</h2>
      <p>Bienvenido a Goro's Gaming Lair. Aquí encontrarás los mejores juegos y peliculas al mejor precio.</p>
    </div>
  );
};

export default ItemListContainer;
