import React from 'react'

function CatalogTable(props) {
    return (
        <div className='col-4 mr-2'>
            <table className='table table-dark caption-top'>
                <caption>Catalog</caption>
                <thead>
                    <tr>
                        <th scope="col">Image</th>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Quantity</th>
                    </tr>
                </thead>
                {props.getCatalogRows()}
            </table>
        </div>
    )
}

export default CatalogTable