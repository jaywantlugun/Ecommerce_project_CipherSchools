import React, {useState} from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import LandingPage from './container/LandingPage';
import SignIn from './container/SignIn/SignIn';
import HomePage from './container/HomePage/HomePage';
import CategoryProductPage from './components/CategoryProductPage/CategoryProductPage';
import SingleProductPage from './components/SingleProductPage/SingleProductPage';


function App() {

  const [isUserLoggedIn,setIsUserLoggedIn]=useState(false);
  const [categoryName,setcategoryName]=useState("electronics");
  const [productId,setProductId]=useState(1);
  
  //const isUserLoggedIn="true";


  return (
    
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path="/" element={ isUserLoggedIn? <HomePage setcategoryName={setcategoryName}/> : <LandingPage/>} />
        <Route path="/sign-in" element={<SignIn setIsUserLoggedIn={setIsUserLoggedIn}/>}/>
        <Route path="/product-category/" element={<CategoryProductPage categoryName={categoryName} setProductId={setProductId}/>}/>
        <Route path="/single-product" element={<SingleProductPage productId={productId}/>}/>
      </Routes>
      
      </div>
    
    </BrowserRouter>
  );
}

export default App;
