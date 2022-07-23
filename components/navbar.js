import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import LabelImportant from '@mui/icons-material/LabelImportant';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import { styled, useTheme } from '@mui/material/styles';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import Badge from '@mui/material/Badge';
import Image from "next/image";
import DonateIcon from "../public/donation.png"
import Razopay from "../pages/donate"
// import IconButton from '@mui/material/IconButton';




const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  }));

export default function TemporaryDrawer() {
    const theme = useTheme();

const [open, setOpen] = React.useState(false);


  return (
    <Box sx={{ flexGrow: 1 }}>
      
          <AppBar position="static" open={open}>
          <Toolbar
            sx={{
              pr: '24px', // keep right padding when drawer closed
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={()=>setOpen(true)}

              sx={{
                marginRight: '36px',
                ...(open && { display: 'none' }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Link  href="/" underline="none" color="inherit">
            
           
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            WMO
          </Typography>
            </Link>
             {/* <Box sx={{marginLeft: "auto"}} badgeContent={"Donate"} color="error">
                <Razopay/>
              </Box> */}
          </Toolbar>
        </AppBar>
          <Drawer
            anchor="left"
            open={open}
            onClose={()=>setOpen(false)}
          >
        

<Box
      sx={{ width:250 }}
      role="presentation"
      onClick={()=>setOpen(false)}
    >
           <DrawerHeader>
          <IconButton>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
    
      <List>
          <ListItem  disablePadding>
          <Link  href="/about" underline="none">
            <ListItemButton>
              <ListItemIcon>
               <LabelImportant /> 
              </ListItemIcon>
              <ListItemText primary='About Us' />
            </ListItemButton>
            </Link>
          </ListItem>
          <ListItem  disablePadding>
          <Link  href="/institutions" underline="none">
            <ListItemButton>
              <ListItemIcon>
               <LabelImportant /> 
              </ListItemIcon>
              <ListItemText primary={"Institutions"} />
            </ListItemButton>
            </Link>
          </ListItem>
          <ListItem  disablePadding>
          <Link  href="/contact" underline="none">
            <ListItemButton>
              <ListItemIcon>
               <LabelImportant /> 
              </ListItemIcon>
              <ListItemText primary={"Contact Us"} />
            </ListItemButton>
            </Link>
          </ListItem>
          <ListItem  disablePadding>
          <Link  href="/visit" underline="none">
            <ListItemButton>
              <ListItemIcon>
               <LabelImportant /> 
              </ListItemIcon>
              <ListItemText  primary={"Visit WMO"} />
            </ListItemButton>
            </Link>
          </ListItem>
          
      </List>
    </Box>
        
          </Drawer>
     
      </Box>
  );
}
