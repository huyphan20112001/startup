import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { packages } from "../../constants/constants";
import "./Payment.scss";

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

const handleClick = () => {
  alert("clicked!");
};

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
            <button className="payment-btn" onClick={handleClick}>
              Learn More
            </button>
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
                      <FontAwesomeIcon
                        icon={faCircleCheck}
                        size="xl"
                        color="#25CB9E"
                        className="check-icon"
                      />
                      <p>{item}</p>
                    </div>
                  ))}
                  {itemPackage.benefits[0].rejected.map((item, index) => (
                    <div key={index} className="payment-package-benefit-item">
                      <div>
                        <FontAwesomeIcon
                          icon={faCircleCheck}
                          size="xl"
                          color="#788FB5"
                          className="check-icon"
                        />
                      </div>
                      <h2 key={index}>{item}</h2>
                    </div>
                  ))}
                </div>
                <div className="payment-wrapper-btn">
                  <button
                    onClick={handleClick}
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
