import React from "react";
import "./Button.css";

function Button({button_name,onClicking}){
    return <button className="global_button" onClick={onClicking}>{button_name}</button>;
    
}

export default Button;