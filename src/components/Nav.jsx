import React, {useState} from 'react';
import {Cart} from '../pages/Cart';
import Home from '../pages/Home';
import About from '../pages/About';
import NotFound from '../pages/NotFound';
import {BrowserRouter as Router, NavLink, Route, Switch} from 'react-router-dom';

// initial context api --------------------------------
export const filterContext = React.createContext();
export const counterContext = React.createContext();
// ------------------------

export const Nav = () => {

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

                            {/* send states to home component with context api */}
                            <filterContext.Provider value={[filterList, setFilterList]}>
                                <counterContext.Provider value={[counter, setCounter]}>
                                    <Home />
                                </counterContext.Provider>
                            </filterContext.Provider>
                            {/* --------------------------- */}

                        </Route>
                        <Route exact path='/about'>
                            <About />
                        </Route>
                        <Route exact path='/cart'>

                            {/* send states to cart component with context api */}
                            <filterContext.Provider value={[filterList, setFilterList]}>
                                <counterContext.Provider value={[counter, setCounter]}>
                                    <Cart />
                                </counterContext.Provider>
                            </filterContext.Provider>
                            {/* ------------------------------------ */}

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

