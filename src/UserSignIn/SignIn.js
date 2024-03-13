// SigninForm.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { StudentsigninRequest, TeachersigninRequest, signinRequest } from '../actions/userActions';


const SignIn = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    isAdmin: false
  });

  console.log(formData);

  
  const handleChange = e => {
    const { name, value, checked } = e.target;
    // If the input is checkbox, update the state directly with checked value
    // Otherwise, update the state normally
    setFormData({ ...formData, [name]: name === 'isAdmin' ? checked : value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (formData.isAdmin) {
        dispatch(TeachersigninRequest(formData))
        
    } else {
        
        dispatch(StudentsigninRequest(formData));
    }
  };

  return (
    <div className='container mt-3 mb-3'>
      <div className='card-body'>
        <div className='row'>
          <div className='col'>
            <form onSubmit={handleSubmit}>
              <div className='col-4 container form-group'>

              
                <h3>Sign In</h3>
                <label htmlFor="email" className="form-label">Email</label>
                <input type="text" className="form-control" name="email" value={formData.email} onChange={handleChange} placeholder="Enter Your Email" />
              </div>
              <div className='col-4 container form-group'>
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control" name="password" value={formData.password} onChange={handleChange} placeholder="Enter Your Password" />
              </div>
              <div className='col-4 container mt-4 text-center form-group '>
                <button type="submit" className="btn btn-primary">Sign In</button>
              </div>


              <div className='col-4 container form-group'>
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="isAdmin"
                    name="isAdmin"
                    checked={formData.isAdmin}
                    onChange={handleChange}
                  />
                  <label className="form-check-label" htmlFor="isAdmin">Are you an admin?</label>
                </div>
                </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
