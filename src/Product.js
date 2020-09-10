import React from 'react';
import "./Product.css"

const Product = () => {
    return (
        <div className="product">
            <div className="product_info">
                <p>The Lean Startup:</p>
                <p className="product_price">
                    <small>$</small>
                    <strong>19.99</strong>
                </p>
                <div className="product_rating">
                    <p>⭐</p>
                    <p>⭐</p>
                    <p>⭐</p>
                    <p>⭐</p>
                    <p>⭐</p>
                </div>
                <img src="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg" alt=""/>
                <button>Add to Basket</button>
            </div>
            
        </div>
    );
};

export default Product;