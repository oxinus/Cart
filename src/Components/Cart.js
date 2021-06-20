import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';
import Checkout from './Checkout';

const Cart = ({filterList, setFilterList, counter, setCounter, product, setProduct}) => {
    const [checkoutState, setCheckoutstate] = useState(false);
    const Increament =(row) => {
        const counterplus = filterList.map( function (ele) {
            if (ele.id === row.id) {
                return {
                    img :ele.img,
                    name: ele.name,
                    price: ele.price,
                    id: ele.id,  
                    counter: ele.counter +1, 
                    subtotal: ele.subtotal + ele.price,
                    check : ele.check
                }
            } else{
                return ele
            }
        })
        setCounter (counter +1)
        setFilterList (counterplus)
    }
    const Decreament =(row) => {
        if (row.counter === 1){
            const product_checkhandler = product.map(function (element) {
                if (element.id === row.id){
                    return {
                        img : element.img ,
                        name: element.name,
                        price: element.price,
                        id: element.id,
                        counter: element.counter,
                        subtotal : element.subtotal,
                        check : !element.check
                    }
                }else{
                    return element
                }
            })
            setProduct(product_checkhandler)
            const trashHandler = filterList.filter (function (item) {
                return item.id !== row.id
            })
            setFilterList(trashHandler)
        }
        else{
        const counterminus = filterList.map( function (ele) {
            if (ele.id === row.id) {
                return {
                    img :ele.img,
                    name: ele.name,
                    price: ele.price,
                    id: ele.id,  
                    counter: ele.counter -1, 
                    subtotal: ele.subtotal - ele.price,
                    check : ele.check
                }
            } else{
                return ele
            }
        })
        setFilterList (counterminus)
        }
        setCounter (counter -1)
    }
    return (
        <div>
            <h1 className='shopping-cart'>Sopping Cart</h1>
            {counter === 0 ? <div className='empty-cart'>Cart is Empty</div> : <div className='Cart-container'>
                <table>
                    <thead>
                        <tr>
                            <th className='product-title'>Product  </th>
                            <th className='product-title'>Price </th>
                            <th className='quantity-title'>Qty</th>
                            <th className='product-title'>Subtotal</th>
                        </tr>
                    </thead>
                        {filterList.map((row) => {
                            return (
                                <tbody key={row.id}>
                                    <tr>
                                        <td className='product-detail'><img src={row.img} alt=''/><p className='product-name'>{row.name}</p></td>
                                        <td><p className='product-price'>${row.price}</p></td>
                                        <td>
                                            <div className='product-quantity'>
                                                <button type='button' className={`minus-button ${row.counter === 1 ? 'trash-icon' : ''}`} 
                                                    onClick={ () => Decreament(row) }>
                                                    <i className= {`${row.counter === 1 ? 'fa fa-trash trash' : 'fa fa-minus minus' }`}></i>
                                                </button>
                                                <div className='quantity-number'>{row.counter}</div>
                                                <button type='button' className={`plus-button ${row.counter === 5 ? 'disable-add' : ''}`}
                                                    onClick={ () => Increament(row)}><i className='fa fa-plus plus'></i>
                                                </button>
                                            </div>
                                        </td>
                                        <td className='product-subtotal'>${row.subtotal}</td>
                                    </tr>
                                </tbody>
                            )
                        })}
                </table>
                <Checkout counter={counter} filterList={filterList}
                setFilterList={setFilterList} setCounter={setCounter}
                product={product} setProduct={setProduct} setCheckoutstate={setCheckoutstate} />
            </div>}
            {checkoutState ?
            <div className='checkout-success'>
                <div className='success-text'> Checkout Successfull</div>
                <button className='buymore-btn'><NavLink to='/' className='buymore-navlink'>Buy More</NavLink></button>
            </div> 
            : ''}
        </div>
    )
}
export default Cart


                            