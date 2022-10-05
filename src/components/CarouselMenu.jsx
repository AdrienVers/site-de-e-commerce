import React, { useState } from 'react';
import '../pages/takeawayinfo.css';
import styled from 'styled-components';

const SliderMenu = styled.div``;

const SliderItem = styled.div``;

const CarouselMenu = (props) => {
    const slides = [
        { text: 'En ce moment' },
        { text: 'Menu' },
        { text: 'Entrée' },
        { text: 'Plat' },
        { text: 'Dessert' },
        { text: 'Boisson' },
    ];

    const slide1 = slides.slice(0, 3);
    const slide2 = slides.slice(3);

    const [secondPart, setSecondPart] = useState(true);
    const showSecondPart = () => setSecondPart(!secondPart);

    return (
        <div>
            <div className="filtreMenuTAI">
                <i
                    className="fa-solid fa-caret-left"
                    onClick={showSecondPart}
                ></i>
                <SliderMenu>
                    {secondPart ? (
                        <div>
                            {slide1.map((slide, index) => {
                                return (
                                    <SliderItem key={index}>
                                        {slide.text}
                                    </SliderItem>
                                );
                            })}
                        </div>
                    ) : (
                        <div>
                            {slide2.map((slide, index) => {
                                return (
                                    <SliderItem key={index}>
                                        {slide.text}
                                    </SliderItem>
                                );
                            })}
                        </div>
                    )}
                </SliderMenu>
                <i
                    className="fa-solid fa-caret-right"
                    onClick={showSecondPart}
                ></i>
            </div>
        </div>
    );
};

/* 
    <div>En ce moment</div>
    <div>Menu</div>
    <div>Entrée</div>
    <div>Plat</div>
    <div>Dessert</div>
    <div>Boisson</div>
*/

export default CarouselMenu;
