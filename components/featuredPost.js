import * as React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Link from '@mui/material/Link';

import Image from "next/image";
import img1 from '../public/banner/ban01.jpeg';
import img2 from  '../public/banner/ban02.jpeg';
import img3 from  '../public/banner/ban03.jpeg';
import beWithUs from "../public/religious1.jpeg";

import Paper from '@mui/material/Paper';
import { height , width} from '@mui/system';


const mainHeight = height * 0.3 
const mainWidth = width * 0.9


function FeaturedPost(props) {

  return (
    <Box sx={{p: 2 , backgroundColor: "#d8e2dc"}}>
    <Grid container spacing={2}>
      
      <Grid item gap={1} sx={12} md={3}>
      <Typography variant="h6" sx={{mb: 2, color: "primary.text.primary"}}>{"Be with us"}</Typography>
        <Typography>"You can be part of us in various ways: through your words of motivation and ideas; through the words you use to speak and write for us and our activities, through sponsoring a child; through organizing our events and buying our products.",
</Typography>
<Link underline="hover" href="/about">
             continue ...
        </Link>
      </Grid>
      <Grid item  gap={1}  sx={12} md={3}>
      <Paper
      sx={{
        position: 'relative',
        backgroundColor: 'grey.800',
        // backgroundColor: 'white',
        // color: '#fff',
        // mb: 1,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        // backgroundImage: `url(${beWithUs})`,
        // backgroundImage:  `url(${beWithUs})`,
        minHeight: 260
        
      }}
    >
        <Image src={beWithUs} layout="fill"/>
    

        </Paper>
    
      </Grid>
      <Grid item gap={1}  sx={12} md={3}>
      <Typography variant="h6" sx={{mb: 2, color: "primary.text.primary"}}>{"My Story"}</Typography>
        <Typography>ties her to her child is, despite being a biological necessity, painful. How more searing would it be for her to give up her one-and-a half-year-old baby for the simple (not that simple in the true sense of the term) reason that she can't provide for her",
</Typography>
<Link underline="hover" href="/about">
             continue ...
        </Link>
      </Grid>
      <Grid item  gap={1}  sx={12} md={3}>
      <Paper
      sx={{
        position: 'relative',
        backgroundColor: 'grey.800',
        backgroundColor: 'white',
        color: '#fff',
        mb: 1,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        minHeight: 260
        
      }}
    >
        <Image src={beWithUs} layout="fill"/>
        </Paper>
      </Grid>
      
    </Grid>
    </Box>
  );
}



export default FeaturedPost;