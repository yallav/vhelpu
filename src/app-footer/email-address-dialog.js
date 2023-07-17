import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

import {useStore, useDispatch} from 'react-redux';
import { closeContactDialogHandler } from '../redux/actions';

import EmailIcon from '@material-ui/icons/Email';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import PhoneIcon from '@material-ui/icons/Phone';
import './contact-dialog.css';

  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

  export default function AlertDialogSlide(props) {
  const dispatch = useDispatch();
  const store = useStore();
  const {showcontact} = store.getState();

  return (
      <div>
      <Dialog
          open={showcontact}
          TransitionComponent={Transition}
          keepMounted
          onClose={()=> { dispatch(closeContactDialogHandler())}}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
      >
          <DialogTitle id="alert-dialog-slide-title">Contact Information</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description" className="cntctdialogiconcontainer">
              <EmailIcon className="contctdialogspace"/> vijayakumar_yalla@yahoo.com
            </DialogContentText>
            <DialogContentText id="alert-dialog-slide-description" className="cntctdialogiconcontainer">
              <AlternateEmailIcon className="contctdialogspace"/> kyallavi@gmail.com
            </DialogContentText>
            <DialogContentText id="alert-dialog-slide-description" className="cntctdialogiconcontainer">
              <PhoneIcon className="contctdialogspace"/> (+44) (0)758-734-6165
            </DialogContentText>
          </DialogContent>
          <DialogActions>
          <Button onClick={()=> { dispatch(closeContactDialogHandler())}} color="primary">
              Close
          </Button>

          </DialogActions>
      </Dialog>
      </div>
  );
}

