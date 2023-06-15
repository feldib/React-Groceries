import React from 'react'
import CatalogTable from './CatalogTable'
import ShoppingCartTable from './ShoppingCartTable'

function ShoppingContent(props) {
    function onOrder(){
        props.setHistory([
            ...props.history, props.groceriesInShoppingCart
        ])
        props.setgroceriesInShoppingCart([])
        props.setShowReceipt(true)
    }
    return (
        <>
            <div className='row mt-4 justify-content-around align-items-start'>
                <CatalogTable getCatalogRows={props.getCatalogRows}/>
                <ShoppingCartTable getShoppingCartRows={props.getShoppingCartRows} />
            </div>

            <div className='row justify-content-around mb-5'>
                <div className='col-5'>
                    <h4>
                        Total cost: ₪{props.totalPrice(props.groceriesInShoppingCart)}
                    </h4>
                </div>
                <button className='col-2 px-auto btn btn-success' onClick={onOrder}>Order</button>
            </div>
        </>
    )
}

export default ShoppingContent