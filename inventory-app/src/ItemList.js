import React, {useState, useEffect} from 'react';
// import apiURL from './api';


export const ItemList =({item, setSingleItem}) => {

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

function click(){

    console.log('click')
    
}


    return <>  
{/* maps over items, displays in divs to look pretty */}
{items.map((anObjectMapped, index) => {
    return (
        <div>
        <div className="itemCard" key={index}>
            <img onClick={click}className='displayImage' src={anObjectMapped.image} alt=''/>
              <ul>
                <li>{anObjectMapped.title}</li>
                <li>£{anObjectMapped.price}</li>
                {/* <a>View Detail</a> */}
                <li>{anObjectMapped.description}</li>
                {/* <li>{anObjectMapped.category}</li> */}
                <button>Edit</button>
                <button>Delete</button>
              </ul>
                
        </div>


        </div>
    
    );
})}

    </>


}








