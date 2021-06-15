import React from 'react';
import Button from './Button';

const Home = ({filterList, setFilterList, product, setProduct, counter,setCounter}) => {
    return (
        <div>
            <div className='home-container'>
                <div>
                    <h1>Store</h1>
                </div>
                <div className='products-grid'>
                    {product.map((item) => {
                        return (
                            <div className="card" key={item.id}>
                                <img className='product-img' src={item.img} alt='' style={{paddingBottom:'20px'}}/>
                                <p>{item.name}</p>
                                <h3>${item.price}</h3>
                                <Button item={item}
                                filterList={filterList} setFilterList={setFilterList} 
                                product={product} setProduct={setProduct} 
                                setCounter={setCounter} counter={counter} /> 
                            </div>)}
                        )}
                </div> 
            </div>
        </div>
    )
}
export default Home;
