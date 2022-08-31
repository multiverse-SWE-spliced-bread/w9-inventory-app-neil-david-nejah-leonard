import React from 'react';

function Form (){


    return <div>
    <form>
    <h1>Edit Item</h1>
        <div>
            <label>Input Id:
            <input name='inputId' type='text' placeholder='Enter Id'></input>
            </label>
        </div>
        <div>
            <label>Category:
            <input name='Category' type='text' placeholder='Enter clothing category '></input>
            </label>
        </div>
        <div>
            <label>Item name:
            <input name='title' type='text' placeholder="Enter the item's name"></input>
            </label>
        </div>
        <div>
            <label>Price:
            <input name='title' type='text' placeholder="Enter the item's price"></input>
            </label>
        </div>
        <div>
            <label>Image Url:
            <input name='title' type='text' placeholder="Enter the images url"></input>
            </label>
        </div>
        <div>
            <label>Description:
           <textarea name='Description' type="text"></textarea>
            </label>
        </div>
        <button>Update</button>
    </form>
</div>


}




export default Form