import React, { useEffect, useState } from 'react';
import './Cards.css'
import Card from '../Card/Card';
import Cart from '../Cart/Cart';


const Cards = () => {
    const [cards, setCards] = useState([]);
    useEffect(() => {
        fetch('./db.json')
            .then(res => res.json())
            .then(data => setCards(data));
    }, []);


    const [cart, setCart] = useState([]);

    const handleAddToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);


    }
    return (
        <div className="cards">
            <div className="cards-grid">
                {
                    cards.map(card => <Card
                        key={card.id}
                        handleAddToCart={handleAddToCart}
                        card={card} />)
                }
            </div>

            <div>
                <Cart cart={cart} />
            </div>

        </div>
    );
};



export default Cards;