import React from 'react';
import GrilladLax from '../assets/grillad-lax.jpg';
import BandejaPaisa from '../assets/bandeja-paisa.jpg';
import SaladeGrecque from '../assets/salade-grecque.jpg';
import Carte from '../assets/carte.png';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SampleGlobal = styled.div`
    display: flex;
    padding: 20px 30px 20px 5px;
    background-color: rgb(220, 220, 220);
`;

const SampleContainer = styled.div`
    display: flex;
    width: 100%;
    height: 300px;
`;

const SampleEvents = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    @media (max-width: 1300px) {
        width: 70%;
    }

    @media (max-width: 1000px) {
        width: 55%;
    }

    @media (max-width: 700px) {
        display: none;
    }
`;

const SampleEvent = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0px 2px 0px 2px;
    justify-content: center;
    align-items: center;
    height: 120%;

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

const SampleImg = styled.div`
    height: 62%;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;

    img {
        width: 100%;
    }
`;

const SampleInfo = styled.div`
    height: 50px;
    background-color: #34911c;
    color: white;
    text-align: left;
    padding: 10px 10px 0px 10px;
    width: 100%;
`;

const SampleInfoTitle = styled.div`
    height: 35%;
`;

const SampleButton = styled.div`
    width: 20%;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        height: 50vmin;
        max-height: 200px;
        padding: 0px 5px 0px 10px;
    }

    &:hover {
        cursor: pointer;
    }

    @media (max-width: 1300px) {
        width: 30%;
    }

    @media (max-width: 1000px) {
        width: 45%;
    }

    @media (max-width: 700px) {
        width: 100%;
    }
`;

function Sample() {
    return (
        <div>
            <SampleGlobal>
                <SampleContainer>
                    <SampleEvents>
                        <SampleEvent>
                            <SampleImg>
                                <img src={GrilladLax} alt="grillad-lax" />
                            </SampleImg>
                            <SampleInfo>
                                <SampleInfoTitle>
                                    <h2>Grillad Lax</h2>
                                </SampleInfoTitle>
                            </SampleInfo>
                        </SampleEvent>
                        <SampleEvent>
                            <SampleImg>
                                <img src={BandejaPaisa} alt="apero" />
                            </SampleImg>
                            <SampleInfo>
                                <SampleInfoTitle>
                                    <h2>Bandeja Paisa</h2>
                                </SampleInfoTitle>
                            </SampleInfo>
                        </SampleEvent>
                        <SampleEvent>
                            <SampleImg>
                                <img src={SaladeGrecque} alt="grenier" />
                            </SampleImg>

                            <SampleInfo>
                                <SampleInfoTitle>
                                    <h2>Salade Grecque</h2>
                                </SampleInfoTitle>
                            </SampleInfo>
                        </SampleEvent>
                    </SampleEvents>

                    <SampleButton>
                        <Link to={'/dishes/'}>
                            <img src={Carte} alt="actualite" />
                        </Link>
                    </SampleButton>
                </SampleContainer>
            </SampleGlobal>
        </div>
    );
}

export default Sample;
