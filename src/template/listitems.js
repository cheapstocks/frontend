import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Flag from 'react-world-flags'
import Link from '@material-ui/core/Link';


export const mainListItems = (
  <div>
    <ListItem button component={Link} href="/#/market/ST">
      <ListItemIcon>
        <Flag code="swe" height="16" />
      </ListItemIcon>
      <ListItemText primary="Sweden" />
    </ListItem>
    <ListItem button component={Link} href="/#/market/CO">
      <ListItemIcon>
        <Flag code="dnk" height="16" />
      </ListItemIcon>
      <ListItemText primary="Denmark" />
    </ListItem>
    <ListItem button component={Link} href="/#/market/HE">
      <ListItemIcon>
        <Flag code="fin" height="16" />
      </ListItemIcon>
      <ListItemText primary="Finland" />
    </ListItem>
    <ListItem button component={Link} href="/#/market/IC">
      <ListItemIcon>
        <Flag code="isl" height="16" />
      </ListItemIcon>
      <ListItemText primary="Iceland" />
    </ListItem>
  </div>
);


