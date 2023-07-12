import React from 'react';
import './techsummary.css';

import {techsummary} from './techsummary-img';
import ResponsiveTechSummaryDialog from './texh-summary-dialog';

export default function TechSummary(props){
    return(
        <div className="technical-summary-container">
          <div className="technical-summary">
            <div className="row captioncontainer">
              <div className="col-lg-1 col-1 col-sm-11">
                <img src={techsummary} alt="" />
              </div>
              <div className="col-lg-10 col-10 col-sm-10">
                  <h2>Technical Summary</h2>
              </div>
            </div>
            <div className="row container flexcontainer">
              <div className="col-lg-2 col-2 col-sm-2">
                HTML & CSS
              </div>
              <div className="col-lg-7 col-7 col-sm-7">
                <div className="bottom"> 
                  <div className="rating html"> 
                  </div>
                </div>
              </div>
            </div>
            <div className="row container flexcontainer">
              <div className="col-lg-2 col-2 col-sm-2">
                JavaScript
              </div>
              <div className="col-lg-7 col-7 col-sm-7">
                <div className="bottom"> 
                  <div className="rating javascript"> 
                  </div>
                </div>
              </div>
            </div>
            <div className="row container flexcontainer">
              <div className="col-lg-2 col-2 col-sm-2">
                Angular & React
              </div>
              <div className="col-lg-7 col-7 col-sm-7">
                <div className="bottom"> 
                  <div className="rating angular"> 
                  </div>
                </div>
              </div>
            </div>
            <div className="row container flexcontainer">
              <div className="col-lg-2 col-2 col-sm-2">
                SpringBoot
              </div>
              <div className="col-lg-7 col-7 col-sm-7">
                <div className="bottom"> 
                  <div className="rating springboot"> 
                  </div>
                </div>
              </div>
            </div>
            <div className="row container flexcontainer">
              <div className="col-lg-2 col-2 col-sm-2">
                Testing
              </div>
              <div className="col-lg-7 col-7 col-sm-7">
                <div className="bottom"> 
                  <div className="rating testing"> 
                  </div>
                </div>
              </div>
            </div>
            <div className="row container flexcontainer">
              <div className="col-lg-3 col-3 col-sm-3">
                <ResponsiveTechSummaryDialog />
              </div>
            </div>
          </div>
        </div>
    );
}