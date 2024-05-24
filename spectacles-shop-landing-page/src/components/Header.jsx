import React from 'react'
import logo from '../assets/images/header-image/logo.png'
import cart from '../assets/images/header-image/black-cart.png'
import profile from '../assets/images/header-image/profile-icon.png'
import style from '../assets/styles/header.module.css'

export default function Header() {
  const menuItems = ['Header', 'About Us', 'Products', 'Features', 'Reviews', 'Contact Us']
  return (
    <div className={`${style.header}`}>
      <img className={`${style.logo}`} src={logo} alt='Logo'/>
      <div className={`${style.menu}`}>
        {menuItems.map((item , index)=>(
          <div key={index} className={`${style.menuItem}`}>{item}</div>
        ))}
      </div>
      <div className={`${style.profile}`}>
        <img className={`${style.profileItem}`} src={cart}/>
        <img className={`${style.profileItem}`} src={profile}/>
      </div>
    </div>
  )
}
