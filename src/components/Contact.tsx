import React from 'react';
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import '../assets/styles/Contact.scss';

function Contact() {
  const cvUrl = `${process.env.PUBLIC_URL}/Abhishek_Thakur_CV.pdf`;

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <p className="contact-kicker">Let&apos;s build something useful</p>
          <h1>Open to Opportunities &amp; Technical Collaboration</h1>
          <p>
            I am interested in robotics, mechatronics, embedded systems, intelligent
            automation, and research-driven engineering roles. If you have an
            opportunity or a technically ambitious idea, I would be glad to hear from you.
          </p>

          <div className="contact-actions">
            <a className="contact-primary" href="mailto:abhisheksthakur85@gmail.com">
              <EmailIcon /> Email Me
            </a>
            <a className="contact-secondary" href={cvUrl} download="Abhishek_Thakur_CV.pdf">
              <DownloadIcon /> Download CV
            </a>
          </div>

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
