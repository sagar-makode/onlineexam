import './App.css';
import Navbar from './component/common/Navbar';
import Exam from './component/admin/ExamCreation'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminHome from './component/admin/AdminHome';
import Overview from './component/admin/Overview';
import LiveExam from './userexam/LiveExam';
import Signup from './UserSignUp/Signup';
import SignIn from './UserSignIn/SignIn';
import Dashboard from './Dashboard/Dashboard';
import TestResult from './userexam/TestResult';


function App() {
  return (
    <div>

      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route exact path='/' element={<AdminHome />} />
            <Route exact path='/liveexam' element={<LiveExam />} />

            <Route exact path='/exam' element={<Exam />} />
            <Route exact path="/overview" element={<Overview/>} />
            <Route exact path="/register" element={<Signup/>} />
            <Route exact path="/signin" element={<SignIn/>} />
            <Route exact path="/dashboard" element={<Dashboard/>} />
            <Route exact path="/result" element={<TestResult/>} />

            


          </Routes>
        </div>
      </Router>
    </div>

  );
}

export default App;
