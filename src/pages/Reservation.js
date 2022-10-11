import React from 'react';
import Recipe from '../components/Recipe';
import styled from 'styled-components';

const ReservationSeparation = styled.section`
    background: repeating-linear-gradient(
        45deg,
        transparent,
        transparent 0.8rem,
        #ebebeb 0.8rem,
        #ebebeb 1.6rem
    );
    height: 2.4rem;
    margin-bottom: 20px;
    margin-top: 20px;
    width: 100%;
`;

const ReservationConstruction = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: aquamarine;
    padding: 5px 0px 5px 0px;

    h3 {
        width: 70%;
        line-height: 35px;
    }
`;

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
            <ReservationConstruction>
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
            </ReservationConstruction>
            <ReservationSeparation></ReservationSeparation>
            <div>
                <Recipe />
            </div>
        </div>
    );
}

export default Reservation;
