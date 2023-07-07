import { FC } from "react";

import playIcon from "../../../assets/icons/design-elements/PolygonPlay.svg";
import "./style.scss";

const PlayButton: FC = () => {
  return (
    <div className="play-button">
      <img src={playIcon} alt="Play button" />
    </div>
  );
};

export default PlayButton;
