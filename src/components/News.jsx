import React from 'react';
import Actualite from '../assets/actualite.png';
import Buffet from '../assets/buffet.jpg';
import Apero from '../assets/apero.jpg';
import Grenier from '../assets/grenier.jpg';
import styled from 'styled-components';

function News() {
    return (
        <div>
            <NewsGlobal>
                <NewsContainer>
                    <NewsTitle>
                        <img src={Actualite} alt="actualite" />
                    </NewsTitle>
                    <NewsEvents>
                        <NewsEvent>
                            <NewsImg>
                                <img src={Buffet} alt="buffet" />
                            </NewsImg>
                            <NewsInfo>
                                <NewsInfoTitle>
                                    <h2>Salon dégustation :</h2>
                                </NewsInfoTitle>
                                <NewsInfoText>
                                    <h3>
                                        Toasts rafinés, cocktails originaux et
                                        plus encore !
                                    </h3>
                                </NewsInfoText>
                            </NewsInfo>
                        </NewsEvent>
                        <NewsEvent>
                            <NewsImg>
                                <img src={Apero} alt="apero" />
                            </NewsImg>
                            <NewsInfo>
                                <NewsInfoTitle>
                                    <h2>Soirée Quizz-Apéro :</h2>
                                </NewsInfoTitle>
                                <NewsInfoText>
                                    <h3>
                                        Rendez-vous au Normand Voyageur ce
                                        vendredi soir !
                                    </h3>
                                </NewsInfoText>
                            </NewsInfo>
                        </NewsEvent>
                        <NewsEvent>
                            <NewsImg>
                                <img src={Grenier} alt="grenier" />
                            </NewsImg>
                            <NewsInfo>
                                <NewsInfoTitle>
                                    <h2>Vide grenier spécial :</h2>
                                </NewsInfoTitle>
                                <NewsInfoText>
                                    <h3>
                                        Tentez de remporter nos anciens
                                        mobiliers !
                                    </h3>
                                </NewsInfoText>
                            </NewsInfo>
                        </NewsEvent>
                    </NewsEvents>
                </NewsContainer>
            </NewsGlobal>
        </div>
    );
}

const NewsGlobal = styled.div`
    display: flex;
    padding: 20px;
    /* background-color: rgb(220, 220, 220); */
    background-color: rgb(240, 240, 240);
`;

const NewsContainer = styled.div`
    display: flex;
    width: 100%;
    height: 300px;
`;

const NewsTitle = styled.div`
    width: 20%;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        height: 50vmin;
        max-height: 200px;
        padding: 0px 5px 0px 10px;
    }

    @media (max-width: 1300px) {
        width: 30%;
    }

    @media (max-width: 1000px) {
        width: 40%;
    }

    @media (max-width: 700px) {
        width: 100%;
    }
`;

const NewsEvents = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    @media (max-width: 1300px) {
        width: 70%;
    }

    @media (max-width: 1000px) {
        width: 60%;
    }

    @media (max-width: 700px) {
        display: none;
    }
`;

const NewsEvent = styled.div`
    display: flex;
    flex-direction: column;
    max-height: 250px;
    max-width: 320px;
    padding: 0px 2px 0px 2px;

    @media (max-width: 1300px) {
        :nth-child(3) {
            display: none;
        }
    }

    @media (max-width: 1000px) {
        :nth-child(2) {
            display: none;
        }
    }
`;

const NewsImg = styled.div`
    height: 62%;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;

    img {
        height: 26vmin;
        width: 100%;
    }
`;

const NewsInfo = styled.div`
    height: 150px;
    background-color: #34911c;
    color: white;
    text-align: left;
    padding: 10px 10px 0px 10px;
    width: 100%;
`;

const NewsInfoTitle = styled.div`
    height: 35%;

    h2 {
        margin-bottom: 5px;
    }
`;

const NewsInfoText = styled.div`
    height: 65%;
    margin-bottom: 5px;

    h3 {
        font-size: 1.1rem;
    }
`;

export default News;
