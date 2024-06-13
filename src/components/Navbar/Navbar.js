import './Navbar.css';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logopng from "../assets/Logo Cap.png";
import AuthContext from './AuthContext';

export default function Navbar() {
    const { isAuthenticated, logout } = useContext(AuthContext);
    const location = useLocation();
    const [isNavbarOpen, setIsNavbarOpen] = useState(false);
    const navbarRef = useRef(null);

    const handleLogout = () => {
        logout();
    };

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (navbarRef.current && !navbarRef.current.contains(event.target)) {
                setIsNavbarOpen(false);
            }
        };

        document.addEventListener('click', handleOutsideClick);

        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, []);



    const closeNavbar = () => {
        setIsNavbarOpen(false);
    };
    // Define an array of paths where the footer should be hidden
    const hideFooterPaths = ['/dashboard'];
    // Check if the current path is in the array of paths where the footer should be hidden
    const shouldHideFooter = hideFooterPaths.includes(location.pathname);

    return (
        <div>
            <nav className={`navbar navbar-expand-lg navbar-dark ${shouldHideFooter ? 'fixed-top' : ''}`} ref={navbarRef}>
                <div className="container-fluid" >
                    <Link className="navbar-brand" style={{ display: "flex", alignItems: "center", fontSize: "20px" }} to="/">
                        <img src={logopng} alt="Logo" className='logo-image' style={{ marginRight: "10px" }} />
                        <div>
                            <strong className='logo-heading'>Make My Exam</strong>
                            <br />
                            <div className='logo-heading-sub'>Test Series | Live Exam</div>
                        </div>
                    </Link>

                    <button className="navbar-toggler" type="button" onClick={() => setIsNavbarOpen(!isNavbarOpen)}>
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={`collapse navbar-collapse ${isNavbarOpen ? 'show' : ''}`}>
                        <div className="navbar-nav" style={{ fontSize: "16px" }}>
                            <Link className="nav-link active" aria-current="page"  to="/" onClick={closeNavbar} >Home</Link>
                            <Link className="nav-link active" aria-current="page" to="/alltest" onClick={closeNavbar}>All Test</Link>
                            <Link className="nav-link active" aria-current="page" to="/allcreators" onClick={closeNavbar}>Creators</Link>


                            {isAuthenticated ? (
                                <Link className="nav-link active" aria-current="page" to="/dashboard" onClick={closeNavbar}>Dashboard</Link>
                            ) : (
                                <>
                                    {/* <Link className="nav-link active" aria-current="page" to="/">Contact us</Link> */}
                                    <Link className="nav-link active" aria-current="page" to="/aboutus" onClick={closeNavbar}>About us</Link>
                                </>
                            )}
                        </div>
                        <div className="navbar-nav ms-auto"> {/* ms-auto will push these links to the right */}
                            {isAuthenticated ? (
                                <Link className="nav-link active" onClick={(e) => { handleLogout(); closeNavbar(); }}>
                                    Sign Out
                                </Link>
                            ) : (
                                <>
                                    <Link className="nav-link active" to="/register" onClick={closeNavbar}>
                                        Sign Up
                                    </Link>
                                    <Link className="nav-link active" to="/login" onClick={closeNavbar}>
                                        Sign In
                                    </Link>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}
