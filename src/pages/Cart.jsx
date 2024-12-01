import React from 'react';
import { useCart } from '../context/CartContext';

const CartPage = () => {
    const { cart, removeFromCart, clearCart,  } = useCart();

    const totalAmount = cart?.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <div className="cart-page">
            <h2>Shopping Cart</h2>
            {cart?.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <>
                    <ul className="cart-items">
                        {cart?.map((item) => (
                            <li key={item.id} className="cart-item">
                                <img src={item.image} alt={item.title} className="cart-item-image" />
                                <div className="cart-item-details">
                                    <h3>{item.title}</h3>
                                    <p>{item.description}</p>
                                    <p>Price: ${item.price.toFixed(2)}</p>
                                    <p>Quantity: {item.quantity}</p>
                                    <button onClick={() => removeFromCart(item.id)} className="remove-btn">
                                        Remove
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <div className="cart-summary">
                            <div>  <h3>Total Amount: ${totalAmount.toFixed(2)}</h3></div>
                      <div className='flex gap30'>
                                <button onClick={clearCart} className="clear-btn">
                                    Clear Cart
                                </button>
                                <button className="checkout-btn">Proceed to Checkout</button>
                      </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default CartPage;
