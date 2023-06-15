import React from 'react';

function Receipt(props) {
    return (
        <div className='row mx-auto'>
                <ul className='list-group'>
                <li className='col text-alert fw-bold list-group-item'>Receipt</li>
                {props.groceriesInShoppingCart.map((element)=>{
                    return <li className='col list-group-item list-group-item-info'>
                        {
                            `${element.gr.name}: ${element.gr.quantity} * ${element.gr.price}$ = ${element.gr.quantity*element.gr.price}$`
                        }
                    </li>
                })}
                <li className='col list-group-item list-group-item-dark'>Total amount to be payed: {props.totalPrice()}</li>
                </ul>
                
            </div>
    );
}

export default Receipt;