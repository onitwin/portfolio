import React ,{Fragment,useState} from 'react'
import {Link} from "react-router-dom";

const HamburgerMenu=()=>{

const [menuState,setMenuState]=useState("nav-links")

const menuInvert=()=>{
  if (menuState==="nav-links"){
    setMenuState("nav-links show")
  }else{
    setMenuState("nav-links")
  }
}

return(
  <Fragment>
  <img className="hamburger-icon" alt="menu icon" src="/Images/menu.png" onClick={menuInvert}/>
  <ul className={menuState}>
  <li onClick={menuInvert}><Link to="/portfolio" className="link-class-list"><p>Portfolio</p></Link></li>
  <li onClick={menuInvert}><Link to="/about" className="link-class-list"><p>About</p></Link></li>
  <li onClick={menuInvert}><Link to="/contact" className="link-class-list"><p>Contact</p></Link></li>
  </ul>
  </Fragment>
)




}

export default HamburgerMenu

// <li onClick={menuInvert}><Link to="/testimonials" className="link-class-list"><p>Testimonials</p></Link></li>
