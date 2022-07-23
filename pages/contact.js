import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import HomeIcon from '@mui/icons-material/Home';
import Phone from '@mui/icons-material/Phone';
import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop';
import Email from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Divider from '@mui/material/Divider';

export default function Blog() {

  return (
    <Container sx={{mb: 2}}>
     
        {/* <Box sx={{backgroundColor: "#e5e8eb", p:2, m:2}}> */}
            <Grid container spacing={1}>
                <Grid item xs={2} >      
                        <HomeIcon/>                      
                    </Grid>
                        <Grid item xs={10} >
                        <Typography variant="subtitle1" sx={{color: "#023047"}}>Wayanad Muslim Orphanage Muttil, Mandad Post,
Wayanad Dist, Kerala. PIN 673122</Typography>
<Divider sx={{mb:2}}/>

                </Grid>
             
                <Grid item xs={2} >      
                        <Phone/>                      
                    </Grid>
                        <Grid item xs={10} >
                        <Typography variant="subtitle1" sx={{color: "#023047"}}>+91 4936 202294, 204364
+91 9895 204364</Typography>
<Divider sx={{mb:2}}/>

                </Grid>
                <Grid item xs={2} >      
                        <LocalPrintshopIcon/>                      
                    </Grid>
                        <Grid item xs={10} >
                        <Typography variant="subtitle1" sx={{color: "#023047"}}>+91 4936 208606
+91 9895 204364</Typography>
<Divider sx={{mb:2}}/>
                </Grid>
                <Grid item xs={2} >      
                        <Email/>                      
                    </Grid>
                        <Grid item xs={10} >
                        <Typography variant="subtitle1" sx={{color: "#023047"}}>wayanadorphanage@gmail.com</Typography>
                        <Divider sx={{mb:2}}/>

                </Grid>
                <Grid item xs={2} >      
                        <WhatsAppIcon/>                      
                    </Grid>
                        <Grid item xs={10} >
                        <Typography variant="subtitle1" sx={{color: "#023047"}}>+91 9895204364</Typography>
                        <Divider sx={{mb:2}}/>

                </Grid>
            </Grid>
        {/* </Box> */}
 
       
    </Container>
  );
}