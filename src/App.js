import React , {useState} from 'react';
import './App.css';
import {Nav} from './Components/Nav'
import {v4 as uuidv4} from 'uuid';

// initial context api ------------
export const productContext = React.createContext();
// ------------------------------------------

export const App =() =>{
  const [product, setProduct] = useState([
    {
      img: '/img/Products/1.jpg' ,
      name: 'Green Shirt' ,
      price: 35,
      id: uuidv4(),   
      counter: 1,
      subtotal : 35,
      check : false
    },
    {
      img :'img/Products/2.jpg',
      name: 'Trekking Shirt',
      price: 26,
      id: uuidv4(), 
      counter: 1,
      subtotal : 26,
      check : false   
    },
    {
      img :'/img/Products/3.jpg',
      name: 'Dark green Shirt',
      price: 32,
      id: uuidv4(),    
      counter: 1,
      subtotal : 32,
      check : false   
    },
    {
      img :'/img/Products/4.jpg',
      name: 'T-Shirt',
      price: 10,
      id: uuidv4(),
      counter: 1,
      subtotal : 10,
      check : false   
    },
    {
      img :'/img/Products/5.jpg',
      name: 'Casual T-Shirt',
      price: 41,
      id: uuidv4(),
      counter: 1,
      subtotal : 41,
      check : false   
    },
    {
      img :'/img/Products/6.jpg',
      name: 'Father & Son T-Shirt',
      price: 27,
      id: uuidv4(),
      counter: 1,
      subtotal : 27,
      check : false   
    },
    {
      img :'/img/Products/7.jpg',
      name: 'Funny T-Shirt',
      price: 49,
      id: uuidv4(),
      counter: 1,
      subtotal : 49,
      check : false   
    },
    {
      img :'/img/Products/8.jpg',
      name: 'Red Polo T-Shirt',
      price: 37,
      id: uuidv4(),
      counter: 1,
      subtotal : 37,
      check : false   
    },
    {
      img :'/img/Products/9.jpg',
      name: 'O-Neck Boys T-Shirt',
      price: 61,
      id: uuidv4(),
      counter: 1,
      subtotal : 61,
      check : false   
    }
  ])
  return (

    // create context api provider to send states and dispatcher to other component
    <productContext.Provider value={[product, setProduct]}>
      <div className='container'>
        <Nav />
      </div>
    </productContext.Provider>
    // ---------------------------------------------
  );
}
