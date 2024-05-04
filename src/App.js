import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminHome from './components/LandingPage/MainLandingpage';
import LiveExam from './components/userexam/LiveExam';
import Signup from './components/UserSignUp/Signup';
import SignIn from './components/UserSignIn/SignIn';
import Dashboard from './components/Dashboard/Dashboard';
import TestResult from './components/userexam/TestResult';
import Footer from './components/Footer/Footer';
import { AuthProvider } from './components/Navbar/AuthContext';


function App() {
 

  return (
    
    <Router>
        <AuthProvider>

          <Navbar />
   

          <Routes>
            <Route exact path='/' element={<AdminHome />} />
            <Route exact path='/liveexam' element={<LiveExam />} />
            <Route exact path="/register" element={<Signup/>} />
            <Route exact path="/login" element={<SignIn/>} />
            <Route exact path="/dashboard" element={<Dashboard/>} />
            <Route exact path="/result" element={<TestResult/>} />
          </Routes>
          <Footer/>
          </AuthProvider>
      
      </Router>
    

  );
}

export default App;
