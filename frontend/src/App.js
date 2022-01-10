import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { filterProductsByCategory } from './actions/productActions';
// Main Containers
import HomeContainer from './containers/HomeContainer';
import ProductContainer from './containers/ProductContainer';
// Cart & Checkout Containers
import CartContainer from './containers/checkoutContainers/CartContainer';
import ShippingContainer from './containers/checkoutContainers/ShippingContainer';
import PaymentContainer from './containers/checkoutContainers/PaymentContainer';
import PlaceOrderContainer from './containers/checkoutContainers/PlaceOrderContainer';
import OrderContainer from './containers/checkoutContainers/OrderContainer';
// User Containers
import SigninContainer from './containers/userContainers/SigninContainer';
import RegisterContainer from './containers/userContainers/RegisterContainer';
import ProfileContainer from './containers/userContainers/ProfileContainer';

// Admin Containers
import ProductsContainer from './containers/adminContainers/ProductsContainer';
 import OrdersContainer from './containers/adminContainers/OrdersContainer';

function App() {
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.user.userInfo);
  const { products } = useSelector(state => state.products);
  const { cartItems } = useSelector(state => state.cart);

  const openMenu = () => {
    document.querySelector('.sidebar').classList.add('open');
  };

  const closeMenu = () => {
    document.querySelector('.sidebar').classList.remove('open');
  };

  const categoryHandler = category => {
    console.log(products)
    closeMenu();
    dispatch(filterProductsByCategory(products, category));
  };
  

  return (
    <BrowserRouter>
      <div className='grid-container'>
        {/* Header Section */}
        <header className='header'>
          <div className='brand'>
            <button onClick={openMenu}>&#9776;</button>
            <Link to='/'>P&O-Commerce </Link>
          </div>
          <div className='header-links'>
            <Link to='/cart'>
              Cart {cartItems.length > 0 ? `(Items: ${cartItems.reduce((a, c) => a + c.qty, 0)})` : 'is empty'}
            </Link>
            {localStorage.getItem("user-info")?
            /* {user ? <Link to='/profile'>{user.first_name}</Link> : */
            <Link to='/signin'>Sign out</Link>
           : <Link to='/signin'>
             Sign in
           </Link> }
            {user && user.isAdmin && (
              <div className='dropdown'>
                <Link to='/orders'>Admin</Link>
                <ul className='dropdown-content'>
                  <li>
                    <Link to='/orders'>Orders</Link>
                    <Link to='/products'>Products</Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </header>

        {/* Category Section */}
        <aside className='sidebar'>
          <h3>Shopping Categories</h3>
          <button className='sidebar-close-button' onClick={closeMenu}>
            x
          </button>
          <ul className='categories'>
            <li>
              <button type='button' onClick={e => categoryHandler(e.target.innerText)}>
                All
              </button>
            </li>
            <li>
              <button type='button' onClick={e => categoryHandler(e.target.innerText)}>
                Pants Men
              </button>
            </li>
            <li>
              <button type='button' onClick={e => categoryHandler(e.target.innerText)}>
                Tshirts Men
              </button>
            </li>
            <li>
              <button type='button' onClick={e => categoryHandler(e.target.innerText)}>
                Shorts Men
              </button>
            </li>
            <li>
              <button type='button' onClick={e => categoryHandler(e.target.innerText)}>
                Underwear Men
              </button>
            </li>

            <li>
              <button type='button' onClick={e => categoryHandler(e.target.innerText)}>
                Pants Women
              </button>
            </li>
            <li>
              <button type='button' onClick={e => categoryHandler(e.target.innerText)}>
                Dress Women
              </button>
            </li>
            <li>
              <button type='button' onClick={e => categoryHandler(e.target.innerText)}>
                Sport Women
              </button>
            </li>
          </ul>
        </aside>

        
        <div className='content'>
          <main className='main'>
            <Route path='/register' component={RegisterContainer} />
            <Route path='/signin' component={SigninContainer} />
            <Route path='/profile' component={ProfileContainer} />
            <Route path='/products' exact component={ProductsContainer} />
            <Route path='/shipping' component={ShippingContainer} />
            <Route path='/payment' component={PaymentContainer} />
            <Route path='/placeorder' component={PlaceOrderContainer} />
            {/* <Route path='/orders' exact component={OrdersContainer} /> */}
           <Route path='/orders' component={OrderContainer} />
            <Route path='/products/:id' exact component={ProductContainer} />
           <Route path='/cart/:id?' component={CartContainer}/>
            <Route path='/' exact component={HomeContainer} />

          </main>
        </div>

        {/* Footer */}
        <footer className='footer'>Copyright &#169; 2021 Heneine & Loutfi. All rights reserved.</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
