import React, { useState, useContext } from 'react';
import LogoAsset from '../assets/logo.png';
import { Link } from 'react-router-dom';
import useMediaQuery from './useMediaQuery';
import Hamburger from './Hamburger';
import styled, { ThemeProvider, keyframes } from 'styled-components';
import { UserContext } from '../context/userContext';

const fadeIn = keyframes`
  from {
    opacity: 0; 
    transform: translateY(-90px);
}
  to { 
    opacity: 1;
    transform: translateY(0px); 
}
`;

const HeaderNavbar = styled.div`
    position: sticky;
    top: 0px;
    z-index: 2;
    width: 100%;
`;

const Navbar = styled.div`
    background: black;
    display: flex;
    width: 100%;
    height: 90px;
    overflow: hidden;
`;

const NavbarLogo = styled.div`
    order: 1;
    flex-basis: 20%;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (min-width: 1200px) {
        order: 1;
        flex-basis: 10%;
    }
`;

const Logo = styled.img`
    height: 20vmin;
    max-height: 80px;
    padding: 0px 5px 0px 10px;
`;

const NavbarIcon = styled.div`
    background-color: #34911c;
    color: white;
    text-decoration: none;
    white-space: nowrap;
    width: 10vw;
    max-width: 55px;
    height: 10vw;
    max-height: 55px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;

    &:hover {
        background-color: #246413;
        transition: background-color 1s;
        font-size: 1.05rem;
    }

    @media (min-width: 650px) {
        height: 55px;
        width: 20vw;
        max-width: 115px;
    }
`;

const Icon = styled.i`
    font-size: 5vw;
    color: white;
`;

const NavbarHamburger = styled.div`
    order: 3;
    flex-basis: 20%;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (min-width: 1200px) {
        order: 4;
        display: none;
    }
`;

const NavbarLink = styled(Link)`
    text-decoration: none;
    color: black;
    &:hover {
        color: #34911c;
    }
    @media (min-width: 1200px) {
        color: white;
        &:hover {
            color: white;
        }
    }
`;

const NavbarItem = styled.div`
    box-shadow: inset 0px -1px 0px black;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.4rem;
    &:hover {
        font-size: 1.5rem;
    }

    @media (max-width: 250px) {
        font-size: 1.2rem;
    }

    @media (min-width: 1200px) {
        flex: 1;
        font-size: 1.2rem;

        &:hover {
            font-size: 1.3rem;
            box-shadow: inset 0px -5px 0px #3aa21f;
        }

        ${NavbarLink} {
            padding: 35px 0px 35px 0px;
            width: 100%;
        }
    }
`;

const NavbarMenu = styled.div`
    position: fixed;
    order: 4;
    z-index: -1;
    display: grid;
    flex-direction: column;
    text-align: center;
    background-color: white;
    color: black;
    width: 100%;
    height: 50vh;
    transition: transform 0.7s;
    top: ${(props) => props.theme.top};
    transform: ${(props) => props.theme.spawn};
    opacity: ${(props) => props.theme.appear};

    @media (min-width: 1200px) {
        position: relative;
        order: 2;
        z-index: 0;
        display: flex;
        flex-direction: row;
        background-color: black;
        color: white;
        justify-content: space-around;
        text-align: center;
        transition: 0s;
        top: 0px;
        transform: none;
        flex-basis: 60%;
        height: 100%;

        ${NavbarItem}:nth-child(1) {
            animation: ${fadeIn} 0.5s;
        }

        ${NavbarItem}:nth-child(2) {
            animation: ${fadeIn} 1s;
        }

        ${NavbarItem}:nth-child(3) {
            animation: ${fadeIn} 1.5s;
        }

        ${NavbarItem}:nth-child(4) {
            animation: ${fadeIn} 2s;
        }

        ${NavbarItem}:nth-child(5) {
            animation: ${fadeIn} 2.5s;
        }

        opacity: 1;
    }
`;

const NavbarBtn = styled.div`
    order: 2;
    flex-basis: 60%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    @media (min-width: 1200px) {
        order: 3;
        flex-basis: 30%;
        animation: ${fadeIn} 3s;
    }
`;

const NavbarProfil = styled.div`
    height: 60px;
    width: 60px;
    background-color: #34911c;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    font-size: 1.4rem;
    color: white;
`;

const openMenu = {
    top: '90px',
    spawn: 'translateY(0%)',
    appear: 1,
};

const closeMenu = {
    top: '0px',
    spawn: 'translateY(-100%)',
    appear: 0,
};

function Header() {
    const phoneSize = useMediaQuery('(min-width: 650px)');

    const [theme, setTheme] = useState('openMenu');
    const isOpen = theme === 'openMenu';

    const toggleAnim = () => {
        setTheme(isOpen ? 'closeMenu' : 'openMenu');
        console.log('cliqué!');
    };

    const { currentUser } = useContext(UserContext);

    return (
        <ThemeProvider theme={isOpen ? closeMenu : openMenu}>
            <HeaderNavbar>
                <Navbar>
                    <NavbarLogo>
                        <NavbarLink to={'/site-de-e-commerce/'}>
                            <Logo src={LogoAsset} className="logo" alt="Logo" />
                        </NavbarLink>
                    </NavbarLogo>

                    <NavbarBtn>
                        <NavbarLink to={'/reservation'}>
                            <NavbarIcon>
                                {phoneSize ? (
                                    <div>RESERVATION</div>
                                ) : (
                                    <Icon className="fa-solid fa-calendar-day"></Icon>
                                )}
                            </NavbarIcon>
                        </NavbarLink>
                        <NavbarLink to={'/takeaway'}>
                            <NavbarIcon>
                                {phoneSize ? (
                                    <div>COMMANDE</div>
                                ) : (
                                    <Icon className="fa-solid fa-basket-shopping"></Icon>
                                )}
                            </NavbarIcon>
                        </NavbarLink>
                        <NavbarLink to={'/account'}>
                            {currentUser ? (
                                <NavbarProfil>
                                    <i className="fa-solid fa-user"></i>
                                </NavbarProfil>
                            ) : (
                                <NavbarIcon>
                                    {phoneSize ? (
                                        <div>MON COMPTE</div>
                                    ) : (
                                        <Icon className="fa-solid fa-user"></Icon>
                                    )}
                                </NavbarIcon>
                            )}
                        </NavbarLink>
                    </NavbarBtn>

                    <NavbarHamburger>
                        <div onClick={toggleAnim}>
                            <Hamburger />
                        </div>
                    </NavbarHamburger>
                    <NavbarMenu>
                        <NavbarItem>
                            {phoneSize ? (
                                <NavbarLink to={'/site-de-e-commerce/'}>
                                    Accueil
                                </NavbarLink>
                            ) : (
                                <NavbarLink
                                    onClick={toggleAnim}
                                    to={'/site-de-e-commerce/'}
                                >
                                    Accueil
                                </NavbarLink>
                            )}
                        </NavbarItem>
                        <NavbarItem>
                            {phoneSize ? (
                                <NavbarLink to={'/dishes'}>
                                    Nos plats
                                </NavbarLink>
                            ) : (
                                <NavbarLink onClick={toggleAnim} to={'/dishes'}>
                                    Nos plats
                                </NavbarLink>
                            )}
                        </NavbarItem>
                        <NavbarItem>
                            {phoneSize ? (
                                <NavbarLink to={'/engagements'}>
                                    Nos engagements
                                </NavbarLink>
                            ) : (
                                <NavbarLink
                                    onClick={toggleAnim}
                                    to={'/engagements'}
                                >
                                    Nos engagements
                                </NavbarLink>
                            )}
                        </NavbarItem>
                        <NavbarItem>
                            {phoneSize ? (
                                <NavbarLink to={'/opinions'}>
                                    Vos avis
                                </NavbarLink>
                            ) : (
                                <NavbarLink
                                    onClick={toggleAnim}
                                    to={'/opinions'}
                                >
                                    Vos avis
                                </NavbarLink>
                            )}
                        </NavbarItem>
                        <NavbarItem>
                            {phoneSize ? (
                                <NavbarLink to={'/contact'}>Contact</NavbarLink>
                            ) : (
                                <NavbarLink
                                    onClick={toggleAnim}
                                    to={'/contact'}
                                >
                                    Contact
                                </NavbarLink>
                            )}
                        </NavbarItem>
                    </NavbarMenu>
                </Navbar>
            </HeaderNavbar>
        </ThemeProvider>
    );
}

export default Header;
