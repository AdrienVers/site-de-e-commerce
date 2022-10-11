import React, { useState, useEffect } from 'react';
import sliderData from '../datas/sliderData';
import './slider.css';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
        <SliderGlobal>
            <SliderCenter>
                {sliderData.map((slide, index) => {
                    const { id, background, name, link } = slide;
                    let position = 'nextSlide';

                    // if the index is the current index, the slide become activeSlide
                    if (index === activeIndex) {
                        position = 'activeSlide';
                    }
                    // if the index is before the current index
                    // Or
                    // if the current index is the last and becomes the first index
                    // the former current slide become a last slide
                    if (
                        index === activeIndex - 1 ||
                        (activeIndex === 0 && index === sliderData.length - 1)
                    ) {
                        position = 'lastSlide';
                    }

                    return (
                        <LinkToPage to={link} className={position} key={id}>
                            <img src={background} alt={name} />
                        </LinkToPage>
                    );
                })}
                <button
                    style={{ left: 0 }}
                    onClick={() => setActiveIndex(activeIndex - 1)}
                >
                    <i className="fa-solid fa-caret-left"></i>
                </button>
                <button
                    style={{ right: 0 }}
                    onClick={() => setActiveIndex(activeIndex + 1)}
                >
                    <i className="fa-solid fa-caret-right"></i>
                </button>
            </SliderCenter>
        </SliderGlobal>
    );
}

const SliderGlobal = styled.div`
    max-width: 100%;
    height: 520px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    margin-top: 5px;

    @media (max-width: 900px) {
        height: 450px;
        margin-top: 0px;
    }

    @media (max-width: 600px) {
        height: 250px;
    }

    @media (max-width: 500px) {
        height: 200px;
    }

    @media (max-width: 400px) {
        height: 200px;
    }
`;

const LinkToPage = styled(Link)``;

const SliderCenter = styled.div`
    margin: 0 auto;
    width: 90vw;
    height: 480px;
    max-width: 1000px;
    text-align: center;
    position: relative;
    display: flex;
    overflow: hidden;

    img {
        width: auto;
        max-width: 85%;
        object-fit: cover;

        &:hover {
            cursor: pointer;
        }

        @media (max-width: 600px) {
            max-width: 75%;
        }
    }

    button {
        position: absolute;
        top: 235px;
        transform: translateY(-50%);
        background: #34911c;
        color: white;
        width: 2rem;
        height: 2rem;
        display: grid;
        place-items: center;
        border-color: transparent;
        font-size: 1rem;
        border-radius: 5px;

        &:hover {
            background: #1e5b0f;
            cursor: pointer;
        }

        @media (min-width: 800px) {
            width: 2rem;
            height: 2rem;
            font-size: 1.5rem;
        }

        @media (max-width: 400px) {
            width: 1.3rem;
            height: 1.3rem;
            font-size: 0.8rem;
        }
    }
`;

export default Slider;
