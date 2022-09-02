import React from "react";


function SingleItem ({items,setItems, selectedItem,setSelectedItem, setView, fetchItems, setCurrentView}){

    function updateForm() {
        setView(2)
    }

    //sends request to routes to delete item
    const handleDelete = async()=>{
        console.log(selectedItem.title)
        const response = await fetch(`http://localhost:3000/item/${selectedItem.title}`,
        {method: 'DELETE'})
        const itemData = await response.json()
            setView(0)
           fetchItems()
    }


    // TODO fetch for updateForm, and API URL
    return(



    	<div className='singleItem-card'>

			<h1 className='title'>{selectedItem.title}</h1>
			<img src={selectedItem.image} alt=''/>
			<p>{selectedItem.description}</p>
			<h2 className='title'>£{selectedItem.price}</h2>
            <div className="singleItemButtonContainer">
            <button className="singleView-btn" onClick={handleDelete}>Delete Item</button>
		<button className="singleView-btn"onClick={updateForm}>Update Item</button>
            </div>
         </div>
    )
}

export default SingleItem