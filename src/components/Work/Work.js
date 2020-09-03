import React from 'react';
import {Image} from 'react-bootstrap';
import Bayer from '../../img/bayer.jpg';
import CP from '../../img/spare.png';
const Work = () =>{
    return (
        <section class="resume-section p-3 p-lg-5 d-flex align-items-center page" id="work">
        <div class="w-100">
          <h2 class="mb-3 text-primary">Work Experience</h2>
  
          {/*<div class="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div class="resume-content">
              <h3 class="mb-0 text-secondary">Contract Web Development</h3>
              <div style={{marginTop:"1rem"}} class="subheading mb-3"> Canadian Powersports Financing  <Image src={CP} /> <a target="_target" href="http://cpfinancing.ca/">CPFinancing.ca</a></div>
              <p>I was contracted by a local business; tasked with creating & deploying a website that would help them generate leads on potential clients. The website showcases all services the business offers and has a form a visitor can fill out if they are interested in the business.  Once the form is submitted, it is formatted and emailed to the owner. </p>
            </div>
            <div class="resume-date text-md-right">
              <span class="text-primary">2020 - Contracted to build site</span>
            </div>
          </div>*/}
          <div class="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div class="resume-content">
              <h3 class="mb-0 text-secondary">Front-End Web Developer Contract</h3>
              <div style={{marginTop:"1rem"}} class="subheading mb-3">    <Image width="70%" src={CP} /> <br></br> <a target="_target" href="https://sparemusic.com/">Sparemusic.com</a></div>
              <p>
                Assisted in updating the front-end of the existing company website. Involved working with their existing API to create dynamic and responsive UI components.    
              </p>
            </div>
            <div class="resume-date text-md-right">
              <span class="text-primary">May 2019 - September 2019</span>
            </div>
          </div>
          <div class="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div class="resume-content">
              <h3 class="mb-0 text-secondary">Field Research Assistant</h3>
              <div style={{marginTop:"1rem"}} class="subheading mb-3">Bayer CropScience <Image src={Bayer} /></div>
              <p>Assisted with product research trails relating to corn & soybean seeds. The highly
                  team-oriented nature of this job required strong interpersonal skills in order to work
                  effectively as a unit. </p>
            </div>
            <div class="resume-date text-md-right">
              <span class="text-primary">September 2019 - Present</span>
            </div>
          </div>
  
        </div>
  
      </section>
    );
}

export default Work;