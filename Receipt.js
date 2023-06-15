import React from 'react';

function Receipt(props) {
    function onBackToShop(){
        props.setgroceriesInShoppingCart([])
        props.setShowReceipt(false)
    }
    return (
        <div className='row mx-auto'>
                <ul className='list-group mb-5'>
                <li className='col text-alert fw-bold list-group-item'>Receipt</li>
                {props.groceriesInShoppingCart.map((element)=>{
                    return <li className='col list-group-item list-group-item-info'>
                        {
                            `${element.gr.name}: ${element.gr.quantity} * ₪${element.gr.price} = ₪${element.gr.quantity*element.gr.price}`
                        }
                    </li>
                })}
                <li className='col list-group-item list-group-item-dark fw-bold'>Total amount to be payed: ₪{props.totalPrice()}</li>
                </ul>
                <button className='col-3 px-auto btn btn-success' onClick={onBackToShop}>Back to shop</button>
            </div>
    );
}

export default Receipt;