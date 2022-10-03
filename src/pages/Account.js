import React from 'react';
import SignUp from './SignUp';
import SignIn from './SignIn';
import './account.css';

function Account() {
    return (
        <div className="account-global">
            <h1>Bienvenue chez le Normand Voyageur !</h1>
            <div className="account-container">
                <div className="account-connexion">
                    <div className="account-title">
                        <h3>Accéder à mon compte</h3>
                    </div>
                    <div className="account-form">
                        <SignIn />
                    </div>
                </div>
                <div className="account-or"></div>
                <div className="account-inscription">
                    <div className="account-title">
                        <h3>Créer mon compte</h3>
                    </div>
                    <div className="account-form">
                        <SignUp />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Account;
