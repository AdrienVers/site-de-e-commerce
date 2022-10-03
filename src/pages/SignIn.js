import React from 'react';
import { useContext, useRef, useState } from 'react';
import { UserContext } from '../context/userContext';
import { useNavigate } from 'react-router-dom';
import useMediaQuery from '../components/useMediaQuery';
import './signUpIn.css';

function SignIn() {
    const phoneSize = useMediaQuery('(max-width: 800px)');
    const { signIn } = useContext(UserContext);

    const navigate = useNavigate();

    console.log(signIn);

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

        try {
            const credential = await signIn(
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
            setValidation(
                "Erreur, l'adresse e-mail ou le mot de passe est incorrect."
            );
        }
    };

    return (
        <div className="sign-up-in">
            <form ref={formRef} onSubmit={handleForm} className="sign-in-form">
                <div>
                    <label htmlFor="signInEmail"></label>
                    <input
                        ref={addInputs}
                        name="email"
                        required
                        type="email"
                        placeholder="Adresse e-mail"
                        className="sign-up-in-input"
                        id="signInEmail"
                    ></input>
                </div>
                <div>
                    <label htmlFor="signInPassword"></label>
                    <input
                        ref={addInputs}
                        id="signInPassword"
                        name="password"
                        required
                        type="password"
                        placeholder="Mot de passe"
                        className="sign-up-in-input"
                    ></input>
                    <p>{validation}</p>
                </div>

                <button className="sign-in-validation">Me connecter</button>
                <p>Mot de passe oublié ?</p>
                <br/>
                {phoneSize ? (
                    <p className="sign-up-link">
                        Je n'ai pas encore de compte.
                    </p>
                ) : null}
            </form>
        </div>
    );
}

export default SignIn;
