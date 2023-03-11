import React from "react";
import { useState,useEffect } from "react";
const Client=(props)=>{
    let {ClientData}=props
    const [Clientdata,setclientdata]=useState([])
    useEffect(()=>{
       setclientdata(ClientData)
    })
    return (
      <div>
          <table className="data-body">
          <thead className="data-head"> 
            <th>Account</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>wallet</th>
          </thead>
          <tbody>
            { Clientdata.map((item,index)=>{
                return <tr className="data-row" key={index}>
                  <td className="data">{item.role||"empty"}</td>
                  <td className="data">{item.firstName||"empty"}  </td>
                  <td className="data">{item.lastName || "empty"}</td>
                  <td className="data">{item.email||"empty"}</td>
                  <td className="data">{item.wallet||"No Money"}</td>
                </tr> })
            } 
          </tbody>
        </table>
    </div>
)}
export default Client