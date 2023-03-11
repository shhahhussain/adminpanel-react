import React from "react"
import { useState,useEffect } from 'react';
import {BrowserRouter, Link, Navigate, Route,Routes, useNavigate} from "react-router-dom"
import './style.css';
import 'antd/dist/antd.css';
import LogIn from "./components/login"
import Dashboard from './components/Dashboard';
import Star from "./star";
import Home from "./fragments/Home";
import Order from "./fragments/Order";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "./components/firebase";
import User from "./fragments/User";
import Category from './fragments/Category';
import Products from "./fragments/Products";
import OrderItems from "./fragments/OrderItems";
import Wallet from "./fragments/Wallet";

let App =()=>{
  const [isLoggedIn, updateLogin] = useState(window.localStorage.getItem('userlogin'));
useEffect(()=>{
 onAuthStateChanged(auth,(user)=>{
  console.log('userstate',user)
  if(user){
    updateLogin(true)
    window.localStorage.setItem('userlogin',true)
  }else{
    updateLogin(null)
    window.localStorage.removeItem('userlogin')
  }})
})
  return (<BrowserRouter className="App">  
      <Routes>
      <Route path="/login" element={<LogIn/>}/>
      <Route exact path='/' element={isLoggedIn?<Dashboard />:<Navigate to='/login'/>}>
      <Route path="/home" element={<Home/>}/>
      <Route path="/order" element={<Order/>}/>
      <Route path="/User" element={<User/>}/>
      <Route path="/Category" element={<Category/>}/>
      <Route path="/Wallet" element={<Wallet/>}/>
      <Route path="/Products" element={<Products/>}/>
      <Route path="/orderitems" element={<OrderItems/>}/>

      </Route>
      </Routes>
      </BrowserRouter>
);}
export default App;