import './App.css';
import Navbar from './component/common/Navbar';
import Exam from './component/admin/ExamCreation'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminHome from './component/admin/AdminHome';
import LiveExam from './userexam/LiveExam';
import Signup from './UserSignUp/Signup';
import SignIn from './UserSignIn/SignIn';
import Dashboard from './Dashboard/Dashboard';
import TestResult from './userexam/TestResult';
import Footer from './Footer/Footer';
import { AuthProvider } from './component/common/AuthContext';


function App() {
 

  return (
    
    <Router>
        <AuthProvider>

          <Navbar />
   

          <Routes>
            <Route exact path='/' element={<AdminHome />} />
            <Route exact path='/liveexam' element={<LiveExam />} />
            <Route exact path='/exam' element={<Exam />} />
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
