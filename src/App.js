import Navbar from './components/Navbar/Navbar';
import Cart from './components/Cart';
import ItemListContainer from './components/ItemListContainer';


function App() {
  return <>
  <Navbar></Navbar>;
  <h1>Goro's Gaming Lair</h1>
      <ItemListContainer greeting="Bienvenido a Mi Tienda en Línea" />
  <Cart />
  </>
}

export default App;
