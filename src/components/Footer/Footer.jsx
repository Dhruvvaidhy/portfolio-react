import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import { UilLinkedin } from '@iconscout/react-unicons'
// import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";  

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>dhruv786.oceanmtech@gmail.com</span>
        <div className="f-icons">
        <a href="https://www.instagram.com/_dhulu_786?igsh=YWJ1eHpmdmNkdThh" target="_blank" >
          <Insta color="white" size={"3rem"} />
          </a>
          <a href="https://www.linkedin.com/in/dhruv-vaidhy-4230552b7/" target="_blank" >
          <UilLinkedin color="white" size={"3rem"} />
          </a>
          <a href="https://github.com/Dhruvvaidhy" target="_blank" >
          <Gitub color="white" size={"3rem"} />
          </a>
        </div> 
      </div>
    </div>
  );
};

export default Footer;
