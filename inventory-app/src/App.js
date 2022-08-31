import { useState } from 'react';
import './App.css';
import {ItemList } from './ItemList';
import  NavBar  from './NavBar';


function App() {


  const [selectedItem, setSelectedItem] = useState({})
  const [items, setItems]= useState ({})



  return (
    <div className="App">
    <NavBar />
    <div className='Items'>
    <ItemList />
    </div>
    </div>
  );
}

export default App;
