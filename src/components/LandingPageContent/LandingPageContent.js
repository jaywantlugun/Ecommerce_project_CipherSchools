import React from "react";
import "./LandingPageContent.css";
import mainposter from "../../Images/mainposter.png";



function LandingPageContent(){


    return(
        <div className="landingpagecontent">
            <div className="landingpagecontent_top">
                <p>Sale Sitewide, Hurry Up!</p>
                <img src={mainposter} alt="main logo not available"/>
            </div>
            <div className="landingpagecontent_subtitle">
                <p>Welcome</p>
                <p>...only member access allowed...</p>
            </div>

            
        </div>
    );
}

export default LandingPageContent;