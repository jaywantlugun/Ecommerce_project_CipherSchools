import React from "react";
import "./Navbar.css";
import logo from "../../Images/mainlogo.png";
import search_logo from "../../Images/search_logo.png";
import basket from "../../Images/basket.png";
import { useNavigate } from "react-router-dom";
import Button from "../../global/Button/Button";

function Navbar({ showSignInButton }) {

    const navigate = useNavigate()

    function goToSignInPage() {
        navigate("/sign-in")
    }

    function goToMainPage(){
        navigate("/")
    }



    return (
        <div className="navbar_container">
            <div className="navbar_container_mainlogo">
                <img className="navbar_mainlogo" src={logo} onClick={goToMainPage}/>
            </div>

            <div className="navbar_container_search">
                <input />
                <img src={search_logo} alt="not available" />
            </div>

            <div className="navbar_container_signin">
                {showSignInButton === false ? <p>Welcome</p> : <Button button_name="sign in" onClicking={goToSignInPage}/>}
            </div>

            <div className="navbar_container_orders">
                <p>My Orders</p>
                <p>Contact Us</p>
                <img src={basket} />
            </div>

        </div>
    );
}

export default Navbar;