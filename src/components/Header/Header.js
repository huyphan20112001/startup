import "./Header.scss";
import React, { useEffect, useState } from "react";
import { menuItems } from "../../constants/constants";
import MenuMobile from "../MenuMobile/MenuMobile";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";

function Header() {
  const [active, setActive] = useState(1);
  const [offSet, setOffSet] = useState(0);
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    const onScroll = () => setOffSet(window.pageYOffset);

    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    menuItems.forEach((item) => {
      const itemScrollNav = document.querySelector(`${item.link}`);
      if (offSet < document.querySelector(`#features`).offsetTop - 1) {
        setActive(1);
      } else if (
        offSet >= itemScrollNav.offsetTop - 25 &&
        offSet <= itemScrollNav.offsetTop + itemScrollNav.offsetHeight
      ) {
        setActive(item.id);
      }
    });
  }, [offSet]);

  // const handleHideNav = () => {
  //   setShowNav(!showNav);
  //   showNav
  //   ? (document.body.style.overflow = "hidden")
  //   : (document.body.style.overflow = "");
  //   // document.body.style.overflow = "";
  // };

  const handleShowNav = () => {
    setShowNav(!showNav);
  };

  const handleClick = () => {
    alert("clicked!");
  };

  const handleActive = (id) => {
    setShowNav(false);
    setActive(id);
  };

  const handleBackToTop = () => {
    // setOffSet(0);
    window.scrollTo(0, 0);
  };

  return (
    <>
      <div
        className={`back-to-top ${offSet > 0 ? "show" : ""} `}
        onClick={handleBackToTop}
      >
        <div className="arrow-up"></div>
      </div>
      <div
        className={`overlay ${showNav ? "open" : ""}`}
        onClick={handleShowNav}
      ></div>
      <div className={`header-navbar ${showNav ? "open" : ""}`}>
        <div className="navbar-close" onClick={handleShowNav}>
          <FontAwesomeIcon icon={faClose} size={"2x"} />
        </div>
        <div className="wrapper-navbar-list">
          <div className="navbar-list">
            {menuItems.map((item) => (
              <MenuMobile
                key={item.id}
                data={item}
                active={active}
                onClick={() => {
                  handleActive(item.id);
                }}
              />
            ))}
          </div>
          <div className="social-list">
            <a href="#" className="social-item">
              <i class="fa-brands fa-facebook"></i>
            </a>
            <a href="#" className="social-item">
              <i class="fa-brands fa-twitter"></i>
            </a>
            <a href="#" className="social-item">
              <i class="fa-brands fa-github-alt"></i>
            </a>
            <a href="#" className="social-item">
              <i class="fa-brands fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
      <header className={`header ${offSet >= 50 ? "sticky" : ""}`} id="header">
        <div className="container">
          <div className="wrapper-header">
            <div className="header-logo">
              <h3>Startup Landing</h3>
            </div>
            <nav className="menu-list">
              {menuItems.map((item) => (
                <a
                  key={item.id}
                  onClick={() => handleActive(item.id)}
                  href={item.link}
                  className={`menu-list-item ${
                    active === item.id ? "active" : ""
                  }`}
                >
                  {item.name}
                </a>
              ))}
            </nav>
            <button className="btn-get-start" onClick={handleClick}>
              Get Started
            </button>
            <div className="header-menu-mobile" onClick={handleShowNav}>
              <FontAwesomeIcon icon={faBars} size="2x" className="menu-icon" />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
