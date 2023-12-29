import React from 'react'

function Product({item}) {
  // console.log(item)
  const {title, image, description, price} = item;
  return (
    <div>
      <h1>{title}</h1>
      <img src={image}></img>
      <h3>{price}</h3>
      <h5>{description}</h5>
    </div>
  )
}

export default Product
