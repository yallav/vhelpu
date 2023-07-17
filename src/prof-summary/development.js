import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { grey } from '@material-ui/core/colors';
import CardActions from '@material-ui/core/CardActions';
import { devimage } from './development-jpeg.js';
import { useDispatch } from 'react-redux';
import { toggleDevDialogHandler } from '../redux/actions';
import DraggableDialog from './dev-draggable-dialog';

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 345,
    margin: 0,
    padding: 0,
  },
  media: {
    height: 70,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    paddingTop: '50%',
  },
  avatar: {
    padding: 5,
    width: "auto",
    height: 50,
    backgroundColor: "#f3eded4d",
    color: grey[900],
    borderRadius: 3,
    fontSize: 17
  },
  txt: {
    textAlign: "justify",
    color: "#353333e0",
    fontSize: "0.9em" 
  },
  btncontainer: {
    display: "flex",
    margin: "1px 7px",
    alignItems: "center",
  }
}));

function Development(props) {
    const classes = useStyles();
    const dispatch = useDispatch();

    const handleExpandClick = () => {
      dispatch(toggleDevDialogHandler());
    };
  
    return (
      <>
      <Card className={classes.root}>
        <CardHeader 
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              DevOps
            </Avatar>
          }
        />
        <CardMedia
          className={classes.media}
          image={devimage}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p" className={classes.txt}>
            Here, I tried my level best to explain about my responsibilities and experiences as a full stack developer. 
            To get better understanding about my skillset, please click below button.
          </Typography>
        </CardContent>
        <CardActions className={classes.btncontainer}>
          <DraggableDialog />
        </CardActions>
      </Card>
    </>
    );
  }

  export default Development;
