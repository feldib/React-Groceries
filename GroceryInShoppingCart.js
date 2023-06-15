import React from 'react'

function GroceryInShoppingCart(props) {
    return (
            <tr className='table-primary' onClick={()=>{
                props.takeFromCart(props.index)
            }}>
                <td>
                    <img 
                    style={{
                        width: 70,
                        height: 70,
                        objectFit: "cover"
                    }}
                    className='img-fluid' 
                    src={props.imgURL} 
                    />
                </td>
                <td>{props.name}</td>
                <td>₪{props.price*props.quantity}</td>
                <td>{props.quantity}</td>
            </tr>
        )
}

export default GroceryInShoppingCart;