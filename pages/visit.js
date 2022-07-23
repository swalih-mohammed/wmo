import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ProTip from '../src/ProTip';
import Link from '../src/Link';
import Copyright from '../src/Copyright';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Image from "next/image";
import img1 from "../public/institutions/religious2.jpeg"
import img2 from "../public/institutions/religious3.jpeg"
import img3 from "../public/institutions/religious4.jpeg"


export default function Visit() {
  return (
    <Container maxWidth="lg">
    <Box sx={{ my: 4 }}>
        
    <Typography sx={{mb:2, pb:2}} variant="h6">Visit WMO</Typography>
        <Carousel autoPlay={true}>
        <div>
        <Image src={img1} alt="image1"/>
        </div>
        <div>
        <Image src={img2} alt="image2"/>
        </div>
        <div>
        <Image src={img3} alt="image3"/>
        </div>
        </Carousel>
    </Box>
    <Box sx={{mb:1}}>
    <Typography paragraph={true} variant="body1" component="body1" gutterBottom>
    Prayer is the most intimate moment in our life. For, 
    prayer brings us closer to the god. And prayer is the most we
     can offer to a grieving soul- that we can rely on when we intensely want to empathise with him or her.
      God asks the Messenger to introduce Him: "When my servant asks you about me, (tell him) I am Near. When he calls me,
       I will answer him." (2:186). God prefers to define Himself as the One who always hears and answers prayer.
        It"s this invaluable gift that WMO has to offer you the most each moment you cross its gate.
    </Typography>
    </Box>
    <Box sx={{mb:1}}>
    <Typography  paragraph={true} variant="body1" component="body1">
    Actually, most visitors come here to take part in prayers, 
    to be blessed with prayers and to offer their prayers.
     They know how priceless the yearning of those who deserve the most to cry will be. 
     They know how their sorrows will be extinguished by the trembling hands held aloft towards Almighty.   
    </Typography>
    </Box>
    <Box sx={{mb:1}}>
    <Typography paragraph={true} variant="body1" component="body1">
    WE REQUEST YOU TO VISIT US, BE PART WITH US AND OUR OPTIMSITIC JOURNEY AHEAD AND,
     ABOVE ALL, IMMERSE YOURSELF IN OUR PRAYERS, ESPECIALLY THE WEEKLY SALATH MAJLIS (A VENUE EXTOLLING THE MESSENGER).
    </Typography>
    </Box>
    <Box sx={{mb:1}}>
        <Typography paragraph={true} variant="body1" component="body1">
        WMO conducts visits too. Various programmes conducted at Gulf countries are meant for delivering the message and mission of WMO to its beneficiaries and well-wishers.
        Through such programmes, named snehasamghamam (Confluence of Love), WMO aims to spread itself out beyond all geographical boundaries and beyond our outward physiques to the very core of humanity: Our HEART. 
        </Typography>
       </Box>
    
    </Container>
  );
}
