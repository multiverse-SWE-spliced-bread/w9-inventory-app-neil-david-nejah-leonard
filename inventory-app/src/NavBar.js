import React from "react";


function NavBar ({items, setItems, selectedItem, setSelectedItem, setView, setCurrentView}){




    return(<div>
            <nav className="nav" >
                    <a href="/" className="site-title" >Inventory App</a>
                <ul>
                        <li className='active'>
                        <p onClick={()=>{setView(0)}}>Home</p>               
                        </li>
                        <li>
                        <p>Orders</p>
                        </li>
                        <li>
                        <p onClick={()=>{setView(3)}}>Add Item</p>
                        </li>
                    <div className='navBar-btn'>
                    
                    {/* <button>Login</button>
                    <button>Register</button> */}
                    </div>
                </ul>
            </nav> 
        </div>)
}

export default NavBar