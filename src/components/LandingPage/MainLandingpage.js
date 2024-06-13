import React from 'react'
import "./home.css"

import img1 from "../assets/Landing page 1.jpg"
import img2 from "../assets/Landing page 2.jpg"
import img3 from "../assets/Landing page 3.jpg"

import HomeFormCard from './HomeFormCard';
import { useNavigate } from 'react-router-dom'


export default function MainLandingpage() {
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    navigate('/alltest', { state: { selectedCategory: category } });
  };

  return (
    <div className='landingbody'>

      <div id="carouselExampleSlidesOnly" className="carousel slide mb-3 mt-3 mainimage" data-bs-ride="carousel">
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
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleSlidesOnly" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleSlidesOnly" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>



      <div className='section'>
        <div className="box-container">



          <div className="box cards" onClick={() => handleCategoryClick('Quantitative Aptitude')} >
            <span className="material-symbols-outlined homeicons">
              calculate
            </span>
            <div>
              <h4 className='cardtext text-center' >Aptitude</h4>
            </div>
          </div>

          <div className="box cards" onClick={() => handleCategoryClick('History')}>
            <span class="material-symbols-outlined homeicons">
              network_intelligence_history
            </span>
            <div>
              <h4 className='cardtext text-center'>History</h4>
            </div>
          </div>

          <div className="box cards" onClick={() => handleCategoryClick('Logical reasoning')}>
            {/* <i className="fas fa-user-graduate"></i> */}

            <span className="material-symbols-outlined homeicons">
              psychology
            </span>
            <div>
              <h4 className='cardtext text-center' >Reasoning</h4>
            </div>
          </div>


          <div className="box cards" onClick={() => handleCategoryClick('Computer') }>
            <span class="material-symbols-outlined homeicons">
              computer
            </span>
            <div>
              <h4 className='cardtext text-center'>Computer</h4>
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
            <li onClick={() => handleCategoryClick('Current affairs')} >
            Current affairs Test Series<span className='badge bg-danger mx-2 blink'>
                New
              </span>
            </li>

            <li onClick={() => handleCategoryClick('Economics')}>
              Economics Test Series<span className='badge bg-danger mx-2 blink'>
                New
              </span>
            </li>

            <li onClick={() => handleCategoryClick('Geography')}>
              Geography Test Series<span className='badge bg-danger mx-2 blink'>
                New
              </span>
            </li>

            <li onClick={() => handleCategoryClick('Mathematics')}>
              Mathematics Test Series <span className='badge bg-danger mx-2 blink'>
                New
              </span>
            </li>
            <li onClick={() => handleCategoryClick('General knowledge')}>
              General knowledge Test Series <span className='badge bg-danger mx-2 blink'>
                New
              </span>
            </li>
            <li onClick={() => handleCategoryClick('All')}>
              All Test Series <span className='badge bg-danger mx-2 blink'>
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
              <h4 className='home-text'>Enter the world of real-time assessment with our live exam platform. </h4>
              {/* <h6 className='home-text2'> "Join thousands of students in experiencing the thrill of live exams from the comfort of your home"</h6> */}
            </div>

          </div>

        </div>

      </div>
      <HomeFormCard />







    </div>
  )
}
