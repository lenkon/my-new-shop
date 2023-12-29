import React, { useState, useEffect } from 'react'
import Loading from './Loading';
import Product from './Product';

export default function Cart() {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    
    
  }, []);

  return (
    <div className='container m-auto text-center'>
      <h1 style={{color:'#9e74c4'}}>Product List</h1>
      {
        product.length === 0 ? 
        <Loading /> : 
        product.map((item, index) => { 
          return <Product key={index} item = {item} />})
      }
    </div>
  )
}
