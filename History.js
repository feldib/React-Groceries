import React from 'react'
import PurchaseData from './PurchaseData';

function History(props) {
    function Content(){
        if(props.history.length>0){
            return props.history.map((onePurchase, index)=>{
                return <PurchaseData 
                            history = {props.history}
                            totalPrice = {props.totalPrice}
                            title = {`${index+1}. order`}
                            list = {onePurchase}
                        />
                }
            )
        }else{
            return <h3 className='row my-5 tw-'>Time to buy :)</h3>
        }
    }
    return (
        <div className='row mx-auto'>
            <Content />
            <button 
                className='col-3 px-auto btn btn-danger mb-4 pb-4'
                onClick={()=>{
                    props.setHistory([])
                }}
            >Delete History</button>
        </div>
    )
}

export default History