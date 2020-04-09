import React from 'react';
import {Image} from 'react-bootstrap';
import Bayer from '../../img/bayer.jpg';
const Work = () =>{
    return (
        <section class="resume-section p-3 p-lg-5 d-flex align-items-center page" id="work">
        <div class="w-100">
          <h2 class="mb-3 text-primary">Work Experience</h2>
  
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