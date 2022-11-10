import "./Footer.scss";
import React from "react";
import { dataFooter } from "../../constants/constants";

function Footer() {
  return (
    <footer id="footer" className="footer">
      <div className="container">
        <div className="footer-list">
          {dataFooter.map((item, index) => (
            <div key={item.id} className="footer-item">
              <h2>{item.name}</h2>
              {item.children.map((child) => {
                return (
                  <a key={child} href="#" className="footer-link">
                    {child}
                  </a>
                );
              })}
            </div>
          ))}
        </div>
        <div className="footer-copyright">
          <span>All right reserved - Design & Developed byRedQ, Inc</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
