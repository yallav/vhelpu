import React from 'react';
import './aboutme.css';
import {aboutmeimg} from './aboutme-img';

export default function AboutMe(props){
    return(
        <div className="aboutme-details-container">
          <div className="aboutme-details">
            <div className="row captioncontainer">  
              <div className="col-lg-1 col-1 col-sm-11">
                <img src={aboutmeimg} alt="" />
              </div>
              <div className="col-lg-10 col-10 col-s-12">
                  <h2 className="h2cls">Summary</h2>
              </div>
              </div>
            <div className="row">
              <div className="col-lg-11 col-11 col-s-12 aside">
                  <p>
                    I started my career as a performance test engineer and working as technical lead now.
                    I am experienced in handling onshore-offshore model based projects as a team lead with customer facing. 
                    To make projects successful, I used to spend some time in technical learning and mentoring the teams 
                    on technical aspects as per project requirements. 

                  </p>
                  <p>
                    Being a technical lead consultant, I worked with different work culture based people 
                    who are with different profiles such as banking sector, automobile sector and utility sector. 
                    I have taken care of communications with project stakeholders as a point of contact along 
                    with responsibilities of "planning the project kick-off & closure meetings, project planning, 
                    project execution, resource allocation, task estimation, task delegation, updating the project status 
                    and driving technical discussions".
                  </p>
                  <p>  
                    As per organisational needs, I worked on white box testing where I took care of design and 
                    development of test frameworks to support automated testing for a payroll application. 
                    I got opportunity to work on unit tests for an Angular application and 
                    proof of concept (POC) to convert mock-up screens into web pages using Angular framework.  
                  </p>
                  <p>
                    While working on POC, I got so much passion about development and started exploring web technologies such 
                    as Angular, ReactJS, jQuery, JavaScript, TypeScript and SpringBoot. Later on, I was given opportunities to 
                    work on different development projects with MERN stack and ReactJS & SpringBoot.

                  </p>
                  <p>
                    To be a successful professional, I always believe in continuous enhancing the skillset by exploring and learning 
                    new technologies. Hence, I always encourage my team and colleagues to explore and learn new technologies by 
                    making someime in their daily routine.
                  </p>
                </div>
              </div>
            </div>
        </div>
    );
}