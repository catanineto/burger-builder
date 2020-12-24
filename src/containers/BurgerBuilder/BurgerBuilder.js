import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
}

class BurgerBuilder extends Component {

    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4,
        purchaseable: false,
        purchasing: false
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = { ...this.state.ingredients };
        updatedIngredients[type] = updatedCount;

        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + INGREDIENT_PRICES[type];
        this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
        this.updatePurchaseState(updatedIngredients);

    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];

        if (oldCount > 0) {
            const updatedCount = oldCount - 1;
            const updatedIngredients = { ...this.state.ingredients };
            updatedIngredients[type] = updatedCount;

            const oldPrice = this.state.totalPrice;
            const newPrice = oldPrice - INGREDIENT_PRICES[type];
            this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
            this.updatePurchaseState(updatedIngredients);
        }
    }

    updatePurchaseState(ingredients) {
        const sum = Object.keys(ingredients).map(igKey => {
            return ingredients[igKey];
        }).reduce((sum, el) => {
            return sum + el;
        }, 0);

        this.setState({
            purchaseable: sum > 0
        })
    }
    
    purchaseHandler = () => {
        this.setState({
            purchasing: true
        })
    }

    render() {
        const disabledInfo = {
            ...this.state.ingredients
        }

        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] === 0;
        }

        return (
            <React.Fragment>
                <Modal show={this.state.purchasing}>
                    <OrderSummary 
                    ingredients={this.state.ingredients}/>
                </Modal>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}
                    disabled={disabledInfo}
                    purchaseable={this.state.purchaseable}
                    price={this.state.totalPrice}
                    ordered={this.purchaseHandler} />
            </React.Fragment>
        )
    }
}

export default BurgerBuilder;