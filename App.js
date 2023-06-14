import React from 'react'

function App() {
    return (
        <div className='container'>
            <header className='mx-4 my-1 row'>
                <h1 className='col-12'>Groceries</h1>
            </header>
            <div className='row mt-4 justify-content-around align-items-start'>
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
                        <tr className='table-primary'>
                            <td>place_of_image</td>
                            <td>Garlic bread</td>
                            <td>30</td>
                            <td>8</td>
                        </tr>
                    </table>
                </div>
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
                        </thead>
                    </table>
                </div>
            </div>
            <footer className='fixed-bottom mx-4 row'>
                <p className='col-12'>14.06.2023 Benjámin Feldmájer</p>
            </footer>
        </div>
    )
}

export default App