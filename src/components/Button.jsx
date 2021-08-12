import React, {useContext} from 'react';
import {productContext} from '../App';
import {filterContext, counterContext} from './Nav';



const Button = ({item}) => {

    // get the states from nav and app component 
    const products = useContext(productContext)
    const counters = useContext(counterContext)
    const filters = useContext(filterContext)
    // --------------------------------------------


    // the first part of list is related to state and the secont part for setting states
    const product = products[0]
    const setProduct = products[1]
    const counter = counters[0]
    const setCounter = counters[1]
    const filterList = filters[0]
    const setFilterList = filters[1]
    // ----------------------------------------

    const buttonhandler =() => {
        if (item.check === false){
            setCounter (counter + 1)
            const addToCart = product.find(element => element.id === item.id ) 
            setFilterList ([...filterList, addToCart])
        } else{
            setCounter (counter -1)
            let newfilterList = filterList.filter((ele) => {
                return ele.id !== item.id
            })
            setFilterList(newfilterList)
        }
        const newProduct = product.map ((row) => {
            if(row.id === item.id){
                return {
                    img : row.img,
                    name: row.name,
                    price: row.price,
                    id: row.id,
                    counter: row.counter,
                    subtotal : row.subtotal,
                    check : !row.check   
                }
            } else{
                return row
            }
        })
        setProduct(newProduct)
    }
    return (
        <div>
            <button type='button' className={`cart-btn ${item.check ? "remove-btn" : "add-btn"}`} onClick={buttonhandler}>
                {item.check ? 'remove from cart' : 'add to cart'}
            </button>
        </div>
    )
}
export default Button;
