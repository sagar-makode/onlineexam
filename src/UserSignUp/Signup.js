// SignupForm.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signupRequest } from '../actions/userActions';

const Signup = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    mobileNumber: '',
  });


  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(signupRequest(formData));
  };

  return (

    <div className='container mt-3 mb-3'>
      <div className='card-body'>
        <div className='row'>
          <h3 className='text-center m-4'>Create Your Account</h3>


          <div className='col '>
            <form onSubmit={handleSubmit} >
              <div className='col-4 container form-group'>
                <label htmlFor="firstname" className="form-label">First Name</label>
                <input type="text" className="form-control" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="Enter your First Name" />
              </div>
              <div className='col-4 container form-group'>
                <label htmlFor="lastname" className="form-label">Last Name</label>
                <input type="text" className="form-control" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Enter Your Last Name" />
              </div>
              <div className='col-4 container form-group'>
                <label htmlFor="email" className="form-label">Email</label>
                <input type="text" className="form-control" name="email" value={formData.email} onChange={handleChange} placeholder="Enter Your Email" />
              </div>
              <div className='col-4 container form-group'>
                <label htmlFor="password" className="form-label">Password</label>
                <input type="text" className="form-control" name="password" value={formData.password} onChange={handleChange} placeholder="Enter Your Password" />
              </div>

              <div className='col-4 container form-group'>
                <label htmlFor="mobileNumber" className="form-label">Mobile Number</label>
                <input type="number" className="form-control" name="mobileNumber" value={formData.mobileNumber} onChange={handleChange} placeholder="Enter Your Mobile Number" />
              </div>
              <div className='col-4 container form-group'>
                <label htmlFor="role" className="form-label">Role</label>
                <select className="form-control" name="role" value={formData.role} onChange={handleChange}>
                  <option value="">Select</option>
                  <option value="Teacher">Teacher</option>
                  <option value="Student">Student</option>
                </select>
              </div>

              <div className='col-4 container mt-4 text-center form-group '>

                <button type="submit">Sign Up</button>
              </div>


            </form>


          </div>


        </div>

      </div>

    </div>
  );
};

export default Signup;
