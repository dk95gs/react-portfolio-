import React from 'react';
import {Link} from "react-router-dom";
import FacePic from '../../../img/face.png';
const Navbar = () => {
    const collapseNav = () =>{
      document.getElementById("navbarSupportedContent").classList.remove("show");
    }
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
          <a class="navbar-brand js-scroll-trigger" href="#page-top">
            <span class="d-block d-lg-none">Dilshan Karunanayaka</span>
            <span class="d-none d-lg-block">
              <img class="img-fluid img-profile rounded-circle mx-auto mb-2" src={FacePic} alt=""/>
            </span>
          </a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav">
              <li class="nav-item">
              <Link to="/" className="nav-link js-scroll-trigger"onClick={collapseNav}>Home</Link>
              </li>
              <li class="nav-item">
                <Link to="/edu" className="nav-link js-scroll-trigger" onClick={collapseNav}>Education</Link>
              </li>
              <li class="nav-item">
              <Link to="/proj" className="nav-link js-scroll-trigger"onClick={collapseNav}>Projects</Link>
              </li>
              <li class="nav-item">
                <Link to="/skills" className="nav-link js-scroll-trigger"onClick={collapseNav}>Skills</Link>
              </li>
              <li class="nav-item">
                <Link to="/work" className="nav-link js-scroll-trigger"onClick={collapseNav}>Work Experience</Link>
              </li>
              
            </ul>
          </div>
        </nav>
    )
}
export default Navbar;