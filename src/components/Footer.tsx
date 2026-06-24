import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/Abhi-creator1" target="_blank" rel="noreferrer" aria-label="Abhishek's GitHub profile"><GitHubIcon/></a>
        <a href="https://www.linkedin.com/in/abhishek-thakur85/" target="_blank" rel="noreferrer" aria-label="Abhishek's LinkedIn profile"><LinkedInIcon/></a>
      </div>
      <p>Designed &amp; built by <a href="https://github.com/Abhi-creator1" target="_blank" rel="noreferrer">Abhishek Thakur</a>.</p>
    </footer>
  );
}

export default Footer;
