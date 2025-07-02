import React from 'react';
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export const Contact = () => {
  return (
    <>
      <div className="container contact" id='contact'>
        <h1>CONTACT ME</h1>
        <div className="contact-icon"
        data-aos="zoom-in-up"
        data-aos-duration="1000"
        >
          <div className="items">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="icons" />
            </a>
          </div>
          <div className="items">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <CiFacebook className="icons" />
            </a>
          </div>
          <div className="items">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <CiLinkedin className="icons" />
            </a>
          </div>
          <div className="items">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaSquareXTwitter className="icons" />
            </a>
          </div>
          <div className="items">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <FaGithubSquare className="icons" />
            </a>
          </div>
          <div className="items">
            <a href="mailto:dipanshujangid87@gmail.com">
              <SiGmail className="icons" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
