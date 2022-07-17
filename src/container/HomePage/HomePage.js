import React from "react";
import Homepagecontent from "../../components/Homepagecontent/Homepagecontent";
import Navbar from "../../components/Navbar/Navbar";

function HomePage({setcategoryName}){
    return (
        <div>
            <Navbar showSignInButton={false}/>
            <Homepagecontent setcategoryName={setcategoryName}/>
        </div>
    )
}

export default HomePage;