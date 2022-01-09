import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { saveShipping } from '../../actions/userActions';
import CheckoutSteps from '../../components/checkout/CheckoutSteps';
import { Link } from 'react-router-dom';
import {useHistory} from "react-router-dom";

const ShippingContainer = props => {
  const history = useHistory();

   const dispatch = useDispatch();
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [country, setCountry] = useState('');
  const { userInfo } = useSelector(state => state.user);
  const redirect = props.location.search ? props.location.search.split('=')[1] : '/';

  // if (userInfo.user.shipping) {
  //   props.history.push('/payment');
  // }

  // const submitHandler = event => {
  //   event.preventDefault();
  //   dispatch(saveShipping( address, city, postalCode, country));
  //   props.history.push('/payment');
  // };
  const shippingHandler = () => {
    props.history.push('/payment?redirect=shipping');
  };

  async function submitHandler(event){
    event.preventDefault()

    const response =  fetch('http://localhost:1337/api/saveShipping' , {
      method : 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        address,
        city,
        postalCode,
        country,
      }),
    })
    //onst data = await response.json()
    saveShipping( address, city, postalCode, country);
    
      history.push('/payment')
    
    

}

  return (
    <div>
      <CheckoutSteps step1 step2 />
      <div className='form'>
        <form onSubmit={submitHandler}>
          <ul className='form-container'>
            <li>
              <h2>Shipping</h2>
            </li>
            <li>
              <label htmlFor='address'>Address</label>
              <input 
              type='text' 
              required name='address' 
              id='address' 
              onChange={e => setAddress(e.target.value)} />
            </li>
            <li>
              <label htmlFor='city'>City</label>
              <input 
              type='text' 
              required name='city' 
              id='city' 
              onChange={e => setCity(e.target.value)} />
            </li>
            <li>
              <label htmlFor='postalCode'>Postal Code</label>
              <input
                type='text'
                required name='postalCode'
                id='postalCode'
                onChange={e => setPostalCode(e.target.value)}
              />
            </li>
            <li>
              <label htmlFor='country'>Country</label>
              <input 
              type='text' 
              required name='country' 
              id='country' 
              onChange={e => setCountry(e.target.value)} />
            </li>

            <Link to ={'/payment'}>
              <button onClick={submitHandler} type='submit' className='button primary'>
                Continue
              </button>
            </Link>
          </ul>
         </form>
      </div>
    </div>
  );
};

export default ShippingContainer;
