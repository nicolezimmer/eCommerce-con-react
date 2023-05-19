import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer"
import { NavBar } from "./components/NavBar/NavBar";
import { ItemCount } from './components/ItemCount/ItemCount';
import { Pika } from './components/Pika/Pika';
import {
  BrowserRouter,
  Routes,
  Navigate,
  Route,
} from 'react-router-dom'
import { CartProvider } from './components/context/CartContext'
import { CartScreen } from './components/CartScreen/CartScreen';
import { Checkout } from './components/Checkout/Checkout';
import './index.css'
import {CargarData} from './firebase/CargarData';

function App() {
  return (
    <CartProvider >
      <BrowserRouter>
        <div className='App'>
          <NavBar />
          {/* <CargarData/> */}
          <Routes>   
            <Route exact path='/' element={<ItemListContainer />} />
            <Route exact path='/productos/:categoryId' element={<ItemListContainer />} />
            <Route exact path='/detail/:itemId' element={<ItemDetailContainer />} />
            <Route exact path='/counter' element={<ItemCount />} />
            <Route exact path='/checkaut' element={<Checkout/>}/>
            <Route exact path='/cart' element={<CartScreen/>}/>
            {/* <Route path='/detail/:itemId(\d+|new)' element={<Error />} /> */}
            <Route path='*' element={<Navigate to='/' />} />
          </Routes>
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
