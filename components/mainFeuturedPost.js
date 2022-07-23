import * as React from 'react';
import PropTypes from 'prop-types';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { height , width} from '@mui/system';
import img1 from '../public/banner/ban01.jpeg';
import img2 from  '../public/banner/ban02.jpeg';
import img3 from  '../public/banner/ban03.jpeg';

const mainHeight = height * 0.3 
const mainWidth = width * 0.9



function MainFeaturedPost(props) {

  return (
    <>
    
    <Paper
      sx={{
        position: 'relative',
        backgroundColor: 'grey.800',
        backgroundColor: 'black',
        color: '#fff',
        mb: 1,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        
      }}
    >
         <Carousel autoPlay={true} infiniteLoop={true}>

        <div>
        <Image height={mainHeight} width={mainWidth}  src={img1}/>
        </div>
        <div>
        <Image src={img2}/>
        </div>
        <div>
        <Image src={img3}/>
        </div>
        </Carousel>
      
    </Paper>

    </>
  );
}

MainFeaturedPost.propTypes = {
  post: PropTypes.shape({
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    imageText: PropTypes.string.isRequired,
    linkText: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default MainFeaturedPost;