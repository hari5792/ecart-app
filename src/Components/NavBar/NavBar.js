import React from "react";
import './NavBar.css'
function NavBar (props)
{

    function onCartHandler(){
        props.cartClicked();
    }
    return (
    <nav className="myNav">                                 
    <ul>
        <li><button onClick={onCartHandler}>Cart</button></li>
    </ul>
    </nav>
    );
}

export default NavBar