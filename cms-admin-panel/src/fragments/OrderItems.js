import React, { useState, useEffect } from 'react'
// import { get, onValue, ref } from 'firebase/database';
// import { useLocation,useNavigate } from 'react-router-dom';
import { Card } from 'antd';
let firebase = require('../components/firebase');

const OrderItems = (props) => {
  let {order}=props
  const [orderitemsdata,updateorderitemsdata]=useState([])
  useEffect(()=>{
    updateorderitemsdata(order)
 })
  return (
    <div className='cat-div'>
    {order.map((element)=>{
     return element.map((item)=>{
        return <Card className='order-card'   hoverable>
          <h2>address={item[1].address}</h2>
          <h2>Total Bill={item[1].totBill}</h2>
          <h2>Status of order={item[1].status}</h2>
        </Card>
      })
    })
  }
  </div>
)
}

export default OrderItems