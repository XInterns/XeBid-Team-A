import React,{useState}  from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import {connect} from 'react-redux';

import CommonButton from '../../Common/Button';
import CreateUserForm from '../../Admin/CreateUsers';
import {signUp} from '../../../Actions/authActions';

const SignUpDialog = (props) => {
  const [values, setValues] = useState({});

  const handleChange = (key,value) => {
    setValues({ ...values, [key]: value });
  };

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }

  const handleSubmit = (e) => {
    setOpen(false);
    props.signUp(values)
    e.preventDefault();
  }
  
  return (
    <div>
    <CommonButton value="Sign Up" color="primary" createUser={handleClickOpen}/>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Sign Up</DialogTitle>
        <DialogContent >

          <CreateUserForm sendFormData={handleChange}/>

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

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (newUser) => dispatch(signUp(newUser))
  }
}

export default connect(null,mapDispatchToProps)(SignUpDialog)