import React, {useContext} from 'react';
import {productContext} from '../App';


const Button = ({item, filterList, setFilterList, counter, setCounter}) => {
    const products = useContext(productContext)
    const buttonhandler =() => {
        if (item.check === false){
            setCounter (counter + 1)
            const addToCart = products[0].find(element => element.id === item.id ) 
            setFilterList ([...filterList, addToCart])
        } else{
            setCounter (counter -1)
            let newfilterList = filterList.filter((ele) => {
                return ele.id !== item.id
            })
            setFilterList(newfilterList)
        }
        const newProduct = products[0].map ((row) => {
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
        products[1](newProduct)
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
