import { useState, useEffect } from 'react';
import './App.css';

import {ItemList } from './ItemList';
import  NavBar  from './NavBar';
import Form from './Form'

import AddItemForm from './AddItemForm';


import SingleItem from './SingleItem';



function App() {
	const [selectedItem, setSelectedItem] = useState({})
	const [items , setItems  ] = useState ([])
	const [view, setView] = useState(0)

	function updateForm() {
	setView(2)
}


	function addItemFormBtn(){
	setView(3)
}


	const views = [
	
 <ItemList items={items} selectedItem={selectedItem} setSelectedItem={setSelectedItem} setView={setView} />

	,
	<SingleItem items={items} selectedItem={selectedItem} setSelectedItem={setSelectedItem} setView={setView} fetchItems={fetchItems}/>
	 ,
	//  Form page
	  <div><Form /></div> ,

	  <div><AddItemForm /></div>,
	  <p>support-view-4</p>
]	




async function fetchItems (){
	const response = await fetch ('http://localhost:3000/item')
	const itemData = await response.json()
	setItems(itemData)
}	
	useEffect(()=>{
	fetchItems()
}, [])



  return (
    <div className="App">
		{/* views is array of views, view is the piece of state for view */}	 
		<NavBar setView={setView}/>
		{/* <button onClick={addItemFormBtn}>Add New Item</button> */}
		<div className='Items'>
		{views[view]}  
		</div>


    </div>)
 
}


export default App;