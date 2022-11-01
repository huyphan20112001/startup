import "./Header.scss";
import React, { useEffect, useState } from "react";

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

  const menuItems = [
    {
      id: 1,
      name: "Home",
      link: "#home",
    },
    {
      id: 2,
      name: "Features",
      link: "#features",
    },
    {
      id: 3,
      name: "Testimonial",
      link: "#testimonial",
    },
    {
      id: 4,
      name: "Pricing",
      link: "#pricing",
    },
  ];

  const handleHideNav = () => {
    setShowNav(false);
    document.body.style.overflow = "";
  };

  const handleShowNav = () => {
    showNav ? setShowNav(false) : setShowNav(true);
    document.body.style.overflow = "hidden";
  };

  return (
    <>
      <div
        className={`overlay ${showNav ? "open" : ""}`}
        onClick={handleHideNav}
      ></div>
      <div className="header-navbar">
        <div className="navbar-close">
          <svg
            strokeWidth="0"
            viewBox="0 0 512 512"
            color="#000000"
            height="24px"
            width="24px"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M405 136.798L375.202 107 256 226.202 136.798 107 107 136.798 226.202 256 107 375.202 136.798 405 256 285.798 375.202 405 405 375.202 285.798 256z"></path>
          </svg>
        </div>
        <div className="navbar-list">
          {menuItems.map((item) => (
            <a
              key={item.id}
              onClick={() => setActive(item.id)}
              href={item.link}
              className={`navbar-item ${active === item.id ? "active" : ""}`}
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className="social-list">
          <a href="#" className="social-item">
            <svg
              strokeWidth="0"
              viewBox="0 0 320 512"
              height="16px"
              width="16px"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
            </svg>
          </a>
          <a href="#" className="social-item">
            <svg
              strokeWidth="0"
              viewBox="0 0 512 512"
              height="16px"
              width="16px"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
            </svg>
          </a>
          <a href="#" className="social-item">
            <svg
              strokeWidth="0"
              viewBox="0 0 480 512"
              height="16px"
              width="16px"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M186.1 328.7c0 20.9-10.9 55.1-36.7 55.1s-36.7-34.2-36.7-55.1 10.9-55.1 36.7-55.1 36.7 34.2 36.7 55.1zM480 278.2c0 31.9-3.2 65.7-17.5 95-37.9 76.6-142.1 74.8-216.7 74.8-75.8 0-186.2 2.7-225.6-74.8-14.6-29-20.2-63.1-20.2-95 0-41.9 13.9-81.5 41.5-113.6-5.2-15.8-7.7-32.4-7.7-48.8 0-21.5 4.9-32.3 14.6-51.8 45.3 0 74.3 9 108.8 36 29-6.9 58.8-10 88.7-10 27 0 54.2 2.9 80.4 9.2 34-26.7 63-35.2 107.8-35.2 9.8 19.5 14.6 30.3 14.6 51.8 0 16.4-2.6 32.7-7.7 48.2 27.5 32.4 39 72.3 39 114.2zm-64.3 50.5c0-43.9-26.7-82.6-73.5-82.6-18.9 0-37 3.4-56 6-14.9 2.3-29.8 3.2-45.1 3.2-15.2 0-30.1-.9-45.1-3.2-18.7-2.6-37-6-56-6-46.8 0-73.5 38.7-73.5 82.6 0 87.8 80.4 101.3 150.4 101.3h48.2c70.3 0 150.6-13.4 150.6-101.3zm-82.6-55.1c-25.8 0-36.7 34.2-36.7 55.1s10.9 55.1 36.7 55.1 36.7-34.2 36.7-55.1-10.9-55.1-36.7-55.1z"></path>
            </svg>
          </a>
        </div>
      </div>
      <header className={`header ${offSet >= 50 ? "sticky" : ""}`} id="header">
        <div className="container">
          <div className="wrapper-header">
            <div className="header-logo">
              <img
                src={`${
                  offSet >= 50
                    ? "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTg1LjkyIiBoZWlnaHQ9IjM2LjYyIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImIiIHgxPSIxNi4wOCIgeTE9Ii0xNi41MiIgeDI9IjEwLjI2IiB5Mj0iMjAuNDQiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiMwMDk2ZDkiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMwMGMxOTgiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0iYyIgeDE9IjguOTUiIHkxPSIxMy40OCIgeDI9IjE4LjI4IiB5Mj0iMzIuMDIiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiMwMDJkZDkiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMwMGIyYWIiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0iYSIgeDE9IjIzLjMzIiB5MT0iLTMuMzkiIHgyPSI1LjY2IiB5Mj0iMzcuNjUiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiMzNDgyYzAiLz48c3RvcCBvZmZzZXQ9Ii40NSIgc3RvcC1jb2xvcj0iIzk2YmVkZSIvPjxzdG9wIG9mZnNldD0iLjgzIiBzdG9wLWNvbG9yPSIjZTFlZGY2Ii8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjZmZmIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaWQ9ImQiIHgxPSIyMS42NCIgeTE9IjEuNDIiIHgyPSI2LjYzIiB5Mj0iMzAuNDQiIHhsaW5rOmhyZWY9IiNhIi8+PGxpbmVhckdyYWRpZW50IGlkPSJlIiB4MT0iMjUuMTUiIHkxPSIzLjI0IiB4Mj0iMTAuMTQiIHkyPSIzMi4yNSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iIzU2OWZhMSIvPjxzdG9wIG9mZnNldD0iLjM2IiBzdG9wLWNvbG9yPSIjOTdjNGM1Ii8+PHN0b3Agb2Zmc2V0PSIuOCIgc3RvcC1jb2xvcj0iI2UyZWVlZiIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2ZmZiIvPjwvbGluZWFyR3JhZGllbnQ+PHJhZGlhbEdyYWRpZW50IGlkPSJmIiBjeD0iMjEuMTYiIGN5PSIzMi4wNSIgcj0iMjcuMjUiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNmZjAiLz48c3RvcCBvZmZzZXQ9IjEiLz48L3JhZGlhbEdyYWRpZW50PjwvZGVmcz48ZyBkYXRhLW5hbWU9IkxheWVyIDIiPjxnIGRhdGEtbmFtZT0iTGF5ZXIgMSI+PHBhdGggZD0iTTM5LjY0IDIyLjloMi44NWExLjg2IDEuODYgMCAwMC45IDEuNCAzLjY3IDMuNjcgMCAwMDIgLjUzIDMuMzMgMy4zMyAwIDAwMS45LS41QTEuNSAxLjUgMCAwMDQ4IDIzYTEuMzIgMS4zMiAwIDAwLS41NC0xLjEgNC45MSA0LjkxIDAgMDAtMS44My0uNzFsLTEuODQtLjRRNDAgMjAgNDAgMTYuOWEzLjgxIDMuODEgMCAwMTEuNS0zLjEzIDYuMTQgNi4xNCAwIDAxMy44OS0xLjE5IDYuMDcgNi4wNyAwIDAxMy44OSAxLjE2IDMuODYgMy44NiAwIDAxMS41IDMuMDhINDhhMS43NyAxLjc3IDAgMDAtLjc5LTEuNCAzIDMgMCAwMC0xLjgyLS41MiAzIDMgMCAwMC0xLjc3LjQ4IDEuNDkgMS40OSAwIDAwLS42NiAxLjI2IDEuMjUgMS4yNSAwIDAwLjUzIDEuMDUgNS4yOSA1LjI5IDAgMDAxLjc3LjY4bDEuNzEuMzZBNi4xOCA2LjE4IDAgMDE1MCAyMC4xNGEzLjQyIDMuNDIgMCAwMTEgMi41NiAzLjkzIDMuOTMgMCAwMS0xLjU1IDMuMyA2LjYzIDYuNjMgMCAwMS00LjE3IDEuMiA2LjY1IDYuNjUgMCAwMS00LjA2LTEuMiAzLjkgMy45IDAgMDEtMS41OC0zLjF6TTUzLjMzIDE0aDIuODV2Mi40MmgxLjkzdjIuMThoLTEuOTN2NWMwIC43OC40MSAxLjE4IDEuMjMgMS4xOGE0LjQ0IDQuNDQgMCAwMC42OS0uMDV2Mi4xYTYuMTIgNi4xMiAwIDAxLTEuMzYuMTEgNC4xIDQuMSAwIDAxLTIuNjMtLjY2IDIuNzQgMi43NCAwIDAxLS43OC0yLjJWMTguNmgtMS40OHYtMi4xNWgxLjQ4em0xMC4yOSAxMWEyLjM5IDIuMzkgMCAwMDEuNi0uNTUgMS43NCAxLjc0IDAgMDAuNjYtMS4zOXYtLjc2bC0yLjIuMTNhMi4zIDIuMyAwIDAwLTEuMjQuNCAxLjA5IDEuMDkgMCAwMC0uNDMuOSAxLjEgMS4xIDAgMDAuNDQuOTMgMS44MyAxLjgzIDAgMDAxLjE3LjM0em0tLjk0IDIuMDZhMy42IDMuNiAwIDAxLTIuNTEtLjg5IDIuOTIgMi45MiAwIDAxLTEtMi4yOCAyLjY4IDIuNjggMCAwMTEtMi4yNCA1LjQzIDUuNDMgMCAwMTMtLjkzbDIuNjMtLjE1di0uN2ExLjQgMS40IDAgMDAtLjQ3LTEuMTMgMS45MSAxLjkxIDAgMDAtMS4yOC0uNDEgMi4yIDIuMiAwIDAwLTEuMjguMzUgMS40NCAxLjQ0IDAgMDAtLjYuOTVoLTIuNTNBMy4yMSAzLjIxIDAgMDE2MSAxNy4xN2E1LjMxIDUuMzEgMCAwMTMuMjktMSA1LjA1IDUuMDUgMCAwMTMuMjMgMSAzLjA5IDMuMDkgMCAwMTEuMjEgMi41NHY3LjJoLTIuOHYtMS42aC0uMDZhMy4wOCAzLjA4IDAgMDEtMS4zIDEuMyAzLjg5IDMuODkgMCAwMS0xLjg5LjQ3em03Ljg1LS4xNlYxNi40NWgyLjc2djEuODhoLjA2YTIuODYgMi44NiAwIDAxLjkxLTEuNTIgMi40MyAyLjQzIDAgMDExLjU4LS41MyAyLjg4IDIuODggMCAwMS44MS4xMXYyLjUxYTIuNzkgMi43OSAwIDAwLTEtLjE3IDIuMTYgMi4xNiAwIDAwLTEuNjQuNjIgMi4zOSAyLjM5IDAgMDAtLjU5IDEuNzJ2NS44NXptOC0xMi44OWgyLjg1djIuNDJoMS45NHYyLjE3aC0xLjg5djVjMCAuNzguNDEgMS4xOCAxLjIzIDEuMThhNC42OCA0LjY4IDAgMDAuNy0uMDV2Mi4xQTYuMjQgNi4yNCAwIDAxODIgMjdhNC4xNSA0LjE1IDAgMDEtMi42NC0uNjYgMi43NCAyLjc0IDAgMDEtLjc4LTIuMlYxOC42aC0xLjQ3di0yLjE1aDEuNDd6bTE2IDIuNDJ2MTAuNDloLTIuNjlWMjVoLS4wNmEzLjA3IDMuMDcgMCAwMS0zLjEzIDIuMDggMy43MSAzLjcxIDAgMDEtMi43NS0xIDQgNCAwIDAxLTEtMi44N3YtNi43NmgyLjg1djYuMTVhMi4yOCAyLjI4IDAgMDAuNSAxLjU5IDEuODYgMS44NiAwIDAwMS40NS41NSAxLjkgMS45IDAgMDAxLjUxLS42MyAyLjQgMi40IDAgMDAuNTUtMS42N3YtNnptOC0uMTdhMy43OSAzLjc5IDAgMDEzLjE0IDEuNDQgNi4xNCA2LjE0IDAgMDExLjE1IDQgNi4zMyA2LjMzIDAgMDEtMS4xMyA0IDQuMSA0LjEgMCAwMS01LjA5LjkyIDMuMTUgMy4xNSAwIDAxLTEuMjctMS40MWgtLjAzdjUuMTdoLTIuODVWMTYuNDVoMi44MXYxLjgyaC4wNmEzLjM1IDMuMzUgMCAwMTEuMjctMS40NiAzLjcgMy43IDAgMDExLjk3LS41M3ptLTEgOC41MWEyIDIgMCAwMDEuNzctLjc3IDMuNzEgMy43MSAwIDAwLjYzLTIuMjcgMy42NyAzLjY3IDAgMDAtLjYzLTIuMjYgMiAyIDAgMDAtMS42OS0uODUgMiAyIDAgMDAtMS42OC44NiAzLjYgMy42IDAgMDAtLjY0IDIuMjUgMy43MyAzLjczIDAgMDAuNjMgMi4yNyAyIDIgMCAwMDEuNjkuNzl6bTIyLjA3LS4zMnYyLjQ1aC05LjExVjEyLjgyaDN2MTEuNjV6bTUuNTUuNTVhMi4zOSAyLjM5IDAgMDAxLjYtLjU1IDEuNzQgMS43NCAwIDAwLjY2LTEuMzl2LS43NmwtMi4yLjEzYTIuMyAyLjMgMCAwMC0xLjI0LjQgMS4wOSAxLjA5IDAgMDAtLjQzLjkgMS4xIDEuMSAwIDAwLjQ0LjkzIDEuODMgMS44MyAwIDAwMS4yNS4zNHptLS45NCAyLjA2YTMuNTkgMy41OSAwIDAxLTIuNTEtLjg5IDIuOTIgMi45MiAwIDAxLTEtMi4yOCAyLjY4IDIuNjggMCAwMTEtMi4yNCA1LjQzIDUuNDMgMCAwMTMtLjkzbDIuNjMtLjE1di0uN2ExLjQzIDEuNDMgMCAwMC0uNDctMS4xMyAxLjkxIDEuOTEgMCAwMC0xLjI4LS40MSAyLjE4IDIuMTggMCAwMC0xLjI4LjM1IDEuNDQgMS40NCAwIDAwLS42Ljk1aC0yLjYxYTMuMjEgMy4yMSAwIDAxMS4zMi0yLjQ4IDUuMzEgNS4zMSAwIDAxMy4yOS0xIDUuMDcgNS4wNyAwIDAxMy4yMyAxIDMuMDkgMy4wOSAwIDAxMS4yMSAyLjU0djcuMmgtMi43NnYtMS41OGgtLjA2YTMuMDggMy4wOCAwIDAxLTEuMyAxLjMgMy44OSAzLjg5IDAgMDEtMS43My40N3ptNy44NS0uMTZWMTYuNDVoMi43NnYxLjg2aC4xOGEzLjI2IDMuMjYgMCAwMTEuMjUtMS41MiAzLjYgMy42IDAgMDEyLS41NCAzLjQ2IDMuNDYgMCAwMTIuNjggMSA0LjEyIDQuMTIgMCAwMTEgMi44OHY2Ljc1SDE0M3YtNi4xMmEyLjMxIDIuMzEgMCAwMC0uNDktMS41OSAxLjgzIDEuODMgMCAwMC0xLjQ0LS41NSAyIDIgMCAwMC0xLjUyLjYzIDIuMzkgMi4zOSAwIDAwLS41NyAxLjY2djZ6bTE1LjQxLjE2YTMuNzUgMy43NSAwIDAxLTMuMTEtMS40NSA2LjIxIDYuMjEgMCAwMS0xLjE1LTQgNi4xMSA2LjExIDAgMDExLjE1LTMuOTMgMy43OSAzLjc5IDAgMDEzLjEzLTEuNDUgMy41MyAzLjUzIDAgMDEyIC41NCAzLjE3IDMuMTcgMCAwMTEuMjUgMS40MnYtNS4zN2gyLjg2djE0LjFoLTIuODJ2LTEuOGgtLjA1YTMuMDkgMy4wOSAwIDAxLTEuMjYgMS40MiAzLjY3IDMuNjcgMCAwMS0xLjkyLjU0em0xLTguNTFhMiAyIDAgMDAtMS43Ljg0IDMuNzUgMy43NSAwIDAwLS42MSAyLjI3IDMuNzYgMy43NiAwIDAwLjYxIDIuMjggMi4xNSAyLjE1IDAgMDAzLjM5IDAgMy43MiAzLjcyIDAgMDAuNjMtMi4yOCAzLjY3IDMuNjcgMCAwMC0uNjMtMi4yNiAyIDIgMCAwMC0xLjY0LS44M3ptNy4xMSA4LjM1VjE2LjQ1aDIuODV2MTAuNDd6bTIuNTEtMTIuMDVhMS41MiAxLjUyIDAgMDEtMS4wOS40MiAxLjQ5IDEuNDkgMCAwMS0xLjA4LS40MiAxLjQ0IDEuNDQgMCAwMS0uNDQtMSAxLjM4IDEuMzggMCAwMS40NC0xIDEuNDYgMS40NiAwIDAxMS4wOC0uNDMgMS40OSAxLjQ5IDAgMDExLjA5LjQzIDEuMzggMS4zOCAwIDAxLjQ0IDEgMS40NCAxLjQ0IDAgMDEtLjM5IDEuMDJ6bTIuMjQgMTIuMDVWMTYuNDVoMi43NnYxLjg2aC4wNmEzLjI2IDMuMjYgMCAwMTEuMjUtMS41MiAzLjYgMy42IDAgMDEyLS41NCAzLjQ0IDMuNDQgMCAwMTIuNjggMSA0LjA3IDQuMDcgMCAwMS45NSAyLjg4djYuNzVoLTIuODV2LTYuMTJhMi4zMSAyLjMxIDAgMDAtLjQ5LTEuNTkgMS43OSAxLjc5IDAgMDAtMS40My0uNTUgMiAyIDAgMDAtMS41My42MyAyLjQzIDIuNDMgMCAwMC0uNTYgMS42NnY2em0xNi4zNi0yLjIzYTIuMDUgMi4wNSAwIDAwMS43LS44IDMuNDggMy40OCAwIDAwLjY0LTIuMjMgMy42IDMuNiAwIDAwLS42NC0yLjI1IDIgMiAwIDAwLTEuNy0uODQgMiAyIDAgMDAtMS42OC44NCAzLjY5IDMuNjkgMCAwMC0uNjEgMi4yNSAzLjYgMy42IDAgMDAuNjEgMi4yMyAyIDIgMCAwMDEuNzMuODJ6bS0uMDUgNi4xN2E1Ljg0IDUuODQgMCAwMS0zLjM2LS45IDMuMTkgMy4xOSAwIDAxLTEuNDgtMi4zaDIuNzlhMS41NCAxLjU0IDAgMDAuNzQuODggMi44IDIuOCAwIDAwMS4zOS4zNCAyLjQxIDIuNDEgMCAwMDEuNjktLjU2IDEuODUgMS44NSAwIDAwLjYxLTEuNDdWMjVIMTgzYTMgMyAwIDAxLTEuMjQgMS4zNyAzLjg5IDMuODkgMCAwMS0yIC41MSAzLjggMy44IDAgMDEtMy4wOS0xLjQxIDUuODggNS44OCAwIDAxLTEuMTUtMy44NCA2LjA2IDYuMDYgMCAwMTEuMTUtMy45MiAzLjgyIDMuODIgMCAwMTMuMTQtMS40NCAzLjU5IDMuNTkgMCAwMTIgLjU0IDMuMzcgMy4zNyAwIDAxMS4yNyAxLjQ1di0xLjgxaDIuODJ2MTAuMzJhMy41OCAzLjU4IDAgMDEtMS40NCAzIDYgNiAwIDAxLTMuNzcgMS4wOXoiIGZpbGw9IiMwZjIxMzciLz48cGF0aCBkPSJNMTkuOC41M0ExNS43MyAxNS43MyAwIDAwNC42NSAyNi44OUwyMi4xNyA5LjM3QTUuMjkgNS4yOSAwIDAwMTkuOC41M3oiIGZpbGw9InVybCgjYikiLz48cGF0aCBkPSJNNi42NSAzNi4wOUExNS43MyAxNS43MyAwIDAwMjEuODEgOS43M0w0LjI5IDI3LjI1YTUuMjggNS4yOCAwIDAwMi4zNiA4Ljg0eiIgZmlsbD0idXJsKCNjKSIvPjxwYXRoIGQ9Ik0yMS44MSA5LjczTDQuMjkgMjcuMjVhNS4yOCA1LjI4IDAgMDAyLjM2IDguODQgMTUuNzIgMTUuNzIgMCAwMDUuNzUuNDRjLTcuNjgtNy4zOSA5LjQxLTI2LjggOS40MS0yNi44eiIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOm11bHRpcGx5IiBmaWxsPSJ1cmwoI2EpIi8+PGcgc3R5bGU9Im1peC1ibGVuZC1tb2RlOm11bHRpcGx5Ij48cGF0aCBkPSJNNi4zMyAzNmMtMi40OS03LjcgMTIuNDUtMjMuMjEgMTUuMDktMjUuODdMNC4yOSAyNy4yNUE1LjI4IDUuMjggMCAwMDYuMzMgMzZ6IiBmaWxsPSJ1cmwoI2QpIi8+PHBhdGggZD0iTTIxLjc1IDkuNzlsLjA2LS4wNnoiIGZpbGw9InVybCgjZSkiLz48L2c+PHBhdGggZD0iTTIzLjQ1IDcuMjlMNC42NCAyNi44OCAyMi4xNyA5LjM3YTUuMTQgNS4xNCAwIDAwMS4yOC0yLjA4eiIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOnNjcmVlbiIgZmlsbD0idXJsKCNmKSIvPjwvZz48L2c+PC9zdmc+"
                    : "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTg1LjkyIiBoZWlnaHQ9IjM2LjYyIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImIiIHgxPSIxNi4wOCIgeTE9Ii0xNi41MiIgeDI9IjEwLjI2IiB5Mj0iMjAuNDQiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiMwMDk2ZDkiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMwMGMxOTgiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0iYyIgeDE9IjguOTUiIHkxPSIxMy40OCIgeDI9IjE4LjI4IiB5Mj0iMzIuMDIiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiMwMDJkZDkiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMwMGIyYWIiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0iYSIgeDE9IjIzLjMzIiB5MT0iLTMuMzkiIHgyPSI1LjY2IiB5Mj0iMzcuNjUiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiMzNDgyYzAiLz48c3RvcCBvZmZzZXQ9Ii40NSIgc3RvcC1jb2xvcj0iIzk2YmVkZSIvPjxzdG9wIG9mZnNldD0iLjgzIiBzdG9wLWNvbG9yPSIjZTFlZGY2Ii8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjZmZmIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaWQ9ImQiIHgxPSIyMS42NCIgeTE9IjEuNDIiIHgyPSI2LjYzIiB5Mj0iMzAuNDQiIHhsaW5rOmhyZWY9IiNhIi8+PGxpbmVhckdyYWRpZW50IGlkPSJlIiB4MT0iMjUuMTUiIHkxPSIzLjI0IiB4Mj0iMTAuMTQiIHkyPSIzMi4yNSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iIzU2OWZhMSIvPjxzdG9wIG9mZnNldD0iLjM2IiBzdG9wLWNvbG9yPSIjOTdjNGM1Ii8+PHN0b3Agb2Zmc2V0PSIuOCIgc3RvcC1jb2xvcj0iI2UyZWVlZiIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2ZmZiIvPjwvbGluZWFyR3JhZGllbnQ+PHJhZGlhbEdyYWRpZW50IGlkPSJmIiBjeD0iMjEuMTYiIGN5PSIzMi4wNSIgcj0iMjcuMjUiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNmZjAiLz48c3RvcCBvZmZzZXQ9IjEiLz48L3JhZGlhbEdyYWRpZW50PjwvZGVmcz48ZyBkYXRhLW5hbWU9IkxheWVyIDIiPjxnIGRhdGEtbmFtZT0iTGF5ZXIgMSI+PHBhdGggZD0iTTM5LjY0IDIyLjloMi44NWExLjg2IDEuODYgMCAwMC45IDEuNCAzLjY3IDMuNjcgMCAwMDIgLjUzIDMuMzMgMy4zMyAwIDAwMS45LS41QTEuNSAxLjUgMCAwMDQ4IDIzYTEuMzIgMS4zMiAwIDAwLS41NC0xLjEgNC45MSA0LjkxIDAgMDAtMS44My0uNzFsLTEuODQtLjRRNDAgMjAgNDAgMTYuOWEzLjgxIDMuODEgMCAwMTEuNS0zLjEzIDYuMTQgNi4xNCAwIDAxMy44OS0xLjE5IDYuMDcgNi4wNyAwIDAxMy44OSAxLjE2IDMuODYgMy44NiAwIDAxMS41IDMuMDhINDhhMS43NyAxLjc3IDAgMDAtLjc5LTEuNCAzIDMgMCAwMC0xLjgyLS41MiAzIDMgMCAwMC0xLjc3LjQ4IDEuNDkgMS40OSAwIDAwLS42NiAxLjI2IDEuMjUgMS4yNSAwIDAwLjUzIDEuMDUgNS4yOSA1LjI5IDAgMDAxLjc3LjY4bDEuNzEuMzZBNi4xOCA2LjE4IDAgMDE1MCAyMC4xNGEzLjQyIDMuNDIgMCAwMTEgMi41NiAzLjkzIDMuOTMgMCAwMS0xLjU1IDMuMyA2LjYzIDYuNjMgMCAwMS00LjE3IDEuMiA2LjY1IDYuNjUgMCAwMS00LjA2LTEuMiAzLjkgMy45IDAgMDEtMS41OC0zLjF6TTUzLjMzIDE0aDIuODV2Mi40MmgxLjkzdjIuMThoLTEuOTN2NWMwIC43OC40MSAxLjE4IDEuMjMgMS4xOGE0LjQ0IDQuNDQgMCAwMC42OS0uMDV2Mi4xYTYuMTIgNi4xMiAwIDAxLTEuMzYuMTEgNC4xIDQuMSAwIDAxLTIuNjMtLjY2IDIuNzQgMi43NCAwIDAxLS43OC0yLjJWMTguNmgtMS40OHYtMi4xNWgxLjQ4em0xMC4yOSAxMWEyLjM5IDIuMzkgMCAwMDEuNi0uNTUgMS43NCAxLjc0IDAgMDAuNjYtMS4zOXYtLjc2bC0yLjIuMTNhMi4zIDIuMyAwIDAwLTEuMjQuNCAxLjA5IDEuMDkgMCAwMC0uNDMuOSAxLjEgMS4xIDAgMDAuNDQuOTMgMS44MyAxLjgzIDAgMDAxLjE3LjM0em0tLjk0IDIuMDZhMy42IDMuNiAwIDAxLTIuNTEtLjg5IDIuOTIgMi45MiAwIDAxLTEtMi4yOCAyLjY4IDIuNjggMCAwMTEtMi4yNCA1LjQzIDUuNDMgMCAwMTMtLjkzbDIuNjMtLjE1di0uN2ExLjQgMS40IDAgMDAtLjQ3LTEuMTMgMS45MSAxLjkxIDAgMDAtMS4yOC0uNDEgMi4yIDIuMiAwIDAwLTEuMjguMzUgMS40NCAxLjQ0IDAgMDAtLjYuOTVoLTIuNTNBMy4yMSAzLjIxIDAgMDE2MSAxNy4xN2E1LjMxIDUuMzEgMCAwMTMuMjktMSA1LjA1IDUuMDUgMCAwMTMuMjMgMSAzLjA5IDMuMDkgMCAwMTEuMjEgMi41NHY3LjJoLTIuOHYtMS42aC0uMDZhMy4wOCAzLjA4IDAgMDEtMS4zIDEuMyAzLjg5IDMuODkgMCAwMS0xLjg5LjQ3em03Ljg1LS4xNlYxNi40NWgyLjc2djEuODhoLjA2YTIuODYgMi44NiAwIDAxLjkxLTEuNTIgMi40MyAyLjQzIDAgMDExLjU4LS41MyAyLjg4IDIuODggMCAwMS44MS4xMXYyLjUxYTIuNzkgMi43OSAwIDAwLTEtLjE3IDIuMTYgMi4xNiAwIDAwLTEuNjQuNjIgMi4zOSAyLjM5IDAgMDAtLjU5IDEuNzJ2NS44NXptOC0xMi44OWgyLjg1djIuNDJoMS45NHYyLjE3aC0xLjg5djVjMCAuNzguNDEgMS4xOCAxLjIzIDEuMThhNC42OCA0LjY4IDAgMDAuNy0uMDV2Mi4xQTYuMjQgNi4yNCAwIDAxODIgMjdhNC4xNSA0LjE1IDAgMDEtMi42NC0uNjYgMi43NCAyLjc0IDAgMDEtLjc4LTIuMlYxOC42aC0xLjQ3di0yLjE1aDEuNDd6bTE2IDIuNDJ2MTAuNDloLTIuNjlWMjVoLS4wNmEzLjA3IDMuMDcgMCAwMS0zLjEzIDIuMDggMy43MSAzLjcxIDAgMDEtMi43NS0xIDQgNCAwIDAxLTEtMi44N3YtNi43NmgyLjg1djYuMTVhMi4yOCAyLjI4IDAgMDAuNSAxLjU5IDEuODYgMS44NiAwIDAwMS40NS41NSAxLjkgMS45IDAgMDAxLjUxLS42MyAyLjQgMi40IDAgMDAuNTUtMS42N3YtNnptOC0uMTdhMy43OSAzLjc5IDAgMDEzLjE0IDEuNDQgNi4xNCA2LjE0IDAgMDExLjE1IDQgNi4zMyA2LjMzIDAgMDEtMS4xMyA0IDQuMSA0LjEgMCAwMS01LjA5LjkyIDMuMTUgMy4xNSAwIDAxLTEuMjctMS40MWgtLjAzdjUuMTdoLTIuODVWMTYuNDVoMi44MXYxLjgyaC4wNmEzLjM1IDMuMzUgMCAwMTEuMjctMS40NiAzLjcgMy43IDAgMDExLjk3LS41M3ptLTEgOC41MWEyIDIgMCAwMDEuNzctLjc3IDMuNzEgMy43MSAwIDAwLjYzLTIuMjcgMy42NyAzLjY3IDAgMDAtLjYzLTIuMjYgMiAyIDAgMDAtMS42OS0uODUgMiAyIDAgMDAtMS42OC44NiAzLjYgMy42IDAgMDAtLjY0IDIuMjUgMy43MyAzLjczIDAgMDAuNjMgMi4yNyAyIDIgMCAwMDEuNjkuNzl6bTIyLjA3LS4zMnYyLjQ1aC05LjExVjEyLjgyaDN2MTEuNjV6bTUuNTUuNTVhMi4zOSAyLjM5IDAgMDAxLjYtLjU1IDEuNzQgMS43NCAwIDAwLjY2LTEuMzl2LS43NmwtMi4yLjEzYTIuMyAyLjMgMCAwMC0xLjI0LjQgMS4wOSAxLjA5IDAgMDAtLjQzLjkgMS4xIDEuMSAwIDAwLjQ0LjkzIDEuODMgMS44MyAwIDAwMS4yNS4zNHptLS45NCAyLjA2YTMuNTkgMy41OSAwIDAxLTIuNTEtLjg5IDIuOTIgMi45MiAwIDAxLTEtMi4yOCAyLjY4IDIuNjggMCAwMTEtMi4yNCA1LjQzIDUuNDMgMCAwMTMtLjkzbDIuNjMtLjE1di0uN2ExLjQzIDEuNDMgMCAwMC0uNDctMS4xMyAxLjkxIDEuOTEgMCAwMC0xLjI4LS40MSAyLjE4IDIuMTggMCAwMC0xLjI4LjM1IDEuNDQgMS40NCAwIDAwLS42Ljk1aC0yLjYxYTMuMjEgMy4yMSAwIDAxMS4zMi0yLjQ4IDUuMzEgNS4zMSAwIDAxMy4yOS0xIDUuMDcgNS4wNyAwIDAxMy4yMyAxIDMuMDkgMy4wOSAwIDAxMS4yMSAyLjU0djcuMmgtMi43NnYtMS41OGgtLjA2YTMuMDggMy4wOCAwIDAxLTEuMyAxLjMgMy44OSAzLjg5IDAgMDEtMS43My40N3ptNy44NS0uMTZWMTYuNDVoMi43NnYxLjg2aC4xOGEzLjI2IDMuMjYgMCAwMTEuMjUtMS41MiAzLjYgMy42IDAgMDEyLS41NCAzLjQ2IDMuNDYgMCAwMTIuNjggMSA0LjEyIDQuMTIgMCAwMTEgMi44OHY2Ljc1SDE0M3YtNi4xMmEyLjMxIDIuMzEgMCAwMC0uNDktMS41OSAxLjgzIDEuODMgMCAwMC0xLjQ0LS41NSAyIDIgMCAwMC0xLjUyLjYzIDIuMzkgMi4zOSAwIDAwLS41NyAxLjY2djZ6bTE1LjQxLjE2YTMuNzUgMy43NSAwIDAxLTMuMTEtMS40NSA2LjIxIDYuMjEgMCAwMS0xLjE1LTQgNi4xMSA2LjExIDAgMDExLjE1LTMuOTMgMy43OSAzLjc5IDAgMDEzLjEzLTEuNDUgMy41MyAzLjUzIDAgMDEyIC41NCAzLjE3IDMuMTcgMCAwMTEuMjUgMS40MnYtNS4zN2gyLjg2djE0LjFoLTIuODJ2LTEuOGgtLjA1YTMuMDkgMy4wOSAwIDAxLTEuMjYgMS40MiAzLjY3IDMuNjcgMCAwMS0xLjkyLjU0em0xLTguNTFhMiAyIDAgMDAtMS43Ljg0IDMuNzUgMy43NSAwIDAwLS42MSAyLjI3IDMuNzYgMy43NiAwIDAwLjYxIDIuMjggMi4xNSAyLjE1IDAgMDAzLjM5IDAgMy43MiAzLjcyIDAgMDAuNjMtMi4yOCAzLjY3IDMuNjcgMCAwMC0uNjMtMi4yNiAyIDIgMCAwMC0xLjY0LS44M3ptNy4xMSA4LjM1VjE2LjQ1aDIuODV2MTAuNDd6bTIuNTEtMTIuMDVhMS41MiAxLjUyIDAgMDEtMS4wOS40MiAxLjQ5IDEuNDkgMCAwMS0xLjA4LS40MiAxLjQ0IDEuNDQgMCAwMS0uNDQtMSAxLjM4IDEuMzggMCAwMS40NC0xIDEuNDYgMS40NiAwIDAxMS4wOC0uNDMgMS40OSAxLjQ5IDAgMDExLjA5LjQzIDEuMzggMS4zOCAwIDAxLjQ0IDEgMS40NCAxLjQ0IDAgMDEtLjM5IDEuMDJ6bTIuMjQgMTIuMDVWMTYuNDVoMi43NnYxLjg2aC4wNmEzLjI2IDMuMjYgMCAwMTEuMjUtMS41MiAzLjYgMy42IDAgMDEyLS41NCAzLjQ0IDMuNDQgMCAwMTIuNjggMSA0LjA3IDQuMDcgMCAwMS45NSAyLjg4djYuNzVoLTIuODV2LTYuMTJhMi4zMSAyLjMxIDAgMDAtLjQ5LTEuNTkgMS43OSAxLjc5IDAgMDAtMS40My0uNTUgMiAyIDAgMDAtMS41My42MyAyLjQzIDIuNDMgMCAwMC0uNTYgMS42NnY2em0xNi4zNi0yLjIzYTIuMDUgMi4wNSAwIDAwMS43LS44IDMuNDggMy40OCAwIDAwLjY0LTIuMjMgMy42IDMuNiAwIDAwLS42NC0yLjI1IDIgMiAwIDAwLTEuNy0uODQgMiAyIDAgMDAtMS42OC44NCAzLjY5IDMuNjkgMCAwMC0uNjEgMi4yNSAzLjYgMy42IDAgMDAuNjEgMi4yMyAyIDIgMCAwMDEuNzMuODJ6bS0uMDUgNi4xN2E1Ljg0IDUuODQgMCAwMS0zLjM2LS45IDMuMTkgMy4xOSAwIDAxLTEuNDgtMi4zaDIuNzlhMS41NCAxLjU0IDAgMDAuNzQuODggMi44IDIuOCAwIDAwMS4zOS4zNCAyLjQxIDIuNDEgMCAwMDEuNjktLjU2IDEuODUgMS44NSAwIDAwLjYxLTEuNDdWMjVIMTgzYTMgMyAwIDAxLTEuMjQgMS4zNyAzLjg5IDMuODkgMCAwMS0yIC41MSAzLjggMy44IDAgMDEtMy4wOS0xLjQxIDUuODggNS44OCAwIDAxLTEuMTUtMy44NCA2LjA2IDYuMDYgMCAwMTEuMTUtMy45MiAzLjgyIDMuODIgMCAwMTMuMTQtMS40NCAzLjU5IDMuNTkgMCAwMTIgLjU0IDMuMzcgMy4zNyAwIDAxMS4yNyAxLjQ1di0xLjgxaDIuODJ2MTAuMzJhMy41OCAzLjU4IDAgMDEtMS40NCAzIDYgNiAwIDAxLTMuNzcgMS4wOXoiIGZpbGw9IiNmZmYiLz48cGF0aCBkPSJNMTkuOC41M0ExNS43MyAxNS43MyAwIDAwNC42NSAyNi44OUwyMi4xNyA5LjM3QTUuMjkgNS4yOSAwIDAwMTkuOC41M3oiIGZpbGw9InVybCgjYikiLz48cGF0aCBkPSJNNi42NSAzNi4wOUExNS43MyAxNS43MyAwIDAwMjEuODEgOS43M0w0LjI5IDI3LjI1YTUuMjggNS4yOCAwIDAwMi4zNiA4Ljg0eiIgZmlsbD0idXJsKCNjKSIvPjxwYXRoIGQ9Ik0yMS44MSA5LjczTDQuMjkgMjcuMjVhNS4yOCA1LjI4IDAgMDAyLjM2IDguODQgMTUuNzIgMTUuNzIgMCAwMDUuNzUuNDRjLTcuNjgtNy4zOSA5LjQxLTI2LjggOS40MS0yNi44eiIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOm11bHRpcGx5IiBmaWxsPSJ1cmwoI2EpIi8+PGcgc3R5bGU9Im1peC1ibGVuZC1tb2RlOm11bHRpcGx5Ij48cGF0aCBkPSJNNi4zMyAzNmMtMi40OS03LjcgMTIuNDUtMjMuMjEgMTUuMDktMjUuODdMNC4yOSAyNy4yNUE1LjI4IDUuMjggMCAwMDYuMzMgMzZ6IiBmaWxsPSJ1cmwoI2QpIi8+PHBhdGggZD0iTTIxLjc1IDkuNzlsLjA2LS4wNnoiIGZpbGw9InVybCgjZSkiLz48L2c+PHBhdGggZD0iTTIzLjQ1IDcuMjlMNC42NCAyNi44OCAyMi4xNyA5LjM3YTUuMTQgNS4xNCAwIDAwMS4yOC0yLjA4eiIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOnNjcmVlbiIgZmlsbD0idXJsKCNmKSIvPjwvZz48L2c+PC9zdmc+"
                }`}
                alt="startup landing logo"
                width="186"
                height="37"
                className="logo"
              ></img>
            </div>
            <nav className="menu-list">
              {menuItems.map((item) => (
                <a
                  key={item.id}
                  onClick={() => setActive(item.id)}
                  href={item.link}
                  className={`menu-list-item ${
                    active === item.id ? "active" : ""
                  }`}
                >
                  {item.name}
                </a>
              ))}
            </nav>
            <button className="btn-get-start">Get Started</button>
            <div className="header-menu-mobile" onClick={handleShowNav}>
              <svg
                strokeWidth="0"
                viewBox="0 0 512 512"
                height="26px"
                width="26px"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M64 384h384v-42.666H64V384zm0-106.666h384v-42.667H64v42.667zM64 128v42.665h384V128H64z"></path>
              </svg>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
