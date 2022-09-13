
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemCount from './Components/ItemCount/ItemCount';
import Container from 'react-bootstrap/Container';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './Components/Cart';


const onAdd = (cantidad) =>{
  console.log(`Compraste ${cantidad} unidades`);
}

function App() {
  return (
    <>
    
    <BrowserRouter>
    <NavBar ClassName="App" />
    <Container>
      <Routes>
        <Route path='/' element={<ItemListContainer greeting="Bienvenidos al Museo del Vino Mendoza"/>}/>
        <Route path='/categoria/:categoriaId' element={<ItemListContainer />}/>
        <Route path='/contador' element={<ItemCount initial={1} stock={10} onAdd={onAdd} />}/>
        <Route path='/detalle/:detalleId' element={<ItemDetailContainer />}/>
        <Route path='/carrito' element={<Cart />}/>
      </Routes>
    </Container>
    </BrowserRouter>
    
    </>
  );
}

export default App;
