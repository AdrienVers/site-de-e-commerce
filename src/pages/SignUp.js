import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect } from 'react';
import { useContext, useRef, useState } from 'react';
import { UserContext } from '../context/userContext';
import { useNavigate } from 'react-router-dom';
import './signUpIn.css';

function SignUp() {
    const { signUp } = useContext(UserContext);

    const navigate = useNavigate();

    console.log(signUp);

    const [validation, setValidation] = useState('');
    const [characterNumber, setcharacterNumber] = useState('');

    const inputs = useRef([]);
    const addInputs = (el) => {
        if (el && !inputs.current.includes(el)) {
            inputs.current.push(el);
        }
    };

    const formRef = useRef([]);

    const handleForm = async (e) => {
        e.preventDefault();

        console.log(inputs);

        if (
            (inputs.current[1].value.length && inputs.current[2].value.length) <
            6
        ) {
            setcharacterNumber(
                <span>
                    <i
                        style={{ color: 'red' }}
                        className="fa-solid fa-xmark"
                    ></i>
                    <span> au minimum 6 caractères</span>
                </span>
            );
            return;
        } else {
            setcharacterNumber(
                <span>
                    <i
                        style={{ color: 'green' }}
                        className="fa-solid fa-check"
                    ></i>
                    <span> au minimum 6 caractères</span>
                </span>
            );
            if (inputs.current[1].value !== inputs.current[2].value) {
                setValidation(
                    <span>
                        <i
                            style={{ color: 'red' }}
                            className="fa-solid fa-xmark"
                        ></i>
                        <span>
                            {' '}
                            Les deux mots de passe doivent être identiques !
                        </span>
                    </span>
                );
                return;
            } else if (inputs.current[1].value === inputs.current[2].value) {
                setValidation(
                    <span>
                        <i
                            style={{ color: 'green' }}
                            className="fa-solid fa-check"
                        ></i>
                        <span> Les deux mots de passe sont identiques !</span>
                    </span>
                );
            }
        }

        /*
        if (inputs.current[1].value !== inputs.current[2].value) {
            setValidation(
                <span>
                    <i
                        style={{ color: 'red' }}
                        className="fa-solid fa-xmark"
                    ></i>
                    <span>
                        {' '}
                        Les deux mots de passe doivent être identiques !
                    </span>
                </span>
            );
            return;
        }
        */

        try {
            const credential = await signUp(
                inputs.current[0].value,
                inputs.current[1].value
            );

            formRef.current.reset();
            setValidation('Bienvenue !');
            console.log(credential);
            navigate('/private/private-home');
        } catch (err) {
            console.log(err);
            console.dir(err);

            if (err.code === 'auth/invalid-email') {
                setValidation(
                    <span>
                        <i
                            style={{ color: 'red' }}
                            className="fa-solid fa-xmark"
                        ></i>
                        <span>
                            {' '}
                            Votre e-mail doit être dans un format de type
                            xxx@yyy.zz
                        </span>
                    </span>
                );
            }

            if (err.code === 'auth/email-already-in-use') {
                setValidation(
                    <span>
                        <i
                            style={{ color: 'red' }}
                            className="fa-solid fa-xmark"
                        ></i>
                        <span>
                            {' '}
                            L'adresse e-mail que vous venez d'entrer est déjà
                            utilisée.
                        </span>
                    </span>
                );
            }
        }
    };

    return (
        <div className="sign-up-in">
                <form
                    ref={formRef}
                    onSubmit={handleForm}
                    className="sign-up-form"
                >
                    <div>
                        <label htmlFor="signUpEmail"></label>
                        <input
                            ref={addInputs}
                            name="email"
                            required
                            type="email"
                            placeholder="Adresse e-mail"
                            className="sign-up-in-input"
                            id="signUpEmail"
                        ></input>
                    </div>
                    <div>
                        <label htmlFor="signUpPassword"></label>
                        <input
                            ref={addInputs}
                            id="signUpPassword"
                            name="password"
                            required
                            type="password"
                            placeholder="Mot de passe"
                            className="sign-up-in-input"
                        ></input>
                    </div>
                    <div>
                        <label htmlFor="signUpPasswordConfirmation"></label>
                        <input
                            ref={addInputs}
                            id="signUpPasswordConfirmation"
                            name="passwordConfirmation"
                            required
                            type="password"
                            placeholder="Confirmer"
                            className="sign-up-in-input"
                        ></input>
                        <p>{characterNumber}</p>
                        <p>{validation}</p>
                    </div>
                    <button type="submit" className="sign-up-validation">
                        Valider mon inscription
                    </button>
                </form>
        </div>
    );
}

export default SignUp;
