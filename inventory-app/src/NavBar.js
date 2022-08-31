import React from "react";

function NavBar ({items,setItems, selectedItem,setSelectedItem, setView, setCurrentView}){


    return(<div>
            <nav className="nav" >
                    <a href="/" class="site-title" >Inventory App</a>
                <ul>
                        <li className='active'>
                        <a href="/">Home</a>               
                        </li>
                        <li>
                        <a href="/Orders">Orders</a>
                        </li>
                        <li>
                        <a href="/Support">Support</a>
                        </li>
                    <div className='navBar-btn'>
                    <button>Login</button>
                    <button>Register</button>
                    </div>
                </ul>
            </nav> 
        </div>)
}

export default NavBar