import Navbar from './components/Navbar/Navbar';
import Cart from './components/Cart';
import ItemListContainer from './components/ItemListContainer';


function App() {
  return <>
  <Navbar></Navbar>;
      <ItemListContainer greeting="Bienvenido a Goro's Gaming Lair" />
  <Cart />
  </>
}

export default App;
