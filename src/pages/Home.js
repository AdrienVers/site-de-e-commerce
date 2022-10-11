import React from 'react';
import Slider from '../components/Slider';
import News from '../components/News';
// import Sample from '../components/Sample';
import styled from 'styled-components';
import CarouselDishes from '../components/CarouselDishes';
import BandejaImg from '../assets/bandeja-paisa.jpg';
import PaellaImg from '../assets/paella.jpg';
import PouletCocoImg from '../assets/poulet-coco.jpg';
import FishAndChipsImg from '../assets/fish-and-chips.jpg';
import GrilladLaxImg from '../assets/grillad-lax.jpg';
import SaladeGrecqueImg from '../assets/salade-grecque.jpg';
import HamburgerImg from '../assets/hamburger.jpg';
import TarteletteImg from '../assets/tartelette.jpg';
import PouletPaprikaImg from '../assets/poulet-paprika.jpg';
import MoulesFritesImg from '../assets/moules-frites.jpg';
import CarteImg from '../assets/menu.png';

const HomeGlobal = styled.div`
    background-color: rgb(244, 244, 244);
`;

const HomeMessage = styled.div`
    padding: 4vh 0px 5px 0px;

    h1 {
        font-size: 1.8rem;
    }

    span {
        white-space: nowrap;
    }
`;

function Home() {
    return (
        <HomeGlobal>
            <HomeMessage>
                <h1>
                    Bienvenue chez le <span>Normand Voyageur !</span>
                </h1>
            </HomeMessage>
            <Slider />
            <CarouselDishes
                slides={[
                    /*
                    '../assets/paella.jpg',
                    '../assets/poulet-coco.jpg',
                    '../assets/fish-and-chips.jpg',
                    '../assets/grillad-lax.jpg',
                    '/assets/bandeja-paisa.jpg',
                    '../assets/salade-grecque.jpg',
                    '../assets/hamburger.jpg',
                    '../assets/tartelette.jpg',
                    '../assets/moules-frites.jpg',
                    '../assets/poulet-paprika.jpg',
                    '../assets/carte.png',
                    */
                    PaellaImg,
                    PouletCocoImg,
                    FishAndChipsImg,
                    GrilladLaxImg,
                    BandejaImg,
                    SaladeGrecqueImg,
                    HamburgerImg,
                    TarteletteImg,
                    MoulesFritesImg,
                    PouletPaprikaImg,
                    CarteImg,
                ]}
            />
            {/* <Sample /> */}
            <News />
        </HomeGlobal>
    );
}

export default Home;
