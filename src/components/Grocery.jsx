import React, { useState } from 'react';
import { foodData } from '../datas/foodData';
import styled from 'styled-components';

function Grocery({ cart, updateCart }) {
    // const [activeCategory, setActiveCategory] = useState('');

    const categories = foodData.reduce(
        (acc, food) =>
            acc.includes(food.category) ? acc : acc.concat(food.category),
        []
    );

    const [cartItems, setCartItems] = useState([]);

    function getItemQuantity(name) {
        return cartItems.find((item) => item.name === name)?.quantity + 1 || 1;
    }

    function increaseItemQuantity(name) {
        setCartItems((currentItems) => {
            if (currentItems.find((item) => item.name === name) == null) {
                return [...currentItems, { name, quantity: 1 }];
            } else {
                return currentItems.map((item) => {
                    if (item.name === name) {
                        return { ...item, quantity: item.quantity + 1 };
                    } else {
                        return item;
                    }
                });
            }
        });
    }

    function decreaseItemQuantity(name) {
        setCartItems((currentItems) => {
            if (
                currentItems.find((item) => item.name === name)?.quantity === 1
            ) {
                return currentItems.filter((item) => item.name !== name);
            } else {
                return currentItems.map((item) => {
                    if (item.name === name) {
                        return { ...item, quantity: item.quantity - 1 };
                    } else {
                        return item;
                    }
                });
            }
        });
    }

    console.log(categories);

    function addToCart(name, img, price) {
        const currentFoodSaved = cart.find((food) => food.name === name);
        if (currentFoodSaved) {
            const cartFilteredCurrentFood = cart.filter(
                (food) => food.name !== name
            );
            updateCart([
                ...cartFilteredCurrentFood,
                {
                    name,
                    img,
                    price,
                    amount: currentFoodSaved.amount + getItemQuantity(name),
                },
            ]);
        } else {
            updateCart([
                ...cart,
                { name, img, price, amount: getItemQuantity(name) },
            ]);
        }
    }

    return (
        <DishesInfoContainer>
            {foodData.map((food) => (
                <DishesInfo key={food.id}>
                    <DishesLeftInfo>
                        <img src={food.img} alt={`${food.name}`} />
                    </DishesLeftInfo>
                    <DishesMiddleInfo>
                        <DishesNameInfo>{food.name}</DishesNameInfo>
                        <DishesAddInfo>
                            <DishesAddNumber>
                                <IconMinus
                                    className="fa-solid fa-circle-minus"
                                    onClick={() =>
                                        decreaseItemQuantity(food.name)
                                    }
                                />
                                {getItemQuantity(food.name)}
                                <IconPlus
                                    className="fa-solid fa-circle-plus"
                                    onClick={() =>
                                        increaseItemQuantity(food.name)
                                    }
                                />
                            </DishesAddNumber>
                            <DishesAddToBasket>
                                {/* 
                                {getItemQuantity(food.name) === 0 ? (
                                    <button>Choisir une quantité</button>
                                ) : (
                                    <button
                                        onClick={() =>
                                            addToCart(
                                                food.name,
                                                food.img,
                                                food.price
                                            )
                                        }
                                    >
                                        Ajouter au panier
                                    </button>
                                )}
                                */}
                                <button
                                    onClick={() =>
                                        addToCart(
                                            food.name,
                                            food.img,
                                            food.price
                                        )
                                    }
                                >
                                    Ajouter au panier
                                </button>
                            </DishesAddToBasket>
                        </DishesAddInfo>
                    </DishesMiddleInfo>
                    <DishesRightInfo>
                        <DishesDetailInfo>Détails</DishesDetailInfo>
                        <DishesPriceInfo>
                            {food.price.toFixed(2)}€
                        </DishesPriceInfo>
                    </DishesRightInfo>
                </DishesInfo>
            ))}
        </DishesInfoContainer>
    );
}

const IconPlus = styled.i`
    color: #34911c;
    padding: 0px 10px 0px 10px;
    &:hover {
        cursor: pointer;
    }
`;

const IconMinus = styled.i`
    color: red;
    padding: 0px 10px 0px 10px;
    &:hover {
        cursor: pointer;
    }
`;

const DishesInfoContainer = styled.div`
    background-color: white;
    padding-bottom: 5px;
`;

const DishesInfo = styled.div`
    box-shadow: inset 0px 0px 0px 0.2px black;
    height: 100px;
    display: flex;
    width: 97vmin;
`;

const DishesLeftInfo = styled.div`
    box-shadow: inset 0px 0px 0px 0.2px black;
    flex-basis: 30%;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        height: 70px;
        width: 70px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;

const DishesMiddleInfo = styled.div`
    box-shadow: inset 0px 0px 0px 0.2px black;
    flex-basis: 45%;
    display: flex;
    flex-direction: column;
`;

const DishesNameInfo = styled.div`
    height: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const DishesDetailInfo = styled.div`
    height: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const DishesPriceInfo = styled.div`
    height: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const DishesAddInfo = styled.div`
    height: 70%;
    display: flex;
    flex-direction: column;
`;

const DishesAddNumber = styled.div`
    height: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const DishesAddToBasket = styled.div`
    height: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const DishesRightInfo = styled.div`
    box-shadow: inset 0px 0px 0px 0.2px black;
    flex-basis: 25%;
    display: flex;
    flex-direction: column;
`;

export default Grocery;
