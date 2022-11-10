import "./Features.scss";
import React from "react";
import { exciting, functions, quanlities } from "../../constants/constants";

const handleClick = () => {
  alert("clicked!");
};

function Features() {
  return (
    <div className="features" id="features">
      <div className="container">
        <div className="features-quality">
          <div className="features-heading">
            <p>QUALITY FEATURES</p>
            <h2>Meet exciting feature of app</h2>
          </div>
          <div className="features-list">
            {quanlities.map((quanlity) => {
              return (
                <div key={quanlity.id} className="features-list-item">
                  <img
                    src={quanlity.src}
                    alt={quanlity.name}
                    className="features-list-item-img"
                  />
                  <div className="features-content">
                    <h2 className="features-content-title">{quanlity.title}</h2>
                    <p className="features-content-desc">{quanlity.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* FEATURES CORE  */}
        <div className="features-core">
          <div className="features-core-left">
            <img
              src="https://startup-app-modern.vercel.app/_next/static/images/coreFeature-eeb06038997d171c096c54579e1a2dfe.png"
              alt="Thumbnail"
              className="features-core-img"
            />
          </div>
          <div className="features-core-right">
            <div className="features-core-heading">
              <p>CORE FEATURES</p>
              <h2>Smart Jackpots that you may love this anytime & anywhere</h2>
            </div>
            <div className="features-core-list">
              <div className="features-core-item">
                <img
                  src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTciIGhlaWdodD0iNTciIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggb3BhY2l0eT0iLjEiIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMjQuNTQyLjc5Mmg3LjkxNmMxMy4xMTcgMCAyMy43NSAxMC42MzMgMjMuNzUgMjMuNzV2Ny45MTZjMCAxMy4xMTctMTAuNjMzIDIzLjc1LTIzLjc1IDIzLjc1aC03LjkxNmMtMTMuMTE3IDAtMjMuNzUtMTAuNjMzLTIzLjc1LTIzLjc1di03LjkxNmMwLTEzLjExNyAxMC42MzMtMjMuNzUgMjMuNzUtMjMuNzV6IiBmaWxsPSJ1cmwoI3BhaW50MF9saW5lYXIpIi8+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0zMS4yMTcgMzIuOTYyYS44My44MyAwIDAwLjI1Mi0uNjAzdi0yLjE0NGg4LjkwNnY2LjQzM2MwIC41OS0uMjA4IDEuMDk0LS42MjMgMS41MTRhMi4wMyAyLjAzIDAgMDEtMS40OTguNjNIMTguNzQ3YTIuMDMgMi4wMyAwIDAxLTEuNDk4LS42MyAyLjA3NiAyLjA3NiAwIDAxLS42MjMtMS41MTR2LTYuNDMzaDguOTA2djIuMTQ0YS44My44MyAwIDAwLjI1Mi42MDMuODEuODEgMCAwMC41OTYuMjU1aDQuMjQyYS44MS44MSAwIDAwLjU5Ni0uMjU1em0tMS4wMi0yLjc0N2gtMy4zOTR2MS43MTVoMy4zOTR2LTEuNzE1em05LjU1NS03Ljk0OGEyLjAyOSAyLjAyOSAwIDAwLTEuNDk4LS42M0gzMy41OXYtMi4xNDRhMS4yNSAxLjI1IDAgMDAtLjM3LS45MTIgMS4yMjIgMS4yMjIgMCAwMC0uOTAyLS4zNzVoLTcuNjM0Yy0uMzUzIDAtLjY1NC4xMjYtLjkwMS4zNzVhMS4yNSAxLjI1IDAgMDAtLjM3MS45MTJ2Mi4xNDRoLTQuNjY1YTIuMDMgMi4wMyAwIDAwLTEuNDk4LjYzYy0uNDE2LjQyLS42MjMuOTI0LS42MjMgMS41MTR2NS4xNDdoMjMuNzV2LTUuMTQ3YzAtLjU5LS4yMDgtMS4wOTQtLjYyMy0xLjUxNHptLTcuODYtLjYzaC02Ljc4NXYtMS43MTZoNi43ODZ2MS43MTZ6IiBmaWxsPSIjRkY0NTUwIi8+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJwYWludDBfbGluZWFyIiB4MT0iMzIuNzg1IiB5MT0iODkuNzg1IiB4Mj0iODkuNzg1IiB5Mj0iMjQuMjE1IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agc3RvcC1jb2xvcj0iI0ZGNDE2QyIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0ZGNEIyQiIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjwvc3ZnPg=="
                  alt="Smart Features"
                  className="features-core-item-img"
                />
                <div className="features-core-item-content">
                  <div className="features-core-item-title">Smart Features</div>
                  <div className="features-core-item-desc">
                    Get your blood tests delivered at let home collect sample
                    from the victory of the managements. your blood tests.
                  </div>
                </div>
              </div>
              <div className="features-core-item">
                <img
                  src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTciIGhlaWdodD0iNTciIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggb3BhY2l0eT0iLjEiIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMjQuNTQyLjc5Mmg3LjkxNmMxMy4xMTcgMCAyMy43NSAxMC42MzMgMjMuNzUgMjMuNzV2Ny45MTZjMCAxMy4xMTctMTAuNjMzIDIzLjc1LTIzLjc1IDIzLjc1aC03LjkxNmMtMTMuMTE3IDAtMjMuNzUtMTAuNjMzLTIzLjc1LTIzLjc1di03LjkxNmMwLTEzLjExNyAxMC42MzMtMjMuNzUgMjMuNzUtMjMuNzV6IiBmaWxsPSJ1cmwoI3BhaW50MF9saW5lYXIpIi8+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik00Mi4zOSAyNS4yMjFhLjgzMy44MzMgMCAwMS0uMDIzLjI0NmwtMS44MDYgNy4yNTdhLjgyMy44MjMgMCAwMS0uNzkzLjYyNGwtMTAuODQuMDU1SDE4LjA4MmEuODIyLjgyMiAwIDAxLS43OTctLjYyNWwtMS44MDctNy4yODVhLjgyOC44MjggMCAwMS0uMDIyLS4yNTIgMS43MzMgMS43MzMgMCAwMS41MTgtMy4zODMgMS43MzMgMS43MzMgMCAwMTEuMDk1IDMuMDdsMi4yNjIgMi4yODdhMy4wOCAzLjA4IDAgMDAyLjE3Ni45MSAzLjA4IDMuMDggMCAwMDIuNDUxLTEuMjI0bDMuNzE4LTQuOTQ2YTEuNzMgMS43MyAwIDAxMS4yMTktMi45NTYgMS43MyAxLjczIDAgMDExLjI0NSAyLjkyNmwuMDA0LjAwNCAzLjY5IDQuOTZhMy4wNzggMy4wNzggMCAwMDIuNDU3IDEuMjM2Yy44MTkgMCAxLjU5LS4zMiAyLjE2OC0uOTAxbDIuMjc3LTIuMjg3YTEuNzMgMS43MyAwIDAxMS4wOC0zLjA4IDEuNzMgMS43MyAwIDAxLjU3MiAzLjM2NHptLTIuMDA2IDEwLjc2NmEuODIzLjgyMyAwIDAwLS44Mi0uODI1SDE4LjMyYS44MjMuODIzIDAgMDAtLjgyMi44MjV2MS45NzljMCAuNDU2LjM2OC44MjUuODIyLjgyNWgyMS4yNDNhLjgyMy44MjMgMCAwMC44MjEtLjgyNXYtMS45OHoiIGZpbGw9IiNGRTU4NjgiLz48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MF9saW5lYXIiIHgxPSIzMi43ODUiIHkxPSI4OS43ODUiIHgyPSI4OS43ODUiIHkyPSIyNC4yMTUiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBzdG9wLWNvbG9yPSIjRkY1ODU4Ii8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjRjg1N0E2Ii8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PC9zdmc+"
                  alt="Secure Contents"
                  className="features-core-item-img"
                />
                <div className="features-core-item-content">
                  <div className="features-core-item-title">
                    Secure Contents
                  </div>
                  <div className="features-core-item-desc">
                    Get your blood tests delivered at let home collect sample
                    from the victory of the managements. your blood tests.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FEATURES EXCITING  */}
        <div className="features-exciting">
          <div className="features-exciting-heading">
            <p>QUALITY FEATURES</p>
            <h2>Meet exciting feature of app</h2>
          </div>
          <div className="features-exciting-list">
            {exciting.map((item) => (
              <div key={item.id} className="features-exciting-item">
                <img
                  src={item.src}
                  alt="default alt text"
                  className="features-exciting-item-img"
                />
                <div className="features-exciting-item-content">
                  <h2>{item.title}</h2>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="features-smart">
          <div className="features-smart-left">
            <div className="features-smart-heading">
              <p>CORE FEATURES</p>
              <h2>Smart Jackpots that you may love this anytime & anywhere</h2>
            </div>
            <div className="features-smart-desc">
              Get your tests delivered at let home collect sample from the
              victory of the managements that supplies best design system
              guidelines ever. Get your tests delivered at let home collect
              sample.
            </div>
            <button
              className="btn-primary btn-get-start-dark"
              onClick={handleClick}
            >
              Get Started
            </button>
          </div>
          <div className="features-smart-right">
            <img
              src="https://startup-app-modern.vercel.app/_next/static/images/partner-648ae2e8ae0546b034e0ca5e1362a108.png"
              alt="Partner"
              width="794"
              height="544"
              className="features-smart-img"
            />
          </div>
        </div>
      </div>
      <div className="features-function">
        <div className="container">
          <div className="features-function-heading">
            <p>WHAT'S THE FUNCTION</p>
            <h2>Let's see how it work</h2>
          </div>
          <div className="features-function-step">
            {functions.map((itemFunction) => (
              <div key={itemFunction.id} className="features-function-item">
                <div className="features-function-item-number">
                  {itemFunction.number}
                </div>
                <div className="features-function-item-content">
                  <h3>{itemFunction.title}</h3>
                  <p>{itemFunction.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
