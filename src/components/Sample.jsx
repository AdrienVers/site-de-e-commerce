import React from 'react';
import GrilladLax from '../assets/grillad-lax.jpg';
import BandejaPaisa from '../assets/bandeja-paisa.jpg';
import SaladeGrecque from '../assets/salade-grecque.jpg';
import Carte from '../assets/carte.png';
import { Link } from 'react-router-dom';
import './sample.css';

function Sample() {
    return (
        <div>
            <div className="SampleGlobal">
                <div className="SampleContainer">
                    <div className="SampleEvents">
                        <div className="SampleEvent">
                            <div className="SampleImg">
                                <img src={GrilladLax} alt="grillad-lax" />
                            </div>
                            <div className="SampleInfo">
                                <div className="SampleInfoTitle">
                                    <h2>Grillad Lax</h2>
                                </div>
                            </div>
                        </div>
                        <div className="SampleEvent">
                            <div className="SampleImg">
                                <img src={BandejaPaisa} alt="apero" />
                            </div>
                            <div className="SampleInfo">
                                <div className="SampleInfoTitle">
                                    <h2>Bandeja Paisa</h2>
                                </div>
                            </div>
                        </div>
                        <div className="SampleEvent">
                            <div className="SampleImg">
                                <img src={SaladeGrecque} alt="grenier" />
                            </div>

                            <div className="SampleInfo">
                                <div className="SampleInfoTitle">
                                    <h2>Salade Grecque</h2>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="SampleButton">
                        <Link to={'/dishes/'}>
                            <img src={Carte} alt="actualite" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sample;
