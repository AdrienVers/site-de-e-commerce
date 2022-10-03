import React from 'react';
import './reservation.css';
import Recipe from '../components/Recipe';

function Reservation() {
    function todayDate() {
        let today = new Date();
        return today.toLocaleDateString();
    }

    function weekDate() {
        let today = new Date();
        today.setDate(today.getDate() + 7);

        return today.toLocaleDateString();
    }

    return (
        <div>
            <br />
            <div className="reservation-construction">
                <h3>
                    En raison de travaux prévus dans la salle de restaurant du{' '}
                    {todayDate()} au {weekDate()}, nous ne pourrons pas prendre
                    de réservations pour cette période, toutefois, vous avez
                    toujours la possibilité de commander vos plats préférés en
                    allant sur l'onglet COMMANDE{' '}
                    <i
                        style={{
                            margin: '0px 5px 0px 5px',
                            padding: '5px',
                            borderRadius: '5px',
                            backgroundColor: '#34911c',
                            color: 'white',
                        }}
                        className="fa-solid fa-basket-shopping"
                    ></i>{' '}
                    !
                </h3>
            </div>
            <section className="footer-separation"></section>
            <div className="reservation-meanwhile">
                <Recipe />
            </div>
        </div>
    );
}

export default Reservation;
