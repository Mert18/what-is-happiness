import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="nav">
      <div className="nav-logo">
        <Link to='/'>
          <img src='/images/lg.svg' width='158px' alt='logo' />
        </Link>
      </div>
      <ul className="nav-nav">
        <li><Link to='/profile'>Profile</Link></li>
        <li><Link to='/'>Feed</Link></li>
      </ul>
      <ul className="nav-nav">
        <li><Link to='/register'>Register</Link></li>
        <li><Link to='/login'>Login</Link></li>
      </ul>
    </div>
  )
}

export default Navbar
