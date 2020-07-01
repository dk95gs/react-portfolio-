import React, {useEffect, useState} from 'react';
import Youtube from 'react-youtube';
import {Image} from 'react-bootstrap';
import port2 from '../../img/port2.PNG';
const Projects = () => {
    let [checkeredVideo,setCheckeredVideo]  = useState(null);
    let [cvgsVideo,setcvgsVideo]  = useState(null);
    let [galacticVideo,setGalacticVideo]  = useState(null);
    let [width, setWidth] = useState(window.innerWidth > 600 ? '80%' : "100%")
    const opts = {
        height: '400',
        width: window.innerWidth > 600 ?'80%' : '100%',
    }
    //const width = window.innerWidth > 600 ? '80%' : '100%';
    useEffect(()=>{
       
        setTimeout(()=>{
            setCheckeredVideo(checkeredVideo =  <Youtube videoId="2akjiaLPhVE" opts={opts} />);
            setcvgsVideo(cvgsVideo = <Youtube videoId="CrHX8cJrdDI" opts={opts} />)
            setGalacticVideo(galacticVideo = <Youtube videoId="scL-RmUg_70" opts={opts} />)
        }, 1200);
     
        console.log("mounted")
    }, [])
    return (
        
    <section class="resume-section p-3 p-lg-5 d-flex justify-content-center page" id="interests">
    <div class="w-100">
      <h2 class="mb-3 text-primary">Projects</h2>
      <div className="proj">
            <h3 class="mb-0 text-secondary">Checkered Eye Project Website Rebuilt with Easy to Use CMS</h3>
            
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
            {checkeredVideo}
        </div>
        <div className="proj">
            <h3 class="mb-0 text-secondary">Conestoga Online Game Store</h3>
            
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
            {cvgsVideo}
        </div>
        <div className="proj">
            <h3 class="mb-0 text-secondary">Old Portfolio</h3>
            
                 
            <div class="mb-3">

                    <a href="https://github.com/dk95gs/DKPortfolio" className="subheading mb-3"> Click Here to View Project Soruce Code on Github </a>
            </div>
            <p>
                This is my old portfolio website that I created in college. No CSS library was used for this projet, it's plain HTML and SCSS/CSS. This project was used as an
                opportunity to learn SCSS and to refine my current CSS skills
            </p>
            <div className="subheading ">
            Tech Stack:
            </div>
            <ul class="fa-ul mb-0">
                <li>
                    <i class="fa-li fa fa-check"></i>
                    HTML</li>
                <li>
                    <i class="fa-li fa fa-check"></i>
                    CSS</li>
                <li>
                    <i class="fa-li fa fa-check"></i>
                    SCSS</li>
            </ul>
            <Image width={width} src={port2} />
        </div>
    
        <div className="proj">
            <h3 class="mb-0 text-secondary">Monogame Project - Galactic Invader</h3>
            
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
            {galacticVideo}
        </div>
    </div>
  </section>
    );
}

export default Projects;