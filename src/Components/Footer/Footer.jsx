import React from "react";
import "./Footer.css";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaQuora } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { IoMdStopwatch } from "react-icons/io";
import { PiTrainFill } from "react-icons/pi";

const Footer = () => {
  
  return (
    <>
    <footer className="footer_container">
      <div className="F_elem_1">
        <span className="F_heading_elem">Contact Us</span>
        <p className="F_subheading_elem">
          Address: amet, consetetur sadipscing elitr, sed diam Email id: eirmod
          tempor invidunt ut labore et dolore Phone no: 123456789
        </p>
      </div>
      <div className="F_elem_2">
        <span className="F_heading_elem">Follow Us</span>
        <div className="logos">
          <FaFacebookF color="white"  size={20} />
          <FaLinkedin color="white" size={20} />
          <FaInstagram color="white" size={20} />
          <FaTwitter color="white" size={20} />
          <FaYoutube color="white" size={20} />
          <FaQuora color="white" size={20} />
        </div>
      </div>
      <div className="F_elem_3">
        <span className="F_heading_elem">Head Office</span>
        <span className="F_subheading_elem">
          <ul>
            <li>
              <IoLocationSharp  size={20}/> 
              Lorem ipsum dolor sit amet consectetur.
            </li>
            <li>
              <IoMdStopwatch size={20}/>
              Lorem ipsum dolor sit amet consectetur.
            </li>
            <li>
              <IoMdStopwatch size={20}/>
              Lorem ipsum dolor sit amet consectetur.
            </li>
            <li>
              <PiTrainFill size={20}/>
              Lorem ipsum dolor sit amet consectetur.
            </li>
          </ul>
        </span>
      </div>
    </footer>
    <div className="the_end">
        <p> © 2021 All Rights Reserved. Privacy Policy </p>
    </div>
    </>
  );
};

export default Footer;
