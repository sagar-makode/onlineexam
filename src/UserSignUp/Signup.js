// SignupForm.js
import "./Signup.css"
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signupRequest } from '../actions/userActions';
import SideImage from "../assets/8.png";
import { Link } from "react-router-dom";

const Signup = () => {
  const dispatch = useDispatch();
  const [admin, setAdmin] = useState(false)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    mobileNumber: '',
    password1:'',
    city:'',
    country:'',
    occupation:'',
    qualification:'',
    gender:''

  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(signupRequest(formData));
    console.log(formData);
  };
  const handleAdmin = () => {
    setAdmin(admin ? false : true)
  }

  return (
    <div className='row bg-img'>

      {/* This design is for student signup  */}
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

      {/* This signUp from is for Student signup  */}
      <div className="col-md-8 bg-white">
        <div className='row d-flex justify-content-center h-100'>
          <div className="col-md-8 mt-3">
            <div>
              <span>
                <h3>Create Your <b>{admin ? "Teacher" : "Student"}</b> Account</h3>
              </span>
              <span className="loginYourAccount">
                <span>Already Have Account?</span>
                <Link> Login Here</Link>
              </span>
            </div>
            <div>
              <form onSubmit={handleSubmit} >

                {/* First Name and Last Name */}
                <div className="row mt-2">
                  <div className="col">
                    <label htmlFor="firstName">First Name*</label>
                    <input type="text" className="signUpInput"name="firstName" value={formData.firstName} onChange={handleChange} placeholder="Enter your First Name" />
                  </div>
                  <div className="col">
                    <label htmlFor="lastName">Last Name*</label>
                    <input type="text" className="signUpInput" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Enter your Last Name" />
                  </div>
                </div>

                {/* PhoneNo and Email Id  */}
                <div className="row ">
                  <div className="col">
                    <label htmlFor="phoneNo">PhoneNo*</label>
                    <input type="number" className="signUpInput" name="mobileNumber" value={formData.mobileNumber} onChange={handleChange} placeholder="Enter your mobile No" />
                  </div>
                  <div className="col">
                    <label htmlFor="emailId">Email Id*</label>
                    <input type="email" className="signUpInput" name="email" value={formData.email} onChange={handleChange} placeholder="Enter your Email Id" />
                  </div>
                </div>

                {/* Password and confirm Password  */}
                <div className="row ">
                  <div className="col">
                    <label htmlFor="password">Password*</label>
                    <input type="password" className="signUpInput" name="password" value={formData.password} onChange={handleChange} placeholder="Enter your Password" />
                  </div>
                  <div className="col">
                    <label htmlFor="confirmPassword">Confirm Password*</label>
                    <input type="password" className="signUpInput" name="password1" value={formData.password1} onChange={handleChange} placeholder="Confirm your password" />
                  </div>
                </div>

                {/* Country and City */}
                <div className="row">
                  <div className="col">
                    <label htmlFor="country">Country*</label>
                    <input type="text" className="signUpInput" name="country" value={formData.country} onChange={handleChange} placeholder="Enter your country" />
                  </div>
                  <div className="col">
                    <label htmlFor="city">City*</label>
                    <input type="text" className="signUpInput" name="city" value={formData.city} onChange={handleChange} placeholder="Enter your city" />
                  </div>
                </div>

                {/* Occupation and Qualifications  */}
                <div className="row ">
                  <div className="col">
                    <label htmlFor="gender">Occupation*</label>
                    <input type="text" className="signUpInput" name="occupation" value={formData.occupation} onChange={handleChange} placeholder="Enter your occupation" />
                  </div>
                  <div className="col">
                    <label htmlFor="qualifications">Qualifications*</label>
                    <input type="text" className="signUpInput" name="qualification" value={formData.qualification} onChange={handleChange} placeholder="Enter your qualification" />
                  </div>
                </div>
                <div>
                <div className="col">
                    <label htmlFor="gender">Gender*</label>
                    <input type="text" className="signUpInput" name="gender" value={formData.gender} onChange={handleChange} placeholder="Enter your gender" />
                  </div>
                  <div className="mt-2">
                <span><span><input type="checkbox" className="form-check-input checkBox" id="rememberMe" name="rememberMe" /></span><span>I am declearing that All the details provided by me is true and I am only resposible for that</span></span>

                  </div>
                </div>


                {/* <div >
                  <label htmlFor="lastname" className="form-label">Last Name</label>
                  <input type="text" className="signUpInput" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Enter Your Last Name" />
                </div>
                 <div >
                  <label htmlFor="email" className="form-label">Email</label>
                  <input type="text" className="signUpInput" name="email" value={formData.email} onChange={handleChange} placeholder="Enter Your Email" />
                </div>
                <div >
                  <label htmlFor="password" className="form-label">Password</label>
                  <input type="text" className="signUpInput" name="password" value={formData.password} onChange={handleChange} placeholder="Enter Your Password" />
                </div>

                <div > </di
                  <label htmlFor="mobileNumber" className="form-label">Mobile Number</label>
                  <input type="number" className="signUpInput" name="mobileNumber" value={formData.mobileNumber} onChange={handleChange} placeholder="Enter Your Mobile Number" />
               v>
                <div >
                  <label htmlFor="role" className="form-label">Role</label>
                  <select className="signUpInput" name="role" value={formData.role} onChange={handleChange}>
                    <option value="">Select</option>
                    <option value="Teacher">Teacher</option>
                    <option value="Student">Student</option>
                  </select>
                </div> */}

                <div className="mt-3">
                  <button className=" customSignUp-btn"type="submit">Sign Up</button>
                </div>
              </form>
                          </div>
          </div>
        </div>
      </div>

      {/* This design is for admin Signup  */}
      <div className='col-md-4' hidden={!admin}>
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

export default Signup;
