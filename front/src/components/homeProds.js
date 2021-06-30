import React from 'react'
import Featured from './homeFeatures'

const alignTitle =  {

}
const Fprods = ({prods})=>{
  return(
    <div className="section">
      <h3 className="align-title"> Get yourself a new look</h3>
      <Featured prods={prods} type="products" lenght="3"/>
    </div>
  )
}
export default Fprods;
