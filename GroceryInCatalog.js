import React from 'react'

function GroceryInCatalog(props){
    return (
        <tr className='table-primary' onClick={()=>{
            props.decrementGrocery(props.index)
        }}>
            <td><img src={props.imgURL} /></td>
            <td>{props.name}</td>
            <td>{props.price}</td>
            <td>{props.quantity}</td>
        </tr>
    )
}

export default GroceryInCatalog