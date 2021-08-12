import React, {useContext} from 'react';
import {productContext} from '../App';


const Checkout = ({counter, filterList, setFilterList, setCounter, checkoutState, setCheckoutstate}) => {
    const products = useContext(productContext)
    let total = 0
    filterList.filter ((row) => {
        return total += row.subtotal
    })
    const checkoutHandler =(e) => {
        const productReset = products[0].map ( (row) => {
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
        products[1](productReset)
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