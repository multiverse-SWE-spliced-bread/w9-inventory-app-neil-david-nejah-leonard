import React, {useState, useEffect} from 'react';
// import apiURL from './api';


export const ItemList =() => {

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

    return <>
{/* maps over items, displays in divs to look pretty */}
{items.map((anObjectMapped, index) => {
    return (
        <div className="itemCard" key={index}>
            <img className='displayImage' src={anObjectMapped.image}/>
              <ul>
                <li>{anObjectMapped.title}</li>
                <li>£{anObjectMapped.price}</li>
                <li>{anObjectMapped.description}</li>
                <li>{anObjectMapped.category}</li>
              </ul>
                
        </div>
    );
})}

    </>


}








