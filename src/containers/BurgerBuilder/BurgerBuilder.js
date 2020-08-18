import React,{Component } from 'react';
import Auxillary from '../../hoc/auxillary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';


const INGREDINET_PRICES = {
    salad:0.5,
    cheese:0.4,
    meat:1.3,
    bacon:0.6
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
        purchasable:false,
        purchase:false
    }

    updatePurchaseState(ingredients) {
        
        const sum = Object.keys(ingredients)
            .map(igKey => {
                return ingredients[igKey];
            })
            .reduce((sum,el) => {
                return (sum+el);
            },0); 

        this.setState({purchasable : sum > 0});
    }

    addIngredientHandler = (type) =>{
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount+1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceAddition = this.state.totalPrice;
        const newPrice = priceAddition + INGREDINET_PRICES[type];
        this.setState({totalPrice:newPrice,ingredients:updatedIngredients})
        this.updatePurchaseState(updatedIngredients);
    }

    removeIngredientHandler = (type) => {
        if(this.state.ingredients[type] > 0){
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount-1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceDeduction = this.state.totalPrice;
        const newPrice = priceDeduction - INGREDINET_PRICES[type];
        this.setState({totalPrice:newPrice,ingredients:updatedIngredients});
        this.updatePurchaseState(updatedIngredients);
    }
    }

    purchaseHandler = () => {
        this.setState({purchase:true});
    }
    purchaseCancelHandler = () => {
        this.setState({purchase:false});
    }
    purchaseContinueHandler = () => {
        alert("You can continue");
    }

        render () {
            const disabledInfo = {
                ...this.state.ingredients
            }

            for(let key in disabledInfo){
                disabledInfo[key] = disabledInfo[key] <= 0;
            }

            return (
                <Auxillary>
                    <Modal show={this.state.purchase} modalClosed={this.purchaseCancelHandler}>
                        <OrderSummary 
                            total={this.state.totalPrice}
                            orderCancelled={this.purchaseCancelHandler}
                            orderContinued={this.purchaseContinueHandler}
                            ingredients={this.state.ingredients}/>
                    </Modal>
                   <Burger ingredients={this.state.ingredients}/>
                    <BuildControls
                        ingredientsAdded={this.addIngredientHandler} 
                        ingredientsDeducted={this.removeIngredientHandler}
                        disabled={disabledInfo}
                        purchasable={this.state.purchasable}
                        ordered={this.purchaseHandler}
                        price={this.state.totalPrice}  />
                </Auxillary>
            )
        }
}

export default BurgerBuilder;