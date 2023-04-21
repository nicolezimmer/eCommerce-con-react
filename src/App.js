import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import { NavBar } from './components/NavBar/NavBar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemCount } from './components/ItemCount/ItemCount';
import { Pika } from './components/Pika/Pika';
import { ItemList } from './components/ItemList/ItemList';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import {
    BrowserRouter as Router,
    Routes,
    Navigate,
    Route
} from 'react-router-dom'
function App() {
    return ( 
        <div className = "App" >
            {/* <NavBar/>
            <ItemListContainer greeting="francis!"/>
            <ItemCount/>
            <Pika/>
            <ItemList/> */}
            {/* <ItemDetailContainer/> */}
            <Router>
                <NavBar/>
                <Routes>
                    <Route path='/' element={<ItemListContainer/>}/>
                    <Route path='/productos/:categoryId' element={<ItemListContainer/>}/>
                    <Route path='/detail/:itemId' element={<ItemDetailContainer/>}/>
                    <Route path='/counter' element={<ItemCount/>}/>
                    <Route path='/pika' element={<Pika/>}/>
                    <Route path='*' element={<Navigate to='/'/>}/>

                </Routes>
            </Router>
        </div>
    );
}

export default App;