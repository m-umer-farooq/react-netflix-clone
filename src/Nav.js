import React, { useState, useEffect } from 'react';
import './Nav.css';

function Nav() {

  const [show,handelShow] = useState(false);

  useEffect(() => {

    window.addEventListener("scroll", () => {
      if(window.scrollY > 100){
        handelShow(true);
      }else handelShow(false);
    });
      return () => {
        window.removeEventListener("scroll",null);
      };
  },[]);
  

  return (
    <div className={`nav ${show && "nav__black"}`}>
        <img className='nav__logo' alt='Netflix Logo' src='//upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/220px-Netflix_2015_logo.svg.png' />
        <img className='nav__avatar' alt='Netflix Avatar' src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png' />
    </div>
  )
}

export default Nav