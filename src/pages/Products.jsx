import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import coffeeMenu from '../CoffeeData';
import './Product.css'; // Import custom CSS

const Products = () => {
    const { addToCart} = useCart();
    return (
      <>
                
            <div className="products-container">
                {coffeeMenu.map((product) => (
                    <div key={product.id} className="product-card">
                        <img src={product.image} alt={product.title} className="product-image" />
                        <h3 className="product-title">{product.title}</h3>
                        <p className="product-description">{product.description}</p>
                        <p className="product-price">${product.price}</p>
                        <button
                            onClick={() => addToCart(product)}
                            className="add-to-cart-btn"
                        >
                            Add to Cart
                        </button>
                    </div>
                ))}
            </div>
      </>
    );
};

export default Products;
