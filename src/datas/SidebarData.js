import React from 'react';

export const SidebarData = [
    {
        title: 'Détails de ma commande',
        id : 'takeaway',
        path: '/',
        iconClosed: <i className="fa-solid fa-caret-right"></i>,
        iconOpened: <i className="fa-solid fa-caret-left"></i>,

        subNav: [
            {
                title: 'A venir chercher',
                id : 'takeawayplace',
                path: '/',
            },
            {
                title: 'Horaire de la commande',
                id : 'takeawaytime',
                path: '/',
            },
        ],
    },
    {
        title: 'Panier',
        path: '/',
        id : 'basket',
        iconClosed: <i className="fa-solid fa-caret-right"></i>,
        iconOpened: <i className="fa-solid fa-caret-left"></i>,

        subNav: [
            {
                title: 'Total',
                id : 'baskettotal',
                path: '/',
            },
            {
                title: 'Plats sélectionnés',
                id : 'basketdishes',
                path: '/',
            },
            {
                title: 'Continuer ma commande / Valider',
                id : 'basketvalidation',
                path: '/',
            },
        ],
    },
    {
        title: 'Nos plats',
        id : 'display', 
        path: '/',
        iconClosed: <i className="fa-solid fa-caret-right"></i>,
        iconOpened: <i className="fa-solid fa-caret-left"></i>,

        subNav: [
            {
                title: 'Plats',
                id : 'displaydishes',
                path: '/',
            },
        ],
    },
];

export default SidebarData;
