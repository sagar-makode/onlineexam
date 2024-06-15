import React, { useEffect, useState, } from 'react';
import './Forgot.css';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {  clearMessage, generateOtp, resetPassword, varifyOtp } from '../../actions/userActions';
import { notification } from 'antd';

export default function Forgot() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isStudentLogin, setStudentLogin] = useState(true);
  const [loginFormMarginLeft, setLoginFormMarginLeft] = useState(0);
  const [forgotFormData, setforgotFormData] = useState({
    email: '',
    OTP: '',
    password: ''
  });

  const [forgotEmailVarification, setforgotEmailVarification] = useState(false);
  const [OTPsentnotification,setOTPsentnotification]=useState(false)
  const [otpVerified, setOtpVerified] = useState(false);
  const [passwordResetFlag, setPasswordResetFlag] = useState(false);
  const [varifiedOTPNotification, setVarifiedOTPNotification] = useState(false);



  const otpGenerated =useSelector(state => state.user.otpGenerated);
  const otpFailure=useSelector(state => state.user.otpGeneratedError);
  const forgotPasswordSuccess = useSelector(state => state.user.forgotPassword);
  const forgotPasswordFailure=useSelector(state=>state.user.forgotPasswordFailure);
  const varifiedOTPError = useSelector(state => state.user.varifiedOTPError);
  const varifiedOTP = useSelector(state => state.user.message);
  const [emailDisable, setEmailDisable] = useState(false);


 //For adding data in form
  const handleChange = (e) => {
    const { name, value } = e.target;
    setforgotFormData({ ...forgotFormData, [name]: value });
  };


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
    if (otpGenerated && OTPsentnotification) {
      openNotification2();
      setOTPsentnotification(false);
      setforgotEmailVarification(true);
    }
    else if (otpFailure && OTPsentnotification) {
      openNotification3();
      setOTPsentnotification(false);
    }
  }, [otpGenerated, OTPsentnotification, otpFailure]);

  // varified OTP Notification
  useEffect(() => {
    if (varifiedOTPNotification && varifiedOTP === "otp varified") {
      openNotification2();
      setVarifiedOTPNotification(false);
      setOtpVerified(true);
      setEmailDisable(true);
    }
    else if (varifiedOTPError && varifiedOTPNotification) {
      setVarifiedOTPNotification(false);
      openNotification3();
      setEmailDisable(false);
    }

  }, [varifiedOTPError, varifiedOTPNotification, varifiedOTP])


  // Update Password Success
  useEffect(() => {
    if (forgotPasswordSuccess && passwordResetFlag) {
      openNotification();
      setPasswordResetFlag(false);
      dispatch(clearMessage())
      navigate('/login');
    }
    else if(forgotPasswordFailure && passwordResetFlag){
      openNotification1();
      setPasswordResetFlag(false);
      navigate('/login');
      dispatch(clearMessage());
    }

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
      message: "OTP Generated",
      description: "OTP Generated Successfully",
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


  //Handling OTP Generation
  const handleSendOTP = () => {
    if (forgotFormData.email) {
      const data = {
        "email": forgotFormData.email,
        "isStudent": isStudentLogin,
        "newuser":false
      }
      dispatch(generateOtp(data))
      // setforgotEmailVarification(true);       // Assuming OTP is sent successfully
      setOTPsentnotification(true);
      
    } else {
      alert('Please enter your email');
    }
  }

  //Handling OTP Varification
  const handleVerifyOTP = () => {
    if (forgotFormData.OTP) {
      // dispatch action to verify OTP
      const data = {
        email: forgotFormData.email,
        otp: forgotFormData.OTP,

      }
      dispatch(varifyOtp(data))
      setVarifiedOTPNotification(true);
      // setOtpVerified(true); // Assuming OTP is verified successfully
    } else {
      alert('Please enter the OTP');
    }
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
                    disabled={emailDisable}

                  >
                    {otpGenerated ? 'Sent' : 'Send OTP'}
                  </button>
                </div>
                {forgotEmailVarification && (
                  <div className="field" style={{ marginTop: '20px' }}>
                    <input
                      type="text"
                      name="OTP"
                      value={forgotFormData.OTP}
                      onChange={handleChange}
                      placeholder="Enter Your OTP"
                    disabled={emailDisable}

                    />
                    <button
                      type="button"
                      className="verifyOtpButton"
                      onClick={handleVerifyOTP}
                    disabled={emailDisable}

                    >
                      Verify OTP
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
                <div className="field lbtn">
                  <div className="lbtn-layer"></div>
                  <input type="submit" className="submit" value="Reset Password" disabled={!emailDisable} />
                </div>
                <div className="signup-link">
                  Not a member? <Link to="/register">Signup now</Link>
                </div>
              </form>

              {/* Forgot Form for admin Portal */}

              <form onSubmit={handleSubmit} className={`signup ${!isStudentLogin ? 'active' : ''}`}>
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
                    <input
                      type="text"
                      name="OTP"
                      value={forgotFormData.OTP}
                      onChange={handleChange}
                      placeholder="Enter Your OTP"
                    />
                    <button
                      type="button"
                      className="verifyOtpButton"
                      onClick={handleVerifyOTP}
                    >
                      Verify OTP
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
                <div className="pass-link"><a href="/">Forgot password?</a></div>
                <div className="field lbtn">
                  <div className="lbtn-layer"></div>
                  <input type="submit" className="submit" value="Reset Password" disabled={!emailDisable}/>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
