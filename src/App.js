import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import { NavBar } from './components/NavBar/NavBar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemCount } from './components/ItemCount/ItemCount';
import { Pika } from './components/Pika/Pika';
import { ItemList } from './components/ItemList/ItemList';
function App() {
    return ( 
        <div className = "App" >
            <NavBar/>
            <ItemListContainer greeting="francis!"/>
            <ItemCount/>
            <Pika/>
            <ItemList/>
        </div>
    );
}

export default App;