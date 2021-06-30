import React from 'react'
import Product from './product'


const Featured= ({type, lenght, prods})=>{
  const {men, women} = prods;
  console.log(men, prods)
  const fea = men.slice(0,lenght);

  return (
    <div className="section-grid">
      {
        fea.map((item)=>{
          const  {id, name, price, images, cover, category} = item;
        return (
          <Product key={id} name={type==="category"? category: name } images={images} cover={cover}/>
        )
      })}
    </div>
  )
}
export default Featured;
