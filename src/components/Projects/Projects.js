import React from 'react';

const Projects = () => {
    return (
        
    <section class="resume-section p-3 p-lg-5 d-flex justify-content-center page" id="interests">
    <div class="w-100">
      <h2 class="mb-5">Projects</h2>
      <div className="proj">
            <h3 class="mb-0">Checkered Eye Project Website Rebuilt with Easy to Use CMS</h3>
            
            <div class="mb-3">

                    <a href="https://github.com/dk95gs/CapstoneBackup" className="subheading mb-3"> Click Here to View Project Soruce Code on Github </a>
            </div>
            <p>For our capstone project we were tasked with re-creating the Checkered Eye Project website. The site required a Content Managment System that allowed the site owner to make changes to the website.</p>
            <div className="subheading ">
                    Tech Stack:
            </div>
            <ul class="fa-ul mb-0">
                <li>
                    <i class="fa-li fa fa-check"></i>
                    React</li>
                <li>
                    <i class="fa-li fa fa-check"></i>
                    ASP.Net Core</li>
                <li>
                    <i class="fa-li fa fa-check"></i>
                    MySQL</li>
            </ul>
        </div>
        <div className="proj">
            <h3 class="mb-0">Conestoga Online Game Store</h3>
            
            <div class="mb-3">

                    <a href="https://github.com/dk95gs/CVGS" className="subheading mb-3"> Click Here to View Project Soruce Code on Github </a>
            </div>
            <p>This is a web Application with a customer and employee portal. Allows employees to add games to the store, create events and approve reviews & shipment.

                Members can view the store, friend other members, add games to their wish list, review games, rate games, and add games to their cart.</p>
                <div className="subheading ">
                Tech Stack:
            </div>
            <ul class="fa-ul mb-0">
                <li>
                    <i class="fa-li fa fa-check"></i>
                    ASP.Net Core</li>
                <li>
                    <i class="fa-li fa fa-check"></i>
                    MySQL</li>
            </ul>
        </div>
        <div className="proj">
            <h3 class="mb-0">Monogame Project - Galactic Invader</h3>
            
            <div class="mb-3">

                    <a href="https://github.com/dk95gs/MonoGame-SpaceShooter" className="subheading mb-3"> Click Here to View Project Soruce Code on Github </a>
            </div>
            <p>This is a video game made with MonoGame in Visual Studio 2017 as a final project for my Object-Oriented Game Programming class. The game itself is a 2D side scrolling spaceship shooter game featuring 4 different enemy types, an asteroid, a boss level and power ups with sound effects and music.</p>
            <div className="subheading ">
            Tech Stack:
            </div>
            <ul class="fa-ul mb-0">
                <li>
                    <i class="fa-li fa fa-check"></i>
                    Visual Studio 2017</li>
                <li>
                    <i class="fa-li fa fa-check"></i>
                    C#</li>
                <li>
                    <i class="fa-li fa fa-check"></i>
                    MonoGame Framework</li>
            </ul>
        </div>
    </div>
  </section>
    );
}

export default Projects;