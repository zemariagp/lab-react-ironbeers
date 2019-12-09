import React from 'react'
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
const Header = () => {
  return (
    <nav className="navbar expand"><Link to="/">Home</Link></nav>
  )
}

export default Header
