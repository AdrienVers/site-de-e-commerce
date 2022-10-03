import React from 'react';
import Actualite from '../assets/actualite.png';
import Buffet from '../assets/buffet.jpg';
import Apero from '../assets/apero.jpg';
import Grenier from '../assets/grenier.jpg';
import './news.css';

function News() {
    return (
        <div>
            <div className="NewsGlobal">
                <div className="NewsContainer">
                    <div className="NewsTitle">
                        <img src={Actualite} alt="actualite" />
                    </div>
                    <div className="NewsEvents">
                        <div className="NewsEvent">
                            <div className="NewsImg">
                                <img src={Buffet} alt="buffet" />
                            </div>
                            <div className="NewsInfo">
                                <div className="NewsInfoTitle">
                                    <h2>Salon dégustation :</h2>
                                </div>
                                <div className="NewsInfoText">
                                    <h3>
                                        Toasts rafinés, cocktails originaux et
                                        plus encore !
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <div className="NewsEvent">
                            <div className="NewsImg">
                                <img src={Apero} alt="apero" />
                            </div>
                            <div className="NewsInfo">
                                <div className="NewsInfoTitle">
                                    <h2>Soirée Quizz-Apéro :</h2>
                                </div>
                                <div className="NewsInfoText">
                                    <h3>
                                        Rendez-vous au Normand Voyageur ce
                                        vendredi soir !
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <div className="NewsEvent">
                            <div className="NewsImg">
                                <img src={Grenier} alt="grenier" />
                            </div>
                            <div className="NewsInfo">
                                <div className="NewsInfoTitle">
                                    <h2>Vide grenier spécial :</h2>
                                </div>
                                <div className="NewsInfoText">
                                    <h3>
                                        Tentez de remporter nos anciens
                                        mobiliers !
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default News;
