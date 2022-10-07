import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { data } from '../firebase-config';
import { opinionsData } from '../datas/opinionsData';
import '../pages/opinions.css';

function OpinionsMine() {
    const [rating, setRating] = useState(null);
    const [hoverStar, setHoverStar] = useState(null);
    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [stars, setStars] = useState('');
    const [comment, setComment] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (comment !== '' && date !== '' && name !== '' && stars !== '') {
            await addDoc(collection(data, 'todos'), {
                date,
                name,
                stars,
                comment,
                completed: false,
            });
            setName('');
            setDate('');
            setStars('');
            setComment('');
        }
    };

    return (
        <div className="opinion-container">
            <div className="opinion-title">
                <h2>Avis ({opinionsData.length}) - Écrire un commentaire ?</h2>
            </div>

            <form className="opinion-write" onSubmit={handleSubmit}>
                <div>
                    La note que vous voulez attribuer au restaurant :{' '}
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
                                        onChange={(e) =>
                                            setStars(e.target.value)
                                        }
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
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        ></input>
                    </div>
                    <div>
                        <h3>Date de votre venu</h3>
                        <input
                            className="opinion-input-my-date"
                            type="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                        ></input>
                    </div>
                </div>
                <br />
                <h3>Votre avis</h3>
                <input
                    className="opinion-input-my-opinion"
                    placeholder="Votre commentaire..."
                    type="text"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                ></input>
                <br />
                <button className="opinion-submit">Envoyer mon avis</button>
            </form>
            <br />
            <h2>Découvrez ce que pensent les autres clients du restaurant :</h2>
            <br />
        </div>
        /*
        <div>
            
        </div>
        */
    );
}

export default OpinionsMine;
