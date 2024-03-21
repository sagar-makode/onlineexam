import './Navbar.css'
import React from 'react'
import {Link} from 'react-router-dom'

export default function Navbar() {

    const handleLogout = () => {
      // Clear the token from session storage
      sessionStorage.removeItem('token');
      
      // Optionally, perform additional logout-related actions here
      // For example, redirect the user to the login page
      // window.location.href = '/login';
    }
  
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="Nav">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        <Link className="nav-link active" to="/exam">Create New Exam</Link>
        <Link className="nav-link active" to="/overview">Show OVerview</Link>
        <Link className="nav-link active" to="/liveexam">Live Exam</Link>
        <Link className="nav-link active" to="/register">Sign Up</Link>
        <Link className="nav-link active" to="/signin">Sign In</Link>
        <Link className="nav-link active" onClick={handleLogout} >Sign Out</Link>



        
      </div>
    </div>
  </div>
</nav>
  )
}
