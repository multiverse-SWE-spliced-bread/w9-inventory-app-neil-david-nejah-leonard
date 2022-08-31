import './App.css';
import { ItemList } from './ItemList';
import React, {useState, useEffect} from "react"


function App() {
const [selectedItem, setSelectedItem] = useState({})
const [items , setItems  ] = useState ([])
const [view, setView] = useState(0)
const [currentView, setCurrentView] = useState({})  //this is what was using selectedItem


const views = [
  
  <ItemList items={items} selectedItem={selectedItem} setSelectedItem={setSelectedItem} setView={setView} />
,
  <p>{JSON.stringify(selectedItem)}</p>,
  <p>view3</p>
 ]

async function fetchItems (){
    const response = await fetch ('http://localhost:3000/item')
    const itemData = await response.json()
    console.log(itemData)
    setItems(itemData)
}

useEffect(()=>{
    fetchItems()
  }, [])


  return <>
  <div className="App">
    {/* views is array of views, view is the piece of state for view */}
     {views[view]}   
    </div>
 </>
}

export default App;
