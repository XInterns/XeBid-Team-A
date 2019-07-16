import React,{useState}  from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

import CommonButton from '../../Common/Button';
import CreateUserForm from '../../Admin/CreateUsers';

export default function FormDialog(props) {
  const [values, setValues] = useState({});

  const handleChange = (key,value) => {
    setValues({ ...values, [key]: value });
  };

  const [open, setOpen] = React.useState(false);

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
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
          <Button onClick={handleClose} color="primary">
            {props.mainText}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}