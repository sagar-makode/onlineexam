import './Navbar.css'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import logopng from "../../assets/Logo Cap.png"
import AuthContext from './AuthContext'
export default function Navbar() {

    // const handleLogout = () => {
    //     sessionStorage.removeItem('token');
    // }


    const handleLogout = () => {
        logout();
      };
    //   const handleLin = () => {
    //     login();
    //   };
    const { isAuthenticated, logout , login} = useContext(AuthContext);

    return (
        <div>


            <nav className="navbar navbar-expand-lg navbar-dark ">
                <div className="container-fluid" >
                    <Link className="navbar-brand" style={{ display: "flex", alignItems: "center", fontSize: "20px" }} to="/">
                        <img src={logopng} alt="Logo" className='logo-image' style={{marginRight:"10px"}} />
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
                            <Link className="nav-link active" aria-current="page" to="/">Contact us</Link>
                            <Link className="nav-link active" aria-current="page" to="/">About us</Link>

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
                                    <Link className="nav-link active"  to="/login">
                                        Sign In
                                    </Link>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </nav>



            {/* <nav className="navbar navbar-expand-lg " style={navbarStyle}>
    <div className="container-fluid">
        <Link to="/" className="navbar-brand" style={navbarStyle}>
            <h2 className="m-0">Make My Image</h2>
        </Link>
        <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            style={buttonStyle}
        >
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <Link className="nav-link" to="/" style={navbarStyle}>
                        Make My Image
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/compressimage" style={navbarStyle}>
                        Edit Image
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/" style={navbarStyle}>
                        Home
                    </Link>
                </li>
            </ul>
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <Link className="nav-link" to="/" style={navbarStyle}>
                        Sign In
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/" style={navbarStyle}>
                        Sign Up
                    </Link>
                </li>
            </ul>
        </div>
    </div>
</nav> */}

        </div>
    )
}
