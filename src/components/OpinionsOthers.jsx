import React from 'react';
import './opinionsothers.css';

function OpinionsOthers({ name, image, stars, date, comment }) {
    return (
        <div className="opinions-others-container">
            <div className="opinions-others-profile">
                <img src={image} alt="Profil"></img>
                <p>{name}</p>
            </div>
            <div className="opinions-others-description">
                <div className="opinions-others-row">
                    <div>
                        {[...Array(stars)].map((star, index) => {
                            return (
                                <i
                                    id="opinions-others-star"
                                    className="fa-solid fa-star"
                                ></i>
                            );
                        })}
                        {/*  
                        <i
                            id="opinions-others-star"
                            className="fa-solid fa-star"
                        ></i>
                        <i
                            id="opinions-others-star"
                            className="fa-solid fa-star"
                        ></i>
                        <i
                            id="opinions-others-star"
                            className="fa-solid fa-star"
                        ></i>
                        <i
                            id="opinions-others-star"
                            className="fa-solid fa-star"
                        ></i>
                        */}
                    </div>
                </div>
                <div className="opinions-others-row">
                    <h3>Visité le {date}</h3>
                </div>
                <div className="opinions-others-row">
                    <p>{comment}</p>
                </div>
                <div className="opinions-others-row">
                    <button>Ce commentaire vous a été utile ?</button>
                    <button>Signaler un abus</button>
                </div>
            </div>
        </div>
    );

    /*
    return (
        <div className="opinions-others-global">
            {opinionsData.map((item, index) => {
                return (
                    <div key={index} className="opinions-others-container">
                        <div className="opinions-others-profile">
                            <img src={Profile} alt="Profil"></img>
                            <p>{item.name}</p>
                        </div>
                        <div className="opinions-others-description">
                            <div className="opinions-others-row">
                                <div>
                                    <i
                                        id="opinions-others-star"
                                        className="fa-solid fa-star"
                                    ></i>
                                    <i
                                        id="opinions-others-star"
                                        className="fa-solid fa-star"
                                    ></i>
                                    <i
                                        id="opinions-others-star"
                                        className="fa-solid fa-star"
                                    ></i>
                                    <i
                                        id="opinions-others-star"
                                        className="fa-solid fa-star"
                                    ></i>
                                    <i
                                        id="opinions-others-star"
                                        className="fa-solid fa-star"
                                    ></i>
                                </div>
                            </div>
                            <div className="opinions-others-row">
                                <h3>Visité le {item.date}</h3>
                            </div>
                            <div className="opinions-others-row">
                                <p>{item.comment}</p>
                            </div>
                            <div className="opinions-others-row">
                                <button>Utile ?</button>
                                <button>Signaler un abus</button>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
    */
}

export default OpinionsOthers;
