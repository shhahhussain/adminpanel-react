import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from 'antd';
import { get, onValue, ref } from 'firebase/database';
import { Card } from 'antd';
import  './order.css'
let firebase = require('../components/firebase');

const Order = () => {
  let navigat = useNavigate()
  let location=useLocation()
  const [order, Updateorder] = useState([])
  const [rejectedOrders, updateRO] = useState([])
  const [succesfulOrders, updateSO] = useState([])
  const { Meta } = Card;
  useEffect(() => {
    onValue(firebase.refData, (snapshot) => {
      let OrderData = snapshot.child('admin/order').val()
      let orderss=Object.keys(OrderData).map((key)=>{
         return Object.entries(OrderData[key])
      })
      if (orderss){
        Updateorder(orderss)}
      })
    }, [])
    return (
      <div className='cat-div'>
      {order.map((element)=>{
       return element.map((item)=>{
          return <Card className='order-card'   hoverable>
            <h2>address={item[1].address}</h2>
            <h2>Total Bill={item[1].totBill}</h2>
            <h2>Status of order={item[1].status}</h2>
            <Button 
            className='detail-order-btn'
            onClick={
              () => {
                navigat('/orderitems', {
                })
              }}> Order Detail</Button>
              <br></br>
              <br></br>
              <Button
              className='rec-order-btn'
               onClick={
                () => {
                  navigat('', {
                  })
                }}> Reject</Button>
                <Button 
                className='acc-order-btn'
                onClick={
                  () => {
                    navigat('', {
                    })
                  }}> Accept</Button>
          </Card>
        })
        
      })
    }
    </div>
  )
}

export default Order








// let pendingOrder=[]
// let progressOrder=[]
// let completedOrder=[]
// let rejectedOrder=[]
// Object.entries(OrderData).map((key) => {
//   if (OrderData[key].status == 'pending') {
//     order.push(OrderData[key])
//     Updateorder(order)
//   } else if (OrderData[key].status == 'succesful') {
//     succesfulOrders.push(OrderData[key])
//     updateSO(succesfulOrders)
//   }
//   else {
//     rejectedOrders.push(OrderData[key])
//     updateRO(rejectedOrders)
//   }
// })