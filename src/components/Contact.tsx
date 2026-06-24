import React from 'react';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import '../assets/styles/Contact.scss';

function Contact() {
  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Let's Connect</h1>
          <p>
            I am open to robotics, mechatronics, embedded systems, and intelligent
            automation opportunities, as well as interesting technical collaborations.
          </p>
          <div className="contact-links">
            <a href="mailto:abhisheksthakur85@gmail.com">
              <EmailIcon /> abhisheksthakur85@gmail.com
            </a>
            <a href="https://www.linkedin.com/in/abhishek-thakur85/" target="_blank" rel="noreferrer">
              <LinkedInIcon /> LinkedIn
            </a>
            <a href="https://github.com/Abhi-creator1" target="_blank" rel="noreferrer">
              <GitHubIcon /> GitHub
            </a>
            <span>
              <LocationOnIcon /> Stuttgart, Germany
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
