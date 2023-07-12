import React from 'react';
import './appheader.css';
import profimage from './profile-pic-encode';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

class AppHeader extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            resultimage: ''
        }
    }

  componentDidMount(){

    }

  render(){
      
    return(
        <div className="user-details-container">
            <div className="user-details">
                <div className="row">
                    <div className="col-lg-4 col-4 col-s-9">
                        <div className="profile-container">
                                <img className="profile" src={profimage} alt=""/>
                        </div>
                    </div>
                    <div className="col-lg-7 col-7 col-s-12">
                        <div className="aside">
                            <h2>Vijaya Kumar Yalla</h2>
                            <p>
                            Versatile IT professional with Full Stack development and SDET expertise. 
                            Achieved 100% successful rate in all projects with my can-do attitude and dedication. 
                            </p>
                            <p>
                            Seeking a challenging career opportunity in an organization where my analytical abilities, coding and 
                            technical testing expertise will be beneficial to the organization growth.
                            </p>
                            <div className="findmecontainer">
                                <div className="findmetxt"> You can find me on </div>
                                <div>
                                    <a href="https://www.facebook.com/vijayG4S.yalla" target="_blank"
                                    rel="noopener noreferrer"> 
                                        <FacebookIcon className="iconcontainer"/> 
                                    </a> 
                                </div>
                                <div>
                                    <a href="https://www.linkedin.com/in/vijaya-kumar-yalla-3b9a138/" target="_blank"
                                    rel="noopener noreferrer"> 
                                        <LinkedInIcon className="iconcontainer"/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
    }
}

export default AppHeader;