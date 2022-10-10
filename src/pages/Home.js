import React from 'react';
import './home.css';
import Slider from '../components/Slider';
import News from '../components/News';
import Sample from '../components/Sample';

function Home() {
    return (
        <div className="home-global">
            <div className="home-message">
                <h1>
                    Bienvenue chez le <span>Normand Voyageur !</span>
                </h1>
            </div>
            <Slider />
            <Sample />
            <News />
        </div>
    );
}

export default Home;
