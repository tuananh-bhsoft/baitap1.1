import { FC, ReactNode } from "react";

import "./style.scss";

interface Props {
  children: ReactNode;
}

const PrimaryButton: FC<Props> = ({ children }) => {
  return <button className="primary-button">{children}</button>;
};

export default PrimaryButton;
