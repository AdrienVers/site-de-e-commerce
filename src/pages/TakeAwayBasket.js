import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Grocery from '../components/Grocery';
import FoodFilter from '../components/FoodFilter';
import ShopAsset from '../assets/shop.png';
import CarouselMenu from '../components/CarouselMenu';
import Cart from '../components/Cart';
import './takeawayinfo.css';

const TakeAwayBasketContainer = styled.div`
    position: relative;
    background-color: rgb(240, 240, 240);
`;

const TestDisplayGLobal = styled.div`
    // box-shadow: inset 0px 0px 0px 3px blue;
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
    background-color: white;
    z-index: 1;

    &:hover {
        cursor: pointer;
    }
`;

const DropdownLink = styled.div`
    // box-shadow: 0px 0px 0px 2px pink;
    padding-top: 10px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    text-decoration: none;
    color: black;
    font-size: 18px;
    overflow: hidden;
`;

const CaretDisplay = styled.div`
    transform: rotate(0deg);
    // box-shadow : inset 0px 0px 0px 2px red;
    display: flex;
    width: 60px;
    justify-content: space-evenly;
`;

const TestDisplay = styled.div`
    // box-shadow: inset 0px 0px 0px 3px blue;
    height: 0px;
`;

const BasketTitle = styled.div`
    display: flex;
`;

const BasketLabel = styled.span`
    margin-left: 10px;
    margin-top: 5px;
`;

function TakeAwayBasket() {
    const [basketIsOpen, setBasketIsOpen] = useState(true);
    const [detailsIsOpen, setDetailsIsOpen] = useState(true);
    const [dishesIsOpen, setDishesIsOpen] = useState(true);

    const savedCart = localStorage.getItem('cart');
    const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : []);
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    const total = cart.reduce(
        (acc, foodType) => acc + foodType.amount,
        0
    );

    const openSwitch = (basket, details, dishes) => {
        if (basket === true && details === false && dishes === false) {
            return (
                <div>
                    <Cart cart={cart} updateCart={updateCart} />
                </div>
            );
        } else if (basket === false && details === true && dishes === false) {
            return <div>Détails !</div>;
        } else
            return (
                <TestDisplayGLobal>
                    <TestDisplay>
                        <CarouselMenu />
                        <div className="filtreTAI">
                            <div className="filtreFoodTAI">
                                <FoodFilter />
                            </div>
                        </div>
                        <Grocery cart={cart} updateCart={updateCart} />
                    </TestDisplay>
                </TestDisplayGLobal>
            );
    };

    return (
        <TakeAwayBasketContainer>
            <SidebarLink
                onClick={() => {
                    setBasketIsOpen(true);
                    setDetailsIsOpen(false);
                    setDishesIsOpen(false);
                }}
                style={{
                    position: 'sticky',
                    top: '90px',
                    /* backgroundColor: "rgb(250, 235, 215)", */
                }}
            >
                <div>
                    <BasketTitle>
                        <BasketLabel>Panier</BasketLabel>
                        <div className="basketTitleTAI">
                            <div className="basketImgContainerTAI">
                                <img
                                    className="basketImgTAI"
                                    alt="shopImg"
                                    src={ShopAsset}
                                />
                                <div className="basketValueTAI">{total}</div>
                            </div>
                        </div>
                    </BasketTitle>
                    {/* <SidebarLabel>Total</SidebarLabel>
                    <SidebarLabel>Plats sélectionnés</SidebarLabel> */}
                </div>
                <CaretDisplay>
                    <i className="fa-solid fa-cart-shopping"></i>
                    <i className="fa-regular fa-bookmark"></i>
                </CaretDisplay>
            </SidebarLink>
            <SidebarLink
                onClick={() => {
                    setBasketIsOpen(false);
                    setDetailsIsOpen(true);
                    setDishesIsOpen(false);
                }}
                style={{ position: 'sticky', top: '126px' }}
            >
                <div>
                    <BasketTitle>
                        <BasketLabel>Détails de ma commande</BasketLabel>
                    </BasketTitle>
                </div>
                <CaretDisplay>
                    <i className="fa-regular fa-circle-question"></i>
                    <i className="fa-regular fa-bookmark"></i>
                </CaretDisplay>
            </SidebarLink>
            {/* <div>À venir chercher au Normand Voyageur pour 18h00.</div> */}
            <SidebarLink
                onClick={() => {
                    setBasketIsOpen(false);
                    setDetailsIsOpen(false);
                    setDishesIsOpen(true);
                }}
                style={{ position: 'sticky', top: '162px' }}
            >
                <div>
                    <BasketTitle>
                        <BasketLabel>Nos plats</BasketLabel>
                    </BasketTitle>
                </div>
                <CaretDisplay>
                    <i className="fa-solid fa-utensils"></i>
                    <i className="fa-solid fa-bookmark"></i>
                </CaretDisplay>
            </SidebarLink>
            <DropdownLink style={{ zIndex: '-2' }}>
                {openSwitch(basketIsOpen, detailsIsOpen, dishesIsOpen)}
            </DropdownLink>
        </TakeAwayBasketContainer>
    );
}

export default TakeAwayBasket;

