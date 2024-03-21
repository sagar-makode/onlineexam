// SigninForm.js
import "./SignIn.css"
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { StudentsigninRequest, TeachersigninRequest } from '../actions/userActions';
import SideImage from "../assets/8.png"
import { Link } from 'react-router-dom'


const SignIn = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    isAdmin: false
  });
  const[admin,setAdmin]=useState(false)
  console.log(formData);


  const handleChange = e => {
    const { name, value, checked } = e.target;
    // If the input is checkbox, update the state directly with checked value
    // Otherwise, update the state normally
    setFormData({ ...formData, [name]: name === 'isAdmin' ? checked : value });
  };

  const handleAdmin=()=>{
   setAdmin(admin?false:true) ;
   setFormData({...formData,isAdmin:admin?false:true})
   console.log(admin)
  }
  const handleSubmit = e => {
    e.preventDefault();
    if (formData.isAdmin) {
      dispatch(TeachersigninRequest(formData))

    } else {

      dispatch(StudentsigninRequest(formData));
    }
  };

  return (
    <div className="row bg-img">
      {/* This design is for Student Login */}
      <div className='col-md-4' hidden={admin} >
        <div className="row d-flex justify-content-center">
          <div className="d-flex justify-content-center ">
            <img src={SideImage} className="sideImage mt-8" alt="sideImage" />
          </div>
          <div className="d-flex justify-content-center text-white mt-5">
            <div>
              <span>
                <h3 >OnlineExam.com</h3>
              </span>
              <span className="d-flex justify-content-center">
                <h5>Courses | Test Series</h5>
              </span>
            </div>
          </div>
          <div className="d-flex justify-content-center mt-5">
            <button className="text-black bg-white loginchangeButton" onClick={handleAdmin}>
              <h3> Are You admin </h3>
              <h4>Click Here</h4>
            </button>
          </div>
          <span className="d-flex justify-content-center text-white"> Slogan willbe appear Here</span>
        </div>
      </div>

      {/* This is the common design for Student and Teacher */}
      <div className='col-md-8 bg-white'>
        <div className='row d-flex justify-content-center h-100'>
          <div className="col-md-8 signInDetails">
            <form onSubmit={handleSubmit}>
              <div className='mb-5'>
                <span className="signinHeading">
                  <h2>Login to your <b>{!admin?"Student":"Admin"} </b>Account</h2>
                </span>
                <span className="createNewAccount">
                  <span>Don't have an account?</span>
                  <Link> Create One here</Link>
                </span>
              </div>
              <div>
                <input type="text" name="email" value={formData.email} onChange={handleChange} placeholder="Enter Your Email" />
              </div>
              <div >
                <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Enter Your Password" />
              </div>
              <div className='  forgotPassword'>
                <span><span><input type="checkbox" className="form-check-input checkBox" id="rememberMe" name="rememberMe" /></span><span>Remember Me</span></span>
                <span><Link>Forgot Password?</Link></span>
              </div>
              <div className=' text-center signInButton '>
                <button type="submit" className="customSignIn-btn">Log In</button>
              </div>
              <div className='socialSites'>
                <span><h4 className="socialSiteMessage">OR TRY OUR SOCIALS</h4></span>
                <span className="otherSites">
                  <button className="customSocial-btn">facebook</button>
                  <button className="customSocial-btn">twitter</button>
                  <button className="customSocial-btn">google</button>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* This is for admin Login  */}
      <div className='col-md-4'  hidden={!admin}>
        <div className="row d-flex justify-content-center">
          <div className="d-flex justify-content-center ">
            <img src={SideImage} className="sideImage mt-8" alt="sideImage" />
          </div>
          <div className="d-flex justify-content-center text-white mt-5">
            <div>
              <span>
                <h3 >OnlineExam.com</h3>
              </span>
              <span className="d-flex justify-content-center">
                <h5>Courses | Test Series</h5>
              </span>
            </div>
          </div>
          <div className="d-flex justify-content-center mt-5">
            <button className="text-black bg-white loginchangeButton" onClick={handleAdmin}>
              <h3> Are You Student </h3>
              <h4>Click Here</h4>
            </button>
          </div>
          <span className="d-flex justify-content-center text-white"> Slogan willbe appear Here</span>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
