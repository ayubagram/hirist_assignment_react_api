import React from 'react';
import '../css/header.scss'
const Navbar = () => {

  const menus = [
    { icon: 'fa fa-compass', title: 'discovery' },
    { icon: 'fa fa-users', title: 'invited' },
    { icon: 'fa fa-info', title: 'support' }
  ]

  return (  
    <header>
      <div className='container'>
        <div className='logo'>logo</div>
        
        <div className='menus'>
        {/* eslint-disable-next-line */}
          {menus.map((menu, i) => <a href='#' key={i}>
            <i className={menu.icon} aria-hidden="true"></i>
            <span>{menu.title}</span>
          </a>)}
        </div>
        <div className='buttons'>
          {/* eslint-disable-next-line */}
          <a href='#'>Post Job</a>
          {/* eslint-disable-next-line */}
          <a href='#'>Sign In</a>
        </div>
      </div>
    </header>  
  );
}
 
export default Navbar;