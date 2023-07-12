import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

export default function ResponsiveTechSummaryDialog() {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

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
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">Complete Technical Skillset</DialogTitle>
        <DialogContent>
          <DialogContentText>
                <p> <b> Languages - </b> C, JAVA, Groovy, PERL, JavaScript, TypeScript, Python </p>
                <p> <b> Frameworks -  </b> SpringBoot, Cucumber (BDD), Jasmine, Karma, Junit, TestNG </p>
                <p> <b> Web Technologies -  </b> HTML5, CSS3, SASS, JQuery3, Express, Angular, ReactJS, NodeJS </p>
                <p> <b> UI Component Libraries -  </b> PrimeNG, Bootstrap, Material </p>
                <p> <b> Databases -  </b> Oracle, MySQL, SQLServer, Postgres, Cassandra, MongoDB </p>
                <p> <b> Performance Testing Tools -  </b> HP LoadRunner, JMeter, WebLOAD  </p>
                <p> <b> Monitoring Tools -  </b> UNIX utilities, Perfmon, HP Sitescope, vSphere, VisualVM  </p>
                <p> <b> Automation Testing Tools -  </b> Selenium with JAVA, RESTClient API, HTTPClient API, RestAssured  </p>
                <p> <b> Version Control Repositories -  </b> Perforce, GitHub  </p>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
