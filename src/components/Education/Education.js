import React from 'react';
import {Image} from 'react-bootstrap';
import McMaster from '../../img/mcmaster.png'
import Conestoga from '../../img/conestoga.png'
const Education = () =>{
    return (
        <section class="resume-section p-3 p-lg-5 d-flex align-items-center page" id="education">
        <div class="w-100">
          <h2 class="mb-5 text-primary">Education</h2>
  
          <div class="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div class="resume-content">
              <Image src={McMaster} />
              <div class="subheading mb-3 text-secondary">Bachelor of Technology </div>
              <div><strong>Software Engineering Technology</strong></div>
              
            </div>
            <div class="resume-date text-md-right">
              <span class="text-primary">January 2020 - PRESENT</span>
            </div>
          </div>
  
          <div class="resume-item d-flex flex-column flex-md-row justify-content-between">
            <div class="resume-content">
              <Image src={Conestoga} />
              <div class="subheading mb-3 text-secondary">Computer Programmer/Analyst</div>
              <div><strong>3 Year Advanced Diploma</strong></div>
              <p>GPA: 3.7</p>
            </div>
            <div class="resume-date text-md-right">
              <span class="text-primary">September 2016 - April 2019</span>
            </div>
          </div>
  
        </div>
      </section>
    );
}

export default Education;