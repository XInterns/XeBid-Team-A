import React from 'react';
import {TextField, FormControl, InputLabel, MenuItem, Select, OutlinedInput} from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';

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
  dense: {
    marginTop: theme.spacing(2),
  },
  menu: {
    width: 200,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function OutlinedTextFields(props) {
  const classes = useStyles();
  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  const[values,setValues]=React.useState({})

  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  const handleChange = event => {
    props.sendFormData([event.target.name],event.target.value);
  };

  const handleChangeRole = event => {
    props.sendFormData([event.target.name],event.target.value);
    setValues({...values,[event.target.name]:event.target.value});
  }
  
    return (
      <form className={classes.container}  noValidate autoComplete="off">
        <div className={classes.subContainer}>
          <div>
            <TextField
              required
              id="firstName"
              name="firstName"
              label="First Name"
              onChange={handleChange}
              className={classes.textField}
              margin="normal"
              variant="outlined"
            />
            <TextField
              required
              id="lastName"
              name="lastName"
              label="Last Name"
              onChange={handleChange}
              className={classes.textField}
              margin="normal"
              variant="outlined"
            />
          </div>
            <div>
              <TextField
                required
                id="contact"
                name="contact"
                label="Contact Number"
                onChange={handleChange}
                className={classes.textField}
                margin="normal"
                variant="outlined"
              />

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
          </div>

          <div>
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

            <TextField
              required
              id="outlined-confirm-password-input"
              name="confirm-password"
              label="Confirm Password"
              onChange={handleChange}
              className={classes.textField}
              type="password"
              margin="normal"
              variant="outlined"
            />
          </div>

          <div>
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel ref={inputLabel} htmlFor="outlined-role-simple">
                Role
              </InputLabel>
              <Select
                value={values.role}
                onChange={handleChangeRole}
                input={<OutlinedInput labelWidth={labelWidth} name="role" id="role" />}
              >
                <MenuItem value={4}>Participant</MenuItem>
                <MenuItem value={5}>Audience</MenuItem>
              </Select>
            </FormControl> 
          </div>
        </div>
      </form>
    );
}