import { Button } from "antd";
import React, { useEffect } from "react";
import { Link, Outlet,useNavigate } from "react-router-dom";
import Order from './../fragments/Order';
import { signOut } from 'firebase/auth';
import { auth } from "./firebase";
import User from './../fragments/User';


const Dashboard=()=>{
    let location=useNavigate()
    useEffect(()=>{
        location('/home')
    },[])
    return <div>
      {/* <h1  className='heading'>C<span className='m' >M</span>S</h1> */}
       <div className="header">
       <ul className="item">
                <li><Link to={'/home'}><span className="nav-item">Home</span></Link></li>
                <li><Link to={'/order'}><span className="nav-item">Order</span></Link></li>
                <li><Link to={'/User'}><span className="nav-item">User</span></Link></li>
                {/* <li><Link to={'/home'}><span className="nav-item">Payment</span></Link></li> */}
                <li><Link to={'/Category'}><span className="nav-item">Category</span></Link></li>
                <li><Link to={'/Wallet'}><span className="nav-item">Wallet</span></Link></li>
                </ul>
                    <div id="header-button">
                <Button  onClick={()=>{
                        signOut(auth)}}>
                        Sign Out</Button>
                     </div>
        </div>
        <Outlet></Outlet>
    </div>
}
export default Dashboard