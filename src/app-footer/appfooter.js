import React from 'react';
import './appfooter.css';

import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import AccessibilityNewIcon from '@material-ui/icons/AccessibilityNew';
import ContactsIcon from '@material-ui/icons/Contacts';
import HomeIcon from '@material-ui/icons/Home';
import EmailIcon from '@material-ui/icons/Email';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import PhoneIcon from '@material-ui/icons/Phone';
import AlertDialogSlide from './email-address-dialog';

import { connect } from 'react-redux';
import { openContactDialogHandler } from '../redux/actions';

class AppFooter extends React.Component{

    constructor(props){
        super(props);
        this.setIsShown = this.setIsShown.bind(this);
        this.state = {
            showdialog: false
        }
    }

    setIsShown(){
        this.props.openDialog();
    }

    render(){

        return (
            <>
            <div className="footer-container">
                <div className="footer-details">
                    <div className="row">
                        <div className="col-lg-4 col-4 col-s-11 txt">
                            <h4 className="contactsubitemcontainer"> <EmojiPeopleIcon /> About me</h4>
                            <p> I am an experienced professional with individual contributor and team lead responsibilities. 
                                With my expertise,I can offer my services in design and development of product, testing the 
                                product and setting up technical testing practice.
                                It is up to the orgnisation how it can make use of my technical and soft skills.
                            </p>
                        </div>
                        <div className="col-lg-2 col-2 col-s-11">
                            <h4 className="contactsubitemcontainer"> <AccessibilityNewIcon /> Services</h4>
                            <p className="services"> Front End Development</p>
                            <p className="services"> Back End Development</p>
                            <p className="services"> Unit Testing</p>
                            <p className="services"> Automation Testing</p>
                            <p className="services"> Whitebox Testing</p>
                            <p className="services"> Performance Testing</p>
                        </div>
                        <div className="col-lg-3 col-3 col-s-11">
                            <h4 className="contactsubitemcontainer"> <ContactsIcon /> Contact</h4>
                            <p className="contactsubitemcontainer"> <HomeIcon /> Address</p>
                            <div className="addresscontainer">
                                <p className="contacts"> 20, Spinney Close </p>
                                <p className="contacts"> North Field</p>
                                <p className="contacts"> Birmingham B31 2JG</p>
                            </div>
                            <div onMouseEnter={this.setIsShown}>
                                <p className="contactsubitemcontainer contactcls"> <EmailIcon /> Email </p>
                            </div>
                            <p className="contactsubitemcontainer"> <AlternateEmailIcon /> vijayakumar_yalla@yahoo.com (or) kyallavi@gmail.com</p>
                            <p className="contactsubitemcontainer"> <PhoneIcon /> (+44) (0)758-734-6165</p>
                        </div>
                    </div>
                </div>
            </div>
            <AlertDialogSlide />
            <div className="footer-bottom"> </div>
            </>
        );
    }
}

const mapStateToProps = (state)=>{
    return {
        contactdialogstate: state.showcontact
    }
}

const mapDispatchToProps = (dispatch)=> {
    return {
        openDialog: ()=>{ 
            dispatch(openContactDialogHandler())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppFooter);