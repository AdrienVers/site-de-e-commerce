import useMediaQuery from './useMediaQuery';
import styled from 'styled-components';

function Cart({ cart, updateCart }) {
    const total = cart.reduce(
        (acc, foodType) => acc + foodType.amount * foodType.price,
        0
    );

    const phoneSize = useMediaQuery('(max-width: 800px)');

    function removeElement(name) {
        const arr = cart.filter((item) => item.name !== name);
        updateCart(arr);
    }

    return (
        <CartGlobal>
            <CartHeader>
                <CartTitle>
                    {phoneSize ? (
                        <h2>Total : {total}€</h2>
                    ) : (
                        <h2>Total du panier : {total}€</h2>
                    )}
                </CartTitle>
                <CartButtons>
                    {phoneSize ? (
                        <CartRemove onClick={() => updateCart([])}>
                            Vider
                        </CartRemove>
                    ) : (
                        <CartRemove onClick={() => updateCart([])}>
                            Vider le panier
                        </CartRemove>
                    )}
                    {phoneSize ? (
                        <CartPaiement>Paiement</CartPaiement>
                    ) : (
                        <CartPaiement>Procéder au paiement</CartPaiement>
                    )}
                </CartButtons>
            </CartHeader>
            <CartSeparation></CartSeparation>
            {cart.length > 0 ? (
                <div>
                    <ul>
                        {cart.map(({ name, img, price, amount }, index) => (
                            <li key={`${name}-${img}-${index}`}>
                                <CartElementName>
                                    <h3>{name}</h3>
                                </CartElementName>
                                <CartElementImg>
                                    <img src={img} alt={name} />
                                </CartElementImg>
                                <CartElementInfo>
                                    <CartElementPrice>
                                        <p>
                                            {price}€ x {amount} ={' '}
                                            {price * amount}€
                                        </p>
                                    </CartElementPrice>
                                    <CartElementAmount>
                                        <h5>Quantité : {amount}</h5>
                                    </CartElementAmount>
                                    <CartElementRemove>
                                        <button
                                            onClick={() => removeElement(name)}
                                        >
                                            Retirer du panier
                                        </button>
                                    </CartElementRemove>
                                </CartElementInfo>
                            </li>
                        ))}
                    </ul>
                </div>
            ) : (
                <div>
                    <h4>
                        Votre panier est vide, ajoutez un produit dans « Nos
                        plats » pour poursuivre votre commande.
                    </h4>
                </div>
            )}
        </CartGlobal>
    );
}

const CartGlobal = styled.div`
    padding: 10px 0px 20px 0px;
    min-width: 60vw;

    h4 {
        padding-bottom: 10px;
    }

    ul {
        list-style-type: none;
        padding: 5px 30px 5px 30px;
        display: flex;
        flex-wrap: wrap;
        max-width: 800px;
        justify-content: center;
    }

    li {
        display: flex;
        flex-direction: column;
        border: 1px solid black;
        box-shadow: 1px 1px 12px #555;
        margin: 15px 10px 10px 10px;
        background-color: white;
        height: 280px;
        width: 190px;
    }

    @media (max-width: 800px) {
        h2 {
            font-size: 1.6rem;
        }
    }
`;

const CartHeader = styled.div`
    display: flex;
    justify-content: space-evenly;
    padding: 0px 30px 0px 30px;
    height: 40px;
`;

const CartTitle = styled.div`
    width: 50%;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    @media (max-width: 800px) {
        justify-content: center;
    }

    @media (max-width: 400px) {
        justify-content: start;
    }
`;

const CartButtons = styled.div`
    padding: 0px 5px 0px 5px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 50%;
`;

const CartRemove = styled.button`
    height: 80%;
    padding: 0px 10px 0px 10px;
    margin-right: 5px;

    @media (max-width: 800px) {
        font-size: 0.9rem;
    }

    &:hover {
        cursor: pointer;
    }
`;

const CartPaiement = styled.button`
    height: 100%;
    background-color: #34911c;
    color: white;
    font-size: 1.2rem;
    padding: 0px 20px 0px 20px;
    margin-left: 5px;

    @media (max-width: 800px) {
        font-size: 1.1rem;
        padding: 0px 12px 0px 12px;
    }

    &:hover {
        cursor: pointer;
    }
`;

const CartSeparation = styled.div`
    padding: 10px 0px 10px 0px;

    @media (max-width: 800px) {
        padding: 5px 0px 5px 0px;
    }
`;

const CartElementName = styled.div`
    height: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const CartElementImg = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40%;
`;

const CartElementInfo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40%;
    flex-direction: column;
`;

const CartElementPrice = styled.div`
    padding: 0px 0px 5px 0px;
`;

const CartElementAmount = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 50%;
    padding: 5px 0px 5px 0px;
    margin-bottom: 5px;
`;

const CartElementRemove = styled.div`
    height: 30%;
    width: 100%;

    button {
        padding: 2px;
    }

    button:hover {
        cursor: pointer;
    }
`;

export default Cart;
