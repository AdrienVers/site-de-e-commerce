import React from 'react';
import './dishes.css';
import useMediaQuery from '../components/useMediaQuery';

function Dishes() {
    const phoneSize = useMediaQuery('(max-width: 900px)');

    return (
        <div>
            {phoneSize ? (
                <div className="DishesContainer">
                    <input type="checkbox" id="resp-c1" />
                    <input type="checkbox" id="resp-c2" />
                    <input type="checkbox" id="resp-c3" />
                    <input type="checkbox" id="resp-c4" />
                    <input type="checkbox" id="resp-c5" />
                    <input type="checkbox" id="resp-c6" />
                    <div className="resp-flip-book">
                        <div className="resp-flip" id="resp-p1">
                            <div className="resp-back"></div>
                            <div className="resp-front">
                                <article className="resp-front-border">
                                    <article className="resp-front-background">
                                        <div className="resp-front-container">
                                            <h2>Le Normand Voyageur</h2>
                                            <h5>
                                                Depuis la création de notre
                                                restaurant, nous nous sommes
                                                engagés à vous proposer des
                                                produits de qualités et issus
                                                d'une agriculture responsable et
                                                respectueuse de l'environnement.
                                            </h5>
                                            <h5>
                                                L'intégralité des produits
                                                proposés sur cette carte sont
                                                des productions locaux, préparés
                                                par nos soins, afin de vous
                                                faire découvrir et déguster une
                                                grande sélection de plats
                                                d'ailleurs, tout en restant en
                                                Normandie !
                                            </h5>
                                            <h5>
                                                Si vous êtes une personne avec
                                                des allergies connues, n'hesitez
                                                pas à nous le dire, nous vous
                                                conseillerons et vous
                                                indiquerons les plats les plus
                                                adaptés.
                                            </h5>
                                            <h5>
                                                Nous vous souhaitons un bon
                                                repas !
                                            </h5>
                                        </div>
                                        <div className="resp-front-button-cover">
                                            <label
                                                className="resp-next-btn1"
                                                for="resp-c1"
                                            >
                                                <i className="fa-solid fa-arrow-right"></i>
                                            </label>
                                        </div>
                                    </article>
                                </article>
                            </div>
                        </div>
                        <div className="resp-flip" id="resp-p2">
                            <div className="resp-back"></div>
                            <div className="resp-front">
                                <article className="resp-front-border">
                                    <article className="resp-front-background">
                                        <div className="resp-front-container">
                                            <h2>Nos formules</h2>
                                            <ul className="dots">
                                                <li>
                                                    <h3>
                                                        <span>
                                                            Sélection de la
                                                            semaine
                                                        </span>
                                                        <span>14,90 €</span>
                                                    </h3>
                                                </li>
                                            </ul>
                                            <ul>
                                                <h4>Entrée + Plat</h4>
                                            </ul>
                                            <ul>
                                                <p>
                                                    Selon les produits de saison
                                                    et inspirations du chef.
                                                </p>
                                            </ul>
                                            <ul className="dots">
                                                <li>
                                                    <h3>
                                                        <span>
                                                            Un déjeuner bien
                                                            mérité
                                                        </span>
                                                        <span>15,90 €</span>
                                                    </h3>
                                                </li>
                                            </ul>
                                            <ul>
                                                <h4>
                                                    Entrée + Plat OU Plat +
                                                    Dessert
                                                </h4>
                                            </ul>
                                            <ul>
                                                <p>
                                                    Libre choix parmi la carte
                                                    proposée.
                                                </p>
                                            </ul>
                                            <ul className="dots">
                                                <li>
                                                    <h3>
                                                        <span>
                                                            L'explorateur
                                                            gourmant
                                                        </span>
                                                        <span>19,90 €</span>
                                                    </h3>
                                                </li>
                                            </ul>
                                            <ul>
                                                <h4>Entrée + Plat + Dessert</h4>
                                            </ul>
                                            <ul>
                                                <p>
                                                    Chaque selection doit avoir
                                                    une origine différente.
                                                </p>
                                            </ul>
                                            <ul className="dots">
                                                <li>
                                                    <h3>
                                                        <span>
                                                            Le voyageur affamé
                                                        </span>
                                                        <span>23,90 €</span>
                                                    </h3>
                                                </li>
                                            </ul>
                                            <ul>
                                                <h4>
                                                    Entrée + Plat + Dessert +
                                                    Boisson
                                                </h4>
                                            </ul>
                                            <ul>
                                                <p>
                                                    Libre choix parmi la carte
                                                    proposée.
                                                </p>
                                            </ul>
                                        </div>
                                        <div className="resp-front-button">
                                            <label
                                                className="resp-back-btn1"
                                                for="resp-c1"
                                            >
                                                <i className="fa-solid fa-arrow-left"></i>
                                            </label>
                                            <label
                                                className="resp-next-btn1"
                                                for="resp-c2"
                                            >
                                                <i className="fa-solid fa-arrow-right"></i>
                                            </label>
                                        </div>
                                    </article>
                                </article>
                            </div>
                        </div>
                        <div className="resp-flip" id="resp-p3">
                            <div className="resp-back"></div>
                            <div className="resp-front">
                                <article className="resp-front-border">
                                    <article className="resp-front-background">
                                        <div className="resp-front-container">
                                            <h2>Nos entrées</h2>
                                            <ul className="dots">
                                                <li>
                                                    <h4>
                                                        <span>Gravlax</span>
                                                        <span>7 €</span>
                                                    </h4>
                                                </li>
                                            </ul>
                                            <ul>
                                                <p>
                                                    Saumon, bettrave, citron,
                                                    aneth.
                                                </p>
                                            </ul>
                                            <ul className="dots">
                                                <li>
                                                    <h4>
                                                        <span>
                                                            Salade grecque
                                                        </span>
                                                        <span>7 €</span>
                                                    </h4>
                                                </li>
                                            </ul>
                                            <ul>
                                                <p>
                                                    Féta, tomate, concombre,
                                                    poivron, oignon, citron.
                                                </p>
                                            </ul>
                                            <ul className="dots">
                                                <li>
                                                    <h4>
                                                        <span>Sklandrausì</span>
                                                        <span>8 €</span>
                                                    </h4>
                                                </li>
                                            </ul>
                                            <ul>
                                                <p>
                                                    Carotte, pomme de terre,
                                                    miel, salade de crudités.
                                                </p>
                                            </ul>
                                        </div>
                                        <div className="resp-front-button">
                                            <label
                                                className="resp-back-btn1"
                                                for="resp-c2"
                                            >
                                                <i className="fa-solid fa-arrow-left"></i>
                                            </label>
                                            <label
                                                className="resp-next-btn1"
                                                for="resp-c3"
                                            >
                                                <i className="fa-solid fa-arrow-right"></i>
                                            </label>
                                        </div>
                                    </article>
                                </article>
                            </div>
                        </div>
                        <div className="resp-flip" id="resp-p4">
                            <div className="resp-back"></div>
                            <div className="resp-front">
                                <article className="resp-front-border">
                                    <article className="resp-front-background">
                                        <div className="resp-front-container">
                                            <h2>Nos plats</h2>
                                            <ul className="dots">
                                                <li>
                                                    <h4>
                                                        <span>
                                                            Hamburger des
                                                            balkans
                                                        </span>
                                                        <span>10 €</span>
                                                    </h4>
                                                </li>
                                            </ul>
                                            <ul>
                                                <p>
                                                    Bœuf, paprika, feta,
                                                    aubergine, tomate, oignons,
                                                    servi avec frites.
                                                </p>
                                            </ul>
                                            <ul className="dots">
                                                <li>
                                                    <h4>
                                                        <span>
                                                            Moules Frites
                                                        </span>
                                                        <span>11 €</span>
                                                    </h4>
                                                </li>
                                            </ul>
                                            <ul>
                                                <p>
                                                    Moules, oignon, cidre, crème
                                                    fraiche, servi avec frites.
                                                </p>
                                            </ul>
                                            <ul className="dots">
                                                <li>
                                                    <h4>
                                                        <span>Poulet Coco</span>
                                                        <span>12 €</span>
                                                    </h4>
                                                </li>
                                            </ul>
                                            <ul>
                                                <p>
                                                    Poulet, riz, gingembre,
                                                    oignon, curry, lait de coco.
                                                </p>
                                            </ul>
                                            <ul className="dots">
                                                <li>
                                                    <h4>
                                                        <span>
                                                            Bandeja Paisa
                                                        </span>
                                                        <span>12 €</span>
                                                    </h4>
                                                </li>
                                            </ul>
                                            <ul>
                                                <p>
                                                    Bœuf, haricots rouges,
                                                    oeufs, avocat, banane,
                                                    oignon.
                                                </p>
                                            </ul>
                                        </div>
                                        <div className="resp-front-button">
                                            <label
                                                className="resp-back-btn1"
                                                for="resp-c3"
                                            >
                                                <i className="fa-solid fa-arrow-left"></i>
                                            </label>
                                            <label
                                                className="resp-next-btn1"
                                                for="resp-c4"
                                            >
                                                <i className="fa-solid fa-arrow-right"></i>
                                            </label>
                                        </div>
                                    </article>
                                </article>
                            </div>
                        </div>

                        <div className="resp-flip" id="resp-p5">
                            <div className="resp-back"></div>
                            <div className="resp-front">
                                <article className="resp-front-border">
                                    <article className="resp-front-background">
                                        <div className="resp-front-container">
                                            <h2>Nos desserts</h2>
                                            <ul className="dots">
                                                <li>
                                                    <h4>
                                                        <span>Amandine</span>
                                                        <span>5 €</span>
                                                    </h4>
                                                </li>
                                            </ul>
                                            <ul>
                                                <p>
                                                    Pomme, amande, pâte sablée,
                                                    chantilly.
                                                </p>
                                            </ul>
                                            <ul className="dots">
                                                <li>
                                                    <h4>
                                                        <span>Brownie</span>
                                                        <span>5 €</span>
                                                    </h4>
                                                </li>
                                            </ul>
                                            <ul>
                                                <p>
                                                    Chocolat noir, noisette,
                                                    noix, chantilly.
                                                </p>
                                            </ul>
                                            <ul className="dots">
                                                <li>
                                                    <h4>
                                                        <span>Dobos torte</span>
                                                        <span>6 €</span>
                                                    </h4>
                                                </li>
                                            </ul>
                                            <ul>
                                                <p>Chocolat noir, caramel.</p>
                                            </ul>
                                            <ul className="dots">
                                                <li>
                                                    <h4>
                                                        <span>Diplomate</span>
                                                        <span>6 €</span>
                                                    </h4>
                                                </li>
                                            </ul>
                                            <ul>
                                                <p>
                                                    Biscuits boudoir, confiture
                                                    d'abricot et de pomme, rhum.
                                                </p>
                                            </ul>
                                        </div>
                                        <div className="resp-front-button">
                                            <label
                                                className="resp-back-btn1"
                                                for="resp-c4"
                                            >
                                                <i className="fa-solid fa-arrow-left"></i>
                                            </label>
                                            <label
                                                className="resp-next-btn1"
                                                for="resp-c5"
                                            >
                                                <i className="fa-solid fa-arrow-right"></i>
                                            </label>
                                        </div>
                                    </article>
                                </article>
                            </div>
                        </div>
                        <div className="resp-flip" id="resp-p6">
                            <div className="resp-back"></div>
                            <div className="resp-front">
                                <article className="resp-front-border">
                                    <article className="resp-front-background">
                                        <div className="resp-front-container">
                                            <h2>Nos boissons</h2>
                                            <ul className="dots">
                                                <li>
                                                    <h4>
                                                        <span>
                                                            Jus d'orange
                                                        </span>
                                                        <span>2 €</span>
                                                    </h4>
                                                </li>
                                            </ul>
                                            <ul>
                                                <p>
                                                    Oranges de notre jardin
                                                    potager.
                                                </p>
                                            </ul>
                                            <ul className="dots">
                                                <li>
                                                    <h4>
                                                        <span>
                                                            Cocktail maison (25
                                                            cl)
                                                        </span>
                                                        <span>5 €</span>
                                                    </h4>
                                                </li>
                                            </ul>
                                            <ul>
                                                <p>
                                                    Bière artisanale, Cointreau,
                                                    rhum, citron vert.
                                                </p>
                                            </ul>
                                            <ul className="dots">
                                                <li>
                                                    <h4>
                                                        <span>
                                                            Vin rouge (25 cl)
                                                        </span>
                                                        <span>3 €</span>
                                                    </h4>
                                                </li>
                                            </ul>
                                            <ul>
                                                <p>Pinot noir du calvados.</p>
                                            </ul>

                                            <ul className="dots">
                                                <li>
                                                    <h4>
                                                        <span>
                                                            Cidre (25 cl)
                                                        </span>
                                                        <span>2 €</span>
                                                    </h4>
                                                </li>
                                            </ul>
                                            <ul>
                                                <p>
                                                    Pommes de notre jardin
                                                    potager.
                                                </p>
                                            </ul>

                                            <ul className="dots">
                                                <li>
                                                    <h4>
                                                        <span>
                                                            Calvados (4 cl)
                                                        </span>
                                                        <span>5 €</span>
                                                    </h4>
                                                </li>
                                            </ul>
                                            <ul>
                                                <p>
                                                    Eau-de-vie réalisée à partir
                                                    de pommes et poires.
                                                </p>
                                            </ul>
                                        </div>
                                        <div className="resp-front-button">
                                            <label
                                                className="resp-back-btn1"
                                                for="resp-c5"
                                            >
                                                <i className="fa-solid fa-arrow-left"></i>
                                            </label>
                                        </div>
                                    </article>
                                </article>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="DishesContainer">
                    <div className="book">
                        <input type="checkbox" id="c1" />
                        <input type="checkbox" id="c2" />
                        <input type="checkbox" id="c3" />
                        <div id="cover">
                            <article className="front-border">
                                <article className="front-background">
                                    <h2>Le Normand Voyageur</h2>
                                    <h5>
                                        Depuis la création de notre restaurant,
                                        nous nous sommes engagés à vous proposer
                                        des produits de qualités et issus d'une
                                        agriculture responsable et respectueuse
                                        de l'environnement.
                                    </h5>
                                    <h5>
                                        L'intégralité des produits proposés sur
                                        cette carte de nos produits sont
                                        naturels et issus de l'agriculture
                                        biologique, préparés par nos soins, afin
                                        de vous faire découvrir une grande
                                        sélection de plats d'ailleurs, tout en
                                        restant en Normandie !
                                    </h5>
                                    <h5>
                                        Si vous êtes une personne avec des
                                        allergies connues, n'hesitez pas à nous
                                        le dire, nous vous conseillerons et vous
                                        indiquerons les plats les plus adaptés.
                                    </h5>
                                    <h5>
                                        Nous vous souhaitons un très bon repas !
                                    </h5>
                                </article>
                            </article>
                        </div>
                        <div className="flip-book">
                            <div className="flip" id="p1">
                                <div className="back">
                                    <article className="front-border">
                                        <article className="front-background">
                                            <div className="front-container">
                                                <h2>Nos entrées</h2>
                                                <ul className="dots">
                                                    <li>
                                                        <h4>
                                                            <span>Gravlax</span>
                                                            <span>7 €</span>
                                                        </h4>
                                                    </li>
                                                </ul>
                                                <ul>
                                                    <p>
                                                        Saumon, bettrave,
                                                        citron, aneth.
                                                    </p>
                                                </ul>
                                                <ul className="dots">
                                                    <li>
                                                        <h4>
                                                            <span>
                                                                Salade grecque
                                                            </span>
                                                            <span>7 €</span>
                                                        </h4>
                                                    </li>
                                                </ul>
                                                <ul>
                                                    <p>
                                                        Féta, tomate, concombre,
                                                        poivron, oignon, citron.
                                                    </p>
                                                </ul>
                                                <ul className="dots">
                                                    <li>
                                                        <h4>
                                                            <span>
                                                                Sklandrausì
                                                            </span>
                                                            <span>8 €</span>
                                                        </h4>
                                                    </li>
                                                </ul>
                                                <ul>
                                                    <p>
                                                        Carotte, pomme de terre,
                                                        miel, salade de
                                                        crudités.
                                                    </p>
                                                </ul>
                                            </div>
                                            <div className="front-button-back">
                                                <label
                                                    className="back-btn1"
                                                    for="c1"
                                                >
                                                    <i className="fa-solid fa-arrow-left"></i>
                                                </label>
                                            </div>
                                        </article>
                                    </article>
                                </div>
                                <div className="front">
                                    <article className="front-border">
                                        <article className="front-background">
                                            <div className="front-container">
                                                <h2>Nos formules</h2>
                                                <ul className="dots">
                                                    <li>
                                                        <h3>
                                                            <span>
                                                                Sélection de la
                                                                semaine
                                                            </span>
                                                            <span>14,90 €</span>
                                                        </h3>
                                                    </li>
                                                </ul>
                                                <ul>
                                                    <h4>Entrée + Plat</h4>
                                                </ul>
                                                <ul>
                                                    <p>
                                                        Selon les produits de
                                                        saison et inspirations
                                                        du chef.
                                                    </p>
                                                </ul>
                                                <ul className="dots">
                                                    <li>
                                                        <h3>
                                                            <span>
                                                                Un déjeuner bien
                                                                mérité
                                                            </span>
                                                            <span>15,90 €</span>
                                                        </h3>
                                                    </li>
                                                </ul>
                                                <ul>
                                                    <h4>
                                                        Entrée + Plat OU Plat +
                                                        Dessert
                                                    </h4>
                                                </ul>
                                                <ul>
                                                    <p>
                                                        Libre choix parmi la
                                                        carte proposée.
                                                    </p>
                                                </ul>
                                                <ul className="dots">
                                                    <li>
                                                        <h3>
                                                            <span>
                                                                L'explorateur
                                                                gourmant
                                                            </span>
                                                            <span>19,90 €</span>
                                                        </h3>
                                                    </li>
                                                </ul>
                                                <ul>
                                                    <h4>
                                                        Entrée + Plat + Dessert
                                                    </h4>
                                                </ul>
                                                <ul>
                                                    <p>
                                                        Chaque selection doit
                                                        avoir une origine
                                                        différente.
                                                    </p>
                                                </ul>
                                                <ul className="dots">
                                                    <li>
                                                        <h3>
                                                            <span>
                                                                Le voyageur
                                                                affamé
                                                            </span>

                                                            <span>23,90 €</span>
                                                        </h3>
                                                    </li>
                                                </ul>
                                                <ul>
                                                    <h4>
                                                        Entrée + Plat + Dessert
                                                        + Boisson
                                                    </h4>
                                                </ul>
                                                <ul>
                                                    <p>
                                                        Libre choix parmi la
                                                        carte proposée.
                                                    </p>
                                                </ul>
                                            </div>
                                            <div className="front-button-next">
                                                <label
                                                    className="next-btn1"
                                                    for="c1"
                                                >
                                                    <i className="fa-solid fa-arrow-right"></i>
                                                </label>
                                            </div>
                                        </article>
                                    </article>
                                </div>
                            </div>
                            <div className="flip" id="p2">
                                <div className="back">
                                    <article className="front-border">
                                        <article className="front-background">
                                            <div className="front-container">
                                                <h2>Nos desserts</h2>
                                                <ul className="dots">
                                                    <li>
                                                        <h4>
                                                            <span>
                                                                Amandine
                                                            </span>
                                                            <span>5 €</span>
                                                        </h4>
                                                    </li>
                                                </ul>
                                                <ul>
                                                    <p>
                                                        Pomme, amande, pâte
                                                        sablée, chantilly.
                                                    </p>
                                                </ul>
                                                <ul className="dots">
                                                    <li>
                                                        <h4>
                                                            <span>Brownie</span>
                                                            <span>5 €</span>
                                                        </h4>
                                                    </li>
                                                </ul>
                                                <ul>
                                                    <p>
                                                        Chocolat noir, noisette,
                                                        noix, chantilly.
                                                    </p>
                                                </ul>
                                                <ul className="dots">
                                                    <li>
                                                        <h4>
                                                            <span>
                                                                Dobos torte
                                                            </span>
                                                            <span>6 €</span>
                                                        </h4>
                                                    </li>
                                                </ul>
                                                <ul>
                                                    <p>
                                                        Chocolat noir, caramel.
                                                    </p>
                                                </ul>
                                                <ul className="dots">
                                                    <li>
                                                        <h4>
                                                            <span>
                                                                Diplomate
                                                            </span>
                                                            <span>6 €</span>
                                                        </h4>
                                                    </li>
                                                </ul>
                                                <ul>
                                                    <p>
                                                        Biscuits boudoir,
                                                        confiture d'abricot et
                                                        de pomme, rhum.
                                                    </p>
                                                </ul>
                                            </div>
                                            <div className="front-button-back">
                                                <label
                                                    className="back-btn1"
                                                    for="c2"
                                                >
                                                    <i className="fa-solid fa-arrow-left"></i>
                                                </label>
                                            </div>
                                        </article>
                                    </article>
                                </div>
                                <div className="front">
                                    <article className="front-border">
                                        <article className="front-background">
                                            <div className="front-container">
                                                <h2>Nos plats</h2>
                                                <ul className="dots">
                                                    <li>
                                                        <h4>
                                                            <span>
                                                                Hamburger des
                                                                balkans
                                                            </span>
                                                            <span>10 €</span>
                                                        </h4>
                                                    </li>
                                                </ul>
                                                <ul>
                                                    <p>
                                                        Bœuf, paprika, feta,
                                                        aubergine, tomate,
                                                        oignons, servi avec
                                                        frites.
                                                    </p>
                                                </ul>
                                                <ul className="dots">
                                                    <li>
                                                        <h4>
                                                            <span>
                                                                Moules Frites
                                                            </span>
                                                            <span>11 €</span>
                                                        </h4>
                                                    </li>
                                                </ul>
                                                <ul>
                                                    <p>
                                                        Moules, oignon, cidre,
                                                        crème fraiche, servi
                                                        avec frites.
                                                    </p>
                                                </ul>
                                                <ul className="dots">
                                                    <li>
                                                        <h4>
                                                            <span>
                                                                Poulet Coco
                                                            </span>
                                                            <span>12 €</span>
                                                        </h4>
                                                    </li>
                                                </ul>
                                                <ul>
                                                    <p>
                                                        Poulet, riz, gingembre,
                                                        oignon, curry, lait de
                                                        coco.
                                                    </p>
                                                </ul>
                                                <ul className="dots">
                                                    <li>
                                                        <h4>
                                                            <span>
                                                                Bandeja Paisa
                                                            </span>
                                                            <span>12 €</span>
                                                        </h4>
                                                    </li>
                                                </ul>
                                                <ul>
                                                    <p>
                                                        Bœuf, haricots rouges,
                                                        oeufs, avocat, banane,
                                                        oignon.
                                                    </p>
                                                </ul>
                                            </div>

                                            <div className="front-button-next">
                                                <label
                                                    className="next-btn1"
                                                    for="c2"
                                                >
                                                    <i className="fa-solid fa-arrow-right"></i>
                                                </label>
                                            </div>
                                        </article>
                                    </article>
                                </div>
                            </div>
                            <div className="flip" id="p3">
                                <div className="back">
                                    <label className="back-btn" for="c3">
                                        <i className="fa-solid fa-arrow-left"></i>
                                    </label>
                                </div>
                            </div>
                            <div className="front">
                                <article className="front-border">
                                    <article className="front-background">
                                        <h2>Nos boissons</h2>
                                        <ul className="dots">
                                            <li>
                                                <h4>
                                                    <span>Jus d'orange</span>
                                                    <span>2 €</span>
                                                </h4>
                                            </li>
                                        </ul>
                                        <ul>
                                            <p>
                                                Oranges de notre jardin potager.
                                            </p>
                                        </ul>
                                        <ul className="dots">
                                            <li>
                                                <h4>
                                                    <span>
                                                        Cocktail maison (25 cl)
                                                    </span>
                                                    <span>5 €</span>
                                                </h4>
                                            </li>
                                        </ul>
                                        <ul>
                                            <p>
                                                Bière artisanale, Cointreau,
                                                rhum, citron vert.
                                            </p>
                                        </ul>
                                        <ul className="dots">
                                            <li>
                                                <h4>
                                                    <span>
                                                        Vin rouge (25 cl)
                                                    </span>
                                                    <span>3 €</span>
                                                </h4>
                                            </li>
                                        </ul>
                                        <ul>
                                            <p>Pinot noir du calvados.</p>
                                        </ul>

                                        <ul className="dots">
                                            <li>
                                                <h4>
                                                    <span>Cidre (25 cl)</span>
                                                    <span>2 €</span>
                                                </h4>
                                            </li>
                                        </ul>
                                        <ul>
                                            <p>
                                                Pommes de notre jardin potager.
                                            </p>
                                        </ul>

                                        <ul className="dots">
                                            <li>
                                                <h4>
                                                    <span>Calvados (4 cl)</span>
                                                    <span>5 €</span>
                                                </h4>
                                            </li>
                                        </ul>
                                        <ul>
                                            <p>
                                                Eau-de-vie réalisée à partir de
                                                pommes et poires.
                                            </p>
                                        </ul>
                                    </article>
                                </article>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Dishes;
