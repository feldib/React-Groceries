import React from 'react';
import PurchaseData from './PurchaseData';

function Receipt(props) {
    return (
        <div className='row mx-auto'>
                <PurchaseData 
                    history = {props.history}
                    totalPrice = {props.totalPrice}
                    title = "Receipt"
                    list = {[...props.history].pop()}
                />
                <button className='col-3 px-auto btn btn-success' onClick={()=>{props.setShowReceipt(false)}}>Back to shop</button>
            </div>
    );
}

export default Receipt;