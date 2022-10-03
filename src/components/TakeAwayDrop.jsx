import React, { useState } from 'react';
import styled from 'styled-components';
import '../pages/takeawayinfo.css';
import DishesInfo from './Grocery';
import FoodFilter from '../components/FoodFilter';
import ShopAsset from '../assets/shop.png';
import CarouselMenu from './CarouselMenu';

const TestDisplayGLobal = styled.div`
    box-shadow: inset 0px 0px 0px 3px blue;
    overflow: scroll;
    height: 70vh;
`;

const SidebarLink = styled.div`
    box-shadow: inset 0px 0px 0px 0.2px black;
    display: flex;
    color: #e1e9fc;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    list-style: none;
    height: 36px;
    text-decoration: none;
    font-size: 18px;
    color: black;

    &:hover {
        cursor: pointer;
    }
`;

const SidebarLabel = styled.span`
    margin-left: 16px;
`;

const DropdownLink = styled.div`
    box-shadow: 0px 0px 0px 2px pink;

    display: flex;
    align-items: center;
    justify-content: space-around;
    text-decoration: none;
    color: black;
    font-size: 18px;
    overflow: hidden;
`;

const CaretDisplay = styled.div`
    transform: rotate(90deg);
`;

const TestDisplay = styled.div`
    box-shadow: inset 0px 0px 0px 3px blue;
    height: 0px;
`;

const BasketTitle = styled.div`
    display: flex;
`;

const BasketLabel = styled.span`
    margin-left: 16px;
    margin-top: 5px;
`;

const TakeAwayDrop = ({ item }) => {
    const [subnav, setSubnav] = useState(false);
    const showSubnav = () => setSubnav(!subnav);

    return (
        <div>
            <SidebarLink onClick={item.subNav && showSubnav}>
                <div>
                    {item.id === 'basket' ? (
                        <BasketTitle>
                            <BasketLabel>{item.title}</BasketLabel>
                            <div className="basketTitleTAI">
                                <div className="basketImgContainerTAI">
                                    <img
                                        className="basketImgTAI"
                                        alt="shopImg"
                                        src={ShopAsset}
                                    />
                                    <div className="basketValueTAI">10</div>
                                </div>
                            </div>
                        </BasketTitle>
                    ) : (
                        <SidebarLabel>{item.title}</SidebarLabel>
                    )}
                </div>
                <CaretDisplay>
                    {item.subNav && subnav
                        ? item.iconOpened
                        : item.subNav
                        ? item.iconClosed
                        : null}
                </CaretDisplay>
            </SidebarLink>
            {subnav &&
                item.subNav.map((item, index) => {
                    return (
                        <DropdownLink key={index}>
                            {index === 0 && item.id === 'takeawayplace' ? (
                                <SidebarLabel>{item.title}</SidebarLabel>
                            ) : null}
                            {index === 1 && item.id === 'takeawaytime' ? (
                                <SidebarLabel>{item.title}</SidebarLabel>
                            ) : null}
                            {index === 0 && item.id === 'baskettotal' ? (
                                <SidebarLabel>{item.title}</SidebarLabel>
                            ) : null}
                            {index === 1 && item.id === 'basketdishes' ? (
                                <SidebarLabel>{item.title}</SidebarLabel>
                            ) : null}
                            {index === 2 && item.id === 'basketvalidation' ? (
                                <SidebarLabel>{item.title}</SidebarLabel>
                            ) : null}
                            {index === 0 && item.id === 'displaydishes' ? (
                                <TestDisplayGLobal>
                                    <TestDisplay>
                                        <CarouselMenu />
                                        <div className="filtreTAI">
                                            <div className="filtreFoodTAI">
                                                <FoodFilter></FoodFilter>
                                            </div>
                                        </div>
                                        <DishesInfo></DishesInfo>{' '}
                                    </TestDisplay>
                                </TestDisplayGLobal>
                            ) : null}
                        </DropdownLink>
                    );
                })}
        </div>
    );
};

export default TakeAwayDrop;
