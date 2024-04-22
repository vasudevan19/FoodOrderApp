import React, {useState } from "react";
import HomePage from "./HomePage.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FoodCart from "./FoodCart.jsx";
import Burger from "./Burger.jsx";
import Pizza from "./Pizza.jsx";
import Navigation from "./Navigation.jsx";



const FoodOrder = () => {
   
    

    const [cartItem, setCartItem] = useState([])

    const addCart = (item) => {
        setCartItem(prevItem => [...prevItem,item])
    }
    const clearCart = () => {
        setCartItem([])
    }
    const removeCart = (item) => {
        setCartItem((prevItem) => prevItem.filter((e, i) => i !== item));
    }

    
   const calcTotal = () => {
    let total = 0;
    cartItem.forEach((e) => (total +=  parseInt(e.price)));
    return total;
  };

  const buyNow = () => {
    alert("order placed SuccessFully");
    setCartItem([]);
  };
   
  return (
    <BrowserRouter>
        <Navigation cartItem={cartItem}/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pizza" element={<Pizza addCart={addCart} />} />
        <Route path="/burger" element={<Burger addCart={addCart}/>} />
        <Route path="/foodcart" element={<FoodCart  
                 buyNow={buyNow}
                 removeCart={removeCart}
                calcTotal={calcTotal}
                clearCart={clearCart}
                cartItem={cartItem}
                />
                } />
      </Routes>
    </BrowserRouter>
  );
};

export default FoodOrder;
