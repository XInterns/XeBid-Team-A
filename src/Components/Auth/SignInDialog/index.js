import React,{useState}  from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';
import {TextField} from '@material-ui/core/';
import {connect} from 'react-redux';
import {signIn} from '../../../Actions/authActions';

import CommonButton from '../../Common/Button';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    alignContent:'center',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
}));

const SignInDialog=(props) => {
  const {authError}=props;
  const classes = useStyles();
  const [values, setValues] = useState({});

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]:event.target.value});
  };

  const [open, setOpen] = React.useState(false);

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  function handleSubmit(){
    setOpen(false);
    props.signIn(values);
  }
  
  return (
    <div>
      <CommonButton value="Sign In" color="primary" createUser={handleClickOpen}/>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Sign In</DialogTitle>
        <DialogContent className={classes.dialog}>
          <form className={classes.container}  noValidate autoComplete="off">
            <div className={classes.subContainer}>
              <TextField
                required
                id="email"
                name="email"
                label="Email"
                className={classes.textField}
                type="email"
                onChange={handleChange}
                autoComplete="email"
                margin="normal"
                variant="outlined"
              />
              <TextField
                required
                id="outlined-password-input"
                label="Password"
                name="password"
                onChange={handleChange}
                className={classes.textField}
                type="password"
                margin="normal"
                variant="outlined"
              />
            </div>                   
          </form>
           
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary">
            {props.mainText}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    authError:state.auth.authError
  }
}

const mapDispatchToProps = (dispatch)=>{
  return {
    signIn: (creds) => dispatch(signIn(creds))
  }
}

export default connect(null,mapDispatchToProps)(SignInDialog)
