import React, { useState, useEffect } from "react";
import "./CategoryProductPage.css";
import Navbar from "../Navbar/Navbar";
import { useNavigate } from "react-router-dom";


function CategoryProductPage({ categoryName , setProductId}) {

    const [categoryData, setcategoryData] = useState([])

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/category/${categoryName}`)
            .then(res => res.json())
            .then(data => setcategoryData(data))
    }, [])


    const navigateId = useNavigate();

    function goToSinglePage(id) {
        setProductId(id)
        navigateId("/single-product")
    }



    return (
        <div className="catagory_container">
            <Navbar showSignInButton={false}/>
            <div className="category_container_title">
                <p>{categoryName}</p>
                </div>
            <div className="categorypagecontent_row_container">
                
                {categoryData.map((value,key) => (
                   <div className="category_row_box_container">

                   <div className="category_row_box_container_image" >
                       <img src={value.image} onClick={() => goToSinglePage(value.id)}/>
                       <p>{value.title}</p>
                       <p>Price : {value.price}$</p>
                   </div>
       
       
               </div>
                ))}

            </div>

        </div>
    );
}

export default CategoryProductPage;