import { FC, useEffect, useState } from "react";

import RollToTopButton from "../buttons/RollToTop";
import footerLogo from "../../assets/imgs/logos/FooterLogo.svg";
import facebookLight from "../../assets/icons/socials/FacebookLight.svg";
import twitterLight from "../../assets/icons/socials/TwitterLight.svg";
import linkedinLight from "../../assets/icons/socials/LinkedinLight.svg";
import youtubeLight from "../../assets/icons/socials/YoutubeLight.svg";
import instaLight from "../../assets/icons/socials/InstagramLight.svg";
import "./style.scss";

const Footer: FC = () => {
  const [rollToTopIsShown, setRollToTopIsShown] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (
        document.body.scrollTop > 300 ||
        document.documentElement.scrollTop > 300
      ) {
        setRollToTopIsShown(true);
      } else {
        setRollToTopIsShown(false);
      }
    };
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div className="footer">
      <div className="content-wrapper">
        <div className="footer-info">
          <div className="authorship">
            <img src={footerLogo} alt="Footer logo" />
            <p>
              <span>Beautice</span> is a Beauty Clinic WordPress Theme.
            </p>
            <div className="info">
              <p>Baker Steet 101, NY, United States.</p>
              <div className="contact-info">
                <p>+521 569 8966.</p>
                <p>mail@company.com.</p>
              </div>
            </div>
          </div>
          <div className="site-doc">
            <div className="sitemap">
              <p className="list-header">Pages</p>
              <ul className="list">
                <li className="list-item">Home</li>
                <li className="list-item">About</li>
                <li className="list-item">Services</li>
                <li className="list-item">Gallery</li>
                <li className="list-item">Team</li>
              </ul>
            </div>
            <div className="documents">
              <p className="list-header">Informations</p>
              <ul className="list">
                <li className="list-item">Terms & Conditions</li>
                <li className="list-item">Privacy policy</li>
                <li className="list-item">Blog</li>
                <li className="list-item">Contact</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-socials">
          <div className="social-links">
            <img src={facebookLight} alt="Facebook" />
            <img src={twitterLight} alt="Twitter" />
            <img src={linkedinLight} alt="Linkedin" />
            <img src={youtubeLight} alt="Youtube" />
            <img src={instaLight} alt="Instagram" />
          </div>
          <p className="copyright">
            © AltDesain Studio 2021 - All right reserved.
          </p>
        </div>
      </div>
      {rollToTopIsShown && <RollToTopButton />}
    </div>
  );
};

export default Footer;
