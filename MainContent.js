import React from 'react'
import ShoppingContent from './ShoppingContent'
import Receipt from './Receipt'

function MainContent(props) {
    if(!props.showReceipt){
        return (
            <ShoppingContent 
                getCatalogRows={props.getCatalogRows}
                getShoppingCartRows={props.getShoppingCartRows}
                setShowReceipt={props.setShowReceipt}
                totalPrice={props.totalPrice}
                setHistory={props.setHistory}
                groceriesInShoppingCart={props.groceriesInShoppingCart}
                setgroceriesInShoppingCart = {props.setgroceriesInShoppingCart}
                history={props.history}
                groceriesInCatalog = {props.groceriesInCatalog}
            />
        )
    }
    else{
        return (
            <Receipt 
                setShowReceipt={props.setShowReceipt}
                history={props.history}
                totalPrice={props.totalPrice}
            />
        )
    }
}

export default MainContent