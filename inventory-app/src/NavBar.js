import React from "react";

function NavBar (){

    return(<div>
            <nav className="nav" >
                    <a href="/" class="site-title" >Inventory App</a>
                <ul>
                    <li className='active'>
                    <a href="/">Home</a>               
                    </li>
                    <li>
                    <a href="/AddArticle">Products</a>
                    </li>
                
                    <li>
                    <a href="/FindByAuthor">Support</a>
                    </li>  
                </ul>
            </nav> 
        </div>)
}

export default NavBar