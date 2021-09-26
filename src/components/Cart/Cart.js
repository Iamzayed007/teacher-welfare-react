import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { cart } = props;


    // total donation in cart
    const totalReducer = (previous, product) => previous + product.donate;
    const total = cart.reduce(totalReducer, 0)



    return (
        <div >

            <div className="selected-cart">
                <h3><small>Selected Member:{props.cart.length}</small></h3>
                <hr />
                <h3><small>Total Donation:{total} BDT</small></h3>
            </div>
            <div className="selected-name">
                {
                    cart.map(cart => <div className="person" >
                        <img src={cart.img} alt="" />
                        <p>{cart.name}</p>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Cart;