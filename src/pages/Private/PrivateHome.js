import React from 'react';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase-config';

function PrivateHome() {
    const navigate = useNavigate();

    const logOut = async () => {
        console.log('cliqué');
        try {
            await signOut(auth);
            navigate('/');
        } catch {
            alert(
                'Un problème est survenu, veuillez réessayé de vous déconnecter.'
            );
        }
    };

    return (
        <div>
            <br />
            <h4>Vous êtes désormais connecté !</h4>
            <br />
            <button onClick={logOut}>Se déconnecter</button>
        </div>
    );
}

export default PrivateHome;
