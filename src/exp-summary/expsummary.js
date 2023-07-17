import React from 'react';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';

import { connect } from 'react-redux';
import { hideDialog } from '../redux/actions';
import './expsummary.css';

import {images,expsummaryimg} from './image-base64';

class ExpSummary extends React.Component{
    constructor(){
        super();
        this.state = {
            displayExpSec: false,
            classname:"sideiconcls",
            shownewhdr:false
          }
          this.displayExperienceSummary = this.displayExperienceSummary.bind(this);
    }

    displayExperienceSummary(){
        this.setState((prevstate) => {
          return { displayExpSec: !prevstate.displayExpSec }
        });
        this.props.hide();
    }

    render(){
        return (
            <div className="experience-details-container">
            <div className="experience-details">
                <div className="row captioncontainer">
                    <div className="col-lg-1 col-1 col-sm-11">
                        <img src={expsummaryimg} alt="" />
                    </div>
                    <div className="col-lg-10 col-10 col-sm-10">
                        <h2>Experience Summary</h2>
                        <div className="expand-btn" onClick={this.displayExperienceSummary}> 
                            { (!this.state.displayExpSec)? <ArrowDropDownIcon className="expand-icon"/> : <ArrowDropUpIcon className="expand-icon"/>}
                        </div>
                    </div>
                </div>
                {
                    this.state.displayExpSec && 
                    (<>
                        <div className="row contentcls">
                            <div className="col-lg-1 col-1 col-sm-3 experience-details-display">
                            <img src={images.reddis} alt=""/>
                            </div>
                            <div className="col-lg-2 col-2 col-sm-2 experience-details-display">
                            <label> ReddisIT Ltd. </label>
                            </div>
                            <div className="col-lg-3 col-3 col-sm-3 experience-details-display">
                            <label> Technical Consultant</label>
                            </div>
                            <div className="col-lg-6 col-6 col-sm-3 experience-details-display">
                            <label> Feb 2022 - Present</label>
                            </div>
                        </div>

                        <div className="row contentcls">
                            <div className="col-lg-1 col-1 col-sm-3 experience-details-display">
                            <img src={images.gap} alt=""/>
                            </div>
                            <div className="col-lg-2 col-2 col-sm-2 experience-details-display">
                            <label> GAP Inc.</label>
                            </div>
                            <div className="col-lg-3 col-3 col-sm-3 experience-details-display">
                            <label> Technical Lead</label>
                            </div>
                            <div className="col-lg-6 col-6 col-sm-3 experience-details-display">
                            <label> Jun 2019 - Dec 2021</label>
                            </div>
                        </div>
                        <div className="row contentcls">
                            <div className="col-lg-1 col-1 col-sm-3 experience-details-display">
                            <img src={images.qcomm} alt=""/>
                            </div>
                            <div className="col-lg-2 col-2 col-sm-2 experience-details-display">
                            <label> Qualcomm </label>
                            </div>
                            <div className="col-lg-3 col-3 col-sm-3 experience-details-display">
                            <label> Systems Analyst, Lead</label>
                            </div>
                            <div className="col-lg-6 col-6 col-sm-3 experience-details-display">
                            <label> Mar 2012 - May 2019</label>
                            </div>
                        </div>
                    </>)
                }
            </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        hide: ()=>{
            dispatch(hideDialog())
        }
    }
}

export default connect(null,mapDispatchToProps)(ExpSummary);