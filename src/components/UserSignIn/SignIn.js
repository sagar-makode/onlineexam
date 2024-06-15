
import React, { useCallback, useContext, useEffect, useState } from 'react';
import './SignIn.css';
import { useDispatch, useSelector } from 'react-redux';
import { StudentsigninRequest, TeachersigninRequest, clearMessage } from '../actions/userActions';
import { Link, useNavigate } from 'react-router-dom';
import { notification } from 'antd';
import AuthContext from '../Navbar/AuthContext'




function SignIn() {
  const signinSuccessMessage = useSelector(state => state.user.SignINSucess);
  const signinFailure = useSelector(state => state.user.SignInFailure);


  const [isStudentLogin, setStudentLogin] = useState(true);
  const [loginFormMarginLeft, setLoginFormMarginLeft] = useState(0);
  const [notificationShown, setNotificationShown] = useState(false); 
 

  const studentToggleButton = () => {
    setLoginFormMarginLeft(0);
    setStudentLogin(true);
  };

  const teacherToggeleButton = () => {
    setLoginFormMarginLeft(-50);
    setStudentLogin(false);
  };

  

  const { login} = useContext(AuthContext);
  
  const handleLin = useCallback(() => {
    login();
  }, [login]);



  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = e => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const openFailNotification = () => {
    const args = {
      message: ( <span style={{ color: 'red' }}>Login Failed</span>),
      description: ( <span style={{ color: 'red' }}>Please enter valid credentials</span>),
   
      // duration: 3,
      style: {
        backgroundColor: 'white', // Set background color to a shade of red
        borderRadius: '8px', // Add border radius
        border: '2px solid white', // Add border
        boxShadow: '0 2px 4px white', // Add shadow
      },
     
    };
    notification.open(args);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      alert('Please enter both email and password');
      return;
    }
   
   

    if (isStudentLogin) {
    
      dispatch(StudentsigninRequest(formData));

    } else {

      dispatch(TeachersigninRequest(formData))
    }

  

  };


const navigate = useNavigate()



useEffect(() => {
  if (signinFailure ) {
 
    openFailNotification();
    setTimeout(() => {
      dispatch(clearMessage())
    }, 3000);
  }
}, [signinFailure,  navigate,dispatch]);



  useEffect(() => {
    if (signinSuccessMessage && !notificationShown) {
      setNotificationShown(true);
      openNotification();
      handleLin();
    
      setTimeout(() => {
        navigate('/dashboard'); // Navigate after 5 seconds
        dispatch(clearMessage())
      }, 2000);
    }
  }, [signinSuccessMessage, notificationShown,handleLin, navigate,dispatch]);

    const openNotification = () => {
      const args = {
        message: "Login Success",
        description: "Congratulations, You have login Successfully",
        duration: 2,
      };
      notification.open(args);
    };
  


  return (
    <div className='maindiv'>
      <div className='userloginbody'>
        <div className="wrapper"  >
          <div className="title-text">
            <div className="title login" style={{ marginLeft: `${loginFormMarginLeft}%` }} >Student Login</div>
            <div className="title signup">Admin Login</div>
          </div>
          <div className="form-container">
            <div className="slide-controls">
              <input type="radio" name="slide" className='inputs' id="login" checked={isStudentLogin} onChange={studentToggleButton} />
              <input type="radio" name="slide" className='inputs' id="signup" checked={!isStudentLogin} onChange={teacherToggeleButton} />
              <label htmlFor="login" className={`slide login ${isStudentLogin ? 'active' : ''}`}>Student</label>
              <label htmlFor="signup" className={`slide signup ${!isStudentLogin ? 'active' : ''}`}>Admin</label>
              <div className="slider-tab"></div>
            </div>
            <div className="form-inner">
              <form onSubmit={handleSubmit} style={{ marginLeft: `${loginFormMarginLeft}%` }} className={`login ${isStudentLogin ? 'active' : ''}`}>
                <div className="field" style={{marginTop:"20px"}}>
                  <input type="text" name="email" value={formData.email} onChange={handleChange} placeholder="Enter Your Email" />
                </div>
                <div className="field" style={{marginTop:"20px"}}>
                  <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Enter Your Password" />
                </div>
                <div className="pass-link"><a href="/forgot" >Forgot password?</a></div>
                <div className="field lbtn">
                  <div className="lbtn-layer"></div>
                  <input type="submit" className='submit' value="Login" />
                </div>

                <div className="signup-link">
                  Not a member? <Link to="/register">Signup now</Link>
                </div>
              </form>
              <form onSubmit={handleSubmit} className={`signup ${!isStudentLogin ? 'active' : ''}`}>
                <div className="field" style={{marginTop:"20px"}}>
                  <input type="text" name="email" value={formData.email} onChange={handleChange} placeholder="Enter Your Email" />
                </div>
                <div className="field" style={{marginTop:"20px"}} >
                  <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Enter Your Password" />
                </div>
                <div className="pass-link"><a href="/">Forgot password?</a></div>
                <div className="field lbtn">
                  <div className="lbtn-layer"></div>
                  <input type="submit" className='submit' value="Login" />

                </div>

                <div className="signup-link">
                  Not a member? <Link to="/register">Signup now</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
