import "./Footer.scss";

import React from "react";

function Footer() {
  const dataFooter = [
    {
      id: 1,
      name: "About Us",
      children: [
        "Support Center",
        "Customer Support",
        "About Us",
        "Copyright",
        "Popular Campaign",
      ],
    },
    {
      id: 2,
      name: "Out Information",
      children: [
        "Return Policy",
        "Privacy Policy",
        "Terms & Conditions",
        "Site Map",
        "Store Hours",
      ],
    },
    {
      id: 3,
      name: "My Account",
      children: [
        "Press inquires",
        "Social media",
        "Directions",
        "Images & B-roll",
        "Permissions",
      ],
    },
    {
      id: 4,
      name: "Policy",
      children: [
        "Application security",
        "Software principles",
        "Unwanted software policy",
        "Responsible supply chain",
      ],
    },
  ];

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
