import React from 'react';

const Home = () =>{
    return (
        <section class="resume-section p-3 p-lg-5 d-flex align-items-center page animate" id="about">
            <div class="w-100">
               <div className="nameTitle">
               <h1 class="mb-0 text-secondary">Dilshan  
                </h1>
                <h1  class="mb-0 text-primary">Karunanayaka</h1>
               </div>
                <div class="subheading mb-5">Software Engineering Technology Student · Guelph ON · (226) 868-0179 · 
                <a href="mailto:dk95gs@gmail.com"> dk95gs@gmail.com</a>
                </div>
                <p class="mb-3">Hello! I am a graduate of the <strong>Computer Programmer/Analyst </strong> program offered at <strong>Conestoga College</strong>. Currently enrolled in <strong>McMaster University's Software Engineering Technology Co-op program,</strong> in level 3.</p>
                <p class="mb-3">
                    I have a passion towards Full Stack Web Development, familiar with technologies such as: <strong>React</strong>, <strong>Express</strong>, <strong>ASP.Net Core</strong> and <strong>MySQL </strong>.
                </p>
                <p class="mb-4">
                    This website was created using <strong>React & Bootstrap</strong> and deployed using <strong>Vercel</strong>.
                </p>
                <div class="social-icons">
                <a href="https://www.linkedin.com/in/dkarunanayaka/">
                    <i class="fab fa-linkedin-in"></i>
                </a>
                <a href="https://github.com/dk95gs">
                    <i class="fab fa-github"></i>
                </a>
                </div>
            </div>
        </section>
    )
}
export default Home;