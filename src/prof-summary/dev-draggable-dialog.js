import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Paper from '@material-ui/core/Paper';
import Draggable from 'react-draggable';
import './dialog.css';

function PaperComponent(props) {
  return (
    <Draggable handle="#draggable-dialog-title" cancel={'[class*="MuiDialogContent-root"]'}>
      <Paper {...props} />
    </Draggable>
  );
}

export default function DraggableDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Know more
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
            Experience summary as developer
        </DialogTitle>
        <DialogContent>
          <DialogContentText> Taking care of customer communications, managing the team, planning project activities 
            and mentoring junior resources in technologies as per project needs 
          </DialogContentText>
          <DialogContentText> 
            Working on multiple projects with a team of 7 members that comprises of backend engineers and 
            QA from planning to website launch 
          </DialogContentText>
          <DialogContentText>
            Working on design, and user mock-ups for web pages, developing functionalities using ReactJS, Angular, SpringBoot 
            and MongoDB technologies, and oversees creation and maintenance of application code 
          </DialogContentText>
          <DialogContentText>
            Presented user mock-ups to clients to give them better visual of the end product and to ensure that all parameters were met
          </DialogContentText>
          <DialogContentText>
            Worked closely with InfoSec team to enable SSO feature and developed the functionality to manage sessions in an existed web application 
          </DialogContentText>
          <DialogContentText>
            Worked on development of Visibility dashboard application with full responsibilities as full stack developer 
            using SpringBoot and ReactJS technologies
          </DialogContentText>
          <DialogContentText>
            Involved in design discussions for time sheet protal, taken care of complete development of user screens in Angular
            and partially involved in back end development suing SpringBoot
          </DialogContentText>
          <DialogContentText>
            Developed SurveyBuilder project as a proof of concept project using MEAN (MongoDB, ExpressJS, Angular and NodeJS) stack 
          </DialogContentText>
          <DialogContentText>
            Worked on UNIT testing for web screens which are developed in Angular web framework
          </DialogContentText>
          <DialogContentText>
            Enhanced Automation Test Repository web application with file browse functionality in JSF 
          </DialogContentText>
          <DialogContentText>
          Developed test harness systems to reset test environment and feed mock data into test database
          </DialogContentText>
          <DialogContentText>
          Designed and developed the Test Automation Framework and setup as JENKINS job to perform automated
regression testing 
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
