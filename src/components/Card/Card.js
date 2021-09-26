import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faCoins } from '@fortawesome/free-solid-svg-icons'
import './Card.css'




const Card = (props) => {

    const cart = <FontAwesomeIcon icon={faShoppingCart} />
    const coin = <FontAwesomeIcon icon={faCoins} />

    const { name, img, phone, dept, designation, donate } = props.card
    return (
        <div>
            <div className="card">

                <img src={img} alt="" />
                <h1>{name}</h1>
                <h5 className="title">{designation}</h5>
                <h5>Phone: {phone}</h5>

                <h4>Department: {dept}</h4>
                <h4>Donation: {donate} {coin} </h4>
                <button onClick={() => props.handleAddToCart(props.card)}>{cart}Add to cart</button>

            </div>
        </div>
    );
};

export default Card;