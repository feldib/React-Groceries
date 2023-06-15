import React from 'react'
import GroceryInCatalog from './GroceryInCatalog'
import GroceryInShoppingCart from './GroceryInShoppingCart'
import MainContent from './MainContent'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

function App() {
    const [groceriesInCatalog, setGroceriesInCatalog] = React.useState(
        [
            new Grocery("https://www.ambitiouskitchen.com/wp-content/uploads/2023/02/Garlic-Bread-4-750x750.jpg", "Garlic bread", 30, 8),
            new Grocery("https://cdn.britannica.com/27/122027-050-EAA86783/Butter.jpg?w=400&h=300&c=crop", "Butter", 50, 4),
            new Grocery("https://assets.epicurious.com/photos/57bb35a1df05218810c52150/master/w_1000,h_575,c_limit/classic-gefilte-fish.jpg", "Gefillte Fish", 23, 1),
            new Grocery("https://www.marthastewart.com/thmb/At_ND1kui3zsWpwfSEyoBIp-Qxk=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/whitebeans025-md110800-sq-onecms-27ffb1f786da4ec3ae6a70728e3a29e0.jpg", "Canned Beans", 11, 6),
            new Grocery("https://www.allrecipes.com/thmb/DgFVZ9PgNfKIVkMqT_2JDYUyyoE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/222352-jamies-sweet-and-easy-corn-on-the-cob-rae-1x1-1-b9082581de2e4f34b3271f6646bcc7c6.jpg", "Corn", 44, 12),
            new Grocery("https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcTE-wD0yTVtZJTsXTVyZ2BL3a0i6XsrQy1zZ7j5H2To3asMr2ddcKzBkfwMZikSnf_kZd-yv9hZxVXcP3E", "Elephant meat", 1100, 4),
            new Grocery("https://d131k5wuh4trw5.cloudfront.net/uploads/9-1-1024x1024.png", "Peanuts", 100, 44),
        ]
    )
    const [groceriesInShoppingCart, setgroceriesInShoppingCart] = React.useState([])
    const [showReceipt, setShowReceipt] = React.useState(false)
    const [history, setHistory] = React.useState([])

    // {groceriesInShoppingCart,
    // totalPrice}

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
        <Router>
            <div className='container'>
            <header className='mx-4 my-1 row'>
                <h1 className='col-12'>Beni's Corner Grocery Shop</h1>
            </header>
            <Routes>
                <Route exact path="/" element={
                    <MainContent 
                        showReceipt={showReceipt}
                        getCatalogRows = {getCatalogRows}
                        getShoppingCartRows = {getShoppingCartRows}
                        groceriesInShoppingCart = {groceriesInShoppingCart}
                        setShowReceipt = {setShowReceipt}
                        setgroceriesInShoppingCart = {setgroceriesInShoppingCart}
                        setHistory={setHistory}
                        history={history}
                    />
                    
                }
                />
            </Routes>
            <footer className='bg-light fixed-bottom mx-3 row justify-content-around fw-light'>
                <p className='col-12'>14.06.2023 Benjámin Feldmájer</p>
            </footer>
        </div>
        </Router>
        
    )
}

export default App