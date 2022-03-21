import React from "react";
import "./Footer.scss";
import { images } from "../../constants";
import { AiFillPhone } from "react-icons/ai";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FiTwitter, FiInstagram, FiFacebook, FiLinkedin } from "react-icons/fi";

const Footer = () => {
  return (
    <>
      <div className="app__footer-section">
        <div className="container-footer">
          <div className="app__footer-about">
            <h3>About</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus temporibus libero deleniti nesciunt nisi maiores
              eveniet
            </p>
            <div className="social-links">
              <a href="https://www.facebook.com/imad.ainine1/">
                <FiFacebook />
              </a>
              <a href="http://www.instagram.com/imad_ainine/">
                <FiInstagram />
              </a>
              <a href="http://www.twitter.com/imad_ainine/">
                <FiTwitter />
              </a>
              <a href="http://www.linkedin.com/imad_ainine/">
                <FiLinkedin />
              </a>
            </div>
          </div>
          <div className="app__footer-links">
            <h3>Quick links</h3>

            <li>
              {" "}
              {[
                "home",
                "about",
                "work",
                "skills",
                "testimonial",
                "contact",
              ].map((item) => (
                <a key={`${item}`}>
                  <a href={`#${item}`}>{item}</a>
                  <div />
                </a>
              ))}
            </li>
          </div>
          <div className="app_footer-contact">
            <h3>Contact Us</h3>
            <li>
              <AiFillPhone /> +213-773843669
            </li>
            <li>
              <MdEmail /> imad.ainine11@gmail.com
            </li>
            <li>
              <FaMapMarkerAlt /> Cité 30 lgts ELABADIA, AINDEFLA, ALGERIA
            </li>
            <div className="app__footer-logo">
              <img src={images.logo} alt="logo" />
              <h2>DamiBlog</h2>
            </div>
          </div>
        </div>
        <p className="copy">
          2021 Copyright | All Rights Reserved <strong>DamiBlog</strong>Team
        </p>
      </div>
    </>
  );
};

export default Footer;
