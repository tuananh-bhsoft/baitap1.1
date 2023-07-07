import { FC } from "react";

import CallToActionButton from "../../../../components/buttons/CallToAction";
import PlayButton from "../../../../components/buttons/Play";
import aboutusImg from "../../../../assets/imgs/about/unsplash_LRXYS0tSyGc.png";
import "./style.scss";

const AboutUs: FC = () => {
  return (
    <div className="about-us">
      <div className="section-info">
        <p className="section-header">About Us</p>
        <p className="section-title">We are the best beauty clinic</p>
        <p className="section-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam
          suscipit purus donec amet. Egestas volutpat facilisi eu libero. Nunc,
          ipsum ornare mauris sit quam quis enim. Varius tellus in suspendisse
          placerat. Id dui erat sed quam tellus in purus. Pellentesque congue
          fringilla cras tellus enim.
        </p>
        <div className="actions">
          <div className="learn-more">
            <CallToActionButton>Learn More</CallToActionButton>
          </div>
          <div className="watch-video">
            <PlayButton />
            <p>Watch Video</p>
          </div>
        </div>
      </div>
      <div className="section-content">
        <img src={aboutusImg} alt="About us" />
      </div>
    </div>
  );
};

export default AboutUs;
