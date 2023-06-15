import React from 'react'

function ShoppingCartTable(props) {
    return (
        <div className='col-4'>
            <table className='table table-dark caption-top'>
                <caption>Shopping Cart</caption>
                <thead>
                    <tr>
                        <th scope="col">Image</th>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Quantity</th>
                    </tr>
                    {props.getShoppingCartRows()}
                </thead>
            </table>
        </div>
    )
}

export default ShoppingCartTable