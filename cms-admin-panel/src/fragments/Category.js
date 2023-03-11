import { Card, Col, Row, Button } from 'antd';
import {React,useEffect,useState} from 'react'
import { get, onValue, ref } from 'firebase/database';
import '../fragments/productsss.css'
import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
let  firebase =require('../components/firebase');


const { Meta } = Card;
const Category = () => {
  let navigat=useNavigate()
  let[Category,SetCategory]=useState([])
  let[productData,SetproductData]=useState([])
  useEffect(()=>{
onValue(firebase.refData,(snapshot)=>{
    let CategoryData=snapshot.child('admin/item').val()
    if(CategoryData){
        SetCategory(CategoryData)
    }
})
  },[])
    return (
  <div className="site-card-wrapper">
          <div className='cat-div'>
            { Category.map((element,index)=>{
              return    <Card  className='card'  hoverable style={{ width: 240 }}
              cover={<img className='cat-image' src={element.image} alt='error'/>} >
              <h>{element.category}</h>
              <div> 
            <Button  onClick={
            ()=>{
              navigat('/Products',{
               state:{data:element.product}
              })
              }}>Product</Button>
            <Button onClick={
                ()=>{
                  let data=Category
                 data.splice(index,1)
                 console.log(data)
                SetCategory(data)
                }
              }> Delete</Button>
            <Button > asasd</Button>
              </div>
            </Card>
                })
            }
          </div>
  </div>
  )}
export default Category