import React from 'react';
import { Formik, Form, Field } from 'formik';
import './contact.css';

import {contact} from './contact-img';
import InfoIcon from '@material-ui/icons/Info';

function validateEmail(value) {
  let error;
  if (!value) {
    error = '* Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    error = '* Invalid email address';
  }
  return error;
}

function validateUsername(value) {
  let error;
  if (!value) {
    error = '* Required';
  } else if (value === 'admin') {
    error = 'Nice try!';
  }
  return error;
}

function Contact() {

  return (
    <div className="contact-details-container">
      <div className="contact-details"> 
        <div className="row captioncontainer">
            <div className="col-lg-1 col-1 col-sm-11">
              <img src={contact} alt="" />
            </div>
            <div className="col-lg-10 col-10 col-sm-10">
                <h2>Contact</h2>
            </div>
        </div>

        <div className="row">
            <div className="col-lg-11 col-11 col-sm-11">
              <div className="captioncontainer alertmsgcls"> 
                <InfoIcon className="infoiconcls"/> Due to non functioning of form, please use my contact details 
                from bottom of the page. 
              </div>
            </div>
        </div>
        
      <Formik 
        initialValues={{
          usertxt: '',
          email: '',
          thokka: ''
        }}
        onSubmit={(values,{setSubmitting, resetForm})=> {
          console.log(values);
          setSubmitting(true);
          resetForm();
          setSubmitting(false);
        }}
        
      >
        {({ errors, touched }) => (
          <Form>
            <div className="row dummyinputcls">
              <div className="col-lg-8 col-8 col-sm-8">

                <Field 
                      name="email"  
                      validate={validateEmail} 
                      placeholder="Please enter valid email address"
                />
                <label className="emaillabelcls"> Email </label>
              </div> 
              <div className="col-lg-8 col-8 col-sm-8">
                {errors.email && touched.email && <label className="errormsg">{errors.email}</label>}
              </div>
            </div>

            <div className="row">
              <div className="col-lg-8 col-8 col-sm-8 dummycls">
                  <Field
                        name="usertxt"
                        validate={validateUsername}
                        render={({ field }) => (
                          <>
                            <textarea {...field} placeholder="Please enter job description" rows="7"/>
                            <label className="desclabelcls"> Description </label>
                          </>
                        )}
                  />
              </div> 
              <div className="col-lg-8 col-8 col-sm-8">
                {errors.usertxt && touched.usertxt && <label className="errormsg">{errors.usertxt}</label>}
              </div>
            </div>

            <div className="row">
              <div className="col-lg-8 col-8 col-sm-8">
                <button className="btncls" type="submit">Send</button>
              </div>
            </div>

          </Form>
        )}
      </Formik>

      </div>
    </div>
  );
}

export default Contact;