import React, { useState, useEffect } from "react"

import { CSSTransition } from "react-transition-group"
import Image from './Image'

const Nav = () => {
  const [active, setActive] = useState('Profile')
  const [isNavVisible, setNavVisibility] = useState(false)
  const [isSmallScreen, setIsSmallScreen] = useState(true)

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 700px)")
    mediaQuery.addListener(handleMediaQueryChange)
    handleMediaQueryChange(mediaQuery)

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange)
    };
  }, []);

  const handleMediaQueryChange = mediaQuery => {
    if (mediaQuery.matches) {
      setIsSmallScreen(true)
    } else {
      setIsSmallScreen(false)
    }
  }
			

  const toggleNav = () => {  	
    setNavVisibility(!isNavVisible)
  }


  return (
  	<div>
	    <header className="Header">
	      
	      <CSSTransition
	        in={!isSmallScreen || isNavVisible}
	        timeout={350}
	        classNames="NavAnimation"
	        unmountOnExit
	      >

	        <nav className="Nav">
	          <a href="/" ><i className="fa fa-address-card text-default"></i> Porfolio</a> 
	          <a href="/skills"><i className="fa fa-plus text-default"></i> Skills</a>
	          <a href="/project"><i className="fa fa-github text-default"></i> Projects</a>
	          <a href="/contact"><i className="fa fa-linkedin-square text-default"></i> Contact</a>
	        </nav>
	      </CSSTransition>
	     	 <button  className="Burger" onClick = { toggleNav }>
              { !isNavVisible ?  <i className="fa fa-bars text-white"></i> : <i className="fa fa-times text-white"></i> }	
	      	</button>	
	     </header>
	     
	</div>    
  );
}

export default Nav