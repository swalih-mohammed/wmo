import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Typography } from '@mui/material';
import Razopay from "./donate"
import Sidebar from '../components/sideBar';
import Fab from '@mui/material/Fab';
import img1 from '../public/banner/ban01.jpeg';
import img2 from  '../public/banner/ban02.jpeg';
import img3 from  '../public/banner/ban03.jpeg';
import beWithUs from "../public/religious1.jpeg";
import MainFeaturedPost from '../components/mainFeuturedPost';
import FeaturedPost from '../components/featuredPost';
import Main from '../components/main';
import Images from '../components/images';






const featuredPosts = [
  {
    title: 'Be with us',
    date: 'Nov 12',
    description:"You can be part of us in various ways: through your words of motivation and ideas; through the words you use to speak and write for us and our activities, through sponsoring a child; through organizing our events and buying our products.",
    image: beWithUs,
    imageLabel: 'bewithus',
  },
  {
    title: 'My Story',
    date: 'Nov 11',
    description:"ties her to her child is, despite being a biological necessity, painful. How more searing would it be for her to give up her one-and-a half-year-old baby for the simple (not that simple in the true sense of the term) reason that she can't provide for her",
    image: beWithUs,
    imageLabel: 'Image Text',
  },
];

const posts = [
  {title: "title one", des: "title tow"},
  {title: "title one", des: "title tow"}
  ];

const sidebar = {
  title: 'About',
  description:
    'Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.',
  archives: [
    { title: 'March 2020', url: '#' },
    { title: 'February 2020', url: '#' },
    { title: 'January 2020', url: '#' },
    { title: 'November 1999', url: '#' },
 
  ],
  social: [
    { name: 'GitHub', icon: GitHubIcon },
    { name: 'Twitter', icon: TwitterIcon },
    { name: 'Facebook', icon: FacebookIcon },
  ],
};

// const theme = createTheme();
const handleButtonClick = ()=>{
  const link = "https://wa.me/7207724191/"
  window.open(link, "_blank")
}

export default function Blog() {
  return (
    <>
          <MainFeaturedPost />
          <FeaturedPost />
          <Grid container spacing={5} sx={{ mt: 1}}> 
             <Main title="From the firehose" posts={posts} /> 
             <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            />
          </Grid>
          {/* <Images /> */}
          <Box sx={{ textAlign: "center", width: 50, height: 50, borderRadius: 50, position: "fixed", bottom:70, right: 15,}}>
            <Fab color="common">
              <WhatsAppIcon onClick={handleButtonClick} fontSize='large' sx={{ color: "#25d366" }} />
            </Fab>
            </Box>  
            <Box sx={{  position: "fixed", bottom:10, right: 15}}>
            <Razopay/>
            </Box>
   
    </>
  );
}