import "./Testimonial.scss";
import React, { useRef, useState } from "react";

function Testimonial() {
  const slider = useRef();
  const itemSlider = useRef();

  const dataTesti = [
    {
      id: 1,
      fill: 4,
      title: "Modern look & trending design",
      description:
        "Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.",
      srcAvt:
        "https://images.unsplash.com/photo-1657214059233-5626b35eb349?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=436&q=80",
      name: "Denny Hilguston",
      username: "@denny.hil",
    },
    {
      id: 2,
      fill: 3,
      title: "Modern look & trending design",
      description:
        "Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.",
      srcAvt:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      name: "Denny Hilguston",
      username: "@denny.hil",
    },
    {
      id: 3,
      fill: 5,
      title: "Modern look & trending design",
      description:
        "Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.",
      srcAvt:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      name: "Denny Hilguston",
      username: "@denny.hil",
    },
    {
      id: 4,
      fill: 4,
      title: "Modern look & trending design",
      description:
        "Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.",
      srcAvt:
        "https://images.unsplash.com/photo-1513682121497-80211f36a7d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80",
      name: "Denny Hilguston",
      username: "@denny.hil",
    },
    {
      id: 5,
      fill: 5,
      title: "Modern look & trending design",
      description:
        "Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.",
      srcAvt:
        "https://images.unsplash.com/photo-1513682121497-80211f36a7d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80",
      name: "Denny Hilguston",
      username: "@denny.hil",
    },
    {
      id: 6,
      fill: 4,
      title: "Modern look & trending design",
      description:
        "Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.",
      srcAvt:
        "https://images.unsplash.com/photo-1513682121497-80211f36a7d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80",
      name: "Denny Hilguston",
      username: "@denny.hil",
    },
    {
      id: 7,
      fill: 2,
      title: "Modern look & trending design",
      description:
        "Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.",
      srcAvt:
        "https://images.unsplash.com/photo-1657214058744-7ff3b448c205?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=436&q=80",
      name: "Denny Hilguston",
      username: "@denny.hil",
    },
    {
      id: 8,
      fill: 4,
      title: "Modern look & trending design",
      description:
        "Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.",
      srcAvt:
        "https://plus.unsplash.com/premium_photo-1664541336837-75c5f1bbdeb9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      name: "Denny Hilguston",
      username: "@denny.hil",
    },
    {
      id: 9,
      fill: 5,
      title: "Modern look & trending design",
      description:
        "Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.",
      srcAvt:
        "https://images.unsplash.com/photo-1488161628813-04466f872be2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
      name: "Denny Hilguston",
      username: "@denny.hil",
    },
  ];

  let count = 0;
  const handleNext = () => {
    const widtScroll = slider.current.offsetWidth;
    // const quantityItem =
    // console.log((itemSlider.current.style.width = "100px"));
    const items = [...document.querySelectorAll(".testi-slider-item")];
    const widthItem = items[0].offsetWidth;
    const quantityScroll = Math.round(widtScroll / widthItem);
    const widthSlider = items.length * widthItem;
    console.log(widthSlider);
    count += widthItem * quantityScroll;
    if (count > widthSlider - widthItem * quantityScroll) {
      count = 0;
    }
    slider.current.style.transform = `translateX(${-count}px)`;
  };

  const handlePrev = () => {
    const widtScroll = slider.current.offsetWidth;
    const items = [...document.querySelectorAll(".testi-slider-item")];
    const widthItem = items[0].offsetWidth;
    const quantityScroll = Math.round(widtScroll / widthItem);
    const widthSlider = items.length * widthItem;
    count -= widthItem * quantityScroll;
    if (count < 0) {
      count = widthSlider - widthItem * quantityScroll;
    }
    slider.current.style.transform = `translateX(${-count}px)`;
  };

  const renderFill = (quantity) => {
    let arr = [];
    for (let i = 1; i <= 5; i++) {
      if (i < quantity) {
        arr.push({
          id: i,
          value: true,
        });
      } else
        arr.push({
          id: i,
          value: false,
        });
    }
    return arr;
  };

  return (
    <div id="testi" className="testi">
      <div className="container">
        <div className="testi-heading">
          <p>TESTIMONIAL</p>
          <h2>Meet Client Satisfaction</h2>
        </div>
      </div>
      <div className="testi-wrapper-slider">
        <div className="testi-slider">
          <div ref={slider} className="testi-slider-show">
            {dataTesti.map((item) => {
              return (
                <div
                  key={item.id}
                  className="testi-slider-item"
                  ref={itemSlider}
                >
                  <div className="wrapper-item">
                    <div className="testi-slider-item-star">
                      {renderFill(item.fill).map((itemStar) => (
                        <svg
                          key={itemStar.id}
                          stroke="currentColor"
                          fill={
                            itemStar.value ? "yellow" : " rgb(221, 221, 221)"
                          }
                          strokeWidth="0"
                          viewBox="0 0 576 512"
                          height="16px"
                          width="16px"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                        </svg>
                      ))}
                    </div>
                    <h2>{item.title}</h2>
                    <p>{item.description}</p>
                    <div className="testi-slider-item-user">
                      <div className="user-img">
                        <img src={item.srcAvt} alt={item.name} />
                      </div>
                      <div className="user-info">
                        <h2>{item.name}</h2>
                        <p>{item.username}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="testi-slider-btns">
          <button className="prev" onClick={handlePrev}>
            <svg
              stroke="rgb(187, 199, 215)"
              strokeWidth="0"
              viewBox="0 0 512 512"
              height="40px"
              width="40px"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M216.4 163.7c5.1 5 5.1 13.3.1 18.4L155.8 243h231.3c7.1 0 12.9 5.8 12.9 13s-5.8 13-12.9 13H155.8l60.8 60.9c5 5.1 4.9 13.3-.1 18.4-5.1 5-13.2 5-18.3-.1l-82.4-83c-1.1-1.2-2-2.5-2.7-4.1-.7-1.6-1-3.3-1-5 0-3.4 1.3-6.6 3.7-9.1l82.4-83c4.9-5.2 13.1-5.3 18.2-.3z"></path>
            </svg>
          </button>
          <button className="next" onClick={handleNext}>
            <svg
              stroke="rgb(187, 199, 215)"
              strokeWidth="0"
              viewBox="0 0 512 512"
              height="40px"
              width="40px"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M295.6 163.7c-5.1 5-5.1 13.3-.1 18.4l60.8 60.9H124.9c-7.1 0-12.9 5.8-12.9 13s5.8 13 12.9 13h231.3l-60.8 60.9c-5 5.1-4.9 13.3.1 18.4 5.1 5 13.2 5 18.3-.1l82.4-83c1.1-1.2 2-2.5 2.7-4.1.7-1.6 1-3.3 1-5 0-3.4-1.3-6.6-3.7-9.1l-82.4-83c-4.9-5.2-13.1-5.3-18.2-.3z"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
