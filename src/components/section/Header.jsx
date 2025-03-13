import React, { Component } from 'react'

import Logo from '../header/Logo';
import Menu from '../header/Menu';
import Sns from '../header/sns';



const Header = () => {

return (
    
    <header id='header' role='banner'>

        <Logo/>
        <Menu/>
        <Sns/>
        
        
    </header>
  )
}

export default Header