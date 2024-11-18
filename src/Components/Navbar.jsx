import React, { useRef, useState } from 'react'
import './Navbar.css'
import logo from '../assets/logo.svg'
import underline from '../assets/nav_underline.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open from '../assets/menu_open.svg'
import menu_close from '../assets/menu_close.svg'

const Navbar = () => {

  const [menu , setMenu] = useState("home")
  const menuRef = useRef();

  const openMenu = ()=>{
    menuRef.current.style.right="0px";
  }

  const closeMenu = ()=>{
    menuRef.current.style.right="-350px"
  }

  return (
    <div className='navbar'>
        <img src={logo} className='logo' alt="" />
        <img src={menu_open} onClick={openMenu} alt="" className='nav-mob-open' />
        <ul ref={menuRef} className='nav-menu'>
          <img src={menu_close} onClick={closeMenu} alt="" className="nav-mob-close" />
            <li><AnchorLink className='anchor-link' href='#home'><p onClick={()=>setMenu("home")}>Home</p>{menu === "home" ? <img src={underline} alt=''/>:<></>}</AnchorLink></li>
            <li><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={()=>setMenu("About")}>About</p>{menu === "About" ? <img src={underline} alt=''/>:<></>}</AnchorLink></li>
            <li><AnchorLink className='anchor-link' offset={50} href='#project'><p onClick={()=>setMenu("Projects")}>Projects</p>{menu === "Projects" ? <img src={underline} alt=''/>:<></>}</AnchorLink></li>
            <li><AnchorLink className='anchor-link' offset={50} href='#skills'><p onClick={()=>setMenu("Skills")}>Skills</p>{menu === "Skills" ? <img src={underline} alt=''/>:<></>}</AnchorLink></li>
            <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={()=>setMenu("Contact")}>Contact</p>{menu === "Contact" ? <img src={underline} alt=''/>:<></>}</AnchorLink></li>
        </ul>
        <a href="https://www.linkedin.com/in/anirudh-joshi-774a19197/" target='blank'><div className="nav-connect">Connect on LinkedIn</div></a>
    </div>
  )
}


export default Navbar