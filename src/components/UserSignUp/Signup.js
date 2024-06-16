import React, { useEffect, useState,useRef} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { signupRequest, generateOtp, varifyOtp, clearMessage } from '../actions/userActions';
import { Link, useNavigate } from 'react-router-dom';
import { notification } from 'antd';
import './Signup.css'

function UserSignUp() {

  const dispatch = useDispatch();

  const [otp, setOtp] = useState(['', '', '', '']);
  const inputRefs = useRef([]);

  const [notificationShown, setNotificationShown] = useState(false);
  const signupSuccessMessage = useSelector(state => state.user.SignupSucess);
  const [isStudentSignup, setStudentSignup] = useState(true);
  const [SignupFormMarginLeft, setSignupFormMarginLeft] = useState(0);
  const [emailVarification, setEmailVarification] = useState(false);
  const [OTPsentnotification, setOTPsentnotification] = useState(false);
  const [varifiedOTPNotification, setVarifiedOTPNotification] = useState(false);
  const [emailDisable, setEmailDisable] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);


  const [errors, setErrors] = useState({});

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    mobileNumber: '',
    role: "Student"
  });

  const navigate = useNavigate();
  const otpGenerated = useSelector(state => state.user.otpGenerated);
  const varifiedOtp = useSelector(state => state.user.varifiedOtp);
  const otpGeneratedError = useSelector(state => state.user.otpGeneratedError);
  const varifiedOTPError = useSelector(state => state.user.varifiedOTPError);
  const varifiedOTP = useSelector(state => state.user.message);
  const otpSuccess=useSelector(state=>state.user.otpSuccess);
  const [isEmailValid, setIsEmailValid] = useState(false);


  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });

    if(e.target.name==="email"){
      setIsEmailValid(isValidEmail(e.target.value));
    }
  };

  const isValidEmail = (email) => {
    const emailRegex = /^^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };


  const handleOtpChange = (index, value) => {
    if (/[^0-9]/.test(value)) return; // Only allow digits

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Automatically focus the next input if a digit was entered
    if (value && index < 3) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };
  // for submit Form



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
        role: "Student",
      });

    }
  };

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

  useEffect(() => {
    // Check if all fields are filled
    const allFieldsFilled = otp.every(value => value !== '');
    setIsButtonDisabled(!allFieldsFilled);
  }, [otp]);

  useEffect(() => {
    if (otpGenerated && OTPsentnotification && otpSuccess==="key generated") {
      openNotification1();
      setOTPsentnotification(false);
      setEmailVarification(true);
    }
    else if(otpGenerated && OTPsentnotification && otpSuccess==="User Already Registered"){
      setOTPsentnotification(false);
      openNotification6();
    }
    else if (otpGeneratedError && OTPsentnotification) {
      openNotification5();
      setOTPsentnotification(false);
    }
    dispatch(clearMessage());
  }, [otpGenerated, OTPsentnotification,dispatch,otpSuccess, otpGeneratedError]);

  // varified OTP Notification
  useEffect(() => {
    if (varifiedOTPNotification && varifiedOtp && varifiedOTP === "otp varified") {
      openNotification2();
      setVarifiedOTPNotification(false);
      setEmailDisable(true);
    }
    else if (varifiedOTPNotification &&varifiedOtp && varifiedOTP === "otp not varified") {
      openNotification7();
      setVarifiedOTPNotification(false);
      setEmailDisable(false);
     
    }
    else if (varifiedOTPError && varifiedOTPNotification) {
      openNotification3();
      setVarifiedOTPNotification(false);
      setEmailDisable(false);
    }
    dispatch(clearMessage());

  }, [varifiedOTPError, varifiedOTPNotification, varifiedOtp,dispatch,varifiedOTP])

  //Account creation Notification
  useEffect(() => {
    if (signupSuccessMessage && !notificationShown) {
      setNotificationShown(true);
      openNotification();
      setTimeout(() => {
        navigate('/login'); // Navigate after 5 seconds
        dispatch(clearMessage())
      }, 2000);
    }

  }, [signupSuccessMessage, notificationShown, navigate, dispatch]);

  const openNotification = () => {
    const args = {
      message: "Account Created",
      description: "Congratulations, Now you are part of our family. Please login to continue.",
      duration: 2,
    };
    notification.open(args);
  };

  const openNotification1 = () => {
    const args = {
      message: "OTP sent",
      description: "Congratulations, OTP sent successfully",
      duration: 2,
    };
    notification.open(args);
  };

  const openNotification2 = () => {
    const args = {
      message: "OTP Varified",
      description: "Congratulations, Your email varified successfully",
      duration: 2,
    };
    notification.open(args);
  };

  const openNotification3 = () => {
    const args = {
      message: "Error",
      description: "Something went wrong, Check your email",
      duration: 2,
    };
    notification.open(args);
  };

  const openNotification5 = () => {
    const args = {
      message: "Error",
      description: "Something Went Wrong, Try again Later",
      duration: 2,
    };
    notification.open(args);
  };
  const openNotification6 = () => {
    const args = {
      message: (<span style={{ color: 'red' }}>
       User Already Registered
      </span>
      ),
      description: (
        <span style={{ color: 'red' }}>
          Please login or enter another email
        </span>
      ),
      duration: 2,
    };
    notification.open(args);
  };
  const openNotification7 = () => {
    const args = {
      message: (
        <span style={{ color: 'red' }}>
          OTP is Not Correct
        </span>
      ),
      description:
      (
        <span style={{ color: 'red' }}>
        Please enter valid Otp
        </span>
      ),
      duration: 2,
    };
    notification.open(args);
  };


  //handle OTP Varification
  const handleVerifyOtp = () => {
    const data = {
      email: formData.email,
      otp: otp.join("")
    }
    dispatch(varifyOtp(data));
    setVarifiedOTPNotification(true);
  }

  const handleSendOTP = () => {
    const data = {
      "email": formData.email,
      isStudent: isStudentSignup,
      newuser:true
    }
    if (errors.email === "") {
      dispatch(generateOtp(data));
      setOTPsentnotification(true);
    }

  }


  return (
    <div className='maindiv' style={{height:"90%",marginTop:"15px"}}>
      <div className='userSignupBody' style={{ alignItems: emailVarification ? "center" : "" }} >
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
                  <input
                    type="email" className="signUpInputemail"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your Email"
                    disabled={emailDisable}
                  />
                  <button
                    type="button"
                    className='verifyOtpButton'
                    disabled={emailDisable || !isEmailValid}

                    onClick={handleSendOTP}
                  >
                    {
                      otpGenerated ? "Sent" : "Send OTP"
                    }

                  </button>
                </div>


                {emailVarification && (
                   <div className="field" style={{ marginTop: '20px' }}>
                   {otp.map((value, index) => (
                     <input
                       key={index}
                       ref={(el) => (inputRefs.current[index] = el)}
                       id={`otp-inputStudent-${index}`}
                       type="text"
                       className="signUpInput"
                       value={value}
                       onChange={(e) => handleOtpChange(index, e.target.value)}
                       onKeyDown={(e) => handleKeyDown(index, e)}
                       maxLength="1"
                       style={{
                         width: '40px',
                         height: '40px',
                         textAlign: 'center',
                         marginRight: '15px',
                         border: '1px solid black',
                         borderRadius:"5px",
                        marginTop:"10px"
                       }}
                     />
                   ))}
                   <button
                     type="button"
                     className="verifyOtpButton bg-success"
                     onClick={handleVerifyOtp}
                     disabled={isButtonDisabled || emailDisable}
                   >
                     {!emailDisable?" Varify OTP":"Varified"}
                   </button>
                 </div>
                )}

                {errors.email && <div className="error">{errors.email}</div>}




                <div className="field" style={{ marginTop: errors.email ? '5px' : '20px' }}>
                  <input type="text" className="signUpInput" name="mobileNumber" value={formData.mobileNumber} onChange={handleChange} placeholder="Enter your mobile No" />
                </div>

                {errors.mobileNumber && <div className="  error">{errors.mobileNumber}</div>}


                <div className="field" style={{ marginTop: errors.mobileNumber ? '5px' : '20px' }}>
                  <input type="password" className="signUpInput" name="password" value={formData.password} onChange={handleChange} placeholder="Enter your Password" />
                </div>
                {errors.password && <div className="  error">{errors.password}</div>}


                <div className="field lbtn" style={{ marginTop: errors.password ? '15px' : '20px' }}>
                  <div className="lbtn-layer"></div>
                  <input type="submit" className='submit' value="Signup" onClick={handleSubmit} style={{ backgroundColor: emailDisable ? '' : 'gray' }} disabled={!emailDisable}  />

                </div>
                <div className="signup-link">
                  Already have an account? <Link to="/login">Login here</Link>
                </div>

              </form>



             {!isStudentSignup && <form onSubmit={handleSubmit} className="signup">
                <div className="field" style={{ marginTop: errors.name ? '10px' : '20px' }} >
                  <input type="text" className="signUpInput" name="name" value={formData.name} onChange={handleChange} placeholder="Enter your Name" />
                </div>
                {errors.name && <div className="  error">{errors.name}</div>}

                <div className="field" style={{ marginTop: errors.name ? '5px' : '20px' }}>
                <input
                    type="email" className="signUpInputemail"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your Email"
                    disabled={emailDisable}
                  />
                  <button
                    type="button"
                    className='verifyOtpButton'
                    disabled={emailDisable || !isEmailValid}

                    onClick={handleSendOTP}
                  >
                    {
                      otpGenerated ? "Sent" : "Send OTP"
                    }

                  </button>
                  </div>


                 {emailVarification  && (
                   <div className="field" style={{ marginTop: '20px' }}>
                   {otp.map((value, index) => (
                     <input
                       key={index}
                       ref={(el) => (inputRefs.current[index] = el)}
                       id={`otp-inputTeacher-${index}`}
                       type="text"
                       className="signUpInput"
                       value={value}
                       onChange={(e) => handleOtpChange(index, e.target.value)}
                       onKeyDown={(e) => handleKeyDown(index, e)}
                       maxLength="1"
                       style={{
                         width: '40px',
                         height: '40px',
                         textAlign: 'center',
                         marginRight: '15px',
                         border: '1px solid black',
                         borderRadius:"5px", marginTop:"10px"
                       }}
                     />
                   ))}
                   <button
                     type="button"
                     className="verifyOtpButton bg-success"
                     onClick={handleVerifyOtp}
                     disabled={isButtonDisabled || emailDisable}
                   >
                     {!emailDisable?" Varify OTP":"Varified"}
                   </button>
                 </div>
                )}

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
                  <input type="submit" className='submit' value="Signup" onClick={handleSubmit} style={{ backgroundColor: emailDisable ? '' : 'gray' }} disabled={!emailDisable}  />
                </div>
                <div className="signup-link">
                  Already have an account? <Link to="/login">Login here</Link>
                </div>
              </form>}
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default UserSignUp

