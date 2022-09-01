import React from "react";


function SingleItem ({items,setItems, selectedItem,setSelectedItem, setView, setCurrentView}){

    function updateForm() {
        setView(2)
    }

    // //This may work depending how delete route is written
    // const handleDelete = async()=>{
    //     const response = await fetch(`https://localhost:3000/Item/${selectedItem.title}`,
    //     {method: 'DELETE'})
    //     const itemData = await response.json()
            // setView(0)
    // }
    return(



    	<div className='singleItem-card'>

			<h1 className='title'>{selectedItem.title}</h1>
			<img src={selectedItem.image} alt=''/>
			<p>{selectedItem.description}</p>
			<h2 className='title'>£{selectedItem.price}</h2>
		<button className="singleView-btn" onClick={handleDelete}>Delete Item</button>
		<button className="singleView-btn"onClick={updateForm}>Update Item</button>
	
          

         </div>
    )
}

export default SingleItem