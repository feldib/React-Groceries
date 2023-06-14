import React from 'react'
import GroceryInCatalog from './GroceryInCatalog'
import GroceryInShoppingCart from './GroceryInShoppingCart'

function App() {
    const [groceriesInCatalog, setGroceriesInCatalog] = React.useState(
        [
            new Grocery("", "Garlic bread", 30, 8),
            new Grocery("", "Butter", 50, 4),
            new Grocery("", "Gefillte Fish", 23, 1),
            new Grocery("", "Canned Beans", 11, 6),
            new Grocery("", "Corn", 44, 12),
            new Grocery("", "Elephant meat", 1100, 4),
            new Grocery("", "Peanuts", 100, 44),
        ]
    )
    const [groceriesInShoppingCart, setgroceriesInShoppingCart] = React.useState([])
    function Grocery(imgURL, name, price, quantity){
        this.imgURL = imgURL
        this.name=name
        this.price=price
        this.quantity=quantity
    }
    function addToShoppingList(gr, indexOfClickedGrocery){
        let presentInList = false
        let newList = groceriesInShoppingCart.map((element)=>{
                if(element.index === indexOfClickedGrocery){
                    presentInList = true
                    console.log("present")
                    return {gr: {...element.gr, quantity: element.gr.quantity+1}, index: element.index}
                }else{
                    return element
                }
            })
        if(!presentInList){
            newList = [
                ...newList,
                {gr: {...gr, quantity: 1}, index: indexOfClickedGrocery}
            ]
        }
        console.log(newList)
        setgroceriesInShoppingCart(newList)
    }
    function putToCart(indexOfClickedGrocery){
        const newList = groceriesInCatalog.map((gr, index)=>{
            if(index===indexOfClickedGrocery){
                if(gr.quantity>0){
                    addToShoppingList(gr, indexOfClickedGrocery)
                    return {...gr, quantity: gr.quantity-1}
                }
                else{
                    return gr
                }
            }else{
                return gr
            }
        })
        setGroceriesInCatalog(newList)
    }
    function takeFromCart(indexOfClickedGrocery){
        let newList = groceriesInShoppingCart.map((element)=>{
        if(element.index === indexOfClickedGrocery){
                setGroceriesInCatalog(
                    groceriesInCatalog.map((gr, index)=>{
                        if(index === element.index){
                            return {...gr, quantity: gr.quantity+1}
                        }else{
                            return gr
                        }
                    })
                )
                return {gr: {...element.gr, quantity: element.gr.quantity-1}, index: element.index}
            }else{
                return element
            }
        })
        newList = newList.filter((element)=>{
            return element.gr.quantity !== 0
        })
        setgroceriesInShoppingCart(newList)
    }
    function getCatalogRows(){
        return groceriesInCatalog.map((gr, index)=>{
            return <GroceryInCatalog 
                    index={index}
                    imgURL={gr.imgURL}
                    name={gr.name}
                    quantity={gr.quantity}
                    price={gr.price}
                    putToCart={putToCart}
                />
        })         
    }
    function getShoppingCartRows(){
        return groceriesInShoppingCart.map((element)=>{
            return <GroceryInShoppingCart 
                    index={element.index}
                    imgURL={element.gr.imgURL}
                    name={element.gr.name}
                    quantity={element.gr.quantity}
                    price={element.gr.price}
                    takeFromCart={takeFromCart}
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
                        {getCatalogRows()}
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
                            {getShoppingCartRows()}
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