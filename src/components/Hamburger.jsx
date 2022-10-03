import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';

const MenuBtn = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 8vmin;
    max-width: 45px;
    height: 8vmin;
    max-height: 45px;
    cursor: pointer;
`;

const HamburgerBar = styled.div`
    position: absolute;
    width: 100%;
    height: 10%;
    transition: 0.4s ease-in-out;
    border-radius: 10px;
    background-color: ${(props) => props.theme.barColor};

    &:before,
    &:after {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: white;
        transition: 0.3s ease-in-out;
        border-radius: 10px;
        right: 0px;
    }
    &:before {
        transform: translateY(-300%);
        transform: ${(props) => props.theme.angleMin};
    }
    &:after {
        transform: translateY(300%);
        transform: ${(props) => props.theme.angleMax};
    }
`;

const openHamburger = {
    barColor: 'white',
    angleMax: '',
    angleMin: '',
};

const closeHamburger = {
    barColor: 'transparent',
    angleMax: 'rotate(-45deg);',
    angleMin: 'rotate(45deg);',
};

function Hamburger() {
    const [theme, setTheme] = useState('openHamburger');
    const isOpen = theme === 'openHamburger';

    const toggleAnim = () => {
        setTheme(isOpen ? 'closeHamburger' : 'openHamburger');
    };

    return (
        <ThemeProvider theme={isOpen ? openHamburger : closeHamburger}>
            <MenuBtn onClick={toggleAnim}>
                <HamburgerBar />
            </MenuBtn>
        </ThemeProvider>
    );
}

export default Hamburger;
