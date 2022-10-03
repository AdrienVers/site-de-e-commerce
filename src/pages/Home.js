import React from 'react';
import Slider from '../components/Slider';
import './home.css';
import News from '../components/News';
import Sample from '../components/Sample';

function Home() {
    return (
        <div className="HomeGlobal">
            <div className="HomeMessage">
                <h1>Bienvenue chez le Normand Voyageur !</h1>
            </div>
            <Slider />
            <Sample />
            <News />
        </div>
    );
}

export default Home;
