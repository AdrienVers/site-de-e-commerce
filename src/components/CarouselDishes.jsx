import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const CarouselDishesGlobal = styled.div`
    height: 350px;
    overflow: hidden;
    padding-bottom: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(220, 220, 220);

    @media (max-width: 500px) {
        height: 300px;
        padding-bottom: 250px;
    }
`;

const CarouselDishesRow = styled.div`
    position: relative;
    right: 150px;

    @media (max-width: 500px) {
        position: relative;
        right: 125px;
    }
`;

const CarouselDishesCenter = styled(motion.div)`
    position: absolute;
    overflow: hidden;

    img {
        height: 80%;
        max-height: 300px;
        border-radius: 5px;
        border: 3px solid rgb(255, 255, 255);
        box-shadow: 1px 1px 40px #555;

        @media (max-width: 500px) {
            height: 70%;
            max-height: 250px;
        }
    }
`;

const CarouselDishesbuttons = styled.div`
    padding-top: 250px;

    @media (max-width: 500px) {
        padding-top: 225px;
    }

    button {
        position: absolute;
        padding: 15px;
        border-radius: 50px;
        border: solid 1px transparent;
        font-weight: bold;

        &:hover {
            cursor: pointer;
        }

        @media (max-width: 500px) {
            padding: 10px;
        }
    }

    button:nth-child(1) {
        left: 10%;
    }

    button:nth-child(2) {
        right: 10%;
    }
`;

function CarouselDishes({ slides }) {
    const [position, positionSet] = useState(5);
    const onRight = () => {
        if (position < slides.length - 1) {
            positionSet(position + 1);
        }
    };
    const onLeft = () => {
        if (position > 0) {
            positionSet(position - 1);
        }
    };
    return (
        <CarouselDishesGlobal>
            <CarouselDishesRow>
                {slides.map((url, index) => (
                    <CarouselDishesCenter
                        key={index}
                        initial={{ scale: 0 }}
                        animate={{
                            rotate: 0,
                            left: `${(index - position) * 400}px`,
                            scale: index === position ? 1 : 0.8,
                        }}
                        transition={{
                            type: 'spring',
                            stiffness: 260,
                            damping: 20,
                        }}
                    >
                        {position === 10 ? (
                            <Link to={'/dishes/'}>
                                <img src={url} alt="img" />
                            </Link>
                        ) : (
                            <img src={url} alt="img" />
                        )}
                    </CarouselDishesCenter>
                ))}
            </CarouselDishesRow>
            <CarouselDishesbuttons>
                <button onClick={() => onLeft()}>
                    <i className="fa-solid fa-arrow-left"></i>
                </button>
                <button onClick={() => onRight()}>
                    <i className="fa-solid fa-arrow-right"></i>
                </button>
            </CarouselDishesbuttons>
        </CarouselDishesGlobal>
    );
}

export default CarouselDishes;
