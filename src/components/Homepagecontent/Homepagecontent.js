import React from "react";
import "./Homepagecontent.css";
import mainposter from "../../Images/mainposter.png";
import electronicsposter from "../../Images/electronicsposter.jpg"
import jeweleryposter from "../../Images/jeweleryposter.jpg";
import menclothingposter from "../../Images/menclothingposter.jpg";
import womenclothingposter from "../../Images/womenclothingposter.jpg";
import { useNavigate } from "react-router-dom";

function Homepagecontent({setcategoryName}){

    const categoryData=[
        {
            image:electronicsposter,
            title:"Electronics",
            category:"electronics"
        },
        {
            image:jeweleryposter,
            title:"Jewelery",
            category:"jewelery"
        },
        {
            image:menclothingposter,
            title:"Men's Clothing",
            category:"men's clothing"
        },
        {
            image:womenclothingposter,
            title:"Women's Clothing",
            category:"women's clothing"
        }
        
    ]

    const navigate = useNavigate();

    function goToCategoryPage(val) {
        setcategoryName(val)
        navigate("/product-category/")
    }




    return (
        <div className="homepagecontent">
            <div className="homepagecontent_top">

                <p>Sale Sitewide, Hurry Up!</p>
                <img src={mainposter} alt="main logo not available"/>

            </div>
            <div className="homepagecontent_row_container">
                
                {categoryData.map((value,key) => (
                   <div className="row_box_container" onClick={() => goToCategoryPage(value.category)}>

                   <div className="row_box_container_image" >
                       <img src={value.image}/>
                       <p>{value.title}</p>
                   </div>
       
       
               </div>
                ))}

            </div>
        </div>
    );
}

export default Homepagecontent;