import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { data } from '../firebase-config';
import { opinionsData } from '../datas/opinionsData';
// import '../pages/opinions.css';
import styled from 'styled-components';

const OpinionContainer = styled.div`
    height: 100vh;
    height: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const OpinionTitle = styled.div`
    height: 15%;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    display: flex;
    background-color: rgb(240, 240, 240);
    padding: 30px 20px 10px 20px;
    font-size: 1.3rem;
`;

const OpinionWrite = styled.form`
    height: 40%;
    width: 100%;
    background-color: rgb(240, 240, 240);
    display: flex;
    text-align: start;
    flex-direction: column;
    font-size: 1.2rem;
    padding: 20px;

    h3 {
        padding: 5px;
    }

    span {
        white-space: nowrap;
    }

    i {
        color: grey;
        font-size: 1.6rem;
        cursor: pointer;
        padding: 0px 2px 0px 2px;
    }

    input[type='radio'] {
        display: none;
    }

    button {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 120px;
        padding: 6px;

        &:hover {
            cursor: pointer;
        }
    }
`;

const OpinionInputMyOpinion = styled.input`
    height: 100px;
    padding: 5px 0px 60px 10px;
`;

const OpinionInputProfile = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    div {
        width: 100%;
    }

    h3 {
        padding-bottom : 10px;
    }

    @media (max-width: 600px) {
        flex-direction: column;
        gap: 10px;
    }
`;

const OpinionInputMyName = styled.input`
    height: 50px;
    width: 90%;
    padding: 5px 0px 10px 10px;
`;

const OpinionInputMyDate = styled.input`
    height: 50px;
    width: 90%;
    padding: 5px 0px 10px 10px;
`;

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
        <OpinionContainer>
            <OpinionTitle>
                <h2>Avis ({opinionsData.length}) - Écrire un commentaire ?</h2>
            </OpinionTitle>

            <OpinionWrite onSubmit={handleSubmit}>
                <div>
                    La note que vous voulez attribuer au restaurant :{' '}
                    <span>
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
                <OpinionInputProfile>
                    <div>
                        <h3>Votre nom (ou pseudo)</h3>
                        <OpinionInputMyName
                            placeholder="Votre nom ou pseudo"
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        ></OpinionInputMyName>
                    </div>
                    <div>
                        <h3>Date de votre venu</h3>
                        <OpinionInputMyDate
                            type="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                        ></OpinionInputMyDate>
                    </div>
                </OpinionInputProfile>
                <br />
                <h3>Votre avis</h3>
                <OpinionInputMyOpinion
                    placeholder="Votre commentaire..."
                    type="text"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                ></OpinionInputMyOpinion>
                <br />
                <button>Envoyer mon avis</button>
            </OpinionWrite>
            <br />
            <h2>Découvrez ce que pensent les autres clients du restaurant :</h2>
            <br />
        </OpinionContainer>
    );
}

export default OpinionsMine;
