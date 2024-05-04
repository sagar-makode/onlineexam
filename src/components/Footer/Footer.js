import React from 'react'
import "./footer.css"
import { Link, useLocation } from 'react-router-dom'
import logopng from "../assets/Logo Cap.png"

function Footer() {



    const location = useLocation();

    // Define an array of paths where the footer should be hidden
    const hideFooterPaths = ['/login', '/register','/dashboard',"/liveexam","/result"];
  
    // Check if the current path is in the array of paths where the footer should be hidden
    const shouldHideFooter = hideFooterPaths.includes(location.pathname);
  
    // If the current path is in the array, don't render the footer
    if (shouldHideFooter) {
      return null;
    }

    return (
        <div className='footerbody'>

            <footer>
                <div className="content">
                    {/* <div className="top">
                       
                        
                    </div> */}
                    <div className="link-boxes">
                        <ul className="box">

                        <div className="logo-details">
                            {/* <i className="fab fa-slack"></i> */}
                            <Link className="navbar-brand" style={{ display: "flex", alignItems: "center", fontSize: "20px" }} to="/">
                                <img src={logopng} alt="Logo" className='logo-image' style={{marginRight:"10px"}} />
                                <div>
                                    <strong>ONLINE EXAM</strong>
                                    <br />
                                    <div style={{ fontSize: "12px" }}>Test Series | Live Exam</div>
                                </div>
                            </Link>
                        </div>
                            {/* <li className="link_name">Company</li> */}
                            <li className='text-justify'><a href="/" >here we will add the short inforamtion about our wesite whatever it may be ior slogem which attract and give  infornation about the. </a></li>
                            <li><a href="/">📍Hydrabad , india </a></li>
                            <li><a href="/">💌 Balauubhaii@gmail.com</a></li>
                            <li><a href="/">🌐 www.skillingreskilling.com</a></li>
                        </ul>
                        <ul className="box">
                            <li className="link_name">Quick links</li>
                            <li><a href="/">Home</a></li>
                            <li><a href="/">Courses</a></li>
                            <li><a href="/">Top Series</a></li>
                            <li><a href="/">News and Events</a></li>
                            <li><a href="/">Services</a></li>

                            <li><a href="/">Statistics</a></li>

                            <li><a href="/">Membership</a></li>

                        </ul>
                        <ul className="box">
                            <li className="link_name">Test Links</li>
                            <li><a href="/">MBA Test Series</a></li>
                            <li><a href="/">RRB Test Series</a></li>
                            <li><a href="/"> MPSE Test Series</a></li>
                            <li><a href="/">JEE Test Series</a></li>
                            <li><a href="/">NEET Test Series</a></li>
                            <li><a href="/">IELTS Test Series</a></li>


                        </ul>
                        <ul className="box">
                            <li className="link_name">Help & Support</li>
                            <li><a href="/">24x7 Live help</a></li>
                            <li><a href="/">Contact us</a></li>
                            <li><a href="/">Feedback</a></li>
                            <li><a href="/">Testimonial</a></li>
                            <li><a href="/">FAQs</a></li>
                            <li><a href="/">Safety Tips </a></li>

                        </ul>
                        <ul className="box input-box">
                            <li className="link_name">Subscribe</li>
                            <li><input type="text" placeholder="Enter your email" /></li>
                            <li><input type="button" value="Subscribe" /></li>
                            <div className="media-icons">
                            <a href="/"><i className="fab fa-facebook-f"></i></a>
                            <a href="/"><i className="fab fa-twitter"></i></a>
                            <a href="/"><i className="fab fa-instagram"></i></a>
                            <a href="/"><i className="fab fa-linkedin-in"></i></a>
                            <a href="/"><i className="fab fa-youtube"></i></a>
                        </div>
                        </ul>
                        
                    </div>
                </div>
                <div className="bottom-details">
                    <div className="bottom_text">
                        <span className="copyright_text">Copyright © 2024 <a href="/">Online Exam </a>All rights reserved</span>
                        <span className="policy_terms">
                            <a href="/">Privacy policy &nbsp;|</a>
                            <a href="/">Disclaimer &nbsp;|</a>
                            <a href="/">Terms & condition</a>
                        </span>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer