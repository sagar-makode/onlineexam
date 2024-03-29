import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { clearMessage, signupRequest } from '../actions/userActions';
import { Link, useNavigate } from 'react-router-dom';
import { notification } from 'antd';

function UserSignUp() {
  const dispatch = useDispatch();

  const signupSuccessMessage = useSelector(state => state.user.SignupSucess);
  const [isStudentSignup, setStudentSignup] = useState(true);
  const [SignupFormMarginLeft, setSignupFormMarginLeft] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    mobileNumber: '',
    role: "Student"
  });
  const [errors, setErrors] = useState({});

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  // for submit Form

  const navigate = useNavigate()

  const handleSubmit = e => {
    e.preventDefault();
    if (validateForm()) {
    
      dispatch(signupRequest(formData));
      // Reset form data after successful submission
      setFormData({
        name: '',
        email: '',
        password: '',
        mobileNumber: '',
        role: "Student"
      });
    }
  };
  // for submit Form


  // above toggle button
  const studentToggleButton = () => {
    setSignupFormMarginLeft(0);
    setStudentSignup(true);
    setFormData({ ...formData, role: "Student" });
  };
  const adminToggeleButton = () => {
    setSignupFormMarginLeft(-50);
    setStudentSignup(false);
    setFormData({ ...formData, role: "Teacher" });

  };
    // above toggle button


    // validation Start
  const validateForm = () => {
    let errors = {};

    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
    }

    if (!formData.mobileNumber.trim()) {
      errors.mobileNumber = 'Mobile number is required';
    } else if (!/^\d{10}$/.test(formData.mobileNumber)) {
      errors.mobileNumber = 'Mobile number is invalid';
    }

    if (!formData.password.trim()) {
      errors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      errors.password = 'Password must be at least 6 characters';
    }

    setErrors(errors);

    return Object.keys(errors).length === 0;
  };
  // validation end


  // Success and fail message Start
  const [notificationShown, setNotificationShown] = useState(false); 

  useEffect(() => {
    if (signupSuccessMessage && !notificationShown) {
      setNotificationShown(true);
      openNotification();
      setTimeout(() => {
        navigate('/login'); // Navigate after 5 seconds
        dispatch(clearMessage())
      }, 2000);
    }
  }, [signupSuccessMessage, notificationShown, navigate,dispatch]);

    const openNotification = () => {
      const args = {
        message: "Account Created",
        description: "Congratulations, Now you are part of our family. Please login to continue.",
        duration: 2,
      };
      notification.open(args);
    };
  
  // Success and fail message end

  


  return (
    <div className='maindiv'>
      <div className='userloginbody'>
        <div className="wrapper"  >
          <div className="title-text">
            <div className="title login" style={{ marginLeft: `${SignupFormMarginLeft}%` }} >Student Signup</div>
            <div className="title signup">Admin Signup</div>
          </div>
          <div className="form-container">
            <div className="slide-controls">
              <input type="radio" name="slide" className='inputs' id="login" checked={isStudentSignup} onChange={studentToggleButton} />
              <input type="radio" name="slide" id="signup" className='inputs' checked={!isStudentSignup} onChange={adminToggeleButton} />
              <label htmlFor="login" className={`slide login ${isStudentSignup ? 'active' : ''}`}>Student</label>
              <label htmlFor="signup" className={`slide signup ${!isStudentSignup ? 'active' : ''}`}>Admin</label>
              <div className="slider-tab"></div>
            </div>
            <div className="form-inner">
              <form onSubmit={handleSubmit} style={{ marginLeft: `${SignupFormMarginLeft}%` }} className={`login ${isStudentSignup ? 'active' : ''}`}>
                <div className="field" style={{ marginTop: errors.name ? '10px' : '20px' }}>
                  <input type="text" className="signUpInput" name="name" value={formData.name} onChange={handleChange} placeholder="Enter your Name" />
                </div>
                {errors.name && <div className="  error">{errors.name}</div>}

                <div className="field" style={{ marginTop: errors.name ? '5px' : '20px' }}>
                  <input type="email" className="signUpInput" name="email" value={formData.email} onChange={handleChange} placeholder="Enter your Email" />
                </div>


                {errors.email && <div className="error">{errors.email}</div>}


                <div className="field" style={{ marginTop: errors.email ? '5px' : '20px' }}>
                  <input type="number" className="signUpInput" name="mobileNumber" value={formData.mobileNumber} onChange={handleChange} placeholder="Enter your mobile No" />
                </div>

                {errors.mobileNumber && <div className="  error">{errors.mobileNumber}</div>}


                <div className="field" style={{ marginTop: errors.mobileNumber ? '5px' : '20px' }}>
                  <input type="password" className="signUpInput" name="password" value={formData.password} onChange={handleChange} placeholder="Enter your Password" />
                </div>
                {errors.password && <div className="  error">{errors.password}</div>}


                <div className="field lbtn" style={{ marginTop: errors.password ? '15px' : '20px' }}>
                  <div className="lbtn-layer"></div>
                  <input type="submit" className='submit' value="Signup" />

                </div>
                <div className="signup-link">
                  Already have an account? <Link to="/login">Login here</Link>
                </div>

              </form>
              <form onSubmit={handleSubmit} className="signup">
                <div className="field" style={{ marginTop: errors.name ? '10px' : '20px' }} >
                  <input type="text" className="signUpInput" name="name" value={formData.name} onChange={handleChange} placeholder="Enter your Name" />
                </div>
                {errors.name && <div className="  error">{errors.name}</div>}

                <div className="field" style={{ marginTop: errors.name ? '5px' : '20px' }}>
                  <input type="email" className="signUpInput" name="email" value={formData.email} onChange={handleChange} placeholder="Enter your Email" />
                </div>
                {errors.email && <div className="error">{errors.email}</div>}

                <div className="field" style={{ marginTop: errors.email ? '5px' : '20px' }}>
                  <input type="number" className="signUpInput" name="mobileNumber" value={formData.mobileNumber} onChange={handleChange} placeholder="Enter your mobile No" />
                </div>
                {errors.mobileNumber && <div className="  error">{errors.mobileNumber}</div>}

                <div className="field" style={{ marginTop: errors.mobileNumber ? '5px' : '20px' }}>
                  <input type="password" className="signUpInput" name="password" value={formData.password} onChange={handleChange} placeholder="Enter your Password" />
                </div>
                {errors.password && <div className="  error">{errors.password}</div>}


                <div className="field lbtn " style={{ marginTop: errors.password ? '15px' : '20px' }}>
                  <div className="lbtn-layer"></div>
                  <input type="submit" className='submit' value="Signup" />
                </div>
                <div className="signup-link">
                  Already have an account? <Link to="/login">Login here</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserSignUp

