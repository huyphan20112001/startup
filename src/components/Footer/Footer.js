import "./Footer.scss";

import React from "react";

function Footer() {
  const dataFooter = [
    {
      id: 1,
      name: "About Us",
      children: [
        {
          id: 1,
          title: "Support Center",
        },
        {
          id: 2,
          title: "Customer Support",
        },
        {
          id: 3,
          title: "About Us",
        },
        {
          id: 4,
          title: "Copyright",
        },
        {
          id: 5,
          title: "Popular Campaign",
        },
      ],
    },
    {
      id: 2,
      name: "Out Information",
      children: [
        {
          id: 1,
          title: "Return Policy",
        },
        {
          id: 2,
          title: "Privacy Policy",
        },
        {
          id: 3,
          title: "Terms & Conditions",
        },
        {
          id: 4,
          title: "Site Map",
        },
        {
          id: 5,
          title: "Store Hours",
        },
      ],
    },
    {
      id: 3,
      name: "My Account",
      children: [
        {
          id: 1,
          title: "Press inquires",
        },
        {
          id: 2,
          title: "Social media",
        },
        {
          id: 3,
          title: "Directions",
        },
        {
          id: 4,
          title: "Images & B-roll",
        },
        {
          id: 5,
          title: "Permissions",
        },
      ],
    },
    {
      id: 4,
      name: "Policy",
      children: [
        {
          id: 1,
          title: "Application security",
        },
        {
          id: 2,
          title: "Software principles",
        },
        {
          id: 3,
          title: "Unwanted software policy",
        },
        {
          id: 4,
          title: "Responsible supply chain",
        },
      ],
    },
  ];

  console.log(dataFooter);

  return (
    <footer id="footer" className="footer">
      <div className="container"></div>
    </footer>
  );
}

export default Footer;
