import React, { useState } from 'react'
import Loading from './Loading';

export default function Cart() {
  const [product, setProduct] = useState([]);

  return (
    <div className='container m-auto text-center'>
      <h1 style={{color:'#9e74c4'}}>Product List</h1>
      {
        product.length === 0 ? <Loading /> : ''
      }
    </div>
  )
}
