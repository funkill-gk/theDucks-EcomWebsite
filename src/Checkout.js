import React from 'react';
import './Checkout.css';
import Subtotal from './Subtotal';
import CheckoutProduct from './CheckoutProduct';
import {useStateValue} from './StateProvider';



function Checkout() {
    const [{basket},dispatch] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img className="checkout__ad" src="/row_ducks.jpg" />
                <div><h2 className="checkout__title">Your Shopping Cart!</h2></div>
                
                {basket.map(item=>(
                    <CheckoutProduct
                        id={item.id}
                        title={item.title}
                        price={item.price}
                        rating={item.rating}
                        image={item.image}
                     />
                ))}
                
            </div>

            <div className="checkout__right">
                <Subtotal />
            </div>
           
        </div>
    )
}

export default Checkout
