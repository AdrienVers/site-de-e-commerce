import React from 'react';
import useMediaQuery from './useMediaQuery';
import './opinionsothers.css';

function OpinionsOthers({ name, image, stars, date, comment }) {
    const phoneSize = useMediaQuery('(max-width: 420px)');

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
                                    key={index}
                                ></i>
                            );
                        })}
                    </div>
                </div>
                <div className="opinions-others-row">
                    <h3>Visité le {date}</h3>
                </div>
                <div className="opinions-others-row">
                    <p>{comment}</p>
                </div>
                <div className="opinions-others-row">
                    {phoneSize ? (
                        <button>Utile ?</button>
                    ) : (
                        <button>Ce commentaire vous a été utile ?</button>
                    )}
                    {phoneSize ? (
                        <button>Signaler</button>
                    ) : (
                        <button>Signaler un abus</button>
                    )}
                </div>
            </div>
        </div>
    );
}

export default OpinionsOthers;
