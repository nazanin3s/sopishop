import React from 'react'
import '../App.scss';
import { Link } from 'react-router-dom'
import { Links } from '../utils/constants'
import CartButtons from './cartbutts'

const Header = () => {
  return(
    <div className="nav-center">
      <div className="nav-header">
      <Link to="/"><p>Shop<span>¡</span>Shop!</p></Link>
      <button className="burger">
        <span></span>
        <span></span>
        <span></span>
      </button>

      </div>

      <ul className="nav-links">
        {Links.map((li, index)=>{
          const {text, url, id} = li;
          return (
            <Link className={`${index === 0? "active" : null}`}key={id} to={url}>{text}</Link>
          )
        })}
      </ul>
      <CartButtons/>
    </div>
  )
}
export default Header;
