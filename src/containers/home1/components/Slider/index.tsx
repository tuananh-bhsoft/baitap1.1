import { FC } from "react";

import CallToActionButton from "../../../../components/buttons/CallToAction";
import frame1 from "../../../../assets/imgs/slide/Frame1.svg";
import "./style.scss";

const Slider: FC = () => {
  return (
    <div className="slider">
      <div className="slide-container">
        <div className="slide">
          <div className="slide-info">
            <p className="title">Clinic & beauty consultant</p>
            <p className="description">
              It is a long established fact that a reader will be by the
              readable content of a page.
            </p>
            <div className="more-details">
              <CallToActionButton>More Details</CallToActionButton>
            </div>
          </div>
          <div className="slide-img">
            <img src={frame1} alt="Slide" />
          </div>
        </div>
      </div>
      <div className="slide-marker">
        <div className="marker"></div>
        <div className="marker active"></div>
        <div className="marker"></div>
      </div>
    </div>
  );
};

export default Slider;
