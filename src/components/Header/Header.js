import "./Header.scss";
import React from "react";

function Header() {
  return (
    <header className="header" id="header">
      <div className="header-logo">
        <img
          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTg1LjkyIiBoZWlnaHQ9IjM2LjYyIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImIiIHgxPSIxNi4wOCIgeTE9Ii0xNi41MiIgeDI9IjEwLjI2IiB5Mj0iMjAuNDQiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiMwMDk2ZDkiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMwMGMxOTgiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0iYyIgeDE9IjguOTUiIHkxPSIxMy40OCIgeDI9IjE4LjI4IiB5Mj0iMzIuMDIiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiMwMDJkZDkiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMwMGIyYWIiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0iYSIgeDE9IjIzLjMzIiB5MT0iLTMuMzkiIHgyPSI1LjY2IiB5Mj0iMzcuNjUiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiMzNDgyYzAiLz48c3RvcCBvZmZzZXQ9Ii40NSIgc3RvcC1jb2xvcj0iIzk2YmVkZSIvPjxzdG9wIG9mZnNldD0iLjgzIiBzdG9wLWNvbG9yPSIjZTFlZGY2Ii8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjZmZmIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaWQ9ImQiIHgxPSIyMS42NCIgeTE9IjEuNDIiIHgyPSI2LjYzIiB5Mj0iMzAuNDQiIHhsaW5rOmhyZWY9IiNhIi8+PGxpbmVhckdyYWRpZW50IGlkPSJlIiB4MT0iMjUuMTUiIHkxPSIzLjI0IiB4Mj0iMTAuMTQiIHkyPSIzMi4yNSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iIzU2OWZhMSIvPjxzdG9wIG9mZnNldD0iLjM2IiBzdG9wLWNvbG9yPSIjOTdjNGM1Ii8+PHN0b3Agb2Zmc2V0PSIuOCIgc3RvcC1jb2xvcj0iI2UyZWVlZiIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2ZmZiIvPjwvbGluZWFyR3JhZGllbnQ+PHJhZGlhbEdyYWRpZW50IGlkPSJmIiBjeD0iMjEuMTYiIGN5PSIzMi4wNSIgcj0iMjcuMjUiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNmZjAiLz48c3RvcCBvZmZzZXQ9IjEiLz48L3JhZGlhbEdyYWRpZW50PjwvZGVmcz48ZyBkYXRhLW5hbWU9IkxheWVyIDIiPjxnIGRhdGEtbmFtZT0iTGF5ZXIgMSI+PHBhdGggZD0iTTM5LjY0IDIyLjloMi44NWExLjg2IDEuODYgMCAwMC45IDEuNCAzLjY3IDMuNjcgMCAwMDIgLjUzIDMuMzMgMy4zMyAwIDAwMS45LS41QTEuNSAxLjUgMCAwMDQ4IDIzYTEuMzIgMS4zMiAwIDAwLS41NC0xLjEgNC45MSA0LjkxIDAgMDAtMS44My0uNzFsLTEuODQtLjRRNDAgMjAgNDAgMTYuOWEzLjgxIDMuODEgMCAwMTEuNS0zLjEzIDYuMTQgNi4xNCAwIDAxMy44OS0xLjE5IDYuMDcgNi4wNyAwIDAxMy44OSAxLjE2IDMuODYgMy44NiAwIDAxMS41IDMuMDhINDhhMS43NyAxLjc3IDAgMDAtLjc5LTEuNCAzIDMgMCAwMC0xLjgyLS41MiAzIDMgMCAwMC0xLjc3LjQ4IDEuNDkgMS40OSAwIDAwLS42NiAxLjI2IDEuMjUgMS4yNSAwIDAwLjUzIDEuMDUgNS4yOSA1LjI5IDAgMDAxLjc3LjY4bDEuNzEuMzZBNi4xOCA2LjE4IDAgMDE1MCAyMC4xNGEzLjQyIDMuNDIgMCAwMTEgMi41NiAzLjkzIDMuOTMgMCAwMS0xLjU1IDMuMyA2LjYzIDYuNjMgMCAwMS00LjE3IDEuMiA2LjY1IDYuNjUgMCAwMS00LjA2LTEuMiAzLjkgMy45IDAgMDEtMS41OC0zLjF6TTUzLjMzIDE0aDIuODV2Mi40MmgxLjkzdjIuMThoLTEuOTN2NWMwIC43OC40MSAxLjE4IDEuMjMgMS4xOGE0LjQ0IDQuNDQgMCAwMC42OS0uMDV2Mi4xYTYuMTIgNi4xMiAwIDAxLTEuMzYuMTEgNC4xIDQuMSAwIDAxLTIuNjMtLjY2IDIuNzQgMi43NCAwIDAxLS43OC0yLjJWMTguNmgtMS40OHYtMi4xNWgxLjQ4em0xMC4yOSAxMWEyLjM5IDIuMzkgMCAwMDEuNi0uNTUgMS43NCAxLjc0IDAgMDAuNjYtMS4zOXYtLjc2bC0yLjIuMTNhMi4zIDIuMyAwIDAwLTEuMjQuNCAxLjA5IDEuMDkgMCAwMC0uNDMuOSAxLjEgMS4xIDAgMDAuNDQuOTMgMS44MyAxLjgzIDAgMDAxLjE3LjM0em0tLjk0IDIuMDZhMy42IDMuNiAwIDAxLTIuNTEtLjg5IDIuOTIgMi45MiAwIDAxLTEtMi4yOCAyLjY4IDIuNjggMCAwMTEtMi4yNCA1LjQzIDUuNDMgMCAwMTMtLjkzbDIuNjMtLjE1di0uN2ExLjQgMS40IDAgMDAtLjQ3LTEuMTMgMS45MSAxLjkxIDAgMDAtMS4yOC0uNDEgMi4yIDIuMiAwIDAwLTEuMjguMzUgMS40NCAxLjQ0IDAgMDAtLjYuOTVoLTIuNTNBMy4yMSAzLjIxIDAgMDE2MSAxNy4xN2E1LjMxIDUuMzEgMCAwMTMuMjktMSA1LjA1IDUuMDUgMCAwMTMuMjMgMSAzLjA5IDMuMDkgMCAwMTEuMjEgMi41NHY3LjJoLTIuOHYtMS42aC0uMDZhMy4wOCAzLjA4IDAgMDEtMS4zIDEuMyAzLjg5IDMuODkgMCAwMS0xLjg5LjQ3em03Ljg1LS4xNlYxNi40NWgyLjc2djEuODhoLjA2YTIuODYgMi44NiAwIDAxLjkxLTEuNTIgMi40MyAyLjQzIDAgMDExLjU4LS41MyAyLjg4IDIuODggMCAwMS44MS4xMXYyLjUxYTIuNzkgMi43OSAwIDAwLTEtLjE3IDIuMTYgMi4xNiAwIDAwLTEuNjQuNjIgMi4zOSAyLjM5IDAgMDAtLjU5IDEuNzJ2NS44NXptOC0xMi44OWgyLjg1djIuNDJoMS45NHYyLjE3aC0xLjg5djVjMCAuNzguNDEgMS4xOCAxLjIzIDEuMThhNC42OCA0LjY4IDAgMDAuNy0uMDV2Mi4xQTYuMjQgNi4yNCAwIDAxODIgMjdhNC4xNSA0LjE1IDAgMDEtMi42NC0uNjYgMi43NCAyLjc0IDAgMDEtLjc4LTIuMlYxOC42aC0xLjQ3di0yLjE1aDEuNDd6bTE2IDIuNDJ2MTAuNDloLTIuNjlWMjVoLS4wNmEzLjA3IDMuMDcgMCAwMS0zLjEzIDIuMDggMy43MSAzLjcxIDAgMDEtMi43NS0xIDQgNCAwIDAxLTEtMi44N3YtNi43NmgyLjg1djYuMTVhMi4yOCAyLjI4IDAgMDAuNSAxLjU5IDEuODYgMS44NiAwIDAwMS40NS41NSAxLjkgMS45IDAgMDAxLjUxLS42MyAyLjQgMi40IDAgMDAuNTUtMS42N3YtNnptOC0uMTdhMy43OSAzLjc5IDAgMDEzLjE0IDEuNDQgNi4xNCA2LjE0IDAgMDExLjE1IDQgNi4zMyA2LjMzIDAgMDEtMS4xMyA0IDQuMSA0LjEgMCAwMS01LjA5LjkyIDMuMTUgMy4xNSAwIDAxLTEuMjctMS40MWgtLjAzdjUuMTdoLTIuODVWMTYuNDVoMi44MXYxLjgyaC4wNmEzLjM1IDMuMzUgMCAwMTEuMjctMS40NiAzLjcgMy43IDAgMDExLjk3LS41M3ptLTEgOC41MWEyIDIgMCAwMDEuNzctLjc3IDMuNzEgMy43MSAwIDAwLjYzLTIuMjcgMy42NyAzLjY3IDAgMDAtLjYzLTIuMjYgMiAyIDAgMDAtMS42OS0uODUgMiAyIDAgMDAtMS42OC44NiAzLjYgMy42IDAgMDAtLjY0IDIuMjUgMy43MyAzLjczIDAgMDAuNjMgMi4yNyAyIDIgMCAwMDEuNjkuNzl6bTIyLjA3LS4zMnYyLjQ1aC05LjExVjEyLjgyaDN2MTEuNjV6bTUuNTUuNTVhMi4zOSAyLjM5IDAgMDAxLjYtLjU1IDEuNzQgMS43NCAwIDAwLjY2LTEuMzl2LS43NmwtMi4yLjEzYTIuMyAyLjMgMCAwMC0xLjI0LjQgMS4wOSAxLjA5IDAgMDAtLjQzLjkgMS4xIDEuMSAwIDAwLjQ0LjkzIDEuODMgMS44MyAwIDAwMS4yNS4zNHptLS45NCAyLjA2YTMuNTkgMy41OSAwIDAxLTIuNTEtLjg5IDIuOTIgMi45MiAwIDAxLTEtMi4yOCAyLjY4IDIuNjggMCAwMTEtMi4yNCA1LjQzIDUuNDMgMCAwMTMtLjkzbDIuNjMtLjE1di0uN2ExLjQzIDEuNDMgMCAwMC0uNDctMS4xMyAxLjkxIDEuOTEgMCAwMC0xLjI4LS40MSAyLjE4IDIuMTggMCAwMC0xLjI4LjM1IDEuNDQgMS40NCAwIDAwLS42Ljk1aC0yLjYxYTMuMjEgMy4yMSAwIDAxMS4zMi0yLjQ4IDUuMzEgNS4zMSAwIDAxMy4yOS0xIDUuMDcgNS4wNyAwIDAxMy4yMyAxIDMuMDkgMy4wOSAwIDAxMS4yMSAyLjU0djcuMmgtMi43NnYtMS41OGgtLjA2YTMuMDggMy4wOCAwIDAxLTEuMyAxLjMgMy44OSAzLjg5IDAgMDEtMS43My40N3ptNy44NS0uMTZWMTYuNDVoMi43NnYxLjg2aC4xOGEzLjI2IDMuMjYgMCAwMTEuMjUtMS41MiAzLjYgMy42IDAgMDEyLS41NCAzLjQ2IDMuNDYgMCAwMTIuNjggMSA0LjEyIDQuMTIgMCAwMTEgMi44OHY2Ljc1SDE0M3YtNi4xMmEyLjMxIDIuMzEgMCAwMC0uNDktMS41OSAxLjgzIDEuODMgMCAwMC0xLjQ0LS41NSAyIDIgMCAwMC0xLjUyLjYzIDIuMzkgMi4zOSAwIDAwLS41NyAxLjY2djZ6bTE1LjQxLjE2YTMuNzUgMy43NSAwIDAxLTMuMTEtMS40NSA2LjIxIDYuMjEgMCAwMS0xLjE1LTQgNi4xMSA2LjExIDAgMDExLjE1LTMuOTMgMy43OSAzLjc5IDAgMDEzLjEzLTEuNDUgMy41MyAzLjUzIDAgMDEyIC41NCAzLjE3IDMuMTcgMCAwMTEuMjUgMS40MnYtNS4zN2gyLjg2djE0LjFoLTIuODJ2LTEuOGgtLjA1YTMuMDkgMy4wOSAwIDAxLTEuMjYgMS40MiAzLjY3IDMuNjcgMCAwMS0xLjkyLjU0em0xLTguNTFhMiAyIDAgMDAtMS43Ljg0IDMuNzUgMy43NSAwIDAwLS42MSAyLjI3IDMuNzYgMy43NiAwIDAwLjYxIDIuMjggMi4xNSAyLjE1IDAgMDAzLjM5IDAgMy43MiAzLjcyIDAgMDAuNjMtMi4yOCAzLjY3IDMuNjcgMCAwMC0uNjMtMi4yNiAyIDIgMCAwMC0xLjY0LS44M3ptNy4xMSA4LjM1VjE2LjQ1aDIuODV2MTAuNDd6bTIuNTEtMTIuMDVhMS41MiAxLjUyIDAgMDEtMS4wOS40MiAxLjQ5IDEuNDkgMCAwMS0xLjA4LS40MiAxLjQ0IDEuNDQgMCAwMS0uNDQtMSAxLjM4IDEuMzggMCAwMS40NC0xIDEuNDYgMS40NiAwIDAxMS4wOC0uNDMgMS40OSAxLjQ5IDAgMDExLjA5LjQzIDEuMzggMS4zOCAwIDAxLjQ0IDEgMS40NCAxLjQ0IDAgMDEtLjM5IDEuMDJ6bTIuMjQgMTIuMDVWMTYuNDVoMi43NnYxLjg2aC4wNmEzLjI2IDMuMjYgMCAwMTEuMjUtMS41MiAzLjYgMy42IDAgMDEyLS41NCAzLjQ0IDMuNDQgMCAwMTIuNjggMSA0LjA3IDQuMDcgMCAwMS45NSAyLjg4djYuNzVoLTIuODV2LTYuMTJhMi4zMSAyLjMxIDAgMDAtLjQ5LTEuNTkgMS43OSAxLjc5IDAgMDAtMS40My0uNTUgMiAyIDAgMDAtMS41My42MyAyLjQzIDIuNDMgMCAwMC0uNTYgMS42NnY2em0xNi4zNi0yLjIzYTIuMDUgMi4wNSAwIDAwMS43LS44IDMuNDggMy40OCAwIDAwLjY0LTIuMjMgMy42IDMuNiAwIDAwLS42NC0yLjI1IDIgMiAwIDAwLTEuNy0uODQgMiAyIDAgMDAtMS42OC44NCAzLjY5IDMuNjkgMCAwMC0uNjEgMi4yNSAzLjYgMy42IDAgMDAuNjEgMi4yMyAyIDIgMCAwMDEuNzMuODJ6bS0uMDUgNi4xN2E1Ljg0IDUuODQgMCAwMS0zLjM2LS45IDMuMTkgMy4xOSAwIDAxLTEuNDgtMi4zaDIuNzlhMS41NCAxLjU0IDAgMDAuNzQuODggMi44IDIuOCAwIDAwMS4zOS4zNCAyLjQxIDIuNDEgMCAwMDEuNjktLjU2IDEuODUgMS44NSAwIDAwLjYxLTEuNDdWMjVIMTgzYTMgMyAwIDAxLTEuMjQgMS4zNyAzLjg5IDMuODkgMCAwMS0yIC41MSAzLjggMy44IDAgMDEtMy4wOS0xLjQxIDUuODggNS44OCAwIDAxLTEuMTUtMy44NCA2LjA2IDYuMDYgMCAwMTEuMTUtMy45MiAzLjgyIDMuODIgMCAwMTMuMTQtMS40NCAzLjU5IDMuNTkgMCAwMTIgLjU0IDMuMzcgMy4zNyAwIDAxMS4yNyAxLjQ1di0xLjgxaDIuODJ2MTAuMzJhMy41OCAzLjU4IDAgMDEtMS40NCAzIDYgNiAwIDAxLTMuNzcgMS4wOXoiIGZpbGw9IiNmZmYiLz48cGF0aCBkPSJNMTkuOC41M0ExNS43MyAxNS43MyAwIDAwNC42NSAyNi44OUwyMi4xNyA5LjM3QTUuMjkgNS4yOSAwIDAwMTkuOC41M3oiIGZpbGw9InVybCgjYikiLz48cGF0aCBkPSJNNi42NSAzNi4wOUExNS43MyAxNS43MyAwIDAwMjEuODEgOS43M0w0LjI5IDI3LjI1YTUuMjggNS4yOCAwIDAwMi4zNiA4Ljg0eiIgZmlsbD0idXJsKCNjKSIvPjxwYXRoIGQ9Ik0yMS44MSA5LjczTDQuMjkgMjcuMjVhNS4yOCA1LjI4IDAgMDAyLjM2IDguODQgMTUuNzIgMTUuNzIgMCAwMDUuNzUuNDRjLTcuNjgtNy4zOSA5LjQxLTI2LjggOS40MS0yNi44eiIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOm11bHRpcGx5IiBmaWxsPSJ1cmwoI2EpIi8+PGcgc3R5bGU9Im1peC1ibGVuZC1tb2RlOm11bHRpcGx5Ij48cGF0aCBkPSJNNi4zMyAzNmMtMi40OS03LjcgMTIuNDUtMjMuMjEgMTUuMDktMjUuODdMNC4yOSAyNy4yNUE1LjI4IDUuMjggMCAwMDYuMzMgMzZ6IiBmaWxsPSJ1cmwoI2QpIi8+PHBhdGggZD0iTTIxLjc1IDkuNzlsLjA2LS4wNnoiIGZpbGw9InVybCgjZSkiLz48L2c+PHBhdGggZD0iTTIzLjQ1IDcuMjlMNC42NCAyNi44OCAyMi4xNyA5LjM3YTUuMTQgNS4xNCAwIDAwMS4yOC0yLjA4eiIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOnNjcmVlbiIgZmlsbD0idXJsKCNmKSIvPjwvZz48L2c+PC9zdmc+"
          alt="startup landing logo"
          width="186"
          height="37"
          className="logo"
        ></img>
      </div>
      <nav className="menu-list">
        <a href="#home" className="menu-list-item active">
          Home
        </a>
        <a href="#features" className="menu-list-item">
          Features
        </a>
        <a href="#testimonial" className="menu-list-item">
          Testimonial
        </a>
        <a href="#pricing" className="menu-list-item">
          Pricing
        </a>
      </nav>
      <button className="btn-get-start">Get Started</button>
    </header>
  );
}

export default Header;
