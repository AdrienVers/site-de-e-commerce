import React from 'react';
import styled from 'styled-components';

function Footer() {
    return (
        <FooterGlobal>
            <FooterSeparation></FooterSeparation>
            <FooterContact>
                <FooterContactInfo>
                    <h3>Contact</h3>
                    <FooterContactContainer>
                        <span>Téléphone : 02 39 54 14 14</span>
                        <span>Email : contact@nv.fr</span>
                        <span>
                            {' '}
                            Horaire du {new Date().toLocaleDateString()} :
                            11h-22h
                        </span>
                        <span>
                            {' '}
                            Vos avis :
                            <FooterIcons className="fa-solid fa-star"></FooterIcons>
                            <FooterIcons className="fa-solid fa-star"></FooterIcons>
                            <FooterIcons className="fa-solid fa-star"></FooterIcons>
                            <FooterIcons className="fa-solid fa-star"></FooterIcons>
                            <FooterIcons className="fa-regular fa-star-half-stroke"></FooterIcons>
                        </span>
                    </FooterContactContainer>
                </FooterContactInfo>
                <FooterContactInfo>
                    <h3>Nos services</h3>
                    <FooterContactContainer>
                        <span>Réservation d'une table</span>
                        <span>Vente à emporter</span>
                        <span>
                            Paiment par :
                            <FooterIcons className="fa-regular fa-credit-card"></FooterIcons>
                            <FooterIcons className="fa-brands fa-cc-paypal"></FooterIcons>
                            <FooterIcons className="fa-solid fa-money-bill-wave"></FooterIcons>
                            <FooterIcons className="fa-solid fa-ticket"></FooterIcons>
                        </span>
                    </FooterContactContainer>
                </FooterContactInfo>
                <FooterContactInfo>
                    <h3>Notre restaurant</h3>
                    <FooterContactContainer>
                        <span>Nos engagements</span>
                        <span>Espace presse</span>
                        <span>Programme de fidélité</span>
                    </FooterContactContainer>
                </FooterContactInfo>
                <FooterContactInfo>
                    <h3>Restez informé</h3>
                    <FooterContactContainer>
                        <span>Abonnez-vous à la newsletter</span>
                        <span>Nous rejoindre sur :</span>
                        <span>
                            <FooterIcons className="fa-brands fa-facebook"></FooterIcons>
                            <FooterIcons className="fa-brands fa-linkedin"></FooterIcons>
                            <FooterIcons className="fa-brands fa-instagram"></FooterIcons>
                            <FooterIcons className="fa-brands fa-twitter"></FooterIcons>
                        </span>
                    </FooterContactContainer>
                </FooterContactInfo>
            </FooterContact>
            <FooterCopyright>
                <CopyRight>
                    <p>© 2022 Le Normand Voyageur. Tous droits réservés.</p>
                    <p>
                        Pour votre santé, pratiquez une activité physique
                        régulière – www.mangerbouger.fr
                    </p>
                </CopyRight>
            </FooterCopyright>
        </FooterGlobal>
    );
}

const FooterGlobal = styled.div`
    position: sticky;
    top: 100%;
`;

const FooterCopyright = styled.section`
    width: 100%;
    background-color: black;
    color: white;
    padding: 10px 0px 20px 0px;
`;

const CopyRight = styled.div`
    p {
        display: block;
        text-align: center;
        padding: 5px 0px 5px 0px;
    }
`;

const FooterSeparation = styled.section`
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

const FooterContact = styled.section`
    display: flex;
    width: 100%;
    overflow: hidden;
`;

const FooterContactInfo = styled.div`
    width: 25%;
    text-align: left;
    display: flex;
    flex-direction: column;
    background-color: rgb(220, 220, 220);
    align-items: center;
    padding: 15px 0px 30px 0px;

    h3 {
        text-align: center;
        padding: 10px 0px 10px 0px;
    }

    span {
        padding: 3px 0px 3px 0px;
    }

    @media (max-width: 1000px) {
        :nth-child(2),
        :nth-child(4) {
            width: 32%;
        }

        :nth-child(1) {
            width: 36%;
        }

        :nth-child(3) {
            display: none;
        }
    }

    @media (max-width: 700px) {
        :nth-child(2),
        :nth-child(3),
        :nth-child(4) {
            display: none;
        }
        :nth-child(1) {
            width: 100%;
        }
    }
`;

const FooterContactContainer = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
`;

const FooterIcons = styled.i`
    padding: 4px;
`;

export default Footer;
