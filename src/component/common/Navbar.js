import './Navbar.css'
import React, { useContext } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logopng from "../../assets/Logo Cap.png"
import AuthContext from './AuthContext'
export default function Navbar() {

 

    const handleLogout = () => {
        logout();
    };
   
    const { isAuthenticated, logout} = useContext(AuthContext);

    const location = useLocation();

    // Define an array of paths where the footer should be hidden
    const hideFooterPaths = ['/dashboard'];
  
    // Check if the current path is in the array of paths where the footer should be hidden
    const shouldHideFooter = hideFooterPaths.includes(location.pathname);
  
    return (
        <div>

            <nav className={`navbar navbar-expand-lg navbar-dark ${shouldHideFooter ? 'fixed-top' : ''}`}>
                <div className="container-fluid" >
                    <Link className="navbar-brand" style={{ display: "flex", alignItems: "center", fontSize: "20px" }} to="/">
                        <img src={logopng} alt="Logo" className='logo-image' style={{ marginRight: "10px" }} />
                        <div>
                            <strong>ONLINE EXAM</strong>
                            <br />
                            <div style={{ fontSize: "12px" }}>Test Series | Live Exam</div>
                        </div>
                    </Link>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav" style={{ fontSize: "16px" }}>
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            <Link className="nav-link active" aria-current="page" to="/">Test Series</Link>

                            {isAuthenticated ? (
                                <Link className="nav-link active" aria-current="page" to="/dashboard">Dashboard</Link>

                            ) : (
                                <>
                                    <Link className="nav-link active" aria-current="page" to="/">Contact us</Link>
                                    <Link className="nav-link active" aria-current="page" to="/">About us</Link></>
                            )}

                        </div>
                        <div className="navbar-nav ms-auto"> {/* ms-auto will push these links to the right */}
                            {isAuthenticated ? (
                                <Link className="nav-link active" onClick={handleLogout} to="/">
                                    Sign Out
                                </Link>

                            ) : (
                                <>
                                    <Link className="nav-link active" to="/register">
                                        Sign Up
                                    </Link>
                                    <Link className="nav-link active" to="/login">
                                        Sign In
                                    </Link>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </nav>


        </div>
    )
}
