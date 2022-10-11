import React from 'react';
import SignUp from '../components/SignUp';
import SignIn from '../components/SignIn';
import styled from 'styled-components';

const AccountGlobal = styled.div`
    h1 {
        margin: 30px 5px 50px 5px;
    }

    h3 {
        margin: 15px;
        padding: 10px;
        background-color: #34911c;
        color: white;
        width: 70%;
        text-transform: uppercase;
    }

    span {
        white-space: nowrap;
    }
`;

const AccountContainer = styled.div`
    display: flex;
    justify-content: space-evenly;

    @media (max-width: 800px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 40px;
    }
`;

const AccountConnexion = styled.div`
    width: 35%;
    display: flex;
    flex-direction: column;
    background-color: rgb(240, 240, 240);
    border: 1px solid black;
    box-shadow: 1px 1px 12px #555;
    height: 480px;

    @media (max-width: 1200px) {
        width: 45%;
    }

    @media (max-width: 800px) {
        width: 80%;
    }
`;

const AccountInscription = styled.div`
    width: 35%;
    display: flex;
    flex-direction: column;
    background-color: rgb(240, 240, 240);
    border: 1px solid black;
    box-shadow: 1px 1px 12px #555;
    height: 480px;
    @media (max-width: 1200px) {
        width: 45%;
    }

    @media (max-width: 800px) {
        width: 80%;
    }
`;

const AccountTitle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 25%;
`;

const AccountForm = styled.div`
    display: flex;
    height: 75%;
    justify-content: center;
    align-items: center;
`;

function Account() {
    return (
        <AccountGlobal>
            <h1>
                Bienvenue chez le <span>Normand Voyageur !</span>
            </h1>
            <AccountContainer>
                <AccountConnexion>
                    <AccountTitle>
                        <h3>Accéder à mon compte</h3>
                    </AccountTitle>
                    <AccountForm>
                        <SignIn />
                    </AccountForm>
                </AccountConnexion>
                <AccountInscription>
                    <AccountTitle>
                        <h3>Créer mon compte</h3>
                    </AccountTitle>
                    <AccountForm>
                        <SignUp />
                    </AccountForm>
                </AccountInscription>
            </AccountContainer>
        </AccountGlobal>
    );
}

export default Account;
