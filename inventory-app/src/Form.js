import React, {useState} from 'react';

function Form ({items,setItems, selectedItem,setSelectedItem, setView, fetchItems,setCurrentView}){
    const [formInputs, setFormInputs] = useState({});

    // async function submitHandler(e) {
        const submitHandler = async(e)=>{
        e.preventDefault();
        console.log(formInputs.title);
        try {
    
          let response = await fetch(`http://localhost:3000/item/${formInputs.title}`, {
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            method: 'PUT',
            mode: "cors", //added to allow to pass login
            body: JSON.stringify(formInputs),
          });
          setView(0)
          fetchItems()
          const data = await response.json();
          let newObj = {};
    
          setFormInputs(newObj);
          
       
        } catch (err) {
          
        }
      }
      const handleCancel = ()=>{
          setView(0)
          fetchItems()
      }
    
      function onChangeHandler(e) {
        let formData = formInputs;
        formData[e.target.name] = e.target.value;
        setFormInputs(formData);
        console.log(formData);
      }

    return (
        <div>
          <form id="addItem" onSubmit={submitHandler}>
            <h1 className="title">Edit Item</h1>
            {/* <div>
                <label>Input Id:
                <input name='inputId' type='text' placeholder='Enter Id' value={formInputs.inputId} onChange={onChangeHandler}></input>
                </label>
            </div> */}
    
            <div>
              <label>
                Item name:
                <input
                  name="title"
                  type="text"
                  placeholder="Enter the item's name"
                  value={formInputs.title}
                  onChange={onChangeHandler}
                ></input>
              </label>
            </div>
            <div>
              <label>
                Price:
                <input
                  name="price"
                  type="text"
                  placeholder="Enter the item's price"
                  value={formInputs.price}
                  onChange={onChangeHandler}
                ></input>
              </label>
            </div>
            <div>
              <label>
                Description:
                <textarea
                  name="description"
                  placeholder="Description"
                  type="text"
                  value={formInputs.description}
                  onChange={onChangeHandler}
                ></textarea>
              </label>
            </div>
    
            <div>
              <label>
                Category:
                <input
                  name="category"
                  type="text"
                  placeholder="Enter clothing category "
                  value={formInputs.category}
                  onChange={onChangeHandler}
                ></input>
              </label>
            </div>
            <div>
              <label>
                Image Url:
                <input
                  name="image"
                  type="text"
                  placeholder="Enter the images url"
                  value={formInputs.image}
                  onChange={onChangeHandler}
                ></input>
              </label>
            </div>
            <button onClick={handleCancel}>Cancel</button>
            <button form="addItem">Update</button>
          </form>
        </div>
      );


}




export default Form