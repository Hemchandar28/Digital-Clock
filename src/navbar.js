import React, { useState } from "react"; 
import './navbar.css';
import { Link } from "react-router-dom";
import { GrMenu, GrClose } from "react-icons/gr";

function Navbar() {
    const[value,setvalue] = useState(true)

    function Click() {
        setvalue(!value);
    }
    return(
        <>
        <nav>
            <div className="navbarn">
                <div className="headn">
                <h3 className="h3n">Router</h3>
                </div>
                <div className="contentn">
                <div className="menuIcons" onClick={()=>Click()}>{value ? (<GrMenu/>) : (<GrClose/>)}
                </div>
                    <ul className={value ? "contentn ul" : "contentn ul active"}>
                        <li><a href=""><Link to='/'>PROFILE</Link></a></li>
                        <li><a href=""><Link to='/login'>LOGIN</Link></a></li>
                        <li><a href=""><Link to='/bulb'>BULB</Link></a></li>
                        <li><a href=""><Link to='/clock'>CLOCK</Link></a></li>
                        <li><a href=""><Link to='/contact'>CONTACT</Link></a></li>
                        <li><a href=""><Link to='/counter'>COUNTER</Link></a></li>
                    </ul>
                </div>
            </div>
        </nav>
        {/* <div  className="container">
        <div id="home1">
            <h2>Home</h2>
        </div>
        </div> */}
        </>
    )
}
export default Navbar