import React from "react";
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Box, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import Link from '@mui/material/Link';


function Footer() {
  return (
      <Box sx={{ flexGrow: 1, paddingBottom:5 , paddingTop:5, backgroundColor: "#002240", }}>
      <Container >
       <Grid container spacing={2} sx={{pl: 3}}  >

       <Grid item gap={2} xs={12} md={6}>
        <Box sx={{display: "flex",  justifyContent: "center", alignItems: "center", pl: 4}}>
            <Box sx={{display: "flex", flexDirection: "column"}}  >
            <Typography  sx={{mb: 1, color: "#f1faee"}}>ADDRESS</Typography>
            <Typography sx={{color: "#f1faee"}}> 104, Crescent Heights, Kismathpur,<br></br> Hyderabad, Telengana,
          500030.</Typography>
          </Box>
        </Box>
      </Grid>

      <Grid  item gap={2}  xs={12} md={6} >
        <Box sx={{display: "flex",  justifyContent: "center"}}>
          <Box sx={{display: "flex", flexDirection: "column"}} >
        <Typography  sx={{mb: 1, color: "#f1faee"}}>CONTACT US</Typography>
          <Link  sx={{ color: "#f1faee"}} href="tel:+91 7207724191" underline="none">
          {"7207724191"}
          </Link>
          <Link sx={{color: "#f1faee"}} href="mailto:support@laamacademy.com" underline="none">
          {" support@laamacademy.com"}
          </Link>
        </Box>
        </Box>

      </Grid>
       </Grid>
       <Box>
        <Grid container sx={{paddingTop: 10, flexGrow: 1}}>
          <Grid gap={2} item xs={12} md={12} sx={{ display: "flex",  justifyContent: "center", alignItems: "center"}}>
              <FacebookIcon sx={{color: "#f1faee"}}/>
              <YouTubeIcon sx={{color: "#f1faee"}}/>
              <InstagramIcon sx={{color: "#f1faee"}}/>
          </Grid>
        </Grid>
        <Box sx={{ display: "flex",  justifyContent: "center", alignItems: "center", paddingTop:1}}>
        <Typography  sx={{mb: 1, color: "#f1faee"}}> Laam Academy © 2022</Typography>
        
        </Box>
        <Link underline="none" href="/privacy-policy">
        <Typography  sx={{mb: 1, color: "#f1faee",  display: "flex",  justifyContent: "center", alignItems: "center",}}> Privacy policy</Typography>
        </Link>
       </Box>
      </Container>
    </Box>
   
  );
}

export default Footer;