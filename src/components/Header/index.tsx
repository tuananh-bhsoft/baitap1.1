import { useState, useEffect, FC } from "react";

import PrimaryButton from "../buttons/Primary";
import mainLogo from "../../assets/imgs/logos/MainLogo.svg";
import hamburgerMenu from "../../assets/icons/design-elements/HamburgerMenu.svg";
import close from "../../assets/icons/design-elements/Close.svg";
import "./style.scss";

const Header: FC = () => {
  const [drawerIsShown, setDrawerIsShown] = useState(false);
  const [pageIsScrolled, setPageIsScrolled] = useState(false);

  useEffect(() => {
    const header = document.querySelector(".header") as HTMLElement;
    const headerHeight = header.offsetHeight;
    const onScroll = () => {
      const scrolledHeight = window.scrollY;

      if (scrolledHeight > headerHeight) {
        setPageIsScrolled(true);
      } else {
        setPageIsScrolled(false);
      }
    };
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const toggleDrawerIsShown = () => {
    setDrawerIsShown((prevState) => {
      return !prevState;
    });
  };

  return (
    <div className={pageIsScrolled ? "header scrolled" : "header"}>
      <div className="content-wrapper">
        <img className="main-logo" src={mainLogo} alt="Main logo" />
        <div className="nav">
          <img
            className="hamburger"
            src={hamburgerMenu}
            alt="Hamburger"
            onClick={toggleDrawerIsShown}
          />
          <ul className="nav-links">
            <li className="nav-item active">
              <a href="/">Home +</a>
            </li>
            <li className="nav-item">
              <a href="/">About</a>
            </li>
            <li className="nav-item">
              <a href="/">Service</a>
            </li>
            <li className="nav-item">
              <a href="/">Gallery</a>
            </li>
            <li className="nav-item">
              <a href="/">Blog</a>
            </li>
          </ul>
          <PrimaryButton>Contact</PrimaryButton>
        </div>
      </div>

      <div className="side-drawer">
        <div
          className={drawerIsShown ? "overlay-shown" : "overlay"}
          onClick={toggleDrawerIsShown}
        ></div>
        <div
          className={drawerIsShown ? "drawer-content-shown" : "drawer-content"}
        >
          <div className="top">
            <img className="main-logo" src={mainLogo} alt="Main logo" />
            <img
              className="close"
              src={close}
              alt="Close"
              onClick={toggleDrawerIsShown}
            />
          </div>
          <ul className="side-nav-links">
            <li className="side-nav-item active">
              <a href="/">Home +</a>
            </li>
            <li className="side-nav-item">
              <a href="/">About</a>
            </li>
            <li className="side-nav-item">
              <a href="/">Service</a>
            </li>
            <li className="side-nav-item">
              <a href="/">Gallery</a>
            </li>
            <li className="side-nav-item">
              <a href="/">Blog</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
