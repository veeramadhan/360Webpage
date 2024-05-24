import React from 'react'
import logo from "../../Assets/logo.png"
import "./Nav.css"

const Nav = () => {
  return (
    <>
    <nav class="navbar navbar-expand-lg">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><img src={logo} height={"50px"} width={"70px"}/></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0 gap-4">
        <li class="nav-item">
          <a class="nav-link " aria-current="page">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" >Packages</a>
        </li>
        <li class="nav-item ">
          <a class="nav-link"  role="button" data-bs-toggle="dropdown" aria-expanded="false">
           Gallery
          </a>
          {/* <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Family Addventures</a></li>
            <li><a class="dropdown-item" href="#">Education Trips</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Batch Trips</a></li>
          </ul> */}
        </li>
        <li class="nav-item">
          <a class="nav-link " aria-disabled="true">Teams</a>
        </li>
        <li class="nav-item">
          <a class="nav-link " aria-current="page">Contact Us</a>
        </li>
      </ul>
      {/* <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form> */}
    </div>
  </div>
</nav>

<div className='content'>
<h1>Discover Your Next Adventure with 360 Tours and Travels</h1>
        <p>Unforgettable journeys, handpicked for you.</p>
        <a href="#explore" class="btn">Explore Now</a>
</div>


</>
  )
}

export default Nav