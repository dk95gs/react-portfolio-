import React from 'react';

const Education = () =>{
    return (
        <section class="resume-section p-3 p-lg-5 d-flex align-items-center page" id="education">
        <div class="w-100">
          <h2 class="mb-5">Education</h2>
  
          <div class="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div class="resume-content">
              <h3 class="mb-0">McMaster University</h3>
              <div class="subheading mb-3">Bachelor of Technology </div>
              <div>Software Engineering Technology</div>
            </div>
            <div class="resume-date text-md-right">
              <span class="text-primary">January 2020 - PRESENT</span>
            </div>
          </div>
  
          <div class="resume-item d-flex flex-column flex-md-row justify-content-between">
            <div class="resume-content">
              <h3 class="mb-0">Conestoga College</h3>
              <div class="subheading mb-3">Computer Programmer/Analyst</div>
              <div>3 Year Advanced Diploma</div>
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