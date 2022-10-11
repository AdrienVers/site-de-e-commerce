import React from 'react';
import { useContext, useRef, useState } from 'react';
import { UserContext } from '../context/userContext';
import { useNavigate } from 'react-router-dom';
import useMediaQuery from './useMediaQuery';
import styled from 'styled-components';

const SignInContainer = styled.div`
    width: 80%;
    height: 80%;
`;

const SignInForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    height: 100%;
    color: black;

    div {
        width : 100%;
    }

    button {
        margin: 20px 0px 20px 0px;
        padding: 8px;
        background-color: #34911c;
        color: white;
        border-color: transparent;
        text-transform: uppercase;

        &:hover {
            cursor: pointer;
        }
    }
`;

const SignInInput = styled.input`
    height: 40px;
    width: 100%;
    margin: 10px 0px 10px 0px;
    padding-left: 5px;
`;

const SignInToSignUp = styled.p`
    &:hover {
        cursor: pointer;
    }
`;

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
        <SignInContainer>
            <SignInForm ref={formRef} onSubmit={handleForm}>
                <div>
                    <label htmlFor="signInEmail"></label>
                    <SignInInput
                        ref={addInputs}
                        name="email"
                        required
                        type="email"
                        placeholder="Adresse e-mail"
                        id="signInEmail"
                    ></SignInInput>
                </div>
                <div>
                    <label htmlFor="signInPassword"></label>
                    <SignInInput
                        ref={addInputs}
                        id="signInPassword"
                        name="password"
                        required
                        type="password"
                        placeholder="Mot de passe"
                    ></SignInInput>
                    <p>{validation}</p>
                </div>

                <button type="submit">Me connecter</button>
                <p>Mot de passe oublié ?</p>
                <br />
                {phoneSize ? (
                    <SignInToSignUp>
                        Je n'ai pas encore de compte.
                    </SignInToSignUp>
                ) : null}
            </SignInForm>
        </SignInContainer>
    );
}

export default SignIn;
