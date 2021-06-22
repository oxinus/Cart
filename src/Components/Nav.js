import React, {useState} from 'react';
import Cart from './Cart';
import Home from './Home';
import About from './About';
import NotFound from './NotFound';
import {BrowserRouter as Router, NavLink, Route, Switch} from 'react-router-dom';

const Nav = ({product, setProduct}) => {
    const [filterList, setFilterList] = useState ([]);
  const [counter , setCounter] = useState (0)
  const [notfoundCheck, setNotfoundCheck] = useState(false);
  const notfoundHandler =() => {
      setNotfoundCheck(true)
  }
    return (
        <>
        {notfoundCheck ? <NotFound /> : <nav>    
                <Router>
                    <ul className='nav-ul'>
                        <li >
                        <NavLink activeClassName='active' className='nav-link' to='/' >Home</NavLink>
                        </li>

                        <li>
                            <NavLink activeClassName='active' className='nav-link' to='/about'>About</NavLink>
                        </li>

                        <li><i className="fa fa-shopping-cart fa-sm"></i>
                            <NavLink activeClassName='active' className='nav-link' to='/cart'>Cart({counter})</NavLink>
                        </li>
                    </ul>
                    <Switch>
                        <Route exact path='/'>
                            <Home filterList={filterList}
                            setFilterList={setFilterList} product={product}
                             setProduct={setProduct} setCounter={setCounter}
                             counter={counter} />
                        </Route>
                        <Route exact path='/about'>
                            <About />
                        </Route>
                        <Route exact path='/cart'>
                            <Cart filterList={filterList} setFilterList={setFilterList}
                            counter={counter} setCounter={setCounter}  
                            product={product} setProduct={setProduct}/>
                        </Route>
                        <Route>
                            {notfoundHandler}
                        </Route>
                    </Switch>
                </Router>
            </nav>}    
        </>        
    )
}

export default Nav
