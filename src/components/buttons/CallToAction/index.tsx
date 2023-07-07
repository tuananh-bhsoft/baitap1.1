import { FC, ReactNode } from "react";

import "./style.scss";

interface Props {
  children: ReactNode;
}

const CallToActionButton: FC<Props> = ({ children }) => {
  return <button className="cta-button">{children}</button>;
};

export default CallToActionButton;
