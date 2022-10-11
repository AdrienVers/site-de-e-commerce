import BannerImg from '../assets/renovation.jpg';
import CuisinierImg from '../assets/cook.jpg';
import PotagerImg from '../assets/permaculture.jpg';
import FideliteImg from '../assets/fire.jpg';

const sliderData = [
    {
        id: 1,
        background: BannerImg,
        name: 'restaurant',
        buttonName: 'Découvrir',
        title: 'office manager',
        quote: 'Les travaux de rénovation étant terminés, vous pouvez de nouveau savourer vos plats préférés !',
        link: '/dishes/',
    },
    {
        id: 2,
        background: CuisinierImg,
        name: 'cuisinier',
        buttonName: 'Commander',
        title: 'regular guy',
        quote: 'Le plat du chef de cette semaine : Le Bandeja Paisa, originaire de Colombie !',
        link: '/takeaway/',
    },
    {
        id: 3,
        background: PotagerImg,
        name: 'potager',
        buttonName: 'En savoir plus',
        title: 'product designer',
        quote: 'Notre mission : Garantir la qualité de nos produits et vous proposer le meilleur !',
        link: '/engagements/',
    },
    {
        id: 4,
        background: FideliteImg,
        name: 'fidelité',
        buttonName: 'Me connecter',
        title: 'the boss',
        quote: 'Découvrez notre nouveau programme de fidélité pour vos prochaines commandes !',
        link: '/account/',
    },
];

export default sliderData;
