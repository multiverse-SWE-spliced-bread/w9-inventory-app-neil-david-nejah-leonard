import React from 'react';
// import apiURL from './api';


export const ItemList =({items,setItems, selectedItem,setSelectedItem, setView, setCurrentView}) => {


const handleClick = pageObject =>{
  
    setView(1)
    setSelectedItem(pageObject)

}

const handleClickEdit = pageObject =>{  
    setView(2)   
}



    return <>
{/* maps over items, displays in divs to look pretty */}
{items.map((anObjectMapped, index) => {
    return (

    <div>
        <div className="itemCard"> 
            <img key={index} onClick={()=> handleClick(anObjectMapped)} className='displayImage' src={anObjectMapped.image} alt={anObjectMapped.title} />
              <ul>
                <li>{anObjectMapped.title}</li>
                <li>£{anObjectMapped.price.toFixed(2)}</li>
              </ul>
              <div>
              <button onClick={handleClickEdit} className="mainPage-btn">Edit</button>
              <button className="mainPage-btn">Delete</button>
              </div>     

        </div>
    </div> 
    );
})}
    </>
}








