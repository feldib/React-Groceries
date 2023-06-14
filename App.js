import React from 'react'
import GroceryInCatalog from './GroceryInCatalog'

function App() {
    const [groceriesInCatalog, setGroceriesInCatalog] = React.useState(
        [
            new Grocery("", "Garlic bread", 30, 8),
            new Grocery("", "Garlic bread", 30, 8)
        ]
    )
    function Grocery(imgURL, name, price, quantity){
        this.imgURL = imgURL
        this.name=name
        this.price=price
        this.quantity=quantity
    }
    function decrementGrocery(indexOfClickedGrocery){
        const newList = groceriesInCatalog.map((gr, index)=>{
            if(index===indexOfClickedGrocery){
                return {...gr, quantity: gr.quantity-1}
            }else{
                return gr
            }
        })
        setGroceriesInCatalog(newList)
    }
    function getGroceryRows(list){
        return list.map((gr, index)=>{
            return <GroceryInCatalog 
                    index={index}
                    imgURL={gr.imgURL}
                    name={gr.name}
                    quantity={gr.quantity}
                    price={gr.price}
                    decrementGrocery={decrementGrocery}
                />
        })         
    }
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
                        {getGroceryRows(groceriesInCatalog)}
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