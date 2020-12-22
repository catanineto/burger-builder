import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    {
        label: 'Salad',
        type: 'salad'
    },
    {
        label: 'Bacon',
        type: 'bacon'
    },
    {
        label: 'Cheese',
        type: 'cheese'
    },
    {
        label: 'Meat',
        type: 'meat'
    },
]

const buildControls = (props) => {
    return (
        <div className={classes.BuildControls}>
            <p>Burger price: <strong>US$ {props.price.toFixed(2)}</strong></p>
            {controls.map((value) => {
                return <BuildControl
                    key={value.label}
                    label={value.label}
                    type={value.type}
                    disabled={props.disabled[value.type]}
                    ingredientAdded={() => props.ingredientAdded(value.type)}
                    ingredientRemoved={() => props.ingredientRemoved(value.type)} />;
            })}
        </div>
    )
}

export default buildControls;