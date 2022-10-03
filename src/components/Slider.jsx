import React, { useState, useEffect } from "react";
import sliderData from "../datas/sliderData";
import "./slider.css";

function Slider() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const lastIndex = sliderData.length - 1;
    // If we click too much on previous button, we go to last slide
    if (activeIndex < 0) {
      setActiveIndex(lastIndex);
    }
    // If we click too much on next button, we go to first slide
    if (activeIndex > lastIndex) {
      setActiveIndex(0);
    }
  }, [activeIndex]);

  useEffect(() => {
    let slider = setInterval(() => {
      setActiveIndex(activeIndex + 1);
    }, 10000);
    return () => {
      clearInterval(slider);
    };
  }, [activeIndex]);

  return (
    <div className="slider-global">
      <div className="section-center">
        {sliderData.map((slide, index) => {
          const { id, background, name } = slide;
          let position = "nextSlide";

          // if the index is the current index, the slide become activeSlide
          if (index === activeIndex) {
            position = "activeSlide";
          }
          // if the index is before the current index
          // Or
          // if the current index is the last and becomes the first index
          // the former current slide become a last slide
          if (
            index === activeIndex - 1 ||
            (activeIndex === 0 && index === sliderData.length - 1)
          ) {
            position = "lastSlide";
          }

          return (
            <div className={position} key={id}>
              <img className="slider-image" src={background} alt={name} />
            </div>
          );
        })}
        <button
          className="slider-previous"
          onClick={() => setActiveIndex(activeIndex - 1)}
        >
          <i className="fa-solid fa-caret-left"></i>
        </button>
        <button
          className="slider-next"
          onClick={() => setActiveIndex(activeIndex + 1)}
        >
          <i className="fa-solid fa-caret-right"></i>
        </button>
      </div>
    </div>
  );
}

export default Slider;
