import { FC } from "react";

import professor1 from "../../../../assets/imgs/professional/unsplash_pTrhfmj2jDA.png";
import professor2 from "../../../../assets/imgs/professional/unsplash_FVh_yqLR9eA.png";
import professor3 from "../../../../assets/imgs/professional/unsplash_mEZ3PoFGs_k.png";
import twitter from "../../../../assets/icons/socials/Twitter.svg";
import facebook from "../../../../assets/icons/socials/Facebook.svg";
import insta from "../../../../assets/icons/socials/Instagram.svg";
import "./style.scss";

const ProfessionalTeams: FC = () => {
  return (
    <div className="professional-teams">
      <div className="section-info">
        <p className="section-header">Professional Teams</p>
        <p className="section-title">The Professional Expert</p>
        <p className="section-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.
        </p>
      </div>
      <div className="section-content">
        <div className="expert-card">
          <img src={professor1} alt="Card" />
          <div className="card-info">
            <p className="card-header">Surgeon</p>
            <p className="card-title">Briyan Nevalli</p>
            <p className="card-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit
            </p>
            <div className="social-links">
              <div className="social-icon">
                <img src={twitter} alt="Twitter" />
              </div>
              <div className="social-icon">
                <img src={facebook} alt="Facebook" />
              </div>
              <div className="social-icon">
                <img src={insta} alt="Instagram" />
              </div>
            </div>
          </div>
        </div>
        <div className="expert-card">
          <img src={professor2} alt="Card" />
          <div className="card-info">
            <p className="card-header">Dermatologist</p>
            <p className="card-title">Bella Sebastian</p>
            <p className="card-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit
            </p>
            <div className="social-links">
              <div className="social-icon">
                <img src={twitter} alt="Twitter" />
              </div>
              <div className="social-icon">
                <img src={facebook} alt="Facebook" />
              </div>
              <div className="social-icon">
                <img src={insta} alt="Instagram" />
              </div>
            </div>
          </div>
        </div>
        <div className="expert-card">
          <img src={professor3} alt="Card" />
          <div className="card-info">
            <p className="card-header">Stylist expert</p>
            <p className="card-title">Lilly Adams</p>
            <p className="card-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit
            </p>
            <div className="social-links">
              <div className="social-icon">
                <img src={twitter} alt="Twitter" />
              </div>
              <div className="social-icon">
                <img src={facebook} alt="Facebook" />
              </div>
              <div className="social-icon">
                <img src={insta} alt="Instagram" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalTeams;
