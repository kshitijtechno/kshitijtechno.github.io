import { Container, Paper, Typography } from '@mui/material';
import './App.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import profilePic1 from './images/homepagebanner1.jpg';
import profilePic2 from './images/homepagebanner2.jpg';
import profilePic3 from './images/homepagebanner3.jpeg';
import profilePic4 from './images/logo-no-bg.png'
import MyDialog from './MyDialog';
import { useEffect, useState } from 'react';
import config from './config';
import TrackPageAnalytics from './TrackPageAnalytics';
import ClientComment from './ClientComment';
import {
  Grid,
} from '@mui/material';


const Home = () => {
  const [dialogOpen, setDialogOpen] = useState(false); 
      useEffect(() => {
        setDialogOpen(config.home_showDialog);
        
      }, []);



      const handleClose = () => {

        setDialogOpen(false);
      };
     

      const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
      };
  return (
    <div>
      <div>
      <TrackPageAnalytics pagename="Home"/>
        <MyDialog
        open={dialogOpen}
        title={config.home_dialog_title}
        content={config.home_dialog_content}
        handleClose={handleClose}
        />
      </div>
      <div className="slider-container">
    <Slider {...sliderSettings}>
      <div>
        <img src={profilePic1} alt="Slideshow 1" />
      </div>
      <div>
        <img src={profilePic2} alt="Slideshow 2" />
      </div>
      <div>
        <img src={profilePic3} alt="Slideshow 3" />
      </div>
      <div>
        <img src={profilePic4} alt="Slideshow 4" />
      </div>
      </Slider>
      </div>
    <Container maxWidth="lg" sx={{ marginTop: 4 }}>
        
      <Paper elevation={2} sx={{ padding: 3, borderRadius: 4 }}>
        <Typography variant="h4" gutterBottom>
            <div className="aboutus">
            <header>
    <h1><center>Kshitij Techno - Your Gateway to Innovative Solutions!</center></h1>
  </header>
  <section>
    <p>
      Are you a student looking for minor or major project? or company seeking a cutting-edge web presence, or an educational institution eager to embrace digital transformation? Look no further! Kshitij Techno, is a group of highly technical software developers, ready to bring your visions to life. From crafting unique and efficient solutions for students' minor and major projects to elevating companies and educational institutions through tailor-made web applications, We thrive on turning ideas into reality.
    </p>
    <p>
      Let's embark on a journey of innovation together, where your aspirations meet exceptional digital solutions. Explore the possibilities with Kshitij Techno and redefine what's possible in the world of software development!
    </p>
  </section>
  <strong>Services Offered</strong>
  <ol>
    <li>Training on SAP Commerce Development or SAP Hybris</li>
    <li>Training on Java</li>
    <li>Training on Springboot</li>
    <li>Training on ReactJs</li>
    <li>End to end industry ready software development training</li>
    <li>Training on development tools</li>
    <li>Minor/Major project creation for Computer Science Students</li>
    <li>Website creation</li>
    <li>Website creation for schools and colleges</li>
    <li>Web application creation for your business</li>    
    <li>Software Developer Career guidance</li>
    <li>Portfolio creation</li>
  </ol>
            </div>
       
        </Typography>
      </Paper> 
   
    </Container>
    <Grid container spacing={2}>
        <Grid item xs={1}>          
        </Grid>        
        <Grid item xs={10}>
            <ClientComment />
        </Grid>
    </Grid>
    
    
    
    
    </div>
  );
};

export default Home;
