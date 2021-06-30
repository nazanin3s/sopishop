import React, {useState , useEffect} from 'react'

import Featured from '../components/homeFeatures'
import Fprods from '../components/homeProds'
import womenteas from '../assets/teaser/wteas1.webp'
import axios from 'axios'

const Home = ()=>{

  const [products, setProducts] = useState([]);

  const fetchData= async()=>{
    const {data} = await axios.get('/api/products')
    setProducts(data)
      console.log(products)
  }

  useEffect(()=>{
    fetchData()
  },[])

  return(
    <main>
    <div className="section">
      <h3 className="center-title"> Popular categories</h3>
      <Featured prods={products} type="Featured" lenght="5"/>
    </div>
    <div className="tease">
      <div className="tease-con up">
        <h4 className="tease-tit">efresh your wardrobe with key seasonal pieces from our collection for women.</h4>
        <button>Browse Shop</button>
      </div>
    <img src={womenteas} />
    </div>
    <Fprods prods={products}/>

    </main>
  )
}
export default Home;
