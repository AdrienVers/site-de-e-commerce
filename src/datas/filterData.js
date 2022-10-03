import React from 'react';
import Beef from '../assets/boeuf.png';
import Chicken from '../assets/poulet.png';
import Fish from '../assets/poisson.png';
import Vege from '../assets/vege.png';
import Mussel from '../assets/moule.png';

import styled from 'styled-components';

const Image = styled.img`
    height: 30px;
    width: 30px;
`;

export const filterData = [
    {
        title: 'Filtre',
        icon: '',
        iconClosed: <i className="fa-solid fa-caret-right"></i>,
        iconOpened: <i className="fa-solid fa-caret-left"></i>,

        subNav: [
            {
                title: 'Bœuf',
                category: 'beef',
                icon: <Image src={Beef} alt="boeuf" />,
            },
            {
                title: 'Poulet',
                category: 'chicken',
                icon: <Image src={Chicken} alt="poulet" />,
            },
            {
                title: 'Poisson',
                category: 'fish',
                icon: <Image src={Fish} alt="poisson" />,
            },
            {
                title: 'Moule',
                category: 'mussel',
                icon: <Image src={Mussel} alt="moule" />,
            },
            {
                title: 'Végétarien',
                category: 'vege',
                icon: <Image src={Vege} alt="végétarien" />,
            },
        ],
    },
];
