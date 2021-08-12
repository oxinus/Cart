import React, {useContext} from 'react';
import Button from './Button';
import {productContext} from '../App';


const Home = ({filterList, setFilterList, counter,setCounter}) => {
    const products = useContext(productContext)
    return (
        <div>
            <div className='home-container'>
                <div>
                    <h1>Store</h1>
                </div>
                {/* <div className='products-grid'> */}
                <ul className='products-list'>
                    {products[0].map((item) => {
                        return (
                            <li key={item.id}>
                                <img className='product-img' src={item.img} alt=''/>
                                <p>{item.name}</p>
                                <h3>${item.price}</h3>
                                <Button item={item}
                                filterList={filterList} setFilterList={setFilterList} 
                                 
                                setCounter={setCounter} counter={counter} /> 
                            </li>)}
                        )}
                </ul>
                {/* </div>  */}
            </div>
        </div>
    )
}
export default Home;
