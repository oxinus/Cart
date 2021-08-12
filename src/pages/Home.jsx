import React, {useContext} from 'react';
import Button from '../components/Button';
import {productContext} from '../App';


const Home = () => {

    // get the product state from app componenet
    const products = useContext(productContext)
    const product = products[0]
    // ------------------------------

    return (
        <div>
            <div className='home-container'>
                <div>
                    <h1>Store</h1>
                </div>
                <ul className='products-list'>
                    {product.map((item) => {
                        return (
                            <li key={item.id}>
                                <img className='product-img' src={item.img} alt=''/>
                                <p>{item.name}</p>
                                <h3>${item.price}</h3>
                                <Button item={item} /> 
                            </li>)}
                        )}
                </ul>
            </div>
        </div>
    )
}
export default Home;
