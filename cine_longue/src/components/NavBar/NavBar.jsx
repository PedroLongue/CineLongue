import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'

import headerIcon from "../../assets/imgs/headerIcon.png"

function NavBar() {
  return (
    <nav id="navbar">
        <img src={headerIcon} alt="" />
        <h2>
          <Link to="/">Cine Longue</Link>
        </h2>
    </nav>
  )
}

export default NavBar