import { motion } from 'framer-motion';
import Locaux from '../assets/locaux.jpg';
import SolarPanel from '../assets/solaire.jpg';
import Valorisation from '../assets/valorisation.png';
import './engagements.css';

const imageAnimateFromLeft = {
    offscreen: { x: -100, opacity: 0 },
    onscreen: {
        x: 0,
        opacity: 1,
        transition: { duration: 2 },
    },
};

const imageAnimateFromRight = {
    offscreen: { x: 100, opacity: 0 },
    onscreen: {
        x: 0,
        opacity: 1,
        transition: { duration: 2 },
    },
};

const textAnimate = {
    offscreen: { opacity: 0 },
    onscreen: { opacity: 1, transition: { duration: 1 } },
};

function Engagements() {
    return (
        <div className="EngagementsGlobal">
            <motion.div
                className="EngagementsContainer"
                initial={'offscreen'}
                whileInView={'onscreen'}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ staggerChildren: 0.6 }}
            >
                <motion.div
                    className="EngagementsImage"
                    variants={imageAnimateFromLeft}
                >
                    <img src={Locaux} alt="locaux"></img>
                </motion.div>
                <motion.div className="EngagementsText" variants={textAnimate}>
                    <h2>Des produits frais et locaux</h2>
                    <h3>
                        L'intégralité de nos produits sont naturels et issus de
                        l'agriculture biologique, préparés par nos soins, afin
                        de vous faire découvrir une grande sélection de plats
                        d'ailleurs, tout en restant en Normandie !
                    </h3>
                    <ul>
                        <li>
                            Nos fruits, légumes et plantes aromatiques sont
                            issus de notre jardin potager.
                        </li>
                        <li>
                            Nos œufs, poulets et bovins sont élevés en plein air
                            dans notre ferme.
                        </li>
                        <li>
                            Nos moules sont issues de différents élevages
                            (corde, fond et bouchot).
                        </li>
                        <li>
                            Notre crème fraîche nous est fournie par notre
                            partenaire Isigny-ste-Mère, située dans le Calvados.
                        </li>
                    </ul>
                </motion.div>
            </motion.div>
            <motion.div
                className="EngagementsContainer"
                initial={'offscreen'}
                whileInView={'onscreen'}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ staggerChildren: 0.5 }}
            >
                <motion.div className="EngagementsText" variants={textAnimate}>
                    <h2>Modernisation de notre restaurant</h2>
                    <h3>
                        L'infrastructure de notre restaurant a été étudiée afin
                        de respecter au mieux l’environnement, en étant moins
                        énergivore (surfaces optimisées, évolution des
                        matériaux), et moins polluante.
                    </h3>
                    <ul>
                        <li>
                            Mise en place de 20 panneaux solaires, fournissant
                            une puissance nominale de 6 kWc.
                        </li>
                        <li>
                            Automatisation de notre compteurs d’eau permettant
                            d'analyser notre consommation d’eau.
                        </li>
                        <li>
                            Récupération de l'eau de pluie pour l’alimentation
                            des sanitaires et le nettoyage du sol.
                        </li>
                    </ul>
                </motion.div>
                <motion.div
                    className="EngagementsImage"
                    variants={imageAnimateFromRight}
                >
                    <img src={SolarPanel} alt="Panneaux solaires"></img>
                </motion.div>
            </motion.div>
            <motion.div
                className="EngagementsContainer"
                initial={'offscreen'}
                whileInView={'onscreen'}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ staggerChildren: 0.5 }}
            >
                <motion.div
                    className="EngagementsImage"
                    variants={imageAnimateFromLeft}
                >
                    <img src={Valorisation} alt="Compost"></img>
                </motion.div>
                <motion.div className="EngagementsText" variants={textAnimate}>
                    <h2>Valorisation de nos déchets</h2>
                    <h3>
                        Nous avons la volonté de lutter contre la consommation
                        excessive et le gaspillage alimentaire. Pour cela, nous
                        avons mis en place un système de valorisation de
                        l'ensemble de nos déchets.
                    </h3>
                    <ul>
                        <li>
                            Des Doggy bag sont disponibles dans notre restaurant
                            à la demande du client.
                        </li>
                        <li>
                            Les compteurs d’eau nous alerte en cas de
                            consommations excessives.
                        </li>
                        <li>
                            100% de nos huiles alimentaires usagées sont
                            collectées et transformées en biocarburant.
                        </li>
                        <li>
                            Nous sommes en lien étroit avec l'agence de la
                            transition écologique : https://www.ademe.fr/.
                        </li>
                    </ul>
                </motion.div>
            </motion.div>
        </div>
    );
}

export default Engagements;
