import React, { useState } from 'react';
import './grocery.css';
import { foodData } from '../datas/foodData';
import styled from 'styled-components';

const IconPlus = styled.i`
    color: #34911c;
    padding: 0px 10px 0px 10px;
`;

const IconMinus = styled.i`
    color: red;
    padding: 0px 10px 0px 10px;
`;

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
        <div className="dishesInfoContainer">
            {foodData.map((food) => (
                <div className="dishesInfo" key={food.id}>
                    <div className="dishesLeftInfo">
                        <img
                            className="dishesImageInfo"
                            src={food.img}
                            alt={`${food.categoryname}`}
                        />
                    </div>
                    <div className="dishesMiddleInfo">
                        <div className="dishesNameInfo">{food.name}</div>
                        <div className="dishesAddInfo">
                            <div className="dishesAddNumber">
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
                            </div>
                            <div className="dishesAddToBasket">
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
                            </div>
                        </div>
                    </div>
                    <div className="dishesRightInfo">
                        <div className="dishesDetailInfo">Détails</div>
                        <div className="dishesPriceInfo">
                            {food.price.toFixed(2)}€
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Grocery;
