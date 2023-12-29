import React from 'react'

function Product({item}) {
  // console.log(item)
  const {title, image, description, price} = item;
  const newTitle = title.slice(0, 20);
  return (
    <div style={{width:'30%', margin:'20px'}}> 
      <h2>{newTitle}</h2>
      <img src={image} style={{height:'300px', width:'300px'}}></img>
      <h3>${price}</h3>
      <p>{description}</p>
    </div>
  )
}

export default Product
