import React, { useState, useEffect } from 'react';
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore';
import { data } from '../firebase-config';
import useMediaQuery from './useMediaQuery';
import './opinionsothers.css';
import Anonyme from '../assets/anonyme.png';

function OpinionsAdded({ name, image, stars, date, comment }) {
    const [todos, setTodos] = useState([]);
    const phoneSize = useMediaQuery('(max-width: 420px)');

    useEffect(() => {
        const onSnap = onSnapshot(
            query(collection(data, 'todos'), orderBy('date', 'asc')),
            (querySnapshot) => {
                let todosArray = [];
                querySnapshot.forEach((doc) => {
                    todosArray.push({ ...doc.data(), id: doc.id });
                });
                setTodos(todosArray);
            }
        );
        return () => onSnap();
    }, []);

    return (
        <div className="opinions-others-list">
            {todos.map((todo, index) => (
                <div key={index} className="opinions-added-container">
                    <div className="opinions-others-profile">
                        <img src={Anonyme} alt="Profil"></img>
                        <p>{todo.name}</p>
                    </div>
                    <div className="opinions-others-description">
                        <div className="opinions-others-row">
                            <div>
                                {[...Array(+todo.stars)].map((star, index) => {
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
                            <h3>Visit?? le {todo.date}</h3>
                        </div>
                        <div className="opinions-others-row">
                            <p>{todo.comment}</p>
                        </div>
                        <div className="opinions-others-row">
                            {phoneSize ? (
                                <button>Utile ?</button>
                            ) : (
                                <button>
                                    Ce commentaire vous a ??t?? utile ?
                                </button>
                            )}
                            {phoneSize ? (
                                <button>Signaler</button>
                            ) : (
                                <button>Signaler un abus</button>
                            )}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default OpinionsAdded;
