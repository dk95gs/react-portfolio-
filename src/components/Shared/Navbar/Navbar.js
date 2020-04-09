import React from 'react';
import {Link} from "react-router-dom";
import FacePic from '../../../img/face.png';
const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
          <a class="navbar-brand js-scroll-trigger" href="#page-top">
            <span class="d-block d-lg-none">Clarence Taylor</span>
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
              <Link to="/" className="nav-link js-scroll-trigger">Home</Link>
              </li>
              <li class="nav-item">
                <Link to="/edu" className="nav-link js-scroll-trigger">Education</Link>
              </li>
              <li class="nav-item">
              <Link to="/proj" className="nav-link js-scroll-trigger">Projects</Link>
              </li>
              <li class="nav-item">
                <Link to="/skills" className="nav-link js-scroll-trigger">Skills</Link>
              </li>
              <li class="nav-item">
                <Link to="/work" className="nav-link js-scroll-trigger">Work Experience</Link>
              </li>
              
            </ul>
          </div>
        </nav>
    )
}
export default Navbar;