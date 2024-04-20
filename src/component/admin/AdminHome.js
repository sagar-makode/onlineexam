import React from 'react'
import "./home.css"
import { Link } from 'react-router-dom'
import img from "../../assets/photo.png"
import HomeFormCard from './HomeFormCard';
import { TypeAnimation } from 'react-type-animation';

import image1 from "../../assets/2.jpg";
import image3 from "../../assets/5.jpg";
// import image4 from "../../assets/5.jpg";



export default function AdminHome() {
  return (
    <div  >
      <div style={{ position: "relative" }}>
        <img src={img} alt="Responsive" className="responsive-image" />
        <h1 className='text-overlay' >
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              'Welcome to Online Exam',
              1000,
              // wait 1s before replacing "Mice" with "Hamsters"
              'your one-stop destination',
              1000,
              'for creating and taking tests online',
              1000,


            ]}
            wrapper="div"
            speed={250}
            // style={{ fontSize: '2em', display: 'inline-block' }}
            repeat={Infinity}
          />
        </h1>


      </div>





      <div className='tools'>
        <div className='overlay-container'>
          <div className="card " >
            <div className=" text-center p-3 ">
              {/* <i className="fa fa-3x fa-image icon-color mb-2"></i> */}
              <span class="material-symbols-outlined icon-color mb-2">
                calculate
              </span>
              <h5 className="mb-1">Quantitative Aptitude</h5>
              {/* <p className="m-0">Reduce Your Image Size Using This Tool</p> */}
            </div>
          </div>
        </div>
        <div className='overlay-container '>
          <div className="card " >
            <div className="  text-center p-3">

              <span class="material-symbols-outlined icon-color mb-2">
                psychology
              </span>
              {/* <i className="fa fa-3x fa-object-group icon-color mb-2"></i> */}
              <h5 className="mb-1">Psychology</h5>
              {/* <p className="m-0">Convert your Image To One PDF</p> */}
            </div>
          </div>
        </div>
        <div className='overlay-container'>
          <div className="card " >
            <div className=" text-center p-3">

              <span class="material-symbols-outlined icon-color mb-2">
                science
              </span>
              {/* <i className="fa fa-3x fa-file-pdf-o icon-color mb-2"></i> */}
              <h5 className="mb-1">Science</h5>
              {/* <p className="m-0">Reduce Your PDF Size Using This Tool</p> */}
            </div>
          </div>
        </div>
        <div className='overlay-container '>
          <div className="card " >
            <div className="  text-center p-3">


              <span class="material-symbols-outlined icon-color mb-2">
                experiment
              </span>
              {/* <i className="fa fa-3x fa-object-ungroup icon-color mb-2"></i> */}
              <h5 className="mb-1">Chemistry</h5>
              {/* <p className="m-0">Convert Your PDF To Image</p> */}
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
