import React from 'react';

function PurchaseData(props) {
    return (
            <ul className='row list-group mb-5'>
                <li className='col text-alert fw-bold list-group-item'>{props.title}</li>
                {props.list.map((element)=>{
                    return <li className='col list-group-item list-group-item-info'>
                        {
                            `${element.gr.name}: ${element.gr.quantity} * ₪${element.gr.price} = ₪${element.gr.quantity*element.gr.price}`
                        }
                    </li>
                })}
                <li className='col list-group-item list-group-item-dark fw-bold'>Total amount to be payed: ₪{props.totalPrice(props.list)}</li>
            </ul>
    );
}

export default PurchaseData;