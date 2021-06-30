import React from 'react'

const Product = ({name, cover})=>{

  return(
    <div className="grid-box">
      <img src={cover} />
      <p>{name}</p>
    </div>
  )
}
export default Product;
