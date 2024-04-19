import React from 'react'
import "./home.css"

export default function AdminHome() {
  return (

    <div>



      <nav class="navbar" data-navbar>

        <div class="wrapper">
          <a href="#" class="logo">
            <img src="./assets/images/logo.svg" width="162" height="50" alt="EduWeb logo"/>
          </a>

          <button class="nav-close-btn" aria-label="close menu" data-nav-toggler>
            <ion-icon name="close-outline" aria-hidden="true"></ion-icon>
          </button>
        </div>

        <ul class="navbar-list">

          <li class="navbar-item">
            <a href="#home" class="navbar-link" data-nav-link>Home</a>
          </li>

          <li class="navbar-item">
            <a href="#about" class="navbar-link" data-nav-link>About</a>
          </li>

          <li class="navbar-item">
            <a href="#courses" class="navbar-link" data-nav-link>Courses</a>
          </li>

          <li class="navbar-item">
            <a href="#blog" class="navbar-link" data-nav-link>Blog</a>
          </li>

          <li class="navbar-item">
            <a href="#" class="navbar-link" data-nav-link>Contact</a>
          </li>

        </ul>

      </nav>


    </div>
  )
}
