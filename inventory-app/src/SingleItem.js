import React from "react";


function SingleItem ({items,setItems, selectedItem,setSelectedItem, setView, setCurrentView}){

    function updateForm() {
        setView(2)
    }
    return(



    	<div className='singleItem-card'>

			<h1 className='title'>{selectedItem.title}</h1>
			<img src={selectedItem.image} alt=''/>
			<p>{selectedItem.description}</p>
			<h2 className='title'>£{selectedItem.price}</h2>
		<button className="singleView-btn">Delete Item</button>
		<button className="singleView-btn"onClick={updateForm}>Update Item</button>
	
          

         </div>
    )
}

export default SingleItem