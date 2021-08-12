import React, {useContext} from 'react';
import {productContext} from '../App';
import {filterContext, counterContext} from './Nav';
import {checkoutStateContext} from '../pages/Cart';



const Checkout = () => {

    // get the states from nav and app component 
    const products = useContext(productContext)
    const counters = useContext(counterContext)
    const filters = useContext(filterContext)
    // -------------------------------------------

    // the first part of list is related to state and the secont part for setting states
    const setCheckoutstate = useContext(checkoutStateContext)
    const product = products[0]
    const setProduct = products[1]
    const counter = counters[0]
    const setCounter = counters[1]
    const filterList = filters[0]
    const setFilterList = filters[1]
    // ---------------------------------

    let total = 0
    filterList.filter ((row) => {
        return total += row.subtotal
    })
    const checkoutHandler =(e) => {
        const productReset = product.map ( (row) => {
            return {
                img :row.img,
                name: row.name,
                price: row.price,
                id: row.id,  
                counter: row.counter , 
                subtotal: row.subtotal,
                check : false
            }  
        })
        setCounter(0)
        setFilterList([])
        setProduct(productReset)
        if (e.target.name === 'checkout'){
            setCheckoutstate(true)
        } else{
            setCheckoutstate(false)
        }
    }
    return (
        <div className='checkout-container'>
            <p className='total-item'>Total Items</p>
            <h2 className='total-counter'>{counter}</h2>
            <p className='total-payment'>Total Payment</p>
            <h2 className='total-value'>${total}</h2>
            <hr />
            <div className='payment-buttons'>
                <button className='checkout-btn' onClick={checkoutHandler} name='checkout'>checkout</button>
                <button className='clear-btn' onClick={checkoutHandler} name='clear'>clear</button>
            </div>
        </div>
    )
}
export default Checkout