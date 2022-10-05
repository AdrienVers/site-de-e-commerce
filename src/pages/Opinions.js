import React, { useState } from 'react';
import OpinionsOthers from '../components/OpinionsOthers';
import './opinions.css';
import { opinionsData } from '../datas/opinionsData';

function Opinions() {
    const [rating, setRating] = useState(null);
    const [hoverStar, setHoverStar] = useState(null);

    return (
        <div className="opinion-container">
            <div className="opinion-title">
                <h2>Avis ({opinionsData.length})</h2>
            </div>
            <div className="opinion-write">
                <h2>Écrire un avis</h2>
                <br />
                <div>
                    La note que vous souhaitez attribuer à notre restaurant :{' '}
                    <span className="opinion-star-list">
                        {[...Array(5)].map((star, index) => {
                            const ratingValue = index + 1;

                            return (
                                <label key={index}>
                                    <input
                                        type="radio"
                                        name="rating"
                                        value={ratingValue}
                                        onClick={() => setRating(ratingValue)}
                                    ></input>
                                    <i
                                        id="opinion-star"
                                        className="fa-solid fa-star"
                                        style={{
                                            color:
                                                ratingValue <=
                                                (hoverStar || rating)
                                                    ? 'rgb(235, 200, 0)'
                                                    : 'grey',
                                        }}
                                        onMouseEnter={() =>
                                            setHoverStar(ratingValue)
                                        }
                                        onMouseLeave={() => setHoverStar(null)}
                                    ></i>
                                </label>
                            );
                        })}
                    </span>
                </div>
                <br />
                <div className="opinion-input-profile">
                    <div>
                        <h3>Votre nom (ou pseudo)</h3>
                        <input
                            className="opinion-input-my-name"
                            placeholder="Votre nom ou pseudo"
                        ></input>
                    </div>
                    <div>
                        <h3>Date de votre venu</h3>
                        <input
                            className="opinion-input-my-date"
                            type="date"
                        ></input>
                    </div>
                </div>
                <br />
                <h3>Votre avis</h3>
                <input
                    className="opinion-input-my-opinion"
                    placeholder="Votre commentaire..."
                ></input>
                <br />
                <button className="opinion-submit">Envoyer mon avis</button>
                <br />
                <h2>
                    Découvrez ce que pensent les autres clients du restaurant :
                </h2>
            </div>
            <div className="opinion-list">
                {opinionsData.map((item, index) => {
                    return (
                        <OpinionsOthers
                            key={index}
                            name={item.name}
                            image={item.image}
                            stars={item.stars}
                            date={item.date}
                            comment={item.comment}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default Opinions;
