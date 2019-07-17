import React from 'react';
import {connect} from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import {Divider,List,ListItem,ListItemIcon,ListItemText, Collapse} from '@material-ui/core/';
import {Dashboard as DashboardIcon, People as PeopleIcon, Event as EventIcon} from '@material-ui/icons/';

import {selectOption} from '../../../Actions';

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

const SidedrawerList = props => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
    props.selectOption(index);
  }

  const handleClick = () => {
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
          <ListItemText primary="Events Management" />
        </ListItem>

        <ListItem
          button
          selected={selectedIndex === 2}
          onClick={event => handleListItemClick(event, 2)}
        >
          <ListItemIcon>
            <PeopleIcon/>
          </ListItemIcon>
          <ListItemText primary="Users Management " />
        </ListItem>

        <Divider />
      </List>
    </div>
  );
}

export default connect(null,{selectOption})(SidedrawerList);
