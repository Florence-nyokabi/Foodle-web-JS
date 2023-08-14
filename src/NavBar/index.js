import React from "react";
import './style.css'


const NavBar = () =>{
    return(
        <div>
            <nav>
                <ul>
                    <li><h2>Foodle</h2></li>
                    <div className="nav-list">
                        <li>Offer</li>
                        <li>Service</li>
                        <li>Menu</li>
                        <li>AboutUs</li>
                        <div className="login-and-signup">
                            <li>Login</li>
                            <li><button>SignUp</button></li>
                        </div>
                    </div>  
                </ul>
            </nav>
        </div>
    );
};
export default NavBar