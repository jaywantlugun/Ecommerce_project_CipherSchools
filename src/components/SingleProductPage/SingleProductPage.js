import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import "./SingleProductPage.css"
import cod_logo from "../../Images/cod_logo.png";
import noexchange_logo from "../../Images/noexchange_logo.png";
import freedelivery_logo from "../../Images/freedelivery_logo.png";

function SingleProductPage({productId}){
    
    const [productData, setProductData] = useState("")

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${productId}`)
            .then(res => res.json())
            .then(data => setProductData(data))
    }, [])

    const deliveryData=[
        {
            image:cod_logo,
            title:"COD Available"
        },
        {
            image:noexchange_logo,
            title:"NO Exchange"
        },
        {
            image:freedelivery_logo,
            title:"Free Delivery"
        }
    ]

    return(
        <div>
            <Navbar showSignInButton={false}/>
        <div className="singleproduct_container">

            <div className="singleproduct_image">
                <img src={productData.image}/>
            </div>
            <div className="singleproduct_right">
            <div className="singleproduct_details">
                <p>{productData.title}</p>
                <p>{productData.price}$</p>
                <button>ADD TO BAG</button>
            </div>

            <div className="singleproduct_offers">
                <p>Offers for you</p>
                <div className="singleproduct_offer_details">
                    <p>EXTRA 2$ Off</p>
                    <span>Use Code: NF150NEW for Extra 2$ off on your 1st purchase, minimum order 20$</span>
                </div>
            </div>

            <div className="singleproduct_delivery">
                <p>Select Delevery Location</p>
                <span>Enter the pincode of your area to check product availability and delivery options</span>
                <input placeholder="Enter Pincode" type="number"/>
            </div>
            <div className="singleproduct_delivery_logo">
                {deliveryData.map((value,key)=>(
                    <div className="single_logo">
                    <img src={value.image}/>
                    <p>{value.title}</p>
                    </div>
                ))}
            </div>

            </div>
        </div>
        </div>
    );
}

export default SingleProductPage;