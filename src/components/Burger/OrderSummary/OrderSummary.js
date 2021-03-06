import React from 'react';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {

    const ingredientSummary = Object.keys(props.ingredients).map(igKey => {
        return <li key={igKey}>
            <span style={{ textTransform: 'capitalize' }}>
                {igKey}:
            </span>
            {props.ingredients[igKey]}
        </li>
    })

    return (
        <React.Fragment>
            <h3>Your order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Burger price: US$ {props.price.toFixed(2)}</strong></p>
            <p>Continue to checkout</p>
            <div>
                <Button btnType='Danger' clicked={props.purchaseCanceled}>CANCEL</Button>
                <Button btnType='Success' clicked={props.purchaseContinued}>CONTINUE</Button>
            </div>
        </React.Fragment>
    )
}

export default orderSummary;