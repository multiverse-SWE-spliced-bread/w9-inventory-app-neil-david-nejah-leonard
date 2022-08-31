import React from 'react';
// import apiURL from './api';


export const ItemList =({items,setItems, selectedItem,setSelectedItem, setView, setCurrentView}) => {


const handleClick = pageObject =>{
    console.log('lemon')
    setView(1)
    setSelectedItem(pageObject)
    

}


    return <>
{/* maps over items, displays in divs to look pretty */}
{items.map((anObjectMapped, index) => {
    return (
        <div className="itemCard" key={index} onClick={()=> handleClick(anObjectMapped)} >
            
            <img className='displayImage' src={anObjectMapped.image} alt={anObjectMapped.title} />
            
              <ul>
                <li>{anObjectMapped.title}</li>
                <li>£{anObjectMapped.price}</li>
              </ul>
        </div>
    );
})}
    </>
}








