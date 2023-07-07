import { FC } from "react";

import rollToTop from "../../../assets/icons/design-elements/RollToTop.svg";
import "./style.scss";

const RollToTopButton: FC = () => {
  const scrollToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  return (
    <div className="roll-to-top" onClick={scrollToTop}>
      <div>
        <img src={rollToTop} alt="Roll to top button" />
      </div>
    </div>
  );
};

export default RollToTopButton;
