import './cart.css';
import useMediaQuery from './useMediaQuery';

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
        <div className="cart-global">
            <div className="cart-header">
                <div className="cart-title">
                    {phoneSize ? (
                        <h2>Total : {total}€</h2>
                    ) : (
                        <h2>Total du panier : {total}€</h2>
                    )}
                </div>
                <div className="cart-buttons">
                    {phoneSize ? (
                        <button
                            className="cart-remove"
                            onClick={() => updateCart([])}
                        >
                            Vider
                        </button>
                    ) : (
                        <button
                            className="cart-remove"
                            onClick={() => updateCart([])}
                        >
                            Vider le panier
                        </button>
                    )}
                    {phoneSize ? (
                        <button className="cart-paiement">Paiement</button>
                    ) : (
                        <button className="cart-paiement">
                            Procéder au paiement
                        </button>
                    )}
                </div>
            </div>
            <div className="cart-separation"></div>
            {cart.length > 0 ? (
                <div>
                    <ul className="cart-list">
                        {cart.map(({ name, img, price, amount }, index) => (
                            <li
                                key={`${name}-${img}-${index}`}
                                className="cart-element"
                            >
                                <div className="cart-element-name">
                                    <h3>{name}</h3>
                                </div>
                                <div className="cart-element-img">
                                    <img src={img} alt={name} />
                                </div>
                                <div className="cart-element-info">
                                    <div className="cart-element-price">
                                        <p>
                                            {price}€ x {amount} ={' '}
                                            {price * amount}€
                                        </p>
                                    </div>
                                    <div className="cart-element-add-button">
                                        <h5>Quantité : {amount}</h5>
                                    </div>
                                    <div className="cart-element-remove">
                                        <button
                                            onClick={() => removeElement(name)}
                                        >
                                            Retirer du panier
                                        </button>
                                    </div>
                                </div>
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
        </div>
    );
}

export default Cart;
