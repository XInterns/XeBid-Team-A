import React from 'react';
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import LogoutIcon from '@material-ui/icons/PowerSettingsNew';



const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  leftIcon: {
    marginRight: theme.spacing(1),
  },
  rightIcon: {
    marginLeft: theme.spacing(1),
  },
  iconSmall: {
    fontSize: 20,
  },
}));

export default function IconLabelButtons() {
  const classes = useStyles();

  return (
    <div>
      <Button variant="contained"color="secondary" size="small" className={classes.button}>
        <LogoutIcon className={clsx(classes.leftIcon, classes.iconSmall)} />
        Logout
      </Button>
    </div>
  );
}