import React from 'react'
import ShoppingContent from './ShoppingContent'
import Receipt from './Receipt'

function MainContent(props) {
    function totalPrice(list){
        return list.reduce((prev, element)=>{
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
                setHistory={props.setHistory}
                groceriesInShoppingCart={props.groceriesInShoppingCart}
                setgroceriesInShoppingCart = {props.setgroceriesInShoppingCart}
                history={props.history}
            />
        )
    }
    else{
        return (
            <Receipt 
                setShowReceipt={props.setShowReceipt}
                history={props.history}
                totalPrice={totalPrice}
            />
        )
    }
}

export default MainContent