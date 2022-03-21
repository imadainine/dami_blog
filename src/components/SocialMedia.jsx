import React from "react";
import { FiTwitter, FiInstagram, FiFacebook } from "react-icons/fi";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div className="">
        <a href="https://www.facebook.com/imad.ainine1/">
          <FiFacebook />
        </a>
      </div>
      <div className="">
        <a href="http://www.instagram.com/imad_ainine/">
          <FiInstagram />
        </a>
      </div>
      <div className="">
        <a href="http://www.twitter.com/imad_ainine/">
          <FiTwitter />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
