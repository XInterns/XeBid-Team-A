import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People'
import EventIcon from '@material-ui/icons/Event';
import ViewIcon from '@material-ui/icons/Visibility'
import AddCircle from '@material-ui/icons/AddCircle'
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';


const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

export default props => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  function handleListItemClick(event, index) {
    setSelectedIndex(index);
  }

  function handleClick() {
    setOpen(!open);
  }

  return (
    <div className={classes.root}>
      <List component="nav" aria-label="Main mailbox folders">

        <ListItem
          button
          selected={selectedIndex === 0}
          onClick={event => handleListItemClick(event, 0)}
        >
          <ListItemIcon>
            <DashboardIcon/>
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>

        <ListItem
          button
          selected={selectedIndex === 1}
          onClick={event => handleListItemClick(event, 1)}
        >
          <ListItemIcon>
            <EventIcon/>
          </ListItemIcon>
          <ListItemText primary="Event Space Mgmt." />
        </ListItem>

        <ListItem button onClick={handleClick}>
          <ListItemIcon>
            <PeopleIcon/>
          </ListItemIcon>
          <ListItemText primary="User Mgmt." />
        {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem 
            button 
            className={classes.nested}
            selected={selectedIndex === 2}
            onClick={event => handleListItemClick(event, 2)}
            >
              <ListItemIcon>
                <AddCircle/>
              </ListItemIcon>
              <ListItemText primary="Add Users" />
            </ListItem>
            <ListItem 
            button 
            className={classes.nested}
            selected={selectedIndex === 3}
            onClick={event => handleListItemClick(event, 3)}
            >
              <ListItemIcon>
                <ViewIcon/>
              </ListItemIcon>
              <ListItemText primary="View Users" />
            </ListItem>
          </List>
        </Collapse>
      </List>
        <Divider />
    </div>
  );
}

