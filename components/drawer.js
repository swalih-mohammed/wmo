import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

export default function TemporaryDrawer() {
 

  const list = () => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
    //   onClick={toggleDrawer(anchor, false)}
    //   onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                 <InboxIcon /> 
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
      </List>
      <Divider />
      <List>
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
               <InboxIcon />  
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
      
      </List>
    </Box>
  );

  return (
    <div>
      {/* {['left', 'right', 'top', 'bottom'].map((anchor) => ( */}
        <React.Fragment >
          <Button onClick={toggleDrawer(false)}>open</Button>
          <Drawer
            anchor="left"
            open={toggleDrawer}
            onClose={toggleDrawer(false)}
          >
            {list}
          </Drawer>
        </React.Fragment>
      {/* ))} */}
    </div>
  );
}
