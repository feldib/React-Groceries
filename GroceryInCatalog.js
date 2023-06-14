import React from 'react'

function GroceryInCatalog(props){
    let isDisabled=""
    if(props.quantity===0){
        isDisabled="text-decoration-line-through"
    }
    return (
        <tr className='table-primary' onClick={()=>{
            props.putToCart(props.index)
        }}>
            <td><img src={props.imgURL} /></td>
            <td className={isDisabled}>{props.name}</td>
            <td>{props.price}</td>
            <td>{props.quantity}</td>
        </tr>
    )
}

export default GroceryInCatalog