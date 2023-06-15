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
            <td>
                <img 
                    style={{
                        width: 70,
                        height: 70,
                        objectFit: "cover"
                    }}
                    className='img-fluid img-thumbnail' 
                    src={props.imgURL} 
                /> 
            </td>
            <td className={isDisabled}>{props.name}</td>
            <td>₪{props.price}</td>
            <td>{props.quantity}</td>
        </tr>
    )
}

export default GroceryInCatalog