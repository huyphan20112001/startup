import React from "react";
import "./Payment.scss";

const packages = [
  {
    id: 1,
    title: "Free Plan",
    recommended: false,
    for: "For small teams or office",
    benefits: [
      {
        allowed: [
          "Ultimate access to all course, exercises and assessments",
          "Free access for all kind of exercise corrections with downloads.",
          "Total assessment corrections with free download access system",
        ],
        rejected: [
          "Unlimited download of courses on the mobile app contents",
          "Download and print courses and exercises in PDF",
        ],
      },
    ],
  },
  {
    id: 2,
    title: "Premium",
    recommended: true,
    for: "For startup enterprise",
    price: 29.99,
    benefits: [
      {
        allowed: [
          "Ultimate access to all course, exercises and assessments",
          "Free access for all kind of exercise corrections with downloads.",
          "Total assessment corrections with free download access system",
          "Unlimited download of courses on the mobile app contents",
          "Download and print courses and exercises in PDF",
        ],
        rejected: [],
      },
    ],
  },
];

// const { allowed } = abc;
// console.log(allowed);
// for (let abcItem of abc) {
//   console.log(abcItem);
//   const { allowed } = abcItem[0];
//   console.log(allowed);
// }
// console.log(abc);
// const { allowed } = abc[0];
// console.log(allowed);

function Payment() {
  // allowed.map((item) => console.log(item));

  return (
    <div id="payment" className="payment">
      <div className="container">
        <div className="wrapper-payment">
          <div className="payment-left">
            <img
              src="https://startup-app-modern.vercel.app/_next/static/images/payment-thumb-35f2232fc6cc72533e814182ef24f367.png"
              alt="Secure Payment Transaction System with #1 Ranking"
              width="743"
              height="820"
              className="payment-img"
            />
          </div>
          <div className="payment-right">
            <div className="payment-heading">
              <p>PAYMENT SECURITY</p>
              <h2>Secure Payment Transaction System with #1 Ranking</h2>
            </div>
            <div className="payment-desc">
              <p>
                Get your tests delivered at let home collect sample from the
                victory of the managements that supplies best design system
                guidelines ever. Get your tests delivered at let home collect
                sample.
              </p>
            </div>
            <button className="payment-btn">Learn More</button>
          </div>
        </div>
      </div>
      <div className="payment-package">
        <div className="container">
          <div className="payment-package-heading">
            <p>WHAT'S THE FUNTION</p>
            <h2>Let's see how it work</h2>
          </div>

          <div className="payment-package-list">
            {packages.map((itemPackage) => (
              <div
                key={itemPackage.id}
                className={`payment-package-item ${
                  itemPackage.recommended ? "recommended" : ""
                }`}
              >
                {itemPackage.recommended && (
                  <div className="payment-recommended">Recommended</div>
                )}
                <div className="payment-recommended">
                  {itemPackage.recommended}
                </div>
                <div className="payment-package-item-heading">
                  <h2> {itemPackage.title}</h2>
                  {itemPackage.recommended ? <p>Starting from</p> : undefined}
                </div>
                <div className="payment-package-for">
                  <p>{itemPackage.for}</p>
                  {itemPackage.price ? (
                    <span>${itemPackage.price}/mo</span>
                  ) : undefined}
                </div>
                <div className="payment-package-benefit">
                  {itemPackage.benefits[0].allowed.map((item, index) => (
                    <div key={index} className="payment-package-benefit-item">
                      <div>
                        <svg
                          fill="#25CB9E"
                          strokeWidth="0"
                          viewBox="0 0 512 512"
                          height="22px"
                          width="22px"
                          xmlns="http://www.w3.org/2000/svg"
                          className="payment-icon-tick"
                        >
                          <path d="M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm106.5 150.5L228.8 332.8h-.1c-1.7 1.7-6.3 5.5-11.6 5.5-3.8 0-8.1-2.1-11.7-5.7l-56-56c-1.6-1.6-1.6-4.1 0-5.7l17.8-17.8c.8-.8 1.8-1.2 2.8-1.2 1 0 2 .4 2.8 1.2l44.4 44.4 122-122.9c.8-.8 1.8-1.2 2.8-1.2 1.1 0 2.1.4 2.8 1.2l17.5 18.1c1.8 1.7 1.8 4.2.2 5.8z"></path>
                        </svg>
                      </div>
                      <p>{item}</p>
                    </div>
                  ))}
                  {itemPackage.benefits[0].rejected.map((item, index) => (
                    <div key={index} className="payment-package-benefit-item">
                      <div>
                        <svg
                          fill="#788FB5"
                          strokeWidth="0"
                          viewBox="0 0 512 512"
                          height="22px"
                          width="22px"
                          xmlns="http://www.w3.org/2000/svg"
                          className="payment-icon-close"
                        >
                          <path d="M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm52.7 283.3L256 278.6l-52.7 52.7c-6.2 6.2-16.4 6.2-22.6 0-3.1-3.1-4.7-7.2-4.7-11.3 0-4.1 1.6-8.2 4.7-11.3l52.7-52.7-52.7-52.7c-3.1-3.1-4.7-7.2-4.7-11.3 0-4.1 1.6-8.2 4.7-11.3 6.2-6.2 16.4-6.2 22.6 0l52.7 52.7 52.7-52.7c6.2-6.2 16.4-6.2 22.6 0 6.2 6.2 6.2 16.4 0 22.6L278.6 256l52.7 52.7c6.2 6.2 6.2 16.4 0 22.6-6.2 6.3-16.4 6.3-22.6 0z"></path>
                        </svg>
                      </div>
                      <h2 key={index}>{item}</h2>
                    </div>
                  ))}
                </div>
                <div className="payment-wrapper-btn">
                  <button
                    className={
                      itemPackage.recommended
                        ? "payment-btn-sign-dark"
                        : "payment-btn-sign-light"
                    }
                  >
                    Signup Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
