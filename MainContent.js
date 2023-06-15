import React from 'react'
import ShoppingContent from './ShoppingContent'
import Receipt from './Receipt'

function MainContent(props) {
    function totalPrice(){
        return props.groceriesInShoppingCart.reduce((prev, element)=>{
            return prev + element.gr.quantity * element.gr.price
        },0)
    }
    if(!props.showReceipt){
        return (
            <ShoppingContent 
                getCatalogRows={props.getCatalogRows}
                getShoppingCartRows={props.getShoppingCartRows}
                setShowReceipt={props.setShowReceipt}
                
                totalPrice={totalPrice}
            />
        )
    }
    else{
        return (
            <Receipt 
                groceriesInShoppingCart={props.groceriesInShoppingCart} 
                totalPrice={totalPrice}
                setShowReceipt={props.setShowReceipt}
                setgroceriesInShoppingCart = {props.setgroceriesInShoppingCart}
            />
        )
    }
}

export default MainContent