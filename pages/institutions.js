import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Image from "next/image";
import img1 from "../public/institutions/religious2.jpeg"
import img2 from "../public/institutions/religious3.jpeg"
import img3 from "../public/institutions/religious4.jpeg"

const data = [
    {title: "English School (CBSE) Sulthan Bathery", description: "It is this school through which WMO extended it wings from villages to a major township in Wayanad. It was in 1996 that the school was established", url: img1},
    {title: "Green Mount", description: "WMO Green Mount International School was established in 2009. At present stands up with 400 students on the roll. It is 34th institution among wayanad Muslim orphanage. Giving all the modern facility to the students of padinharathara town. WMO GMIS aims to provide excellent international education for students of all nationalities in a challenging multi-cultural environment.", url: img2},
    {title: "High School and Vocational higher secondary school, Muttil", description: "Half a decade after the LP/UP school was established, precisely in 1972, the upgraded high school and higher secondary school began functioning at Muttil- the first of its kind in the educationally backward village and surrounding areas.", url: img3}
]

export default function Blog() {

  return (
    <Container sx={{mb: 2}}>
        {data.map((item) => (
        <Box sx={{backgroundColor: "#e5e8eb", p:2, m:2}}>
            <Grid container spacing={1}>
                <Grid item sx={12} md={6}  >
                    <Box>
                        <Typography variant="subtitle1" sx={{color: "#023047"}}>Topline</Typography>
                        <Typography variant="h5" sx={{mb: 2, color: "primary.main"}}>{item.title}</Typography>
                        <Typography variant="body2" sx={{color: "#023047"}}>
                        {item.description}
                        </Typography>
                    </Box>
                    </Grid>
                        <Grid sx={12} md={6} >
                        <Box sx={{ p:1}} >
                        <Image src={item.url}/>
                    </Box>
                </Grid>
            </Grid>
        </Box>
        ))}
       
    </Container>
  );
}