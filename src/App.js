import React, { useState } from "react";
import { Routes, Route } from 'react-router-dom';
import Cart from './components/cart';
import Men from './products/MenShoes';
import Women from './products/WomenShoes';
import Kids from "./products/KidsShoes";
import NewRelease from './products/NewRelease';
import ShoeItem from './products/ShoeItem';
import Home from './components/container';
import { data } from "./data/data"
import Login from './user/Login';
import Register from './user/Register';


const App = () => {
  const [cart, setCart] = useState([]);

  //adds shoe to cart
  const addToCart = (product, qty) => {
    const item = { product, qty }
    setCart([...cart, item]);
    console.log(`${product.name} has been added to cart.`)    
  }
  console.log('Selected Items:', cart)

  //totals up item costs
  const totalPrice = cart.reduce((prev, curr) => {
    return prev + curr.product.price
  }, 0);
  console.log('total price: $',totalPrice)
  console.log('idkk', cart)

  return (

      <div>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          {/* <Route exact path='/nav' element={<Navigation cart={cart}/>}/> */}
          <Route exact path='/men-shoes' element={<Men data={data} addToCart={addToCart}/>}/>
          <Route exact path='/women-shoes' element={<Women data={data} addToCart={addToCart}/>}/>
          <Route exact path='/kids-shoes' element={<Kids data={data} addToCart={addToCart}/>}/>
          <Route exact path='/new-releases' element={<NewRelease data={data} addToCart={addToCart}/>}/>
          <Route exact path='/shoe/:id' element={<ShoeItem data={data} addToCart={addToCart} cartItems={cart}/>}/>
          <Route exact path='/cart' element={<Cart cartItems={cart} totalPrice={totalPrice}/>}/>
          <Route exact path='/sign-in' element={<Login/>}/>
          <Route exact path='/membership' element={<Register/>}/>
        </Routes>
      </div>

  );
};

export default App;
