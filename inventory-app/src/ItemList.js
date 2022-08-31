import React, {useState, useEffect} from 'react';



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

    return <p>
  {JSON.stringify(items[0].title)}
    </p>


}








