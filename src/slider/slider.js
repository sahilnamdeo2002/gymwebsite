import React, { useState, useEffect } from "react";
import "./SliderComponent.css"; // Ensure your CSS file is properly linked
import gym from "./public/img/gym.jpg";
import first1 from "./public/img/1.jpg";
import first2 from "./public/img/2.jpg";

const SliderComponent = () => {
  const [active, setActive] = useState(0); // Active slide
  const [diameter, setDiameter] = useState(0); // Diameter for resizing
  const items = [
    {
      image: first1,
      heading: "SLIDER IMAGE MAGIC",
      text1:
        "Nulla magna irure incididunt irure nisi laboris adipisicing adipisicing ad aliquip exercitation sit duis.",
      text2: "Ex irure minim eiusmod tempor cillum consectetur ullamco.",
    },
    {
      image: first2,
      heading: "SLIDER IMAGE MAGIC",
      text1:
        "Nulla magna irure incididunt irure nisi laboris adipisicing adipisicing ad aliquip exercitation sit duis.",
      text2: "Ex irure minim eiusmod tempor cillum consectetur ullamco.",
    },
    {
      image: gym,
      heading: "SLIDER IMAGE MAGIC",
      text1:
        "Nulla magna irure incididunt irure nisi laboris adipisicing adipisicing ad aliquip exercitation sit duis.",
      text2: "Ex irure minim eiusmod tempor cillum consectetur ullamco.",
    },
  ];

  const lastPosition = items.length - 1;
  const firstPosition = 0;

  const nextSlide = () => {
    setActive((prev) => Math.min(prev + 1, lastPosition));
  };

  const prevSlide = () => {
    setActive((prev) => Math.max(prev - 1, firstPosition));
  };

  // Set diameter based on slider size
  const setSliderDiameter = () => {
    const slider = document.querySelector(".slider");
    if (slider) {
      const widthSlider = slider.offsetWidth;
      const heightSlider = slider.offsetHeight;
      const calculatedDiameter = Math.sqrt(
        Math.pow(widthSlider, 2) + Math.pow(heightSlider, 2)
      );
      setDiameter(calculatedDiameter);
      document.documentElement.style.setProperty(
        "--diameter",
        `${calculatedDiameter}px`
      );
    }
  };

  useEffect(() => {
    setSliderDiameter();
    window.addEventListener("resize", setSliderDiameter);
    return () => {
      window.removeEventListener("resize", setSliderDiameter);
    };
  }, []);

  return (
    <section className="slider">
      <div className="list">
        {items.map((item, index) => (
          <div
            className={`item ${active === index ? "active" : ""}`}
            key={index}
          >
            <div
              className="image"
              style={{ backgroundImage: `url(${item.image})` }}
            ></div>
            <div className="content">
              <h2>{item.heading}</h2>
              <p>{item.text1}</p>
              <p>{item.text2}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="arrows">
        <button
          id="prev"
          onClick={prevSlide}
          disabled={active === firstPosition}
        >
          <svg
            className="w-6 h-6 text-gray-800"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 12h14M5 12l4-4m-4 4 4 4"
            />
          </svg>
        </button>
        <button
          id="next"
          onClick={nextSlide}
          disabled={active === lastPosition}
        >
          <svg
            className="w-6 h-6 text-gray-800"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 12H5m14 0-4 4m4-4-4-4"
            />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default SliderComponent;
