import React, {useState} from 'react';

function AddItemForm ({items,setItems, selectedItem,setSelectedItem, setView, setCurrentView}){

const [formInputs, setFormInputs] = useState({})


async function submitHandler(e){
e.preventDefault()
try{

    const res = await fetch ('https://www.localhost:3000/item', {
        method: 'POST',
        header: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body:JSON.stringify(formInputs)
    })
    const data = await res.json()
    // console.log(data)
    // console.log(formInputs)

    let newObj = {}

    setFormInputs(newObj)
    console.log(formInputs)
    console.log('New Item added')

    }catch (err){
    console.log('something went wrong')
}

}

    function onChangeHandler(e){

    let formData = formInputs
    formData[e.target.title]= e.target.value
    setFormInputs(formData)
    console.log(formData)

}


    return <div>
    <form id='addItem'onSubmit={submitHandler}>
    <h1 className='title'>Add Item</h1>
        {/* <div>
            <label>Input Id:
            <input name='inputId' type='text' placeholder='Enter Id' value={formInputs.inputId} onChange={onChangeHandler}></input>
            </label>
        </div> */}
    
        <div>
            <label>Item name:
            <input name='title' type='text' placeholder="Enter the item's name" value={formInputs.title} onChange={onChangeHandler}></input>
            </label>
        </div>
        <div>
            <label>Price:
            <input name='price' type='text' placeholder="Enter the item's price" value={formInputs.price} onChange={onChangeHandler}></input>
            </label>
        </div>
        <div>
            <label>Description:
           <textarea name='Description' placeholder='Description'type="text" value={formInputs.description} onChange={onChangeHandler}></textarea>
            </label>
        </div>
    
        <div>
            <label>Category:
            <input name='category' type='text' placeholder='Enter clothing category ' value={formInputs.category} onChange={onChangeHandler}></input>
            </label>
        </div>
        <div>
            <label>Image Url:
            <input name='image' type='text' placeholder="Enter the images url" value={formInputs.image} onChange={onChangeHandler}></input>
            </label>
        </div>
        <button>Cancel</button>
        <button form='addItem'>Add Item</button>
    </form>
</div>


}


export default AddItemForm;