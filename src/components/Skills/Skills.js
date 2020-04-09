import React from 'react';
import './skills.css';
import react from '../../img/skills/react.png';
import js from '../../img/skills/js.png';
import net from '../../img/skills/net.jpg';
import html from '../../img/skills/html.png';
import css from '../../img/skills/css.png';
import rest from '../../img/skills/rest.png';
import sql from '../../img/skills/sql.png';
import git from '../../img/skills/git.png';
import node from '../../img/skills/node.png';
const Skills = () =>{
  const noBorderStyle = {borderRadius:"unset", boxShadow:"none"};
    return (
        <section class="resume-section p-3 p-lg-5 d-flex justify-content-center page" id="skills">
        <div class="w-100">
          <h2 class="mb-5 text-primary">Skills</h2>
          <div class="subheading mb-3 text-secondary">Programming Languages &amp; Tools</div>
          <div className="skills-body">
            <div class="skills-card">
                  <img style = {noBorderStyle} src={react} class="skills-card-img" alt="Alternate Text" />
              </div>
              <div class="skills-card">
                  <img src={js} class="skills-card-img" alt="Alternate Text" />
              </div>
              <div class="skills-card">
                  <img src={html} class="skills-card-img" alt="Alternate Text" />
              </div>
              <div class="skills-card">
                  <img src={css} class="skills-card-img" alt="Alternate Text" />
              </div>
              <div class="skills-card">
                  <img src={net} class="skills-card-img" alt="Alternate Text" />
              </div>
              <div class="skills-card">
                  <img src={sql} class="skills-card-img" alt="Alternate Text" />
              </div>
              <div class="skills-card">
                  <img src={rest} class="skills-card-img" alt="Alternate Text" />
              </div>
              <div class="skills-card">
                  <img style={noBorderStyle} src={git} class="skills-card-img" alt="Alternate Text" />
              </div>
              <div class="skills-card">
                  <img src={node} class="skills-card-img" alt="Alternate Text" />
              </div>
          </div>
        </div>
      </section>
  
    )
}

export default Skills;