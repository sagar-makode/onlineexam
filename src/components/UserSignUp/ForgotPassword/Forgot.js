import React, { useEffect, useState,useRef } from 'react';
import './Forgot.css';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {  clearMessage, generateOtp, resetPassword, varifyOtp } from '../../actions/userActions';
import { notification } from 'antd';

export default function Forgot() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [otp, setOtp] = useState(['', '', '', '']);
  const [isStudentLogin, setStudentLogin] = useState(true);
  const [loginFormMarginLeft, setLoginFormMarginLeft] = useState(0);
  const [forgotFormData, setforgotFormData] = useState({
    email: '',
    password: ''
  });

  const inputRefs = useRef([]);
  const [forgotEmailVarification, setforgotEmailVarification] = useState(false);
  const [OTPsentnotification,setOTPsentnotification]=useState(false)
  const [otpVerified, setOtpVerified] = useState(false);
  const [passwordResetFlag, setPasswordResetFlag] = useState(false);
  const [varifiedOTPNotification, setVarifiedOTPNotification] = useState(false);


  const varifiedOtpFlag = useSelector(state => state.user.varifiedOtp);

  const otpGenerated =useSelector(state => state.user.otpGenerated);
  const otpGeneratedError=useSelector(state => state.user.otpGeneratedError);
  const otpSuccess=useSelector(state=>state.user.otpSuccess);
  const forgotPasswordSuccess = useSelector(state => state.user.forgotPassword);
  const forgotPasswordFailure=useSelector(state=>state.user.forgotPasswordFailure);
  const varifiedOTPError = useSelector(state => state.user.varifiedOTPError);
  const varifiedOTP = useSelector(state => state.user.message);
  const [emailDisable, setEmailDisable] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);


 //For adding data in form
  const handleChange = (e) => {
    const { name, value } = e.target;
    setforgotFormData({ ...forgotFormData, [name]: value });

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

  useEffect(() => {
    // Check if all fields are filled
    const allFieldsFilled = otp.every(value => value !== '');
    setIsButtonDisabled(!allFieldsFilled);
  }, [otp]);


  //Toggle Feature Between Teacher and Student
  const studentToggleButton = () => {
    setLoginFormMarginLeft(0);
    setStudentLogin(true);
  };

  const teacherToggeleButton = () => {
    setLoginFormMarginLeft(-50);
    setStudentLogin(false);
  };

  //OTP Send Success
  useEffect(() => {
    if (otpGenerated && OTPsentnotification && otpSuccess==="key generated") {
      openNotification2();
      setOTPsentnotification(false);
      setforgotEmailVarification(true);
    }
    else if(otpGenerated && OTPsentnotification && otpSuccess==="Email Dosen't Exist in the database"){
      setOTPsentnotification(false);
      openNotification6();
    }
    else if (otpGeneratedError && OTPsentnotification) {
      openNotification3();
      setOTPsentnotification(false);
    }
    dispatch(clearMessage());
  }, [otpGenerated, OTPsentnotification,dispatch,otpSuccess, otpGeneratedError]);

  // varified OTP Notification
  useEffect(() => {
    if (varifiedOTPNotification && varifiedOtpFlag && varifiedOTP === "otp varified") {
      setOtpVerified(true);
      openNotification4();
      setVarifiedOTPNotification(false);
      setEmailDisable(true);
    }
    else if (varifiedOTPNotification && varifiedOtpFlag  && varifiedOTP === "otp not varified") {
      openNotification5();
      setVarifiedOTPNotification(false);
      setEmailDisable(false);
     
    }
    else if (varifiedOTPError && varifiedOTPNotification) {
      openNotification7();
      setVarifiedOTPNotification(false);
      setEmailDisable(false);
    }
    dispatch(clearMessage());
  }, [varifiedOTPError, varifiedOTPNotification,dispatch,varifiedOTP, varifiedOtpFlag])


  // Update Password Success
  useEffect(() => {
    if (forgotPasswordSuccess && passwordResetFlag) {
      openNotification();
      setPasswordResetFlag(false);
      navigate('/login');
    }
    else if(forgotPasswordFailure && passwordResetFlag){
      openNotification1();
      setPasswordResetFlag(false);
      navigate('/login');
    }
    dispatch(clearMessage());

  }, [forgotPasswordSuccess, dispatch, passwordResetFlag,forgotPasswordFailure, navigate]);


  // Password Reset Successfull Notification
  const openNotification = () => {
    const args = {
      message: "Password Reset",
      description: "Congratulations,Your Password Reset Successful",
      duration: 2,
    };
    notification.open(args);
  };

  //Password Reset Failed Notification
  const openNotification1 = () => {
    const args = {
      message: "Password Reset Failed",
      description: "Something Went Wrong, Try Again Later",
      duration: 2,
    };
    notification.open(args);
  };

  //OTP Generated Successfull Notification
  const openNotification2 = () => {
    const args = {
      message: "OTP Sent",
      description: "OTP Sent To Your Email ID",
      duration: 2,
    };
    notification.open(args);
  };

  //OTP Generation Failed Notification
  const openNotification3 = () => {
    const args = {
      message: "OTP NOT Generated",
      description: "Something Went Wrong, Please check your email, Try Again Later",
      duration: 2,
    };
    notification.open(args);
  };

    //OTP Varified
    const openNotification4 = () => {
      const args = {
        message: "OTP Varified",
        description: "Congratulations,Your OTP Varified Successful",
        duration: 2,
      };
      notification.open(args);
    };
    
    //OTP not Varified
    const openNotification5 = () => {
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

  //User Dosen't exist
  const openNotification6 = () => {
    const args = {
      message: "OTP NOT Generated",
      description: "User Not Exist in the Database",
      duration: 2,
    };
    notification.open(args);
  };



  const openNotification7 = () => {
    const args = {
      message: "OTP not Varified",
      description: "Something went Wrong, Try agian Later",
      duration: 2,
    };
    notification.open(args);
  };


  //Handling OTP Generation
  const handleSendOTP = () => {
    if (forgotFormData.email) {
      const data = {
        "email": forgotFormData.email,
        "isStudent": isStudentLogin,
        "newuser":false
      }
      dispatch(generateOtp(data))
      setOTPsentnotification(true);
      
    } else {
      alert('Please enter your email');
    }
  }

  //Handling OTP Varification
  const handleVerifyOTP = () => {
      // dispatch action to verify OTP
      const data = {
        email: forgotFormData.email,
        otp: otp.join(''),
      }
      dispatch(varifyOtp(data))
      setVarifiedOTPNotification(true);
  };

  //Password Reset Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      email: forgotFormData.email,
      isStudent: isStudentLogin,
      password: forgotFormData.password
    }
    dispatch(resetPassword(data));
    setPasswordResetFlag(true);
  };

  return (
    <div className="maindiv">
      <div className="userloginbody">
        <div className="wrapper">
          <div className="title-text">
            <div className="title login" style={{ marginLeft: `${loginFormMarginLeft}%` }}>Student Forgot Password</div>
            <div className="title signup">Admin Forgot Password</div>
          </div>
          <div className="form-container">
            <div className="slide-controls">
              <input
                type="radio"
                name="slide"
                className="inputs"
                id="login"
                checked={isStudentLogin}
                onChange={studentToggleButton}
              />
              <input
                type="radio"
                name="slide"
                className="inputs"
                id="signup"
                checked={!isStudentLogin}
                onChange={teacherToggeleButton}
              />
              <label htmlFor="login" className={`slide login ${isStudentLogin ? 'active' : ''}`}>Student</label>
              <label htmlFor="signup" className={`slide signup ${!isStudentLogin ? 'active' : ''}`}>Admin</label>
              <div className="slider-tab"></div>
            </div>
            <div className="form-inner">
              <form onSubmit={handleSubmit} style={{ marginLeft: `${loginFormMarginLeft}%` }} className={`login ${isStudentLogin ? 'active' : ''}`}>
                <div className="field" style={{ marginTop: '20px' }}>
                  <input
                    type="text"
                    name="email"
                    className='  forgotInput'
                    value={forgotFormData.email}
                    onChange={handleChange}
                    placeholder="Enter Your Email"
                    disabled={emailDisable}
                  />
                  <button
                    type="button"
                    className="verifyOtpButton"
                    onClick={handleSendOTP}
                    disabled={emailDisable || !isEmailValid}

                  >
                    {otpGenerated ? 'Sent' : 'Send OTP'}
                  </button>
                </div>
                {forgotEmailVarification && (
                  
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
                      onClick={handleVerifyOTP}
                      disabled={isButtonDisabled || emailDisable}
                    >
                     {!emailDisable?" Varify OTP":"Varified"}
                    </button>
                  </div>
                 )}
                
                {otpVerified && (
                  <>
                    <div className="field" style={{ marginTop: '20px' }}>
                      <input
                        type="password"
                        name="password"
                        value={forgotFormData.password}
                        onChange={handleChange}
                        placeholder="Enter Your New Password"
                      />
                    </div>
                  </>
                )}
                <div className="field lbtn" style={{marginTop:"2rem"}}>
                  <div className="lbtn-layer"></div>
                  <input type="submit" className="submit" value="Reset Password" style={{ backgroundColor: emailDisable ? '' : 'gray' }} disabled={!emailDisable} onClick={handleSubmit}/>
                </div>
                <div className="signup-link">
                  Not a member? <Link to="/register">Signup now</Link>
                </div>
              </form>

              {/* Forgot Form for admin Portal */}

             {!isStudentLogin && <form onSubmit={handleSubmit} className={`signup ${!isStudentLogin ? 'active' : ''}`}>
                <div className="field" style={{ marginTop: '20px' }}>
                  <input
                    type="text"
                    name="email"
                    className='forgotInput'
                    value={forgotFormData.email}
                    onChange={handleChange}
                    placeholder="Enter Your Email"
                  />
                  <button
                    type="button"
                    className="verifyOtpButton"
                    onClick={handleSendOTP}
                  >
                    {otpGenerated ? 'Sent' : 'Send OTP'}
                  </button>
                </div>
                {forgotEmailVarification && (
                  
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
                    onClick={handleVerifyOTP}
                    disabled={isButtonDisabled || emailDisable}
                  >
                    {!emailDisable?" Varify OTP":"Varified"}
                  </button>
                </div>
               )}
                
                {otpVerified && (
                  <>
                    <div className="field" style={{ marginTop: '20px' }}>
                      <input
                        type="password"
                        name="password"
                        value={forgotFormData.password}
                        onChange={handleChange}
                        placeholder="Enter Your New Password"
                      />
                    </div>
                  </>
                )}
                <div className="field lbtn" style={{marginTop:"2rem"}}>
                  <div className="lbtn-layer"></div>
                  <input type="submit" className="submit" value="Reset Password" disabled={!emailDisable} onClick={handleSubmit}/>
                </div>
                <div className="signup-link">
                  Not a member? <Link to="/register">Signup now</Link>
                </div>
              </form>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
