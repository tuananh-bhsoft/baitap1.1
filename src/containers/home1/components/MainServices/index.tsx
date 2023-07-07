import { FC } from "react";

import animation1 from "../../../../assets/imgs/service/Animation1.svg";
import animation2 from "../../../../assets/imgs/service/Animation2.svg";
import animation3 from "../../../../assets/imgs/service/Animation3.svg";
import "./style.scss";

const MainServices: FC = () => {
  return (
    <div className="main-services">
      <div className="section-info">
        <p className="section-header">Main Services</p>
        <p className="section-title">Learn services to focus on your beauty</p>
        <p className="section-description">
          Porta rhoncus orci condimentum vitae lobortis eu dignissim non massa.
          Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla
          turpis.
        </p>
      </div>
      <div className="section-content">
        <div className="service-card">
          <img src={animation1} alt="Card" />
          <div className="card-info">
            <p className="card-title">Beauty consultation</p>
            <p className="card-description">
              Non parturient amet, feugiat tellus sagittis, scelerisque eget
              nulla turpis.
            </p>
          </div>
        </div>
        <div className="service-card">
          <img src={animation2} alt="Card" />
          <div className="card-info">
            <p className="card-title">Skin treatments</p>
            <p className="card-description">
              Non parturient amet, feugiat tellus sagittis, scelerisque eget
              nulla turpis.
            </p>
          </div>
        </div>
        <div className="service-card">
          <img src={animation3} alt="Card" />
          <div className="card-info">
            <p className="card-title">Beauty product</p>
            <p className="card-description">
              Non parturient amet, feugiat tellus sagittis, scelerisque eget
              nulla turpis.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainServices;
