import React from 'react'
import "./home.css"

import img1 from "../assets/Landing page 1.jpg"
import img2 from "../assets/Landing page 2.jpg"
import img3 from "../assets/Landing page 3.jpg"

import HomeFormCard from './HomeFormCard';


export default function MainLandingpage() {


  return (
    <div  className='landingbody'>

      <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={img1} className="d-block w-100" alt="Slide 1" />
          </div>
          <div className="carousel-item">
            <img src={img2} className="d-block w-100" alt="Slide 2" />
          </div>
          <div className="carousel-item">
            <img src={img3} className="d-block w-100" alt="Slide 3" />
          </div>
        </div>
      </div>



      <div className='section'>
        <div className="box-container">

          <div className="box card">
            <span className="material-symbols-outlined icon">
              calculate
            </span>
            <div>
              <h4 className='text-center'>Quantitative Aptitude</h4>
            </div>
          </div>

          <div className="box card">
            {/* <i className="fas fa-user-graduate"></i> */}

            <span className="material-symbols-outlined icon">
              psychology
            </span>
            <div>
              <h4>Logical Reasoning</h4>
            </div>
          </div>

          <div className="box card">
            <span class="material-symbols-outlined icon">
              public
            </span>
            <div>
              <h4>Current Affairs</h4>
            </div>
          </div>

          <div className="box card">
            <span class="material-symbols-outlined icon">
              network_intelligence_history
            </span>
            <div>
              <h4>History</h4>
            </div>
          </div>

        </div>

      </div>

      <div className='cont'>
        <div className='news-container'>
          <div className='title'>
            Latest Test Series
          </div>

          <ul>
            <li>
              MBA Test Series<span className='badge bg-danger mx-2 blink'>
                New
              </span>
            </li>

            <li>
              RRB Test Series<span className='badge bg-danger mx-2 blink'>
                New
              </span>
            </li>

            <li>
              MPSE Test Series<span className='badge bg-danger mx-2 blink'>
                New
              </span>
            </li>

            <li>
              JEE Test Series <span className='badge bg-danger mx-2 blink'>
                New
              </span>
            </li>
            <li>
              NEET Test Series <span className='badge bg-danger mx-2 blink'>
                New
              </span>
            </li>
            <li>
              IELTS Test Series <span className='badge bg-danger mx-2 blink'>
                New
              </span>
            </li>
          </ul>
        </div>

      </div>




      <div >
        <div className='container  px-lg-5'>
          <div className='text-center'>
            <div>
              <h4><span style={{ color: "red" }}>-- </span>Online Test<span style={{ color: "red" }}> --</span></h4>
              <h2 className='mb-4'>Enter the world of real-time assessment with our live exam platform. </h2>
              <h5 className='mb-4'> "Join thousands of students in experiencing the thrill of live exams from the comfort of your home"</h5>
            </div>

          </div>

        </div>

      </div>
      <HomeFormCard />







    </div>
  )
}
