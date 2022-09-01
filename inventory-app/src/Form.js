import React from 'react';

function Form ({items,setItems, selectedItem,setSelectedItem, setView, setCurrentView}){


    return <div>
    <form>
    <h1 className='title'>Edit Item</h1>
        {/* <div>
            <label>Input Id:
            <input name='inputId' type='text' placeholder='Enter Id'></input>
            </label>
        </div> */}
        <div>
            <label>Item name:
            <input name='title' type='text' placeholder="Enter the item's name"></input>
            </label>
        </div>
        <div>
            <label>Price:
            <input name='price' type='text' placeholder="Enter the item's price"></input>
            </label>
        </div>
        <div>
            <label>Description:
           <textarea name='Description' type="text"></textarea>
            </label>
        </div>
        <div>
            <label>Category:
            <input name='Category' type='text' placeholder='Enter clothing category '></input>
            </label>
        </div>
        <div>
            <label>Image Url:
            <input name='image' type='text' placeholder="Enter the images url"></input>
            </label>
        </div>
      
        <button>Cancel</button>
        <button>Update</button>
    </form>
</div>


}




export default Form