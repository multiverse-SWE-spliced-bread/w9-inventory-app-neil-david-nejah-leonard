import './App.css';
import { ItemList } from './ItemList';
import React, {useState, useEffect} from "react"


function App() {
const [selectedItem, setSelectedItem] = useState({})
const [items , setItems  ] = useState ([])

async function fetchItems (){
    const response = await fetch ('http://localhost:3000/item')
    const itemData = await response.json()
    console.log(itemData)
    setItems(itemData)

    
}

useEffect(()=>{
    fetchItems()
  }, [])


  return (
    <div className="App">
       <ItemList items={items} selectedItem={selectedItem} setSelectedItem={setSelectedItem} />
       <ContentDisplay selectedItem={selectedItem} setSelectedItem={setSelectedItem} fetchItems={fetchItems} />
    </div>
  );
}

export default App;
