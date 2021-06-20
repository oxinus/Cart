import React from 'react';

const Button = ({item, filterList, setFilterList, product, setProduct, counter, setCounter}) => {
    const buttonhandler =() => {
        if (item.check === false){
            setCounter (counter + 1)
            const addToCart = product.find(element => element.id === item.id ) 
            setFilterList ([...filterList, addToCart])
        } else{
            setCounter (counter -1)
            let newfilterList = filterList.filter(function (ele) {
                return ele.id !== item.id
            })
            setFilterList(newfilterList)
        }
        const newProduct = product.map (function (row) {
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
