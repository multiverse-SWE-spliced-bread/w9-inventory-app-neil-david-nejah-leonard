import React from 'react';
// import apiURL from './api';


export const ItemList =({items,selectedItems,setSelectedItems}) => {

 

    return <>
{/* maps over items, displays in divs to look pretty */}
{items.map((anObjectMapped, index) => {
    return (
        <div className="itemCard" key={index}>
            <img className='displayImage' src={anObjectMapped.image} alt={anObjectMapped.title}/>
              <ul>
                <li>{anObjectMapped.title}</li>
                <li>£{anObjectMapped.price}</li>
                {/* <li>{anObjectMapped.description}</li> */}
                {/* <li>{anObjectMapped.category}</li> */}
              </ul>
                
        </div>
    );
})}

    </>


}








