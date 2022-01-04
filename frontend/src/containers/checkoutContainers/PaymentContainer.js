import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { savePayment } from '../../actions/userActions';
import CheckoutSteps from '../../components/checkout/CheckoutSteps';

const PaymentContainer = props => {
  const dispatch = useDispatch();
  const [paymentMethod, setPaymentMethod] = useState('');
  const { userInfo } = useSelector(state => state.user);

  // if (userInfo.user.payment) {
  //   props.history.push('/placeorder');
  // }

  // const submitHandler = event => {
  //   event.preventDefault();
  //   dispatch(savePayment(userInfo.user.id, paymentMethod));
  //   props.history.push('/placeorder');
  // };
  const placeorderHandler = () => {
    props.history.push('/placeorder?redirect=shipping');
  };

  return (
    <div>
      <CheckoutSteps step1 step2 step3 />
      <div className='form'>
        {/* <form onSubmit={submitHandler}> */}
          <ul className='form-container'>
            <li>
              <h2>Payment</h2>
            </li>
            <li>
              <div>
                <input
                  type='radio'
                  name='paymentMethod'
                  id='paymentMethod'
                  value='PayPal'
                  onChange={e => setPaymentMethod(e.target.value)}
                />
                <label htmlFor='paymentMethod'>PayPal</label>
                <input
                  type='radio'
                  name='paymentMethod'
                  id='paymentMethod'
                  value='VisaCard'
                  onChange={e => setPaymentMethod(e.target.value)}
                />
                <label htmlFor='paymentMethod'>VisaCard</label>
                <input
                  type='radio'
                  name='paymentMethod'
                  id='paymentMethod'
                  value='Cash'
                  onChange={e => setPaymentMethod(e.target.value)}
                />
                <label htmlFor='paymentMethod'>Cash on delivery</label>
              </div>
            </li>
            <li>
              <button onClick={placeorderHandler}type='submit' className='button primary'>
                Continue
              </button>
              
            </li>
          </ul>
        {/* </form> */}
      </div>
    </div>
  );
};

export default PaymentContainer;
