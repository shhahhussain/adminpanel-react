import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { Card, Button } from 'antd';

let firebase = require('../components/firebase');

const Products = () => {
  let navigat = useNavigate()
  let location = useLocation()
  const [product, UpdateProduct] = useState(location.state.data || [])
  return (
    <div className='cat-div'>
      {
        product.map((element) => {
          return <Card className='card' hoverable style={{ width: 240 }}
            cover={<img className='cat-image' src={element.image} alt='error' />}    >
            <h2>{element.name}</h2>
            <h4>Quantity: "{element.quantity}"</h4>
            <h4>Rate: "{element.rate}"</h4>
            <Button onClick={() => { }}>  Delete</Button>
            <Button > Edit</Button>
          </Card>
        })
      }
      <Button onClick={() => {
        navigat('/Category')
      }} >
        Go to Category
      </Button>
    </div>
  )
}
export default Products