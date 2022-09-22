import React from 'react'
import { Link, useMatch, useResolvedPath } from "react-router-dom"

function Navbar() {

  return (
    <nav className="nav">
        <Link to="/" className="site-title">
          R M G
        </Link>
        <ul>
          <CustomLink to="/about">About</CustomLink>
          <CustomLink to="/resume">Resume</CustomLink>
          <CustomLink to="/contact">Contact</CustomLink>
        </ul>
    </nav>
  )
}

function CustomLink({to, children, ...props}) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>{children}</Link>
    </li>
  )
}

export default Navbar