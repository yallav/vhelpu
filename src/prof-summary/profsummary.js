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
                  Well, I have all of the skills and experience that you’re looking for and 
                  I'm confident that I would be great fit in your organisation because I possess track 
                  record of successful projects, experience with different work culture based teams 
                  and my people skills which helped me to build healthy work environment and good 
                  relationships with project stakeholders.
                  </p>
                  <p>
                  I am happy to share my experiences with you here. 
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
