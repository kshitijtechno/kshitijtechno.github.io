import { Container, Paper, Typography } from '@mui/material';
import profilePic from './images/introme1.jpeg';
import './App.css';

const Home = () => {
    function toggleFullScreen() {
        const image = document.getElementById('fullscreenImage');
        image.classList.toggle('fullscreen');
      }
  return (
    
    <Container maxWidth="lg" sx={{ marginTop: 4 }}>
        
      <Paper elevation={2} sx={{ padding: 3, borderRadius: 4 }}>
        <Typography variant="h4" gutterBottom>
            <div className="aboutus">
            <header>
    <h1>Welcome to Kshitij Techno - Your Gateway to Innovative Solutions!</h1>
  </header>
  <section>
    <p>
      Are you a student looking for minor or major project, or company seeking a cutting-edge web presence, or an educational institution eager to embrace digital transformation? Look no further! Kshitij Techno, is a group of highly technical software developers, ready to bring your visions to life. From crafting unique and efficient solutions for students' minor and major projects to elevating companies and educational institutions through tailor-made web applications, We thrive on turning ideas into reality.
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
    <li>Webapplication creation</li>
    <li>Software Developer Career guidance</li>
  </ol>
            </div>


            <div><center>
            <img src={profilePic} id="fullscreenImage" alt="Kshitij Wardhan Ahirwar" height="150" onClick={toggleFullScreen}/></center></div>
            <div className="introBody">

  <p>Greetings! I'm <strong>Kshitij Wardhan Ahirwar</strong>, a seasoned software developer with a passion for
    transforming ideas into powerful and innovative solutions. With a wealth of experience in the ever-evolving tech
    landscape, I bring a unique blend of creativity and technical expertise to every project.</p>
  <ol>
    <li><strong>Expertise:</strong> Backed by years of hands-on experience, I've honed my skills in a diverse range of
      technologies and frameworks.</li>
    <li><strong>Innovation:</strong> I thrive on challenges and love bringing fresh perspectives to every project. Your
      vision is the starting point for a journey of innovation.</li>
    <li><strong>Collaboration:</strong> Your success is my priority. I believe in open communication, collaborative
      problem-solving, and a transparent approach throughout our partnership.</li>
    <li><strong>Results-Driven:</strong> My commitment goes beyond code. I'm dedicated to delivering solutions that not
      only meet but exceed your expectations, ensuring tangible results for your business.</li>
  </ol>
  <h2>Let's Build Something Extraordinary!</h2>
  <p>Whether you're looking to streamline your business processes, create a stunning web presence, or embark on a
    groundbreaking software project, I'm here to guide you at every step. Let's connect and explore the endless
    possibilities.</p>

  <p>Ready to transform your ideas into reality? Let's build a future together!</p>
  </div>
        </Typography>
      </Paper>
    </Container>
  );
};

export default Home;