import React from 'react'
import "./footer.css"
import { Link, useLocation } from 'react-router-dom'

function Footer() {



    const location = useLocation();

    // Define an array of paths where the footer should be hidden
    const hideFooterPaths = ['/login', '/register', '/dashboard', "/liveexam", "/result"];

    // Check if the current path is in the array of paths where the footer should be hidden
    const shouldHideFooter = hideFooterPaths.includes(location.pathname);

    // If the current path is in the array, don't render the footer
    if (shouldHideFooter) {
        return null;
    }

    return (

        <>
            <div style={{ textDecoration: 'none', marginTop: "px" }}>

                <footer className=" text-lg-start text-white" style={{ backgroundColor: '#0099ff' }}>

                    <div className="container-fluid footerpadding">
                        <section className="">
                            <div className="row">
                                {/* col-lg-3 col-md-4 col-sm-6  */}
                                <div className="col-lg-3 col-md-4 col-sm-6 col-6 mx-auto mt-3 footertitle">
                                    <h5 className="  font-weight-bold " style={{ textDecoration: 'underline' }}>Quick Links</h5>
                                    <p>
                                        <Link to="/home" className="text-white" style={{ textDecoration: 'none' }} >
                                            <i className="fa fa-home" ></i> Home

                                        </Link>
                                    </p>
                                    <p>
                                        <Link to="/" className="text-white " style={{ textDecoration: 'none' }}>
                                            <i className="fa fa-users" style={{ marginRight: '5px' }} > </i>
                                            About Us</Link>
                                    </p>
                                    <p>
                                        <Link className="text-white" style={{ textDecoration: 'none' }}>
                                            <i className="fa fa-user-secret" style={{ marginRight: '5px' }} > </i>

                                            Privacy Policy</Link>
                                    </p>
                                    <p>
                                        <Link className="text-white" style={{ textDecoration: 'none' }}>
                                            <i className="fa fa-lock" style={{ marginRight: '5px' }}> </i>

                                            Term & Condition</Link>
                                    </p>
                                    <hr className="w-100 clearfix d-md-none" />

                                </div>



                                <div className="col-lg-3 col-md-4 col-sm-6 col-6  mx-auto mt-3 footertitle">
                                    <h5 className=" font-weight-bold " style={{ textDecoration: 'underline' }}>Test Links</h5>


                                    <p>
                                        <Link to="/home" className="text-white" style={{ textDecoration: 'none' }} >
                                            RRB Test Series

                                        </Link>
                                    </p>
                                    <p>
                                        <Link to="/home" className="text-white" style={{ textDecoration: 'none' }} >
                                           MBA Test Series

                                        </Link>
                                    </p>
                                    <p>
                                        <Link to="/home" className="text-white" style={{ textDecoration: 'none' }} >
                                          MPSE Test Series

                                        </Link>
                                    </p>
                                    <p>
                                        <Link to="/home" className="text-white" style={{ textDecoration: 'none' }} >
                                     JEE Test Series

                                        </Link>
                                    </p>
       

                                    <hr className="w-100 clearfix d-md-none" />

                                </div>


                                <div className="col-lg-3 col-md-4 col-sm-6  col-6 mx-auto mt-3 footertitle">
                                    <h5 className="font-weight-bold" style={{ textDecoration: 'underline', }}>
                                    Help & Support
                                    </h5>
                                    <p>
                                        <Link to="/home" className="text-white" style={{ textDecoration: 'none' }} >
                                            <i className="fa fa-chevron-right" ></i> 24x7 Live help

                                        </Link>
                                    </p> <p>
                                        <Link to="/home" className="text-white" style={{ textDecoration: 'none' }} >
                                            <i className="fa fa-chevron-right" ></i> Contact us

                                        </Link>
                                    </p> <p>
                                        <Link to="/home" className="text-white" style={{ textDecoration: 'none' }} >
                                            <i className="fa fa-chevron-right" ></i> Feedback

                                        </Link>
                                    </p> <p>
                                        <Link to="/home" className="text-white" style={{ textDecoration: 'none' }} >
                                            <i className="fa fa-chevron-right" ></i> FAQs

                                        </Link>
                                    </p>

                                </div>



                                {/* Grid column */}
                                <div className="col-lg-3 col-md-4 col-sm-6 col-6 mx-auto mt-3 footertitle">
                                    <h5 className=" font-weight-bold" style={{ textDecoration: 'underline', textAlign: "center" }}> Send Massage Here </h5>
                                    <form >
                                        <div className="mb-3 " style={{ textAlign: "center" }}>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Enter your Message"
                                                style={{ textAlign: "center" }}
                                            // value={userFeedback}
                                            // onChange={handleFeedbackChange}
                                            />
                                            <button type="submit" className="btn btn-light my-2" >
                                                Send
                                                <i className="fa fa-paper-plane " style={{ marginLeft: "6px" }} ></i>
                                            </button>
                                        </div>


                                    </form>
                                </div>
                            </div>
                        </section>

                        <hr className="my-1" />

                        <section className="pb-2">
                            <div className="row d-flex align-items-center">
                                <div className="col-md-7 col-lg-8 text-center text-md-start">
                                    <div className="p-3">
                                        © 2023 Copyright : &nbsp;
                                        <Link className="text-white" to="/">
                                            MakemyExam
                                        </Link>
                                    </div>
                                </div>
                              
                              

                                <div className="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">
                                    <Link className=" btn btn-outline-light btn-floating m-1 text-white icon-hover" role="button">
                                        <i className="fab fa-facebook-f"></i>
                                    </Link>
                                    <Link className="btn btn-outline-light btn-floating m-1 text-white icon-hover" role="button">
                                    <i className="fab fa-youtube"></i>
                                    </Link>


                                    <Link className="btn btn-outline-light btn-floating m-1 text-white icon-hover" role="button">
                                    <i className="fab fa-twitter"></i>
                                    </Link>

                                    <Link className="btn btn-outline-light btn-floating m-1 text-white icon-hover" role="button">
                                    <i className="fab fa-instagram"></i>
                                    </Link>

                                    <Link className="btn btn-outline-light btn-floating m-1 text-white icon-hover" role="button">
                                    <i className="fab fa-linkedin-in"></i>
                                    </Link>
                                </div>
                            </div>
                        </section>
                    </div>
                </footer>
            </div>
        </>
    )
}

export default Footer