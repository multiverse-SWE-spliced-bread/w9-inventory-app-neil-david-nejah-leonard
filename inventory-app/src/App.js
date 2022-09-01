import { useState, useEffect } from 'react';
import './App.css';
import {ItemList } from './ItemList';
import  NavBar  from './NavBar';
import Form from './Form'



function App() {
	const [selectedItem, setSelectedItem] = useState({})
	const [items , setItems  ] = useState ([])
	const [view, setView] = useState(0)

	function updateForm() {
	setView(2)
}
	const views = [
	
 <ItemList items={items} selectedItem={selectedItem} setSelectedItem={setSelectedItem} setView={setView} />

	 
	,
	//Single page 
	//   <p>{JSON.stringify(selectedItem)}</p>,
	<div className='singleItem-card'>
			<h1 className='title'>{selectedItem.title}</h1>
			<img src={selectedItem.image} alt=''/>
			<p>{selectedItem.description}</p>
			<h2 className='title'>£{selectedItem.price}</h2>
		<button className="singleView-btn">Delete Item</button>
		<button className="singleView-btn"onClick={updateForm}>Update Item</button>
	</div>
	 ,
	//  Form page
	  <div><Form /></div> ,
	  <p>order-view-3</p>,
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
		<NavBar />
		<div className='Items'>
		{views[view]}  
		</div>
    </div>
  );
}

export default App;
