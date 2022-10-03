import React from 'react';
import './footer.css';

function Footer() {
    return (
        <div className="footer-global">
            <section className="footer-separation"></section>
            <section className="footer-contact">
                <div className="footer-contact-info">
                    <h3>Contact</h3>
                    <div className="footer-contact-container">
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
                            <i
                                id="footer-star"
                                className="fa-solid fa-star"
                            ></i>
                            <i
                                id="footer-star"
                                className="fa-solid fa-star"
                            ></i>
                            <i
                                id="footer-star"
                                className="fa-solid fa-star"
                            ></i>
                            <i
                                id="footer-star"
                                className="fa-solid fa-star"
                            ></i>
                            <i
                                id="footer-star"
                                className="fa-regular fa-star-half-stroke"
                            ></i>
                        </span>
                    </div>
                </div>
                <div className="footer-contact-info">
                    <h3>Nos services</h3>
                    <div className="footer-contact-container">
                        <span>Réservation d'une table</span>
                        <span>Vente à emporter</span>
                        <span>
                            Paiment par :
                            <i
                                id="footer-star"
                                className="fa-regular fa-credit-card"
                            ></i>
                            <i
                                id="footer-star"
                                className="fa-brands fa-cc-paypal"
                            ></i>
                            <i
                                id="footer-star"
                                className="fa-solid fa-money-bill-wave"
                            ></i>
                            <i
                                id="footer-star"
                                className="fa-solid fa-ticket"
                            ></i>
                        </span>
                    </div>
                </div>
                <div className="footer-contact-info">
                    <h3>Notre restaurant</h3>
                    <div className="footer-contact-container">
                        <span>Nos engagements</span>
                        <span>Espace presse</span>
                        <span>Programme de fidélité</span>
                    </div>
                </div>
                <div className="footer-contact-info">
                    <h3>Restez informé</h3>
                    <div className="footer-contact-container">
                        <span>Abonnez-vous à la newsletter</span>
                        <span>Nous rejoindre sur :</span>
                        <span>
                            <i
                                id="footer-social-networks"
                                className="fa-brands fa-facebook"
                            ></i>
                            <i
                                id="footer-social-networks"
                                className="fa-brands fa-linkedin"
                            ></i>
                            <i
                                id="footer-social-networks"
                                className="fa-brands fa-instagram"
                            ></i>
                            <i
                                id="footer-social-networks"
                                className="fa-brands fa-twitter"
                            ></i>
                        </span>
                    </div>
                </div>
            </section>
            <section className="footer-copyright">
                <div className="copyRight">
                    <p>© 2022 Le Normand Voyageur. Tous droits réservés.</p>
                    <p>
                        Pour votre santé, pratiquez une activité physique
                        régulière – www.mangerbouger.fr
                    </p>
                </div>
            </section>
        </div>
    );
}

export default Footer;
