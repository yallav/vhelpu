import React from 'react';

import Development from './development';
import WhiteboxTesting from './white-box';
import './profsummary.css';
import {prof} from './profsummary-img';

class ProfSummary extends React.Component {

    render(){
        return (
            <div className="professional-summary-container">
            <div className="professional-summary">
              <div className="row h2textalign captioncontainer">
                <div className="col-lg-1 col-1 col-sm-11">
                  <img src={prof} alt="" />
                </div>
                <div className="col-lg-10 col-10 col-sm-11">
                  <h2>Professional Summary</h2>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-11 col-11 col-sm-11">
                  <p>
                  I have a thorough understanding of SDLC and various technical concepts such as cloud computing, 
                  server administration, deployment processes, web development and testing. This knowledge will help you when using 
                  cloud services and platform. 
                  </p>
                  <p>
                  I'm confident that I would be great fit in your organisation as I possess track 
                  record of successful projects, experience with different work culture based teams 
                  and my people skills which can be useful in building healthy work environment and good 
                  relationships with project stakeholders. 
                  </p>
            
                </div>
              </div>
              <div className="row">
                <div className="col-lg-5 col-11 col-sm-11">
                    <Development />
                </div>
                <div className="col-lg-5 col-11 col-sm-11">
                    <WhiteboxTesting />
                </div>
              </div>
            </div>
          </div>
        );
    }
}

export default ProfSummary;
