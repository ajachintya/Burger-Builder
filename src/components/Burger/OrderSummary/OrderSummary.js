import React from'react';
import Aux from '../../../hoc/auxillary';
import Button from '../../UI/Button/Button';


const orderSummary = (props) =>{
    const ingredientsSummary = Object.keys(props.ingredients)
        .map(igKey =>{
            return(
                <li key={igKey}>
                    <span style={{textTransform:'capitalize'}}>{igKey}</span>:{props.ingredients[igKey]}
                </li>
            )
        });
        return (
            <Aux>
                <h3>Your Order</h3>
                <p>A delicious Burger with following ingredients:</p>
                <ul>
                    {ingredientsSummary}
                </ul>
                <p>Total Price: <strong>{props.total.toFixed(2)}</strong></p>
                <p>Continue to checkout</p>
                <Button btnType="Danger" clicked={props.orderCancelled}>CANCEL</Button>
                <Button btnType="Success" clicked={props.orderContinued}>CONTINUE</Button>
            </Aux>
        )
}

export default orderSummary;