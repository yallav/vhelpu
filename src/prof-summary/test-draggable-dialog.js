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
            Experience summary as technical test lead
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
          Resolved support requests with a thorough understanding of workflows and escalate unresolved issues to the concerned teams. 
          Collaborate with technical teams to have proper documentation of tools to help engineers to unblock themselves
          </DialogContentText>
          <DialogContentText> 
            Customer facing, taking care of customer communications, managing the team, planning project activities 
            and mentoring junior resources in technologies as per project needs. Analysing the Cucumber scenarios, 
            creating story points in JIRA as per the complexity of stories and delegating the work to team members
          </DialogContentText>
          <DialogContentText> 
          Written the functional test plans and test strategies as per gathered requirements, automating the UI tests and 
          integration tests, identifying the scope of load testing and guiding the test teams 
          </DialogContentText>
          <DialogContentText>
            Tested application functionalities through UI, Rest APIs, and querying tables to check consistency across the Web layer, Application layer, and DB layer; 
            share the complete details along with steps to follow to reproduce the scenario in case of any functional issues
          </DialogContentText>
          <DialogContentText>
          Developed the automation tests by using the Java, Selenium automation tool, page object model pattern, and Cucumber BDD framework and 
          maintain automation scripts in the GitHub repo, help the product teams to increase testing efficiency with automation tests, and maintain the automation test scripts
          </DialogContentText>
          <DialogContentText>
          Prepared the test plan by referring the NFR requirements, legacy systems and development of the
complex performance test scripts for JAVA and .NET based web-based applications and performance test
executions with proper monitoring enabled
</DialogContentText>
          <DialogContentText>
          Identified performance bottlenecks by referring J2EE/ .NET diagnostics, application server logs,
JVM heap and thread dumps, Oracle AWR reports and SQLProfile reports
</DialogContentText>
          <DialogContentText>
          Worked on performance test report by incorporating client-side metrics, server-side metrics and test
observations. Driven discussions with customers on test report and suggested the performance improvement
recommendations along with metrics
          </DialogContentText>
          <DialogContentText>
          Collaboratively worked with load balancer teams and gateway server teams to resolve performance
bottlenecks. Worked on performance test report along with test observations and test recommendations and discussed test
observations with project stakeholders
          </DialogContentText>
          <DialogContentText>
          Developed functionality in Groovy to encrypt & decrypt files with BouncyCastle API, to FTPing the files with
JCraft API and file transfers from Amazon S3 bucket
          </DialogContentText>
          <DialogContentText>
        Developed web page rendering timer tool with the help of Selenium automation scripts and HAR (HTTP Archive) files
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
